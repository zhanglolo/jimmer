package org.babyfish.jimmer.meta;

import org.apache.commons.lang3.reflect.TypeUtils;
import org.babyfish.jimmer.Draft;
import org.babyfish.jimmer.Immutable;
import org.babyfish.jimmer.meta.sql.Column;
import org.babyfish.jimmer.meta.sql.IdGenerator;
import org.babyfish.jimmer.meta.sql.IdentityIdGenerator;
import org.babyfish.jimmer.meta.sql.SequenceIdGenerator;
import org.babyfish.jimmer.runtime.DraftContext;

import javax.persistence.*;
import java.lang.annotation.Annotation;
import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Modifier;
import java.lang.reflect.Type;
import java.util.*;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReadWriteLock;
import java.util.concurrent.locks.ReentrantReadWriteLock;
import java.util.function.BiFunction;

public class ImmutableType {

    private static final Class<?> TABLE_CLASS;

    private static Map<Class<?>, ImmutableType> positiveCacheMap =
            new WeakHashMap<Class<?>, ImmutableType>();

    private static Map<Class<?>, Void> negativeCacheMap =
            new LRUMap<>();

    private static ReadWriteLock cacheLock =
            new ReentrantReadWriteLock();

    private Class<?> javaClass;

    private ImmutableType superType;

    private BiFunction<DraftContext, Object, Draft> draftFactory;

    private Map<String, ImmutableProp> declaredProps = new LinkedHashMap<>();

    private Map<String, ImmutableProp> props;

    private Map<String, ImmutableProp> selectableProps;

    private ImmutableProp idProp;

    private ImmutableProp versionProp;

    private IdGenerator idGenerator;

    private String tableName;

    ImmutableType(
            Class<?> javaClass,
            ImmutableType superType,
            BiFunction<DraftContext, Object, Draft> draftFactory

    ) {
        this.javaClass = javaClass;
        this.superType = superType;
        this.draftFactory = draftFactory;

        Table table = javaClass.getAnnotation(Table.class);
        tableName = table != null ? table.name() : "";
        if (tableName.isEmpty()) {
            tableName = Utils.databaseIdentifier(javaClass.getSimpleName());
        }
    }

    public static Builder newBuilder(
            Class<?> javaClass,
            ImmutableType superType,
            BiFunction<DraftContext, Object, Draft> draftFactory
    ) {
        return new Builder(javaClass, superType, draftFactory);
    }

    private static Class<?> getImmutableJavaClass(Class<?> javaClass) {
        boolean matched = Arrays.stream(javaClass.getAnnotations()).anyMatch(
                it -> it.annotationType() == Immutable.class ||
                        it.annotationType().getName().equals("javax.persistence.Entity")
        );
        if (matched) {
            return javaClass;
        }
        Class<?> superClass = javaClass.getSuperclass();
        if (superClass != null && superClass != Object.class) {
            Class<?> immutableJavaClass = getImmutableJavaClass(superClass);
            if (immutableJavaClass != null) {
                return immutableJavaClass;
            }
        }
        for (Class<?> interfaceClass : javaClass.getInterfaces()) {
            Class<?> immutableJavaClass = getImmutableJavaClass(interfaceClass);
            if (immutableJavaClass != null) {
                return immutableJavaClass;
            }
        }
        return null;
    }

    public static ImmutableType get(Class<?> javaClass) {
        ImmutableType immutableType = tryGet(javaClass);
        if (immutableType == null) {
            throw new IllegalArgumentException(
                    "Cannot get immutable type for \"" + javaClass.getName() + "\""
            );
        }
        return immutableType;
    }

    public static ImmutableType tryGet(Class<?> javaClass) {

        ImmutableType immutableType;
        Lock lock;

        (lock = cacheLock.readLock()).lock();
        try {
            if (negativeCacheMap.containsKey(javaClass)) {
                return null;
            }
            immutableType = positiveCacheMap.get(javaClass);
        } finally {
            lock.unlock();
        }

        if (immutableType == null) {
            (lock = cacheLock.writeLock()).lock();
            try {
                if (negativeCacheMap.containsKey(javaClass)) {
                    return null;
                }
                immutableType = positiveCacheMap.get(javaClass);
                if (immutableType == null) {
                    immutableType = create(javaClass);
                    if (immutableType != null) {
                        positiveCacheMap.put(javaClass, immutableType);
                    } else {
                        negativeCacheMap.put(javaClass, null);
                    }
                }
            } finally {
                lock.unlock();
            }
        }
        return immutableType;
    }

    private static ImmutableType create(Class<?> javaClass) {
        if (TABLE_CLASS != null && TABLE_CLASS.isAssignableFrom(javaClass)) {
            if (javaClass.getTypeParameters().length != 0) {
                return null;
            }
            Type type = TypeUtils
                    .getTypeArguments(javaClass, TABLE_CLASS)
                    .values()
                    .iterator()
                    .next();
            if (!(type instanceof Class<?>)) {
                return null;
            }
            javaClass = (Class<?>) type;
        }
        Class<?> immutableJavaClass = getImmutableJavaClass(javaClass);
        if (immutableJavaClass == null) {
            return null;
        }
        Class<?> draftClass;
        try {
            draftClass = Class.forName(immutableJavaClass.getName() + "Draft");
        } catch (ClassNotFoundException ex) {
            throw new IllegalArgumentException(
                    "Cannot find draft type for \"" + immutableJavaClass.getName() + "\""
            );
        }
        Class<?> producerClass = Arrays
                .stream(draftClass.getDeclaredClasses())
                .filter(it -> it.getSimpleName().equals("Producer"))
                .findFirst()
                .orElse(null);
        if (producerClass == null) {
            throw new IllegalArgumentException(
                    "Cannot find producer type for \"" + draftClass.getName() + "\""
            );
        }
        Field typeField;
        try {
            typeField = producerClass.getField("TYPE");
        } catch (NoSuchFieldException ex) {
            typeField = null;
        }
        if (typeField == null ||
                !Modifier.isPublic(typeField.getModifiers()) ||
                !Modifier.isStatic(typeField.getModifiers()) ||
                !Modifier.isFinal(typeField.getModifiers()) ||
                typeField.getType() != ImmutableType.class
        ) {
            throw new IllegalArgumentException(
                    "Illegal producer type \"" + producerClass.getName() + "\""
            );
        }
        try {
            return (ImmutableType) typeField.get(null);
        } catch (IllegalAccessException e) {
            throw new AssertionError("Internal bug: Cannot access " + typeField);
        }
    }

    public Class<?> getJavaClass() {
        return javaClass;
    }

    public ImmutableType getSuperType() {
        return superType;
    }

    public BiFunction<DraftContext, Object, Draft> getDraftFactory() {
        return draftFactory;
    }

    public Map<String, ImmutableProp> getDeclaredProps() {
        return declaredProps;
    }

    public ImmutableProp getIdProp() {
        return idProp;
    }

    public ImmutableProp getVersionProp() {
        return versionProp;
    }

    public String getTableName() {
        return tableName;
    }

    public Map<String, ImmutableProp> getProps() {
        Map<String, ImmutableProp> props = this.props;
        if (props == null) {
            if (superType == null) {
                props = declaredProps;
            } else {
                props = new LinkedHashMap<>(superType.getProps());
                for (ImmutableProp declaredProp : declaredProps.values()) {
                    if (props.put(declaredProp.getName(), declaredProp) != null) {
                        throw new ModelException(
                                "The property \"" +
                                        declaredProp +
                                        "\" overrides property of super type, this is not allowed"
                        );
                    }
                }
            }
            this.props = props;
        }
        return props;
    }

    public ImmutableProp getProp(String name) {
        ImmutableProp prop = getProps().get(name);
        if (prop == null) {
            throw new IllegalArgumentException(
                    "There is no property \"" + name + "\" in \"" + this + "\""
            );
        }
        return prop;
    }

    public Map<String, ImmutableProp> getSelectableProps() {
        Map<String, ImmutableProp> selectableProps = this.selectableProps;
        if (selectableProps == null) {
            selectableProps = new LinkedHashMap<>();
            selectableProps.put(getIdProp().getName(), getIdProp());
            for (ImmutableProp prop : getProps().values()) {
                if (!prop.isId() && prop.getStorage() instanceof Column) {
                    selectableProps.put(prop.getName(), prop);
                }
            }
            this.selectableProps = selectableProps;
        }
        return selectableProps;
    }

    void setIdProp(ImmutableProp idProp) {
        this.idProp = idProp;
        GeneratedValue generatedValue = idProp.getAnnotation(GeneratedValue.class);
        if (generatedValue == null) {
            return;
        }
        if (generatedValue.strategy() == GenerationType.AUTO) {
            String generator = generatedValue.generator();
            IdGenerator idGenerator = null;
            String error = null;
            Throwable errorCause = null;
            if (generator.isEmpty()) {
                error = "generator must be specified";
            } else {
                Class<?> idGeneratorType = null;
                try {
                    idGeneratorType = Class.forName(generator);
                } catch (ClassNotFoundException ex) {
                    error = "The class \"" + generator + "\" does not exists";
                }
                if (idGeneratorType != null) {
                    if (!IdGenerator.class.isAssignableFrom(idGeneratorType)) {
                        error = "the class \"" +
                                generator +
                                "\" does not implement \"" +
                                IdGenerator.class.getName() +
                                "\"";
                    }
                    try {
                        idGenerator = (IdGenerator) idGeneratorType.getDeclaredConstructor().newInstance();
                    } catch (InstantiationException | IllegalAccessException | NoSuchMethodException ex) {
                        error = "cannot create the instance of \"" + generator + "\"";
                        errorCause = ex;
                    } catch (InvocationTargetException ex) {
                        error = "cannot create the instance of \"" + generator + "\"";
                        errorCause = ex.getTargetException();
                    }
                }
            }
            if (error != null) {
                throw new ModelException(
                        "Illegal property \"" + idProp + "\" with the annotation @GeneratedValue, " + error,
                        errorCause
                );
            }
            this.idGenerator = idGenerator;
        } else if (generatedValue.strategy() == GenerationType.IDENTITY) {
            this.idGenerator = IdentityIdGenerator.INSTANCE;
        } else if (generatedValue.strategy() == GenerationType.SEQUENCE) {
            String generator = generatedValue.generator();
            String sequenceName;
            if (generator.isEmpty()) {
                sequenceName = tableName + "_ID_SEQ";
            } else if (generator.startsWith(SEQUENCE_PREFIX)) {
                sequenceName = generator.substring(SEQUENCE_PREFIX.length());
            } else {
                SequenceGenerator seqGenerator = Arrays.stream(idProp.getAnnotations(SequenceGenerator.class))
                        .filter(it -> it.name().equals(generator))
                        .findFirst()
                        .orElseGet(null);
                if (seqGenerator == null) {
                    seqGenerator = Arrays.stream(javaClass.getAnnotationsByType(SequenceGenerator.class))
                            .filter(it -> it.name().equals(generator))
                            .findFirst()
                            .orElse(null);
                }
                if (seqGenerator == null) {
                    throw new ModelException(
                            "Illegal property \"" +
                                    idProp +
                                    "\"with annotation @GeneratedValue, " +
                                    "there is no sequence generator whose name is \"" +
                                    generator +
                                    "\""
                    );
                }
                sequenceName = seqGenerator.sequenceName();
            }
            if (sequenceName.isEmpty()) {
                sequenceName = tableName + "_ID_SEQ";
            }
            idGenerator = new SequenceIdGenerator(sequenceName);
        } else {
            throw new ModelException(
                    "Illegal property \"" + idProp + "\" with annotation @GeneratedValue, " +
                            "strategy \"" + generatedValue.strategy() + "\" is not supported"
            );
        }
    }

    void setVersionProp(ImmutableProp versionProp) {
        this.versionProp = versionProp;
    }

    public IdGenerator getIdGenerator() {
        return idGenerator;
    }

    @Override
    public String toString() {
        return javaClass.getName();
    }

    private static final String SEQUENCE_PREFIX = "sequence:";

    public static class Builder {

        private ImmutableType type;

        private String idPropName;

        private String versionPropName;

        Builder(
                Class<?> javaClass,
                ImmutableType superType,
                BiFunction<DraftContext, Object, Draft> draftFactory
        ) {
            this.type = new ImmutableType(javaClass, superType, draftFactory);
        }

        public Builder id(String name, Class<?> elementType) {
            if (!type.javaClass.isAnnotationPresent(Entity.class)) {
                throw new IllegalStateException("Cannot set id for type that is not entity");
            }
            if (idPropName != null) {
                throw new IllegalStateException("id property has been set");
            }
            idPropName = name;
            return add(name, ImmutablePropCategory.SCALAR, elementType, false);
        }
        public Builder version(String name) {
            if (!type.javaClass.isAnnotationPresent(Entity.class)) {
                throw new IllegalStateException("Cannot set version for type that is not entity");
            }
            if (versionPropName != null) {
                throw new IllegalStateException("version property has been set");
            }
            versionPropName = name;
            return add(name, ImmutablePropCategory.SCALAR, int.class, false);
        }

        public Builder add(
                String name,
                ImmutablePropCategory category,
                Class<?> elementType,
                boolean nullable
        ) {
            return add(
                    name,
                    category,
                    elementType,
                    nullable,
                    null
            );
        }

        public Builder add(
                String name,
                ImmutablePropCategory category,
                Class<?> elementType,
                boolean nullable,
                Class<? extends Annotation> associationType
        ) {
            validate();
            if (type.declaredProps.containsKey(name)) {
                throw new IllegalArgumentException(
                        "The property \"" +
                                type.javaClass.getName() +
                                "." +
                                name +
                                "\" is already exists"
                );
            }
            type.declaredProps.put(
                    name,
                    new ImmutableProp(
                            type,
                            name,
                            category,
                            elementType,
                            nullable,
                            associationType
                    )
            );
            return this;
        }

        public ImmutableType build() {
            validate();
            ImmutableType type = this.type;
            type.declaredProps = Collections.unmodifiableMap(type.declaredProps);
            if (idPropName != null) {
                type.setIdProp(type.declaredProps.get(idPropName));
            } else if (type.superType != null) {
                type.setIdProp(type.superType.idProp);
            }
            if (versionPropName != null) {
                type.setVersionProp(type.declaredProps.get(versionPropName));
            } else if (type.superType != null) {
                type.setVersionProp(type.superType.versionProp);
            }
            this.type = null;
            return type;
        }

        private void validate() {
            if (type == null) {
                throw new IllegalStateException("Current ImmutableType.Builder has been disposed");
            }
        }
    }

    private static class LRUMap<K, V> extends LinkedHashMap<K, V> {

        LRUMap() {
            super(200, .75F, true);
        }

        @Override
        protected boolean removeEldestEntry(Map.Entry eldest) {
            return true;
        }
    }

    static {
        Class<?> tableClass;
        try {
            tableClass = Class.forName("org.babyfish.jimmer.sql.ast.table.Table");
        } catch (ClassNotFoundException ex) {
            tableClass = null;
        }
        TABLE_CLASS = tableClass;
    }
}

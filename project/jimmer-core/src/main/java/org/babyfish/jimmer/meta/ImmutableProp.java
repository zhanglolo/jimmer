package org.babyfish.jimmer.meta;

import org.babyfish.jimmer.sql.DissociateAction;
import org.babyfish.jimmer.sql.meta.Storage;

import java.lang.annotation.Annotation;

public interface ImmutableProp {

    ImmutableType getDeclaringType();

    int getId();

    String getName();

    ImmutablePropCategory getCategory();

    Class<?> getElementClass();

    boolean isScalar();

    boolean isScalarList();

    boolean isAssociation();

    boolean isReference();

    boolean isEntityList();

    boolean isNullable();

    <A extends Annotation> A getAnnotation(Class<A> annotationType);

    <A extends Annotation> A[] getAnnotations(Class<A> annotationType);

    Annotation getAssociationAnnotation();

    boolean isTransient();

    boolean hasTransientResolver();

    DissociateAction getDissociateAction();

    @SuppressWarnings("unchecked")
    <S extends Storage> S getStorage();

    boolean isId();

    boolean isVersion();

    ImmutableType getTargetType();

    ImmutableProp getMappedBy();

    ImmutableProp getOpposite();
}

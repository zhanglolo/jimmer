package org.babyfish.jimmer.sql.ast.mutation;

import org.babyfish.jimmer.lang.NewChain;
import org.babyfish.jimmer.lang.OldChain;
import org.babyfish.jimmer.meta.ImmutableProp;
import org.babyfish.jimmer.sql.DissociateAction;
import org.babyfish.jimmer.sql.ast.PropExpression;
import org.babyfish.jimmer.sql.ast.table.Table;

import java.util.function.Consumer;
import java.util.function.Function;

public interface AbstractEntitySaveCommand {

    @NewChain
    AbstractEntitySaveCommand configure(Consumer<Cfg> block);

    interface Cfg {

        @OldChain
        Cfg setMode(SaveMode mode);

        @OldChain
        Cfg setKeyProps(ImmutableProp ... props);

        @OldChain
        Cfg setKeyProps(Class<?> entityType, String ... props);

        @OldChain
        <T extends Table<?>> Cfg setKeyProps(
                Class<T> tableType,
                Consumer<KeyPropCfg<T>> block
        );

        @OldChain
        Cfg setAutoAttachingAll();

        @OldChain
        Cfg setAutoAttaching(ImmutableProp prop);

        @OldChain
        Cfg setAutoAttaching(Class<?> entityType, String prop);

        @OldChain
        <T extends Table<?>> Cfg setAutoAttaching(
                Class<T> tableType,
                Function<T, Table<?>> block
        );

        @OldChain
        Cfg setDissociateAction(
                ImmutableProp prop,
                DissociateAction dissociateAction
        );

        @OldChain
        Cfg setDissociateAction(
                Class<?> entityType,
                String prop,
                DissociateAction dissociateAction
        );

        @OldChain
        <T extends Table<?>> Cfg setDissociateAction(
                Class<T> tableType,
                Function<T, Table<?>> block,
                DissociateAction dissociateAction
        );
    }

    interface KeyPropCfg<T extends Table<?>> {

        @OldChain
        KeyPropCfg<T> add(Function<T, PropExpression<?>> block);
    }
}
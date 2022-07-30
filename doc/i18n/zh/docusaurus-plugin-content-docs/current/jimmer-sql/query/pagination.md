---
sidebar_position: 2
title: 分页查询
---

:::tip
jimmer-sql对分页查询的实现方式极具特色，是jimmer-sql明显区别于其它ORM的特征之一。
:::

## 自动创建count-query

通常，分页查询需要两条SQL语句，一条查询记录数，一条查询一页数据，我们称之为count-query和data-query。

这两条SQL语句既有相同的部分，也有不同的部分，除非SQL逻辑非常简单，否则很难共享代码。

jimmer-sql对分页查询进行了特别设计，开发者只需要编写data-query，jimmer-sql会自动创建count-query。

```java
// α
ConfigurableTypedRootQuery<BookTable, Book> query = sqlClient
    .createQuery(BookTable.class, (q, book) -> {
        ...
        Some code for dynamic table joins, 
        dynamic filters and dynamic orders 
        ...
        return q.select(book);
    });

// β
TypedRootQuery<Long> countQuery = query
    // highlight-next-line
    .reselect((oldQuery, book) ->
        oldQuery.select(book.count())
    )
    // highlight-next-line
    .withoutSortingAndPaging();

// γ
int rowCount = countQuery.execute().get(0).intValue();
List<Book> books = query.limit(10, 90).execute();
```

1. 注释`α`处：
    开发人员创建data-query。

2. 注释`β`处：

    在data-query的基础上，快速创建新的count-query。
    - `reselect`: 替换原查询的`select`字句，改为查询记录条数。
    - `withoutSortingAndPaging`: 忽略原来查询的`order by`子句和分页（如果有的话）。

3. 注释`γ`处：

使用count-query查询记录总条数，使用data-query查询页内数据，两个查询各司其职。

:::caution

reselect的使用限制

1. 由reselect创建的查询不能被进一步reselect，这将导致异常。
2. 如果原查询的select子句中包含聚合函数，则会引发异常。
3. 如果原查询包含group by子句，则会导致异常。
:::

## 自动优化count-query

### 优化规则

为了让count-query的性能尽可能的高，jimmer-sql对count-query进行优化，删除原data-query查询不必要的表连接。

注意，以下类型的表连接无法被优化器去掉

1. 被where子句使用的表连接。
    
    也就是说，只有 **仅** 被原data-query的顶级查询的`select`或`order by`子句所使用的表连接，才有可能会被优化删除。

2. 基于集合关联的表连接。
    
    集合关联，也就是一对多或多对多关联。这样的表连接不可避免地会影响记录的数量，因此这些表连接一定在count-query中被保留。
    
    显然，能够被优化器删除的表连接都是基于引用关联的，即多对一或一对一关联。

如果基于引用关联的表连接不影响记录数，就可以去掉。有两种可能

1. 连接类型为左外连接

2. 虽然连接类型是内连接，但关联基于外键且外键非null。

综上描述，要判断原data-query中某个表连接是否可以在count-query中被自动删除，需采用如下优化规则

<table>
    <tr>
        <td rowspan="4">
            与
        </td>
        <td colspan="2">
            是否基于引用关联，即多对一或一对一
        </td>
    </tr>
    <tr>
        <td colspan="2">
            是否 <b>仅</b> 被原data-query的顶级查询的select或orderBy子句所用
        </td>
    </tr>
    <tr>
        <td rowspan="2">
            或
        </td>
        <td>
            是否是左外连接
        </td>
    </tr>
    <tr>
        <td>
            关联是否非空
        </td>
    </tr>
</table>

### 无法优化的场景示范

```java
ConfigurableTypedRootQuery<BookTable, Book> query = 
    sqlClient.createQuery(BookTable.class, (q, book) -> {
        q.where(
            book.price().between(
                new BigDecimal(20),
                new BigDecimal(30)
            )
        );
        q
            // highlight-next-line
            .orderBy(book.store().name()) // α
            .orderBy(book.name());
        return q.select(book);
    });

TypedRootQuery<Long> countQuery = query
    .reselect((oldQuery, book) ->
        oldQuery.select(book.count())
    )
    .withoutSortingAndPaging();

int rowCount = countQuery.execute().get(0).intValue();
System.out.println(rowCount);
```

注释α处

虽然`table.store()`仅被orderBy子句使用，没有被where子句使用，但是
- `table.store()`是内连接
- `Book.store`关联可空

所以，优化规则并不能生效，count-query仍然需要保留`table.store()`，并最终在SQL中生成JOIN子句

```sql
select 
    count(tb_1_.ID) 
from BOOK as tb_1_ 
/* highlight-start */
inner join BOOK_STORE as tb_2_ 
    on tb_1_.STORE_ID = tb_2_.ID
/* highlight-end */ 
where tb_1_.PRICE between ? and ?
```

### 可优化的场景示范

针对上文所讨论的无法被优化的这种情况，采用以下任何一种修改，都可以让优化生效

1. 把`Book.store`关联修改为非空，即`@ManyToOne(optional = false)`
2. 采用左外连接

在这里，我们选用第二种方案，左外连接

```java
ConfigurableTypedRootQuery<BookTable, Book> query = 
    sqlClient.createQuery(BookTable.class, (q, book) -> {
        q.where(
            book.price().between(
                new BigDecimal(20),
                new BigDecimal(30)
            )
        );
        q
            // highlight-next-line
            .orderBy(book.store(JoinType.LEFT).name())
            .orderBy(book.name());
        return q.select(book);
    });

TypedRootQuery<Long> countQuery = query
    .reselect((oldQuery, book) ->
        oldQuery.select(book.count())
    )
    .withoutSortingAndPaging();

int rowCount = countQuery.execute().get(0).intValue();
System.out.println(rowCount);
```

现在，优化可以生效，最终count-query生成SQL如下
```sql
select 
    count(tb_1_.ID) 
from BOOK as tb_1_ 
where tb_1_.PRICE between ? and ?
```

## 方言和data-query

前面我们所讨论都是count-query，分页查询最终需执行原data-query查询数据

```java
List<Book> books = query
    // highlight-next-line
    .limit(10, 90)
    .execute();
```

这里`limit(limit, offset)`设置分页区间。

不幸的是，不同的数据库对分页查询的支持大相径庭。所以，在创建SqlClient时需要指定方言

```java
SqlClient sqlClient = SqlClient
    .newBuilder()
    // highlight-next-line
    .setDialect(new H2Dialect())
    ... ...
    .build();
```

目前支持的方言，以及各自生成的分页SQL如下

### 默认行为（含DefaultDialect、H2Dialect和PostgresDialect）

```sql
select 
    tb_1_.ID, 
    tb_1_.NAME, 
    tb_1_.EDITION, 
    tb_1_.PRICE, 
    tb_1_.STORE_ID
from BOOK as tb_1_ 
left join BOOK_STORE as tb_2_ 
    on tb_1_.STORE_ID = tb_2_.ID 
where tb_1_.PRICE between ? and ? 
order by tb_2_.NAME asc, tb_1_.NAME asc 
/* highlight-next-line */
limit ? offset ?
```

### MySqlDialect

```sql
select 
    tb_1_.ID, 
    tb_1_.NAME, 
    tb_1_.EDITION, 
    tb_1_.PRICE, 
    tb_1_.STORE_ID
from BOOK as tb_1_ 
left join BOOK_STORE as tb_2_ 
    on tb_1_.STORE_ID = tb_2_.ID 
where tb_1_.PRICE between ? and ? 
order by tb_2_.NAME asc, tb_1_.NAME asc 
/* highlight-next-line */
limit ?, ?
```

### SqlServerDialect

```sql
select 
    tb_1_.ID, 
    tb_1_.NAME, 
    tb_1_.EDITION, 
    tb_1_.PRICE, 
    tb_1_.STORE_ID
from BOOK as tb_1_ 
left join BOOK_STORE as tb_2_ 
    on tb_1_.STORE_ID = tb_2_.ID 
where tb_1_.PRICE between ? and ? 
order by tb_2_.NAME asc, tb_1_.NAME asc 
/* highlight-next-line */
offset ? rows fetch next ? rows only
```

### OracleDialect

1. 当offset不为0时

    ```sql
    select * from (
        select core__.*, rownum rn__ 
        from (
            select 
                tb_1_.ID, 
                tb_1_.NAME, 
                tb_1_.EDITION, 
                tb_1_.PRICE, 
                tb_1_.STORE_ID
            from BOOK as tb_1_ 
            left join BOOK_STORE as tb_2_ 
                on tb_1_.STORE_ID = tb_2_.ID 
            where tb_1_.PRICE between ? and ? 
            order by tb_2_.NAME asc, tb_1_.NAME asc 
        /* highlight-next-line */
        ) core__ where rownum <= ? /* α */
    /* highlight-next-line */
    ) limited__ where rn__ > ? /* β */
    ```

    其中，`α`处变量为`limit + offset`，`β`处变量为`offset`

2. 当offset为0时

    ```sql
    select core__.* from (
        select 
            tb_1_.ID, 
            tb_1_.NAME, 
            tb_1_.EDITION, 
            tb_1_.PRICE, 
            tb_1_.STORE_ID
        from BOOK as tb_1_ 
        left join BOOK_STORE as tb_2_ 
            on tb_1_.STORE_ID = tb_2_.ID 
        where tb_1_.PRICE between ? and ? 
        order by tb_2_.NAME asc, tb_1_.NAME asc 
    /* highlight-next-line */
    ) core__ where rownum <= ? /* α */
    ```
    其中，`α`处变量为`limit`
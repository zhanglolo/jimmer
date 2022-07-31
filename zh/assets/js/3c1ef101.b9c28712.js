"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[8399],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return b}});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),m=u(t),b=l,d=m["".concat(s,".").concat(b)]||m[b]||c[b]||o;return t?a.createElement(d,i(i({ref:n},p),{},{components:t})):a.createElement(d,i({ref:n},p))}));function b(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,i=new Array(o);i[0]=m;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r.mdxType="string"==typeof e?e:l,i[1]=r;for(var u=2;u<o;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2360:function(e,n,t){t.d(n,{Z:function(){return i}});var a=t(7294),l=t(6010),o="tabItem_OmH5";function i(e){var n=e.children,t=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(o,i),hidden:t},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return b}});var a=t(3117),l=t(7294),o=t(2389),i=t(7392),r=t(7094),s=t(2466),u=t(6010),p="tabList_uSqn",c="tabItem_LplD";function m(e){var n,t,o,m=e.lazy,b=e.block,d=e.defaultValue,h=e.values,k=e.groupId,g=e.className,v=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=h?h:v.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),T=(0,i.l)(f,(function(e,n){return e.value===n.value}));if(T.length>0)throw new Error('Docusaurus error: Duplicate values "'+T.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===d?d:null!=(n=null!=d?d:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(o=v[0])?void 0:o.props.value;if(null!==N&&!f.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,r.U)(),x=y.tabGroupChoices,j=y.setTabGroupChoices,E=(0,l.useState)(N),q=E[0],_=E[1],B=[],I=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var w=x[k];null!=w&&w!==q&&f.some((function(e){return e.value===w}))&&_(w)}var O=function(e){var n=e.currentTarget,t=B.indexOf(n),a=f[t].value;a!==q&&(I(n),_(a),null!=k&&j(k,a))},D=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=B.indexOf(e.currentTarget)+1;t=B[a]||B[0];break;case"ArrowLeft":var l=B.indexOf(e.currentTarget)-1;t=B[l]||B[B.length-1]}null==(n=t)||n.focus()};return l.createElement("div",{className:(0,u.Z)("tabs-container",p)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":b},g)},f.map((function(e){var n=e.value,t=e.label,o=e.attributes;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:q===n?0:-1,"aria-selected":q===n,key:n,ref:function(e){return B.push(e)},onKeyDown:D,onFocus:O,onClick:O},o,{className:(0,u.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":q===n})}),null!=t?t:n)}))),m?(0,l.cloneElement)(v.filter((function(e){return e.props.value===q}))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},v.map((function(e,n){return(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==q})}))))}function b(e){var n=(0,o.Z)();return l.createElement(m,(0,a.Z)({key:String(n)},e))}},3670:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return b}});var a=t(3117),l=t(102),o=(t(7294),t(3905)),i=t(9877),r=t(2360),s=["components"],u={sidebar_position:4,title:"Table and TableEx"},p=void 0,c={unversionedId:"jimmer-sql/table-and-table-ex",id:"jimmer-sql/table-and-table-ex",title:"Table and TableEx",description:"Problem of collection association",source:"@site/docs/jimmer-sql/table-and-table-ex.mdx",sourceDirName:"jimmer-sql",slug:"/jimmer-sql/table-and-table-ex",permalink:"/jimmer/zh/docs/jimmer-sql/table-and-table-ex",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/jimmer-sql/table-and-table-ex.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Table and TableEx"},sidebar:"tutorialSidebar",previous:{title:"SqlClient",permalink:"/jimmer/zh/docs/jimmer-sql/sql-client"},next:{title:"Table joins",permalink:"/jimmer/zh/docs/jimmer-sql/table-join"}},m={},b=[{value:"Problem of collection association",id:"problem-of-collection-association",level:2},{value:"Table and TableEx",id:"table-and-tableex",level:2},{value:"Top-level queries can only use Table",id:"top-level-queries-can-only-use-table",level:3},{value:"Subqueries can use TableEx",id:"subqueries-can-use-tableex",level:3},{value:"Break through soft limits",id:"break-through-soft-limits",level:2}],d={toc:b};function h(e){var n=e.components,t=(0,l.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"problem-of-collection-association"},"Problem of collection association"),(0,o.kt)("p",null,"Let's look at this entity definition"),(0,o.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Book.java"',title:'"Book.java"'},'\npackage org.babyfish.jimmer.sql.example.model;\n\nimport java.math.BigDecimal;\nimport java.util.List;\nimport java.util.UUID;\nimport javax.validation.constraints.Null;\n\nimport org.babyfish.jimmer.sql.*;\n\n@Entity\npublic interface Book {\n\n    @Id\n    UUID id();\n\n    String name();\n\n    int edition();\n\n    BigDecimal price();\n\n    @Null\n    @ManyToOne\n    // highlight-next-line\n    BookStore store();\n\n    @ManyToMany\n    @JoinTable(\n            name = "BOOK_AUTHOR_MAPPING",\n            joinColumnName = "BOOK_ID",\n            inverseJoinColumnName = "AUTHOR_ID"\n    )\n    // highlight-next-line\n    List<Author> authors();\n}\n'))),(0,o.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Book.java"',title:'"Book.java"'},'\npackage org.babyfish.jimmer.sql.example.model\n\nimport java.math.BigDecimal;\nimport java.util.UUID;\n\nimport org.babyfish.jimmer.sql.*;\n\n@Entity\ninterface Book {\n\n    @Id\n    val id: UUID\n\n    val name: String\n\n    val edition: Int\n\n    val price: BigDecimal\n\n    @ManyToOne\n    // highlight-next-line\n    val store: BookStore?\n\n    @ManyToMany\n    @JoinTable(\n            name = "BOOK_AUTHOR_MAPPING",\n            joinColumnName = "BOOK_ID",\n            inverseJoinColumnName = "AUTHOR_ID"\n    )\n    // highlight-next-line\n    val authors: List<Author>\n}\n')))),(0,o.kt)("p",null,"In the code above"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"store")," is a many-to-one association"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"authors")," is a many-to-many association")),(0,o.kt)("p",null,"The differences between reference associations and collection associations are as follows"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Reference joins do not cause duplicate results."),(0,o.kt)("li",{parentName:"ul"},"Collection joins cause duplicate results.")),(0,o.kt)("p",null,"Collection joins can cause duplicate results, which in turn can cause the following problems:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If developers forget to deduplicate, bugs will be introduced.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Even if the developer does not forget to deduplicate, it is not a good choice. Developers usually choose to use ",(0,o.kt)("inlineCode",{parentName:"p"},"java.util.LinkedHashSet")," for deduplication on the client side. This practice consumes hardware resources to process duplicate data and puts unnecessary pressure on both network and JVM memory.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"The most important point, it is not friendly to pagination queries"),"."),(0,o.kt)("p",{parentName:"li"},"Pagination query of with collection join at the SQL level is not what people need; in more scenarios, people want pagination operations to be applied to the main object ",(0,o.kt)("em",{parentName:"p"},"(The aggregate root) "),"."),(0,o.kt)("p",{parentName:"li"},"Take Hibernate as an example. In this case, Hibernate has to give up the paging strategy at the SQL level and adopt the paging strategy at the memory level. This is very low performance, in order to attract the attention of developers, hibernate will warn in the log. If you has experience using Hibernate, the following log will give you a headache."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://tech.asimio.net/2021/05/19/Fixing-Hibernate-HHH000104-firstResult-maxResults-warning-using-Spring-Data-JPA.html"},"firstResult/maxResults specified with collection fetch; applying in memory")),(0,o.kt)("p",{parentName:"li"},"In fact, jimmer-sql provides a very powerful associated object fetch function, ",(0,o.kt)("a",{parentName:"p",href:"./query/fetcher"},"Object Fetcher"),". And it is for this reason that Object Fetcher does not use table joins."))),(0,o.kt)("p",null,"To sum up, the disadvantages of using collection joins in top-level queries are very obvious, but there is no denying that there is still objective value in using collection joins in subqueries."),(0,o.kt)("p",null,"So, jimmer-sql has an important design goal"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol"},"Collection joins need to be prohibited in ",(0,o.kt)("strong",{parentName:"li"},"top-level")," queries."),(0,o.kt)("li",{parentName:"ol"},"Collection joins are still available in subqueries, update statements, and delete statements.")))),(0,o.kt)("h2",{id:"table-and-tableex"},"Table and TableEx"),(0,o.kt)("p",null,"To support a strongly typed DSL, the annotation processor generates some source code for user-defined entity interfaces."),(0,o.kt)("p",null,"Taking the ",(0,o.kt)("inlineCode",{parentName:"p"},"Book")," entity interface at the beginning of the article as an example, the generated code is"),(0,o.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Generated java code"',title:'"Generated',java:!0,'code"':!0},'/* \n * BookTable.java\n */\npackage org.babyfish.jimmer.sql.example.model;\n\nimport java.lang.Integer;\nimport java.math.BigDecimal;\nimport java.util.UUID;\nimport javax.persistence.criteria.JoinType;\nimport org.babyfish.jimmer.sql.ast.Expression;\nimport org.babyfish.jimmer.sql.ast.PropExpression;\nimport org.babyfish.jimmer.sql.ast.table.Table;\nimport org.babyfish.jimmer.sql.ast.table.spi.AbstractTableWrapper;\n\npublic class BookTable extends AbstractTableWrapper<Book> {\n    public BookTable(Table<Book> table) {\n        super(table);\n    }\n\n    public Expression<UUID> id() {\n        return get("id");\n    }\n\n    public PropExpression.Str name() {\n        return get("name");\n    }\n\n    public PropExpression.Num<Integer> edition() {\n        return get("edition");\n    }\n\n    public PropExpression.Num<BigDecimal> price() {\n        return get("price");\n    }\n\n    public BookStoreTable store() {\n        return join("store");\n    }\n\n    public BookStoreTable store(JoinType joinType) {\n        return join("store", joinType);\n    }\n}\n\n/* \n * BookTableEx.java\n */\npackage org.babyfish.jimmer.sql.example.model;\n\nimport javax.persistence.criteria.JoinType;\nimport org.babyfish.jimmer.sql.ast.table.TableEx;\n\npublic class BookTableEx extends BookTable implements TableEx<Book> {\n    public BookTableEx(TableEx<Book> table) {\n        super(table);\n    }\n\n    public AuthorTableEx authors() {\n        return join("authors");\n    }\n\n    public AuthorTableEx authors(JoinType joinType) {\n        return join("authors", joinType);\n    }\n}\n'))),(0,o.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Generated kotlin code"',title:'"Generated',kotlin:!0,'code"':!0},'package org.babyfish.jimmer.example.kt.sql.model\n\nimport java.math.BigDecimal\nimport java.util.UUID\nimport org.babyfish.jimmer.sql.ast.Selection\nimport org.babyfish.jimmer.sql.kt.ast.expression.KNonNullPropExpression\nimport org.babyfish.jimmer.sql.kt.ast.expression.KNullablePropExpression\nimport org.babyfish.jimmer.sql.kt.ast.table.KNonNullTable\nimport org.babyfish.jimmer.sql.kt.ast.table.KNonNullTableEx\nimport org.babyfish.jimmer.sql.kt.ast.table.KNullableTable\nimport org.babyfish.jimmer.sql.kt.ast.table.KNullableTableEx\nimport org.babyfish.jimmer.sql.kt.ast.table.KTable\nimport org.babyfish.jimmer.sql.kt.ast.table.KTableEx\n\n/* \n * Extension for Table<Book>\n */\npublic val KTable<Book>.id: KNullablePropExpression<UUID>\n    get() = get("id")\n\npublic val KNonNullTable<Book>.id: KNonNullPropExpression<UUID>\n    get() = get("id")\n\npublic val KTable<Book>.name: KNullablePropExpression<String>\n    get() = get("name")\n\npublic val KNonNullTable<Book>.name: KNonNullPropExpression<String>\n    get() = get("name")\n\npublic val KTable<Book>.edition: KNullablePropExpression<Int>\n    get() = get("edition")\n\npublic val KNonNullTable<Book>.edition: KNonNullPropExpression<Int>\n    get() = get("edition")\n\npublic val KTable<Book>.price: KNullablePropExpression<BigDecimal>\n    get() = get("price")\n\npublic val KNonNullTable<Book>.price: KNonNullPropExpression<BigDecimal>\n    get() = get("price")\n\npublic val KNullableTable<Book>.store: KNullableTable<BookStore>\n    get() = join("store")\n\npublic val KNonNullTable<Book>.store: KNonNullTable<BookStore>\n    get() = join("store")\n\npublic val KTable<Book>.`store?`: KNullableTable<BookStore>\n    get() = outerJoin("store")\n\n/* \n * Extension for BookTableEx<Book>\n */\n\npublic val KNullableTableEx<Book>.authors: KNullableTableEx<Author>\n    get() = join("authors")\n\npublic val KNonNullTableEx<Book>.authors: KNonNullTableEx<Author>\n    get() = join("authors")\n\npublic val KTableEx<Book>.`authors?`: KNullableTableEx<Author>\n    get() = outerJoin("authors")\n')))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Tabe")," does not support collection associations, but supports scalar properties and reference associations (",(0,o.kt)("inlineCode",{parentName:"li"},"store")," in this case)."),(0,o.kt)("li",{parentName:"ul"},"Only ",(0,o.kt)("inlineCode",{parentName:"li"},"TableEx")," supports collection associations (",(0,o.kt)("inlineCode",{parentName:"li"},"authors")," in this case).")),(0,o.kt)("p",null,"Therefore, the API of jimmer-sql follows the following pattern"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Top-level queries can only be created based on ",(0,o.kt)("inlineCode",{parentName:"li"},"Table"),"."),(0,o.kt)("li",{parentName:"ul"},"Subqueries, update statements and delete statements can be created based on either ",(0,o.kt)("inlineCode",{parentName:"li"},"Table")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"TableEx"),".")),(0,o.kt)("p",null,"Next, take the top-level query and sub-query as example for a comparative demonstration."),(0,o.kt)("h3",{id:"top-level-queries-can-only-use-table"},"Top-level queries can only use Table"),(0,o.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"sqlClient.createQuery(\n    // `createQuery` only accept `BookTable.class`,\n    // If the paraemter is `BookTableEx.class`, \n    // exception will be thrown\n    BookTable.class, \n    (q, book) -> ...\n);\n"))),(0,o.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"sqlClient.createQuery(Book::class) {\n    // You can access `table` here.\n    // Its type is `Table<Book>`, not `TableEx<Book>`\n    ...\n}\n")))),(0,o.kt)("p",null,"So, your code looks like this"),(0,o.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'List<Book> books = sqlClient\n    .createQuery(BookTable.class, (q, book) -> {\n        return q\n            .where(\n                book\n                    // highlight-next-line\n                    .name() // scalar field "name"\n                    .eq("Book Name")\n            )\n            .where(\n                book\n                    // highlight-next-line\n                    .store() // reference association "store"\n                    .name()\n                    .eq("Store Name")\n            )\n            /*\n              * However, "book.authors()" cannot be used \n              * because the method "authors()" is defined \n              * in BookTableEx, not BookTable.\n              *\n              * That is, compile-time prohibits users \n              * from joining collection associations \n              * in top-level queries\n              */\n            .select(book);\n    })\n    .execute();\nbooks.forEach(System.out::println);\n'))),(0,o.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'val books = sqlClient\n    .createQuery(Book::class) {\n        where(\n            table\n                // highlight-next-line\n                .name // scalar field "name"\n                eq "Book Name"\n        )\n        where(\n            table\n                // highlight-next-line\n                .store // reference association "store"\n                .name\n                eq "Store Name"\n        )\n        /*\n            * However, "table.authors" cannot be used \n            * because the property "authors" is defined \n            * in `TableEx<Book>`, not `Table<Book>`.\n            *\n            * That is, compile-time prohibits users \n            * from joining collections\n            * in top-level queries\n            */\n        select(table)\n    }\n    .execute()\nbooks.forEach(::println)\n')))),(0,o.kt)("p",null,"The final generated SQL is as follows"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"select \n    tb_1_.ID, \n    tb_1_.NAME, \n    tb_1_.EDITION, \n    tb_1_.PRICE, \n    tb_1_.STORE_ID \nfrom BOOK as tb_1_ \ninner join BOOK_STORE as tb_2_ on tb_1_.STORE_ID = tb_2_.ID \nwhere \n    tb_1_.NAME = ? \nand \n    tb_2_.NAME = ?\n")),(0,o.kt)("h3",{id:"subqueries-can-use-tableex"},"Subqueries can use TableEx"),(0,o.kt)("p",null,"Unlike top-level queries, TableEx can be used to create subqueries, update statements, and delete statements."),(0,o.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'List<Author> authors = sqlClient\n    .createQuery(AuthorTable.class, (q, author) -> {\n\n        // The type of author is AuthorTable\n\n        return q\n                .where(author.firstName().eq("Author Name"))\n                .where(\n                    q.createWildSubQuery(\n                        // highlight-next-line\n                        BookTableEx.class, // TableEx is allowed\n                        (sq, book) -> {\n\n                            // The type of `book` is \n                            // BookTableEx, not BookTable\n\n                            sq.where(\n                                book\n                                    // TableEx supports collection join\n                                    // highlight-next-line\n                                    .authors()\n                                    .eq(author),\n\n                                book.name().eq("Book name")\n                            );\n                        }\n                    ).exists()\n                )\n                .select(author);\n    })\n    .execute();\nauthors.forEach(System.out::println);\n'))),(0,o.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'val authors = sqlClient\n    .createQuery(Author::class) {\n\n        // In parent query, the type of `table` is `Table<Author>`\n\n        where(\n            table.firstName eq "Author Name",\n            exists(\n                wildSubQuery(Book::class) {\n\n                    // In sub query, the type of `table` is \n                    // `TableEx<Book>`, not `Table<Book>`\n\n                    where(\n                        table\n                            // TableEx supports collection join\n                            // highlight-next-line\n                            .authors\n                            eq parentTable,\n\n                        table.name eq "Book name"\n                    );\n                }\n            )\n        )\n        select(table)\n    }\n    .execute()\nauthors.forEach(::println);\n')))),(0,o.kt)("p",null,"The final generated SQL is as follows"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"select \n    tb_1_.ID, \n    tb_1_.FIRST_NAME, \n    tb_1_.LAST_NAME, \n    tb_1_.GENDER \nfrom AUTHOR as tb_1_ \nwhere \n    tb_1_.FIRST_NAME = ? \n    and exists (\n        select 1 \n        from BOOK as tb_2_ \n        /* highlight-start */\n        inner join BOOK_AUTHOR_MAPPING as tb_3_ \n            on tb_2_.ID = tb_3_.BOOK_ID \n        /* highlight-end */\n        where \n            tb_3_.AUTHOR_ID = tb_1_.ID \n        and \n            tb_2_.NAME = ?\n    )\n")),(0,o.kt)("h2",{id:"break-through-soft-limits"},"Break through soft limits"),(0,o.kt)("p",null,"Disallowing collection joins in top-level queries is reasonable in most, but not all cases."),(0,o.kt)("p",null,"For example, users do not query the entire object, but query individual fields, and use SQL keyword ",(0,o.kt)("inlineCode",{parentName:"p"},"distinct"),", this scenario is completely reasonable."),(0,o.kt)("p",null,"So, this rule is a soft restriction, not a rigid one. it can be easily broken."),(0,o.kt)("p",null,"There are two ways to break this rule"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Use weakly typed API ",(0,o.kt)("em",{parentName:"p"},"(not recommended)")),(0,o.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-java"},'List<UUID> bookIds = sqlClient\n    .createQuery(BookTable.class, (q, book) -> {\n        return q\n            .where(\n                book\n                    // highlight-next-line\n                    .<AuthorTable>join("authors")\n                    .firstName()\n                    .ilike("A%")\n            )\n            .select(book.id());\n    })\n    .distinct()\n    .execute();\nbookIds.forEach(System.out::println);\n'))),(0,o.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'val bookIds = sqlClient\n    .createQuery(Book::class) {\n        where(\n            table \n                // highlight-next-line\n                .join<Author>("Authors")\n                .firstName\n                ilike "A%"\n        )\n        select(table.id)\n    }\n    .distinct()\n    .execute()\nbookIds.forEach(::println)\n'))))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Cast Table to TableEx ",(0,o.kt)("em",{parentName:"p"},"(recommended)")),(0,o.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-java"},'List<UUID> bookIds = sqlClient\n    .createQuery(BookTable.class, (q, book) -> {\n        return q\n            .where(\n                // highlight-next-line\n                ((BookTableEx)book)\n                    .authors()\n                    .firstName()\n                    .ilike("A%")\n            )\n            .select(book.id());\n    })\n    .distinct()\n    .execute();\nbookIds.forEach(System.out::println);\n'))),(0,o.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'val bookIds = sqlClient\n    .createQuery(Book::class) {\n        where(\n            // highlight-next-line\n            (table as KNonNullTableEx<Book>)\n                .authors\n                .firstName ilike "A%"\n        )\n        select(table.id)\n    }\n    .distinct()\n    .execute()\nbookIds.forEach(::println)\n')))))),(0,o.kt)("p",null,"Either way, you can break through this soft limitation and use collection associations in top-level queries."),(0,o.kt)("p",null,"The final generated SQL is as follows"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"select \n    distinct tb_1_.ID \nfrom BOOK as tb_1_ \n/* highlight-start */\ninner join BOOK_AUTHOR_MAPPING as tb_2_ \n    on tb_1_.ID = tb_2_.BOOK_ID \ninner join AUTHOR as tb_3_ \n    on tb_2_.AUTHOR_ID = tb_3_.ID \n/* highlight-end */\nwhere lower(tb_3_.FIRST_NAME) like ?\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This rule is added, but it's easy to be broken. Why?"),(0,o.kt)("p",{parentName:"div"},"When a developer really wants to do it, make sure he understands what he's doing."))))}h.isMDXComponent=!0}}]);
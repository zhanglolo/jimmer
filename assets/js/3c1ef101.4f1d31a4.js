"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[8399],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,b=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return n?a.createElement(b,l(l({ref:t},c),{},{components:n})):a.createElement(b,l({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,l[1]=r;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2360:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(7294),o=n(6010),i="tabItem_OmH5";function l(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(i,l),hidden:n},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(3117),o=n(7294),i=n(2389),l=n(7392),r=n(7094),s=n(2466),u=n(6010),c="tabList_uSqn",p="tabItem_LplD";function m(e){var t,n,i,m=e.lazy,d=e.block,b=e.defaultValue,h=e.values,k=e.groupId,f=e.className,v=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=h?h:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,l.l)(g,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===b?b:null!=(t=null!=b?b:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=v[0])?void 0:i.props.value;if(null!==N&&!g.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var T=(0,r.U)(),x=T.tabGroupChoices,w=T.setTabGroupChoices,j=(0,o.useState)(N),_=j[0],q=j[1],E=[],O=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var B=x[k];null!=B&&B!==_&&g.some((function(e){return e.value===B}))&&q(B)}var I=function(e){var t=e.currentTarget,n=E.indexOf(t),a=g[n].value;a!==_&&(O(t),q(a),null!=k&&w(k,a))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=E.indexOf(e.currentTarget)+1;n=E[a]||E[0];break;case"ArrowLeft":var o=E.indexOf(e.currentTarget)-1;n=E[o]||E[E.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,u.Z)("tabs-container",c)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":d},f)},g.map((function(e){var t=e.value,n=e.label,i=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:_===t?0:-1,"aria-selected":_===t,key:t,ref:function(e){return E.push(e)},onKeyDown:D,onFocus:I,onClick:I},i,{className:(0,u.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":_===t})}),null!=n?n:t)}))),m?(0,o.cloneElement)(v.filter((function(e){return e.props.value===_}))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==_})}))))}function d(e){var t=(0,i.Z)();return o.createElement(m,(0,a.Z)({key:String(t)},e))}},3670:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return r},metadata:function(){return u},toc:function(){return p}});var a=n(3117),o=n(102),i=(n(7294),n(3905)),l=(n(9877),n(2360),["components"]),r={sidebar_position:4,title:"Table and TableEx"},s=void 0,u={unversionedId:"jimmer-sql/table-and-table-ex",id:"jimmer-sql/table-and-table-ex",title:"Table and TableEx",description:"Problem of collection association",source:"@site/docs/jimmer-sql/table-and-table-ex.mdx",sourceDirName:"jimmer-sql",slug:"/jimmer-sql/table-and-table-ex",permalink:"/jimmer/docs/jimmer-sql/table-and-table-ex",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/jimmer-sql/table-and-table-ex.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Table and TableEx"},sidebar:"tutorialSidebar",previous:{title:"JSqlClient",permalink:"/jimmer/docs/jimmer-sql/sql-client"},next:{title:"Table joins",permalink:"/jimmer/docs/jimmer-sql/table-join"}},c={},p=[{value:"Problem of collection association",id:"problem-of-collection-association",level:2},{value:"Table and TableEx",id:"table-and-tableex",level:2},{value:"Top-level queries that can only be created based on Table",id:"top-level-queries-that-can-only-be-created-based-on-table",level:3},{value:"Allow subqueries created based on TableEx",id:"allow-subqueries-created-based-on-tableex",level:3},{value:"Break through soft limits",id:"break-through-soft-limits",level:2}],m={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"problem-of-collection-association"},"Problem of collection association"),(0,i.kt)("p",null,"Let's look at this entity definition"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Book.java"',title:'"Book.java"'},'\npackage org.babyfish.jimmer.sql.example.model;\n\nimport javax.persistence.*;\nimport java.math.BigDecimal;\nimport java.util.List;\nimport java.util.UUID;\n\n@Entity\npublic interface Book {\n\n    @Id\n    UUID id();\n\n    String name();\n\n    int edition();\n\n    BigDecimal price();\n\n    @ManyToOne\n    // highlight-next-line\n    BookStore store();\n\n    @ManyToMany\n    @JoinTable(\n            name = "BOOK_AUTHOR_MAPPING",\n            joinColumns = @JoinColumn(name = "BOOK_ID"),\n            inverseJoinColumns = @JoinColumn(name = "AUTHOR_ID")\n    )\n    // highlight-next-line\n    List<Author> authors();\n}\n')),(0,i.kt)("p",null,"in the code above"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"store")," is a many-to-one association"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"authors")," is a many-to-many association")),(0,i.kt)("p",null,"One-to-one associations and many-to-one associations are collectively referred to as reference associations, one-to-many associations and many-to-many associations are collectively referred to as collection associations."),(0,i.kt)("p",null,"The differences between reference associations and collection associations are as follows"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Join query base on reference associations dose not cause duplicate results."),(0,i.kt)("li",{parentName:"ul"},"Join query base on collection associations causes duplicate results.")),(0,i.kt)("p",null,"Table joins based on collection associations can cause duplicate results, which in turn can cause the following problems:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If developers forget to deduplicate, bugs will be introduced.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Even if the developer does not forget to deduplicate, it is not a good choice. Developers usually choose to use ",(0,i.kt)("inlineCode",{parentName:"p"},"java.util.LinkedHashSet")," for deduplication on the client side. This practice consumes hardware resources to process duplicate data and puts unnecessary pressure on both network and JVM memory.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"The most important point, it is not friendly to pagination queries"),"."),(0,i.kt)("p",{parentName:"li"},"Pagination query of join results at the SQL level is often not what people need; in more scenarios, people want pagination operations to be applied to the main object ",(0,i.kt)("em",{parentName:"p"},"(The aggregate root) "),"."),(0,i.kt)("p",{parentName:"li"},"Take Hibernate as an example. In this case, Hibernate has to give up the paging strategy at the SQL level and adopt the paging strategy at the memory level. This is very low performance, in order to attract the attention of developers, hibernate will warn in the log. If you has experience using Hibernate, the following log will give you a headache."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://tech.asimio.net/2021/05/19/Fixing-Hibernate-HHH000104-firstResult-maxResults-warning-using-Spring-Data-JPA.html"},"firstResult/maxResults specified with collection fetch; applying in memory")),(0,i.kt)("p",{parentName:"li"},"In fact, jimmer-sql provides a very powerful associated object fetch function, ",(0,i.kt)("a",{parentName:"p",href:"./query/fetcher"},"Object Fetcher"),". And it is for this reason that Object Fetcher does not use table joins."))),(0,i.kt)("p",null,"To sum up, the disadvantages of using collection joins in top-level queries are very obvious, but there is no denying that there is still objective value in using collection joins in subqueries."),(0,i.kt)("p",null,"So, jimmer-sql has an important design goal"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},"Table joins based on collection associations need to be prohibited in ",(0,i.kt)("strong",{parentName:"li"},"top-level")," queries."),(0,i.kt)("li",{parentName:"ol"},"Table joins based on collection associations are still available in subqueries, update statements, and delete statements.")))),(0,i.kt)("h2",{id:"table-and-tableex"},"Table and TableEx"),(0,i.kt)("p",null,"To support a strongly typed DSL, the annotation processor generates some source code based on user-defined entity interfaces."),(0,i.kt)("p",null,"Taking the Book entity interface at the beginning of the article as an example, the following two types will be automatically generated"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="BookTable.java(Auto-generated)"',title:'"BookTable.java(Auto-generated)"'},'package org.babyfish.jimmer.sql.example.model;\n\nimport java.lang.Integer;\nimport java.math.BigDecimal;\nimport java.util.UUID;\nimport javax.persistence.criteria.JoinType;\nimport org.babyfish.jimmer.sql.ast.Expression;\nimport org.babyfish.jimmer.sql.ast.PropExpression;\nimport org.babyfish.jimmer.sql.ast.table.Table;\nimport org.babyfish.jimmer.sql.ast.table.spi.AbstractTableWrapper;\n\npublic class BookTable extends AbstractTableWrapper<Book> {\n    public BookTable(Table<Book> table) {\n        super(table);\n    }\n\n    public Expression<UUID> id() {\n        return get("id");\n    }\n\n    public PropExpression.Str name() {\n        return get("name");\n    }\n\n    public PropExpression.Num<Integer> edition() {\n        return get("edition");\n    }\n\n    public PropExpression.Num<BigDecimal> price() {\n        return get("price");\n    }\n\n    public BookStoreTable store() {\n        return join("store");\n    }\n\n    public BookStoreTable store(JoinType joinType) {\n        return join("store", joinType);\n    }\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="BookTableEx.java(Auto-generated)"',title:'"BookTableEx.java(Auto-generated)"'},'package org.babyfish.jimmer.sql.example.model;\n\nimport javax.persistence.criteria.JoinType;\nimport org.babyfish.jimmer.sql.ast.table.TableEx;\n\npublic class BookTableEx extends BookTable implements TableEx<Book> {\n    public BookTableEx(TableEx<Book> table) {\n        super(table);\n    }\n\n    public AuthorTableEx authors() {\n        return join("authors");\n    }\n\n    public AuthorTableEx authors(JoinType joinType) {\n        return join("authors", joinType);\n    }\n}\n')),(0,i.kt)("p",null,"Looking at these two auto-generated types, it can be seen that"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"BookTableEx")," extends ",(0,i.kt)("inlineCode",{parentName:"li"},"BookTable"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"BookTable")," does not support collection associations, but supports scalar property and reference associations (",(0,i.kt)("inlineCode",{parentName:"li"},"store")," in this case)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"BookTableEx")," adds support for collection associations (",(0,i.kt)("inlineCode",{parentName:"li"},"authors")," in this case).")),(0,i.kt)("p",null,"Therefore, the API of jimmer-sql follows the following pattern"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Top-level queries can only be created based on ",(0,i.kt)("inlineCode",{parentName:"li"},"Table"),"."),(0,i.kt)("li",{parentName:"ul"},"Subqueries, update statements and delete statements can be created based on either ",(0,i.kt)("inlineCode",{parentName:"li"},"Table")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"TableEx"),".")),(0,i.kt)("p",null,"Next, take the top-level query and sub-query as example for a comparative demonstration."),(0,i.kt)("h3",{id:"top-level-queries-that-can-only-be-created-based-on-table"},"Top-level queries that can only be created based on Table"),(0,i.kt)("p",null,"Top-level queries that can only be created based on Table"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"sqlClient.createQuery(BookTable.class, (q, book) -> ...);\n")),(0,i.kt)("p",null,"If it takes TableEx as its parameter,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"sqlClient.createQuery(BookTableEx.class, (q, book) -> ...);\n")),(0,i.kt)("p",null,"the exception will be thrown"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Top-level query does not support TableEx"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'List<Book> books = sqlClient\n    .createQuery(BookTable.class, (q, book) -> {\n        return q\n            .where(\n                book\n                    // highlight-next-line\n                    .name() // scalar field "name"\n                    .eq("Book Name")\n            )\n            .where(\n                book\n                    // highlight-next-line\n                    .store() // reference association "store"\n                    .name()\n                    .eq("Store Name")\n            )\n            /*\n              * However, "book.authors()" cannot be used \n              * because the method "authors()" is defined \n              * in BookTableEx, not BookTable.\n              *\n              * That is, compile-time prohibits users \n              * from joining collection associations \n              * in top-level queries\n              */\n            .select(book);\n    })\n    .execute();\nbooks.stream().forEach(System.out::println);\n')),(0,i.kt)("p",null,"The final generated SQL is as follows"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"select \n    tb_1_.ID, \n    tb_1_.NAME, \n    tb_1_.EDITION, \n    tb_1_.PRICE, \n    tb_1_.STORE_ID \nfrom BOOK as tb_1_ \ninner join BOOK_STORE as tb_2_ on tb_1_.STORE_ID = tb_2_.ID \nwhere \n    tb_1_.NAME = ? \nand \n    tb_2_.NAME = ?\n")),(0,i.kt)("h3",{id:"allow-subqueries-created-based-on-tableex"},"Allow subqueries created based on TableEx"),(0,i.kt)("p",null,"Unlike top-level queries, TableEx can be used to create subqueries, update statements, and delete statements."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'List<Author> authors = sqlClient\n    .createQuery(AuthorTable.class, (q, author) -> {\n        return q\n                .where(author.firstName().eq("Author Name"))\n                .where(\n                    q.createWildSubQuery(\n                        // highlight-next-line\n                        BookTableEx.class, // TableEx is allowed\n                        (sq, book) -> {\n                            sq.where(\n                                book.name().eq("Book name"),\n                                book\n                                    // highlight-next-line\n                                    .authors() // collection association\n                                    .eq(author)\n                            );\n                        }\n                    ).exists()\n                )\n                .select(author);\n    })\n    .execute();\nauthors.stream().forEach(System.out::println);\n')),(0,i.kt)("p",null,"The final generated SQL is as follows"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"select \n    tb_1_.ID, \n    tb_1_.FIRST_NAME, \n    tb_1_.LAST_NAME, \n    tb_1_.GENDER \nfrom AUTHOR as tb_1_ \nwhere \n    tb_1_.FIRST_NAME = ? \n    and exists (\n        select 1 \n        from BOOK as tb_2_ \n        /* highlight-start */\n        inner join BOOK_AUTHOR_MAPPING as tb_3_ \n            on tb_2_.ID = tb_3_.BOOK_ID \n        /* highlight-end */\n        where \n            tb_2_.NAME = ? \n        and \n            tb_3_.AUTHOR_ID = tb_1_.ID\n    )\n")),(0,i.kt)("h2",{id:"break-through-soft-limits"},"Break through soft limits"),(0,i.kt)("p",null,"Disallowing collection associations in top-level queries is reasonable in most, but not all cases."),(0,i.kt)("p",null,"For example, users do not query the entire object, but query individual fields, and use SQL keyword ",(0,i.kt)("inlineCode",{parentName:"p"},"distinct")," to counteract the side effects of table joins base on collection associations. This scenario is completely reasonable."),(0,i.kt)("p",null,"So, prohibiting the use of collection associations in top-level queries is a soft restriction, not a rigid one. Can easily break through."),(0,i.kt)("p",null,"There are two ways to break through"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Use weakly typed API ",(0,i.kt)("em",{parentName:"p"},"(not recommended)")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},'List<UUID> bookIds = sqlClient\n    .createQuery(BookTable.class, (q, book) -> {\n        return q\n            .where(\n                book\n                    // highlight-next-line\n                    .<AuthorTable>join("authors")\n                    .firstName()\n                    .ilike("%")\n            )\n            .select(book.id());\n    })\n    .distinct()\n    .execute();\nbookIds.stream().forEach(System.out::println);\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Cast Table to TableEx ",(0,i.kt)("em",{parentName:"p"},"(recommended)")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},'List<UUID> bookIds = sqlClient\n    .createQuery(BookTable.class, (q, book) -> {\n        return q\n            .where(\n                // highlight-next-line\n                ((BookTableEx)book)\n                    // highlight-next-line\n                    .authors()\n                    .firstName()\n                    .ilike("%")\n            )\n            .select(book.id());\n    })\n    .distinct()\n    .execute();\nbookIds.stream().forEach(System.out::println);\n')))),(0,i.kt)("p",null,"Either way, you can break through this soft limitation and use collection associations in top-level queries."),(0,i.kt)("p",null,"The final generated SQL is as follows"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"select \n    distinct tb_1_.ID \nfrom BOOK as tb_1_ \n/* highlight-start */\ninner join BOOK_AUTHOR_MAPPING as tb_2_ \n    on tb_1_.ID = tb_2_.BOOK_ID \ninner join AUTHOR as tb_3_ \n    on tb_2_.AUTHOR_ID = tb_3_.ID \n/* highlight-end */\nwhere lower(tb_3_.FIRST_NAME) like ?\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This limit is added, but it's easy to be broken through. What is the purpose of such a seemingly contradictory approach?"),(0,i.kt)("p",{parentName:"div"},"When a developer really wants to do it, make sure he understands what he's doing."))))}d.isMDXComponent=!0}}]);
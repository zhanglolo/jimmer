"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[7354],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=u(n),h=l,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,i=new Array(o);i[0]=d;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:l,i[1]=r;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2360:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(7294),l=n(6010),o="tabItem_OmH5";function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(o,i),hidden:n},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(3117),l=n(7294),o=n(2389),i=n(7392),r=n(7094),s=n(2466),u=n(6010),c="tabList_uSqn",p="tabItem_LplD";function d(e){var t,n,o,d=e.lazy,h=e.block,m=e.defaultValue,k=e.values,b=e.groupId,g=e.className,v=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=k?k:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),T=(0,i.l)(f,(function(e,t){return e.value===t.value}));if(T.length>0)throw new Error('Docusaurus error: Duplicate values "'+T.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var L=null===m?m:null!=(t=null!=m?m:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=v[0])?void 0:o.props.value;if(null!==L&&!f.some((function(e){return e.value===L})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+L+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,r.U)(),x=y.tabGroupChoices,N=y.setTabGroupChoices,O=(0,l.useState)(L),w=O[0],A=O[1],I=[],j=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var B=x[b];null!=B&&B!==w&&f.some((function(e){return e.value===B}))&&A(B)}var C=function(e){var t=e.currentTarget,n=I.indexOf(t),a=f[n].value;a!==w&&(j(t),A(a),null!=b&&N(b,a))},q=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=I.indexOf(e.currentTarget)+1;n=I[a]||I[0];break;case"ArrowLeft":var l=I.indexOf(e.currentTarget)-1;n=I[l]||I[I.length-1]}null==(t=n)||t.focus()};return l.createElement("div",{className:(0,u.Z)("tabs-container",c)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":h},g)},f.map((function(e){var t=e.value,n=e.label,o=e.attributes;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:function(e){return I.push(e)},onKeyDown:q,onFocus:C,onClick:C},o,{className:(0,u.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),d?(0,l.cloneElement)(v.filter((function(e){return e.props.value===w}))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function h(e){var t=(0,o.Z)();return l.createElement(d,(0,a.Z)({key:String(t)},e))}},4226:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return h}});var a=n(3117),l=n(102),o=(n(7294),n(3905)),i=n(9877),r=n(2360),s=["components"],u={sidebar_position:5,title:"Mutate middle table"},c=void 0,p={unversionedId:"jimmer-sql/mutation/association",id:"jimmer-sql/mutation/association",title:"Mutate middle table",description:"First, the middle table is hidden by the object model and has no direct corresponding java entity type. This issue has been discussed in the article Query middle Table and will not be repeated here.",source:"@site/docs/jimmer-sql/mutation/association.mdx",sourceDirName:"jimmer-sql/mutation",slug:"/jimmer-sql/mutation/association",permalink:"/jimmer/zh/docs/jimmer-sql/mutation/association",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/jimmer-sql/mutation/association.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Mutate middle table"},sidebar:"tutorialSidebar",previous:{title:"Delete Command",permalink:"/jimmer/zh/docs/jimmer-sql/mutation/delete-command"},next:{title:"Support for Spring GraphQL",permalink:"/jimmer/zh/docs/jimmer-sql/spring-graphql"}},d={},h=[{value:"Insert assciations",id:"insert-assciations",level:2},{value:"Inverse transform",id:"inverse-transform",level:2},{value:"Batch insert",id:"batch-insert",level:2},{value:"Check for existence",id:"check-for-existence",level:2},{value:"Delete associations",id:"delete-associations",level:2},{value:"Batch delete",id:"batch-delete",level:2}],m={toc:h};function k(e){var t=e.components,n=(0,l.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"First, the middle table is hidden by the object model and has no direct corresponding java entity type. This issue has been discussed in the article ",(0,o.kt)("a",{parentName:"p",href:"../query/association"},"Query middle Table")," and will not be repeated here."),(0,o.kt)("p",null,"Also, in the ",(0,o.kt)("a",{parentName:"p",href:"./save-command"},"Save command")," chapter, we introduced the save command. It can compare the existing data in the database with the new data to be saved by the user. If an associated properties based on the middle table changes, the data of middle table will be modified."),(0,o.kt)("p",null,"It is true that the save command has many functions, including the modifying middle table. However, sometimes, we just need to simply insert or delete the data of middle table, we do not need the powerful functions of the save command, but we want the modification behavior of the middle table to be simple and efficient enough."),(0,o.kt)("p",null,"jimmer-sql allows developers to directly insert and delete data for middle tables in the simplest and most efficient way."),(0,o.kt)("h2",{id:"insert-assciations"},"Insert assciations"),(0,o.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"sqlClient\n    .getAssociations(\n        BookTableEx.class, \n        BookTableEx::authors\n    )\n    // highlight-next-line\n    .save(12L, 3L);\n"))),(0,o.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"sqlClient\n    .getListAssociations(Book::authors)\n    // highlight-next-line\n    .save(12L, 3L)\n")))),(0,o.kt)("p",null,"The generated SQL is as follows"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"insert into \n    BOOK_AUTHOR_MAPPING(\n        /* highlight-next-line */\n        BOOK_ID, AUTHOR_ID\n    ) \n    values (?, ?)\n")),(0,o.kt)("p",null,"This example demonstrates how to use the association property ",(0,o.kt)("inlineCode",{parentName:"p"},"Book.authors")," to manipulate the middle table."),(0,o.kt)("p",null,"In the same way, we can also achieve the same purpose through the association property ",(0,o.kt)("inlineCode",{parentName:"p"},"Authors.books"),":"),(0,o.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"sqlClient\n    .getAssociations(\n        AuthorTableEx.class,\n        AuthorTableEx::books\n    )\n    // highlight-next-line\n    .save(3L, 12L);\n"))),(0,o.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"sqlClient\n    .getListAssociations(Author::books)\n    // highlight-next-line\n    .save(3L, 12L)\n")))),(0,o.kt)("p",null,"Note that the parameter order of the ",(0,o.kt)("inlineCode",{parentName:"p"},"save")," method is different compared to the previous example because the direction of the association is different."),(0,o.kt)("p",null,"The generated SQL is as follows"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"insert into \n    BOOK_AUTHOR_MAPPING(\n        /* highlight-next-line */\n        AUTHOR_ID, BOOK_ID\n    )\n    values (?, ?)\n")),(0,o.kt)("h2",{id:"inverse-transform"},"Inverse transform"),(0,o.kt)("p",null,"For bidirectional associations, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"reverse")," to switch between positive and negative associations"),(0,o.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"Associations bookToAuthor = sqlClient\n    .getAssociations(\n        BookTableEx.class,\n        BookTableEx::authors\n    );\nAssociations authorToBook = sqlClient\n    .getAssociations(\n        AuthorTableEx.class,\n        AuthorTableEx::books\n    );\nAssociations authorToBook2 = \n    // highlight-next-line\n    bookToAuthor.reverse();\nAssociations bookToAuthor2 =\n    // highlight-next-line\n    authorToBook.reverse();\n"))),(0,o.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"val bookToAuthor = \n    sqlClient.getListAssociations(\n        Book::authors\n    )\nval authorToBook = \n    sqlClient.getListAssociations(\n        Author::books\n    )\nval authorToBook2 = \n    // highlight-next-line\n    bookToAuthor.reverse()\nval bookToAuthor2 = \n    // highlight-next-line\n    authorToBook.reverse()\n")))),(0,o.kt)("p",null,"In this code:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"bookToAuthor")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"bookToAuthor2")," are exactly equivalent"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"authorToBook")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"authorToBook2")," are exactly equivalent")),(0,o.kt)("h2",{id:"batch-insert"},"Batch insert"),(0,o.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"sqlClient\n    .getAssociations(\n        BookTableEx.class,\n        BookTableEx::authors\n    )\n    // highlight-next-line\n    .batchSave(\n        Arrays.asList(\n            new Tuple2<>(10L, 1L),\n            new Tuple2<>(11L, 1L),\n            new Tuple2<>(12L, 1L),\n            new Tuple2<>(10L, 3L),\n            new Tuple2<>(11L, 3L),\n            new Tuple2<>(12L, 3L)\n        )\n    );\n"))),(0,o.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"sqlClient\n    .getListAssociations(\n        Book::authors\n    ) \n    // highlight-next-line\n    .batchSave(\n        listOf(\n            Tuple2(10L, 1L),\n            Tuple2(11L, 1L),\n            Tuple2(12L, 1L),\n            Tuple2(10L, 3L),\n            Tuple2(11L, 3L),\n            Tuple2(12L, 3L)\n        )\n    )\n")))),(0,o.kt)("p",null,"There are 3 books, 2 authors, and 6 combinations in total. The ",(0,o.kt)("inlineCode",{parentName:"p"},"batchSave")," method inserts all these 6 combinations into the middle table, and the generated SQL is as follows"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"insert into BOOK_AUTHOR_MAPPING(\n    BOOK_ID, AUTHOR_ID\n) values \n    /* highlight-start */\n    (?, ?), \n    (?, ?), \n    (?, ?), \n    (?, ?), \n    (?, ?), \n    (?, ?)\n    /* highlight-end */\n")),(0,o.kt)("p",null,"The code above is very cumbersome, ",(0,o.kt)("inlineCode",{parentName:"p"},"3 * 2 = 6")," is acceptable, but what about ",(0,o.kt)("inlineCode",{parentName:"p"},"7 * 9 = 63"),"? Is it acceptable to build 63 tuples?"),(0,o.kt)("p",null,"jimmer-sql provides a shortcut"),(0,o.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"sqlClient\n    .getAssociations(\n        BookTableEx.class,\n        BookTableEx::authors\n    )\n    // Batch save `Cartesian product` \n    // of two id collections\n    // highlight-next-line\n    .batchSave(\n        Arrays.asList(\n            10L, 11L, 12L\n        ),\n        Arrays.asList(\n            1L, 3L\n        )\n    );\n"))),(0,o.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"sqlClient\n    .getListAssociations(\n        Book::authors\n    )\n    // Batch save `Cartesian product` \n    // of two id collections\n    // highlight-next-line\n    .batchSave(\n        listOf(10L, 11L, 12L),\n        listOf(1L, 3L)\n    )\n")))),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"batchSave")," method above takes two collection parameters and inserts the Cartesian product of the two collections into the middle table table, so the function is the same as the previous example."),(0,o.kt)("h2",{id:"check-for-existence"},"Check for existence"),(0,o.kt)("p",null,"If you insert an existing id tuple into the middle table, the database will report an error because the uniqueness constraint is violated."),(0,o.kt)("p",null,"To solve this problem, an existence check can be performed."),(0,o.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"sqlClient\n    .getAssociations(\n        BookTableEx.class,\n        BookTableEx::authors\n    )\n    .batchSaveCommand(\n        Arrays.asList(\n            10L, 11L, 12L\n        ),\n        Arrays.asList(\n            1L, 3L\n        )\n    )\n    // highlight-next-line\n    .checkExistence()\n    .execute();\n"))),(0,o.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"sqlClient\n    .getListAssociations(\n        Book::authors\n    )\n    // Batch save `Cartesian product` \n    // of two id collections\n    // highlight-next-line\n    .batchSave(\n        listOf(10L, 11L, 12L),\n        listOf(1L, 3L),\n        // highlight-next-line\n        checkExistence = true\n    )\n")))),(0,o.kt)("p",null,"Here ",(0,o.kt)("inlineCode",{parentName:"p"},"checkExistence()")," means to first check which data to be inserted already exists, and then only insert data that does not exist."),(0,o.kt)("p",null,"The generated SQL statement is as follows"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Check which data to be inserted already exists"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"select \n    BOOK_ID, AUTHOR_ID \nfrom BOOK_AUTHOR_MAPPING \nwhere \n    (BOOK_ID, AUTHOR_ID) in(\n        (?, ?), \n        (?, ?),\n        (?, ?),\n        (?, ?),\n        (?, ?),\n        (?, ?)\n    )\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Using the query results of the previous step, the data that really needs to be inserted can be calculated. If there is no data to be inserted, skip this step; otherwise, execute this step."),(0,o.kt)("p",{parentName:"li"},"Here, assuming that there are still two rows that really need to be inserted after the judgment, the generated SQL is:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"insert into BOOK_AUTHOR_MAPPING(\n    BOOK_ID, AUTHOR_ID\n) values \n    (?, ?), \n    (?, ?)\n")))),(0,o.kt)("h2",{id:"delete-associations"},"Delete associations"),(0,o.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"sqlClient\n    .getAssociations(\n            BookTableEx.class,\n            BookTableEx::authors\n    )\n    // highlight-next-line\n    .delete(12L, 3L);\n"))),(0,o.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"sqlClient\n    .getListAssociations(\n        Book::authors\n    ) \n    // highlight-next-line\n    .delete(12L, 3L)\n")))),(0,o.kt)("p",null,"The generated SQL is as follows"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"delete from BOOK_AUTHOR_MAPPING \nwhere \n    (BOOK_ID, AUTHOR_ID) in (\n        (?, ?)\n    )\n")),(0,o.kt)("h2",{id:"batch-delete"},"Batch delete"),(0,o.kt)("p",null,"Similar to batch insert, there are two ways to implement batch delete"),(0,o.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"sqlClient\n    .getAssociations(\n        BookTableEx.class,\n        BookTableEx::authors\n    )\n    // highlight-next-line\n    .batchDelete(\n        Arrays.asList(\n            new Tuple2<>(10L, 1L),\n            new Tuple2<>(11L, 1L),\n            new Tuple2<>(12L, 1L),\n            new Tuple2<>(10L, 3L),\n            new Tuple2<>(11L, 3L),\n            new Tuple2<>(12L, 3L),\n        )\n    );\n")),(0,o.kt)("p",null,"Or"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"sqlClient\n    .getAssociations(\n        BookTableEx.class,\n        BookTableEx::authors\n    )\n    // highlight-next-line\n    .batchDelete(\n        Arrays.asList(10L, 11L, 12L),\n        Arrays.asList(1L, 3L)\n    );\n"))),(0,o.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"sqlClient\n    .getListAssociations(\n        Book::authors\n    ) \n    // highlight-next-line\n    .batchDelete(\n        listOf(\n            Tuple2(10L, 1L),\n            Tuple2(11L, 1L),\n            Tuple2(12L, 1L),\n            Tuple2(10L, 3L),\n            Tuple2(11L, 3L),\n            Tuple2(12L, 3L)\n        )\n    )\n")),(0,o.kt)("p",null,"Or"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"sqlClient\n    .getListAssociations(\n        Book::authors\n    ) \n    // highlight-next-line\n    .batchDelete(\n        listOf(10L, 11L, 12L),\n        listOf(1L, 3L)\n    )\n")))),(0,o.kt)("p",null,"The generated SQL is as follows"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"delete from BOOK_AUTHOR_MAPPING \nwhere \n    (BOOK_ID, AUTHOR_ID) in (\n        (?, ?), \n        (?, ?),\n        (?, ?), \n        (?, ?),\n        (?, ?), \n        (?, ?)\n    )\n")))}k.isMDXComponent=!0}}]);
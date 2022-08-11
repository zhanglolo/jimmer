"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[7773],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var u=2;u<o;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2360:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(7294),i=n(6010),o="tabItem_OmH5";function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(o,r),hidden:n},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(3117),i=n(7294),o=n(2389),r=n(7392),l=n(7094),s=n(2466),u=n(6010),c="tabList_uSqn",p="tabItem_LplD";function d(e){var t,n,o,d=e.lazy,m=e.block,h=e.defaultValue,b=e.values,k=e.groupId,f=e.className,N=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=b?b:N.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,r.l)(v,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===h?h:null!=(t=null!=h?h:null==(n=N.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=N[0])?void 0:o.props.value;if(null!==y&&!v.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var _=(0,l.U)(),T=_.tabGroupChoices,O=_.setTabGroupChoices,q=(0,i.useState)(y),w=q[0],I=q[1],j=[],x=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var C=T[k];null!=C&&C!==w&&v.some((function(e){return e.value===C}))&&I(C)}var A=function(e){var t=e.currentTarget,n=j.indexOf(t),a=v[n].value;a!==w&&(x(t),I(a),null!=k&&O(k,a))},B=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=j.indexOf(e.currentTarget)+1;n=j[a]||j[0];break;case"ArrowLeft":var i=j.indexOf(e.currentTarget)-1;n=j[i]||j[j.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:(0,u.Z)("tabs-container",c)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":m},f)},v.map((function(e){var t=e.value,n=e.label,o=e.attributes;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:function(e){return j.push(e)},onKeyDown:B,onFocus:A,onClick:A},o,{className:(0,u.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),d?(0,i.cloneElement)(N.filter((function(e){return e.props.value===w}))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},N.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function m(e){var t=(0,o.Z)();return i.createElement(d,(0,a.Z)({key:String(t)},e))}},3711:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return m}});var a=n(3117),i=n(102),o=(n(7294),n(3905)),r=n(9877),l=n(2360),s=["components"],u={sidebar_position:5,title:"Query middle table"},c=void 0,p={unversionedId:"jimmer-sql/query/association",id:"jimmer-sql/query/association",title:"Query middle table",description:"Querying middle tables is a distinctive small feature of jimmer-sql.",source:"@site/docs/jimmer-sql/query/association.mdx",sourceDirName:"jimmer-sql/query",slug:"/jimmer-sql/query/association",permalink:"/jimmer/zh/docs/jimmer-sql/query/association",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/jimmer-sql/query/association.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Query middle table"},sidebar:"tutorialSidebar",previous:{title:"Object Fetcher",permalink:"/jimmer/zh/docs/jimmer-sql/query/fetcher"},next:{title:"\u4fee\u6539",permalink:"/jimmer/zh/docs/jimmer-sql/mutation/"}},d={},m=[{value:"Middle tables are hidden by the object model",id:"middle-tables-are-hidden-by-the-object-model",level:2},{value:"Query the middle table directly",id:"query-the-middle-table-directly",level:2},{value:"Compare with ordinary query",id:"compare-with-ordinary-query",level:2},{value:"1. Implement a function based on middle table subquery",id:"1-implement-a-function-based-on-middle-table-subquery",level:3},{value:"2. Implement the same functionality based on ordinary subquery",id:"2-implement-the-same-functionality-based-on-ordinary-subquery",level:3}],h={toc:m};function b(e){var t=e.components,n=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Querying middle tables is a distinctive small feature of jimmer-sql."))),(0,o.kt)("h2",{id:"middle-tables-are-hidden-by-the-object-model"},"Middle tables are hidden by the object model"),(0,o.kt)("p",null,"Let's review this entity interface definition code"),(0,o.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@Entity\npublic interface Book {\n\n    @ManyToMany\n    @JoinTable(\n        // highlight-next-line\n        name = "BOOK_AUTHOR_MAPPING", \n        joinColumnName = "BOOK_ID", \n        inverseJoinColumnName = "AUTHOR_ID"\n    )\n    List<Author> authors();\n\n    ...omit other code...\n}\n'))),(0,o.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'@Entity\ninterface Book {\n\n    @ManyToMany\n    @JoinTable(\n        // highlight-next-line\n        name = "BOOK_AUTHOR_MAPPING", \n        joinColumnName = "BOOK_ID", \n        inverseJoinColumnName = "AUTHOR_ID"\n    )\n    val authors: List<Author>\n\n    ...omit other code...\n}\n')))),(0,o.kt)("p",null,"In the above code, the ",(0,o.kt)("inlineCode",{parentName:"p"},"BOOK_AUTHOR_MAPPING")," table is used as an middle table."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The table ",(0,o.kt)("inlineCode",{parentName:"li"},"BOOK")," of the database corresponds to Java's entity interface ",(0,o.kt)("inlineCode",{parentName:"li"},"Book"),"."),(0,o.kt)("li",{parentName:"ul"},"The table ",(0,o.kt)("inlineCode",{parentName:"li"},"AUTHOR")," of the database corresponds to Java's entity interface ",(0,o.kt)("inlineCode",{parentName:"li"},"Author"),"."),(0,o.kt)("li",{parentName:"ul"},"However, the middle table ",(0,o.kt)("inlineCode",{parentName:"li"},"BOOK_AUTHOR_MAPPING")," of the database has no corresponding entity interface in the Java code.")),(0,o.kt)("p",null,"That is, the middle table is hidden by the object model."),(0,o.kt)("h2",{id:"query-the-middle-table-directly"},"Query the middle table directly"),(0,o.kt)("p",null,"jimmer-sql provides an interesting function, even if the middle table is hidden and has no corresponding entity, it can be directly queried."),(0,o.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"List<Association<Book, Author>> associations =\n    sqlClient\n        // highlight-next-line\n        .createAssociationQuery(\n            BookTableEx.class,\n            BookTableEx::authors,\n            (q, association) -> {\n                q.where(\n                    association.source().id().eq(3L)\n                );\n                return q.select(association);\n            }\n        ).execute();\nassociations.forEach(System.out::println);\n"))),(0,o.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"val associations = sqlClient\n    .queries\n    .forList(Book::authors) {\n        where(table.source.id eq 3L)\n        select(table)\n    }\n    .execute()\nassociations.forEach(::println)\n")))),(0,o.kt)("p",null,"Here, ",(0,o.kt)("inlineCode",{parentName:"p"},"createAssociationQuery")," in java or ",(0,o.kt)("inlineCode",{parentName:"p"},"queries.forList")," in kotlin means to create a query based on the middle table, not based on the entity table."),(0,o.kt)("p",null,"The first two parameters, ",(0,o.kt)("inlineCode",{parentName:"p"},"BookTableEx.class")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"BookTableEx::authors"),", represent the middle table ",(0,o.kt)("inlineCode",{parentName:"p"},"BOOK_AUTHOR_MAPPING")," corresponding to the association ",(0,o.kt)("inlineCode",{parentName:"p"},"Book.authors"),"."),(0,o.kt)("p",null,"The generated SQL is as follows"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"select \n    tb_1_.BOOK_ID, \n    tb_1_.AUTHOR_ID \n/* hight-next-line */\nfrom BOOK_AUTHOR_MAPPING as tb_1_\nwhere tb_1_.BOOK_ID = ?\n")),(0,o.kt)("p",null,"Sure enough, this is a query based on an middle table."),(0,o.kt)("p",null,"The final print result is as follows (the original output is compact, formatted here for ease of reading):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Association{\n    source={\n        "id":3\n    }, target={\n        "id":1\n    }\n}\nAssociation{\n    source={\n        "id":3\n    }, \n    target={\n        "id":2\n    }\n}\n')),(0,o.kt)("p",null,"The return data is a list of ",(0,o.kt)("inlineCode",{parentName:"p"},"Association")," objects"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"package org.babyfish.jimmer.sql.association;\n\npublic class Association<S, T> {\n\n    public Association(S source, T target) {\n        this.source = source;\n        this.target = target;\n    }\n\n    public S source() {\n        return source;\n    }\n\n    public T target() {\n        return target;\n    }\n}\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Association<S, T>")," represents the middle table entity associated from the ",(0,o.kt)("inlineCode",{parentName:"p"},"S")," type to the ",(0,o.kt)("inlineCode",{parentName:"p"},"T")," type. middle table entities are pseudo-entities and have no id. It has only two properties:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"source"),": The object corresponding to the foreign key of the middle table pointing to the source table.(in this case, it is ",(0,o.kt)("inlineCode",{parentName:"li"},"Book"),")."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"target"),": The object corresponding to the foreign key of the middle table pointing to the target table. (in this case, it is",(0,o.kt)("inlineCode",{parentName:"li"},"Author"),").")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In this example, the object format of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Association")," is not defined using an object fetcher (in fact, the ",(0,o.kt)("inlineCode",{parentName:"p"},"Association")," does not support object fetcher either), so the ",(0,o.kt)("inlineCode",{parentName:"p"},"source")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"targate")," return objects with only id.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Author")," also has a inverse many-to-many association ",(0,o.kt)("inlineCode",{parentName:"p"},"Author.books"),", which is a mirror of ",(0,o.kt)("inlineCode",{parentName:"p"},"Book.authors"),"."),(0,o.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@Entity\npublic interface Author {\n\n    // highlight-next-line\n    @ManyToMany(mappedBy = "authors")\n    List<Book> books();\n\n    ...\n}\n'))),(0,o.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@Entity\ninterface Author {\n\n    // highlight-next-line\n    @ManyToMany(mappedBy = "authors")\n    val books: List<Book>\n\n    ...\n}\n')))),(0,o.kt)("p",{parentName:"li"},"Deveoper can also create middle table query based on ",(0,o.kt)("inlineCode",{parentName:"p"},"Author.books"),", but ",(0,o.kt)("inlineCode",{parentName:"p"},"source")," stands for ",(0,o.kt)("inlineCode",{parentName:"p"},"Author")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"target")," stands for ",(0,o.kt)("inlineCode",{parentName:"p"},"Book"),", contrary to the previous example."))))),(0,o.kt)("p",null,"In this example, we only query the middle table itself. So, there are only ids in the ",(0,o.kt)("inlineCode",{parentName:"p"},"source")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"target")," objects."),(0,o.kt)("p",null,"To get the complete ",(0,o.kt)("inlineCode",{parentName:"p"},"source")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"target")," objects, you can join the tables and return a tuple, like this"),(0,o.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"List<Tuple2<Book, Author>> tuples =\n    sqlClient\n        .createAssociationQuery(\n            BookTableEx.class,\n            BookTableEx::authors,\n            (q, association) -> {\n                q.where(\n                    association.source().id().eq(3L)\n                );\n                // highlight-next-line\n                return q.select(\n                    association.source(),\n                    association.target()\n                );\n            }\n        ).execute();\ntuples.forEach(System.out::println);\n"))),(0,o.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"val associations = sqlClient\n    .queries\n    .forList(Book::authors) {\n        where(table.source.id eq 3L)\n        select(\n            table.source,\n            table.target\n        )\n    }\n    .execute()\nassociations.forEach(::println)\n")))),(0,o.kt)("p",null,"The generated SQL is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"select \n\n    /* source */\n    tb_1_.BOOK_ID, \n    tb_2_.NAME, \n    tb_2_.EDITION, \n    tb_2_.PRICE, \n    tb_2_.STORE_ID, \n\n    /* target */\n    tb_1_.AUTHOR_ID, \n    tb_3_.FIRST_NAME, \n    tb_3_.LAST_NAME, \n    tb_3_.GENDER\n\nfrom BOOK_AUTHOR_MAPPING as tb_1_ \ninner join BOOK as tb_2_ \n    on tb_1_.BOOK_ID = tb_2_.ID \ninner join AUTHOR as tb_3_ \n    on tb_1_.AUTHOR_ID = tb_3_.ID \nwhere tb_1_.BOOK_ID = ?\n")),(0,o.kt)("p",null,"The final print result is as follows (the original output is compact, formatted here for ease of reading):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Tuple2{\n    _1={\n        "id":3,\n        "name":"Learning GraphQL",\n        "edition":3,\n        "price":51.00,\n        "store":{\n            "id":1\n        }\n    }, \n    _2={\n        "id":1,\n        "firstName":"Alex",\n        "lastName":"Banks",\n        "gender":"MALE"\n    }\n}\nTuple2{\n    _1={\n        "id":3,\n        "name":"Learning GraphQL",\n        "edition":3,\n        "price":51.00,\n        "store":{\n            "id":1\n        }\n    }, \n    _2={\n        "id":2,\n        "firstName":"Eve",\n        "lastName":"Procello",\n        "gender":"FEMALE"\n    }\n}\n')),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The association object ",(0,o.kt)("inlineCode",{parentName:"p"},"Association<S, T>")," is simple and special and does not need to support ",(0,o.kt)("a",{parentName:"p",href:"./fetcher"},"object fetcher"),"."),(0,o.kt)("p",{parentName:"div"},"Note that this only refers to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Association<S, T>")," object ",(0,o.kt)("b",null," itself")," does not support, its association property ",(0,o.kt)("inlineCode",{parentName:"p"},"source")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"target")," still support ",(0,o.kt)("a",{parentName:"p",href:"./fetcher"},"object fetcher"),", like this"),(0,o.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-java"},"return q.select(\n    association\n        .source()\n        // highlight-next-line\n        .fetch(\n            BookFetcher.$\n                .allScalarFields()\n                .store(\n                    BookStoreFetcher.$.allScalarFields()\n                )\n        ),\n    association.target()\n);\n"))),(0,o.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"select(\n    table\n        .source\n        // highlight-next-line\n        .fetchBy {\n            allScalarFields()\n            store { \n                allScalarFields()\n            }\n        },\n    table.target\n)\n")))))),(0,o.kt)("h2",{id:"compare-with-ordinary-query"},"Compare with ordinary query"),(0,o.kt)("p",null,"Readers may think that the value of queries based on middle table is to allow developers to write more performant queries."),(0,o.kt)("p",null,"But that's not the case. Due to the existence of the two optimization features ",(0,o.kt)("a",{parentName:"p",href:"../table-join#phantom-join"},"phantom join")," and ",(0,o.kt)("a",{parentName:"p",href:"../table-join#half-join"},"half join"),", application can get ideal performance whether the query is based on an middle table or not. Whether or not to use a query based on an middle table is entirely up to the user's own preferences."),(0,o.kt)("h3",{id:"1-implement-a-function-based-on-middle-table-subquery"},"1. Implement a function based on middle table subquery"),(0,o.kt)("p",null,"In the previous code, we demonstrated a top-level query based on an middle table; this example demonstrates a subquery based on an middle table."),(0,o.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'List<Book> books = sqlClient\n    .createQuery(BookTable.class, (q, book) -> {\n        q.where(\n            book.id().in(\n                // highlight-next-line\n                q.createAssociationSubQuery(\n                    BookTableEx.class,\n                    BookTableEx::authors,\n                    (sq, association) -> {\n                        sq.where(\n                            association\n                                .target() // \u03b1\n                                .firstName().eq("Alex")\n                        );\n                        return sq.select(\n                            association\n                                .source() // \u03b2\n                                .id()\n                        );\n                    }\n                )\n            )\n        );\n        return q.select(book);\n    }).execute();\n'))),(0,o.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'val books = sqlClient\n    .createQuery(Book::class) {\n        where(\n            table.id valueIn\n                // highlight-next-line\n                subQueries.forList(Book::authors) {\n                    where(\n                        table\n                        .target // \u03b1\n                        .firstName eq "Alex"\n                    )\n                    select(\n                        table\n                        .source // \u03b2\n                        .id\n                    )\n                }\n        )\n        select(table)\n    }\n    .execute()\n')))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"createAssociationSubQuery")," in java or ",(0,o.kt)("inlineCode",{parentName:"p"},"subQueries.forList")," in kotlin is used to create a subquery based on an middle table. The query looks for all books that contain authors whose ",(0,o.kt)("inlineCode",{parentName:"p"},"firstName"),' is "Alex".')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"association.target()")," at ",(0,o.kt)("inlineCode",{parentName:"p"},"\u03b1")," is a real table join, which will generate a JOIN clause to the ",(0,o.kt)("inlineCode",{parentName:"p"},"AUTHOR")," table in SQL.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"association.source()")," at ",(0,o.kt)("inlineCode",{parentName:"p"},"\u03b2")," is a ",(0,o.kt)("a",{parentName:"p",href:"../table-join#phantom-join"},"phantom join"),", JOIN clause will not be generated in SQL."))),(0,o.kt)("p",null,"The generated SQL is as follows: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"select \n    tb_1_.ID, \n    tb_1_.NAME, \n    tb_1_.EDITION, \n    tb_1_.PRICE, \n    tb_1_.STORE_ID \nfrom BOOK as tb_1_ \nwhere \n    tb_1_.ID in (\n        /* highlight-next-line */\n        select \n            tb_2_.BOOK_ID \n        from BOOK_AUTHOR_MAPPING as tb_2_ \n        inner join AUTHOR as tb_3_ \n            on tb_2_.AUTHOR_ID = tb_3_.ID \n        where tb_3_.FIRST_NAME = ?\n    )\n")),(0,o.kt)("h3",{id:"2-implement-the-same-functionality-based-on-ordinary-subquery"},"2. Implement the same functionality based on ordinary subquery"),(0,o.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'List<Book> books = sqlClient\n        .createQuery(BookTable.class, (q, book) -> {\n            q.where(\n                book.id().in(\n                    // highlight-next-line\n                    q.createSubQuery(\n                        AuthorTableEx.class,\n                        (sq, author) -> {\n                            sq.where(\n                                author.firstName()\n                                    .eq("Alex")\n                            );\n                            return sq.select(\n                                author.books() // \u03b1\n                                    .id()\n                            );\n                        }\n                    )\n                )\n            );\n            return q.select(book);\n        }).execute();\n'))),(0,o.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'val books = sqlClient\n    .createQuery(Book::class) {\n        where(\n            table.id valueIn\n                // highlight-next-line\n                subQuery(Author::class) {\n                    where(\n                        table.firstName eq "Alex"\n                    )\n                    select(\n                        table\n                            .books // \u03b1\n                            .id\n                    )\n                }\n        )\n        select(table)\n    }\n    .execute()\n')))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"createSubQuery")," in java or ",(0,o.kt)("inlineCode",{parentName:"p"},"subQuery")," in kotlin is used to create a ordinary subquery without using middle table. achieve the exact same functionality.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"author.books()")," at ",(0,o.kt)("inlineCode",{parentName:"p"},"\u03b1")," is a ",(0,o.kt)("a",{parentName:"p",href:"../table-join#half-join"},"half join"),", so only need JOIN from ",(0,o.kt)("inlineCode",{parentName:"p"},"AUTHOR")," table to middle table ",(0,o.kt)("inlineCode",{parentName:"p"},"BOOK_AUTHOR_MAPPING")," is generated, without further JOIN to the ",(0,o.kt)("inlineCode",{parentName:"p"},"BOOK table"),"."))),(0,o.kt)("p",null,"The generated SQL is as follows: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"select \n\n    tb_1_.ID, \n    tb_1_.NAME, \n    tb_1_.EDITION, \n    tb_1_.PRICE, \n    tb_1_.STORE_ID \n\nfrom BOOK as tb_1_ \nwhere \n    tb_1_.ID in (\n        /* highlight-next-line */\n        select \n            tb_3_.BOOK_ID \n        from AUTHOR as tb_2_ \n        inner join BOOK_AUTHOR_MAPPING as tb_3_ \n            on tb_2_.ID = tb_3_.AUTHOR_ID \n        where tb_2_.FIRST_NAME = ?\n    )\n")),(0,o.kt)("p",null,"Comparing these two SQL statements, it is not difficult to find that they have the same function and the same performance."),(0,o.kt)("p",null,"Therefore, whether or not to use queries based on middle tables has no impact on performance. Feel free to choose the style you like."))}b.isMDXComponent=!0}}]);
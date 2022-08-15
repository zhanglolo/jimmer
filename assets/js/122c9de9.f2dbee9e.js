"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[2577],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),p=o,h=m["".concat(s,".").concat(p)]||m[p]||d[p]||r;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2360:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(7294),o=n(6010),r="tabItem_OmH5";function l(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,l),hidden:n},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(3117),o=n(7294),r=n(2389),l=n(7392),i=n(7094),s=n(2466),c=n(6010),u="tabList_uSqn",d="tabItem_LplD";function m(e){var t,n,r,m=e.lazy,p=e.block,h=e.defaultValue,k=e.values,b=e.groupId,v=e.className,g=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=k?k:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),f=(0,l.l)(y,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===h?h:null!=(t=null!=h?h:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=g[0])?void 0:r.props.value;if(null!==N&&!y.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,i.U)(),x=w.tabGroupChoices,T=w.setTabGroupChoices,B=(0,o.useState)(N),q=B[0],j=B[1],S=[],I=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var L=x[b];null!=L&&L!==q&&y.some((function(e){return e.value===L}))&&j(L)}var C=function(e){var t=e.currentTarget,n=S.indexOf(t),a=y[n].value;a!==q&&(I(t),j(a),null!=b&&T(b,a))},E=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=S.indexOf(e.currentTarget)+1;n=S[a]||S[0];break;case"ArrowLeft":var o=S.indexOf(e.currentTarget)-1;n=S[o]||S[S.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,c.Z)("tabs-container",u)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":p},v)},y.map((function(e){var t=e.value,n=e.label,r=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:q===t?0:-1,"aria-selected":q===t,key:t,ref:function(e){return S.push(e)},onKeyDown:E,onFocus:C,onClick:C},r,{className:(0,c.Z)("tabs__item",d,null==r?void 0:r.className,{"tabs__item--active":q===t})}),null!=n?n:t)}))),m?(0,o.cloneElement)(g.filter((function(e){return e.props.value===q}))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==q})}))))}function p(e){var t=(0,r.Z)();return o.createElement(m,(0,a.Z)({key:String(t)},e))}},6346:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return p}});var a=n(3117),o=n(102),r=(n(7294),n(3905)),l=n(9877),i=n(2360),s=["components"],c={sidebar_position:4,title:"jimmer-sql subproject"},u=void 0,d={unversionedId:"jimmer-sql/index",id:"jimmer-sql/index",title:"jimmer-sql subproject",description:"This article is copied from the part-ii of the homepage, and the content is exactly the same.",source:"@site/docs/jimmer-sql/index.mdx",sourceDirName:"jimmer-sql",slug:"/jimmer-sql/",permalink:"/jimmer/docs/jimmer-sql/",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/jimmer-sql/index.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"jimmer-sql subproject"},sidebar:"tutorialSidebar",previous:{title:"Validation",permalink:"/jimmer/docs/jimmer-core/validation"},next:{title:"Get started",permalink:"/jimmer/docs/jimmer-sql/usage"}},m={},p=[{value:"Revolutionary ORM Based on the Immutable Data Model",id:"revolutionary-orm-based-on-the-immutable-data-model",level:2},{value:"1. Ultimate performance",id:"1-ultimate-performance",level:3},{value:"2. Strong typed SQL DSL",id:"2-strong-typed-sql-dsl",level:3},{value:"3. Mix native SQL",id:"3-mix-native-sql",level:3},{value:"4. <strong>External cache</strong>",id:"4-external-cache",level:3},{value:"5. <strong>Object Fetcher</strong>",id:"5-object-fetcher",level:3},{value:"6. <strong>Save Command</strong>:",id:"6-save-command",level:3},{value:"7. Paging",id:"7-paging",level:3},{value:"8. Dynamic table joins",id:"8-dynamic-table-joins",level:3},{value:"9. Support for Spring GraphQL",id:"9-support-for-spring-graphql",level:3},{value:"10. Extreme lightweight.",id:"10-extreme-lightweight",level:3}],h={toc:p};function k(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This article is copied from the part-ii of the homepage, and the content is exactly the same."),(0,r.kt)("p",{parentName:"div"},"If you have already read the first part-ii of the homepage, you can skip this article and go straight to the more in-depth documentation."))),(0,r.kt)("h2",{id:"revolutionary-orm-based-on-the-immutable-data-model"},"Revolutionary ORM Based on the Immutable Data Model"),(0,r.kt)("h3",{id:"1-ultimate-performance"},"1. Ultimate performance"),(0,r.kt)("p",null,"Benchmark report is ",(0,r.kt)("a",{parentName:"p",href:"../Benchmark"},"here"),", benchmark source code is ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/babyfish-ct/jimmer/tree/main/benchmark"},"here")),(0,r.kt)("h3",{id:"2-strong-typed-sql-dsl"},"2. Strong typed SQL DSL"),(0,r.kt)("p",null,"Check for errors at compile time rather than runtime whenever possible with strong typed SQL DSL like JPA Criteria, QueryDSL, or JOOQ. Kotlin nullsafety would be introduced to SQL for kotlin API."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Quick view"),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'List<Book> books = sqlClient\n    .createQuery(BookTable.class, (q, book) -> {\n        return q\n            .where(\n                book.id().in(\n                    q.createSubQuery(AuthorTableEx.class, (sq, author) -> {\n                        return sq\n                            .where(\n                                author.firstName().eq("Alex")\n                            )\n                            .select(author.books().id());\n                    })\n                )\n            )\n            .select(book);\n    })\n    .execute();\n'))),(0,r.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val books = sqlClient\n    .createQuery(Book::class) {\n        where(\n            table.id valueIn subQuery(Author::class) {\n                where(table.firstName eq "Alex")\n                select(table.books.id)\n            }\n        )\n        select(table)\n    }\n    .execute()\n'))))),(0,r.kt)("h3",{id:"3-mix-native-sql"},"3. Mix native SQL"),(0,r.kt)("p",null,"Strongly typed SQL DSL and Native SQL can be mixed without extra restrictions, Using database-specific features is very easy;"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Quick view"),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'List<Tuple3<Book, Integer, Integer>> rows = sqlClient\n    .createQuery(BookTable.class, (q, book) -> {\n        return q.select(\n            book,\n            Expression.numeric().sql(\n                Integer.class,\n                "rank() over(order by %e desc)",\n                it -> {\n                    it.expression(book.price());\n                }\n            ),\n            Expression.numeric().sql(\n                Integer.class,\n                "rank() over(partition by %e order by %e desc)",\n                it -> {\n                    it.expression(book.store().id());\n                    it.expression(book.price());\n                }\n            )\n        );\n    })\n    .execute();\n'))),(0,r.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val rows = sqlClient\n    .createQuery(Book::class) {\n        select(\n            table,\n            sql(\n                Int::class, \n                "rank() over(order by %e desc)"\n            ) {\n                expression(table.price)\n            },\n            sql(\n                Int::class, \n                "rank() over(partition by %e order by %e desc)"\n            ) {\n                expression(table.store.id)\n                expression(table.price)\n            }\n        )\n    }\n    .execute()\n'))))),(0,r.kt)("h3",{id:"4-external-cache"},"4. ",(0,r.kt)("strong",{parentName:"h3"},"External cache")),(0,r.kt)("p",null,"Work with any external cache. By default, the framework is just a very lightweight and powerful SQL generator without caching. Still, users can attach any external cache"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"No assumptions are made about the user's cache technology selection, developers can choose any cache technology. The framework only manages and coordinates the cache, and does not do cache implementation.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Unlike other ORMs, it supports not only object caching, but also associative caching. The two are combined behind the scenes and can query object trees with any depth and breadth, especially when recursively querying self-associative properties."))),(0,r.kt)("p",null,"For high-performance complex data structure queries, the following two tasks will cause a large workload for developers."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Query different data fragments from different caches, and then manually merge them into a whole and return it.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Ensure consistency between cache and database."))),(0,r.kt)("p",null,"In order to relieve the developer from these two heavy tasks, the framework's caching mechanism is designed to be powerful enough and transparent to the developer."),(0,r.kt)("h3",{id:"5-object-fetcher"},"5. ",(0,r.kt)("strong",{parentName:"h3"},"Object Fetcher")),(0,r.kt)("p",null,"Extend the ability of SQL. If a column in the query is an object type, it can be specified as the query format of the object. This format accepts any association depth and breadth and even allows recursively query self-association attributes. It can be considered that SQL has been extended to a capability comparable to GraphQL."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Quick view"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Simple Fetcher"),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"List<Book> books = sqlClient\n    .createQuery(BookTable.class, (q, book) -> {\n        q.orderBy(book.name());\n        return q.select(\n            book.fetch(\n                BookFetcher.$\n                    .allScalarFields()\n                    .store(\n                        BookStoreFetcher.$\n                            .allScalarFields()\n                    )\n                    .authors(\n                        AuthorFetcher.$\n                            .allScalarFields()\n                    )\n            )\n        );\n    })\n    .execute();\n"))),(0,r.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val books = sqlClient\n    .createQuery(Book::class) {\n        orderBy(table.name)\n        select(\n            table.fetchBy { \n                allScalarFields()\n                store { \n                    allScalarFields()\n                }\n                authors { \n                    allScalarFields()\n                }\n            }\n        )\n    }\n    .execute()\n"))))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Fetcher With filter"),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"List<Book> books = sqlClient\n    .createQuery(BookTable.class, (q, book) -> {\n        q.orderBy(book.name());\n        return q.select(\n            book.fetch(\n                BookFetcher.$\n                    .allScalarFields()\n                    .store(\n                        BookStoreFetcher.$\n                            .allScalarFields()\n                    )\n                    .authors(\n                        AuthorFetcher.$\n                            .allScalarFields(),\n                        // This filter sorts the associated collection \n                        it -> it.filter(args -> {\n                            args.orderBy(args.getTable().firstName());\n                            args.orderBy(args.getTable().lastName());\n                        })\n                    )\n            )\n        );\n    })\n    .execute();\n"))),(0,r.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val books = sqlClient\n    .createQuery(Book::class) {\n        orderBy(table.name)\n        select(\n            table.fetchBy { \n                allScalarFields()\n                store { \n                    allScalarFields()\n                }\n                authors({\n                    // This filter sorts the associated collection\n                    filter { \n                        orderBy(table.firstName)\n                        orderBy(table.lastName)\n                    }\n                }) { \n                    allScalarFields()\n                }\n            }\n        )\n    }\n    .execute()\n"))))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Recursively query self-association attributes"),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'List<TreeNode> rootNodes = sqlClient\n    .createQuery(TreeNodeTable.class, (q, treeNode) -> {\n        q.where(treeNode.parent().isNull());\n        q.orderBy(treeNode.name());\n        return q.select(\n            treeNode.fetch(\n                TreeNodeFetcher.$\n                    .allScalarFields()\n                    .childNodes(\n                        TreeNodeFetcher.$.allScalarFields(),\n                        it -> {\n                            // Recursively query, no matter how deep\n                            it.recursive(args -> \n                                // but exclude some subtrees\n                                !args.getEntity().name().equals("XX")\n                            );\n                            it.filter(args -> {\n                                args.orderBy(args.getTable().name());\n                            });\n                        }\n                    )\n            )\n        );\n    })\n    .execute();\n'))),(0,r.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val rootNodes = sqlClient\n    .createQuery(TreeNode::class) {\n        where(table.parent.isNull())\n        orderBy(table.name)\n        select(\n            table.fetchBy {\n                allScalarFields()\n                childNodes({\n                    // Recursively query, no matter how deep\n                    recursive {\n                        // but exclude some subtrees\n                        entity.name != "XX"\n                    }\n                    filter { \n                        orderBy(table.name)\n                    }\n                }) { \n                    allScalarFields()\n                }\n            }\n        )\n    }\n    .execute()\n')))))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This feature can work with external cache, this very useful, especially when recursively querying self-associative properties."))),(0,r.kt)("h3",{id:"6-save-command"},"6. ",(0,r.kt)("strong",{parentName:"h3"},"Save Command"),":"),(0,r.kt)("p",null,"The data to be saved is no longer a simple object, but an arbitrarily complex object tree. No matter how complex the tree is, the framework takes care of all the internal details and the developers can handle the whole operation with a single statement. This feature is the inverse of the Object Fetcher."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Quick view"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Save lonely object"),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Book toBeSaved = BookDraft.$.produce(book -> {\n    book\n        .setName("Algorithms")\n        .setEdition(4)\n        .setPrice(new BigDecimal("53.99"));\n});\nBook saved = sqlClient\n    .getEntities()\n    .save(toBeSaved)\n    .getModifiedEntity();\n'))),(0,r.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val toBeSaved = new(Book::class).by {\n    name = "Algorithms"\n    edition = 4\n    price = BigDecimal("53.99")\n}\nval saved = sqlClient\n    .entities\n    .save(toBeSaved)\n    .modifiedEntity\n'))))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Save shallow object tree"),(0,r.kt)("p",null,"If the associated objects of the saved object only have id, then only the current object and its relationship with other objects can be modified (this may cause the middle table to be modified), not the associated objects themselves."),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Book toBeSaved = BookDraft.$.produce(book -> {\n    book\n        .setName("Algorithms")\n        .setEdition(4)\n        .setPrice(new BigDecimal("53.99"))\n        .setStore(store -> {\n            store.setId(7883L);\n        })\n        .addIntoAuthors(author -> {\n            author.setId(28756L);\n        })\n        .addIntoAuthors(author -> {\n            author.setId(634L);\n        });\n});\nBook saved = sqlClient\n    .getEntities()\n    .save(toBeSaved)\n    .getModifiedEntity();\n'))),(0,r.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val toBeSaved = new(Book::class).by {\n    name = "Algorithms"\n    edition = 4\n    price = BigDecimal("53.99")\n    store().apply {\n        id = 7833L\n    }\n    authors().addBy {\n        id = 28756L\n    }\n    authors().addBy {\n        id = 634L\n    }\n}\nval saved = sqlClient\n    .entities\n    .save(toBeSaved)\n    .modifiedEntity\n'))))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Save deep object tree"),(0,r.kt)("p",null,"If the associated objects of the saved object contains non-id properties, then"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Not only the current object and its relationship to other objects can be modified (which may cause the intermediate table to be modified), but also the associated objects can be further modified.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The depth of the saved object tree can be unlimited. However, no matter how deep it is, the framework can handle all the details inside it."))),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Book toBeSaved = BookDraft.$.produce(book -> {\n    book\n        .setName("Algorithms")\n        .setEdition(4)\n        .setPrice(new BigDecimal("53.99"))\n        .setStore(store -> {\n            store.setName("O\'REILLY");\n        })\n        .addIntoAuthors(author -> {\n            author\n                .setFirstName("Robert")\n                .setLastName("Sedgewick")\n                .setGender(Gender.MALE);\n        })\n        .addIntoAuthors(author -> {\n            author\n                .setFirstName("Kevin")\n                .setLastName("Wayne")\n                .setGender(Gender.MALE);\n        });\n});\nBook saved = sqlClient\n    .getEntities()\n    .saveCommand(toBeSaved)\n    .configure(it -> {\n        // Automatically create non-existing associated objects\n        it.setAutoAttachingAll();\n    })\n    .execute()\n    .getModifiedEntity();\n'))),(0,r.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val toBeSaved = new(Book::class).by { \n    name = "Algorithms"\n    edition = 4\n    price = BigDecimal("53.99")\n    store().apply { \n        name = "O\'REILLY"\n    }\n    authors().addBy { \n        firstName = "Robert"\n        lastName = "Sedgewick"\n        gender = Gender.MALE\n    }\n    authors().addBy { \n        firstName = "Kevin"\n        lastName = "Wayne"\n        gender = Gender.MALE\n    }\n}\nval saved = sqlClient\n    .entities\n    .save(toBeSaved) {\n        // Automatically create non-existing associated objects\n        setAutoAttachingAll()\n    }\n    .modifiedEntity\n')))))),(0,r.kt)("h3",{id:"7-paging"},"7. Paging"),(0,r.kt)("p",null,"In the paging scenario, developers only need to focus on querying the actual data, and the query on the number of rows is automatically generated and optimized by the framework."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Quick view"),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Developers only need to focus on data-query\nConfigurableRootQuery<Book> query = sqlClient\n    .createQuery(BookTable.class, (q, book) -> {\n        ... Omit some code logic, including: ...\n        ... 1. Arbitrarily complex dynamic conditions ...\n        ... 2. Arbitrarily complex dynamic sorting ...\n        ... 3. Arbitrarily complex subqueries ...\n        return q.select(book);\n    });\n\n// count-query can be generated and optimized.\nTypedRootQuery<Long> countQuery = query\n    .reselect((oldQuery, book) -> \n        oldQuery.select(book.count())\n    )\n    .withoutSortingAndPaging();\n\nint rowCount = countQuery.execute().get(0).intValue();\n\n//Query data from 1/3 to 2/3\nList<Book> books = query\n    .limit(rowCount / 3, rowCount / 3)\n    .execute();\n"))),(0,r.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"// Developers only need to focus on data-query\nval query = sqlClient\n    .createQuery(Book::class) {\n        ... Omit some code logic, including: ...\n        ... 1. Arbitrarily complex dynamic conditions ...\n        ... 2. Arbitrarily complex dynamic sorting ...\n        ... 3. Arbitrarily complex subqueries ...\n        select(table)\n    }\n\n// count-query can be generated and optimized.\nval countQuery = query\n    .reselect {\n        select(count(table))\n    }\n    .withoutSortingAndPaging()\n\nval rowCount = countQuery.execute()[0]\n\n//Query data from 1/3 to 2/3\nval books = query\n    .limit(rowCount / 3, rowCount / 3)\n    .execute()\n"))))),(0,r.kt)("h3",{id:"8-dynamic-table-joins"},"8. Dynamic table joins"),(0,r.kt)("p",null,"Implicit dynamic table joins: automatically merge conflicting table joins in different code logic branches for complex dynamic queries ",(0,r.kt)("em",{parentName:"p"},"(Even with the highly controllable myBatis, it is difficult to implement this feature)"),";"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Quick view"),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public List<Book> findBooks(\n        @Nullable String storeName,\n        @Nullable String storeWebsite\n) {\n    return sqlClient\n        .createQuery(BookTable.class, (q, book) -> {\n            if (storeName != null) {\n                q.where(book.store().name().like(storeName));\n            }\n            if (storeWebsite != null) {\n                q.where(book.store().website().like(storeName));\n            }\n            return q.select(book);\n        })\n        .execute();\n}\n"))),(0,r.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun findBooks(\n    storeName: String?,\n    storeWebsite: String?\n): List<Book> =\n    sqlClient\n        .createQuery(Book::class) {\n            storeName?.let { \n                where(table.store.name like it)\n            }\n            storeWebsite?.let { \n                where(table.store.website like it)\n            }\n            select(table)\n        }\n        .execute()\n")))),(0,r.kt)("p",null,"In jimmer-sql table joins are implicit."),(0,r.kt)("p",null,"Taking the above code as an example, ",(0,r.kt)("inlineCode",{parentName:"p"},"book.store()")," in the Java code and ",(0,r.kt)("inlineCode",{parentName:"p"},"table.store")," in the kotlin code represent the inner join of the association ",(0,r.kt)("inlineCode",{parentName:"p"},"Book::store"),"."),(0,r.kt)("p",null,"Obviously, the above code implements a dynamic query, and different parameters will cause different SQL to be generated."),(0,r.kt)("p",null,"When the above two conditions are met, in the final generated SQL, the table join of ",(0,r.kt)("inlineCode",{parentName:"p"},"Book::store")," will only appear once, not twice. ")),(0,r.kt)("h3",{id:"9-support-for-spring-graphql"},"9. Support for Spring GraphQL"),(0,r.kt)("p",null,"Provide rapid development support for Spring GraphQL introduced in spring boot 2.7"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Quick view"),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Implement many-to-one association 'Book::store'\n@org.springframework.graphql.data.method.annotation.BatchMapping\npublic Map<Book, BookStore> store(Collection<Book> books) {\n    return sqlClient\n            .getReferenceLoader(\n                    BookTable.class,\n                    BookTable::store\n            )\n            .batchLoad(books);\n}\n\n// Implement many-to-many association 'Book::authors'\n@org.springframework.graphql.data.method.annotation.BatchMapping\npublic Map<Book, List<Author>> authors(List<Book> books) {\n    return sqlClient\n            .getListLoader(\n                    BookTableEx.class,\n                    BookTableEx::authors\n            )\n            .forFilter(\n                    args -> args\n                            .orderBy(args.getTable().firstName())\n                            .orderBy(args.getTable().lastName())\n            )\n            .batchLoad(books);\n}\n"))),(0,r.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"// Implement many-to-one association: 'Book::store'\n@org.springframework.graphql.data.method.annotation.BatchMapping\nfun store(\n    // Must use `java.util.List` because Spring-GraphQL has a bug: #454\n    books: java.util.List<Book>\n): Map<Book, BookStore> =\n    sqlClient\n        .getReferenceLoader(Book::store)\n        .batchLoad(books)\n\n// Implement many-to-many association: 'Book::authors'\n@org.springframework.graphql.data.method.annotation.BatchMapping\nfun authors(\n    // Must use `java.util.List` because Spring-GraphQL has a bug: #454\n    books: java.util.List<Book>\n): Map<Book, List<Author>> =\n    sqlClient\n        .getListLoader(Book::authors)\n        .forFilter {\n            orderBy(table.firstName)\n            orderBy(table.lastName)\n        }\n        .batchLoad(books)\n"))))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This feature can work with external cache"))),(0,r.kt)("h3",{id:"10-extreme-lightweight"},"10. Extreme lightweight."),(0,r.kt)("p",null,"No reflection, no dynamic bytecode generation, guarantee to be Graal friendly."))}k.isMDXComponent=!0}}]);
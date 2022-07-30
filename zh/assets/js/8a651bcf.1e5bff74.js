"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[6955],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return p}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=u(t),p=r,k=d["".concat(s,".").concat(p)]||d[p]||c[p]||l;return t?a.createElement(k,o(o({ref:n},m),{},{components:t})):a.createElement(k,o({ref:n},m))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2360:function(e,n,t){t.d(n,{Z:function(){return o}});var a=t(7294),r=t(6010),l="tabItem_OmH5";function o(e){var n=e.children,t=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:t},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return p}});var a=t(3117),r=t(7294),l=t(2389),o=t(7392),i=t(7094),s=t(2466),u=t(6010),m="tabList_uSqn",c="tabItem_LplD";function d(e){var n,t,l,d=e.lazy,p=e.block,k=e.defaultValue,v=e.values,b=e.groupId,g=e.className,N=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=v?v:N.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),h=(0,o.l)(y,(function(e,n){return e.value===n.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var f=null===k?k:null!=(n=null!=k?k:null==(t=N.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(l=N[0])?void 0:l.props.value;if(null!==f&&!y.some((function(e){return e.value===f})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var T=(0,i.U)(),x=T.tabGroupChoices,B=T.setTabGroupChoices,w=(0,r.useState)(f),q=w[0],S=w[1],j=[],I=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var C=x[b];null!=C&&C!==q&&y.some((function(e){return e.value===C}))&&S(C)}var E=function(e){var n=e.currentTarget,t=j.indexOf(n),a=y[t].value;a!==q&&(I(n),S(a),null!=b&&B(b,a))},O=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=j.indexOf(e.currentTarget)+1;t=j[a]||j[0];break;case"ArrowLeft":var r=j.indexOf(e.currentTarget)-1;t=j[r]||j[j.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:(0,u.Z)("tabs-container",m)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":p},g)},y.map((function(e){var n=e.value,t=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:q===n?0:-1,"aria-selected":q===n,key:n,ref:function(e){return j.push(e)},onKeyDown:O,onFocus:E,onClick:E},l,{className:(0,u.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":q===n})}),null!=t?t:n)}))),d?(0,r.cloneElement)(N.filter((function(e){return e.props.value===q}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},N.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==q})}))))}function p(e){var n=(0,l.Z)();return r.createElement(d,(0,a.Z)({key:String(n)},e))}},7355:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return m},default:function(){return v},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return p}});var a=t(3117),r=t(102),l=(t(7294),t(3905)),o=t(9877),i=t(2360),s=["components"],u={sidebar_position:4,title:"jimmer-sql\u5b50\u9879\u76ee"},m=void 0,c={unversionedId:"jimmer-sql/index",id:"jimmer-sql/index",title:"jimmer-sql\u5b50\u9879\u76ee",description:"\u5bf9\u4e8e\u4e2d\u6587\u7248\uff0c\u4ece\u672c\u6587\u6863\u4e2d\u6311\u53d6\u6700\u91cd\u8981\u7684\u4e00\u90e8\u5206\uff0c\u5f62\u6210B\u7ad9\u89c6\u9891\u96c6",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/jimmer-sql/index.mdx",sourceDirName:"jimmer-sql",slug:"/jimmer-sql/",permalink:"/jimmer/zh/docs/jimmer-sql/",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/jimmer-sql/index.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"jimmer-sql\u5b50\u9879\u76ee"},sidebar:"tutorialSidebar",previous:{title:"\u9a8c\u8bc1",permalink:"/jimmer/zh/docs/jimmer-core/validation"},next:{title:"jimmer-sql\u521d\u4f53\u9a8c",permalink:"/jimmer/zh/docs/jimmer-sql/usage"}},d={},p=[{value:"\u57fa\u4e8e\u4e0d\u53ef\u53d8\u6570\u636e\u6a21\u578b\u7684\u9769\u547d\u6027\u7684ORM",id:"\u57fa\u4e8e\u4e0d\u53ef\u53d8\u6570\u636e\u6a21\u578b\u7684\u9769\u547d\u6027\u7684orm",level:2}],k={toc:p};function v(e){var n=e.components,t=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u5bf9\u4e8e\u4e2d\u6587\u7248\uff0c\u4ece\u672c\u6587\u6863\u4e2d\u6311\u53d6\u6700\u91cd\u8981\u7684\u4e00\u90e8\u5206\uff0c\u5f62\u6210",(0,l.kt)("a",{parentName:"p",href:"https://www.bilibili.com/video/BV1dA4y1R7pV/?vd_source=60313648ad86e28e629f98e944f7fa2a"},"B\u7ad9\u89c6\u9891\u96c6")))),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u672c\u6587\u4ece\u9996\u9875\u7684\u7b2c\u4e8c\u90e8\u5206\u590d\u5236\u800c\u6765\uff0c\u5185\u5bb9\u5b8c\u5168\u4e00\u6837\u3002"),(0,l.kt)("p",{parentName:"div"},"\u5982\u679c\u4f60\u5df2\u7ecf\u9605\u8bfb\u8fc7\u9996\u9875\u7684\u7b2c\u4e8c\u90e8\u5206\uff0c\u53ef\u4ee5\u8df3\u8fc7\u672c\u6587\uff0c\u76f4\u63a5\u9605\u8bfb\u66f4\u6df1\u7684\u6587\u6863\u3002"))),(0,l.kt)("h2",{id:"\u57fa\u4e8e\u4e0d\u53ef\u53d8\u6570\u636e\u6a21\u578b\u7684\u9769\u547d\u6027\u7684orm"},"\u57fa\u4e8e\u4e0d\u53ef\u53d8\u6570\u636e\u6a21\u578b\u7684\u9769\u547d\u6027\u7684ORM"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u548cJPA Criteria\u3001QueryDSL\u6216JOOQ\u4e00\u6837\uff0c\u4f7f\u7528\u5f3a\u7c7b\u578bSQL DSL\uff0c\u5728\u7f16\u8bd1\u65f6\u800c\u4e0d\u662f\u8fd0\u884c\u65f6\u68c0\u67e5\u9519\u8bef\u3002 Kotlin API\u8fd8\u4f1a\u628akotlin\u7684\u7a7a\u5b89\u5168\u5f15\u5165\u5230SQL\u4e2d\u3002"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"\u5feb\u901f\u9884\u89c8"),(0,l.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},'List<Book> books = sqlClient\n    .createQuery(BookTable.class, (q, book) -> {\n        return q\n            .where(\n                book.id().in(\n                    q.createSubQuery(AuthorTableEx.class, (sq, author) -> {\n                        return sq\n                            .where(\n                                 author.firstName().eq("Alex")\n                            )\n                            .select(author.books().id());\n                    })\n                )\n            )\n            .select(book);\n     })\n     .execute();\n'))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val books = sqlClient\n    .createQuery(Book::class) {\n        where(\n            table.id valueIn subQuery(Author::class) {\n                where(table.firstName eq "Alex")\n                select(table.books.id)\n            }\n        )\n        select(table)\n    }\n    .execute()\n')))))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5f3a\u7c7b\u578bSQL DSL\u548cNative SQL\u53ef\u4ee5\u6df7\u5408\u4f7f\u7528\uff0c\u6ca1\u6709\u989d\u5916\u7684\u9650\u5236\uff0c\u4f7f\u7528\u6570\u636e\u5e93\u7279\u5b9a\u7684\u7279\u6027\u662f\u975e\u5e38\u5bb9\u6613\u7684\u3002"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"\u5feb\u901f\u9884\u89c8"),(0,l.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},'List<Tuple3<Book, Integer, Integer>> rows = sqlClient\n    .createQuery(BookTable.class, (q, book) -> {\n        return q.select(\n            book,\n            Expression.numeric().sql(\n                Integer.class,\n                "rank() over(order by %e desc)",\n                it -> {\n                    it.expression(book.price());\n                }\n            ),\n            Expression.numeric().sql(\n                Integer.class,\n                "rank() over(partition by %e order by %e desc)",\n                it -> {\n                    it.expression(book.store().id());\n                    it.expression(book.price());\n                }\n            )\n        );\n    })\n    .execute();\n'))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val rows = sqlClient\n    .createQuery(Book::class) {\n        select(\n            table,\n            sql(\n                Int::class, \n                "rank() over(order by %e desc)"\n            ) {\n                expression(table.price)\n            },\n            sql(\n                Int::class, \n                "rank() over(partition by %e order by %e desc)"\n            ) {\n                expression(table.store.id)\n                expression(table.price)\n            }\n        )\n    }\n    .execute()\n')))))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u59cb\u7ec8\u4f7f\u7528\u6548\u7387\u66f4\u9ad8\u7684 ",(0,l.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/7/docs/api/java/sql/ResultSet.html#getObject(int)"},"ResultSet.getObject(int)")," \u800c\u4e0d\u662f ",(0,l.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/7/docs/api/java/sql/ResultSet.html#getObject(java.lang.String)"},"ResultSet. getObject(String)"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u9690\u5f0f\u52a8\u6001\u8868\u8fde\u63a5\uff1a\u5bf9\u4e8e\u590d\u6742\u7684\u52a8\u6001\u67e5\u8be2\uff0c\u81ea\u52a8\u5408\u5e76\u4e0d\u540c\u4ee3\u7801\u903b\u8f91\u5206\u652f\u4e2d\u51b2\u7a81\u7684\u8868\u8fde\u63a5 ",(0,l.kt)("em",{parentName:"p"},"\uff08\u5373\u4f7f\u662f\u9ad8\u5ea6\u53ef\u63a7\u7684myBatis\uff0c\u4e5f\u5f88\u96be\u5b9e\u73b0\u8fd9\u4e2a\u7279\u6027\uff09"),"\uff1b"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"\u5feb\u901f\u9884\u89c8"),(0,l.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},"public List<Book> findBooks(\n        @Nullable String storeName,\n        @Nullable String storeWebsite\n) {\n    return sqlClient\n        .createQuery(BookTable.class, (q, book) -> {\n            if (storeName != null) {\n                q.where(book.store().name().like(storeName));\n            }\n            if (storeWebsite != null) {\n                q.where(book.store().website().like(storeName));\n            }\n            return q.select(book);\n        })\n        .execute();\n}\n"))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun findBooks(\n    storeName: String?,\n    storeWebsite: String?\n): List<Book> =\n    sqlClient\n        .createQuery(Book::class) {\n            storeName?.let { \n                where(table.store.name like it)\n            }\n            storeWebsite?.let { \n                where(table.store.website like it)\n            }\n            select(table)\n        }\n        .execute()\n")))),(0,l.kt)("p",{parentName:"li"},"\u5728jimmer-sql\u4e2d\uff0c\u8868\u8fde\u63a5\u662f\u9690\u5f0f\u7684\u3002"),(0,l.kt)("p",{parentName:"li"},"\u4ee5\u4e0a\u8ff0\u4ee3\u7801\u4e3a\u4f8b\uff0cJava\u4ee3\u7801\u4e2d\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"book.store()"),"\u548ckotlin\u4ee3\u7801\u4e2d\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"table.store"),"\u4ee3\u8868\u5173\u8054",(0,l.kt)("inlineCode",{parentName:"p"},"Book::store"),"\u7684\u5185\u8fde\u63a5\u3002"),(0,l.kt)("p",{parentName:"li"},"\u663e\u7136\uff0c\u4e0a\u9762\u7684\u4ee3\u7801\u5b9e\u73b0\u4e86\u52a8\u6001\u67e5\u8be2\uff0c\u4e0d\u540c\u7684\u53c2\u6570\u4f1a\u5bfc\u81f4\u751f\u6210\u4e0d\u540c\u7684SQL\u3002"),(0,l.kt)("p",{parentName:"li"},"\u5f53\u4ee5\u4e0a\u4e24\u4e2a\u6761\u4ef6\u90fd\u6ee1\u8db3\u65f6\uff0c\u5728\u6700\u7ec8\u751f\u6210\u7684SQL\u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"Book::store"),"\u7684\u8868\u8fde\u63a5\u53ea\u4f1a\u51fa\u73b0\u4e00\u6b21\uff0c\u800c\u975e\u4e24\u6b21\u3002"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5728\u5206\u9875\u573a\u666f\u4e0b\uff0c\u5f00\u53d1\u8005\u53ea\u9700\u8981\u4e13\u6ce8\u4e8e\u67e5\u8be2\u5b9e\u9645\u6570\u636e\uff0c\u5bf9\u884c\u6570\u7684\u67e5\u8be2\u7531\u6846\u67b6\u81ea\u52a8\u751f\u6210\u548c\u4f18\u5316\u3002"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"\u5feb\u901f\u9884\u89c8"),(0,l.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// \u5f00\u53d1\u8005\u53ea\u9700\u8981\u4e13\u6ce8\u4e8e\u67e5\u8be2\u5b9e\u9645\u6570\u636e\nConfigurableRootQuery<Book> query = sqlClient\n    .createQuery(BookTable.class, (q, book) -> {\n        ... \u7701\u7565\u4e00\u4e9b\u4ee3\u7801\u903b\u8f91\uff0c\u5305\u542b: ...\n        ... 1. \u4efb\u610f\u590d\u6742\u7684\u52a8\u6001\u6761\u4ef6 ...\n        ... 2. \u4efb\u610f\u590d\u6742\u7684\u52a8\u6001\u62cd\u620f ...\n        ... 3. \u4efb\u610f\u590d\u6742\u7684\u5b50\u67e5\u8be2 ...\n        return q.select(book);\n    });\n\n// \u5bf9\u884c\u6570\u7684\u67e5\u8be2\u7531\u6846\u67b6\u81ea\u52a8\u751f\u6210\u548c\u4f18\u5316\u3002\nTypedRootQuery<Long> countQuery = query\n    .reselect((oldQuery, book) -> \n        oldQuery.select(book.count())\n    )\n    .withoutSortingAndPaging();\n\nint rowCount = countQuery.execute().get(0).intValue();\n\n// \u67e5\u8be2\u4ece1/3\u5904\u52302/3\u7684\u90e8\u5206\u6570\u636e\nList<Book> books = query\n    .limit(rowCount / 3, rowCount / 3)\n    .execute();\n"))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"// \u5f00\u53d1\u8005\u53ea\u9700\u8981\u4e13\u6ce8\u4e8e\u67e5\u8be2\u5b9e\u9645\u6570\u636e\nval query = sqlClient\n    .createQuery(Book::class) {\n        ... \u7701\u7565\u4e00\u4e9b\u4ee3\u7801\u903b\u8f91\uff0c\u5305\u542b: ...\n        ... 1. \u4efb\u610f\u590d\u6742\u7684\u52a8\u6001\u6761\u4ef6 ...\n        ... 2. \u4efb\u610f\u590d\u6742\u7684\u52a8\u6001\u62cd\u620f ...\n        ... 3. \u4efb\u610f\u590d\u6742\u7684\u5b50\u67e5\u8be2 ...\n        select(table)\n    }\n\n// \u5bf9\u884c\u6570\u7684\u67e5\u8be2\u7531\u6846\u67b6\u81ea\u52a8\u751f\u6210\u548c\u4f18\u5316\u3002\nval countQuery = query\n    .reselect {\n        select(count(table))\n    }\n    .withoutSortingAndPaging()\n\nval rowCount = countQuery.execute()[0]\n\n// \u67e5\u8be2\u4ece1/3\u5904\u52302/3\u7684\u90e8\u5206\u6570\u636e\nval books = query\n    .limit(rowCount / 3, rowCount / 3)\n    .execute()\n")))))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Object Fetcher"),"\uff1a\u6269\u5c55SQL\u7684\u80fd\u529b\u3002 \u5982\u679c\u67e5\u8be2\u4e2d\u7684\u5217\u662f\u5bf9\u8c61\u7c7b\u578b\uff0c\u5219\u53ef\u4ee5\u4e3a\u5176\u6307\u5b9a\u67e5\u8be2\u683c\u5f0f\u3002 \u8fd9\u79cd\u683c\u5f0f\u63a5\u53d7\u4efb\u4f55\u5173\u8054\u6df1\u5ea6\u548c\u5e7f\u5ea6\uff0c\u751a\u81f3\u5141\u8bb8\u9012\u5f52\u67e5\u8be2\u81ea\u5173\u8054\u5c5e\u6027\u3002 \u53ef\u4ee5\u8ba4\u4e3aSQL\u88ab\u6269\u5c55\u4e86\u53ef\u5ab2\u7f8e\u4e8eGraphQL\u7684\u80fd\u529b\u3002"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"\u5feb\u901f\u9884\u89c8"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"\u7b80\u5355\u6293\u53d6\u5668"),(0,l.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},"List<Book> books = sqlClient\n    .createQuery(BookTable.class, (q, book) -> {\n        q.orderBy(book.name());\n        return q.select(\n            book.fetch(\n                BookFetcher.$\n                    .allScalarFields()\n                    .store(\n                        BookStoreFetcher.$\n                            .allScalarFields()\n                    )\n                    .authors(\n                        AuthorFetcher.$\n                            .allScalarFields()\n                    )\n            )\n        );\n    })\n    .execute();\n"))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val books = sqlClient\n    .createQuery(Book::class) {\n        orderBy(table.name)\n        select(\n            table.fetchBy { \n                allScalarFields()\n                store { \n                    allScalarFields()\n                }\n                authors { \n                    allScalarFields()\n                }\n            }\n        )\n    }\n    .execute()\n"))))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"\u4f7f\u7528\u8fc7\u6ee4\u5668"),(0,l.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},"List<Book> books = sqlClient\n    .createQuery(BookTable.class, (q, book) -> {\n        q.orderBy(book.name());\n        return q.select(\n            book.fetch(\n                BookFetcher.$\n                    .allScalarFields()\n                    .store(\n                        BookStoreFetcher.$\n                            .allScalarFields()\n                    )\n                    .authors(\n                        AuthorFetcher.$\n                            .allScalarFields(),\n                        // \u6b64\u8fc7\u6ee4\u5668\u5bf9\u5173\u8054\u96c6\u5408\u8fdb\u884c\u6392\u5e8f \n                        it -> it.filter(args -> {\n                            args.orderBy(args.getTable().firstName());\n                            args.orderBy(args.getTable().lastName());\n                        })\n                    )\n            )\n        );\n    })\n    .execute();\n"))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val books = sqlClient\n    .createQuery(Book::class) {\n        orderBy(table.name)\n        select(\n            table.fetchBy { \n                allScalarFields()\n                store { \n                    allScalarFields()\n                }\n                authors({\n                     // \u6b64\u8fc7\u6ee4\u5668\u5bf9\u5173\u8054\u96c6\u5408\u8fdb\u884c\u6392\u5e8f\n                     filter { \n                         orderBy(table.firstName)\n                         orderBy(table.lastName)\n                     }\n                 }) { \n                    allScalarFields()\n                }\n            }\n        )\n    }\n    .execute()\n"))))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"\u9012\u5f52\u67e5\u8be2\u81ea\u5173\u8054\u5c5e\u6027"),(0,l.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},'List<TreeNode> rootNodes = sqlClient\n    .createQuery(TreeNodeTable.class, (q, treeNode) -> {\n        q.where(treeNode.parent().isNull());\n        q.orderBy(treeNode.name());\n        return q.select(\n            treeNode.fetch(\n                TreeNodeFetcher.$\n                    .allScalarFields()\n                    .childNodes(\n                        TreeNodeFetcher.$.allScalarFields(),\n                        it -> {\n                            // \u9012\u5f52\u67e5\u8be2\uff0c\u65e0\u8bba\u591a\u6df1\n                            it.recursive(args -> \n                                // \u4f46\uff0c\u6392\u9664\u67d0\u4e9b\u5b50\u6811\n                                !args.getEntity().name().equals("XX")\n                            );\n                            it.filter(args -> {\n                                args.orderBy(args.getTable().name());\n                            });\n                        }\n                    )\n            )\n        );\n    })\n    .execute();\n'))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val rootNodes = sqlClient\n    .createQuery(TreeNode::class) {\n        where(table.parent.isNull())\n        orderBy(table.name)\n        select(\n            table.fetchBy {\n                allScalarFields()\n                childNodes({\n                    // \u9012\u5f52\u67e5\u8be2\uff0c\u65e0\u8bba\u591a\u6df1\n                    recursive {\n                        // \u4f46\uff0c\u6392\u9664\u67d0\u4e9b\u5b50\u6811\n                        entity.name != "XX"\n                    }\n                    filter { \n                        orderBy(table.name)\n                    }\n                }) { \n                    allScalarFields()\n                }\n            }\n        )\n    }\n    .execute()\n'))))))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Save command"),"\uff1a\u8981\u4fdd\u5b58\u7684\u6570\u636e\u4e0d\u518d\u662f\u7b80\u5355\u7684\u5bf9\u8c61\uff0c\u800c\u662f\u4efb\u610f\u590d\u6742\u7684\u5bf9\u8c61\u6811\u3002 \u65e0\u8bba\u6811\u6709\u591a\u590d\u6742\uff0c\u6846\u67b6\u90fd\u4f1a\u5904\u7406\u6240\u6709\u5185\u90e8\u7ec6\u8282\uff0c\u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u7528\u4e00\u6761\u8bed\u53e5\u5904\u7406\u6574\u4e2a\u64cd\u4f5c\u3002 \u6b64\u529f\u80fd\u662fObject Fetcher\u7684\u9006\u529f\u80fd\u3002"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"\u5feb\u901f\u9884\u89c8"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"\u4fdd\u5b58\u5b64\u5355\u7684\u5bf9\u8c61"),(0,l.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},'Book toBeSaved = BookDraft.$.produce(book -> {\n    book\n        .setName("Algorithms")\n        .setEdition(4)\n        .setPrice(new BigDecimal("53.99"));\n});\nBook saved = sqlClient\n    .getEntities()\n    .save(toBeSaved)\n    .getModifiedEntity();\n'))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val toBeSaved = new(Book::class).by {\n    name = "Algorithms"\n    edition = 4\n    price = BigDecimal("53.99")\n}\nval saved = sqlClient\n    .entities\n    .save(toBeSaved)\n    .modifiedEntity\n'))))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"\u4fdd\u5b58\u6d45\u7684\u5bf9\u8c61\u6811"),(0,l.kt)("p",{parentName:"li"},"\u5982\u679c\u88ab\u4fdd\u5b58\u5bf9\u8c61\u7684\u5173\u8054\u5bf9\u8c61\u53ea\u6709id\uff0c\u90a3\u4e48\u53ea\u4f1a\u4fee\u6539\u5f53\u524d\u5bf9\u8c61\u53ca\u5176\u4e0e\u5176\u4ed6\u5bf9\u8c61\u7684\u5173\u7cfb\uff08\u8fd9\u53ef\u80fd\u4f1a\u5bfc\u81f4\u4e2d\u95f4\u8868\u88ab\u4fee\u6539\uff09\uff0c\u800c\u5173\u8054\u5bf9\u8c61\u672c\u8eab\u4e0d\u4f1a\u88ab\u4fee\u6539\u3002"),(0,l.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},'Book toBeSaved = BookDraft.$.produce(book -> {\n    book\n        .setName("Algorithms")\n        .setEdition(4)\n        .setPrice(new BigDecimal("53.99"))\n        .setStore(store -> {\n            store.setId(7883L);\n        })\n        .addIntoAuthors(author -> {\n          author.setId(28756L);\n        })\n        .addIntoAuthors(author -> {\n            author.setId(634L);\n        });\n});\nBook saved = sqlClient\n    .getEntities()\n    .save(toBeSaved)\n    .getModifiedEntity();\n'))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val toBeSaved = new(Book::class).by {\n    name = "Algorithms"\n    edition = 4\n    price = BigDecimal("53.99")\n    store().apply {\n        id = 7833L\n    }\n    authors().addBy {\n        id = 28756L\n    }\n    authors().addBy {\n        id = 634L\n    }\n}\nval saved = sqlClient\n    .entities\n    .save(toBeSaved)\n    .modifiedEntity\n'))))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"\u4fdd\u5b58\u6df1\u7684\u5bf9\u8c61\u6811"),(0,l.kt)("p",{parentName:"li"},"\u5982\u679c\u88ab\u4fdd\u5b58\u5bf9\u8c61\u7684\u5173\u8054\u5bf9\u8c61\u5305\u542b\u975eid\u5c5e\u6027\uff0c\u5219"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4e0d\u4ec5\u53ef\u4ee5\u4fee\u6539\u5f53\u524d\u5bf9\u8c61\u53ca\u5176\u4e0e\u5176\u4ed6\u5bf9\u8c61\u7684\u5173\u7cfb\uff08\u53ef\u80fd\u5bfc\u81f4\u4fee\u6539\u4e2d\u95f4\u8868\uff09\uff0c\u8fd8\u53ef\u4ee5\u8fdb\u4e00\u6b65\u4fee\u6539\u5173\u8054\u5bf9\u8c61\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u88ab\u4fdd\u5b58\u5bf9\u8c61\u6811\u7684\u6df1\u5ea6\u53ef\u4ee5\u4e0d\u53d7\u9650\u5236\u3002 \u7136\u800c\uff0c\u65e0\u8bba\u5b83\u6709\u591a\u6df1\uff0c\u6846\u67b6\u90fd\u53ef\u4ee5\u5904\u7406\u5176\u4e2d\u7684\u6240\u6709\u7ec6\u8282\u3002"))),(0,l.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},'Book toBeSaved = BookDraft.$.produce(book -> {\n    book\n        .setName("Algorithms")\n        .setEdition(4)\n        .setPrice(new BigDecimal("53.99"))\n        .setStore(store -> {\n            store.setName("O\'REILLY");\n        })\n        .addIntoAuthors(author -> {\n            author\n                .setFirstName("Robert")\n                .setLastName("Sedgewick")\n                .setGender(Gender.MALE);\n        })\n        .addIntoAuthors(author -> {\n            author\n                .setFirstName("Kevin")\n                .setLastName("Wayne")\n                .setGender(Gender.MALE);\n        });\n});\nBook saved = sqlClient\n    .getEntities()\n    .saveCommand(toBeSaved)\n    .configure(it -> {\n        // \u5982\u679c\u67d0\u4e9b\u5173\u8054\u5bf9\u8c61\u4e0d\u5b58\u5728\uff0c\u81ea\u52a8\u521b\u5efa\u5b83\u4eec\n        it.setAutoAttachingAll();\n    })\n    .execute()\n    .getModifiedEntity();\n'))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val toBeSaved = new(Book::class).by { \n    name = "Algorithms"\n    edition = 4\n    price = BigDecimal("53.99")\n    store().apply { \n        name = "O\'REILLY"\n    }\n    authors().addBy { \n        firstName = "Robert"\n        lastName = "Sedgewick"\n        gender = Gender.MALE\n    }\n    authors().addBy { \n        firstName = "Kevin"\n        lastName = "Wayne"\n        gender = Gender.MALE\n    }\n}\nval saved = sqlClient\n    .entities\n    .save(toBeSaved) {\n        // \u5982\u679c\u67d0\u4e9b\u5173\u8054\u5bf9\u8c61\u4e0d\u5b58\u5728\uff0c\u81ea\u52a8\u521b\u5efa\u5b83\u4eec\n        setAutoAttachingAll()\n    }\n    .modifiedEntity\n'))))))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5141\u8bb8\u4f7f\u7528\u4efb\u4f55\u5916\u90e8\u7f13\u5b58\u3002 \u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u8be5\u6846\u67b6\u53ea\u662f\u4e00\u4e2a\u975e\u5e38\u8f7b\u91cf\u7ea7\u4e14\u529f\u80fd\u5f3a\u5927\u7684SQL\u751f\u6210\u5668\uff0c\u6ca1\u6709\u7f13\u5b58\u3002 \u5c3d\u7ba1\u5982\u6b64\uff0c\u7528\u6237\u4ecd\u53ef\u4ee5\u9644\u52a0\u4efb\u4f55\u5916\u90e8\u7f13\u5b58\uff0c",(0,l.kt)("strong",{parentName:"p"},"\u5e76\u4f7f\u5176\u4e0e\u4e1a\u52a1\u7cfb\u7edf\u81ea\u5df1\u7684\u7f13\u5b58\u6280\u672f\u4fdd\u6301\u4e00\u81f4"),"\u3002 \u4e0e\u5176\u4ed6 ORM \u4e0d\u540c\uff0c\u5b83\u540c\u65f6\u652f\u6301\u5bf9\u8c61\u7f13\u5b58\u548c\u5173\u8054\u7f13\u5b58\uff0c\u5e76\u53ef\u4e0e\u5bf9\u8c61\u83b7\u53d6\u5668\u4e00\u8d77\u4f7f\u7528\uff0c\u5c24\u5176\u662f\u5728\u9012\u5f52\u67e5\u8be2\u81ea\u5173\u8054\u5c5e\u6027\u65f6\u3002"),(0,l.kt)("div",{parentName:"li",className:"admonition admonition-warning alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u8fd9\u662f\u4e00\u4e2a\u91cd\u8981\u7684\u7279\u6027\uff0c\u4f46\u4e5f\u662f\u4e00\u4e2a\u65b0\u529f\u80fd\uff0c\u6211\u4eec\u4f1a\u5c3d\u5feb\u6dfb\u52a0\u76f8\u5e94\u7684\u4f8b\u5b50\u548c\u6587\u6863\u3002")))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u6781\u81f4\u7684\u8f7b\u91cf\u5316\uff0c\u65e0\u53cd\u5c04\uff0c\u65e0\u52a8\u6001\u5b57\u8282\u7801\u751f\u6210\uff0c\u4fdd\u8bc1\u5bf9 Graal \u53cb\u597d\u3002"))))}v.isMDXComponent=!0}}]);
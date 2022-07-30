"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[4670],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,k=m["".concat(u,".").concat(d)]||m[d]||s[d]||l;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3244:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s}});var a=n(3117),r=n(102),l=(n(7294),n(3905)),o=["components"],i={sidebar_position:2,title:"\u5206\u9875\u67e5\u8be2"},u=void 0,c={unversionedId:"jimmer-sql/query/pagination",id:"jimmer-sql/query/pagination",title:"\u5206\u9875\u67e5\u8be2",description:"jimmer-sql\u5bf9\u5206\u9875\u67e5\u8be2\u7684\u5b9e\u73b0\u65b9\u5f0f\u6781\u5177\u7279\u8272\uff0c\u662fjimmer-sql\u660e\u663e\u533a\u522b\u4e8e\u5176\u5b83ORM\u7684\u7279\u5f81\u4e4b\u4e00\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/jimmer-sql/query/pagination.md",sourceDirName:"jimmer-sql/query",slug:"/jimmer-sql/query/pagination",permalink:"/jimmer/zh/docs/jimmer-sql/query/pagination",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/jimmer-sql/query/pagination.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\u5206\u9875\u67e5\u8be2"},sidebar:"tutorialSidebar",previous:{title:"\u5b50\u67e5\u8be2",permalink:"/jimmer/zh/docs/jimmer-sql/query/sub-query"},next:{title:"\u5217\u9009\u53d6",permalink:"/jimmer/zh/docs/jimmer-sql/query/selection"}},p={},s=[{value:"\u81ea\u52a8\u521b\u5efacount-query",id:"\u81ea\u52a8\u521b\u5efacount-query",level:2},{value:"\u81ea\u52a8\u4f18\u5316count-query",id:"\u81ea\u52a8\u4f18\u5316count-query",level:2},{value:"\u4f18\u5316\u89c4\u5219",id:"\u4f18\u5316\u89c4\u5219",level:3},{value:"\u65e0\u6cd5\u4f18\u5316\u7684\u573a\u666f\u793a\u8303",id:"\u65e0\u6cd5\u4f18\u5316\u7684\u573a\u666f\u793a\u8303",level:3},{value:"\u53ef\u4f18\u5316\u7684\u573a\u666f\u793a\u8303",id:"\u53ef\u4f18\u5316\u7684\u573a\u666f\u793a\u8303",level:3},{value:"\u65b9\u8a00\u548cdata-query",id:"\u65b9\u8a00\u548cdata-query",level:2},{value:"\u9ed8\u8ba4\u884c\u4e3a\uff08\u542bDefaultDialect\u3001H2Dialect\u548cPostgresDialect\uff09",id:"\u9ed8\u8ba4\u884c\u4e3a\u542bdefaultdialecth2dialect\u548cpostgresdialect",level:3},{value:"MySqlDialect",id:"mysqldialect",level:3},{value:"SqlServerDialect",id:"sqlserverdialect",level:3},{value:"OracleDialect",id:"oracledialect",level:3}],m={toc:s};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"jimmer-sql\u5bf9\u5206\u9875\u67e5\u8be2\u7684\u5b9e\u73b0\u65b9\u5f0f\u6781\u5177\u7279\u8272\uff0c\u662fjimmer-sql\u660e\u663e\u533a\u522b\u4e8e\u5176\u5b83ORM\u7684\u7279\u5f81\u4e4b\u4e00\u3002"))),(0,l.kt)("h2",{id:"\u81ea\u52a8\u521b\u5efacount-query"},"\u81ea\u52a8\u521b\u5efacount-query"),(0,l.kt)("p",null,"\u901a\u5e38\uff0c\u5206\u9875\u67e5\u8be2\u9700\u8981\u4e24\u6761SQL\u8bed\u53e5\uff0c\u4e00\u6761\u67e5\u8be2\u8bb0\u5f55\u6570\uff0c\u4e00\u6761\u67e5\u8be2\u4e00\u9875\u6570\u636e\uff0c\u6211\u4eec\u79f0\u4e4b\u4e3acount-query\u548cdata-query\u3002"),(0,l.kt)("p",null,"\u8fd9\u4e24\u6761SQL\u8bed\u53e5\u65e2\u6709\u76f8\u540c\u7684\u90e8\u5206\uff0c\u4e5f\u6709\u4e0d\u540c\u7684\u90e8\u5206\uff0c\u9664\u975eSQL\u903b\u8f91\u975e\u5e38\u7b80\u5355\uff0c\u5426\u5219\u5f88\u96be\u5171\u4eab\u4ee3\u7801\u3002"),(0,l.kt)("p",null,"jimmer-sql\u5bf9\u5206\u9875\u67e5\u8be2\u8fdb\u884c\u4e86\u7279\u522b\u8bbe\u8ba1\uff0c\u5f00\u53d1\u8005\u53ea\u9700\u8981\u7f16\u5199data-query\uff0cjimmer-sql\u4f1a\u81ea\u52a8\u521b\u5efacount-query\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// \u03b1\nConfigurableTypedRootQuery<BookTable, Book> query = sqlClient\n    .createQuery(BookTable.class, (q, book) -> {\n        ...\n        Some code for dynamic table joins, \n        dynamic filters and dynamic orders \n        ...\n        return q.select(book);\n    });\n\n// \u03b2\nTypedRootQuery<Long> countQuery = query\n    // highlight-next-line\n    .reselect((oldQuery, book) ->\n        oldQuery.select(book.count())\n    )\n    // highlight-next-line\n    .withoutSortingAndPaging();\n\n// \u03b3\nint rowCount = countQuery.execute().get(0).intValue();\nList<Book> books = query.limit(10, 90).execute();\n")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u6ce8\u91ca",(0,l.kt)("inlineCode",{parentName:"p"},"\u03b1"),"\u5904\uff1a\n\u5f00\u53d1\u4eba\u5458\u521b\u5efadata-query\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u6ce8\u91ca",(0,l.kt)("inlineCode",{parentName:"p"},"\u03b2"),"\u5904\uff1a"),(0,l.kt)("p",{parentName:"li"},"\u5728data-query\u7684\u57fa\u7840\u4e0a\uff0c\u5feb\u901f\u521b\u5efa\u65b0\u7684count-query\u3002"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"reselect"),": \u66ff\u6362\u539f\u67e5\u8be2\u7684",(0,l.kt)("inlineCode",{parentName:"li"},"select"),"\u5b57\u53e5\uff0c\u6539\u4e3a\u67e5\u8be2\u8bb0\u5f55\u6761\u6570\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"withoutSortingAndPaging"),": \u5ffd\u7565\u539f\u6765\u67e5\u8be2\u7684",(0,l.kt)("inlineCode",{parentName:"li"},"order by"),"\u5b50\u53e5\u548c\u5206\u9875\uff08\u5982\u679c\u6709\u7684\u8bdd\uff09\u3002"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u6ce8\u91ca",(0,l.kt)("inlineCode",{parentName:"p"},"\u03b3"),"\u5904\uff1a"))),(0,l.kt)("p",null,"\u4f7f\u7528count-query\u67e5\u8be2\u8bb0\u5f55\u603b\u6761\u6570\uff0c\u4f7f\u7528data-query\u67e5\u8be2\u9875\u5185\u6570\u636e\uff0c\u4e24\u4e2a\u67e5\u8be2\u5404\u53f8\u5176\u804c\u3002"),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"reselect\u7684\u4f7f\u7528\u9650\u5236"),(0,l.kt)("ol",{parentName:"div"},(0,l.kt)("li",{parentName:"ol"},"\u7531reselect\u521b\u5efa\u7684\u67e5\u8be2\u4e0d\u80fd\u88ab\u8fdb\u4e00\u6b65reselect\uff0c\u8fd9\u5c06\u5bfc\u81f4\u5f02\u5e38\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5982\u679c\u539f\u67e5\u8be2\u7684select\u5b50\u53e5\u4e2d\u5305\u542b\u805a\u5408\u51fd\u6570\uff0c\u5219\u4f1a\u5f15\u53d1\u5f02\u5e38\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5982\u679c\u539f\u67e5\u8be2\u5305\u542bgroup by\u5b50\u53e5\uff0c\u5219\u4f1a\u5bfc\u81f4\u5f02\u5e38\u3002")))),(0,l.kt)("h2",{id:"\u81ea\u52a8\u4f18\u5316count-query"},"\u81ea\u52a8\u4f18\u5316count-query"),(0,l.kt)("h3",{id:"\u4f18\u5316\u89c4\u5219"},"\u4f18\u5316\u89c4\u5219"),(0,l.kt)("p",null,"\u4e3a\u4e86\u8ba9count-query\u7684\u6027\u80fd\u5c3d\u53ef\u80fd\u7684\u9ad8\uff0cjimmer-sql\u5bf9count-query\u8fdb\u884c\u4f18\u5316\uff0c\u5220\u9664\u539fdata-query\u67e5\u8be2\u4e0d\u5fc5\u8981\u7684\u8868\u8fde\u63a5\u3002"),(0,l.kt)("p",null,"\u6ce8\u610f\uff0c\u4ee5\u4e0b\u7c7b\u578b\u7684\u8868\u8fde\u63a5\u65e0\u6cd5\u88ab\u4f18\u5316\u5668\u53bb\u6389"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u88abwhere\u5b50\u53e5\u4f7f\u7528\u7684\u8868\u8fde\u63a5\u3002"),(0,l.kt)("p",{parentName:"li"},"\u4e5f\u5c31\u662f\u8bf4\uff0c\u53ea\u6709 ",(0,l.kt)("strong",{parentName:"p"},"\u4ec5")," \u88ab\u539fdata-query\u7684\u9876\u7ea7\u67e5\u8be2\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"select"),"\u6216",(0,l.kt)("inlineCode",{parentName:"p"},"order by"),"\u5b50\u53e5\u6240\u4f7f\u7528\u7684\u8868\u8fde\u63a5\uff0c\u624d\u6709\u53ef\u80fd\u4f1a\u88ab\u4f18\u5316\u5220\u9664\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u57fa\u4e8e\u96c6\u5408\u5173\u8054\u7684\u8868\u8fde\u63a5\u3002"),(0,l.kt)("p",{parentName:"li"},"\u96c6\u5408\u5173\u8054\uff0c\u4e5f\u5c31\u662f\u4e00\u5bf9\u591a\u6216\u591a\u5bf9\u591a\u5173\u8054\u3002\u8fd9\u6837\u7684\u8868\u8fde\u63a5\u4e0d\u53ef\u907f\u514d\u5730\u4f1a\u5f71\u54cd\u8bb0\u5f55\u7684\u6570\u91cf\uff0c\u56e0\u6b64\u8fd9\u4e9b\u8868\u8fde\u63a5\u4e00\u5b9a\u5728count-query\u4e2d\u88ab\u4fdd\u7559\u3002"),(0,l.kt)("p",{parentName:"li"},"\u663e\u7136\uff0c\u80fd\u591f\u88ab\u4f18\u5316\u5668\u5220\u9664\u7684\u8868\u8fde\u63a5\u90fd\u662f\u57fa\u4e8e\u5f15\u7528\u5173\u8054\u7684\uff0c\u5373\u591a\u5bf9\u4e00\u6216\u4e00\u5bf9\u4e00\u5173\u8054\u3002"))),(0,l.kt)("p",null,"\u5982\u679c\u57fa\u4e8e\u5f15\u7528\u5173\u8054\u7684\u8868\u8fde\u63a5\u4e0d\u5f71\u54cd\u8bb0\u5f55\u6570\uff0c\u5c31\u53ef\u4ee5\u53bb\u6389\u3002\u6709\u4e24\u79cd\u53ef\u80fd"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u8fde\u63a5\u7c7b\u578b\u4e3a\u5de6\u5916\u8fde\u63a5")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u867d\u7136\u8fde\u63a5\u7c7b\u578b\u662f\u5185\u8fde\u63a5\uff0c\u4f46\u5173\u8054\u57fa\u4e8e\u5916\u952e\u4e14\u5916\u952e\u975enull\u3002"))),(0,l.kt)("p",null,"\u7efc\u4e0a\u63cf\u8ff0\uff0c\u8981\u5224\u65ad\u539fdata-query\u4e2d\u67d0\u4e2a\u8868\u8fde\u63a5\u662f\u5426\u53ef\u4ee5\u5728count-query\u4e2d\u88ab\u81ea\u52a8\u5220\u9664\uff0c\u9700\u91c7\u7528\u5982\u4e0b\u4f18\u5316\u89c4\u5219"),(0,l.kt)("table",null,(0,l.kt)("tr",null,(0,l.kt)("td",{rowspan:"4"},"\u4e0e"),(0,l.kt)("td",{colspan:"2"},"\u662f\u5426\u57fa\u4e8e\u5f15\u7528\u5173\u8054\uff0c\u5373\u591a\u5bf9\u4e00\u6216\u4e00\u5bf9\u4e00")),(0,l.kt)("tr",null,(0,l.kt)("td",{colspan:"2"},"\u662f\u5426 ",(0,l.kt)("b",null,"\u4ec5")," \u88ab\u539fdata-query\u7684\u9876\u7ea7\u67e5\u8be2\u7684select\u6216orderBy\u5b50\u53e5\u6240\u7528")),(0,l.kt)("tr",null,(0,l.kt)("td",{rowspan:"2"},"\u6216"),(0,l.kt)("td",null,"\u662f\u5426\u662f\u5de6\u5916\u8fde\u63a5")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"\u5173\u8054\u662f\u5426\u975e\u7a7a"))),(0,l.kt)("h3",{id:"\u65e0\u6cd5\u4f18\u5316\u7684\u573a\u666f\u793a\u8303"},"\u65e0\u6cd5\u4f18\u5316\u7684\u573a\u666f\u793a\u8303"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"ConfigurableTypedRootQuery<BookTable, Book> query = \n    sqlClient.createQuery(BookTable.class, (q, book) -> {\n        q.where(\n            book.price().between(\n                new BigDecimal(20),\n                new BigDecimal(30)\n            )\n        );\n        q\n            // highlight-next-line\n            .orderBy(book.store().name()) // \u03b1\n            .orderBy(book.name());\n        return q.select(book);\n    });\n\nTypedRootQuery<Long> countQuery = query\n    .reselect((oldQuery, book) ->\n        oldQuery.select(book.count())\n    )\n    .withoutSortingAndPaging();\n\nint rowCount = countQuery.execute().get(0).intValue();\nSystem.out.println(rowCount);\n")),(0,l.kt)("p",null,"\u6ce8\u91ca\u03b1\u5904"),(0,l.kt)("p",null,"\u867d\u7136",(0,l.kt)("inlineCode",{parentName:"p"},"table.store()"),"\u4ec5\u88aborderBy\u5b50\u53e5\u4f7f\u7528\uff0c\u6ca1\u6709\u88abwhere\u5b50\u53e5\u4f7f\u7528\uff0c\u4f46\u662f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"table.store()"),"\u662f\u5185\u8fde\u63a5"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Book.store"),"\u5173\u8054\u53ef\u7a7a")),(0,l.kt)("p",null,"\u6240\u4ee5\uff0c\u4f18\u5316\u89c4\u5219\u5e76\u4e0d\u80fd\u751f\u6548\uff0ccount-query\u4ecd\u7136\u9700\u8981\u4fdd\u7559",(0,l.kt)("inlineCode",{parentName:"p"},"table.store()"),"\uff0c\u5e76\u6700\u7ec8\u5728SQL\u4e2d\u751f\u6210JOIN\u5b50\u53e5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select \n    count(tb_1_.ID) \nfrom BOOK as tb_1_ \n/* highlight-start */\ninner join BOOK_STORE as tb_2_ \n    on tb_1_.STORE_ID = tb_2_.ID\n/* highlight-end */ \nwhere tb_1_.PRICE between ? and ?\n")),(0,l.kt)("h3",{id:"\u53ef\u4f18\u5316\u7684\u573a\u666f\u793a\u8303"},"\u53ef\u4f18\u5316\u7684\u573a\u666f\u793a\u8303"),(0,l.kt)("p",null,"\u9488\u5bf9\u4e0a\u6587\u6240\u8ba8\u8bba\u7684\u65e0\u6cd5\u88ab\u4f18\u5316\u7684\u8fd9\u79cd\u60c5\u51b5\uff0c\u91c7\u7528\u4ee5\u4e0b\u4efb\u4f55\u4e00\u79cd\u4fee\u6539\uff0c\u90fd\u53ef\u4ee5\u8ba9\u4f18\u5316\u751f\u6548"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u628a",(0,l.kt)("inlineCode",{parentName:"li"},"Book.store"),"\u5173\u8054\u4fee\u6539\u4e3a\u975e\u7a7a\uff0c\u5373",(0,l.kt)("inlineCode",{parentName:"li"},"@ManyToOne(optional = false)")),(0,l.kt)("li",{parentName:"ol"},"\u91c7\u7528\u5de6\u5916\u8fde\u63a5")),(0,l.kt)("p",null,"\u5728\u8fd9\u91cc\uff0c\u6211\u4eec\u9009\u7528\u7b2c\u4e8c\u79cd\u65b9\u6848\uff0c\u5de6\u5916\u8fde\u63a5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"ConfigurableTypedRootQuery<BookTable, Book> query = \n    sqlClient.createQuery(BookTable.class, (q, book) -> {\n        q.where(\n            book.price().between(\n                new BigDecimal(20),\n                new BigDecimal(30)\n            )\n        );\n        q\n            // highlight-next-line\n            .orderBy(book.store(JoinType.LEFT).name())\n            .orderBy(book.name());\n        return q.select(book);\n    });\n\nTypedRootQuery<Long> countQuery = query\n    .reselect((oldQuery, book) ->\n        oldQuery.select(book.count())\n    )\n    .withoutSortingAndPaging();\n\nint rowCount = countQuery.execute().get(0).intValue();\nSystem.out.println(rowCount);\n")),(0,l.kt)("p",null,"\u73b0\u5728\uff0c\u4f18\u5316\u53ef\u4ee5\u751f\u6548\uff0c\u6700\u7ec8count-query\u751f\u6210SQL\u5982\u4e0b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select \n    count(tb_1_.ID) \nfrom BOOK as tb_1_ \nwhere tb_1_.PRICE between ? and ?\n")),(0,l.kt)("h2",{id:"\u65b9\u8a00\u548cdata-query"},"\u65b9\u8a00\u548cdata-query"),(0,l.kt)("p",null,"\u524d\u9762\u6211\u4eec\u6240\u8ba8\u8bba\u90fd\u662fcount-query\uff0c\u5206\u9875\u67e5\u8be2\u6700\u7ec8\u9700\u6267\u884c\u539fdata-query\u67e5\u8be2\u6570\u636e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"List<Book> books = query\n    // highlight-next-line\n    .limit(10, 90)\n    .execute();\n")),(0,l.kt)("p",null,"\u8fd9\u91cc",(0,l.kt)("inlineCode",{parentName:"p"},"limit(limit, offset)"),"\u8bbe\u7f6e\u5206\u9875\u533a\u95f4\u3002"),(0,l.kt)("p",null,"\u4e0d\u5e78\u7684\u662f\uff0c\u4e0d\u540c\u7684\u6570\u636e\u5e93\u5bf9\u5206\u9875\u67e5\u8be2\u7684\u652f\u6301\u5927\u76f8\u5f84\u5ead\u3002\u6240\u4ee5\uff0c\u5728\u521b\u5efaSqlClient\u65f6\u9700\u8981\u6307\u5b9a\u65b9\u8a00"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"SqlClient sqlClient = SqlClient\n    .newBuilder()\n    // highlight-next-line\n    .setDialect(new H2Dialect())\n    ... ...\n    .build();\n")),(0,l.kt)("p",null,"\u76ee\u524d\u652f\u6301\u7684\u65b9\u8a00\uff0c\u4ee5\u53ca\u5404\u81ea\u751f\u6210\u7684\u5206\u9875SQL\u5982\u4e0b"),(0,l.kt)("h3",{id:"\u9ed8\u8ba4\u884c\u4e3a\u542bdefaultdialecth2dialect\u548cpostgresdialect"},"\u9ed8\u8ba4\u884c\u4e3a\uff08\u542bDefaultDialect\u3001H2Dialect\u548cPostgresDialect\uff09"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select \n    tb_1_.ID, \n    tb_1_.NAME, \n    tb_1_.EDITION, \n    tb_1_.PRICE, \n    tb_1_.STORE_ID\nfrom BOOK as tb_1_ \nleft join BOOK_STORE as tb_2_ \n    on tb_1_.STORE_ID = tb_2_.ID \nwhere tb_1_.PRICE between ? and ? \norder by tb_2_.NAME asc, tb_1_.NAME asc \n/* highlight-next-line */\nlimit ? offset ?\n")),(0,l.kt)("h3",{id:"mysqldialect"},"MySqlDialect"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select \n    tb_1_.ID, \n    tb_1_.NAME, \n    tb_1_.EDITION, \n    tb_1_.PRICE, \n    tb_1_.STORE_ID\nfrom BOOK as tb_1_ \nleft join BOOK_STORE as tb_2_ \n    on tb_1_.STORE_ID = tb_2_.ID \nwhere tb_1_.PRICE between ? and ? \norder by tb_2_.NAME asc, tb_1_.NAME asc \n/* highlight-next-line */\nlimit ?, ?\n")),(0,l.kt)("h3",{id:"sqlserverdialect"},"SqlServerDialect"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select \n    tb_1_.ID, \n    tb_1_.NAME, \n    tb_1_.EDITION, \n    tb_1_.PRICE, \n    tb_1_.STORE_ID\nfrom BOOK as tb_1_ \nleft join BOOK_STORE as tb_2_ \n    on tb_1_.STORE_ID = tb_2_.ID \nwhere tb_1_.PRICE between ? and ? \norder by tb_2_.NAME asc, tb_1_.NAME asc \n/* highlight-next-line */\noffset ? rows fetch next ? rows only\n")),(0,l.kt)("h3",{id:"oracledialect"},"OracleDialect"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5f53offset\u4e0d\u4e3a0\u65f6"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select * from (\n    select core__.*, rownum rn__ \n    from (\n        select \n            tb_1_.ID, \n            tb_1_.NAME, \n            tb_1_.EDITION, \n            tb_1_.PRICE, \n            tb_1_.STORE_ID\n        from BOOK as tb_1_ \n        left join BOOK_STORE as tb_2_ \n            on tb_1_.STORE_ID = tb_2_.ID \n        where tb_1_.PRICE between ? and ? \n        order by tb_2_.NAME asc, tb_1_.NAME asc \n    /* highlight-next-line */\n    ) core__ where rownum <= ? /* \u03b1 */\n/* highlight-next-line */\n) limited__ where rn__ > ? /* \u03b2 */\n")),(0,l.kt)("p",{parentName:"li"},"\u5176\u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"\u03b1"),"\u5904\u53d8\u91cf\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"limit + offset"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"\u03b2"),"\u5904\u53d8\u91cf\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"offset"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5f53offset\u4e3a0\u65f6"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select core__.* from (\n    select \n        tb_1_.ID, \n        tb_1_.NAME, \n        tb_1_.EDITION, \n        tb_1_.PRICE, \n        tb_1_.STORE_ID\n    from BOOK as tb_1_ \n    left join BOOK_STORE as tb_2_ \n        on tb_1_.STORE_ID = tb_2_.ID \n    where tb_1_.PRICE between ? and ? \n    order by tb_2_.NAME asc, tb_1_.NAME asc \n/* highlight-next-line */\n) core__ where rownum <= ? /* \u03b1 */\n")),(0,l.kt)("p",{parentName:"li"},"\u5176\u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"\u03b1"),"\u5904\u53d8\u91cf\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"limit")))))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[607],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return d}});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),k=p(t),d=l,c=k["".concat(s,".").concat(d)]||k[d]||u[d]||r;return t?a.createElement(c,i(i({ref:n},m),{},{components:t})):a.createElement(c,i({ref:n},m))}));function d(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=k;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},2360:function(e,n,t){t.d(n,{Z:function(){return i}});var a=t(7294),l=t(6010),r="tabItem_OmH5";function i(e){var n=e.children,t=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,i),hidden:t},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return d}});var a=t(3117),l=t(7294),r=t(2389),i=t(7392),o=t(7094),s=t(2466),p=t(6010),m="tabList_uSqn",u="tabItem_LplD";function k(e){var n,t,r,k=e.lazy,d=e.block,c=e.defaultValue,b=e.values,N=e.groupId,h=e.className,v=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=b?b:v.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),_=(0,i.l)(g,(function(e,n){return e.value===n.value}));if(_.length>0)throw new Error('Docusaurus error: Duplicate values "'+_.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var f=null===c?c:null!=(n=null!=c?c:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(r=v[0])?void 0:r.props.value;if(null!==f&&!g.some((function(e){return e.value===f})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var T=(0,o.U)(),I=T.tabGroupChoices,x=T.setTabGroupChoices,O=(0,l.useState)(f),y=O[0],j=O[1],q=[],w=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=N){var E=I[N];null!=E&&E!==y&&g.some((function(e){return e.value===E}))&&j(E)}var C=function(e){var n=e.currentTarget,t=q.indexOf(n),a=g[t].value;a!==y&&(w(n),j(a),null!=N&&x(N,a))},A=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=q.indexOf(e.currentTarget)+1;t=q[a]||q[0];break;case"ArrowLeft":var l=q.indexOf(e.currentTarget)-1;t=q[l]||q[q.length-1]}null==(n=t)||n.focus()};return l.createElement("div",{className:(0,p.Z)("tabs-container",m)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":d},h)},g.map((function(e){var n=e.value,t=e.label,r=e.attributes;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:y===n?0:-1,"aria-selected":y===n,key:n,ref:function(e){return q.push(e)},onKeyDown:A,onFocus:C,onClick:C},r,{className:(0,p.Z)("tabs__item",u,null==r?void 0:r.className,{"tabs__item--active":y===n})}),null!=t?t:n)}))),k?(0,l.cloneElement)(v.filter((function(e){return e.props.value===y}))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},v.map((function(e,n){return(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==y})}))))}function d(e){var n=(0,r.Z)();return l.createElement(k,(0,a.Z)({key:String(n)},e))}},6801:function(e,n,t){t.r(n),t.d(n,{assets:function(){return k},contentTitle:function(){return m},default:function(){return b},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return d}});var a=t(3117),l=t(102),r=(t(7294),t(3905)),i=t(9877),o=t(2360),s=["components"],p={sidebar_position:5,title:"\u8868\u8fde\u63a5"},m=void 0,u={unversionedId:"jimmer-sql/table-join",id:"jimmer-sql/table-join",title:"\u8868\u8fde\u63a5",description:"\u672c\u6587\u5c06\u7cfb\u7edf\u6027\u4ecb\u7ecd\u8868\u4e4b\u95f4\u7684join\u64cd\u4f5c\u3002\u5305\u542b\u56db\u4e2a\u90e8\u5206",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/jimmer-sql/table-join.mdx",sourceDirName:"jimmer-sql",slug:"/jimmer-sql/table-join",permalink:"/jimmer/zh/docs/jimmer-sql/table-join",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/jimmer-sql/table-join.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"\u8868\u8fde\u63a5"},sidebar:"tutorialSidebar",previous:{title:"Table\u548cTableEx",permalink:"/jimmer/zh/docs/jimmer-sql/table-and-table-ex"},next:{title:"\u8868\u8fbe\u5f0f",permalink:"/jimmer/zh/docs/jimmer-sql/expression"}},k={},d=[{value:"\u52a8\u6001\u8fde\u63a5",id:"\u52a8\u6001\u8fde\u63a5",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:3},{value:"\u51b2\u7a81\u5408\u5e76\u89c4\u5219",id:"\u51b2\u7a81\u5408\u5e76\u89c4\u5219",level:3},{value:"\u5e7b\u8fde\u63a5",id:"\u5e7b\u8fde\u63a5",level:2},{value:"\u534a\u8fde\u63a5",id:"\u534a\u8fde\u63a5",level:2},{value:"\u9006\u8fde\u63a5",id:"\u9006\u8fde\u63a5",level:2}],c={toc:d};function b(e){var n=e.components,t=(0,l.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u672c\u6587\u5c06\u7cfb\u7edf\u6027\u4ecb\u7ecd\u8868\u4e4b\u95f4\u7684join\u64cd\u4f5c\u3002\u5305\u542b\u56db\u4e2a\u90e8\u5206"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u52a8\u6001\u8fde\u63a5"),(0,r.kt)("li",{parentName:"ol"},"\u5e7b\u8fde\u63a5"),(0,r.kt)("li",{parentName:"ol"},"\u534a\u8fde\u63a5"),(0,r.kt)("li",{parentName:"ol"},"\u9006\u8fde\u63a5")),(0,r.kt)("h2",{id:"\u52a8\u6001\u8fde\u63a5"},"\u52a8\u6001\u8fde\u63a5"),(0,r.kt)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.kt)("p",null,"\u8ba9\u6211\u4eec\u5148\u6765\u770b\u4e00\u4e2a\u52a8\u6001\u8fde\u63a5\u7684\u793a\u8303\u3002"),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class BookRepository {\n\n    private final JSqlClient sqlClient;\n\n    public BookRepository(JSqlClient sqlClient) {\n        this.sqlClient = sqlClient;\n    }\n\n    public List<Book> findBooks(\n        @Nullable String name, \n        @Nullable String storeName,\n        @Nullable String storeWebsite\n    ) {\n        return sqlClient\n            .createQuery(\n                BookTable.class, (q, book) -> {\n                    if (name != null) {\n                        q.where(book.name().eq(name));\n                    }\n                    if (storeName != null) {\n                        q.where(\n                            book\n                                // highlight-next-line\n                                .store() // \u03b1\n                                .name()\n                                .eq(storeName)\n                        );\n                    }\n                    if (storeWebsite != null) {\n                        q.where(\n                            book\n                                // highlight-next-line\n                                .store() // \u03b2\n                                .website()\n                                .eq(storeWebsite)\n                        );\n                    }\n                    return q.select(book);\n                }\n            )\n            .execute();\n    }\n}\n"))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"class BookRepository(\n    private val sqlClient: KSqlClient\n) {\n    fun findBooks(\n        name: String?,\n        storeName: String?,\n        storeWebsite: String?\n    ): List<Book> =\n        sqlClient\n            .createQuery(Book::class) {\n                name?.let {\n                    where(table.name eq it)\n                }\n                storeName?.let {\n                    where(\n                        table\n                            // highlight-next-line\n                            .store // \u03b1\n                            .name eq it\n                    )\n                }\n                storeName?.let {\n                    where(\n                        table\n                            // highlight-next-line\n                            .store // \u03b2\n                            .website eq it\n                    )\n                }\n                select(table)\n            }\n            .execute()\n}\n")))),(0,r.kt)("p",null,"\u8fd9\u662f\u4e00\u4e2a\u5178\u578b\u7684\u52a8\u6001\u67e5\u8be2\uff0c\u4e09\u4e2a\u67e5\u8be2\u53c2\u6570\u90fd\u5141\u8bb8\u4e3anull\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6307\u5b9a",(0,r.kt)("inlineCode",{parentName:"p"},"name"),"\uff0c\u4f46",(0,r.kt)("inlineCode",{parentName:"p"},"storeName"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"storeWebsite"),"\u4ecd\u7136\u4e3anull\u3002"),(0,r.kt)("p",{parentName:"li"},"  \u8fd9\u65f6\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"\u03b1"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"\u03b2"),"\u4e24\u5904\u7684\u4ee3\u7801\u90fd\u4e0d\u4f1a\u6267\u884c\uff0c\u6700\u7ec8\u751f\u6210\u7684SQL\u4e0d\u4f1a\u5305\u542b\u4efb\u4f55join\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select \n    tb_1_.ID, \n    tb_1_.NAME, \n    tb_1_.EDITION, \n    tb_1_.PRICE, \n    tb_1_.STORE_ID \nfrom BOOK as tb_1_ \n    where tb_1_.NAME = ?\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6307\u5b9a",(0,r.kt)("inlineCode",{parentName:"p"},"name"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"storeName"),", \u4f46",(0,r.kt)("inlineCode",{parentName:"p"},"storeWebsite"),"\u4ecd\u7136\u4e3anull\u3002"),(0,r.kt)("p",{parentName:"li"},"  \u8fd9\u65f6\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"\u03b1"),"\u5904\u7684\u8fde\u63a5\u751f\u6548\u4f46",(0,r.kt)("inlineCode",{parentName:"p"},"\u03b2"),"\u5904\u7684\u4ee3\u7801\u4e0d\u4f1a\u88ab\u6267\u884c\uff0c\u6700\u7ec8\u751f\u6210\u7684SQL\u5982\u4e0b\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select \n    tb_1_.ID, \n    tb_1_.NAME, \n    tb_1_.EDITION, \n    tb_1_.PRICE, \n    tb_1_.STORE_ID \nfrom BOOK as tb_1_ \n/* highlight-start */\ninner join BOOK_STORE as tb_2_ \n    on tb_1_.STORE_ID = tb_2_.ID\n/* highlight-end */ \nwhere \n    tb_1_.NAME = ? \nand \n    tb_2_.NAME = ?\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6307\u5b9a",(0,r.kt)("inlineCode",{parentName:"p"},"name"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"storeWebsite"),", \u4f46",(0,r.kt)("inlineCode",{parentName:"p"},"storeName"),"\u4ecd\u7136\u4e3anull\u3002"),(0,r.kt)("p",{parentName:"li"},"  \u8fd9\u65f6\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"\u03b2"),"\u5904\u7684\u8fde\u63a5\u751f\u6548\u4f46",(0,r.kt)("inlineCode",{parentName:"p"},"\u03b1"),"\u5904\u7684\u4ee3\u7801\u4e0d\u4f1a\u88ab\u6267\u884c\uff0c\u6700\u7ec8\u751f\u6210\u7684SQL\u5982\u4e0b\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select \n    tb_1_.ID, \n    tb_1_.NAME, \n    tb_1_.EDITION, \n    tb_1_.PRICE, \n    tb_1_.STORE_ID \nfrom BOOK as tb_1_ \n/* highlight-start */\ninner join BOOK_STORE as tb_2_ \n    on tb_1_.STORE_ID = tb_2_.ID \n/* highlight-end */\nwhere \n    tb_1_.NAME = ? \nand \n    tb_2_.WEBSITE = ?\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6307\u5b9a\u6240\u6709\u53c2\u6570\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"storeName"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"storeWebsite"),"\u90fd\u975enull\u3002"),(0,r.kt)("p",{parentName:"li"},"  \u8fd9\u65f6\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"\u03b1"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"\u03b2"),"\u4e24\u5904\u7684\u8fde\u63a5\u90fd\u751f\u6548\uff0c\u8fd9\u79cd\u60c5\u51b5\u53eb\u8fde\u63a5\u51b2\u7a81\u3002"),(0,r.kt)("p",{parentName:"li"},"  \u8fd9\u79cd\u51b2\u7a81\u5e76\u4e0d\u4f1a\u5bfc\u81f4\u4efb\u4f55\u95ee\u9898\uff0c\u56e0\u4e3a\u5728\u6700\u7ec8SQL\u4e2d\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u51b2\u7a81\u7684table join\u4f1a\u88ab\u5408\u5e76\u6210\u4e86\u4e00\u4e2a\uff0c\u800c\u975ejoin\u591a\u6b21"),"\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select \n    tb_1_.ID, \n    tb_1_.NAME, \n    tb_1_.EDITION, \n    tb_1_.PRICE, \n    tb_1_.STORE_ID \nfrom BOOK as tb_1_ \n    /* highlight-start */\n    inner join BOOK_STORE as tb_2_ on \n        tb_1_.STORE_ID = tb_2_.ID \n    /* highlight-end */\nwhere \n    tb_1_.NAME = ? \nand \n    tb_2_.NAME = ? \nand \n    tb_2_.WEBSITE = ?\n")))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u5c0f\u7ed3"),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u65e0\u9700\u50cf\u5176\u5b83ORM\u4e00\u6837\u4f7f\u7528\u5c40\u90e8\u53d8\u91cf\u6765\u8bb0\u4f4fjoin\u5bf9\u8c61\uff0c\u53ef\u4ee5\u5728SQL\u7684\u4efb\u4f55\u4f4d\u7f6e\u521b\u5efa\u5e76\u4f7f\u7528\u4e34\u65f6join\u5bf9\u8c61\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u66f4\u91cd\u8981\u7684\u662f\uff0c\u4e0d\u5fc5\u8003\u8651\u8fd9\u4e9bjoin\u5bf9\u8c61\u4e4b\u95f4\u662f\u5426\u5b58\u5728\u51b2\u7a81\uff0c\u51b2\u7a81\u7684join\u5bf9\u8c61\u4f1a\u88ab\u81ea\u52a8\u5408\u5e76\u3002"))),(0,r.kt)("p",{parentName:"div"},"\u8fd9\u6837\u7279\u6027\u4f7f\u5f97jimmer-sql\u6781\u5176\u9002\u5408\u5b9e\u73b0\u590d\u6742\u7684\u52a8\u6001\u67e5\u8be2\u3002\u4e5f\u662fjimmer-sql\u9879\u76ee\u88ab\u521b\u5efa\u7684\u52a8\u673a\u4e4b\u4e00\u3002"))),(0,r.kt)("p",null,"\u53e6\u5916\uff0c\u5982\u679c\u521b\u5efa\u4e86\u8868\u8fde\u63a5\u4f46\u5e76\u4e0d\u4f7f\u7528\uff0c\u8be5\u8868\u8fde\u63a5\u5c06\u4f1a\u88ab\u5ffd\u7565\uff0c\u4e0d\u4f1a\u5728\u6700\u7ec8SQL\u4e2d\u88ab\u751f\u6210\u3002"),(0,r.kt)("h3",{id:"\u51b2\u7a81\u5408\u5e76\u89c4\u5219"},"\u51b2\u7a81\u5408\u5e76\u89c4\u5219"),(0,r.kt)("p",null,"\u4e0a\u9762\u7684\u4f8b\u5b50\u5f88\u7b80\u5355\uff0cJava\u4ee3\u7801\u4e2d\u7684\u8fde\u63a5\u53ea\u6709\u4e00\u5c42\u3002\u4e8b\u5b9e\u4e0a\uff0c\u53ef\u4ee5\u521b\u5efa\u8f83\u6df1\u7684join\u5bf9\u8c61"),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'q.where(\n    store // \u5047\u8bbestore\u7684\u7c7b\u578b\u662f\u662fBookStoreTableEx\uff0c\n          // \u5141\u8bb8\u4f7f\u7528\u96c6\u5408\u5173\u8054\n        // highlight-next-line\n        .books().authors() // \u591a\u5c42join\n        .firstName()\n        .eq("X")\n);\n'))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'where(\n    table // \u5047\u8bbetable\u7684\u7c7b\u578b\u662f\u662fTableEx<BookStore>\uff0c\n          // \u5141\u8bb8\u4f7f\u7528\u96c6\u5408\u5173\u8054\n        // highlight-next-line\n        .books.authors // \u591a\u5c42join\n        .firstName eq "X"\n)\n')))),(0,r.kt)("p",null,"\u6216"),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'q.where(\n    author // \u5047\u8bbeauthor\u7684\u7c7b\u578b\u662f\u662fAuthorTableEx\uff0c\n           // \u5141\u8bb8\u4f7f\u7528\u96c6\u5408\u5173\u8054\n        // highlight-next-line\n        .books().store() // \u591a\u5c42join\n        .name()\n        .eq("X")\n);\n'))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'where(\n    table // \u5047\u8bbetable\u7684\u7c7b\u578b\u662f\u662fTableEx<Author>\uff0c\n          // \u5141\u8bb8\u4f7f\u7528\u96c6\u5408\u5173\u8054\n        // highlight-next-line\n        .books.store // \u591a\u5c42join\n        .name eq "X"\n)\n')))),(0,r.kt)("p",null,"\u7531\u6b64\u53ef\u89c1\uff0cJava\u4ee3\u7801\u521b\u5efa\u7684join\u5bf9\u8c61\uff0c\u5176\u5b9e\u662f\u4e00\u79cd\u957f\u5ea6\u4efb\u610f\u7684\u8def\u5f84\uff0c\u53eb\u505ajoin\u8def\u5f84\u3002join\u8def\u5f84\u5305\u542b1\u5230\u65e0\u7a77\u4e2ajoin\u8282\u70b9\u3002"),(0,r.kt)("p",null,"\u4e3a\u4e86\u8ba9\u63cf\u8ff0\u66f4\u5177\u666e\u9002\u6027\uff0c\u8ba9\u6211\u4eec\u6765\u770b\u4e09\u4e2a\u6bd4\u8f83\u957f\u7684\u8def\u5f84 ",(0,r.kt)("em",{parentName:"p"},"\uff08\u5b9e\u9645\u9879\u76ee\u4e2d\u4e0d\u53ef\u80fd\u6709\u5982\u6b64\u957f\u7684\u8868\u8fde\u63a5\u8def\u5f84\uff0c\u4ec5\u501f\u6b64\u505a\u9610\u8ff0\u800c\u5df2\uff09"),"\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"a -> b -> c -> d -> e -> f -> g"),(0,r.kt)("li",{parentName:"ol"},"a -> b -> c -> h -> i -> j"),(0,r.kt)("li",{parentName:"ol"},"a -> x -> y -> z -> a-> b -> c -> d")),(0,r.kt)("p",null,"\u4e3a\u4e86\u6d88\u9664\u51b2\u7a81\uff0cjimmer-sql\u4f1a\u628a\u8fd9\u4e9b\u8def\u5f84\u4e2d\u7684\u8282\u70b9\u5408\u5e76\u6210\u4e00\u68f5\u6811"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"-+-a\n |\n +----+-b\n |    |\n |    \\----+-c \n |         |\n |         +----+-d\n |         |    |\n |         |    \\----+-e\n |         |         |\n |         |         \\----+-f\n |         |              |\n |         |              \\------g\n |         |\n |         \\----+-h\n |              |\n |              \\----+-i\n |                   |\n |                   \\------j\n |\n \\----+-x\n      |\n      \\----+-y\n           |\n           \\----+-z\n                |\n                \\----+-a\n                     |\n                     \\----+-b\n                          |\n                          \\----+-c\n                               |\n                               \\------d\n")),(0,r.kt)("p",null,"jimmer-sql\u4f1a\u6839\u636e\u8fd9\u68f5\u6811\u6765\u751f\u6210\u6700\u7ec8SQL\u4e2d\u7684join\u5b50\u53e5\u3002"),(0,r.kt)("p",null,"\u53e6\u5916\u4e00\u4e2a\u9700\u8981\u8bf4\u660e\u7684\u89c4\u5219\uff0c\u5c31\u662f\u8fde\u63a5\u65b9\u5f0f\u3002\u521b\u5efajoin\u5bf9\u8c61\u7684\u65b9\u6cd5\u5177\u5907\u53c2\u6570\uff0c\u4ee5\u6307\u5b9a\u8fde\u63a5\u65b9\u5f0f\uff0c\u6bd4\u5982\uff0c\u5de6\u8fde\u63a5\uff1a"),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"book.store(JoinType.LEFT);\n"))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"book.`store?`\n")))),(0,r.kt)("p",null,"\u8fde\u63a5\u65b9\u5f0f\u5408\u5e76\u89c4\u5219\u5982\u4e0b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u53d1\u751f\u51b2\u7a81\u7684join\u8282\u70b9\u7684\u8fde\u63a5\u65b9\u5f0f\u5168\u90e8\u4e00\u6837\uff0c\u5408\u5e76\u540e\u8fde\u63a5\u65b9\u5f0f\u4e0d\u53d8\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5426\u5219\uff0c\u5408\u5e76\u540e\u4e00\u5b9a\u662f\u5185\u8fde\u63a5\u3002")),(0,r.kt)("h2",{id:"\u5e7b\u8fde\u63a5"},"\u5e7b\u8fde\u63a5"),(0,r.kt)("p",null,"\u5e7b\u8fde\u63a5\u662f\u4e00\u4e2a\u5f88\u7b80\u5355\u7684\u4f18\u5316\u6982\u5ff5\uff0c\u548c\u666e\u901a\u7684\u8fde\u63a5\u5bf9\u6bd4\u4e00\u4e0b\u5c31\u660e\u767d\u4e86\u3002"),(0,r.kt)("p",null,"\u6211\u4eec\u5148\u6765\u770b\u4e00\u4e2a\u666e\u901a\u8868\u8fde\u63a5\u7684\u4f8b\u5b50\u3002"),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'List<Book> books = sqlClient\n    .createQuery(BookTable.class, (q, book) -> {\n        return q\n            .where(book.store().name().eq("MANNING"))\n            .select(book);\n    })\n    .execute();\n'))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val books = sqlClient\n    .createQuery(Book::class) {\n        where(table.store.name eq "MANNING")\n        select(table)    \n    }\n    .execute()\n')))),(0,r.kt)("p",null,"\u751f\u6210\u7684SQL\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select \n    tb_1_.ID, \n    tb_1_.NAME, \n    tb_1_.EDITION, \n    tb_1_.PRICE, \n    tb_1_.STORE_ID \nfrom BOOK as tb_1_ \n    /* highlight-start */\n    inner join BOOK_STORE as tb_2_ \n        on tb_1_.STORE_ID = tb_2_.ID\n    /* highlight-end */     \nwhere \n    tb_2_.NAME = ?\n")),(0,r.kt)("p",null,"\u73b0\u5728\uff0c\u518d\u6765\u770b\u4e00\u4e2a\u5e7b\u8fde\u63a5\u7684\u4f8b\u5b50"),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"List<Book> books = sqlClient\n    .createQuery(BookTable.class, (q, book) -> {\n        return q\n            .where(\n                book\n                    .store()\n                    // highlight-next-line\n                    .id() // \u53ea\u8bbf\u95eeid\n                    .eq(2L)\n            )\n            .select(book);\n    })\n    .execute();\n"))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val books = sqlClient\n    .createQuery(Book::class) {\n        where(\n            table\n            .store\n            // highlight-next-line\n            .id // \u53ea\u8bbf\u95eeid\n            eq 2L\n        )\n        select(table)\n    }\n    .execute()\n")))),(0,r.kt)("p",null,"\u8fd9\u6b21\uff0c\u751f\u6210\u7684SQL\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select \n    tb_1_.ID, \n    tb_1_.NAME, \n    tb_1_.EDITION, \n    tb_1_.PRICE, \n    tb_1_.STORE_ID \nfrom BOOK as tb_1_ \n    where tb_1_.STORE_ID = ?\n")),(0,r.kt)("p",null,"\u6211\u4eec\u6ca1\u6709\u5728SQL\u4e2d\u770b\u5230\u4efb\u4f55\u8868\u8fde\u63a5\uff0c\u6211\u4eec\u53ea\u770b\u5230\u6761\u4ef6\u4e00\u4e2a\u57fa\u4e8e\u5916\u952e\u7684\u5224\u65ad\u6761\u4ef6",(0,r.kt)("inlineCode",{parentName:"p"},"tb_1_.STORE_ID = ?"),"\u3002"),(0,r.kt)("p",null,"\u539f\u56e0\uff1a\u5bf9\u4e8e\u57fa\u4e8e\u5916\u952e\u6620\u5c04\u7684\u591a\u5bf9\u4e00\u5173\u8054\u800c\u8a00\uff0c\u7236\u8868\u7684id\u5176\u5b9e\u5c31\u662f\u5b50\u8868\u81ea\u5df1\u7684\u5916\u952e\u3002"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5bf9\u4e8e\u57fa\u4e8e\u5916\u952e\u6620\u5c04\u7684\u591a\u5bf9\u4e00\u5173\u8054\uff0c\u5728Java\u67e5\u8be2\u4ee3\u7801\u4e2d\u901a\u8fc7\u8fde\u63a5\u64cd\u4f5c\u83b7\u53d6\u4e86\u5173\u8054\u5bf9\u8c61\uff0c\u5982\u679c\u6b64\u5173\u8054\u5bf9\u8c61\u9664\u4e86id\u5b57\u6bb5\u4ee5\u5916\u6ca1\u6709\u4efb\u4f55\u7684\u5176\u5b83\u5b57\u6bb5\u88ab\u8bbf\u95ee\uff0c\u90a3\u4e48\u8be5\u8fde\u63a5\u5c06\u88ab\u89c6\u4e3a\u5e7b\u8fde\u63a5\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5e7b\u8fde\u63a5\u5c06\u4f1a\u88ab\u5ffd\u7565\uff0c\u4e0d\u4f1a\u5728\u6700\u7ec8SQL\u4e2d\u751f\u6210\u76f8\u5173\u7684JOIN\u8bed\u53e5\u3002"))))),(0,r.kt)("h2",{id:"\u534a\u8fde\u63a5"},"\u534a\u8fde\u63a5"),(0,r.kt)("p",null,"\u534a\u8fde\u63a5\u662f\u4e00\u4e2a\u548c\u5e7b\u8c61\u8fde\u63a5\u7c7b\u4f3c\u7684\u6982\u5ff5\uff0c\u4f46\u7528\u4e8e\u57fa\u4e8e\u4e2d\u95f4\u8868\u7684\u5173\u8054\u3002"),(0,r.kt)("p",null,"\u6211\u4eec\u5148\u6765\u770b\u4e00\u4e2a\u57fa\u4e8e\u4e2d\u95f4\u8868\u7684\u666e\u901a\u8fde\u63a5\u3002"),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'List<Long> bookIds = sqlClient\n    .createQuery(BookTable.class, (q, book) -> {\n        return q\n            .where(\n                ((BookTableEx)book)\n                    .authors()\n                    .firstName()\n                    .eq("Alex")\n            )\n            .select(book.id());\n    })\n    .distinct()\n    .execute();\n'))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val bookIds = sqlClient\n    .createQuery(Book::class) {\n        where(\n            (table as KNullableTableEx<Book>)\n                .authors\n                .firstName eq "Alex"\n        )\n        select(table.id)\n    }\n    .distinct()\n    .execute()\n')))),(0,r.kt)("p",null,"\u751f\u6210\u7684SQL\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select \n    distinct tb_1_.ID \nfrom BOOK as tb_1_ \n/* highlight-start */\ninner join BOOK_AUTHOR_MAPPING as tb_2_ \n    on tb_1_.ID = tb_2_.BOOK_ID \ninner join AUTHOR as tb_3_ on \n    tb_2_.AUTHOR_ID = tb_3_.ID\n/* highlight-end */ \nwhere tb_3_.FIRST_NAME = ?\n")),(0,r.kt)("p",null,"\u6211\u4eec\u770b\u5230\u57fa\u4e8e\u4e2d\u95f4\u8868\u7684\u8fde\u63a5\u4f1a\u4ea7\u751f\u4e24\u4e2aSQL JOIN\u5b50\u53e5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7b2c\u4e00\u6b65\uff1a\u8fde\u63a5\u5230\u4e2d\u95f4\u8868\n",(0,r.kt)("inlineCode",{parentName:"p"},"inner join BOOK_AUTHOR_MAPPING as tb_2_ on tb_1_.ID = tb_2_.BOOK_ID "))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7b2c\u4e8c\u6b65\uff1a\u8fde\u63a5\u5230\u76ee\u6807\u8868\n",(0,r.kt)("inlineCode",{parentName:"p"},"inner join AUTHOR as tb_3_ on tb_2_.AUTHOR_ID = tb_3_.ID")))),(0,r.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u8ba9\u6211\u4eec\u770b\u770b\u534a\u8fde\u63a5\u7684\u4f8b\u5b50"),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"List<UUID> bookIds = sqlClient\n    .createQuery(BookTable.class, (q, book) -> {\n        return q\n            .where(\n                ((BookTableEx)book)\n                    .authors()\n                    // highlight-next-line\n                    .id() // \u53ea\u8bbf\u95eeid\n                    .eq(2L)\n            )\n            .select(book.id());\n    })\n    .distinct()\n    .execute();\n"))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val bookIds = sqlClient\n    .createQuery(Book::class) {\n        where(\n            (table as KNullableTableEx<Book>)\n                .authors\n                // highlight-next-line\n                .id // \u53ea\u8bbf\u95eeid \n                eq 2L\n        )\n        select(table.id)\n    }\n    .distinct()\n    .execute()\n")))),(0,r.kt)("p",null,"\u8fd9\u6b21\uff0c\u751f\u6210\u7684SQL\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select \n    distinct tb_1_.ID \nfrom BOOK as tb_1_ \n/* highlight-start */\ninner join BOOK_AUTHOR_MAPPING as tb_2_ \n    on tb_1_.ID = tb_2_.BOOK_ID \n/* highlight-end */\nwhere tb_2_.AUTHOR_ID = ?\n")),(0,r.kt)("p",null,"\u8fd9\u4e00\u6b21\uff0c\u6211\u4eec\u53ea\u770b\u5230\u4e00\u4e2aSQL JOIN\u5b50\u53e5\uff0c\u800c\u4e0d\u662f\u4e24\u4e2a\u3002"),(0,r.kt)("p",null,"\u539f\u56e0\uff1a\u76ee\u6807\u8868\u7684\u4e3b\u952e\uff0c\u5176\u5b9e\u5c31\u662f\u4e2d\u95f4\u8868\u5230\u76ee\u6807\u8868\u7684\u5916\u952e\u3002"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5bf9\u4e8e\u57fa\u4e8e\u4e2d\u95f4\u8868\u6620\u5c04\u7684\u5173\u8054\uff0c\u5728Java\u67e5\u8be2\u4ee3\u7801\u4e2d\u901a\u8fc7\u8fde\u63a5\u64cd\u4f5c\u83b7\u53d6\u4e86\u5173\u8054\u5bf9\u8c61\uff0c\u5982\u679c\u6b64\u5173\u8054\u5bf9\u8c61\u9664\u4e86id\u5b57\u6bb5\u4ee5\u5916\u6ca1\u6709\u4efb\u4f55\u7684\u5176\u5b83\u5b57\u6bb5\u88ab\u8bbf\u95ee\uff0c\u90a3\u4e48\u8be5\u8fde\u63a5\u5c06\u88ab\u89c6\u4e3a\u534a\u8fde\u63a5\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728\u6700\u7ec8\u751f\u6210\u7684SQL\u4e2d\uff0c\u534a\u8fde\u63a5\u4ec5\u4f7f\u7528\u4e00\u6761JOIN\u8bed\u53e5\u8fde\u63a5\u5230\u4e2d\u95f4\u8868\uff0c\u4e0d\u4f1a\u8fdb\u4e00\u6b65\u4f7f\u7528\u7b2c\u4e8c\u6761JOIN\u8bed\u53e5\u8fde\u63a5\u5230\u76ee\u6807\u8868\u3002"))))),(0,r.kt)("h2",{id:"\u9006\u8fde\u63a5"},"\u9006\u8fde\u63a5"),(0,r.kt)("p",null,"\u5230\u76ee\u524d\u4e3a\u6b62\uff0c\u6211\u4eec\u8ba8\u8bba\u8fc7\u7684\u6240\u6709\u8868\u8fde\u63a5\u4ec5\u9002\u7528\u4e8e\u5728\u5b9e\u4f53\u63a5\u53e3\u4e2d\u5b9a\u4e49\u4e86java\u5c5e\u6027\u7684\u60c5\u51b5\u3002"),(0,r.kt)("p",null,"\u8bda\u7136\uff0c\u5982\u679c\u5f00\u53d1\u4eba\u5458\u5b9a\u4e49\u4e86\u5b9e\u4f53\u63a5\u53e3\u4e4b\u95f4\u7684\u53cc\u5411\u5173\u8054"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"A <--\x3e B")),(0,r.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u4ece\u4efb\u4f55\u4e00\u7aef\u8fde\u63a5\u5230\u53e6\u5916\u4e00\u7aef\uff0c\u65e0\u8bba\u662f\u4ece",(0,r.kt)("inlineCode",{parentName:"p"},"A"),"\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"B"),"\u8fd8\u662f\u4ece",(0,r.kt)("inlineCode",{parentName:"p"},"B"),"\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"A"),"\u3002"),(0,r.kt)("p",null,"\u4f46\u662f\uff0c\u6709\u65f6\u5f00\u53d1\u8005\u5728\u5b9e\u4f53\u63a5\u53e3\u4e2d\u53ea\u5b9a\u4e49\u5355\u5411\u5173\u8054"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"A --\x3e B"),"\n\u73b0\u5728\uff0c\u6211\u4eec\u53ea\u80fd\u4ece",(0,r.kt)("inlineCode",{parentName:"p"},"A"),"\u8fde\u63a5\u5230B\uff0c\u65e0\u6cd5\u4ece",(0,r.kt)("inlineCode",{parentName:"p"},"B"),"\u8fde\u63a5\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"A"),"\u3002"),(0,r.kt)("p",null,"\u8bda\u7136\uff0c\u5b50\u67e5\u8be2\u53ef\u4ee5\u89e3\u51b3\u6240\u6709\u95ee\u9898\u3002\u7136\u800c\uff0cjimmer-sql\u4ecd\u7136\u53ef\u4ee5\u8ba9\u60a8\u901a\u8fc7\u8868\u8fde\u63a5\u6765\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u8fd9\u88ab\u79f0\u4e3a\u9006\u8fde\u63a5\u3002"),(0,r.kt)("p",null,"\u4e3a\u4e86\u66f4\u597d\u5730\u9610\u8ff0\u9006\u8fde\u63a5\uff0c\u6211\u4eec\u5148\u6765\u770b\u770b\u666e\u901a\u7684\u8fde\u63a5\u3002"),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'q.where(\n    book\n        // \u8fd9\u662f\u4e00\u4e2a\u666e\u901a\u7684\u6b63\u5411\u8fde\u63a5\n        // highlight-next-line\n        .authors()\n        .firstName()\n        .eq("Alex")\n);\n'))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'where(\n    table\n        // \u8fd9\u662f\u4e00\u4e2a\u666e\u901a\u7684\u6b63\u5411\u8fde\u63a5\n        // highlight-next-line\n        .authors\n        .firstName eq "Alex"\n)\n')))),(0,r.kt)("p",null,"\u4e0e\u4e4b\u5b8c\u5168\u7b49\u4ef7\u7684\u9006\u8fde\u63a5\uff0c\u6709\u4e24\u79cd\u5199\u6cd5"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5f31\u7c7b\u578b\u5199\u6cd5"),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'q.where(\n    book\n        // Author.books\u53cd\u8fc7\u6765\u5c31\u662fBook.authors\n        // highlight-next-line\n        .inverseJoin(Author.class, "books")\n        .firstName()\n        .eq("Alex")\n);\n'))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'where(\n    table\n        // Author.books\u53cd\u8fc7\u6765\u5c31\u662fBook.authors\n        // highlight-next-line\n        .inverseJoin(Author::class, "books")\n        .firstName eq "Alex"\n)\n'))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5f3a\u7c7b\u578b\u5199\u6cd5"),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'q.where(\n    book\n        // Author.books\u53cd\u8fc7\u6765\u5c31\u662fBook.authors\n        // highlight-next-line\n        .inverseJoin(\n            AuthorTableEx.class, \n            AuthorTableEx::books\n        )\n        .firstName()\n        .eq("Alex")\n);\n'))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'where(\n    table\n        // Author.books\u53cd\u8fc7\u6765\u5c31\u662fBook.authors\n        // highlight-next-line\n        .inverseJoin(Author::books)\n        .firstName eq "Alex"\n)\n')))))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u6ce8\u610f"),(0,r.kt)("p",{parentName:"div"},"\u867d\u7136\u9006\u8fde\u63a5\u4e0d\u96be\u7406\u89e3\uff0c\u4f46\u4ee3\u7801\u9605\u8bfb\u8bfb\u8d77\u76f8\u5bf9\u6666\u6da9\u3002\u6b63\u56e0\u5982\u6b64\uff0c\u4e0d\u5e0c\u671b\u5b83\u88ab\u6ee5\u7528\u3002"),(0,r.kt)("p",{parentName:"div"},"\u5b83\u53ea\u5e94\u8be5\u5728\u67d0\u4e9b\u7279\u6b8a\u60c5\u51b5\u4e0b\u88ab\u4f7f\u7528\uff0c\u4f8b\u5982"),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5b9e\u4f53\u63a5\u53e3\u7684\u5b9a\u4e49\u5c5e\u4e8e\u7b2c\u4e09\u65b9\uff0c\u4e0d\u662f\u81ea\u5df1\u53ef\u4ee5\u63a7\u5236\u7684\u4ee3\u7801\uff0c\u800c\u7b2c\u4e09\u65b9\u5b9e\u4f53\u53ea\u5b9a\u4e49\u4e86\u5355\u5411\u5173\u8054\uff0c\u800c\u6ca1\u6709\u5b9a\u4e49\u53cc\u5411\u5173\u8054\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5f00\u53d1\u67d0\u4e9b\u901a\u7528\u6027\u7684\u6846\u67b6\u65f6\uff0c\u65e0\u6cd5\u5047\u8bbe\u7528\u6237\u4e00\u5b9a\u4f1a\u5b9a\u4e49\u53cc\u5411\u5173\u8054\u3002"))),(0,r.kt)("p",{parentName:"div"},"\u7136\u800c\uff0c\u65e5\u5e38\u4e1a\u52a1\u7cfb\u7edf\u5f00\u53d1\u4e2d\uff0c\u5e94\u8003\u8651\u5728\u5b9e\u4f53\u63a5\u53e3\u4e2d\u5b9a\u4e49\u53cc\u5411\u5173\u8054\uff0c\u800c\u4e0d\u662f\u4f7f\u7528\u9006\u8fde\u63a5\u3002"))))}b.isMDXComponent=!0}}]);
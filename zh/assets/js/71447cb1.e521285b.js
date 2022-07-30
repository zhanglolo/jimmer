"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[583],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return p}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(t),p=a,f=m["".concat(c,".").concat(p)]||m[p]||d[p]||o;return t?r.createElement(f,i(i({ref:n},s),{},{components:t})):r.createElement(f,i({ref:n},s))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2360:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(7294),a=t(6010),o="tabItem_OmH5";function i(e){var n=e.children,t=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:t},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return p}});var r=t(3117),a=t(7294),o=t(2389),i=t(7392),l=t(7094),c=t(2466),u=t(6010),s="tabList_uSqn",d="tabItem_LplD";function m(e){var n,t,o,m=e.lazy,p=e.block,f=e.defaultValue,v=e.values,h=e.groupId,N=e.className,b=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=v?v:b.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),g=(0,i.l)(k,(function(e,n){return e.value===n.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===f?f:null!=(n=null!=f?f:null==(t=b.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(o=b[0])?void 0:o.props.value;if(null!==y&&!k.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,l.U)(),T=w.tabGroupChoices,j=w.setTabGroupChoices,x=(0,a.useState)(y),O=x[0],C=x[1],E=[],D=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var I=T[h];null!=I&&I!==O&&k.some((function(e){return e.value===I}))&&C(I)}var P=function(e){var n=e.currentTarget,t=E.indexOf(n),r=k[t].value;r!==O&&(D(n),C(r),null!=h&&j(h,r))},Z=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=E.indexOf(e.currentTarget)+1;t=E[r]||E[0];break;case"ArrowLeft":var a=E.indexOf(e.currentTarget)-1;t=E[a]||E[E.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:(0,u.Z)("tabs-container",s)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":p},N)},k.map((function(e){var n=e.value,t=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===n?0:-1,"aria-selected":O===n,key:n,ref:function(e){return E.push(e)},onKeyDown:Z,onFocus:P,onClick:P},o,{className:(0,u.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":O===n})}),null!=t?t:n)}))),m?(0,a.cloneElement)(b.filter((function(e){return e.props.value===O}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==O})}))))}function p(e){var n=(0,o.Z)();return a.createElement(m,(0,r.Z)({key:String(n)},e))}},4247:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return s},default:function(){return v},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return p}});var r=t(3117),a=t(102),o=(t(7294),t(3905)),i=t(9877),l=t(2360),c=["components"],u={sidebar_position:3,title:"jimmer-core\u5b50\u9879\u76ee"},s=void 0,d={unversionedId:"jimmer-core/index",id:"jimmer-core/index",title:"jimmer-core\u5b50\u9879\u76ee",description:"\u5bf9\u4e8e\u4e2d\u6587\u7248\uff0c\u4ece\u672c\u6587\u6863\u4e2d\u6311\u53d6\u6700\u91cd\u8981\u7684\u4e00\u90e8\u5206\uff0c\u5f62\u6210B\u7ad9\u89c6\u9891\u96c6",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/jimmer-core/index.mdx",sourceDirName:"jimmer-core",slug:"/jimmer-core/",permalink:"/jimmer/zh/docs/jimmer-core/",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/jimmer-core/index.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"jimmer-core\u5b50\u9879\u76ee"},sidebar:"tutorialSidebar",previous:{title:"Benchmark",permalink:"/jimmer/zh/docs/benchmark"},next:{title:"Problems and Solutions",permalink:"/jimmer/zh/docs/jimmer-core/existing-problems"}},m={},p=[],f={toc:p};function v(e){var n=e.components,t=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u5bf9\u4e8e\u4e2d\u6587\u7248\uff0c\u4ece\u672c\u6587\u6863\u4e2d\u6311\u53d6\u6700\u91cd\u8981\u7684\u4e00\u90e8\u5206\uff0c\u5f62\u6210",(0,o.kt)("a",{parentName:"p",href:"https://www.bilibili.com/video/BV1dA4y1R7pV/?vd_source=60313648ad86e28e629f98e944f7fa2a"},"B\u7ad9\u89c6\u9891\u96c6")))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u672c\u6587\u4ece\u9996\u9875\u7684\u7b2c\u4e00\u90e8\u5206\u590d\u5236\u800c\u6765\uff0c\u5185\u5bb9\u5b8c\u5168\u4e00\u6837\u3002"),(0,o.kt)("p",{parentName:"div"},"\u5982\u679c\u4f60\u5df2\u7ecf\u9605\u8bfb\u8fc7\u9996\u9875\u7684\u7b2c\u4e00\u90e8\u5206\uff0c\u53ef\u4ee5\u8df3\u8fc7\u672c\u6587\uff0c\u76f4\u63a5\u9605\u8bfb\u66f4\u6df1\u7684\u6587\u6863\u3002"))),(0,o.kt)("p",null,"\u5f3a\u5927\u7684\u53ea\u8bfb\u6570\u636e\u6a21\u578b"),(0,o.kt)("p",null,"\u6211\u4eec\u5c06\u6d41\u884c\u7684JavaScript\u9879\u76ee",(0,o.kt)("a",{parentName:"p",href:"https://github.com/immerjs/immer"},"immer"),"\u79fb\u690d\u5230Java/Kotlin\u3002 \u60a8\u53ef\u4ee5\u50cf\u64cd\u4f5c\u53ef\u53d8\u5bf9\u8c61\u4e00\u6837\u81ea\u7136\u800c\u76f4\u89c2\u5730\u64cd\u4f5c\u4e0d\u53ef\u53d8\u5bf9\u8c61\uff0c\u60a8\u53ef\u4ee5\u62e5\u6709\u4e0d\u53ef\u53d8\u5bf9\u8c61\u7684\u6240\u6709\u4f17\u6240\u5468\u77e5\u7684\u4f18\u70b9\uff0c\u4e5f\u4e0d\u5fc5\u627f\u62c5\u975e\u5fc5\u9700\u5f00\u9500\u3002 \u8fd9\u662f\u4e0d\u53ef\u53d8\u5bf9\u8c61\u6700\u5f3a\u5927\u7684\u89e3\u51b3\u65b9\u6848\u3002"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"\u5feb\u901f\u9884\u89c8"),(0,o.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// \u7b2c\u4e00\u6b65\uff0c\u4ece\u5934\u6784\u5efa\u6570\u636e\nTreeNode treeNode = TreeNodeDraft.$.produce(root -> {\n    root.setName("Root").addIntoChildNodes(food -> {\n        food\n            .setName("Food")\n            .addIntoChildNodes(drink -> {\n                drink\n                    .setName("Drink")\n                    .addIntoChildNodes(cococola -> {\n                        cococola.setName("Cococola");\n                    })\n                    .addIntoChildNodes(fanta -> {\n                        fanta.setName("Fanta");\n                    });\n                ;\n            });\n        ;\n    });\n});\n\n// \u7b2c\u4e8c\u6b65\uff0c\u5bf9\u73b0\u6709\u6570\u636e\u505a\u51fa\u67d0\u4e9b\u201c\u4fee\u6539\u201d\uff0c\u521b\u5efa\u65b0\u6570\u636e\nTreeNode newTreeNode = TreeNodeDraft.$.produce(\n        // highlight-next-line\n        treeNode, // \u73b0\u6709\u6570\u636e\n        root -> {\n            root\n                .childNodes(false).get(0) // Food\n                .childNodes(false).get(0) // Drink\n                .childNodes(false).get(0) // Cococola\n                .setName("Cococola plus");\n        }\n);\n\nSystem.out.println("treeNode:" + treeNode);\nSystem.out.println("newTreeNode:" + newTreeNode);\n'))),(0,o.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'// \u7b2c\u4e00\u6b65\uff0c\u4ece\u5934\u6784\u5efa\u6570\u636e\nval treeNode = new(TreeNode::class).by {\n    name = "Root"\n    childNodes().addBy {\n        name = "Food"\n        childNodes().addBy {\n            name = "Drinks"\n            childNodes().addBy {\n                name = "Cococola"\n            }\n            childNodes().addBy {\n                name = "Fanta"\n            }\n        }\n    }\n}\n\n// \u7b2c\u4e8c\u6b65\uff0c\u5bf9\u73b0\u6709\u6570\u636e\u505a\u51fa\u67d0\u4e9b\u201c\u4fee\u6539\u201d\uff0c\u521b\u5efa\u65b0\u6570\u636e\nval newTreeNode = new(TreeNode::class).by(\n    // highlight-next-line\n    treeNode // existing data\n) {\n    childNodes()[0] // Food\n        .childNodes()[0] // Drinks\n        .childNodes()[0] // Cococola\n        .name += " plus"\n}\n\nprintln("treeNode: $treeNode")\nprintln("newTreeNode: $newTreeNode")\n')))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"\u6253\u5370\u7ed3\u679c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'treeNode: {\n    "name":"Root",\n    "childNodes":[\n        {\n            "name":"Food",\n            "childNodes":[\n                {\n                    "name":"Drink",\n                    "childNodes":[\n                        // highlight-next-line\n                        {"name":"Cococola"},\n                        {"name":"Fanta"}\n                    ]\n                }\n            ]\n        }\n    ]\n}\nnewTreeNode: {\n    "name":"Root",\n    "childNodes":[\n        {\n            "name":"Food",\n            "childNodes":[\n                {\n                    "name":"Drink",\n                    "childNodes":[\n                        // highlight-next-line\n                        {"name":"Cococola plus"},\n                        {"name":"Fanta"}\n                    ]\n                }\n            ]\n        }\n    ]\n}\n')))),(0,o.kt)("p",null,"Jimmer\u53ef\u7528\u4e8e\u5728\u9996\u9009\u4e0d\u53ef\u53d8\u6570\u636e\u7ed3\u6784\u7684\u4efb\u4f55\u4e0a\u4e0b\u6587\u4e2d\u66ff\u6362java record\uff08\u6216 kotlin dataclass\uff09\u3002 \u6211\u4eec\u4f7f\u7528\u975e\u5e38\u6709\u6548\u7684\u673a\u5236\u6765\u68c0\u6d4b\u66f4\u6539\u5e76\u6d88\u9664\u4e0d\u5fc5\u8981\u7684\u590d\u5236\u5f00\u9500\u3002 \u901a\u5e38\uff0c\u5bf9\u8c61\u7684\u4efb\u4f55\u66f4\u6539\u90fd\u4f1a\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u5bf9\u8c61\u5f15\u7528\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u5728\u4efb\u4f55\u7279\u5b9a\u5f15\u7528\u7684\u610f\u4e49\u4e0a\uff0c\u8be5\u5bf9\u8c61\u90fd\u662f\u4e0d\u53ef\u53d8\u7684\u3002 \u672a\u66f4\u6539\u7684\u90e8\u5206\u5c06\u5728\u5185\u5b58\u4e2d\u7684\u6240\u6709\u6570\u636e\u7248\u672c\u4e4b\u95f4\u5171\u4eab\uff0c\u4ee5\u907f\u514d\u65e0\u8111\u7684\u590d\u5236\u5e76\u83b7\u5f97\u6700\u4f73\u6027\u80fd\u3002"),(0,o.kt)("p",null,"Jimmer\u53ef\u4ee5\u5e2e\u52a9\u4f60"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u68c0\u6d4b\u610f\u5916\u4fee\u6539\u5e76\u629b\u51fa\u9002\u5f53\u7684\u9519\u8bef\uff1b"),(0,o.kt)("li",{parentName:"ol"},"\u5bf9\u6df1\u5c42\u6b21\u7ed3\u6784\u7684\u4e0d\u53ef\u53d8\u5bf9\u8c61\u7684\u64cd\u4f5c\uff0c\u4e0d\u518d\u9700\u7e41\u7410\u6837\u677f\u4ee3\u7801\uff0c\u907f\u514d\u624b\u52a8\u590d\u5236\uff0c\u8282\u7701\u5197\u4f59\u526f\u672c\u6784\u5efa\u7684\u5f00\u9500\uff1b"),(0,o.kt)("li",{parentName:"ol"},"\u8ddf\u8e2a\u5bf9\u8349\u7a3f\u5bf9\u8c61\u7684\u66f4\u6539\u64cd\u4f5c\uff0c\u5728\u539f\u5bf9\u8c61\u5b8c\u597d\u65e0\u635f\u7684\u60c5\u51b5\u4e0b\uff0c\u81ea\u52a8\u521b\u5efa\u4efb\u4f55\u5fc5\u8981\u7684\u526f\u672c\u3002")),(0,o.kt)("p",null,"\u4f7f\u7528Jimmer\uff0c\u60a8\u65e0\u9700\u5b66\u4e60\u4e13\u95e8\u7684API\u6216\u6570\u636e\u7ed3\u6784\u5373\u53ef\u53d7\u76ca\u4e8e\u4e0d\u53d8\u6027\u3002"),(0,o.kt)("p",null,"\u4e3a\u4e86\u652f\u6301ORM\uff0cJimmer\u5f15\u5165\u4e86\u5bf9\u8c61\u7684\u52a8\u6001\u7279\u6027\u3002 \u5bf9\u8c61\u7684\u4efb\u4f55\u5c5e\u6027\u7686\u53ef\u7f3a\u5931\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u76f4\u63a5\u4f7f\u7528\u4ee3\u7801\u8bbf\u95ee\u65f6\uff0c\u7f3a\u5931\u5c5e\u6027\u4f1a\u5bfc\u81f4\u5f02\u5e38\uff1b"),(0,o.kt)("li",{parentName:"ul"},"Jackson \u5e8f\u5217\u5316\u8fc7\u7a0b\u4e2d\u4f1a\u81ea\u52a8\u5ffd\u7565\u7f3a\u5931\u5c5e\u6027\uff0c\u5e76\u4e14\u4e0d\u4f1a\u5bfc\u81f4\u5f02\u5e38\u3002")))}v.isMDXComponent=!0}}]);
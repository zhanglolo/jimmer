"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[8829],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=d(n),u=o,h=m["".concat(s,".").concat(u)]||m[u]||p[u]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2360:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(7294),o=n(6010),r="tabItem_OmH5";function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,i),hidden:n},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(3117),o=n(7294),r=n(2389),i=n(7392),l=n(7094),s=n(2466),d=n(6010),c="tabList_uSqn",p="tabItem_LplD";function m(e){var t,n,r,m=e.lazy,u=e.block,h=e.defaultValue,v=e.values,b=e.groupId,f=e.className,g=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=v?v:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),N=(0,i.l)(k,(function(e,t){return e.value===t.value}));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===h?h:null!=(t=null!=h?h:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=g[0])?void 0:r.props.value;if(null!==y&&!k.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,l.U)(),T=w.tabGroupChoices,j=w.setTabGroupChoices,x=(0,o.useState)(y),I=x[0],C=x[1],O=[],S=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var E=T[b];null!=E&&E!==I&&k.some((function(e){return e.value===E}))&&C(E)}var Z=function(e){var t=e.currentTarget,n=O.indexOf(t),a=k[n].value;a!==I&&(S(t),C(a),null!=b&&j(b,a))},z=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=O.indexOf(e.currentTarget)+1;n=O[a]||O[0];break;case"ArrowLeft":var o=O.indexOf(e.currentTarget)-1;n=O[o]||O[O.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,d.Z)("tabs-container",c)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,d.Z)("tabs",{"tabs--block":u},f)},k.map((function(e){var t=e.value,n=e.label,r=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:I===t?0:-1,"aria-selected":I===t,key:t,ref:function(e){return O.push(e)},onKeyDown:z,onFocus:Z,onClick:Z},r,{className:(0,d.Z)("tabs__item",p,null==r?void 0:r.className,{"tabs__item--active":I===t})}),null!=n?n:t)}))),m?(0,o.cloneElement)(g.filter((function(e){return e.props.value===I}))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==I})}))))}function u(e){var t=(0,r.Z)();return o.createElement(m,(0,a.Z)({key:String(t)},e))}},6634:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return u}});var a=n(3117),o=n(102),r=(n(7294),n(3905)),i=n(9877),l=n(2360),s=["components"],d={sidebar_position:1,title:"Problems and Solutions"},c=void 0,p={unversionedId:"jimmer-core/existing-problems",id:"jimmer-core/existing-problems",title:"Problems and Solutions",description:"This article discusses why jimmer defined a new way of developing immutable objects and let it be the cornerstone of the entire project. Although the reader is advised to read this article, it can be ignored if the focus is only on usage and not on design motives.",source:"@site/docs/jimmer-core/existing-problems.mdx",sourceDirName:"jimmer-core",slug:"/jimmer-core/existing-problems",permalink:"/jimmer/zh/docs/jimmer-core/existing-problems",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/jimmer-core/existing-problems.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Problems and Solutions"},sidebar:"tutorialSidebar",previous:{title:"jimmer-core\u5b50\u9879\u76ee",permalink:"/jimmer/zh/docs/jimmer-core/"},next:{title:"First experience",permalink:"/jimmer/zh/docs/jimmer-core/usage"}},m={},u=[{value:"The problems of java record",id:"the-problems-of-java-record",level:2},{value:"1. Long and strictly ordered constructor parameter list",id:"1-long-and-strictly-ordered-constructor-parameter-list",level:3},{value:"2. Copy construction is cumbersome",id:"2-copy-construction-is-cumbersome",level:3},{value:"3. Difficult to handle when the object tree is deep",id:"3-difficult-to-handle-when-the-object-tree-is-deep",level:3},{value:"4. Lack of necessary dynamism",id:"4-lack-of-necessary-dynamism",level:3},{value:"Solution",id:"solution",level:2}],h={toc:u};function v(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This article discusses why jimmer defined a new way of developing immutable objects and let it be the cornerstone of the entire project. Although the reader is advised to read this article, it can be ignored if the focus is only on usage and not on design motives."))),(0,r.kt)("h2",{id:"the-problems-of-java-record"},"The problems of java record"),(0,r.kt)("p",null,"Java has supported the Record type since 14, which is very convenient when used to support simple tuples, but there are still some problems, and it is not enough to act as entity types in a project."),(0,r.kt)("h3",{id:"1-long-and-strictly-ordered-constructor-parameter-list"},"1. Long and strictly ordered constructor parameter list"),(0,r.kt)("p",null,"Entity objects are usually of a certain complexity and have many fields (eg 50 fields), and implementing it using java records results in a constructor with a long parameter list. Unlike kotlin and C#, as of now, java supports neither default parameters nor named parameters, when a method has too many parameters, it still needs to give all parameters in strict order, which makes the task heavy and hard to read."),(0,r.kt)("h3",{id:"2-copy-construction-is-cumbersome"},"2. Copy construction is cumbersome"),(0,r.kt)("p",null,"In practice, developers don't always build entirely new immutable objects from scratch. Many times, we need to create a new mutable object based on an existing immutable object. Most of the fields of the new object have the same values as the old object, only a few have changed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'var oldData = ...\n\nvar newData = new MyData(\n\n    "NewValue_ForProp1",\n\n    oldData.prop2(), \n    oldData.prop3(),\n    ... ...\n    oldData.propN()\n);\n')),(0,r.kt)("p",null,"Comparing the old and new objects, only the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"prop1")," is different. From ",(0,r.kt)("inlineCode",{parentName:"p"},"prop2")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"propN"),", they are all values that we don't care about, but we still have to write code to copy them one by one."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"In kotlin language, data classes support ",(0,r.kt)("a",{parentName:"p",href:"https://kotlinlang.org/docs/data-classes.html#copying"},"copy function")," to solve this problem. However, kotlin's solution cannot be used in java language, because as of now, java supports neither default parameters nor named parameters."))),(0,r.kt)("p",null,"Java designers are also thinking about making Java support default parameters and named parameters, you can check their ","[design draft]","(",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openjdk/amber-docs/blob/master/eg-drafts/reconstruction-records-and"},"https://github.com/openjdk/amber-docs/blob/master/eg-drafts/reconstruction-records-and")," -classes.md) to learn more."),(0,r.kt)("p",null,"If one day this design draft is implemented, the java language has default parameters and named parameters, then the two problems discussed above will no longer exist."),(0,r.kt)("p",null,"However, both of these issues are minor issues. Next, let's discuss two more serious problems."),(0,r.kt)("h3",{id:"3-difficult-to-handle-when-the-object-tree-is-deep"},"3. Difficult to handle when the object tree is deep"),(0,r.kt)("p",null,"First define an immutable tree node"),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="TreeNode.java"',title:'"TreeNode.java"'},"record TreeNode(String name, List<TreeNode> childNodes) {}\n"))),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="TreeNode.java"',title:'"TreeNode.java"'},"data class TreeNode(val name: String, val childNodes: List<TreeNode>)\n")))),(0,r.kt)("p",null,"Prepare an old object"),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"var oldTreeNode = ...blabla...\n"))),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val oldTreeNode = ...blabla...\n")))),(0,r.kt)("p",null,"Let's implement three data-changing operations in order from simple to complex"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Change the property ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," of the root node"),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"java",lable:"Java",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'TreeNode newTreeNode = new TreeNode(\n    // highlight-next-line\n    "Hello", // Set name of root node\n    oldTreeNode.childNodes()\n);\n'))),(0,r.kt)(l.Z,{value:"kotlin",lable:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val newTreeNode = oldTreeNode.copy(\n    // highlight-next-line\n    name = "Hello" // Set name of root node\n);\n'))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Change the property ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," of a first-level child node"),(0,r.kt)("p",{parentName:"li"},"The breadcrumb conditions are as follows:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"the position of the first level child node: pos1")),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'TreeNode newTreeNode = new TreeNode(\n    oldTreeNode.name(),\n    IntStream\n        .range(0, oldTreeNode.childNodes().size())\n        .mapToObj(index1 -> {\n            TreeNode oldChild1 = oldTreeNode.childNodes().get(index1);\n            if (index1 != pos1) {\n                return oldChild1;\n            }\n            return new TreeNode(\n                // highlight-next-line\n                "Hello", // Set name of level-1 node\n                oldChild1.childNodes()\n            );\n        })\n        .toList()\n);\n'))),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val newTreeNode = oldTreeNode.copy(\n    childNodes = oldTreeNode\n        .childNodes\n        .mapIndexed { index1, child1 ->\n            if (index1 == pos1) {\n                child1.copy(\n                    // highlight-next-line\n                    name = "Hello" // Set name of level-1 node\n                )\n            } else {\n                child1\n            }\n        }\n)\n'))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Change the property ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," of the second-level child node"),(0,r.kt)("p",{parentName:"li"},"The breadcrumb conditions are as follows:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"the position of the first level child node: pos1"),(0,r.kt)("li",{parentName:"ul"},"the position of the second-level child node: pos2")),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'TreeNode newTreeNode = new TreeNode(\n    oldTreeNode.name(),\n    IntStream\n        .range(0, oldTreeNode.childNodes().size())\n        .mapToObj(index1 -> {\n            TreeNode oldChild1 = oldTreeNode.childNodes().get(index1);\n            if (index1 != pos1) {\n                return oldChild1;\n            }\n            return new TreeNode(\n                oldChild1.name(),\n                IntStream\n                    .range(0, oldChild1.childNodes().size())\n                    .mapToObj(index2 -> {\n                        TreeNode oldChild2 = oldChild1.childNodes().get(index2);\n                        if (index2 != pos2) {\n                            return oldChild2;\n                        } else {\n                            return new TreeNode(\n                                // highlight-next-line\n                                "Hello", // Set name of level-2 node\n                                oldChild2.childNodes()\n                            );\n                        }\n                    })\n                    .toList()\n            );\n        })\n        .toList()\n);\n'))),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val newTreeNode = oldTreeNode.copy(\n    childNodes = oldTreeNode\n        .childNodes\n        .mapIndexed { index1, child1 ->\n            if (index1 == pos1) {\n                child1.copy(\n                    childNodes = child1\n                        .childNodes\n                        .mapIndexed { index2, child2 -> \n                            if (index2 == pos2) {\n                                child2.copy(\n                                    // highlight-next-line\n                                    name = "Hello" // Set name of level-2 node\n                                )\n                            } else {\n                                child2\n                            }\n                        }\n                )\n            } else {\n                child1\n            }\n        }\n)\n')))),(0,r.kt)("p",{parentName:"li"},"So creating a new immutable object based on another immutable object will be a ",(0,r.kt)("strong",{parentName:"p"},"nightmare"),", as long as the object tree has a little depth."))),(0,r.kt)("h3",{id:"4-lack-of-necessary-dynamism"},"4. Lack of necessary dynamism"),(0,r.kt)("p",null,"Entity objects need to be dynamic, not all properties of the object need to be initialized, it allows some missing properties."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Note: The missing discussed here is not null, but unknown."))),(0,r.kt)("p",null,"Taking an ORM as an example, one entity type can navigate to other entity types through associated properties (whether one-to-one, many-to-one, one-to-many, or many-to-many). If all properties of  object must be initailized, then querying an entity object will cause all associated objects to be queried recursively and unconditionally, which is unacceptable."),(0,r.kt)("p",null,"If you've ever worked with JPA/Hibernate, you must have heard of the concept of lazy loading. Objects allow certain properties not to be initialized."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When accessing these unknown properties for the first time, if the object still maintains a database connection (common in monolithic applications), load data from the database.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Otherwise (common in distributed applications), an exception will be thrown (such as Hibernate's classic exception: org.hibernate.LazyInitializationException)."))),(0,r.kt)("p",null,"Of course, there are many technical solutions in the field of data access, not limited to JPA/Hibernate, so not all readers have used JPA/Hibernate. However, the number of people who have used JPA/Hibernate before should be the most, so I still use this example to illustrate."),(0,r.kt)("p",null,"In conclusion, entity objects need to be dynamic and not all properties need to be specified."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Unspecified properties cause exceptions when accessed directly by code")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Unspecified properties are automatically ignored in JSON serialization without exception."))),(0,r.kt)("h2",{id:"solution"},"Solution"),(0,r.kt)("p",null,"Is it possible to make immutable objects powerful enough to solve all of the above problems?"),(0,r.kt)("p",null,"certainly! In the JavaScript/TypeScript space, there is a well-known open source project ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/immerjs/immer"},"immer"),' that addresses the first three of the above problems. It is the inner of the "Breakthrough of the year" React open source award and "Most impactful contribution" JavaScript open source award in 2019.'),(0,r.kt)("p",null,"immer uses a mutable object proxy (based on a copy-on-write strategy) to let developers modify directly, and then automatically creates new immutable objects based on old data and the developer's modification behavior."),(0,r.kt)("p",null,"jimmer-core ported it to Java to solve the first three of the above problems; at the same time, it solved the fourth problem based on this. In this way, immutable objects solve all of the above problems and are powerful enough to be the cornerstone of an entire project."),(0,r.kt)("p",null,"Subsequent articles will discuss in detail how jimmer-core solves these problems."))}v.isMDXComponent=!0}}]);
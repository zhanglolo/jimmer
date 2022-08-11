"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[7309],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(t),m=r,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return t?a.createElement(h,o(o({ref:n},c),{},{components:t})):a.createElement(h,o({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2360:function(e,n,t){t.d(n,{Z:function(){return o}});var a=t(7294),r=t(6010),i="tabItem_OmH5";function o(e){var n=e.children,t=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:t},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return m}});var a=t(3117),r=t(7294),i=t(2389),o=t(7392),l=t(7094),s=t(2466),u=t(6010),c="tabList_uSqn",d="tabItem_LplD";function p(e){var n,t,i,p=e.lazy,m=e.block,h=e.defaultValue,g=e.values,f=e.groupId,b=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=g?g:v.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),k=(0,o.l)(y,(function(e,n){return e.value===n.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===h?h:null!=(n=null!=h?h:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(i=v[0])?void 0:i.props.value;if(null!==N&&!y.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,l.U)(),C=w.tabGroupChoices,x=w.setTabGroupChoices,j=(0,r.useState)(N),T=j[0],O=j[1],R=[],E=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var P=C[f];null!=P&&P!==T&&y.some((function(e){return e.value===P}))&&O(P)}var I=function(e){var n=e.currentTarget,t=R.indexOf(n),a=y[t].value;a!==T&&(E(n),O(a),null!=f&&x(f,a))},Q=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=R.indexOf(e.currentTarget)+1;t=R[a]||R[0];break;case"ArrowLeft":var r=R.indexOf(e.currentTarget)-1;t=R[r]||R[R.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:(0,u.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":m},b)},y.map((function(e){var n=e.value,t=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===n?0:-1,"aria-selected":T===n,key:n,ref:function(e){return R.push(e)},onKeyDown:Q,onFocus:I,onClick:I},i,{className:(0,u.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":T===n})}),null!=t?t:n)}))),p?(0,r.cloneElement)(v.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==T})}))))}function m(e){var n=(0,i.Z)();return r.createElement(p,(0,a.Z)({key:String(n)},e))}},9220:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return m}});var a=t(3117),r=t(102),i=(t(7294),t(3905)),o=t(9877),l=t(2360),s=["components"],u={sidebar_position:5,title:"Agreement with developers"},c=void 0,d={unversionedId:"agreement",id:"agreement",title:"Agreement with developers",description:"Chain programming style is a common design in Java library API design.",source:"@site/docs/agreement.mdx",sourceDirName:".",slug:"/agreement",permalink:"/jimmer/docs/agreement",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/agreement.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Agreement with developers"},sidebar:"tutorialSidebar",previous:{title:"Support for Spring GraphQL",permalink:"/jimmer/docs/jimmer-sql/spring-graphql"}},p={},m=[],h={toc:m};function g(e){var n=e.components,t=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Chain programming style is a common design in Java library API design."),(0,i.kt)("p",null,"There are two motivations for the chained API design:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a new object without modifying the current object. Commonly seen with immutable objects such as ",(0,i.kt)("inlineCode",{parentName:"p"},"String")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},"String value = \" Hello world  \"\n    .trim() // \u03b1\n    .toUpperCase() // \u03b2\n    .replace(' ', '-'); // \u03b3\n")),(0,i.kt)("p",{parentName:"li"},"In the example, the three method calls at ",(0,i.kt)("inlineCode",{parentName:"p"},"\u03b1"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"\u03b2")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"\u03b3")," do not modify the current string, but create a new string."),(0,i.kt)("p",{parentName:"li"}," For this usage, the chained API itself is the design goal. The user must pay attention to the return value of each call, discarding the return value makes the method call meaningless.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Modifies the current object and returns the current object itself. Common with mutable objects such as ",(0,i.kt)("inlineCode",{parentName:"p"},"StringBuilder")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},'StringBuilder value = new StringBuilder()\n    .append("Hello ") // \u03b1\n    .append(\' \') // \u03b2\n    .append(System.getProperty("user")); // \u03b3\n')),(0,i.kt)("p",{parentName:"li"},"In the example, the three method calls at ",(0,i.kt)("inlineCode",{parentName:"p"},"\u03b1"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"\u03b2")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"\u03b3")," all return the current object itself, never create a new object, and the code operates on the same ",(0,i.kt)("inlineCode",{parentName:"p"},"StringBuilder")," object from beginning to end."),(0,i.kt)("p",{parentName:"li"}," For this usage, the chained API is not a design goal in itself, it's just to simplify the code. For its return value, it doesn't matter whether the user chooses to use or discard it."),(0,i.kt)("p",{parentName:"li"}," :::note\nThis design motivation is to address a small flaw in Java's expressiveness, a trick that is not needed in more modern languages.\n:::"))),(0,i.kt)("p",null,"The chain API with the same style corresponds to two completely different design motives, and correspond to completely different understanding and usage."),(0,i.kt)("p",null,"Except for the popular base types such as ",(0,i.kt)("inlineCode",{parentName:"p"},"String")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"StringBuilder"),", for most frameworks, what kind of motivation a chained API corresponds to often becomes part of the user's learning cost. Even, sometimes it becomes a source of confusion. For example ",(0,i.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javaee/7/api/javax/persistence/criteria/Predicate.html#not--"},"JPA Criteria's Predicate.not method"),", from the documentation, its design motivation should be ",(0,i.kt)("inlineCode",{parentName:"p"},"2"),", but cannot prevent some JPA venders implement it as ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),"."),(0,i.kt)("p",null,"Jimmer does not want to make identifying the design motivation of a chained API part of the learning cost for users, and defines two annotations."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"@org.babyfish.jimmer.lang.NewChain")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"@org.babyfish.jimmer.lang.OldChain"))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The RetentionPolicy of these two annotations is SOURCE, which does not affect the bytecode and reflection behavior, only as part of the function signature."),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"@NewChain corresponds to motivation 1, indicating that the current chain API always creates new objects without modifying the current object."),(0,i.kt)("li",{parentName:"ul"},"@OldChian corresponds to motivation 2, saying that the current chain API always modifies and returns the current object, without creating a new one.")))),(0,i.kt)("p",null,"Take the two interfaces of the jimmer-sql subproject as an example"),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="MutableQuery.java"',title:'"MutableQuery.java"'},"package org.babyfish.jimmer.sql.ast.query;\n\nimport org.babyfish.jimmer.lang.OldChain;\n\npublic interface MutableRootQuery<T extends Table<?>> \n    extends MutableQuery, RootSelectable<T> {\n\n    // highlight-next-line\n    @OldChain\n    MutableRootQuery<T> where(\n        Predicate... predicates\n    );\n\n    // highlight-next-line\n    @OldChain\n    @Override\n    default MutableRootQuery<T> orderBy(\n        Expression<?> expression\n    );\n\n    // highlight-next-line\n    @OldChain\n    default MutableRootQuery<T> orderBy(\n        Expression<?> expression, \n        OrderMode orderMode\n    );\n\n    // highlight-next-line\n    @OldChain\n    MutableRootQuery<T> orderBy(\n        Expression<?> expression, \n        OrderMode orderMode, \n        NullOrderMode nullOrderMode\n    );\n\n    // highlight-next-line\n    @OldChain\n    MutableRootQuery<T> groupBy(\n        Expression<?>... expressions\n    );\n\n    // highlight-next-line\n    @OldChain\n    MutableRootQuery<T> having(\n        Predicate... predicates\n    );\n}\n"))),(0,i.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("p",null,"Kotlin doesn't need to use chained API design tricks, so kotlin API won't use ",(0,i.kt)("inlineCode",{parentName:"p"},"@OldChain")))),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="ConfigurableRootQuery.java"',title:'"ConfigurableRootQuery.java"'},"package org.babyfish.jimmer.sql.ast.query;\n\nimport org.babyfish.jimmer.lang.NewChain;\nimport java.util.function.BiFunction;\n\npublic interface ConfigurableRootQuery<T extends Table<?>, R> \n    extends RootQuery<R> {\n\n    // highlight-next-line\n    @NewChain\n    <X> ConfigurableRootQuery<T, X> reselect(\n            BiFunction<\n                MutableRootQuery<T>, \n                T, \n                ConfigurableRootQuery<T, X>\n            > block\n    );\n\n    // highlight-next-line\n    @NewChain\n    ConfigurableRootQuery<T, R> distinct();\n\n    // highlight-next-line\n    @NewChain\n    ConfigurableRootQuery<T, R> limit(int limit, int offset);\n\n    // highlight-next-line\n    @NewChain\n    ConfigurableRootQuery<T, R> withoutSortingAndPaging();\n\n    // highlight-next-line\n    @NewChain\n    ConfigurableRootQuery<T, R> forUpdate();\n}\n"))),(0,i.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"package org.babyfish.jimmer.sql.kt.ast.query\n\nimport org.babyfish.jimmer.lang.NewChain\n\ninterface KConfigurableRootQuery<E: Any, R> : KRootQuery<R> {\n\n    // highlight-next-line\n    @NewChain\n    fun <X> reselect(\n        block: KMutableRootQuery<E>.() -> KConfigurableRootQuery<E, X>\n    ): KConfigurableRootQuery<E, X>\n\n    // highlight-next-line\n    @NewChain\n    fun distinct(): KConfigurableRootQuery<E, R>\n\n    // highlight-next-line\n    @NewChain\n    fun limit(limit: Int, offset: Int): KConfigurableRootQuery<E, R>\n\n    // highlight-next-line\n    @NewChain\n    fun withoutSortingAndPaging(): KConfigurableRootQuery<E, R>\n\n    // highlight-next-line\n    @NewChain\n    fun forUpdate(): KConfigurableRootQuery<E, R>\n}\n")))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Jimmer's chained API will frequently use these two annotations. After understanding this convention, there is no learning cost in this regard."))))}g.isMDXComponent=!0}}]);
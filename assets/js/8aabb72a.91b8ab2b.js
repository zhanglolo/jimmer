"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[9082],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=o,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||r;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2360:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(7294),o=n(6010),r="tabItem_OmH5";function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,i),hidden:n},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(3117),o=n(7294),r=n(2389),i=n(7392),l=n(7094),s=n(2466),c=n(6010),u="tabList_uSqn",m="tabItem_LplD";function p(e){var t,n,r,p=e.lazy,d=e.block,f=e.defaultValue,k=e.values,h=e.groupId,b=e.className,g=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=k?k:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),N=(0,i.l)(v,(function(e,t){return e.value===t.value}));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===f?f:null!=(t=null!=f?f:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=g[0])?void 0:r.props.value;if(null!==y&&!v.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var O=(0,l.U)(),w=O.tabGroupChoices,T=O.setTabGroupChoices,C=(0,o.useState)(y),j=C[0],A=C[1],B=[],D=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var E=w[h];null!=E&&E!==j&&v.some((function(e){return e.value===E}))&&A(E)}var x=function(e){var t=e.currentTarget,n=B.indexOf(t),a=v[n].value;a!==j&&(D(t),A(a),null!=h&&T(h,a))},S=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=B.indexOf(e.currentTarget)+1;n=B[a]||B[0];break;case"ArrowLeft":var o=B.indexOf(e.currentTarget)-1;n=B[o]||B[B.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,c.Z)("tabs-container",u)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":d},b)},v.map((function(e){var t=e.value,n=e.label,r=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,key:t,ref:function(e){return B.push(e)},onKeyDown:S,onFocus:x,onClick:x},r,{className:(0,c.Z)("tabs__item",m,null==r?void 0:r.className,{"tabs__item--active":j===t})}),null!=n?n:t)}))),p?(0,o.cloneElement)(g.filter((function(e){return e.props.value===j}))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}function d(e){var t=(0,r.Z)();return o.createElement(p,(0,a.Z)({key:String(t)},e))}},8054:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return c},metadata:function(){return m},toc:function(){return d}});var a=n(3117),o=n(102),r=(n(7294),n(3905)),i=n(9877),l=n(2360),s=["components"],c={sidebar_position:4,title:"Delete Command"},u=void 0,m={unversionedId:"jimmer-sql/mutation/delete-command",id:"jimmer-sql/mutation/delete-command",title:"Delete Command",description:"Basic usage",source:"@site/docs/jimmer-sql/mutation/delete-command.mdx",sourceDirName:"jimmer-sql/mutation",slug:"/jimmer-sql/mutation/delete-command",permalink:"/jimmer/docs/jimmer-sql/mutation/delete-command",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/jimmer-sql/mutation/delete-command.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Delete Command"},sidebar:"tutorialSidebar",previous:{title:"Save command",permalink:"/jimmer/docs/jimmer-sql/mutation/save-command"},next:{title:"Mutate middle table",permalink:"/jimmer/docs/jimmer-sql/mutation/association"}},p={},d=[{value:"Basic usage",id:"basic-usage",level:2},{value:"Delete parent object",id:"delete-parent-object",level:2}],f={toc:d};function k(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"basic-usage"},"Basic usage"),(0,r.kt)("p",null,"The delete command is a relatively simple concept."),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'DeleteResult result = sqlClient\n    .getEntities()\n    .batchDelete(Book.class, Arrays.asList(1L, 2L, 3L, 4L));\n\nSystem.out.println(\n    \n    "Affected row count: " + \n    result.getTotalAffectedRowCount() +\n\n    "\\nAffected row count of table \'BOOK\': " +\n    result.getAffectedRowCount(AffectedTable.of(Book.class)) +\n    \n    "\\nAffected row count of middle table \'BOOK_AUTHOR_MAPPING\': " +\n    result.getAffectedRowCount(\n        AffectedTable.of(BookTableEx.class, BookTableEx::authors)\n    )\n);\n'))),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val result = sqlClient\n    .entities\n    .batchDelete(Book::class, listOf(1L, 2L, 3L, 4L))\nprintln(\n    """Affected row count: \n        |${result.totalAffectedRowCount}\n        |Affected row count of table \'BOOK\': \n        |${result.affectedRowCount(Book::class)}\n        |Affected row count of middle table \'BOOK_AUTHOR_MAPPING\': \n        |${result.affectedRowCount(Book::authors)}\n    """.trimMargin()\n)\n')))),(0,r.kt)("p",null,"The final generated SQL is as follows"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"delete from BOOK_AUTHOR_MAPPING \nwhere BOOK_ID in(?, ?, ?, ?)\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"delete from BOOK \nwhere ID in(?, ?, ?, ?)\n")))),(0,r.kt)("h2",{id:"delete-parent-object"},"Delete parent object"),(0,r.kt)("p",null,"As can be seen from the above discussion, the delete command may cause the deletion of the data in the many-to-many association based on middle table, which is a relatively simple case."),(0,r.kt)("p",null,"For one-to-one or one-to-many associations based directly on foreign keys, the situation is a bit more complicated."),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'DeleteResult result = sqlClient\n    .getEntities()\n    .delete(BookStore.class, 1L);\n\nSystem.out.println(\n\n    "Affected row count: " +\n            result.getTotalAffectedRowCount() +\n\n            "\\nAffected row count of table \'BOOK_STORE\': " +\n            result.getAffectedRowCount(AffectedTable.of(BookStore.class)) +\n\n            "\\nAffected row count of table \'BOOK\': " +\n            result.getAffectedRowCount(AffectedTable.of(Book.class)) +\n\n            "\\nAffected row count of middle table \'BOOK_AUTHOR_MAPPING\': " +\n            result.getAffectedRowCount(\n                    AffectedTable.of(BookTableEx.class, BookTableEx::authors)\n            )\n);\n'))),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val result = sqlClient\n    .entities\n    .delete(BookStore::class, 1L)\nprintln(\n    \"\"\"Affected row count: \n        |${result.totalAffectedRowCount}\n        |Affected row count of table 'BOOK_STORE': \n        |${result.affectedRowCount(BookStore::class)}\n        |Affected row count of table 'BOOK': \n        |${result.affectedRowCount(Book::class)}\n        |Affected row count of middle table 'BOOK_AUTHOR_MAPPING': \n        |${result.affectedRowCount(Book::authors)}\n    \"\"\".trimMargin()\n)\n")))),(0,r.kt)("p",null,"This code deletes a ",(0,r.kt)("inlineCode",{parentName:"p"},"BookStore")," object."),(0,r.kt)("p",null,"Since the ",(0,r.kt)("inlineCode",{parentName:"p"},"BookStore")," object has a one-to-many association ",(0,r.kt)("inlineCode",{parentName:"p"},"BookStore.books"),", if the deleted object already has some associated objects in the database, jimmer-sql will discard these objects."),(0,r.kt)("p",null,"The one-to-many association ",(0,r.kt)("inlineCode",{parentName:"p"},"BookStore.books")," is not based on the middle table, but based on the foreign key. How will jimmer-sql discard these ",(0,r.kt)("inlineCode",{parentName:"p"},"Book")," objects?"),(0,r.kt)("p",null,"Unlike JPA, jimmer-sql does not allow direct use of ",(0,r.kt)("inlineCode",{parentName:"p"},"@OneToOne")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"@OneToMany")," for association mapping, ",(0,r.kt)("inlineCode",{parentName:"p"},"@OneToOne")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"@OneToMany")," must use the ",(0,r.kt)("inlineCode",{parentName:"p"},"mappedBy")," attribute. See ",(0,r.kt)("a",{parentName:"p",href:"../mapping#onetomany"},"@OneToMany")," for more information.\nUnlike JPA, jimmer-sql does not allow direct use of ",(0,r.kt)("inlineCode",{parentName:"p"},"@OneToOne")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"@OneToMany")," for association mapping, ",(0,r.kt)("inlineCode",{parentName:"p"},"@OneToOne")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"@OneToMany")," must use the ",(0,r.kt)("inlineCode",{parentName:"p"},"mappedBy")," attribute. See ",(0,r.kt)("a",{parentName:"p",href:"../mapping#onetomany"},"@OneToMany")," for more information."),(0,r.kt)("p",null,"This means, through the one-to-many association ",(0,r.kt)("inlineCode",{parentName:"p"},"BookStore.books"),", jimmer-sql can definitely find the corresponding many-to-one association ",(0,r.kt)("inlineCode",{parentName:"p"},"Book.store"),"."),(0,r.kt)("p",null,"Next, jimmer-sql will look at the annotation ",(0,r.kt)("a",{parentName:"p",href:"../mapping#dissociate"},"@OnDissociate")," on the many-to-one association property ",(0,r.kt)("inlineCode",{parentName:"p"},"Book.store"),"."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If the foreign key of ",(0,r.kt)("inlineCode",{parentName:"p"},"Book.store")," is configured as ",(0,r.kt)("inlineCode",{parentName:"p"},"SET_NULL")," by the annotated ",(0,r.kt)("a",{parentName:"p",href:"../mapping#dissociate"},"@OnDissociate"),", then execute the following SQL"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"update BOOK set STORE_ID = null where STORE_ID in(?)\n")),(0,r.kt)("p",{parentName:"li"},"The parameter is the id of the deleted object. Thus, the foreign keys of these discarded objects are set to null.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Otherwise, first, execute"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select ID from BOOK where STORE_ID in(?)\n")),(0,r.kt)("p",{parentName:"li"},"The parameter is the id of the deleted object. In this way, the ids of these discarded objects are obtained."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"If the query returns no data, ignore the next steps.")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If the foreign key of ",(0,r.kt)("inlineCode",{parentName:"p"},"Book.store")," is configured as ",(0,r.kt)("inlineCode",{parentName:"p"},"DELETE")," by the annotated ",(0,r.kt)("a",{parentName:"p",href:"../mapping#dissociate"},"@OnDissociate"),", Use the new delete command to delete these discarded objects, which is actually the automatic recursive execution capability of the delete command.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Otherwise, throw an exception."))))),(0,r.kt)("p",null,"All of the situations discussed above require the developer to use the annotation ",(0,r.kt)("a",{parentName:"p",href:"../mapping#dissociate"},"@OnDissociate")," on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Book.store")," property."),(0,r.kt)("p",null,"However, you can also dynamically specify the ",(0,r.kt)("inlineCode",{parentName:"p"},"dissociateAction")," configuration for the delete command insteading of using the ",(0,r.kt)("a",{parentName:"p",href:"../mapping#dissociate"},"@OnDissociate")," annotation."),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"DeleteResult result = sqlClient\n    .getEntities()\n    .deleteCommand(BookStore.class, 1L)\n    .configure(it ->\n            it\n                // highlight-next-line\n                .setDissociateAction(\n                    BookTable.class,\n                    BookTable::store,\n                    DissociateAction.SET_NULL\n                )\n    )\n    .execute();\n"))),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val result = sqlClient\n    .entities\n    .delete(BookStore::class, 1L) {\n        // highlight-next-line\n        setDissociateAction(\n            Book::store, \n            DissociateAction.SET_NULL\n        )\n    }\n")))),(0,r.kt)("p",null,"Here, calling ",(0,r.kt)("inlineCode",{parentName:"p"},"setDissociateAction")," of delete command has the same effect as statically using the annotation ",(0,r.kt)("a",{parentName:"p",href:"../mapping#dissociate"},"@OnDissociate"),"."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If the last parameter of the ",(0,r.kt)("inlineCode",{parentName:"p"},"setDissociateAction")," method is ",(0,r.kt)("inlineCode",{parentName:"p"},"DissociateAction.SET_NULL"),", the association property must be nullable, otherwise an exception will be thrown.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If the delete rule is not only dynamically configured for the save command, but also statically configured in the entity interface through the annotation ",(0,r.kt)("a",{parentName:"p",href:"../mapping#dissociate"},"@OnDissociate"),", the dynamic configuration takes precedence."))))))}k.isMDXComponent=!0}}]);
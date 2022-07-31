"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[525],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?o.createElement(h,r(r({ref:t},u),{},{components:n})):o.createElement(h,r({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2360:function(e,t,n){n.d(t,{Z:function(){return r}});var o=n(7294),a=n(6010),i="tabItem_OmH5";function r(e){var t=e.children,n=e.hidden,r=e.className;return o.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,r),hidden:n},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return m}});var o=n(3117),a=n(7294),i=n(2389),r=n(7392),l=n(7094),s=n(2466),p=n(6010),u="tabList_uSqn",c="tabItem_LplD";function d(e){var t,n,i,d=e.lazy,m=e.block,h=e.defaultValue,f=e.values,k=e.groupId,v=e.className,g=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=f?f:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,r.l)(b,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===h?h:null!=(t=null!=h?h:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=g[0])?void 0:i.props.value;if(null!==N&&!b.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var C=(0,l.U)(),q=C.tabGroupChoices,j=C.setTabGroupChoices,B=(0,a.useState)(N),L=B[0],w=B[1],I=[],S=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var x=q[k];null!=x&&x!==L&&b.some((function(e){return e.value===x}))&&w(x)}var T=function(e){var t=e.currentTarget,n=I.indexOf(t),o=b[n].value;o!==L&&(S(t),w(o),null!=k&&j(k,o))},O=function(e){var t,n=null;switch(e.key){case"ArrowRight":var o=I.indexOf(e.currentTarget)+1;n=I[o]||I[0];break;case"ArrowLeft":var a=I.indexOf(e.currentTarget)-1;n=I[a]||I[I.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,p.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":m},v)},b.map((function(e){var t=e.value,n=e.label,i=e.attributes;return a.createElement("li",(0,o.Z)({role:"tab",tabIndex:L===t?0:-1,"aria-selected":L===t,key:t,ref:function(e){return I.push(e)},onKeyDown:O,onFocus:T,onClick:T},i,{className:(0,p.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":L===t})}),null!=n?n:t)}))),d?(0,a.cloneElement)(g.filter((function(e){return e.props.value===L}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==L})}))))}function m(e){var t=(0,i.Z)();return a.createElement(d,(0,o.Z)({key:String(t)},e))}},2873:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var o=n(3117),a=n(102),i=(n(7294),n(3905)),r=(n(9877),n(2360),["components"]),l={sidebar_position:9,title:"Support for Spring GraphQL"},s=void 0,p={unversionedId:"jimmer-sql/spring-graphql",id:"jimmer-sql/spring-graphql",title:"Support for Spring GraphQL",description:"Spring Boot 2.7.0 brings Spring GraphQL, and jimmer-sql provides a specialized API to speed up the development of Spring GraphQL.",source:"@site/docs/jimmer-sql/spring-graphql.mdx",sourceDirName:"jimmer-sql",slug:"/jimmer-sql/spring-graphql",permalink:"/jimmer/zh/docs/jimmer-sql/spring-graphql",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/jimmer-sql/spring-graphql.mdx",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,title:"Support for Spring GraphQL"},sidebar:"tutorialSidebar",previous:{title:"\u4fee\u6539\u4e2d\u95f4\u8868",permalink:"/jimmer/zh/docs/jimmer-sql/mutation/association"},next:{title:"Agreement with developers",permalink:"/jimmer/zh/docs/agreement"}},u={},c=[{value:"Query",id:"query",level:2},{value:"JSqlClient.getReferenceLoader",id:"jsqlclientgetreferenceloader",level:3},{value:"JSqlClient.getListLoader",id:"jsqlclientgetlistloader",level:3},{value:"Mutation",id:"mutation",level:2},{value:"Existence value of GraphQL Input type",id:"existence-value-of-graphql-input-type",level:3},{value:"Define input type",id:"define-input-type",level:3},{value:"Implement mutation business",id:"implement-mutation-business",level:3}],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Spring Boot 2.7.0 brings Spring GraphQL, and jimmer-sql provides a specialized API to speed up the development of Spring GraphQL."),(0,i.kt)("h2",{id:"query"},"Query"),(0,i.kt)("p",null,"For fields of type ",(0,i.kt)("inlineCode",{parentName:"p"},"Query"),", i.e. root queries, there is no difference between a GraphQL implementation and a REST implementation, and no special support is required."),(0,i.kt)("p",null,"The key point is the query for associations between objects. It is a simple concept in itself, but for performance, ",(0,i.kt)("inlineCode",{parentName:"p"},"DataLoader")," is usually used in actual projects, and ",(0,i.kt)("inlineCode",{parentName:"p"},"DataLoader")," has caused great damage to the development experience."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Association queries and ",(0,i.kt)("inlineCode",{parentName:"p"},"DataLoader")," increase the difficulty of developing GraphQL services, but because of this, GraphQL services are very powerful from the client's point of view."))),(0,i.kt)("p",null,"In order to alleviate the disruption of ",(0,i.kt)("inlineCode",{parentName:"p"},"DataLoader")," to the development experience, Spring GraphQL introduces a new annotation ",(0,i.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-graphql/docs/current/reference/html/#controllers-batch-mapping"},"@BatchMapping"),"."),(0,i.kt)("p",null,"jimmer-sql provides special support for this, providing dedicated API that allows developers to implement Spring GraphQL's ",(0,i.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-graphql/docs/current/reference/html/#controllers-batch-mapping"},"@BatchMapping")," method in one sentence."),(0,i.kt)("p",null,"API related to this"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"JSqlClient.getReferenceLoader"),(0,i.kt)("li",{parentName:"ul"},"JSqlClient.getListLoader")),(0,i.kt)("h3",{id:"jsqlclientgetreferenceloader"},"JSqlClient.getReferenceLoader"),(0,i.kt)("p",null,"This API is used to quickly implement one-to-one or many-to-one associations"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="BookController.java"',title:'"BookController.java"'},"@Controller\npublic class BookController {\n\n    private final JSqlClient sqlClient;\n\n    public BookController(JSqlClient sqlClient) {\n        this.sqlClient = sqlClient;\n    }\n\n    // Many-to-one associaton: Book.store\n    // highlight-next-line\n    @BatchMapping\n    public Map<Book, BookStore> store(\n        Collection<Book> books\n    ) {\n        return sqlClient\n            // highlight-next-line\n            .getReferenceLoader(\n                    BookTable.class,\n                    BookTable::store\n            )\n            .batchLoad(books);\n    }\n}\n")),(0,i.kt)("h3",{id:"jsqlclientgetlistloader"},"JSqlClient.getListLoader"),(0,i.kt)("p",null,"This API is used to quickly implement one-to-many or many-to-many associations"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="BookStoreController.java"',title:'"BookStoreController.java"'},"@Controller\npublic class BookStoreController {\n\n    private final JSqlClient sqlClient;\n\n    public BookStoreController(JSqlClient sqlClient) {\n        this.sqlClient = sqlClient;\n    }\n\n    // One-to-many associaton: BookStore.books\n    // highlight-next-line\n    @BatchMapping\n    public Map<BookStore, List<Book>> books(\n            List<BookStore> bookStores\n    ) {\n        return sqlClient\n            // highlight-next-line\n            .getListLoader(\n                BookStoreTableEx.class,\n                BookStoreTableEx::books\n            )\n            .batchLoad(bookStores);\n    }\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="BookController.java"',title:'"BookController.java"'},"@Controller\npublic class BookController {\n\n    private final JSqlClient sqlClient;\n\n    public BookController(JSqlClient sqlClient) {\n        this.sqlClient = sqlClient;\n    }\n\n    // Many-to-many associaton: Book.authors\n    // highlight-next-line\n    @BatchMapping\n    public Map<Book, List<Author>> authors(List<Book> books) {\n        return sqlClient\n            // highlight-next-line\n            .getListLoader(\n                BookTableEx.class,\n                BookTableEx::authors\n            )\n            .batchLoad(books);\n    }\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="AuthorController.java"',title:'"AuthorController.java"'},"@Controller\npublic class AuthorController {\n\n    private final JSqlClient sqlClient;\n\n    public AuthorController(JSqlClient sqlClient) {\n        this.sqlClient = sqlClient;\n    }\n\n    // Many-to-many associaton: Author.books\n    // highlight-next-line\n    @BatchMapping\n    public Map<Author, List<Book>> books(\n            List<Author> authors\n    ) {\n        return sqlClient\n                // highlight-next-line\n                .getListLoader(\n                        AuthorTableEx.class,\n                        AuthorTableEx::books\n                )\n                .batchLoad(authors);\n    }\n}\n")),(0,i.kt)("h2",{id:"mutation"},"Mutation"),(0,i.kt)("h3",{id:"existence-value-of-graphql-input-type"},"Existence value of GraphQL Input type"),(0,i.kt)("p",null,"Before introducing the mutation, we need to discuss why the GraphQL protocol introduced the Input type."),(0,i.kt)("p",null,"From an output perspective, a GraphQL field returns an ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")," type. However, from an input perspective, the parameters of GraphQL fields do not accept ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")," types, only scalar types, ",(0,i.kt)("inlineCode",{parentName:"p"},"Input")," types, and their collection types are acceptable."),(0,i.kt)("p",null,"The different between ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Input"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")," type is ",(0,i.kt)("b",null,"dynamic"),", and the client can freely define the shape of the object."),(0,i.kt)("p",{parentName:"li"},"   The dynamic nature of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")," type realizes the core value of GraphQL, clients can specify which fields are required and which are not, giving them flexibility in controlling the format of the object tree to query.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Input")," type is ",(0,i.kt)("b",null,"static"),", and the client must provide parameters that strictly meet the server's requirements."),(0,i.kt)("p",{parentName:"li"},"   Different from query, the mutation business often has strict restrictions on the input data format. If the client arbitrarily passes the data format that does not meet the expectations of the server, it may lead to abnormal business."),(0,i.kt)("p",{parentName:"li"},"   Therefore, the GraphQL protocol introduces the ",(0,i.kt)("inlineCode",{parentName:"p"},"Input")," type, which is static, and the client must pass a data format that strictly conforms to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Input")," type definition before calling the mutation business."))),(0,i.kt)("p",null,"This difference is the fundamental reason for the existence of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Input")," type."),(0,i.kt)("h3",{id:"define-input-type"},"Define input type"),(0,i.kt)("p",null,"First, we need to define the input type in the Spring GraphQL convention file ",(0,i.kt)("inlineCode",{parentName:"p"},"src/main/resources/graphql/schema.graphqls")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input BookInput {\n    id: Long\n    name: String!\n    edition: Int\n    price: BigDecimal!\n    storeId: Long\n    authorIds: [Long!]!\n}\n")),(0,i.kt)("p",null,"Then, in the Java code, define the corresponding class ",(0,i.kt)("inlineCode",{parentName:"p"},"BookInput")," "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="BookInput.java"',title:'"BookInput.java"'},"public class BookInput {\n\n    @Nullable\n    private final Long id;\n\n    private final String name;\n\n    private final int edition;\n\n    private final BigDecimal price;\n\n    @Nullable\n    private final Long storeId;\n\n    private final List<Long> authorIds;\n\n    public BookInput(\n        @Nullable Long id,\n        String name,\n        int edition,\n        BigDecimal price,\n        @Nullable Long storeId,\n        List<Long> authorIds\n    ) {\n        this.id = id;\n        this.name = name;\n        this.edition = edition;\n        this.price = price;\n        this.storeId = storeId;\n        this.authorIds = authorIds;\n    }\n\n    // Convert static input object\n    // to dynamic entity object\n    // highlight-next-line\n    public Book toBook() {\n        return BookDraft.$.produce(book -> {\n            if (id != null) {\n                book.setId(id);\n            }\n            if (storeId != null) {\n                book.setStore(\n                    store -> store.setId(storeId)\n                );\n            }\n            book\n                .setName(name)\n                .setEdition(edition)\n                .setPrice(price);\n            for (Long authorId : authorIds) {\n                book.addIntoAuthors(\n                    author -> author.setId(authorId)\n                );\n            }\n        });\n    }\n}\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("a",{parentName:"p",href:"./mutation/save-command"},"Save command")," of jimmer-sql provides the function of saving object tree with arbitrary complexity into database. Therefore, jimmer-sql focuses on the entity object tree, not the input object. So, we need to provide the method ",(0,i.kt)("inlineCode",{parentName:"p"},"BookInput.toBook")," to convert the static ",(0,i.kt)("inlineCode",{parentName:"p"},"BookInput")," object to a dynamic ",(0,i.kt)("inlineCode",{parentName:"p"},"Book")," object.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Book")," object is a jimmer-core immutable object, which is dynamic, that is, the format of ",(0,i.kt)("inlineCode",{parentName:"p"},"Book")," is ever-changing and all-encompassing. So, no matter how ",(0,i.kt)("inlineCode",{parentName:"p"},"BookInput")," type is defined, and whether ",(0,i.kt)("inlineCode",{parentName:"p"},"BookInput")," has deep data nesting, it can be converted to ",(0,i.kt)("inlineCode",{parentName:"p"},"Book")," type. It can never happen that ",(0,i.kt)("inlineCode",{parentName:"p"},"BookInput")," cannot be converted to ",(0,i.kt)("inlineCode",{parentName:"p"},"Book"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The core value of the ",(0,i.kt)("inlineCode",{parentName:"p"},"BookInput")," is to conform to the GraphQL protocol and impose format constraints on the input data passed by the client. Howerver, for jimmer-sql, ",(0,i.kt)("inlineCode",{parentName:"p"},"BookInput")," only has the responsibility of creating ",(0,i.kt)("inlineCode",{parentName:"p"},"Book")," object. So, apart from the ",(0,i.kt)("inlineCode",{parentName:"p"},"toBook")," method, the class ",(0,i.kt)("inlineCode",{parentName:"p"},"BookInput")," does not define any other methods, not even a getter methods, because this is unnessary (of course, if you want to cooperate with the debugger display function, you can define a ",(0,i.kt)("inlineCode",{parentName:"p"},"toString")," for it)."))))),(0,i.kt)("h3",{id:"implement-mutation-business"},"Implement mutation business"),(0,i.kt)("p",null,"Now, we know"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("a",{parentName:"p",href:"./mutation/save-command"},"Save command")," of jimmer-sql allows developers to use one sentence to save any complex entity object tree into the database.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"BookInput")," defined above can be converted to an entity object tree of ",(0,i.kt)("inlineCode",{parentName:"p"},"Book")," through its  method ",(0,i.kt)("inlineCode",{parentName:"p"},"toBook"),"."))),(0,i.kt)("p",null,"Then, the realization of the data mutation business is very simple."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"@MutationMapping\n@Transactional\npublic Book saveBook(@Argument BookInput input) {\n    return sqlClient\n        .getEntities()\n        .save(\n            // highlight-next-line\n            input.toBook()\n        )\n        .getModifiedEntity();\n}\n")))}m.isMDXComponent=!0}}]);
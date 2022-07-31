"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[9957],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(t),m=i,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return t?a.createElement(g,r(r({ref:n},u),{},{components:t})):a.createElement(g,r({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,r=new Array(l);r[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var c=2;c<l;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2360:function(e,n,t){t.d(n,{Z:function(){return r}});var a=t(7294),i=t(6010),l="tabItem_OmH5";function r(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(l,r),hidden:t},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return m}});var a=t(3117),i=t(7294),l=t(2389),r=t(7392),o=t(7094),s=t(2466),c=t(6010),u="tabList_uSqn",p="tabItem_LplD";function d(e){var n,t,l,d=e.lazy,m=e.block,g=e.defaultValue,h=e.values,v=e.groupId,k=e.className,b=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=h?h:b.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),N=(0,r.l)(f,(function(e,n){return e.value===n.value}));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var C=null===g?g:null!=(n=null!=g?g:null==(t=b.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(l=b[0])?void 0:l.props.value;if(null!==C&&!f.some((function(e){return e.value===C})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+C+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var S=(0,o.U)(),y=S.tabGroupChoices,q=S.setTabGroupChoices,w=(0,i.useState)(C),j=w[0],x=w[1],T=[],E=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var D=y[v];null!=D&&D!==j&&f.some((function(e){return e.value===D}))&&x(D)}var O=function(e){var n=e.currentTarget,t=T.indexOf(n),a=f[t].value;a!==j&&(E(n),x(a),null!=v&&q(v,a))},B=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.currentTarget)+1;t=T[a]||T[0];break;case"ArrowLeft":var i=T.indexOf(e.currentTarget)-1;t=T[i]||T[T.length-1]}null==(n=t)||n.focus()};return i.createElement("div",{className:(0,c.Z)("tabs-container",u)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":m},k)},f.map((function(e){var n=e.value,t=e.label,l=e.attributes;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:j===n?0:-1,"aria-selected":j===n,key:n,ref:function(e){return T.push(e)},onKeyDown:B,onFocus:O,onClick:O},l,{className:(0,c.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":j===n})}),null!=t?t:n)}))),d?(0,i.cloneElement)(b.filter((function(e){return e.props.value===j}))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},b.map((function(e,n){return(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==j})}))))}function m(e){var n=(0,l.Z)();return i.createElement(d,(0,a.Z)({key:String(n)},e))}},5482:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var a=t(3117),i=t(102),l=(t(7294),t(3905)),r=(t(9877),t(2360),["components"]),o={sidebar_position:3,title:"JSqlClient"},s=void 0,c={unversionedId:"jimmer-sql/sql-client",id:"jimmer-sql/sql-client",title:"JSqlClient",description:"JSqlClient is the entry point for all APIs of jimmer-sql.",source:"@site/docs/jimmer-sql/sql-client.mdx",sourceDirName:"jimmer-sql",slug:"/jimmer-sql/sql-client",permalink:"/jimmer/zh/docs/jimmer-sql/sql-client",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/jimmer-sql/sql-client.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"JSqlClient"},sidebar:"tutorialSidebar",previous:{title:"Mapping",permalink:"/jimmer/zh/docs/jimmer-sql/mapping"},next:{title:"Table and TableEx",permalink:"/jimmer/zh/docs/jimmer-sql/table-and-table-ex"}},u={},p=[{value:"Create JSqlClient",id:"create-jsqlclient",level:2},{value:"ConnectionManager",id:"connectionmanager",level:2},{value:"Simple ConnectionManager",id:"simple-connectionmanager",level:3},{value:"ConnectionManager under Spring transaction management",id:"connectionmanager-under-spring-transaction-management",level:3},{value:"Dialect",id:"dialect",level:2},{value:"Executor",id:"executor",level:2},{value:"Log SQL and its parameters",id:"log-sql-and-its-parameters",level:3},{value:"Collect slow SQL for improvement",id:"collect-slow-sql-for-improvement",level:3},{value:"ScalarProvider",id:"scalarprovider",level:2},{value:"Custom ScalarProvider",id:"custom-scalarprovider",level:3},{value:"Built-in ScalarProvider",id:"built-in-scalarprovider",level:3},{value:"IdGenerator",id:"idgenerator",level:2},{value:"DefaultBatchSize and DefaultListBatchSize",id:"defaultbatchsize-and-defaultlistbatchsize",level:2}],d={toc:p};function m(e){var n=e.components,t=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"JSqlClient is the entry point for all APIs of jimmer-sql."),(0,l.kt)("h2",{id:"create-jsqlclient"},"Create JSqlClient"),(0,l.kt)("p",null,"JSqlClient is an immutable object, created based on the Builder pattern."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"JSqlClient sqlClient = JSqlClient\n    .newBuilder()\n    ...doSomething...\n    .builde();\n")),(0,l.kt)("p",null,"JSqlClient requires an instance and should be shared globally."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"If Spring is not used, it should be shared via static variables.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"If Spring is used, it should be used as a Spring singleton bean object."))),(0,l.kt)("p",null,"There is no doubt that using Spring/SpringBoot is a fixed pattern for almost all server-side programs."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"@Configuration\npublic class JSqlClientConfig {\n\n    @Bean\n    public JSqlClient sqlClient() {\n        return JSqlClient\n            .newBuilder()\n            ...doSomething...\n            .builde();\n    }\n}\n")),(0,l.kt)("p",null,"Then, the JSqlClient object can be injected anywhere to use all the features of jimmer-sql."),(0,l.kt)("h2",{id:"connectionmanager"},"ConnectionManager"),(0,l.kt)("p",null,"All executable statements and commands in jimmer-sql inherit from the ",(0,l.kt)("inlineCode",{parentName:"p"},"Executable")," interface"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Executable.java"',title:'"Executable.java"'},"package org.babyfish.jimmer.sql.ast;\n\nimport java.sql.Connection;\n\npublic interface Executable<R> {\n\n    R execute();\n\n    R execute(Connection con);\n}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"execute(Connection)"),": Execution based on user-specified JDBC connection."),(0,l.kt)("p",{parentName:"li"},"  Take the query as an example:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},"public List<Book> findBooks(Connection con) {\n    return sqlClient\n        .createQuery(BookTable.class, (q, book) -> {\n            return q.select(book);\n        })\n        // highlight-next-line\n        .execute(con);\n}\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"execute()"),": Execution based on automatically acquired JDBC connection."),(0,l.kt)("p",{parentName:"li"},"  Take the query as an example:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},"public List<Book> findBooks() {\n    return sqlClient\n        .createQuery(BookTable.class, (q, book) -> {\n            return q.select(book);\n        })\n        // highlight-next-line\n        .execute();\n}\n")))),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"To use the first way, no special configuration of JSqlClient is required."),(0,l.kt)("p",{parentName:"div"},"To use the second way, the ConnectionManager must be configured for JSqlClient. Otherwise an exception will be thrown."),(0,l.kt)("p",{parentName:"div"},"There is no doubt that the second method is more in line with the requirements of business system development and is more recommended. Therefore, it is strongly recommended to configure ConnectionManager for JSqlClient."))),(0,l.kt)("h3",{id:"simple-connectionmanager"},"Simple ConnectionManager"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"javax.sql.DataSource dataSource = ...;\n\nJSqlClient sqlClient = JSqlClient\n    .newBuilder()\n    .setConnectionManager(\n        ConnectionManager\n            // highlight-next-line\n            .simpleConnectionManager(dataSource)\n    )\n    .builde();\n")),(0,l.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},(0,l.kt)("inlineCode",{parentName:"p"},"ConnectionManager.simpleConnectionManager")," is only responsible for obtaining connections from DataSource and has no transaction management mechanism."),(0,l.kt)("p",{parentName:"div"},"This method is only suitable for occasions where Spring is not used. Except for learning and trying, it is not recommended to use simpleConnectionManager in actual projects."))),(0,l.kt)("h3",{id:"connectionmanager-under-spring-transaction-management"},"ConnectionManager under Spring transaction management"),(0,l.kt)("p",null,"As mentioned earlier, using Spring/SpringBoot is a fixed pattern for almost all server-side programs."),(0,l.kt)("p",null,"jimmer-sql only focuses on generating SQL and executing SQL. In terms of connection management and transaction management, it does not want to develop duplicate functions with Spring/SpringBoot, and it does not want to increase the difficulty of integrating with Spring/SpringBoot."),(0,l.kt)("p",null,"When you use spring-jdbc, you can implement ConnectionManager based on ",(0,l.kt)("inlineCode",{parentName:"p"},"org.springframework.jdbc.datasource.DataSourceUtils"),", so that jimmer-sql is managed by Spring transactions."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"@Bean\npublic JSqlClient sqlClient(\n    // Inject dataSoruce of spring-jdbc\n    // highlight-next-line\n    DataSource dataSource\n) {\n    return JSqlClient.newBuilder()\n        .setConnectionManager(\n            new ConnectionManager() {\n                @Override\n                public <R> R execute(\n                    Function<Connection, R> block\n                ) {\n                    Connection con = DataSourceUtils\n                        // highlight-next-line\n                        .getConnection(dataSource);\n                    try {\n                        return block.apply(con);\n                    } finally {\n                        DataSourceUtils\n                            // highlight-next-line\n                            .releaseConnection(con, dataSource);\n                    }\n                }\n            }\n        )\n        .build();\n}\n")),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Having jimmer-sql be managed by Spring transactions is the recommended usage."))),(0,l.kt)("h2",{id:"dialect"},"Dialect"),(0,l.kt)("p",null,"As with most ORMs, different dialects need to be set for different databases. The dialects supported so far are as follows:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"org.babyfish.jimmer.sql.dialect.H2Dialect"),(0,l.kt)("li",{parentName:"ul"},"org.babyfish.jimmer.sql.dialect.MySqlDialect"),(0,l.kt)("li",{parentName:"ul"},"org.babyfish.jimmer.sql.dialect.PostgresDialect"),(0,l.kt)("li",{parentName:"ul"},"org.babyfish.jimmer.sql.dialect.OracleDialect"),(0,l.kt)("li",{parentName:"ul"},"org.babyfish.jimmer.sql.dialect.SqlServerDialect")),(0,l.kt)("p",null,"Taking H2 as an example, the dialect is set as follows"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"@Configuration\npublic class JSqlClientConfig {\n\n    @Bean\n    public JSqlClient sqlClient() {\n        return JSqlClient\n            .newBuilder()\n            .setConnectionManager(...)\n            // highlight-next-line\n            .setDialect(new H2Dialect())\n            .build();\n    }\n}\n")),(0,l.kt)("h2",{id:"executor"},"Executor"),(0,l.kt)("p",null,"Executor is the entry point for jimmer-sql to execute the final SQL and acts as an interceptor for SQL execution."),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Setting the Executor is optional."))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Executor.java"',title:'"Executor.java"'},"package org.babyfish.jimmer.sql.runtime;\n\nimport java.sql.Connection;\nimport java.sql.PreparedStatement;\nimport java.util.List;\n\npublic interface Executor {\n\n    <R> R execute(\n            Connection con,\n            String sql,\n            List<Object> variables,\n            SqlFunction<PreparedStatement, R> block\n    );\n}\n")),(0,l.kt)("p",null,"This interface has only one method ",(0,l.kt)("inlineCode",{parentName:"p"},"execute")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"con"),": SQL is executed based on this connection")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"sql"),": SQL statement to be executed")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"variables"),": JDBC parameters attached to the SQL to be executed"),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"Note:"),(0,l.kt)("p",{parentName:"blockquote"},"The list does not contain null values, all null values are pre-replaced with objects of type ",(0,l.kt)("inlineCode",{parentName:"p"},"org.babyfish.jimmer.sql.runtime.DbNull"),"."))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"block"),": Substantial operation to be performed."),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"Note:"),(0,l.kt)("p",{parentName:"blockquote"},"Do not call ",(0,l.kt)("inlineCode",{parentName:"p"},"block")," directly in a custom Executor, instead call the method ",(0,l.kt)("inlineCode",{parentName:"p"},"execute")," of ",(0,l.kt)("inlineCode",{parentName:"p"},"org.babyfish.jimmer.sql.runtime.DefaultExecutor"),".")))),(0,l.kt)("p",null,"The default ",(0,l.kt)("inlineCode",{parentName:"p"},"DefaultExecutor")," is already capable of all jobs, so specifying a custom Exector is optional."),(0,l.kt)("p",null,"If you encounter one of the following scenarios, you can specify a custom Executor to override the default DefaultExecutor."),(0,l.kt)("h3",{id:"log-sql-and-its-parameters"},"Log SQL and its parameters"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@Configuration\npublic class JSqlClientConfig {\n\n    private static final Logger LOGGER = \n        LoggerFactory.getLogger(JSqlClientConfig.class);\n\n    @Bean\n    public JSqlClient sqlClient() {\n        return JSqlClient\n            .newBuilder()\n            .setConnectionManager(...)\n            .setDialect(new H2Dialect())\n            // highlight-next-line\n            .setExecutor(\n                new Executor() {\n                    @Override\n                    public <R> R execute(\n                            Connection con,\n                            String sql,\n                            List<Object> variables,\n                            SqlFunction<PreparedStatement, R> block\n                    ) {\n                        // Log SQL and variables.\n                        LOGGER.info(\n                            "Execute sql : \\"{}\\", " +\n                            "with variables: {}", \n                            sql, \n                            variables\n                        );\n                        // Call DefaultExecutor\n                        // highlight-next-line\n                        return DefaultExecutor\n                            .INSTANCE\n                            .execute(\n                                con,\n                                sql,\n                                variables,\n                                block\n                            );\n                    }\n                }\n            )\n            .build();\n    }\n}\n')),(0,l.kt)("h3",{id:"collect-slow-sql-for-improvement"},"Collect slow SQL for improvement"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"@Configuration\npublic class JSqlClientConfig {\n\n    private static final Logger LOGGER = \n        LoggerFactory.getLogger(JSqlClientConfig.class);\n\n    @Bean\n    public JSqlClient sqlClient() {\n        return JSqlClient\n            .newBuilder()\n            .setConnectionManager(...)\n            .setDialect(new H2Dialect())\n            // highlight-next-line\n            .setExecutor(\n                new Executor() {\n                    @Override\n                    public <R> R execute(\n                            Connection con,\n                            String sql,\n                            List<Object> variables,\n                            SqlFunction<PreparedStatement, R> block\n                    ) {\n                        long millis = System.currentTimeMillis();\n                        // Call DefaultExecutor\n                        // highlight-next-line\n                        R result = DefaultExecutor\n                            .INSTANCE\n                            .execute(\n                                con,\n                                sql,\n                                variables,\n                                block\n                            );\n                        millis = System.currentTimeMillis() - millis;\n                        if (millis > 1000) { // Slow SQL\n                            ...sendMessageToTechTeam...\n                        }\n                        return result;\n                    }\n                }\n            )\n            .build();\n    }\n}\n")),(0,l.kt)("h2",{id:"scalarprovider"},"ScalarProvider"),(0,l.kt)("p",null,"Multiple ",(0,l.kt)("inlineCode",{parentName:"p"},"ScalarProvider"),"s can be added to JSqlClient, each ",(0,l.kt)("inlineCode",{parentName:"p"},"ScalarProvider")," tells the database how to handle a custom data type."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ScalarProvider")," is defined as follows"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="ScalarProvider"',title:'"ScalarProvider"'},"package org.babyfish.jimmer.sql.runtime;\n\nimport java.util.function.Consumer;\n\npublic abstract class ScalarProvider<T, S> {\n\n    protected ScalarProvider(Class<T> scalarType, Class<S> sqlType) {\n        this.scalarType = scalarType;\n        this.sqlType = sqlType;\n    }\n\n    public abstract T toScalar(S sqlValue);\n\n    public abstract S toSql(T scalarValue);\n }\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Generic parameter ",(0,l.kt)("inlineCode",{parentName:"li"},"T"),": data type in Java"),(0,l.kt)("li",{parentName:"ul"},"Generic parameter ",(0,l.kt)("inlineCode",{parentName:"li"},"S"),": data type in the database"),(0,l.kt)("li",{parentName:"ul"},"Method ",(0,l.kt)("inlineCode",{parentName:"li"},"toScalar"),": Convert the non-null data read from the database to Java data"),(0,l.kt)("li",{parentName:"ul"},"Method ",(0,l.kt)("inlineCode",{parentName:"li"},"toSql"),": converts non-null java data to the data that can be accepted by database")),(0,l.kt)("h3",{id:"custom-scalarprovider"},"Custom ScalarProvider"),(0,l.kt)("p",null,"For example, if database does not support the UUID type, it can be handled like this"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"@Configuration\npublic class JSqlClientConfig {\n\n    private static final Logger LOGGER = \n        LoggerFactory.getLogger(JSqlClientConfig.class);\n\n    @Bean\n    public JSqlClient sqlClient() {\n        return JSqlClient\n            .newBuilder()\n            .setConnectionManager(...)\n            .setDialect(new H2Dialect())\n            .setExecutor(...)\n            // highlight-next-line\n            .addScalarProvider(\n                new ScalarProvider<>(\n                    UUID.class,\n                    String.class\n                ) {\n                    @Override\n                    public UUID toScalar(String sqlValue) {\n                        return UUID.fromString(sqlValue);\n                    }\n\n                    @Override\n                    public String toSql(UUID scalarValue) {\n                        return scalarValue.toString();\n                    }\n                }\n            )\n            .build();\n    }\n}\n")),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Such usage is not demonstrated in the accompanying examples of this framework, because the accompanying examples are based on H2, which supports UUID types."))),(0,l.kt)("h3",{id:"built-in-scalarprovider"},"Built-in ScalarProvider"),(0,l.kt)("p",null,"jimmer-sql has built-in ScalarProvider for enum."),(0,l.kt)("p",null,"Suppose there is an enum type:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="GcObjColor.java"',title:'"GcObjColor.java"'},"public enum GcObjColor { \n    WHITE, \n    GRAY, \n    BLACK \n}\n")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Maps to strings by enum's ",(0,l.kt)("inlineCode",{parentName:"p"},"name()")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},"return SqlBuilder\n    .newBuilder()\n    // highlight-next-line\n    .addScalarProvoder(\n        ScalarProvoder.enumProviderByString(\n            GcObjColor.class\n        )\n    )\n    ...doOtherthings...\n    .build();\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Maps to string as enum's ",(0,l.kt)("inlineCode",{parentName:"p"},"name()"),", but maps ",(0,l.kt)("inlineCode",{parentName:"p"},"GRAY")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"GREY")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},'return SqlBuilder\n    .newBuilder()\n    .addScalarProvoder(\n        ScalarProvoder.enumProviderByString(\n            GcObjColor.class, \n            // highlight-next-line\n            it -> it.map(GcObjColor.GRAY, "GREY")\n        )\n    )\n    ...doOtherthings...\n    .build();\n'))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Maps to integers by enum's ",(0,l.kt)("inlineCode",{parentName:"p"},"ordinal()")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},"return SqlBuilder\n    .newBuilder()\n    // highlight-next-line\n    .addScalarProvoder(\n        ScalarProvoder.enumProviderByInt(\n            GcObjColor.class\n        )\n    )\n    ...doOtherthings...\n    .build();\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Maps to integers as enum's ",(0,l.kt)("inlineCode",{parentName:"p"},"ordinal()"),", but maps ",(0,l.kt)("inlineCode",{parentName:"p"},"BLACK")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"3"),(0,l.kt)("em",{parentName:"p"},"(default is 2)")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},"return SqlBuilder\n    .newBuilder()\n    // highlight-next-line\n    .addScalarProvoder(\n        ScalarProvoder.enumProviderByInt(\n            GcObjColor.class,\n            it -> it.map(GcObjColor.BLACK, 3)\n        )\n    )\n    ...doOtherthings...\n    .build();\n")))),(0,l.kt)("h2",{id:"idgenerator"},"IdGenerator"),(0,l.kt)("p",null,"The id generation strategy for objects can be set dynamically."),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Normally, the id generation strategy should be statically configured in the entity interface using the annotation ",(0,l.kt)("inlineCode",{parentName:"p"},"@javax.persistance.GeneratedValue"),", you can refer to ",(0,l.kt)("a",{parentName:"p",href:"./mapping#javaxpersistancegeneratedvalue"},"mapping")," for more information."),(0,l.kt)("p",{parentName:"div"},"In this case, why provide the function of dynamically specifying the id generator in JSqlClient?"),(0,l.kt)("p",{parentName:"div"},"Dynamically specifying IdGenerator in JSqlClient can override the static configuration of the annotation ",(0,l.kt)("inlineCode",{parentName:"p"},"@javax.persistance.GeneratedValue")," in the entity file, which is very useful for unit testing."))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="UnitTestIdGenerator.java"',title:'"UnitTestIdGenerator.java"'},"public class UnitTestIdGenerator implements UserIdGenerator {\n\n    private final Iterator<Object> preAllocatedIdItr;\n    \n    public UnitTestIdGenerator(Object ... preAllocatedIds) {\n        preAllocatedIdItr = Arrays\n                .asList(preAllocatedIds)\n                .iterator();\n    }\n\n    @Override\n    public Object generate(Class<?> entityType) {\n        return preAllocatedIdItr.next();\n    }\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="MyTest.java"',title:'"MyTest.java"'},"class MyTest {\n\n    private JSqlClient sqlClient;\n\n    @BeforeEach\n    public void init() {\n        sqlClient = JSqlClient\n            .newBuilder()\n            // highlight-next-line\n            .setIdGenerator(\n                Department.class,\n                new UnitTestIdGenerator(51L, 52L, 53L)\n            )\n            // highlight-next-line\n            .setIdGenerator(\n                Employee.class,\n                new UnitTestIdGenerator(100L, 101L)\n            )\n            // highlight-next-line\n            .setIdGenerator(\n                // For other entity types\n                new UnitTestIdGenerator(1L, 2L, 3L, 4L)\n            )\n            .build();\n    }\n\n    @Test\n    public void test() {\n        // TODO: Add unit test code here\n    }\n}\n")),(0,l.kt)("h2",{id:"defaultbatchsize-and-defaultlistbatchsize"},"DefaultBatchSize and DefaultListBatchSize"),(0,l.kt)("p",null,"JSqlClient supports two configurations: ",(0,l.kt)("inlineCode",{parentName:"p"},"DefaultBatchSize")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"DefaultListBatchSize"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"@Configuration\npublic class JSqlClientConfig {\n\n    @Bean\n    public JSqlClient sqlClient() {\n        return JSqlClient\n            .newBuilder()\n            .setConnectionManager(...)\n            .setDialect(new H2Dialect())\n            .setExecutor(...)\n            .addScalarProvider(...)\n            // highlight-next-line\n            .setDefaultBatchSize(256)\n            // highlight-next-line\n            .setDefaultListBatchSize(32)\n            .build();\n    }\n}\n")),(0,l.kt)("p",null,"The usage is described in detail in ",(0,l.kt)("a",{parentName:"p",href:"./query/fetcher#batchsize"},"Object Fetcher"),", which will not be repeated in this article."))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[2009],{8495:function(e,a,t){t.r(a),t.d(a,{assets:function(){return P},contentTitle:function(){return B},default:function(){return M},frontMatter:function(){return D},metadata:function(){return S},toc:function(){return x}});var r=t(3117),o=t(102),n=t(7294),l=t(3905),u=t(3012),i=t(7906),m=t(295),d=t(3252),s=t(3184),c=t(3816),p=t(9877),k=t(2360),f=t(3457),v=t(4750),C=t(8261),w=t(1519),h=function(e){var a=e.type,t=e.locale,r=(0,n.useState)("OPS"!==a),o=r[0],l=r[1],u=(0,n.useCallback)((function(e,a){l(a)}),[]);return n.createElement(p.Z,null,n.createElement(k.Z,{value:"chart",label:"zh"===t?"\u56fe\u8868":"Chart",default:!0},"OPS"===a&&n.createElement(n.Fragment,null,n.createElement(f.Z,null,n.createElement(v.Z,{control:n.createElement(C.Z,{value:o,onChange:u}),label:"zh"===t?"\u663e\u793a\u539f\u751fJDBC\u6307\u6807":"Show native JDBC metrics"})),n.createElement(w.Z,null)),"OPS"==a?n.createElement(b,{rows:O,scale:g,showJdbc:o}):n.createElement(b,{rows:j,scale:J,showJdbc:o})),n.createElement(k.Z,{value:"data",label:"zh"===t?"\u6570\u636e":"Data"},"OPS"===a?n.createElement(N,{rows:O,valueTitle:"Ops/s"}):n.createElement(N,{rows:j,valueTitle:"Time(\u03bcs)"})))},b=function(e){var a=e.rows,t=e.scale,r=e.showJdbc;return n.createElement(u.Chart,{filter:r?void 0:{framework:function(e){return!e.startsWith("JDBC")}},height:400,padding:"auto",data:a,scale:t,autoFit:!0},n.createElement(u.Interval,{adjust:[{type:"dodge",marginRatio:0}],color:"framework",position:"dataCount*value"}),n.createElement(u.Axis,{name:"value",title:!0}),n.createElement(u.Legend,{position:"left"}),n.createElement(u.Tooltip,{shared:!0}),n.createElement(u.Interaction,{type:"active-region"}))},N=function(e){var a=e.rows,t=e.valueTitle;return n.createElement(i.Z,null,n.createElement(s.Z,null,n.createElement(c.Z,null,n.createElement(d.Z,null,"Framework"),n.createElement(d.Z,null,"Data count"),n.createElement(d.Z,null,t))),n.createElement(m.Z,null,a.map((function(e){return n.createElement(c.Z,{key:e.framework+"-"+e.dataCount},n.createElement(d.Z,null,e.framework),n.createElement(d.Z,null,e.dataCount),n.createElement(d.Z,null,e.value))}))))},g={dataCount:{alias:"Data count"},value:{alias:"Ops/s"}},J={dataCount:{alias:"Data count"},value:{alias:"Time(\u03bcs)"}},E=[{framework:"JDBC(ColIndex)",dataCount:"10",value:694486.3419038279},{framework:"JDBC(ColIndex)",dataCount:"20",value:489680.5448583284},{framework:"JDBC(ColIndex)",dataCount:"50",value:264206.57460154407},{framework:"JDBC(ColIndex)",dataCount:"100",value:150515.12108999112},{framework:"JDBC(ColIndex)",dataCount:"200",value:79814.62925392622},{framework:"JDBC(ColIndex)",dataCount:"500",value:34010.917810255225},{framework:"JDBC(ColIndex)",dataCount:"1000",value:17344.997133330337},{framework:"JDBC(ColName)",dataCount:"10",value:344937.67467185546},{framework:"JDBC(ColName)",dataCount:"20",value:255724.33711667656},{framework:"JDBC(ColName)",dataCount:"50",value:136098.32519053208},{framework:"JDBC(ColName)",dataCount:"100",value:73348.19440278952},{framework:"JDBC(ColName)",dataCount:"200",value:41339.312973684755},{framework:"JDBC(ColName)",dataCount:"500",value:17442.958296769142},{framework:"JDBC(ColName)",dataCount:"1000",value:8851.357551662291},{framework:"Jimmer",dataCount:"10",value:205436.22983583916},{framework:"Jimmer",dataCount:"20",value:106671.0555555964},{framework:"Jimmer",dataCount:"50",value:47416.202602896825},{framework:"Jimmer",dataCount:"100",value:24356.49940496951},{framework:"Jimmer",dataCount:"200",value:12446.816603773445},{framework:"Jimmer",dataCount:"500",value:5043.100504924187},{framework:"Jimmer",dataCount:"1000",value:2591.485543202771},{framework:"MyBatis",dataCount:"10",value:76883.8077420863},{framework:"MyBatis",dataCount:"20",value:43902.97281806945},{framework:"MyBatis",dataCount:"50",value:19651.20228086318},{framework:"MyBatis",dataCount:"100",value:10282.527318386752},{framework:"MyBatis",dataCount:"200",value:5077.795477849398},{framework:"MyBatis",dataCount:"500",value:2183.073394058281},{framework:"MyBatis",dataCount:"1000",value:1077.022064385448},{framework:"JPA(Hibernate)",dataCount:"10",value:102079.99683590114},{framework:"JPA(Hibernate)",dataCount:"20",value:59571.8912591726},{framework:"JPA(Hibernate)",dataCount:"50",value:25702.786559093773},{framework:"JPA(Hibernate)",dataCount:"100",value:13414.569591700454},{framework:"JPA(Hibernate)",dataCount:"200",value:6950.7789429148015},{framework:"JPA(Hibernate)",dataCount:"500",value:2767.8983414626673},{framework:"JPA(Hibernate)",dataCount:"1000",value:1394.4277761346852},{framework:"JPA(EclipseLink)",dataCount:"10",value:64196.05849313359},{framework:"JPA(EclipseLink)",dataCount:"20",value:33404.26805171479},{framework:"JPA(EclipseLink)",dataCount:"50",value:13366.495947592284},{framework:"JPA(EclipseLink)",dataCount:"100",value:6463.698802395989},{framework:"JPA(EclipseLink)",dataCount:"200",value:3372.576544558393},{framework:"JPA(EclipseLink)",dataCount:"500",value:1336.372383001008},{framework:"JPA(EclipseLink)",dataCount:"1000",value:633.8655654287536},{framework:"JOOQ",dataCount:"10",value:57330.45419894458},{framework:"JOOQ",dataCount:"20",value:32028.461417183466},{framework:"JOOQ",dataCount:"50",value:14314.38547680882},{framework:"JOOQ",dataCount:"100",value:7502.648309980643},{framework:"JOOQ",dataCount:"200",value:3763.6724215854615},{framework:"JOOQ",dataCount:"500",value:1526.2019510344485},{framework:"JOOQ",dataCount:"1000",value:819.9420644410151},{framework:"Exposed",dataCount:"10",value:90907.0038077874},{framework:"Exposed",dataCount:"20",value:56193.792591162506},{framework:"Exposed",dataCount:"50",value:27223.72463486148},{framework:"Exposed",dataCount:"100",value:16082.303029792809},{framework:"Exposed",dataCount:"200",value:8729.672525241589},{framework:"Exposed",dataCount:"500",value:3339.056688942882},{framework:"Exposed",dataCount:"1000",value:1706.3058644786568},{framework:"Nutz",dataCount:"10",value:83494.05338964531},{framework:"Nutz",dataCount:"20",value:40717.14800799643},{framework:"Nutz",dataCount:"50",value:17614.258653514986},{framework:"Nutz",dataCount:"100",value:8964.770360354232},{framework:"Nutz",dataCount:"200",value:5027.467397793748},{framework:"Nutz",dataCount:"500",value:1752.6091274012165},{framework:"Nutz",dataCount:"1000",value:907.6214231393163},{framework:"ObjectiveSQL",dataCount:"10",value:59785.4698873157},{framework:"ObjectiveSQL",dataCount:"20",value:31686.481503294886},{framework:"ObjectiveSQL",dataCount:"50",value:12956.668448069668},{framework:"ObjectiveSQL",dataCount:"100",value:6533.652114072017},{framework:"ObjectiveSQL",dataCount:"200",value:2962.704281294185},{framework:"ObjectiveSQL",dataCount:"500",value:1368.3867839343445},{framework:"ObjectiveSQL",dataCount:"1000",value:595.9637213597805},{framework:"Spring data jdbc",dataCount:"10",value:19928.66836787829},{framework:"Spring data jdbc",dataCount:"20",value:10393.084996776615},{framework:"Spring data jdbc",dataCount:"50",value:4066.7112309312906},{framework:"Spring data jdbc",dataCount:"100",value:2129.3697205181825},{framework:"Spring data jdbc",dataCount:"200",value:1035.8068663111264},{framework:"Spring data jdbc",dataCount:"500",value:429.52774464126685},{framework:"Spring data jdbc",dataCount:"1000",value:195.7003347507818},{framework:"Ktorm",dataCount:"10",value:16307.248701814044},{framework:"Ktorm",dataCount:"20",value:8927.241426690754},{framework:"Ktorm",dataCount:"50",value:4071.264434393904},{framework:"Ktorm",dataCount:"100",value:2096.8860331106425},{framework:"Ktorm",dataCount:"200",value:1057.9144168099972},{framework:"Ktorm",dataCount:"500",value:374.82800208842036},{framework:"Ktorm",dataCount:"1000",value:176.26688013436913}],O=E.map((function(e){return Object.assign({},e,{value:Math.round(e.value)})})),j=E.map((function(e){return Object.assign({},e,{value:Math.round(1e6/e.value)})})),y=["components"],D={sidebar_position:2,title:"Benchmark"},B=void 0,S={unversionedId:"benchmark",id:"benchmark",title:"Benchmark",description:"The source code of the benchmark is here, using H2's in-memory database, it can run directly without any environment preparation.",source:"@site/docs/benchmark.mdx",sourceDirName:".",slug:"/benchmark",permalink:"/jimmer/docs/benchmark",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/benchmark.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Benchmark"},sidebar:"tutorialSidebar",previous:{title:"Tutorial introduction",permalink:"/jimmer/docs/intro"},next:{title:"jimmer-core subproject",permalink:"/jimmer/docs/jimmer-core/"}},P={},x=[{value:"Report",id:"report",level:2},{value:"Operation count per second",id:"operation-count-per-second",level:3},{value:"Time cost per operation",id:"time-cost-per-operation",level:3},{value:"Implementation principle",id:"implementation-principle",level:2},{value:"Value",id:"value",level:2}],A={toc:x};function M(e){var a=e.components,t=(0,o.Z)(e,y);return(0,l.kt)("wrapper",(0,r.Z)({},A,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The source code of the benchmark is ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/babyfish-ct/jimmer/tree/main/benchmark"},"here"),", using H2's in-memory database, it can run directly without any environment preparation."),(0,l.kt)("h2",{id:"report"},"Report"),(0,l.kt)("h3",{id:"operation-count-per-second"},"Operation count per second"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The abscissa represents the count of data objects queried from the database each time."),(0,l.kt)("li",{parentName:"ul"},"The ordinate represents the operation count per second.")),(0,l.kt)(h,{type:"OPS",mdxType:"Benchmark"}),(0,l.kt)("h3",{id:"time-cost-per-operation"},"Time cost per operation"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The abscissa represents the count of data objects queried from the database each time."),(0,l.kt)("li",{parentName:"ul"},"The ordinate represents the time cost per operation(\u03bcs).")),(0,l.kt)(h,{type:"TIME",mdxType:"Benchmark"}),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"This benchmark does not include ",(0,l.kt)("inlineCode",{parentName:"p"},"JPA(OpenJPA)")," as Spring has removed support for OpenJPA."))),(0,l.kt)("h2",{id:"implementation-principle"},"Implementation principle"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Disable caching for all frameworks")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"All frameworks close the log")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"All frameworks open and close connections/sessions each time without sharing; rely on the connection pool to ensure performance.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Use Spring's connection management. Due to different framework APIs, the implementation methods are slightly different."),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Some use ",(0,l.kt)("inlineCode",{parentName:"li"},"getConnection")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"releaseConnection")," of ",(0,l.kt)("a",{parentName:"li",href:"https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/jdbc/datasource/DataSourceUtils.html"},"DataSourceUtils")),(0,l.kt)("li",{parentName:"ul"},"Some use ",(0,l.kt)("a",{parentName:"li",href:"https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/jdbc/datasource/TransactionAwareDataSourceProxy.html"},"TransactionAwareDataSourceProxy"))),(0,l.kt)("p",{parentName:"li"},"but the end result is the same")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Don't use transactions"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Exposed")," is special, its API enforces transactions, provide fake implementation for it.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Use the embedded H2 database to compress database consumption as much as possible, highlighting the performance of ORM itself, that is, the performance of mapping."))),(0,l.kt)("h2",{id:"value"},"Value"),(0,l.kt)("p",null,"A common point of view is that the performance of ORM itself is not important. In actual projects, the database is not embedded memory database, so the time consumption of the ORM itself is negligible compared to the time consumption of the database."),(0,l.kt)("p",null,"Rebuttal: After the release of Java 19, virtual threads are supported. ORM can complete the mapping as soon as possible, allowing the JVM to schedule more virtual threads."))}M.isMDXComponent=!0}}]);
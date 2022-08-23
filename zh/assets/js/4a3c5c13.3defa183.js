"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[2278],{7069:function(a,e,t){t.r(e),t.d(e,{assets:function(){return x},contentTitle:function(){return S},default:function(){return A},frontMatter:function(){return D},metadata:function(){return P},toc:function(){return M}});var r=t(3117),n=t(102),o=t(7294),l=t(3905),u=t(3012),m=t(7906),i=t(295),d=t(3252),k=t(3184),c=t(3816),v=t(9877),s=t(2360),C=t(3457),p=t(4750),f=t(8261),w=t(1519),h=function(a){var e=a.type,t=a.locale,r=(0,o.useState)("OPS"!==e),n=r[0],l=r[1],u=(0,o.useCallback)((function(a,e){l(e)}),[]);return o.createElement(v.Z,null,o.createElement(s.Z,{value:"chart",label:"zh"===t?"\u56fe\u8868":"Chart",default:!0},"OPS"===e&&o.createElement(o.Fragment,null,o.createElement(C.Z,null,o.createElement(p.Z,{control:o.createElement(f.Z,{value:n,onChange:u}),label:"zh"===t?"\u663e\u793a\u539f\u751fJDBC\u6307\u6807":"Show native JDBC metrics"})),o.createElement(w.Z,null)),"OPS"==e?o.createElement(J,{rows:O,scale:N,showJdbc:n}):o.createElement(J,{rows:B,scale:E,showJdbc:n})),o.createElement(s.Z,{value:"data",label:"zh"===t?"\u6570\u636e":"Data"},"OPS"===e?o.createElement(b,{rows:O,valueTitle:"Ops/s"}):o.createElement(b,{rows:B,valueTitle:"Time(\u03bcs)"})))},J=function(a){var e=a.rows,t=a.scale,r=a.showJdbc;return o.createElement(u.Chart,{filter:r?void 0:{framework:function(a){return!a.startsWith("JDBC")}},height:400,padding:"auto",data:e,scale:t,autoFit:!0},o.createElement(u.Interval,{adjust:[{type:"dodge",marginRatio:0}],color:"framework",position:"dataCount*value"}),o.createElement(u.Axis,{name:"value",title:!0}),o.createElement(u.Legend,{position:"left"}),o.createElement(u.Tooltip,{shared:!0}),o.createElement(u.Interaction,{type:"active-region"}))},b=function(a){var e=a.rows,t=a.valueTitle;return o.createElement(m.Z,null,o.createElement(k.Z,null,o.createElement(c.Z,null,o.createElement(d.Z,null,"Framework"),o.createElement(d.Z,null,"Data count"),o.createElement(d.Z,null,t))),o.createElement(i.Z,null,e.map((function(a){return o.createElement(c.Z,{key:a.framework+"-"+a.dataCount},o.createElement(d.Z,null,a.framework),o.createElement(d.Z,null,a.dataCount),o.createElement(d.Z,null,a.value))}))))},N={dataCount:{alias:"Data count"},value:{alias:"Ops/s"}},E={dataCount:{alias:"Data count"},value:{alias:"Time(\u03bcs)"}},g=[{framework:"JDBC(ColIndex)",dataCount:"10",value:694486.3419038279},{framework:"JDBC(ColIndex)",dataCount:"20",value:489680.5448583284},{framework:"JDBC(ColIndex)",dataCount:"50",value:264206.57460154407},{framework:"JDBC(ColIndex)",dataCount:"100",value:150515.12108999112},{framework:"JDBC(ColIndex)",dataCount:"200",value:79814.62925392622},{framework:"JDBC(ColIndex)",dataCount:"500",value:34010.917810255225},{framework:"JDBC(ColIndex)",dataCount:"1000",value:17344.997133330337},{framework:"JDBC(ColName)",dataCount:"10",value:344937.67467185546},{framework:"JDBC(ColName)",dataCount:"20",value:255724.33711667656},{framework:"JDBC(ColName)",dataCount:"50",value:136098.32519053208},{framework:"JDBC(ColName)",dataCount:"100",value:73348.19440278952},{framework:"JDBC(ColName)",dataCount:"200",value:41339.312973684755},{framework:"JDBC(ColName)",dataCount:"500",value:17442.958296769142},{framework:"JDBC(ColName)",dataCount:"1000",value:8851.357551662291},{framework:"Jimmer",dataCount:"10",value:205436.22983583916},{framework:"Jimmer",dataCount:"20",value:106671.0555555964},{framework:"Jimmer",dataCount:"50",value:47416.202602896825},{framework:"Jimmer",dataCount:"100",value:24356.49940496951},{framework:"Jimmer",dataCount:"200",value:12446.816603773445},{framework:"Jimmer",dataCount:"500",value:5043.100504924187},{framework:"Jimmer",dataCount:"1000",value:2591.485543202771},{framework:"MyBatis",dataCount:"10",value:76883.8077420863},{framework:"MyBatis",dataCount:"20",value:43902.97281806945},{framework:"MyBatis",dataCount:"50",value:19651.20228086318},{framework:"MyBatis",dataCount:"100",value:10282.527318386752},{framework:"MyBatis",dataCount:"200",value:5077.795477849398},{framework:"MyBatis",dataCount:"500",value:2183.073394058281},{framework:"MyBatis",dataCount:"1000",value:1077.022064385448},{framework:"JPA(Hibernate)",dataCount:"10",value:102079.99683590114},{framework:"JPA(Hibernate)",dataCount:"20",value:59571.8912591726},{framework:"JPA(Hibernate)",dataCount:"50",value:25702.786559093773},{framework:"JPA(Hibernate)",dataCount:"100",value:13414.569591700454},{framework:"JPA(Hibernate)",dataCount:"200",value:6950.7789429148015},{framework:"JPA(Hibernate)",dataCount:"500",value:2767.8983414626673},{framework:"JPA(Hibernate)",dataCount:"1000",value:1394.4277761346852},{framework:"JPA(EclipseLink)",dataCount:"10",value:64196.05849313359},{framework:"JPA(EclipseLink)",dataCount:"20",value:33404.26805171479},{framework:"JPA(EclipseLink)",dataCount:"50",value:13366.495947592284},{framework:"JPA(EclipseLink)",dataCount:"100",value:6463.698802395989},{framework:"JPA(EclipseLink)",dataCount:"200",value:3372.576544558393},{framework:"JPA(EclipseLink)",dataCount:"500",value:1336.372383001008},{framework:"JPA(EclipseLink)",dataCount:"1000",value:633.8655654287536},{framework:"JOOQ",dataCount:"10",value:57330.45419894458},{framework:"JOOQ",dataCount:"20",value:32028.461417183466},{framework:"JOOQ",dataCount:"50",value:14314.38547680882},{framework:"JOOQ",dataCount:"100",value:7502.648309980643},{framework:"JOOQ",dataCount:"200",value:3763.6724215854615},{framework:"JOOQ",dataCount:"500",value:1526.2019510344485},{framework:"JOOQ",dataCount:"1000",value:819.9420644410151},{framework:"Exposed",dataCount:"10",value:90907.0038077874},{framework:"Exposed",dataCount:"20",value:56193.792591162506},{framework:"Exposed",dataCount:"50",value:27223.72463486148},{framework:"Exposed",dataCount:"100",value:16082.303029792809},{framework:"Exposed",dataCount:"200",value:8729.672525241589},{framework:"Exposed",dataCount:"500",value:3339.056688942882},{framework:"Exposed",dataCount:"1000",value:1706.3058644786568},{framework:"Nutz",dataCount:"10",value:83494.05338964531},{framework:"Nutz",dataCount:"20",value:40717.14800799643},{framework:"Nutz",dataCount:"50",value:17614.258653514986},{framework:"Nutz",dataCount:"100",value:8964.770360354232},{framework:"Nutz",dataCount:"200",value:5027.467397793748},{framework:"Nutz",dataCount:"500",value:1752.6091274012165},{framework:"Nutz",dataCount:"1000",value:907.6214231393163},{framework:"ObjectiveSQL",dataCount:"10",value:59785.4698873157},{framework:"ObjectiveSQL",dataCount:"20",value:31686.481503294886},{framework:"ObjectiveSQL",dataCount:"50",value:12956.668448069668},{framework:"ObjectiveSQL",dataCount:"100",value:6533.652114072017},{framework:"ObjectiveSQL",dataCount:"200",value:2962.704281294185},{framework:"ObjectiveSQL",dataCount:"500",value:1368.3867839343445},{framework:"ObjectiveSQL",dataCount:"1000",value:595.9637213597805},{framework:"Spring data jdbc",dataCount:"10",value:19928.66836787829},{framework:"Spring data jdbc",dataCount:"20",value:10393.084996776615},{framework:"Spring data jdbc",dataCount:"50",value:4066.7112309312906},{framework:"Spring data jdbc",dataCount:"100",value:2129.3697205181825},{framework:"Spring data jdbc",dataCount:"200",value:1035.8068663111264},{framework:"Spring data jdbc",dataCount:"500",value:429.52774464126685},{framework:"Spring data jdbc",dataCount:"1000",value:195.7003347507818},{framework:"Ktorm",dataCount:"10",value:16307.248701814044},{framework:"Ktorm",dataCount:"20",value:8927.241426690754},{framework:"Ktorm",dataCount:"50",value:4071.264434393904},{framework:"Ktorm",dataCount:"100",value:2096.8860331106425},{framework:"Ktorm",dataCount:"200",value:1057.9144168099972},{framework:"Ktorm",dataCount:"500",value:374.82800208842036},{framework:"Ktorm",dataCount:"1000",value:176.26688013436913}],O=g.map((function(a){return Object.assign({},a,{value:Math.round(a.value)})})),B=g.map((function(a){return Object.assign({},a,{value:Math.round(1e6/a.value)})})),j=["components"],D={sidebar_position:2,title:"Benchmark"},S=void 0,P={unversionedId:"benchmark",id:"benchmark",title:"Benchmark",description:"\u57fa\u51c6\u6d4b\u8bd5\u7684\u6e90\u4ee3\u7801\u5728\u6b64\uff0c\u4f7f\u7528H2\u7684\u5185\u5b58\u6570\u636e\u5e93\uff0c\u65e0\u9700\u4efb\u4f55\u73af\u5883\u51c6\u5907\u5373\u53ef\u76f4\u63a5\u8fd0\u884c\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/benchmark.mdx",sourceDirName:".",slug:"/benchmark",permalink:"/jimmer/zh/docs/benchmark",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/benchmark.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Benchmark"},sidebar:"tutorialSidebar",previous:{title:"\u6559\u7a0b\u4ecb\u7ecd",permalink:"/jimmer/zh/docs/intro"},next:{title:"jimmer-core\u5b50\u9879\u76ee",permalink:"/jimmer/zh/docs/jimmer-core/"}},x={},M=[{value:"\u62a5\u544a",id:"\u62a5\u544a",level:2},{value:"\u6bcf\u79d2\u64cd\u4f5c\u6b21\u6570",id:"\u6bcf\u79d2\u64cd\u4f5c\u6b21\u6570",level:3},{value:"\u6bcf\u6b21\u64cd\u4f5c\u8017\u65f6",id:"\u6bcf\u6b21\u64cd\u4f5c\u8017\u65f6",level:2},{value:"\u5b9e\u73b0\u539f\u5219",id:"\u5b9e\u73b0\u539f\u5219",level:3},{value:"\u4ef7\u503c",id:"\u4ef7\u503c",level:2}],y={toc:M};function A(a){var e=a.components,t=(0,n.Z)(a,j);return(0,l.kt)("wrapper",(0,r.Z)({},y,t,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u57fa\u51c6\u6d4b\u8bd5\u7684\u6e90\u4ee3\u7801",(0,l.kt)("a",{parentName:"p",href:"https://github.com/babyfish-ct/jimmer/tree/main/benchmark"},"\u5728\u6b64"),"\uff0c\u4f7f\u7528H2\u7684\u5185\u5b58\u6570\u636e\u5e93\uff0c\u65e0\u9700\u4efb\u4f55\u73af\u5883\u51c6\u5907\u5373\u53ef\u76f4\u63a5\u8fd0\u884c\u3002"),(0,l.kt)("h2",{id:"\u62a5\u544a"},"\u62a5\u544a"),(0,l.kt)("h3",{id:"\u6bcf\u79d2\u64cd\u4f5c\u6b21\u6570"},"\u6bcf\u79d2\u64cd\u4f5c\u6b21\u6570"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6a2a\u5750\u6807\u8868\u793a\u6bcf\u6b21\u4ece\u6570\u636e\u5e93\u4e2d\u67e5\u8be2\u5230\u7684\u6570\u636e\u5bf9\u8c61\u7684\u6570\u91cf\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u7eb5\u5750\u6807\u8868\u793a\u6bcf\u79d2\u64cd\u4f5c\u6b21\u6570\u3002")),(0,l.kt)(h,{type:"OPS",locale:"zh",mdxType:"Benchmark"}),(0,l.kt)("h2",{id:"\u6bcf\u6b21\u64cd\u4f5c\u8017\u65f6"},"\u6bcf\u6b21\u64cd\u4f5c\u8017\u65f6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6a2a\u5750\u6807\u8868\u793a\u6bcf\u6b21\u4ece\u6570\u636e\u5e93\u4e2d\u67e5\u8be2\u5230\u7684\u6570\u636e\u5bf9\u8c61\u7684\u6570\u91cf\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u7eb5\u5750\u6807\u8868\u793a\u6bcf\u6b21\u64cd\u4f5c\u8017\u65f6(\u5fae\u79d2)\u3002")),(0,l.kt)(h,{type:"TIME",locale:"zh",mdxType:"Benchmark"}),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u7531\u4e8eSpring\u79fb\u9664\u4e86\u5bf9OpenJPA\u7684\u652f\u6301\uff0c\u672c\u57fa\u51c6\u6d4b\u8bd5\u4e0d\u5305\u542b",(0,l.kt)("inlineCode",{parentName:"p"},"JPA(OpenJPA)")))),(0,l.kt)("h3",{id:"\u5b9e\u73b0\u539f\u5219"},"\u5b9e\u73b0\u539f\u5219"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u6240\u6709\u6846\u67b6\u7981\u7528\u7f13\u5b58")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u6240\u6709\u6846\u67b6\u5173\u95ed\u65e5\u5fd7")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u6240\u6709\u6846\u67b6\u6bcf\u6b21\u90fd\u6253\u5f00\u548c\u5173\u95ed\u8fde\u63a5/\u4f1a\u8bdd\uff0c\u4e0d\u505a\u5171\u4eab\uff1b\u9760\u8fde\u63a5\u6c60\u4fdd\u8bc1\u6027\u80fd\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u63a5\u5165Spring\u7684\u8fde\u63a5\u7ba1\u7406\u673a\u5236\u3002\u56e0\u4e0d\u540c\u6846\u67b6API\u4e0d\u540c\uff0c\u5b9e\u73b0\u65b9\u6cd5\u7565\u6709\u4e0d\u540c\u3002"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6709\u7684\u4f7f\u7528",(0,l.kt)("a",{parentName:"li",href:"https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/jdbc/datasource/DataSourceUtils.html"},"DataSourceUtils"),"\u7684getConnection\u548creleaseConnection"),(0,l.kt)("li",{parentName:"ul"},"\u6709\u7684\u4f7f\u7528",(0,l.kt)("a",{parentName:"li",href:"https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/jdbc/datasource/TransactionAwareDataSourceProxy.html"},"TransactionAwareDataSourceProxy"))),(0,l.kt)("p",{parentName:"li"},"\u4f46\u6700\u7ec8\u6548\u679c\u90fd\u4e00\u6837")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4e0d\u4f7f\u7528\u4e8b\u52a1"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Exposed"),"\u6bd4\u8f83\u7279\u6b8a\uff0c\u5176API\u5f3a\u5236\u8981\u6c42\u4e8b\u52a1\uff0c\u7ed9\u4e88\u5047\u7684\u5b9e\u73b0\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4f7f\u7528\u5d4c\u5165\u7684H2\u5185\u6570\u636e\u5e93\uff0c\u5c3d\u53ef\u80fd\u538b\u7f29\u6570\u636e\u5e93\u7684\u6d88\u8017\uff0c\u51f8\u663eORM\u672c\u8eab\u7684\u6027\u80fd\uff0c\u5373\u6620\u5c04\u7684\u6027\u80fd\u3002"))),(0,l.kt)("h2",{id:"\u4ef7\u503c"},"\u4ef7\u503c"),(0,l.kt)("p",null,"\u4e00\u79cd\u5e38\u89c1\u7684\u89c2\u70b9\uff1aORM\u672c\u8eab\u7684\u6027\u80fd\u4e0d\u91cd\u8981\uff0c\u5b9e\u9645\u9879\u76ee\u4e2d\uff0c\u6570\u636e\u5e93\u5e76\u975e\u6709\u5185\u5d4c\u5185\u5b58\u6570\u636e\u5e93\uff0c\u6240\u4ee5ORM\u672c\u8eab\u8017\u65f6\u76f8\u5bf9\u4e8e\u6570\u636e\u5e93\u8017\u65f6\u53ef\u5ffd\u7565\u4e0d\u8ba1\u3002"),(0,l.kt)("p",null,"\u53cd\u9a73\uff1aJava19\u53d1\u5e03\u540e\uff0c\u652f\u6301\u865a\u62df\u7ebf\u7a0b\u3002ORM\u80fd\u5c3d\u5feb\u5b8c\u6210\u6620\u5c04\uff0c\u53ef\u4ee5\u8ba9JVM\u53bb\u8c03\u5ea6\u66f4\u591a\u7684\u865a\u62df\u7ebf\u7a0b\u3002"))}A.isMDXComponent=!0}}]);
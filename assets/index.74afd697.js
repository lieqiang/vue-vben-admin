import{d as e,h as t,o as r,i as a,aL as s,j as i}from"./index.1913eb94.js";import"./index.1268fe0c.js";import"./_stringToArray.5cb95166.js";import"./domUtils.0258b8bd.js";import"./index.18ad5efb.js";import"./index.783d6b86.js";import"./index.bdf910cd.js";import"./CheckOutlined.c53a211d.js";import"./index.f94b9e9e.js";import{_ as o}from"./index.db3d08b6.js";import"./FullscreenOutlined.6d692539.js";import"./RightOutlined.2ee7001c.js";import"./SettingOutlined.e940c981.js";import"./useTimeout.9da07028.js";import"./index.8f8f83b3.js";import"./animation.3a00ce01.js";import"./useScrollTo.e2974638.js";import"./useAttrs.693b4d98.js";import"./useWindowSizeFn.eef1c2fa.js";import"./index.5acc6e7c.js";import"./uuid.a6cec785.js";import"./download.71135c62.js";import"./useForm.7ec6aae7.js";import"./useSortable.a3f8f546.js";import"./useExpose.1d20c03d.js";import{u as n}from"./useTable.6cfc8531.js";import{_ as d}from"./index.de3a5f99.js";import"./usePageContext.c6a4ca7d.js";import{D as m}from"./index.c25b0be6.js";import{refundSchema as c,refundData as p,personSchema as u,personData as l,refundTableData as j,refundTableSchema as f,refundTimeTableSchema as b,refundTimeTableData as g}from"./data.9bb12a5f.js";var x=e({components:{Description:m,BasicTable:o,PageWrapper:d},setup(){const[e]=n({title:"退货商品",dataSource:j,columns:f,pagination:!1,showIndexColumn:!1,scroll:{y:300},showSummary:!0,summaryFunc:function(e){let t=0,r=0;return e.forEach((e=>{t+=e.t5,r+=e.t6})),[{t1:"总计",t5:t,t6:r}]}}),[t]=n({title:"退货进度",columns:b,pagination:!1,dataSource:g,showIndexColumn:!1,scroll:{y:300}});return{registerRefundTable:e,registerTimeTable:t,refundSchema:c,refundData:p,personSchema:u,personData:l}}});const h=s("data-v-7da24e93"),T=h(((e,s,o,n,d,m)=>{const c=t("Description"),p=t("a-divider"),u=t("BasicTable"),l=t("PageWrapper");return r(),a(l,{title:"基础详情页",contentBackground:""},{default:h((()=>[i(c,{size:"middle",title:"退款申请",bordered:!1,column:3,data:e.refundData,schema:e.refundSchema},null,8,["data","schema"]),i(p),i(c,{size:"middle",title:"用户信息",bordered:!1,column:3,data:e.personData,schema:e.personSchema},null,8,["data","schema"]),i(p),i(u,{onRegister:e.registerRefundTable},null,8,["onRegister"]),i(p),i(u,{onRegister:e.registerTimeTable},null,8,["onRegister"])])),_:1})}));x.render=T,x.__scopeId="data-v-7da24e93";export default x;
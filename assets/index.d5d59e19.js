import{aO as e,aP as o,d as t,r as a,L as l,e as r,cr as s,cs as d,h as i,o as n,i as m,j as c,bz as u,m as p}from"./index.50e8b5dc.js";import{a as g}from"./index.1be6d046.js";import{_ as b}from"./index.705ab234.js";import"./index.e6824e1f.js";import"./domUtils.7471ed8a.js";import"./_stringToArray.e20740db.js";import"./RightOutlined.656a20b0.js";import"./index.bed999aa.js";import"./useTimeout.7a6cd11a.js";import"./useScrollTo.5a3db6eb.js";import"./animation.0475f0b1.js";import"./index.99adaa1b.js";import"./index.c5668e8a.js";import"./RightOutlined.bad02d13.js";import"./types.b7a21d2a.js";import"./isEqual.9055b911.js";import"./toInteger.d50f777e.js";import"./DownOutlined.511c1f73.js";import"./index.7c2f4390.js";import"./usePageContext.555c8737.js";import"./transButton.469a8bab.js";const v=e((()=>o((()=>import("./index.7e94688e.js")),["/assets/index.7e94688e.js","/assets/index.50e8b5dc.js","/assets/index.94daecd6.css","/assets/download.9c02ebfa.js"])));var f=t({components:{CollapseContainer:g,QrCode:v,PageWrapper:b},setup(){const e=a(null);return{qrCodeUrl:"https://www.vvbin.cn",LogoImg:l,download:function(){const o=r(e);o&&o.download("文件名")},qrRef:e}}});const j=u("data-v-40460a35");s("data-v-40460a35");const x={class:"flex flex-wrap"},q=p(" 下载 "),C=c("div",{class:"msg"},"(在线logo会导致图片跨域，需要下载图片需要自行解决跨域问题)",-1);d();const _=j(((e,o,t,a,l,r)=>{const s=i("QrCode"),d=i("CollapseContainer"),u=i("a-button"),p=i("PageWrapper");return n(),m(p,{title:"二维码组件使用示例"},{default:j((()=>[c("div",x,[c(d,{title:"基础示例",canExpan:!0,class:"text-center mb-6 qrcode-demo-item"},{default:j((()=>[c(s,{value:e.qrCodeUrl},null,8,["value"])])),_:1}),c(d,{title:"渲染成img标签示例",class:"text-center mb-6 qrcode-demo-item"},{default:j((()=>[c(s,{value:e.qrCodeUrl,tag:"img"},null,8,["value"])])),_:1}),c(d,{title:"配置样式示例",class:"text-center mb-6 qrcode-demo-item"},{default:j((()=>[c(s,{value:e.qrCodeUrl,options:{color:{dark:"#55D187"}}},null,8,["value"])])),_:1}),c(d,{title:"本地logo示例",class:"text-center mb-6 qrcode-demo-item"},{default:j((()=>[c(s,{value:e.qrCodeUrl,logo:e.LogoImg},null,8,["value","logo"])])),_:1}),c(d,{title:"在线logo示例",class:"text-center mb-6 qrcode-demo-item"},{default:j((()=>[c(s,{value:e.qrCodeUrl,logo:"https://vebn.oss-cn-beijing.aliyuncs.com/vben/logo.png",options:{color:{dark:"#55D187"}}},null,8,["value"])])),_:1}),c(d,{title:"logo配置示例",class:"text-center mb-6 qrcode-demo-item"},{default:j((()=>[c(s,{value:e.qrCodeUrl,logo:{src:"https://vebn.oss-cn-beijing.aliyuncs.com/vben/logo.png",logoSize:.2,borderSize:.05,borderRadius:50,bgColor:"blue"}},null,8,["value","logo"])])),_:1}),c(d,{title:"下载示例",class:"text-center qrcode-demo-item"},{default:j((()=>[c(s,{value:e.qrCodeUrl,ref:"qrRef",logo:e.LogoImg},null,8,["value","logo"]),c(u,{class:"mb-2",type:"primary",onClick:e.download},{default:j((()=>[q])),_:1},8,["onClick"]),C])),_:1}),c(d,{title:"配置大小示例",class:"text-center qrcode-demo-item"},{default:j((()=>[c(s,{value:e.qrCodeUrl,width:300},null,8,["value"])])),_:1})])])),_:1})}));f.render=_,f.__scopeId="data-v-40460a35";export default f;
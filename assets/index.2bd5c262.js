import{d as e,cf as t,r as a,q as n,$ as s,E as r,e as i,h as o,o as l,i as c,j as m,bw as d}from"./index.06f3ee29.js";import{g as p}from"./domUtils.8545414a.js";import{u as f}from"./useWindowSizeFn.c470727d.js";import"./vendor.0d1494f4.js";import"./_stringToArray.de50b038.js";var g=e({name:"IFrame",components:{Spin:t},props:{frameSrc:{type:String}},setup(){const e=a(!1),t=a(50),o=a(window.innerHeight),l=a(null);function c(){const e=i(l);if(!e)return;let{top:a}=p(e);a+=20,t.value=a,o.value=window.innerHeight-a;const n=document.documentElement.clientHeight-a;e.style.height=`${n}px`}function m(){e.value=!1,c()}return f(c,150,{immediate:!0}),n((()=>{e.value=!0,r((()=>{const e=i(l);e&&(e.attachEvent?e.attachEvent("onload",(()=>{m()})):e.onload=()=>{m()})}))})),{getWrapStyle:s((()=>({height:`${i(o)}px`}))),loading:e,frameRef:l}}});const u=d("data-v-50ce1274"),v=u(((e,t,a,n,s,r)=>{const i=o("Spin");return l(),c("div",{class:"iframe-page",style:e.getWrapStyle},[m(i,{spinning:e.loading,size:"large",style:e.getWrapStyle},{default:u((()=>[m("iframe",{src:e.frameSrc,class:"iframe-page__main",ref:"frameRef"},null,8,["src"])])),_:1},8,["spinning","style"])],4)}));g.render=v,g.__scopeId="data-v-50ce1274";export default g;
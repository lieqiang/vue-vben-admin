import{d as e,r as a,h as i,o as t,i as n,j as s,l as c,aL as d}from"./index.1913eb94.js";import{_ as l}from"./index.de3a5f99.js";import"./usePageContext.c6a4ca7d.js";import{_ as r}from"./index.b018fabd.js";var o=e({components:{ClickOutSide:r,PageWrapper:l},setup(){const e=a("Click");return{innerClick:function(){e.value="Click Inner"},handleClickOutside:function(){e.value="Click Out Side"},text:e}}});const u=d("data-v-7a637453"),C=u(((e,a,d,l,r,o)=>{const C=i("ClickOutSide"),k=i("PageWrapper");return t(),n(k,{title:"点内外部触发事件"},{default:u((()=>[s(C,{onClickOutside:e.handleClickOutside,class:"flex justify-center"},{default:u((()=>[s("div",{onClick:a[1]||(a[1]=(...a)=>e.innerClick&&e.innerClick(...a)),class:"demo-box"},c(e.text),1)])),_:1},8,["onClickOutside"])])),_:1})}));o.render=C,o.__scopeId="data-v-7a637453";export default o;
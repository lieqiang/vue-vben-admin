import{d as e,bD as t,bE as a,h as s,o,i,j as n,aL as d,m as r}from"./index.02d1965c.js";import{_ as l}from"./index.15b9a23c.js";import"./_stringToArray.2de96d92.js";import"./domUtils.be3edd39.js";import"./index.fb8d6796.js";import"./index.08e233ae.js";import"./index.daf19870.js";import"./index.e7faca86.js";import"./FullscreenOutlined.247db61e.js";import"./RightOutlined.d46e4d56.js";import"./useTimeout.5f562c84.js";import"./index.46df4a2f.js";import"./animation.218b0c8c.js";import"./useScrollTo.b870f612.js";import"./useAttrs.c1394557.js";import"./useWindowSizeFn.9d82b09a.js";import"./index.41a5a7ee.js";import"./uuid.a6cec785.js";import"./download.cbcf9755.js";import{u as p}from"./useForm.c6ae5496.js";import{step1Schemas as u}from"./data.2505cb7f.js";var c=e({components:{BasicForm:l},emits:["next"],setup(e,{emit:t}){const[a,{validate:s}]=p({labelWidth:100,schemas:u,actionColOptions:{span:14},showResetButton:!1,submitButtonOptions:{text:"下一步"},submitFunc:async function(){try{const e=await s();t("next",e)}catch(e){}}});return{register:a}}});const m=d("data-v-e9fd1520");t("data-v-e9fd1520");const f={class:"step1"},j={class:"step1-form"},v=r(" 支付宝 "),b=r(" 银联 "),x=n("h3",null,"说明",-1),h=n("h4",null,"转账到支付宝账户",-1),_=n("p",null," 如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。 ",-1),y=n("h4",null,"转账到银行卡",-1),g=n("p",null," 如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。 ",-1);a();const F=m(((e,t,a,d,r,l)=>{const p=s("a-select-option"),u=s("a-select"),c=s("a-input"),F=s("a-input-group"),U=s("BasicForm"),w=s("a-divider");return o(),i("div",f,[n("div",j,[n(U,{onRegister:e.register},{fac:m((({model:e,field:t})=>[n(F,{compact:""},{default:m((()=>[n(u,{value:e.pay,"onUpdate:value":t=>e.pay=t,class:"pay-select"},{default:m((()=>[n(p,{value:"zfb"},{default:m((()=>[v])),_:1}),n(p,{value:"yl"},{default:m((()=>[b])),_:1})])),_:2},1032,["value","onUpdate:value"]),n(c,{class:"pay-input",value:e[t],"onUpdate:value":a=>e[t]=a},null,8,["value","onUpdate:value"])])),_:2},1024)])),_:1},8,["onRegister"])]),n(w),x,h,_,y,g])}));c.render=F,c.__scopeId="data-v-e9fd1520";export default c;
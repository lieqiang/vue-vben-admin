import{d as e,bS as i,g as t,h as s,o,i as r,w as d,j as a}from"./index.9a6e95d8.js";import"./SearchOutlined.0274a049.js";import"./index.fa1a1838.js";import"./DownOutlined.7914d6be.js";import"./CheckOutlined.9adc9f3e.js";import"./index.a3a1e8cf.js";import"./EyeOutlined.301bca7e.js";import{_ as n}from"./index.55de31d8.js";import"./index.3970d233.js";import"./index.b4107331.js";import"./colors.2afe0cf1.js";import"./index.78d832da.js";import"./RightOutlined.a7006a51.js";import"./index.074cf711.js";import"./types.3a3ca354.js";import"./toInteger.858f2e82.js";import"./uuid.d595bce3.js";import"./findIndex.2287226b.js";import"./_stringToArray.c244b21e.js";import"./domUtils.4bf6def6.js";import"./isEqual.b9304b29.js";import"./_baseProperty.74f89655.js";import"./index.734b408e.js";import"./index.47b09016.js";import"./UpOutlined.2c90282e.js";import"./LeftOutlined.7f33cb51.js";import"./index.a42a59eb.js";import"./responsiveObserve.c545f1cc.js";import"./index.c13f1716.js";import"./index.5182ab2a.js";import"./index.dbe75ef4.js";import"./index.c729d376.js";import"./index.b3ef3e6d.js";import"./index.167971e0.js";import"./index.b10dc2f3.js";import"./index.5f0ec28f.js";import"./transButton.ee7e6c60.js";import"./util.61e89dd9.js";import{a as m}from"./index.3322d17d.js";import{_ as p}from"./index.dc0ec1cc.js";import"./index.f7e9d603.js";import"./FullscreenOutlined.ae5dc3db.js";import"./RightOutlined.ffcbe06b.js";import"./useTimeout.fa08b045.js";import"./index.7069600f.js";import"./index.8d91dadc.js";import"./animation.5c0b7ef6.js";import"./useScrollTo.162b59ba.js";import"./useAttrs.2a07db8f.js";import"./useWindowSizeFn.fed78a59.js";import"./download.8ba6c906.js";import"./usePageContext.dfe3de60.js";import{T as l}from"./index.40c6bffc.js";const c=[{field:"title",component:"Input",label:"title",defaultValue:"defaultValue",rules:[{required:!0}]},{field:"tinymce",component:"Input",label:"tinymce",defaultValue:"defaultValue",rules:[{required:!0}],render:({model:e,field:t})=>i(l,{value:e[t],onChange:i=>{e[t]=i}})}];var j=e({components:{BasicForm:n,CollapseContainer:m,PageWrapper:p},setup(){const{createMessage:e}=t();return{schemas:c,handleSubmit:i=>{e.success("click search,values:"+JSON.stringify(i))}}}});j.render=function(e,i,t,n,m,p){const l=s("BasicForm"),c=s("CollapseContainer"),j=s("PageWrapper");return o(),r(j,{title:"富文本嵌入表单示例"},{default:d((()=>[a(c,{title:"富文本表单"},{default:d((()=>[a(l,{labelWidth:100,schemas:e.schemas,actionColOptions:{span:24},onSubmit:e.handleSubmit},null,8,["schemas","onSubmit"])])),_:1})])),_:1})};export default j;
import{d as e,a9 as t,h as i,o as s,i as r,ab as o,ac as n,j as a}from"./index.c87ef19b.js";import"./_stringToArray.c34e650e.js";import"./domUtils.f3b3d188.js";import"./index.1cf93748.js";import"./index.d8e90589.js";import{C as c}from"./CheckOutlined.f2efb4c6.js";import"./RightOutlined.74dbef9c.js";import"./SettingOutlined.1d975297.js";import"./useTimeout.04cd7f25.js";import"./index.953003a9.js";import"./animation.c5c54528.js";import"./useScrollTo.a963268e.js";import"./useAttrs.c62c06aa.js";import"./useHeaderSetting.d129089a.js";import{b as d}from"./index.8d540b04.js";var p=e({name:"ThemePicker",components:{CheckOutlined:c},props:{colorList:{type:Array,defualt:[]},event:{type:Number,default:()=>{}},def:{type:String}},setup(e){const{prefixCls:i}=t("setting-theme-picker");return{prefixCls:i,handleClick:function(t){e.event&&d(e.event,t)}}}});p.render=function(e,t,c,d,p,l){const m=i("CheckOutlined");return s(),r("div",{class:e.prefixCls},[(s(!0),r(o,null,n(e.colorList||[],(t=>(s(),r("span",{key:t,onClick:i=>e.handleClick(t),class:[`${e.prefixCls}__item`,{[`${e.prefixCls}__item--active`]:e.def===t}],style:{background:t}},[a(m)],14,["onClick"])))),128))],2)};export default p;
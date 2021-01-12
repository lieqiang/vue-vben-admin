import{d as e,bo as a,aa as o,a7 as s,a8 as r,a6 as t,a2 as n,a9 as l,u as d,q as i,f as c,aq as p,h as m,o as u,i as f,w as g,j as h,k as x,l as C}from"./index.c87ef19b.js";import{h as w}from"./header.3041aac3.js";import{d as D}from"./useHeaderSetting.d129089a.js";import{D as _}from"./siteSetting.2daee9f0.js";var I=e({name:"UserDropdown",components:{Dropdown:a,Menu:o,MenuItem:s((()=>r((()=>__import__("./DropMenuItem.9450b7dd.js")),["/assets/DropMenuItem.9450b7dd.js","/assets/index.c87ef19b.js","/assets/index.a64a500f.css"]))),MenuDivider:o.Divider,Icon:t},props:{theme:n.oneOf(["dark","light"])},setup(){const{prefixCls:e}=l("header-user-dropdown"),{t:a}=d(),{getShowDoc:o}=D();return{prefixCls:e,t:a,getUserInfo:i((()=>{const{realName:e="",desc:a}=c.getUserInfoState||{};return{realName:e,desc:a}})),handleMenuClick:function(e){switch(e.key){case"loginOut":c.confirmLoginOut();break;case"doc":p(_)}},getShowDoc:o,headerImg:w}}});I.render=function(e,a,o,s,r,t){const n=m("MenuItem"),l=m("MenuDivider"),d=m("Menu"),i=m("Dropdown");return u(),f(i,{placement:"bottomLeft",overlayClassName:`${e.prefixCls}-dropdown-overlay`},{overlay:g((()=>[h(d,{onClick:e.handleMenuClick},{default:g((()=>[e.getShowDoc?(u(),f(n,{key:"doc",text:e.t("layout.header.dropdownItemDoc"),icon:"gg:loadbar-doc"},null,8,["text"])):x("",!0),h(l),h(n,{key:"loginOut",text:e.t("layout.header.dropdownItemLoginOut"),icon:"carbon:power"},null,8,["text"])])),_:1},8,["onClick"])])),default:g((()=>[h("span",{class:[e.prefixCls,`${e.prefixCls}--${e.theme}`]},[h("img",{class:`${e.prefixCls}__header`,src:e.headerImg},null,10,["src"]),h("span",{class:`${e.prefixCls}__info`},[h("span",{class:`${e.prefixCls}__name anticon`},C(e.getUserInfo.realName),3)],2)],2)])),_:1},8,["overlayClassName"])};export default I;
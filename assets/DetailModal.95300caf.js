import{d as t,u as e,h as s,o as i,i as o,w as r,j as a,a0 as n}from"./index.c87ef19b.js";import"./_stringToArray.c34e650e.js";import"./domUtils.f3b3d188.js";import"./index.1cf93748.js";import{_ as m}from"./index.4ac4bb42.js";import"./FullscreenOutlined.27e35813.js";import"./RightOutlined.74dbef9c.js";import"./useTimeout.04cd7f25.js";import"./index.953003a9.js";import"./animation.c5c54528.js";import"./useScrollTo.a963268e.js";import"./useAttrs.c62c06aa.js";import"./useWindowSizeFn.2447d2a1.js";import{D as c}from"./index.ff1607c3.js";import{u as d}from"./useDescription.54be4faa.js";import{getDescSchema as p}from"./data.73e6d8a6.js";var l=t({name:"ErrorLogDetailModal",components:{BasicModal:m,Description:c},props:{info:{type:Object,default:null}},setup(){const{t:t}=e(),[s]=d({column:2,schema:p()});return{register:s,useI18n:e,t:t}}});l.render=function(t,e,m,c,d,p){const l=s("Description"),u=s("BasicModal");return i(),o(u,n({width:800,title:t.t("sys.errorLog.tableActionDesc")},t.$attrs),{default:r((()=>[a(l,{data:t.info,onRegister:t.register},null,8,["data","onRegister"])])),_:1},16,["title"])};export default l;
import{d as o,b2 as t,a7 as e,a8 as i,u as s,h as n,o as r,i as a,j as d,w as l}from"./index.02d1965c.js";import"./_stringToArray.2de96d92.js";import"./domUtils.be3edd39.js";import"./index.daf19870.js";import{b as c}from"./index.e7faca86.js";import"./FullscreenOutlined.247db61e.js";import{L as m}from"./LockOutlined.0b0113bb.js";import"./RightOutlined.d46e4d56.js";import"./useTimeout.5f562c84.js";import"./index.46df4a2f.js";import"./animation.218b0c8c.js";import"./useScrollTo.b870f612.js";import"./useAttrs.c1394557.js";import"./useWindowSizeFn.9d82b09a.js";var p=o({name:"FullScreen",components:{LockOutlined:m,Tooltip:t,LockAction:e((()=>i((()=>__import__("./LockModal.881350f0.js")),["/assets/LockModal.881350f0.js","/assets/LockModal.c2a09df5.css","/assets/index.02d1965c.js","/assets/index.17037a8f.css","/assets/index.15b9a23c.js","/assets/index.be284e2b.css","/assets/domUtils.be3edd39.js","/assets/_stringToArray.2de96d92.js","/assets/index.fb8d6796.js","/assets/index.08e233ae.js","/assets/index.daf19870.js","/assets/index.76e45014.css","/assets/RightOutlined.d46e4d56.js","/assets/useTimeout.5f562c84.js","/assets/index.46df4a2f.js","/assets/index.121e7eba.css","/assets/useScrollTo.b870f612.js","/assets/animation.218b0c8c.js","/assets/index.e7faca86.js","/assets/index.ca1a8c37.css","/assets/FullscreenOutlined.247db61e.js","/assets/useAttrs.c1394557.js","/assets/useWindowSizeFn.9d82b09a.js","/assets/index.41a5a7ee.js","/assets/uuid.a6cec785.js","/assets/download.cbcf9755.js","/assets/header.ab446760.js","/assets/useForm.c6ae5496.js"])))},setup(){const{t:o}=s(),[t,{openModal:e}]=c();return{t:o,register:t,handleLock:function(){e(!0)}}}});p.render=function(o,t,e,i,s,c){const m=n("LockOutlined"),p=n("Tooltip"),u=n("LockAction");return r(),a("span",{onClick:t[1]||(t[1]=(...t)=>o.handleLock&&o.handleLock(...t))},[d(p,{title:o.t("layout.header.tooltipLock"),placement:"bottom",mouseEnterDelay:.5},{default:l((()=>[d(m)])),_:1},8,["title","mouseEnterDelay"]),d(u,{onRegister:o.register},null,8,["onRegister"])])};export default p;
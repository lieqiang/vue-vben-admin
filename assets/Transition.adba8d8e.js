import{d as e,h as t,o,i as a,w as r,j as s}from"./index.c87ef19b.js";import"./_stringToArray.c34e650e.js";import"./domUtils.f3b3d188.js";import{e as n,S as i}from"./index.1cf93748.js";import"./RightOutlined.74dbef9c.js";import"./useTimeout.04cd7f25.js";import"./index.953003a9.js";import"./animation.c5c54528.js";import"./useScrollTo.a963268e.js";import{_ as m}from"./index.67171b6d.js";import"./usePageContext.3ea03ee4.js";import d from"./TargetContent.b53ca193.js";var p=e({components:{LazyContainer:n,TargetContent:d,Skeleton:i,PageWrapper:m}});const c={class:"lazy-base-demo-wrap"},l=s("h1",null,"向下滚动",-1),f={class:"lazy-base-demo-box"};p.render=function(e,n,i,m,d,p){const j=t("TargetContent"),u=t("LazyContainer"),b=t("PageWrapper");return o(),a(b,{title:"懒加载自定义动画示例",content:"懒加载组件显示动画"},{default:r((()=>[s("div",c,[l,s("div",f,[s(u,{transitionName:"custom"},{default:r((()=>[s(j)])),_:1})])])])),_:1})};export default p;
var o=Object.assign;import{cT as e,e as a,d as n,aH as t,r as i,a as s,x as l,h as p,aP as r,az as u,o as d,i as c,w as g,j as m,m as f}from"./index.c87ef19b.js";import{_ as y}from"./index.67171b6d.js";import"./usePageContext.3ea03ee4.js";function L(o){let n,t=document.body;if(Reflect.has(o,"target")||Reflect.has(o,"props")){const e=o;n=e.props||{},t=e.target||document.body}else n=o;const i=e(n);return[()=>{const o=a(t);o&&i.open(o)},()=>{i.close()}]}var C=n({components:{Loading:t,PageWrapper:y},setup(){const e=i(null),a=i(!1),n=s({absolute:!1,loading:!1,tip:"加载中..."}),[t,p]=L({tip:"加载中..."}),[r,u]=L({target:e,props:{tip:"加载中...",absolute:!0}});function d(o){n.absolute=o,n.loading=!0,setTimeout((()=>{n.loading=!1}),2e3)}return o({openCompFullLoading:function(){d(!1)},openFnFullLoading:function(){t(),setTimeout((()=>{p()}),2e3)},openFnWrapLoading:function(){r(),setTimeout((()=>{u()}),2e3)},openCompAbsolute:function(){d(!0)},wrapEl:e,loadingRef:a,openDirectiveLoading:function(){a.value=!0,setTimeout((()=>{a.value=!1}),2e3)}},l(n))}});const b=f("全屏 Loading"),k=f("容器内 Loading"),F=f("全屏 Loading"),_=f("容器内 Loading"),v=f(" 打开指令Loading ");C.render=function(o,e,a,n,t,i){const s=p("a-alert"),l=p("a-button"),f=p("Loading"),y=p("PageWrapper"),L=r("loading");return u((d(),c(y,{"loading-tip":"加载中...",title:"Loading组件示例"},{default:g((()=>[m(s,{message:"组件方式"}),m(l,{class:"my-4 mr-4",type:"primary",onClick:o.openCompFullLoading},{default:g((()=>[b])),_:1},8,["onClick"]),m(l,{class:"my-4",type:"primary",onClick:o.openCompAbsolute},{default:g((()=>[k])),_:1},8,["onClick"]),m(f,{loading:o.loading,absolute:o.absolute,tip:o.tip},null,8,["loading","absolute","tip"]),m(s,{message:"函数方式"}),m(l,{class:"my-4 mr-4",type:"primary",onClick:o.openFnFullLoading},{default:g((()=>[F])),_:1},8,["onClick"]),m(l,{class:"my-4",type:"primary",onClick:o.openFnWrapLoading},{default:g((()=>[_])),_:1},8,["onClick"]),m(s,{message:"指令方式"}),m(l,{class:"my-4 mr-4",type:"primary",onClick:o.openDirectiveLoading},{default:g((()=>[v])),_:1},8,["onClick"])])),_:1},512)),[[L,o.loadingRef]])};export default C;
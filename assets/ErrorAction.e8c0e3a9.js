import{d as t,b2 as o,c_ as e,u as r,ag as a,q as n,P as s,cX as u,h as i,o as l,i as d,w as c,j as m}from"./index.1913eb94.js";import{B as f}from"./BugOutlined.f973a350.js";var g=t({name:"ErrorAction",components:{BugOutlined:f,Tooltip:o,Badge:e},setup(){const{t:t}=r(),{push:o}=a();return{t:t,getCount:n((()=>u.getErrorListCountState)),handleToErrorList:function(){o(s.ERROR_LOG_PAGE).then((()=>{u.commitErrorListCountState(0)}))}}}});g.render=function(t,o,e,r,a,n){const s=i("BugOutlined"),u=i("Badge"),f=i("Tooltip");return l(),d(f,{title:t.t("layout.header.tooltipErrorLog"),placement:"bottom",mouseEnterDelay:.5,onClick:t.handleToErrorList},{default:c((()=>[m(u,{count:t.getCount,offset:[0,10],dot:"",overflowCount:99},{default:c((()=>[m(s)])),_:1},8,["count"])])),_:1},8,["title","mouseEnterDelay","onClick"])};export default g;
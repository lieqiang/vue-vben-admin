import{d as t,ay as e,r as s,az as a,aA as l,u as n,$ as i,e as r,aB as o,j as u,M as T,aC as b}from"./index.06f3ee29.js";import{R as p}from"./index.5df069f5.js";import"./vendor.0d1494f4.js";var c=t({name:"ErrorPage",props:{status:{type:Number,default:e.PAGE_NOT_FOUND},title:{type:String},subTitle:{type:String},full:{type:Boolean,default:!1}},setup(t){const c=s(new Map),{query:d}=a(),x=b(),E=l(),{t:f}=n(),y=i((()=>{const{status:e}=d,{status:s}=t;return Number(e)||s})),_=i((()=>r(c).get(r(y)))),O=f("sys.exception.backLogin"),N=f("sys.exception.backHome");return r(c).set(e.PAGE_NOT_ACCESS,{title:"403",status:`${e.PAGE_NOT_ACCESS}`,subTitle:f("sys.exception.subTitle403"),btnText:t.full?O:N,handler:()=>t.full?x(o.BASE_LOGIN):x()}),r(c).set(e.PAGE_NOT_FOUND,{title:"404",status:`${e.PAGE_NOT_FOUND}`,subTitle:f("sys.exception.subTitle404"),btnText:t.full?O:N,handler:()=>t.full?x(o.BASE_LOGIN):x()}),r(c).set(e.ERROR,{title:"500",status:`${e.ERROR}`,subTitle:f("sys.exception.subTitle500"),btnText:N,handler:()=>x()}),r(c).set(e.PAGE_NOT_DATA,{title:f("sys.exception.noDataTitle"),subTitle:"",btnText:f("common.redo"),handler:()=>E(),icon:"/assets/no-data.7a45acb3.png"}),r(c).set(e.NET_WORK_ERROR,{title:f("sys.exception.networkErrorTitle"),subTitle:f("sys.exception.networkErrorSubTitle"),btnText:"Refresh",handler:()=>E(),icon:"/assets/net-work.5d408b05.png"}),()=>{const{title:e,subTitle:s,btnText:a,icon:l,handler:n,status:i}=r(_)||{};return u(p,{class:"exception ",status:i,title:t.title||e,"sub-title":t.subTitle||s},{extra:()=>a&&u(T,{type:"primary",onClick:n},{default:()=>a}),icon:()=>l?u("img",{src:l},null):null})}}});export default c;
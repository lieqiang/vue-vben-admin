import{cA as r,d as e,r as o,u as i,ai as t,S as s,by as a,cX as n,h as l,o as c,i as d,ab as m,ac as u,az as f,aA as p,j,w as b,m as g,l as x}from"./index.1913eb94.js";import{f as E}from"./index.1268fe0c.js";import"./_stringToArray.5cb95166.js";import"./domUtils.0258b8bd.js";import"./index.18ad5efb.js";import"./index.783d6b86.js";import"./index.bdf910cd.js";import"./CheckOutlined.c53a211d.js";import{b as y}from"./index.f94b9e9e.js";import{_ as R}from"./index.db3d08b6.js";import"./FullscreenOutlined.6d692539.js";import"./RightOutlined.2ee7001c.js";import"./SettingOutlined.e940c981.js";import"./useTimeout.9da07028.js";import"./index.8f8f83b3.js";import"./animation.3a00ce01.js";import"./useScrollTo.e2974638.js";import"./useAttrs.693b4d98.js";import"./useWindowSizeFn.eef1c2fa.js";import"./index.5acc6e7c.js";import"./uuid.a6cec785.js";import"./download.71135c62.js";import"./useForm.7ec6aae7.js";import"./useSortable.a3f8f546.js";import"./useExpose.1d20c03d.js";import{u as T}from"./useTable.6cfc8531.js";import"./index.c25b0be6.js";import"./useDescription.3fd4be7a.js";import{getColumns as A}from"./data.e386014b.js";import h from"./DetailModal.825fc022.js";var w;(w||(w={})).Error="/error";var k=e({name:"ErrorHandler",components:{DetailModal:h,BasicTable:R,TableAction:E},setup(){const e=o(),l=o([]),{t:c}=i(),[d,{setTableData:m}]=T({title:c("sys.errorLog.tableTitle"),columns:A(),actionColumn:{width:80,title:"Action",dataIndex:"action",slots:{customRender:"action"}}}),[u,{openModal:f}]=y();return t((()=>n.getErrorInfoState),(r=>{s((()=>{m(a(r))}))}),{immediate:!0}),{register:d,registerModal:u,handleDetail:function(r){e.value=r,f(!0)},fireVueError:function(){throw new Error("fire vue error!")},fireResourceError:function(){l.value.push(`${(new Date).getTime()}.png`)},fireAjaxError:async function(){await r.request({url:w.Error,method:"GET"})},imgListRef:l,rowInfoRef:e,t:c}}});const C={class:"p-4"};k.render=function(r,e,o,i,t,s){const a=l("DetailModal"),n=l("a-button"),E=l("TableAction"),y=l("BasicTable");return c(),d("div",C,[(c(!0),d(m,null,u(r.imgListRef,(r=>f((c(),d("img",{key:r,src:r},null,8,["src"])),[[p,!1]]))),128)),j(a,{info:r.rowInfoRef,onRegister:r.registerModal},null,8,["info","onRegister"]),j(y,{onRegister:r.register,class:"error-handle-table"},{toolbar:b((()=>[j(n,{onClick:r.fireVueError,type:"primary"},{default:b((()=>[g(x(r.t("sys.errorLog.fireVueError")),1)])),_:1},8,["onClick"]),j(n,{onClick:r.fireResourceError,type:"primary"},{default:b((()=>[g(x(r.t("sys.errorLog.fireResourceError")),1)])),_:1},8,["onClick"]),j(n,{onClick:r.fireAjaxError,type:"primary"},{default:b((()=>[g(x(r.t("sys.errorLog.fireAjaxError")),1)])),_:1},8,["onClick"])])),action:b((({record:e})=>[j(E,{actions:[{label:r.t("sys.errorLog.tableActionDesc"),onClick:r.handleDetail.bind(null,e)}]},null,8,["actions"])])),_:1},8,["onRegister"])])};export default k;
import{d as e,r as t,h as s,o,i as a,w as i,j as r,ab as c,ac as d,m as n}from"./index.02d1965c.js";import"./index.15b9a23c.js";import"./_stringToArray.2de96d92.js";import"./domUtils.be3edd39.js";import"./index.fb8d6796.js";import"./index.08e233ae.js";import"./index.daf19870.js";import"./CheckOutlined.bd4e8418.js";import"./index.e7faca86.js";import{_ as m}from"./index.7e005ddd.js";import"./FullscreenOutlined.247db61e.js";import"./RightOutlined.d46e4d56.js";import"./SettingOutlined.b000a1ab.js";import"./useTimeout.5f562c84.js";import"./index.46df4a2f.js";import"./animation.218b0c8c.js";import"./useScrollTo.b870f612.js";import"./useAttrs.c1394557.js";import"./useWindowSizeFn.9d82b09a.js";import"./index.41a5a7ee.js";import"./uuid.a6cec785.js";import"./download.cbcf9755.js";import"./useForm.c6ae5496.js";import"./useSortable.8c19a0dd.js";import"./useExpose.0eb8f918.js";import{I as u}from"./index.c3f0cc24.js";import{_ as l}from"./index.5c3eb61c.js";import"./usePageContext.91d46251.js";var p=e({components:{BasicTable:m,ImpExcel:u,PageWrapper:l},setup(){const e=t([]);return{loadDataSuccess:function(t){e.value=[];for(const s of t){const{header:t,results:o,meta:{sheetName:a}}=s,i=[];for(const e of t)i.push({title:e,dataIndex:e});e.value.push({title:a,dataSource:o,columns:i})}},tableListRef:e}}});const j=n("导入Excel");p.render=function(e,t,n,m,u,l){const p=s("a-button"),f=s("ImpExcel"),b=s("BasicTable"),x=s("PageWrapper");return o(),a(x,{title:"excel数据导入示例"},{default:i((()=>[r(f,{onSuccess:e.loadDataSuccess},{default:i((()=>[r(p,{class:"m-3"},{default:i((()=>[j])),_:1})])),_:1},8,["onSuccess"]),(o(!0),a(c,null,d(e.tableListRef,((e,t)=>(o(),a(b,{key:t,title:e.title,columns:e.columns,dataSource:e.dataSource},null,8,["title","columns","dataSource"])))),128))])),_:1})};export default p;
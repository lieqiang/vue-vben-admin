import{d as e,h as i,o as t,i as s,j as o}from"./index.c87ef19b.js";import"./index.e4b2ff9a.js";import"./_stringToArray.c34e650e.js";import"./domUtils.f3b3d188.js";import"./index.5018152e.js";import"./index.ca2b52a0.js";import"./index.1cf93748.js";import"./CheckOutlined.f2efb4c6.js";import"./index.4ac4bb42.js";import{_ as r}from"./index.ec8352c8.js";import"./FullscreenOutlined.27e35813.js";import"./RightOutlined.74dbef9c.js";import"./SettingOutlined.1d975297.js";import"./useTimeout.04cd7f25.js";import"./index.953003a9.js";import"./animation.c5c54528.js";import"./useScrollTo.a963268e.js";import"./useAttrs.c62c06aa.js";import"./useWindowSizeFn.2447d2a1.js";import"./index.ef3095a4.js";import"./uuid.a6cec785.js";import"./download.f5de5a15.js";import"./useForm.1ecf8423.js";import"./useSortable.12a7edb9.js";import"./useExpose.964f9e60.js";import{getBasicColumns as a,getTreeTableData as m}from"./tableData.7aa0192c.js";var c=e({components:{BasicTable:r},setup:()=>({columns:a(),data:m()})});const n={class:"p-4"};c.render=function(e,r,a,m,c,d){const p=i("BasicTable");return t(),s("div",n,[o(p,{rowSelection:{type:"checkbox"},title:"树形表格",titleHelpMessage:"树形组件不能和序列号列同时存在",columns:e.columns,dataSource:e.data,rowKey:"id",indentSize:20,isTreeTable:""},null,8,["columns","dataSource"])])};export default c;
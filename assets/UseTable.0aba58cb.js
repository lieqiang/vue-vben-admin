import{_ as e}from"./index.89f31739.js";import{getBasicColumns as t,getBasicShortColumns as i}from"./tableData.7aa0192c.js";import{d as o,g as s,h as n,o as a,i as c,j as r,w as l,m as d}from"./index.50e8b5dc.js";import{d as m}from"./table.6ab425e3.js";import{u as p}from"./useTable.f7427da6.js";import"./index.4d32c4f3.js";import"./SearchOutlined.f21918b7.js";import"./DownOutlined.511c1f73.js";import"./CheckOutlined.6b085d0a.js";import"./index.83e0220c.js";import"./index.049f6bbf.js";import"./responsiveObserve.c545f1cc.js";import"./index.b8a80e42.js";import"./findIndex.b67caeba.js";import"./isEqual.9055b911.js";import"./_baseProperty.74f89655.js";import"./toInteger.d50f777e.js";import"./index.c1a51e2c.js";import"./index.b4d537fa.js";import"./index.581cccd4.js";import"./UpOutlined.9e8a689d.js";import"./index.93fd3c0b.js";import"./EyeOutlined.82f0228d.js";import"./index.1eb09ce2.js";import"./colors.ecead0c8.js";import"./RightOutlined.bad02d13.js";import"./index.c5668e8a.js";import"./types.b7a21d2a.js";import"./Tree.3f8e42fc.js";import"./util.69d03ed7.js";import"./useAttrs.69eb42c1.js";import"./index.bed999aa.js";import"./index.1cccff52.js";import"./uuid.ea3aa4d9.js";import"./index.42611e40.js";import"./index.da8886dc.js";import"./useTimeout.7a6cd11a.js";import"./useWindowSizeFn.0f9e7345.js";import"./index.1be6d046.js";import"./index.e6824e1f.js";import"./domUtils.7471ed8a.js";import"./_stringToArray.e20740db.js";import"./RightOutlined.656a20b0.js";import"./useScrollTo.5a3db6eb.js";import"./animation.0475f0b1.js";import"./FullscreenOutlined.5c535d53.js";import"./index.d00232d0.js";import"./index.a4b4ad38.js";import"./index.b7a80bfd.js";import"./LeftOutlined.1c66b0ce.js";import"./download.9c02ebfa.js";import"./index.abeff14e.js";import"./zh_CN.8094f4d6.js";import"./CaretDownFilled.10f2064e.js";import"./scrollTo.c9242ea7.js";import"./transButton.469a8bab.js";import"./clickOutside.2cfeb44d.js";import"./useSortable.64f7b683.js";import"./CheckOutlined.3e897063.js";import"./SettingOutlined.85983b83.js";import"./useExpose.b44b7c0b.js";import"./useForm.e966d398.js";var u=o({components:{BasicTable:e},setup(){const{createMessage:e}=s(),[o,{setLoading:n,setColumns:a,getColumns:c,getDataSource:r,reload:l,getPaginationRef:d,setPagination:u,getSelectRows:f,getSelectRowKeys:j,setSelectedRowKeys:b,clearSelectedRowKeys:g}]=p({canResize:!0,title:"useTable示例",titleHelpMessage:"使用useTable调用表格内方法",api:m,columns:t(),rowKey:"id",showTableSetting:!0,rowSelection:{type:"checkbox"}});return{registerTable:o,changeLoading:function(){n(!0),setTimeout((()=>{n(!1)}),1e3)},changeColumns:function(){a(i())},reloadTable:function(){a(t()),l({page:1})},getColumn:function(){e.info("请在控制台查看！")},getTableData:function(){e.info("请在控制台查看！")},getPagination:function(){e.info("请在控制台查看！")},setPaginationInfo:function(){u({current:2}),l()},getSelectRowList:function(){e.info("请在控制台查看！")},getSelectRowKeyList:function(){e.info("请在控制台查看！")},setSelectedRowKeyList:function(){b(["0","1","2"])},clearSelect:function(){g()}}}});const f={class:"p-4"},j={class:"mb-4"},b=d("还原"),g=d("开启loading"),C=d("更改Columns"),k=d("获取Columns"),x=d("获取表格数据"),S=d("跳转到第2页"),w={class:"mb-4"},T=d("获取选中行"),R=d("获取选中行Key"),_=d("设置选中行"),y=d("清空选中行"),h=d("获取分页信息");u.render=function(e,t,i,o,s,d){const m=n("a-button"),p=n("BasicTable");return a(),c("div",f,[r("div",j,[r(m,{class:"mr-2",onClick:e.reloadTable},{default:l((()=>[b])),_:1},8,["onClick"]),r(m,{class:"mr-2",onClick:e.changeLoading},{default:l((()=>[g])),_:1},8,["onClick"]),r(m,{class:"mr-2",onClick:e.changeColumns},{default:l((()=>[C])),_:1},8,["onClick"]),r(m,{class:"mr-2",onClick:e.getColumn},{default:l((()=>[k])),_:1},8,["onClick"]),r(m,{class:"mr-2",onClick:e.getTableData},{default:l((()=>[x])),_:1},8,["onClick"]),r(m,{class:"mr-2",onClick:e.setPaginationInfo},{default:l((()=>[S])),_:1},8,["onClick"])]),r("div",w,[r(m,{class:"mr-2",onClick:e.getSelectRowList},{default:l((()=>[T])),_:1},8,["onClick"]),r(m,{class:"mr-2",onClick:e.getSelectRowKeyList},{default:l((()=>[R])),_:1},8,["onClick"]),r(m,{class:"mr-2",onClick:e.setSelectedRowKeyList},{default:l((()=>[_])),_:1},8,["onClick"]),r(m,{class:"mr-2",onClick:e.clearSelect},{default:l((()=>[y])),_:1},8,["onClick"]),r(m,{class:"mr-2",onClick:e.getPagination},{default:l((()=>[h])),_:1},8,["onClick"])]),r(p,{onRegister:e.registerTable},null,8,["onRegister"])])};export default u;
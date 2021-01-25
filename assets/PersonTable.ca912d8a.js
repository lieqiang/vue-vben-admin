import{_ as e,a as t}from"./index.89f31739.js";import{d as i,h as o,o as n,i as d,j as s,w as r,m as a}from"./index.50e8b5dc.js";import{g as l}from"./index.83e0220c.js";import{u as c}from"./useTable.f7427da6.js";import"./index.4d32c4f3.js";import"./SearchOutlined.f21918b7.js";import"./DownOutlined.511c1f73.js";import"./CheckOutlined.6b085d0a.js";import"./index.b8a80e42.js";import"./index.049f6bbf.js";import"./responsiveObserve.c545f1cc.js";import"./findIndex.b67caeba.js";import"./isEqual.9055b911.js";import"./_baseProperty.74f89655.js";import"./toInteger.d50f777e.js";import"./index.c5668e8a.js";import"./RightOutlined.bad02d13.js";import"./types.b7a21d2a.js";import"./index.abeff14e.js";import"./LeftOutlined.1c66b0ce.js";import"./zh_CN.8094f4d6.js";import"./CaretDownFilled.10f2064e.js";import"./uuid.ea3aa4d9.js";import"./util.69d03ed7.js";import"./EyeOutlined.82f0228d.js";import"./index.42611e40.js";import"./index.a4b4ad38.js";import"./index.bed999aa.js";import"./scrollTo.c9242ea7.js";import"./transButton.469a8bab.js";import"./RightOutlined.656a20b0.js";import"./clickOutside.2cfeb44d.js";import"./domUtils.7471ed8a.js";import"./_stringToArray.e20740db.js";import"./index.b4d537fa.js";import"./index.581cccd4.js";import"./UpOutlined.9e8a689d.js";import"./index.93fd3c0b.js";import"./useSortable.64f7b683.js";import"./index.da8886dc.js";import"./useTimeout.7a6cd11a.js";import"./useAttrs.69eb42c1.js";import"./useWindowSizeFn.0f9e7345.js";import"./index.1be6d046.js";import"./index.e6824e1f.js";import"./useScrollTo.5a3db6eb.js";import"./animation.0475f0b1.js";import"./FullscreenOutlined.5c535d53.js";import"./CheckOutlined.3e897063.js";import"./index.d00232d0.js";import"./SettingOutlined.85983b83.js";import"./useExpose.b44b7c0b.js";import"./useForm.e966d398.js";import"./index.c1a51e2c.js";import"./index.1eb09ce2.js";import"./colors.ecead0c8.js";import"./Tree.3f8e42fc.js";import"./index.1cccff52.js";import"./index.b7a80bfd.js";import"./download.9c02ebfa.js";const m=[{title:"成员姓名",dataIndex:"name",editRow:!0},{title:"工号",dataIndex:"no",editRow:!0},{title:"所属部门",dataIndex:"dept",editRow:!0}],p=[{name:"John Brown",no:"00001",dept:"New York No. 1 Lake Park"},{name:"John Brown2",no:"00002",dept:"New York No. 2 Lake Park"},{name:"John Brown3",no:"00003",dept:"New York No. 3Lake Park"}];var j=i({components:{BasicTable:e,EditTableHeaderIcon:t,TableAction:l},setup(){const[e,{getDataSource:t}]=c({columns:m,showIndexColumn:!1,dataSource:p,actionColumn:{width:160,title:"操作",dataIndex:"action",slots:{customRender:"action"}},pagination:!1});function i(e){var t;null==(t=e.onEdit)||t.call(e,!0)}function o(e){var i;if(null==(i=e.onEdit)||i.call(e,!1),e.isNew){const i=t(),o=i.findIndex((t=>t.key===e.key));i.splice(o,1)}}function n(e){var t;null==(t=e.onEdit)||t.call(e,!1,!0)}return{registerTable:e,handleEdit:i,createActions:function(e,t){return e.editable?[{label:"保存",onClick:n.bind(null,e,t)},{label:"取消",popConfirm:{title:"是否取消编辑",confirm:o.bind(null,e,t)}}]:[{label:"编辑",onClick:i.bind(null,e)},{label:"删除"}]},handleAdd:function(){t().push({name:"",no:"",dept:"",editable:!0,isNew:!0})},getDataSource:t}}});const b=a("新增成员");j.render=function(e,t,i,a,l,c){const m=o("TableAction"),p=o("BasicTable"),j=o("a-button");return n(),d("div",null,[s(p,{onRegister:e.registerTable},{action:r((({record:t,column:i})=>[s(m,{actions:e.createActions(t,i)},null,8,["actions"])])),_:1},8,["onRegister"]),s(j,{block:"",class:"mt-5",type:"dashed",onClick:e.handleAdd},{default:r((()=>[b])),_:1},8,["onClick"])])};export default j;
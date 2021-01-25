import{_ as e}from"./index.83e0220c.js";import{a as i}from"./index.1be6d046.js";import{_ as o}from"./index.705ab234.js";import{d as l,h as t,o as s,i as a,w as n,j as d,m as p}from"./index.50e8b5dc.js";import{u as r}from"./useForm.e966d398.js";import"./index.049f6bbf.js";import"./responsiveObserve.c545f1cc.js";import"./index.b8a80e42.js";import"./findIndex.b67caeba.js";import"./isEqual.9055b911.js";import"./_baseProperty.74f89655.js";import"./toInteger.d50f777e.js";import"./index.c1a51e2c.js";import"./index.4d32c4f3.js";import"./SearchOutlined.f21918b7.js";import"./DownOutlined.511c1f73.js";import"./CheckOutlined.6b085d0a.js";import"./index.b4d537fa.js";import"./index.581cccd4.js";import"./UpOutlined.9e8a689d.js";import"./index.93fd3c0b.js";import"./EyeOutlined.82f0228d.js";import"./index.1eb09ce2.js";import"./colors.ecead0c8.js";import"./RightOutlined.bad02d13.js";import"./index.c5668e8a.js";import"./types.b7a21d2a.js";import"./Tree.3f8e42fc.js";import"./util.69d03ed7.js";import"./useAttrs.69eb42c1.js";import"./index.bed999aa.js";import"./index.1cccff52.js";import"./uuid.ea3aa4d9.js";import"./index.42611e40.js";import"./index.da8886dc.js";import"./useTimeout.7a6cd11a.js";import"./useWindowSizeFn.0f9e7345.js";import"./FullscreenOutlined.5c535d53.js";import"./index.d00232d0.js";import"./index.a4b4ad38.js";import"./index.b7a80bfd.js";import"./LeftOutlined.1c66b0ce.js";import"./download.9c02ebfa.js";import"./domUtils.7471ed8a.js";import"./_stringToArray.e20740db.js";import"./index.e6824e1f.js";import"./RightOutlined.656a20b0.js";import"./useScrollTo.5a3db6eb.js";import"./animation.0475f0b1.js";import"./index.99adaa1b.js";import"./index.7c2f4390.js";import"./usePageContext.555c8737.js";import"./transButton.469a8bab.js";const c=[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},show:({values:e})=>!!e.field5},{field:"field2",component:"Input",label:"字段2",colProps:{span:8},ifShow:({values:e})=>!!e.field6},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8},dynamicDisabled:({values:e})=>!!e.field7},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},dynamicRules:({values:e})=>e.field8?[{required:!0,message:"字段4必填"}]:[],componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field11",component:"DatePicker",label:"字段11",colProps:{span:8}},{field:"field5",component:"Switch",label:"是否显示字段1(css控制)",colProps:{span:8},labelWidth:200},{field:"field6",component:"Switch",label:"是否显示字段2(dom控制)",colProps:{span:8},labelWidth:200},{field:"field7",component:"Switch",label:"是否禁用字段3",colProps:{span:8},labelWidth:200},{field:"field8",component:"Switch",label:"字段4是否必填",colProps:{span:8},labelWidth:200}],m=[{field:"f1",component:"Input",label:"F1",colProps:{span:12},labelWidth:200,componentProps:({formModel:e})=>({placeholder:"同步f2的值为f1",onChange:i=>{e.f2=i.target.value}})},{field:"f2",component:"Input",label:"F2",colProps:{span:12},labelWidth:200,componentProps:{disabled:!0}},{field:"f3",component:"Input",label:"F3",colProps:{span:12},labelWidth:200,componentProps:({formActionType:e,tableAction:i})=>({placeholder:"值改变时执行查询,查看控制台",onChange:async()=>{const{validate:i}=e;await i()}})}];var f=l({components:{BasicForm:e,CollapseContainer:i,PageWrapper:o},setup(){const[e,{setProps:i,updateSchema:o,appendSchemaByField:l,removeSchemaByFiled:t}]=r({labelWidth:120,schemas:c,actionColOptions:{span:24}}),[s]=r({labelWidth:120,schemas:m,actionColOptions:{span:24}});return{register:e,register1:s,schemas:c,setProps:i,changeLabel3:function(){o({field:"field3",label:"字段3 New"})},changeLabel34:function(){o([{field:"field3",label:"字段3 New++"},{field:"field4",label:"字段4 New++"}])},appendField:function(){l({field:"field10",label:"字段10",component:"Input",colProps:{span:8}},"field3")},deleteField:function(){t("field11")}}}});const b={class:"mb-4"},u=p("更改字段3label"),j=p("同时更改字段3,4label"),h=p("往字段3后面插入字段10"),x=p("删除字段11");f.render=function(e,i,o,l,p,r){const c=t("a-button"),m=t("BasicForm"),f=t("CollapseContainer"),P=t("PageWrapper");return s(),a(P,{title:"动态表单示例"},{default:n((()=>[d("div",b,[d(c,{onClick:e.changeLabel3,class:"mr-2"},{default:n((()=>[u])),_:1},8,["onClick"]),d(c,{onClick:e.changeLabel34,class:"mr-2"},{default:n((()=>[j])),_:1},8,["onClick"]),d(c,{onClick:e.appendField,class:"mr-2"},{default:n((()=>[h])),_:1},8,["onClick"]),d(c,{onClick:e.deleteField,class:"mr-2"},{default:n((()=>[x])),_:1},8,["onClick"])]),d(f,{title:"动态表单示例,动态根据表单内其他值改变"},{default:n((()=>[d(m,{onRegister:e.register},null,8,["onRegister"])])),_:1}),d(f,{class:"mt-5",title:"componentProps动态改变"},{default:n((()=>[d(m,{onRegister:e.register1},null,8,["onRegister"])])),_:1})])),_:1})};export default f;
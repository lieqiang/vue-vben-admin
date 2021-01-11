import{d as e,r as t,g as a,e as n,h as s,o as l,i as c,w as d,j as o,m as r}from"./index.02d1965c.js";import"./_stringToArray.2de96d92.js";import"./domUtils.be3edd39.js";import{a as i}from"./index.daf19870.js";import"./RightOutlined.d46e4d56.js";import"./useTimeout.5f562c84.js";import"./index.46df4a2f.js";import"./animation.218b0c8c.js";import"./useScrollTo.b870f612.js";import{_ as u}from"./index.5c3eb61c.js";import"./usePageContext.91d46251.js";import{B as p,t as f}from"./data.48458886.js";var m=e({components:{BasicTree:p,CollapseContainer:i,PageWrapper:u},setup(){const e=t(null),{createMessage:s}=a();function l(){const t=n(e);if(!t)throw new Error("tree is null!");return t}return{treeData:f,treeRef:e,handleLevel:function(e){l().filterByLevel(e)},handleSetCheckData:function(){l().setCheckedKeys(["0-0"])},handleGetCheckData:function(){const e=l().getCheckedKeys();s.success(JSON.stringify(e))},handleSetSelectData:function(){l().setSelectedKeys(["0-0"])},handleGetSelectData:function(){const e=l().getSelectedKeys();s.success(JSON.stringify(e))},handleSetExpandData:function(){l().setExpandedKeys(["0-0"])},handleGetExpandData:function(){const e=l().getExpandedKeys();s.success(JSON.stringify(e))},appendNodeByKey:function(e=null){l().insertNodeByKey({parentKey:e,node:{title:"新增节点",key:"2-2-2"},push:"push"})},deleteNodeByKey:function(e){l().deleteNodeByKey(e)},updateNodeByKey:function(e){l().updateNodeByKey(e,{title:"parent2-new"})}}}});const y={class:"mb-4"},C=r("显示到第2级"),h=r("显示到第1级"),k=r("设置勾选数据"),K=r("获取勾选数据"),D=r("设置选中数据"),S=r("获取选中数据"),_=r("设置展开数据"),B=r("获取展开数据"),g={class:"mb-4"},j=r("添加根节点"),x=r("添加在parent3内添加节点"),N=r("删除parent3节点"),b=r("更新parent2节点");m.render=function(e,t,a,n,r,i){const u=s("a-button"),p=s("BasicTree"),f=s("CollapseContainer"),m=s("PageWrapper");return l(),c(m,{title:"Tree函数操作示例",contentBackground:"",contentClass:"p-4"},{default:d((()=>[o("div",y,[o(u,{onClick:t[1]||(t[1]=t=>e.handleLevel(2)),class:"mr-2"},{default:d((()=>[C])),_:1}),o(u,{onClick:t[2]||(t[2]=t=>e.handleLevel(1)),class:"mr-2"},{default:d((()=>[h])),_:1}),o(u,{onClick:e.handleSetCheckData,class:"mr-2"},{default:d((()=>[k])),_:1},8,["onClick"]),o(u,{onClick:e.handleGetCheckData,class:"mr-2"},{default:d((()=>[K])),_:1},8,["onClick"]),o(u,{onClick:e.handleSetSelectData,class:"mr-2"},{default:d((()=>[D])),_:1},8,["onClick"]),o(u,{onClick:e.handleGetSelectData,class:"mr-2"},{default:d((()=>[S])),_:1},8,["onClick"]),o(u,{onClick:e.handleSetExpandData,class:"mr-2"},{default:d((()=>[_])),_:1},8,["onClick"]),o(u,{onClick:e.handleGetExpandData,class:"mr-2"},{default:d((()=>[B])),_:1},8,["onClick"])]),o("div",g,[o(u,{onClick:t[3]||(t[3]=t=>e.appendNodeByKey(null)),class:"mr-2"},{default:d((()=>[j])),_:1}),o(u,{onClick:t[4]||(t[4]=t=>e.appendNodeByKey("2-2")),class:"mr-2"},{default:d((()=>[x])),_:1}),o(u,{onClick:t[5]||(t[5]=t=>e.deleteNodeByKey("2-2")),class:"mr-2"},{default:d((()=>[N])),_:1}),o(u,{onClick:t[6]||(t[6]=t=>e.updateNodeByKey("1-1")),class:"mr-2"},{default:d((()=>[b])),_:1})]),o(f,{title:"函数操作",class:"mr-4",canExpan:!1,style:{width:"33%"}},{default:d((()=>[o(p,{treeData:e.treeData,ref:"treeRef",checkable:!0},null,8,["treeData"])])),_:1})])),_:1})};export default m;
import{d as e,bB as t,h as s,o,i as r,w as i,j as l,m as a}from"./index.89eaa474.js";import{I as n}from"./index.c01cefa1.js";import{a as c}from"./index.72bfb6c6.js";import{_ as m}from"./index.6a59b07e.js";import"./vendor.3b1829c7.js";import"./SearchOutlined.a793b9df.js";import"./EyeOutlined.b4c40e2a.js";import"./index.3b842216.js";import"./domUtils.3eaab504.js";import"./_stringToArray.9a50877f.js";import"./RightOutlined.f6122b3f.js";/* empty css              */import"./useTimeout.2438cbf6.js";import"./useScrollTo.95f5e655.js";import"./animation.80266c92.js";import"./index.e2fe5134.js";import"./index.81eb82f3.js";import"./EllipsisOutlined.d7ec650a.js";import"./types.8ffdb72a.js";import"./isEqual.0bcea136.js";import"./toInteger.e5f6d519.js";import"./DownOutlined.1abeee16.js";import"./index.7d0c3879.js";import"./usePageContext.43155b53.js";import"./transButton.31c0fca4.js";import"./ArrowLeftOutlined.d2d3a70b.js";var p=e({name:"TabsDemo",components:{CollapseContainer:c,PageWrapper:m,[n.name]:n},setup(){const{closeAll:e,closeLeft:s,closeRight:o,closeOther:r,closeCurrent:i,refreshPage:l}=t();return{closeAll:e,closeLeft:s,closeRight:o,closeOther:r,closeCurrent:i,refreshPage:l}}});const d=a(" 关闭所有 "),f=a(" 关闭左侧 "),u=a(" 关闭右侧 "),j=a(" 关闭其他 "),C=a(" 关闭当前 "),b=a(" 刷新当前 ");p.render=function(e,t,a,n,c,m){const p=s("a-input"),h=s("CollapseContainer"),g=s("a-button"),k=s("PageWrapper");return o(),r(k,{title:"标签页操作示例"},{default:i((()=>[l(h,{title:"在下面输入框输入文本,切换后回来内容会保存"},{default:i((()=>[l(p,{placeholder:"请输入"})])),_:1}),l(h,{class:"mt-4",title:"标签页操作"},{default:i((()=>[l(g,{class:"mr-2",onClick:e.closeAll},{default:i((()=>[d])),_:1},8,["onClick"]),l(g,{class:"mr-2",onClick:e.closeLeft},{default:i((()=>[f])),_:1},8,["onClick"]),l(g,{class:"mr-2",onClick:e.closeRight},{default:i((()=>[u])),_:1},8,["onClick"]),l(g,{class:"mr-2",onClick:e.closeOther},{default:i((()=>[j])),_:1},8,["onClick"]),l(g,{class:"mr-2",onClick:e.closeCurrent},{default:i((()=>[C])),_:1},8,["onClick"]),l(g,{class:"mr-2",onClick:e.refreshPage},{default:i((()=>[b])),_:1},8,["onClick"])])),_:1})])),_:1})};export default p;
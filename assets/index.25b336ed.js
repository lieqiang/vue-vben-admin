import{d as e,cp as a,d0 as t,d1 as s,bD as n,bE as o,h as r,o as d,i as c,aL as u,j as i,m}from"./index.c87ef19b.js";import{_ as l}from"./index.67171b6d.js";import"./usePageContext.3ea03ee4.js";import p from"./CurrentPermissionMode.d42afa9a.js";var b=e({components:{Alert:a,CurrentPermissionMode:p,PageWrapper:l},setup(){const{changeMenu:e}=s();return{RoleEnum:t,changeMenu:e}}});const f=u("data-v-bcdaa5b4");n("data-v-bcdaa5b4");const g={class:"mt-4"},C=m(" 权限切换(请先切换权限模式为后台权限模式): "),M=m(" 获取用户id为1的菜单 "),_=m(" 获取用户id为2的菜单 ");o();const h=f(((e,a,t,s,n,o)=>{const u=r("CurrentPermissionMode"),m=r("Alert"),l=r("a-button"),p=r("a-button-group"),b=r("PageWrapper");return d(),c(b,{title:"后台权限示例",contentBackground:"",contentClass:"p-4",content:"目前mock了两组数据， id为1 和 2 具体返回的菜单可以在mock/sys/menu.ts内查看"},{default:f((()=>[i(u),i(m,{class:"mt-4",type:"info",message:"点击后请查看左侧菜单变化","show-icon":""}),i("div",g,[C,i(p,null,{default:f((()=>[i(l,{onClick:a[1]||(a[1]=a=>e.changeMenu("1"))},{default:f((()=>[M])),_:1}),i(l,{onClick:a[2]||(a[2]=a=>e.changeMenu("2"))},{default:f((()=>[_])),_:1})])),_:1})])])),_:1})}));b.render=h,b.__scopeId="data-v-bcdaa5b4";export default b;
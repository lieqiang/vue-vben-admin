import{d as e,u as o,aW as t,aQ as i,N as s,bj as r,e as a,bk as d,cr as n,cs as p,h as l,o as m,i as c,j as f,l as u,k as j,bz as b}from"./index.9a6e95d8.js";import"./DownOutlined.7914d6be.js";import"./isNumeric.2bec345d.js";import"./index.78d832da.js";import"./RightOutlined.a7006a51.js";import"./types.3a3ca354.js";import"./toInteger.858f2e82.js";import"./_stringToArray.c244b21e.js";import"./domUtils.4bf6def6.js";import"./isEqual.b9304b29.js";import"./index.9c3ae54a.js";import"./UpOutlined.2c90282e.js";import"./LeftOutlined.7f33cb51.js";import"./index.b3ef3e6d.js";import{L as x}from"./index.da9b3979.js";import"./useSortable.5798cc2d.js";import"./index.15bfcd7c.js";import"./index.3322d17d.js";import{G as _}from"./GithubFilled.ff2b44ff.js";import"./RightOutlined.ffcbe06b.js";import"./useTimeout.fa08b045.js";import"./index.7069600f.js";import"./index.8d91dadc.js";import"./animation.5c0b7ef6.js";import"./useScrollTo.162b59ba.js";import"./useWindowSizeFn.fed78a59.js";import"./clickOutside.24ffb9ff.js";import"./usePageContext.dfe3de60.js";import"./index.a1987a68.js";import"./useHeaderSetting.4addfec3.js";import{D as g,G as h,S as C}from"./siteSetting.2daee9f0.js";var F=e({name:"LayoutFooter",components:{Footer:x.Footer,GithubFilled:_},setup(){const{t:e}=o(),{getShowFooter:n}=d(),{currentRoute:p}=t(),{prefixCls:l}=i("layout-footer");return{getShowLayoutFooter:s((()=>{var e;return a(n)&&!(null==(e=a(p).meta)?void 0:e.hiddenFooter)})),prefixCls:l,t:e,DOC_URL:g,GITHUB_URL:h,SITE_URL:C,openWindow:r}}});const L=b("data-v-47369c67");n("data-v-47369c67");const S=f("div",null,"Copyright ©2020 Vben Admin",-1);p();const w=L(((e,o,t,i,s,r)=>{const a=l("GithubFilled"),d=l("Footer");return e.getShowLayoutFooter?(m(),c(d,{key:0,class:e.prefixCls},{default:L((()=>[f("div",{class:`${e.prefixCls}__links`},[f("a",{onClick:o[1]||(o[1]=o=>e.openWindow(e.SITE_URL))},u(e.t("layout.footer.onlinePreview")),1),f(a,{onClick:o[2]||(o[2]=o=>e.openWindow(e.GITHUB_URL)),class:`${e.prefixCls}__github`},null,8,["class"]),f("a",{onClick:o[3]||(o[3]=o=>e.openWindow(e.DOC_URL))},u(e.t("layout.footer.onlineDocument")),1)],2),S])),_:1},8,["class"])):j("",!0)}));F.render=w,F.__scopeId="data-v-47369c67";export default F;
var e=Object.assign;import{aJ as t,d as s,r as a,N as l,e as n,j as o,a_ as i,F as r,aH as d,cU as c,Q as u,bW as p}from"./index.9a6e95d8.js";import{a as f}from"./index.3322d17d.js";import{D as m}from"./index.ef0055a4.js";var b={useCollapse:t.bool.def(!0),title:t.string.def(""),size:t.oneOf(["small","default","middle",void 0]).def("small"),bordered:t.bool.def(!0),column:{type:[Number,Object],default:()=>({xxl:4,xl:3,lg:3,md:3,sm:2,xs:1})},collapseOptions:{type:Object,default:null},schema:{type:Array,default:()=>[]},data:t.object};function x(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!r(e)}var j=s({name:"Description",props:b,emits:["register"],setup(t,{attrs:s,slots:r,emit:b}){const j=a(null),v=l((()=>e(e({},t),n(j)))),y=l((()=>e(e({},n(v)),{title:void 0}))),h=l((()=>!!n(v).title)),g=l((()=>e({canExpand:!1},n(y).collapseOptions))),O=l((()=>e(e({},s),n(y))));function W({label:t,labelMinWidth:s,labelStyle:a}){if(!a&&!s)return t;const l=e(e({},a),{minWidth:`${s}px `});return o("div",{style:l},x(t)?t:{default:()=>[t]})}const D=()=>{let e;return o(m,d({class:"description"},n(O)),x(e=function(){const{schema:e}=n(y);return n(e).map((e=>{const{render:t,field:s,span:a,show:l,contentMinWidth:r}=e,{data:d}=n(y);if(l&&i(l)&&!l(d))return null;const c=()=>i(t)?t(null==d?void 0:d[s],d):n(d)&&n(d)[s],u=r;return o(m.Item,{label:W(e),key:s,span:a},{default:()=>r?o("div",{style:{minWidth:`${u}px`}},[c()]):c()})}))}())?e:{default:()=>[e]})};return b("register",{setDescProps:function(e){const t=c(n(j)||{},e);j.value=u(t)}}),()=>n(h)?(()=>{const e=t.useCollapse?D():o("div",null,[D()]);if(!t.useCollapse)return e;const{canExpand:s,helpMessage:a}=n(g),{title:l}=n(v);return o(f,{title:l,canExpan:s,helpMessage:a},{default:()=>e,action:()=>p(r,"action")})})():D()}});export{j as D};
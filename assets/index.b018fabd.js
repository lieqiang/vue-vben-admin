import{bk as e,r as t,bC as n,e as s,d as a,aI as i,o,i as r,b8 as c,bf as u}from"./index.1913eb94.js";var l=a({name:"ClickOutSide",emits:["mounted","clickOutside"],setup(a,{emit:o}){const r=t(null);return function(a,i,o="click"){if(e)return;const r=t(!1);function c(e){if("touchend"===e.type&&(r.value=!0),"click"===e.type&&s(r))return;const t=a.value;t&&e.target&&!t.contains(e.target)&&i(e)}n({el:document,name:"touchend",listener:c,options:!0}),n({el:document,name:o,listener:c,options:!0})}(r,(()=>{o("clickOutside")})),i((()=>{o("mounted")})),{wrap:r}}});const d={ref:"wrap"};l.render=function(e,t,n,s,a,i){return o(),r("div",d,[c(e.$slots,"default")],512)},u(l);export{l as _};
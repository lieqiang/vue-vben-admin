import{j as e,a7 as t,a8 as n,d as r,B as o,q as i,P as a,C as c,H as s,O as l,z as u,F as h,R as f,T as d,E as p,y as v}from"./index.2ebd7bfa.js";var y={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494z"}}]},name:"file",theme:"outlined"};function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g=function(r,o){var i=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){b(e,t,n[t])}))}return e}({},r,o.attrs);return e(n,t(i,{icon:y}),null)};function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function D(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!h(e)}function T(){}g.displayName="FileOutlined",g.inheritAttrs=!1;var C=r({name:"TreeNode",mixins:[o],inheritAttrs:!1,__ANT_TREE_NODE:!0,props:i({eventKey:a.oneOfType([a.string,a.number]),prefixCls:a.string,root:a.object,expanded:a.looseBool,selected:a.looseBool,checked:a.looseBool,loaded:a.looseBool,loading:a.looseBool,halfChecked:a.looseBool,title:a.any,pos:a.string,dragOver:a.looseBool,dragOverGapTop:a.looseBool,dragOverGapBottom:a.looseBool,isLeaf:a.looseBool,checkable:a.looseBool,selectable:a.looseBool,disabled:a.looseBool,disableCheckbox:a.looseBool,icon:a.any,dataRef:a.object,switcherIcon:a.any,label:a.any,value:a.any},{}),setup:function(){return{vcTree:c("vcTree",{}),vcTreeNode:c("vcTreeNode",{})}},data:function(){return this.children=null,{dragNodeHighlight:!1}},created:function(){s("vcTreeNode",this)},mounted:function(){var e=this.eventKey,t=this.vcTree.registerTreeNode;this.syncLoadData(this.$props),t&&t(e,this)},updated:function(){this.syncLoadData(this.$props)},beforeUnmount:function(){var e=this.eventKey,t=this.vcTree.registerTreeNode;t&&t(e,null)},methods:{onSelectorClick:function(e){(0,this.vcTree.onNodeClick)(e,this),this.isSelectable()?this.onSelect(e):this.onCheck(e)},onSelectorDoubleClick:function(e){(0,this.vcTree.onNodeDoubleClick)(e,this)},onSelect:function(e){if(!this.isDisabled()){var t=this.vcTree.onNodeSelect;e.preventDefault(),t(e,this)}},onCheck:function(e){if(!this.isDisabled()){var t=this.disableCheckbox,n=this.checked,r=this.vcTree.onNodeCheck;if(this.isCheckable()&&!t)e.preventDefault(),r(e,this,!n)}},onMouseEnter:function(e){(0,this.vcTree.onNodeMouseEnter)(e,this)},onMouseLeave:function(e){(0,this.vcTree.onNodeMouseLeave)(e,this)},onContextMenu:function(e){(0,this.vcTree.onNodeContextMenu)(e,this)},onDragStart:function(e){var t=this.vcTree.onNodeDragStart;e.stopPropagation(),this.setState({dragNodeHighlight:!0}),t(e,this);try{e.dataTransfer.setData("text/plain","")}catch(n){}},onDragEnter:function(e){var t=this.vcTree.onNodeDragEnter;e.preventDefault(),e.stopPropagation(),t(e,this)},onDragOver:function(e){var t=this.vcTree.onNodeDragOver;e.preventDefault(),e.stopPropagation(),t(e,this)},onDragLeave:function(e){var t=this.vcTree.onNodeDragLeave;e.stopPropagation(),t(e,this)},onDragEnd:function(e){var t=this.vcTree.onNodeDragEnd;e.stopPropagation(),this.setState({dragNodeHighlight:!1}),t(e,this)},onDrop:function(e){var t=this.vcTree.onNodeDrop;e.preventDefault(),e.stopPropagation(),this.setState({dragNodeHighlight:!1}),t(e,this)},onExpand:function(e){(0,this.vcTree.onNodeExpand)(e,this)},setSelectHandle:function(e){this.selectHandle=e},getNodeChildren:function(){var e=this.children,t=H(e);return e.length,t.length,t},getNodeState:function(){var e=this.expanded;return this.isLeaf2()?null:e?"open":"close"},isLeaf2:function(){var e=this.isLeaf,t=this.loaded,n=this.vcTree.loadData,r=0!==this.getNodeChildren().length;return!1!==e&&(e||!n&&!r||n&&t&&!r)},isDisabled:function(){var e=this.disabled,t=this.vcTree.disabled;return!1!==e&&!(!t&&!e)},isCheckable:function(){var e=this.$props.checkable,t=this.vcTree.checkable;return!(!t||!1===e)&&t},syncLoadData:function(e){var t=e.expanded,n=e.loading,r=e.loaded,o=this.vcTree,i=o.loadData,a=o.onNodeLoad;n||i&&t&&!this.isLeaf2()&&(0!==this.getNodeChildren().length||r||a(this))},isSelectable:function(){var e=this.selectable,t=this.vcTree.selectable;return"boolean"==typeof e?e:t},renderSwitcher:function(){var t=this.expanded,n=this.vcTree.prefixCls,r=l(this,"switcherIcon",{},!1)||l(this.vcTree,"switcherIcon",{},!1);if(this.isLeaf2())return e("span",{key:"switcher",class:u("".concat(n,"-switcher"),"".concat(n,"-switcher-noop"))},["function"==typeof r?r(S(S(S({},this.$props),this.$props.dataRef),{isLeaf:!0})):r]);var o=u("".concat(n,"-switcher"),"".concat(n,"-switcher_").concat(t?"open":"close"));return e("span",{key:"switcher",onClick:this.onExpand,class:o},["function"==typeof r?r(S(S(S({},this.$props),this.$props.dataRef),{isLeaf:!1})):r])},renderCheckbox:function(){var t=this.checked,n=this.halfChecked,r=this.disableCheckbox,o=this.vcTree.prefixCls,i=this.isDisabled(),a=this.isCheckable();if(!a)return null;var c="boolean"!=typeof a?a:null;return e("span",{key:"checkbox",class:u("".concat(o,"-checkbox"),t&&"".concat(o,"-checkbox-checked"),!t&&n&&"".concat(o,"-checkbox-indeterminate"),(i||r)&&"".concat(o,"-checkbox-disabled")),onClick:this.onCheck},D(c)?c:{default:function(){return[c]}})},renderIcon:function(){var t=this.loading,n=this.vcTree.prefixCls;return e("span",{key:"icon",class:u("".concat(n,"-iconEle"),"".concat(n,"-icon__").concat(this.getNodeState()||"docu"),t&&"".concat(n,"-icon_loading"))},null)},renderSelector:function(){var t,n=this.selected,r=this.loading,o=this.dragNodeHighlight,i=l(this,"icon",{},!1),a=this.vcTree,c=a.prefixCls,s=a.showIcon,h=a.icon,f=a.draggable,d=a.loadData,p=this.isDisabled(),v=l(this,"title",{},!1),y="".concat(c,"-node-content-wrapper");if(s){var b=i||h;t=b?e("span",{class:u("".concat(c,"-iconEle"),"".concat(c,"-icon__customize"))},["function"==typeof b?b(S(S({},this.$props),this.$props.dataRef)):b]):this.renderIcon()}else d&&r&&(t=this.renderIcon());var g=v,m=e("span",{class:"".concat(c,"-title")},g?["function"==typeof g?g(S(S({},this.$props),this.$props.dataRef)):g]:D("---")?"---":{default:function(){return["---"]}});return e("span",{key:"selector",ref:this.setSelectHandle,title:"string"==typeof v?v:"",class:u("".concat(y),"".concat(y,"-").concat(this.getNodeState()||"normal"),!p&&(n||o)&&"".concat(c,"-node-selected"),!p&&f&&"draggable"),draggable:!p&&f||void 0,"aria-grabbed":!p&&f||void 0,onMouseenter:this.onMouseEnter,onMouseleave:this.onMouseLeave,onContextmenu:this.onContextMenu,onClick:this.onSelectorClick,onDblclick:this.onSelectorDoubleClick,onDragstart:f?this.onDragStart:T},[t,m])},renderChildren:function(){var t=this.expanded,n=this.pos,r=this.vcTree,o=r.prefixCls,i=r.openTransitionName,a=r.openAnimation,c=r.renderTreeNode,s={};i?s=f(i):"object"===O(a)&&(s=S(S(S({},a),{css:!1}),s));var l,h=this.getNodeChildren();return 0===h.length?null:(t&&(l=e("ul",{class:u("".concat(o,"-child-tree"),t&&"".concat(o,"-child-tree-open")),"data-expanded":t,role:"group"},[R(h,(function(e,t){return c(e,t,n)}))])),e(d,s,D(l)?l:{default:function(){return[l]}}))}},render:function(){var t;this.children=p(this);var n=this.$props,r=n.dragOver,o=n.dragOverGapTop,i=n.dragOverGapBottom,a=n.isLeaf,c=n.expanded,s=n.selected,l=n.checked,u=n.halfChecked,h=n.loading,f=this.vcTree,d=f.prefixCls,v=f.filterTreeNode,y=f.draggable,b=this.isDisabled(),g=Q(S(S({},this.$props),this.$attrs)),O=this.$attrs,D=O.class,C=O.style;return e("li",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){k(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({class:(t={className:D},k(t,"".concat(d,"-treenode-disabled"),b),k(t,"".concat(d,"-treenode-switcher-").concat(c?"open":"close"),!a),k(t,"".concat(d,"-treenode-checkbox-checked"),l),k(t,"".concat(d,"-treenode-checkbox-indeterminate"),u),k(t,"".concat(d,"-treenode-selected"),s),k(t,"".concat(d,"-treenode-loading"),h),k(t,"drag-over",!b&&r),k(t,"drag-over-gap-top",!b&&o),k(t,"drag-over-gap-bottom",!b&&i),k(t,"filter-node",v&&v(this)),t),style:C,role:"treeitem",onDragenter:y?this.onDragEnter:T,onDragover:y?this.onDragOver:T,onDragleave:y?this.onDragLeave:T,onDrop:y?this.onDrop:T,onDragend:y?this.onDragEnd:T},g),[this.renderSwitcher(),this.renderCheckbox(),this.renderSelector(),this.renderChildren()])}});function x(e){return function(e){if(Array.isArray(e))return E(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||N(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(s){o=!0,i=s}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}(e,t)||N(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=N(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){c=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw i}}}}function N(e,t){if(e){if("string"==typeof e)return E(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?E(e,t):void 0}}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function P(e){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function L(){return(L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}C.isTreeNode=1;function M(e,t){var n=e.slice(),r=n.indexOf(t);return r>=0&&n.splice(r,1),n}function A(e,t){var n=e.slice();return-1===n.indexOf(t)&&n.push(t),n}function B(e){return e.split("-")}function $(e,t){return"".concat(e,"-").concat(t)}function I(e){return e.type&&e.type.isTreeNode}function H(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.filter(I)}function K(e){var t=v(e)||{},n=t.disabled,r=t.disableCheckbox,o=t.checkable;return!(!n&&!r)||!1===o}function _(e,t){!function n(r,o,i){var a=r?p(r):e,c=r?$(i.pos,o):0,s=H(a);if(r){var l=r.key;l||null!=l||(l=c);var u={node:r,index:o,pos:c,key:l,parentPos:i.node?i.pos:null};t(u)}s.forEach((function(e,t){n(e,t,{node:r,pos:c})}))}(null)}function R(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=e.map(t);return 1===n.length?n[0]:n}function z(e,t){var n=v(t),r=n.eventKey,o=n.pos,i=[];return _(e,(function(e){var t=e.key;i.push(t)})),i.push(r||o),i}function F(e,t){var n=e.clientY,r=t.selectHandle.getBoundingClientRect(),o=r.top,i=r.bottom,a=r.height,c=Math.max(.25*a,2);return n<=o+c?-1:n>=i-c?1:0}function G(e,t){if(e)return t.multiple?e.slice():e.length?[e[0]]:e}var V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return L(L({},e),{class:e.class||e.className,style:e.style,key:e.key})};function U(t,n){if(!t)return[];var r=(n||{}).processProps,o=void 0===r?V:r;return(Array.isArray(t)?t:[t]).map((function(t){var r,i=t.children,a=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(t,["children"]),c=U(i,n);return e(C,o(a),"function"==typeof(r=c)||"[object Object]"===Object.prototype.toString.call(r)&&!h(r)?c:{default:function(){return[c]}})}))}function q(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.initWrapper,r=t.processEntity,o=t.onProcessFinished,i=new Map,a=new Map,c={posEntities:i,keyEntities:a};return n&&(c=n(c)||c),_(e,(function(e){var t=e.node,n=e.index,o=e.pos,s=e.key,l=e.parentPos,u={node:t,index:n,key:s,pos:o};i.set(o,u),a.set(s,u),u.parent=i.get(l),u.parent&&(u.parent.children=u.parent.children||[],u.parent.children.push(u)),r&&r(u,c)})),o&&o(c),c}function W(e){if(!e)return null;var t;if(Array.isArray(e))t={checkedKeys:e,halfCheckedKeys:void 0};else{if("object"!==P(e))return null;t={checkedKeys:e.checked||void 0,halfCheckedKeys:e.halfChecked||void 0}}return t}function Y(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=new Map,i=new Map;function a(e){if(o.get(e)!==t){var r=n.get(e);if(r){var c=r.children,s=r.parent;if(!K(r.node)){var l=!0,u=!1;(c||[]).filter((function(e){return!K(e.node)})).forEach((function(e){var t=e.key,n=o.get(t),r=i.get(t);(n||r)&&(u=!0),n||(l=!1)})),t?o.set(e,l):o.set(e,!1),i.set(e,u),s&&a(s.key)}}}}function c(e){if(o.get(e)!==t){var r=n.get(e);if(r){var i=r.children;K(r.node)||(o.set(e,t),(i||[]).forEach((function(e){c(e.key)})))}}}function s(e){var r=n.get(e);if(r){var i=r.children,s=r.parent,l=r.node;o.set(e,t),K(l)||((i||[]).filter((function(e){return!K(e.node)})).forEach((function(e){c(e.key)})),s&&a(s.key))}}(r.checkedKeys||[]).forEach((function(e){o.set(e,!0)})),(r.halfCheckedKeys||[]).forEach((function(e){i.set(e,!0)})),(e||[]).forEach((function(e){s(e)}));var l,u=[],h=[],f=w(o);try{for(f.s();!(l=f.n()).done;){var d=j(l.value,2),p=d[0],v=d[1];v&&u.push(p)}}catch(O){f.e(O)}finally{f.f()}var y,b=w(i);try{for(b.s();!(y=b.n()).done;){var g=j(y.value,2),m=g[0],k=g[1];!o.get(m)&&k&&h.push(m)}}catch(O){b.e(O)}finally{b.f()}return{checkedKeys:u,halfCheckedKeys:h}}function J(e,t){var n=new Map;function r(e){if(!n.get(e)){var o=t.get(e);if(o){n.set(e,!0);var i=o.parent,a=o.node,c=v(a);c&&c.disabled||i&&r(i.key)}}}return(e||[]).forEach((function(e){r(e)})),x(n.keys())}function Q(e){return Object.keys(e).reduce((function(t,n){return"data-"!==n.substr(0,5)&&"aria-"!==n.substr(0,5)||(t[n]=e[n]),t}),{})}export{g as F,C as T,q as a,Y as b,U as c,J as d,G as e,M as f,z as g,F as h,A as i,B as j,Q as k,$ as l,R as m,H as n,W as p};
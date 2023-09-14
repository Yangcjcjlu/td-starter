import{r as O,k as G,m as K,R as j,n as T,x as V,ac as W,j as u,c as k,q as i,a as q,ar as F,E as H,p as J}from"./index.9fcbf863.js";function L(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter(function(d){return Object.getOwnPropertyDescriptor(t,d).enumerable})),e.push.apply(e,n)}return e}function M(t){for(var r=1;r<arguments.length;r++){var e=arguments[r]!=null?arguments[r]:{};r%2?L(Object(e),!0).forEach(function(n){K(t,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):L(Object(e)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})}return t}var Q={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M20.99 7.38l-10.61 10.6L4 11.63l1.42-1.41 4.95 4.95 9.2-9.2 1.4 1.42z"}}]},z=O.exports.forwardRef(function(t,r){return O.exports.createElement(G,M(M({},t),{},{id:"check",ref:r,icon:Q}))});z.displayName="CheckIcon";var U=z;/**
 * tdesign v1.2.4
 * (c) 2023 tdesign
 * @license MIT
 */var A=j.createContext({current:0,theme:"default",readonly:!1,onChange:null});/**
 * tdesign v1.2.4
 * (c) 2023 tdesign
 * @license MIT
 */var X={icon:!0,status:"default"},Y={layout:"horizontal",readonly:!1,separator:"line",sequence:"positive",theme:"default"};/**
 * tdesign v1.2.4
 * (c) 2023 tdesign
 * @license MIT
 */var D=function(r){var e,n=r.index,d=r.icon,I=r.title,b=r.content,o=r.value,_=r.children,C=r.style,a=r.status,g=O.exports.useContext(A),y=g.current,E=g.theme,N=g.onChange,h=g.readonly,S=T(),c=S.classPrefix,P=S.steps,w=V({CloseIcon:W,CheckIcon:U}),l=w.CloseIcon,s=w.CheckIcon,f=a!=="process"&&!h;function v(){if(!d)return null;var m="".concat(c,"-steps-item__icon--number");return d&&d!==!0?u("span",{className:m,children:d}):E!=="default"?null:a==="error"?u("span",{className:m,children:P.errorIcon||u(l,{})}):a==="finish"?u("span",{className:m,children:u(s,{})}):u("span",{className:m,children:Number(n)+1})}function p(m){if(!!f){var B=o!=null?o:n;N(B,y,{e:m})}}return u("div",{style:C,className:k((e={},i(e,"".concat(c,"-steps-item"),!0),i(e,"".concat(c,"-steps-item--wait"),a==="default"),i(e,"".concat(c,"-steps-item--error"),a==="error"),i(e,"".concat(c,"-steps-item--finish"),a==="finish"),i(e,"".concat(c,"-steps-item--process"),a==="process"),i(e,r.className,!!r.className),e)),children:q("div",{className:k("".concat(c,"-steps-item__inner"),i({},"".concat(c,"-steps-item--clickable"),f)),onClick:p,children:[u("div",{className:k("".concat(c,"-steps-item__icon"),i({},"".concat(c,"-steps-item-").concat(a),a)),children:v()}),q("div",{className:"".concat(c,"-steps-item__content"),children:[u("div",{className:"".concat(c,"-steps-item__title"),children:I}),u("div",{className:"".concat(c,"-steps-item__description"),children:b}),_?u("div",{className:"".concat(c,"-steps-item__extra"),children:_}):null]})]})})};D.displayName="StepItem";D.defaultProps=X;/**
 * tdesign v1.2.4
 * (c) 2023 tdesign
 * @license MIT
 */function R(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter(function(d){return Object.getOwnPropertyDescriptor(t,d).enumerable})),e.push.apply(e,n)}return e}function x(t){for(var r=1;r<arguments.length;r++){var e=arguments[r]!=null?arguments[r]:{};r%2?R(Object(e),!0).forEach(function(n){i(t,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):R(Object(e)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})}return t}var $=F(function(t,r){var e,n=t.style,d=t.readonly,I=t.layout,b=t.theme,o=t.sequence,_=t.separator,C=t.children,a=t.options,g=T(),y=g.classPrefix,E=H(t,"current",t.onChange),N=J(E,2),h=N[0],S=N[1],c=O.exports.useMemo(function(){var l={};return a?a.forEach(function(s,f){s.value!==void 0&&(l[s.value]=f)}):j.Children.forEach(C,function(s,f){!j.isValidElement(s)||s.props.value!==void 0&&(l[s.props.value]=f)}),l},[a,C]),P=O.exports.useCallback(function(l,s){var f;if(h==="FINISH")return"finish";if(l.status&&l.status!=="default")return l.status;if(l.value===void 0&&(o==="positive"&&s<h||o==="reverse"&&s>h))return"finish";if(l.value!==void 0){var v=c[h];if(v===void 0)return console.warn("TDesign Steps Warn: The current `value` is not exist."),"default";if(o==="positive"&&s<v||o==="reverse"&&s>v)return"finish"}var p=(f=l.value)!==null&&f!==void 0?f:s;return p===h?"process":"default"},[h,o,c]),w=O.exports.useMemo(function(){if(a){var l=o==="reverse"?a.reverse():a;return a.map(function(v,p){var m=o==="reverse"?l.length-p-1:p;return u(D,{...x(x({key:p},v),{},{index:m,status:P(v,p)})})})}var s=j.Children.toArray(C),f=o==="reverse"?s.reverse():s;return s.map(function(v,p){var m=o==="reverse"?f.length-p-1:p;return j.cloneElement(v,x(x({},v.props),{},{index:m,status:P(v.props,p)}))})},[a,C,o,P]);return u(A.Provider,{value:{current:h,theme:b,readonly:d,onChange:S},children:u("div",{ref:r,style:n,className:k((e={},i(e,"".concat(y,"-steps"),!0),i(e,"".concat(y,"-steps--").concat(b,"-anchor"),b),i(e,"".concat(y,"-steps--").concat(I),I),i(e,"".concat(y,"-steps--").concat(o),o),i(e,"".concat(y,"-steps--").concat(_,"-separator"),_),i(e,t.className,!!t.className),e)),children:w})})},{StepItem:D});$.displayName="Steps";$.defaultProps=Y;/**
 * tdesign v1.2.4
 * (c) 2023 tdesign
 * @license MIT
 */var ee=$;export{U as C,ee as S};
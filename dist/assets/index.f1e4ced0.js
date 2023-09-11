import{r as T,n as N,j as o,c as _,a as g,ar as K,ab as O,o as Q,p as U,a1 as V,R as r,q as m,D as X,aa as S}from"./index.e0b1210f.js";/**
 * tdesign v1.2.4
 * (c) 2023 tdesign
 * @license MIT
 */var C=T.exports.forwardRef(function(t,f){var c=t.children,a=t.className,e=t.style,n=t.action,d=t.content,s=N(),l=s.classPrefix,v=n&&o("ul",{className:"".concat(l,"-list-item__action"),children:n});return o("li",{ref:f,className:_("".concat(l,"-list-item"),a),style:e,children:g("div",{className:"".concat(l,"-list-item-main"),children:[c||d,v]})})});C.displayName="ListItem";/**
 * tdesign v1.2.4
 * (c) 2023 tdesign
 * @license MIT
 */var z=T.exports.forwardRef(function(t,f){var c=t.title,a=t.image,e=t.description,n=t.className,d=t.style,s=N(),l=s.classPrefix,v=function(){return a&&typeof a=="string"?o("div",{className:"".concat(l,"-list-item__meta-avatar"),children:o("img",{src:a,alt:""})}):o("div",{className:"".concat(l,"-list-item__meta-avatar"),children:a})};return g("div",{ref:f,className:_("".concat(l,"-list-item__meta"),n),style:d,children:[a&&v(),g("div",{className:"".concat(l,"-list-item__meta-content"),children:[o("h3",{className:"".concat(l,"-list-item__meta-title"),children:c}),o("div",{className:"".concat(l,"-list-item__meta-description"),children:typeof e=="string"?o("p",{children:e}):e})]})]})});z.displayName="ListItemMeta";/**
 * tdesign v1.2.4
 * (c) 2023 tdesign
 * @license MIT
 */var Y={layout:"horizontal",size:"medium",split:!1,stripe:!1};/**
 * tdesign v1.2.4
 * (c) 2023 tdesign
 * @license MIT
 */var D=K(function(t,f){var c,a,e=O(t,Y),n=e.header,d=e.footer,s=e.asyncLoading,l=e.size,v=e.split,y=e.stripe,I=e.layout,M=e.children,H=e.className,L=e.onLoadMore,j=L===void 0?S:L,p=e.onScroll,k=p===void 0?S:p,w=e.style,A=N(),i=A.classPrefix,$=Q("list"),x=U($,2),P=x[0],E=x[1],B=function(u){s==="load-more"&&j({e:u})},b=function(u){var h=u.currentTarget,R=h.scrollTop,F=h.offsetHeight,G=h.scrollHeight,J=G-R-F;k({e:u,scrollTop:R,scrollBottom:J})},q=V(s)?r.createElement("div",{className:_("".concat(i,"-list__load"),(c={},m(c,"".concat(i,"-list__load--loading"),s==="loading"),m(c,"".concat(i,"-list__load--load-more"),s==="load-more"),c)),onClick:B},s==="loading"&&r.createElement("div",null,r.createElement(X,{loading:!0}),r.createElement("span",null,E(P.loadingText))),s==="load-more"&&r.createElement("span",null,E(P.loadingMoreText))):s;return r.createElement("div",{ref:f,style:w,onScroll:b,className:_("".concat(i,"-list"),H,(a={},m(a,"".concat(i,"-list--split"),v),m(a,"".concat(i,"-list--stripe"),y),m(a,"".concat(i,"-list--vertical-action"),I==="vertical"),m(a,"".concat(i,"-size-s"),l==="small"),m(a,"".concat(i,"-size-l"),l==="large"),a))},n&&r.createElement("div",{className:"".concat(i,"-list__header")},n),r.createElement("ul",{className:"".concat(i,"-list__inner")},M),s&&q,d&&r.createElement("div",{className:"".concat(i,"-list__footer")},d))},{ListItem:C,ListItemMeta:z});D.displayName="List";/**
 * tdesign v1.2.4
 * (c) 2023 tdesign
 * @license MIT
 */var ee=D;export{ee as L};

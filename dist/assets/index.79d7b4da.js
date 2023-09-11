import{r as ra,ab as sa,n as da,bd as ca,c as d,q as r,j as s,D as la,a as n}from"./index.e0b1210f.js";/**
 * tdesign v1.2.4
 * (c) 2023 tdesign
 * @license MIT
 */var oa={bordered:!0,headerBordered:!1,hoverShadow:!1,loading:!1,shadow:!1,size:"medium",theme:"normal"};/**
 * tdesign v1.2.4
 * (c) 2023 tdesign
 * @license MIT
 */var y=ra.exports.forwardRef(function(x,P){var c,i,a=sa(x,oa),l=a.actions,v=a.avatar,S=a.bordered,u=a.children,D=a.className,o=a.cover,h=a.description,f=a.footer,N=a.header,H=a.headerBordered,j=a.hoverShadow,z=a.loading,A=a.shadow,B=a.size,F=a.style,m=a.subtitle,_=a.title,q=a.theme,p=a.status,E=da(),e=E.classPrefix,I=ca(),t=q==="poster2",L=d("".concat(e,"-card"),D,(c={},r(c,I.SIZE.small,B==="small"),r(c,"".concat(e,"-card--bordered"),S),r(c,"".concat(e,"-card--shadow"),A),r(c,"".concat(e,"-card--shadow-hover"),j),c)),b=N||_||m||h||v||l&&!t||p&&t,w=d((i={},r(i,"".concat(e,"-card__header"),b),r(i,"".concat(e,"-card__title--bordered"),H),i)),R=d(r({},"".concat(e,"-card__title"),_)),T=d(r({},"".concat(e,"-card__subtitle"),m)),C=d(r({},"".concat(e,"-card__actions"),l)),Z=d(r({},"".concat(e,"-card__footer"),f)),$=d(r({},"".concat(e,"-card__cover"),o)),k=d(r({},"".concat(e,"-card__avatar"),v)),G=d(r({},"".concat(e,"-card__body"),u)),J=d(r({},"".concat(e,"-card__description"),h)),K=_?s("span",{className:R,children:_}):null,M=m?s("span",{className:T,children:m}):null,O=h?s("p",{className:J,children:h}):null,Q=v&&s("div",{className:k,children:v}),U=l&&!t&&s("div",{className:C,children:l}),V=l&&t&&s("div",{className:C,children:l}),W=p&&t&&s("div",{className:C,children:p}),X=function(){return N?s("div",{className:w,children:N}):n("div",{className:w,children:[n("div",{className:"".concat(e,"-card__header-wrapper"),children:[Q,n("div",{children:[K,M,O]})]}),U,W]})},Y=o?s("div",{className:$,children:typeof o=="string"?s("img",{src:o,alt:""}):o}):null,aa=u&&s("div",{className:G,children:u}),ea=f&&n("div",{className:Z,children:[s("div",{className:"".concat(e,"-card__footer-wrapper"),children:f}),V]}),g=n("div",{ref:P,className:L,style:F,children:[b?X():null,Y,aa,ea]});return z?s(la,{children:g}):g});y.displayName="Card";/**
 * tdesign v1.2.4
 * (c) 2023 tdesign
 * @license MIT
 */var ia=y;export{ia as C};

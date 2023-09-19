import{c4 as Se,W as ae,r as s,a5 as je,C as Te,o as N,c5 as Ce,aJ as re,aj as P,m as Ne,p as x,c as K,j as ne,a as z,a6 as D,c6 as Pe}from"./index.d1e222a9.js";/**
 * tdesign v1.2.4
 * (c) 2023 tdesign
 * @license MIT
 */var Ke=`
  min-height:0 !important;
  max-height:none !important;
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important
`,l;function oe(e){var o,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null;l||(l=document.createElement("textarea"),document.body.appendChild(l));var d=Se(e),f=d.paddingSize,c=d.borderSize,_=d.boxSizing,R=d.sizingStyle;l.setAttribute("style","".concat(R,";").concat(Ke)),l.value=e.value||e.placeholder||"";var m=l.scrollHeight,b={},w=_==="border-box",E=_==="content-box";w?m+=c:E&&(m-=f),l.value="";var S=l.scrollHeight-f;(o=l)===null||o===void 0||(o=o.parentNode)===null||o===void 0||o.removeChild(l),l=null;var j=function(i){var p=S*i;return w&&(p=p+f+c),p};if(!ae(r)){var O=j(r);m=Math.max(O,m),b.minHeight="".concat(O,"px")}return ae(n)||(m=Math.min(j(n),m)),b.height="".concat(m,"px"),b}/**
 * tdesign v1.2.4
 * (c) 2023 tdesign
 * @license MIT
 */var ze={allowInputOverMax:!1,autofocus:!1,autosize:!1,placeholder:void 0,readonly:!1};/**
 * tdesign v1.2.4
 * (c) 2023 tdesign
 * @license MIT
 */var Re=["disabled","maxlength","maxcharacter","className","readonly","autofocus","style","onKeydown","onKeypress","onKeyup","autosize","status","tips","allowInputOverMax"];function se(e,o){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter(function(d){return Object.getOwnPropertyDescriptor(e,d).enumerable})),r.push.apply(r,n)}return r}function A(e){for(var o=1;o<arguments.length;o++){var r=arguments[o]!=null?arguments[o]:{};o%2?se(Object(r),!0).forEach(function(n){x(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):se(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}var $=s.exports.forwardRef(function(e,o){var r,n,d=e.disabled,f=e.maxlength,c=e.maxcharacter,_=e.className,R=e.readonly,m=e.autofocus,b=e.style,w=e.onKeydown,E=w===void 0?D:w,S=e.onKeypress,j=S===void 0?D:S,O=e.onKeyup,F=O===void 0?D:O,i=e.autosize,p=e.status,U=e.tips,g=e.allowInputOverMax,B=je(e,Re),ie=Te(e,"value",e.onChange),V=N(ie,2),W=V[0],y=W===void 0?"":W,ce=V[1],ue=s.exports.useState(!1),Z=N(ue,2),le=Z[0],J=Z[1],de=s.exports.useState(!1),X=N(de,2),fe=X[0],ve=X[1],xe=s.exports.useState({}),Y=N(xe,2),me=Y[0],H=Y[1],T=s.exports.useRef(!1),k=typeof c!="undefined",h=s.exports.useRef(),q=s.exports.useRef(),M=s.exports.useMemo(function(){return Ce(y)},[y]),I=s.exports.useMemo(function(){var t=re(String(y),g?1/0:c);return P(t)==="object"?t.length:t},[y,g,c]),pe=Ne(),u=pe.classPrefix,he=Object.keys(B).filter(function(t){return!/^on[A-Z]/.test(t)}),ge=he.reduce(function(t,a){return Object.assign(t,x({},a,e[a]))},{}),ye=Object.keys(B).filter(function(t){return/^on[A-Z]/.test(t)}),_e=ye.reduce(function(t,a){return Object.assign(t,x({},a,function(v){d||(a==="onFocus"&&J(!0),a==="onBlur"&&J(!1),e[a](v.currentTarget.value,{e:v}))})),t},{}),be=K("".concat(u,"-textarea__inner"),_,(r={},x(r,"".concat(u,"-is-").concat(p),p),x(r,"".concat(u,"-is-disabled"),d),x(r,"".concat(u,"-is-focused"),le),x(r,"".concat(u,"-resize-none"),P(i)==="object"),r)),C=s.exports.useCallback(function(){i===!0?H(oe(h.current)):P(i)==="object"&&H(oe(h.current,i==null?void 0:i.minRows,i==null?void 0:i.maxRows))},[i]);s.exports.useEffect(function(){C()},[h==null?void 0:h.current]);function G(t){var a=t.target,v=a.value;if(!g&&!T.current&&(v=Pe(v,f),c&&c>=0)){var te=re(v,c);v=P(te)==="object"&&te.characters}ce(v,{e:t})}function we(){T.current=!0}function Oe(t){T.current&&(T.current=!1,G(t))}var Q=function(a,v){return z("span",{className:"".concat(u,"-textarea__limit"),children:[fe&&g?z("span",{className:"".concat(u,"-textarea__tips--warning"),children:[" ",a]}):"".concat(a),"/".concat(v)]})};s.exports.useEffect(function(){i===!1&&H({height:"auto",minHeight:"auto"})},[C,i]),s.exports.useEffect(function(){C()},[C,y]),s.exports.useEffect(function(){g&&ve(!!(f&&M>f)||!!(c&&I>c))},[g,I,M,c,f]),s.exports.useImperativeHandle(o,function(){return{currentElement:q.current,textareaElement:h.current}});var L=U&&ne("div",{className:K("".concat(u,"-textarea__tips"),(n={},x(n,"".concat(u,"-textarea__tips--normal"),!p),x(n,"".concat(u,"-textarea__tips--").concat(p),p),n)),children:U}),ee=k&&Q(I,c)||!k&&f&&Q(M,f);return z("div",{style:b,ref:q,className:K("".concat(u,"-textarea"),_),children:[ne("textarea",{...A(A(A({},ge),_e),{},{value:y,style:me,className:be,readOnly:R,autoFocus:m,disabled:d,onChange:G,onKeyDown:function(a){return E(a.currentTarget.value,{e:a})},onKeyPress:function(a){return j(a.currentTarget.value,{e:a})},onKeyUp:function(a){return F(a.currentTarget.value,{e:a})},onCompositionStart:we,onCompositionEnd:Oe,ref:h})}),L||ee?z("div",{className:K("".concat(u,"-textarea__info_wrapper"),x({},"".concat(u,"-textarea__info_wrapper_align"),!L)),children:[L,ee]}):null]})});$.displayName="Textarea";$.defaultProps=ze;/**
 * tdesign v1.2.4
 * (c) 2023 tdesign
 * @license MIT
 */var He=$;export{He as T};

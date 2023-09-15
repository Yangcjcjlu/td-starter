import{bL as Se,$ as ae,r as s,a9 as je,E as Ne,p as P,bM as Te,aO as re,an as C,n as Pe,q as x,c as K,j as ne,a as z,aa as D,bN as Ce}from"./index.b342f006.js";/**
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
`,l;function oe(e){var o,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null;l||(l=document.createElement("textarea"),document.body.appendChild(l));var d=Se(e),f=d.paddingSize,c=d.borderSize,b=d.boxSizing,E=d.sizingStyle;l.setAttribute("style","".concat(E,";").concat(Ke)),l.value=e.value||e.placeholder||"";var m=l.scrollHeight,_={},w=b==="border-box",R=b==="content-box";w?m+=c:R&&(m-=f),l.value="";var S=l.scrollHeight-f;(o=l)===null||o===void 0||(o=o.parentNode)===null||o===void 0||o.removeChild(l),l=null;var j=function(i){var p=S*i;return w&&(p=p+f+c),p};if(!ae(r)){var O=j(r);m=Math.max(O,m),_.minHeight="".concat(O,"px")}return ae(n)||(m=Math.min(j(n),m)),_.height="".concat(m,"px"),_}/**
 * tdesign v1.2.4
 * (c) 2023 tdesign
 * @license MIT
 */var ze={allowInputOverMax:!1,autofocus:!1,autosize:!1,placeholder:void 0,readonly:!1};/**
 * tdesign v1.2.4
 * (c) 2023 tdesign
 * @license MIT
 */var Ee=["disabled","maxlength","maxcharacter","className","readonly","autofocus","style","onKeydown","onKeypress","onKeyup","autosize","status","tips","allowInputOverMax"];function se(e,o){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter(function(d){return Object.getOwnPropertyDescriptor(e,d).enumerable})),r.push.apply(r,n)}return r}function A(e){for(var o=1;o<arguments.length;o++){var r=arguments[o]!=null?arguments[o]:{};o%2?se(Object(r),!0).forEach(function(n){x(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):se(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}var $=s.exports.forwardRef(function(e,o){var r,n,d=e.disabled,f=e.maxlength,c=e.maxcharacter,b=e.className,E=e.readonly,m=e.autofocus,_=e.style,w=e.onKeydown,R=w===void 0?D:w,S=e.onKeypress,j=S===void 0?D:S,O=e.onKeyup,F=O===void 0?D:O,i=e.autosize,p=e.status,U=e.tips,g=e.allowInputOverMax,B=je(e,Ee),ie=Ne(e,"value",e.onChange),V=P(ie,2),Z=V[0],y=Z===void 0?"":Z,ce=V[1],ue=s.exports.useState(!1),q=P(ue,2),le=q[0],W=q[1],de=s.exports.useState(!1),X=P(de,2),fe=X[0],ve=X[1],xe=s.exports.useState({}),Y=P(xe,2),me=Y[0],H=Y[1],N=s.exports.useRef(!1),k=typeof c!="undefined",h=s.exports.useRef(),G=s.exports.useRef(),M=s.exports.useMemo(function(){return Te(y)},[y]),L=s.exports.useMemo(function(){var t=re(String(y),g?1/0:c);return C(t)==="object"?t.length:t},[y,g,c]),pe=Pe(),u=pe.classPrefix,he=Object.keys(B).filter(function(t){return!/^on[A-Z]/.test(t)}),ge=he.reduce(function(t,a){return Object.assign(t,x({},a,e[a]))},{}),ye=Object.keys(B).filter(function(t){return/^on[A-Z]/.test(t)}),be=ye.reduce(function(t,a){return Object.assign(t,x({},a,function(v){d||(a==="onFocus"&&W(!0),a==="onBlur"&&W(!1),e[a](v.currentTarget.value,{e:v}))})),t},{}),_e=K("".concat(u,"-textarea__inner"),b,(r={},x(r,"".concat(u,"-is-").concat(p),p),x(r,"".concat(u,"-is-disabled"),d),x(r,"".concat(u,"-is-focused"),le),x(r,"".concat(u,"-resize-none"),C(i)==="object"),r)),T=s.exports.useCallback(function(){i===!0?H(oe(h.current)):C(i)==="object"&&H(oe(h.current,i==null?void 0:i.minRows,i==null?void 0:i.maxRows))},[i]);s.exports.useEffect(function(){T()},[h==null?void 0:h.current]);function J(t){var a=t.target,v=a.value;if(!g&&!N.current&&(v=Ce(v,f),c&&c>=0)){var te=re(v,c);v=C(te)==="object"&&te.characters}ce(v,{e:t})}function we(){N.current=!0}function Oe(t){N.current&&(N.current=!1,J(t))}var Q=function(a,v){return z("span",{className:"".concat(u,"-textarea__limit"),children:[fe&&g?z("span",{className:"".concat(u,"-textarea__tips--warning"),children:[" ",a]}):"".concat(a),"/".concat(v)]})};s.exports.useEffect(function(){i===!1&&H({height:"auto",minHeight:"auto"})},[T,i]),s.exports.useEffect(function(){T()},[T,y]),s.exports.useEffect(function(){g&&ve(!!(f&&M>f)||!!(c&&L>c))},[g,L,M,c,f]),s.exports.useImperativeHandle(o,function(){return{currentElement:G.current,textareaElement:h.current}});var I=U&&ne("div",{className:K("".concat(u,"-textarea__tips"),(n={},x(n,"".concat(u,"-textarea__tips--normal"),!p),x(n,"".concat(u,"-textarea__tips--").concat(p),p),n)),children:U}),ee=k&&Q(L,c)||!k&&f&&Q(M,f);return z("div",{style:_,ref:G,className:K("".concat(u,"-textarea"),b),children:[ne("textarea",{...A(A(A({},ge),be),{},{value:y,style:me,className:_e,readOnly:E,autoFocus:m,disabled:d,onChange:J,onKeyDown:function(a){return R(a.currentTarget.value,{e:a})},onKeyPress:function(a){return j(a.currentTarget.value,{e:a})},onKeyUp:function(a){return F(a.currentTarget.value,{e:a})},onCompositionStart:we,onCompositionEnd:Oe,ref:h})}),I||ee?z("div",{className:K("".concat(u,"-textarea__info_wrapper"),x({},"".concat(u,"-textarea__info_wrapper_align"),!I)),children:[I,ee]}):null]})});$.displayName="Textarea";$.defaultProps=ze;/**
 * tdesign v1.2.4
 * (c) 2023 tdesign
 * @license MIT
 */var He=$;export{He as T};

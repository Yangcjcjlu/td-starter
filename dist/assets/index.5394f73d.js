import{r as n,j as e,a as i,b2 as F,b3 as r,d as y,aO as g,B as m,b as w,f as U,bS as K,bT as d,bU as O,F as x,c as R}from"./index.40a7e0fe.js";import{F as f}from"./index.436ebbe4.js";import{M as T}from"./index.de8057e1.js";import{StatusMap as M,ContractTypeMap as z,PaymentTypeMap as L}from"./index.67ec0b1d.js";import{C as B}from"./common.module.d7e709a7.js";import{T as G}from"./index.07ce32d8.js";import{D as j}from"./index.7f90e26d.js";import"./formModel.311e3562.js";import"./error-circle-filled.05efec54.js";import"./image.a63e86dc.js";import"./DateRangePicker.9f496689.js";import"./index.c9fceeba.js";import"./useDebounce.103fc75a.js";import"./react-render.44e66a1f.js";import"./index.6e4dd1de.js";import"./index.0725e913.js";import"./chevron-right.533e3a9a.js";import"./observe.3c3f0282.js";const o={FAIL:0,AUDIT_PENDING:1,EXEC_PENDING:2,EXECUTING:3,FINISH:4},k=[{value:o.FAIL,label:"\u5BA1\u6838\u5931\u8D25"},{value:o.AUDIT_PENDING,label:"\u5F85\u5BA1\u6838"},{value:o.EXEC_PENDING,label:"\u5F85\u5C65\u884C"},{value:o.EXECUTING,label:"\u5BA1\u6838\u6210\u529F"},{value:o.FINISH,label:"\u5DF2\u5B8C\u6210"}],h={MAIN:0,SUB:1,SUPPLEMENT:2},q=[{value:h.MAIN,label:"\u4E3B\u5408\u540C"},{value:h.SUB,label:"\u5B50\u5408\u540C"},{value:h.SUPPLEMENT,label:"\u8865\u5145\u5408\u540C"}],{FormItem:p}=f,X=l=>{const t=n.exports.useRef();return e("div",{className:"list-common-table-query",children:e(f,{ref:t,onSubmit:C=>{var a,c;C.validateResult===!0&&T.info("\u63D0\u4EA4\u6210\u529F");const s=(c=(a=t==null?void 0:t.current)==null?void 0:a.getFieldsValue)==null?void 0:c.call(a,!0);console.log("form \u6570\u636E",s)},onReset:()=>{l.onCancel(),T.info("\u91CD\u7F6E\u6210\u529F")},labelWidth:80,colon:!0,children:i(F,{children:[e(r,{flex:"1",children:i(F,{gutter:[16,16],children:[e(r,{span:3,xs:12,sm:6,xl:3,children:e(p,{label:"\u5408\u540C\u540D\u79F0",name:"name",children:e(y,{placeholder:"\u8BF7\u8F93\u5165\u5408\u540C\u540D\u79F0"})})}),e(r,{span:3,xs:12,sm:6,xl:3,children:e(p,{label:"\u5408\u540C\u72B6\u6001",name:"status",children:e(g,{options:k,placeholder:"\u8BF7\u9009\u62E9\u5408\u540C\u72B6\u6001"})})}),e(r,{span:3,xs:12,sm:6,xl:3,children:e(p,{label:"\u5408\u540C\u7F16\u53F7",name:"number",children:e(y,{placeholder:"\u8BF7\u8F93\u5165\u5408\u540C\u7F16\u53F7"})})}),e(r,{span:3,xs:12,sm:6,xl:3,children:e(p,{label:"\u5408\u540C\u7C7B\u578B",name:"type",children:e(g,{options:q,placeholder:"\u8BF7\u9009\u62E9\u5408\u540C\u7C7B\u578B"})})})]})}),i(r,{flex:"160px",children:[e(m,{theme:"primary",type:"submit",style:{margin:"0px 20px"},children:"\u67E5\u8BE2"}),e(m,{type:"reset",variant:"base",theme:"default",children:"\u91CD\u7F6E"})]})]})})})};var V=n.exports.memo(X);const W=()=>{const l=w(),t=U(K),[S,E]=n.exports.useState([0,1]),[C,s]=n.exports.useState(!1),{loading:a,contractList:c,current:D,pageSize:N,total:A}=t;n.exports.useEffect(()=>(l(d({pageSize:t.pageSize,current:t.current})),()=>{l(O())}),[]);function v(u){E(u)}function I(u){console.log(u)}function P(u){console.log(u),s(!0)}function _(){s(!1)}return i(x,{children:[e(F,{justify:"start",style:{marginBottom:"20px"},children:e(V,{onSubmit:async u=>{console.log(u)},onCancel:()=>{}})}),e(G,{loading:a,data:c,columns:[{title:"\u5408\u540C\u540D\u79F0",fixed:"left",align:"left",ellipsis:!0,colKey:"name"},{title:"\u5408\u540C\u72B6\u6001",colKey:"status",width:200,cell({row:u}){return M[u.status||5]}},{title:"\u5408\u540C\u7F16\u53F7",width:200,ellipsis:!0,colKey:"no"},{title:"\u5408\u540C\u7C7B\u578B",width:200,ellipsis:!0,colKey:"contractType",cell({row:u}){return z[u.contractType]}},{title:"\u5408\u540C\u6536\u4ED8\u7C7B\u578B",width:200,ellipsis:!0,colKey:"paymentType",cell({row:u}){return L[u.paymentType]}},{title:"\u5408\u540C\u91D1\u989D (\u5143)",width:200,ellipsis:!0,colKey:"amount"},{align:"left",fixed:"right",width:200,colKey:"op",title:"\u64CD\u4F5C",cell(u){return i(x,{children:[e(m,{theme:"primary",variant:"text",onClick:()=>{I(u)},children:"\u7BA1\u7406"}),e(m,{theme:"primary",variant:"text",onClick:()=>{P(u)},children:"\u5220\u9664"})]})}}],rowKey:"index",selectedRowKeys:S,hover:!0,onSelectChange:v,pagination:{pageSize:N,total:A,current:D,showJumper:!0,onCurrentChange(u,b){l(d({pageSize:b.pageSize,current:b.current}))},onPageSizeChange(u){l(d({pageSize:u,current:1}))}}}),e(j,{header:"\u786E\u8BA4\u5220\u9664\u5F53\u524D\u6240\u9009\u5408\u540C\uFF1F",visible:C,onClose:_,children:e("p",{children:"\u5220\u9664\u540E\u7684\u6240\u6709\u5408\u540C\u4FE1\u606F\u5C06\u88AB\u6E05\u7A7A,\u4E14\u65E0\u6CD5\u6062\u590D"})})]})},H=()=>e("div",{className:R(B.pageWithPadding,B.pageWithColor),children:e(W,{})});var Ce=n.exports.memo(H);export{W as SelectTable,Ce as default};
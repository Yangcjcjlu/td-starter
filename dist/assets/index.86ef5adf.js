import{r as i,b as u,e as g,bX as h,u as m,bY as o,bZ as f,a as w,c as x,j as t,bt as y,bu as S,d as b,bB as K}from"./index.16b57e60.js";import{C as s}from"./common.module.e5e57554.js";import{T as v}from"./index.928f8c8e.js";import"./formModel.3a242e41.js";import"./index.f4b135d9.js";import"./react-render.7534fff6.js";const C="_toolBar_1elvb_1";var j={toolBar:C},_=i.exports.memo(()=>{const l=u(),e=g(h),[r,n]=i.exports.useState([1,2]),{loading:c,list:p,current:z,pageSize:B,total:I}=e;m(),i.exports.useEffect(()=>(l(o({pageSize:e.pageSize,current:e.current})),()=>{l(f())}),[]);function d(a){n(a)}return w("div",{className:x(s.pageWithPadding,s.pageWithColor,s.pageWithSize),children:[t(y,{justify:"space-between",className:j.toolBar,children:t(S,{children:t(b,{suffixIcon:t(K,{}),placeholder:"Please type Index name.",onEnter:a=>{l(o({pageSize:e.pageSize,current:e.current,name:a}))},autoWidth:!0})})}),t(v,{columns:[{align:"left",width:150,ellipsis:!0,colKey:"adjClose",title:"AdjClose"},{align:"left",width:200,ellipsis:!0,colKey:"date",title:"Date"},{align:"left",width:150,ellipsis:!0,colKey:"close",title:"close"},{align:"left",width:150,ellipsis:!0,colKey:"high",title:"high"},{align:"left",width:150,ellipsis:!0,colKey:"index",title:"index"},{align:"left",width:200,ellipsis:!0,colKey:"low",title:"low"},{align:"left",width:200,ellipsis:!0,colKey:"volume",title:"volume"}],loading:c,data:p,rowKey:"index",selectedRowKeys:r,verticalAlign:"top",hover:!0,onSelectChange:d})]})});export{_ as default};

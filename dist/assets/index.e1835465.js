import{r as i,b as d,e as g,by as m,u as y,bz as o,bA as h,a as S,c as f,j as t,bt as w,bu as b,d as K,bB as x}from"./index.16b57e60.js";import{C as l}from"./common.module.e5e57554.js";import{T as B}from"./index.928f8c8e.js";import"./formModel.3a242e41.js";import"./index.f4b135d9.js";import"./react-render.7534fff6.js";const T="_toolBar_1elvb_1";var v={toolBar:T},P=i.exports.memo(()=>{const a=d(),e=g(m),[r,n]=i.exports.useState([1,2]),{loading:c,datasourceList:u,current:z,pageSize:C,total:N}=e;y(),i.exports.useEffect(()=>(a(o({pageSize:e.pageSize,current:e.current})),()=>{a(h())}),[]);function p(s){n(s)}return S("div",{className:f(l.pageWithPadding,l.pageWithColor,l.pageWithSize),children:[t(w,{justify:"space-between",className:v.toolBar,children:t(b,{children:t(K,{suffixIcon:t(x,{}),placeholder:"Please type datasource name.",onEnter:s=>{a(o({pageSize:e.pageSize,current:e.current,name:s}))},autoWidth:!0})})}),t(B,{columns:[{align:"left",width:150,ellipsis:!0,colKey:"dataSourceName",title:"Datasource Name"},{align:"left",width:200,ellipsis:!0,colKey:"dataSourceStream",title:"Datasource Stream"},{align:"left",width:150,ellipsis:!0,colKey:"dataSourceType",title:"Datasource Type"},{align:"left",width:150,ellipsis:!0,colKey:"businessType",title:"Business Type"},{align:"left",width:150,ellipsis:!0,colKey:"ingestionType",title:"Ingestion Type"},{align:"left",width:200,ellipsis:!0,colKey:"consumeQueue",title:"Consume Queue"},{align:"left",width:200,ellipsis:!0,colKey:"ingestionBy",title:"Ingestion By"}],loading:c,data:u,rowKey:"index",selectedRowKeys:r,verticalAlign:"top",hover:!0,onSelectChange:p})]})});export{P as default};

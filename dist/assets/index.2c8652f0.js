import{r as l,b as y,e as S,by as f,u as w,bz as i,bA as b,a as z,c as K,j as s,bt as x,bu as B,d as C,bB as T}from"./index.d3600497.js";import{C as r}from"./common.module.e5e57554.js";import{T as v}from"./index.b4a5ceee.js";import"./formModel.a2af4691.js";import"./index.ad341c7a.js";import"./react-render.353cc444.js";const N="_toolBar_1elvb_1";var j={toolBar:N},R=l.exports.memo(()=>{const t=y(),a=S(f),[n,c]=l.exports.useState([1,2]),{loading:u,datasourceList:p,current:g,pageSize:d,total:m}=a;w(),l.exports.useEffect(()=>(t(i({pageSize:a.pageSize,current:a.current})),()=>{t(b())}),[]);function h(e){c(e)}return z("div",{className:K(r.pageWithPadding,r.pageWithColor,r.pageWithSize),children:[s(x,{justify:"space-between",className:j.toolBar,children:s(B,{children:s(C,{suffixIcon:s(T,{}),placeholder:"Please type datasource name.",onEnter:e=>{t(i({pageSize:a.pageSize,current:a.current,name:e}))},autoWidth:!0})})}),s(v,{columns:[{align:"left",width:150,ellipsis:!0,colKey:"dataSourceName",title:"Datasource Name"},{align:"left",width:200,ellipsis:!0,colKey:"dataSourceStream",title:"Datasource Stream"},{align:"left",width:150,ellipsis:!0,colKey:"dataSourceType",title:"Datasource Type"},{align:"left",width:150,ellipsis:!0,colKey:"businessType",title:"Business Type"},{align:"left",width:150,ellipsis:!0,colKey:"ingestionType",title:"Ingestion Type"},{align:"left",width:200,ellipsis:!0,colKey:"consumeQueue",title:"Consume Queue"},{align:"left",width:200,ellipsis:!0,colKey:"ingestionBy",title:"Ingestion By"},{align:"left",width:200,ellipsis:!0,colKey:"comment",title:"comment"}],loading:u,data:p,rowKey:"index",selectedRowKeys:n,verticalAlign:"top",hover:!0,onSelectChange:h,pagination:{pageSize:d,total:m,current:g,showJumper:!0,onCurrentChange(e,o){t(i({pageSize:o.pageSize,current:o.current}))},onPageSizeChange(e){t(i({pageSize:e,current:1}))}}})]})});export{R as default};
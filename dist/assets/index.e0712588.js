import{bP as p,R as h,r as i,f as S,bQ as P,b as O,bR as L,a as u,b4 as m,j as e,b5 as c,bS as f,bT as x}from"./index.0cd7d595.js";import{u as l,E as d,L as b}from"./index.33ed9b9f.js";import{C}from"./index.654e6d81.js";import"./index.2e085931.js";import"./DateRangePicker.f1c98900.js";import"./index.10eff2da.js";import"./useDebounce.258df8e3.js";const v="_middleChartPanel_1ui44_1";var D={middleChartPanel:v};const _=p(),A=f(),w=()=>{const[t,n]=i.exports.useState(_),o=S(P),{loading:r,tradPieOptions:s}=o,a=O();i.exports.useEffect(()=>{a(L({}))},[]),l(t,{placeholderColor:["legend.textStyle.color","xAxis.axisLabel.color","yAxis.axisLabel.color"],borderColor:["series.0.itemStyle.borderColor","series.1.itemStyle.borderColor"]});const y=l(A,{placeholderColor:["legend.textStyle.color"],containerColor:["series.0.itemStyle.borderColor"],textColor:["label.color","label.color"]}),g=l(s);return u(m,{gutter:[16,16],className:D.middleChartPanel,children:[e(c,{xs:12,xl:6,children:e(C,{title:"Data Count",subtitle:"2021-12",bordered:!1,children:e(d,{option:y,notMerge:!0,lazyUpdate:!0,showLoading:!1})})}),e(c,{xs:12,xl:6,children:e(C,{title:"Data Source",subtitle:"2023-09",bordered:!1,children:e(d,{option:g,notMerge:!0,lazyUpdate:!0,showLoading:r})})})]})};var M=h.memo(w);const R="_lineChartPanel_2je02_1";var $={lineChartPanel:R};const j=p(),z=()=>{const[t,n]=i.exports.useState(j),o=s=>{const a=p(s);n(a)},r=l(t,{placeholderColor:["legend.textStyle.color","xAxis.axisLabel.color","yAxis.axisLabel.color"],borderColor:["series.0.itemStyle.borderColor","series.1.itemStyle.borderColor"]});return e(m,{gutter:[16,16],className:$.lineChartPanel,children:e(c,{xs:12,xl:12,children:e(C,{title:"Data Count",subtitle:"(Million rows)",actions:b(o),bordered:!1,children:e(d,{option:r,notMerge:!0,lazyUpdate:!1})})})})};var T=h.memo(z);const U="_customlineChartPanel_1hwl7_1";var E={customlineChartPanel:U};const N=x(),k=()=>{const[t,n]=i.exports.useState(N),o=s=>{const a=x(s);n(a)},r=l(t,{placeholderColor:["legend.textStyle.color","xAxis.axisLabel.color","yAxis.axisLabel.color"],borderColor:["series.0.itemStyle.borderColor","series.1.itemStyle.borderColor"]});return e(m,{gutter:[16,16],className:E.customlineChartPanel,children:e(c,{xs:12,xl:12,children:e(C,{title:"Data Count",subtitle:"(rows)",actions:b(o),bordered:!1,children:e(d,{option:r,notMerge:!0,lazyUpdate:!1})})})})};var B=h.memo(k);const Q=()=>u("div",{style:{overflowX:"hidden"},children:[e(M,{}),e(T,{}),e(B,{})]});var J=i.exports.memo(Q);export{J as default};
import{b as d}from"./iframe-Dq0Es6_d.js";import{w as i}from"./organizzare-gli-spazi.helpers-DvObcIjS.js";const r={title:"Organizzare gli spazi/Display"},s={name:"Inline",tags:["!dev"],parameters:{pageLayout:"w-100",docs:{source:{code:`<div class="d-inline p-2 bg-primary text-white">d-inline</div>
<div class="d-inline p-2 bg-dark text-white">d-inline</div>`}}},render:()=>i(d`<div class="d-inline p-2 bg-primary text-white">d-inline</div>
        <div class="d-inline p-2 bg-dark text-white">d-inline</div>`)},a={name:"Block",tags:["!dev"],parameters:{pageLayout:"w-100",docs:{source:{code:`<span class="d-block p-2 bg-primary text-white">d-block</span>
<span class="d-block p-2 bg-dark text-white">d-block</span>`}}},render:()=>i(d`<span class="d-block p-2 bg-primary text-white">d-block</span>
        <span class="d-block p-2 bg-dark text-white">d-block</span>`)},e={name:"Responsive",tags:["!dev"],parameters:{pageLayout:"w-100",docs:{source:{code:`<div class="d-lg-none">Nascosto su schermi più larghi di lg</div>
<div class="d-none d-lg-block">Nascosto su schermi più piccoli di lg</div>`}}},render:()=>i(d`<div class="d-lg-none">Nascosto su schermi più larghi di lg</div>
        <div class="d-none d-lg-block">Nascosto su schermi più piccoli di lg</div>`)},o={name:"Stampa",tags:["!dev"],parameters:{pageLayout:"w-100",docs:{source:{code:`<div class="d-print-none">Solo schermo (Nascondi solo su stampa)</div>
<div class="d-none d-print-block">Solo stampa (Nascondi solo sullo schermo)</div>
<div class="d-none d-lg-block d-print-block">Nascondi fino al grande schermo, ma mostra sempre sulla stampa</div>`}}},render:()=>i(d`<div class="d-print-none">Solo schermo (Nascondi solo su stampa)</div>
        <div class="d-none d-print-block">Solo stampa (Nascondi solo sullo schermo)</div>
        <div class="d-none d-lg-block d-print-block">
          Nascondi fino al grande schermo, ma mostra sempre sulla stampa
        </div>`)};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Inline',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: \`<div class="d-inline p-2 bg-primary text-white">d-inline</div>
<div class="d-inline p-2 bg-dark text-white">d-inline</div>\`
      }
    }
  },
  render: () => wrapExample(html\`<div class="d-inline p-2 bg-primary text-white">d-inline</div>
        <div class="d-inline p-2 bg-dark text-white">d-inline</div>\`)
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Block',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: \`<span class="d-block p-2 bg-primary text-white">d-block</span>
<span class="d-block p-2 bg-dark text-white">d-block</span>\`
      }
    }
  },
  render: () => wrapExample(html\`<span class="d-block p-2 bg-primary text-white">d-block</span>
        <span class="d-block p-2 bg-dark text-white">d-block</span>\`)
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'Responsive',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: \`<div class="d-lg-none">Nascosto su schermi più larghi di lg</div>
<div class="d-none d-lg-block">Nascosto su schermi più piccoli di lg</div>\`
      }
    }
  },
  render: () => wrapExample(html\`<div class="d-lg-none">Nascosto su schermi più larghi di lg</div>
        <div class="d-none d-lg-block">Nascosto su schermi più piccoli di lg</div>\`)
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Stampa',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: \`<div class="d-print-none">Solo schermo (Nascondi solo su stampa)</div>
<div class="d-none d-print-block">Solo stampa (Nascondi solo sullo schermo)</div>
<div class="d-none d-lg-block d-print-block">Nascondi fino al grande schermo, ma mostra sempre sulla stampa</div>\`
      }
    }
  },
  render: () => wrapExample(html\`<div class="d-print-none">Solo schermo (Nascondi solo su stampa)</div>
        <div class="d-none d-print-block">Solo stampa (Nascondi solo sullo schermo)</div>
        <div class="d-none d-lg-block d-print-block">
          Nascondi fino al grande schermo, ma mostra sempre sulla stampa
        </div>\`)
}`,...o.parameters?.docs?.source}}};const l=["Inline","Block","Responsive","Stampa"],t=Object.freeze(Object.defineProperty({__proto__:null,Block:a,Inline:s,Responsive:e,Stampa:o,__namedExportsOrder:l,default:r},Symbol.toStringTag,{value:"Module"}));export{a as B,s as I,e as R,t as S,o as a};

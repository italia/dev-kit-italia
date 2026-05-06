import{b as e}from"./iframe-CEKgHznA.js";import{w as n}from"./organizzare-gli-spazi.helpers-DERzFE2J.js";const s={title:"Organizzare gli spazi/Clearfix"},t={name:"Senza clearfix",tags:["!dev"],parameters:{pageLayout:"w-100",docs:{source:{code:`<div class="neutral-2-bg p-2">
  <button type="button" class="btn btn-secondary float-start">Pulsante con float a sinistra</button>
  <button type="button" class="btn btn-secondary float-end">Pulsante con float a destra</button>
</div>`}}},render:()=>n(e`<div class="neutral-2-bg p-2">
        <button type="button" class="btn btn-secondary float-start">Pulsante con float a sinistra</button>
        <button type="button" class="btn btn-secondary float-end">Pulsante con float a destra</button>
      </div>`,{className:"clearfix-example"})},a={name:"Base",tags:["!dev"],parameters:{pageLayout:"w-100",docs:{source:{code:`<div class="neutral-2-bg p-2 clearfix">
  <button type="button" class="btn btn-secondary float-start">Pulsante con float a sinistra</button>
  <button type="button" class="btn btn-secondary float-end">Pulsante con float a destra</button>
</div>`}}},render:()=>n(e`<div class="neutral-2-bg p-2 clearfix">
        <button type="button" class="btn btn-secondary float-start">Pulsante con float a sinistra</button>
        <button type="button" class="btn btn-secondary float-end">Pulsante con float a destra</button>
      </div>`)};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Senza clearfix',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: \`<div class="neutral-2-bg p-2">
  <button type="button" class="btn btn-secondary float-start">Pulsante con float a sinistra</button>
  <button type="button" class="btn btn-secondary float-end">Pulsante con float a destra</button>
</div>\`
      }
    }
  },
  render: () => wrapExample(html\`<div class="neutral-2-bg p-2">
        <button type="button" class="btn btn-secondary float-start">Pulsante con float a sinistra</button>
        <button type="button" class="btn btn-secondary float-end">Pulsante con float a destra</button>
      </div>\`, {
    className: 'clearfix-example'
  })
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Base',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: \`<div class="neutral-2-bg p-2 clearfix">
  <button type="button" class="btn btn-secondary float-start">Pulsante con float a sinistra</button>
  <button type="button" class="btn btn-secondary float-end">Pulsante con float a destra</button>
</div>\`
      }
    }
  },
  render: () => wrapExample(html\`<div class="neutral-2-bg p-2 clearfix">
        <button type="button" class="btn btn-secondary float-start">Pulsante con float a sinistra</button>
        <button type="button" class="btn btn-secondary float-end">Pulsante con float a destra</button>
      </div>\`)
}`,...a.parameters?.docs?.source}}};const o=["SenzaClearfix","Base"],c=Object.freeze(Object.defineProperty({__proto__:null,Base:a,SenzaClearfix:t,__namedExportsOrder:o,default:s},Symbol.toStringTag,{value:"Module"}));export{a as B,c as S,t as a};

import{b as r}from"./iframe-Ts_oPF3y.js";import{w as s}from"./organizzare-gli-spazi.helpers-CsPILi82.js";const t={title:"Organizzare gli spazi/Proporzioni"},a={name:"Esempio proporzione 16x9",tags:["!dev"],parameters:{pageLayout:"w-100",docs:{source:{code:`<div class="ratio ratio-16x9">
  <iframe title="Video YouTube" src="https://www.youtube-nocookie.com/embed/RaHmGbBOP84" allowfullscreen></iframe>
</div>`}}},render:()=>s(r`<div class="ratio ratio-16x9">
        <iframe title="Video YouTube" src="https://www.youtube-nocookie.com/embed/RaHmGbBOP84" allowfullscreen></iframe>
      </div>`,{className:"ratio-examples"})},e={name:"Varianti di proporzioni",tags:["!dev"],parameters:{pageLayout:"w-100",docs:{source:{code:`<div class="ratio ratio-1x1 ratio-example">
  <div>1x1</div>
</div>
<div class="ratio ratio-4x3 ratio-example">
  <div>4x3</div>
</div>
<div class="ratio ratio-16x9 ratio-example">
  <div>16x9</div>
</div>
<div class="ratio ratio-21x9 ratio-example">
  <div>21x9</div>
</div>`}}},render:()=>s(r`<div class="ratio ratio-1x1 ratio-example">
          <div>1x1</div>
        </div>
        <div class="ratio ratio-4x3 ratio-example">
          <div>4x3</div>
        </div>
        <div class="ratio ratio-16x9 ratio-example">
          <div>16x9</div>
        </div>
        <div class="ratio ratio-21x9 ratio-example">
          <div>21x9</div>
        </div>`,{className:"ratio-examples"})},i={name:"Proporzione personalizzata",tags:["!dev"],parameters:{pageLayout:"w-100",docs:{source:{code:`<div class="ratio ratio-example" style="--bs-aspect-ratio: 50%;">
  <div>2x1</div>
</div>`}}},render:()=>s(r`<div class="ratio ratio-example" style="--bs-aspect-ratio: 50%;">
        <div>2x1</div>
      </div>`,{className:"ratio-examples"})},o={name:"Proporzione personalizzata responsive",tags:["!dev"],parameters:{pageLayout:"w-100",docs:{source:{code:`<div class="ratio ratio-4x3 ratio-example ratio-example-breakpoint">
  <div>4x3, poi 2x1</div>
</div>`}}},render:()=>s(r`<div class="ratio ratio-4x3 ratio-example ratio-example-breakpoint">
        <div>4x3, poi 2x1</div>
      </div>`,{className:"ratio-examples"})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Esempio proporzione 16x9',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: \`<div class="ratio ratio-16x9">
  <iframe title="Video YouTube" src="https://www.youtube-nocookie.com/embed/RaHmGbBOP84" allowfullscreen></iframe>
</div>\`
      }
    }
  },
  render: () => wrapExample(html\`<div class="ratio ratio-16x9">
        <iframe title="Video YouTube" src="https://www.youtube-nocookie.com/embed/RaHmGbBOP84" allowfullscreen></iframe>
      </div>\`, {
    className: 'ratio-examples'
  })
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'Varianti di proporzioni',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: \`<div class="ratio ratio-1x1 ratio-example">
  <div>1x1</div>
</div>
<div class="ratio ratio-4x3 ratio-example">
  <div>4x3</div>
</div>
<div class="ratio ratio-16x9 ratio-example">
  <div>16x9</div>
</div>
<div class="ratio ratio-21x9 ratio-example">
  <div>21x9</div>
</div>\`
      }
    }
  },
  render: () => wrapExample(html\`<div class="ratio ratio-1x1 ratio-example">
          <div>1x1</div>
        </div>
        <div class="ratio ratio-4x3 ratio-example">
          <div>4x3</div>
        </div>
        <div class="ratio ratio-16x9 ratio-example">
          <div>16x9</div>
        </div>
        <div class="ratio ratio-21x9 ratio-example">
          <div>21x9</div>
        </div>\`, {
    className: 'ratio-examples'
  })
}`,...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Proporzione personalizzata',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: \`<div class="ratio ratio-example" style="--bs-aspect-ratio: 50%;">
  <div>2x1</div>
</div>\`
      }
    }
  },
  render: () => wrapExample(html\`<div class="ratio ratio-example" style="--bs-aspect-ratio: 50%;">
        <div>2x1</div>
      </div>\`, {
    className: 'ratio-examples'
  })
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Proporzione personalizzata responsive',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: \`<div class="ratio ratio-4x3 ratio-example ratio-example-breakpoint">
  <div>4x3, poi 2x1</div>
</div>\`
      }
    }
  },
  render: () => wrapExample(html\`<div class="ratio ratio-4x3 ratio-example ratio-example-breakpoint">
        <div>4x3, poi 2x1</div>
      </div>\`, {
    className: 'ratio-examples'
  })
}`,...o.parameters?.docs?.source}}};const d=["EsempioProporzione16x9","VariantiDiProporzioni","ProporzionePersonalizzata","ProporzionePersonalizzataResponsive"],v=Object.freeze(Object.defineProperty({__proto__:null,EsempioProporzione16x9:a,ProporzionePersonalizzata:i,ProporzionePersonalizzataResponsive:o,VariantiDiProporzioni:e,__namedExportsOrder:d,default:t},Symbol.toStringTag,{value:"Module"}));export{a as E,i as P,v as S,e as V,o as a};

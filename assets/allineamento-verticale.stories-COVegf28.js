import{b as e}from"./iframe-Ts_oPF3y.js";import{w as s}from"./organizzare-gli-spazi.helpers-CsPILi82.js";const n={title:"Organizzare gli spazi/Allineamento verticale"},t={name:"Con elementi inline",tags:["!dev"],parameters:{docs:{source:{code:`<span class="bg-primary text-white p-1 align-baseline">baseline</span>
<span class="bg-primary text-white p-1 align-top">top</span>
<span class="bg-primary text-white p-1 align-middle">middle</span>
<span class="bg-primary text-white p-1 align-bottom">bottom</span>
<span class="bg-primary text-white p-1 align-text-top">text-top</span>
<span class="bg-primary text-white p-1 align-text-bottom">text-bottom</span>`}}},render:()=>s(e`<span class="bg-primary text-white p-1 align-baseline">baseline</span>
        <span class="bg-primary text-white p-1 align-top">top</span>
        <span class="bg-primary text-white p-1 align-middle">middle</span>
        <span class="bg-primary text-white p-1 align-bottom">bottom</span>
        <span class="bg-primary text-white p-1 align-text-top">text-top</span>
        <span class="bg-primary text-white p-1 align-text-bottom">text-bottom</span>`)},a={name:"Con celle di tabella",tags:["!dev"],parameters:{docs:{source:{code:`<table style="height: 100px;" class="table table-bordered">
  <tbody>
    <tr>
      <td class="align-baseline">baseline</td>
      <td class="align-top">top</td>
      <td class="align-middle">middle</td>
      <td class="align-bottom">bottom</td>
      <td class="align-text-top">text-top</td>
      <td class="align-text-bottom">text-bottom</td>
    </tr>
  </tbody>
</table>`}}},render:()=>s(e`<table style="height: 100px;" class="table table-bordered">
        <tbody>
          <tr>
            <td class="align-baseline">baseline</td>
            <td class="align-top">top</td>
            <td class="align-middle">middle</td>
            <td class="align-bottom">bottom</td>
            <td class="align-text-top">text-top</td>
            <td class="align-text-bottom">text-bottom</td>
          </tr>
        </tbody>
      </table>`)};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Con elementi inline',
  tags: ['!dev'],
  parameters: {
    docs: {
      source: {
        code: \`<span class="bg-primary text-white p-1 align-baseline">baseline</span>
<span class="bg-primary text-white p-1 align-top">top</span>
<span class="bg-primary text-white p-1 align-middle">middle</span>
<span class="bg-primary text-white p-1 align-bottom">bottom</span>
<span class="bg-primary text-white p-1 align-text-top">text-top</span>
<span class="bg-primary text-white p-1 align-text-bottom">text-bottom</span>\`
      }
    }
  },
  render: () => wrapExample(html\`<span class="bg-primary text-white p-1 align-baseline">baseline</span>
        <span class="bg-primary text-white p-1 align-top">top</span>
        <span class="bg-primary text-white p-1 align-middle">middle</span>
        <span class="bg-primary text-white p-1 align-bottom">bottom</span>
        <span class="bg-primary text-white p-1 align-text-top">text-top</span>
        <span class="bg-primary text-white p-1 align-text-bottom">text-bottom</span>\`)
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Con celle di tabella',
  tags: ['!dev'],
  parameters: {
    docs: {
      source: {
        code: \`<table style="height: 100px;" class="table table-bordered">
  <tbody>
    <tr>
      <td class="align-baseline">baseline</td>
      <td class="align-top">top</td>
      <td class="align-middle">middle</td>
      <td class="align-bottom">bottom</td>
      <td class="align-text-top">text-top</td>
      <td class="align-text-bottom">text-bottom</td>
    </tr>
  </tbody>
</table>\`
      }
    }
  },
  render: () => wrapExample(html\`<table style="height: 100px;" class="table table-bordered">
        <tbody>
          <tr>
            <td class="align-baseline">baseline</td>
            <td class="align-top">top</td>
            <td class="align-middle">middle</td>
            <td class="align-bottom">bottom</td>
            <td class="align-text-top">text-top</td>
            <td class="align-text-bottom">text-bottom</td>
          </tr>
        </tbody>
      </table>\`)
}`,...a.parameters?.docs?.source}}};const l=["ConElementiInline","ConCelleDiTabella"],p=Object.freeze(Object.defineProperty({__proto__:null,ConCelleDiTabella:a,ConElementiInline:t,__namedExportsOrder:l,default:n},Symbol.toStringTag,{value:"Module"}));export{t as C,p as S,a};

import{b as a,o as t}from"./iframe-CDz1eqbY.js";const p=["lg","sm","xs"],c=["primary","secondary","success","danger","warning","link"],d="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",e=n=>a`
  <it-collapse
    ?expanded="${t(n.expanded)}"
    ?default-open="${n.defaultOpen}"
    variant="${t(n.variant)}"
    size="${t(n.size||void 0)}"
    ?outline="${t(n.outline)}"
    as="${t(n.as)}"
  >
    ${n.slot}
    <span slot="label">${n.slot?"":n.label||"Toggle collapse"}</span>
    <div slot="content" style="padding: 1.5rem 1rem; background-color: #fff;">${n.content||d}</div>
  </it-collapse>
`,m={title:"Componenti/Collapse",tags:["web-component","a11y-ok"],component:"it-collapse",args:{defaultOpen:!1,content:d,variant:"primary",size:"",outline:!1,as:"button"},argTypes:{as:{control:"text",description:"Tipo di elemento HTML da utilizzare come trigger (es. button, a, div). Utilizza solo tag idonei per il ruolo di pulsante.",table:{defaultValue:{summary:"button"}}},variant:{control:"select",description:"Variante di stile del trigger, basata sulle varianti Bootstrap Italia dei pulsanti.",options:c,type:"string",table:{defaultValue:{summary:"primary"}}},size:{control:"select",description:"Dimensione del trigger, basata sulle dimensioni Bootstrap Italia dei pulsanti.",options:p,type:"string",table:{defaultValue:{summary:void 0}}},outline:{control:"boolean",description:"Se true, applica lo stile outline Bootstrap Italia dei pulsanti al trigger.",table:{defaultValue:{summary:"false"}}},defaultOpen:{control:"boolean",description:"Se true, il collapse è aperto di default al primo rendering",table:{defaultValue:{summary:"false"}},name:"default-open"},content:{control:"text",description:"Contenuto del collapse (slot content), solo per playground interattivo."}},parameters:{layout:"padded"},decorators:[n=>a`<div style="display:flex;flex-direction:column;gap:1rem">${n()}</div>`]},r={name:"Esempio interattivo",tags:["!autodocs","!dev"],parameters:{docs:{canvas:{sourceState:"hidden"}}},render:n=>e(n)},o={render:()=>a`
    ${e({label:"Apri sezione (button)",as:"button",variant:"primary"})}
    ${e({label:"Apri sezione (a)",as:"a",variant:"link"})}
  `},s={name:"Varianti del trigger",render:()=>a`
    ${e({label:"Pulsante primary",variant:"primary",as:"button"})}
    ${e({label:"Pulsante secondary",variant:"secondary",as:"button"})}
    ${e({label:"Pulsante success",variant:"success",as:"button"})}
    ${e({label:"Pulsante danger",variant:"danger",as:"button"})}
    ${e({label:"Pulsante warning",variant:"warning",as:"button"})}
    ${e({label:"Pulsante link",variant:"link",as:"button"})}
    ${e({label:"Pulsante outline primary",variant:"primary",outline:!0,as:"button"})}
    ${e({label:"Pulsante outline secondary",variant:"secondary",outline:!0,as:"button"})}
    ${e({label:"Pulsante outline success",variant:"success",outline:!0,as:"button"})}
    ${e({label:"Pulsante outline danger",variant:"danger",outline:!0,as:"button"})}
    ${e({label:"Pulsante outline warning",variant:"warning",outline:!0,as:"button"})}
    ${e({label:"Pulsante xs",size:"xs",variant:"primary",as:"button"})}
    ${e({label:"Pulsante default",size:"",variant:"primary",as:"button"})}
    ${e({label:"Pulsante lg",size:"lg",variant:"primary",as:"button"})}
  `},l={name:"Stato iniziale aperto",render:()=>a`
    ${e({label:"Apri sezione (espansa di default)",defaultOpen:!0,as:"button"})}
    ${e({label:"Apri sezione",as:"button"})}
  `},i={name:"Link come trigger",render:()=>a`
    ${e({label:"Link per aprire il collapse",as:"a"})}
  `},u={name:"Trigger personalizzato",render:()=>a`
    <it-collapse>
      <button class="my-custom-collapse-button" slot="trigger"><span slot="label">Trigger custom</span></button>

      <div slot="content" style="padding: 1.5rem 1rem; background-color: #fff;">${d}</div>
    </it-collapse>
    <style>
      .my-custom-collapse-button {
        background-color: #e0e0e0;
        border: none;
        padding: 10px 20px;
        border-radius: 4px;
        cursor: pointer;
        font-size: 1rem;
      }
      .my-custom-collapse-button:hover {
        background-color: #d5d5d5;
      }
    </style>
  `};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Esempio interattivo',
  tags: ['!autodocs', '!dev'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'hidden'
      }
    }
  },
  render: args => renderComponent(args)
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    \${renderComponent({
    label: 'Apri sezione (button)',
    as: 'button',
    variant: 'primary'
  })}
    \${renderComponent({
    label: 'Apri sezione (a)',
    as: 'a',
    variant: 'link'
  })}
  \`
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Varianti del trigger',
  render: () => html\`
    \${renderComponent({
    label: 'Pulsante primary',
    variant: 'primary',
    as: 'button'
  })}
    \${renderComponent({
    label: 'Pulsante secondary',
    variant: 'secondary',
    as: 'button'
  })}
    \${renderComponent({
    label: 'Pulsante success',
    variant: 'success',
    as: 'button'
  })}
    \${renderComponent({
    label: 'Pulsante danger',
    variant: 'danger',
    as: 'button'
  })}
    \${renderComponent({
    label: 'Pulsante warning',
    variant: 'warning',
    as: 'button'
  })}
    \${renderComponent({
    label: 'Pulsante link',
    variant: 'link',
    as: 'button'
  })}
    \${renderComponent({
    label: 'Pulsante outline primary',
    variant: 'primary',
    outline: true,
    as: 'button'
  })}
    \${renderComponent({
    label: 'Pulsante outline secondary',
    variant: 'secondary',
    outline: true,
    as: 'button'
  })}
    \${renderComponent({
    label: 'Pulsante outline success',
    variant: 'success',
    outline: true,
    as: 'button'
  })}
    \${renderComponent({
    label: 'Pulsante outline danger',
    variant: 'danger',
    outline: true,
    as: 'button'
  })}
    \${renderComponent({
    label: 'Pulsante outline warning',
    variant: 'warning',
    outline: true,
    as: 'button'
  })}
    \${renderComponent({
    label: 'Pulsante xs',
    size: 'xs',
    variant: 'primary',
    as: 'button'
  })}
    \${renderComponent({
    label: 'Pulsante default',
    size: '',
    variant: 'primary',
    as: 'button'
  })}
    \${renderComponent({
    label: 'Pulsante lg',
    size: 'lg',
    variant: 'primary',
    as: 'button'
  })}
  \`
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Stato iniziale aperto',
  render: () => html\`
    \${renderComponent({
    label: 'Apri sezione (espansa di default)',
    defaultOpen: true,
    as: 'button'
  })}
    \${renderComponent({
    label: 'Apri sezione',
    as: 'button'
  })}
  \`
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Link come trigger',
  render: () => html\`
    \${renderComponent({
    label: 'Link per aprire il collapse',
    as: 'a'
  })}
  \`
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Trigger personalizzato',
  render: () => html\`
    <it-collapse>
      <button class="my-custom-collapse-button" slot="trigger"><span slot="label">Trigger custom</span></button>

      <div slot="content" style="padding: 1.5rem 1rem; background-color: #fff;">\${CONTENT}</div>
    </it-collapse>
    <style>
      .my-custom-collapse-button {
        background-color: #e0e0e0;
        border: none;
        padding: 10px 20px;
        border-radius: 4px;
        cursor: pointer;
        font-size: 1rem;
      }
      .my-custom-collapse-button:hover {
        background-color: #d5d5d5;
      }
    </style>
  \`
}`,...u.parameters?.docs?.source}}};const b=["EsempioInterattivo","Comportamento","TriggerClassi","Aperto","LinkCollapse","TriggerPersonalizzato"],v=Object.freeze(Object.defineProperty({__proto__:null,Aperto:l,Comportamento:o,EsempioInterattivo:r,LinkCollapse:i,TriggerClassi:s,TriggerPersonalizzato:u,__namedExportsOrder:b,default:m},Symbol.toStringTag,{value:"Module"}));export{l as A,v as C,r as E,i as L,s as T,o as a,u as b};

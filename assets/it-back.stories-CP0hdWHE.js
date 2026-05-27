import{b as n}from"./iframe-ClE6dn2R.js";const r={title:"Componenti/Back",component:"it-back",tags:["documentation","a11y-ok"],render:()=>n`<div class="hide-preview"></div>`,parameters:{docs:{description:{component:`
    <Description>Elemento di navigazione per tornare alla pagina o alla schermata precedente</Description>
            `.trim()}}}},a={render:()=>n`
    <a
      href="#"
      class="go-back"
      @click=${i=>{i.preventDefault(),window.history.back()}}
    >
      <it-icon name="it-arrow-left" size="sm" color="primary"></it-icon>
      <span>Torna indietro</span>
    </a>
  `},o={decorators:[i=>n` <div class="d-flex gap-3 flex-wrap"><!-- Inizio esempi -->${i()}<!-- Fine esempi --></div> `],render:()=>n`
    <it-button
      variant="primary"
      class="go-back"
      @click=${()=>{window.history.back()}}
    >
      <it-icon name="it-arrow-left" size="sm" color="inverse"></it-icon>
      <span>Torna indietro</span>
    </it-button>
    <it-button
      variant="primary"
      class="go-back"
      @click=${()=>{window.history.back()}}
    >
      <it-icon name="it-arrow-up" size="sm" color="inverse"></it-icon>
      <span>Torna indietro</span>
    </it-button>
  `},e={name:"Pulsante con sola icona",decorators:[i=>n` <div class="d-flex gap-3 flex-wrap"><!-- Inizio esempi -->${i()}<!-- Fine esempi --></div> `],render:()=>n`
    <it-button
      variant="primary"
      class="go-back"
      @click=${()=>{window.history.back()}}
    >
      <it-icon name="it-arrow-left" size="sm" color="inverse"></it-icon>
      <span class="visually-hidden">Torna indietro</span>
    </it-button>
    <it-button
      variant="primary"
      class="go-back"
      @click=${()=>{window.history.back()}}
    >
      <it-icon name="it-arrow-up" size="sm" color="inverse"></it-icon>
      <span class="visually-hidden">Torna indietro</span>
    </it-button>
  `};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <a
      href="#"
      class="go-back"
      @click=\${(e: Event) => {
    e.preventDefault();
    window.history.back();
  }}
    >
      <it-icon name="it-arrow-left" size="sm" color="primary"></it-icon>
      <span>Torna indietro</span>
    </a>
  \`
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  decorators: [story => html\` <div class="d-flex gap-3 flex-wrap"><!-- Inizio esempi -->\${story()}<!-- Fine esempi --></div> \`],
  render: () => html\`
    <it-button
      variant="primary"
      class="go-back"
      @click=\${() => {
    window.history.back();
  }}
    >
      <it-icon name="it-arrow-left" size="sm" color="inverse"></it-icon>
      <span>Torna indietro</span>
    </it-button>
    <it-button
      variant="primary"
      class="go-back"
      @click=\${() => {
    window.history.back();
  }}
    >
      <it-icon name="it-arrow-up" size="sm" color="inverse"></it-icon>
      <span>Torna indietro</span>
    </it-button>
  \`
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'Pulsante con sola icona',
  decorators: [story => html\` <div class="d-flex gap-3 flex-wrap"><!-- Inizio esempi -->\${story()}<!-- Fine esempi --></div> \`],
  render: () => html\`
    <it-button
      variant="primary"
      class="go-back"
      @click=\${() => {
    window.history.back();
  }}
    >
      <it-icon name="it-arrow-left" size="sm" color="inverse"></it-icon>
      <span class="visually-hidden">Torna indietro</span>
    </it-button>
    <it-button
      variant="primary"
      class="go-back"
      @click=\${() => {
    window.history.back();
  }}
    >
      <it-icon name="it-arrow-up" size="sm" color="inverse"></it-icon>
      <span class="visually-hidden">Torna indietro</span>
    </it-button>
  \`
}`,...e.parameters?.docs?.source}}};const t=["Link","Pulsante","PulsanteSolaIcona"],c=Object.freeze(Object.defineProperty({__proto__:null,Link:a,Pulsante:o,PulsanteSolaIcona:e,__namedExportsOrder:t,default:r},Symbol.toStringTag,{value:"Module"}));export{c as B,a as L,o as P,e as a};

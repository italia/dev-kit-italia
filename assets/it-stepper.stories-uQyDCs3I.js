import{b,o as a}from"./iframe-LX9gLJPF.js";const h=["text","icons","numbers"],x=["bar","dots",""],f=[{label:"Primo contenuto",icon:"it-calendar"},{label:"Secondo contenuto",icon:"it-lock"},{label:"Terzo contenuto",icon:"it-settings"}],E=b`
  <style>
    .stepper-variant-stack {
      display: flex;
      flex-direction: column;
      gap: var(--bsi-spacing-xl);
    }
  </style>
`,$=[(e,o)=>{const s=o.parameters.stepperDemo??{},k=[s.dark??o.args.dark?"bg-dark p-4":"",s.stack?"stepper-variant-stack":""].filter(Boolean).join(" ");return b`
      ${E}
      <div class=${k}>${e()}</div>
    `}],r=(e,o=f)=>b`
  <it-stepper
    current=${e.current}
    ?dark=${e.dark}
    header-variant=${a(e["header-variant"]||void 0)}
    mobile-progress=${a(e["mobile-progress"]||void 0)}
    ?mobile-progress-on-desktop=${e["mobile-progress-on-desktop"]}
    prev-label=${a(e["prev-label"]||void 0)}
    next-label=${a(e["next-label"]||void 0)}
    confirm-label=${a(e["confirm-label"]||void 0)}
    ?show-confirm=${e["show-confirm"]}
    save-label=${a(e["save-label"]||void 0)}
    save-title=${a(e["save-title"]||void 0)}
    save-description=${a(e["save-description"]||void 0)}
  >
    ${o.map((s,S)=>b`
        <it-stepper-step icon=${s.icon}>
          <span slot="label">${s.label}</span>
          <div class="p-5 text-center border ${e.dark?"text-white":"bg-light"}">
            <p class="m-0">Contenuto dello step ${S+1}</p>
          </div>
        </it-stepper-step>
      `)}
  </it-stepper>
`,y={title:"Componenti/Stepper",tags:["alpha","web-component"],component:"it-stepper",args:{current:1,dark:!1,"header-variant":"","mobile-progress":"","mobile-progress-on-desktop":!1,"prev-label":"","next-label":"","confirm-label":"","show-confirm":!1,"save-label":"","save-title":"","save-description":""},argTypes:{current:{control:{type:"number",min:0,max:5,step:1},description:"Indice (0-based) dello step attivo.",name:"current",table:{defaultValue:{summary:"0"}}},dark:{control:"boolean",description:"Visualizza lo stepper su sfondo scuro.",name:"dark",table:{defaultValue:{summary:"false"}}},"header-variant":{control:"select",options:h,description:"Variante dell'intestazione degli step: solo testo, icone o numeri.",name:"header-variant",table:{defaultValue:{summary:"text"}}},"mobile-progress":{control:"select",options:x,description:"Indicatore di progresso mostrato su mobile tra i pulsanti di navigazione.",name:"mobile-progress",table:{defaultValue:{summary:""}}},"mobile-progress-on-desktop":{control:"boolean",description:"Mostra progress bar o pallini anche su viewport desktop.",name:"mobile-progress-on-desktop",table:{defaultValue:{summary:"false"}}},"prev-label":{control:"text",description:'Etichetta del pulsante "Indietro".',name:"prev-label",table:{defaultValue:{summary:"Indietro"}}},"next-label":{control:"text",description:'Etichetta del pulsante "Avanti".',name:"next-label",table:{defaultValue:{summary:"Avanti"}}},"confirm-label":{control:"text",description:'Etichetta del pulsante "Conferma" (visibile quando `show-confirm` è attivo).',name:"confirm-label",table:{defaultValue:{summary:"Conferma"}}},"show-confirm":{control:"boolean",description:'Mostra il pulsante "Conferma" al posto del pulsante "Avanti".',name:"show-confirm",table:{defaultValue:{summary:"false"}}},"save-label":{control:"text",description:`Etichetta del pulsante "Salva". Se vuoto, l'area di salvataggio non viene mostrata.`,name:"save-label",table:{defaultValue:{summary:""}}},"save-title":{control:"text",description:"Titolo della sezione di salvataggio. Mostrato solamente se viene aggiunto anche `save-label`.",name:"save-title",table:{defaultValue:{summary:""}}},"save-description":{control:"text",description:"Testo descrittivo della sezione di salvataggio. Mostrato solamente se viene aggiunto anche `save-label`.",name:"save-description",table:{defaultValue:{summary:""}}}},parameters:{pageLayout:"w-100",docs:{source:{excludeDecorators:!0}}},decorators:$},t={name:"Esempio interattivo",tags:["!dev"],parameters:{docs:{canvas:{sourceState:"shown"}}},render:e=>r(e)},n={name:"Solo testo",args:{"header-variant":"text"},render:e=>r(e)},i={name:"Testo e icone",args:{"header-variant":"icons"},render:e=>r(e)},l={name:"Testo e numeri",args:{"header-variant":"numbers"},render:e=>r(e)},c={name:"Navigazione degli step",args:{"next-label":"Successivo","prev-label":"Precedente"},render:e=>r(e)},d={args:{"mobile-progress":"bar","mobile-progress-on-desktop":!0},render:e=>r(e)},p={args:{"mobile-progress":"dots","mobile-progress-on-desktop":!0},render:e=>r(e)},m={args:{"save-label":"Salva","save-title":"Vuoi salvare il progresso?","save-description":"Potrai riprendere il flusso da questo punto in poi."},render:e=>r(e)},u={args:{"show-confirm":!0,"confirm-label":"Conferma"},render:e=>r(e)},v={name:"Sfondo scuro",args:{dark:!0},render:e=>r(e)},g={name:"Sfondo scuro - varianti intestazione",parameters:{backgrounds:{default:"dark"},stepperDemo:{dark:!0,stack:!0}},render:e=>b`
    ${["text","icons","numbers"].map(o=>r({...e,dark:!0,"header-variant":o},f))}
  `};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Esempio interattivo',
  tags: ['!dev'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      }
    }
  },
  render: args => renderStepper(args)
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Solo testo',
  args: {
    'header-variant': 'text'
  },
  render: args => renderStepper(args)
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Testo e icone',
  args: {
    'header-variant': 'icons'
  },
  render: args => renderStepper(args)
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Testo e numeri',
  args: {
    'header-variant': 'numbers'
  },
  render: args => renderStepper(args)
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Navigazione degli step',
  args: {
    'next-label': 'Successivo',
    'prev-label': 'Precedente'
  },
  render: args => renderStepper(args)
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    'mobile-progress': 'bar',
    'mobile-progress-on-desktop': true
  },
  render: args => renderStepper(args)
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    'mobile-progress': 'dots',
    'mobile-progress-on-desktop': true
  },
  render: args => renderStepper(args)
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    'save-label': 'Salva',
    'save-title': 'Vuoi salvare il progresso?',
    'save-description': 'Potrai riprendere il flusso da questo punto in poi.'
  },
  render: args => renderStepper(args)
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    'show-confirm': true,
    'confirm-label': 'Conferma'
  },
  render: args => renderStepper(args)
}`,...u.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Sfondo scuro',
  args: {
    dark: true
  },
  render: args => renderStepper(args)
}`,...v.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Sfondo scuro - varianti intestazione',
  parameters: {
    backgrounds: {
      default: 'dark'
    },
    stepperDemo: {
      dark: true,
      stack: true
    }
  },
  render: args => html\`
    \${(['text', 'icons', 'numbers'] as const).map(variant => renderStepper({
    ...args,
    dark: true,
    'header-variant': variant
  }, headerSteps))}
  \`
}`,...g.parameters?.docs?.source}}};const T=["EsempioInterattivo","SoloTesto","TestoEIcone","TestoENumeri","Navigazione","ProgressBar","Pallini","Salva","Conferma","SfondoScuro","SfondoScuroVarianti"],P=Object.freeze(Object.defineProperty({__proto__:null,Conferma:u,EsempioInterattivo:t,Navigazione:c,Pallini:p,ProgressBar:d,Salva:m,SfondoScuro:v,SfondoScuroVarianti:g,SoloTesto:n,TestoEIcone:i,TestoENumeri:l,__namedExportsOrder:T,default:y},Symbol.toStringTag,{value:"Module"}));export{u as C,t as E,c as N,d as P,P as S,i as T,n as a,l as b,p as c,m as d,v as e,g as f};

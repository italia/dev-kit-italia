import{o as s,b as r}from"./iframe-BAOCzTeu.js";const a=e=>e.type==="donut"?r`
      <it-progress
        type="donut"
        value="${e.value}"
        it-aria-label="${s(e["it-aria-label"]||void 0)}"
        color="${s(e.color||void 0)}"
      ></it-progress>
    `:e.type==="spinner"?r`
      <it-progress
        type="spinner"
        ?active="${e.active}"
        ?double="${e.double}"
        size="${e.size}"
        it-aria-label="${s(e["it-aria-label"]||void 0)}"
      >
        <span class="visually-hidden">Caricamento...</span>
      </it-progress>
    `:r`
    <it-progress
      type="bar"
      value="${e.value}"
      it-aria-label="${s(e["it-aria-label"]||void 0)}"
      ?show-value="${e.showValue}"
      label="${s(e.label||void 0)}"
      ?indeterminate="${e.indeterminate}"
      color="${s(e.color!=="default"?e.color:void 0)}"
    ></it-progress>
  `,v={title:"Componenti/Progress",tags:["a11y-ok","web-component"],component:"it-progress",args:{type:"bar",value:50,"it-aria-label":"Caricamento",showValue:!1,label:"",indeterminate:!1,color:"default",active:!0,double:!1,size:"md"},argTypes:{type:{control:"select",options:["bar","donut","spinner"],description:"Tipologia di progress indicator",table:{defaultValue:{summary:"bar"}}},value:{control:{type:"range",min:0,max:100,step:1},description:"Percentuale di avanzamento (da 0 a 100)",table:{defaultValue:{summary:"50"}}},showValue:{name:"show-value",control:"boolean",description:'mostra la percentuale di avanzamento <br/><i>(solo per `type="bar"`)</i>',table:{defaultValue:{summary:"false"}}},"it-aria-label":{control:"text",description:"Etichetta accessibile per gli screen reader (aria-label)",table:{defaultValue:{summary:"Caricamento"}}},label:{name:"label",control:"text",description:'se si vuole mostrare un testo personalizzato per l\'etichetta, invece della percentuale di avanzamento <br/><i>(solo per `type="bar"`)</i>'},indeterminate:{control:"boolean",description:'stato indeterminato (animazione infinita) <br/><i>(solo per `type="bar"`)</i>',table:{defaultValue:{summary:"false"}}},color:{control:"text",description:'<strong>Bar:</strong> default|success|info|warning|danger. <br/><br/><strong>Donut:</strong>  colore CSS della barra (default: `var(--bsi-secondary)`)<br/><br/><i>(solo per `type="bar"` e `type="donut"`)</i>',table:{defaultValue:{summary:"default"}}},active:{control:"boolean",description:'attiva/disattiva l\'animazione <br/><i>(solo per `type="spinner"`)</i>',table:{defaultValue:{summary:"true"}}},double:{control:"boolean",description:'variante doppia <br/><i>(solo per `type="spinner"`)</i>',table:{defaultValue:{summary:"false"}}},size:{control:"select",options:["sm","md","lg","xl"],description:'dimensione <br/><i>(solo per `type="spinner"`)</i>',table:{defaultValue:{summary:"md"}}}},parameters:{pageLayout:"w-100"}},o={name:"Esempio interattivo",tags:["!dev"],args:{type:"bar",value:50,color:"default",showValue:!1,label:"",indeterminate:!1},parameters:{docs:{canvas:{sourceState:"shown"}}},render:a},i={args:{type:"bar",value:50},parameters:{controls:{exclude:["active","double","size"]}},render:a},n={name:"Bar con etichetta",args:{type:"bar",value:35,showValue:!0,label:"35%"},render:e=>r`
    <it-progress type="bar" value="${e.value}" ?show-value="${e.showValue}" it-aria-label="Progresso">
      ${e.label}
    </it-progress>
  `},l={name:"Bar indeterminata",args:{type:"bar",indeterminate:!0},render:e=>r`
    <it-progress type="bar" ?indeterminate="${e.indeterminate}" it-aria-label="In elaborazione..."></it-progress>
  `},c={name:"Bar: varianti di colore",render:()=>r`
    <div style="display: flex; flex-direction: column; gap: 12px;">
      <it-progress type="bar" value="25" color="success" it-aria-label="Caricamento - successo"></it-progress>
      <it-progress type="bar" value="33" color="info" it-aria-label="Caricamento - info"></it-progress>
      <it-progress type="bar" value="50" color="warning" it-aria-label="Caricamento - warning"></it-progress>
      <it-progress type="bar" value="66" color="danger" it-aria-label="Caricamento - danger"></it-progress>
    </div>
  `},p={name:"Pulsante con progress bar",args:{type:"bar",showValue:!1},parameters:{pageLayout:""},render:e=>r`
    <it-button variant="primary" disabled class="m-4">
      Label del pulsante
      <it-icon name="it-github" color="inverse"></it-icon>
      ${a({...e,type:"bar"})}
    </it-button>

    <it-button variant="secondary" disabled class="m-4">
      Label del pulsante
      <it-icon name="it-github" color="inverse"></it-icon>
      ${a({...e,type:"bar"})}
    </it-button>
  `},d={args:{type:"donut",value:75,"it-aria-label":"Caricamento"},parameters:{controls:{exclude:["show-value","label","indeterminate","active","double","size"]},pageLayout:"center"},render:e=>r`
    <div class="row">
      <div class="col-6 px-5">
        <div class="text-center mb-3">Stato iniziale<br />(0%):</div>
        ${a({...e,value:0})}
      </div>
      <div class="col-6 px-5">
        <div class="text-center mb-3">Stato di avanzamento<br />(75%):</div>
        ${a({...e})}
      </div>
    </div>
  `},b=(e,t)=>r`
  <div class="row">
    <div class="col-3">
      <p class="my-3">${t} standard</p>
      ${a({...e,type:"spinner",active:!1})}
    </div>
    <div class="col-3">
      <p class="my-3">${t} attivo</p>
      ${a({...e,type:"spinner",active:!0})}
    </div>
    <div class="col-3">
      <p class="my-3">${t} small</p>
      ${a({...e,type:"spinner",active:!1,size:"sm"})}
    </div>
    <div class="col-3">
      <p class="my-3">${t} small attivo</p>
      ${a({...e,type:"spinner",active:!0,size:"sm"})}
    </div>
  </div>
  <div class="row">
    <div class="col-3">
      <p class="my-3">${t} large</p>
      ${a({...e,type:"spinner",active:!1,size:"lg"})}
    </div>
    <div class="col-3">
      <p class="my-3">${t} large attivo</p>
      ${a({...e,type:"spinner",active:!0,size:"lg"})}
    </div>
    <div class="col-3">
      <p class="my-3">${t} extralarge</p>
      ${a({...e,type:"spinner",active:!1,size:"xl"})}
    </div>
    <div class="col-3">
      <p class="my-3">${t} extralarge attivo</p>
      ${a({...e,type:"spinner",active:!0,size:"xl"})}
    </div>
  </div>
`,u={args:{type:"spinner",active:!0,double:!1,size:"md"},parameters:{controls:{exclude:["show-value","label","indeterminate"]}},render:e=>b(e,"Spinner")},m={name:"Spinner doppio",args:{type:"spinner",active:!0,double:!0,size:"md"},render:e=>b(e,"Spinner doppio")};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Esempio interattivo',
  tags: ['!dev'],
  args: {
    type: 'bar',
    value: 50,
    color: 'default',
    showValue: false,
    label: '',
    indeterminate: false
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      }
    }
  },
  render: renderComponent
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'bar',
    value: 50
  },
  parameters: {
    controls: {
      exclude: ['active', 'double', 'size']
    }
  },
  render: renderComponent
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Bar con etichetta',
  args: {
    type: 'bar',
    value: 35,
    showValue: true,
    label: '35%'
  },
  render: params => html\`
    <it-progress type="bar" value="\${params.value}" ?show-value="\${params.showValue}" it-aria-label="Progresso">
      \${params.label}
    </it-progress>
  \`
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Bar indeterminata',
  args: {
    type: 'bar',
    indeterminate: true
  },
  render: params => html\`
    <it-progress type="bar" ?indeterminate="\${params.indeterminate}" it-aria-label="In elaborazione..."></it-progress>
  \`
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Bar: varianti di colore',
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 12px;">
      <it-progress type="bar" value="25" color="success" it-aria-label="Caricamento - successo"></it-progress>
      <it-progress type="bar" value="33" color="info" it-aria-label="Caricamento - info"></it-progress>
      <it-progress type="bar" value="50" color="warning" it-aria-label="Caricamento - warning"></it-progress>
      <it-progress type="bar" value="66" color="danger" it-aria-label="Caricamento - danger"></it-progress>
    </div>
  \`
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Pulsante con progress bar',
  args: {
    type: 'bar',
    showValue: false
  },
  parameters: {
    pageLayout: ''
  },
  render: params => html\`
    <it-button variant="primary" disabled class="m-4">
      Label del pulsante
      <it-icon name="it-github" color="inverse"></it-icon>
      \${renderComponent({
    ...params,
    type: 'bar'
  })}
    </it-button>

    <it-button variant="secondary" disabled class="m-4">
      Label del pulsante
      <it-icon name="it-github" color="inverse"></it-icon>
      \${renderComponent({
    ...params,
    type: 'bar'
  })}
    </it-button>
  \`
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'donut',
    value: 75,
    'it-aria-label': 'Caricamento'
  },
  parameters: {
    controls: {
      exclude: ['show-value', 'label', 'indeterminate', 'active', 'double', 'size']
    },
    pageLayout: 'center'
  },
  render: (params: ProgressStoryProps) => html\`
    <div class="row">
      <div class="col-6 px-5">
        <div class="text-center mb-3">Stato iniziale<br />(0%):</div>
        \${renderComponent({
    ...params,
    value: 0
  })}
      </div>
      <div class="col-6 px-5">
        <div class="text-center mb-3">Stato di avanzamento<br />(75%):</div>
        \${renderComponent({
    ...params
  })}
      </div>
    </div>
  \`
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'spinner',
    active: true,
    double: false,
    size: 'md'
  },
  parameters: {
    controls: {
      exclude: ['show-value', 'label', 'indeterminate']
    }
  },
  render: params => renderSpinner(params, 'Spinner')
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Spinner doppio',
  args: {
    type: 'spinner',
    active: true,
    double: true,
    size: 'md'
  },
  render: params => renderSpinner(params, 'Spinner doppio')
}`,...m.parameters?.docs?.source}}};const g=["EsempioInterattivo","Bar","ConEtichetta","Indeterminato","Colori","Button","Donut","Spinner","SpinnerDoppio"],f=Object.freeze(Object.defineProperty({__proto__:null,Bar:i,Button:p,Colori:c,ConEtichetta:n,Donut:d,EsempioInterattivo:o,Indeterminato:l,Spinner:u,SpinnerDoppio:m,__namedExportsOrder:g,default:v},Symbol.toStringTag,{value:"Module"}));export{p as B,n as C,d as D,o as E,l as I,f as P,u as S,c as a,m as b};

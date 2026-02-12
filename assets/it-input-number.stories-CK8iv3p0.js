import{b as a,o as n}from"./iframe-C0TrFRga.js";import{I as c}from"./types-CucKb5le.js";const t=e=>a` <it-input
    id="${n(e.id||void 0)}"
    type="number"
    name="${n(e.name||void 0)}"
    value="${n(e.value||void 0)}"
    ?disabled="${e.disabled}"
    ?custom-validation="${e.customValidation}"
    validity-message="${n(e.validityMessage||void 0)}"
    min="${n(e.min||void 0)}"
    max="${n(e.max||void 0)}"
    step="${n(e.step||void 0)}"
    ?required="${e.required}"
    ?readonly="${e.readonly}"
    ?plaintext="${e.plaintext}"
    placeholder="${n(e.placeholder||void 0)}"
    support-text="${n(e.supportText||void 0)}"
    size="${n(e.size||void 0)}"
    ?adaptive="${e.adaptive}"
  >
    <span slot="label">${e.label}</span>${n(e.children||void 0)}
  </it-input>`,r={title:"Componenti/Form/Input Numerico",tags:["autodocs","a11y-ok","web-component"],component:"it-input",args:{id:"",label:"Input Number",type:"number",name:"inputNumber",value:"100",disabled:!1,customValidation:!1,validityMessage:"",min:void 0,max:void 0,step:void 0,required:!1,readonly:!1,plaintext:!1,placeholder:"",supportText:"",size:void 0,adaptive:!1},argTypes:{label:{control:"text",description:"Etichetta del campo"},type:{control:"select",options:["number"],fixed:!0,table:{defaultValue:{summary:"number"}}},name:{control:"text"},value:{control:"text",description:"Valore del campo"},disabled:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},customValidation:{name:"custom-validation",control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}},description:"Se la validazione del campo è fatta esternamente (lato server o con plugin js), impostare questo attributo a `true`."},validityMessage:{name:"validity-message",control:"text",description:"Messaggio da mostrare quando il campo è invalido nel caso di validazione esterna (validazione custom). Se impostato a '' (stringa vuota) il campo viene considerato valido."},min:{control:"number",description:"Valore minimo consentito",type:"number"},max:{control:"number",description:"Valore massimo consentito",type:"number"},step:{control:"number",description:"Incremento per ogni step (utilizzato dai pulsanti +/-)",type:"number"},required:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},readonly:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},plaintext:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}},description:"Se il campo è `readonly`, con l'attributo 'plaintext' il campo assume l'aspetto di testo normalizzato."},placeholder:{control:"text",description:"Testo segnaposto"},supportText:{name:"support-text",control:"text",description:"Testo di supporto"},size:{control:{type:"select",labels:{undefined:"(non definito)",sm:"sm",lg:"lg"}},options:c,description:"Dimensione del campo: 'sm' | (non definito) | 'lg' ",table:{defaultValue:{summary:void 0}},type:"string"},adaptive:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}},description:'Se il campo è `type="number"`, con l\'attributo `adaptive` il campo assume adatta la sua larghezza al contenuto'}}},i={...r,name:"Esempio interattivo",tags:["!autodocs","!dev"],parameters:{docs:{canvas:{sourceState:"shown"}}},render:e=>a`${t({...e,label:"Input Numerico",name:"inputNumber",id:"exampleInputNumber"})}`},o={...r,parameters:{docs:{description:{story:`
La larghezza del campo predefinita è quella del suo contenitore. Per limitare la larghezza alle dimensioni del valore contenuto, utilizza il ridimensionamento adattivo.
`}}},args:{value:"100"},render:e=>a`
    <div class="w-100">
      ${t({...e,label:"Input Numerico inserito in una colonna a tutta larghezza",name:"inputNumberFull",id:"inputNumberFull"})}
    </div>
    <div class="w-50">
      ${t({...e,label:"Input Numerico inserito in una colonna di larghezza 50%",name:"inputNumberHalf",id:"inputNumberHalf"})}
    </div>
  `},s={...r,name:"Limiti e Step",parameters:{docs:{description:{story:'\nAggiungendo gli attributi HTML `min=""`, `max=""` e `step=""` all\'input, puoi limitare il valore minimo e massimo del campo e decidere di quanto varierà a ogni click sui pulsanti.\n'}}},args:{value:"100",min:0,max:200,step:10},render:e=>a`
    ${t({...e,label:"Min, Max & Step",name:"inputNumberLimits",id:"inputNumberLimits"})}
  `},l={...r,parameters:{docs:{description:{story:"\nPer anteporre il simbolo della valuta (ad esempio in Euro), utilizza lo slot `prepend`.\n"}}},args:{value:"3.50",step:.01,min:0},render:e=>a`
    ${t({...e,label:"Currency",name:"inputNumberCurrency",id:"inputNumberCurrency",children:a`<span slot="prepend" class="fw-semibold">&euro;</span> `})}
  `},u={...r,parameters:{docs:{description:{story:'\nPer anteporre il simbolo percentuale, utilizza lo slot `prepend`.\n\nTi consigliamo di impostare gli attributi `min="0"` e `max="100"`.\n'}}},args:{value:"50",step:10,min:0,max:100},render:e=>a`
    ${t({...e,label:"Percentage",name:"inputNumberPercent",id:"inputNumberPercent",children:a`<span slot="prepend" class="fw-semibold">%</span> `})}
  `},m={...r,parameters:{docs:{description:{story:"\nPer disabilitare un Input number, aggiungi l'attributo `disabled` al componente `<it-input>`.\n"}}},args:{value:"50",disabled:!0},render:e=>a`
    ${t({...e,label:"Disabled",name:"inputNumberDisabled",id:"inputNumberDisabled"})}
  `},d={...r,parameters:{docs:{description:{story:"\nPer rendere un Input number `readonly`, aggiungi l'attributo `readonly` al componente `<it-input>`.\n"}}},args:{value:"50",readonly:!0},render:e=>a`
    ${t({...e,label:"Contenuto in sola lettura",name:"inputNumberReadonly",id:"inputNumberReadonly"})}
  `},p={...r,parameters:{docs:{description:{story:"\nPuoi far sì che il campo numerico si ridimensioni automaticamente a seconda del valore contenuto in esso. Per ottenere questo comportamento, è sufficiente aggiungere l'attributo `adaptive` al componente `<it-input>`.\n"}}},args:{value:"99999",adaptive:!0},render:e=>a`
    ${t({...e,label:"Adattivo",name:"inputNumberAdaptive",id:"inputNumberAdaptive"})}
  `};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  ...meta,
  name: 'Esempio interattivo',
  tags: ['!autodocs', '!dev'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      }
    }
  },
  render: params => html\`\${renderNumberInput({
    ...params,
    label: 'Input Numerico',
    name: 'inputNumber',
    id: 'exampleInputNumber'
  })}\`
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  ...meta,
  parameters: {
    docs: {
      description: {
        story: \`
La larghezza del campo predefinita è quella del suo contenitore. Per limitare la larghezza alle dimensioni del valore contenuto, utilizza il ridimensionamento adattivo.
\`
      }
    }
  },
  args: {
    value: '100'
  },
  render: params => html\`
    <div class="w-100">
      \${renderNumberInput({
    ...params,
    label: 'Input Numerico inserito in una colonna a tutta larghezza',
    name: 'inputNumberFull',
    id: 'inputNumberFull'
  })}
    </div>
    <div class="w-50">
      \${renderNumberInput({
    ...params,
    label: 'Input Numerico inserito in una colonna di larghezza 50%',
    name: 'inputNumberHalf',
    id: 'inputNumberHalf'
  })}
    </div>
  \`
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  ...meta,
  name: 'Limiti e Step',
  parameters: {
    docs: {
      description: {
        story: \`
Aggiungendo gli attributi HTML \\\`min=""\\\`, \\\`max=""\\\` e \\\`step=""\\\` all'input, puoi limitare il valore minimo e massimo del campo e decidere di quanto varierà a ogni click sui pulsanti.
\`
      }
    }
  },
  args: {
    value: '100',
    min: 0,
    max: 200,
    step: 10
  },
  render: params => html\`
    \${renderNumberInput({
    ...params,
    label: 'Min, Max & Step',
    name: 'inputNumberLimits',
    id: 'inputNumberLimits'
  })}
  \`
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  ...meta,
  parameters: {
    docs: {
      description: {
        story: \`
Per anteporre il simbolo della valuta (ad esempio in Euro), utilizza lo slot \\\`prepend\\\`.
\`
      }
    }
  },
  args: {
    value: '3.50',
    step: 0.01,
    min: 0
  },
  render: params => html\`
    \${renderNumberInput({
    ...params,
    label: 'Currency',
    name: 'inputNumberCurrency',
    id: 'inputNumberCurrency',
    children: html\`<span slot="prepend" class="fw-semibold">&euro;</span> \`
  })}
  \`
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  ...meta,
  parameters: {
    docs: {
      description: {
        story: \`
Per anteporre il simbolo percentuale, utilizza lo slot \\\`prepend\\\`.

Ti consigliamo di impostare gli attributi \\\`min="0"\\\` e \\\`max="100"\\\`.
\`
      }
    }
  },
  args: {
    value: '50',
    step: 10,
    min: 0,
    max: 100
  },
  render: params => html\`
    \${renderNumberInput({
    ...params,
    label: 'Percentage',
    name: 'inputNumberPercent',
    id: 'inputNumberPercent',
    children: html\`<span slot="prepend" class="fw-semibold">%</span> \`
  })}
  \`
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  ...meta,
  parameters: {
    docs: {
      description: {
        story: \`
Per disabilitare un Input number, aggiungi l'attributo \\\`disabled\\\` al componente \\\`<it-input>\\\`.
\`
      }
    }
  },
  args: {
    value: '50',
    disabled: true
  },
  render: params => html\`
    \${renderNumberInput({
    ...params,
    label: 'Disabled',
    name: 'inputNumberDisabled',
    id: 'inputNumberDisabled'
  })}
  \`
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  ...meta,
  parameters: {
    docs: {
      description: {
        story: \`
Per rendere un Input number \\\`readonly\\\`, aggiungi l'attributo \\\`readonly\\\` al componente \\\`<it-input>\\\`.
\`
      }
    }
  },
  args: {
    value: '50',
    readonly: true
  },
  render: params => html\`
    \${renderNumberInput({
    ...params,
    label: 'Contenuto in sola lettura',
    name: 'inputNumberReadonly',
    id: 'inputNumberReadonly'
  })}
  \`
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  ...meta,
  parameters: {
    docs: {
      description: {
        story: \`
Puoi far sì che il campo numerico si ridimensioni automaticamente a seconda del valore contenuto in esso. Per ottenere questo comportamento, è sufficiente aggiungere l'attributo \\\`adaptive\\\` al componente \\\`<it-input>\\\`.
\`
      }
    }
  },
  args: {
    value: '99999',
    adaptive: true
  },
  render: params => html\`
    \${renderNumberInput({
    ...params,
    label: 'Adattivo',
    name: 'inputNumberAdaptive',
    id: 'inputNumberAdaptive'
  })}
  \`
}`,...p.parameters?.docs?.source}}};const b=["EsempioInterattivo","Esempi","LimitiEStep","Valuta","Percentuale","Disabilitato","Readonly","Ridimensionamento"],y=Object.freeze(Object.defineProperty({__proto__:null,Disabilitato:m,Esempi:o,EsempioInterattivo:i,LimitiEStep:s,Percentuale:u,Readonly:d,Ridimensionamento:p,Valuta:l,__namedExportsOrder:b,default:r},Symbol.toStringTag,{value:"Module"}));export{m as D,i as E,s as L,u as P,d as R,y as S,l as V,o as a,p as b};

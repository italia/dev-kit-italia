import{b as a,o as t}from"./iframe-Cj13QEna.js";import{I as r}from"./types-CucKb5le.js";const l=e=>a` <it-input
    id="${t(e.id||void 0)}"
    type="time"
    name="${t(e.name||void 0)}"
    value="${t(e.value||void 0)}"
    ?disabled="${e.disabled}"
    ?custom-validation="${e.customValidation}"
    validity-message="${t(e.validityMessage||void 0)}"
    min="${t(e.min||void 0)}"
    max="${t(e.max||void 0)}"
    step="${t(e.step||void 0)}"
    ?required="${e.required}"
    ?readonly="${e.readonly}"
    ?plaintext="${e.plaintext}"
    placeholder="${t(e.placeholder||void 0)}"
    support-text="${t(e.supportText||void 0)}"
    size="${t(e.size||void 0)}"
  >
    <span slot="label">${e.label}</span>${t(e.children||void 0)}
  </it-input>`,n={title:"Componenti/Form/Timepicker",tags:["autodocs","a11y-ok","web-component"],component:"it-input",args:{id:"",label:"Input Ora",type:"time",name:"timepicker",value:"",disabled:!1,customValidation:!1,validityMessage:"",min:void 0,max:void 0,step:void 0,required:!1,readonly:!1,plaintext:!1,placeholder:"",supportText:"",size:void 0},argTypes:{label:{control:"text",description:"Etichetta del campo"},type:{control:"select",options:["time"],fixed:!0,table:{defaultValue:{summary:"time"}}},name:{control:"text"},value:{control:"text",description:"Valore del campo"},disabled:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},customValidation:{name:"custom-validation",control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}},description:"Se la validazione del campo è fatta esternamente (lato server o con plugin js), impostare questo attributo a `true`."},validityMessage:{name:"validity-message",control:"text",description:"Messaggio da mostrare quando il campo è invalido nel caso di validazione esterna (validazione custom). Se impostato a '' (stringa vuota) il campo viene considerato valido."},min:{control:"text",description:"Valore minimo consentito nel formato HH:MM. Es: 08:00",type:"string"},max:{control:"text",description:"Valore massimo consentito nel formato HH:MM. Es: 15:30",type:"string"},step:{control:"number",description:"Incremento per ogni step (utilizzato dai pulsanti +/-), in secondi",type:"number"},required:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},readonly:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},plaintext:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}},description:"Se il campo è `readonly`, con l'attributo 'plaintext' il campo assume l'aspetto di testo normalizzato."},placeholder:{control:"text",description:"Testo segnaposto"},supportText:{name:"support-text",control:"text",description:"Testo di supporto"},size:{control:{type:"select",labels:{undefined:"(non definito)",sm:"sm",lg:"lg"}},options:r,description:"Dimensione del campo: 'sm' | (non definito) | 'lg' ",table:{defaultValue:{summary:void 0}},type:"string"}}},i={...n,name:"Esempio interattivo",tags:["!autodocs","!dev"],parameters:{docs:{canvas:{sourceState:"shown"}}},render:e=>a`${l({...e,label:"Input Ora",name:"timepicker",id:"exampleTimepicker",value:"10:00"})}`},o={...n,name:"Limiti e Step",parameters:{docs:{description:{story:`

Per aggiungere limitazioni ai valori orari selezionabili, usa questi attributi HTML:

- \`min=""\`, per limitare il valore minimo;
- \`max=""\`, per limitare il valore massimo;
- \`step=""\`, per un intervallo orario valido.

Gli attributi \`min=""\`, \`max=""\` accettano valori nel formato HH:MM. L'attributo \`step=""\` prevede l'inserimento di un intervallo in secondi.

Questi attributi sono utili solo ai fini della validazione e non modificano l'interfaccia del selettore.

`}}},args:{value:"10:00",min:"09:00",max:"12:00",step:1800},render:e=>a`
    ${l({...e,label:"Min, Max & Step",name:"inputTimeLimits",id:"inputTimeLimits"})}
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
  render: params => html\`\${renderTimeInput({
    ...params,
    label: 'Input Ora',
    name: 'timepicker',
    id: 'exampleTimepicker',
    value: '10:00'
  })}\`
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  ...meta,
  name: 'Limiti e Step',
  parameters: {
    docs: {
      description: {
        story: \`

Per aggiungere limitazioni ai valori orari selezionabili, usa questi attributi HTML:

- \\\`min=""\\\`, per limitare il valore minimo;
- \\\`max=""\\\`, per limitare il valore massimo;
- \\\`step=""\\\`, per un intervallo orario valido.

Gli attributi \\\`min=""\\\`, \\\`max=""\\\` accettano valori nel formato HH:MM. L'attributo \\\`step=""\\\` prevede l'inserimento di un intervallo in secondi.

Questi attributi sono utili solo ai fini della validazione e non modificano l'interfaccia del selettore.

\`
      }
    }
  },
  args: {
    value: '10:00',
    min: '09:00',
    max: '12:00',
    step: 1800
  },
  render: params => html\`
    \${renderTimeInput({
    ...params,
    label: 'Min, Max & Step',
    name: 'inputTimeLimits',
    id: 'inputTimeLimits'
  })}
  \`
}`,...o.parameters?.docs?.source}}};const s=["EsempioInterattivo","LimitiEStep"],p=Object.freeze(Object.defineProperty({__proto__:null,EsempioInterattivo:i,LimitiEStep:o,__namedExportsOrder:s,default:n},Symbol.toStringTag,{value:"Module"}));export{i as E,o as L,p as S};

import{b as t,o}from"./iframe-DHDslVeB.js";const n=e=>t`<it-toggle
    id="${o(e.id||void 0)}"
    name="${o(e.name||void 0)}"
    value="${o(e.value?.length>0?e.value:void 0)}"
    ?checked="${e.checked}"
    ?disabled="${e.disabled}"
    ?inline="${e.inline}"
    form="${o(e.form?.length>0?e.form:void 0)}"
    ?custom-validation="${e.customValidation}"
    validity-message="${o(e.validityMessage||void 0)}"
    ?required="${e.required}"
    support-text="${o(e.supportText||void 0)}"
    class="${o(e.className||void 0)}"
  >
    <span slot="label">${e.label}</span>${o(e.children||void 0)}
  </it-toggle> `,p={title:"Componenti/Form/Toggle",tags:["alpha","a11y-ok","web-component"],component:"it-toggle",args:{id:"",label:"Label dell'interruttore",name:"toggle-esempio",value:void 0,checked:!1,disabled:!1,form:void 0,customValidation:!1,validityMessage:"",required:!1,inline:!1,group:!1,supportText:""},argTypes:{id:{control:"text",description:"ID del campo",type:"string"},label:{control:"text",description:"Etichetta del campo",type:"string"},name:{control:"text",description:"Nome del campo nel form",type:"string"},value:{control:"text",description:"Valore del campo",type:"string"},checked:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},disabled:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},form:{control:"text",type:"string",description:"ID html del form a cui è associato il campo, se il campo non si trova all'interno di una form "},customValidation:{name:"custom-validation",control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}},description:"Se la validazione del campo è fatta esternamente (lato server o con plugin js - validazione custom), impostare questo attributo a `true`."},validityMessage:{name:"validity-message",control:"text",type:"string",description:"Messaggio da mostrare quando il campo è invalido nel caso di validazione esterna (validazione custom). Se impostato a '' (stringa vuota) il campo viene considerato valido."},required:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},inline:{control:"boolean",type:"boolean",description:"Allinea i toggle orizzontalmente",table:{defaultValue:{summary:"false"}}},group:{control:"boolean",type:"boolean",description:"Raggruppa visivamente i toggle",table:{defaultValue:{summary:"false"}}},supportText:{name:"support-text",control:"text",description:"Testo di supporto/aiuto sotto il toggle",type:"string"}}},r={...p,name:"Esempio interattivo",tags:["!dev"],parameters:{docs:{canvas:{sourceState:"shown"}}},render:e=>t`${n({...e})} `},i={name:"Attivo (checked)",args:{checked:!0},render:e=>t`${n({...e,label:"Interruttore attivo"})} `},a={args:{disabled:!0},render:e=>t`
    <div class="mb-3">
      <h6 class="mb-2">Disabilitati</h6>
      ${n({...e,label:"Interruttore disabilitato (spento)"})}
    </div>
    <div class="mb-3">
      ${n({...e,label:"Interruttore disabilitato (acceso)",checked:!0})}
    </div>
  `},l={args:{inline:!0,name:"toggle-inline"},render:e=>t`
    <it-toggle-group name=${e.name} ?required=${e.required} ?group=${e.group} ?inline=${e.inline}>
      <span slot="legend">Gruppo di toggle</span>
      ${n({...e,label:"Interruttore 1",value:"option1",required:void 0,name:void 0,inline:void 0})}
      ${n({...e,label:"Interruttore 2",value:"option2",checked:!0,required:void 0,name:void 0,inline:void 0})}
      ${n({...e,label:"Interruttore 3",value:"option3",required:void 0,name:void 0,inline:void 0})}
    </it-toggle-group>
  `},d={name:"Raggruppati visivamente",args:{group:!0},parameters:{pageLayout:"w-100"},render:e=>t`
    <it-toggle-group
      name=${e.name}
      ?required=${e.required}
      ?group=${e.group}
      ?inline=${e.inline}
      ?disabled=${e.disabled}
    >
      <span slot="legend">Gruppo di toggle</span>
      ${n({...e,label:"Interruttore acceso",value:"option1",checked:!0,required:void 0,name:void 0,inline:void 0})}
      ${n({...e,label:"Interruttore spento",value:"option2",required:void 0,name:void 0,inline:void 0})}
      ${n({...e,label:"Interruttore disabilitato",value:"option3",disabled:!0,required:void 0,name:void 0,inline:void 0})}
    </it-toggle-group>

    <it-toggle-group
      name=${`${e.name}-1`}
      ?required=${e.required}
      ?group=${e.group}
      ?inline=${e.inline}
      ?disabled=${e.disabled}
      style="margin-top: 24px;"
    >
      <span slot="legend">Gruppo di toggle</span>
      ${n({...e,required:void 0,name:void 0,inline:void 0,label:"Interruttore acceso",value:"option1",checked:!0,supportText:"Testo descrittivo di supporto per l'opzione selezionabile"})}
      ${n({...e,required:void 0,name:void 0,inline:void 0,label:"Interruttore spento",value:"option2",supportText:"Testo descrittivo di supporto per l'opzione selezionabile"})}
      ${n({...e,required:void 0,name:void 0,inline:void 0,disabled:!0,label:"Interruttore disabilitato",value:"option3",supportText:"Testo descrittivo di supporto per l'opzione selezionabile"})}
    </it-toggle-group>
  `},s={name:"Con testo di supporto",args:{supportText:"Abilita questa funzionalità per migliorare le prestazioni"},render:e=>t`${n({...e,label:"Abilita modalità prestazioni"})} `},u={name:"Stato default",render:e=>t`${n({...e,label:"Label dell'interruttore"})} `};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  ...meta,
  name: 'Esempio interattivo',
  tags: ['!dev'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      }
    }
  },
  render: params => html\`\${renderComponent({
    ...params
  })} \`
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Attivo (checked)',
  args: {
    checked: true
  },
  render: params => html\`\${renderComponent({
    ...params,
    label: 'Interruttore attivo'
  })} \`
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: params => html\`
    <div class="mb-3">
      <h6 class="mb-2">Disabilitati</h6>
      \${renderComponent({
    ...params,
    label: 'Interruttore disabilitato (spento)'
  })}
    </div>
    <div class="mb-3">
      \${renderComponent({
    ...params,
    label: 'Interruttore disabilitato (acceso)',
    checked: true
  })}
    </div>
  \`
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    inline: true,
    name: 'toggle-inline'
  },
  render: params => html\`
    <it-toggle-group name=\${params.name} ?required=\${params.required} ?group=\${params.group} ?inline=\${params.inline}>
      <span slot="legend">Gruppo di toggle</span>
      \${renderComponent({
    ...params,
    label: 'Interruttore 1',
    value: 'option1',
    required: undefined,
    name: undefined,
    group: undefined,
    inline: undefined
  })}
      \${renderComponent({
    ...params,
    label: 'Interruttore 2',
    value: 'option2',
    checked: true,
    required: undefined,
    name: undefined,
    group: undefined,
    inline: undefined
  })}
      \${renderComponent({
    ...params,
    label: 'Interruttore 3',
    value: 'option3',
    required: undefined,
    name: undefined,
    group: undefined,
    inline: undefined
  })}
    </it-toggle-group>
  \`
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Raggruppati visivamente',
  args: {
    group: true
  },
  parameters: {
    pageLayout: 'w-100'
  },
  render: params => html\`
    <it-toggle-group
      name=\${params.name}
      ?required=\${params.required}
      ?group=\${params.group}
      ?inline=\${params.inline}
      ?disabled=\${params.disabled}
    >
      <span slot="legend">Gruppo di toggle</span>
      \${renderComponent({
    ...params,
    label: 'Interruttore acceso',
    value: 'option1',
    checked: true,
    required: undefined,
    name: undefined,
    group: undefined,
    inline: undefined
  })}
      \${renderComponent({
    ...params,
    label: 'Interruttore spento',
    value: 'option2',
    required: undefined,
    name: undefined,
    group: undefined,
    inline: undefined
  })}
      \${renderComponent({
    ...params,
    label: 'Interruttore disabilitato',
    value: 'option3',
    disabled: true,
    required: undefined,
    name: undefined,
    group: undefined,
    inline: undefined
  })}
    </it-toggle-group>

    <it-toggle-group
      name=\${\`\${params.name}-1\`}
      ?required=\${params.required}
      ?group=\${params.group}
      ?inline=\${params.inline}
      ?disabled=\${params.disabled}
      style="margin-top: 24px;"
    >
      <span slot="legend">Gruppo di toggle</span>
      \${renderComponent({
    ...params,
    required: undefined,
    name: undefined,
    group: undefined,
    inline: undefined,
    label: 'Interruttore acceso',
    value: 'option1',
    checked: true,
    supportText: "Testo descrittivo di supporto per l'opzione selezionabile"
  })}
      \${renderComponent({
    ...params,
    required: undefined,
    name: undefined,
    group: undefined,
    inline: undefined,
    label: 'Interruttore spento',
    value: 'option2',
    supportText: "Testo descrittivo di supporto per l'opzione selezionabile"
  })}
      \${renderComponent({
    ...params,
    required: undefined,
    name: undefined,
    group: undefined,
    inline: undefined,
    disabled: true,
    label: 'Interruttore disabilitato',
    value: 'option3',
    supportText: "Testo descrittivo di supporto per l'opzione selezionabile"
  })}
    </it-toggle-group>
  \`
}`,...d.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Con testo di supporto',
  args: {
    supportText: 'Abilita questa funzionalità per migliorare le prestazioni'
  },
  render: params => html\`\${renderComponent({
    ...params,
    label: 'Abilita modalità prestazioni'
  })} \`
}`,...s.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Stato default',
  render: params => html\`\${renderComponent({
    ...params,
    label: "Label dell'interruttore"
  })} \`
}`,...u.parameters?.docs?.source}}};const m=["EsempioInterattivo","Attivo","Disabilitato","Inline","Raggruppati","ConTestoSupporto","StatoDefault"],g=Object.freeze(Object.defineProperty({__proto__:null,Attivo:i,ConTestoSupporto:s,Disabilitato:a,EsempioInterattivo:r,Inline:l,Raggruppati:d,StatoDefault:u,__namedExportsOrder:m,default:p},Symbol.toStringTag,{value:"Module"}));export{i as A,s as C,a as D,r as E,l as I,d as R,g as S};

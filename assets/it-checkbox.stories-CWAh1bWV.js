import{b as i,o as a}from"./iframe-CLk7YE6Q.js";import{S as f}from"./formControlReusableStories-BvdEzZUX.js";var x=Object.freeze,k=Object.defineProperty,$=(e,g)=>x(k(e,"raw",{value:x(e.slice())})),h;const n=e=>i`<it-checkbox
    id="${a(e.id||void 0)}"
    name="${a(e.name||void 0)}"
    value="${a(e.value?.length>0?e.value:void 0)}"
    ?checked="${e.checked}"
    ?indeterminate="${e.indeterminate}"
    ?disabled="${e.disabled}"
    ?inline="${e.inline}"
    form="${a(e.form?.length>0?e.form:void 0)}"
    ?custom-validation="${e.customValidation}"
    validity-message="${a(e.validityMessage||void 0)}"
    ?required="${e.required}"
    support-text="${a(e.supportText||void 0)}"
    ?group="${e.group}"
    class="${a(e.className||void 0)}"
  >
    <span slot="label">${e.label}</span>${a(e.children||void 0)}
  </it-checkbox> `,o={title:"Componenti/Form/Checkbox",tags:["new","a11y-ok","web-component"],component:"it-checkbox",args:{id:"",label:"Checkbox di esempio",name:"esempio",value:void 0,checked:!1,indeterminate:!1,disabled:!1,form:void 0,customValidation:!1,validityMessage:"",required:!1,inline:!1,group:!1,supportText:""},argTypes:{id:{control:"text",description:"ID del campo",type:"string"},label:{control:"text",description:"Etichetta del campo",type:"string"},name:{control:"text",type:"string"},value:{control:"text",description:"Valore del campo",type:"string"},checked:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},indeterminate:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},disabled:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},form:{control:"text",type:"string",description:"ID html del form a cui è associato il campo, se il campo non si trova all'interno di una form "},customValidation:{name:"custom-validation",control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}},description:"Se la validazione del campo è fatta esternamente (lato server o con plugin js - validazione custom), impostare questo attributo a `true`."},validityMessage:{name:"validity-message",control:"text",type:"string",description:"Messaggio da mostrare quando il campo è invalido nel caso di validazione esterna (validazione custom). Se impostato a '' (stringa vuota) il campo viene considerato valido."},required:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},inline:{control:"boolean",type:"boolean",description:"Se si vogliono mostrare più checkbox affiancate orizzontalmente",table:{defaultValue:{summary:"false"}}},group:{control:"boolean",type:"boolean",description:"Se si vogliono mostrare più checkbox raggruppate visivamente",table:{defaultValue:{summary:"false"}}},supportText:{name:"support-text",control:"text",description:"Testo di supporto",type:"string"}}},d={...o,name:"Esempio interattivo",tags:["!dev"],parameters:{docs:{canvas:{sourceState:"shown"}}},render:e=>i`${n({...e})} `},t={...o,args:{disabled:!0},render:e=>i`
    <it-checkbox-group name=${e.name} ?required=${e.required} ?disabled=${e.disabled}>
      <span slot="legend">Gruppo di checkbox</span>
      ${n({...e,required:void 0,disabled:void 0,label:"Checkbox non selezionato",className:"mb-2"})}
      ${n({...e,required:void 0,disabled:void 0,label:"Checkbox selezionato",checked:!0})}
    </it-checkbox-group>
  `},l={...o,name:"Indeterminato (mixed)",args:{indeterminate:!0},render:e=>i`
    ${n({...e,label:"Checkbox indeterminato"})}
  `},s={...o,args:{inline:!0},argTypes:{...Object.fromEntries(Object.entries(o.argTypes).map(([e,g])=>e!=="inline"?[e,{...g,table:{...g.table,disable:!0}}]:[e,{...g}]))},render:e=>i`
    <it-checkbox-group name=${e.name} ?required=${e.required} ?group=${e.group} ?inline=${e.inline}>
      <span slot="legend">Gruppo di checkbox</span>
      ${n({...e,required:void 0,name:void 0,group:void 0,inline:void 0,label:"Checkbox non selezionato"})}
      ${n({...e,required:void 0,name:void 0,group:void 0,inline:void 0,label:"Checkbox selezionato",checked:!0})}
    </it-checkbox-group>
  `},r={...o,name:"Gruppo di checkbox",args:{group:!0},render:e=>i`
    <div class="row">
      <it-checkbox-group
        name=${e.name}
        ?required=${e.required}
        ?group=${e.group}
        ?inline=${e.inline}
        ?disabled=${e.disabled}
        class="col-12 col-md-6"
      >
        <span slot="legend">Gruppo di checkbox</span>
        ${n({...e,required:void 0,name:void 0,group:void 0,inline:void 0,label:"Checkbox selezionato",checked:!0})}
        ${n({...e,required:void 0,name:void 0,group:void 0,inline:void 0,label:"Checkbox non selezionato"})}
        ${n({...e,required:void 0,name:void 0,group:void 0,inline:void 0,disabled:!0,label:"Checkbox disabilitato non selezionato"})}
      </it-checkbox-group>

      <it-checkbox-group
        name=${e.name}
        ?required=${e.required}
        ?group=${e.group}
        ?inline=${e.inline}
        ?disabled=${r.disabled}
        class="col-12 col-md-6"
      >
        <span slot="legend">Gruppo di checkbox</span>
        ${n({...e,required:void 0,name:void 0,group:void 0,inline:void 0,label:"Checkbox selezionato",checked:!0,supportText:"Testo descrittivo di supporto per l'opzione selezionabile"})}
        ${n({...e,required:void 0,name:void 0,group:void 0,inline:void 0,label:"Checkbox non selezionato",supportText:"Testo descrittivo di supporto per l'opzione selezionabile"})}
        ${n({...e,required:void 0,name:void 0,group:void 0,inline:void 0,disabled:!0,label:"Checkbox disabilitato non selezionato",supportText:"Testo descrittivo di supporto per l'opzione selezionabile"})}
      </it-checkbox-group>
    </div>
  `},u={...o,name:"Valore iniziale del gruppo",args:{group:!0,name:"checkboxgroup"},render:e=>i`
    <it-checkbox-group
      name=${e.name}
      ?required=${e.required}
      ?group=${e.group}
      ?inline=${e.inline}
      ?disabled=${e.disabled}
      value='["opt_1","opt_3"]'
    >
      <span slot="legend">Gruppo di checkbox</span>
      ${n({...e,required:void 0,name:void 0,group:void 0,inline:void 0,disabled:void 0,label:"Opzione numero 1",value:"opt_1"})}
      ${n({...e,required:void 0,name:void 0,group:void 0,inline:void 0,disabled:void 0,label:"Opzione numero 2",value:"opt_2"})}
      ${n({...e,required:void 0,name:void 0,group:void 0,inline:void 0,disabled:void 0,label:"Opzione numero 3",value:"opt_3"})}
    </it-checkbox-group>
  `},c={...o,name:"Testo di supporto",args:{supportText:"Testo descrittivo di supporto per l'opzione selezionabile"},render:e=>i`
    ${n({...e,label:"Checkbox con testo di supporto selezionato"})}
  `},p={...o,name:"Validazione nativa",args:{required:!0},render:e=>i`
    <form>
      <div class="row mb-4">
        <div class="col-md-6 d-flex align-items-center">
          ${n({...e,label:"Checkbox singola obbligatoria",name:"single-required-example",id:"single-required-example"})}
        </div>
        <div class="col-md-6">
          <it-checkbox-group
            name="multiple-required-example"
            ?required=${e.required}
            ?group=${e.group}
            ?inline=${e.inline}
            ?disabled=${e.disabled}
          >
            <span slot="legend">Gruppo di checkbox obbligatorio</span>
            ${n({...e,required:void 0,name:void 0,group:void 0,inline:void 0,disabled:void 0,label:"Valore 1",value:"valore_1"})}
            ${n({...e,required:void 0,name:void 0,group:void 0,inline:void 0,disabled:void 0,label:"Valore 2",value:"valore_2"})}
            ${n({...e,required:void 0,name:void 0,group:void 0,inline:void 0,disabled:void 0,label:"Valore 3",value:"valore_3"})}
          </it-checkbox-group>
        </div>
      </div>
      <div class="text-center">
        <it-button type="submit" variant="primary">Invia</it-button>
      </div>
    </form>
  `},m={...o,name:"Validazione custom",args:{customValidation:!0,validityMessage:"Questo campo è obbligatorio!!!"},render:e=>i`
    <form>
      <div class="row">
        <div class="col-md-6 d-flex align-items-center">
          ${n({...e,required:void 0,label:"Checkbox singola obbligatoria",name:"external-validation-single-example",id:"external-validation-single-example"})}
        </div>
        <div class="col-md-6">
          <it-checkbox-group
            name="external-validation-multiple-example"
            ?group=${e.group}
            ?inline=${e.inline}
            ?disabled=${e.disabled}
            ?custom-validation=${e.customValidation}
            validity-message="${a(e.validityMessage||void 0)}"
          >
            <span slot="legend">Gruppo di checkbox obbligatorio</span>
            ${n({...e,required:void 0,name:void 0,group:void 0,inline:void 0,disabled:void 0,customValidation:void 0,validityMessage:void 0,label:"Valore 1",value:"valore_1"})}
            ${n({...e,required:void 0,name:void 0,group:void 0,inline:void 0,disabled:void 0,customValidation:void 0,validityMessage:void 0,label:"Valore 2",value:"valore_2"})}
            ${n({...e,required:void 0,name:void 0,group:void 0,inline:void 0,disabled:void 0,customValidation:void 0,validityMessage:void 0,label:"Valore 3",value:"valore_3"})}
          </it-checkbox-group>
        </div>
      </div>
    </form>
  `},b={...o,name:"Gestione degli eventi",parameters:{docs:{description:{story:"È possibile gestire gli eventi di `it-input`, `it-blur`, `it-change`, `it-focus`, `it-click` per effettuare operazioni personalizzate, come la validazione esterna o l'aggiornamento di altri campi.\n<br/><br/>\nÈ sufficiente aggiungere un event listener al componente `<it-checkbox>` o al componente `<it-checkbox-group>` per intercettare gli eventi desiderati. Ad esempio, per gestire l'evento di change, è possibile utilizzare il seguente codice:\n\n```js\ndocument.querySelector('it-checkbox#event-checkbox-example').addEventListener('it-change', (event) => {\n  console.log('Checkbox event:', event);\n  alert('Checkbox event');\n});\n```\n\nIl componente, emette anche un evento di tipo `it-input-ready` quando l'input è pronto e caricato nel DOM:\n\n```js\ndocument.querySelector('it-checkbox#event-checkbox-example').addEventListener('it-input-ready', (event) => {\n  console.log('Checkbox ready:', event);\n});\n```\n      "}}},args:{type:"text",label:"Prova evento di change",name:"event-checkbox-example",id:"event-checkbox-example"},render:e=>i(h||(h=$([`
    <script>
      document.querySelector('it-checkbox#event-checkbox-example').addEventListener('it-change', (event) => {
        console.log('Checkbox event:', event);
        alert('Checkbox event');
      });
      document.querySelector('it-checkbox#event-checkbox-example').addEventListener('it-input-ready', (event) => {
        console.log('Checkbox ready:', event);
      });
    <\/script>
    `,`
  `])),n({...e}))},v={...f({componentName:"it-checkbox",otherMethods:"|`click()`| Triggera l'evento di click sull'input reale | - |"}),tags:["!dev"]};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  ...meta,
  // name: 'Disabilitato',
  args: {
    disabled: true
  },
  render: params => html\`
    <it-checkbox-group name=\${params.name} ?required=\${params.required} ?disabled=\${params.disabled}>
      <span slot="legend">Gruppo di checkbox</span>
      \${renderComponent({
    ...params,
    required: undefined,
    disabled: undefined,
    label: 'Checkbox non selezionato',
    className: 'mb-2'
  })}
      \${renderComponent({
    ...params,
    required: undefined,
    disabled: undefined,
    label: 'Checkbox selezionato',
    checked: true
  })}
    </it-checkbox-group>
  \`
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  ...meta,
  name: 'Indeterminato (mixed)',
  args: {
    indeterminate: true
  },
  render: params => html\`
    \${renderComponent({
    ...params,
    label: 'Checkbox indeterminato'
  })}
  \`
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  ...meta,
  // name: 'Inline',
  args: {
    inline: true
  },
  argTypes: {
    ...Object.fromEntries(Object.entries(meta.argTypes).map(([key, value]) => key !== 'inline' ? [key, {
      ...value,
      table: {
        ...value.table,
        disable: true
      }
    }] : [key, {
      ...value
    }]))
  },
  render: params => html\`
    <it-checkbox-group name=\${params.name} ?required=\${params.required} ?group=\${params.group} ?inline=\${params.inline}>
      <span slot="legend">Gruppo di checkbox</span>
      \${renderComponent({
    ...params,
    required: undefined,
    name: undefined,
    group: undefined,
    inline: undefined,
    label: 'Checkbox non selezionato'
  })}
      \${renderComponent({
    ...params,
    required: undefined,
    name: undefined,
    group: undefined,
    inline: undefined,
    label: 'Checkbox selezionato',
    checked: true
  })}
    </it-checkbox-group>
  \`
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  ...meta,
  name: 'Gruppo di checkbox',
  args: {
    group: true
  },
  render: params => html\`
    <div class="row">
      <it-checkbox-group
        name=\${params.name}
        ?required=\${params.required}
        ?group=\${params.group}
        ?inline=\${params.inline}
        ?disabled=\${params.disabled}
        class="col-12 col-md-6"
      >
        <span slot="legend">Gruppo di checkbox</span>
        \${renderComponent({
    ...params,
    required: undefined,
    name: undefined,
    group: undefined,
    inline: undefined,
    label: 'Checkbox selezionato',
    checked: true
  })}
        \${renderComponent({
    ...params,
    required: undefined,
    name: undefined,
    group: undefined,
    inline: undefined,
    label: 'Checkbox non selezionato'
  })}
        \${renderComponent({
    ...params,
    required: undefined,
    name: undefined,
    group: undefined,
    inline: undefined,
    disabled: true,
    label: 'Checkbox disabilitato non selezionato'
  })}
      </it-checkbox-group>

      <it-checkbox-group
        name=\${params.name}
        ?required=\${params.required}
        ?group=\${params.group}
        ?inline=\${params.inline}
        ?disabled=\${Group.disabled}
        class="col-12 col-md-6"
      >
        <span slot="legend">Gruppo di checkbox</span>
        \${renderComponent({
    ...params,
    required: undefined,
    name: undefined,
    group: undefined,
    inline: undefined,
    label: 'Checkbox selezionato',
    checked: true,
    supportText: "Testo descrittivo di supporto per l'opzione selezionabile"
  })}
        \${renderComponent({
    ...params,
    required: undefined,
    name: undefined,
    group: undefined,
    inline: undefined,
    label: 'Checkbox non selezionato',
    supportText: "Testo descrittivo di supporto per l'opzione selezionabile"
  })}
        \${renderComponent({
    ...params,
    required: undefined,
    name: undefined,
    group: undefined,
    inline: undefined,
    disabled: true,
    label: 'Checkbox disabilitato non selezionato',
    supportText: "Testo descrittivo di supporto per l'opzione selezionabile"
  })}
      </it-checkbox-group>
    </div>
  \`
}`,...r.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  ...meta,
  name: 'Valore iniziale del gruppo',
  args: {
    group: true,
    name: 'checkboxgroup'
  },
  render: params => html\`
    <it-checkbox-group
      name=\${params.name}
      ?required=\${params.required}
      ?group=\${params.group}
      ?inline=\${params.inline}
      ?disabled=\${params.disabled}
      value='["opt_1","opt_3"]'
    >
      <span slot="legend">Gruppo di checkbox</span>
      \${renderComponent({
    ...params,
    required: undefined,
    name: undefined,
    group: undefined,
    inline: undefined,
    disabled: undefined,
    label: 'Opzione numero 1',
    value: 'opt_1'
  })}
      \${renderComponent({
    ...params,
    required: undefined,
    name: undefined,
    group: undefined,
    inline: undefined,
    disabled: undefined,
    label: 'Opzione numero 2',
    value: 'opt_2'
  })}
      \${renderComponent({
    ...params,
    required: undefined,
    name: undefined,
    group: undefined,
    inline: undefined,
    disabled: undefined,
    label: 'Opzione numero 3',
    value: 'opt_3'
  })}
    </it-checkbox-group>
  \`
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  ...meta,
  name: 'Testo di supporto',
  args: {
    supportText: "Testo descrittivo di supporto per l'opzione selezionabile"
  },
  render: params => html\`
    \${renderComponent({
    ...params,
    label: 'Checkbox con testo di supporto selezionato'
  })}
  \`
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  ...meta,
  name: 'Validazione nativa',
  args: {
    required: true
  },
  render: params => html\`
    <form>
      <div class="row mb-4">
        <div class="col-md-6 d-flex align-items-center">
          \${renderComponent({
    ...params,
    label: 'Checkbox singola obbligatoria',
    name: 'single-required-example',
    id: 'single-required-example'
  })}
        </div>
        <div class="col-md-6">
          <it-checkbox-group
            name="multiple-required-example"
            ?required=\${params.required}
            ?group=\${params.group}
            ?inline=\${params.inline}
            ?disabled=\${params.disabled}
          >
            <span slot="legend">Gruppo di checkbox obbligatorio</span>
            \${renderComponent({
    ...params,
    required: undefined,
    name: undefined,
    group: undefined,
    inline: undefined,
    disabled: undefined,
    label: 'Valore 1',
    value: 'valore_1'
  })}
            \${renderComponent({
    ...params,
    required: undefined,
    name: undefined,
    group: undefined,
    inline: undefined,
    disabled: undefined,
    label: 'Valore 2',
    value: 'valore_2'
  })}
            \${renderComponent({
    ...params,
    required: undefined,
    name: undefined,
    group: undefined,
    inline: undefined,
    disabled: undefined,
    label: 'Valore 3',
    value: 'valore_3'
  })}
          </it-checkbox-group>
        </div>
      </div>
      <div class="text-center">
        <it-button type="submit" variant="primary">Invia</it-button>
      </div>
    </form>
  \`
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  ...meta,
  name: 'Validazione custom',
  args: {
    customValidation: true,
    validityMessage: 'Questo campo è obbligatorio!!!'
  },
  render: params => html\`
    <form>
      <div class="row">
        <div class="col-md-6 d-flex align-items-center">
          \${renderComponent({
    ...params,
    required: undefined,
    label: 'Checkbox singola obbligatoria',
    name: 'external-validation-single-example',
    id: 'external-validation-single-example'
  })}
        </div>
        <div class="col-md-6">
          <it-checkbox-group
            name="external-validation-multiple-example"
            ?group=\${params.group}
            ?inline=\${params.inline}
            ?disabled=\${params.disabled}
            ?custom-validation=\${params.customValidation}
            validity-message="\${ifDefined(params.validityMessage || undefined)}"
          >
            <span slot="legend">Gruppo di checkbox obbligatorio</span>
            \${renderComponent({
    ...params,
    required: undefined,
    name: undefined,
    group: undefined,
    inline: undefined,
    disabled: undefined,
    customValidation: undefined,
    validityMessage: undefined,
    label: 'Valore 1',
    value: 'valore_1'
  })}
            \${renderComponent({
    ...params,
    required: undefined,
    name: undefined,
    group: undefined,
    inline: undefined,
    disabled: undefined,
    customValidation: undefined,
    validityMessage: undefined,
    label: 'Valore 2',
    value: 'valore_2'
  })}
            \${renderComponent({
    ...params,
    required: undefined,
    name: undefined,
    group: undefined,
    inline: undefined,
    disabled: undefined,
    customValidation: undefined,
    validityMessage: undefined,
    label: 'Valore 3',
    value: 'valore_3'
  })}
          </it-checkbox-group>
        </div>
      </div>
    </form>
  \`
}`,...m.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  ...meta,
  name: 'Gestione degli eventi',
  parameters: {
    docs: {
      description: {
        story: \`È possibile gestire gli eventi di \\\`it-input\\\`, \\\`it-blur\\\`, \\\`it-change\\\`, \\\`it-focus\\\`, \\\`it-click\\\` per effettuare operazioni personalizzate, come la validazione esterna o l'aggiornamento di altri campi.
<br/><br/>
È sufficiente aggiungere un event listener al componente \\\`<it-checkbox>\\\` o al componente \\\`<it-checkbox-group>\\\` per intercettare gli eventi desiderati. Ad esempio, per gestire l'evento di change, è possibile utilizzare il seguente codice:

\\\`\\\`\\\`js
document.querySelector('it-checkbox#event-checkbox-example').addEventListener('it-change', (event) => {
  console.log('Checkbox event:', event);
  alert('Checkbox event');
});
\\\`\\\`\\\`

Il componente, emette anche un evento di tipo \\\`it-input-ready\\\` quando l'input è pronto e caricato nel DOM:

\\\`\\\`\\\`js
document.querySelector('it-checkbox#event-checkbox-example').addEventListener('it-input-ready', (event) => {
  console.log('Checkbox ready:', event);
});
\\\`\\\`\\\`
      \`
      }
    }
  },
  args: {
    type: 'text',
    label: 'Prova evento di change',
    name: 'event-checkbox-example',
    id: 'event-checkbox-example'
  },
  render: params => html\`
    <script>
      document.querySelector('it-checkbox#event-checkbox-example').addEventListener('it-change', (event) => {
        console.log('Checkbox event:', event);
        alert('Checkbox event');
      });
      document.querySelector('it-checkbox#event-checkbox-example').addEventListener('it-input-ready', (event) => {
        console.log('Checkbox ready:', event);
      });
    <\/script>
    \${renderComponent({
    ...params
  })}
  \`
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  ...StoryFormControlMethodAndProps({
    componentName: 'it-checkbox',
    otherMethods: \`|\\\`click()\\\`| Triggera l'evento di click sull'input reale | - |\`
  }),
  tags: ['!dev']
}`,...v.parameters?.docs?.source}}};const q=["EsempioInterattivo","Disabilitato","Indeterminate","Inline","Group","GroupInitValue","SupportText","ValidazioneNativa","ValidazioneCustom","GestioneEventi","MetodiEPropPubblici"],C=Object.freeze(Object.defineProperty({__proto__:null,Disabilitato:t,EsempioInterattivo:d,GestioneEventi:b,Group:r,GroupInitValue:u,Indeterminate:l,Inline:s,MetodiEPropPubblici:v,SupportText:c,ValidazioneCustom:m,ValidazioneNativa:p,__namedExportsOrder:q,default:o},Symbol.toStringTag,{value:"Module"}));export{t as D,d as E,r as G,l as I,v as M,C as S,p as V,s as a,u as b,c,m as d,b as e};

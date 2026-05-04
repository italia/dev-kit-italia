import{b as t,o as n}from"./iframe-B-faIqGw.js";import{S as b}from"./formControlReusableStories-BSOIQUnn.js";const S=["sm",void 0,"lg"];var v=Object.freeze,h=Object.defineProperty,y=(e,z)=>v(h(e,"raw",{value:v(e.slice())})),g;const o=e=>t`<it-select
    id="${n(e.id||void 0)}"
    name="${n(e.name||void 0)}"
    value="${n(e.value||void 0)}"
    ?multiple="${e.multiple}"
    ?disabled="${e.disabled}"
    ?custom-validation="${e.customValidation}"
    validity-message="${n(e.validityMessage||void 0)}"
    ?required="${e.required}"
    ?readonly="${e.readonly}"
    placeholder="${n(e.placeholder||void 0)}"
    support-text="${n(e.supportText||void 0)}"
    size="${n(e.size||void 0)}"
  >
    <span slot="label">${e.label}</span>
    ${n(e.children||void 0)}
  </it-select>`,a={title:"Componenti/Form/Select",tags:["a11y-ok","web-component"],component:"it-select",args:{id:"",label:"Etichetta",name:"select-input",value:void 0,multiple:!1,disabled:!1,customValidation:!1,validityMessage:"",required:!1,readonly:!1,placeholder:"Seleziona un'opzione",supportText:"",size:void 0},argTypes:{label:{control:"text",description:"Etichetta del campo"},name:{control:"text"},value:{control:"text",description:"Valore del campo",type:"string"},multiple:{control:"boolean",description:"Abilita la selezione di più valori",type:"boolean",table:{defaultValue:{summary:"false"}}},disabled:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},customValidation:{name:"custom-validation",control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}},description:"Se la validazione del campo è fatta esternamente (lato server o con plugin js), impostare questo attributo a `true`."},validityMessage:{name:"validity-message",control:"text",description:"Messaggio da mostrare quando il campo è invalido nel caso di validazione esterna (validazione custom). Se impostato a '' (stringa vuota) il campo viene considerato valido."},required:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},readonly:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},placeholder:{control:"text",description:"Testo segnaposto"},supportText:{name:"support-text",control:"text",description:"Testo di supporto"},size:{control:{type:"select",labels:{undefined:"(non definito)",sm:"sm",lg:"lg"}},options:S,description:"Dimensione del campo: 'sm' | (non definito) | 'lg' ",table:{defaultValue:{summary:void 0}},type:"string"}}},r=t`<option value="Value 1">Opzione 1</option>
  <option value="Value 2">Opzione 2</option>
  <option value="Value 3">Opzione 3</option>
  <option value="Value 4">Opzione 4</option>
  <option value="Value 5">Opzione 5</option>`,i={...a,tags:["!dev"],name:"Esempio interattivo",parameters:{docs:{canvas:{sourceState:"shown"}}},render:e=>t`${o({...e,children:r})}`},l={...a,name:"Select disabilitata",parameters:{docs:{canvas:{sourceState:"shown"}}},render:e=>t`${o({...e,disabled:!0,children:r})}`},s={...a,name:"Select con gruppi",parameters:{docs:{canvas:{sourceState:"shown"}}},render:e=>t`${o({...e,children:t`<optgroup label="Gruppo 1">
          <option value="1">Opzione 1</option>
          <option value="2">Opzione 2</option>
        </optgroup>
        <optgroup label="Gruppo 2">
          <option value="3">Opzione 3</option>
          <option value="4">Opzione 4</option>
        </optgroup>`})}`},c={...a,name:"Select con testo di supporto",parameters:{docs:{canvas:{sourceState:"shown"}}},render:e=>t`${o({...e,supportText:"Questo è un testo di supporto alla select",children:r})}`},d={...a,name:"Validazione nativa",args:{required:!0},render:e=>t`
    <form>
      ${o({...e,label:"Select obbligatoria",name:"required-example",id:"required-example",children:r})}

      <div class="text-center">
        <it-button type="submit" variant="primary">Invia</it-button>
      </div>
    </form>
  `},p={...a,name:"Validazione custom",args:{customValidation:!0,validityMessage:"Questo campo è obbligatorio!!!"},render:e=>t`
    ${o({...e,required:void 0,label:"Select obbligatoria",name:"external-validation-example",id:"external-validation-example",children:r})}
  `},u={...a,name:"Gestione degli eventi",parameters:{docs:{description:{story:"È possibile gestire gli eventi di `it-input`, `it-blur`, `it-change`, `it-focus`, `it-click` per effettuare operazioni personalizzate, come la validazione esterna o l'aggiornamento di altri campi.\n<br/><br/>\nÈ sufficiente aggiungere un event listener al componente `<it-select>` per intercettare gli eventi desiderati. Ad esempio, per gestire l'evento di change, è possibile utilizzare il seguente codice:\n\n```js\ndocument.querySelector('it-select#event-select-example').addEventListener('it-change', (event) => {\n  console.log('Select event:', event);\n  alert('Select event');\n});\n```\n\nIl componente, emette anche un evento di tipo `it-input-ready` quando l'input è pronto e caricato nel DOM:\n\n```js\ndocument.querySelector('it-select#event-select-example').addEventListener('it-input-ready', (event) => {\n  console.log('Select ready:', event);\n});\n```\n      "}}},args:{label:"Prova evento di change",name:"event-select-example",id:"event-select-example"},render:e=>t(g||(g=y([`
    <script>
      document.querySelector('it-select#event-select-example').addEventListener('it-change', (event) => {
        console.log('Select event:', event);
        alert('Select event');
      });
      document.querySelector('it-select#event-select-example').addEventListener('it-input-ready', (event) => {
        console.log('Select ready:', event);
      });
    <\/script>
    `,`
  `])),o({...e,children:r}))},m={...b({componentName:"it-select"}),tags:["!dev"]};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  ...meta,
  tags: ['!dev'],
  name: 'Esempio interattivo',
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      }
    }
  },
  render: params => html\`\${renderSelect({
    ...params,
    children: DefaultChildren
  })}\`
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  ...meta,
  name: 'Select disabilitata',
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      }
    }
  },
  render: params => html\`\${renderSelect({
    ...params,
    disabled: true,
    children: DefaultChildren
  })}\`
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  ...meta,
  name: 'Select con gruppi',
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      }
    }
  },
  render: params => html\`\${renderSelect({
    ...params,
    children: html\`<optgroup label="Gruppo 1">
          <option value="1">Opzione 1</option>
          <option value="2">Opzione 2</option>
        </optgroup>
        <optgroup label="Gruppo 2">
          <option value="3">Opzione 3</option>
          <option value="4">Opzione 4</option>
        </optgroup>\`
  })}\`
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  ...meta,
  name: 'Select con testo di supporto',
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      }
    }
  },
  render: params => html\`\${renderSelect({
    ...params,
    supportText: 'Questo è un testo di supporto alla select',
    children: DefaultChildren
  })}\`
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  ...meta,
  name: 'Validazione nativa',
  args: {
    required: true
  },
  render: params => html\`
    <form>
      \${renderSelect({
    ...params,
    label: 'Select obbligatoria',
    name: 'required-example',
    id: 'required-example',
    children: DefaultChildren
  })}

      <div class="text-center">
        <it-button type="submit" variant="primary">Invia</it-button>
      </div>
    </form>
  \`
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  ...meta,
  name: 'Validazione custom',
  args: {
    customValidation: true,
    validityMessage: 'Questo campo è obbligatorio!!!'
  },
  render: params => html\`
    \${renderSelect({
    ...params,
    required: undefined,
    label: 'Select obbligatoria',
    name: 'external-validation-example',
    id: 'external-validation-example',
    children: DefaultChildren
  })}
  \`
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  ...meta,
  name: 'Gestione degli eventi',
  parameters: {
    docs: {
      description: {
        story: \`È possibile gestire gli eventi di \\\`it-input\\\`, \\\`it-blur\\\`, \\\`it-change\\\`, \\\`it-focus\\\`, \\\`it-click\\\` per effettuare operazioni personalizzate, come la validazione esterna o l'aggiornamento di altri campi.
<br/><br/>
È sufficiente aggiungere un event listener al componente \\\`<it-select>\\\` per intercettare gli eventi desiderati. Ad esempio, per gestire l'evento di change, è possibile utilizzare il seguente codice:

\\\`\\\`\\\`js
document.querySelector('it-select#event-select-example').addEventListener('it-change', (event) => {
  console.log('Select event:', event);
  alert('Select event');
});
\\\`\\\`\\\`

Il componente, emette anche un evento di tipo \\\`it-input-ready\\\` quando l'input è pronto e caricato nel DOM:

\\\`\\\`\\\`js
document.querySelector('it-select#event-select-example').addEventListener('it-input-ready', (event) => {
  console.log('Select ready:', event);
});
\\\`\\\`\\\`
      \`
      }
    }
  },
  args: {
    label: 'Prova evento di change',
    name: 'event-select-example',
    id: 'event-select-example'
  },
  render: params => html\`
    <script>
      document.querySelector('it-select#event-select-example').addEventListener('it-change', (event) => {
        console.log('Select event:', event);
        alert('Select event');
      });
      document.querySelector('it-select#event-select-example').addEventListener('it-input-ready', (event) => {
        console.log('Select ready:', event);
      });
    <\/script>
    \${renderSelect({
    ...params,
    children: DefaultChildren
  })}
  \`
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  ...StoryFormControlMethodAndProps({
    componentName: 'it-select'
  }),
  tags: ['!dev']
}`,...m.parameters?.docs?.source}}};const f=["EsempioInterattivo","Disabled","Groups","SupportText","ValidazioneNativa","ValidazioneCustom","GestioneEventi","MetodiEPropPubblici"],V=Object.freeze(Object.defineProperty({__proto__:null,Disabled:l,EsempioInterattivo:i,GestioneEventi:u,Groups:s,MetodiEPropPubblici:m,SupportText:c,ValidazioneCustom:p,ValidazioneNativa:d,__namedExportsOrder:f,default:a},Symbol.toStringTag,{value:"Module"}));export{l as D,i as E,s as G,m as M,V as S,d as V,c as a,p as b,u as c};

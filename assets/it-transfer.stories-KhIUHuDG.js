import{b as t,o as f}from"./iframe-ClE6dn2R.js";import{S as b}from"./formControlReusableStories-CpzJTnw7.js";const g={$code:"it",$name:"Italiano",$dir:"ltr",transferSourceLabel:"Sorgente",transferTargetLabel:"Destinazione",transferLabel:"Trasferisci selezionati a destra",transferBackLabel:"Trasferisci selezionati a sinistra",transferResetLabel:"Ripristina stato iniziale",transferItemsCount:"{count} elementi",transferSelectAll:"Seleziona tutto"};var p=Object.freeze,z=Object.defineProperty,V=(e,E)=>p(z(e,"raw",{value:p(e.slice())})),v;const y=()=>t`
  <it-transfer-item value="item1">Voce 1</it-transfer-item>
  <it-transfer-item value="item2">Voce 2</it-transfer-item>
  <it-transfer-item value="item3">Voce 3</it-transfer-item>
  <it-transfer-item value="item4">Voce 4</it-transfer-item>
  <it-transfer-item value="item5">Voce 5</it-transfer-item>
  <it-transfer-item value="item6">Voce 6</it-transfer-item>
`,u=e=>t`
  <it-transfer
    name="${f(e.name||void 0)}"
    source-label="${f(e.sourceLabel||void 0)}"
    target-label="${f(e.targetLabel||void 0)}"
    ?disabled="${e.disabled}"
    ?required="${e.required}"
    ?custom-validation="${e.customValidation}"
    validity-message="${f(e.validityMessage||void 0)}"
  >
    ${y()}
  </it-transfer>
`,S={title:"Componenti/Form/Transfer",tags:["a11y-ok","web-component","alpha"],component:"it-transfer",args:{name:"transfer-items",sourceLabel:"",targetLabel:"",disabled:!1,required:!1,customValidation:!1,validityMessage:""},argTypes:{name:{control:"text",description:"Il nome del campo nel form, usato nella sottomissione."},sourceLabel:{control:"text",description:"Etichetta descrittiva per la lista sorgente (sinistra). Sovrascrive il default i18n.",name:"source-label",table:{defaultValue:{summary:"Sorgente"}}},targetLabel:{control:"text",description:"Etichetta descrittiva per la lista destinazione (destra). Sovrascrive il default i18n.",name:"target-label",table:{defaultValue:{summary:"Destinazione"}}},disabled:{control:"boolean",description:"Disabilita il componente.",table:{defaultValue:{summary:"false"}}},required:{control:"boolean",description:"Rende il campo obbligatorio: la lista destinazione non può essere vuota alla sottomissione del form.",table:{defaultValue:{summary:"false"}}},customValidation:{control:"boolean",description:"Disabilita la validazione nativa e usa `validity-message` per mostrare un errore personalizzato.",name:"custom-validation",table:{defaultValue:{summary:"false"}}},validityMessage:{control:"text",description:"Messaggio di errore personalizzato (richiede `custom-validation`).",name:"validity-message",table:{defaultValue:{summary:""}}}},parameters:{layout:"padded",pageLayout:"w-100",docs:{canvas:{sourceState:"shown"}}}},a={name:"Esempio interattivo",tags:["!dev"],render:e=>u(e)},r={name:"Con valori preimpostati",render:()=>t`
    <it-transfer name="preset">
      <it-transfer-item value="item7">Voce 7</it-transfer-item>
      <it-transfer-item value="item8">Voce 8</it-transfer-item>
      <it-transfer-item value="item9">Voce 9</it-transfer-item>
      <it-transfer-item value="item10" target>Voce 10</it-transfer-item>
      <it-transfer-item value="item11" target>Voce 11</it-transfer-item>
      <it-transfer-item value="item12" target>Voce 12</it-transfer-item>
    </it-transfer>
  `},i={name:"Etichette personalizzate",render:()=>t`
    <it-transfer name="custom-labels" source-label="Comuni disponibili" target-label="Comuni selezionati">
      <it-transfer-item value="rm">Roma</it-transfer-item>
      <it-transfer-item value="mi">Milano</it-transfer-item>
      <it-transfer-item value="na">Napoli</it-transfer-item>
      <it-transfer-item value="to">Torino</it-transfer-item>
    </it-transfer>
  `},n={render:()=>t`
    <it-transfer name="disabled-example" disabled>
      <it-transfer-item value="a">Voce A</it-transfer-item>
      <it-transfer-item value="b">Voce B</it-transfer-item>
      <it-transfer-item value="c" target>Voce C</it-transfer-item>
    </it-transfer>
  `},s={name:"Validazione nativa",args:{required:!0},render:e=>t`
    <form>
      ${u({...e,name:"required-transfer"})}
      <div class="mt-3">
        <it-button type="submit" variant="primary">Invia</it-button>
        <it-button type="reset" variant="secondary" class="ms-2">Reimposta</it-button>
      </div>
    </form>
  `},o={name:"Elemento singolo disabilitato",render:()=>t`
    <it-transfer name="disabled-item">
      <it-transfer-item value="a">Voce A</it-transfer-item>
      <it-transfer-item value="b" disabled>Voce B (non trasferibile)</it-transfer-item>
      <it-transfer-item value="c">Voce C</it-transfer-item>
    </it-transfer>
  `},l={name:"Validazione custom",args:{customValidation:!0,validityMessage:"Questo campo è obbligatorio!!!"},render:e=>u({...e,name:"custom-validation-transfer"})},m={name:"Gestione degli eventi",parameters:{docs:{description:{story:`Il componente Transfer emette due eventi principali:

- \`it-transfer\`: emesso **prima** di ogni azione (trasferimento, ritrasferimento, ripristino). Annullabile con \`event.preventDefault()\`.
- \`it-change\`: emesso **dopo** ogni modifica delle liste.

Per bloccare un trasferimento dal listener:

\`\`\`js
document.querySelector('it-transfer').addEventListener('it-transfer', (e) => {
  if (e.detail.action === 'transfer' && shouldBlock) {
    e.preventDefault(); // annulla il trasferimento
  }
});
\`\`\`

Per intercettare ogni modifica delle liste:

\`\`\`js
document.querySelector('it-transfer').addEventListener('it-change', (e) => {
  console.log('Lista destinazione aggiornata:', e.detail.value);
});
\`\`\``}}},render:()=>t(v||(v=V([`
    <script>
      document.querySelector('it-transfer#event-transfer-example').addEventListener('it-transfer', (e) => {
        if (e.detail.action === 'transfer') {
          e.preventDefault();
          // eslint-disable-next-line no-alert
          alert('Trasferimento bloccato dal listener it-transfer!');
        }
      });
      document.querySelector('it-transfer#event-transfer-example').addEventListener('it-change', (e) => {
        console.log('Lista destinazione:', e.detail.value);
      });
    <\/script>
    <it-transfer id="event-transfer-example" name="event-example">
      <it-transfer-item value="a">Voce A</it-transfer-item>
      <it-transfer-item value="b">Voce B</it-transfer-item>
      <it-transfer-item value="c">Voce C</it-transfer-item>
    </it-transfer>
  `])))},c={name:"i18n",tags:["!dev"],render:()=>t`<div class="hide-preview"></div>`,parameters:{viewMode:"docs",docs:{description:{story:`
Per questo componente sono disponibili alcune stringhe traducibili tramite l'[utility di internazionalizzazione](/docs/i18n-internazionalizzazione--documentazione).

\`\`\`js
const translation = ${JSON.stringify(g,null,2)}
\`\`\`
`}}}},d={...b({componentName:"it-transfer",otherProps:"|`value`| Array JSON dei valori degli elementi presenti nella lista destinazione. |",otherEvents:"|`it-transfer`| Emesso prima di ogni azione (transfer, backtransfer, reset). Annullabile con `event.preventDefault()`. Detail: `{ action, items, source, target }`. |"}),tags:["!dev"]};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Esempio interattivo',
  tags: ['!dev'],
  render: args => renderTransfer(args)
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Con valori preimpostati',
  render: () => html\`
    <it-transfer name="preset">
      <it-transfer-item value="item7">Voce 7</it-transfer-item>
      <it-transfer-item value="item8">Voce 8</it-transfer-item>
      <it-transfer-item value="item9">Voce 9</it-transfer-item>
      <it-transfer-item value="item10" target>Voce 10</it-transfer-item>
      <it-transfer-item value="item11" target>Voce 11</it-transfer-item>
      <it-transfer-item value="item12" target>Voce 12</it-transfer-item>
    </it-transfer>
  \`
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Etichette personalizzate',
  render: () => html\`
    <it-transfer name="custom-labels" source-label="Comuni disponibili" target-label="Comuni selezionati">
      <it-transfer-item value="rm">Roma</it-transfer-item>
      <it-transfer-item value="mi">Milano</it-transfer-item>
      <it-transfer-item value="na">Napoli</it-transfer-item>
      <it-transfer-item value="to">Torino</it-transfer-item>
    </it-transfer>
  \`
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <it-transfer name="disabled-example" disabled>
      <it-transfer-item value="a">Voce A</it-transfer-item>
      <it-transfer-item value="b">Voce B</it-transfer-item>
      <it-transfer-item value="c" target>Voce C</it-transfer-item>
    </it-transfer>
  \`
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Validazione nativa',
  args: {
    required: true
  },
  render: params => html\`
    <form>
      \${renderTransfer({
    ...params,
    name: 'required-transfer'
  })}
      <div class="mt-3">
        <it-button type="submit" variant="primary">Invia</it-button>
        <it-button type="reset" variant="secondary" class="ms-2">Reimposta</it-button>
      </div>
    </form>
  \`
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Elemento singolo disabilitato',
  render: () => html\`
    <it-transfer name="disabled-item">
      <it-transfer-item value="a">Voce A</it-transfer-item>
      <it-transfer-item value="b" disabled>Voce B (non trasferibile)</it-transfer-item>
      <it-transfer-item value="c">Voce C</it-transfer-item>
    </it-transfer>
  \`
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Validazione custom',
  args: {
    customValidation: true,
    validityMessage: 'Questo campo è obbligatorio!!!'
  },
  render: params => renderTransfer({
    ...params,
    name: 'custom-validation-transfer'
  })
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Gestione degli eventi',
  parameters: {
    docs: {
      description: {
        story: \`Il componente Transfer emette due eventi principali:

- \\\`it-transfer\\\`: emesso **prima** di ogni azione (trasferimento, ritrasferimento, ripristino). Annullabile con \\\`event.preventDefault()\\\`.
- \\\`it-change\\\`: emesso **dopo** ogni modifica delle liste.

Per bloccare un trasferimento dal listener:

\\\`\\\`\\\`js
document.querySelector('it-transfer').addEventListener('it-transfer', (e) => {
  if (e.detail.action === 'transfer' && shouldBlock) {
    e.preventDefault(); // annulla il trasferimento
  }
});
\\\`\\\`\\\`

Per intercettare ogni modifica delle liste:

\\\`\\\`\\\`js
document.querySelector('it-transfer').addEventListener('it-change', (e) => {
  console.log('Lista destinazione aggiornata:', e.detail.value);
});
\\\`\\\`\\\`\`
      }
    }
  },
  render: () => html\`
    <script>
      document.querySelector('it-transfer#event-transfer-example').addEventListener('it-transfer', (e) => {
        if (e.detail.action === 'transfer') {
          e.preventDefault();
          // eslint-disable-next-line no-alert
          alert('Trasferimento bloccato dal listener it-transfer!');
        }
      });
      document.querySelector('it-transfer#event-transfer-example').addEventListener('it-change', (e) => {
        console.log('Lista destinazione:', e.detail.value);
      });
    <\/script>
    <it-transfer id="event-transfer-example" name="event-example">
      <it-transfer-item value="a">Voce A</it-transfer-item>
      <it-transfer-item value="b">Voce B</it-transfer-item>
      <it-transfer-item value="c">Voce C</it-transfer-item>
    </it-transfer>
  \`
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'i18n',
  tags: ['!dev'],
  render: () => html\`<div class="hide-preview"></div>\`,
  parameters: {
    viewMode: 'docs',
    docs: {
      description: {
        story: \`
Per questo componente sono disponibili alcune stringhe traducibili tramite l'[utility di internazionalizzazione](/docs/i18n-internazionalizzazione--documentazione).

\\\`\\\`\\\`js
const translation = \${JSON.stringify(i18nIT, null, 2)}
\\\`\\\`\\\`
\`
      }
    }
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{\n  ...StoryFormControlMethodAndProps({\n    componentName: 'it-transfer',\n    otherProps: `|\\`value\\`| Array JSON dei valori degli elementi presenti nella lista destinazione. |`,\n    otherEvents: `|\\`it-transfer\\`| Emesso prima di ogni azione (transfer, backtransfer, reset). Annullabile con \\`event.preventDefault()\\`. Detail: \\`{ action, items, source, target }\\`. |`\n  }),\n  tags: ['!dev']\n}",...d.parameters?.docs?.source}}};const h=["EsempioInterattivo","ConValoriPreimpostati","EtichettePersonalizzate","Disabilitato","ValidazioneNativa","ElementoDisabilitato","ValidazioneCustom","GestioneEventi","I18n","MetodiEPropPubblici"],P=Object.freeze(Object.defineProperty({__proto__:null,ConValoriPreimpostati:r,Disabilitato:n,ElementoDisabilitato:o,EsempioInterattivo:a,EtichettePersonalizzate:i,GestioneEventi:m,I18n:c,MetodiEPropPubblici:d,ValidazioneCustom:l,ValidazioneNativa:s,__namedExportsOrder:h,default:S},Symbol.toStringTag,{value:"Module"}));export{r as C,n as D,a as E,m as G,c as I,d as M,P as T,s as V,i as a,o as b,l as c};

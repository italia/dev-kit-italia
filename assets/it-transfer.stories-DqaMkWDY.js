import{b as t,o as p}from"./iframe-Cl3Kz-XE.js";import{S as y}from"./formControlReusableStories-Bet2TDPn.js";const h={$code:"it",$name:"Italiano",$dir:"ltr",transferSourceLabel:"Sorgente",transferTargetLabel:"Destinazione",transferLabel:"Trasferisci selezionati a destra",transferBackLabel:"Trasferisci selezionati a sinistra",transferResetLabel:"Ripristina stato iniziale",transferItemsCount:"{count} elementi",transferSelectAll:"Seleziona tutto"};var g=Object.freeze,S=Object.defineProperty,v=(e,D)=>g(S(e,"raw",{value:g(e.slice())})),z,V,E;const C=()=>t`
  <it-transfer-item value="item1">Voce 1</it-transfer-item>
  <it-transfer-item value="item2">Voce 2</it-transfer-item>
  <it-transfer-item value="item3">Voce 3</it-transfer-item>
  <it-transfer-item value="item4">Voce 4</it-transfer-item>
  <it-transfer-item value="item5">Voce 5</it-transfer-item>
  <it-transfer-item value="item6">Voce 6</it-transfer-item>
`,b=e=>t`
  <it-transfer
    name="${p(e.name||void 0)}"
    source-label="${p(e.sourceLabel||void 0)}"
    target-label="${p(e.targetLabel||void 0)}"
    ?disabled="${e.disabled}"
    ?required="${e.required}"
    ?custom-validation="${e.customValidation}"
    validity-message="${p(e.validityMessage||void 0)}"
  >
    ${C()}
  </it-transfer>
`,x={title:"Componenti/Form/Transfer",tags:["a11y-ok","web-component"],component:"it-transfer",args:{name:"transfer-items",sourceLabel:"",targetLabel:"",disabled:!1,required:!1,customValidation:!1,validityMessage:""},argTypes:{name:{control:"text",description:"Il nome del campo nel form, usato nella sottomissione."},sourceLabel:{control:"text",description:"Etichetta descrittiva per la lista sorgente (sinistra). Sovrascrive il default i18n.",name:"source-label",table:{defaultValue:{summary:"Sorgente"}}},targetLabel:{control:"text",description:"Etichetta descrittiva per la lista destinazione (destra). Sovrascrive il default i18n.",name:"target-label",table:{defaultValue:{summary:"Destinazione"}}},disabled:{control:"boolean",description:"Disabilita il componente.",table:{defaultValue:{summary:"false"}}},required:{control:"boolean",description:"Rende il campo obbligatorio: la lista destinazione non può essere vuota alla sottomissione del form.",table:{defaultValue:{summary:"false"}}},customValidation:{control:"boolean",description:"Disabilita la validazione nativa e usa `validity-message` per mostrare un errore personalizzato.",name:"custom-validation",table:{defaultValue:{summary:"false"}}},validityMessage:{control:"text",description:"Messaggio di errore personalizzato (richiede `custom-validation`).",name:"validity-message",table:{defaultValue:{summary:""}}}},parameters:{layout:"padded",pageLayout:"w-100",docs:{canvas:{sourceState:"shown"}}}},a={name:"Esempio interattivo",tags:["!dev"],render:e=>b(e)},r={name:"Con valori preimpostati",render:()=>t`
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
      ${b({...e,name:"required-transfer"})}
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
  `},l={name:"Validazione custom",args:{customValidation:!0,validityMessage:"Questo campo è obbligatorio!!!"},render:e=>b({...e,name:"custom-validation-transfer"})},m={name:"Gestione degli eventi",parameters:{docs:{description:{story:`Il componente Transfer emette due eventi principali:

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
\`\`\``}}},render:()=>t(z||(z=v([`
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
const translation = ${JSON.stringify(h,null,2)}
\`\`\`
`}}}},d={name:"Evento annullabile",parameters:{docs:{description:{story:`L'evento \`it-transfer\` è annullabile. Chiamando \`event.preventDefault()\` puoi bloccare
l'azione in corso (transfer, backtransfer, reset) ed eseguire una logica di validazione personalizzata.

Questo esempio mostra come bloccare il trasferimento quando il numero di elementi nella lista di
destinazione supererebbe il limite di 3 elementi.

Per riprendere l'azione dopo logica asincrona (validazione remota, conferma dell'utente), usa il metodo pubblico \`commit(event.detail)\`.
Vedi la sezione dedicata per un esempio completo.`}}},render:()=>t(V||(V=v([`
    <div id="transfer-cancelable-example">
      <it-transfer name="max-items-transfer">
        <it-transfer-item value="a">Voce A</it-transfer-item>
        <it-transfer-item value="b">Voce B</it-transfer-item>
        <it-transfer-item value="c">Voce C</it-transfer-item>
        <it-transfer-item value="d">Voce D</it-transfer-item>
        <it-transfer-item value="e">Voce E</it-transfer-item>
        <it-transfer-item value="f">Voce F</it-transfer-item>
      </it-transfer>
      <p role="status" aria-live="polite" style="margin-top: 1rem; color: #d32f2f;"></p>
    </div>

    <script>
      const el = document.querySelector('#transfer-cancelable-example it-transfer');
      const statusEl = document.querySelector('#transfer-cancelable-example p[role="status"]');

      el.addEventListener('it-transfer', (e) => {
        if (e.detail.action === 'transfer' && e.detail.target.length > 3) {
          e.preventDefault();
          statusEl.textContent = 'Limite di 3 elementi nel target raggiunto.';
        } else {
          statusEl.textContent = '';
        }
      });
    <\/script>
  `])))},u={name:"Evento annullabile con ripresa",parameters:{docs:{description:{story:"Chiama `event.preventDefault()` per bloccare l'azione, poi usa il metodo pubblico `commit(event.detail)` per applicarla in modo programmatico dopo la tua logica asincrona — senza rieseguire l'evento."}}},render:()=>t(E||(E=v([`
    <div id="transfer-resume-example">
      <it-transfer name="resume-transfer">
        <it-transfer-item value="a">Voce A</it-transfer-item>
        <it-transfer-item value="b">Voce B</it-transfer-item>
        <it-transfer-item value="c">Voce C</it-transfer-item>
        <it-transfer-item value="d">Voce D</it-transfer-item>
      </it-transfer>
      <p role="status" aria-live="polite" id="transfer-resume-status" style="margin-top: 1rem;"></p>
    </div>

    <script>
      const el2 = document.querySelector('#transfer-resume-example it-transfer');
      const statusEl2 = document.querySelector('#transfer-resume-status');

      el2.addEventListener('it-transfer', (e) => {
        if (e.detail.action === 'transfer') {
          e.preventDefault();
          statusEl2.textContent = 'Attendere conferma…';
          // Simula logica asincrona (es. chiamata API, conferma utente)
          setTimeout(() => {
            el2.commit(e.detail); // applica lo stato proposto senza rieseguire l'evento
            statusEl2.textContent = '';
          }, 4000);
        }
      });
    <\/script>
  `])))},f={...y({componentName:"it-transfer",otherProps:"|`value`| Array JSON dei valori degli elementi presenti nella lista destinazione. |",otherMethods:"|`transfer()`| Sposta gli elementi selezionati dalla lista sorgente alla lista destinazione. Equivale al click sul pulsante →. | - |\n|`backtransfer()`| Riporta gli elementi selezionati dalla lista destinazione alla lista sorgente. Equivale al click sul pulsante ←. | - |\n|`reset()`| Ripristina entrambe le liste allo stato iniziale. Equivale al click sul pulsante ↺. | - |\n|`commit(detail)`| Applica lo stato proposto da un evento `it-transfer` precedentemente annullato, senza rieseguire l'evento. Usare dopo `event.preventDefault()` per riprendere l'azione in modo programmatico. | detail: `TransferEventDetail` |",otherEvents:"|`it-transfer`| Emesso prima di ogni azione (transfer, backtransfer, reset). Annullabile con `event.preventDefault()`. Il `detail` contiene `{ action, items, source, target }` che descrive lo stato proposto. |\n|`it-change`| Emesso dopo ogni modifica delle liste. Il `detail` contiene `{ value, el }`. |"}),tags:["!dev"]};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Evento annullabile',
  parameters: {
    docs: {
      description: {
        story: \`L'evento \\\`it-transfer\\\` è annullabile. Chiamando \\\`event.preventDefault()\\\` puoi bloccare
l'azione in corso (transfer, backtransfer, reset) ed eseguire una logica di validazione personalizzata.

Questo esempio mostra come bloccare il trasferimento quando il numero di elementi nella lista di
destinazione supererebbe il limite di 3 elementi.

Per riprendere l'azione dopo logica asincrona (validazione remota, conferma dell'utente), usa il metodo pubblico \\\`commit(event.detail)\\\`.
Vedi la sezione dedicata per un esempio completo.\`
      }
    }
  },
  render: () => html\`
    <div id="transfer-cancelable-example">
      <it-transfer name="max-items-transfer">
        <it-transfer-item value="a">Voce A</it-transfer-item>
        <it-transfer-item value="b">Voce B</it-transfer-item>
        <it-transfer-item value="c">Voce C</it-transfer-item>
        <it-transfer-item value="d">Voce D</it-transfer-item>
        <it-transfer-item value="e">Voce E</it-transfer-item>
        <it-transfer-item value="f">Voce F</it-transfer-item>
      </it-transfer>
      <p role="status" aria-live="polite" style="margin-top: 1rem; color: #d32f2f;"></p>
    </div>

    <script>
      const el = document.querySelector('#transfer-cancelable-example it-transfer');
      const statusEl = document.querySelector('#transfer-cancelable-example p[role="status"]');

      el.addEventListener('it-transfer', (e) => {
        if (e.detail.action === 'transfer' && e.detail.target.length > 3) {
          e.preventDefault();
          statusEl.textContent = 'Limite di 3 elementi nel target raggiunto.';
        } else {
          statusEl.textContent = '';
        }
      });
    <\/script>
  \`
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Evento annullabile con ripresa',
  parameters: {
    docs: {
      description: {
        story: \`Chiama \\\`event.preventDefault()\\\` per bloccare l'azione, poi usa il metodo pubblico \\\`commit(event.detail)\\\` per applicarla in modo programmatico dopo la tua logica asincrona — senza rieseguire l'evento.\`
      }
    }
  },
  render: () => html\`
    <div id="transfer-resume-example">
      <it-transfer name="resume-transfer">
        <it-transfer-item value="a">Voce A</it-transfer-item>
        <it-transfer-item value="b">Voce B</it-transfer-item>
        <it-transfer-item value="c">Voce C</it-transfer-item>
        <it-transfer-item value="d">Voce D</it-transfer-item>
      </it-transfer>
      <p role="status" aria-live="polite" id="transfer-resume-status" style="margin-top: 1rem;"></p>
    </div>

    <script>
      const el2 = document.querySelector('#transfer-resume-example it-transfer');
      const statusEl2 = document.querySelector('#transfer-resume-status');

      el2.addEventListener('it-transfer', (e) => {
        if (e.detail.action === 'transfer') {
          e.preventDefault();
          statusEl2.textContent = 'Attendere conferma…';
          // Simula logica asincrona (es. chiamata API, conferma utente)
          setTimeout(() => {
            el2.commit(e.detail); // applica lo stato proposto senza rieseguire l'evento
            statusEl2.textContent = '';
          }, 4000);
        }
      });
    <\/script>
  \`
}`,...u.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:"{\n  ...StoryFormControlMethodAndProps({\n    componentName: 'it-transfer',\n    otherProps: `|\\`value\\`| Array JSON dei valori degli elementi presenti nella lista destinazione. |`,\n    otherMethods: `|\\`transfer()\\`| Sposta gli elementi selezionati dalla lista sorgente alla lista destinazione. Equivale al click sul pulsante →. | - |\n|\\`backtransfer()\\`| Riporta gli elementi selezionati dalla lista destinazione alla lista sorgente. Equivale al click sul pulsante ←. | - |\n|\\`reset()\\`| Ripristina entrambe le liste allo stato iniziale. Equivale al click sul pulsante ↺. | - |\n|\\`commit(detail)\\`| Applica lo stato proposto da un evento \\`it-transfer\\` precedentemente annullato, senza rieseguire l'evento. Usare dopo \\`event.preventDefault()\\` per riprendere l'azione in modo programmatico. | detail: \\`TransferEventDetail\\` |`,\n    otherEvents: `|\\`it-transfer\\`| Emesso prima di ogni azione (transfer, backtransfer, reset). Annullabile con \\`event.preventDefault()\\`. Il \\`detail\\` contiene \\`{ action, items, source, target }\\` che descrive lo stato proposto. |\n|\\`it-change\\`| Emesso dopo ogni modifica delle liste. Il \\`detail\\` contiene \\`{ value, el }\\`. |`\n  }),\n  tags: ['!dev']\n}",...f.parameters?.docs?.source}}};const q=["EsempioInterattivo","ConValoriPreimpostati","EtichettePersonalizzate","Disabilitato","ValidazioneNativa","ElementoDisabilitato","ValidazioneCustom","GestioneEventi","I18n","EventoAnnullabile","EventoAnnullabileConRipresa","MetodiEPropPubblici"],P=Object.freeze(Object.defineProperty({__proto__:null,ConValoriPreimpostati:r,Disabilitato:n,ElementoDisabilitato:o,EsempioInterattivo:a,EtichettePersonalizzate:i,EventoAnnullabile:d,EventoAnnullabileConRipresa:u,GestioneEventi:m,I18n:c,MetodiEPropPubblici:f,ValidazioneCustom:l,ValidazioneNativa:s,__namedExportsOrder:q,default:x},Symbol.toStringTag,{value:"Module"}));export{r as C,n as D,a as E,m as G,c as I,f as M,P as T,s as V,i as a,o as b,l as c,d,u as e};

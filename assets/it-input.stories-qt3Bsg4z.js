import{x as n}from"./lit-element-DvQWNfDj.js";import{o as i}from"./query-nkdlPDuA.js";import"./it-icon-BRwEJqiM.js";import"./it-button-DjPat_nX.js";import"./it-input-I_le9OhK.js";import"./iframe-CE9jUz7H.js";const oe=["text","email","number","tel","time","password","textarea"],re=["sm",void 0,"lg"],se={$code:"it",$name:"Italiano",$dir:"ltr",showHidePassword:"Mostra/Nascondi Password.",shortPass:"Password troppo breve.",badPass:"Password debole.",goodPass:"Password abbastanza sicura.",strongPass:"Password sicura.",ariaLabelPasswordMeter:"Robustezza della password",passwordSuggestionsLabel:"Suggerimenti per una buona password:",passwordSuggestionLength:"Almeno {minLength} caratteri.",passwordSuggestionUppercase:"Una o più maiuscole.",passwordSuggestionLowercase:"Una o più minuscole.",passwordSuggestionNumber:"Uno o più numeri.",passwordSuggestionSpecial:"Uno o più caratteri speciali.",passwordSuggestionFollowed:"suggerimenti seguiti",passwordSuggestionFollowedPlural:"suggerimenti seguiti",passwordSuggestionOf:"di",passwordSuggestionMetLabel:"Soddisfatto:",validityRequired:"Questo campo è obbligatorio.",validityInvalid:"Il valore non è corretto.",validityPattern:"Il valore non corrisponde al formato richiesto.",validityMinlength:"Il valore deve essere lungo almeno {minlength} caratteri.",validityMaxlength:"Il valore deve essere lungo al massimo {maxlength} caratteri."};var y=Object.freeze,le=Object.defineProperty,de=(e,pe)=>y(le(e,"raw",{value:y(e.slice())})),x;const t=e=>n`<it-input
    id="${i(e.id||void 0)}"
    label="${i(e.label||void 0)}"
    type="${i(e.type||void 0)}"
    name="${i(e.name||void 0)}"
    ?disabled="${e.disabled}"
    ?invalid="${e.invalid}"
    ?required="${e.required}"
    ?readonly="${e.readonly}"
    ?plaintext="${e.plaintext}"
    validity-message="${i(e.validityMessage||void 0)}"
    placeholder="${i(e.placeholder||void 0)}"
    support-text="${i(e.supportText||void 0)}"
    value="${i(e.value||void 0)}"
    size="${i(e.size||void 0)}"
    ?slotted="${e.slotted}"
    ?strength-meter="${e.passwordStrengthMeter}"
    minlength="${i(e.minlength)||void 0}"
    maxlength="${i(e.maxlength)||void 0}"
    ?suggestions="${e.suggestions}"
    ?label-hidden="${e.labelHidden}"
    ?custom-validation="${e.customValidation}"
    >${i(e.children||void 0)}</it-input
  >`,a={title:"Componenti/Form/Input",tags:["autodocs"],component:"it-input",args:{id:"",label:"Nome",type:"text",name:"nome",disabled:!1,invalid:!1,required:!1,validityMessage:"",customValidation:!1,placeholder:"",supportText:"",value:"",size:void 0,readonly:!1,plaintext:!1,slotted:!1,labelHidden:!1,passwordStrengthMeter:!1,minlength:void 0,maxlength:void 0,suggestions:!1},argTypes:{label:{control:"text",description:"Etichetta del campo"},type:{control:"select",options:oe,table:{defaultValue:{summary:"text"}}},name:{control:"text"},disabled:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},invalid:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},required:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},validityMessage:{name:"validity-message",control:"text",description:"Messaggio che viene mostrato quando il campo è invalido"},customValidation:{name:"custom-validation",control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}},description:"Se la validazione del campo è fatta esternamente (lato server o con plugin js), impostare questo attributo a `true`."},placeholder:{control:"text",description:"Testo segnaposto"},supportText:{name:"support-text",control:"text",description:"Testo di supporto"},value:{control:"text",description:"Valore del campo"},size:{control:"select",options:re,description:"Dimensione del campo: 'sm' | (stringa vuota) | 'lg' ",table:{defaultValue:{summary:void 0}}},readonly:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},plaintext:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}},description:"Se il campo è readonly, con l'attributo 'plaintext' il campo assume l'aspetto di testo normalizzato."},slotted:{control:"boolean",type:"boolean",description:"Se vengono usati gli slot per mostrare l'icona o il bottone, questo attributo deve avere valore 'true'",table:{defaultValue:{summary:"false"}}},labelHidden:{name:"label-hidden",control:"boolean",type:"boolean",description:"Se si vuole nascondere la label. Risulterà comunque accessibile per i lettori di schermo.",table:{defaultValue:{summary:"false"}}},passwordStrengthMeter:{name:"strength-meter",control:"boolean",type:"boolean",description:"Se si vuole mostrare o meno il misuratore di robustezza della password nel caso di type='password'",table:{defaultValue:{summary:"false"}}},minlength:{type:"number",description:"Lunghezza minima del valore da inserire. Usato anche per validare la robustezza della password",table:{defaultValue:{summary:'undefined. Se type="password": 8'}}},maxlength:{type:"number",description:"Lunghezza massima del valore da inserire."},suggestions:{name:"suggestions",control:"boolean",type:"boolean",description:"Se si vogliono mostrare i suggerimenti per l'insderimento di una password sicura.",table:{defaultValue:{summary:"false"}}}},parameters:{docs:{description:{component:`
<Description>Input accessibile e responsivo.</Description>

Per il corretto funzionamento degli elementi di tipo \`<it-input>\` è di fondamentale importanza l’utilizzo uno degli appositi attributi \`type\` (ad esempio, "email" per l’inserimento di indirizzi email o "number" per informazioni numeriche), in modo da sfruttare i controlli nativi dei browser più recenti come la verifica dell’email, l’utilizzo di metodo di input numerico ed altro.

<div class="callout callout-success"><div class="callout-inner"><div class="callout-title"><span class="text">Accessibilità</span></div>
<p>
Tutti gli attributi \`aria-*\` passati a \`<it-input>\` vengono applicati all'input generato.
</p></div></div>
`}}}},o={...a,name:"Esempio interattivo",tags:["!autodocs","!dev"],parameters:{docs:{canvas:{sourceState:"shown"}}},render:e=>n`${t({...e,type:"text",label:"Campo di testo",name:"testo",id:"exampleInputText"})}
    ${t({...e,type:"email",label:"Campo email",name:"email",id:"exampleInputEmail"})}
    ${t({...e,type:"number",label:"Campo numerico",name:"number",id:"exampleInputNumber"})}
    ${t({...e,type:"tel",label:"Campo telefonico",name:"telefono",id:"exampleInputTel"})}
    ${t({...e,type:"time",label:"Campo orario",name:"orario",id:"exampleInputTime"})}`},r={...a,name:"Testo segnaposto",args:{type:"text",placeholder:"Testo segnaposto",label:"Etichetta",name:"placeholder-example",id:"placeholder-example"},parameters:{docs:{description:{story:"\nÈ possibile abbinare al componente `<it-input>` un testo segnaposto (placeholder) per fornire indicazioni sul tipo di contenuto atteso. Questo testo non sostituisce l’etichetta, ma fornisce informazioni aggiuntive.\n"}}},render:e=>n`
    ${t({...e})}
  `},s={...a,name:"Testo di supporto",args:{type:"text",label:"Etichetta",placeholder:"Testo segnaposto",name:"supportText-example",id:"supportText-example",supportText:"Testo di supporto"},parameters:{docs:{description:{story:"In caso di necessità, è anche possibile utilizzare un ulteriore contenuto testuale sotto il campo di testo, indicando nell'attributo `support-text` il testo da visualizzare."}}},render:e=>n`
    ${t({...e})}
  `},l={...a,name:"Etichetta nascosta",args:{placeholder:"Cerca...",label:"Cerca nel sito",labelHidden:!0},parameters:{docs:{description:{story:"Se si vuole nascondere l'etichetta, come ad esempio nei campi di ricerca, è sufficiente passare l'attributo `label-hidden`."}}},render:e=>n`
    ${t({...e})}
  `},d={...a,name:"Icone o pulsanti",args:{placeholder:"Icone o pulsanti",type:"text",label:"Campo con icona",name:"field-icon-example",id:"field-icon-example",slotted:!0,supportText:"Testo di supporto"},parameters:{docs:{description:{story:'<div class="callout callout-success"><div class="callout-inner"><div class="callout-title"><span class="text">Accessibilità delle icone</span></div><p>Nel caso in cui l’icona è semanticamente rilevante e non spiegata dal testo che la segue, occorre passare al componente `<it-icon>` l\'attributo `label` che ne spieghi il significato (nel formato `<it-icon .... label="Significato dell\'icona"/>`)</p></div></div>'}}},render:e=>n`
    ${t({...e,children:n`<it-icon name="it-pencil" slot="icon" size="sm"></it-icon>
        <it-button variant="primary" slot="append">Invio</it-button>`})}
  `},p={...a,parameters:{docs:{description:{story:"L'input di base ha una dimensione media che non necessita di alcuna classe aggiuntiva.\n\nPer modificare questa dimensione, è possiible utilizzare l'attributo `size` il cui valore può essere `sm` oppure `lg`.\n\nPer modificare invece la dimensione dell’icona, è possibile utilizzare l'attributo `size` sull'icona in questo modo:\n<table>\n<thead>\n  <tr><th>Dimensione input</th><th>Attributo size (di it-input)</th><th>Dimensione icona</th></tr>\n</thead>\n<tbody>\n  <tr><td>Grande</td><td>`lg`</td><td>`md`</td></tr>\n  <tr><td>Base (default)</td><td></td><td>`sm`</td></tr>\n  <tr><td>Piccola</td><td>`sm`</td><td>`xs`</td></tr>\n</tbody>\n</table>\n"}}},args:{type:"text",placeholder:"Testo segnaposto",slotted:!0},render:e=>n`
    ${t({...e,label:"Campo di dimensione grande",name:"field-big-example",id:"field-big-example",size:"lg",children:n`<it-icon name="it-pencil" slot="icon" size="md"></it-icon>
        <it-button variant="primary" slot="append">Invio</it-button>`})}
    ${t({...e,label:"Campo di dimensione base",name:"field-sizebase-example",id:"field-sizebase-example",placeholder:"Testo segnaposto",children:n`<it-icon name="it-pencil" slot="icon" size="sm"></it-icon>
        <it-button variant="primary" slot="append">Invio</it-button>`})}
    ${t({...e,label:"Campo di dimensione piccola",name:"field-small-example",id:"field-small-example",size:"sm",children:n`<it-icon name="it-pencil" slot="icon" size="xs"></it-icon>
        <it-button variant="primary" slot="append">Invio</it-button>`})}
  `},m={...a,parameters:{docs:{description:{story:"Aggiungi l’attributo `disabled` ad un `<it-input>` per impedire la modifica del valore contenuto e non inviare i dati in esso contenuti."}}},args:{type:"text",label:"Campo disabilitato",name:"field-disabled-example",id:"field-disabled-example",disabled:!0},render:e=>n`
    ${t({...e})}
  `},c={...a,parameters:{docs:{description:{story:"Aggiungi l’attributo `readonly` ad un `<it-input>` per impedire la modifica del valore contenuto.\n<br/><br/><h4>Readonly normalizzato</h4>Se per qualche motivo vuoi avere gli elementi input readonly nella forma stilizzata come testo, aggiungi l'attributo `plaintext` a `<it-input>`."}}},args:{type:"text",readonly:!0,value:"Contenuto in sola lettura"},render:e=>n`
    ${t({...e,label:"Campo readonly",name:"field-readonly-example",id:"field-readonly-example"})}
    ${t({...e,label:"Campo readonly normalizzato come plaintext",name:"field-readonlyplaintext-example",id:"field-readonlyplaintext-example",plaintext:!0})}
  `},u={...a,parameters:{docs:{description:{story:'Per semplificare l’inserimento della password, il componente `<it-input>` di tipo password include un pulsante che mostra i caratteri digitati.\n        È inoltre possibile aggiungere un testo di supporto che aiuti nella compilazione, attraverso l’attributo `support-text`.\n        <br/><br/>\n        <h4>Misuratore sicurezza e suggerimenti</h4>\nNel caso di un campo per la scelta di una nuova password, è possibile abbinare controlli per segnalare quanto la password che si sta inserendo segua alcuni suggerimenti di sicurezza, come la lunghezza minima o l’uso di caratteri speciali, attraverso gli attributi `strength-meter="true"` e `minlength` per modificare la lunghezza minima richiesta per la password.\n\nInoltre, è possibile restituire all’utente una lista dei suggerimenti, con indicati quelli che sono stati soddisfatti, attraverso l’attributo `suggestions="true"`.\n'}}},args:{type:"password",label:"Campo password",supportText:"Inserisci almeno 8 caratteri e alcuni caratteri speciali.",minlength:8},render:e=>n`
    ${t({...e,name:"field-password-example",id:"field-password-example"})}
    ${t({...e,name:"field-password-strength-example",id:"field-password-strength-example",passwordStrengthMeter:!0,suggestions:!0})}
  `},g={...a,name:"Area di testo",parameters:{docs:{description:{story:'Per permettere agli utenti di inserire un testo esteso (ad esempio per lasciare commenti o informazioni), è bene utilizzare un elemento `<it-input>` con `type="textarea"`.'}}},args:{type:"textarea",label:"Area di testo",name:"textarea-example",id:"textarea-example",placeholder:"Testo segnaposto"},render:e=>n`
    ${t({...e})}
  `},b={...a,name:"Gestione degli errori",parameters:{docs:{description:{story:"Se sono stati impostati uno di questi attributi <ul><li>`required`</li><li>`pattern`</li><li>`minlength`</li></ul> viene effettuata una validazione interna al componente.\n <br/><br/><h4>Personalizzazione dei messaggi di errore</h4>E' possibile personalizzare i messaggi di errore tramite l'attributo `translations` a seconda che:\n       <ul><li>il campo è required e non è compilato: impostando il valore di `validityRequired` in `translations`</li>\n        <li>il campo non rispetta il pattern: impostando il valore di `validityPattern` in `translations`</li>\n        <li>il campo è troppo corto: impostando il valore di `validityMinlength` in `translations`</li>\n        <li>il campo ha un valore non valido: impostando il valore di `validityInvalid` in `translations`</li></ul>\n        <h4>Validazione esterna</h4>\n        E' inoltre possibile validare il campo esternamente (via js ad esempio, o lato server), impostando l' attributo `custom-validation=\"true\"`. In questo modo la validazione di defautl effettuata internamente al componente è disabilitata.\n        <br/>Nel caso il campo non sia valido, è necessario invalidare il campo impostando il messaggio di errore da visualizzare attraverso l'attributo `validity-message=\"Messaggio di errore\"`."}}},args:{type:"text",placeholder:"Testo segnaposto",translations:void 0},render:e=>n`
    ${t({...e,label:"Campo obbligatorio",name:"required-example",id:"required-example",required:!0})}
    ${t({...e,label:"Validazione esterna",name:"external-validation-example",id:"external-validation-example",validityMessage:"Questo campo è obbligatorio!",customValidation:!0,required:void 0})}
  `},v={...a,name:"Gestione degli eventi",parameters:{docs:{description:{story:"E' possibile gestire gli eventi di `on-input`, `blur`, `change`, `focus`, `click` per effettuare operazioni personalizzate, come la validazione esterna o l'aggiornamento di altri campi.\n        <br/><br/>\n        E' sufficiente aggiungere un event listener al componente `<it-input>` per intercettare gli eventi desiderati. Ad esempio, per gestire l'evento di input, è possibile utilizzare il seguente codice:\n\n```js\ndocument.querySelector('it-input#event-input-example').addEventListener('on-input', (event) => {\n  console.log('Input event:', event);\n  alert('Input event);\n});\n```\n\nIl componente, emette anche un evento di tipo `input-ready` quando l'input è pronto e caricato nel DOM:\n\n```js\ndocument.querySelector('it-input#event-input-example').addEventListener('input-ready', (event) => {\n  console.log('Input ready:', event);\n});\n```\n      "}}},args:{type:"text",label:"Prova evento di input",name:"event-input-example",id:"event-input-example",placeholder:"Testo segnaposto",translations:void 0},render:e=>n(x||(x=de([`
    <script>
      document.querySelector('it-input#event-input-example').addEventListener('on-input', (event) => {
        console.log('Input event:', event);
        alert('Input event');
      });
      document.querySelector('it-input#event-input-example').addEventListener('input-ready', (event) => {
        console.log('Input ready:', event);
      });
    <\/script>
    `,`
  `])),t({...e}))},h={name:"i18n",tags:["!dev"],render:()=>n`<div class="hide-preview"></div>`,parameters:{viewMode:"docs",docs:{description:{story:`
Per questo componente sono disponibili alcune stringhe traducibili tramite l'[utility di internazionalizzazione](/docs/i18n-internazionalizzazione--documentazione).

\`\`\`js
const translation = {
  ${JSON.stringify(se).replaceAll('{"','"').replaceAll('",',`",
	`).replaceAll('"}','"')}
}
\`\`\`
`}}}};var z,f,$;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
  render: params => html\`\${renderComponent({
    ...params,
    type: 'text',
    label: 'Campo di testo',
    name: 'testo',
    id: 'exampleInputText'
  })}
    \${renderComponent({
    ...params,
    type: 'email',
    label: 'Campo email',
    name: 'email',
    id: 'exampleInputEmail'
  })}
    \${renderComponent({
    ...params,
    type: 'number',
    label: 'Campo numerico',
    name: 'number',
    id: 'exampleInputNumber'
  })}
    \${renderComponent({
    ...params,
    type: 'tel',
    label: 'Campo telefonico',
    name: 'telefono',
    id: 'exampleInputTel'
  })}
    \${renderComponent({
    ...params,
    type: 'time',
    label: 'Campo orario',
    name: 'orario',
    id: 'exampleInputTime'
  })}\`
}`,...($=(f=o.parameters)==null?void 0:f.docs)==null?void 0:$.source}}};var w,I,S;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  ...meta,
  name: 'Testo segnaposto',
  args: {
    type: 'text',
    placeholder: 'Testo segnaposto',
    label: 'Etichetta',
    name: 'placeholder-example',
    id: 'placeholder-example'
  },
  parameters: {
    docs: {
      description: {
        story: \`
È possibile abbinare al componente \\\`<it-input>\\\` un testo segnaposto (placeholder) per fornire indicazioni sul tipo di contenuto atteso. Questo testo non sostituisce l’etichetta, ma fornisce informazioni aggiuntive.
\`
      }
    }
  },
  render: params => html\`
    \${renderComponent({
    ...params
  })}
  \`
}`,...(S=(I=r.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var C,T,q;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  ...meta,
  name: 'Testo di supporto',
  args: {
    type: 'text',
    label: 'Etichetta',
    placeholder: 'Testo segnaposto',
    name: 'supportText-example',
    id: 'supportText-example',
    supportText: 'Testo di supporto'
  },
  parameters: {
    docs: {
      description: {
        story: \`In caso di necessità, è anche possibile utilizzare un ulteriore contenuto testuale sotto il campo di testo, indicando nell'attributo \\\`support-text\\\` il testo da visualizzare.\`
      }
    }
  },
  render: params => html\`
    \${renderComponent({
    ...params
  })}
  \`
}`,...(q=(T=s.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var P,E,M;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  ...meta,
  name: 'Etichetta nascosta',
  args: {
    placeholder: 'Cerca...',
    label: 'Cerca nel sito',
    labelHidden: true
  },
  parameters: {
    docs: {
      description: {
        story: \`Se si vuole nascondere l'etichetta, come ad esempio nei campi di ricerca, è sufficiente passare l'attributo \\\`label-hidden\\\`.\`
      }
    }
  },
  render: params => html\`
    \${renderComponent({
    ...params
  })}
  \`
}`,...(M=(E=l.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var V,A,L;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  ...meta,
  name: 'Icone o pulsanti',
  args: {
    placeholder: 'Icone o pulsanti',
    type: 'text',
    label: 'Campo con icona',
    name: 'field-icon-example',
    id: 'field-icon-example',
    slotted: true,
    supportText: 'Testo di supporto'
  },
  parameters: {
    docs: {
      description: {
        story: \`<div class="callout callout-success"><div class="callout-inner"><div class="callout-title"><span class="text">Accessibilità delle icone</span></div><p>Nel caso in cui l’icona è semanticamente rilevante e non spiegata dal testo che la segue, occorre passare al componente \\\`<it-icon>\\\` l'attributo \\\`label\\\` che ne spieghi il significato (nel formato \\\`<it-icon .... label="Significato dell'icona"/>\\\`)</p></div></div>\`
      }
    }
  },
  render: params => html\`
    \${renderComponent({
    ...params,
    children: html\`<it-icon name="it-pencil" slot="icon" size="sm"></it-icon>
        <it-button variant="primary" slot="append">Invio</it-button>\`
  })}
  \`
}`,...(L=(A=d.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var D,N,j;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  ...meta,
  parameters: {
    docs: {
      description: {
        story: \`L'input di base ha una dimensione media che non necessita di alcuna classe aggiuntiva.

Per modificare questa dimensione, è possiible utilizzare l'attributo \\\`size\\\` il cui valore può essere \\\`sm\\\` oppure \\\`lg\\\`.

Per modificare invece la dimensione dell’icona, è possibile utilizzare l'attributo \\\`size\\\` sull'icona in questo modo:
<table>
<thead>
  <tr><th>Dimensione input</th><th>Attributo size (di it-input)</th><th>Dimensione icona</th></tr>
</thead>
<tbody>
  <tr><td>Grande</td><td>\\\`lg\\\`</td><td>\\\`md\\\`</td></tr>
  <tr><td>Base (default)</td><td></td><td>\\\`sm\\\`</td></tr>
  <tr><td>Piccola</td><td>\\\`sm\\\`</td><td>\\\`xs\\\`</td></tr>
</tbody>
</table>
\`
      }
    }
  },
  args: {
    type: 'text',
    placeholder: 'Testo segnaposto',
    slotted: true
  },
  render: params => html\`
    \${renderComponent({
    ...params,
    label: 'Campo di dimensione grande',
    name: 'field-big-example',
    id: 'field-big-example',
    size: 'lg',
    children: html\`<it-icon name="it-pencil" slot="icon" size="md"></it-icon>
        <it-button variant="primary" slot="append">Invio</it-button>\`
  })}
    \${renderComponent({
    ...params,
    label: 'Campo di dimensione base',
    name: 'field-sizebase-example',
    id: 'field-sizebase-example',
    placeholder: 'Testo segnaposto',
    children: html\`<it-icon name="it-pencil" slot="icon" size="sm"></it-icon>
        <it-button variant="primary" slot="append">Invio</it-button>\`
  })}
    \${renderComponent({
    ...params,
    label: 'Campo di dimensione piccola',
    name: 'field-small-example',
    id: 'field-small-example',
    size: 'sm',
    children: html\`<it-icon name="it-pencil" slot="icon" size="xs"></it-icon>
        <it-button variant="primary" slot="append">Invio</it-button>\`
  })}
  \`
}`,...(j=(N=p.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var _,G,O;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  ...meta,
  parameters: {
    docs: {
      description: {
        story: \`Aggiungi l’attributo \\\`disabled\\\` ad un \\\`<it-input>\\\` per impedire la modifica del valore contenuto e non inviare i dati in esso contenuti.\`
      }
    }
  },
  args: {
    type: 'text',
    label: 'Campo disabilitato',
    name: 'field-disabled-example',
    id: 'field-disabled-example',
    disabled: true
  },
  render: params => html\`
    \${renderComponent({
    ...params
  })}
  \`
}`,...(O=(G=m.parameters)==null?void 0:G.docs)==null?void 0:O.source}}};var R,H,U;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  ...meta,
  parameters: {
    docs: {
      description: {
        story: \`Aggiungi l’attributo \\\`readonly\\\` ad un \\\`<it-input>\\\` per impedire la modifica del valore contenuto.
<br/><br/><h4>Readonly normalizzato</h4>Se per qualche motivo vuoi avere gli elementi input readonly nella forma stilizzata come testo, aggiungi l'attributo \\\`plaintext\\\` a \\\`<it-input>\\\`.\`
      }
    }
  },
  args: {
    type: 'text',
    readonly: true,
    value: 'Contenuto in sola lettura'
  },
  render: params => html\`
    \${renderComponent({
    ...params,
    label: 'Campo readonly',
    name: 'field-readonly-example',
    id: 'field-readonly-example'
  })}
    \${renderComponent({
    ...params,
    label: 'Campo readonly normalizzato come plaintext',
    name: 'field-readonlyplaintext-example',
    id: 'field-readonlyplaintext-example',
    plaintext: true
  })}
  \`
}`,...(U=(H=c.parameters)==null?void 0:H.docs)==null?void 0:U.source}}};var Q,F,B;u.parameters={...u.parameters,docs:{...(Q=u.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  ...meta,
  parameters: {
    docs: {
      description: {
        story: \`Per semplificare l’inserimento della password, il componente \\\`<it-input>\\\` di tipo password include un pulsante che mostra i caratteri digitati.
        È inoltre possibile aggiungere un testo di supporto che aiuti nella compilazione, attraverso l’attributo \\\`support-text\\\`.
        <br/><br/>
        <h4>Misuratore sicurezza e suggerimenti</h4>
Nel caso di un campo per la scelta di una nuova password, è possibile abbinare controlli per segnalare quanto la password che si sta inserendo segua alcuni suggerimenti di sicurezza, come la lunghezza minima o l’uso di caratteri speciali, attraverso gli attributi \\\`strength-meter="true"\\\` e \\\`minlength\\\` per modificare la lunghezza minima richiesta per la password.

Inoltre, è possibile restituire all’utente una lista dei suggerimenti, con indicati quelli che sono stati soddisfatti, attraverso l’attributo \\\`suggestions="true"\\\`.
\`
      }
    }
  },
  args: {
    type: 'password',
    label: 'Campo password',
    supportText: 'Inserisci almeno 8 caratteri e alcuni caratteri speciali.',
    minlength: 8
  },
  render: params => html\`
    \${renderComponent({
    ...params,
    name: 'field-password-example',
    id: 'field-password-example'
  })}
    \${renderComponent({
    ...params,
    name: 'field-password-strength-example',
    id: 'field-password-strength-example',
    passwordStrengthMeter: true,
    suggestions: true
  })}
  \`
}`,...(B=(F=u.parameters)==null?void 0:F.docs)==null?void 0:B.source}}};var J,k,Y;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
  ...meta,
  name: 'Area di testo',
  parameters: {
    docs: {
      description: {
        story: \`Per permettere agli utenti di inserire un testo esteso (ad esempio per lasciare commenti o informazioni), è bene utilizzare un elemento \\\`<it-input>\\\` con \\\`type="textarea"\\\`.\`
      }
    }
  },
  args: {
    type: 'textarea',
    label: 'Area di testo',
    name: 'textarea-example',
    id: 'textarea-example',
    placeholder: 'Testo segnaposto'
  },
  render: params => html\`
    \${renderComponent({
    ...params
  })}
  \`
}`,...(Y=(k=g.parameters)==null?void 0:k.docs)==null?void 0:Y.source}}};var Z,K,W;b.parameters={...b.parameters,docs:{...(Z=b.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  ...meta,
  name: 'Gestione degli errori',
  parameters: {
    docs: {
      description: {
        story: \`Se sono stati impostati uno di questi attributi <ul><li>\\\`required\\\`</li><li>\\\`pattern\\\`</li><li>\\\`minlength\\\`</li></ul> viene effettuata una validazione interna al componente.
 <br/><br/><h4>Personalizzazione dei messaggi di errore</h4>E' possibile personalizzare i messaggi di errore tramite l'attributo \\\`translations\\\` a seconda che:
       <ul><li>il campo è required e non è compilato: impostando il valore di \\\`validityRequired\\\` in \\\`translations\\\`</li>
        <li>il campo non rispetta il pattern: impostando il valore di \\\`validityPattern\\\` in \\\`translations\\\`</li>
        <li>il campo è troppo corto: impostando il valore di \\\`validityMinlength\\\` in \\\`translations\\\`</li>
        <li>il campo ha un valore non valido: impostando il valore di \\\`validityInvalid\\\` in \\\`translations\\\`</li></ul>
        <h4>Validazione esterna</h4>
        E' inoltre possibile validare il campo esternamente (via js ad esempio, o lato server), impostando l' attributo \\\`custom-validation="true"\\\`. In questo modo la validazione di defautl effettuata internamente al componente è disabilitata.
        <br/>Nel caso il campo non sia valido, è necessario invalidare il campo impostando il messaggio di errore da visualizzare attraverso l'attributo \\\`validity-message="Messaggio di errore"\\\`.\`
      }
    }
  },
  args: {
    type: 'text',
    placeholder: 'Testo segnaposto',
    translations: undefined
  },
  render: params => html\`
    \${renderComponent({
    ...params,
    label: 'Campo obbligatorio',
    name: 'required-example',
    id: 'required-example',
    translations: {
      validityRequired: 'Questo campo è obbligatorio. Inserisci un valore.'
    },
    required: true
  })}
    \${renderComponent({
    ...params,
    label: 'Validazione esterna',
    name: 'external-validation-example',
    id: 'external-validation-example',
    validityMessage: 'Questo campo è obbligatorio!',
    customValidation: true,
    required: undefined
  })}
  \`
}`,...(W=(K=b.parameters)==null?void 0:K.docs)==null?void 0:W.source}}};var X,ee,te;v.parameters={...v.parameters,docs:{...(X=v.parameters)==null?void 0:X.docs,source:{originalSource:`{
  ...meta,
  name: 'Gestione degli eventi',
  parameters: {
    docs: {
      description: {
        story: \`E' possibile gestire gli eventi di \\\`on-input\\\`, \\\`blur\\\`, \\\`change\\\`, \\\`focus\\\`, \\\`click\\\` per effettuare operazioni personalizzate, come la validazione esterna o l'aggiornamento di altri campi.
        <br/><br/>
        E' sufficiente aggiungere un event listener al componente \\\`<it-input>\\\` per intercettare gli eventi desiderati. Ad esempio, per gestire l'evento di input, è possibile utilizzare il seguente codice:

\\\`\\\`\\\`js
document.querySelector('it-input#event-input-example').addEventListener('on-input', (event) => {
  console.log('Input event:', event);
  alert('Input event);
});
\\\`\\\`\\\`

Il componente, emette anche un evento di tipo \\\`input-ready\\\` quando l'input è pronto e caricato nel DOM:

\\\`\\\`\\\`js
document.querySelector('it-input#event-input-example').addEventListener('input-ready', (event) => {
  console.log('Input ready:', event);
});
\\\`\\\`\\\`
      \`
      }
    }
  },
  args: {
    type: 'text',
    label: 'Prova evento di input',
    name: 'event-input-example',
    id: 'event-input-example',
    placeholder: 'Testo segnaposto',
    translations: undefined
  },
  render: params => html\`
    <script>
      document.querySelector('it-input#event-input-example').addEventListener('on-input', (event) => {
        console.log('Input event:', event);
        alert('Input event');
      });
      document.querySelector('it-input#event-input-example').addEventListener('input-ready', (event) => {
        console.log('Input ready:', event);
      });
    <\/script>
    \${renderComponent({
    ...params
  })}
  \`
}`,...(te=(ee=v.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,ie,ae;h.parameters={...h.parameters,docs:{...(ne=h.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  name: 'i18n',
  tags: ['!dev'],
  render: () => html\`<div class="hide-preview"></div>\`,
  parameters: {
    viewMode: 'docs',
    // assicura che si apra la tab Docs anziché Canvas
    docs: {
      description: {
        story: \`
Per questo componente sono disponibili alcune stringhe traducibili tramite l'[utility di internazionalizzazione](/docs/i18n-internazionalizzazione--documentazione).

\\\`\\\`\\\`js
const translation = {
  \${JSON.stringify(i18nIT).replaceAll('{"', '"').replaceAll('",', '",\\n\\t').replaceAll('"}', '"')}
}
\\\`\\\`\\\`
\`
      }
    }
  }
}`,...(ae=(ie=h.parameters)==null?void 0:ie.docs)==null?void 0:ae.source}}};const he=["EsempioInterattivo","Placeholder","TestoDiSupporto","LabelHidden","IconeOPulsanti","Dimensioni","Disabilitato","Readonly","Password","Textarea","GestioneErrori","GestioneEventi","I18n"];export{p as Dimensioni,m as Disabilitato,o as EsempioInterattivo,b as GestioneErrori,v as GestioneEventi,h as I18n,d as IconeOPulsanti,l as LabelHidden,u as Password,r as Placeholder,c as Readonly,s as TestoDiSupporto,g as Textarea,he as __namedExportsOrder,a as default};

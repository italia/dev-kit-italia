import{j as i,M as s,C as n,a as d,D as c}from"./blocks-B4cgbpI_.js";import{useMDXComponents as l}from"./index-DhGLikld.js";import{S as p,E as t,D as h,T as u,I as x,a as j,R as g,b as m,M as r}from"./it-radio.stories-DjOSIqK0.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-R3-NR_41.js";import"./formControlReusableStories-i43CZhgD.js";function a(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...o.components};return i.jsxs(i.Fragment,{children:[i.jsx(s,{of:p}),`
`,i.jsx(e.h1,{id:"radio-button",children:"Radio button"}),`
`,i.jsx("description",{children:"Pulsante di selezione che consente di indicare un'unica scelta tra più elementi all'interno di un elenco di opzioni predefinite."}),`
`,i.jsx(e.h2,{id:"cosa-fa",children:"Cosa fa"}),`
`,i.jsxs(e.p,{children:["Il componente Radio button (",i.jsx(e.code,{children:"<it-radio-group>"}),") permette di raggruppare una serie di ",i.jsx(e.code,{children:"<it-radio>"}),", gestendo la selezione di un solo elemento alla volta."]}),`
`,i.jsx(e.p,{children:i.jsx(e.a,{href:"https://designers.italia.it/design-system/componenti/radio-button/",rel:"nofollow",children:"Approfondisci come e quando usare il componente Radio"})}),`
`,i.jsx(e.h2,{id:"anteprima-e-attributi-del-componente",children:"Anteprima e attributi del componente"}),`
`,i.jsxs(e.p,{children:["Modifica gli attributi nella tabella per personalizzare in tempo reale l'aspetto e il comportamento del componente. Per vedere come cambia il codice, clicca su ",i.jsx(e.strong,{children:"Show code"}),"."]}),`
`,i.jsx(n,{of:t}),`
`,i.jsx(d,{of:t}),`
`,i.jsx(e.h2,{id:"indicazioni-generali",children:"Indicazioni generali"}),`
`,i.jsxs(e.p,{children:["Usa il componente ",i.jsx(e.code,{children:"<it-radio>"})," sempre all'interno di un ",i.jsx(e.code,{children:"<it-radio-group>"})," e includi obbligatoriamente:"]}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsxs(e.li,{children:["un ",i.jsx(e.strong,{children:"attributo"})," ",i.jsx(e.code,{children:"value"})," univoco per identificare l'opzione;"]}),`
`,i.jsxs(e.li,{children:["una ",i.jsx(e.strong,{children:"etichetta definita tramite slot"})," ",i.jsx(e.code,{children:`<span slot="label">Testo dell'etichetta</span>`}),"."]}),`
`]}),`
`,i.jsx(e.h4,{id:"proprietà-principali-di-it-radio",children:"Proprietà principali di it-radio"}),`
`,i.jsxs("table",{children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{children:"Proprietà"}),i.jsx("th",{children:"Tipo"}),i.jsx("th",{children:"Descrizione"})]})}),i.jsxs("tbody",{children:[i.jsxs("tr",{children:[i.jsx("td",{children:i.jsx(e.code,{children:"value"})}),i.jsx("td",{children:i.jsx(e.code,{children:"string"})}),i.jsx("td",{children:"Valore univoco del radio button (obbligatorio)"})]}),i.jsxs("tr",{children:[i.jsx("td",{children:i.jsx(e.code,{children:"disabled"})}),i.jsx("td",{children:i.jsx(e.code,{children:"boolean"})}),i.jsxs("td",{children:["Se ",i.jsx(e.code,{children:"true"}),", disabilita il singolo radio button "]})]}),i.jsxs("tr",{children:[i.jsx("td",{children:i.jsx(e.code,{children:"support-text"})}),i.jsx("td",{children:i.jsx(e.code,{children:"string"})}),i.jsx("td",{children:"Testo di supporto visualizzato sotto l'etichetta (obbligatorio)"})]})]})]}),`
`,i.jsx(e.h2,{id:"accessibilità",children:"Accessibilità"}),`
`,i.jsxs(e.p,{children:["Il componente implementa completamente le specifiche ARIA per i gruppi di radio button: ",i.jsx(e.code,{children:"<it-radio-group>"})," gestisce automaticamente gli attributi ",i.jsx(e.code,{children:'role="radiogroup"'})," e ",i.jsx(e.code,{children:"aria-labelledby"}),", mentre ogni ",i.jsx(e.code,{children:"<it-radio>"})," riceve gli attributi ",i.jsx(e.code,{children:'role="radio"'}),", ",i.jsx(e.code,{children:"aria-checked"})," e ",i.jsx(e.code,{children:"aria-disabled"})," in base al proprio stato."]}),`
`,i.jsxs(e.p,{children:["A causa delle limitazioni architetturali dei Web Components e del Shadow DOM, non è possibile utilizzare il meccanismo nativo HTML basato su ",i.jsx(e.code,{children:"<fieldset>"})," e ",i.jsx(e.code,{children:"<legend>"}),". Questo approccio, pur essendo standard, presenta notevoli problematiche di compatibilità cross-browser con gli screen reader: test approfonditi hanno dimostrato comportamenti inconsistenti tra diverse combinazioni di browser, sistemi operativi e tecnologie assistive. In alcuni casi la ",i.jsx(e.code,{children:"<legend>"})," non viene annunciata, in altri il gruppo non viene riconosciuto come tale, mentre in altri ancora mancano informazioni sulla posizione delle opzioni all'interno del gruppo. Per superare queste limitazioni e garantire un'esperienza uniforme e accessibile su tutte le piattaforme, il componente richiede che l'etichetta del gruppo venga fornita tramite lo slot ",i.jsx(e.code,{children:"label"}),", assicurando così la corretta associazione semantica anche all'interno dello Shadow DOM."]}),`
`,i.jsxs(e.p,{children:[`L'implementazione si conforma al pattern "Radio Group" definito nelle `,i.jsx(e.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/radio/examples/radio/",rel:"nofollow",children:"WAI-ARIA Authoring Practices"}),`, adottando la gestione della tastiera e degli stati prevista dalle linee guida di accessibilità. Questo approccio garantisce che le tecnologie assistive, in particolare gli screen reader, comunichino correttamente la posizione di ogni opzione nel gruppo (ad esempio, "1 di 3", "2 di 3", "3 di 3"), migliorando significativamente l'esperienza utente per le persone con disabilità.`]}),`
`,i.jsx(e.h2,{id:"definizione-delletichetta",children:"Definizione dell'etichetta"}),`
`,i.jsxs(e.p,{children:["Per definire le etichette, usa lo slot ",i.jsx(e.code,{children:"label"}),":"]}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsxs(e.li,{children:["per ",i.jsx(e.code,{children:"<it-radio-group>"}),", lo slot ",i.jsx(e.code,{children:"label"})," identifica l'intero gruppo di radio button;"]}),`
`,i.jsxs(e.li,{children:["per ",i.jsx(e.code,{children:"<it-radio>"}),", l'etichetta nello slot 'label' identifica la singola opzione all'interno del gruppo ed è obbligatoria per ogni elemento."]}),`
`]}),`
`,i.jsx(e.p,{children:"In entrambi i casi, puoi usare HTML all'interno dello slot per creare etichette più complesse con formattazione o altri elementi."}),`
`,i.jsx(n,{of:h}),`
`,i.jsx(e.h2,{id:"testo-di-supporto",children:"Testo di supporto"}),`
`,i.jsxs(e.p,{children:["Per aggiungere un contenuto testiale sotto il radio button, usa l'attributo ",i.jsx(e.code,{children:"support-text"})," del componente ",i.jsx(e.code,{children:"<it-radio>"}),"."]}),`
`,i.jsx(n,{of:u}),`
`,i.jsx(e.h2,{id:"inline",children:"Inline"}),`
`,i.jsxs(e.p,{children:["Per allineare orizzontalmente i radio button, aggiungi l'attributo ",i.jsx(e.code,{children:"inline"})," a ",i.jsx(e.code,{children:"<it-radio-group>"}),"."]}),`
`,i.jsx(n,{of:x}),`
`,i.jsx(e.h2,{id:"stato-disabilitato",children:"Stato disabilitato"}),`
`,i.jsx(e.h3,{id:"radio-singolo-disabilitato",children:"Radio singolo disabilitato"}),`
`,i.jsxs(e.p,{children:["Per disabilitare un'opzione, aggiungi l'attributo ",i.jsx(e.code,{children:"disabled"}),"."]}),`
`,i.jsx(e.h3,{id:"gruppo-di-radio-disabilitato",children:"Gruppo di radio disabilitato"}),`
`,i.jsxs(e.p,{children:["Se invece vuoi disabilitare l'intero gruppo, aggiungi l'attributo ",i.jsx(e.code,{children:"disabled"})," a ",i.jsx(e.code,{children:"<it-radio-group>"}),". In questo modo tutti i radio al suo interno risulteranno disabilitati automaticamente."]}),`
`,i.jsx(n,{of:j}),`
`,i.jsx(e.h2,{id:"raggruppati-visivamente",children:"Raggruppati visivamente"}),`
`,i.jsxs(e.p,{children:["Per raggruppare visivamente i radio button, aggiungi l'attributo ",i.jsx(e.code,{children:"group"})," a ",i.jsx(e.code,{children:"<it-radio-group>"}),". L'elemento grafico di selezione verrà allineato a destra del contenuto testuale."]}),`
`,i.jsx(n,{of:g}),`
`,i.jsx(e.h2,{id:"validazione-e-gestione-degli-errori",children:"Validazione e gestione degli errori"}),`
`,i.jsxs(e.p,{children:["Se non hai impostato la validazione custom tramite l'attributo ",i.jsx(e.code,{children:"custom-validation"})," e hai impostato attributi come ",i.jsx(e.code,{children:"required"}),", viene effettuata una validazione interna utilizzando la validazione nativa del browser."]}),`
`,i.jsxs(e.p,{children:["Verranno mostrati i messaggi di errore nativi e i componenti ",i.jsx(e.code,{children:"<it-radio-group>"})," e ",i.jsx(e.code,{children:"<it-radio>"})," riceveranno l'attributo ",i.jsx(e.code,{children:'aria-invalid="true"'})," quando non validi."]}),`
`,i.jsx(e.pre,{children:i.jsx(e.code,{className:"language-html",children:`<form>
  <it-radio-group name="scelta" required>
    <span slot="label">Seleziona un'opzione (obbligatorio)</span>
    <it-radio value="si">
      <span slot="label">Sì, accetto</span>
    </it-radio>
    <it-radio value="no">
      <span slot="label">No, non accetto</span>
    </it-radio>
  </it-radio-group>
  <it-button type="submit" variant="primary">Invia</it-button>
</form>
`})}),`
`,i.jsx("br",{}),`
`,i.jsx(e.h3,{id:"personalizzazione-dei-messaggi-di-errore",children:"Personalizzazione dei messaggi di errore"}),`
`,i.jsxs(e.p,{children:["Puoi personalizzare alcuni dei messaggi di errore di validazione, traducendo le seguenti stringhe tramite l'",i.jsx(e.a,{href:"/docs/i18n-internazionalizzazione--documentazione",children:"utility di internazionalizzazione"}),":"]}),`
`,i.jsx("ul",{children:i.jsxs("li",{children:[i.jsx(e.code,{children:"validityRequired"}),": messaggio che viene mostrato quando il radio group è obbligatorio e nessuna opzione è stata selezionata"]})}),`
`,i.jsx(e.p,{children:"Non esistono altre possibili validazioni native per questo tipo di input. Per validazioni custom, dovrai fornire i tuoi messaggi di errore."}),`
`,i.jsx(n,{of:m}),`
`,i.jsx(e.h2,{id:"personalizzazione-degli-stili",children:"Personalizzazione degli stili"}),`
`,i.jsxs(e.p,{children:["Per personalizzare gli stili del componente ",i.jsx(e.code,{children:"<it-radio>"}),", puoi usare il selettore ",i.jsx(e.code,{children:"::part"})," con i seguenti valori:"]}),`
`,i.jsxs("table",{children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("td",{children:"Part"}),i.jsx("td",{children:"Descrizione"})]})}),i.jsxs("tbody",{children:[i.jsxs("tr",{children:[i.jsx("td",{children:i.jsx(e.code,{children:"input"})}),i.jsx("td",{children:"Il contenitore dell'input nascosto "})]}),i.jsxs("tr",{children:[i.jsx("td",{children:i.jsx(e.code,{children:"button"})}),i.jsx("td",{children:"Il cerchio del radio button visibile "})]}),i.jsxs("tr",{children:[i.jsx("td",{children:i.jsx(e.code,{children:"input-wrapper"})}),i.jsx("td",{children:"Il wrapper principale che contiene il radio control e il testo di supporto"})]}),i.jsxs("tr",{children:[i.jsx("td",{children:i.jsx(e.code,{children:"radio-control"})}),i.jsx("td",{children:"Il contenitore che racchiude il button e la label"})]}),i.jsxs("tr",{children:[i.jsx("td",{children:i.jsx(e.code,{children:"label"})}),i.jsx("td",{children:"L'etichetta del radio button"})]})]})]}),`
`,i.jsxs(e.p,{children:[i.jsx(e.a,{href:"/docs/personalizzazione-degli-stili--documentazione#selettore-part",children:"Vai alla guida sul selettore part"}),"."]}),`
`,i.jsx(e.h3,{id:"esempio-di-personalizzazione",children:" Esempio di personalizzazione"}),`
`,i.jsx(e.pre,{children:i.jsx(e.code,{className:"language-css",children:`it-radio::part(button) {
  border-color: #0066cc;
}

it-radio::part(label) {
  font-weight: bold;
  color: #333;
}
`})}),`
`,i.jsx(e.h2,{id:"",children:r.name}),`
`,i.jsx(c,{of:r})]})}function w(o={}){const{wrapper:e}={...l(),...o.components};return e?i.jsx(e,{...o,children:i.jsx(a,{...o})}):a(o)}export{w as default};

import{j as e,M as s,C as l,a}from"./blocks-D0bmdpqR.js";import{useMDXComponents as t}from"./index-C6divXtw.js";import{C as d,E as o,a as c,A as p,L as h,T as u,b as g}from"./it-collapse.stories-Cn3HyZGl.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-D9yc0utV.js";function r(n){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:d}),`
`,e.jsx(i.h1,{id:"collapse",children:"Collapse"}),`
`,e.jsx("description",{children:"Funzionalità applicabile a elementi di interfaccia per espandere o comprimere sezioni di contenuto e ottimizzare spazio"}),`
`,e.jsx(i.h2,{id:"cosa-fa",children:"Cosa fa"}),`
`,e.jsx(i.p,{children:"Per ottimizzare l’ingombro dei contenuti di una pagina si possono usare degli elementi richiudibili (in gergo definiti collassabili o collapse), che possono essere attivati indipendentemente l’uno dall’altro oppure in modo esclusivo con l’attivazione di solo un blocco alla volta (in gergo definiti fisarmoniche o accordion)."}),`
`,e.jsxs(i.p,{children:["Il componente ",e.jsx(i.a,{href:"?path=/docs/componenti-accordion--documentazione",children:"Accordion"})," è basato su Collapse."]}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"https://designers.italia.it/design-system/componenti/collapse/",rel:"nofollow",children:"Approfondisci quando e come usare il componente Collapse"})}),`
`,e.jsx(i.h3,{id:"alternative-a-questo-componente",children:"Alternative a questo componente"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[`
`,e.jsxs(i.p,{children:[e.jsx(i.a,{href:"?path=/docs/componenti-accordion--documentazione",children:"Accordion"}),": possono essere attivati indipendentemente l'uno dall'altro oppure in modo esclusivo con l'attivazione di un solo blocco alla volta."]}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsx(i.p,{children:"Tabs: mostrano i contenuti senza spingere altre sezioni verso il fondo della pagina e sono utili quando l'utente deve passare velocemente da una sezone all'altra."}),`
`]}),`
`]}),`
`,e.jsx(i.h2,{id:"anteprima-e-attributi-del-componente",children:"Anteprima e attributi del componente"}),`
`,e.jsxs(i.p,{children:["Modifica gli attributi nella tabella per personalizzare in tempo reale l'aspetto e il comportamento del componente. Per vedere come cambia il codice, clicca su ",e.jsx(i.strong,{children:"Show code"}),"."]}),`
`,e.jsx(l,{of:o}),`
`,e.jsx(a,{of:o}),`
`,e.jsx(i.h2,{id:"informazioni-generali",children:"Informazioni generali"}),`
`,e.jsxs(i.p,{children:["Il componente ",e.jsx(i.code,{children:"it-collapse"})," utilizza diversi slot per definire il trigger, il testo mostrato nel trigger e il contenuto richiudibile:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:'slot="trigger"'}),": ",e.jsx(i.strong,{children:"opzionale"}),", inserisci un elemento personalizzato da utilizzare come trigger per aprire/chiudere il collapse."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:'slot="label"'}),": ",e.jsx(i.strong,{children:"obbligatorio"}),", inserisci il testo da mostrare nel trigger di default. Questo slot è obbligatorio anche nel caso di utilizzo di trigger personalizzato, vedi la sezione ",e.jsx(i.a,{href:"#trigger-personalizzato",children:"Trigger personalizzato"}),"."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:'slot="content"'}),": ",e.jsx(i.strong,{children:"obbligatorio"}),", inserisci il contenuto da mostrare o nascondere nello slot ",e.jsx(i.code,{children:"content"})," del componente."]}),`
`]}),`
`,e.jsx(i.p,{children:"Il componente può essere utilizzato in due modalità:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Con ",e.jsx(i.strong,{children:"trigger di default"}),": inserendo un elemento nello slot ",e.jsx(i.code,{children:"label"})," per definire il testo del pulsante"]}),`
`,e.jsxs(i.li,{children:["Con ",e.jsx(i.strong,{children:"trigger personalizzato"}),": inserendo un elemento nello slot ",e.jsx(i.code,{children:"trigger"})]}),`
`]}),`
`,e.jsxs(i.p,{children:["L'attributo ",e.jsx(i.code,{children:"as"})," permette di impostare il tag del trigger di default:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[`
`,e.jsxs(i.p,{children:["Default ",e.jsx(i.code,{children:"button"}),": il componente renderizza un ",e.jsx(i.code,{children:"<button>"})," con id e attributi ARIA (",e.jsx(i.code,{children:"aria-expanded"}),", ",e.jsx(i.code,{children:"aria-controls"}),")."]}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsxs(i.p,{children:["Altri tag validi (es. ",e.jsx(i.code,{children:"a"}),", ",e.jsx(i.code,{children:"p"}),", ",e.jsx(i.code,{children:"div"}),", ",e.jsx(i.code,{children:"span"}),"): il componente renderizza il tag scelto (ad esempio ",e.jsx(i.code,{children:"<a>"}),") e imposta automaticamente ",e.jsx(i.code,{children:'role="button"'}),", ",e.jsx(i.code,{children:'tabindex="0"'}),", id univoco e attributi ARIA."]}),`
`,e.jsxs(i.p,{children:["Assicurati di utilizzare ",e.jsx(i.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/button_role",rel:"nofollow",children:"tag HTML compatibili con il ruolo button"}),"."]}),`
`]}),`
`]}),`
`,e.jsx(l,{of:c}),`
`,e.jsx(i.h2,{id:"accessibilità",children:"Accessibilità"}),`
`,e.jsxs(i.p,{children:["Il collapse implementa le specifiche ARIA ",e.jsx(i.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/",rel:"nofollow",children:"WAI-ARIA Authoring Practices 1.1 disclosure pattern"})," per garantire un'esperienza accessibile a tutti gli utenti:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Supporto per ",e.jsx(i.code,{children:"Space"})," e ",e.jsx(i.code,{children:"Enter"})," per attivare/disattivare elementi"]}),`
`,e.jsx(i.li,{children:"Attributi ARIA appropriati per comunicare lo stato agli screen reader"}),`
`,e.jsx(i.li,{children:"Rispetto delle preferenze di riduzione del movimento definite dall'utente per le animazioni di apertura/chiusura"}),`
`]}),`
`,e.jsx(i.h2,{id:"stato-iniziale-aperto",children:"Stato iniziale aperto"}),`
`,e.jsxs(i.p,{children:["Usa l'attributo ",e.jsx(i.code,{children:"default-open"})," per rendere il collapse inizialmente aperto al caricamento della pagina."]}),`
`,e.jsx(l,{of:p}),`
`,e.jsx(i.h2,{id:"tag-del-trigger-di-default",children:"Tag del trigger di default"}),`
`,e.jsxs(i.p,{children:["Come descritto nella sezione ",e.jsx(i.a,{href:"#informazioni-generali",children:"Informazioni generali"}),", puoi assegnare al trigger diversi tag validi per il ",e.jsx(i.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/button_role",rel:"nofollow",children:"ruolo button"}),", valorizzando adeguatamente l'attributo ",e.jsx(i.code,{children:"as"}),"."]}),`
`,e.jsxs(i.p,{children:["Ad esempio, per ottenere un link (",e.jsx(i.code,{children:"<a>"}),") come trigger del collapse, valorizza l'attributo ",e.jsx(i.code,{children:"as"})," con il valore ",e.jsx(i.code,{children:"a"}),"."]}),`
`,e.jsx("div",{class:"callout callout-info",children:e.jsxs("div",{class:"callout-inner",children:[e.jsx("div",{class:"callout-title",children:e.jsx("span",{class:"text",children:"Nota"})}),e.jsxs("p",{children:["In questo esempio non viene valorizzato l'attributo ",e.jsx(i.code,{children:"variant"}),", per mostrare come il componente assegna al trigger la variante di default, ",e.jsx(i.code,{children:"primary"}),", e rende il trigger visivamente analogo alla variante primaria del componente Button."]}),e.jsxs("p",{children:[e.jsxs(i.p,{children:["Per informazioni su come modificare l'aspetto del trigger attraverso gli attributi del componente, consulta la sezione ",e.jsx(i.a,{href:"#varianti-del-trigger",children:"Varianti del trigger"}),"."]}),e.jsxs(i.p,{children:["Se hai necessità di personalizzare ulteriormente l'aspetto del trigger di default, consulta la sezione ",e.jsx(i.a,{href:"#personalizzazione-degli-stili",children:"Personalizzazione degli stili"}),"."]}),e.jsxs(i.p,{children:["Se hai bisogno di un trigger ad hoc per il tuo caso d'uso, valuta l'utilizzo di un ",e.jsx(i.a,{href:"#trigger-personalizzato",children:"trigger personalizzato"}),"."]})]})]})}),`
`,e.jsx(l,{of:h}),`
`,e.jsx(i.h2,{id:"varianti-del-trigger",children:"Varianti del trigger"}),`
`,e.jsxs(i.p,{children:["Usa l'attributo ",e.jsx(i.code,{children:"variant"})," per applicare le varianti Bootstrap Italia ai trigger di Collapse."]}),`
`,e.jsxs(i.p,{children:["Usa l'attributo ",e.jsx(i.code,{children:"size"})," per applicare le dimensioni Bootstrap Italia ai trigger di Collapse."]}),`
`,e.jsxs(i.p,{children:["Usa l'attributo ",e.jsx(i.code,{children:"outline"})," per applicare le varianti outline Bootstrap Italia ai trigger di Collapse."]}),`
`,e.jsx("div",{class:"callout callout-warning",children:e.jsxs("div",{class:"callout-inner",children:[e.jsx("div",{class:"callout-title",children:e.jsx("span",{class:"text",children:"Attenzione"})}),e.jsx("p",{children:e.jsx(i.p,{children:"Sono attualmente supportati solo gli stili Bootstrap Italia relativi ai pulsanti, in quanto il trigger è semanticamente un pulsante e come tale deve essere reso, coerente col resto del Design Kit."})}),e.jsx("p",{children:e.jsxs(i.p,{children:["Vedi la sezione dedicata per come inserire un ",e.jsx(i.a,{href:"#trigger-personalizzato",children:"trigger personalizzato"})," e/o quella per la ",e.jsx(i.a,{href:"#personalizzazione-degli-stili",children:"personalizzazione degli stili"})," per esplorare le altre possibilità fornite dal Kit."]})})]})}),`
`,e.jsx(l,{of:u}),`
`,e.jsx(i.h2,{id:"trigger-personalizzato",children:"Trigger personalizzato"}),`
`,e.jsxs(i.p,{children:["Puoi utilizzare un trigger personalizzato inserendo un elemento nello slot ",e.jsx(i.code,{children:"trigger"}),". Questo elemento diventa il controllo per aprire e chiudere il collapse."]}),`
`,e.jsxs(i.p,{children:["Ricordati di inserire il testo del trigger nello slot ",e.jsx(i.code,{children:"label"}),"."]}),`
`,e.jsx(l,{of:g}),`
`,e.jsx(i.h2,{id:"personalizzazione-degli-stili",children:"Personalizzazione degli stili"}),`
`,e.jsxs(i.p,{children:["Per la personalizzazione degli stili si possono usare i selettori ",e.jsx(i.code,{children:"::part"})," dedicati:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"::part(trigger)"})," - elemento trigger"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"::part(content)"})," - elemento contenitore del corpo richiudibile"]}),`
`]}),`
`,e.jsxs(i.p,{children:[e.jsx(i.a,{href:"/docs/personalizzazione-degli-stili--documentazione#selettore-part",children:"Vedi qui la guida dettagliata"}),"."]})]})}function b(n={}){const{wrapper:i}={...t(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(r,{...n})}):r(n)}export{b as default};

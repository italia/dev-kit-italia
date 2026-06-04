import{j as e,M as s,C as l,a}from"./blocks-B-I4YEhB.js";import{useMDXComponents as t}from"./index-Bg_g3WT6.js";import{C as d,E as r,a as c,A as p,L as h,T as u,b as x}from"./it-collapse.stories-DfzsJvag.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-Cj13QEna.js";function o(n){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:d}),`
`,e.jsx(i.h1,{id:"collapse",children:"Collapse"}),`
`,e.jsx("description",{children:"Funzionalità applicabile a elementi di interfaccia per espandere o comprimere sezioni di contenuto e ottimizzare spazio."}),`
`,e.jsx(i.h2,{id:"cosa-fa",children:"Cosa fa"}),`
`,e.jsxs(i.p,{children:["Il componente Collapse (",e.jsx(i.code,{children:"it-collapse"}),") è un elemento richiudibile che ottimizza l’ingombro dei contenuti di una pagina."]}),`
`,e.jsxs(i.p,{children:["Su questo componente si basa anche il ",e.jsx(i.a,{href:"?path=/docs/componenti-accordion--documentazione",children:"componente Accordion"}),", usando i collapse in gruppo e permettendo di attivarli indipendentemente l’uno dall’altro oppure in modo esclusivo con l’attivazione di solo un blocco alla volta."]}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"https://designers.italia.it/design-system/componenti/collapse/",rel:"nofollow",children:"Approfondisci quando e come usare il componente Collapse"})}),`
`,e.jsx(i.h3,{id:"alternative-a-questo-componente",children:"Alternative a questo componente"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[`
`,e.jsxs(i.p,{children:[e.jsx(i.a,{href:"?path=/docs/componenti-accordion--documentazione",children:"Accordion"}),": gruppo di collapse che possono essere attivati indipendentemente l'uno dall'altro oppure in modo esclusivo con l'attivazione di un solo blocco alla volta."]}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsx(i.p,{children:"Tabs: mostrano i contenuti senza spingere altre sezioni verso il fondo della pagina e sono utili quando l'utente deve passare velocemente da una sezone all'altra."}),`
`]}),`
`]}),`
`,e.jsx(i.h2,{id:"anteprima-e-attributi-del-componente",children:"Anteprima e attributi del componente"}),`
`,e.jsxs(i.p,{children:["Modifica gli attributi nella tabella per personalizzare in tempo reale l'aspetto e il comportamento del componente. Per vedere come cambia il codice, clicca su ",e.jsx(i.strong,{children:"Show code"}),"."]}),`
`,e.jsx(l,{of:r}),`
`,e.jsx(a,{of:r}),`
`,e.jsx(i.h2,{id:"indicazioni-generali",children:"Indicazioni generali"}),`
`,e.jsxs(i.p,{children:["Il componente ",e.jsx(i.code,{children:"it-collapse"})," utilizza diversi slot per definire il trigger, il testo mostrato nel trigger e il contenuto richiudibile:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:'slot="trigger"'}),", per inserire un elemento personalizzato da utilizzare come trigger per aprire/chiudere il collapse (",e.jsx(i.strong,{children:"opzionale"}),");"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:'slot="label"'}),", per inserire il testo da mostrare nel trigger di default (",e.jsx(i.strong,{children:"obbligatorio"}),", anche nel caso di ",e.jsx(i.a,{href:"#trigger-personalizzato",children:"trigger personalizzato"}),");"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:'slot="content"'}),", per inserire il contenuto da mostrare o nascondere nello slot ",e.jsx(i.code,{children:"content"})," del componente (",e.jsx(i.strong,{children:"obbligatorio"}),")."]}),`
`]}),`
`,e.jsx(i.p,{children:"Il componente può essere utilizzato in due modalità:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"con trigger di default"}),", inserendo un elemento nello slot ",e.jsx(i.code,{children:"label"})," per definire il testo del pulsante;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"con trigger personalizzato"}),", inserendo un elemento nello slot ",e.jsx(i.code,{children:"trigger"}),"."]}),`
`]}),`
`,e.jsxs(i.p,{children:["L'attributo ",e.jsx(i.code,{children:"as"})," permette di impostare il tag del trigger di default:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[`
`,e.jsxs(i.p,{children:["default ",e.jsx(i.code,{children:"button"}),", il componente renderizza un ",e.jsx(i.code,{children:"<button>"})," con id e attributi ARIA (",e.jsx(i.code,{children:"aria-expanded"}),", ",e.jsx(i.code,{children:"aria-controls"}),");"]}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsxs(i.p,{children:["altri tag validi (ad esempio, ",e.jsx(i.code,{children:"a"}),", ",e.jsx(i.code,{children:"p"}),", ",e.jsx(i.code,{children:"div"}),", ",e.jsx(i.code,{children:"span"}),"), il componente renderizza il tag scelto (ad esempio ",e.jsx(i.code,{children:"<a>"}),") e imposta automaticamente ",e.jsx(i.code,{children:'role="button"'}),", ",e.jsx(i.code,{children:'tabindex="0"'}),", id univoco e attributi ARIA."]}),`
`,e.jsxs(i.p,{children:["Assicurati di utilizzare ",e.jsx(i.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/button_role",rel:"nofollow",children:"tag HTML compatibili con il ruolo button"}),"."]}),`
`]}),`
`]}),`
`,e.jsx(l,{of:c}),`
`,e.jsx(i.h2,{id:"accessibilità",children:"Accessibilità"}),`
`,e.jsxs(i.p,{children:["Il collapse implementa le specifiche ARIA ",e.jsx(i.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/",rel:"nofollow",children:"WAI-ARIA Authoring Practices 1.1 disclosure pattern"})," per garantire un'esperienza accessibile a tutti gli utenti:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["supporto per ",e.jsx(i.code,{children:"Space"})," e ",e.jsx(i.code,{children:"Enter"})," per attivare/disattivare elementi;"]}),`
`,e.jsx(i.li,{children:"attributi ARIA appropriati per comunicare lo stato agli screen reader;"}),`
`,e.jsx(i.li,{children:"rispetto delle preferenze di riduzione del movimento definite dall'utente per le animazioni di apertura/chiusura."}),`
`]}),`
`,e.jsx(i.h2,{id:"stato-iniziale-aperto",children:"Stato iniziale aperto"}),`
`,e.jsxs(i.p,{children:["Usa l'attributo ",e.jsx(i.code,{children:"default-open"})," per rendere il collapse inizialmente aperto al caricamento della pagina."]}),`
`,e.jsx(l,{of:p}),`
`,e.jsx(i.h2,{id:"tag-del-trigger-di-default",children:"Tag del trigger di default"}),`
`,e.jsxs(i.p,{children:["Come descritto nelle ",e.jsx(i.a,{href:"#indicazioni-generali",children:"indicazioni generali"}),", puoi assegnare al trigger diversi tag validi per il ",e.jsx(i.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/button_role",rel:"nofollow",children:"ruolo button"}),", valorizzando adeguatamente l'attributo ",e.jsx(i.code,{children:"as"}),"."]}),`
`,e.jsxs(i.p,{children:["Ad esempio, per ottenere un link (",e.jsx(i.code,{children:"<a>"}),") come trigger del collapse, valorizza l'attributo ",e.jsx(i.code,{children:"as"})," con il valore ",e.jsx(i.code,{children:"a"}),"."]}),`
`,e.jsx("div",{class:"callout callout-info",children:e.jsxs("div",{class:"callout-inner",children:[e.jsx("div",{class:"callout-title",children:e.jsx("span",{class:"text",children:"Nota"})}),e.jsxs("p",{children:["In questo esempio non viene valorizzato l'attributo ",e.jsx(i.code,{children:"variant"}),", per mostrare come il componente assegna al trigger la variante di default, ",e.jsx(i.code,{children:"primary"}),", e rende il trigger visivamente analogo alla variante primaria del componente Button."]}),e.jsxs("p",{children:[e.jsxs(i.p,{children:["Per informazioni su come modificare l'aspetto del trigger attraverso gli attributi del componente, ",e.jsx(i.a,{href:"#varianti-del-trigger",children:"consulta la sezione Varianti del trigger"}),"."]}),e.jsxs(i.p,{children:["Se hai necessità di personalizzare ulteriormente l'aspetto del trigger di default, ",e.jsx(i.a,{href:"#personalizzazione-degli-stili",children:"consulta la sezione Personalizzazione degli stili"}),"."]}),e.jsxs(i.p,{children:["Se hai bisogno di un trigger ad hoc per il tuo caso d'uso, valuta l'utilizzo di un ",e.jsx(i.a,{href:"#trigger-personalizzato",children:"trigger personalizzato"}),"."]})]})]})}),`
`,e.jsx(l,{of:h}),`
`,e.jsx(i.h2,{id:"varianti-del-trigger",children:"Varianti del trigger"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[`
`,e.jsxs(i.p,{children:["Usa l'attributo ",e.jsx(i.code,{children:"variant"})," per applicare le varianti Bootstrap Italia ai trigger di Collapse."]}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsxs(i.p,{children:["Usa l'attributo ",e.jsx(i.code,{children:"size"})," per applicare le dimensioni Bootstrap Italia ai trigger di Collapse."]}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsxs(i.p,{children:["Usa l'attributo ",e.jsx(i.code,{children:"outline"})," per applicare le varianti outline Bootstrap Italia ai trigger di Collapse."]}),`
`]}),`
`]}),`
`,e.jsx("div",{class:"callout callout-warning",children:e.jsxs("div",{class:"callout-inner",children:[e.jsx("div",{class:"callout-title",children:e.jsx("span",{class:"text",children:"Attenzione"})}),e.jsx("p",{children:e.jsx(i.p,{children:"Il trigger è semanticamente un pulsante, perciò sono attualmente supportati solo gli stili Bootstrap Italia relativi ai pulsanti."})}),e.jsx("p",{children:e.jsxs(i.p,{children:["Consulta le sezioni dedicate ai ",e.jsx(i.a,{href:"#trigger-personalizzato",children:"trigger personalizzati"})," e alla ",e.jsx(i.a,{href:"#personalizzazione-degli-stili",children:"personalizzazione degli stili"})," per esplorare le altre possibilità fornite dal Kit."]})})]})}),`
`,e.jsx(l,{of:u}),`
`,e.jsx(i.h2,{id:"trigger-personalizzato",children:"Trigger personalizzato"}),`
`,e.jsxs(i.p,{children:["Puoi usare un trigger personalizzato inserendo un elemento nello slot ",e.jsx(i.code,{children:"trigger"}),". Questo elemento diventa il controllo per aprire e chiudere il collapse."]}),`
`,e.jsxs(i.p,{children:["Ricordati di inserire il testo del trigger nello slot ",e.jsx(i.code,{children:"label"}),"."]}),`
`,e.jsx(l,{of:x}),`
`,e.jsx(i.h2,{id:"personalizzazione-degli-stili",children:"Personalizzazione degli stili"}),`
`,e.jsxs(i.p,{children:["Per personalizzare gli stili, puoi possono usare i selettori ",e.jsx(i.code,{children:"::part"})," dedicati:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"::part(trigger)"}),", per l'elemento trigger;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"::part(content)"}),", per l'elemento contenitore del corpo richiudibile."]}),`
`]}),`
`,e.jsxs(i.p,{children:[e.jsx(i.a,{href:"/docs/personalizzazione-degli-stili--documentazione#selettore-part",children:"Vai alla guida sul selettore part"}),"."]})]})}function b(n={}){const{wrapper:i}={...t(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(o,{...n})}):o(n)}export{b as default};

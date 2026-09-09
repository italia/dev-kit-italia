import{j as e,M as l,C as i,a as t}from"./blocks-CRFIrLVd.js";import{useMDXComponents as a}from"./index--O4jdOk5.js";import{P as c,E as o,C as d,I as h,a as p,B as x,D as j,b as u,S as m,c as g}from"./it-progress.stories-BXPgOOMI.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-CPP02t7X.js";function s(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...a(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:c}),`
`,e.jsx(n.h1,{id:"progress-indicator",children:"Progress indicator"}),`
`,e.jsx(n.p,{children:"Indicatori di stato attivo e di avanzamento di un’operazione."}),`
`,e.jsx(n.h2,{id:"cosa-fa",children:"Cosa fa"}),`
`,e.jsxs(n.p,{children:["Il componente Progress indicator (",e.jsx(n.code,{children:"it-progress"}),") mostra lo stato di avanzamento o di elaborazione di un'operazione, come il caricamento di un file o l’invio dei dati di un modulo."]}),`
`,e.jsxs(n.p,{children:["Può essere usato in tre modalità, tramite l'attributo ",e.jsx(n.code,{children:"type"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"bar"}),", barra di avanzamento lineare;"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"donut"}),", avanzamento circolare;"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"spinner"}),", stato di caricamento/attesa."]}),`
`]}),`
`,e.jsx(n.h3,{id:"alternative-a-questo-componente",children:"Alternative a questo componente"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"/docs/componenti-notification--documentazione",children:"Notification"}),": visivamente meno prominente, utile quando ci sono una o due sezioni di contenuti brevi meno importanti."]}),`
`]}),`
`,e.jsx(n.h2,{id:"anteprima-e-attributi-delcomponente",children:"Anteprima e attributi delcomponente"}),`
`,e.jsxs(n.p,{children:["Modifica gli attributi nella tabella per personalizzare in tempo reale l'aspetto e il comportamento del componente. Per vedere come cambia il codice, clicca su ",e.jsx(n.strong,{children:"Show code"}),"."]}),`
`,e.jsx(i,{of:o}),`
`,e.jsx(t,{of:o}),`
`,e.jsx(n.h2,{id:"accessibilità",children:"Accessibilità"}),`
`,e.jsxs(n.p,{children:["Il componente usa l'attributo ARIA ",e.jsx(n.code,{children:"role=progressbar"})," con ",e.jsx(n.code,{children:"aria-valuenow"})," impostato al valore dell'attributo ",e.jsx(n.code,{children:"value"})," di ",e.jsx(n.code,{children:"<it-progress>"}),". Il componente imposta sempre ",e.jsx(n.code,{children:"aria-valuemin"})," a ",e.jsx(n.code,{children:"0"})," e ",e.jsx(n.code,{children:"aria-valuemax"})," a ",e.jsx(n.code,{children:"100"}),". Per questo motivo, assicurati di assegnare all'attributo ",e.jsx(n.code,{children:"value"})," un valore compreso tra ",e.jsx(n.code,{children:"0"})," e ",e.jsx(n.code,{children:"100"}),"."]}),`
`,e.jsx(n.p,{children:"Per garantire l'accessibilità:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["imposta sempre una ",e.jsx(n.code,{children:"it-aria-label"})," significativa quando il contesto non è già chiaro;"]}),`
`,e.jsxs(n.li,{children:["per la variante ",e.jsx(n.code,{children:"spinner"}),", fornisci un testo per tecnologie assistive nell'attributo ",e.jsx(n.code,{children:"it-aria-label"}),", oppure usa il fallback predefinito."]}),`
`]}),`
`,e.jsx(n.h2,{id:"progress-bar",children:"Progress bar"}),`
`,e.jsx(n.h3,{id:"con-etichetta",children:"Con etichetta"}),`
`,e.jsx(n.p,{children:"Per aggiungere un'etichetta che indica il progresso, puoi:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["usare l'attributo ",e.jsx(n.code,{children:"show-value"})," per mostrare automaticamente la percentuale calcolata a partire dal valore di ",e.jsx(n.code,{children:"value"}),";"]}),`
`,e.jsxs(n.li,{children:["usare l'attributo ",e.jsx(n.code,{children:"label"})," per mostrare un testo personalizzato al posto della percentuale."]}),`
`]}),`
`,e.jsxs(n.p,{children:["Fornisci sempre un testo descrittivo tramite l'attributo ",e.jsx(n.code,{children:"it-aria-label"}),", così da rendere il contenuto accessibile anche a chi usa tecnologie assistive."]}),`
`,e.jsx(i,{of:d}),`
`,e.jsx(n.h3,{id:"indeterminato",children:"Indeterminato"}),`
`,e.jsxs(n.p,{children:["Se l'operazione non ha percentuale di avanzamento, usa la variante indeterminata aggiungendo l'attributo ",e.jsx(n.code,{children:"indeterminate"})," al componente ",e.jsx(n.code,{children:"<it-progress>"}),"."]}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(n.h3,{id:"colori",children:"Colori"}),`
`,e.jsxs(n.p,{children:["Puoi modificare il colore della barra di avanzamento usando l'attributo ",e.jsx(n.code,{children:"color"})," con i seguenti valori:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"success"}),","]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"info"}),","]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"warning"}),","]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"danger"}),"."]}),`
`]}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(n.h3,{id:"pulsante-con-progress-bar",children:"Pulsante con progress bar"}),`
`,e.jsx(n.p,{children:"Puoi integrare la progress bar all'interno di un pulsante per indicare un'azione in corso, come l'invio di un modulo o il caricamento di una pagina."}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(n.h2,{id:"donut",children:"Donut"}),`
`,e.jsxs(n.p,{children:["Usa la variante ",e.jsx(n.code,{children:"donut"})," per mostrare lo stato di avanzamento di un'operazione attraverso una rappresentazione circolare."]}),`
`,e.jsx(i,{of:j}),`
`,e.jsx(n.h3,{id:"colori-1",children:"Colori"}),`
`,e.jsxs(n.p,{children:["L'attributo ",e.jsx(n.code,{children:"color"})," accetta le stesse varianti semantiche della bar (",e.jsx(n.code,{children:"default"}),", ",e.jsx(n.code,{children:"success"}),", ",e.jsx(n.code,{children:"info"}),", ",e.jsx(n.code,{children:"warning"}),`,
`,e.jsx(n.code,{children:"danger"}),"), che usano gli stessi token di colore: a parità di variante, bar e donut hanno lo stesso colore."]}),`
`,e.jsx(i,{of:u}),`
`,e.jsxs(n.p,{children:["Oltre alle varianti, ",e.jsx(n.code,{children:"color"})," accetta un qualsiasi colore CSS (es. ",e.jsx(n.code,{children:'color="#ff0000"'}),")."]}),`
`,e.jsx(n.p,{children:"Per personalizzare il colore puoi:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["ridefinire i token Bootstrap Italia (es. ",e.jsx(n.code,{children:"--bsi-color-background-success"}),`) nel tuo foglio di stile: la
modifica vale per tutti i componenti, donut e bar compresi;`]}),`
`,e.jsxs(n.li,{children:["impostare la custom property ",e.jsx(n.code,{children:"--it-progress-donut-color"}),` sul componente, per cambiare il colore del solo
donut senza toccare i token:`]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`it-progress[type='donut'] {
  --it-progress-donut-color: #ff0000;
}
`})}),`
`,e.jsx(n.h2,{id:"spinner",children:"Spinner"}),`
`,e.jsx(n.p,{children:"Usa lo spinner quando il tempo necessario per completare un'operazione non è determinabile."}),`
`,e.jsxs(n.p,{children:["È disponibile nelle varianti ",e.jsx(n.strong,{children:"standard"})," e ",e.jsx(n.strong,{children:"double"}),"."]}),`
`,e.jsx(n.p,{children:"Per entrambe le varianti:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["imposta la dimensione desiderata tramite l'attributo ",e.jsx(n.code,{children:"size"})," (",e.jsx(n.code,{children:"sm"})," per small, ",e.jsx(n.code,{children:"lg"})," per large, ",e.jsx(n.code,{children:"xl"})," per extralarge);"]}),`
`,e.jsxs(n.li,{children:["attiva l'animazione dello spinner con l'attributo ",e.jsx(n.code,{children:"active"}),";"]}),`
`,e.jsxs(n.li,{children:["aggiungi una descrizioni testuale dello stato di caricamento con l'attributo ",e.jsx(n.code,{children:"it-aria-label"}),", così da rendere accessibile il contenuto anche a chi usa tecnologie assistive."]}),`
`]}),`
`,e.jsx(n.h3,{id:"spinner-standard",children:"Spinner standard"}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(n.h3,{id:"spinner-doppio",children:"Spinner doppio"}),`
`,e.jsxs(n.p,{children:["La variante double dello spinner mostra due cerchi concentrici che ruotano in senso opposto, creando un effetto più dinamico. Usa l'attributo ",e.jsx(n.code,{children:"double"})," per attivare la variante double."]}),`
`,e.jsx(i,{of:g}),`
`,e.jsx(n.h2,{id:"personalizzazione-degli-stili",children:"Personalizzazione degli stili"}),`
`,e.jsxs(n.p,{children:["Per personalizzare gli stili del componente, usa i selettori ",e.jsx(n.code,{children:"::part"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"::part(progress)"})," e ",e.jsx(n.code,{children:"::part(progress-bar)"})," per la variante ",e.jsx(n.code,{children:"bar"}),";"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"::part(donut-wrapper)"})," e ",e.jsx(n.code,{children:"::part(donut)"})," per la variante ",e.jsx(n.code,{children:"donut"}),";"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"::part(spinner)"})," per la variante ",e.jsx(n.code,{children:"spinner"}),"."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"/docs/personalizzazione-degli-stili--documentazione#selettore-part",children:"Vai alla guida sul selettore part"})})]})}function C(r={}){const{wrapper:n}={...a(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{C as default};

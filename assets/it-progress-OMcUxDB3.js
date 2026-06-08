import{j as e,M as l,C as n,a as t}from"./blocks-BmJ51On6.js";import{useMDXComponents as s}from"./index-CEGOQIeq.js";import{P as c,E as o,C as d,I as p,a as h,B as u,D as x,S as j,b as m}from"./it-progress.stories-Ck4w3YFQ.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-Dq0Es6_d.js";function a(r){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:c}),`
`,e.jsx(i.h1,{id:"progress",children:"Progress"}),`
`,e.jsx(i.p,{children:"Indicatori di stato attivo e di avanzamento di un’operazione."}),`
`,e.jsx(i.h2,{id:"cosa-fa",children:"Cosa fa"}),`
`,e.jsxs(i.p,{children:["Il componente ",e.jsx(i.code,{children:"it-progress"})," rappresenta lo stato di avanzamento o di elaborazione di un'operazione come il caricamento di un file o l’invio dei dati di un modulo."]}),`
`,e.jsxs(i.p,{children:["Può essere usato in tre modalità, tramite l'attributo ",e.jsx(i.code,{children:"type"}),":"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"bar"}),": barra di avanzamento lineare;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"donut"}),": avanzamento circolare;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"spinner"}),": stato di caricamento/attesa."]}),`
`]}),`
`,e.jsx(i.h3,{id:"alternative-a-questo-componente",children:"Alternative a questo componente"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"/docs/componenti-notification--documentazione",children:"Notification"}),": visivamente meno prominente, utile quando ci sono una o due sezioni di contenuti brevi meno importanti."]}),`
`]}),`
`,e.jsx(i.h2,{id:"anteprima-e-attributi-delcomponente",children:"Anteprima e attributi delcomponente"}),`
`,e.jsxs(i.p,{children:["Modifica gli attributi nella tabella per personalizzare in tempo reale l'aspetto e il comportamento del componente. Per vedere come cambia il codice, clicca su ",e.jsx(i.strong,{children:"Show code"}),"."]}),`
`,e.jsx(n,{of:o}),`
`,e.jsx(t,{of:o}),`
`,e.jsx(i.h2,{id:"accessibilità",children:"Accessibilità"}),`
`,e.jsxs(i.p,{children:["Il componente e' progettato per essere accessibile e utilizza l'attributo aria ",e.jsx(i.code,{children:"role=progressbar"})," con ",e.jsx(i.code,{children:"aria-valuenow"})," impostato al valore dell'attributo ",e.jsx(i.code,{children:"value"})," di ",e.jsx(i.code,{children:"<it-progress>"}),`.
Gli attributi `,e.jsx(i.code,{children:"aria-value-min"})," e ",e.jsx(i.code,{children:"aria-value-max"})," sono sempre impostati rispettivamente a ",e.jsx(i.code,{children:"0"})," e ",e.jsx(i.code,{children:"100"})," dal componente, pertanto l'attributo ",e.jsx(i.code,{children:"value"})," dovrà essere sempre un valore compreso tra 0 e 100."]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Imposta sempre una ",e.jsx(i.code,{children:"it-aria-label"})," significativa quando il contesto non è già chiaro."]}),`
`,e.jsxs(i.li,{children:["Per la variante ",e.jsx(i.code,{children:"spinner"}),", fornisci un testo per tecnologie assistive nell'attributo ",e.jsx(i.code,{children:"it-aria-label"}),", oppure usa il fallback predefinito."]}),`
`]}),`
`,e.jsx(i.h2,{id:"progress-bar",children:"Progress bar"}),`
`,e.jsx(i.h3,{id:"con-etichetta",children:"Con etichetta"}),`
`,e.jsx(i.p,{children:"Per aggiungere etichette con testo che indica il progresso, puoi usare gli attributi:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"show-value"})," per mostrare un'etichetta con il valore percentuale calcolato automaticamente in base al valore di ",e.jsx(i.code,{children:"value"}),"."]}),`
`,e.jsxs(i.li,{children:["Oppure, puoi inserire un testo personalizzato all'interno del componente, che verrà mostrato al posto della percentuale, utilizzando l'attributo ",e.jsx(i.code,{children:"label"}),"."]}),`
`]}),`
`,e.jsxs(i.p,{children:["Non dimenticare di fornire un testo esplicativo per gli Screen Reader tramite l'attributo ",e.jsx(i.code,{children:"it-aria-label"}),"."]}),`
`,e.jsx(n,{of:d}),`
`,e.jsx(i.h3,{id:"indeterminato",children:"Indeterminato"}),`
`,e.jsxs(i.p,{children:[`Quando non è possibile stabilire una percentuale di progressione,
utilizza una Progress Bar di tipo indeterminato, aggiungendo l'attributo `,e.jsx(i.code,{children:"indeterminate"})," al componente ",e.jsx(i.code,{children:"it-progress"}),"."]}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(i.h3,{id:"colori",children:"Colori"}),`
`,e.jsxs(i.p,{children:["Puoi modificare il colore della barra di avanzamento usando l'attributo ",e.jsx(i.code,{children:"color"})," con i seguenti valori:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"success"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"info"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"warning"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"danger"})}),`
`]}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(i.h3,{id:"pulsante-con-progress-bar",children:"Pulsante con progress bar"}),`
`,e.jsx(i.p,{children:"Puoi integrare la progress bar all'interno di un pulsante per indicare un'azione in corso, come l'invio di un modulo o il caricamento di una pagina. In questo caso, la progress bar viene visualizzata all'interno del pulsante stesso."}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(i.h2,{id:"donut",children:"Donut"}),`
`,e.jsx(i.p,{children:"Usa il donut quando vuoi mostrare una percentuale di completamento con una rappresentazione circolare."}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(i.h2,{id:"spinner",children:"Spinner"}),`
`,e.jsx(i.p,{children:"Usa lo spinner quando non è disponibile una percentuale precisa di avanzamento."}),`
`,e.jsx(i.p,{children:"È utile quindi quando non è possibile determinare il tempo necessario a completare una procedura."}),`
`,e.jsx(i.p,{children:"Puoi scegliere tra tre dimensioni (small, large, extralarge) e due varianti (standard e double)."}),`
`,e.jsxs(i.p,{children:["Usa l'attributo ",e.jsx(i.code,{children:"size"})," per scegliere la dimensione (",e.jsx(i.code,{children:"sm"}),", ",e.jsx(i.code,{children:"lg"}),", ",e.jsx(i.code,{children:"xl"}),")"]}),`
`,e.jsxs(i.p,{children:["Usa l'attributo ",e.jsx(i.code,{children:"active"})," per attivare l'animazione dello spinner."]}),`
`,e.jsxs(i.p,{children:["Usa l'attributo ",e.jsx(i.code,{children:"it-aria-label"})," per fornire una descrizione testuale dello stato di caricamento, utile per tecnologie assistive."]}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(i.h3,{id:"spinner-doppio",children:"Spinner doppio"}),`
`,e.jsx(i.p,{children:"La variante double dello spinner, mostra due cerchi concentrici che ruotano in senso opposto, per un effetto più dinamico."}),`
`,e.jsxs(i.p,{children:["Usa l'attributo ",e.jsx(i.code,{children:"double"})," per attivare la variante double."]}),`
`,e.jsxs(i.p,{children:["Usa l'attributo ",e.jsx(i.code,{children:"size"})," per scegliere la dimensione (",e.jsx(i.code,{children:"sm"}),", ",e.jsx(i.code,{children:"lg"}),", ",e.jsx(i.code,{children:"xl"}),")"]}),`
`,e.jsxs(i.p,{children:["Usa l'attributo ",e.jsx(i.code,{children:"active"})," per attivare l'animazione dello spinner."]}),`
`,e.jsxs(i.p,{children:["Usa l'attributo ",e.jsx(i.code,{children:"it-aria-label"})," per fornire una descrizione testuale dello stato di caricamento, utile per tecnologie assistive."]}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(i.h2,{id:"personalizzazione-degli-stili",children:"Personalizzazione degli stili"}),`
`,e.jsxs(i.p,{children:["Per personalizzare gli stili del componente, usa i selettori ",e.jsx(i.code,{children:"::part"}),":"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"::part(progress)"})," e ",e.jsx(i.code,{children:"::part(progress-bar)"})," per la variante ",e.jsx(i.code,{children:"bar"}),";"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"::part(donut-wrapper)"})," e ",e.jsx(i.code,{children:"::part(donut)"})," per la variante ",e.jsx(i.code,{children:"donut"}),";"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"::part(spinner)"})," per la variante ",e.jsx(i.code,{children:"spinner"}),"."]}),`
`]}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"/docs/personalizzazione-degli-stili--documentazione#selettore-part",children:"Vai alla guida sul selettore part"})})]})}function P(r={}){const{wrapper:i}={...s(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(a,{...r})}):a(r)}export{P as default};

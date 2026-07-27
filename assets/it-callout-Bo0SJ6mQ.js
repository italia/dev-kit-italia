import{j as e,M as s,C as n,a}from"./blocks-BOPJQLxO.js";import{useMDXComponents as r}from"./index-B0YyzAz0.js";import{C as c,E as o,a as d,b as h,c as p,d as u,e as x,H as j,f as m,g,h as f,i as z,j as b}from"./it-callout.stories-CZnB78yG.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-C2GQMFKp.js";function t(l){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...r(),...l.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:c}),`
`,e.jsx(i.h1,{id:"callout",children:"Callout"}),`
`,e.jsx("description",{children:"Box con uno stile visivo distintivo per evidenziare contenuti testuali importanti su pagine lunghe."}),`
`,e.jsx(i.h2,{id:"cosa-fa",children:"Cosa fa"}),`
`,e.jsxs(i.p,{children:["Il componente Callout (",e.jsx(i.code,{children:"it-callout"}),") è un contenitore che evidenzia parti del testo che richiedono particolare attenzione, come messaggi di errore, avvertimenti e suggerimenti."]}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"https://designers.italia.it/design-system/componenti/callout/",rel:"nofollow",children:"Approfondisci quando e come usare il componente Callout"})}),`
`,e.jsx(i.h2,{id:"anteprima-e-attributi-del-componente",children:"Anteprima e attributi del componente"}),`
`,e.jsxs(i.p,{children:["Modifica gli attributi nella tabella per personalizzare in tempo reale l’aspetto e il comportamento del componente. Per vedere come cambia il codice, clicca su ",e.jsx("strong",{children:"Show code"}),"."]}),`
`,e.jsx(n,{of:o}),`
`,e.jsx(a,{of:o}),`
`,e.jsx(i.h2,{id:"indicazioni-generali",children:"Indicazioni generali"}),`
`,e.jsxs(i.p,{children:["Il componente ",e.jsx(i.code,{children:"<it-callout>"})," espone i seguenti slot:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"(default)"}),", per il contenuto principale, tipicamente uno o più elementi ",e.jsx(i.code,{children:"<p>"}),", viene inserito direttamente nel componente;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:'slot="title"'}),", per il titolo del callout, visualizzato accanto all'icona (se presente);"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:'slot="icon"'}),": per un'icona opzionale, mostrata prima del titolo. Il colore dell'icona si adatta automaticamente alla variante colore del callout;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:'slot="more-content"'}),', per contenuti aggiuntivi opzionali, visualizzati in fondo al callout. Per i callout di tipo "approfondimento" (con attributo ',e.jsx(i.code,{children:"callout-more"}),"), questo slot contiene solitamente un componente ",e.jsx(i.code,{children:"<it-callout-more>"}),"."]}),`
`]}),`
`,e.jsxs(i.p,{children:["Per i ",e.jsx(i.a,{href:"#callout-di-approfondimento",children:"callout di approfondimento"}),", puoi inserire il componente ",e.jsx(i.code,{children:"<it-callout-more>"}),", basato su ",e.jsx(i.a,{href:"/docs/componenti-collapse--documentazione",children:"Collapse"}),", nello slot ",e.jsx(i.code,{children:"more-content"}),". Questo fornirà la funzionalità di collassa/espandi per contenuti richiudibili."]}),`
`,e.jsxs(i.p,{children:["Il componente ",e.jsx(i.code,{children:"<it-callout-more>"})," espone i seguenti slot:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:'slot="label"'}),', per il testo del pulsante che attiva/disattiva il collapse (ad esempio, "Leggi tutto");']}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:'slot="content"'}),", per il contenuto richiudibile mostrato/nascosto al click del pulsante';"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:'slot="extra"'}),", per il contenuto aggiuntivo visualizzato accanto al pulsante (ad esempio, link per download PDF)."]}),`
`]}),`
`,e.jsxs(i.p,{children:["Per un esempio completo, ",e.jsx(i.a,{href:"#callout-di-approfondimento",children:"vai alla sezione Callout di approfondimento"}),"."]}),`
`,e.jsx(i.h2,{id:"accessibilità",children:"Accessibilità"}),`
`,e.jsxs(i.p,{children:["Il callout utilizza un elemento ",e.jsx(i.code,{children:"<section>"})," con ",e.jsx(i.code,{children:"aria-labelledby"})," che punta all'intestazione del titolo per assicurare una struttura semantica corretta."]}),`
`,e.jsxs(i.p,{children:["Per garantire una corretta gerarchia dei contenuti, usa l'attributo ",e.jsx(i.code,{children:"heading-level"})," per specificare il livello di intestazione appropriato (h1-h6) in base al contesto della pagina."]}),`
`,e.jsxs(i.p,{children:["Il valore predefinito è ",e.jsx(i.code,{children:"h2"}),". Assicurati di scegliere il livello corretto per mantenere una struttura gerarchica logica del documento."]}),`
`,e.jsxs(i.p,{children:["Se l'icona comunica un'informazione non presente nel testo (ad esempio, allarme o conferma), usa l'attributo ",e.jsx(i.code,{children:"label"})," di ",e.jsx(i.code,{children:"it-icon"})," per fornire una descrizione accessibile agli screen reader. ",e.jsx(i.a,{href:"/docs/componenti-icon--docs#accessibilit%C3%A0",children:"Approfondisci l'accessibilità delle icone"})]}),`
`,e.jsx(i.h2,{id:"dimensione-del-testo",children:"Dimensione del testo"}),`
`,e.jsxs(i.p,{children:["Per aumentare la dimensione del testo dei paragrafi nel callout, aggiungi l'attributo ",e.jsx("code",{children:"big-text"})," al componente"]}),`
`,e.jsx(n,{of:d}),`
`,e.jsx(i.h2,{id:"varianti-di-colore",children:"Varianti di colore"}),`
`,e.jsxs(i.p,{children:["Il callout supporta diverse varianti di colore, selezionabili tramite l'attributo ",e.jsx("code",{children:"variant"}),"."]}),`
`,e.jsx(i.h3,{id:"callout-primario",children:"Callout primario"}),`
`,e.jsxs(i.p,{children:["Usa l'attributo ",e.jsx("code",{children:'variant="primary"'})," per dare evidenza particolare."]}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(i.h3,{id:"callout-success",children:"Callout success"}),`
`,e.jsxs(i.p,{children:["Usa l'attributo ",e.jsx("code",{children:'variant="success"'})," per indicare una procedura andata a buon fine."]}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(i.h3,{id:"callout-warning",children:"Callout warning"}),`
`,e.jsxs(i.p,{children:["Usa l'attributo ",e.jsx("code",{children:'variant="warning"'})," per richiamare l’attenzione dell’utente."]}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(i.h3,{id:"callout-danger",children:"Callout danger"}),`
`,e.jsxs(i.p,{children:["Usa l'attributo ",e.jsx("code",{children:'variant="danger"'})," per errori o procedure pericolose."]}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(i.h2,{id:"callout-highlight",children:"Callout Highlight"}),`
`,e.jsxs(i.p,{children:["Usa l'attributo ",e.jsx("code",{children:"highlight"})," in combinazione con l'attributo ",e.jsx("code",{children:"variant"})," per mostrare un bordo solo sul lato sinistro."]}),`
`,e.jsx(i.h3,{id:"highlight-base",children:"Highlight base"}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(i.h3,{id:"highlight-primario",children:"Highlight primario"}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(i.h3,{id:"highlight-success",children:"Highlight success"}),`
`,e.jsx(n,{of:g}),`
`,e.jsx(i.h3,{id:"highlight-warning",children:"Highlight warning"}),`
`,e.jsx(n,{of:f}),`
`,e.jsx(i.h3,{id:"highlight-danger",children:"Highlight danger"}),`
`,e.jsx(n,{of:z}),`
`,e.jsx(i.h2,{id:"callout-di-approfondimento",children:"Callout di approfondimento"}),`
`,e.jsxs(i.p,{children:["Il callout ",e.jsx(i.strong,{children:"approfondimento"})," ha uno stile visivo differente ed è indicato per contenuti testuali più estesi, spesso accompagnati da sezioni richiudibili (collapse) e link di download."]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[`
`,e.jsxs(i.p,{children:["Usa l'attributo ",e.jsx("code",{children:"callout-more"})," di ",e.jsx(i.code,{children:"it-callout"})," per applicare lo stile di approfondimento."]}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsxs(i.p,{children:["Usa il componente ",e.jsx(i.code,{children:"<it-callout-more>"})," nello slot ",e.jsx(i.code,{children:"more-content"})," per aggiungere sezioni richiudibili."]}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsxs(i.p,{children:["Usa lo slot ",e.jsx(i.code,{children:"label"})," di ",e.jsx(i.code,{children:"<it-callout-more>"})," per definire il testo del pulsante di espansione/contrazione."]}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsxs(i.p,{children:["Usa lo slot ",e.jsx(i.code,{children:"content"})," di ",e.jsx(i.code,{children:"<it-callout-more>"})," per inserire il contenuto richiudibile."]}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsxs(i.p,{children:["Usa lo slot ",e.jsx(i.code,{children:"extra"})," di ",e.jsx(i.code,{children:"<it-callout-more>"})," per aggiungere link di download o altri contenuti aggiuntivi accanto al pulsante di espansione."]}),`
`]}),`
`]}),`
`,e.jsx(n,{of:b}),`
`,e.jsx(i.h2,{id:"personalizzazione-degli-stili",children:"Personalizzazione degli stili"}),`
`,e.jsxs(i.p,{children:["Per personalizzare gli stili, puoi usare questi selettori ",e.jsx(i.code,{children:"::part"})," dedicati e queste proprietà CSS personalizzabili."]}),`
`,e.jsxs(i.h4,{id:"selettori-di-it-callout",children:["Selettori di ",e.jsx(i.code,{children:"it-callout"})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"::part(callout)"}),", per l'elemento contenitore principale del callout;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"::part(inner)"}),", per il contenitore interno del callout;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"::part(title)"}),", per l'elemento titolo del callout."]}),`
`]}),`
`,e.jsxs(i.h4,{id:"selettori-di-it-callout-more-approfondimento",children:["Selettori di ",e.jsx(i.code,{children:"it-callout-more"})," (approfondimento)"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"::part(trigger)"}),", per il pulsante espandi/collassa;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"::part(extra)"}),", per il contenitore per contenuti extra (ad esempio, un link di download);"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"::part(content)"}),", per il contenitore del contenuto richiudibile."]}),`
`]}),`
`,e.jsx(i.h4,{id:"proprietà-css-personalizzabili",children:"Proprietà CSS personalizzabili"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"--bsi-callout-text-size"}),", per la dimensione del font dei paragrafi (default: ",e.jsx(i.code,{children:"16px"}),", con ",e.jsx(i.code,{children:"big-text"}),": ",e.jsx(i.code,{children:"18px"}),");"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"--bsi-callout-font-family"}),", per la famiglia di font del testo (default: font serif di Bootstrap Italia)."]}),`
`]}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"/docs/personalizzazione-degli-stili--documentazione#selettore-part",children:"Vai alla guida sul selettore part"})})]})}function I(l={}){const{wrapper:i}={...r(),...l.components};return i?e.jsx(i,{...l,children:e.jsx(t,{...l})}):t(l)}export{I as default};

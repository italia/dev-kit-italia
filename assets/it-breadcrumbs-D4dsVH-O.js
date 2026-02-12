import{j as e,M as o,C as r,a as c}from"./blocks-CtsOud67.js";import{useMDXComponents as l}from"./index-D4x7Fznk.js";import{B as t,E as s,C as d,S as u,a as h}from"./it-breadcrumbs.stories-DMgaVOfJ.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-C0TrFRga.js";function a(n){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...l(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:t}),`
`,e.jsx(i.h1,{id:"breadcrumbs",children:"Breadcrumbs"}),`
`,e.jsx("description",{children:"Indicatori di un percorso di navigazione gerarchico che aiuta gli utenti a comprendere la loro posizione all'interno di un sito e a tornare facilmente ai livelli precedenti"}),`
`,e.jsx(i.h2,{id:"cosa-fa",children:"Cosa fa"}),`
`,e.jsx(i.p,{children:"Usa il componente Breadcrumbs quando un sito presenta molti contenuti organizzati su più di due livelli gerarchici e gli utenti hanno bisogno di spostarsi velocemente tra i vari livelli."}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"https://designers.italia.it/design-system/componenti/breadcrumbs/",rel:"nofollow",children:"Approfondisci quando e come usare il componente Breadcrumbs"})}),`
`,e.jsx(i.h3,{id:"alternative-a-questo-componente",children:"Alternative a questo componente"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Progress indicators: utile a indicare il progresso di un flusso transazionale lineare, come la richiesta di un servizio o un pagamento."}),`
`]}),`
`,e.jsx(i.h2,{id:"anteprima-e-attributi-del-componente",children:"Anteprima e attributi del componente"}),`
`,e.jsxs(i.p,{children:["Modifica gli attributi nella tabella per personalizzare in tempo reale l’aspetto e il comportamento del componente. Per vedere come cambia il codice, clicca su ",e.jsx("strong",{children:"Show code"}),"."]}),`
`,e.jsx(r,{of:s}),`
`,e.jsx(c,{of:s}),`
`,e.jsx(i.h2,{id:"indicazioni-generali",children:"Indicazioni generali"}),`
`,e.jsxs(i.p,{children:["Il componente ",e.jsx(i.code,{children:"it-breadcrumbs"})," rappresenta il contenitore principale delle breadcrumbs e include uno o più elementi ",e.jsx(i.code,{children:"it-breadcrumb-item"}),`.
Il componente `,e.jsx(i.code,{children:"it-breadcrumb-item"})," rappresenta un singolo elemento breadcrumb e va sempre usato come figlio di ",e.jsx(i.code,{children:"it-breadcrumbs"}),"."]}),`
`,e.jsxs(i.p,{children:["Il componente ",e.jsx(i.code,{children:"it-breadcrumb-item"})," espone i seguenti slot:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"default"}),": voce breadcrumb. Inserisci un normale link ",e.jsx(i.code,{children:"<a>"}),", eventualmente accompagnato da altri elementi inline"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"separator"}),": elemento separatore personalizzato (ad esempio un'icona)"]}),`
`]}),`
`,e.jsx("div",{class:"callout callout-warning",children:e.jsxs("div",{class:"callout-inner",children:[e.jsx("div",{class:"callout-title",children:e.jsx("span",{class:"text",children:"Accessibilità e semantica"})}),e.jsx("p",{children:e.jsxs(i.p,{children:["Ricordati di inserire il testo descrittivo del link all'interno del tag ",e.jsx(i.code,{children:"<a>"})," per garantire una corretta semantica e accessibilità."]})}),e.jsx("p",{children:e.jsxs(i.p,{children:["Ricordati di valorizzare sempre l'attributo ",e.jsx(i.code,{children:"href"})," per rendere il link effettivamente navigabile e semanticamente corretto."]})})]})}),`
`,e.jsx(i.h2,{id:"accessibilità",children:"Accessibilità"}),`
`,e.jsxs(i.p,{children:["Il componente Breadcrumbs implementa le specifiche ARIA ",e.jsx(i.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/",rel:"nofollow",children:"WAI-ARIA Authoring Practices 1.2 breadcrumbs"})," per garantire un'esperienza accessibile a tutti gli utenti:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Fornisce automaticamente l'attributo ",e.jsx(i.code,{children:'aria-current="page"'})," sull'ultimo elemento per indicare la pagina corrente agli screen reader."]}),`
`,e.jsxs(i.li,{children:["Il separatore viene nascosto agli screen reader tramite ",e.jsx(i.code,{children:'aria-hidden="true"'})," per evitare annunci ridondanti."]}),`
`,e.jsxs(i.li,{children:["Usa elementi semantici (",e.jsx(i.code,{children:"<nav>"}),", ",e.jsx(i.code,{children:"<ol>"}),", ",e.jsx(i.code,{children:"<li>"}),") per una corretta struttura del documento."]}),`
`]}),`
`,e.jsx("div",{class:"callout callout-warning",children:e.jsxs("div",{class:"callout-inner",children:[e.jsx("div",{class:"callout-title",children:e.jsx("span",{class:"text",children:"Nota sui test di accessibilità"})}),e.jsx("p",{children:e.jsxs(i.p,{children:["Axe e altri strumenti di analisi statica possono segnalare falsi positivi quando analizzano il componente ",e.jsx(i.code,{children:"it-breadcrumbs"})," a causa del limitato supporto per i Web Components. La struttura accessibile effettiva è corretta, come confermato dall'Accessibility Tree e dai test manuali con screen reader."]})})]})}),`
`,e.jsx(i.h2,{id:"con-icona",children:"Con icona"}),`
`,e.jsxs(i.p,{children:["Puoi aggiungere un'icona a un elemento ",e.jsx(i.code,{children:"it-breadcrumb-item"})," inserendo un componente ",e.jsx(i.code,{children:"it-icon"})," all'interno del tag ",e.jsx(i.code,{children:"<a>"}),"."]}),`
`,e.jsx(r,{of:d}),`
`,e.jsx(i.h2,{id:"separatore-personalizzato",children:"Separatore personalizzato"}),`
`,e.jsxs(i.p,{children:["Di default, il componente Breadcrumbs usa ",e.jsx(i.code,{children:"/"})," come separatore tra gli elementi. Puoi personalizzarlo in due modi:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["utilizzando l'attributo ",e.jsx(i.code,{children:"separator"})," su ",e.jsx(i.code,{children:"it-breadcrumbs"})," (es. ",e.jsx(i.code,{children:">"}),")"]}),`
`,e.jsxs(i.li,{children:["inserendo un elemento personalizzato (come un'icona) nello slot ",e.jsx(i.code,{children:"separator"})," di ogni ",e.jsx(i.code,{children:"it-breadcrumb-item"}),"."]}),`
`]}),`
`,e.jsx(r,{of:u}),`
`,e.jsx(i.h2,{id:"sfondo-scuro",children:"Sfondo scuro"}),`
`,e.jsxs(i.p,{children:["Aggiungi l'attributo ",e.jsx(i.code,{children:"dark"})," per utilizzare la versione su sfondo scuro delle breadcrumbs."]}),`
`,e.jsx("div",{class:"callout callout-warning",children:e.jsxs("div",{class:"callout-inner",children:[e.jsx("div",{class:"callout-title",children:e.jsx("span",{class:"text",children:"Accessibilità e icone"})}),e.jsx("p",{children:e.jsxs(i.p,{children:["Quando usi icone negli slot ",e.jsx(i.code,{children:"separator"})," o come contenuto di un ",e.jsx(i.code,{children:"it-breadcrumb-item"})," ricorda di impostare manualmente il colore appropriato in modo da garantire un contrasto che rispetti le linee guida di accessibilità."]})})]})}),`
`,e.jsx(r,{of:h}),`
`,e.jsx(i.h2,{id:"personalizzazione-degli-stili",children:"Personalizzazione degli stili"}),`
`,e.jsxs(i.p,{children:["Per la personalizzazione degli stili puoi usare i selettori ",e.jsx(i.code,{children:"::part"})," dedicati:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"::part(breadcrumbs-container)"})," - elemento ",e.jsx(i.code,{children:"nav"})," che contiene le breadcrumbs"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"::part(breadcrumbs)"})," - elemento ",e.jsx(i.code,{children:"ol"})," che contiene le voci"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"::part(breadcrumb-item)"})," - ogni singolo elemento ",e.jsx(i.code,{children:"li"})," della lista"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"::part(separator)"})," - elemento usato come separatore tra le voci"]}),`
`]}),`
`,e.jsxs(i.p,{children:[e.jsx(i.a,{href:"/docs/personalizzazione-degli-stili--documentazione#selettore-part",children:"Vedi qui la guida dettagliata"}),"."]})]})}function g(n={}){const{wrapper:i}={...l(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(a,{...n})}):a(n)}export{g as default};

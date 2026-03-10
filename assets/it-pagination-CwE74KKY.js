import{j as e,M as s,C as n,a as r}from"./blocks-Cg7HoPIi.js";import{useMDXComponents as t}from"./index-BqGwsfRJ.js";import{P as c,E as l,C as d,a as p,R as m,b as u,M as h,S as g,c as x,d as j,A as v,e as z,f}from"./it-pagination.stories-DbtUzF6T.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-DTKPvNQN.js";function o(a){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...t(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:c}),`
`,e.jsx(i.h1,{id:"pagination",children:"Pagination"}),`
`,e.jsx("description",{children:"Barra di navigazione per scorrere una lista di contenuti disposti su più pagine."}),`
`,e.jsx(i.h2,{id:"cosa-fa",children:"Cosa fa"}),`
`,e.jsxs(i.p,{children:["Il componente Pagination (",e.jsx(i.code,{children:"it-pagination"}),") permette di suddividere in più pagine elenchi di contenuti o dati correlati che non possono essere visualizzati tutti insieme. È particolarmente utile per risultati di ricerca ed elenchi di prodotti, servizi o notizie."]}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"https://designers.italia.it/design-system/componenti/paginazione/",rel:"nofollow",children:"Approfondisci quando e come usare il componente Pagination"})}),`
`,e.jsx(i.h3,{id:"alternative-a-questo-componente",children:"Alternative a questo componente"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"/docs/componenti-button--documentazione",children:"Button"}),": usa un pulsante “mostra di più” per caricare più contenuti al click/tap per fornire un flusso continuo di contenuti sulla stessa pagina (infinite scroll)."]}),`
`]}),`
`,e.jsx(i.h2,{id:"anteprima-e-attributi-del-componente",children:"Anteprima e attributi del componente"}),`
`,e.jsxs(i.p,{children:["Modifica gli attributi nella tabella per personalizzare in tempo reale l'aspetto e il comportamento del componente. Per vedere come cambia il codice, clicca su ",e.jsx(i.strong,{children:"Show code"}),"."]}),`
`,e.jsx(n,{of:l}),`
`,e.jsx(r,{of:l}),`
`,e.jsx(i.h2,{id:"indicazioni-generali",children:"Indicazioni generali"}),`
`,e.jsx(i.p,{children:"Il componente Pagination è composto da due elementi:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"it-pagination"}),", il contenitore della paginazione che gestisce lo stato della pagina corrente;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"it-pagination-item"}),", il singolo elemento della paginazione che contiene il link alla pagina."]}),`
`]}),`
`,e.jsxs(i.p,{children:["Per garantire la massima flessibilità e compatibilità con diversi framework, il componente ",e.jsx(i.code,{children:"it-pagination"})," non genera automaticamente gli elementi di paginazione. È necessario aggiungere manualmente gli elementi ",e.jsx(i.code,{children:"it-pagination-item"})," come figli di ",e.jsx(i.code,{children:"it-pagination"}),", in modo da poter personalizzare i link e il loro comportamento."]}),`
`,e.jsxs(i.p,{children:["All'interno di ogni ",e.jsx(i.code,{children:"it-pagination-item"}),", puoi inserire un link (ad esempio un elemento ",e.jsx(i.code,{children:"<a>"}),") per gestire la navigazione tra le pagine: se stai usando un framework come React, NextJS, Angular o Vue.js, puoi integrare i componenti di routing del framework all'interno degli elementi ",e.jsx(i.code,{children:"it-pagination-item"}),". Segui le indicazioni del framework che stai usando per gestire la navigazione tra le pagine e/o integrare il tuo sistema di paginazione."]}),`
`,e.jsxs(i.p,{children:["Il componente ",e.jsx(i.code,{children:"it-pagination"})," supporta i seguenti slot:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"default"}),", per gli elementi ",e.jsx(i.code,{children:"it-pagination-item"}),";"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"prev"}),", per il pulsante/link di navigazione alla pagina precedente;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"next"}),", per il pulsante/link di navigazione alla pagina successiva;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"page-changer"}),", per un eventuale selettore di pagina;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"jump-to-page"}),", per un eventuale campo di salto a una pagina specifica;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"total"}),", per mostrare il numero totale di pagine."]}),`
`]}),`
`,e.jsxs(i.p,{children:["Il componente ",e.jsx(i.code,{children:"it-pagination-item"})," supporta i seguenti attributi:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"page"})," (",e.jsx(i.strong,{children:"obbligatorio"}),"), numero della pagina rappresentata dall'elemento;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"current"})," (opzionale), indica se l'elemento rappresenta la pagina corrente;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"disabled"})," (opzionale), indica se l'elemento è disabilitato."]}),`
`]}),`
`,e.jsxs(i.p,{children:["Il componente ",e.jsx(i.code,{children:"it-pagination-item"})," espone il solo slot ",e.jsx(i.strong,{children:"default"})," per inserire il link alla pagina."]}),`
`,e.jsx(i.h2,{id:"accessibilità",children:"Accessibilità"}),`
`,e.jsxs(i.p,{children:["Il componente ",e.jsx(i.code,{children:"it-pagination"})," è progettato per essere accessibile e conforme alle linee guida WCAG:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"gli elementi di paginazione sono implementati come link, consentendo agli utenti di navigare tra le pagine utilizzando il tasto Tab e attivare i link con il tasto Invio o la barra spaziatrice;"}),`
`,e.jsx(i.li,{children:"il componente utilizza ruoli ARIA appropriati per indicare la struttura della paginazione ai lettori di schermo;"}),`
`,e.jsxs(i.li,{children:["l'elemento della pagina corrente è indicato con l'attributo ",e.jsx(i.code,{children:'aria-current="page"'})," per informare gli utenti dei lettori di schermo;"]}),`
`,e.jsx(i.li,{children:"i link di navigazione alla pagina precedente e successiva sono etichettati in modo chiaro per i lettori di schermo;"}),`
`,e.jsxs(i.li,{children:["i link di navigazione alla pagina precedente o successiva sono disabilitati quando l'utente si trova all'inizio o alla fine della paginazione, assumono uno stato visivo disabilitato e viene aggiunto l'attributo ",e.jsx(i.code,{children:'aria-disabled="true"'}),";"]}),`
`,e.jsx(i.li,{children:"eventuali separatori o ellissi utilizzati per indicare pagine non visualizzate non sono interattivi e non sono inclusi nella tabulazione."}),`
`]}),`
`,e.jsx(i.p,{children:"Per garantire la massma accesibilità, ricordati di:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["fornire etichette significative per i link di navigazione alla pagina precedente e successiva quando utilizzi gli slot ",e.jsx(i.code,{children:"prev"})," e ",e.jsx(i.code,{children:"next"}),";"]}),`
`,e.jsxs(i.li,{children:["fornire sempre un link semanticamente valido all'interno di ogni elemento ",e.jsx(i.code,{children:"it-pagination-item"}),";"]}),`
`,e.jsxs(i.li,{children:["valorizzare sempre l'attributo ",e.jsx(i.code,{children:"it-aria-label"})," sull'elemento ",e.jsx(i.code,{children:"it-pagination"}),' per descrivere il contesto della paginazione (ad esempio "Paginazione articoli", "Paginazione risultati di ricerca", ecc.).']}),`
`]}),`
`,e.jsx("div",{class:"callout callout-warning",children:e.jsxs("div",{class:"callout-inner",children:[e.jsx("div",{class:"callout-title",children:e.jsx("span",{class:"text",children:"Nota sui test di accessibilità"})}),e.jsx("p",{children:e.jsxs(i.p,{children:["Axe e altri strumenti di analisi statica possono segnalare falsi positivi quando analizzano il componente ",e.jsx(i.code,{children:"it-pagination"})," a causa del limitato supporto per i Web Components. La struttura accessibile effettiva è corretta, come confermato dall'Accessibility Tree e dai test manuali con lettori di schermo."]})})]})}),`
`,e.jsx(i.h2,{id:"navigazione-con-icone",children:"Navigazione con icone"}),`
`,e.jsxs(i.p,{children:["Per mostrare un'icona (ad esempio l'icona ",e.jsx(i.code,{children:"chevron"}),") come pulsante di navigazione tra le pagine, usa gli slot ",e.jsx(i.code,{children:"prev"})," e ",e.jsx(i.code,{children:"next"}),"."]}),`
`,e.jsxs(i.p,{children:["Aggiungi un elemento con classe ",e.jsx(i.code,{children:".visually-hidden"})," all'interno del link per comunicare correttamente la funzionalità del pulsante ai lettori di schermo."]}),`
`,e.jsx(n,{of:d}),`
`,e.jsx(i.h2,{id:"navigazione-con-link-testuali",children:"Navigazione con link testuali"}),`
`,e.jsxs(i.p,{children:["Per mostrare del testo come pulsante di navigazione, usa gli slot ",e.jsx(i.code,{children:"prev"})," e ",e.jsx(i.code,{children:"next"})," per inserire il link con testo personalizzato."]}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(i.h2,{id:"modalità-responsive",children:"Modalità responsive"}),`
`,e.jsx(i.p,{children:"In modalità responsive (attiva di default), su schermi di piccole dimensioni, il componente nasconde gli elementi di paginazione non attivi e mostra soltanto l'elemento della pagina corrente."}),`
`,e.jsxs(i.p,{children:["Se vuoi disabilitare questo comportamento, aggiungi l'attributo ",e.jsx(i.code,{children:"disable-responsive"})," a ",e.jsx(i.code,{children:"it-pagination"}),". Dovrai poi gestire autonomamento l'aspetto della paginazione sui diversi dispositivi."]}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(i.h2,{id:"numero-totale-di-pagine",children:"Numero totale di pagine"}),`
`,e.jsxs(i.p,{children:["Per aggiungere un indicatore del numero totale di pagine, usa lo slot ",e.jsx(i.code,{children:"total"})," e inserisci al suo interno un elemento ",e.jsx(i.code,{children:"<p>"})]}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(i.h2,{id:"more",children:"More"}),`
`,e.jsx(i.p,{children:"Quando il numero di pagine è elevato, è consigliabile mostrare solo quelle più vicine alla pagina corrente, inserendo delle ellissi (…) tra queste e la prima e l’ultima pagina."}),`
`,e.jsxs(i.p,{children:["Per ottenere questo comportamento, usa l'attributo ",e.jsx(i.code,{children:"visible-pages"})," per indicare il numero di pagine visibili intorno a quella corrente. Di default è impostato a 5."]}),`
`,e.jsx(i.p,{children:"Il componente aggiunge automaticamente le ellissi quando necessario, mantenendo sempre visibili la prima e l’ultima pagina disponibile."}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(i.h2,{id:"simple-mode",children:"Simple mode"}),`
`,e.jsxs(i.p,{children:["Per mostrare solo i pulsanti di navigazione alla pagina precedente e successiva, senza gli altri elementi di paginazione, usa l'attributo ",e.jsx(i.code,{children:"simple-mode"}),"."]}),`
`,e.jsx(i.p,{children:"Questa versione è ottimizzata per i dispositivi mobile, ma può essere utilizzata anche su tablet e desktop quando il numero di pagine è ridotto."}),`
`,e.jsx(n,{of:g}),`
`,e.jsx(i.h2,{id:"selettore-elementi-per-pagina",children:"Selettore elementi per pagina"}),`
`,e.jsxs(i.p,{children:["Per aggiungere un selettore per cambiare il numero di elementi mostrati per pagina, usa lo slot ",e.jsx(i.code,{children:"page-changer"}),". Dovrai gestire in modo autonomo il comportamento del selettore e l'aggiornamento della paginazione in base al valore selezionato."]}),`
`,e.jsxs(i.p,{children:["Questo esempio di implementazione usa un elemento ",e.jsx(i.code,{children:"<select>"})," come selettore."]}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(i.h2,{id:"salto-a-una-pagina-specifica",children:"Salto a una pagina specifica"}),`
`,e.jsxs(i.p,{children:["Per aggiungere un campo input per saltare direttamente a una pagina specifica, usa lo slot ",e.jsx(i.code,{children:"jump-to-page"}),". Dovrai gestire in modo autonomo il comportamento del campo di input e l'aggiornamento della paginazione in base al valore inserito."]}),`
`,e.jsxs(i.p,{children:["Questo esempio di implementazione usa un elemento ",e.jsx(i.code,{children:"<it-input>"})," di tipo numero."]}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(i.h2,{id:"allineamento",children:"Allineamento"}),`
`,e.jsxs(i.p,{children:["Per gestire l'allineamento del componente ",e.jsx(i.code,{children:"it-pagination"}),", usa gli attributi:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"start"})," (default), per allinearlo a sinistra;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"center"}),", per allinearlo al centro;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"end"}),", per allinearlo a destra."]}),`
`]}),`
`,e.jsx(i.h3,{id:"allineamento-a-sinistra",children:"Allineamento a sinistra"}),`
`,e.jsx(n,{of:v}),`
`,e.jsx(i.h3,{id:"allineamento-centrato",children:"Allineamento centrato"}),`
`,e.jsx(n,{of:z}),`
`,e.jsx(i.h3,{id:"allineamento-a-destra",children:"Allineamento a destra"}),`
`,e.jsx(n,{of:f}),`
`,e.jsx(i.h2,{id:"proprietà-metodi-ed-eventi-accessibili-via-js",children:"Proprietà, metodi ed eventi accessibili via js"}),`
`,e.jsx(i.p,{children:"Il componente espone le seguenti proprietà, metodi ed eventi accessibili via JavaScript."}),`
`,e.jsx(i.h3,{id:"eventi",children:"Eventi"}),`
`,e.jsx(i.p,{children:"Il componente emette i seguenti eventi custom:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"it-pagination-change"}),", quando la pagina corrente cambia. L'evento fornisce il numero della nuova pagina selezionata nel dettaglio dell'evento (",e.jsx(i.code,{children:"event.detail"}),")."]}),`
`]}),`
`,e.jsx(i.h2,{id:"personalizzazione-degli-stili",children:"Personalizzazione degli stili"}),`
`,e.jsxs(i.p,{children:["Per personalizzare gli stili, usa i selettori ",e.jsx(i.code,{children:"::part"})," dedicati di ",e.jsx(i.code,{children:"it-pagination"}),":"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"::part(pagination-list)"}),", per lo stile dell'elemento ",e.jsx(i.code,{children:"<ul>"})," che contiene gli elementi di paginazione;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"::part(current-page-simple-mode)"}),", per lo stile dell'elemento che rappresenta la pagina corrente in modalità simple;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"::part(total-pages-simple-mode)"}),", per lo stile dell'elemento che rappresenta il numero totale di pagine in modalità simple."]}),`
`]}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"/docs/personalizzazione-degli-stili--documentazione#selettore-part",children:"Vai alla guida sul selettore part"})})]})}function q(a={}){const{wrapper:i}={...t(),...a.components};return i?e.jsx(i,{...a,children:e.jsx(o,{...a})}):o(a)}export{q as default};

import{j as e,M as s,C as n,a as r}from"./blocks-C1WJMGUC.js";import{useMDXComponents as t}from"./index-BrQ7_w4M.js";import{P as d,E as o,C as c,a as p,R as m,b as u,M as g,S as h,c as x,d as j,A as z,e as v,f}from"./it-pagination.stories-BbcQg9q0.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-90FZwcPR.js";function l(a){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...t(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:d}),`
`,e.jsx(i.h1,{id:"pagination",children:"Pagination"}),`
`,e.jsx("description",{children:"Barra di navigazione per scorrere una lista di contenuti disposti su più pagine."}),`
`,e.jsx(i.h2,{id:"cosa-fa",children:"Cosa fa"}),`
`,e.jsx(i.p,{children:"Permette di suddividere in pagine un elenco di molti contenuti o dati correlati che non possono essere mostrati tutti su una singola pagina. È particolarmente utile nei casi in cui è necessario navigare attraverso diverse pagine, come per i risultati di ricerca ed elenchi di prodotti, servizi o notizie."}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"https://designers.italia.it/design-system/componenti/paginazione/",rel:"nofollow",children:"Approfondisci quando e come usare il componente Pagination"})}),`
`,e.jsx(i.h3,{id:"alternative-a-questo-componente",children:"Alternative a questo componente"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"/docs/componenti-button--documentazione",children:"Button"}),": usa un pulsante “mostra di più” per caricare più contenuti al click/tap per fornire un flusso continuo di contenuti sulla stessa pagina (infinite scroll)."]}),`
`]}),`
`,e.jsx(i.h2,{id:"anteprima-e-attributi-del-componente",children:"Anteprima e attributi del componente"}),`
`,e.jsxs(i.p,{children:["Modifica gli attributi nella tabella per personalizzare in tempo reale l'aspetto e il comportamento del componente. Per vedere come cambia il codice, clicca su ",e.jsx(i.strong,{children:"Show code"}),"."]}),`
`,e.jsx(n,{of:o}),`
`,e.jsx(r,{of:o}),`
`,e.jsx(i.h2,{id:"informazioni-generali",children:"Informazioni generali"}),`
`,e.jsx(i.p,{children:"Il componente Pagination è composto da due elementi:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"it-pagination"}),": contenitore della paginazione che gestisce lo stato della pagina corrente"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"it-pagination-item"}),": singolo elemento della paginazione che contiene il link alla pagina"]}),`
`]}),`
`,e.jsxs(i.p,{children:["Per garantire la massima flessibilità e compatibilità con diversi framework, il componente ",e.jsx(i.code,{children:"it-pagination"}),` non genera automaticamente gli elementi di paginazione.
È necessario aggiungere manualmente gli elementi `,e.jsx(i.code,{children:"it-pagination-item"})," come figli di ",e.jsx(i.code,{children:"it-pagination"}),", in modo da poter personalizzare i link e il loro comportamento."]}),`
`,e.jsxs(i.p,{children:["All'interno di ogni ",e.jsx(i.code,{children:"it-pagination-item"}),", puoi inserire un link (ad esempio un elemento ",e.jsx(i.code,{children:"<a>"}),") per gestire la navigazione tra le pagine: se stai utilizzando un framework come React, NextJS, Angular o Vue.js, puoi integrare i componenti di routing del framework all'interno degli elementi ",e.jsx(i.code,{children:"it-pagination-item"}),". Segui le best practice del tuo framework per gestire la navigazione tra le pagine e/o integrare il tuo sistema di paginazione."]}),`
`,e.jsxs(i.p,{children:["Il componente ",e.jsx(i.code,{children:"it-pagination"})," supporta i seguenti slot:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"default"}),": per gli elementi ",e.jsx(i.code,{children:"it-pagination-item"})]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"prev"}),": per il pulsante/link di navigazione alla pagina precedente"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"next"}),": per il pulsante/link di navigazione alla pagina successiva"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"page-changer"}),": per un eventuale selettore di pagina"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"jump-to-page"}),": per un eventuale campo di salto a una pagina specifica"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"total"}),": per mostrare il numero totale di pagine"]}),`
`]}),`
`,e.jsxs(i.p,{children:["Il componente ",e.jsx(i.code,{children:"it-pagination-item"})," supporta i seguenti attributi:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"page"}),": numero della pagina rappresentata dall'elemento, obbligatorio"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"current"}),": indica se l'elemento rappresenta la pagina corrente, opzionale"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"disabled"}),": indica se l'elemento è disabilitato, opzionale"]}),`
`]}),`
`,e.jsxs(i.p,{children:["Il componente ",e.jsx(i.code,{children:"it-pagination-item"})," espone il solo slot ",e.jsx(i.strong,{children:"default"})," per inserire il link alla pagina."]}),`
`,e.jsx(i.h2,{id:"accessibilità",children:"Accessibilità"}),`
`,e.jsxs(i.p,{children:["Il componente ",e.jsx(i.code,{children:"it-pagination"})," è progettato per essere accessibile e conforme alle linee guida WCAG:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Gli elementi di paginazione sono implementati come link, consentendo agli utenti di navigare tra le pagine utilizzando il tasto Tab e attivare i link con il tasto Invio o la barra spaziatrice."}),`
`,e.jsx(i.li,{children:"Il componente utilizza ruoli ARIA appropriati per indicare la struttura della paginazione agli screen reader."}),`
`,e.jsxs(i.li,{children:["L'elemento della pagina corrente è indicato con l'attributo ",e.jsx(i.code,{children:'aria-current="page"'})," per informare gli utenti dello screen reader sulla pagina attiva."]}),`
`,e.jsx(i.li,{children:"I link di navigazione alla pagina precedente e successiva sono etichettati in modo chiaro per gli screen reader."}),`
`,e.jsxs(i.li,{children:["I link che consentono di passare alla pagina successiva o precedente sono disabilitati quando l'utente si trova rispettivamente all'inizio o alla fine della paginazione, evitando confusione. Tali link assumono uno stato visivo disabilitato e viene aggiunto l'attributo ",e.jsx(i.code,{children:'aria-disabled="true"'}),"."]}),`
`,e.jsx(i.li,{children:"Eventuali separatori o ellissi utilizzati per indicare pagine non visualizzate non sono interattivi e non sono inclusi nella tabulazione."}),`
`]}),`
`,e.jsx(i.p,{children:"Per garantire la massma accesibilità, ricordati di seguire queste linee guida:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Fornisci etichette significative per i link di navigazione alla pagina precedente e successiva quando utilizzi gli slot ",e.jsx(i.code,{children:"prev"})," e ",e.jsx(i.code,{children:"next"}),"."]}),`
`,e.jsxs(i.li,{children:["Fornisci sempre un link semanticamente valido all'interno di ogni elemento ",e.jsx(i.code,{children:"it-pagination-item"}),"."]}),`
`,e.jsxs(i.li,{children:["Valorizza sempre l'attributo ",e.jsx(i.code,{children:"it-aria-label"})," sull'elemento ",e.jsx(i.code,{children:"it-pagination"}),' per descrivere il contesto della paginazione (ad esempio "Paginazione articoli", "Paginazione risultati di ricerca", ecc.).']}),`
`]}),`
`,e.jsx("div",{class:"callout callout-warning",children:e.jsxs("div",{class:"callout-inner",children:[e.jsx("div",{class:"callout-title",children:e.jsx("span",{class:"text",children:"Nota sui test di accessibilità"})}),e.jsx("p",{children:e.jsxs(i.p,{children:["Axe e altri strumenti di analisi statica possono segnalare falsi positivi quando analizzano il componente ",e.jsx(i.code,{children:"it-pagination"})," a causa del limitato supporto per i Web Components. La struttura accessibile effettiva è corretta, come confermato dall'Accessibility Tree e dai test manuali con screen reader."]})})]})}),`
`,e.jsx(i.h2,{id:"navigazione-con-icone",children:"Navigazione con icone"}),`
`,e.jsxs(i.p,{children:["Puoi aggiungere link per la navigazione tra le pagine utilizzando gli slot ",e.jsx(i.code,{children:"prev"})," e ",e.jsx(i.code,{children:"next"})," per inserire link con icona, utilizzando le icone (ad esempio l'icona ",e.jsx(i.code,{children:"chevron"}),") disponibili nel Kit."]}),`
`,e.jsxs(i.p,{children:["Ricordati di aggiungere in questi casi, un elemento con classe ",e.jsx(i.code,{children:".visually-hidden"})," all'interno del link, per garantire una corretta comunicazione sulla funzionalità del pulsante per i lettori di schermo."]}),`
`,e.jsx(n,{of:c}),`
`,e.jsx(i.h2,{id:"navigazione-con-link-testuali",children:"Navigazione con link testuali"}),`
`,e.jsxs(i.p,{children:["I link di navigazione possono anche essere testuali. Utilizza gli slot ",e.jsx(i.code,{children:"prev"})," e ",e.jsx(i.code,{children:"next"})," per inserire link con testo personalizzato."]}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(i.h2,{id:"modalità-responsive",children:"Modalità responsive"}),`
`,e.jsx(i.p,{children:"In modalità responsive, attiva di default, gli elementi di paginazione non attivi vengono nascosti su schermi di piccole dimensioni per migliorare l'usabilità."}),`
`,e.jsx(i.p,{children:"Viene mostrato solo l'elemento della pagina corrente, mentre gli altri elementi diventano visibili su schermi più grandi."}),`
`,e.jsxs(i.p,{children:["Se vuoi disabilitare questo comportamento, aggiungi l'attributo ",e.jsx(i.code,{children:"disable-responsive"})," ad ",e.jsx(i.code,{children:"it-pagination"}),": dovrai poi gestire in modo autonomo l'aspetto della paginazione su schermi di diverse dimensioni."]}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(i.h2,{id:"numero-totale-di-pagine",children:"Numero totale di pagine"}),`
`,e.jsxs(i.p,{children:["Puoi aggiungere un indicatore del numero totale di pagine utilizzando lo slot ",e.jsx(i.code,{children:"total"})," e inserendo al suo interno un elemento ",e.jsx(i.code,{children:"<p>"})]}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(i.h2,{id:"more",children:"More"}),`
`,e.jsx(i.p,{children:"Quando è presente un grande numero di pagine è consigliabile visualizzare unicamente le pagine più prossime a quella corrente, inserendo delle ellissi (…) fra queste e la prima ed ultima pagina."}),`
`,e.jsxs(i.p,{children:["Puoi ottenere questo comportamento utilizzando l'attributo ",e.jsx(i.code,{children:"visible-pages"}),", di default impostato a 5, che indica il numero di pagine visibili intorno a quella corrente."]}),`
`,e.jsx(i.p,{children:"Il componente mostrerà automaticamente le ellissi quando necessario, oltre alla prima e ultima pagina disponibile."}),`
`,e.jsx(n,{of:g}),`
`,e.jsx(i.h2,{id:"simple-mode",children:"Simple mode"}),`
`,e.jsxs(i.p,{children:["Utilizza l'attributo ",e.jsx(i.code,{children:"simple-mode"})," per mostrare solo i pulsanti di navigazione alla pagina precedente e successiva, senza gli altri elementi di paginazione."]}),`
`,e.jsx(i.p,{children:"La paginazione in versione “Simple mode” è ottimizzata per i dispositivi mobile, e può essere utilizzata anche su tablet e desktop quando il numero di pagine è ridotto."}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(i.h2,{id:"selettore-elementi-per-pagina",children:"Selettore elementi per pagina"}),`
`,e.jsxs(i.p,{children:["Puoi aggiungere  un selettore per cambiare il numero di elementi mostrati per pagina attraverso lo slot ",e.jsx(i.code,{children:"page-changer"}),". Dovrai gestire in modo autonomo il comportamento del selettore e l'aggiornamento della paginazione in base al valore selezionato."]}),`
`,e.jsxs(i.p,{children:["Viene fornito un esempio di implementazione di un selettore con un elemento ",e.jsx(i.code,{children:"<select>"}),"."]}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(i.h2,{id:"salto-ad-una-pagina-specifica",children:"Salto ad una pagina specifica"}),`
`,e.jsxs(i.p,{children:["Puoi aggiungere un campo input per saltare direttamente a una pagina specifica utilizzando lo slot ",e.jsx(i.code,{children:"jump-to-page"}),". Dovrai gestire in modo autonomo il comportamento del campo di input e l'aggiornamento della paginazione in base al valore inserito."]}),`
`,e.jsxs(i.p,{children:["Viene fornito un esempio di implementazione di un campo di salto a pagina con un elemento ",e.jsx(i.code,{children:"<it-input>"})," di tipo numero."]}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(i.h2,{id:"allineamento",children:"Allineamento"}),`
`,e.jsxs(i.p,{children:["Puoi allineare il componente ",e.jsx(i.code,{children:"it-pagination"})," a sinistra (default), al centro o a destra, valorizzando l'attributo ",e.jsx(i.code,{children:"alignment"})," con i valori ",e.jsx(i.code,{children:"start"}),", ",e.jsx(i.code,{children:"center"})," o ",e.jsx(i.code,{children:"end"}),"."]}),`
`,e.jsx(i.h3,{id:"allineamento-a-sinistra",children:"Allineamento a sinistra"}),`
`,e.jsx(n,{of:z}),`
`,e.jsx(i.h3,{id:"allineamento-centrato",children:"Allineamento centrato"}),`
`,e.jsx(n,{of:v}),`
`,e.jsx(i.h3,{id:"allineamento-a-destra",children:"Allineamento a destra"}),`
`,e.jsx(n,{of:f}),`
`,e.jsx(i.h2,{id:"proprietà-metodi-ed-eventi-accessibili-via-js",children:"Proprietà, Metodi, ed Eventi accessibili via js"}),`
`,e.jsx(i.p,{children:"Il componente espone le seguenti proprietà, metodi ed eventi accessibili via JavaScript."}),`
`,e.jsx(i.h3,{id:"eventi",children:"Eventi"}),`
`,e.jsx(i.p,{children:"Il componente emette i seguenti eventi custom:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"it-pagination-change"}),": emesso quando la pagina corrente cambia. L'evento fornisce il numero della nuova pagina selezionata nel dettaglio dell'evento (",e.jsx(i.code,{children:"event.detail"}),")."]}),`
`]}),`
`,e.jsx(i.h2,{id:"personalizzazione-degli-stili",children:"Personalizzazione degli stili"}),`
`,e.jsxs(i.p,{children:["Per la personalizzazione degli stili si possono usare i selettori ",e.jsx(i.code,{children:"::part"})," dedicati di ",e.jsx(i.code,{children:"it-pagination"}),":"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"::part(pagination-list)"}),": per lo stile dell'elemento ",e.jsx(i.code,{children:"<ul>"})," che contiene gli elementi di paginazione"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"::part(current-page-simple-mode)"}),": per lo stile dell'elemento che rappresenta la pagina corrente in modalità simple"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"::part(total-pages-simple-mode)"}),": per lo stile dell'elemento che rappresenta il numero totale di pagine in modalità simple"]}),`
`]}),`
`,e.jsxs(i.p,{children:[e.jsx(i.a,{href:"/docs/personalizzazione-degli-stili--documentazione#selettore-part",children:"Vedi qui la guida dettagliata"}),"."]})]})}function C(a={}){const{wrapper:i}={...t(),...a.components};return i?e.jsx(i,{...a,children:e.jsx(l,{...a})}):l(a)}export{C as default};

import{j as e,M as c,C as a,a as r,D as d}from"./blocks-BmJ51On6.js";import{useMDXComponents as s}from"./index-CEGOQIeq.js";import{T as h,E as t,a as u,P as p,b as x,c as j,L as b,d as m,e as z,f as g,g as v,h as f,i as T,j as I,k as A,l as P,I as o}from"./it-tabs.stories-t0KdUhMc.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-Dq0Es6_d.js";function l(n){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:h}),`
`,e.jsx(i.h1,{id:"tabs",children:"Tabs"}),`
`,e.jsx("description",{children:"Contenitori con etichette per organizzare contenuti correlati in schede spearate all'interno della stessa sezione di pagina"}),`
`,e.jsx(i.h2,{id:"cosa-fa",children:"Cosa fa"}),`
`,e.jsx(i.p,{children:"Il componente Tabs serve a raggruppare e organizzare contenuti di natura diversa ma correlati fra di loro, consentendo agli utenti di navigare tra insiemi di informazioni senza uscire dal contesto. Puoi usarlo su layout a pagina intera o all'interno di altre strutture quali ad esempio modali, schede e pannelli laterali."}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"https://designers.italia.it/design-system/componenti/tabs/",rel:"nofollow",children:"Approfondisci quando e come usare il componente Tabs"})}),`
`,e.jsx(i.h3,{id:"alternative-a-questo-componente",children:"Alternative a questo componente"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"?path=/docs/componenti-accordion--documentazione",children:"Accordion"}),": visivamente più compatto, utile quando più sezioni devono essere espandibili contemporaneamente o quando ci sono molti contenuti verticali."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"?path=/docs/componenti-collapse--documentazione",children:"Collapse"}),": per una singola sezione di contenuto secondario da mostrare o nascondere."]}),`
`]}),`
`,e.jsx(i.h2,{id:"anteprima-e-attributi-del-componente",children:"Anteprima e attributi del componente"}),`
`,e.jsxs(i.p,{children:["Modifica gli attributi nella tabella per personalizzare in tempo reale l'aspetto e il comportamento del componente. Per vedere come cambia il codice, clicca su ",e.jsx(i.strong,{children:"Show code"}),"."]}),`
`,e.jsx(a,{of:t}),`
`,e.jsx(r,{of:t}),`
`,e.jsx(i.h2,{id:"indicazioni-generali",children:"Indicazioni generali"}),`
`,e.jsx(i.p,{children:"Il componente Tabs è composto da tre elementi:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"it-tabs"}),": contenitore principale che gestisce selezione, ARIA e navigazione da tastiera;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"it-tab"}),": singola scheda trigger, assegnata allo ",e.jsx(i.code,{children:'slot="tab"'}),". Testo o markup inseriti al suo interno rappresentano l'etichetta;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"it-tab-panel"}),": singolo pannello di contenuto; testo o markup inseriti al suo interno rappresentano il corpo della scheda."]}),`
`]}),`
`,e.jsx(i.p,{children:"Il collegamento tra trigger e pannello avviene tramite:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["attributo ",e.jsx(i.code,{children:'panel="nome"'})," su ",e.jsx(i.code,{children:"it-tab"})]}),`
`,e.jsxs(i.li,{children:["attributo ",e.jsx(i.code,{children:'name="nome"'})," su ",e.jsx(i.code,{children:"it-tab-panel"})]}),`
`]}),`
`,e.jsx(i.p,{children:e.jsxs(i.strong,{children:["Assicurati che ogni coppia ",e.jsx(i.code,{children:"it-tab"}),"/",e.jsx(i.code,{children:"it-tab-panel"})," in pagina abbia un valore univoco per questi attributi."]})}),`
`,e.jsx(i.h3,{id:"attributi-del-componente-it-tab",children:"Attributi del componente it-tab"}),`
`,e.jsxs(i.p,{children:["Puoi utilizzare l'attributo ",e.jsx(i.code,{children:"disabled"})," su ",e.jsx(i.code,{children:"it-tab"})," per disabilitare una scheda, rendendola non selezionabile e non raggiungibile da tastiera."]}),`
`,e.jsxs(i.p,{children:["Puoi utilizzare l'attributo ",e.jsx(i.code,{children:"active"})," su ",e.jsx(i.code,{children:"it-tab"})," per impostare una scheda come attiva di default all'inizializzazione."]}),`
`,e.jsx(i.h2,{id:"accessibilità",children:"Accessibilità"}),`
`,e.jsxs(i.p,{children:["Il componente implementa le specifiche del ",e.jsx(i.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/tabs/examples/tabs-automatic/",rel:"nofollow",children:"WAI-ARIA Authoring Practices - Tabs with Automatic Activation"}),`:
Il componente gestisce automaticamente gli attributi ARIA necessari per l'accessibilità, tra cui:`]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:'role="tablist"'})," sul contenitore, ",e.jsx(i.code,{children:'role="tab"'})," sui trigger, ",e.jsx(i.code,{children:'role="tabpanel"'})," sui pannelli;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"aria-selected"})," e roving tabindex su tastiera via frecce gestiti automaticamente;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"aria-controls"})," su ogni tab punta all'id del pannello associato;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"aria-labelledby"})," su ogni pannello punta all'id del bottone del tab corrispondente;"]}),`
`,e.jsxs(i.li,{children:["L'attributo ",e.jsx(i.code,{children:"label"})," su ",e.jsx(i.code,{children:"it-tabs"})," fornisce l'",e.jsx(i.code,{children:"aria-label"})," della tablist, ",e.jsx(i.strong,{children:"consigliato"})," in termini di accessibilità quando non è presente un'intestazione visiva adiacente. In tal caso, assegna un'id univoco all'intestazione e usa ",e.jsx(i.code,{children:"aria-labelledby"})," su ",e.jsx(i.code,{children:"it-tabs"})," per collegarla."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"aria-keyshortcuts"})," su ogni tab, dichiara le shortcut da tastiera supportate, che vengono lette dagli screen reader che supportano questo attributo ARIA all'accesso alla tablist. Indicazioni di fallback per screen reader che non supportano ",e.jsx(i.code,{children:"aria-keyshortcuts"})," sono associate all'attributo ",e.jsx(i.code,{children:"aria-description"})," del tab attivo, e lette all'accesso al pannello attivo."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"aria-description"})," con indicazioni di fallback per le shortcut da tastiera, lette da tutti gli screen reader all'accesso al pannello attivo. Il testo di questa descrizione è internazionalizzato e personalizzabile tramite la chiave ",e.jsx(i.code,{children:"closeActiveTabHint"}),"."]}),`
`]}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Tasto"}),e.jsx("th",{children:"Comportamento"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"Tab"})}),e.jsx("td",{children:"Porta il focus sulla tablist (sul tab attivo) o sul pannello attivo. Rispetta l'ordine semantico e non quello visivo."})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("code",{children:"→"})," / ",e.jsx("code",{children:"←"})," / ",e.jsx("code",{children:"↑"})," / ",e.jsx("code",{children:"↓"})]}),e.jsx("td",{children:"Sposta il focus al tab precedente/successivo su tutti i layout"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("code",{children:"Home"})," / ",e.jsx("code",{children:"End"})]}),e.jsx("td",{children:"Sposta il focus rispettivamente al primo o all'ultimo tab (gestisce in automatico i tab disabilitati)"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("code",{children:"Del"})," / ",e.jsx("code",{children:"Backspace"})]}),e.jsx("td",{children:"Nel caso delle tab rimuovibili, shortcut da tastiera per eliminare la tab selezionata. Su dispositivi mobile, la gesture collegata è Double Tap."})]})]})]}),`
`,e.jsx("div",{class:"callout callout-warning",children:e.jsxs("div",{class:"callout-inner",children:[e.jsx("div",{class:"callout-title",children:e.jsx("span",{class:"text",children:"Attributo label"})}),e.jsxs("p",{children:["Quando non è presente un'intestazione collegata ad ",e.jsx(i.code,{children:"it-tabs"})," tramite ",e.jsx(i.code,{children:"aria-labelledby"})," o un'intestazione, imposta sempre l'attributo ",e.jsx("code",{children:"label"})," su ",e.jsx("code",{children:"it-tabs"})," con una descrizione contestuale. Questo testo viene letto dagli screen reader all'accesso alla tablist."]})]})}),`
`,e.jsx(i.h2,{id:"posizionamento-e-allineamento",children:"Posizionamento e allineamento"}),`
`,e.jsxs(i.p,{children:["Il componente supporta diverse configurazioni di posizionamento e allineamento dei tab, controllate dall'attributo ",e.jsx(i.code,{children:"placement"}),"."]}),`
`,e.jsx(i.h3,{id:"tab-orizzontali-in-alto",children:"Tab orizzontali in alto"}),`
`,e.jsxs(i.p,{children:["Se non valorizzi l'attributo ",e.jsx(i.code,{children:"placement"}),", i tab orientati in orizzontale e sono dimensionati in base al contenuto."]}),`
`,e.jsx(a,{of:u}),`
`,e.jsx(i.h3,{id:"tab-orizzontali-in-basso",children:"Tab orizzontali in basso"}),`
`,e.jsxs(i.p,{children:["Utilizzando l'attributo ",e.jsx(i.code,{children:'placement="bottom"'}),", la tablist si posiziona sotto il contenuto. Il bordo attivo si sposta dal basso all'alto."]}),`
`,e.jsx(a,{of:p}),`
`,e.jsx(i.h3,{id:"tab-verticali-a-sinistra",children:"Tab verticali a sinistra"}),`
`,e.jsxs(i.p,{children:["Utilizzando l'attributo ",e.jsx(i.code,{children:'placement="start"'}),", la tablist verticale si posiziona a sinistra del contenuto."]}),`
`,e.jsx(a,{of:x}),`
`,e.jsx(i.h3,{id:"tab-verticali-a-destra",children:"Tab verticali a destra"}),`
`,e.jsxs(i.p,{children:["Utilizzando l'attributo ",e.jsx(i.code,{children:'placement="end"'}),", la tablist verticale si posiziona a destra del contenuto. Il bordo attivo si sposta sul lato sinistro."]}),`
`,e.jsx(a,{of:j}),`
`,e.jsx(i.h3,{id:"larghezza-tablist-verticale",children:"Larghezza tablist verticale"}),`
`,e.jsxs(i.p,{children:["Puoi controllare la larghezza delle tab verticali attraverso la custom property ",e.jsx(i.code,{children:"--it-tabs-nav-size"}),", il cui default è ",e.jsx(i.code,{children:"30%"})," . Questa custom property controlla il ",e.jsx(i.code,{children:"flex-basis"})," della tablist nei layout verticali, e accetta qualsiasi valore CSS valido per ",e.jsx(i.code,{children:"flex-basis"}),"."]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-css",children:`it-tabs { --it-tabs-nav-size: 220px; }
`})}),`
`,e.jsx(a,{of:b}),`
`,e.jsx(i.h2,{id:"tab-verticali-con-sfondo",children:"Tab verticali con sfondo"}),`
`,e.jsxs(i.p,{children:["Utilizzando l'attributo ",e.jsx(i.code,{children:"vertical-background"})," in combinazione con un posizionamento a destra o sinistra, il tab selezionato mostra uno sfondo primario chiaro."]}),`
`,e.jsx(a,{of:m}),`
`,e.jsx(i.h2,{id:"tab-a-tutta-larghezza",children:"Tab a tutta larghezza"}),`
`,e.jsxs(i.p,{children:["Puoi utilizzare l'attributo ",e.jsx(i.code,{children:"auto"})," per espandere i tab al fine di occupare l'intera larghezza disponibile. Su schermi molto piccoli, se le etichette superano la larghezza dello schermo, viene attivato lo scrolling orizzontale."]}),`
`,e.jsx(a,{of:z}),`
`,e.jsx(i.h2,{id:"tab-con-icona",children:"Tab con icona"}),`
`,e.jsx(i.p,{children:"Le etichette dei tab possono contenere icone, anche non associate a del testo."}),`
`,e.jsxs(i.p,{children:["In questo caso, ricordati sempre di associare un testo con classe ",e.jsx(i.code,{children:".visually-hidden"})," all'interno del tag del tab per garantire l'accessibilità agli screen reader, o di utilizzare l'attributo ",e.jsx(i.code,{children:"label"})," del componente ",e.jsx(i.code,{children:"it-icon"}),", se lo utilizzi come trigger senza testo visibile."]}),`
`,e.jsxs(i.p,{children:["Se vuoi variare la dimensione delle icone, utilizza l'attributo ",e.jsx(i.code,{children:"size"})," di ",e.jsx(i.code,{children:"it-icon"})," o personalizza la dimensione con CSS."]}),`
`,e.jsx(a,{of:g}),`
`,e.jsx(i.h2,{id:"tab-con-sfondo-scuro",children:"Tab con sfondo scuro"}),`
`,e.jsxs(i.p,{children:["Puoi utilizzare l'attributo ",e.jsx(i.code,{children:"dark"})," per ottenere una tablist con sfondo scuro."]}),`
`,e.jsx(a,{of:v}),`
`,e.jsx(a,{of:f}),`
`,e.jsx(i.h2,{id:"effetto-fade",children:"Effetto fade"}),`
`,e.jsxs(i.p,{children:["Puoi utilizzare l'attributo ",e.jsx(i.code,{children:"fade"})," di ",e.jsx(i.code,{children:"it-tabs"})," per fare in modo che i pannelli appaiano con un'animazione di dissolvenza al cambio tab."]}),`
`,e.jsx(a,{of:T}),`
`,e.jsx(i.h2,{id:"tab-tipo-card",children:"Tab tipo card"}),`
`,e.jsxs(i.p,{children:["Valorizzando l'attributo ",e.jsx(i.code,{children:"cards"}),', i tab assumono un design "card".']}),`
`,e.jsx(a,{of:I}),`
`,e.jsx(i.h2,{id:"tab-card-con-pulsanti-aggiungielimina",children:"Tab card con pulsanti aggiungi/elimina"}),`
`,e.jsxs(i.p,{children:["Puoi utilizzare l'attributo ",e.jsx(i.code,{children:"cards"})," in combinazione con ",e.jsx(i.code,{children:"dismissible"})," per ottenere tab di tipo card con pulsante di chiusura integrato. In questo modo, ogni tab diventa rimovibile, e viene aggiunta una icona × all'interno di ogni ",e.jsx(i.code,{children:"it-tab"}),"."]}),`
`,e.jsxs(i.p,{children:["In questa configurazione, al click, al double tap da mobile o attraverso le shortcut da tastiera ",e.jsx(i.code,{children:"Delete"})," e ",e.jsx(i.code,{children:"Backspace"})," quando un tab è in focus, il tab emette l'evento cancellabile ",e.jsx(i.code,{children:"it-tab-close"})," con ",e.jsx(i.code,{children:"detail.panel"})," e, se non viene chiamato ",e.jsx(i.code,{children:"preventDefault()"}),", ",e.jsx(i.strong,{children:"rimuove automaticamente"})," ",e.jsx(i.code,{children:"it-tab"})," e ",e.jsx(i.code,{children:"it-tab-panel"})," dal DOM."]}),`
`,e.jsx(i.p,{children:"Il focus si sposta sul tab adiacente (successivo o, se non esiste, precedente) prima della rimozione, seguendo il pattern WAI-ARIA APG."}),`
`,e.jsx(a,{of:A}),`
`,e.jsx(i.h3,{id:"tab-card-con-pulsanti-aggiungielimina-e-logica-personalizzata",children:"Tab card con pulsanti aggiungi/elimina e logica personalizzata"}),`
`,e.jsxs(i.p,{children:["Puoi intercettare l'evento ",e.jsx(i.code,{children:"it-tab-close"})," per implementare una logica personalizzata al momento della chiusura di un tab, ad esempio per mostrare una conferma modale prima di procedere con la rimozione. In questo caso, è importante chiamare ",e.jsx(i.code,{children:"preventDefault()"})," sull'evento per bloccare la rimozione automatica, e gestire tu stesso la rimozione del tab in caso di conferma positiva da parte dell'utente."]}),`
`,e.jsxs(i.p,{children:["Per aggiungere tab dinamicamente con logica personalizzata, puoi utilizzare un pulsante ",e.jsx(i.code,{children:"it-button"})," con ",e.jsx(i.code,{children:'slot="after-tablist"'}),", e gestire l'aggiunta di un tab con un event listener che esegue la tua logica e invoca il metodo pubblico ",e.jsx(i.code,{children:"addTab(tab, panel)"}),"esposto dal componente."]}),`
`,e.jsx(i.p,{children:"Esplora l'esempio completo con logica personalizzata di conferma prima della chiusura e aggiunta dinamica di tab:"}),`
`,e.jsx(a,{of:P}),`
`,e.jsx(i.h2,{id:"proprietà-metodi-ed-eventi-accessibili-via-js",children:"Proprietà, Metodi, ed Eventi accessibili via JS"}),`
`,e.jsx(i.p,{children:"Il componente espone i seguenti metodi e eventi accessibili via JavaScript."}),`
`,e.jsx(i.h3,{id:"metodi",children:"Metodi"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"close(panelId: string)"})," - chiude il tab con id corrispondente al ",e.jsx(i.code,{children:"panelId"})," passato, disattivando il tab e nascondendo il pannello. Se il tab è già chiuso o non esiste, non fa nulla."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"addTab(tab: ItTab, panel: ItTabPanel)"})," - aggiunge dinamicamente un nuovo tab e pannello al componente. Il parametro ",e.jsx(i.code,{children:"tab"})," è un elemento ",e.jsx(i.code,{children:"it-tab"})," con attributo ",e.jsx(i.code,{children:'slot="tab"'})," e ",e.jsx(i.code,{children:'panel="nome"'}),", mentre ",e.jsx(i.code,{children:"panel"})," è un elemento ",e.jsx(i.code,{children:"it-tab-panel"})," con attributo ",e.jsx(i.code,{children:'name="nome"'}),". Il metodo si occupa di inserire correttamente i nuovi elementi nel DOM e di aggiornare la logica di selezione."]}),`
`]}),`
`,e.jsx(i.h3,{id:"eventi",children:"Eventi"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"it-tab-close"})," — emesso quando un tab con pulsante di chiusura viene chiuso tramite click, doppio tap da mobile o shortcut da tastiera. L'evento è cancellabile e contiene ",e.jsx(i.code,{children:"detail.panel"})," con l'id del pannello associato al tab chiuso."]}),`
`]}),`
`,e.jsx(i.h2,{id:"",children:o.name}),`
`,e.jsx(d,{of:o}),`
`,e.jsx(i.h2,{id:"personalizzazione-degli-stili",children:"Personalizzazione degli stili"}),`
`,e.jsxs(i.p,{children:["Per personalizzare gli stili, puoi usare i selettori ",e.jsx(i.code,{children:"::part"})," dedicati:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"it-tab::part(trigger)"})," - scheda trigger;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"it-tab-panel::part(panel)"})," - contenitore del corpo di ogni pannello."]}),`
`]}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"/docs/personalizzazione-degli-stili--documentazione#selettore-part",children:"Vai alla guida sul selettore part"})})]})}function D(n={}){const{wrapper:i}={...s(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(l,{...n})}):l(n)}export{D as default};

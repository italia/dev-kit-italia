import{j as e,M as c,C as a,a as r,D as d}from"./blocks-CRFIrLVd.js";import{useMDXComponents as l}from"./index--O4jdOk5.js";import{T as h,E as t,a as p,P as u,b as x,c as j,L as b,d as m,e as z,f as g,g as v,h as f,i as T,j as I,k as P,l as A,I as o}from"./it-tabs.stories-CKgFEh9Z.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-CPP02t7X.js";function s(n){const i={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:h}),`
`,e.jsx(i.h1,{id:"tabs",children:"Tabs"}),`
`,e.jsx("description",{children:"Contenitori con etichette per organizzare contenuti correlati in schede spearate all'interno della stessa sezione di pagina."}),`
`,e.jsx(i.h2,{id:"cosa-fa",children:"Cosa fa"}),`
`,e.jsxs(i.p,{children:["Il componente Tabs (",e.jsx(i.code,{children:"it-tabs"}),") organizza contenuti correlati in sezioni distinte e consente agli utenti di passare da una sezione all'altra senza uscire dal contesto della pagina. Puoi usarlo sia all'interno di un layout a pagina intera sia all'interno di altri componenti, come modali e pannelli laterali."]}),`
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
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"it-tabs"}),", il contenitore principale che gestisce la selezione delle schede, gli attributi ARIA e la navigazione da tastiera;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"it-tab"}),", la singola scheda trigger assegnata allo ",e.jsx(i.code,{children:'slot="tab"'}),", con il testo o il markup dell'etichetta al suo interno;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"it-tab-panel"}),", il pannello con il testo o il markup del contenuto."]}),`
`]}),`
`,e.jsx(i.p,{children:"Il collegamento tra trigger e pannello avviene tramite:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["attributo ",e.jsx(i.code,{children:'panel="nome"'})," su ",e.jsx(i.code,{children:"it-tab"}),";"]}),`
`,e.jsxs(i.li,{children:["attributo ",e.jsx(i.code,{children:'name="nome"'})," su ",e.jsx(i.code,{children:"it-tab-panel"}),"."]}),`
`]}),`
`,e.jsx(i.p,{children:e.jsxs(i.strong,{children:["Assicurati che ogni coppia ",e.jsx(i.code,{children:"it-tab"}),"/",e.jsx(i.code,{children:"it-tab-panel"})," in pagina abbia un valore univoco per questi attributi."]})}),`
`,e.jsx(i.h3,{id:"attributi-del-componente-it-tab",children:"Attributi del componente it-tab"}),`
`,e.jsxs(i.p,{children:["Usa l'attributo ",e.jsx(i.code,{children:"disabled"})," su ",e.jsx(i.code,{children:"it-tab"})," per disabilitare una scheda e impedirne la selezione e la navigazione da tastiera."]}),`
`,e.jsxs(i.p,{children:["Usa l'attributo ",e.jsx(i.code,{children:"active"})," su ",e.jsx(i.code,{children:"it-tab"})," per impostare la scheda che si attiva di default al caricamento del componente."]}),`
`,e.jsx(i.h2,{id:"accessibilità",children:"Accessibilità"}),`
`,e.jsxs(i.p,{children:["Il componente implementa le specifiche ",e.jsx(i.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/tabs/examples/tabs-automatic/",rel:"nofollow",children:"WAI-ARIA Authoring Practices - Tabs with Automatic Activation"})," e gestisce automaticamente gli attributi ARIA necessari per garantire l'accessibilità, tra cui:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:'role="tablist"'})," sul contenitore, ",e.jsx(i.code,{children:'role="tab"'})," sulle schede e ",e.jsx(i.code,{children:'role="tabpanel"'})," sui pannelli;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"aria-selected"})," e il ",e.jsx(i.em,{children:"roving tabindex"})," per la navigazione da tastiera con i tasti freccia;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"aria-controls"})," su ogni scheda, associato all'",e.jsx(i.code,{children:"id"})," del pannello corrispondente;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"aria-labelledby"})," su ogni pannello, associato all'",e.jsx(i.code,{children:"id"})," del pulsante della scheda corrispondente;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"label"})," su ",e.jsx(i.code,{children:"it-tabs"}),", che fornisce l'",e.jsx(i.code,{children:"aria-label"})," della tablist quando non c'è un'intestazione visibile;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"aria-keyshortcuts"})," su ogni scheda, che espone le scorciatoie da tastiera ai lettori di schermo che supportano questo attributo all'accesso alla tablist;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"aria-description"}),", che fornisce indicazioni di fallback per le scorciatoie da tastiera ai lettori di schemo che non supportano ",e.jsx(i.code,{children:"aria-keyshortcuts"}),". Il testo è internazionalizzato e puoi personalizzarlo tramite la chiave ",e.jsx(i.code,{children:"closeActiveTabHint"}),"."]}),`
`]}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Tasto"}),e.jsx("th",{children:"Comportamento"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"Tab"})}),e.jsx("td",{children:"Porta il focus sulla tablist (sul tab attivo) o sul pannello attivo. Rispetta l'ordine semantico e non quello visivo."})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("code",{children:"→"})," / ",e.jsx("code",{children:"←"})," / ",e.jsx("code",{children:"↑"})," / ",e.jsx("code",{children:"↓"})]}),e.jsx("td",{children:"Sposta il focus al tab precedente/successivo su tutti i layout"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("code",{children:"Home"})," / ",e.jsx("code",{children:"End"})]}),e.jsx("td",{children:"Sposta il focus rispettivamente al primo o all'ultimo tab (gestisce in automatico i tab disabilitati)"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("code",{children:"Del"})," / ",e.jsx("code",{children:"Backspace"})]}),e.jsx("td",{children:"Nel caso delle tab rimuovibili, shortcut da tastiera per eliminare la tab selezionata. Su dispositivi mobile, la gesture collegata è Double Tap."})]})]})]}),`
`,e.jsx("div",{class:"callout callout-warning",children:e.jsxs("div",{class:"callout-inner",children:[e.jsx("div",{class:"callout-title",children:e.jsx("span",{class:"text",children:"Nome accessibile della tablist"})}),e.jsxs("p",{children:["La tablist deve sempre avere un nome accessibile. Se è presente un'intestazione visibile che descrive il gruppo di schede, collegala a ",e.jsx(i.code,{children:"it-tabs"})," tramite ",e.jsx(i.code,{children:"aria-labelledby"}),". Se invece non è presente un'intestazione, usa l'attributo ",e.jsx(i.code,{children:"label"}),", che il componente utilizza automaticamente come nome accessibile della tablist."]})]})}),`
`,e.jsx(i.h2,{id:"posizionamento-e-allineamento",children:"Posizionamento e allineamento"}),`
`,e.jsxs(i.p,{children:["Il componente supporta diverse configurazioni di posizionamento e allineamento dei tab, tramite l'attributo ",e.jsx(i.code,{children:"placement"}),"."]}),`
`,e.jsx(i.h3,{id:"tab-orizzontali-in-alto",children:"Tab orizzontali in alto"}),`
`,e.jsx(i.p,{children:"Per posizionare la tablist sopra il contenuto, non valorizzare l'attributo placement. I tab vengono disposti orizzontalmente e si adattando al contenuto."}),`
`,e.jsx(a,{of:p}),`
`,e.jsx(i.h3,{id:"tab-orizzontali-in-basso",children:"Tab orizzontali in basso"}),`
`,e.jsx(i.p,{children:`Per posizionare la tablist sotto il contenuto, usa l'attributo placement="bottom". Il bordo attivo si sposta dal basso all'alto.`}),`
`,e.jsx(a,{of:u}),`
`,e.jsx(i.h3,{id:"tab-verticali-a-sinistra",children:"Tab verticali a sinistra"}),`
`,e.jsxs(i.p,{children:["Per posizionare la tablist a sinistra del contenuto, usa l'attributo ",e.jsx(i.code,{children:'placement="start"'}),"."]}),`
`,e.jsx(a,{of:x}),`
`,e.jsx(i.h3,{id:"tab-verticali-a-destra",children:"Tab verticali a destra"}),`
`,e.jsxs(i.p,{children:["Per posizionare la tablist a destra del contenuto, usa l'attributo ",e.jsx(i.code,{children:'placement="end"'}),". Il bordo attivo si sposta sul lato sinistro."]}),`
`,e.jsx(a,{of:j}),`
`,e.jsx(i.h3,{id:"larghezza-tablist-verticale",children:"Larghezza tablist verticale"}),`
`,e.jsxs(i.p,{children:["Per modificare la larghezza della tablist nei layout verticali, usa la custom property ",e.jsx(i.code,{children:"--it-tabs-nav-size"}),". Il valore predefinito è ",e.jsx(i.code,{children:"30%"}),"."]}),`
`,e.jsxs(i.p,{children:["La custom property controlla il valore di ",e.jsx(i.code,{children:"flex-basis"})," della tablist e accetta qualsiasi valore CSS valido per questa proprietà."]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-css",children:`it-tabs { --it-tabs-nav-size: 220px; }
`})}),`
`,e.jsx(a,{of:b}),`
`,e.jsx(i.h2,{id:"tab-verticali-con-sfondo",children:"Tab verticali con sfondo"}),`
`,e.jsxs(i.p,{children:["Per applicare uno sfondo primario chiaro al tab selezionato nei layout verticali, usa l'attributo ",e.jsx(i.code,{children:"vertical-background"})," in combinazione con un posizionamento a destra o a sinistra."]}),`
`,e.jsx(a,{of:m}),`
`,e.jsx(i.h2,{id:"tab-a-tutta-larghezza",children:"Tab a tutta larghezza"}),`
`,e.jsxs(i.p,{children:["Per espandere i tab fino a occupare tutta la larghezza disponibile, usa l'attributo ",e.jsx(i.code,{children:"auto"}),". Su schermi molto piccoli, quando le etichette superano lo spazio disponibile, il componente attiva lo scorrimento orizzontale."]}),`
`,e.jsx(a,{of:z}),`
`,e.jsx(i.h2,{id:"tab-con-icona",children:"Tab con icona"}),`
`,e.jsx(i.p,{children:"Le etichette dei tab possono contenere icone, anche senza testo visibile."}),`
`,e.jsxs(i.p,{children:["Quando usi un'icona senza testo visibile, inserisci sempre un testo descrittivo con classe ",e.jsx(i.code,{children:".visually-hidden"})," all'interno del tab, così da fornire un'etichetta accessibile ai lettori di schermo. In alternativa, se utilizzi ",e.jsx(i.code,{children:"it-icon"})," come trigger senza testo visibile, fornisci il testo descrittivo tramite l'attributo ",e.jsx(i.code,{children:"label"})," del componente."]}),`
`,e.jsxs(i.p,{children:["Per modificare la dimensione delle icone, usa l'attributo ",e.jsx(i.code,{children:"size"})," di ",e.jsx(i.code,{children:"it-icon"})," oppure personalizzala tramite CSS."]}),`
`,e.jsx(a,{of:g}),`
`,e.jsx(i.h2,{id:"tab-con-sfondo-scuro",children:"Tab con sfondo scuro"}),`
`,e.jsxs(i.p,{children:["Per applicare sfondo scuro alla tablist, usa l'attributo ",e.jsx(i.code,{children:"dark"}),"."]}),`
`,e.jsx(a,{of:v}),`
`,e.jsx(a,{of:f}),`
`,e.jsx(i.h2,{id:"effetto-fade",children:"Effetto fade"}),`
`,e.jsxs(i.p,{children:["Per aggiungere un'animazione di dissolvenza al cambio tab, usa l'attributo ",e.jsx(i.code,{children:"fade"})," di ",e.jsx(i.code,{children:"it-tabs"})," per fare in modo che i pannelli appaiano con un'animazione di dissolvenza al cambio tab."]}),`
`,e.jsx(a,{of:T}),`
`,e.jsx(i.h2,{id:"tab-tipo-card",children:"Tab tipo card"}),`
`,e.jsxs(i.p,{children:["Per applicare lo stile card ai tab, usa l'attributo ",e.jsx(i.code,{children:"cards"}),"."]}),`
`,e.jsx(a,{of:I}),`
`,e.jsx(i.h2,{id:"tab-card-con-pulsanti-aggiungielimina",children:"Tab card con pulsanti aggiungi/elimina"}),`
`,e.jsxs(i.p,{children:["Per ottenere tab di tipo card rimovibili con pulsante di chiusura, usa l'attributo ",e.jsx(i.code,{children:"cards"})," in combinazione con ",e.jsx(i.code,{children:"dismissible"}),`. Ogni it-tab includerà un'icona "×" per la chiusura.`]}),`
`,e.jsxs(i.p,{children:["In questa configurazione, al clic, al double tap da mobile o attraverso le scorciatoie da tastiera ",e.jsx(i.code,{children:"Delete"})," e ",e.jsx(i.code,{children:"Backspace"})," con un tab in focus, il tab emette l'evento cancellabile ",e.jsx(i.code,{children:"it-tab-close"})," con ",e.jsx(i.code,{children:"detail.panel"})," e, se non viene chiamato ",e.jsx(i.code,{children:"preventDefault()"}),", ",e.jsx(i.strong,{children:"rimuove automaticamente"})," ",e.jsx(i.code,{children:"it-tab"})," e ",e.jsx(i.code,{children:"it-tab-panel"})," dal DOM."]}),`
`,e.jsx(i.p,{children:"Il focus si sposta sul tab adiacente (successivo o, se non esiste, precedente) prima della rimozione, seguendo il pattern WAI-ARIA APG."}),`
`,e.jsx(a,{of:P}),`
`,e.jsx(i.h3,{id:"tab-card-con-pulsanti-aggiungielimina-e-logica-personalizzata",children:"Tab card con pulsanti aggiungi/elimina e logica personalizzata"}),`
`,e.jsxs(i.p,{children:["Puoi intercettare l'evento ",e.jsx(i.code,{children:"it-tab-close"})," per implementare una logica personalizzata alla chiusura di un tab, ad esempio per mostrare una conferma modale prima di procedere con la rimozione. In questo caso, chiama ",e.jsx(i.code,{children:"preventDefault()"})," sull'evento per bloccare la rimozione automatica e gestisci manualmente la rimozione del tab in caso di conferma positiva da parte dell'utente."]}),`
`,e.jsxs(i.p,{children:["Per aggiungere tab dinamicamente con logica personalizzata, puoi utilizzare un pulsante ",e.jsx(i.code,{children:"it-button"})," con ",e.jsx(i.code,{children:'slot="after-tablist"'}),", e gestire l'aggiunta di un tab con un event listener che esegue la tua logica e invoca il metodo pubblico ",e.jsx(i.code,{children:"addTab(tab, panel)"}),"esposto dal componente."]}),`
`,e.jsxs(i.p,{children:["Per aggiungere tab dinamicamente con logica personalizzata, usa un pulsante ",e.jsx(i.code,{children:"it-button"})," con ",e.jsx(i.code,{children:'slot="after-tablist"'})," e gestisci l'aggiunta del nuovo tab tramite un event listener. Questa configurazione esegue la tua logica e invoca il metodo pubblico ",e.jsx(i.code,{children:"addTab(tab, panel)"}),"esposto dal componente."]}),`
`,e.jsx(i.p,{children:"Ecco un esempio completo con logica personalizzata di conferma prima della chiusura e aggiunta dinamica di tab:"}),`
`,e.jsx(a,{of:A}),`
`,e.jsx(i.h2,{id:"proprietà-metodi-ed-eventi-accessibili-via-js",children:"Proprietà, metodi ed eventi accessibili via JS"}),`
`,e.jsx(i.p,{children:"Il componente espone i seguenti metodi e eventi accessibili via JavaScript."}),`
`,e.jsx(i.h3,{id:"metodi",children:"Metodi"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"close(panelId: string)"})," chiude il tab con id corrispondente al ",e.jsx(i.code,{children:"panelId"})," passato, disattivando il tab e nascondendo il pannello. Se il tab è già chiuso o non esiste, non fa nulla."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"addTab(tab: ItTab, panel: ItTabPanel)"})," aggiunge dinamicamente un nuovo tab e pannello al componente. Il parametro ",e.jsx(i.code,{children:"tab"})," è un elemento ",e.jsx(i.code,{children:"it-tab"})," con attributo ",e.jsx(i.code,{children:'slot="tab"'})," e ",e.jsx(i.code,{children:'panel="nome"'}),", mentre ",e.jsx(i.code,{children:"panel"})," è un elemento ",e.jsx(i.code,{children:"it-tab-panel"})," con attributo ",e.jsx(i.code,{children:'name="nome"'}),". Il metodo si occupa di inserire correttamente i nuovi elementi nel DOM e di aggiornare la logica di selezione."]}),`
`]}),`
`,e.jsx(i.h3,{id:"eventi",children:"Eventi"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"it-tab-close"}),", emesso quando un tab con pulsante di chiusura viene chiuso tramite clic, doppio tap da mobile o shortcut da tastiera. L'evento è cancellabile e contiene ",e.jsx(i.code,{children:"detail.panel"})," con l'id del pannello associato al tab chiuso."]}),`
`]}),`
`,e.jsx(i.h2,{id:"",children:o.name}),`
`,e.jsx(d,{of:o}),`
`,e.jsx(i.h2,{id:"personalizzazione-degli-stili",children:"Personalizzazione degli stili"}),`
`,e.jsxs(i.p,{children:["Per personalizzare gli stili, puoi usare i selettori ",e.jsx(i.code,{children:"::part"})," dedicati:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"it-tab::part(trigger)"})," - scheda trigger;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"it-tab-panel::part(panel)"})," - contenitore del corpo di ogni pannello."]}),`
`]}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"/docs/personalizzazione-degli-stili--documentazione#selettore-part",children:"Vai alla guida sul selettore part"})})]})}function k(n={}){const{wrapper:i}={...l(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(s,{...n})}):s(n)}export{k as default};

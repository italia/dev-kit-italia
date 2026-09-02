import{j as e,M as c,C as n,a as l}from"./blocks-CToh_lwI.js";import{useMDXComponents as s}from"./index-Bhsl1YDk.js";import{A as d,E as a,a as r,S as p,H as h,b as u,I as m,c as x}from"./it-accordion.stories-CxX3l1wc.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-Cl3Kz-XE.js";function t(o){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:d}),`
`,e.jsx(i.h1,{id:"accordion",children:"Accordion"}),`
`,e.jsx("description",{children:"Sezione di contenuti espandibile e richiudibile per ottimizzare spazio su pagina e creare collegamenti con contenuti correlati."}),`
`,e.jsx(i.h2,{id:"cosa-fa",children:"Cosa fa"}),`
`,e.jsx(i.p,{children:"Il componente Accordion permette di espandere e collassare delle sezioni con contenuti molto lunghi e non principali, raggruppandole in una unica interfaccia. L’intestazione delle sezioni dà una panoramica dei contenuti e permette all’utente di scegliere quali leggere."}),`
`,e.jsxs(i.p,{children:["Il componente Accordion è basato su ",e.jsx(i.a,{href:"?path=/docs/componenti-collapse--documentazione",children:"Collapse"}),"."]}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"https://designers.italia.it/design-system/componenti/accordion/",rel:"nofollow",children:"Approfondisci quando e come usare il componente Accordion"})}),`
`,e.jsx(i.h3,{id:"alternative-a-questo-componente",children:"Alternative a questo componente"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[`
`,e.jsxs(i.p,{children:[e.jsx(i.a,{href:"?path=/docs/componenti-collapse--documentazione",children:"Collapse"}),": visivamente meno prominente, utile quando ci sono una o due sezioni di contenuti brevi meno importanti."]}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsx(i.p,{children:"Tabs: mostrano i contenuti senza spingere altre sezioni verso il fondo della pagina e sono utili quando l'utente deve passare velocemente da una sezone all'altra."}),`
`]}),`
`]}),`
`,e.jsx(i.h2,{id:"anteprima-e-attributi-del-componente",children:"Anteprima e attributi del componente"}),`
`,e.jsxs(i.p,{children:["Modifica gli attributi nella tabella per personalizzare in tempo reale l'aspetto e il comportamento del componente. Per vedere come cambia il codice, clicca su ",e.jsx(i.strong,{children:"Show code"}),"."]}),`
`,e.jsx(n,{of:a}),`
`,e.jsx(l,{of:a}),`
`,e.jsx(i.h2,{id:"indicazioni-generali",children:"Indicazioni generali"}),`
`,e.jsx(i.p,{children:"Il componente Accordion è composto da due elementi:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"it-accordion"}),": contenitore che raggruppa più elementi richiudibili;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"it-accordion-item"}),": singolo elemento richiudibile all'interno dell'accordion."]}),`
`]}),`
`,e.jsx(i.h2,{id:"elemento-richiudibile",children:"Elemento richiudibile"}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"it-accordion-item"})," rappresenta il singolo elemento richiudibile all'interno dell'accordion."]}),`
`,e.jsxs(i.p,{children:["Ogni ",e.jsx(i.code,{children:"it-accordion-item"})," utilizza due slot distinti per definire intestazione e contenuto:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:'slot="heading"'}),": ",e.jsx(i.strong,{children:"obbligatorio"}),", il testo da mostrare nell'header dell'elemento;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:'slot="content"'}),": ",e.jsx(i.strong,{children:"obbligatorio"}),", il contenuto da mostrare o nascondere."]}),`
`]}),`
`,e.jsxs(i.p,{children:["Modifica gli attributi nella tabella per personalizzare in tempo reale l'aspetto e il comportamento del componente ",e.jsx(i.code,{children:"it-accordion-item"}),". Per vedere come cambia il codice, clicca su ",e.jsx(i.strong,{children:"Show code"}),"."]}),`
`,e.jsx(n,{of:r}),`
`,e.jsx(l,{of:r}),`
`,e.jsx(i.h2,{id:"accessibilità",children:"Accessibilità"}),`
`,e.jsxs(i.p,{children:["L'Accordion implementa le specifiche ARIA ",e.jsx(i.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/accordion/",rel:"nofollow",children:"WAI-ARIA Authoring Practices 1.1 accordion pattern"})," per garantire un'esperienza accessibile a tutti gli utenti:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"navigazione da tastiera con tasti freccia per spostarsi tra gli elementi;"}),`
`,e.jsxs(i.li,{children:["supporto per ",e.jsx(i.code,{children:"Space"})," e ",e.jsx(i.code,{children:"Enter"})," per attivare/disattivare elementi;"]}),`
`,e.jsx(i.li,{children:"attributi ARIA appropriati per comunicare lo stato agli screen reader;"}),`
`,e.jsx(i.li,{children:"heading semantici configurabili per una corretta struttura del documento;"}),`
`,e.jsx(i.li,{children:"rispetto delle preferenze di riduzione del movimento definite dall'utente per le animazioni di apertura/chiusura."}),`
`]}),`
`,e.jsx(i.h2,{id:"modalità-esclusiva",children:"Modalità esclusiva"}),`
`,e.jsx(i.p,{children:"Di default, più sezioni dell'accordion possono essere aperte contemporaneamente."}),`
`,e.jsx(i.p,{children:"In modalità esclusiva, solo una sezione alla volta dell'accordion può essere aperta. Quando si espande una nuova sezione, quella precedentemente aperta si chiude automaticamente."}),`
`,e.jsxs(i.p,{children:["Per abilitare la modalità esclusiva, assegna all'attributo ",e.jsx(i.code,{children:"mode"})," il valore ",e.jsx(i.code,{children:"single"}),"."]}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(i.h2,{id:"sfondo-degli-elementi-attivi",children:"Sfondo degli elementi attivi"}),`
`,e.jsx(i.p,{children:"Gli elementi dell'accordion possono mostrare uno sfondo primario quando la sezione corrispondente è attiva (aperta)."}),`
`,e.jsxs(i.p,{children:["Per applicare lo sfondo primario agli elementi attivi, imposta l'attributo ",e.jsx(i.code,{children:"background-active"})," sull'elemento ",e.jsx(i.code,{children:"it-accordion"}),"."]}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(i.h2,{id:"sfondo-allhover-degli-elementi",children:"Sfondo all'hover degli elementi"}),`
`,e.jsx(i.p,{children:"Gli elementi dell'accordion possono mostrare uno sfondo primario al passaggio del mouse."}),`
`,e.jsxs(i.p,{children:["Per applicare lo sfondo primario agli elementi al passaggio del mouse, imposta l'attributo ",e.jsx(i.code,{children:"background-hover"})," sull'elemento ",e.jsx(i.code,{children:"it-accordion"}),"."]}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(i.h2,{id:"icona-a-sinistra",children:"Icona a sinistra"}),`
`,e.jsx(i.p,{children:"L'icona di espansione/collasso può essere posizionata a sinistra del testo dell'header."}),`
`,e.jsxs(i.p,{children:["Impostando l'attributo ",e.jsx(i.code,{children:"left-icon"})," sull'elemento ",e.jsx(i.code,{children:"<it-accordion>"}),", puoi ottenere una variante in cui l’icona chevron che indica lo stato di apertura è sostituita da segni meno/più allineati a sinistra del titolo dell’header."]}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(i.h2,{id:"accordion-annidati",children:"Accordion annidati"}),`
`,e.jsx(i.p,{children:"Puoi annidare accordion all'interno di altri accordion per creare strutture gerarchiche complesse."}),`
`,e.jsx("div",{class:"callout callout-warning",children:e.jsxs("div",{class:"callout-inner",children:[e.jsx("div",{class:"callout-title",children:e.jsx("span",{class:"text",children:"Accessibilità e accordion annidati"})}),e.jsx("p",{children:e.jsx(i.p,{children:"Usa questo approccio solo quando strettamente necessario: dal punto di vista dell'accessibilità non si tratta di una soluzione ottimale."})})]})}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(i.h2,{id:"personalizzazione-degli-stili",children:"Personalizzazione degli stili"}),`
`,e.jsxs(i.p,{children:["Per personalizzare gli stili, puoi usare i selettori ",e.jsx(i.code,{children:"::part"})," dedicati:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"::part(trigger)"})," - elemento trigger di ogni sezione;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"::part(content)"})," - elemento contenitore del corpo di ogni sezione."]}),`
`]}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"/docs/personalizzazione-degli-stili--documentazione#selettore-part",children:"Vai alla guida sul selettore part"})})]})}function b(o={}){const{wrapper:i}={...s(),...o.components};return i?e.jsx(i,{...o,children:e.jsx(t,{...o})}):t(o)}export{b as default};

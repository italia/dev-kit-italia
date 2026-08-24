import{j as e,M as t,C as n,a as s}from"./blocks-CiljGaP5.js";import{useMDXComponents as l}from"./index-dC3epPjb.js";import{S as c,E as r,V as d,H as h,a as m,b as u,c as p,O as x,d as j,e as g,f as v,G as f,g as z,h as b}from"./it-thumbnav.stories-Blm5aCzN.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-BIx49rSp.js";function o(a){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:c}),`
`,e.jsx(i.h1,{id:"thumbnav",children:"Thumbnav"}),`
`,e.jsx("description",{children:"Raccoglitore di miniature di immagini per facilitare la visualizzazione e la navigazione di contenuti multipli"}),`
`,e.jsx(i.h2,{id:"cosa-fa",children:"Cosa fa"}),`
`,e.jsx(i.p,{children:"Il componente Thumbnav può essere utilizzato per fornire una navigazione rapida tra immagini in un formato compatto e visivamente interessante, come ad esempio tra le immagini di una galleria."}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"https://designers.italia.it/design-system/componenti/thumbnav/",rel:"nofollow",children:"Approfondisci quando e come usare il componente Thumbnav"})}),`
`,e.jsx(i.h2,{id:"anteprima-e-attributi-del-componente",children:"Anteprima e attributi del componente"}),`
`,e.jsxs(i.p,{children:[`Modifica gli attributi nella tabella per personalizzare in tempo reale l'aspetto e il comportamento del componente.
Per vedere come cambia il codice, clicca su `,e.jsx(i.strong,{children:"Show code"}),"."]}),`
`,e.jsxs(i.p,{children:["L'attributo ",e.jsx(i.code,{children:"position"})," non ha effetto in questa anteprima: richiede una struttura HTML specifica con un contenitore esterno. Vedi la sezione ",e.jsx(i.a,{href:"#posizione-in-overlay",children:"Posizione in overlay"})," per gli esempi dedicati."]}),`
`,e.jsx(n,{of:r}),`
`,e.jsx(s,{of:r}),`
`,e.jsx(i.h2,{id:"indicazioni-generali",children:"Indicazioni generali"}),`
`,e.jsx(i.p,{children:"Il componente Thumbnav è composto da due elementi:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"it-thumbnav"}),": contenitore che raggruppa le thumbnail e gestisce il layout;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"it-thumbnav-item"}),": singolo elemento, che accetta nello slot un anchor con immagine."]}),`
`]}),`
`,e.jsxs(i.p,{children:["Inserisci nell'anchor la classe Bootstrap Italia ",e.jsx(i.code,{children:".ratio"})," per mantenere un rapporto d'aspetto consistente:"]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<it-thumbnav>
  <it-thumbnav-item>
    <a href="#" class="ratio ratio-3x2">
      <img src="…" alt="Visualizza immagine 1">
    </a>
  </it-thumbnav-item>
</it-thumbnav>
`})}),`
`,e.jsxs(i.p,{children:["Se stai utilizzando il componente in un framework JS (React, Vue, Angular), utilizza il tag di navigazione del framework (ad esempio ",e.jsx(i.code,{children:"<Link>"})," in React) al posto dell'anchor HTML, mantenendo la struttura interna con classe ",e.jsx(i.code,{children:".ratio"})," e immagine."]}),`
`,e.jsxs(i.p,{children:["Usa l'attributo ",e.jsx(i.code,{children:"active"})," sull'elemento ",e.jsx(i.code,{children:"it-thumbnav-item"})," corrispondente alla pagina o immagine attiva, per indicarlo visivamente agli utenti."]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<it-thumbnav-item active>
  <a href="#" class="ratio ratio-3x2">
    <img src="…" alt="Visualizza immagine 1">
  </a>
</it-thumbnav-item>
`})}),`
`,e.jsx(i.h2,{id:"accessibilità",children:"Accessibilità"}),`
`,e.jsx(i.p,{children:"Al fine di garantire un'esperienza accessibile a tutti gli utenti, assicurati di seguire queste indicazioni:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Indica sempre nell'attributo ",e.jsx(i.code,{children:"alt"})," dell'immagine l'azione associata al link, in modo che gli utenti che usano tecnologie assistive possano ottenere una descrizione testuale del contenuto dell'immagine."]}),`
`,e.jsxs(i.li,{children:["Valorizza sempre l'attributo ",e.jsx(i.code,{children:"href"})," per rendere il link effettivamente navigabile e semanticamente corretto."]}),`
`]}),`
`,e.jsx("div",{class:"callout callout-warning",children:e.jsxs("div",{class:"callout-inner",children:[e.jsx("div",{class:"callout-title",children:e.jsx("span",{class:"text",children:"Nota sui test di accessibilità"})}),e.jsx("p",{children:e.jsxs(i.p,{children:["Axe e altri strumenti di analisi statica possono segnalare falsi positivi quando analizzano il componente ",e.jsx(i.code,{children:"it-thumbnav"})," a causa del limitato supporto per i Web Components. La struttura accessibile effettiva è corretta, come confermato dall'Accessibility Tree e dai test manuali con screen reader."]})})]})}),`
`,e.jsx(i.h2,{id:"versione-small",children:"Versione small"}),`
`,e.jsxs(i.p,{children:["Aggiungi l'attributo ",e.jsx(i.code,{children:"small"})," al contenitore ",e.jsx(i.code,{children:"it-thumbnav"})," per ottenere thumbnail di dimensione ridotta (120px invece di 240px)."]}),`
`,e.jsx(n,{of:d}),`
`,e.jsx(i.h2,{id:"effetti-hover",children:"Effetti hover"}),`
`,e.jsxs(i.p,{children:["Usa l'attributo ",e.jsx(i.code,{children:"hover"})," per personalizzare il comportamento al passaggio del mouse."]}),`
`,e.jsx(i.h3,{id:"hover-senza-zoom",children:"Hover senza zoom"}),`
`,e.jsxs(i.p,{children:["Aggiungi ",e.jsx(i.code,{children:'hover="nozoom"'})," per disabilitare l'effetto di zoom sull'immagine."]}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(i.h3,{id:"hover-con-layer-nero",children:"Hover con layer nero"}),`
`,e.jsxs(i.p,{children:["Aggiungi ",e.jsx(i.code,{children:'hover="black"'})," per mostrare un overlay nero semitrasparente al passaggio del mouse."]}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(i.h3,{id:"hover-con-layer-primary",children:"Hover con layer primary"}),`
`,e.jsxs(i.p,{children:["Aggiungi ",e.jsx(i.code,{children:'hover="primary"'})," per mostrare un overlay di colore primary al passaggio del mouse."]}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(i.h2,{id:"thumbnav-verticale",children:"Thumbnav verticale"}),`
`,e.jsxs(i.p,{children:["Aggiungi l'attributo ",e.jsx(i.code,{children:"vertical"})," per disporre le thumbnail in colonna."]}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(i.h2,{id:"posizione-in-overlay",children:"Posizione in overlay"}),`
`,e.jsxs(i.p,{children:["Inserisci la Thumbnav in overlay all'interno di un contenitore con classe ",e.jsx(i.code,{children:".position-relative"}),", ad esempio una galleria immagini. Usa l'attributo ",e.jsx(i.code,{children:"position"})," per controllare il lato in cui viene ancorata:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"bottom"})," per posizionarla nella parte inferiore"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"top"})," per posizionarla nella parte superiore"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"left"})," per ancorare la thumbnav al lato sinistro (il layout verticale viene applicato automaticamente)"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"right"})," per ancorare la thumbnav al lato destro (il layout verticale viene applicato automaticamente)"]}),`
`]}),`
`,e.jsx(i.h3,{id:"overlay-orizzontale-inferiore",children:"Overlay orizzontale inferiore"}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(i.h3,{id:"overlay-orizzontale-superiore",children:"Overlay orizzontale superiore"}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(i.h3,{id:"overlay-verticale-a-sinistra",children:"Overlay verticale a sinistra"}),`
`,e.jsx(n,{of:g}),`
`,e.jsx(i.h3,{id:"overlay-verticale-a-destra",children:"Overlay verticale a destra"}),`
`,e.jsx(n,{of:v}),`
`,e.jsx(i.h2,{id:"griglia-a-larghezza-fissa",children:"Griglia a larghezza fissa"}),`
`,e.jsxs(i.p,{children:["Aggiungi l'attributo ",e.jsx(i.code,{children:"fixed"})," per assegnare a ogni thumbnail una larghezza fissa di 240px. Combinalo con ",e.jsx(i.code,{children:"small"})," per ridurla a 120px."]}),`
`,e.jsx(n,{of:f}),`
`,e.jsx(i.h2,{id:"griglia-a-larghezza-automatica",children:"Griglia a larghezza automatica"}),`
`,e.jsxs(i.p,{children:["Usa l'attributo ",e.jsx(i.code,{children:"auto"})," per distribuire le thumbnail su tutta la larghezza del contenitore, specificando il numero di colonne desiderato (2, 3, 4 o 5)."]}),`
`,e.jsx(i.h3,{id:"3-thumbnail-per-riga",children:"3 thumbnail per riga"}),`
`,e.jsx(n,{of:z}),`
`,e.jsx(i.h3,{id:"5-thumbnail-per-riga",children:"5 thumbnail per riga"}),`
`,e.jsx(n,{of:b})]})}function I(a={}){const{wrapper:i}={...l(),...a.components};return i?e.jsx(i,{...a,children:e.jsx(o,{...a})}):o(a)}export{I as default};

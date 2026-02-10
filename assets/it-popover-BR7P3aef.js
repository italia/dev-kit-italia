import{j as e,M as r,T as c,C as o,a as d}from"./blocks-Byz_BPrk.js";import{useMDXComponents as a}from"./index-DY0hxXWi.js";import{P as t,B as s,a as p,C as h,E as m,b as u,A as x,c as j}from"./it-popover.stories-DPBMxJsn.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-BcuqimjD.js";function l(n){const i={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:t}),`
`,e.jsx(c,{of:t}),`
`,e.jsx("description",{children:"Suggerimento a comparsa che può contenere testo e link per mostrare informazioni o funzionalità aggiuntive"}),`
`,e.jsx(i.h2,{id:"cosa-fa",children:"Cosa fa"}),`
`,e.jsxs(i.p,{children:[`Il componente Popover permette di visualizzare contenuti in overlay posizionati dinamicamente rispetto a un elemento trigger.
Utilizza `,e.jsx(i.a,{href:"https://floating-ui.com/",rel:"nofollow",children:"Floating UI"})," per il posizionamento intelligente e si adatta automaticamente allo spazio disponibile."]}),`
`,e.jsxs(i.p,{children:["Il componente implementa le best practices UX definite da ",e.jsx(i.a,{href:"https://polaris.shopify.com/components/overlays/popover",rel:"nofollow",children:"Polaris (Shopify)"}),", ",e.jsx(i.a,{href:"https://developer.apple.com/design/human-interface-guidelines/popovers",rel:"nofollow",children:"Apple HIG"})," e ",e.jsx(i.a,{href:"https://m3.material.io/",rel:"nofollow",children:"Material Design"}),"."]}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"https://designers.italia.it/design-system/componenti/popover/",rel:"nofollow",children:"Approfondisci quando e come usare il componente Popover"})}),`
`,e.jsx(i.h3,{id:"alternative-a-questo-componente",children:"Alternative a questo componente"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Tooltip (in lavorazione): mostra brevi informazioni testuali al passaggio del mouse o al focus su un elemento."}),`
`,e.jsx(i.li,{children:"Modal (in lavorazione): finestre di dialogo che richiedono l'attenzione dell'utente e bloccano l'interazione con il resto dell'interfaccia fino a quando non vengono chiuse."}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"/docs/componenti-dropdown--documentazione",children:"Dropdown"}),": menu a discesa per la selezione di opzioni o azioni."]}),`
`]}),`
`,e.jsx(i.h3,{id:"anteprima-e-attributi-del-componente",children:"Anteprima e attributi del componente"}),`
`,e.jsxs(i.p,{children:[`Modifica gli attributi nella tabella per personalizzare in tempo reale l'aspetto e il comportamento del componente.
Per vedere come cambia il codice, clicca su `,e.jsx(i.strong,{children:"Show code"}),"."]}),`
`,e.jsx(o,{of:s}),`
`,e.jsx(d,{of:s}),`
`,e.jsx(i.h2,{id:"accessibilità",children:"Accessibilità"}),`
`,e.jsx(i.p,{children:"Il componente implementa le seguenti funzionalità per garantire l'accessibilità:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Attributi ARIA"}),": gestisce automaticamente ",e.jsx(i.code,{children:"aria-haspopup"})," e ",e.jsx(i.code,{children:"aria-expanded"})," sul trigger"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Navigazione da tastiera"}),": supporta la chiusura con ",e.jsx(i.code,{children:"Esc"})," sia dal trigger che dal contenuto"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Light dismiss"}),": si chiude automaticamente con click esterno"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Controllo programmatico"}),": espone i metodi ",e.jsx(i.code,{children:"openPopover()"}),", ",e.jsx(i.code,{children:"closePopover()"})," e ",e.jsx(i.code,{children:"toggle()"})," per il controllo via codice"]}),`
`]}),`
`,e.jsx("div",{className:"callout callout-success",children:e.jsxs("div",{className:"callout-inner",children:[e.jsx("div",{className:"callout-title",children:e.jsx("span",{className:"text",children:"Titoli nei popover"})}),e.jsx("div",{children:e.jsxs(i.p,{children:[`Come si vede dagli esempi presenti in questa pagina, puoi inserire titoli all'interno del popover.
Negli esempi usiamo il tag `,e.jsx(i.code,{children:"<h4>"})," per i titoli, ma è importante che tu scelga il livello di intestazione più appropriato in base alla struttura del contenuto della tua pagina."]})})]})}),`
`,e.jsx(i.h3,{id:"gestione-del-focus",children:"Gestione del focus"}),`
`,e.jsx(i.p,{children:"Il comportamento del focus è delegato all'utilizzatore per garantire massima flessibilità. Solo tu che conosci il contenuto specifico del popover puoi determinare quale elemento debba ricevere il focus e quando."}),`
`,e.jsx(i.p,{children:e.jsx(i.strong,{children:"Raccomandazioni:"})}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Per menu con azioni, usa il componente ",e.jsx(i.a,{href:"/docs/componenti-dropdown--documentazione",children:"Dropdown"})," che gestisce automaticamente focus e navigazione"]}),`
`,e.jsx(i.li,{children:"Per contenuti informativi, gestisci il focus manualmente in base al contesto"}),`
`,e.jsx(i.li,{children:"Quando il popover si chiude, il focus torna automaticamente al trigger"}),`
`]}),`
`,e.jsx(i.h2,{id:"posizione",children:"Posizione"}),`
`,e.jsxs(i.p,{children:["Il componente supporta 12 posizioni diverse tramite l'attributo ",e.jsx(i.code,{children:"placement"}),". Usa ",e.jsx(i.code,{children:"top"}),", ",e.jsx(i.code,{children:"right"}),", ",e.jsx(i.code,{children:"bottom"})," o ",e.jsx(i.code,{children:"left"})," per posizioni centrate, oppure aggiungi ",e.jsx(i.code,{children:"-start"})," o ",e.jsx(i.code,{children:"-end"})," per allineamenti specifici."]}),`
`,e.jsx(i.p,{children:e.jsx(i.strong,{children:"Esempi:"})}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"bottom-start"}),": in basso, allineato a sinistra"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"top-end"}),": in alto, allineato a destra"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"right"}),": a destra, centrato verticalmente"]}),`
`]}),`
`,e.jsx(i.p,{children:"Il posizionamento si adatta automaticamente allo spazio disponibile."}),`
`,e.jsx(o,{of:p}),`
`,e.jsx(i.h2,{id:"titolo-con-icona-e-link",children:"Titolo con icona e link"}),`
`,e.jsx(i.p,{children:"Puoi aggiungere un'icona in testa al titolo ed un link in coda al contenuto."}),`
`,e.jsxs(i.p,{children:["L'icona va inclusa nell'elemento usato come intestazione (ad esempio l'elemento ",e.jsx(i.code,{children:"<h4>"})," nell'esempio qui sotto) subito prima del vero e proprio titolo."]}),`
`,e.jsxs(i.p,{children:["Il link va inserito dopo il contenuto testuale, con classe ",e.jsx(i.code,{children:"popover-inner-link"}),"."]}),`
`,e.jsx(o,{of:h}),`
`,e.jsx(i.h2,{id:"elementi-disabilitati",children:"Elementi disabilitati"}),`
`,e.jsxs(i.p,{children:["Elementi con l'attributo ",e.jsx(i.code,{children:"disabled"}),` non sono interattivi, il che significa che gli utenti non possono attivare il popover facendo click su di essi.
Come soluzione ti consigliamo di attivare il popover al passaggio del mouse o al focus tramite tastiera,
in modo che il popover appaia come feedback visivo immediato per gli utenti in quanto non possono aspettarsi di cliccare su un elemento disabilitato.`]}),`
`,e.jsxs(i.p,{children:[`Questo ti permette di specificare il motivo per cui l'elemento è disabilitato, migliorando l'esperienza utente.
Ti consigliamo però di valutare anche l'utilizzo di un `,e.jsx(i.a,{href:"/docs/componenti-tooltip--documentazione",children:"Tooltip"})," per questo scopo, in quanto più adatto a fornire informazioni rapide e contestuali."]}),`
`,e.jsx(o,{of:m}),`
`,e.jsx(i.h3,{id:"attivazione-tramite-hover-e-focus",children:"Attivazione tramite hover e focus"}),`
`,e.jsxs(i.p,{children:["Per implementare l'attivazione su hover ti serve un riferimento al pulsante ",e.jsx(i.code,{children:"trigger"})," e al componente ",e.jsx(i.code,{children:"it-popover"})," stesso nel tuo codice JavaScript."]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-javascript",children:`const trigger = document.querySelector('it-button[slot="trigger"]');
const popover = document.querySelector('it-popover');

trigger.addEventListener('mouseenter', () => {
  popover.openPopover();
});

trigger.addEventListener('mouseleave', () => {
  popover.closePopover();
});

trigger.addEventListener('focus', () => {
  popover.openPopover();
});

trigger.addEventListener('blur', (e) => {
  const target = e.relatedTarget;
  if (target === null || !popover.contains(target)) {
    popover.closePopover();
  }
});
`})}),`
`,e.jsx(o,{of:u}),`
`,e.jsx(i.h2,{id:"attivazione-controllata",children:"Attivazione controllata"}),`
`,e.jsxs(i.p,{children:["Impostando l'attributo ",e.jsx(i.code,{children:"controlled"}),", il popover non gestisce automaticamente l'apertura e la chiusura. L'utilizzatore deve chiamare i metodi ",e.jsx(i.code,{children:"openPopover()"}),", ",e.jsx(i.code,{children:"closePopover()"})," o ",e.jsx(i.code,{children:"toggle()"})," per controllarne lo stato."]}),`
`,e.jsx(o,{of:x}),`
`,e.jsx(i.h2,{id:"eventi",children:"Eventi"}),`
`,e.jsxs(i.p,{children:["Il componente emette gli eventi ",e.jsx(i.code,{children:"it-popover-open"})," quando viene aperto e ",e.jsx(i.code,{children:"it-popover-close"})," quando viene chiuso. Apri la console del browser per vedere i log."]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-javascript",children:`const popover = document.querySelector('it-popover');

popover.addEventListener('it-popover-open', (e) => {
  console.log('Popover aperto', e);
});

popover.addEventListener('it-popover-close', (e) => {
  console.log('Popover chiuso', e);
});
`})}),`
`,e.jsx(o,{of:j})]})}function P(n={}){const{wrapper:i}={...a(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(l,{...n})}):l(n)}export{P as default};

import{j as e,M as a,C as t,a as r}from"./blocks-BmJ51On6.js";import{useMDXComponents as l}from"./index-CEGOQIeq.js";import{S as c,B as s,T as d,F as p,C as h,a as m,b as u}from"./it-sticky.stories-BWFk97vF.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-Dq0Es6_d.js";function o(n){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:c}),`
`,e.jsx(i.h1,{id:"sticky",children:"Sticky"}),`
`,e.jsx("description",{children:"Comportamento che rende un elemento costantemente visibile allo scorrere della pagina."}),`
`,e.jsx(i.h2,{id:"cosa-fa",children:"Cosa fa"}),`
`,e.jsxs(i.p,{children:["Il componente Sticky (",e.jsx(i.code,{children:"it-sticky"}),") mantiene un elemento visibile mentre l'utente scorre la pagina. Questo è particolarmente utile per menu di navigazione, call-to-action importanti, pulsanti di contatto o supporto che devono sempre rimanere accessibili."]}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"https://designers.italia.it/design-system/componenti/sticky/",rel:"nofollow",children:"Approfondisci quando e come usare il componente Sticky"})}),`
`,e.jsx(i.h2,{id:"anteprima-e-attributi-del-componente",children:"Anteprima e attributi del componente"}),`
`,e.jsxs(i.p,{children:["Modifica gli attributi nella tabella per personalizzare in tempo reale l'aspetto e il comportamento del componente. Per vedere come cambia il codice, clicca su ",e.jsx(i.strong,{children:"Show code"}),"."]}),`
`,e.jsx(t,{of:s}),`
`,e.jsx(r,{of:s}),`
`,e.jsx(i.h2,{id:"indicazioni-generali",children:"Indicazioni generali"}),`
`,e.jsxs(i.p,{children:["Il componente ",e.jsx(i.code,{children:"<it-sticky>"}),' consente di mantenere visibile un elemento della pagina durante lo scroll, applicando automaticamente il comportamento "sticky".']}),`
`,e.jsxs(i.p,{children:["Per applicare il comportamento sticky a un elemento o contenuto, racchiudilo all'interno del tag ",e.jsx(i.code,{children:"<it-sticky>"}),`.
Il componente gestisce in autonomia anche casi avanzati, come elementi impilabili o con padding e classi personalizzate, attraverso specifiche proprietà.`]}),`
`,e.jsxs(i.p,{children:["Consulta ",e.jsx(i.a,{href:"?path=/story/esempi-sticky--single-sticky",children:"questa pagina di esempio"})," per comprenderne appieno il comportamento di un componente sticky."]}),`
`,e.jsx(i.h2,{id:"accessibilità",children:"Accessibilità"}),`
`,e.jsx(i.p,{children:"Per garantire un'esperienza accessibile:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"non usare troppi componenti sticky sulla stessa pagina contemporaneamente;"}),`
`,e.jsx(i.li,{children:"assicurati che il contenuto all'interno del componente sia chiaro, facilmente comprensibile e interagibile."}),`
`]}),`
`,e.jsx(i.h2,{id:"offset",children:"Offset"}),`
`,e.jsxs(i.p,{children:["Per definire un offset in pixel tra l'elemento e il margine superiore, imposta la proprietà ",e.jsx(i.code,{children:"padding-top"}),"."]}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"?path=/story/esempi-sticky--padded-sticky",children:"Vai all'esempio per questa funzionalità"})}),`
`,e.jsx(t,{of:d}),`
`,e.jsx(i.h2,{id:"position-fixed",children:"Position fixed"}),`
`,e.jsxs(i.p,{children:["Il componente assegna di default all'elemento da fissare la proprietà CSS ",e.jsx(i.code,{children:"position"})," con valore ",e.jsx(i.code,{children:"sticky"}),". In alcuni casi, questo può causare problemi di posizionamento, soprattutto se l'elemento cambia altezza quando diventa sticky."]}),`
`,e.jsxs(i.p,{children:["Puoi modificare la posizione dell'elemento, usa l'attributo ",e.jsx(i.code,{children:'position-type:"fixed"'}),"."]}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"?path=/story/esempi-sticky--fixed-sticky",children:"Vai all'esempio per questa funzionalità"})}),`
`,e.jsx(t,{of:p}),`
`,e.jsx(i.h2,{id:"classi-personalizzate",children:"Classi personalizzate"}),`
`,e.jsxs(i.p,{children:["Per personalizzare lo stile dell'elemento quando è sticky o fixed, usa la proprietà ",e.jsx(i.code,{children:"sticky-class-name"}),". Tutte le classi CSS che inserisci in questo attributo verranno aggiunte all'elemento quando diventa sticky e rimosse quando torna normale."]}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"?path=/story/esempi-sticky--fixed-sticky-classname",children:"Vai all'esempio per questa funzionalità"})}),`
`,e.jsx(t,{of:h}),`
`,e.jsx(i.h2,{id:"trigger-offset",children:"Trigger offset"}),`
`,e.jsxs(i.p,{children:["Per ritardare l'attivazione dello sticky, in modo che scatti solo dopo che l'utente ha scrollato di un numero specifico di pixel oltre la posizione naturale dell'elemento, usa la proprietà ",e.jsx(i.code,{children:"trigger-offset"}),"."]}),`
`,e.jsx(i.p,{children:"Questo è utile ad esempio quando un header di grandi dimensioni precede l'elemento sticky e si vuole che quest'ultimo si attivi solo dopo che l'header è uscito dalla viewport."}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<it-sticky trigger-offset="180">
  ...
</it-sticky>
`})}),`
`,e.jsx(i.h2,{id:"trigger-selector",children:"Trigger selector"}),`
`,e.jsxs(i.p,{children:["In alternativa a ",e.jsx(i.code,{children:"trigger-offset"}),", puoi usare ",e.jsx(i.code,{children:"trigger-selector"})," per indicare un selettore CSS di un elemento della pagina: l'altezza di quell'elemento verrà usata automaticamente come soglia di attivazione. Quando fornito, ",e.jsx(i.code,{children:"trigger-selector"})," ha precedenza su ",e.jsx(i.code,{children:"trigger-offset"}),"."]}),`
`,e.jsxs(i.p,{children:["Utile per sincronizzare l'attivazione dello sticky con la scomparsa di un elemento specifico (es. l'",e.jsx(i.code,{children:"<header>"})," completo):"]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<it-sticky trigger-selector="#header-complete">
  <header id="header-complete">
    ...
  </header>
</it-sticky>
`})}),`
`,e.jsx(i.h2,{id:"versione-impilabile",children:"Versione impilabile"}),`
`,e.jsxs(i.p,{children:["Quando ci sono più componenti sticky sulla pagina, puoi impilarli l'uno sull'altro utilizzando l'attributo ",e.jsx(i.code,{children:"stackable"}),"."]}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"?path=/story/esempi-sticky--stackable-sticky",children:"Vai all'esempio per questa funzionalità"})}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"?path=/story/esempi-sticky--stackable-sticky-resize",children:"Vai all'esempio per questa funzionalità con media query e breakpoint"})}),`
`,e.jsx(t,{of:m}),`
`,e.jsx(i.h2,{id:"position-bottom",children:"Position bottom"}),`
`,e.jsxs(i.p,{children:["Impostando ",e.jsx(i.code,{children:'position="bottom"'})," insieme a ",e.jsx(i.code,{children:'position-type="fixed"'}),", l'elemento viene agganciato al bordo inferiore del viewport ",e.jsx(i.strong,{children:"immediatamente al caricamento della pagina"}),`, senza attendere lo scroll.
Questo è il comportamento usato internamente da `,e.jsx(i.code,{children:"it-bottom-nav"}),"."]}),`
`,e.jsxs(i.p,{children:["Aggiungendo l'attributo ",e.jsx(i.code,{children:"stackable"})," è possibile sovrapporre più barre fisse in fondo, che si impileranno verso l'alto in ordine di connessione al DOM."]}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"?path=/story/esempi-sticky--fixed-bottom-sticky",children:"Vai all'esempio per questa funzionalità"})}),`
`,e.jsx(t,{of:u}),`
`,e.jsx(i.h2,{id:"proprietà-metodi-ed-eventi-accessibili-via-js",children:"Proprietà, metodi ed eventi accessibili via js"}),`
`,e.jsx(i.h3,{id:"eventi",children:"Eventi"}),`
`,e.jsxs(i.p,{children:["Il componente ",e.jsx(i.code,{children:"it-sticky"})," emette questi eventi custom:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"it-sticky-on"}),", quando l'elemento diventa sticky;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"it-sticky-off"}),", quando l'elemento smette di essere sticky."]}),`
`]}),`
`,e.jsx(i.p,{children:"Entrambi gli eventi hanno le seguenti proprietà:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"bubbles: true"}),", l'evento si propaga attraverso il DOM;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"composed: true"}),", l'evento attraversa i confini del Shadow DOM;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"cancelable: true"}),", l'evento può essere cancellato;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"detail: { id: string }"}),", contiene l'ID dell'elemento sticky."]}),`
`]}),`
`,e.jsx(i.h4,{id:"esempio-di-utilizzo",children:"Esempio di utilizzo"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-javascript",children:`const stickyElement = document.querySelector('it-sticky');

// Ascolta quando diventa sticky
stickyElement.addEventListener('it-sticky-on', (event) => {
  console.log('Elemento diventato sticky:', event.detail.id);
  // Aggiungi logica personalizzata
});

// Ascolta quando smette di essere sticky
stickyElement.addEventListener('it-sticky-off', (event) => {
  console.log('Elemento non più sticky:', event.detail.id);
  // Aggiungi logica personalizzata
});
`})})]})}function k(n={}){const{wrapper:i}={...l(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(o,{...n})}):o(n)}export{k as default};

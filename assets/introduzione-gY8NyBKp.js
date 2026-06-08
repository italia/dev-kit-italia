import{j as i,M as r,C as a}from"./blocks-BmJ51On6.js";import{useMDXComponents as s}from"./index-CEGOQIeq.js";import{S as d,C as l,a as t}from"./introduzione.stories-jzVtA2yI.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-Dq0Es6_d.js";import"./organizzare-gli-spazi.helpers-DvObcIjS.js";function o(n){const e={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",strong:"strong",...s(),...n.components};return i.jsxs(i.Fragment,{children:[i.jsx(r,{of:d}),`
`,i.jsx(e.h1,{id:"introduzione",children:"Introduzione"}),`
`,i.jsx(e.p,{children:"In questa sezione è possibile trovare tutte le informazioni necessarie per organizzare gli spazi del tuo sito."}),`
`,i.jsx(e.h2,{id:"contenitori",children:"Contenitori"}),`
`,i.jsxs(e.p,{children:["Il contenitore, o ",i.jsx(e.em,{children:'"container"'}),", è uno degli elementi base nell'utilizzo di Bootstrap Italia, ed è ",i.jsxs(e.strong,{children:["richiesto quando si utilizza il ",i.jsx(e.a,{href:"/docs/organizzare-gli-spazi-le-griglie--documentazione",children:"grid system"})]}),"."]}),`
`,i.jsxs(e.p,{children:["La prima scelta è tra un container a larghezza ",i.jsx(e.em,{children:"fissa"}),", la cui ",i.jsx(e.code,{children:"max-width"})," cambia ad ogni breakpoint, o ",i.jsx(e.em,{children:"fluida"}),", la cui larghezza rimane al 100% per ogni dimensione del viewport."]}),`
`,i.jsx(a,{of:l}),`
`,i.jsx(e.pre,{children:i.jsx(e.code,{className:"language-html",children:`<div class="container">
  <!-- Contenuto -->
</div>
`})}),`
`,i.jsxs(e.p,{children:["Utilizzando la classe ",i.jsx(e.code,{children:".container-fluid"})," esso occuperà in larghezza tutta l'area a sua disposizione."]}),`
`,i.jsx(a,{of:t}),`
`,i.jsx(e.pre,{children:i.jsx(e.code,{className:"language-html",children:`<div class="container-fluid">...</div>
`})}),`
`,i.jsx(e.h2,{id:"contenitori-responsive",children:"Contenitori responsive"}),`
`,i.jsx(e.p,{children:"Bootstrap Italia mette a disposizione i contenitori responsive, classi che ti consentono di specificare la larghezza del contenitore al 100% fino al raggiungimento del breakpoint, dopodiché viene applicata la larghezza massima in base al punto di interruzione."}),`
`,i.jsx(e.pre,{children:i.jsx(e.code,{className:"language-html",children:`<div class="container-sm">...</div>
<div class="container-md">...</div>
<div class="container-lg">...</div>
<div class="container-xl">...</div>
<div class="container-xxl">...</div>
`})}),`
`,i.jsx(e.p,{children:i.jsxs(e.em,{children:["NB: Se si sta usando una versione di Bootstrap Italia basata su Bootstrap 4, la classe ",i.jsx(e.code,{children:".container-xxl"})," non sarà presente."]})}),`
`,i.jsx(e.h2,{id:"responsive-breakpoints",children:"Responsive breakpoints"}),`
`,i.jsxs(e.p,{children:["Visto che la progettazione web è bene venga gestita ",i.jsx(e.em,{children:"mobile-first"}),", in Bootstrap Italia sono definite alcune ",i.jsx(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries",rel:"nofollow",children:"media query"})," per definire breakpoints ai quali il layout si modifica. Questi breakpoints sono basati sulla dimensione minima del viewport e permettono di scalare verso l'alto quando la dimensione della finestra aumenta."]}),`
`,i.jsx(e.p,{children:"Bootstrap Italia utilizza le seguenti media query per definire i breakpoint usati nelle sue griglie e componenti."}),`
`,i.jsx(e.pre,{children:i.jsx(e.code,{className:"language-scss",children:`// Schermi piccoli (meno di 576px)
// Non è necessaria alcuna media query, in quanto la progettazione mobile-first fa sì che questo sia il codice di default

// Schermi medio-piccoli (almeno 576px)
@media (min-width: 576px) { ... }

// Schermi medi (almeno 768px)
@media (min-width: 768px) { ... }

// Schermi grandi (almeno 992px)
@media (min-width: 992px) { ... }

// Schermi molto grandi (almeno 1200px)
@media (min-width: 1200px) { ... }

// Schermi grandissimi (almeno 1400px)
@media (min-width: 1400px) { ... }
`})}),`
`,i.jsx(e.p,{children:"Quando scriviamo il codice sorgente in Sass, tutte le media query sono già disponibili tramite i seguenti mixin:"}),`
`,i.jsx(e.pre,{children:i.jsx(e.code,{className:"language-scss",children:`@include media-breakpoint-up(xs) { ... }
@include media-breakpoint-up(sm) { ... }
@include media-breakpoint-up(md) { ... }
@include media-breakpoint-up(lg) { ... }
@include media-breakpoint-up(xl) { ... }
@include media-breakpoint-up(xxl) { ... }

// Esempio di utilizzo:
@include media-breakpoint-up(sm) {
  .some-class {
    display: block;
  }
}
`})}),`
`,i.jsxs(e.p,{children:["In casi eccezionali, è possibile utilizzare le media query che vanno nella direzione opposta (la dimensione dello schermo ",i.jsx(e.em,{children:"o inferiore"}),"):"]}),`
`,i.jsx(e.pre,{children:i.jsx(e.code,{className:"language-scss",children:`// Schermi piccoli (meno di 576px)
@media (max-width: 575.98px) { ... }

// Schermi medio-piccoli (meno di 768px)
@media (max-width: 767.98px) { ... }

// Schermi medi (meno di 992px)
@media (max-width: 991.98px) { ... }

// Schermi grandi (meno di 1200px)
@media (max-width: 1199.98px) { ... }

// Schermi molto grandi (meno di  1400px)
@media (max-width: 1399.98px) { ... }

// Schermi grandissimi (uguale o più di 1400px)
// Non è necessaria alcuna media query, in quanto la progettazione per schermi molto grandi fa sì che questo sia il codice di default
`})}),`
`,i.jsxs(e.blockquote,{children:[`
`,i.jsx(e.p,{children:i.jsx(e.strong,{children:"Nota"})}),`
`,i.jsxs(e.p,{children:["Si noti che, dal momento che i browser non supportano attualmente i ",i.jsx(e.a,{href:"https://www.w3.org/TR/mediaqueries-4/#range-context",rel:"nofollow",children:"range context queries"}),`,
stiamo evitando di utilizzare i limiti dei `,i.jsxs(e.a,{href:"https://www.w3.org/TR/mediaqueries-4/#mq-min-max",rel:"nofollow",children:["prefissi ",i.jsx(e.code,{children:"min-"})," e ",i.jsx(e.code,{children:"max-"})]}),`
e viewports con larghezze frazionarie (che per esempio possono verificarsi in determinate condizioni su dispositivi ad alta
risoluzione), utilizzando valori con maggiore precisione per questi confronti.`]}),`
`]}),`
`,i.jsx(e.p,{children:"Come sopra, quando si scrive il codice sorgente in Sass, tutte le media query sono già disponibili tramite i seguenti mixin:"}),`
`,i.jsx(e.pre,{children:i.jsx(e.code,{className:"language-scss",children:`@include media-breakpoint-down(sm) { ... }
@include media-breakpoint-down(md) { ... }
@include media-breakpoint-down(lg) { ... }
@include media-breakpoint-down(xl) { ... }
@include media-breakpoint-down(xxl) { ... }
`})}),`
`,i.jsx(e.p,{children:`Sono previste anche media query e mixin per il targeting di un singolo segmento di dimensioni dello schermo utilizzando
la larghezza minima e massima dei breakpoint.`}),`
`,i.jsx(e.pre,{children:i.jsx(e.code,{className:"language-scss",children:`// Schermi piccoli (meno di 576px)
@media (max-width: 575.98px) { ... }

// Schermi medio-piccoli (da 576px a meno di 768px)
@media (min-width: 576px) and (max-width: 767.98px) { ... }

// Schermi medi (da 768px a meno di 992px)
@media (min-width: 768px) and (max-width: 991.98px) { ... }

// Schermi grandi (da 992px a meno di 1200px)
@media (min-width: 992px) and (max-width: 1199.98px) { ... }

// Schermi molto grandi (da 1200px in su)
@media (min-width: 1200px) { ... }
`})}),`
`,i.jsx(e.p,{children:"Anche queste media query sono disponibili tramite Sass mixin:"}),`
`,i.jsx(e.pre,{children:i.jsx(e.code,{className:"language-scss",children:`@include media-breakpoint-only(xs) { ... }
@include media-breakpoint-only(sm) { ... }
@include media-breakpoint-only(md) { ... }
@include media-breakpoint-only(lg) { ... }
@include media-breakpoint-only(xl) { ... }
`})}),`
`,i.jsx(e.p,{children:"Similmente le media query possono estendersi su più breakpoint:"}),`
`,i.jsx(e.pre,{children:i.jsx(e.code,{className:"language-scss",children:`// Esempio
// Applica gli stili partendo da uno schermo medio fino a uno grande
@media (min-width: 768px) and (max-width: 1199.98px) { ... }
`})}),`
`,i.jsx(e.p,{children:"Per ottenere il mixin Sass di questo stesso range:"}),`
`,i.jsx(e.pre,{children:i.jsx(e.code,{className:"language-scss",children:`@include media-breakpoint-between(md, xl) { ... }
`})}),`
`,i.jsx(e.h2,{id:"z-index",children:"Z-index"}),`
`,i.jsxs(e.p,{children:["Alcuni componenti Bootstrap Italia utilizzano ",i.jsx(e.code,{children:"z-index"}),`, la proprietà CSS che aiuta a controllare il layout fornendo un
terzo livello di asse per organizzare graficamente il contenuto. Utilizziamo una scala graduale z-index predefinita che
è stata progettata per stratificare correttamente navigazione, tooltip, popover, finestre modali e altro ancora.`]}),`
`,i.jsx(e.p,{children:`Questi valori partono da un numero arbitrario, alto e abbastanza specifico, per evitare idealmente conflitti. Abbiamo un
set standard di questi valori attraverso i quali i componenti coesistano a diversi livelli (tooltip, popover, navbar,
dropdown, finestre modali) in modo da potersi comportare coerentemente tra loro.`}),`
`,i.jsx(e.p,{children:"Si scoraggia di personalizzare singolarmente questi valori; se dovessi cambiarne uno, probabilmente dovrai cambiarli tutti."}),`
`,i.jsx(e.pre,{children:i.jsx(e.code,{className:"language-scss",children:`$zindex-dropdown: 1000 !default;
$zindex-sticky: 1020 !default;
$zindex-fixed: 1030 !default;
$zindex-modal-backdrop: 1040 !default;
$zindex-modal: 1050 !default;
$zindex-popover: 1060 !default;
$zindex-tooltip: 1070 !default;
`})}),`
`,i.jsxs(e.p,{children:[`Per gestire i bordi sovrapposti all'interno dei componenti (es.: pulsanti e input nei gruppi di input) occorre utilizzare i valori
di `,i.jsx(e.code,{children:"z-index"})," a una sola cifra di ",i.jsx(e.code,{children:"1"}),",",i.jsx(e.code,{children:" 2"})," e ",i.jsx(e.code,{children:"3"}),` per default, hover e stati attivi. Al passaggio del mouse/focus/active
portiamo un particolare elemento in primo piano con un valore più alto di 'z-index\` per mostrare il loro confine sugli
elementi di pari livello.`]}),`
`,i.jsx(e.hr,{}),`
`,i.jsx(e.h2,{id:"modificare-display",children:"Modificare Display"}),`
`,i.jsxs(e.p,{children:["Utilizza le ",i.jsx(e.a,{href:"/docs/organizzare-gli-spazi-display--documentazione",children:"display utility"}),` insieme al grid system, i contenuti o i
componenti in modo responsive, potrai visualizzare o nascondere questi elementi in determinati viewport.`]}),`
`,i.jsx(e.h2,{id:"opzioni-flexbox",children:"Opzioni Flexbox"}),`
`,i.jsxs(e.p,{children:["Bootstrap Italia è realizzato con flexbox, ma non tutti i ",i.jsx(e.code,{children:"display"})," utilizzano ",i.jsx(e.code,{children:"display: flex"}),` in quanto ciò avrebbe
costretto a molti override non necessari.`]}),`
`,i.jsxs(e.p,{children:["Se si ritiene necessario aggiungere ",i.jsx(e.code,{children:"display: flex"})," a un elemento è possibile farlo con ",i.jsx(e.code,{children:".d-flex"}),` o una delle sue varianti
responsive (es.: `,i.jsx(e.code,{children:".d-sm-flex"}),"). Saranno necessarie le classi ",i.jsx(e.code,{children:"display"}),` per consentire l'uso delle
`,i.jsx(e.a,{href:"/docs/organizzare-gli-spazi-flex--documentazione",children:"utility flexbox"}),` per così modificarne il dimensionamento, l'allineamento, la
spaziatura e altro ancora.`]}),`
`,i.jsx(e.h2,{id:"margin-e-padding",children:"Margin e padding"}),`
`,i.jsxs(e.p,{children:["Si utilizzino il ",i.jsx(e.code,{children:"margin"})," e ",i.jsx(e.code,{children:"padding"})," delle ",i.jsx(e.a,{href:"/docs/organizzare-gli-spazi-spaziatura--documentazione",children:"utility spaziatura"}),` per gestire spazi
e dimensioni di elementi e componenti. Bootstrap Italia include una scala a cinque livelli per queste utility basata su
una variabile predefinita `,i.jsx(e.code,{children:"$spacer"})," di valore ",i.jsx(e.code,{children:"16px"}),"."]}),`
`,i.jsxs(e.p,{children:["Si scelgano quindi i valori per tutti i viewport (es.: ",i.jsx(e.code,{children:".me-3"})," per ",i.jsx(e.code,{children:"margin-right: 16px"}),`), o le varianti responsive per viewport
specifici (es.: `,i.jsx(e.code,{children:".me-md-3"})," per ",i.jsx(e.code,{children:"margin-right: 16px"})," a partire dal breakpoint ",i.jsx(e.code,{children:"md"}),")."]}),`
`,i.jsx(e.h2,{id:"modificare-la-visibilità",children:"Modificare la visibilità"}),`
`,i.jsxs(e.p,{children:["Quando è necessario nascondere o rendere visibile un elemento si possono usare le ",i.jsx(e.a,{href:"/docs/organizzare-gli-spazi-display--documentazione#visibilit%C3%A0",children:"utility di visibilità"}),"."]}),`
`,i.jsx(e.p,{children:"Gli elementi invisibili influenzano ancora il layout della pagina, ma sono visivamente nascosti ai visitatori."})]})}function g(n={}){const{wrapper:e}={...s(),...n.components};return e?i.jsx(e,{...n,children:i.jsx(o,{...n})}):o(n)}export{g as default};

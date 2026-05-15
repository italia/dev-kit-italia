import{j as e,M as c,C as s}from"./blocks-Bjay87BK.js";import{useMDXComponents as d}from"./index-WpZ0gc8Y.js";import{S as o,I as r,B as a,R as t,a as x}from"./display.stories-Bi2loPL3.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-DxWuwFk9.js";import"./organizzare-gli-spazi.helpers-DWm9bOGF.js";function l(n){const i={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...d(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:o}),`
`,e.jsx(i.h1,{id:"display",children:"Display"}),`
`,e.jsx(i.h2,{id:"come-funziona",children:"Come funziona"}),`
`,e.jsxs(i.p,{children:["Modifica il valore della ",e.jsxs(i.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/display",rel:"nofollow",children:["proprietà ",e.jsx(i.code,{children:"display"})]}),` con le classi apposite.
Sono presenti solo una parte dei tipi di valori previsti dalla proprietà. Puoi combinare le classi per ottenere l'effetto di cui hai bisogno.`]}),`
`,e.jsx(i.h2,{id:"responsive",children:"Responsive"}),`
`,e.jsxs(i.p,{children:["Le classi ",e.jsx(i.em,{children:"display"})," che si applicano a tutte le dimensioni dello schermo, da ",e.jsx(i.code,{children:"xs"})," fino a ",e.jsx(i.code,{children:"xxl"}),`, non hanno bisogno di alcuna
indicazione di breakpoints, per cui ad esempio sarà sufficiente usare `,e.jsx(i.code,{children:".d-none"}),` per nascondere un elemento ad ogni risoluzione.
In caso contrario, è sufficiente utilizzare i classici breakpoints utilizzando il formato:`]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:".d-{value}"})," per ",e.jsx(i.code,{children:"xs"})]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:".d-{breakpoint}-{value}"})," per ",e.jsx(i.code,{children:"sm"}),", ",e.jsx(i.code,{children:"md"}),", ",e.jsx(i.code,{children:"lg"}),", ",e.jsx(i.code,{children:"xl"})," e ",e.jsx(i.code,{children:"xxl"}),"."]}),`
`]}),`
`,e.jsxs(i.p,{children:["Dove il ",e.jsx(i.em,{children:"valore"})," è uno tra:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"none"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"inline"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"inline-block"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"block"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"table"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"table-cell"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"table-row"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"flex"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"inline-flex"})}),`
`]}),`
`,e.jsxs(i.p,{children:["L'utilizzo delle classi ",e.jsx(i.code,{children:"d-"})," con breakpoint ha effetto su dispositivi dal breakpoint indicato ",e.jsx(i.em,{children:"fino a xxl"}),`.
Per esempio, `,e.jsx(i.code,{children:".d-lg-none"})," imposta ",e.jsx(i.code,{children:"display: none;"})," nella visualizzazione in ",e.jsx(i.code,{children:"lg"}),", in ",e.jsx(i.code,{children:"xl"})," ed in ",e.jsx(i.code,{children:"xxl"}),"."]}),`
`,e.jsx(i.h2,{id:"esempi",children:"Esempi"}),`
`,e.jsx(s,{of:r}),`
`,e.jsx(s,{of:a}),`
`,e.jsx(i.h3,{id:"elementi-nascosti",children:"Elementi nascosti"}),`
`,e.jsx(i.p,{children:`Utilizza le classi responsive per mostrare e nascondere un elemento a seconda dei vari dispositivi. Evita di creare
versioni completamente diverse dello stesso sito, piuttosto scegli di nascondere l'elemento per dimensioni dello
schermo di non interesse.`}),`
`,e.jsxs(i.p,{children:["Per nascondere elementi puoi usare semplicemente la classe ",e.jsx(i.code,{children:".d-none"})," o una delle classi ",e.jsx(i.code,{children:".d-{sm,md,lg,xl}-none"}),` per
qualsiasi variazione di dimensione dello schermo.`]}),`
`,e.jsxs(i.p,{children:["Per mostrare un elemento solo su un dato intervallo di dimensioni dello schermo, puoi combinare una classe ",e.jsx(i.code,{children:".d-*-none"}),`
con una classe `,e.jsx(i.code,{children:".d-*-*"}),". Ad esempio ",e.jsx(i.code,{children:".d-none .d-md-block .d-xl-none"}),` nasconderà l'elemento per tutti gli schermi tranne
che per i dispositivi di medie e grandi dimensioni (fino alla dimensione `,e.jsx(i.code,{children:"xl"}),`, oltre la quale tornerà ad essere
nascosto).`]}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Dimensione dello schermo"}),e.jsx("th",{children:"Classe"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Nascosto a tutti"}),e.jsx("td",{children:e.jsx("code",{children:".d-none"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Nascosto solo su xs"}),e.jsx("td",{children:e.jsx("code",{children:".d-none .d-sm-block"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Nascosto solo su sm"}),e.jsx("td",{children:e.jsx("code",{children:".d-sm-none .d-md-block"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Nascosto solo su md"}),e.jsx("td",{children:e.jsx("code",{children:".d-md-none .d-lg-block"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Nascosto solo su lg"}),e.jsx("td",{children:e.jsx("code",{children:".d-lg-none .d-xl-block"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Nascosto solo su xl"}),e.jsx("td",{children:e.jsx("code",{children:".d-xl-none"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Nascosto solo su xxl"}),e.jsx("td",{children:e.jsx("code",{children:".d-xxl-none"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Visibile a tutti"}),e.jsx("td",{children:e.jsx("code",{children:".d-block"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Visibile solo su xs"}),e.jsx("td",{children:e.jsx("code",{children:".d-block .d-sm-none"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Visibile solo su sm"}),e.jsx("td",{children:e.jsx("code",{children:".d-none .d-sm-block .d-md-none"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Visibile solo su md"}),e.jsx("td",{children:e.jsx("code",{children:".d-none .d-md-block .d-lg-none"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Visibile solo su lg"}),e.jsx("td",{children:e.jsx("code",{children:".d-none .d-lg-block .d-xl-none"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Visibile solo su xl"}),e.jsx("td",{children:e.jsx("code",{children:".d-none .d-xl-block"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Visibile solo su xxl"}),e.jsx("td",{children:e.jsx("code",{children:".d-none .d-xxl-block"})})]})]})]}),`
`,e.jsx(s,{of:t}),`
`,e.jsx(i.h2,{id:"visualizzazione-di-stampa",children:"Visualizzazione di stampa"}),`
`,e.jsxs(i.p,{children:["Modifica il valore ",e.jsx(i.code,{children:"display"})," degli elementi per la stampa con le classi apposite. Sono presenti gli stessi valori usati per le classi ",e.jsx(i.code,{children:"display"}),"."]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:".d-print-none"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:".d-print-inline"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:".d-print-inline-block"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:".d-print-block"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:".d-print-table"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:".d-print-table-row"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:".d-print-table-cell"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:".d-print-flex"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:".d-print-inline-flex"})}),`
`]}),`
`,e.jsx(i.p,{children:"Le classi di stampa e di visualizzazione possono essere combinate insieme:"}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(i.h2,{id:"visibilità",children:"Visibilità"}),`
`,e.jsxs(i.p,{children:["Imposta la ",e.jsx(i.code,{children:"visibility"})," degli elementi con le nostre utilità di visibilità. Queste non modificano il valore ",e.jsx(i.code,{children:"display"}),`
e sono utili per nascondere i contenuti alla maggior parte degli utenti, ma conservandoli per gli screen reader.`]}),`
`,e.jsxs(i.p,{children:["Applica ",e.jsx(i.code,{children:".visible"})," oppure ",e.jsx(i.code,{children:".invisible"})," al bisogno."]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<div class="visible">...</div>
<div class="invisible">...</div>
`})}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-scss",children:`// Classi
.visible {
  visibility: visible;
}
.invisible {
  visibility: hidden;
}
`})}),`
`,e.jsx(i.h2,{id:"screenreaders",children:"Screenreaders"}),`
`,e.jsxs(i.p,{children:["Nascondi un elemento su tutti i dispositivi ",e.jsx(i.strong,{children:"eccetto screen readers"})," con la classe ",e.jsx(i.code,{children:".visually-hidden"}),". Utilizza ",e.jsx(i.code,{children:".visually-hidden-focusable"})," per mostrare l'elemento quando è attivo in focus (es.: da un utente che utilizza la tastiera). Possono anche essere usati come mixin."]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<a class="visually-hidden-focusable" href="#content">Vai al contenuto principale</a>
`})}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-scss",children:`// Usato come mixin
.skip-navigation {
  @include visually-hidden-focusable;
}
`})})]})}function v(n={}){const{wrapper:i}={...d(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(l,{...n})}):l(n)}export{v as default};

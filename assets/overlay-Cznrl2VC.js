import{j as e,M as d,D as o,C as s}from"./blocks-Ba-BLByO.js";import{useMDXComponents as c}from"./index-D34vi_EH.js";import{S as p,E as a,N as l,C as r}from"./overlay.stories-D4fj9Ulx.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-B5mMrHNl.js";function t(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...c(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:p}),`
`,e.jsx(n.h1,{id:"overlay",children:"Overlay"}),`
`,e.jsx("description",{children:"Etichetta opaca per aggiungere testo o icone in sovrimpressione a immagini."}),`
`,e.jsx(n.h2,{id:"cosa-fa",children:"Cosa fa"}),`
`,e.jsx(n.p,{children:"Il componente Overlay sovrappone in modo elegante testo o icone a un’immagine di sfondo, creando un layer visivo che rafforza il messaggio e guida l’utente."}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://designers.italia.it/design-system/componenti/overlay/",rel:"nofollow",children:"Approfondisci come e quando usare il componente Overlay"})}),`
`,e.jsx(n.h2,{id:"anteprima-del-componente",children:"Anteprima del componente"}),`
`,e.jsx(n.p,{children:"La struttura base è composta da:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["un contenitore con classe ",e.jsx(n.code,{children:".overlay-wrapper"}),", all’interno del quale l’elemento (ad esempio un’immagine) mantiene le proprie dimensioni naturali;"]}),`
`,e.jsxs(n.li,{children:["l’overlay con classe ",e.jsx(n.code,{children:".overlay-panel"}),", posizionato nella parte inferiore del contenitore, con altezza fissa e larghezza pari a quella del contenitore stesso."]}),`
`]}),`
`,e.jsx(n.p,{children:"Se il testo contenuto nell'overlay è troppo lungo, viene troncato con ellissi."}),`
`,e.jsxs(n.p,{children:["Aggiungendo la classe ",e.jsx(n.code,{children:".overlay-panel-fullheight"}),", l’overlay copre interamente il contenitore."]}),`
`,e.jsxs("div",{class:"text-muted fst-italic",children:["Gli esempi mostrano le classi applicate al caso di un’immagine all’interno di un contenitore ",e.jsx(n.code,{children:"<figure>"}),". "]}),`
`,e.jsx("div",{class:"callout callout-primary",children:e.jsxs("div",{class:"callout-inner",children:[e.jsx("div",{class:"callout-title",children:e.jsx("span",{class:"text",children:"Stili"})}),e.jsxs("p",{children:[e.jsxs(n.p,{children:[`Se non stai usando il bundle unico, assicurati di avere importato tutti i fogli di stile necessari
da `,e.jsx(n.code,{children:"bootstrap-italia"}),":"]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`@import 'bootstrap-italia/src/scss/base/functions';
@import 'bootstrap-italia/src/scss/base/variables';
@import 'bootstrap-italia/src/scss/base/mixins';
@import 'bootstrap-italia/src/scss/components/_overlay-panel.scss';
`})})]})]})}),`
`,e.jsx(o,{of:a}),`
`,e.jsx(s,{of:a}),`
`,e.jsx(n.h2,{id:"overlay-nero",children:"Overlay nero"}),`
`,e.jsx(o,{of:l}),`
`,e.jsx(s,{of:l}),`
`,e.jsx(n.h2,{id:"overlay-con-icona",children:"Overlay con icona"}),`
`,e.jsx(o,{of:r}),`
`,e.jsx(s,{of:r})]})}function f(i={}){const{wrapper:n}={...c(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{f as default};

import{j as e,M as d,D as o,C as i}from"./blocks-C1WJMGUC.js";import{useMDXComponents as c}from"./index-BrQ7_w4M.js";import{S as p,E as a,N as r,C as l}from"./overlay.stories-BFJpWSAZ.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-90FZwcPR.js";function t(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...c(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:p}),`
`,e.jsx(n.h1,{id:"overlay",children:"Overlay"}),`
`,e.jsx("description",{children:"Etichetta opaca per aggiungere testo o icone in sovrimpressione a immagini"}),`
`,e.jsx(n.h2,{id:"cosa-fa",children:"Cosa fa"}),`
`,e.jsx(n.p,{children:"Il componente Overlay consente di sovrapporre in modo elegante testo o icone ad un’immagine di sfondo, creando un layer visivo che rafforza il messaggio e guida l’utente."}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://designers.italia.it/design-system/componenti/overlay/",rel:"nofollow",children:"Approfondisci come e quando usare il componente Overlay"})}),`
`,e.jsx(n.h2,{id:"anteprima-del-componente",children:"Anteprima del componente"}),`
`,e.jsx(n.p,{children:"La struttura base è composta da:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Un contenitore con classe ",e.jsx(n.code,{children:".overlay-wrapper"}),". L'elemento contenuto (ad esempio una immagine) conserva la sua dimensione naturale."]}),`
`,e.jsxs(n.li,{children:["L’overlay con classe ",e.jsx(n.code,{children:".overlay-panel"})," si posiziona al piede del contenitore. Ha un’altezza fissa e una larghezza corrispondente a quella del contenitore."]}),`
`]}),`
`,e.jsx(n.p,{children:"Nel caso il testo contenuto dell'overlay sia troppo lungo verrà troncato con l’utilizzo di ellissi."}),`
`,e.jsxs(n.p,{children:["Aggiungendo all’Overlay la classe ",e.jsx(n.code,{children:".overlay-panel-fullheight"})," questo coprirà per intero il contenitore."]}),`
`,e.jsxs("div",{class:"text-muted fst-italic",children:["Negli esempi seguenti mostreremo le classi applicate al caso di una immagine con contenitore ",e.jsx(n.code,{children:"<figure>"})," . "]}),`
`,e.jsx("div",{class:"callout callout-primary",children:e.jsxs("div",{class:"callout-inner",children:[e.jsx("div",{class:"callout-title",children:e.jsx("span",{class:"text",children:"Stili"})}),e.jsxs("p",{children:[e.jsxs(n.p,{children:[`In caso non si stia utilizzando il bundle unico, assicurarsi di avere importato tutti i fogli di stile necessari
da `,e.jsx(n.code,{children:"bootstrap-italia"}),":"]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`@import 'bootstrap-italia/src/scss/base/functions';
@import 'bootstrap-italia/src/scss/base/variables';
@import 'bootstrap-italia/src/scss/base/mixins';
@import 'bootstrap-italia/src/scss/components/_overlay-panel.scss';
`})})]})]})}),`
`,e.jsx(o,{of:a}),`
`,e.jsx(i,{of:a}),`
`,e.jsx(n.h2,{id:"overlay-nero",children:"Overlay nero"}),`
`,e.jsx(o,{of:r}),`
`,e.jsx(i,{of:r}),`
`,e.jsx(n.h2,{id:"overlay-con-icona",children:"Overlay con icona"}),`
`,e.jsx(o,{of:l}),`
`,e.jsx(i,{of:l})]})}function v(s={}){const{wrapper:n}={...c(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{v as default};

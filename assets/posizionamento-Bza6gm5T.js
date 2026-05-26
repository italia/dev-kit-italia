import{j as i,M as a}from"./blocks-B4cgbpI_.js";import{useMDXComponents as s}from"./index-DhGLikld.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-R3-NR_41.js";function o(n){const e={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...n.components};return i.jsxs(i.Fragment,{children:[i.jsx(a,{title:"Organizzare gli spazi/Posizionamento"}),`
`,i.jsx(e.h1,{id:"posizionamento",children:"Posizionamento"}),`
`,i.jsx(e.h2,{id:"valori-comuni",children:"Valori comuni"}),`
`,i.jsx(e.p,{children:"Classi per il posizionamento, non sono presenti varianti per la gestione responsive."}),`
`,i.jsx(e.pre,{children:i.jsx(e.code,{className:"language-html",children:`<div class="position-static">...</div>
<div class="position-relative">...</div>
<div class="position-absolute">...</div>
<div class="position-fixed">...</div>
<div class="position-sticky">...</div>
`})}),`
`,i.jsx(e.h2,{id:"posizione-fissa-in-alto",children:"Posizione fissa in alto"}),`
`,i.jsxs(e.p,{children:["Posiziona un elemento in alto nel viewport. Attraverso l'utilizzo di ogni classe ",i.jsx(e.code,{children:"fixed-*"}),` l'elemento assumerà una posizione
`,i.jsx(e.em,{children:"fixed"}),`, ancorandosi al viewport (cioè la finestra del browser) ed uscendo quindi dal normale flusso di posizionamento
del documento.
Assicurati di comprendere appieno le implicazioni della `,i.jsxs(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/position#fixed",rel:"nofollow",children:["posizione ",i.jsx(e.code,{children:"fixed"})]}),`
nel tuo progetto: potrebbe essere necessario utilizzare CSS aggiuntivi.`]}),`
`,i.jsx(e.pre,{children:i.jsx(e.code,{className:"language-html",children:`<div class="fixed-top">...</div>
`})}),`
`,i.jsx(e.h2,{id:"posizione-fissa-in-basso",children:"Posizione fissa in basso"}),`
`,i.jsx(e.p,{children:"Specularmente al paragrafo precedente, posiziona un elemento in basso al viewport."}),`
`,i.jsx(e.pre,{children:i.jsx(e.code,{className:"language-html",children:`<div class="fixed-bottom">...</div>
`})}),`
`,i.jsx(e.h2,{id:"sticky-top",children:"Sticky top"}),`
`,i.jsxs(e.p,{children:[`Posiziona un elemento in alto nel viewport, ma solo dopo che nella pagina avviene uno scroll verticale che lo ancori in quella posizione.
La classe `,i.jsx(e.code,{children:".sticky-top"})," usa la proprietà ",i.jsx(e.code,{children:"position: sticky"})," supportata da tutti i browser moderni."]}),`
`,i.jsx(e.pre,{children:i.jsx(e.code,{className:"language-html",children:`<div class="sticky-top">...</div>
`})})]})}function c(n={}){const{wrapper:e}={...s(),...n.components};return e?i.jsx(e,{...n,children:i.jsx(o,{...n})}):o(n)}export{c as default};

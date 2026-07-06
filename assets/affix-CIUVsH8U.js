import{j as e,M as c,D as a,C as o}from"./blocks-DeoAcVv3.js";import{useMDXComponents as r}from"./index-TUb4XGam.js";import{A as d,a as t,b as s}from"./affix.stories-C9cuvK9q.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-DMYcKo6S.js";function l(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:d}),`
`,e.jsx(n.h1,{id:"affix",children:"Affix"}),`
`,e.jsx("description",{children:"Elemento ancorato su schermata durante lo scorrere di una specifica sezione di pagina."}),`
`,e.jsx(n.h2,{id:"cosa-fa",children:"Cosa fa"}),`
`,e.jsx(n.p,{children:"Il comportamento Affix mantiene un elemento ancorato in una zona fissa dello schermo allo scorrere della pagina ed è particolarmente utile per mantenere visibili intestazioni, barre degli strumenti o pulsanti di azione."}),`
`,e.jsx(n.p,{children:"Un affix rimane inizialmente nella sua posizione originale. Quando la pagina scorre oltre l’elemento, questo viene ancorato a una zona fissa dello schermo, ad esempio la parte superiore, fino alla fine dell'area di ancoraggio che è stata definita. Superata quest’area, l’elemento smette di essere ancorato e scorre insieme alla pagina fino a scomparire."}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://designers.italia.it/design-system/componenti/affix/",rel:"nofollow",children:"Approfondisci come e quando usare il comportamento Affix"})}),`
`,e.jsx(n.h2,{id:"indicazioni-generali",children:"Indicazioni generali"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Assegna la classe ",e.jsx(n.code,{children:".affix-parent"})," al contenitore che delimita l’area in cui l’elemento deve rimanere ancorato. Questo contenitore rappresenta il riferimento spaziale entro cui l’elemento affix può muoversi o restare fissato."]}),`
`,e.jsxs(n.li,{children:["Applica la classe ",e.jsx(n.code,{children:".affix-top"})," oppure ",e.jsx(n.code,{children:".affix-bottom"})," all'elemento da fissare durante lo scroll. Questo elemento è bene che sia un figlio diretto del contenitore con classe ",e.jsx(n.code,{children:".affix-parent"}),", poiché il calcolo della posizione ancorata viene effettuato in relazione a quest’ultimo."]}),`
`]}),`
`,e.jsx("div",{class:"callout callout-warning",children:e.jsxs("div",{class:"callout-inner",children:[e.jsx("div",{class:"callout-title",children:e.jsx("span",{class:"text",children:"Nota"})}),e.jsx("p",{children:e.jsx(n.p,{children:`Assicurati che un elemento Affix non nasconda il contenuto della pagina, soprattutto quando la dimensione della
finestra del browser è ridotta.`})})]})}),`
`,e.jsx(n.h2,{id:"affix-top",children:"Affix top"}),`
`,e.jsx(a,{of:t}),`
`,e.jsx(o,{of:t}),`
`,e.jsx(n.h2,{id:"affix-bottom",children:"Affix bottom"}),`
`,e.jsx(a,{of:s}),`
`,e.jsx(o,{of:s})]})}function h(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(l,{...i})}):l(i)}export{h as default};

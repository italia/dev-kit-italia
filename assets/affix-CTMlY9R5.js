import{j as e,M as c,D as o,C as a}from"./blocks-B0HPh4VD.js";import{useMDXComponents as r}from"./index-RfYGz_Jw.js";import{A as d,a as t,b as s}from"./affix.stories-Cf3HFqIl.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-DREyQnEe.js";function l(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:d}),`
`,e.jsx(n.h1,{id:"affix",children:"Affix"}),`
`,e.jsx("description",{children:"Elemento ancorato su schermata durante lo scorrere di una specifica sezione di pagina"}),`
`,e.jsx(n.h2,{id:"cosa-fa",children:"Cosa fa"}),`
`,e.jsx(n.p,{children:`Un elemento Affix rimane nella sua posizione originale fino a quando l’utente non scorre la pagina oltre l'elemento;
a quel punto, l’elemento viene “ancorato” a una zona fissa dello schermo (ad esempio la parte superiore).`}),`
`,e.jsx(n.p,{children:"Una volta che lo scorrimento della pagina supera l'area di ancoraggio dell'elemento, questo viene nascosto e non è più “ancorato”."}),`
`,e.jsx(n.p,{children:"Questo comportamento è utile, per esempio, per mantenere visibili intestazioni, barre degli strumenti o pulsanti di azione dopo che si è superata una certa sezione del contenuto."}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://designers.italia.it/design-system/componenti/affix/",rel:"nofollow",children:"Approfondisci come e quando usare il componente Affix"})}),`
`,e.jsx(n.h2,{id:"indicazioni-generali",children:"Indicazioni generali"}),`
`,e.jsx(n.p,{children:"In generale, per utilizzare correttamente il comportamento Affix devi:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["assegnare la classe ",e.jsx(n.code,{children:".affix-parent"})," al contenitore che delimita l’area in cui l’elemento deve rimanere ancorato. Questo contenitore rappresenta il riferimento spaziale entro cui l’elemento affix può muoversi o restare fissato."]}),`
`,e.jsxs(n.li,{children:["applicare la classe ",e.jsx(n.code,{children:".affix-top"})," (oppure ",e.jsx(n.code,{children:".affix-bottom"}),") all'elemento da fissare durante lo scroll. Questo elemento è bene che sia un figlio diretto del contenitore con classe ",e.jsx(n.code,{children:".affix-parent"}),", poiché il calcolo della posizione ancorata viene effettuato in relazione a quest’ultimo."]}),`
`]}),`
`,e.jsx("div",{class:"callout callout-warning",children:e.jsxs("div",{class:"callout-inner",children:[e.jsx("div",{class:"callout-title",children:e.jsx("span",{class:"text",children:"Nota"})}),e.jsx("p",{children:e.jsx(n.p,{children:`Assicurati che un elemento Affix non nasconda il contenuto della pagina, soprattutto quando la dimensione della
finestra del browser è ridotta.`})})]})}),`
`,e.jsx(n.h2,{id:"affix-top",children:"Affix top"}),`
`,e.jsx(o,{of:t}),`
`,e.jsx(a,{of:t}),`
`,e.jsx(n.h2,{id:"affix-bottom",children:"Affix bottom"}),`
`,e.jsx(o,{of:s}),`
`,e.jsx(a,{of:s})]})}function h(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(l,{...i})}):l(i)}export{h as default};

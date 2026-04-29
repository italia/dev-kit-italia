import{j as e,M as l,T as r,C as a}from"./blocks-B2DXvGE7.js";import{useMDXComponents as s}from"./index-D9ZdyO8Y.js";import{B as c,L as o,P as d,a as p}from"./it-back.stories-BYUQieT9.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-DvG09N_F.js";function t(i){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:c}),`
`,e.jsx(r,{}),`
`,e.jsx("description",{children:"Elemento di navigazione per tornare alla pagina o alla schermata precedente."}),`
`,e.jsx(n.h2,{id:"cosa-fa",children:"Cosa fa"}),`
`,e.jsx(n.p,{children:"Il componente Back permette all’utente di tornare alla pagina precedente, risultando particolarmente utile nei processi a più step, come la compilazione di una richiesta di un servizio o di un questionario. Puoi implementarlo come link o pulsante."}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://designers.italia.it/design-system/componenti/back/",rel:"nofollow",children:"Approfondisci quando e come usare il componente Back"})}),`
`,e.jsx(n.h3,{id:"alternative-a-questo-componente",children:"Alternative a questo componente"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"/docs/componenti-breadcrumbs--documentazione",children:"Breadcrumbs"}),": per orientarsi nella navigazione di pagine con contenuti informativi."]}),`
`]}),`
`,e.jsx(n.h2,{id:"anteprima-e-attributi-del-componente",children:"Anteprima e attributi del componente"}),`
`,e.jsxs(n.p,{children:["Questo componente non possiede attributi, ma si basa su una struttura HTML predefinita e riutilizzabile. Per vedere l'anteprima del codice, clicca su ",e.jsx(n.strong,{children:"Show code"}),"."]}),`
`,e.jsx(a,{of:o}),`
`,e.jsx(n.h2,{id:"indicazioni-generali",children:"Indicazioni generali"}),`
`,e.jsx(n.p,{children:'La funzionalità "torna indietro", per garantire la massima compatibilità con ogni possibile framework JavaScript, deve essere implementata manualmente:'}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"se usi framework moderni come React (NextJS, Remix, TanStack, ecc.), Angular, Svelte o Vue.js, segui le indicazioni del framework stesso"}),`
`,e.jsxs(n.li,{children:["se usi Javascript Vanilla, registra un event listener sull'elemento desiderato e invoca il metodo ",e.jsx(n.code,{children:"window.history.back()"})," all'interno dell'handler dell'evento."]}),`
`]}),`
`,e.jsx(n.p,{children:'Questo metodo consente di navigare indietro di una singola entry nello stack della cronologia del browser, replicando il comportamento del pulsante "Indietro" nativo del browser.'}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const backButton = document.getElementById('backButton');
backButton.addEventListener('click', (e) => {
  e.preventDefault();
  window.history.back();
});
`})}),`
`,e.jsx(n.p,{children:"Tutti gli esempi hanno questa funzionalità implementata nel loro codice."}),`
`,e.jsx(n.h2,{id:"accessibilità",children:"Accessibilità"}),`
`,e.jsxs(n.p,{children:["Quando necessario, includi un testo alternativo per i lettori di schermo usando un tag ",e.jsx(n.code,{children:"<span>"})," con classe ",e.jsx(n.code,{children:".visually-hidden"}),"."]}),`
`,e.jsx(n.h2,{id:"link",children:"Link"}),`
`,e.jsxs(n.p,{children:["Se vuoi implementare il componente come un link, aggiungi la classe ",e.jsx(n.code,{children:".go-back"})," al tag ",e.jsx(n.code,{children:"<a>"}),"."]}),`
`,e.jsxs(n.p,{children:["Per rendere il componente accessibile e navigabile da tastiera, specifica un valore per l'attributo ",e.jsx(n.code,{children:"href"}),"."]}),`
`,e.jsx(a,{of:o}),`
`,e.jsx(n.h2,{id:"pulsante",children:"Pulsante"}),`
`,e.jsxs(n.p,{children:["Se vuoi implementare il componente come un pulsante, applica la classe ",e.jsx(n.code,{children:".go-back"})," al componente ",e.jsx(n.code,{children:"<it-button>"}),"."]}),`
`,e.jsx(a,{of:d}),`
`,e.jsx(n.h2,{id:"pulsante-con-sola-icona",children:"Pulsante con sola icona"}),`
`,e.jsxs(n.p,{children:["Se vuoi ottenere un pulsante con sola icona e senza testo, includi il testo alternativo per i lettori di schermo in un tag ",e.jsx(n.code,{children:"<span>"})," con classe ",e.jsx(n.code,{children:".visually-hidden"}),"."]}),`
`,e.jsx(a,{of:p})]})}function g(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{g as default};

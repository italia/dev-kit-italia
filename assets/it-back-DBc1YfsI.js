import{j as e,M as l,T as r,C as a}from"./blocks-Byz_BPrk.js";import{useMDXComponents as t}from"./index-DY0hxXWi.js";import{B as c,L as o,P as d,a as p}from"./it-back.stories-BK4bmqqW.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-BcuqimjD.js";function s(i){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:c}),`
`,e.jsx(r,{}),`
`,e.jsx("description",{children:"Elemento di navigazione per tornare alla pagina o alla schermata precedente"}),`
`,e.jsx(n.h2,{id:"cosa-fa",children:"Cosa fa"}),`
`,e.jsx(n.p,{children:`Il componente "Back" guida l'utente a tornare alla pagina precedente da cui si proviene, utile nel caso di processi e moduli da compilare a più step, come può essere la compilazione di un questionario.
Puoi utilizzarlo come link o pulsante.`}),`
`,e.jsx(n.p,{children:"Può essere molto utile ad orientarsi nel contesto di un modulo (Form) composto da diversi passaggi."}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://designers.italia.it/design-system/componenti/back/",rel:"nofollow",children:"Approfondisci quando e come usare il componente Back"})}),`
`,e.jsx(n.h3,{id:"alternative-a-questo-componente",children:"Alternative a questo componente"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Breadcrumbs: per orientarsi nella navigazione di pagine con contenuti informativi."}),`
`]}),`
`,e.jsx(n.h2,{id:"anteprima-e-attributi-del-componente",children:"Anteprima e attributi del componente"}),`
`,e.jsxs(n.p,{children:["Questo componente non possiede attributi, ma si basa su una struttura HTML predefinita e riutilizzabile. Per vedere l'anteprima del codice, clicca su ",e.jsx(n.strong,{children:"Show code"}),"."]}),`
`,e.jsx(a,{of:o}),`
`,e.jsx(n.h2,{id:"indicazioni-generali",children:"Indicazioni generali"}),`
`,e.jsx(n.p,{children:`La funzionalità "torna indietro" deve essere implementata dall'utilizzatore: questo garantisce la massima compatibilità con ogni possibile framework JavaScript.`}),`
`,e.jsx(n.p,{children:"Se stai utilizzando framework moderni come React (NextJS, Remix, TanStack, etc.), Angular, Svelte o Vue.js, puoi integrare questa funzionalità seguendo le best practice specifiche del framework stesso."}),`
`,e.jsxs(n.p,{children:["Se vuoi implementare la funzionalità via Javascript Vanilla invece, registra un event listener sull'elemento desiderato e invoca il metodo ",e.jsx(n.code,{children:"window.history.back()"})," all'interno dell'handler dell'evento."]}),`
`,e.jsx(n.p,{children:`Questo metodo consente di navigare all'indietro di una singola entry nello stack della cronologia del browser, replicando il comportamento del pulsante "Indietro" nativo del browser.`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const backButton = document.getElementById('backButton');
backButton.addEventListener('click', (e) => {
  e.preventDefault();
  window.history.back();
});
`})}),`
`,e.jsx(n.p,{children:"Gli esempi seguenti implementano questa funzionalità nel loro codice di esempio."}),`
`,e.jsx(n.h2,{id:"accessibilità",children:"Accessibilità"}),`
`,e.jsxs(n.p,{children:["Assicurati di includere un testo alternativo per gli screen reader utilizzando un tag ",e.jsx(n.code,{children:"<span>"})," con classe ",e.jsx(n.code,{children:".visually-hidden"})," ove necessario."]}),`
`,e.jsx(n.h2,{id:"link",children:"Link"}),`
`,e.jsxs(n.p,{children:["Quando si utilizza un link (tag ",e.jsx(n.code,{children:"<a>"}),") è necessario aggiungere un valore all'attributo ",e.jsx(n.code,{children:"href"})," perché il link sia accessibile e navigabile via tastiera."]}),`
`,e.jsxs(n.p,{children:["Utilizza la classe ",e.jsx(n.code,{children:".go-back"})," per applicare lo stile appropriato."]}),`
`,e.jsx(a,{of:o}),`
`,e.jsx(n.h2,{id:"pulsante",children:"Pulsante"}),`
`,e.jsxs(n.p,{children:["Applica la classe ",e.jsx(n.code,{children:".go-back"})," al componente ",e.jsx(n.code,{children:"<it-button>"})," per applicare lo stile appropriato."]}),`
`,e.jsx(a,{of:d}),`
`,e.jsx(n.h2,{id:"pulsante-con-sola-icona",children:"Pulsante con sola icona"}),`
`,e.jsxs(n.p,{children:["Puoi creare pulsanti senza testo dotati di sola icona, avendo cura di includere il testo alternativo per gli screen reader in un tag ",e.jsx(n.code,{children:"<span>"})," con classe ",e.jsx(n.code,{children:".visually-hidden"}),"."]}),`
`,e.jsx(a,{of:p})]})}function g(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{g as default};

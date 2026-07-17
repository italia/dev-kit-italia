import{j as e,M as c,T as l,C as a}from"./blocks-ya8DAKnU.js";import{useMDXComponents as s}from"./index-Dd_G0Zrh.js";import{B as r,L as o,N as d,P as p,a as u}from"./it-back.stories-B2auoch0.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-CfubThG-.js";import"./dispatch-cancelable-Dbrx1KBI.js";function t(i){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:r}),`
`,e.jsx(l,{}),`
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
`,e.jsxs(n.p,{children:["Avvolgi nel componente ",e.jsx(n.code,{children:"<it-back>"})," un link o un pulsante con la classe ",e.jsx(n.code,{children:".go-back"}),'. Il componente implementa di default la funzionalità "torna indietro" tramite ',e.jsx(n.code,{children:"window.history.back()"}),', che replica il comportamento del pulsante "Indietro" nativo del browser navigando indietro di una singola entry nello stack della cronologia.']}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"window.history.back()"})," è il comportamento predefinito adatto alla navigazione standard del browser. Se usi framework moderni con un proprio sistema di routing (React/NextJS, Remix, TanStack, Angular, Svelte, Vue.js, ecc.), puoi ",e.jsx(n.strong,{children:"sovrascrivere il comportamento"})," intercettando l'evento ",e.jsx(n.code,{children:"it-back-navigate"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const back = document.querySelector('it-back');
back.addEventListener('it-back-navigate', (e) => {
  e.preventDefault(); // impedisce window.history.back()
  // ...naviga indietro secondo le indicazioni del tuo framework...
});
`})}),`
`,e.jsx(a,{of:d}),`
`,e.jsx(n.p,{children:"Tutti gli esempi hanno la funzionalità di default già attiva."}),`
`,e.jsx(n.h2,{id:"accessibilità",children:"Accessibilità"}),`
`,e.jsxs(n.p,{children:["Quando necessario, includi un testo alternativo per i lettori di schermo usando un tag ",e.jsx(n.code,{children:"<span>"})," con classe ",e.jsx(n.code,{children:".visually-hidden"}),"."]}),`
`,e.jsx(n.h2,{id:"link",children:"Link"}),`
`,e.jsxs(n.p,{children:["Se vuoi implementare il componente come un link, aggiungi la classe ",e.jsx(n.code,{children:".go-back"})," al tag ",e.jsx(n.code,{children:"<a>"})," e avvolgilo in ",e.jsx(n.code,{children:"<it-back>"}),"."]}),`
`,e.jsxs(n.p,{children:["Per rendere il componente accessibile e navigabile da tastiera, specifica un valore per l'attributo ",e.jsx(n.code,{children:"href"}),"."]}),`
`,e.jsx(a,{of:o}),`
`,e.jsx(n.h2,{id:"pulsante",children:"Pulsante"}),`
`,e.jsxs(n.p,{children:["Se vuoi implementare il componente come un pulsante, applica la classe ",e.jsx(n.code,{children:".go-back"})," al componente ",e.jsx(n.code,{children:"<it-button>"})," e avvolgilo in ",e.jsx(n.code,{children:"<it-back>"}),"."]}),`
`,e.jsx(a,{of:p}),`
`,e.jsx(n.h2,{id:"pulsante-con-sola-icona",children:"Pulsante con sola icona"}),`
`,e.jsxs(n.p,{children:["Se vuoi ottenere un pulsante con sola icona e senza testo, includi il testo alternativo per i lettori di schermo in un tag ",e.jsx(n.code,{children:"<span>"})," con classe ",e.jsx(n.code,{children:".visually-hidden"}),"."]}),`
`,e.jsx(a,{of:u}),`
`,e.jsx(n.h2,{id:"proprietà-metodi-ed-eventi-accessibili-via-js",children:"Proprietà, Metodi, ed Eventi accessibili via JS"}),`
`,e.jsx(n.p,{children:"Il componente espone i seguenti eventi accessibili via JavaScript."}),`
`,e.jsx(n.h3,{id:"eventi",children:"Eventi"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"it-back-navigate"})," — emesso al click sul link o pulsante. L'evento è cancellabile: chiamando ",e.jsx(n.code,{children:"event.preventDefault()"})," si impedisce ",e.jsx(n.code,{children:"window.history.back()"})," e si può gestire la navigazione indietro secondo il router del proprio framework."]}),`
`]})]})}function b(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{b as default};

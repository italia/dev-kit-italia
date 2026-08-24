import{j as i,M as a}from"./blocks-CiljGaP5.js";import{useMDXComponents as o}from"./index-dC3epPjb.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-BIx49rSp.js";function t(n){const e={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...n.components};return i.jsxs(i.Fragment,{children:[i.jsx(a,{title:"Migrazione"}),`
`,i.jsx(e.h1,{id:"migrazione-da-bootstrap-italia",children:"Migrazione da Bootstrap Italia"}),`
`,i.jsxs(e.p,{children:["Questa guida è rivolta a chi ha già un progetto basato su ",i.jsx(e.strong,{children:"Bootstrap Italia"}),` e vuole adottare
`,i.jsx(e.strong,{children:"Dev Kit Italia"}),` sostituendo il markup e gli script di Bootstrap Italia con i
Web Components del Design System `,i.jsx(e.strong,{children:".italia"}),"."]}),`
`,i.jsxs(e.p,{children:["L'obiettivo è permettere una ",i.jsx(e.strong,{children:"migrazione graduale"}),`: non è necessario riscrivere l'intero progetto in un'unica
operazione. Si può continuare a utilizzare le classi e i componenti di Bootstrap Italia per le parti non ancora
migrate e, contemporaneamente, iniziare a usare i Web Components per le parti già convertite.`]}),`
`,i.jsx(e.h2,{id:"il-principio-stessa-struttura-della-documentazione",children:"Il principio: stessa struttura della documentazione"}),`
`,i.jsxs(e.p,{children:["La documentazione di Dev Kit Italia è organizzata seguendo le ",i.jsx(e.strong,{children:"stesse sezioni"}),` della documentazione di
Bootstrap Italia. Quando devi sostituire un componente, è sufficiente cercare la sezione corrispondente in questa
documentazione (ad esempio `,i.jsx(e.em,{children:"Componenti → Button"}),", ",i.jsx(e.em,{children:"Componenti → Accordion"}),", ",i.jsx(e.em,{children:"Componenti → Card"}),`…) e seguire le
indicazioni per riprodurre, con il relativo Web Component, ciò che prima ottenevi con il markup di Bootstrap Italia.`]}),`
`,i.jsx(e.h2,{id:"come-abilitare-la-migrazione-graduale",children:"Come abilitare la migrazione graduale"}),`
`,i.jsx(e.p,{children:"In un progetto che parte da zero, Dev Kit Italia si importa così:"}),`
`,i.jsx(e.pre,{children:i.jsx(e.code,{className:"language-javascript",children:`import '@italia/dev-kit-italia/fonts.css';
import '@italia/dev-kit-italia/styles.css';
import '@italia/dev-kit-italia/elements.js';
`})}),`
`,i.jsxs(e.p,{children:["Il file ",i.jsx(e.code,{children:"styles.css"})," contiene ",i.jsx(e.strong,{children:"solo"}),` gli stili strettamente necessari: la base di Bootstrap Italia e le porzioni
di CSS che servono al di fuori dei Web Components (griglia, tipografia, form, header, footer, ecc.), insieme agli
stili interni dei componenti. È la scelta consigliata per un prodotto finale, perché mantiene il CSS più leggero.`]}),`
`,i.jsxs(e.p,{children:[`Durante una migrazione, però, il progetto contiene ancora molto markup che usa le classi di Bootstrap Italia. Per
fare in modo che quelle classi continuino a funzionare `,i.jsx(e.strong,{children:"mentre"}),` si introducono i Web Components, sostituisci
`,i.jsx(e.code,{children:"styles.css"})," con ",i.jsx(e.code,{children:"styles-for-migration.css"}),":"]}),`
`,i.jsx(e.pre,{children:i.jsx(e.code,{className:"language-javascript",children:`import '@italia/dev-kit-italia/fonts.css';
import '@italia/dev-kit-italia/styles-for-migration.css';
import '@italia/dev-kit-italia/elements.js';
`})}),`
`,i.jsxs(e.p,{children:["Il file ",i.jsx(e.code,{children:"styles-for-migration.css"})," include ",i.jsx(e.strong,{children:"l'intero set di stili di Bootstrap Italia"}),` oltre agli stili dei Web Components. In questo
modo:`]}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsx(e.li,{children:"il markup esistente basato sulle classi di Bootstrap Italia continua a essere stilizzato correttamente;"}),`
`,i.jsx(e.li,{children:"i Web Components già introdotti funzionano e vengono visualizzati come previsto;"}),`
`,i.jsxs(e.li,{children:["puoi convertire i componenti ",i.jsx(e.strong,{children:"progressivamente"}),", senza interruzioni visive."]}),`
`]}),`
`,i.jsxs("it-callout",{variant:"warning","heading-level":"h3",children:[i.jsx("it-icon",{slot:"icon",name:"it-warning-circle",size:"md"}),i.jsx("span",{slot:"title",children:"Attenzione"}),i.jsxs("p",{children:[i.jsx("code",{children:"styles-for-migration.css"})," è più pesante di ",i.jsx("code",{children:"styles.css"}),", perché contiene l'intero CSS di Bootstrap Italia. È pensato come soluzione ",i.jsx("strong",{children:"temporanea"})," per la fase di migrazione e non è consigliato per il prodotto finale."]})]}),`
`,i.jsx(e.h2,{id:"il-javascript-di-bootstrap-italia",children:"Il JavaScript di Bootstrap Italia"}),`
`,i.jsxs(e.p,{children:[i.jsx(e.code,{children:"styles-for-migration.css"})," fornisce soltanto gli ",i.jsx(e.strong,{children:"stili"}),`. I componenti di Bootstrap Italia non ancora migrati che hanno
comportamenti interattivi (dropdown, collapse, modali, ecc.) continuano a dipendere dal `,i.jsx(e.strong,{children:`JavaScript di Bootstrap
Italia`}),`. Durante la migrazione, quindi, è necessario continuare a importare e inizializzare lo script di Bootstrap
Italia, accanto agli `,i.jsx(e.code,{children:"elements.js"})," di Dev Kit Italia:"]}),`
`,i.jsx(e.pre,{children:i.jsx(e.code,{className:"language-javascript",children:`import '@italia/dev-kit-italia/fonts.css';
import '@italia/dev-kit-italia/styles-for-migration.css';

// JavaScript di Bootstrap Italia, per i componenti non ancora migrati
import 'bootstrap-italia';

// Web Components di Dev Kit Italia
import '@italia/dev-kit-italia/elements.js';
`})}),`
`,i.jsxs(e.p,{children:[`Man mano che sostituisci i componenti con i relativi Web Components, la dipendenza dal JavaScript di Bootstrap Italia
si riduce. Quando nessuna parte del progetto ne ha più bisogno, puoi rimuovere completamente l'import di
`,i.jsx(e.code,{children:"bootstrap-italia"}),"."]}),`
`,i.jsxs("it-callout",{"heading-level":"h3",children:[i.jsx("span",{slot:"title",children:"Nota"}),i.jsxs("p",{children:["Per i dettagli sull'import e l'inizializzazione del JavaScript di Bootstrap Italia, fai riferimento alla ",i.jsx(e.a,{href:"https://italia.github.io/bootstrap-italia/docs/come-iniziare/introduzione/",rel:"nofollow",children:"documentazione ufficiale di Bootstrap Italia"}),"."]})]}),`
`,i.jsx(e.h2,{id:"procedere-componente-per-componente",children:"Procedere componente per componente"}),`
`,i.jsxs(e.p,{children:["Una volta impostato l'import di ",i.jsx(e.code,{children:"styles-for-migration.css"}),", il flusso di lavoro tipico è:"]}),`
`,i.jsxs(e.ol,{children:[`
`,i.jsx(e.li,{children:"Scegli un componente da migrare (ad esempio un pulsante)."}),`
`,i.jsxs(e.li,{children:["Apri la sezione corrispondente in questa documentazione (",i.jsx(e.em,{children:"Componenti → Button"}),")."]}),`
`,i.jsxs(e.li,{children:["Sostituisci il markup di Bootstrap Italia con il relativo Web Component (",i.jsx(e.code,{children:"<it-button>"}),"…) seguendo gli esempi."]}),`
`,i.jsx(e.li,{children:"Verifica il risultato: il resto della pagina, ancora basato su Bootstrap Italia, continua a funzionare."}),`
`,i.jsx(e.li,{children:"Ripeti per il componente successivo."}),`
`]}),`
`,i.jsx(e.p,{children:`Le parti di interfaccia per cui non esiste un Web Component dedicato restano gestite dalle classi di
Bootstrap Italia.`}),`
`,i.jsx(e.h2,{id:"completare-la-migrazione",children:"Completare la migrazione"}),`
`,i.jsxs(e.p,{children:[`Quando tutto il markup è stato convertito ai Web Components e non dipendi più né dalle classi né dal JavaScript di
Bootstrap Italia, puoi tornare a importare `,i.jsx(e.code,{children:"styles.css"})," al posto di ",i.jsx(e.code,{children:"styles-for-migration.css"}),` e rimuovere l'import di
`,i.jsx(e.code,{children:"bootstrap-italia"}),", per alleggerire il bundle e ottimizzarlo per la produzione:"]}),`
`,i.jsx(e.pre,{children:i.jsx(e.code,{className:"language-javascript",children:`import '@italia/dev-kit-italia/fonts.css';
import '@italia/dev-kit-italia/styles.css';
import '@italia/dev-kit-italia/elements.js';
`})})]})}function d(n={}){const{wrapper:e}={...o(),...n.components};return e?i.jsx(e,{...n,children:i.jsx(t,{...n})}):t(n)}export{d as default};

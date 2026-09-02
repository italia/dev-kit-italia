import{j as e,M as r,C as o,a as c,D as l}from"./blocks-AWYFoa02.js";import{useMDXComponents as s}from"./index-DFJevQmi.js";import{S as d,E as a,V as m,a as p,b as h,P as u}from"./it-section.stories-DsSEPY-k.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-BAOCzTeu.js";function t(n){const i={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:d}),`
`,e.jsx(i.h1,{id:"section",children:"Section"}),`
`,e.jsx("description",{children:"Sezione per creare raggruppamenti orizzontali di contenuti coerenti e con sfondi dedicati"}),`
`,e.jsx(i.h2,{id:"cosa-fa",children:"Cosa fa"}),`
`,e.jsxs(i.p,{children:["Il componente Section (",e.jsx(i.code,{children:"it-section"}),`), in italiano sezione, rappresenta un contenitore visivo per introdurre sezioni di contenuto con o senza immagine.
È utile per organizzare e suddividere contenuti particolarmente ampi e complessi, permettendo agli utenti di navigare facilmente tra le diverse parti.`]}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"https://designers.italia.it/design-system/componenti/sections/",rel:"nofollow",children:"Approfondisci come e quando usare il componente Section"})}),`
`,e.jsx(i.h2,{id:"anteprima-e-attributi-del-componente",children:"Anteprima e attributi del componente"}),`
`,e.jsxs(i.p,{children:["Modifica gli attributi nella tabella per personalizzare in tempo reale l'aspetto e il comportamento del componente. Per vedere come cambia il codice, clicca su ",e.jsx(i.strong,{children:"Show code"}),"."]}),`
`,e.jsx(o,{of:a}),`
`,e.jsx(c,{of:a}),`
`,e.jsx(i.h2,{id:"accessibilità",children:"Accessibilità"}),`
`,e.jsxs(i.p,{children:["Il componente ",e.jsx(i.code,{children:"it-section"})," è progettato per essere accessibile:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["il tag ",e.jsx(i.code,{children:"<section>"})," generato dal componente viene automaticamente associato al primo heading (h1-h6) presente nel contenuto tramite l'attributo ",e.jsx(i.code,{children:"aria-labelledby"}),". Se l'heading non ha un id, il componente ne genera uno automaticamente;"]}),`
`,e.jsxs(i.li,{children:["le immagini fornite tramite l'attributo ",e.jsx(i.code,{children:"image"})," sono considerate ",e.jsx(i.strong,{children:"decorative"}),": vengono rese con ",e.jsx(i.code,{children:'alt=""'})," e ",e.jsx(i.code,{children:'aria-hidden="true"'}),", quindi non vengono annunciate dagli screen reader."]}),`
`]}),`
`,e.jsx(i.p,{children:"Per garantire un'esperienza accessibile:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"assicurati che ogni sezione contenga almeno un'intestazione semantica (h2, h3, ecc.) che descriva il contenuto della sezione;"}),`
`,e.jsxs(i.li,{children:["usa ",e.jsx(i.code,{children:"it-section"})," per raggruppamenti semantici con particolari necessità di varianti di stile e/o inserimento di immagini di sfondo, mentre se stai implementando un semplice contenitore considera l'uso di ",e.jsx(i.code,{children:"<section>"}),", ",e.jsx(i.code,{children:"<div>"})," o di altri elementi HTML semantici appropriati."]}),`
`]}),`
`,e.jsx(i.h2,{id:"varianti-di-sfondo",children:"Varianti di sfondo"}),`
`,e.jsx(i.p,{children:"Sono disponibili più varianti colore di sfondo per le sezioni, corrispondenti alle classi di Bootstrap Italia:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"muted"}),";"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"emphasis"}),", applica automaticamente il testo bianco;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"primary"}),", applica automaticamente il testo bianco."]}),`
`]}),`
`,e.jsx(i.p,{children:"Il componente Section ha uno sfondo trasparente di default."}),`
`,e.jsx(o,{of:m}),`
`,e.jsx(i.h2,{id:"sezione-con-immagine-decorativa",children:"Sezione con immagine decorativa"}),`
`,e.jsxs(i.p,{children:["Per aggiungere un'immagine come sfondo della sezione, inserisci l'URL nell'attributo ",e.jsx(i.code,{children:"image"}),". Le dimensioni dell'immagine si adattano automaticamente."]}),`
`,e.jsxs(i.p,{children:["Se l'immagine di sfondo è scura, usa l'attributo ",e.jsx(i.code,{children:"inverse"})," per rendere il testo bianco e mantenere una buona leggibilità."]}),`
`,e.jsx(o,{of:p}),`
`,e.jsx(i.h2,{id:"sezione-con-card",children:"Sezione con card"}),`
`,e.jsx("div",{class:"callout callout-warning",children:e.jsxs("div",{class:"callout-inner",children:[e.jsx("div",{class:"callout-title",children:e.jsx("span",{class:"text",children:"Cards non ancora implementate"})}),e.jsx("p",{children:e.jsx(i.p,{children:"Le card non sono ancora state implementate nel Dev Kit Italia. La sezione seguente è a scopo puramente esemplificativo e verrà aggiornata quando le card saranno disponibili."})})]})}),`
`,e.jsx(i.p,{children:"Per aggiungere una serie di card all'interno di una sezione si consiglia di utilizzare le griglie per garantire un corretto margine fra gli elementi."}),`
`,e.jsx(o,{of:h}),`
`,e.jsx(i.h2,{id:"personalizzazione-degli-stili",children:"Personalizzazione degli stili"}),`
`,e.jsx(l,{of:u})]})}function v(n={}){const{wrapper:i}={...s(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(t,{...n})}):t(n)}export{v as default};

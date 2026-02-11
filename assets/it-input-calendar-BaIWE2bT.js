import{j as e,M as l,C as o,a as s}from"./blocks-B5p0HTzn.js";import{useMDXComponents as t}from"./index-DJQEn02C.js";import{S as d,E as a,M as c,a as p}from"./it-input-calendar.stories-BFgc6KUA.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-DcIH0XRX.js";import"./types-CucKb5le.js";function r(n){const i={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:d}),`
`,e.jsx(i.h1,{id:"input-calendario",children:"Input Calendario"}),`
`,e.jsx("description",{children:"Campo per selezionare una data all'interno di un calendario"}),`
`,e.jsx(i.h2,{id:"cosa-fa",children:"Cosa fa"}),`
`,e.jsx(i.p,{children:"Il componente calendario, o datepicker, consente all’utente di selezionare una data specifica, sia digitando manualmente il valore, sia scegliendo il valore da un calendario."}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"https://designers.italia.it/design-system/componenti/datepicker/",rel:"nofollow",children:"Approfondisci come e quando usare il componente Datepicker"})}),`
`,e.jsx(i.h2,{id:"anteprima-e-attributi-del-componente",children:"Anteprima e attributi del componente"}),`
`,e.jsxs(i.p,{children:["Modifica gli attributi nella tabella per personalizzare in tempo reale l'aspetto e il comportamento del componente. Per vedere come cambia il codice, clicca su ",e.jsx(i.strong,{children:"Show code"}),"."]}),`
`,e.jsx(o,{of:a}),`
`,e.jsx(s,{of:a}),`
`,e.jsx(i.h2,{id:"indicazioni-generali",children:"Indicazioni generali"}),`
`,e.jsxs(i.p,{children:["L’input di tipo calendario è una variante del componente ",e.jsx(i.code,{children:"<it-input>"})," con l'attributo ",e.jsx(i.code,{children:"type"})," impostato su ",e.jsx(i.code,{children:"date"})," (",e.jsx(i.code,{children:'type="date"'}),")."]}),`
`,e.jsx(i.p,{children:"Pertanto, per quanto riguarda:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["la ",e.jsx(i.strong,{children:"validazione"})," e la ",e.jsx(i.strong,{children:"gestione degli errori"})]}),`
`,e.jsxs(i.li,{children:["la ",e.jsx(i.strong,{children:"gestione degli eventi"})]}),`
`,e.jsxs(i.li,{children:["i ",e.jsx(i.strong,{children:"metodi e le proprietà"})," accessibili tramite JavaScript"]}),`
`,e.jsxs(i.li,{children:["il ",e.jsx(i.strong,{children:"supporto all’internazionalizzazione (i18n)"})]}),`
`]}),`
`,e.jsxs(i.p,{children:["è necessario fare riferimento alla ",e.jsx(i.a,{href:"?path=/docs/componenti-form-input--documentazione",children:"documentazione di it-input"}),"."]}),`
`,e.jsx(i.h2,{id:"restringere-il-periodo-di-validità",children:"Restringere il periodo di validità"}),`
`,e.jsxs(i.p,{children:["Puoi limitare l’intervallo di date selezionabili impostando gli attributi ",e.jsx(i.code,{children:"min"})," e/o ",e.jsx(i.code,{children:"max"})," con una stringa nel formato ",e.jsx(i.code,{children:"YYYY-MM-DD"}),". Non è necessario utilizzare entrambi: puoi impostarne solo uno se vuoi."]}),`
`,e.jsx(i.p,{children:"Se non usi una validazione custom, la validazione nativa terrà conto di questi range per validare il valore inserito nel campo."}),`
`,e.jsx(o,{of:c}),`
`,e.jsx(i.h2,{id:"impostare-intervalli-di-date-regolari",children:"Impostare intervalli di date regolari"}),`
`,e.jsxs(i.p,{children:["Puoi impostare intervalli di date regolari validi, utilizzando l'attributo ",e.jsx(i.code,{children:"step"}),`.
Il valore predefinito di `,e.jsx(i.code,{children:"step"})," è ",e.jsx(i.code,{children:"1"})," (ogni giorno è selezionabile)."]}),`
`,e.jsxs(i.p,{children:["Nell'esempio qui sotto, lo step è stato impostato a ",e.jsx(i.code,{children:"7"})," per permettere solo date a intervalli di 7 giorni (utile per selezionare solo i lunedì, ad esempio)."]}),`
`,e.jsx(o,{of:p})]})}function f(n={}){const{wrapper:i}={...t(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(r,{...n})}):r(n)}export{f as default};

import{j as e,M as t,C as o,a as s}from"./blocks-B4cgbpI_.js";import{useMDXComponents as r}from"./index-DhGLikld.js";import{S as c,E as a,M as d,a as p}from"./it-input-calendar.stories-CrlJml4K.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-R3-NR_41.js";import"./types-CucKb5le.js";function l(n){const i={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:c}),`
`,e.jsx(i.h1,{id:"datepicker",children:"Datepicker"}),`
`,e.jsx("description",{children:"Campo per selezionare una data all'interno di un calendario o inserirla manualmente."}),`
`,e.jsx(i.h2,{id:"cosa-fa",children:"Cosa fa"}),`
`,e.jsxs(i.p,{children:["Il componente Datepicker (",e.jsx(i.code,{children:"it-input"})," con ",e.jsx(i.code,{children:'type="date"'}),"), consente all’utente di selezionare una data specifica, sia digitandola manualmente che scegliendola da un calendario."]}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"https://designers.italia.it/design-system/componenti/datepicker/",rel:"nofollow",children:"Approfondisci come e quando usare il componente Datepicker"})}),`
`,e.jsx(i.h2,{id:"anteprima-e-attributi-del-componente",children:"Anteprima e attributi del componente"}),`
`,e.jsxs(i.p,{children:["Modifica gli attributi nella tabella per personalizzare in tempo reale l'aspetto e il comportamento del componente. Per vedere come cambia il codice, clicca su ",e.jsx(i.strong,{children:"Show code"}),"."]}),`
`,e.jsx(o,{of:a}),`
`,e.jsx(s,{of:a}),`
`,e.jsx(i.h2,{id:"indicazioni-generali",children:"Indicazioni generali"}),`
`,e.jsxs(i.p,{children:["Il componente Datepicker è una variante del componente ",e.jsx(i.code,{children:"<it-input>"})," con l'attributo ",e.jsx(i.code,{children:"type"})," impostato su ",e.jsx(i.code,{children:"date"})," (",e.jsx(i.code,{children:'type="date"'}),")."]}),`
`,e.jsxs(i.p,{children:["Fai riferimento alla ",e.jsx(i.a,{href:"?path=/docs/componenti-form-input--documentazione",children:"documentazione del componente Input"})," per:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["la ",e.jsx(i.strong,{children:"validazione"})," e la ",e.jsx(i.strong,{children:"gestione degli errori"}),";"]}),`
`,e.jsxs(i.li,{children:["la ",e.jsx(i.strong,{children:"gestione degli eventi"}),";"]}),`
`,e.jsxs(i.li,{children:["i ",e.jsx(i.strong,{children:"metodi e le proprietà"})," accessibili tramite JavaScript;"]}),`
`,e.jsxs(i.li,{children:["il ",e.jsx(i.strong,{children:"supporto all’internazionalizzazione (i18n)"}),"."]}),`
`]}),`
`,e.jsx(i.h2,{id:"limitare-la-selezione-a-un-intervallo-specifico",children:"Limitare la selezione a un intervallo specifico"}),`
`,e.jsxs(i.p,{children:["Per limitare la selezione delle date a un intervallo specifico, imposta gli attributi ",e.jsx(i.code,{children:"min"})," e/o ",e.jsx(i.code,{children:"max"})," con una stringa nel formato ",e.jsx(i.code,{children:"YYYY-MM-DD"}),". Non è necessario utilizzare entrambi: puoi impostarne anche solo uno, in base alle necessità."]}),`
`,e.jsx(i.p,{children:"Se non usi una validazione personalizzata, la validazione nativa terrà conto di questi range per validare il valore inserito nel campo."}),`
`,e.jsx(o,{of:d}),`
`,e.jsx(i.h2,{id:"limitare-la-selezione-a-intervalli-regolari",children:"Limitare la selezione a intervalli regolari"}),`
`,e.jsxs(i.p,{children:["Per limitare la selezione delle date a intervalli regolari, modifica il valore dell'attributo ",e.jsx(i.code,{children:"step"}),"."]}),`
`,e.jsxs(i.p,{children:["Il valore predefinito ",e.jsx(i.code,{children:"1"})," permette di selezionare ogni giorno, quindi cambialo con un valore diverso da 1 in base all'intervallo che ti serve: ",e.jsx(i.code,{children:"2"})," per intervalli di 2 giorni, ",e.jsx(i.code,{children:"3"})," per 3 giorni, ecc."]}),`
`,e.jsxs(i.p,{children:["In questo esempio, ",e.jsx(i.code,{children:"step"})," è stato impostato a ",e.jsx(i.code,{children:"7"})," per permettere solo date a intervalli di 7 giorni. Questa impostazione è utile per far selezionare solo uno specifico giorno della settimana, come ad esempio i lunedì."]}),`
`,e.jsx(o,{of:p})]})}function f(n={}){const{wrapper:i}={...r(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(l,{...n})}):l(n)}export{f as default};

import{j as e,M as l,T as t,C as a}from"./blocks-Byz_BPrk.js";import{useMDXComponents as r}from"./index-DY0hxXWi.js";import{S as o,a as c,b as d,c as p,d as u,e as h,f as x}from"./it-sidebar.stories-CQSejZsK.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-BcuqimjD.js";function s(n){const i={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:o}),`
`,e.jsx(t,{}),`
`,e.jsx("description",{children:"Barra di navigazione laterale che include liste di link diretti o annidati."}),`
`,e.jsx(i.h2,{id:"cosa-fa",children:"Cosa fa"}),`
`,e.jsx(i.p,{children:"Utilizza il componente Sidebar per navigare tra le pagine che appartengono a una sezione di un sito. A seconda dell'organizzazione dei contenuti, la barra di navigazione può presentare liste di link diretti o annidati sotto una voce che li raccoglie."}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"https://designers.italia.it/design-system/componenti/sidebar/",rel:"nofollow",children:"Approfondisci quando e come usare il componente Sidebar"})}),`
`,e.jsx(i.h3,{id:"alternative-a-questo-componente",children:"Alternative a questo componente"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Tabs: per offrire un’esperienza di navigazione semplificata, sopratutto in caso di poche pagine o contenuti."}),`
`,e.jsx(i.li,{children:"Navscroll: per fornire una navigazione veloce tra i contenuti presenti all’interno di una stessa pagina (navigazione tramite ancore)."}),`
`]}),`
`,e.jsx(i.h2,{id:"anteprima-e-attributi-del-componente",children:"Anteprima e attributi del componente"}),`
`,e.jsxs(i.p,{children:["Questo componente non possiede attributi, ma si basa su una struttura HTML predefinita e riutilizzabile. Per vedere l'anteprima del codice, clicca su ",e.jsx(i.strong,{children:"Show code"}),"."]}),`
`,e.jsx(a,{of:c}),`
`,e.jsx(i.h2,{id:"accessibilità",children:"Accessibilità"}),`
`,e.jsxs(i.p,{children:[`Il componente Sidebar segue le best practice per l'accessibilità, garantendo una navigazione intuitiva e fruibile da tutti gli utenti.
Viene implementato come una lista di navigazione all'interno di un elemento `,e.jsx(i.code,{children:"<aside>"}),", che indica chiaramente il suo ruolo di navigazione laterale."]}),`
`,e.jsx(i.p,{children:"Per garantire un'esperienza accessibile, segui queste linee guida:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Indica sempre ",e.jsx(i.strong,{children:"visivamente"})," la pagina corrente utilizzando la classe ",e.jsx(i.code,{children:".active"})," sul link corrispondente"]}),`
`,e.jsxs(i.li,{children:["Indica sempre ",e.jsx(i.strong,{children:"alle tecnologie assistive"})," la pagina corrente utilizzando l'attributo ",e.jsx(i.code,{children:'aria-current="page"'})," sul link corrispondente"]}),`
`,e.jsxs(i.li,{children:["Usa l'attributo ",e.jsx(i.code,{children:'aria-disabled="true"'})," per i link disabilitati per garantire il corretto supporto alle tecnologie assistive"]}),`
`,e.jsxs(i.li,{children:["Per le liste collassabili, il componente ",e.jsx(i.code,{children:"it-collapse"})," gestisce automaticamente gli attributi ARIA necessari (",e.jsx(i.code,{children:"aria-expanded"}),", ",e.jsx(i.code,{children:"aria-controls"}),", ",e.jsx(i.code,{children:"role"}),") per garantire l'accessibilità"]}),`
`,e.jsx(i.li,{children:"Disabilita via JavaScript la navigazione dei link/collapse disabilitati per evitare comportamenti inattesi: le diverse varianti forniscono un'implementazione di esempio."}),`
`]}),`
`,e.jsx(i.h2,{id:"sidebar-con-icone",children:"Sidebar con icone"}),`
`,e.jsxs(i.p,{children:["Per aggiungere icone alla lista di link contenuta nella sidebar, utilizza il componente ",e.jsx(i.code,{children:"<it-icon>"})," all'interno dei link con classe ",e.jsx(i.code,{children:".icon-left"}),"."]}),`
`,e.jsx(a,{of:d}),`
`,e.jsx(i.h2,{id:"sidebar-con-linea-a-destra",children:"Sidebar con linea a destra"}),`
`,e.jsxs(i.p,{children:["Per creare una sidebar con linea separatrice a destra è aggiungi a a ",e.jsx(i.code,{children:'<aside class="sidebar-wrapper">'})," la classe ",e.jsx(i.code,{children:".it-line-right-side"}),"."]}),`
`,e.jsx(a,{of:p}),`
`,e.jsx(i.h2,{id:"sidebar-con-linea-a-sinistra",children:"Sidebar con linea a sinistra"}),`
`,e.jsxs(i.p,{children:["Per creare una sidebar con linea separatrice a sinistra è aggiungi a a ",e.jsx(i.code,{children:'<aside class="sidebar-wrapper">'})," la classe ",e.jsx(i.code,{children:".it-line-left-side"}),"."]}),`
`,e.jsx(a,{of:u}),`
`,e.jsx(i.h2,{id:"sidebar-annidata",children:"Sidebar annidata"}),`
`,e.jsxs(i.p,{children:["La Sidebar può contenere una lista di link primaria annidata utilizzando la classe ",e.jsx(i.code,{children:".link-sublist"})," per le sotto-liste espanse."]}),`
`,e.jsxs(i.p,{children:["Per rendere collassabili le sottosezioni della sidebar, utilizza il componente ",e.jsx(i.code,{children:"it-collapse"})," integrato nelle liste di navigazione."]}),`
`,e.jsxs(i.p,{children:["Il componente ",e.jsx(i.code,{children:"it-collapse"})," permette di espandere e comprimere le sottosezioni in modo interattivo, migliorando l'esperienza di navigazione su sidebar con molte voci."]}),`
`,e.jsxs(i.p,{children:["Consulta la documentazione del ",e.jsx(i.a,{href:"/docs/componenti-collapse--documentazione",children:"componente Collapse"})," per maggiori dettagli sull'uso di ",e.jsx(i.code,{children:"it-collapse"}),"."]}),`
`,e.jsx(a,{of:h}),`
`,e.jsx(i.h2,{id:"sidebar-tema-scuro",children:"Sidebar tema scuro"}),`
`,e.jsxs(i.p,{children:["Per cambiare il tema della sidebar e renderla scura aggiungi a ",e.jsx(i.code,{children:'<aside class="sidebar-wrapper">'})," la classe ",e.jsx(i.code,{children:".theme-dark"}),"."]}),`
`,e.jsx(a,{of:x})]})}function v(n={}){const{wrapper:i}={...r(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(s,{...n})}):s(n)}export{v as default};

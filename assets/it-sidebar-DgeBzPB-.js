import{j as e,M as l,T as o,C as a}from"./blocks-DXLRb6dd.js";import{useMDXComponents as r}from"./index-BXPo2YyC.js";import{S as c,a as d,b as t,c as p,d as h,e as u,f as x}from"./it-sidebar.stories-SraMvVQ6.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-Duv5YF1p.js";function s(n){const i={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:c}),`
`,e.jsx(o,{}),`
`,e.jsx("description",{children:"Barra di navigazione secondaria, include liste di link e liste di link annidate."}),`
`,e.jsx(i.h2,{id:"cosa-fa",children:"Cosa fa"}),`
`,e.jsx(i.p,{children:"Il componente Sidebar permette di navigare tra le pagine che appartengono a una sezione di un sito. A seconda dell'organizzazione dei contenuti, la barra di navigazione può presentare liste di link diretti o annidati sotto una voce che li raccoglie."}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"https://designers.italia.it/design-system/componenti/sidebar/",rel:"nofollow",children:"Approfondisci quando e come usare il componente Sidebar"})}),`
`,e.jsx(i.h3,{id:"alternative-a-questo-componente",children:"Alternative a questo componente"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"/docs/componenti-tabs--documentazione",children:"Tabs"})," : per offrire un’esperienza di navigazione semplificata, sopratutto in caso di poche pagine o contenuti."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"/docs/componenti-navscroll--documentazione",children:"Navscroll"}),": per fornire una navigazione veloce tra i contenuti presenti all’interno di una stessa pagina (navigazione tramite ancore)."]}),`
`]}),`
`,e.jsx(i.h2,{id:"anteprima-e-attributi-del-componente",children:"Anteprima e attributi del componente"}),`
`,e.jsxs(i.p,{children:["Questo componente non possiede attributi, ma si basa su una struttura HTML predefinita e riutilizzabile. Per vedere l'anteprima del codice, clicca su ",e.jsx(i.strong,{children:"Show code"}),"."]}),`
`,e.jsx(a,{of:d}),`
`,e.jsx(i.h2,{id:"accessibilità",children:"Accessibilità"}),`
`,e.jsxs(i.p,{children:[`Il componente Sidebar segue le migliori pratiche di accessibilità e garantisce una navigazione intuitiva e fruibile per tutte le persone.
Negli esempi `,e.jsx(i.code,{children:".sidebar-wrapper"})," è un elemento ",e.jsx(i.code,{children:"<aside>"}),", con il titolo come nome tramite ",e.jsx(i.code,{children:"aria-labelledby"}),": usalo se nella pagina la sidebar è un contenuto complementare."]}),`
`,e.jsx(i.p,{children:"Per garantire un'esperienza accessibile, assicurati di:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["usare un ",e.jsx(i.code,{children:"<nav>"})," per ogni lista di link (",e.jsx(i.code,{children:".link-list-wrapper"}),") e, quando nella pagina ci sono più ",e.jsx(i.code,{children:"<nav>"}),", dare a ciascuno un ",e.jsx(i.code,{children:"aria-label"})," distinto che ne indichi la funzione;"]}),`
`,e.jsxs(i.li,{children:["non inserire il titolo come elemento ",e.jsx(i.code,{children:"<li>"}),", perché verrebbe contato tra gli elementi della lista: posizionarlo prima della lista, all'inizio di ",e.jsx(i.code,{children:".sidebar-wrapper"})," come negli esempi, oppure dentro il ",e.jsx(i.code,{children:"<nav>"})," della lista, usandolo come nome del ",e.jsx(i.code,{children:"<nav>"})," tramite ",e.jsx(i.code,{children:"aria-labelledby"})," al posto di ",e.jsx(i.code,{children:"aria-label"}),";"]}),`
`,e.jsxs(i.li,{children:["assegnare al titolo un ",e.jsx(i.code,{children:"id"})," unico nella pagina quando è usato come nome tramite ",e.jsx(i.code,{children:"aria-labelledby"}),";"]}),`
`,e.jsxs(i.li,{children:["indicare sempre ",e.jsx(i.strong,{children:"visivamente"})," la pagina corrente, usando la classe ",e.jsx(i.code,{children:".active"})," sul link corrispondente;"]}),`
`,e.jsxs(i.li,{children:["indicare sempre ",e.jsx(i.strong,{children:"alle tecnologie assistive"})," la pagina corrente, usando l'attributo ",e.jsx(i.code,{children:'aria-current="page"'})," sul link corrispondente;"]}),`
`,e.jsxs(i.li,{children:["segnalare i link disabilitati alle tecnologie assistive, usando l'attributo ",e.jsx(i.code,{children:'aria-disabled="true"'}),";"]}),`
`,e.jsxs(i.li,{children:["usare il componente ",e.jsx(i.code,{children:"<it-collapse>"})," per le liste collassabili, che gestisce automaticamente gli attributi ARIA necessari (",e.jsx(i.code,{children:"aria-expanded"}),", ",e.jsx(i.code,{children:"aria-controls"}),", ",e.jsx(i.code,{children:"role"}),");"]}),`
`,e.jsx(i.li,{children:"disabilitare via JavaScript la navigazione dei link/collapse disabilitati per evitare comportamenti inattesi: le diverse varianti forniscono un'implementazione di esempio."}),`
`]}),`
`,e.jsx(i.h2,{id:"sidebar-con-icone",children:"Sidebar con icone"}),`
`,e.jsxs(i.p,{children:["Per aggiungere icone alla lista di link contenuta nella sidebar, usa il componente ",e.jsx(i.code,{children:"<it-icon>"})," all'interno dei link con classe ",e.jsx(i.code,{children:".icon-left"}),"."]}),`
`,e.jsx(a,{of:t}),`
`,e.jsx(i.h2,{id:"sidebar-con-linea-a-destra",children:"Sidebar con linea a destra"}),`
`,e.jsxs(i.p,{children:["Per creare una sidebar con linea separatrice a destra, aggiungi la classe ",e.jsx(i.code,{children:".it-line-right-side"})," a ",e.jsx(i.code,{children:'<aside class="sidebar-wrapper">'}),"."]}),`
`,e.jsx(a,{of:p}),`
`,e.jsx(i.h2,{id:"sidebar-con-linea-a-sinistra",children:"Sidebar con linea a sinistra"}),`
`,e.jsxs(i.p,{children:["Per creare una sidebar con linea separatrice a sinistra, aggiungi la classe ",e.jsx(i.code,{children:".it-line-left-side"})," a ",e.jsx(i.code,{children:'<aside class="sidebar-wrapper">'}),"."]}),`
`,e.jsx(a,{of:h}),`
`,e.jsx(i.h2,{id:"sidebar-annidata",children:"Sidebar annidata"}),`
`,e.jsxs(i.p,{children:["Una sidebar può contenere una lista di link primaria annidata, tramite la classe ",e.jsx(i.code,{children:".link-sublist"})," per le sotto-liste espanse."]}),`
`,e.jsxs(i.p,{children:["Per rendere collassabili le sottosezioni della sidebar, usa il componente ",e.jsx(i.code,{children:"<it-collapse>"})," integrato nelle liste di navigazione. Il componente ",e.jsx(i.code,{children:"<it-collapse>"})," permette di espandere e comprimere le sottosezioni in modo interattivo, migliorando l'esperienza di navigazione su sidebar con molte voci."]}),`
`,e.jsxs(i.p,{children:["Consulta la ",e.jsx(i.a,{href:"/docs/componenti-collapse--documentazione",children:"documentazione del componente Collapse"})," per maggiori dettagli sull'uso di ",e.jsx(i.code,{children:"<it-collapse>"}),"."]}),`
`,e.jsx(a,{of:u}),`
`,e.jsx(i.h2,{id:"sidebar-tema-scuro",children:"Sidebar tema scuro"}),`
`,e.jsxs(i.p,{children:["Per cambiare il tema della sidebar e renderla scura, aggiungi la classe ",e.jsx(i.code,{children:".theme-dark"})," a ",e.jsx(i.code,{children:'<aside class="sidebar-wrapper">'}),"."]}),`
`,e.jsx(a,{of:x})]})}function f(n={}){const{wrapper:i}={...r(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(s,{...n})}):s(n)}export{f as default};

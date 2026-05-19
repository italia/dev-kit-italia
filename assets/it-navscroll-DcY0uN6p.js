import{j as e,M as r,T as t,C as n,a as c}from"./blocks-Cfdtkg6u.js";import{useMDXComponents as l}from"./index-CRGMk0FE.js";import{S as d,E as o,D as p,a as h,M as u,b as m,P as x,c as j,d as g}from"./it-navscroll.stories-waYxIU1N.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-dUoPoR-O.js";function s(a){const i={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:d}),`
`,e.jsx(t,{}),`
`,e.jsx("description",{children:"Lista di link con ancore per navigare velocemente a una sezione specifica della pagina in cui è contenuto."}),`
`,e.jsx(i.h2,{id:"cosa-fa",children:"Cosa fa"}),`
`,e.jsxs(i.p,{children:["Il componente Navscroll (",e.jsx(i.code,{children:"it-navscroll"}),"), declinazione del ",e.jsx(i.a,{href:"?path=/docs/componenti-sidebar--documentazione",children:"componente Sidebar"}),", è una barra di navigazione laterale che, tramite una lista di ancore, permette di creare un indice utile a saltare velocemente alle sezioni e ai contenuti presenti su una stessa pagina."]}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"https://designers.italia.it/design-system/componenti/navscroll/",rel:"nofollow",children:"Approfondisci come e quando usare il componente Navscroll"})}),`
`,e.jsx(i.h3,{id:"alternative-a-questo-componente",children:"Alternative a questo componente"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"?path=/docs/componenti-sidebar--documentazione",children:"Sidebar"}),": quando hai bisogno di una barra di navigazione laterale classica per navigare verso altre pagine o sezioni del sito."]}),`
`]}),`
`,e.jsx(i.h2,{id:"anteprima-e-attributi-del-componente",children:"Anteprima e attributi del componente"}),`
`,e.jsxs(i.p,{children:["Modifica gli attributi della tabella per personalizzare in tempo reale l'aspetto e il comportamento del componente. Per vedere come cambia il codice, clicca su ",e.jsx(i.strong,{children:"Show code"}),"."]}),`
`,e.jsx(i.p,{children:"Restringi la larghezza della finestra per vedere cosa succede su dispositivi mobili."}),`
`,e.jsx(n,{of:o}),`
`,e.jsx(c,{of:o}),`
`,e.jsx(i.h2,{id:"indicazioni-generali",children:"Indicazioni generali"}),`
`,e.jsxs(i.p,{children:["Per configurare correttamente il componente ",e.jsx(i.code,{children:"it-navscroll"}),":"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["definisci le sezioni di pagina con intestazioni semantiche in ordine corretto (",e.jsx(i.code,{children:"h2"}),", ",e.jsx(i.code,{children:"h3"}),", ecc.);"]}),`
`,e.jsx(i.li,{children:"aggiungi nel componente voci di navigazione sintetiche e corrispondenti ai titoli di sezione su pagina;"}),`
`,e.jsxs(i.li,{children:["aggiungi per ogni link l’attributo ",e.jsx(i.code,{children:"href"})," con il valore dell’id relativo all’elemento correlato in pagina, ",e.jsx(i.code,{children:'href="#idElemento"'}),";"]}),`
`,e.jsx(i.li,{children:"posiziona il componente a destra o a sinistra del contenuto principale della pagina;"}),`
`,e.jsxs(i.li,{children:["se non definisci nulla nell'attributo ",e.jsx(i.code,{children:"for"}),", viene tenuto in considerazione tutto il documento."]}),`
`]}),`
`,e.jsx(i.h2,{id:"accessibilità",children:"Accessibilità"}),`
`,e.jsx(i.p,{children:"Per garantire un'esperienza accessibile:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["inserisci il componente all'interno di un elemento ",e.jsx(i.code,{children:"<aside>"})," per indicare chiaramente il suo ruolo di navigazione laterale;"]}),`
`,e.jsxs(i.li,{children:["inserisci l'attributo ",e.jsx(i.code,{children:"aria-label"})," sull'elemento ",e.jsx(i.code,{children:"<aside>"})," che contiene il componente ",e.jsx(i.code,{children:"<it-navscroll>"})," per specificare meglio ai lettori di schermo di che cosa si tratta;"]}),`
`,e.jsxs(i.li,{children:["usa l'attributo ",e.jsx(i.code,{children:'aria-disabled="true"'})," per i link disabilitati per garantire il corretto supporto alle tecnologie assistive."]}),`
`]}),`
`,e.jsxs(i.p,{children:["Per garantire una migliore esperienza di navigazione con gli screen reader, soprattutto per JAWS, inserisci in pagina un elemento con ",e.jsx(i.code,{children:'aria-live="polite"'})," e ",e.jsx(i.code,{children:'id="aria-navscroll-announcer"'})," che venga aggiornato con il titolo della sezione raggiunta dopo lo scroll:"]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<div id="aria-navscroll-announcer" aria-live="polite" aria-atomic="true" class="visually-hidden"></div>
`})}),`
`,e.jsx(i.p,{children:"Ricorda di testare il comportamento di scroll su vari dispositivi e, per la navigazione da tastiera o con tecnologie assistive, poni particolare attenzione al focus al termine dell'azione di scorrimento e a come accedere o tornare al componente."}),`
`,e.jsx(i.h2,{id:"posizionamento-su-desktop",children:"Posizionamento su desktop"}),`
`,e.jsx(i.p,{children:"Puoi posizionare una navscroll a sinistra o a destra, a seconda dell'ordine in cui viene inserita nel markup HTML."}),`
`,e.jsxs(i.p,{children:["Puoi decidere di mostrare o meno una linea di separazione sulla navscroll, valorizzando opportunamente sul componente ",e.jsx(i.code,{children:"<it-navscroll>"})," l'attributo ",e.jsx(i.code,{children:"line-position"}),"."]}),`
`,e.jsx(i.h3,{id:"a-sinistra",children:"A sinistra"}),`
`,e.jsxs(i.p,{children:["In questo esempio la navscroll è posizionata a sinistra con la linea di separazione impostata su ",e.jsx(i.code,{children:'line-position="right"'}),"."]}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(i.h3,{id:"a-destra",children:"A destra"}),`
`,e.jsxs(i.p,{children:["In questo esempio la navscroll è posizionata a destra con la linea di separazione impostata su ",e.jsx(i.code,{children:'line-position="left"'}),"."]}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(i.h2,{id:"posizionamento-su-mobile",children:"Posizionamento su mobile"}),`
`,e.jsxs(i.p,{children:["Puoi decidere dove viene mostrato il trigger per l'apertura della navscroll sui dispositivi mobili utilizzando l'attributo ",e.jsx(i.code,{children:"position"}),"."]}),`
`,e.jsx(i.p,{children:"Restringi la larghezza della finestra per vedere cosa succede su dispositivi mobili."}),`
`,e.jsx(i.h3,{id:"posizionata-in-fondo-alla-pagina",children:"Posizionata in fondo alla pagina"}),`
`,e.jsxs(i.p,{children:["Imposta l'attributo ",e.jsx(i.code,{children:'position="bottom"'})," per mostrare il trigger di apertura della navscroll in fondo alla pagina."]}),`
`,e.jsxs(i.p,{children:["Il posizionamento in fondo alla pagina è il default per il componente ",e.jsx(i.code,{children:"<it-navscroll>"}),"."]}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(i.h3,{id:"posizionata-in-testa-alla-pagina",children:"Posizionata in testa alla pagina"}),`
`,e.jsxs(i.p,{children:["Imposta l'attributo ",e.jsx(i.code,{children:'position="top"'})," per mostrare il trigger di apertura della navscroll in testa alla pagina."]}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(i.h2,{id:"con-barra-di-progresso",children:"Con barra di progresso"}),`
`,e.jsxs(i.p,{children:["Per mostrare la barra di progresso, aggiungi il componente ",e.jsx(i.code,{children:"<it-progress>"})," all'interno del div con classe ",e.jsx(i.code,{children:"link-list-wrapper"}),", assegnandogli la classe ",e.jsx(i.code,{children:'class="it-navscroll-progressbar"'}),"."]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:` <it-progress type="bar" value="0" class="it-navscroll-progressbar" aria-label="Progress bar"></it-progress>
`})}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(i.h2,{id:"variante-scura",children:"Variante scura"}),`
`,e.jsx(i.p,{children:"Puoi attivare la variante scura su desktop, su mobile o su entrambi."}),`
`,e.jsxs(i.p,{children:["Per attivarla, usa l'attributo ",e.jsx(i.code,{children:"dark-mode"})," con uno dei seguenti valori:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"mobile"}),", solo su mobile;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"desktop"}),", solo su desktop;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"always"}),", sia su desktop che su mobile."]}),`
`]}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(i.h2,{id:"menu-inline",children:"Menu inline"}),`
`,e.jsxs(i.p,{children:["La classe distintiva del wrapper esterno è ",e.jsx(i.code,{children:".inline-menu"}),"."]}),`
`,e.jsxs(i.p,{children:["I menu inline possono contenere ",e.jsx(i.a,{href:"?path=/docs/componenti-list--documentazione#liste-per-menu-di-navigazione",children:"liste di link"})," di ogni tipo. Nell'esempio trovi una lista di link collassabile."]}),`
`,e.jsx(n,{of:g})]})}function P(a={}){const{wrapper:i}={...l(),...a.components};return i?e.jsx(i,{...a,children:e.jsx(s,{...a})}):s(a)}export{P as default};

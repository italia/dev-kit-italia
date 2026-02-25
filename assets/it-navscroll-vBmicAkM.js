import{j as e,M as r,T as t,C as n,a as c}from"./blocks-C1WJMGUC.js";import{useMDXComponents as l}from"./index-BrQ7_w4M.js";import{S as d,E as o,D as p,a as u,M as h,b as m,P as x,c as j,d as g}from"./it-navscroll.stories-D4ZQA6Xf.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-90FZwcPR.js";function s(a){const i={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:d}),`
`,e.jsx(t,{}),`
`,e.jsx("description",{children:"Lista di link con ancore per navigare velocemente a una sezione specifica della pagina in cui è contenuto"}),`
`,e.jsx(i.h2,{id:"cosa-fa",children:"Cosa fa"}),`
`,e.jsxs(i.p,{children:["Navscroll è una declinazione di ",e.jsx(i.a,{href:"?path=/docs/componenti-sidebar--documentazione",children:"Sidebar"}),". È una barra di navigazione laterale che, tramite una lista di àncore, permette di creare un indice utile a saltare velocemente alle sezioni e ai contenuti presenti su una stessa pagina."]}),`
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
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Definisci le sezioni della pagina, utilizzando intestazioni semantiche come ",e.jsx(i.code,{children:"h2"})," oppure ",e.jsx(i.code,{children:"h3"}),", fai attenzione all'ordine corretto."]}),`
`,e.jsx(i.li,{children:"Aggiungi nel componente le voci e i link necessari per navigare a ciascuna sezione della pagina."}),`
`,e.jsxs(i.li,{children:[`Assicurati che ogni link abbia un anchor tag che corrisponde all'ID della sezione di destinazione sulla pagina.
`,e.jsxs(i.strong,{children:["Ogni link all’interno del componente Navscroll deve avere l’attributo ",e.jsx(i.code,{children:"href"})," con il valore dell’id relativo all’elemento correlato in pagina: ",e.jsx(i.code,{children:'href="#idElemento"'}),"."]})]}),`
`,e.jsx(i.li,{children:"Posiziona il componente a destra o a sinistra del contenuto principale della pagina, a seconda delle esigenze."}),`
`,e.jsxs(i.li,{children:["Se non definisci nulla nell'attributo ",e.jsx(i.code,{children:"for"}),", viene tenuto in considerazione tutto il documento."]}),`
`]}),`
`,e.jsx(i.h3,{id:"attenzione-a",children:"Attenzione a"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Testare il comportamento di scroll su vari dispositivi per assicurarti che sia fluido e funzioni come previsto."}),`
`,e.jsx(i.li,{children:"Testare con utenti la navigazione da tastiera o con strumenti assistivi come lettori di schermo, poni particolare attenzione al focus al termine dell'azione di scorrimento e a come accedere o tornare al componente."}),`
`]}),`
`,e.jsx(i.h3,{id:"buone-pratiche-sui-contenuti",children:"Buone pratiche sui contenuti"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Il titolo della voce di navigazione deve corrispondere al titolo della sezione su pagina."}),`
`,e.jsx(i.li,{children:"Scrivi titoli sintetici per poterli poi inserire facilmente all’interno del componente."}),`
`]}),`
`,e.jsx(i.h2,{id:"accessibilità",children:"Accessibilità"}),`
`,e.jsxs(i.p,{children:[`Il componente Navscroll segue le best practice per l'accessibilità, garantendo una navigazione intuitiva e fruibile da tutti gli utenti.
È consigliato inserirlo all'interno di un elemento `,e.jsx(i.code,{children:"<aside>"}),", che indica chiaramente il suo ruolo di navigazione laterale."]}),`
`,e.jsx(i.p,{children:"Per garantire un'esperienza accessibile, segui queste linee guida:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Inserisci l'attributo ",e.jsx(i.code,{children:"aria-label"})," sull'elemento ",e.jsx(i.code,{children:"<aside>"})," che contiene il componente ",e.jsx(i.code,{children:"<it-navscroll>"}),", per specificare meglio ai lettori di schermo di che cosa si tratta. Non è obbligatorio ma è consigliato."]}),`
`,e.jsxs(i.li,{children:["Usa l'attributo ",e.jsx(i.code,{children:'aria-disabled="true"'})," per i link disabilitati per garantire il corretto supporto alle tecnologie assistive."]}),`
`]}),`
`,e.jsxs(i.p,{children:["Per garantire una migliore esperienza di navigazione con gli screen reader, soprattutto per JAWS, inserisci in pagina un elemento con ",e.jsx(i.code,{children:'aria-live="polite"'})," e ",e.jsx(i.code,{children:'id="aria-navscroll-announcer"'})," che venga aggiornato con il titolo della sezione raggiunta dopo lo scroll:"]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<div id="aria-navscroll-announcer" aria-live="polite" aria-atomic="true" class="visually-hidden"></div>
`})}),`
`,e.jsx(i.h2,{id:"posizionamento-su-desktop",children:"Posizionamento su desktop"}),`
`,e.jsx(i.p,{children:"La Navscroll può essere posizionata a sinistra o a destra, a seconda dell'ordine in cui viene inserita nel markup HTML."}),`
`,e.jsxs(i.p,{children:["Puoi decidere di mostrare o meno una linea di separazione sulla Navscroll, valorizzando opportunamente sull componente ",e.jsx(i.code,{children:"<it-navscroll>"})," l'attributo ",e.jsx(i.code,{children:"line-position"}),"."]}),`
`,e.jsx(i.h3,{id:"a-sinistra",children:"A sinistra"}),`
`,e.jsxs(i.p,{children:["In questo esempio la Navscroll è posizionata a sinistra con la linea di separazione impostata su ",e.jsx(i.code,{children:'line-position="right"'}),"."]}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(i.h3,{id:"a-destra",children:"A destra"}),`
`,e.jsxs(i.p,{children:["In questo esempio la Navscroll è posizionata a destra con la linea di separazione impostata su ",e.jsx(i.code,{children:'line-position="left"'}),"."]}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(i.h2,{id:"posizionamento-su-mobile",children:"Posizionamento su mobile"}),`
`,e.jsxs(i.p,{children:["Puoi decidere dove viene mostrato il trigger per l'apertura della Navscroll sui dispositivi mobili utilizzando l'attributo ",e.jsx(i.code,{children:"position"}),"."]}),`
`,e.jsx(i.p,{children:"Restringi la larghezza della finestra per vedere cosa succede su dispositivi mobili."}),`
`,e.jsx(i.h3,{id:"posizionata-in-fondo-alla-pagina",children:"Posizionata in fondo alla pagina"}),`
`,e.jsxs(i.p,{children:["Imposta l'attributo ",e.jsx(i.code,{children:'position="bottom"'})," per mostrare il trigger di apertura della Navscroll in fondo alla pagina."]}),`
`,e.jsxs(i.p,{children:["Il posizionamento in fondo alla pagina è il default per il componente ",e.jsx(i.code,{children:"<it-navscroll>"}),"."]}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(i.h3,{id:"posizionata-in-testa-alla-pagina",children:"Posizionata in testa alla pagina"}),`
`,e.jsxs(i.p,{children:["Imposta l'attributo ",e.jsx(i.code,{children:'position="top"'})," per mostrare il trigger di apertura della Navscroll in testa alla pagina."]}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(i.h2,{id:"con-barra-di-progresso",children:"Con barra di progresso"}),`
`,e.jsxs(i.p,{children:["Per mostrare la barra di progresso, aggiungi il markup della progressbar all'interno del div con classe ",e.jsx(i.code,{children:"link-list-wrapper"}),"."]}),`
`,e.jsxs(i.p,{children:["La progressbar deve vare l'attributo ",e.jsx(i.code,{children:'role="progressbar"'})," per poter essere gestita dal componente Navscroll e per assicurarne l'accessibilità."]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<div class="progress-bar it-navscroll-progressbar"
  role="progressbar"
  aria-valuemin="0"
  aria-valuemax="100"
  aria-label="Progress bar"
></div>
`})}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(i.h2,{id:"variante-scura",children:"Variante scura"}),`
`,e.jsx(i.p,{children:"Hai la possibilità di attivare la variante scura su desktop, su mobile o su entrambi."}),`
`,e.jsxs(i.p,{children:["Per attivare la variante scura, usa l'attributo ",e.jsx(i.code,{children:"dark-mode"})," con uno dei seguenti valori:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"mobile"}),": attiva la variante scura solamente su mobile"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"desktop"}),": attiva la variante scura solo su desktop"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"always"}),": attiva la variante scura sia su desktop che su mobile."]}),`
`]}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(i.h2,{id:"menu-inline",children:"Menu inline"}),`
`,e.jsxs(i.p,{children:["La classe distintiva del wrapper esterno è ",e.jsx(i.code,{children:".inline-menu"}),"."]}),`
`,e.jsx(i.p,{children:"Gli inline menu possono contenere liste di link di ogni tipo; nell'esempio che segue è stata inserita una lista di link collassabile."}),`
`,e.jsxs(i.p,{children:["Per maggiori informazioni, si può fare riferimento alla ",e.jsx(i.a,{href:"?path=/docs/componenti-list--documentazione#liste-per-menu-di-navigazione",children:"documentazione delle liste di link"}),"."]}),`
`,e.jsx(n,{of:g})]})}function P(a={}){const{wrapper:i}={...l(),...a.components};return i?e.jsx(i,{...a,children:e.jsx(s,{...a})}):s(a)}export{P as default};

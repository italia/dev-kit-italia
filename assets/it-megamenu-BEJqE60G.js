import{j as e,M as r,T as c,C as i,a as d}from"./blocks-FPQAOa66.js";import{useMDXComponents as t}from"./index-D5SWu1Yp.js";import{S as a,B as l,M as p,a as m,b as u,c as h,d as x,e as j}from"./it-megamenu.stories-5eDF-tiv.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-CGo9iNzD.js";function s(o){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...t(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
`,e.jsx(c,{of:a}),`
`,e.jsx("description",{children:"Sottomenu di navigazione a comparsa che presenta i link e i contenuti correlati a una voce del menu principale."}),`
`,e.jsx(n.h2,{id:"cosa-fa",children:"Cosa fa"}),`
`,e.jsxs(n.p,{children:["Il componente Megamenu (",e.jsx(n.code,{children:"it-megamenu"}),") implementa un sottomenu con elenchi di link e informazioni correlate per semplificare la navigazione di una sezione di un sito."]}),`
`,e.jsxs(n.p,{children:["Il megamenu è una estensione del componente ",e.jsx(n.code,{children:"it-dropdown"})," per la navbar ",e.jsx(n.code,{children:"<nav>"})," del sito."]}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://designers.italia.it/design-system/componenti/megamenu/",rel:"nofollow",children:"Approfondisci quando e come usare il componente Megamenu"})}),`
`,e.jsx(n.h2,{id:"anteprima-e-attributi-del-componente",children:"Anteprima e attributi del componente"}),`
`,e.jsxs(n.p,{children:["Modifica gli attributi nella tabella per personalizzare in tempo reale l'aspetto e il comportamento del componente. Per vedere come cambia il codice, clicca su ",e.jsx(n.strong,{children:"Show code"}),"."]}),`
`,e.jsx(i,{of:l}),`
`,e.jsx(d,{of:l}),`
`,e.jsx(n.h2,{id:"indicazioni-generali",children:"Indicazioni generali"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Usa i megamenu solo per la navigazione principale del sito e con moderazione, testando sempre la loro efficacia con gli utenti."}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Per una corretta gestione del megamenu su mobile, è necessario che il componente sia inserito all'interno del componente ",e.jsx(n.code,{children:"<it-header>"}),". Per maggiori dettagli, su come includere ",e.jsx(n.code,{children:"it-megamenu"})," nell'header, consulta la ",e.jsx(n.a,{href:"?path=/docs/componenti-header--documentazione",children:"documentazione del componente Header"}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Puoi accostare più megamenu nella navbar per dare accesso a sezioni diverse del sito."}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Usa il megamenu con parsimonia per via della sua natura di interazione complessa, testando sempre la sua efficacia con gli utenti."}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Un link con classe ",e.jsx(n.code,{children:"active"})," indica la sezione corrente."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Un elemento ",e.jsx(n.code,{children:"<it-dropdown-item>"})," interno al megamenu con classe ",e.jsx(n.code,{children:"active"})," indica la pagina corrente."]}),`
`]}),`
`]}),`
`,e.jsxs(n.p,{children:["Il componente ",e.jsx(n.code,{children:"<it-megamenu>"})," espone i seguenti slot:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"(default)"}),", per il contenuto principale, ovvero l'area contenente i link principali del megamenu tramite elementi ",e.jsx(n.code,{children:"<it-dropdown-item>"}),", viene inserito direttamente nel componente;"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:'slot="header"'}),", per l'intestazione del megamenu, visualizzata sopra i link principali. Può contenere un link alla sezione principale del menu. Il markup html deve essere come quello nell'esempio del Megamenu completo;"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:'slot="footer"'}),", per il footer del megamenu, visualizzato sotto i link principali. Può contenere un link alla sezione principale del menu o altri link in evidenza. Puoi anche posizionarlo sulla parte destra tramite l'apposito attributo sul ",e.jsx(n.code,{children:"<it-megamenu>"}),";"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:'slot="description"'}),", per contenuti aggiuntivi opzionali, visualizzati a sinistra dei link principali. Può contenere una immagine e del testo. Il markup HTML deve essere come quello nell'esempio del megamenu completo."]}),`
`]}),`
`,e.jsx(n.h2,{id:"accessibilità",children:"Accessibilità"}),`
`,e.jsx(n.p,{children:"Il megamenu è un componente della navigazione principale del sito che richiede particolari attenzioni di accessibilità:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"applica correttamente gli attributi ARIA, come mostrato negli esempi;"}),`
`,e.jsx(n.li,{children:"usa le icone in modo appropriato (ad esempio la freccia) per distinguere i link anche quando il colore non è percepibile, soprattutto in presenza di testo descrittivo o non cliccabile;"}),`
`,e.jsxs(n.li,{children:["distingui le etichette dei link in modo chiaro, differenziandole per ogni voce di navigazione. In caso di più link ",e.jsx(n.strong,{children:"“Esplora tutti”"}),", puoi aggiungere una specifica come ",e.jsx(n.strong,{children:"“i contenuti della sezione X”"})," oppure usare ",e.jsx(n.code,{children:'<span class="visually-hidden"> i contenuti della sezione X</span>'})," per comunicare la distinzione almeno alle tecnologie assistive."]}),`
`]}),`
`,e.jsx(n.h2,{id:"megamenu-completo",children:"Megamenu completo"}),`
`,e.jsxs(n.p,{children:["La variante completa può contenere un'introduzione ai contenuti della sezione, con immagine e testo descrittivo, e un ",e.jsx(n.strong,{children:"“Esplora la sezione X”"})," per dare accesso alla pagina principale della sezione del sito."]}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(n.h2,{id:"megamenu-base",children:"Megamenu base"}),`
`,e.jsxs(n.p,{children:["La variante base può contenere liste di voci di navigazione organizzate su più colonne ed eventuali link correlati, come ",e.jsx(n.strong,{children:"“Esplora la sezione X”"}),", ",e.jsx(n.strong,{children:"“Esplora tutti i contenuti Y”"})," o di altro tipo."]}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(n.h2,{id:"con-link-esplora-la-sezione",children:"Con link “Esplora la sezione”"}),`
`,e.jsxs(n.p,{children:["Come nella variante completa, puoi aggiungere un link ",e.jsx(n.strong,{children:"“Esplora la sezione X”"})," come primo link."]}),`
`,e.jsxs(n.p,{children:["Un link ",e.jsx(n.code,{children:"it-heading-link"})," con classe ",e.jsx(n.code,{children:"active"})," indica la sezione corrente del sito."]}),`
`,e.jsx(i,{of:u}),`
`,e.jsx(n.h2,{id:"con-link-esplora-tutti",children:"Con link “Esplora tutti”"}),`
`,e.jsxs(n.p,{children:["Nel caso le voci da mostrare fossero numerose, puoi aggiungere un link ",e.jsx(n.strong,{children:"“Esplora tutti i contenuti Y”"})," che porta a una lista completa."]}),`
`,e.jsxs(n.p,{children:["Un link ",e.jsx(n.code,{children:"it-footer-link"})," con classe ",e.jsx(n.code,{children:"active"})," indica la sezione corrente del sito."]}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(n.h2,{id:"con-call-to-action",children:"Con call to action"}),`
`,e.jsxs(n.p,{children:["Puoi aggiungere una lista di call to action in basso o a destra rispetto le voci di navigazione, tramite l'attributo ",e.jsx(n.code,{children:"footer-position"}),"."]}),`
`,e.jsx(n.h3,{id:"con-call-to-action-in-basso",children:"Con call to action in basso"}),`
`,e.jsxs(n.p,{children:["Usa l'attributo ",e.jsx(n.code,{children:'footer-position="bottom"'})," per posizionare i link call to action in basso, sotto le voci di navigazione del megamenu."]}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(n.h3,{id:"con-call-to-action-a-destra",children:"Con call to action a destra"}),`
`,e.jsxs(n.p,{children:["Usa l'attributo ",e.jsx(n.code,{children:'footer-position="right"'})," per posizionare i link call to action in una colonna a destra, accanto alle voci di navigazione del megamenu."]}),`
`,e.jsx(i,{of:j}),`
`,e.jsx(n.h2,{id:"personalizzazione-degli-stili",children:"Personalizzazione degli stili"}),`
`,e.jsxs(n.p,{children:["Per personalizzare gli stili, puoi usare i selettori ",e.jsx(n.code,{children:"::part"})," dedicati:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"::part(button)"}),", per l'elemento trigger;"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"::part(icon)"}),", per l'icona del bottone trigger;"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"::part(megamenu-content)"}),", per il contenitore del megamenu."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"/docs/personalizzazione-degli-stili--documentazione#selettore-part",children:"Vai alla guida sul selettore part"})})]})}function k(o={}){const{wrapper:n}={...t(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(s,{...o})}):s(o)}export{k as default};

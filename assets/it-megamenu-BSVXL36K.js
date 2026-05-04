import{j as e,M as r,T as c,C as i,a as d}from"./blocks-DAJaqJAu.js";import{useMDXComponents as t}from"./index-Bf4ti5HC.js";import{S as l,B as a,M as p,a as u,b as m,c as h,d as x,e as j}from"./it-megamenu.stories-BUk3Iz2l.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-B-faIqGw.js";function s(o){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...t(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:l}),`
`,e.jsx(c,{of:l}),`
`,e.jsx("description",{children:"Sottomenu di navigazione a comparsa che presenta i link e i contenuti correlati a una voce del menu principale"}),`
`,e.jsx(n.h2,{id:"cosa-fa",children:"Cosa fa"}),`
`,e.jsx(n.p,{children:"Il componente Megamenu serve a implementare un sottomenu che semplifica l'accesso a un'intera sezione di un sito con un’architettura dell’informazione complessa ma ben strutturata."}),`
`,e.jsxs(n.p,{children:["Il megamenu è una estensione del componente ",e.jsx(n.code,{children:"it-dropdown"})," per la navbar ",e.jsx(n.code,{children:"<nav>"})," del sito, che permette di esplorare elenchi di link e informazioni correlate."]}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://designers.italia.it/design-system/componenti/megamenu/",rel:"nofollow",children:"Approfondisci quando e come usare il componente Megamenu"})}),`
`,e.jsx(n.h2,{id:"anteprima-e-attributi-del-componente",children:"Anteprima e attributi del componente"}),`
`,e.jsxs(n.p,{children:["Modifica gli attributi nella tabella per personalizzare in tempo reale l'aspetto e il comportamento del componente. Per vedere come cambia il codice, clicca su ",e.jsx(n.strong,{children:"Show code"}),"."]}),`
`,e.jsx(i,{of:a}),`
`,e.jsx(d,{of:a}),`
`,e.jsx(n.h2,{id:"indicazioni-generali",children:"Indicazioni generali"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Usa il componente solo come modulo della navigazione principale."}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Per una corretta gestione del megamenu su mobile, è necessario che il componente sia inserito all'interno del componente ",e.jsx(n.code,{children:"<it-header>"}),". Per maggiori dettagli, su come includere ",e.jsx(n.code,{children:"it-megamenu"})," nell'header, consulta la ",e.jsx(n.a,{href:"?path=/docs/componenti-header--documentazione",children:"documentazione del componente Header"}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Usa il megamenu con parsimonia per via della sua natura di interazione complessa, testando sempre la sua efficacia con gli utenti."}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Si possono accostare più megamenu nella navbar per dare accesso a sezioni diverse del sito."}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Se il pulsante ha la classe ",e.jsx(n.code,{children:"active"})," è riferito alla sezione corrente."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Se un elemento ",e.jsx(n.code,{children:"<it-dropdown-item>"})," interno al megamenu ha l'attributo ",e.jsx(n.code,{children:"active"}),", è riferito alla pagina corrente."]}),`
`]}),`
`]}),`
`,e.jsxs(n.p,{children:["Il componente ",e.jsx(n.code,{children:"<it-megamenu>"})," espone i seguenti slot:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"(default)"}),": il contenuto principale, tipicamente uno o più elementi ",e.jsx(n.code,{children:"<it-dropdown-item>"}),", viene inserito direttamente nel componente ed'è l'area contenente i link principali del megamenu."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:'slot="header"'}),": per l'intestazione del megamenu, visualizzata sopra i link principali. Può contenere un link alla sezione principale del menu. Il markup html deve essere come quello nell'esempio del Megamenu completo"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:'slot="footer"'}),": per il footer del megamenu, visualizzato sotto i link principali. Può contenere un link alla sezione principale del menu o altri link in evidenza. Puoi anche decidere di posizionarlo sulla parte destra tramite l'apposito attributo sul ",e.jsx(n.code,{children:"<it-megamenu>"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:'slot="description"'}),": per contenuti aggiuntivi opzionali, visualizzati a sinistra dei link principali. Può contenere una immagine e del testo. Il markup html deve essere come quello nell'esempio del Megamenu completo."]}),`
`]}),`
`,e.jsx(n.h2,{id:"accessibilità",children:"Accessibilità"}),`
`,e.jsx(n.p,{children:"Il megamenu è un componente della navigazione principale del sito che richiede particolari attenzioni dal punto di vista dell’accessibilità:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"applica correttamente gli attributi ARIA presenti negli esempi;"}),`
`,e.jsx(n.li,{children:"usa le icone in modo appropriato (freccia negli esempi) per contraddistinguere i link anche nelle situazioni o condizioni in cui non sia possibile percepirne il colore, in particolar modo se presente del testo descrittivo o non cliccabile;"}),`
`,e.jsxs(n.li,{children:["distingui le etichette dei link in modo chiaro: non devono essere presenti link con la stessa etichetta che portino a destinazioni diverse. Nel caso di più link ",e.jsx(n.strong,{children:"“Esplora tutti”"})," si può ad esempio aggiungere ",e.jsx(n.strong,{children:"“ i contenuti della sezione X”"}),", oppure, si può usare ",e.jsx(n.code,{children:'<span class="visually-hidden"> i contenuti della sezione X</span>'})," per comunicare la distinzione almeno alle tecnologie assistive."]}),`
`]}),`
`,e.jsx(n.h2,{id:"megamenu-completo",children:"Megamenu completo"}),`
`,e.jsx(n.p,{children:`Variante completa per dare ad esempio accesso a una intera sezione di un sito con un’architettura dell’informazione ben strutturata.
Permette all’utente di comprendere l’organizzazione dei contenuti e di saltare direttamente a pagine foglia.`}),`
`,e.jsxs(n.p,{children:[`Permette di includere immagine e testo descrittivo per una introduzione ai contenuti della sezione.
Può contenere un link `,e.jsx(n.strong,{children:"“Esplora la sezione X”"})," per dare accesso a una copertina della sezione."]}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(n.h2,{id:"megamenu-base",children:"Megamenu base"}),`
`,e.jsxs(n.p,{children:["Variante base che può contenere liste di link organizzate su più colonne ed eventuali link correlati come ",e.jsx(n.strong,{children:"“Esplora la sezione X”"}),", ",e.jsx(n.strong,{children:"“Esplora tutti i contenuti Y”"})," o di altro tipo."]}),`
`,e.jsx(i,{of:u}),`
`,e.jsx(n.h2,{id:"con-link-esplora-la-sezione",children:"Con link “Esplora la sezione”"}),`
`,e.jsxs(n.p,{children:["Come nella variante completa, puoi aggiungere un link ",e.jsx(n.strong,{children:"“Esplora la sezione X”"})," come primo link."]}),`
`,e.jsxs(n.p,{children:["Se il link con classe ",e.jsx(n.code,{children:"it-heading-link"})," ha la classe ",e.jsx(n.code,{children:"active"})," è riferito alla sezione corrente del sito."]}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(n.h2,{id:"con-link-esplora-tutti",children:"Con link “Esplora tutti”"}),`
`,e.jsxs(n.p,{children:["Nel caso le voci da mostrare fossero numerose, puoi aggiungere un link ",e.jsx(n.strong,{children:"“Esplora tutti i contenuti Y”"})," che porta a una lista completa."]}),`
`,e.jsxs(n.p,{children:["Se il link con classe ",e.jsx(n.code,{children:"it-footer-link"})," ha la classe ",e.jsx(n.code,{children:"active"})," è riferito alla sezione corrente del sito."]}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(n.h2,{id:"con-call-to-action",children:"Con call to action"}),`
`,e.jsx(n.p,{children:"I megamenu possono contenere altri link correlati, che possono avere la funzione di “call to action” rispetto agli altri contenuti del megamenu."}),`
`,e.jsxs(n.p,{children:["Questi seguono le liste di link, e puoi posizionarli in basso o in una colonna destra tramite l'attributo ",e.jsx(n.code,{children:"footer-position"}),"."]}),`
`,e.jsx(n.h3,{id:"con-call-to-action-in-basso",children:"Con call to action in basso"}),`
`,e.jsxs(n.p,{children:["Usa l'attributo ",e.jsx(n.code,{children:'footer-position="bottom"'})," per posizionare i link correlati in basso, sotto la liste di link principali."]}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(n.h3,{id:"con-call-to-action-a-destra",children:"Con call to action a destra"}),`
`,e.jsxs(n.p,{children:["Usa l'attributo ",e.jsx(n.code,{children:'footer-position="right"'})," per posizionare i link correlati in una colonna a destra, accanto alla lista di link principali."]}),`
`,e.jsx(i,{of:j}),`
`,e.jsx(n.h2,{id:"personalizzazione-degli-stili",children:"Personalizzazione degli stili"}),`
`,e.jsxs(n.p,{children:["Per personalizzare gli stili, puoi possono usare i selettori ",e.jsx(n.code,{children:"::part"})," dedicati:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"::part(button)"}),", per l'elemento trigger;"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"::part(icon)"}),", per l'icona del bottone trigger"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"::part(megamenu-content)"}),", per il contenitore del megamenu"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"/docs/personalizzazione-degli-stili--documentazione#selettore-part",children:"Vai alla guida sul selettore part"}),"."]})]})}function b(o={}){const{wrapper:n}={...t(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(s,{...o})}):s(o)}export{b as default};

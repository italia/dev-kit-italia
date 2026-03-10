import{j as e,M as o,C as a}from"./blocks-Cg7HoPIi.js";import{useMDXComponents as s}from"./index-BqGwsfRJ.js";import{T as r,a as c,b as t,c as d,d as h,e as x,f as p,g as j,h as b,R as u,C as m,i as g,j as v,k as f,l as z,m as T,n as A,o as y,p as C,q as L,r as R,A as S,s as k,I as q,t as w,u as I,v as M,w as D}from"./table.stories-B2mk2xlv.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-DTKPvNQN.js";function n(l){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...l.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:r}),`
`,e.jsx(i.h1,{id:"tables",children:"Tables"}),`
`,e.jsx("description",{children:"Rappresentazione organizzata di dati in righe e colonne per visualizzare informazioni in modo strutturato e facilitare il confronto tra più elementi"}),`
`,e.jsx(i.h2,{id:"cosa-fa",children:"Cosa fa"}),`
`,e.jsx(i.p,{children:"Il componente table, in italiano tabella, è ideale quando si desidera presentare dati strutturati in modo chiaro e organizzato. Una tabella consente di organizzare in modo logico le informazioni, raggruppando elementi simili, favorendo la comparazione e facilitando la comprensione di contenuti complessi."}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"https://designers.italia.it/design-system/componenti/tables",rel:"nofollow",children:"Approfondisci quando e come usare il componente Tables"})}),`
`,e.jsx(i.h3,{id:"alternative-a-questo-componente",children:"Alternative a questo componente"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"/docs/componenti-list--documentazione",children:"List"}),": nel caso siano presenti dati o informazioni non struttutrati."]}),`
`,e.jsx(i.li,{children:"Card (in lavorazione): per mostrare contenuti in sequenza e permettere la navigazione a pagine di dettaglio."}),`
`]}),`
`,e.jsx(i.h2,{id:"anteprima-del-componente",children:"Anteprima del componente"}),`
`,e.jsx(i.p,{children:"A causa dell'uso diffuso di tabelle su widget di terze parti come calendari e campi di selezione data, o come elemento di presentazione sintetica di informazioni e layout di pagina, le tabelle di Dev Kit Italia sono implementate via HTML classico e senza forzarne lo stile."}),`
`,e.jsxs(i.p,{children:["È sufficiente aggiungere la classe ",e.jsx(i.code,{children:".table"})," a qualsiasi ",e.jsx(i.code,{children:"<table>"}),", quindi estendere con stili personalizzati o con le nostre varie classi incluse di modificatori."]}),`
`,e.jsx("div",{class:"callout callout-primary",children:e.jsxs("div",{class:"callout-inner",children:[e.jsx("div",{class:"callout-title",children:e.jsx("span",{class:"text",children:"Stili"})}),e.jsxs("p",{children:[e.jsxs(i.p,{children:[`In caso non si stia utilizzando il bundle unico, assicurarsi di avere importato tutti i fogli di stile necessari
da `,e.jsx(i.code,{children:"bootstrap-italia"}),":"]}),e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-css",children:`@import 'bootstrap-italia/src/scss/base/functions';
@import 'bootstrap-italia/src/scss/base/variables';
@import 'bootstrap-italia/src/scss/base/mixins';
@import 'bootstrap-italia/src/scss/components/tables';
`})})]})]})}),`
`,e.jsx(a,{of:c}),`
`,e.jsx(i.h2,{id:"accessibilità",children:"Accessibilità"}),`
`,e.jsx(i.p,{children:"Nel caso di tabelle colorate, l'uso del colore per aggiungere un significato fornisce solo un'indicazione visiva, che non sarà trasmesso agli utenti di tecnologie assistive – come gli screen reader."}),`
`,e.jsxs(i.p,{children:["Assicurati che le informazioni denotate dal colore siano rese disponibili anche dal contenuto stesso (es.: il testo visibile), o siano incluse attraverso mezzi alternativi, come testo aggiuntivo nascosto con la classe ",e.jsx(i.code,{children:".visually-hidden"}),"."]}),`
`,e.jsx(i.h2,{id:"tabelle-responsive",children:"Tabelle responsive"}),`
`,e.jsxs(i.p,{children:["Le tabelle responsive consentono di scorrere le tabelle orizzontalmente con facilità. Rendi ogni tabella responsive su tutti i viewports racchiudendo una  ",e.jsx(i.code,{children:'<table class="table">'})," in un ",e.jsx(i.code,{children:'<div class="table-responsive">'}),". Oppure, scegli un breakpoint massimo con il quale ottenere una tabella responsive usando ",e.jsx(i.code,{children:".table-responsive{-sm|-md|-lg|-xl|-xxl}"}),"."]}),`
`,e.jsx("div",{class:"callout callout-warning",children:e.jsxs("div",{class:"callout-inner",children:[e.jsx("div",{class:"callout-title",children:e.jsx("span",{class:"text",children:"Ritaglio / troncamento verticale"})}),e.jsx("p",{children:e.jsxs(i.p,{children:["Le tabelle responsive fanno uso di ",e.jsx(i.code,{children:"overflow-y: hidden"}),", che rimuove qualsiasi contenuto che va oltre i bordi inferiore o superiore della tabella. In particolare, questo può ritagliare i menu a discesa e altri widget di terze parti."]})})]})}),`
`,e.jsx(i.h3,{id:"sempre-responsive",children:"Sempre responsive"}),`
`,e.jsxs(i.p,{children:["Inserisci la tabella in un ",e.jsx(i.code,{children:"<div>"})," con classe ",e.jsx(i.code,{children:".table-responsive"})," per ottenere tabelle con scorrimento orizzontale responsive ad ogni punto di interruzione."]}),`
`,e.jsx(a,{of:t}),`
`,e.jsx(i.h3,{id:"breakpoint-specifici",children:"Breakpoint specifici"}),`
`,e.jsxs(i.p,{children:["Usa la classe ",e.jsx(i.code,{children:".table-responsive{-sm|-md|-lg|-xl|-xxl}"})," per creare tabelle responsive fino a un punto di interruzione particolare. Da quel punto di interruzione in su, la tabella si comporterà normalmente e non scorrerà orizzontalmente."]}),`
`,e.jsx(a,{of:d}),`
`,e.jsx(a,{of:h}),`
`,e.jsx(a,{of:x}),`
`,e.jsx(a,{of:p}),`
`,e.jsx(a,{of:j}),`
`,e.jsx(i.h2,{id:"varianti",children:"Varianti"}),`
`,e.jsx(i.p,{children:"Utilizza le classi contestuali per colorare tabelle, righe o celle individuali."}),`
`,e.jsx(i.h3,{id:"tabelle-colorate",children:"Tabelle colorate"}),`
`,e.jsxs(i.p,{children:["Applica le classi ",e.jsx(i.code,{children:".table-{color}"})," a ",e.jsx(i.code,{children:"<table>"})," per colorare l'intera tabella. Sostituisci ",e.jsx(i.code,{children:"{color}"})," con uno dei colori disponibili: ",e.jsx(i.code,{children:"primary"}),", ",e.jsx(i.code,{children:"secondary"}),", ",e.jsx(i.code,{children:"success"}),", ",e.jsx(i.code,{children:"danger"}),", ",e.jsx(i.code,{children:"warning"}),", ",e.jsx(i.code,{children:"info"}),", ",e.jsx(i.code,{children:"light"})," o ",e.jsx(i.code,{children:"dark"}),"."]}),`
`,e.jsx(a,{of:b}),`
`,e.jsx(i.h3,{id:"righe-colorate",children:"Righe colorate"}),`
`,e.jsxs(i.p,{children:["Applica le classi ",e.jsx(i.code,{children:".table-{color}"})," a ",e.jsx(i.code,{children:"<tr>"})," per colorare una riga specifica. Sostituisci ",e.jsx(i.code,{children:"{color}"})," con uno dei colori disponibili: ",e.jsx(i.code,{children:"primary"}),", ",e.jsx(i.code,{children:"secondary"}),", ",e.jsx(i.code,{children:"success"}),", ",e.jsx(i.code,{children:"danger"}),", ",e.jsx(i.code,{children:"warning"}),", ",e.jsx(i.code,{children:"info"}),", ",e.jsx(i.code,{children:"light"})," o ",e.jsx(i.code,{children:"dark"}),"."]}),`
`,e.jsx(a,{of:u}),`
`,e.jsx(i.h3,{id:"celle-colorate",children:"Celle colorate"}),`
`,e.jsxs(i.p,{children:["Applica le classi ",e.jsx(i.code,{children:".table-{color}"})," a ",e.jsx(i.code,{children:"<td>"})," o ",e.jsx(i.code,{children:"<th>"})," per colorare una cella specifica. Sostituisci ",e.jsx(i.code,{children:"{color}"})," con uno dei colori disponibili: ",e.jsx(i.code,{children:"primary"}),", ",e.jsx(i.code,{children:"secondary"}),", ",e.jsx(i.code,{children:"success"}),", ",e.jsx(i.code,{children:"danger"}),", ",e.jsx(i.code,{children:"warning"}),", ",e.jsx(i.code,{children:"info"}),", ",e.jsx(i.code,{children:"light"})," o ",e.jsx(i.code,{children:"dark"}),"."]}),`
`,e.jsx(a,{of:m}),`
`,e.jsx(i.h3,{id:"righe-striate",children:"Righe striate"}),`
`,e.jsxs(i.p,{children:["Applica la classe ",e.jsx(i.code,{children:".table-striped"})," a ",e.jsx(i.code,{children:"<table>"})," per aggiungere delle striature zebrate ad ogni riga della tabella contenute in ",e.jsx(i.code,{children:"<tbody>"}),"."]}),`
`,e.jsx(a,{of:g}),`
`,e.jsxs(i.p,{children:["La classe ",e.jsx(i.code,{children:".table-striped"})," è applicabile anche alle varianti colorate, ad esempio ",e.jsx(i.code,{children:".table-dark"}),":"]}),`
`,e.jsx(a,{of:v}),`
`,e.jsx(i.h3,{id:"righe-e-hover",children:"Righe e hover"}),`
`,e.jsxs(i.p,{children:["Applica la classe ",e.jsx(i.code,{children:".table-hover"})," a ",e.jsx(i.code,{children:"<table>"})," per abilitare lo stato hover sulle righe della tabella contenute in ",e.jsx(i.code,{children:"<tbody>"}),"."]}),`
`,e.jsx(a,{of:f}),`
`,e.jsx(i.p,{children:"Le tabelle con hover possono essere combinate con la variante striata."}),`
`,e.jsx(a,{of:z}),`
`,e.jsx(i.h3,{id:"tabelle-attive",children:"Tabelle attive"}),`
`,e.jsxs(i.p,{children:["Evidenzia una riga ",e.jsx(i.code,{children:"<tr>"})," o cella ",e.jsx(i.code,{children:"<td>"})," della tabella aggiungendo la classe ",e.jsx(i.code,{children:".table-active"})," al rispettivo tag HTML."]}),`
`,e.jsx(a,{of:T}),`
`,e.jsx(i.h2,{id:"tabella-con-bordi",children:"Tabella con bordi"}),`
`,e.jsxs(i.p,{children:["Aggiungi la classe ",e.jsx(i.code,{children:".table-bordered"})," a ",e.jsx(i.code,{children:"<table>"})," per avere i bordi a tutti i lati della tabella e su tutte le celle. Sostituisci ",e.jsx(i.code,{children:"{color}"})," con uno dei colori disponibili: ",e.jsx(i.code,{children:"primary"}),", ",e.jsx(i.code,{children:"secondary"}),", ",e.jsx(i.code,{children:"success"}),", ",e.jsx(i.code,{children:"danger"}),", ",e.jsx(i.code,{children:"warning"}),", ",e.jsx(i.code,{children:"info"}),", ",e.jsx(i.code,{children:"light"})," o ",e.jsx(i.code,{children:"dark"}),"."]}),`
`,e.jsx(a,{of:A}),`
`,e.jsxs(i.p,{children:["Le utilities di colorazione dei bordi ",e.jsx(i.code,{children:"border-{color}"})," possono essere utilizzate in combinazione a ",e.jsx(i.code,{children:".table-bordered"})," per cambiarne i colori."]}),`
`,e.jsx(a,{of:y}),`
`,e.jsx(i.h2,{id:"tabella-senza-bordi",children:"Tabella senza bordi"}),`
`,e.jsxs(i.p,{children:["Aggiungi la classe ",e.jsx(i.code,{children:".table-borderless"})," a ",e.jsx(i.code,{children:"<table>"})," per una tabella senza bordi."]}),`
`,e.jsx(a,{of:C}),`
`,e.jsxs(i.p,{children:["Le utilities di colorazione degli sfondi ",e.jsx(i.code,{children:"table-{color}"})," possono essere utilizzate in combinazione a ",e.jsx(i.code,{children:".table-borderless"})," per cambiarne i colori."]}),`
`,e.jsx(a,{of:L}),`
`,e.jsx(i.h2,{id:"tabella-compatta",children:"Tabella compatta"}),`
`,e.jsxs(i.p,{children:["Aggiungi la classe ",e.jsx(i.code,{children:".table-sm"})," a ",e.jsx(i.code,{children:"<table>"})," per rendere le tabelle più compatte dimezzando il cell padding."]}),`
`,e.jsx(a,{of:R}),`
`,e.jsx(i.h2,{id:"allineamento-verticale",children:"Allineamento verticale"}),`
`,e.jsxs(i.p,{children:["Le celle contenute nel ",e.jsx(i.code,{children:"<thead>"})," sono sempre allineate verticalmente al bottom. Le celle del ",e.jsx(i.code,{children:"<tbody>"})," ereditano l'allineamento da ",e.jsx(i.code,{children:"<table>"}),` e sono allineate al top per default.
Utilizza le classi di allineamento verticale `,e.jsx(i.code,{children:"align-{position}"})," per riallineare dove necessario."]}),`
`,e.jsx(a,{of:S}),`
`,e.jsx(i.h2,{id:"annidamento",children:"Annidamento"}),`
`,e.jsx(i.p,{children:"Gli stili di bordi, gli stili attivi e le varianti non sono ereditati dalle tabelle annidate."}),`
`,e.jsx(a,{of:k}),`
`,e.jsx(i.h2,{id:"struttura",children:"Struttura"}),`
`,e.jsx(i.h3,{id:"intestazione",children:"Intestazione"}),`
`,e.jsxs(i.p,{children:["Come per le tabelle utilizza le classi varianti come ",e.jsx(i.code,{children:".table-light"})," o ",e.jsx(i.code,{children:".table-dark"})," per modificare l'aspetto di ",e.jsx(i.code,{children:"<thead>"}),"."]}),`
`,e.jsx(a,{of:q}),`
`,e.jsx(a,{of:w}),`
`,e.jsx(i.h3,{id:"footer",children:"Footer"}),`
`,e.jsxs(i.p,{children:["Le tabelle possono avere un footer utilizzando l'elemento ",e.jsx(i.code,{children:"<tfoot>"}),"."]}),`
`,e.jsx(a,{of:I}),`
`,e.jsx(i.h3,{id:"caption",children:"Caption"}),`
`,e.jsxs(i.p,{children:["Un ",e.jsx(i.code,{children:"<caption>"})," funziona come un'intestazione per una tabella. Aiuta gli utenti con screen reader a trovare una tabella e capire di cosa si tratta e decidere se vogliono leggerla."]}),`
`,e.jsx(a,{of:M}),`
`,e.jsxs(i.p,{children:["Per renderizzare la ",e.jsx(i.code,{children:"<caption>"})," in cima alla tabella utilizza la classe ",e.jsx(i.code,{children:".caption-top"}),"."]}),`
`,e.jsx(a,{of:D})]})}function E(l={}){const{wrapper:i}={...s(),...l.components};return i?e.jsx(i,{...l,children:e.jsx(n,{...l})}):n(l)}export{E as default};

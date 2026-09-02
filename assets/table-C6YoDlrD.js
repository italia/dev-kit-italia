import{j as e,M as o,C as a}from"./blocks-AWYFoa02.js";import{useMDXComponents as s}from"./index-DFJevQmi.js";import{T as r,a as c,b as t,c as d,d as h,e as x,f as j,g as p,h as b,R as u,C as m,i as g,j as f,k as v,l as z,m as T,n as P,o as y,p as C,q as k,r as S,A as R,s as w,I as A,t as L,u as M,v as q,w as D}from"./table.stories-CuZ0zC5z.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-BAOCzTeu.js";function n(l){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...l.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:r}),`
`,e.jsx(i.h1,{id:"table",children:"Table"}),`
`,e.jsx("description",{children:"Rappresentazione organizzata di dati in righe e colonne per visualizzare informazioni in modo strutturato e facilitare il confronto tra più elementi."}),`
`,e.jsx(i.h2,{id:"cosa-fa",children:"Cosa fa"}),`
`,e.jsx(i.p,{children:"Il componente Table, in italiano tabella, organizza i dati in righe e colonne strutturate, facilitando il raggruppamento di elementi simili e il confronto tra valori."}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"https://designers.italia.it/design-system/componenti/tables",rel:"nofollow",children:"Approfondisci quando e come usare il componente Tables"})}),`
`,e.jsx(i.h3,{id:"alternative-a-questo-componente",children:"Alternative a questo componente"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"/docs/componenti-list--documentazione",children:"List"}),": nel caso siano presenti dati o informazioni non struttutrati."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"/docs/componenti-card--documentazione",children:"Card"}),": per mostrare contenuti in sequenza e permettere la navigazione a pagine di dettaglio."]}),`
`]}),`
`,e.jsx(i.h2,{id:"anteprima-del-componente",children:"Anteprima del componente"}),`
`,e.jsx(i.p,{children:"Dato l'uso diffuso di tabelle in widget di terze parti, il componente Table è implementato in HTML classico, senza imporre stili predefiniti."}),`
`,e.jsxs(i.p,{children:["Per usare le tabelle, aggiungi la classe ",e.jsx(i.code,{children:".table"})," a qualsiasi ",e.jsx(i.code,{children:"<table>"}),". Puoi poi applicare i tuoi stili personalizzati o le classi di stile messe a disposizione."]}),`
`,e.jsx("div",{class:"callout callout-primary",children:e.jsxs("div",{class:"callout-inner",children:[e.jsx("div",{class:"callout-title",children:e.jsx("span",{class:"text",children:"Stili"})}),e.jsxs("p",{children:[e.jsxs(i.p,{children:["Se non stai usando il bundle unico, assicurati di aver importato tutti i fogli di stile necessari da ",e.jsx(i.code,{children:"bootstrap-italia"}),":"]}),e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-scss",children:`@use 'bootstrap-italia/src/scss/base/functions' as *;
@use 'bootstrap-italia/src/scss/base/config' as *;
@use 'bootstrap-italia/src/scss/base/variables' as *;
@use 'bootstrap-italia/src/scss/base/mixins' as *;
@use 'bootstrap-italia/src/scss/components/tables' as *;
`})})]})]})}),`
`,e.jsx(a,{of:c}),`
`,e.jsx(i.h2,{id:"accessibilità",children:"Accessibilità"}),`
`,e.jsxs(i.p,{children:['Se usi tabelle colorate, ricorda che il significato associato ai colori (ad esempio, giallo per "attenzione", rosso per “pericolo”) non viene veicolato dalle tecnologie assistive come i lettori di schermo. Assicurati quindi che le informazioni espresse tramite il colore siano disponibili anche nel testo visibile oppure tramite testo aggiuntivo nascosto con la classe ',e.jsx(i.code,{children:".visually-hidden"}),"."]}),`
`,e.jsx(i.h2,{id:"tabelle-responsive",children:"Tabelle responsive"}),`
`,e.jsx(i.p,{children:"Le tabelle responsive consentono di scorrere i contenuti orizzontalmente con facilità."}),`
`,e.jsxs(i.p,{children:["Rendi la tabella responsive su tutti i viewport racchiudendo ",e.jsx(i.code,{children:'<table class="table">'})," in un ",e.jsx(i.code,{children:'<div class="table-responsive">'}),", oppure scegli un breakpoint massimo usando ",e.jsx(i.code,{children:".table-responsive{-sm|-md|-lg|-xl|-xxl}"}),"."]}),`
`,e.jsx("div",{class:"callout callout-warning",children:e.jsxs("div",{class:"callout-inner",children:[e.jsx("div",{class:"callout-title",children:e.jsx("span",{class:"text",children:"Troncamento verticale"})}),e.jsx("p",{children:e.jsxs(i.p,{children:["Le tabelle responsive usano ",e.jsx(i.code,{children:"overflow-y: hidden"})," per nascondere il contenuto che supera il bordo inferiore o superiore. Questo può troncare i menu a discesa e altri widget di terze parti."]})})]})}),`
`,e.jsx(i.h3,{id:"sempre-responsive",children:"Sempre responsive"}),`
`,e.jsxs(i.p,{children:["Per avere lo scorrimento orizzontale su tutti i breakpoint, inserisci la tabella in un ",e.jsx(i.code,{children:"<div>"})," con classe ",e.jsx(i.code,{children:".table-responsive"}),"."]}),`
`,e.jsx(a,{of:t}),`
`,e.jsx(i.h3,{id:"breakpoint-specifici",children:"Breakpoint specifici"}),`
`,e.jsxs(i.p,{children:["Per rendere la tabella responsive fino a uno specifico breakpoint, usa la classe ",e.jsx(i.code,{children:".table-responsive{-sm|-md|-lg|-xl|-xxl}"}),". Fino al breakpoint, la tabella si comporterà normalmente e non scorrerà orizzontalmente."]}),`
`,e.jsx(a,{of:d}),`
`,e.jsx(a,{of:h}),`
`,e.jsx(a,{of:x}),`
`,e.jsx(a,{of:j}),`
`,e.jsx(a,{of:p}),`
`,e.jsx(i.h2,{id:"varianti",children:"Varianti"}),`
`,e.jsx(i.p,{children:"Usa le classi contestuali per colorare tabelle, righe o celle individuali."}),`
`,e.jsx(i.h3,{id:"tabelle-colorate",children:"Tabelle colorate"}),`
`,e.jsxs(i.p,{children:["Per colorare l'intera tabella, applica la classe ",e.jsx(i.code,{children:".table-{color}"})," a ",e.jsx(i.code,{children:"<table>"}),". Sostituisci ",e.jsx(i.code,{children:"{color}"})," con uno dei colori disponibili: ",e.jsx(i.code,{children:"primary"}),", ",e.jsx(i.code,{children:"secondary"}),", ",e.jsx(i.code,{children:"success"}),", ",e.jsx(i.code,{children:"danger"}),", ",e.jsx(i.code,{children:"warning"}),", ",e.jsx(i.code,{children:"info"}),", ",e.jsx(i.code,{children:"light"})," o ",e.jsx(i.code,{children:"dark"}),"."]}),`
`,e.jsx(a,{of:b}),`
`,e.jsx(i.h3,{id:"righe-colorate",children:"Righe colorate"}),`
`,e.jsxs(i.p,{children:["Per colorare una riga specifica, applica la classe ",e.jsx(i.code,{children:".table-{color}"})," a ",e.jsx(i.code,{children:"<tr>"}),". Sostituisci ",e.jsx(i.code,{children:"{color}"})," con uno dei colori disponibili: ",e.jsx(i.code,{children:"primary"}),", ",e.jsx(i.code,{children:"secondary"}),", ",e.jsx(i.code,{children:"success"}),", ",e.jsx(i.code,{children:"danger"}),", ",e.jsx(i.code,{children:"warning"}),", ",e.jsx(i.code,{children:"info"}),", ",e.jsx(i.code,{children:"light"})," o ",e.jsx(i.code,{children:"dark"}),"."]}),`
`,e.jsx(a,{of:u}),`
`,e.jsx(i.h3,{id:"celle-colorate",children:"Celle colorate"}),`
`,e.jsxs(i.p,{children:["Per colorare una cella specifica, applica le classi ",e.jsx(i.code,{children:".table-{color}"})," a ",e.jsx(i.code,{children:"<td>"})," o ",e.jsx(i.code,{children:"<th>"}),". Sostituisci ",e.jsx(i.code,{children:"{color}"})," con uno dei colori disponibili: ",e.jsx(i.code,{children:"primary"}),", ",e.jsx(i.code,{children:"secondary"}),", ",e.jsx(i.code,{children:"success"}),", ",e.jsx(i.code,{children:"danger"}),", ",e.jsx(i.code,{children:"warning"}),", ",e.jsx(i.code,{children:"info"}),", ",e.jsx(i.code,{children:"light"})," o ",e.jsx(i.code,{children:"dark"}),"."]}),`
`,e.jsx(a,{of:m}),`
`,e.jsx(i.h3,{id:"righe-striate",children:"Righe striate"}),`
`,e.jsxs(i.p,{children:["Per aggiungere delle striature zebrate ad ogni riga della tabella contenute in ",e.jsx(i.code,{children:"<tbody>"}),", applica la classe ",e.jsx(i.code,{children:".table-striped"})," a ",e.jsx(i.code,{children:"<table>"}),"."]}),`
`,e.jsx(a,{of:g}),`
`,e.jsxs(i.p,{children:["Puoi applicare la classe ",e.jsx(i.code,{children:".table-striped"})," anche alle varianti colorate, ad esempio ",e.jsx(i.code,{children:".table-dark"}),":"]}),`
`,e.jsx(a,{of:f}),`
`,e.jsx(i.h3,{id:"righe-e-hover",children:"Righe e hover"}),`
`,e.jsxs(i.p,{children:["Per abilitare lo stato hover sulle righe della tabella contenute in ",e.jsx(i.code,{children:"<tbody>"}),", applica la classe ",e.jsx(i.code,{children:".table-hover"})," a ",e.jsx(i.code,{children:"<table>"}),"."]}),`
`,e.jsx(a,{of:v}),`
`,e.jsx(i.p,{children:"Puoi combinare le tabelle con hover con la variante striata."}),`
`,e.jsx(a,{of:z}),`
`,e.jsx(i.h3,{id:"tabelle-attive",children:"Tabelle attive"}),`
`,e.jsxs(i.p,{children:["Per evidenziare una riga o una cella, aggiungi la classe ",e.jsx(i.code,{children:".table-active"})," al tag ",e.jsx(i.code,{children:"<tr>"})," della riga o al tag ",e.jsx(i.code,{children:"<td>"})," della cella."]}),`
`,e.jsx(a,{of:T}),`
`,e.jsx(i.h2,{id:"tabella-con-bordi",children:"Tabella con bordi"}),`
`,e.jsxs(i.p,{children:["Per avere i bordi su tutti i lati della tabella e su tutte le celle, aggiungi la classe ",e.jsx(i.code,{children:".table-bordered"})," a ",e.jsx(i.code,{children:"<table>"}),"."]}),`
`,e.jsx(a,{of:P}),`
`,e.jsxs(i.p,{children:["Per colorare i bordi, usa la classe ",e.jsx(i.code,{children:"border-{color}"})," in combinazione con ",e.jsx(i.code,{children:".table-bordered"}),". Sostituisci ",e.jsx(i.code,{children:"{color}"})," con uno dei colori disponibili: ",e.jsx(i.code,{children:"primary"}),", ",e.jsx(i.code,{children:"secondary"}),", ",e.jsx(i.code,{children:"success"}),", ",e.jsx(i.code,{children:"danger"}),", ",e.jsx(i.code,{children:"warning"}),", ",e.jsx(i.code,{children:"info"}),", ",e.jsx(i.code,{children:"light"})," o ",e.jsx(i.code,{children:"dark"}),"."]}),`
`,e.jsx(a,{of:y}),`
`,e.jsx(i.h2,{id:"tabella-senza-bordi",children:"Tabella senza bordi"}),`
`,e.jsxs(i.p,{children:["Per una tabella senza bordi, aggiungi la classe ",e.jsx(i.code,{children:".table-borderless"})," a ",e.jsx(i.code,{children:"<table>"}),"."]}),`
`,e.jsx(a,{of:C}),`
`,e.jsxs(i.p,{children:["Per colorare lo sfondo, usa la classe ",e.jsx(i.code,{children:"table-{color}"})," in combinazione con ",e.jsx(i.code,{children:".table-borderless"}),"."]}),`
`,e.jsx(a,{of:k}),`
`,e.jsx(i.h2,{id:"tabella-compatta",children:"Tabella compatta"}),`
`,e.jsxs(i.p,{children:["Per dimezzare il cell padding e rendere le tabelle più compatte, aggiungi la classe ",e.jsx(i.code,{children:".table-sm"})," a ",e.jsx(i.code,{children:"<table>"}),"."]}),`
`,e.jsx(a,{of:S}),`
`,e.jsx(i.h2,{id:"allineamento-verticale",children:"Allineamento verticale"}),`
`,e.jsxs(i.p,{children:["Le celle in ",e.jsx(i.code,{children:"<thead>"})," sono sempre allineate verticalmente in basso (bottom). Le celle in ",e.jsx(i.code,{children:"<tbody>"})," ereditano l'allineamento da ",e.jsx(i.code,{children:"<table>"})," e sono allineate verticalmente in alto (top)."]}),`
`,e.jsxs(i.p,{children:["Per modificare l'allineamento, usa le le classi di allineamento verticale ",e.jsx(i.code,{children:"align-{position}"}),"."]}),`
`,e.jsx(a,{of:R}),`
`,e.jsx(i.h2,{id:"annidamento",children:"Annidamento"}),`
`,e.jsx(i.p,{children:"Le tabelle annidate non ereditano gli stili dei bordi, gli stili attivi e le varianti."}),`
`,e.jsx(a,{of:w}),`
`,e.jsx(i.h2,{id:"struttura",children:"Struttura"}),`
`,e.jsx(i.h3,{id:"intestazione",children:"Intestazione"}),`
`,e.jsxs(i.p,{children:["Per modificare l'aspetto dell'intestazione, applica le classi varianti come ",e.jsx(i.code,{children:".table-light"})," o ",e.jsx(i.code,{children:".table-dark"})," a ",e.jsx(i.code,{children:"<thead>"}),"."]}),`
`,e.jsx(a,{of:A}),`
`,e.jsx(a,{of:L}),`
`,e.jsx(i.h3,{id:"footer",children:"Footer"}),`
`,e.jsxs(i.p,{children:["Per aggiunger un footer alla tabella, usa l'elemento ",e.jsx(i.code,{children:"<tfoot>"}),"."]}),`
`,e.jsx(a,{of:M}),`
`,e.jsx(i.h3,{id:"caption",children:"Caption"}),`
`,e.jsxs(i.p,{children:["La ",e.jsx(i.code,{children:"<caption>"})," di una tabella funziona come un'intestazione descrittiva e aiuta gli utenti di lettori di schermo a capire di cosa trattano i contenuti."]}),`
`,e.jsx(a,{of:q}),`
`,e.jsxs(i.p,{children:["Per posizionare la ",e.jsx(i.code,{children:"<caption>"})," in cima alla tabella, usa la classe ",e.jsx(i.code,{children:".caption-top"}),"."]}),`
`,e.jsx(a,{of:D})]})}function V(l={}){const{wrapper:i}={...s(),...l.components};return i?e.jsx(i,{...l,children:e.jsx(n,{...l})}):n(l)}export{V as default};

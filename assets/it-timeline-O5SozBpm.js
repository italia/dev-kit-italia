import{j as e,M as r,C as n,a}from"./blocks-CT7VCudE.js";import{useMDXComponents as t}from"./index-JxopJXbk.js";import{S as c,T as d,E as l,P as p,a as h,b as m,c as u,d as x,e as j,f as g,g as z,h as v}from"./it-timeline.stories-D3aR1VTH.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-DqPvw_k1.js";function s(o){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...t(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:c}),`
`,e.jsx(i.h1,{id:"timeline",children:"Timeline"}),`
`,e.jsx("description",{children:"Rappresentazione grafica di una serie di eventi in ordine cronologico per descrivere la storia di un’istituzione o il progresso di un progetto"}),`
`,e.jsx(i.h2,{id:"cosa-fa",children:"Cosa fa"}),`
`,e.jsx(i.p,{children:"Il componente timeline è disponibile in due varianti distinte:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Timeline classica"})," — per presentare una storia o l'avanzamento di una roadmap di cose da fare."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Timeline point list"})," — per presentare una breve sequenza di cose da fare e scadenze temporali."]}),`
`]}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"https://designers.italia.it/design-system/componenti/timeline/",rel:"nofollow",children:"Approfondisci come e quando usare il componente Timeline"})}),`
`,e.jsx(i.h2,{id:"accessibilità",children:"Accessibilità"}),`
`,e.jsx(i.p,{children:"Segui queste indicazioni per garantire l'accessibilità del componente:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["L'elemento contenitore del pin ",e.jsx(i.code,{children:"<it-timeline-element>"})," (internamente un elemento heading), dovrà avere il livello intestazione corretto a seconda della gerarchia in pagina tramite l'attributo ",e.jsx(i.code,{children:"heading-level"}),". Lo stesso concetto è valido per il titolo della card se usi una card come contenuto slottato (usa ",e.jsx(i.code,{children:"heading-level"})," su ",e.jsx(i.code,{children:"<it-card>"}),")."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Per punti data"}),": usa l'elemento semantico ",e.jsx(i.code,{children:"<time>"})," con l'attributo ",e.jsx(i.code,{children:"datetime"})," in formato ISO (es. ",e.jsx(i.code,{children:"2025-10-14"}),"). Inserisci un ",e.jsx(i.code,{children:'<span class="visually-hidden">'})," con la data scritta per esteso."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Per punti non temporali"}),": usa un ",e.jsx(i.code,{children:"<div>"})," nello slot ",e.jsx(i.code,{children:"milestone"})," e usa ",e.jsx(i.code,{children:'<span class="visually-hidden">'}),` per descrivere il contenuto in linguaggio naturale seguendo l'ordine visivo (es. "Categoria AB, passo 1 di 3").`]}),`
`]}),`
`,e.jsx("div",{class:"callout callout-warning",children:e.jsxs("div",{class:"callout-inner",children:[e.jsx("div",{class:"callout-title",children:e.jsx("span",{class:"text",children:"Nota sui test di accessibilità"})}),e.jsx("p",{children:e.jsxs(i.p,{children:["Axe e altri strumenti di analisi statica possono segnalare falsi positivi quando analizzano il componente ",e.jsx(i.code,{children:"it-timeline"})," a causa del limitato supporto per i Web Components. La struttura accessibile effettiva è corretta, come confermato dall'Accessibility Tree e dai test manuali con screen reader."]})})]})}),`
`,e.jsx(i.h2,{id:"timeline-classica",children:'Timeline "classica"'}),`
`,e.jsxs(i.p,{children:["Viene in seguito mostrato un esempio di timeline classica con tutte e tre le varianti di pin. Per vedere l'anteprima del codice, clicca su ",e.jsx(i.strong,{children:"Show code"}),"."]}),`
`,e.jsx(n,{of:d}),`
`,e.jsx(i.h3,{id:"indicazioni-generali",children:"Indicazioni generali"}),`
`,e.jsxs(i.p,{children:['Il componente nella sua versione "classica" è composto da ',e.jsx(i.code,{children:"<it-timeline>"})," (contenitore) e ",e.jsx(i.code,{children:"<it-timeline-element>"})," (singolo elemento)."]}),`
`,e.jsxs(i.p,{children:["Ogni ",e.jsx(i.code,{children:"<it-timeline-element>"})," contiene:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"PIN"}),": intestazione con icona (slot ",e.jsx(i.code,{children:"pin-icon"}),") e label del periodo (attributo ",e.jsx(i.code,{children:"date"}),")."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Contenuto"}),": uno o più ",e.jsx(i.code,{children:"<it-card>"})," (o altri elementi HTML) nel default slot."]}),`
`]}),`
`,e.jsxs(i.p,{children:["Il pin ha tre varianti di colore controllate tramite l'attributo ",e.jsx(i.code,{children:"variant"}),":"]}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Valore"}),e.jsx("th",{children:"Significato temporale"}),e.jsx("th",{children:"Colore"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("em",{children:"(nessuno)"})}),e.jsx("td",{children:"Futuro"}),e.jsx("td",{children:"Bianco"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"current"})}),e.jsx("td",{children:"Presente"}),e.jsx("td",{children:"Primario"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"past"})}),e.jsx("td",{children:"Passato"}),e.jsx("td",{children:"Primario scuro"})]})]})]}),`
`,e.jsx(i.h2,{id:"timeline-point-list",children:'Timeline "point list"'}),`
`,e.jsx(i.p,{children:"La timeline point list permette la rappresentazione di una sequenza di eventi o informazioni in maniera più compatta rispetto alla timeline classica. È particolarmente indicata per presentare una breve sequenza di cose da fare e scadenze temporali."}),`
`,e.jsx(i.h3,{id:"anteprima-e-attributi-del-componente",children:"Anteprima e attributi del componente"}),`
`,e.jsxs(i.p,{children:["Modifica gli attributi nella tabella per personalizzare in tempo reale l'aspetto e il comportamento del componente. Per vedere come cambia il codice, clicca su ",e.jsx(i.strong,{children:"Show code"}),"."]}),`
`,e.jsx(n,{of:l}),`
`,e.jsx(a,{of:l}),`
`,e.jsx(i.h3,{id:"indicazioni-generali-1",children:"Indicazioni generali"}),`
`,e.jsx(i.p,{children:'Il componente nella sua versione "point list" è composto da:'}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:'<it-timeline variant="point-list">'})," - contenitore lista (renderizza ",e.jsx(i.code,{children:"<ol>"})," o ",e.jsx(i.code,{children:"<ul>"}),")."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"<it-timeline-point>"})," - singolo punto della lista, il suo contenuto deve essere inserito nello slot ",e.jsx(i.code,{children:"content"}),"."]}),`
`]}),`
`,e.jsxs(i.p,{children:["La sezione laterale è rappresentata dagli ",e.jsx(i.code,{children:'slot="milestone"'})," e ",e.jsx(i.code,{children:'slot="time"'}),", e visualizza informazioni in tre posizioni verticali tramite classi posizionali nei contenuti dello slot ",e.jsx(i.code,{children:"date"})," o ",e.jsx(i.code,{children:"milestone"}),":"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:".point-top"})," — elemento superiore (opzionale, es. anno, categoria, versione)"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:".point-main"})," — elemento principale (obbligatorio, es. giorno, numero step, icona milestone)"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:".point-bottom"})," — elemento inferiore (opzionale, es. mese, frazione, label)"]}),`
`]}),`
`,e.jsxs(i.p,{children:["Questi elementi vanno inseriti in un elemento (negli esempi uno ",e.jsx(i.code,{children:"span"}),") con classe ",e.jsx(i.code,{children:".point-visual"}),". Per rendere il contenuto accessibile,  ricordati di:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Utilizzare sempre un elemento ",e.jsx(i.code,{children:"<time>"})," con attributo ",e.jsx(i.code,{children:"datetime"})," per le date"]}),`
`,e.jsxs(i.li,{children:["Aggiungere ",e.jsx(i.code,{children:'<span class="visually-hidden">'})," ",e.jsx(i.strong,{children:"obbligatoriamente"})," per contenuti non temporali, ",e.jsx(i.strong,{children:"opzionalmente"})," per date, al fine di fornire una descrizione testuale completa ai lettori di schermo."]}),`
`]}),`
`,e.jsx(i.h3,{id:"date-specifiche",children:"Date specifiche"}),`
`,e.jsxs(i.p,{children:["Se l'informazione per la sezione laterale è una data, utilizza lo slot ",e.jsx(i.code,{children:"date"})," e inserisci un elemento ",e.jsx(i.code,{children:"<time>"})," con l'attributo ",e.jsx(i.code,{children:"datetime"})," in formato ISO (es. ",e.jsx(i.code,{children:"2025-10-14"}),`).
Attraverso i contenitori posizionali è possibile scegliere di visualizzare solo il giorno, o anche mese e anno.`]}),`
`,e.jsx(i.h4,{id:"con-giorno-e-mese",children:"Con giorno e mese"}),`
`,e.jsxs(i.p,{children:["Puoi aggiungere e visualizzare il mese insieme al giorno inserendo il giorno in un contenitore con classe ",e.jsx(i.code,{children:".point-main"})," e il mese in un contenitore con classe ",e.jsx(i.code,{children:".point-bottom"}),"."]}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(i.h4,{id:"con-anno-giorno-e-mese",children:"Con anno, giorno e mese"}),`
`,e.jsxs(i.p,{children:["Puoi aggiungere e visualizzare anche l'anno inserendolo in un contenitore con classe ",e.jsx(i.code,{children:".point-top"}),"."]}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(i.h3,{id:"layout-compatto-su-desktop",children:"Layout compatto su desktop"}),`
`,e.jsxs(i.p,{children:["Puoi applicare l'attributo ",e.jsx(i.code,{children:"compact"})," all'elemento ",e.jsx(i.code,{children:"<it-timeline>"})," per rendere più compatta la visualizzazione del blocco aside anche su desktop, facendola corrispondere alla visualizzazione per dispositivi mobile."]}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(i.h3,{id:"traguardi-e-milestone",children:"Traguardi e milestone"}),`
`,e.jsxs(i.p,{children:["Puoi utilizzare la sezione laterale anche per visualizzare progressi, step o milestone tramite numeri, sigle o icone. In questo caso si usa lo slot ",e.jsx(i.code,{children:"milestone"})," al posto di ",e.jsx(i.code,{children:"date"}),"."]}),`
`,e.jsx(i.h4,{id:"traguardi-con-numeri-e-sigle",children:"Traguardi con numeri e sigle"}),`
`,e.jsxs(i.p,{children:["Puoi utilizzare i contenitori posizionali per presentare informazioni diverse dalle date, come numeri di step, frazioni o sigle. In questo caso si usa un ",e.jsx(i.code,{children:"<div>"})," generico nello slot ",e.jsx(i.code,{children:"milestone"}),"."]}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(i.h4,{id:"traguardi-con-icone",children:"Traguardi con icone"}),`
`,e.jsxs(i.p,{children:["Puoi utilizzare  un'icona ",e.jsx(i.code,{children:"it-icon"})," nel contenitore ",e.jsx(i.code,{children:".point-main"})," per rappresentare milestone o stati, accompagnata da eventuali micro-testi nei contenitori ",e.jsx(i.code,{children:".point-top"})," e ",e.jsx(i.code,{children:".point-bottom"}),"."]}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(i.h3,{id:"varianti-colore",children:"Varianti colore"}),`
`,e.jsxs(i.p,{children:["Puoi modificare l'attributo ",e.jsx(i.code,{children:"color"})," di ",e.jsx(i.code,{children:"<it-timeline-point>"})," per personalizzare il colore della sezione laterale. I valori disponibili sono ",e.jsx(i.code,{children:"primary"}),", ",e.jsx(i.code,{children:"secondary"}),", ",e.jsx(i.code,{children:"success"}),", ",e.jsx(i.code,{children:"danger"}),", ",e.jsx(i.code,{children:"warning"}),", ",e.jsx(i.code,{children:"info"})," e ",e.jsx(i.code,{children:"dark"})," (i colori del Design System .italia)."]}),`
`,e.jsxs(i.p,{children:["Se non viene specificato, il colore di default è ",e.jsx(i.code,{children:"primary"}),"."]}),`
`,e.jsx(n,{of:j}),`
`,e.jsxs(i.p,{children:["Puoi anche avere punti con colori diversi all'interno della stessa timeline specificando l'attributo ",e.jsx(i.code,{children:"color"})," solo sui punti desiderati."]}),`
`,e.jsxs(i.p,{children:["In questo caso, gli elementi ",e.jsx(i.code,{children:"it-timeline-point"})," senza l'attributo ",e.jsx(i.code,{children:"color"})," prenderanno il colore di default ",e.jsx(i.code,{children:"primary"})," o il valore assegnato all'attributo ",e.jsx(i.code,{children:"color"})," dell'elemento ",e.jsx(i.code,{children:"it-timeline"}),", mentre i punti con l'attributo ",e.jsx(i.code,{children:"color"})," prenderanno il colore specificato"]}),`
`,e.jsx(n,{of:g}),`
`,e.jsx(i.h3,{id:"timeline-stile-servizi-pubblici",children:"Timeline stile servizi pubblici"}),`
`,e.jsxs(i.p,{children:["Puoi creare un layout ottimizzato per presentare scadenze e procedure amministrative utilizzando come contenuto slottato nello slot ",e.jsx(i.code,{children:"content"})," card semplici con data in evidenza e descrizione breve, e sfruttando la sezione laterale per evidenziare la data di scadenza o il numero di giorni mancanti alla scadenza."]}),`
`,e.jsxs(i.p,{children:["Puoi fissare verticalmente il punto dell'elenco all'inizio del contenuto usa l'attributo ",e.jsx(i.code,{children:"align-top"})," sull'elemento ",e.jsx(i.code,{children:"<it-timeline-point>"}),". Nell'esempio è applicata all'ultimo punto elenco particolarmente lungo."]}),`
`,e.jsx(n,{of:z}),`
`,e.jsx(i.h3,{id:"esempio-complesso-con-card-complete",children:"Esempio complesso con card complete"}),`
`,e.jsx(i.p,{children:"Di seguito un esempio che integra card nel contenuto della timeline."}),`
`,e.jsxs(i.p,{children:["Per fissare verticalmente il punto dell'elenco all'inizio del contenuto usa l'attributo ",e.jsx(i.code,{children:"align-top"})," sull'elemento ",e.jsx(i.code,{children:"<it-timeline-point>"}),". Nell'esempio è applicato a tutti i punti in elenco essendo particolarmente lunghi nei contenuti."]}),`
`,e.jsxs(i.p,{children:["Nota bene: usa l'attributo ",e.jsx(i.code,{children:"stack-mobile"})," sull'elemento ",e.jsx(i.code,{children:'<it-timeline variant="point-list">'})," per permettere su mobile di disporre verticalmente la sezione laterale in alto al contenuto, ottimizzando lo spazio per card complesse a risoluzioni mobile. In questo caso è bene che il contenuto sia sempre raccolto in elementi di tipo card o almeno con un fondale colorato per sovrastare gerarchicamente la linea."]}),`
`,e.jsx(n,{of:v})]})}function I(o={}){const{wrapper:i}={...t(),...o.components};return i?e.jsx(i,{...o,children:e.jsx(s,{...o})}):s(o)}export{I as default};

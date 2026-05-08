import{j as e,M as a,C as n}from"./blocks-DSPejIpl.js";import{useMDXComponents as s}from"./index-B-Z8tbgt.js";import{S as r,B as d,C as c,a as t,I as h,b as x,L as p,R as u,c as g,d as j,e as m,f as z,g as f,h as b,i as v,A as C,j as w,k as S,l as L,G as k,m as q,n as R,o as A,p as I,q as E,O as M,r as y,M as B,s as D}from"./griglie.stories-CVkxAxhZ.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-DHDslVeB.js";import"./organizzare-gli-spazi.helpers-B_9bU4Gy.js";function l(o){const i={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:r}),`
`,e.jsx(i.h1,{id:"griglie",children:"Griglie"}),`
`,e.jsx(i.p,{children:"Bootstrap Italia eredita la potente griglia flexbox mobile-first di Bootstrap per costruire layout di tutte le forme e dimensioni grazie a un sistema a dodici colonne."}),`
`,e.jsx(i.h2,{id:"come-funziona",children:"Come funziona"}),`
`,e.jsxs(i.p,{children:["Il sistema di griglie di Bootstrap usa una serie di contenitori, righe e colonne per disporre ed allineare i contenuti, costruito su ",e.jsx(i.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes",rel:"nofollow",children:"flexbox"})," e completamente responsive."]}),`
`,e.jsxs(i.blockquote,{children:[`
`,e.jsx(i.p,{children:e.jsx(i.strong,{children:"Nota"})}),`
`,e.jsx(i.h4,{id:"approfondimento",children:"Approfondimento"}),`
`,e.jsx(i.p,{children:"Se sei poco pratico di flexbox, puoi iniziare da questi link per trovare informazioni di carattere generale, specifiche e frammenti di codice."}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox",rel:"nofollow",children:"guida su flexbox su MSDN"})," (in inglese)"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://css-tricks.com/snippets/css/a-guide-to-flexbox/#flexbox-background",rel:"nofollow",children:"guida su flexbox su CSS tricks"})," (in inglese)"]}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"http://flexboxfroggy.com/#it",rel:"nofollow",children:"un simpatico quiz per verificare le tue conoscenze"})}),`
`]}),`
`]}),`
`,e.jsx(i.p,{children:"Di seguito puoi trovare un esempio e uno sguardo approfondito su come la griglia viene costruita."}),`
`,e.jsx(n,{of:d}),`
`,e.jsxs(i.p,{children:["L'esempio precedente crea tre colonne di uguale larghezza su dispositivi piccoli, medi, grandi e extra large usando le classi di griglia predefinite. Le colonne sono centrate nella pagina attraverso l'utilizzo dell'elemento genitore ",e.jsx(i.code,{children:".container"}),"."]}),`
`,e.jsx(i.p,{children:"Analizzandolo nel dettaglio, ecco come funziona:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["I contenitori forniscono un mezzo per centrare e riempire orizzontalmente il contenuto del tuo sito. Utilizza ",e.jsx(i.code,{children:".container"})," per una larghezza al pixel responsive o ",e.jsx(i.code,{children:".container-fluid"})," per una larghezza del ",e.jsx(i.code,{children:"width: 100%"})," su tutti i viewport e dimensioni dei device."]}),`
`,e.jsxs(i.li,{children:["Le righe sono involucri per colonne. Ogni colonna ha un spaziature orizzontale (",e.jsx(i.code,{children:"gutter"}),") per regolare lo spazio tra di esse. Questo ",e.jsx(i.code,{children:"padding"})," viene poi neutralizzato dalle righe con margini negativi. In questo modo, tutto il contenuto nelle colonne viene allineato sul lato sinistro."]}),`
`,e.jsx(i.li,{children:"In un layout a griglia, il contenuto deve essere posizionato all'interno di colonne e solo le colonne possono essere figlie dirette delle righe."}),`
`,e.jsxs(i.li,{children:["Grazie a flexbox, le colonne della griglia senza uno specifico ",e.jsx(i.code,{children:"width"})," verranno automaticamente impostate come colonne di uguale larghezza. Per esempio, quattro casi di ",e.jsx(i.code,{children:".col-sm"})," avranno automaticamente una larghezza del 25% dal più piccolo breakpoint in su. Guarda la sezione ",e.jsx(i.a,{href:"#colonne-a-disposizione-automatica",children:"colonne a disposizione automatica"})," per maggiori informazioni."]}),`
`,e.jsxs(i.li,{children:["Le classi delle colonne indicano il numero delle colonne che dovresti utilizzare in base alle 12 possibili per riga. Quindi, se vuoi tre colonne di uguale larghezza, puoi usare ",e.jsx(i.code,{children:".col-4"}),"."]}),`
`,e.jsxs(i.li,{children:["Le ",e.jsx(i.code,{children:"width"})," delle colonne sono stabilite in percentuale, quindi sono sempre fluide e dimensionate rispetto al loro elemento genitore."]}),`
`,e.jsxs(i.li,{children:["Le colonne hanno un ",e.jsx(i.code,{children:"padding"})," orizzontale per creare il gutter tra le singole colonne. Per rimuovere il ",e.jsx(i.code,{children:"margin"})," dalle righe e il ",e.jsx(i.code,{children:"padding"})," dalle colonne aggiungendo la classe ",e.jsx(i.code,{children:".g-0"})," alla classe ",e.jsx(i.code,{children:".row"}),"."]}),`
`,e.jsx(i.li,{children:"Per renderla responsive, esistono sei breakpoint della griglia, uno per ogni responsive breakpoint: tutti i breakpoint (extra small), small, medium, large, extra large ed extra extra large."}),`
`,e.jsxs(i.li,{children:["I breakpoint della griglia si basano su media query con larghezza minima, significa che ",e.jsx(i.strong,{children:"si applicano a quel breakpoint e a tutti quelli sopra di esso"})," (e.g., ",e.jsx(i.code,{children:".col-sm-4"})," si applica a device piccoli, medi, grandi e extra large, ma non al primo breakpoint ",e.jsx(i.code,{children:"xs"}),")."]}),`
`,e.jsxs(i.li,{children:["È possibile utilizzare classi di griglia predefinite (come ",e.jsx(i.code,{children:".col-4"}),") per altri markup semantici."]}),`
`]}),`
`,e.jsxs(i.p,{children:["Sii consapevole dei limiti e dei ",e.jsx(i.a,{href:"https://github.com/philipwalton/flexbugs",rel:"nofollow",children:"bug di flexbox"}),", come l' ",e.jsx(i.a,{href:"https://github.com/philipwalton/flexbugs#9-some-html-elements-cant-be-flex-containers",rel:"nofollow",children:"incapacità di utilizzare alcuni elementi HTML come i contenitori di flex"}),"."]}),`
`,e.jsx(i.h3,{id:"le-opzioni",children:"Le opzioni"}),`
`,e.jsxs(i.p,{children:["Mentre Bootstrap utilizza ",e.jsx(i.code,{children:"em"})," or ",e.jsx(i.code,{children:"rem"})," per definire gran parte delle misure, i ",e.jsx(i.code,{children:"px"})," sono utilizzati per i breakpoint della griglia e la larghezza dei contenitori. Questo perché la larghezza della viewport è definita in pixel e non cambia con il ",e.jsx(i.a,{href:"https://drafts.csswg.org/mediaqueries-3/#units",rel:"nofollow",children:"font size"}),"."]}),`
`,e.jsx(i.p,{children:"Scopri come gli aspetti della griglia di Bootstrap funzionano su più dispositivi con una comoda tabella."}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Opzione"}),e.jsx("th",{children:"Extra small <576px"}),e.jsx("th",{children:"Small >=576px"}),e.jsx("th",{children:"Medium >=768px"}),e.jsx("th",{children:"Large >=992px"}),e.jsx("th",{children:"Extra large >=1200px"}),e.jsx("th",{children:"Extra Extra large >=1400px"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Larghezza massima del contenitore"}),e.jsx("td",{children:"Nessuno (auto)"}),e.jsx("td",{children:"540px"}),e.jsx("td",{children:"720px"}),e.jsx("td",{children:"960px"}),e.jsx("td",{children:"1176px"}),e.jsx("td",{children:"1320px"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Prefisso classi per le colonne"}),e.jsx("td",{children:e.jsx("code",{children:".col-"})}),e.jsx("td",{children:e.jsx("code",{children:".col-sm-"})}),e.jsx("td",{children:e.jsx("code",{children:".col-md-"})}),e.jsx("td",{children:e.jsx("code",{children:".col-lg-"})}),e.jsx("td",{children:e.jsx("code",{children:".col-xl-"})}),e.jsx("td",{children:e.jsx("code",{children:".col-xxl-"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Numero di colonne"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"12"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Larghezza del gutter"}),e.jsx("td",{children:"24px"}),e.jsx("td",{children:"24px"}),e.jsx("td",{children:"24px"}),e.jsx("td",{children:"24px"}),e.jsx("td",{children:"24px"}),e.jsx("td",{children:"24px"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Annidabile"}),e.jsx("td",{children:"Yes"}),e.jsx("td",{children:"Yes"}),e.jsx("td",{children:"Yes"}),e.jsx("td",{children:"Yes"}),e.jsx("td",{children:"Yes"}),e.jsx("td",{children:"Yes"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Ordinamento delle colonne"}),e.jsx("td",{children:"Yes"}),e.jsx("td",{children:"Yes"}),e.jsx("td",{children:"Yes"}),e.jsx("td",{children:"Yes"}),e.jsx("td",{children:"Yes"}),e.jsx("td",{children:"Yes"})]})]})]}),`
`,e.jsx(i.h2,{id:"colonne-a-disposizione-automatica",children:"Colonne a disposizione automatica"}),`
`,e.jsxs(i.p,{children:["Utilizza classi di colonne specifiche ad ogni breakpoint per un facile ridimensionamento delle colonne senza una specifica classe numerata come ",e.jsx(i.code,{children:".col-sm-6"}),"."]}),`
`,e.jsx(i.h3,{id:"uniformare-larghezze-tra-colonne",children:"Uniformare larghezze tra colonne"}),`
`,e.jsxs(i.p,{children:["Ad esempio, qui ci sono due layout di griglia che si applicano a ogni dispositivo e viewport, da ",e.jsx(i.code,{children:"xs"})," a ",e.jsx(i.code,{children:"xxl"}),". Aggiungi un numero qualsiasi di classi senza unità per ogni breakpoint di cui hai bisogno e ogni colonna avrà la stessa larghezza."]}),`
`,e.jsx(n,{of:c}),`
`,e.jsxs(i.p,{children:["Colonne con uguale larghezza possono essere spezzate su più linee, ma c'è un ",e.jsx(i.a,{href:"https://github.com/philipwalton/flexbugs#11-min-and-max-size-declarations-are-ignored-when-wrapping-flex-items",rel:"nofollow",children:"bug di flexbox su Safari"}),", risolto dalla versione 10.1, che ne impediva il funzionamento senza uno specifico ",e.jsx(i.code,{children:"flex-basis"})," o ",e.jsx(i.code,{children:"border"}),". Esistono soluzioni alternative per le versioni precedenti dei browser, ma non dovrebbero essere necessarie se si è aggiornati."]}),`
`,e.jsx(n,{of:t}),`
`,e.jsx(i.h3,{id:"impostare-la-larghezza-di-una-colonna",children:"Impostare la larghezza di una colonna"}),`
`,e.jsx(i.p,{children:"La disposizione automatica per le colonne della griglia di flexbox significa anche che puoi impostare la larghezza di una colonna e avere le colonne sorelle automaticamente ridimensionate in base ad essa. È possibile utilizzare classi di griglia predefinite (come mostrato di seguito), mixins di griglia o larghezze in linea. Notare che le altre colonne si ridimensioneranno indipendentemente dalla larghezza della colonna centrale."}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(i.h3,{id:"contenuto-a-larghezza-variabile",children:"Contenuto a larghezza variabile"}),`
`,e.jsxs(i.p,{children:["Puoi usare la classe ",e.jsx(i.code,{children:"col-{breakpoint}-auto"})," per ridimensionare le colonne in base alla naturale larghezza del loro contenuto."]}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(i.h3,{id:"larghezza-identica-su-più-righe",children:"Larghezza identica su più righe"}),`
`,e.jsxs(i.p,{children:["Crea colonne di uguale larghezza che si estendono su più righe inserendo un ",e.jsx(i.code,{children:".w-100"})," dove vuoi che le colonne vengano divise su un'altra riga."]}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(i.h2,{id:"classi-responsive",children:"Classi responsive"}),`
`,e.jsx(i.p,{children:"La griglia di Bootstrap include cinque livelli di classi predefinite per la creazione di layout responsive complessi. Personalizza le dimensioni delle tue colonne su dispositivi piccoli, medi, grandi, extra large o extra extra large a tuo piacimento."}),`
`,e.jsx(i.h3,{id:"tutti-i-breakpoint",children:"Tutti i breakpoint"}),`
`,e.jsxs(i.p,{children:["Per griglie con layout identico dal più piccolo dei dispositivi al più grande, usa le classi ",e.jsx(i.code,{children:".col"})," e ",e.jsx(i.code,{children:".col-*"}),". Specifica una classe numerata quando hai bisogno di una colonna particolarmente grande; altrimenti sentiti libero di attenerti alla classe ",e.jsx(i.code,{children:".col"}),"."]}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(i.h3,{id:"raccolti-in-orizzontale",children:"Raccolti in orizzontale"}),`
`,e.jsxs(i.p,{children:["Utilizzando un singolo set di classi ",e.jsx(i.code,{children:".col-sm-*"}),", puoi creare un layout di base distribuito in verticale su dispositivi ",e.jsx(i.code,{children:"extra-small"})," che diventa orizzontale su dispositivi ",e.jsx(i.code,{children:"small"}),"."]}),`
`,e.jsx(n,{of:g}),`
`,e.jsx(i.h3,{id:"mischiare-e-abbinare",children:"Mischiare e abbinare"}),`
`,e.jsx(i.p,{children:"Non vuoi che le tue colonne si dispongano verticalmente su alcuni breakpoints? Puoi utilizzare una combinazione di classi diverse per ogni riga secondo necessità. Guarda l'esempio di seguito per farti un'idea di come funziona."}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(i.h3,{id:"righe-di-colonne",children:"Righe di colonne"}),`
`,e.jsxs(i.p,{children:["Usa le classi reattive ",e.jsx(i.code,{children:".row-cols-*"})," per impostare rapidamente il numero di colonne del tuo layout. Mentre le normali classi ",e.jsx(i.code,{children:".col-"})," * si applicano alle singole colonne (ad es. ",e.jsx(i.code,{children:".col-md-4"}),'), le classi delle "righe di colonne" sono impostate sul genitore ',e.jsx(i.code,{children:".row"})," come scorciatoia."]}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(n,{of:z}),`
`,e.jsx(n,{of:f}),`
`,e.jsx(n,{of:b}),`
`,e.jsx(n,{of:v}),`
`,e.jsx(i.h2,{id:"allineamento",children:"Allineamento"}),`
`,e.jsxs(i.p,{children:["Usa le ",e.jsx(i.a,{href:"/docs/organizzare-gli-spazi-flex--documentazione",children:"utilità d'allineamento"})," di Flexbox per allineare orizzontalmente e verticalmente le colonne."]}),`
`,e.jsx(i.h3,{id:"allineamento-verticale",children:"Allineamento verticale"}),`
`,e.jsx(n,{of:C}),`
`,e.jsx(n,{of:w}),`
`,e.jsx(i.h3,{id:"allineamento-orizzontale",children:"Allineamento orizzontale"}),`
`,e.jsx(n,{of:S}),`
`,e.jsx(i.h3,{id:"senza-gutter",children:"Senza gutter"}),`
`,e.jsxs(i.p,{children:["I ",e.jsx(i.em,{children:"gutter"})," (margini) tra le colonne delle griglia predefinite di Bootstrap possono essere rimossi con ",e.jsx(i.code,{children:".g-0"}),`.
Questo rimuove i margini negativi `,e.jsx(i.code,{children:"margin"})," dalla classe ",e.jsx(i.code,{children:".row"})," e il ",e.jsx(i.code,{children:"padding"})," orizzontale da tutte le colonne figlie dirette."]}),`
`,e.jsxs(i.p,{children:["Di seguito il codice sorgente per la creazione di questi stili. Tieni presente che l'override delle colonne vale solo per le prime colonne figlie, agganciate tramite il ",e.jsx(i.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors",rel:"nofollow",children:"selettore di attributi"}),`.
Mentre questo genera un selettore più specifico, il padding della colonna può essere ulteriormente personalizzata con le `,e.jsx(i.a,{href:"/docs/organizzare-gli-spazi-spaziatura--documentazione",children:"utilità di spaziatura"}),"."]}),`
`,e.jsxs(i.blockquote,{children:[`
`,e.jsx(i.p,{children:e.jsx(i.strong,{children:"Nota"})}),`
`,e.jsxs(i.p,{children:[e.jsx(i.strong,{children:"Hai bisogno di un design edge-to-edge?"})," Elimina l'elemento genitore ",e.jsx(i.code,{children:".container"})," o ",e.jsx(i.code,{children:".container-fluid"}),"."]}),`
`]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-scss",children:`.g-0 {
  margin-right: 0;
  margin-left: 0;

  > .col,
  > [class*='col-'] {
    padding-right: 0;
    padding-left: 0;
  }
}
`})}),`
`,e.jsx(i.p,{children:"In pratica, ecco come appare. Nota che puoi continuare ad usarlo con tutte le altre classi di griglia predefinite (incluse le larghezze delle colonne, i livelli responsive, i riordini e altro)."}),`
`,e.jsx(n,{of:L}),`
`,e.jsx(i.h3,{id:"gutter-variabile",children:"Gutter variabile"}),`
`,e.jsx(i.p,{children:"Bootstrap Italia rende disponibili gutter variabili a seconda delle dimensioni del viewport, secondo le indicazioni riportate di seguito:"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-scss",children:`$grid-gutter-widths: (
  sm: 12px,
  md: 20px,
  lg: 20px,
  xl: 28px,
  xxl: 28px,
) !default;
`})}),`
`,e.jsxs(i.p,{children:["Si consiglia di usare sempre questa tipologia di spaziature, in quanto ottimizzano la leggibilità e organizzazione dei contenuti a seconda delle dimensioni del dispositivo. Per attivare i gutter variabili, è sufficiente affiancare alla classe ",e.jsx(i.code,{children:".row"}),", la classe ",e.jsx(i.code,{children:".variable-gutters"}),"."]}),`
`,e.jsx(i.p,{children:"In questo modo, secondo la variabile Sass visibile sopra, le spaziature saranno così implementate:"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Opzione"}),e.jsx("th",{children:"Extra small <576px"}),e.jsx("th",{children:"Small >=576px"}),e.jsx("th",{children:"Medium >=768px"}),e.jsx("th",{children:"Large >=992px"}),e.jsx("th",{children:"Extra large >=1200px"}),e.jsx("th",{children:"Extra Extra large >=1400px"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:"Larghezza del gutter"}),e.jsx("td",{children:e.jsx("code",{children:"12px"})}),e.jsx("td",{children:e.jsx("code",{children:"12px"})}),e.jsx("td",{children:e.jsx("code",{children:"20px"})}),e.jsx("td",{children:e.jsx("code",{children:"24px"})}),e.jsx("td",{children:e.jsx("code",{children:"24px"})}),e.jsx("td",{children:e.jsx("code",{children:"28px"})})]})})]}),`
`,e.jsx(n,{of:k}),`
`,e.jsx(i.h3,{id:"colonna-a-capo",children:"Colonna a capo"}),`
`,e.jsx(i.p,{children:"Se in una singola riga vengono inserite più di 12 colonne, ogni singola colonna o gruppo di colonne extra andrà a capo su una nuova linea."}),`
`,e.jsx(n,{of:q}),`
`,e.jsx(i.h3,{id:"interruzioni-di-colonna",children:"Interruzioni di colonna"}),`
`,e.jsxs(i.p,{children:["Dividere le colonne su una nuova riga in flexbox richiede un piccolo trucco: aggiungi un elemento con ",e.jsx(i.code,{children:"width: 100%"})," ovunque tu voglia fare andare a capo le tue colonne in una nuova riga. Di solito questo layout viene realizzato con ",e.jsx(i.code,{children:".row"})," multiple, ma non sempre è possibile implementarlo."]}),`
`,e.jsx(n,{of:R}),`
`,e.jsxs(i.p,{children:["Puoi anche applicare questa interruzione a specifici breakpoint con le ",e.jsx(i.a,{href:"/docs/organizzare-gli-spazi-display--documentazione",children:"utilità per la visualizzazione responsive"}),"."]}),`
`,e.jsx(n,{of:A}),`
`,e.jsx(i.h2,{id:"riordinamento",children:"Riordinamento"}),`
`,e.jsx(i.h3,{id:"classi-order",children:"Classi order"}),`
`,e.jsxs(i.p,{children:["Usa le classi ",e.jsx(i.code,{children:".order-"})," per controllare l' ",e.jsx(i.strong,{children:"ordine di visualizzazione"})," del tuo contenuto. Queste classi sono responsive, così puoi impostare ",e.jsx(i.code,{children:"order"})," tramite breakpoint (e.g., ",e.jsx(i.code,{children:".order-1.order-md-2"}),"). Include il supporto per numeri da ",e.jsx(i.code,{children:"1"})," a ",e.jsx(i.code,{children:"5"}),"."]}),`
`,e.jsx(n,{of:I}),`
`,e.jsxs(i.p,{children:["Esistono anche delle classi responsive ",e.jsx(i.code,{children:".order-first"})," e ",e.jsx(i.code,{children:".order-last"})," che cambiano velocemente l'ordine di un elemento applicando ",e.jsx(i.code,{children:"order: -1"})," o ",e.jsx(i.code,{children:"order: 6"}),". Queste classi possono essere utilizzate insieme con le classi numerate ",e.jsx(i.code,{children:".order-*"})," se necessario."]}),`
`,e.jsx(n,{of:E}),`
`,e.jsx(i.h3,{id:"colonne-di-compensazione",children:"Colonne di compensazione"}),`
`,e.jsxs(i.p,{children:["È possibile sfalsare le colonne della griglia in due modi: con le classi responsive della griglia di Bootstrap ",e.jsx(i.code,{children:".offset-"})," e con le ",e.jsx(i.a,{href:"/docs/organizzare-gli-spazi-spaziatura--documentazione",children:"utilità per le spaziature"})," di Bootstrap. Le classi di offset della griglia sono dimensionate in modo che corrispondano alle colonne, mentre i margini sono più utili per i layout rapidi in cui la larghezza dell'offset è variabile."]}),`
`,e.jsx(i.h4,{id:"classi-offset",children:"Classi offset"}),`
`,e.jsxs(i.p,{children:["Sposta le colonne sulla destra usando le classi ",e.jsx(i.code,{children:".offset-md-*"}),". Queste class aumentano il margine sinistro della colonna con ",e.jsx(i.code,{children:"*"}),". Ad esempio, ",e.jsx(i.code,{children:".offset-md-4"})," sposta ",e.jsx(i.code,{children:".col-md-4"})," di quattro colonne."]}),`
`,e.jsx(n,{of:M}),`
`,e.jsx(i.p,{children:"Oltre alle interruzioni di colonna ai breakpoint, potrebbe essere necessario reimpostare gli offset."}),`
`,e.jsx(n,{of:y}),`
`,e.jsx(i.h4,{id:"utilità-del-margin",children:"Utilità del margin"}),`
`,e.jsxs(i.p,{children:["Dato che Bootstrap utilizza flexbox per generare le griglie, puoi usare le utilità del margin come ",e.jsx(i.code,{children:".me-auto"})," per forzare lo spazio tra colonne adiacenti."]}),`
`,e.jsx(n,{of:B}),`
`,e.jsx(i.h2,{id:"annidamento",children:"Annidamento"}),`
`,e.jsxs(i.p,{children:["Per annidare il contenuto con la griglia predefinita, aggiungi una nuova ",e.jsx(i.code,{children:".row"})," e un set di colonne ",e.jsx(i.code,{children:".col-sm-*"})," all'interno di una esistente ",e.jsx(i.code,{children:".col-sm-*"}),". Le righe annidate dovrebbero includere un set di colonne che ne aggiunge fino a 12 o meno (non è necessario usare tutte e 12 le colonne disponibili)."]}),`
`,e.jsx(n,{of:D})]})}function G(o={}){const{wrapper:i}={...s(),...o.components};return i?e.jsx(i,{...o,children:e.jsx(l,{...o})}):l(o)}export{G as default};

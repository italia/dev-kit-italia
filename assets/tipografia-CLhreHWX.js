import{j as e,M as l,C as n}from"./blocks-AWYFoa02.js";import{useMDXComponents as s}from"./index-DFJevQmi.js";import{S as t,T as r,L as d,R as c,I as h,a as p,b as x,P as u,c as j,M as m,d as g,A as f,C as z,e as b,f as v,g as k,h as C,i as I,j as L,k as P,l as M,m as S}from"./tipografia.stories-F1q3yc9I.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-BAOCzTeu.js";function a(o){const i={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:t}),`
`,e.jsx(i.h1,{id:"tipografia",children:"Tipografia"}),`
`,e.jsx(i.p,{children:"Documentazione sulla gestione della tipografia, come intestazioni, paragrafi, citazioni, elenchi e altro."}),`
`,e.jsxs(i.p,{children:[`Bootstrap imposta alcune proprietà di base per la tipografia e gli stili dei
link. Quando è necessario un maggiore controllo, fornisce delle
`,e.jsx(i.a,{href:"/docs/organizzare-i-contenuti-testo--documentazione",children:"classi di utilità testuali"}),"."]}),`
`,e.jsxs(i.p,{children:["Le scelte tipografiche di Bootstrap Italia seguono le indicazioni del ",e.jsx(i.a,{href:"https://designers.italia.it/design-system/fondamenti/tipografia/",rel:"nofollow",children:"Design system .italia"}),". Per approfondimenti su gerarchia visiva, spaziature e uso dei caratteri, consulta la documentazione ufficiale."]}),`
`,e.jsx(i.h2,{id:"famiglie-di-caratteri",children:"Famiglie di caratteri"}),`
`,e.jsx(i.p,{children:"Bootstrap Italia include tre famiglie di caratteri tipografici per garantire leggibilità e coerenza visiva:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Titillium"})," (Web o Sans Pro): font principale sans-serif per interfacce e testi brevi"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Lora"}),": font serif per contenuti editoriali e testi lunghi"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Roboto Mono"}),": font monospace per codice, dati tabulari e numeri"]}),`
`]}),`
`,e.jsxs(i.p,{children:["Per informazioni su come caricare i font (via CSS o bundle) e scegliere tra le varianti Titillium Web e Titillium Sans Pro, consulta la ",e.jsx(i.a,{href:"/docs/font--documentazione",children:e.jsx(i.strong,{children:"pagina dedicata Font"})}),"."]}),`
`,e.jsx(i.h3,{id:"titillium-font-principale",children:"Titillium (font principale)"}),`
`,e.jsx(i.p,{children:"Bootstrap Italia supporta due varianti del carattere Titillium:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Titillium Web"})," (default): versione originale e carattere di riferimento del Design system .italia"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Titillium Sans Pro"}),": evoluzione con supporto linguistico esteso e simboli matematici."]}),`
`]}),`
`,e.jsx(i.p,{children:"Nella documentazione puoi esplorare la resa delle due versioni usando il selettore font nella barra laterale."}),`
`,e.jsxs(i.p,{children:["Il font Titillium è utilizzato di default, per cui di norma non è necessario applicarlo esplicitamente. In caso si renda necessario è possibile utilizzare la classe ",e.jsx(i.code,{children:".font-sans-serif"}),"."]}),`
`,e.jsx(n,{of:r}),`
`,e.jsx(i.h3,{id:"lora-font-serif",children:"Lora (font serif)"}),`
`,e.jsxs(i.p,{children:["Lora è un carattere serif progettato espressamente per la lettura su display, particolarmente adatto per testi lunghi e contenuti editoriali. Può essere utilizzato applicando la classe ",e.jsx(i.code,{children:".font-serif"}),"."]}),`
`,e.jsx(n,{of:d}),`
`,e.jsx(i.h3,{id:"roboto-mono-font-monospace",children:"Roboto Mono (font monospace)"}),`
`,e.jsxs(i.p,{children:["Roboto Mono è una famiglia di caratteri monospace adatta alla rappresentazione di codice, numeri, calcoli matematici e dati tabulari. Per utilizzarlo, è sufficiente usare la classe ",e.jsx(i.code,{children:".font-monospace"}),"."]}),`
`,e.jsx(n,{of:c}),`
`,e.jsx(i.h2,{id:"tipografia-responsive",children:"Tipografia responsive"}),`
`,e.jsxs(i.p,{children:[`Bootstrap Italia ridimensiona la dimensione di intestazioni e testo modificando
le proprietà `,e.jsx(i.code,{children:"font-size"})," e ",e.jsx(i.code,{children:"line-height"}),` dell'elemento tramite una media query che imposta dimensioni
lievemente maggiori per schermi con dimensioni maggiori di `,e.jsx(i.em,{children:"576px"}),`. Questa
impostazione, unita all'utilizzo di dimensioni in `,e.jsx(i.code,{children:"rem"}),` o in semplici valori
numerici all'interno del CSS, fa sì che testo e altre proprietà occupino più
spazio quando lo schermo lo permette.`]}),`
`,e.jsx(i.h2,{id:"intestazioni",children:"Intestazioni"}),`
`,e.jsxs(i.p,{children:["Tutte le intestazioni HTML, da ",e.jsx(i.code,{children:"<h1>"})," fino a ",e.jsx(i.code,{children:"<h6>"}),`, sono disponibili, anche se
è buona norma non utilizzare più di 4 livelli di intestazione.`]}),`
`,e.jsxs(i.p,{children:["L'interlinea è impostata con il rapporto di  ",e.jsx(i.code,{children:"1.2"})," per tutte le intestazioni."]}),`
`,e.jsx(n,{of:h}),`
`,e.jsxs(i.p,{children:[`Nel caso in cui si voglia presentare il testo nello stesso stile delle
intestazioni, ma non sia possibile utilizzare l'elemento HTML appropriato,
sono disponibili anche classi di tipo `,e.jsx(i.code,{children:".h1"}),", ",e.jsx(i.code,{children:".h2"}),", ",e.jsx(i.code,{children:".h3"}),", ",e.jsx(i.code,{children:".h4"}),", ",e.jsx(i.code,{children:".h5"}),", ",e.jsx(i.code,{children:".h6"}),"."]}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(i.p,{children:"Queste le dimensioni nel dettaglio (dimensione del testo, peso del font e interlinea):"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Intestazione"}),e.jsx("th",{children:"Mobile"}),e.jsx("th",{children:"Schermo > 576px"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"h1"})}),e.jsx("td",{children:"40px (2.5rem); font-weight: 700; line-height: 1.2"}),e.jsx("td",{children:"48px (3rem); font-weight: 700; line-height: 1.2"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"h2"})}),e.jsx("td",{children:"32px (2rem); font-weight: 700; line-height: 1.2"}),e.jsx("td",{children:"40px (2.5rem); font-weight: 700; line-height: 1.2"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"h3"})}),e.jsx("td",{children:"28px (1.75rem); font-weight: 700; line-height: 1.2"}),e.jsx("td",{children:"32px (2rem); font-weight: 700; line-height: 1.2"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"h4"})}),e.jsx("td",{children:"24px (1.5rem); font-weight: 600; line-height: 1.2"}),e.jsx("td",{children:"28px (1.75rem); font-weight: 600; line-height: 1.2"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"h5"})}),e.jsx("td",{children:"20px (1.25rem); font-weight: 600; line-height: 1.2"}),e.jsx("td",{children:"24px (1.5rem); font-weight: 600; line-height: 1.2"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"h6"})}),e.jsx("td",{children:"16px (1rem); font-weight: 600; line-height: 1.2"}),e.jsx("td",{children:"18px (1.125rem); font-weight: 600; line-height: 1.2"})]})]})]}),`
`,e.jsx(i.h3,{id:"intestazione-in-evidenza",children:"Intestazione in evidenza"}),`
`,e.jsxs(i.p,{children:[`Gli elementi di intestazione tradizionali sono progettati per funzionare al
meglio nel contesto della pagina. Nel caso sia necessario mettere in ulteriore
evidenza un'intestazione di tipo `,e.jsx(i.code,{children:"<h1>"}),`, si può prendere in considerazione l'uso
della classe `,e.jsx(i.code,{children:".display-1"}),`, che restituirà una dimensione sensibilmente più
grande.`]}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(i.h2,{id:"paragrafi",children:"Paragrafi"}),`
`,e.jsxs(i.p,{children:[`Il semplice paragrafo prevede una dimensione del testo di
`,e.jsx(i.code,{children:"16px/1rem"})," su dispositivi mobili e ",e.jsx(i.code,{children:"18px/1.125rem"}),` su schermi con dimensioni
maggiori di 576px.`]}),`
`,e.jsxs(i.p,{children:["L'interlinea è impostata con il rapporto di  ",e.jsx(i.code,{children:"1.5"}),"."]}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(i.p,{children:`Per una lettura più confortevole, è buona norma mantenere la lunghezza di un paragrafo
compresa tra 45 e 74 caratteri. Per testo su colonne multiple, si considera una
lunghezza compresa tra 40 e 50 caratteri. Per i testi a margine la lunghezza
minima è di 12-15 caratteri.`}),`
`,e.jsx(i.h3,{id:"paragrafi-in-evidenza",children:"Paragrafi in evidenza"}),`
`,e.jsxs(i.p,{children:["Per mettere in risalto un paragrafo è sufficiente aggiungere la classe ",e.jsx(i.code,{children:".lead"}),"."]}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(i.h3,{id:"personalizzazione-dei-paragrafi",children:"Personalizzazione dei paragrafi"}),`
`,e.jsx(i.p,{children:`È possibile stilizzare correttamente lo stile anche nel caso vengano utilizzati
semplicemente gli elementi HTML5 per il trattamento di testo.`}),`
`,e.jsx(n,{of:m}),`
`,e.jsxs(i.p,{children:["Le classi ",e.jsx(i.code,{children:".mark"})," e ",e.jsx(i.code,{children:".small"}),` sono disponibili anche per applicare gli stessi
stili di `,e.jsx(i.code,{children:"<mark>"})," e ",e.jsx(i.code,{children:"<small>"}),` evitando eventuali implicazioni semantiche
indesiderate che i tag porterebbero con sé.`]}),`
`,e.jsxs(i.p,{children:[`È possibile sfruttare le classi di Bootstrap anche per modificare allineamento,
stile, peso e colore del testo. Per questo, si può fare riferimento alla
documentazione delle `,e.jsx(i.a,{href:"/docs/organizzare-i-contenuti-testo--documentazione",children:"utilità di testo"}),`
e `,e.jsx(i.a,{href:"https://bootstrap-italia-git-3x-dip-trasformazione-digitale.vercel.app/docs/utilities/colori/",rel:"nofollow",children:"utilità di colore"}),"."]}),`
`,e.jsx(i.h3,{id:"link",children:"Link"}),`
`,e.jsx(i.h4,{id:"accessibilità",children:"Accessibilità"}),`
`,e.jsx(i.p,{children:"È fondamentale evidenziare i link presenti in un paragrafo in modo adeguato, utilizzando la sottolineatura oltre al colore per indicare la presenza di un collegamento ipertestuale."}),`
`,e.jsxs(i.p,{children:["Nel rispetto delle regole di accessibilità vigenti, Bootstrap Italia mantiene la sottolineatura ai link di tipo ",e.jsx(i.code,{children:"<a>"}),". Nel caso in cui si voglia aggiungere un'icona a fianco del link, questa può essere inserita direttamente all'interno del tag ",e.jsx(i.code,{children:"<a>"}),", come mostrato nell'esempio seguente."]}),`
`,e.jsx(n,{of:g}),`
`,e.jsxs(i.p,{children:["Nel caso di link già in evidenza (menu di navigazione, dropdown menu, liste di link, ecc.), è possibile rimuovere la sottolineatura utilizzando la classe ",e.jsx(i.code,{children:".text-decoration-none"}),". Vai agli esempi di ",e.jsx(i.a,{href:"https://bootstrap-italia-git-3x-dip-trasformazione-digitale.vercel.app/docs/organizzare-i-contenuti/liste/#liste-per-menu-di-navigazione",rel:"nofollow",children:"link senza sottolineatura"}),"."]}),`
`,e.jsx(i.h2,{id:"abbreviazioni",children:"Abbreviazioni"}),`
`,e.jsxs(i.p,{children:["Implementazione stilizzata dell'elemento HTML ",e.jsx(i.code,{children:"<abbr>"}),` per abbreviazioni e
acronimi per mostrare la versione espansa sull' hover. Le abbreviazioni hanno
una sottolineatura predefinita e ottengono un cursore di aiuto per fornire un
contesto aggiuntivo al passaggio del mouse e agli utenti delle tecnologie
assistive.`]}),`
`,e.jsxs(i.p,{children:["Aggiungi ",e.jsx(i.code,{children:".initialism"}),` a un'abbreviazione per una dimensione del font
leggermente più piccola.`]}),`
`,e.jsx(n,{of:f}),`
`,e.jsx(i.h2,{id:"citazioni",children:"Citazioni"}),`
`,e.jsxs(i.p,{children:[`Per citare blocchi di contenuti da un'altra fonte all'interno del documento.
Racchiudi ogni HTML all'interno
di un `,e.jsx(i.code,{children:'<blockquote class="blockquote">'})," come la citazione."]}),`
`,e.jsx(n,{of:z}),`
`,e.jsx(i.h3,{id:"citare-una-fonte",children:"Citare una fonte"}),`
`,e.jsxs(i.p,{children:["Aggiungi un ",e.jsx(i.code,{children:'<footer class="blockquote-footer">'}),` per identificare la fonte.
Includi il nome della fonte di origine in `,e.jsx(i.code,{children:"<cite>"}),"."]}),`
`,e.jsx(n,{of:b}),`
`,e.jsx(i.h3,{id:"allineamento",children:"Allineamento"}),`
`,e.jsx(i.p,{children:`Utilizza le utilità di testo necessarie per modificare l'allineamento del tuo
blockquote.`}),`
`,e.jsx(n,{of:v}),`
`,e.jsx(n,{of:k}),`
`,e.jsx(i.h3,{id:"semplice",children:"Semplice"}),`
`,e.jsxs(i.p,{children:["Aggiungendo la classe ",e.jsx(i.code,{children:".blockquote-simple"})," si ottiene una versione base del Blockquote."]}),`
`,e.jsx(n,{of:C}),`
`,e.jsx(i.h3,{id:"card",children:"Card"}),`
`,e.jsxs(i.p,{children:["Aggiungendo la classe ",e.jsx(i.code,{children:".blockquote-card"})," si ottiene un Blockquote di tipo card."]}),`
`,e.jsx(n,{of:I}),`
`,e.jsxs(i.p,{children:["Aggiungendo un'ulteriore classe ",e.jsx(i.code,{children:".dark"})," si ottiene un Blockquote card scuro."]}),`
`,e.jsx(n,{of:L}),`
`,e.jsx(i.h2,{id:"liste",children:"Liste"}),`
`,e.jsxs(i.p,{children:["Rimuovi il predefinito ",e.jsx(i.code,{children:"list-style"}),` e il margine sinistro sugli elementi
elenco (solo per i figli diretti). `,e.jsx(i.strong,{children:`Questo si applica solo agli elementi della
lista che sono figli diretti`}),`, il che significa che dovrai aggiungere la classe
per tutti gli elenchi annidati.`]}),`
`,e.jsx(n,{of:P}),`
`,e.jsx(i.h3,{id:"inline",children:"Inline"}),`
`,e.jsxs(i.p,{children:["Rimuovi i punti elenco di una lista e applica un leggero ",e.jsx(i.code,{children:"margin"}),` con una
combinazione di due classi, `,e.jsx(i.code,{children:".list-inline"})," e ",e.jsx(i.code,{children:".list-inline-item"}),"."]}),`
`,e.jsx(n,{of:M}),`
`,e.jsx(i.h3,{id:"allineamento-lista-descrizione",children:"Allineamento lista descrizione"}),`
`,e.jsxs(i.p,{children:[`Allineare i termini e le descrizioni orizzontalmente utilizzando le classi
predefinite del nostro sistema di griglia. Per termini più lunghi, puoi
facoltativamente aggiungere la classe `,e.jsx(i.code,{children:".text-truncate"}),` per troncare il testo
con un `,e.jsx(i.code,{children:"ellipsis"}),"."]}),`
`,e.jsx(n,{of:S}),`
`,e.jsx(i.h2,{id:"breaking-change",children:"Breaking change"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Reimpostata la dimensione del carattere di base su ",e.jsx(i.code,{children:"16px"})," su ",e.jsx(i.code,{children:"body"}),"."]}),`
`,e.jsxs(i.li,{children:["Sostituite le unità ",e.jsx(i.code,{children:"em"})," con ",e.jsx(i.code,{children:"rem"}),"."]}),`
`,e.jsxs(i.li,{children:["Aggiornati i valori ",e.jsx(i.code,{children:"font-size"})," per corrispondere al nuovo calcolo dell'unità ",e.jsx(i.code,{children:"rem"}),"."]}),`
`,e.jsxs(i.li,{children:["Rimosse le variabili obsolete e inutilizzate da ",e.jsx(i.code,{children:"_variables.scss"}),"."]}),`
`,e.jsxs(i.li,{children:["Variabili specifiche dei componenti aggiornate e allineate a ",e.jsx(i.code,{children:"UI Kit Italia v3"}),"."]}),`
`]})]})}function R(o={}){const{wrapper:i}={...s(),...o.components};return i?e.jsx(i,{...o,children:e.jsx(a,{...o})}):a(o)}export{R as default};

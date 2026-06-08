import{j as i,M as l,C as n}from"./blocks-BmJ51On6.js";import{useMDXComponents as t}from"./index-CEGOQIeq.js";import{S as s,T as r,L as c,R as d,I as h,a as p,b as u,P as m,c as x,M as g,d as j,A as f,C as z,e as b,f as v,g as k,h as C,i as I,j as L,k as P,l as S,m as w}from"./tipografia.stories-CUPWVOcJ.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-Dq0Es6_d.js";function o(a){const e={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...t(),...a.components};return i.jsxs(i.Fragment,{children:[i.jsx(l,{of:s}),`
`,i.jsx(e.h1,{id:"tipografia",children:"Tipografia"}),`
`,i.jsx(e.p,{children:"Documentazione sulla gestione della tipografia, come intestazioni, paragrafi, citazioni, elenchi e altro."}),`
`,i.jsxs(e.p,{children:[`Bootstrap imposta alcune proprietà di base per la tipografia e gli stili dei
link. Quando è necessario un maggiore controllo, fornisce delle
`,i.jsx(e.a,{href:"/docs/organizzare-i-contenuti-testo--documentazione",children:"classi di utilità testuali"}),"."]}),`
`,i.jsxs(e.p,{children:["Le scelte tipografiche di Bootstrap Italia seguono le indicazioni del ",i.jsx(e.a,{href:"https://designers.italia.it/design-system/fondamenti/tipografia/",rel:"nofollow",children:"Design system .italia"}),". Per approfondimenti su gerarchia visiva, spaziature e uso dei caratteri, consulta la documentazione ufficiale."]}),`
`,i.jsx(e.h2,{id:"famiglie-di-caratteri",children:"Famiglie di caratteri"}),`
`,i.jsx(e.p,{children:"Bootstrap Italia include tre famiglie di caratteri tipografici per garantire leggibilità e coerenza visiva:"}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:"Titillium"})," (Web o Sans Pro): font principale sans-serif per interfacce e testi brevi"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:"Lora"}),": font serif per contenuti editoriali e testi lunghi"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:"Roboto Mono"}),": font monospace per codice, dati tabulari e numeri"]}),`
`]}),`
`,i.jsxs(e.p,{children:["Per informazioni su come caricare i font (via JavaScript, CSS o bundle) e scegliere tra le varianti Titillium Web e Titillium Sans Pro, consulta la ",i.jsx(e.a,{href:"https://bootstrap-italia-git-3x-dip-trasformazione-digitale.vercel.app/docs/come-iniziare/font/",rel:"nofollow",children:i.jsx(e.strong,{children:"pagina dedicata Font"})}),"."]}),`
`,i.jsx(e.h3,{id:"titillium-font-principale",children:"Titillium (font principale)"}),`
`,i.jsx(e.p,{children:"Bootstrap Italia supporta due varianti del carattere Titillium:"}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:"Titillium Web"})," (default): versione originale e carattere di riferimento del Design system .italia"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:"Titillium Sans Pro"}),": evoluzione con supporto linguistico esteso e simboli matematici."]}),`
`]}),`
`,i.jsx(e.p,{children:'Nella documentazione puoi esplorare la resa delle due versioni usando il selettore "Font principale" nella barra laterale.'}),`
`,i.jsxs(e.p,{children:["Il font Titillium è utilizzato di default, per cui di norma non è necessario applicarlo esplicitamente. In caso si renda necessario è possibile utilizzare la classe ",i.jsx(e.code,{children:".font-sans-serif"}),"."]}),`
`,i.jsx(n,{of:r}),`
`,i.jsx(e.h3,{id:"lora-font-serif",children:"Lora (font serif)"}),`
`,i.jsxs(e.p,{children:["Lora è un carattere serif progettato espressamente per la lettura su display, particolarmente adatto per testi lunghi e contenuti editoriali. Può essere utilizzato applicando la classe ",i.jsx(e.code,{children:".font-serif"}),"."]}),`
`,i.jsx(n,{of:c}),`
`,i.jsx(e.h3,{id:"roboto-mono-font-monospace",children:"Roboto Mono (font monospace)"}),`
`,i.jsxs(e.p,{children:["Roboto Mono è una famiglia di caratteri monospace adatta alla rappresentazione di codice, numeri, calcoli matematici e dati tabulari. Per utilizzarlo, è sufficiente usare la classe ",i.jsx(e.code,{children:".font-monospace"}),"."]}),`
`,i.jsx(n,{of:d}),`
`,i.jsx(e.h2,{id:"tipografia-responsive",children:"Tipografia responsive"}),`
`,i.jsxs(e.p,{children:[`Bootstrap Italia ridimensiona la dimensione di intestazioni e testo modificando
le proprietà `,i.jsx(e.code,{children:"font-size"})," e ",i.jsx(e.code,{children:"line-height"}),` dell'elemento tramite una media query che imposta dimensioni
lievemente maggiori per schermi con dimensioni maggiori di `,i.jsx(e.em,{children:"576px"}),`. Questa
impostazione, unita all'utilizzo di dimensioni in `,i.jsx(e.code,{children:"rem"}),` o in semplici valori
numerici all'interno del CSS, fa sì che testo e altre proprietà occupino più
spazio quando lo schermo lo permette.`]}),`
`,i.jsx(e.h2,{id:"intestazioni",children:"Intestazioni"}),`
`,i.jsxs(e.p,{children:["Tutte le intestazioni HTML, da ",i.jsx(e.code,{children:"<h1>"})," fino a ",i.jsx(e.code,{children:"<h6>"}),`, sono disponibili, anche se
è buona norma non utilizzare più di 4 livelli di intestazione.`]}),`
`,i.jsxs(e.p,{children:["L'interlinea è impostata con il rapporto di  ",i.jsx(e.code,{children:"1.2"})," per tutte le intestazioni."]}),`
`,i.jsx(n,{of:h}),`
`,i.jsxs(e.p,{children:[`Nel caso in cui si voglia presentare il testo nello stesso stile delle
intestazioni, ma non sia possibile utilizzare l'elemento HTML appropriato,
sono disponibili anche classi di tipo `,i.jsx(e.code,{children:".h1"}),", ",i.jsx(e.code,{children:".h2"}),", ",i.jsx(e.code,{children:".h3"}),", ",i.jsx(e.code,{children:".h4"}),", ",i.jsx(e.code,{children:".h5"}),", ",i.jsx(e.code,{children:".h6"}),"."]}),`
`,i.jsx(n,{of:p}),`
`,i.jsx(e.p,{children:"Queste le dimensioni nel dettaglio (dimensione del testo, peso del font e interlinea):"}),`
`,i.jsx(e.p,{children:`| Intestazione | Mobile | Schermo > 576px |
| --- | --- | --- |
| h1 | 40px (2.5rem); font-weight: 700; line-height: 1.2 | 48px (3rem); font-weight: 700; line-height: 1.2 |
| h2 | 32px (2rem); font-weight: 700; line-height: 1.2 | 40px (2.5rem); font-weight: 700; line-height: 1.2 |
| h3 | 28px (1.75rem); font-weight: 700; line-height: 1.2 | 32px (2rem); font-weight: 700; line-height: 1.2 |
| h4 | 24px (1.5rem); font-weight: 600; line-height: 1.2 | 28px (1.75rem); font-weight: 600; line-height: 1.2 |
| h5 | 20px (1.25rem); font-weight: 600; line-height: 1.2 | 24px (1.5rem); font-weight: 600; line-height: 1.2 |
| h6 | 16px (1rem); font-weight: 600; line-height: 1.2 | 18px (1.125rem); font-weight: 600; line-height: 1.2 |`}),`
`,i.jsx(e.h3,{id:"intestazione-in-evidenza",children:"Intestazione in evidenza"}),`
`,i.jsxs(e.p,{children:[`Gli elementi di intestazione tradizionali sono progettati per funzionare al
meglio nel contesto della pagina. Nel caso sia necessario mettere in ulteriore
evidenza un'intestazione di tipo `,i.jsx(e.code,{children:"<h1>"}),`, si può prendere in considerazione l'uso
della classe `,i.jsx(e.code,{children:".display-1"}),`, che restituirà una dimensione sensibilmente più
grande.`]}),`
`,i.jsx(n,{of:u}),`
`,i.jsx(e.h2,{id:"paragrafi",children:"Paragrafi"}),`
`,i.jsxs(e.p,{children:[`Il semplice paragrafo prevede una dimensione del testo di
`,i.jsx(e.code,{children:"16px/1rem"})," su dispositivi mobili e ",i.jsx(e.code,{children:"18px/1.125rem"}),` su schermi con dimensioni
maggiori di 576px.`]}),`
`,i.jsxs(e.p,{children:["L'interlinea è impostata con il rapporto di  ",i.jsx(e.code,{children:"1.5"}),"."]}),`
`,i.jsx(n,{of:m}),`
`,i.jsx(e.p,{children:`Per una lettura più confortevole, è buona norma mantenere la lunghezza di un paragrafo
compresa tra 45 e 74 caratteri. Per testo su colonne multiple, si considera una
lunghezza compresa tra 40 e 50 caratteri. Per i testi a margine la lunghezza
minima è di 12-15 caratteri.`}),`
`,i.jsx(e.h3,{id:"paragrafi-in-evidenza",children:"Paragrafi in evidenza"}),`
`,i.jsxs(e.p,{children:["Per mettere in risalto un paragrafo è sufficiente aggiungere la classe ",i.jsx(e.code,{children:".lead"}),"."]}),`
`,i.jsx(n,{of:x}),`
`,i.jsx(e.h3,{id:"personalizzazione-dei-paragrafi",children:"Personalizzazione dei paragrafi"}),`
`,i.jsx(e.p,{children:`È possibile stilizzare correttamente lo stile anche nel caso vengano utilizzati
semplicemente gli elementi HTML5 per il trattamento di testo.`}),`
`,i.jsx(n,{of:g}),`
`,i.jsxs(e.p,{children:["Le classi ",i.jsx(e.code,{children:".mark"})," e ",i.jsx(e.code,{children:".small"}),` sono disponibili anche per applicare gli stessi
stili di `,i.jsx(e.code,{children:"<mark>"})," e ",i.jsx(e.code,{children:"<small>"}),` evitando eventuali implicazioni semantiche
indesiderate che i tag porterebbero con sé.`]}),`
`,i.jsxs(e.p,{children:[`È possibile sfruttare le classi di Bootstrap anche per modificare allineamento,
stile, peso e colore del testo. Per questo, si può fare riferimento alla
documentazione delle `,i.jsx(e.a,{href:"/docs/organizzare-i-contenuti-testo--documentazione",children:"utilità di testo"}),`
e `,i.jsx(e.a,{href:"https://bootstrap-italia-git-3x-dip-trasformazione-digitale.vercel.app/docs/utilities/colori/",rel:"nofollow",children:"utilità di colore"}),"."]}),`
`,i.jsx(e.h3,{id:"link",children:"Link"}),`
`,i.jsx(e.h4,{id:"accessibilità",children:"Accessibilità"}),`
`,i.jsx(e.p,{children:"È fondamentale evidenziare i link presenti in un paragrafo in modo adeguato, utilizzando la sottolineatura oltre al colore per indicare la presenza di un collegamento ipertestuale."}),`
`,i.jsxs(e.p,{children:["Nel rispetto delle regole di accessibilità vigenti, Bootstrap Italia mantiene la sottolineatura ai link di tipo ",i.jsx(e.code,{children:"<a>"}),". Nel caso in cui si voglia aggiungere un'icona a fianco del link, questa può essere inserita direttamente all'interno del tag ",i.jsx(e.code,{children:"<a>"}),", come mostrato nell'esempio seguente."]}),`
`,i.jsx(n,{of:j}),`
`,i.jsxs(e.p,{children:["Nel caso di link già in evidenza (menu di navigazione, dropdown menu, liste di link, ecc.), è possibile rimuovere la sottolineatura utilizzando la classe ",i.jsx(e.code,{children:".text-decoration-none"}),". Vai agli esempi di ",i.jsx(e.a,{href:"https://bootstrap-italia-git-3x-dip-trasformazione-digitale.vercel.app/docs/organizzare-i-contenuti/liste/#liste-per-menu-di-navigazione",rel:"nofollow",children:"link senza sottolineatura"}),"."]}),`
`,i.jsx(e.h2,{id:"abbreviazioni",children:"Abbreviazioni"}),`
`,i.jsxs(e.p,{children:["Implementazione stilizzata dell'elemento HTML ",i.jsx(e.code,{children:"<abbr>"}),` per abbreviazioni e
acronimi per mostrare la versione espansa sull' hover. Le abbreviazioni hanno
una sottolineatura predefinita e ottengono un cursore di aiuto per fornire un
contesto aggiuntivo al passaggio del mouse e agli utenti delle tecnologie
assistive.`]}),`
`,i.jsxs(e.p,{children:["Aggiungi ",i.jsx(e.code,{children:".initialism"}),` a un'abbreviazione per una dimensione del font
leggermente più piccola.`]}),`
`,i.jsx(n,{of:f}),`
`,i.jsx(e.h2,{id:"citazioni",children:"Citazioni"}),`
`,i.jsxs(e.p,{children:[`Per citare blocchi di contenuti da un'altra fonte all'interno del documento.
Racchiudi ogni HTML all'interno
di un `,i.jsx(e.code,{children:'<blockquote class="blockquote">'})," come la citazione."]}),`
`,i.jsx(n,{of:z}),`
`,i.jsx(e.h3,{id:"citare-una-fonte",children:"Citare una fonte"}),`
`,i.jsxs(e.p,{children:["Aggiungi un ",i.jsx(e.code,{children:'<footer class="blockquote-footer">'}),` per identificare la fonte.
Includi il nome della fonte di origine in `,i.jsx(e.code,{children:"<cite>"}),"."]}),`
`,i.jsx(n,{of:b}),`
`,i.jsx(e.h3,{id:"allineamento",children:"Allineamento"}),`
`,i.jsx(e.p,{children:`Utilizza le utilità di testo necessarie per modificare l'allineamento del tuo
blockquote.`}),`
`,i.jsx(n,{of:v}),`
`,i.jsx(n,{of:k}),`
`,i.jsx(e.h3,{id:"semplice",children:"Semplice"}),`
`,i.jsxs(e.p,{children:["Aggiungendo la classe ",i.jsx(e.code,{children:".blockquote-simple"})," si ottiene una versione base del Blockquote."]}),`
`,i.jsx(n,{of:C}),`
`,i.jsx(e.h3,{id:"card",children:"Card"}),`
`,i.jsxs(e.p,{children:["Aggiungendo la classe ",i.jsx(e.code,{children:".blockquote-card"})," si ottiene un Blockquote di tipo card."]}),`
`,i.jsx(n,{of:I}),`
`,i.jsxs(e.p,{children:["Aggiungendo un'ulteriore classe ",i.jsx(e.code,{children:".dark"})," si ottiene un Blockquote card scuro."]}),`
`,i.jsx(n,{of:L}),`
`,i.jsx(e.h2,{id:"liste",children:"Liste"}),`
`,i.jsxs(e.p,{children:["Rimuovi il predefinito ",i.jsx(e.code,{children:"list-style"}),` e il margine sinistro sugli elementi
elenco (solo per i figli diretti). `,i.jsx(e.strong,{children:`Questo si applica solo agli elementi della
lista che sono figli diretti`}),`, il che significa che dovrai aggiungere la classe
per tutti gli elenchi annidati.`]}),`
`,i.jsx(n,{of:P}),`
`,i.jsx(e.h3,{id:"inline",children:"Inline"}),`
`,i.jsxs(e.p,{children:["Rimuovi i punti elenco di una lista e applica un leggero ",i.jsx(e.code,{children:"margin"}),` con una
combinazione di due classi, `,i.jsx(e.code,{children:".list-inline"})," e ",i.jsx(e.code,{children:".list-inline-item"}),"."]}),`
`,i.jsx(n,{of:S}),`
`,i.jsx(e.h3,{id:"allineamento-lista-descrizione",children:"Allineamento lista descrizione"}),`
`,i.jsxs(e.p,{children:[`Allineare i termini e le descrizioni orizzontalmente utilizzando le classi
predefinite del nostro sistema di griglia. Per termini più lunghi, puoi
facoltativamente aggiungere la classe `,i.jsx(e.code,{children:".text-truncate"}),` per troncare il testo
con un `,i.jsx(e.code,{children:"ellipsis"}),"."]}),`
`,i.jsx(n,{of:w}),`
`,i.jsx(e.h2,{id:"breaking-change",children:"Breaking change"}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsxs(e.li,{children:["Reimpostata la dimensione del carattere di base su ",i.jsx(e.code,{children:"16px"})," su ",i.jsx(e.code,{children:"body"}),"."]}),`
`,i.jsxs(e.li,{children:["Sostituite le unità ",i.jsx(e.code,{children:"em"})," con ",i.jsx(e.code,{children:"rem"}),"."]}),`
`,i.jsxs(e.li,{children:["Aggiornati i valori ",i.jsx(e.code,{children:"font-size"})," per corrispondere al nuovo calcolo dell'unità ",i.jsx(e.code,{children:"rem"}),"."]}),`
`,i.jsxs(e.li,{children:["Rimosse le variabili obsolete e inutilizzate da ",i.jsx(e.code,{children:"_variables.scss"}),"."]}),`
`,i.jsxs(e.li,{children:["Variabili specifiche dei componenti aggiornate e allineate a ",i.jsx(e.code,{children:"UI Kit Italia v3"}),"."]}),`
`]})]})}function R(a={}){const{wrapper:e}={...t(),...a.components};return e?i.jsx(e,{...a,children:i.jsx(o,{...a})}):o(a)}export{R as default};

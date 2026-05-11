import{j as e,M as s,C as n,a}from"./blocks-Di1y6RyP.js";import{useMDXComponents as l}from"./index-BK3DIZ4d.js";import{H as c,E as t,C as d,a as h,b as x,c as p,d as u,e as j,O as m}from"./it-hero.stories-DO-GOv29.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-D7fXMUtU.js";function r(o){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...l(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:c}),`
`,e.jsx(i.h1,{id:"hero",children:"Hero"}),`
`,e.jsx("description",{children:"Sezione a tutta larghezza per mettere in evidenza combinazioni di contenuti testuali, immagini e pulsanti"}),`
`,e.jsx(i.h2,{id:"cosa-fa",children:"Cosa fa"}),`
`,e.jsx(i.p,{children:"Il componente Hero puoi usarlo per guidare l'utente verso un contenuto in evidenza e una call to action, oppure come apertura di grande impatto visivo della pagina che possa invogliare gli utenti a scorrere ulteriori contenuti."}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"https://designers.italia.it/design-system/componenti/hero/",rel:"nofollow",children:"Approfondisci quando e come usare il componente Hero"})}),`
`,e.jsx(i.h2,{id:"anteprima-e-attributi-del-componente",children:"Anteprima e attributi del componente"}),`
`,e.jsxs(i.p,{children:["Modifica gli attributi nella tabella per personalizzare in tempo reale l’aspetto e il comportamento del componente. Per vedere come cambia il codice, clicca su ",e.jsx("strong",{children:"Show code"}),"."]}),`
`,e.jsx(n,{of:t}),`
`,e.jsx(a,{of:t}),`
`,e.jsx(i.h2,{id:"indicazioni-generali",children:"Indicazioni generali"}),`
`,e.jsx(i.p,{children:"Puoi facoltativamente estendere la larghezza del componente Hero all’intera finestra, per mostrare messaggi in evidenza sul tuo sito."}),`
`,e.jsx(i.h3,{id:"attenzione-a",children:"Attenzione a"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Non usare più hero sulla stessa pagina."}),`
`,e.jsx(i.li,{children:"Usa il componente Hero con moderazione, consideralo come fosse una copertina o un banner molto in evidenza. Difficilmente avrai bisogno di troppe copertine o banner nell'ambito dello stesso sito o servizio."}),`
`,e.jsx(i.li,{children:'Fai attenzione al corretto contrasto (minimo) tra testo e sfondo nella variante "Con testo e immagine di sfondo"'}),`
`,e.jsxs(i.li,{children:["Scegli il corretto livello di heading ",e.jsx(i.code,{children:"h1"}),"-",e.jsx(i.code,{children:"h6"})," per il titolo a seconda del contesto e della struttura di pagina."]}),`
`,e.jsxs(i.li,{children:["Usa la corretta semantica html per le call to action laddove presenti: ",e.jsx(i.code,{children:"<a>"})," per link di navigazione o ancore, ",e.jsx(i.code,{children:"<it-button>"})," per azioni."]}),`
`,e.jsx(i.li,{children:'Quando usi il componente Hero con approccio "fullwidth", sfrutta tutta la larghezza della viewport.'}),`
`]}),`
`,e.jsx(i.h2,{id:"accessibilità",children:"Accessibilità"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Valuta attentamente l'utilizzo di più hero nella stessa pagina."}),`
`,e.jsxs(i.li,{children:["Nel caso in cui utilizzi il componente Hero con sola immagine, imposta sempre l'attributo ",e.jsx(i.code,{children:"it-aria-label"})," sul tag ",e.jsx(i.code,{children:"<it-hero>"})," per annunciare tramite i lettori di schermo di cosa si tratta."]}),`
`,e.jsxs(i.li,{children:["Se non imposti l'attributo ",e.jsx(i.code,{children:"it-aria-label"}),", il componente calcolerà in automatico l'attributo ",e.jsx(i.code,{children:"aria-labelledby"}),` basandosi sul contenuto testuale presente e facendolo puntare al primo heading disponibile. Nei casi in cui non ci siano heading nel testo dell'header, i lettori di schermo annunceranno il componente come "sezione" generica senza ulteriori dettagli, rendendo difficile per gli utenti comprendere il suo scopo o contenuto. Assicurati quindi di includere sempre un heading all'interno del componente Hero o di impostare l'attributo `,e.jsx(i.code,{children:"it-aria-label"})," per garantire una buona esperienza utente a tutti, compresi quelli che utilizzano tecnologie assistive."]}),`
`,e.jsxs(i.li,{children:["Nel caso in cui inserisci contenuti testuali, utilizza per il titolo il livello ",e.jsx(i.code,{children:"h"})," corretto a seconda del contesto."]}),`
`,e.jsx(i.li,{children:"Nel caso in cui utilizzi il componente Hero nella versione con testo e immagine di sfondo, verifica che l’immagine utilizzata assicuri sempre un adeguato contrasto rispetto al testo."}),`
`]}),`
`,e.jsx(i.h2,{id:"con-immagine",children:"Con immagine"}),`
`,e.jsxs(i.p,{children:["Per mostrare una immagine di sfondo nel componente ",e.jsx(i.code,{children:"it-hero"}),", inserisci l'immagine nello slot ",e.jsx(i.code,{children:"background"})," dedicato."]}),`
`,e.jsxs(i.p,{children:["Ricordati di impostare l'attributo ",e.jsx(i.code,{children:"it-aria-label"})," sul tag ",e.jsx(i.code,{children:"<it-hero>"})," per annunciare tramite lettori di schermo di cosa si tratta."]}),`
`,e.jsx(n,{of:d}),`
`,e.jsx(i.h2,{id:"con-contenuti-testuali",children:"Con contenuti testuali"}),`
`,e.jsxs(i.p,{children:["Inserisci il testo nello slot ",e.jsx(i.code,{children:"text"})," dedicato."]}),`
`,e.jsx("div",{class:"callout callout-success",children:e.jsxs("div",{class:"callout-inner mt-0",children:[e.jsx("div",{class:"callout-title",children:e.jsx("span",{class:"text",children:"Accessibilità contenuti testuali"})}),e.jsx("p",{children:e.jsxs(i.p,{children:["Nei casi in cui fossero presenti contenuti testuali, utilizza per il titolo il livello ",e.jsx(i.code,{children:"h"})," corretto a seconda del contesto."]})})]})}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(i.h3,{id:"con-contenuti-testuali-centrati",children:"Con contenuti testuali centrati"}),`
`,e.jsxs(i.p,{children:["Per ottenere il componente Hero con testi centrati orizzontalmente, aggiungi l'attributo ",e.jsx(i.code,{children:"center"})," al tag ",e.jsx(i.code,{children:"<it-hero>"}),"."]}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(i.h2,{id:"con-testi-ed-immagine-di-sfondo",children:"Con testi ed immagine di sfondo"}),`
`,e.jsx(i.p,{children:"Per visualizzare i testi in overlay sulle immagini, viene creato automaticamente un div scuro in opacità per migliorare la leggibilità del testo in caso di immagini dai toni chiari."}),`
`,e.jsx("div",{class:"callout callout-success",children:e.jsxs("div",{class:"callout-inner mt-0",children:[e.jsx("div",{class:"callout-title",children:e.jsx("span",{class:"text",children:"Accessibilità e contrasto"})}),e.jsx("p",{children:e.jsx(i.p,{children:"Verifica che l’immagine utilizzata assicuri sempre un adeguato contrasto rispetto al testo."})})]})}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(i.h3,{id:"con-overlay-di-colore-primario",children:"Con overlay di colore primario"}),`
`,e.jsxs(i.p,{children:["Per un div opaco di colore primario, aggiungi l'attributo ",e.jsx(i.code,{children:'overlay-color="primary"'})," al tag ",e.jsx(i.code,{children:"<it-hero>"}),"."]}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(i.h3,{id:"con-overlay-e-filtro-di-colore-primario",children:"Con overlay e filtro di colore primario"}),`
`,e.jsxs(i.p,{children:["Per aggiungere un filtro di tipo “screen”, aggiungi l'attributo ",e.jsx(i.code,{children:'overlay-color="filter"'})," al tag ",e.jsx(i.code,{children:"<it-hero>"}),"."]}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(i.h2,{id:"con-immagine-e-margine-negativo-per-contenuti-sovrapposti",children:"Con immagine e margine negativo per contenuti sovrapposti"}),`
`,e.jsx(i.p,{children:"In alcuni casi, il contenuto che segue può sovrapporsi al componente Hero."}),`
`,e.jsxs(i.p,{children:["Aggiungi l'attributo ",e.jsx(i.code,{children:"overlap"})," al tag ",e.jsx(i.code,{children:"<it-hero>"})," per far sì che il contenuto seguente si sovrapponga al componente Hero (in questo caso il componente seguente è una card)."]}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(i.h2,{id:"personalizzazione-degli-stili",children:"Personalizzazione degli stili"}),`
`,e.jsxs(i.p,{children:["Per la personalizzazione degli stili puoi usare i selettori ",e.jsx(i.code,{children:"::part"})," dedicati:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"::part(img-responsive-wrapper)"})," - wrapper dell'immagine di sfondo"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"::part(text-container)"})," - contenitore dello slot del testo"]}),`
`]}),`
`,e.jsx(i.p,{children:"Puoi cambiare il valore delle seguenti variabili css per:"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("td",{children:"Variabile CSS"}),e.jsx("td",{children:"Descrizione "}),e.jsx("td",{children:"Predefinito"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(i.code,{children:"--#${prefix}hero-background-color"})}),e.jsx("td",{children:"per cambiare il colore di sfondo dell'hero "}),e.jsx("td",{children:e.jsx(i.code,{children:"var(--#${prefix}color-background-primary)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(i.code,{children:"--#${prefix}hero-car-size"})}),e.jsx("td",{}),e.jsx("td",{children:e.jsx(i.code,{children:"1rem"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(i.code,{children:"--#${prefix}hero-height"})}),e.jsx("td",{children:"per cambiare l'altezza dell'hero "}),e.jsx("td",{children:e.jsx(i.code,{children:"300px"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(i.code,{children:"--#${prefix}hero-overlap-negative-spacing"})}),e.jsx("td",{children:"per cambiare l'altezza di overlap del contenuto successivo "}),e.jsx("td",{children:e.jsx(i.code,{children:"-3rem"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(i.code,{children:"--#${prefix}hero-overlap-spacing-inset"})}),e.jsx("td",{}),e.jsx("td",{children:e.jsx(i.code,{children:"48px"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(i.code,{children:"--#${prefix}hero-overlay-background"})}),e.jsx("td",{}),e.jsx("td",{children:e.jsx(i.code,{children:"transparent"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(i.code,{children:"--#${prefix}hero-text-family"})}),e.jsx("td",{children:"per cambiare il font-family del testo"}),e.jsx("td",{children:e.jsx(i.code,{children:"var(--bsi-font-serif)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(i.code,{children:"--#${prefix}hero-text-color"})}),e.jsx("td",{children:"per cambiare il colore del testo"}),e.jsx("td",{children:e.jsx(i.code,{children:"#fff"})})]})]})]}),`
`,e.jsxs(i.p,{children:[e.jsx(i.a,{href:"/docs/personalizzazione-degli-stili--documentazione#selettore-part",children:"Vedi qui la guida dettagliata"}),"."]})]})}function C(o={}){const{wrapper:i}={...l(),...o.components};return i?e.jsx(i,{...o,children:e.jsx(r,{...o})}):r(o)}export{C as default};

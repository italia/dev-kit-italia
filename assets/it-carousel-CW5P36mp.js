import{j as e,M as t,C as n,a as c,D as d}from"./blocks-Bz1L6Og6.js";import{useMDXComponents as r}from"./index-DwjO-e2X.js";import{S as p,E as l,V as u,a as h,b as m,c as j,d as x,C as g,F as v,T as z,A as f,e as b,I as o}from"./it-carousel.stories-B_B6jYAQ.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-C0KgUC2J.js";function s(a){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...r(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:p}),`
`,e.jsx(i.h1,{id:"carousel",children:"Carousel"}),`
`,e.jsx("description",{children:"Componente di presentazione per scorrere orizzontalmente una sequenza di elementi, immagini o diapositive di testo."}),`
`,e.jsx(i.h2,{id:"cosa-fa",children:"Cosa fa"}),`
`,e.jsxs(i.p,{children:["Il componente Carousel (",e.jsx(i.code,{children:"it-carousel"}),") mostra contenuti correlati che non possono essere visualizzati tutti insieme, permettendo di sfogliarli orizzontalmente."]}),`
`,e.jsx(i.p,{children:"È utile per eventi, notizie o servizi in evidenza, ma evita di usarlo per contenuti critici, perché alcuni utenti potrebbero non notarli."}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"https://designers.italia.it/design-system/componenti/carousel/",rel:"nofollow",children:"Approfondisci come e quando usare il componente Carousel"})}),`
`,e.jsx(i.h2,{id:"anteprima-e-attributi-del-componente",children:"Anteprima e attributi del componente"}),`
`,e.jsx(i.p,{children:"Nella tabella trovi gli attributi per personalizzare l'aspetto e il comportamento del componente. Data la complessità del componente, l'anteprima non verrà aggiornata in tempo reale al variare degli attributi."}),`
`,e.jsx(i.p,{children:"Per comprendere appieno le funzionalità del componente e delle sue varianti, consulta gli esempi interattivi contenuti nelle altre sezioni di questa pagina."}),`
`,e.jsx(n,{of:l}),`
`,e.jsx(c,{of:l}),`
`,e.jsx(i.h2,{id:"indicazioni-generali",children:"Indicazioni generali"}),`
`,e.jsxs(i.p,{children:["Il componente ",e.jsx(i.code,{children:"it-carousel"})," consente di creare una sequenza orizzontale di qualsiasi elemento HTML (card, immagini, video, ecc.)."]}),`
`,e.jsx(i.p,{children:"Per implementarlo correttamente:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["usa il tag ",e.jsx(i.code,{children:"<it-carousel>"})," come wrapper principale;"]}),`
`,e.jsxs(i.li,{children:[`inserisci ogni elemento "slide" all'interno di un elemento `,e.jsx(i.code,{children:"<it-carousel-slide>"}),", nello slot di default;"]}),`
`,e.jsxs(i.li,{children:["fornisci un'intestazione nello slot ",e.jsx(i.code,{children:"title"})," usando un elemento ",e.jsx(i.code,{children:"h"})," (",e.jsx(i.code,{children:"h2"}),"–",e.jsx(i.code,{children:"h6"}),")."]}),`
`]}),`
`,e.jsx(i.p,{children:"Il componente espone i seguenti attributi:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"variant"}),", per selezionare la variante di layout;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"arrows"}),", per mostrare le frecce di navigazione;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"fullscreen"}),"; per visualizzare il carousel a tutto schermo;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"type"}),", per controllare il comportamento di scorrimento. Se non impostato viene usato il valore di default della variante;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"autoplay"}),", abilita il comportamento Play/Pause. Di default è in modalità ",e.jsx(i.code,{children:"pause"})," e viene mostrato un pulsante Play/Pausa per l'utente."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"config"}),", oggetto per personalizzazioni avanzate che estende le opzioni offerte da Splide, passato come stringa JSON nell'attributo."]}),`
`]}),`
`,e.jsx(i.h2,{id:"accessibilità",children:"Accessibilità"}),`
`,e.jsxs(i.p,{children:["Il componente ",e.jsx(i.code,{children:"it-carousel"})," integra Splide.js e segue le specifiche ",e.jsx(i.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/carousel/",rel:"nofollow",children:"W3C Carousel Design Pattern"}),". Per tutte le funzionalità di accessibilità offerte dalla libreria, ",e.jsx(i.a,{href:"https://splidejs.com/guides/accessibility",rel:"nofollow",children:"consulta la documentazione di Splide"}),"."]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Il wrapper principale usa ",e.jsx(i.code,{children:'role="region"'})," per permettere agli utenti di lettori di schermo di individuare e saltare rapidamente alla sezione."]}),`
`,e.jsxs(i.li,{children:["Puoi assegnare un nome accessibile automaticamente: inserendo un elemento ",e.jsx(i.code,{children:"h"})," (",e.jsx(i.code,{children:"h2"}),"-",e.jsx(i.code,{children:"h6"}),") nello slot ",e.jsx(i.code,{children:"title"}),". Il componente genera un ID univoco e lo collega al carousel tramite ",e.jsx(i.code,{children:"aria-labelledby"}),". Se vuoi nascondere l'intestazione visivamente, puoi utilizzare la classe ",e.jsx(i.code,{children:"visually-hidden"})," sull'elemento di intestazione."]}),`
`,e.jsxs(i.li,{children:["Tutti le slide non visibili hanno l'attributo ",e.jsx(i.code,{children:"inert"}),", così gli utenti che navigano con la tastiera non finiscono su elementi nascosti."]}),`
`,e.jsxs(i.li,{children:["I controlli (frecce e paginazione) sono realizzati con elementi ",e.jsx(i.code,{children:"<button>"})," nativi. Durante la transizione, il componente rimuove preventivamente le restrizioni di focus dalla slide di destinazione per permettere alle tecnologie assistive di seguirne il contenuto."]}),`
`,e.jsx(i.li,{children:"Con autoplay attivo, viene fornito un pulsante Play/Pausa. Per impostazione predefinita, il carousel è in modalità pausa: movimento e animazioni sono disabilitati durante hover, focus o se l'utente ha scelto di ridurre le animazioni nelle impostazioni del sistema operativo o del browser."}),`
`,e.jsxs(i.li,{children:["Grazie all'estensione ",e.jsx(i.a,{href:"https://splidejs.com/extensions/intersection/",rel:"nofollow",children:"Intersection"}),", l’autoplay si mette in pausa quando il carousel esce dal campo visivo dell’utente, risparmiando risorse e riducendo il rumore cognitivo."]}),`
`]}),`
`,e.jsx(i.p,{children:"Per garantire un'esperienza utente ottimale ed accessibile:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"non usare il carousel come unica modalità di navigazione sul tuo sito o servizio;"}),`
`,e.jsx(i.li,{children:"assicurati che il carousel non intralci l’esperienza dell’utente se viene ignorato o non utilizzato;"}),`
`,e.jsx(i.li,{children:"assicurati che il carousel non interferisca con altri elementi interattivi sulla pagina;"}),`
`,e.jsx(i.li,{children:"imposta una velocità di transizione adeguata per permettere alle persone di assimilare le informazioni;"}),`
`,e.jsx(i.li,{children:"verifica che le immagini o i contenuti siano di alta qualità, chiaramente visibili su tutti i dispositivi e che includano testo alternativo descrittivo;"}),`
`,e.jsxs(i.li,{children:["fornisci sempre un'intestazione chiara e descrittiva dello scopo e dei contenuti del carousel. Se l'intestazione è puramente decorativa, nascondila visivamente usando la classe ",e.jsx(i.code,{children:"visually-hidden"}),"."]}),`
`]}),`
`,e.jsx(i.h2,{id:"varianti",children:"Varianti"}),`
`,e.jsxs(i.p,{children:["Il componente presenta diverse varianti, selezionabili tramite l'attributo ",e.jsx(i.code,{children:"variant"}),"."]}),`
`,e.jsx(i.h3,{id:"variante-singola",children:"Variante singola"}),`
`,e.jsxs(i.p,{children:["La variante ",e.jsx(i.code,{children:"single"})," mostra un singolo elemento alla volta e include frecce di scorrimento."]}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(i.h3,{id:"variante-a-tre-colonne",children:"Variante a tre colonne"}),`
`,e.jsxs(i.p,{children:["La variante ",e.jsx(i.code,{children:"columns"})," mostra più elementi contemporaneamente, organizzati in colonne."]}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(i.h3,{id:"varianti-galleria",children:"Varianti galleria"}),`
`,e.jsx(i.p,{children:"Le varianti galleria presentano una serie di immagini o contenuti visivi in un formato di galleria."}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["La variante ",e.jsx(i.code,{children:"gallery-sm"})," offre una visualizzazione più compatta."]}),`
`,e.jsxs(i.li,{children:["La variante ",e.jsx(i.code,{children:"gallery-lg"})," offre una visualizzazione più ampia e immersiva."]}),`
`]}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(i.h2,{id:"aggiungere-un-separatore-tra-le-slide",children:"Aggiungere un separatore tra le slide"}),`
`,e.jsxs(i.p,{children:["Per aggiungere un separatore verticale tra le slide del carousel, usa l'attributo ",e.jsx(i.code,{children:"separator"}),". Questa opzione aiuta a distinguere visivamente gli elementi, soprattutto quando il contenuto delle slide è simile o quando si utilizzano varianti che mostrano più elementi contemporaneamente (come ",e.jsx(i.code,{children:"columns"}),")."]}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(i.h2,{id:"frecce-di-navigazione",children:"Frecce di navigazione"}),`
`,e.jsxs(i.p,{children:["Le frecce di navigazione facilitano lo scorrimento tra gli elementi. Per abilitarle, usa l'attributo ",e.jsx(i.code,{children:"arrows"}),"."]}),`
`,e.jsx(i.p,{children:`Le frecce di navigazione vengono abilitate o disabilitate dinamicamente in base alla posizione corrente all'interno del carosello (ad esempio, la freccia "precedente" è disabilitata quando si è sulla prima slide), al tipo di scorrimento e alla variante selezionata.`}),`
`,e.jsx(n,{of:g}),`
`,e.jsx(i.h2,{id:"fullscreen",children:"Fullscreen"}),`
`,e.jsxs(i.p,{children:["Per visualizzare il componente a tutto schermo, usa l'attributo ",e.jsx(i.code,{children:"fullscreen"}),`.
Questa opzione è particolarmente utile per le varianti galleria, ma può essere applicata a qualsiasi variante per creare un'esperienza immersiva.`]}),`
`,e.jsx(n,{of:v}),`
`,e.jsx(i.h2,{id:"modificare-il-comportamento-di-scorrimento",children:"Modificare il comportamento di scorrimento"}),`
`,e.jsxs(i.p,{children:["Per modificare il comportamento di scorrimento, valorizza l'attributo ",e.jsx(i.code,{children:"type"})," con:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"slide"}),", per spostare le slide lateralmente, partendo dalla prima e fermandosi all'ultima;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"loop"}),", per uno scorrimento circolare continuo, senza fermarsi all'ultima slide;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"fade"}),", per una transizione più morbida con dissolvenza."]}),`
`]}),`
`,e.jsxs(i.p,{children:["Per transizioni più avanzate (durata, easing, comportamento su breakpoint, ecc.), passa un oggetto compatibile con Splide tramite l'attributo ",e.jsx(i.code,{children:"config"}),". Per tutte le opzioni disponibili, consulta la ",e.jsx(i.a,{href:"https://splidejs.com/guides/options/#type",rel:"nofollow",children:"documentazione ufficiale di Splide"}),"."]}),`
`,e.jsx(n,{of:z}),`
`,e.jsx(i.h2,{id:"autoplay",children:"Autoplay"}),`
`,e.jsxs(i.p,{children:["Per far scorrere automaticamente le slide dopo un intervallo di tempo specificato, usa l'attributo ",e.jsx(i.code,{children:"autoplay"}),"."]}),`
`,e.jsx(i.p,{children:"Per impostazione predefinita, il carousel è in modalità pausa: movimento e animazioni sono disabilitati durante hover, focus o se l'utente ha scelto di ridurre le animazioni nelle impostazioni del sistema operativo o del browser."}),`
`,e.jsxs(i.p,{children:["Il tempo di intervallo è impostato a 5000 ms (5 secondi) di default. Per personalizzarlo, usa l'attributo ",e.jsx(i.code,{children:"config"}),", passando un oggetto compatibile a Splide con la proprietà ",e.jsx(i.code,{children:"interval"})," espressa in millisecondi."]}),`
`,e.jsx(n,{of:f}),`
`,e.jsxs(i.h2,{id:"personalizzazione-avanzata-attraverso-lattributo-config",children:["Personalizzazione avanzata attraverso l'attributo ",e.jsx(i.code,{children:"config"})]}),`
`,e.jsxs(i.p,{children:["Per personalizzare ulteriormente stile e comportamento del carousel (ad esempio velocità di scorrimento, numero di elementi visualizzati per pagina, funzionalità avanzate dei breakpoint), usa l'attributo ",e.jsx(i.code,{children:"config"})," per passare un ",e.jsx(i.a,{href:"https://splidejs.com/guides/options",rel:"nofollow",children:"oggetto di configurazione conforme alle opzioni di Splide"}),"."]}),`
`,e.jsx(i.p,{children:"In questo esempio, il carousel è configurato per mostrare 2 elementi per pagina, con autoplay e loop attivi e un intervallo di 3 secondi tra le transizioni."}),`
`,e.jsx("div",{class:"callout callout-warning",children:e.jsxs("div",{class:"callout-inner",children:[e.jsx("div",{class:"callout-title",children:e.jsx("span",{class:"text",children:"Accessibilità"})}),e.jsx("p",{children:e.jsx(i.p,{children:"Questo esempio ha scopo illustrativo e potrebbe non essere adatto per tutti i contesti o esigenze di accessibilità."})})]})}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<it-carousel variant="columns" config="{
      type: 'loop',
      autoplay: 'pause',
      interval: 3000,
      pauseOnHover: true,
      resetProgress: false,
      perPage: 2,
      arrows: true,
      gap: 16,
      padding: { left: 8, right: 8 },
      breakpoints: {
        560: {
          perPage: 1,
          gap: 0,
          padding: { left: 24, right: 24 },
          arrows: false,
        },
        768: {
          perPage: 2,
          gap: 0,
          padding: { left: 0, right: 0 },
          arrows: false,
        },
        992: {
          perPage: 3,
          gap: 0,
          padding: { left: 0, right: 0 },
          arrows: false,
        },
      },
    }">
  <!-- Contenuto del Carousel -->
</it-carousel>
`})}),`
`,e.jsx(n,{of:b}),`
`,e.jsx(i.h2,{id:"proprietà-metodi-ed-eventi-accessibili-via-js",children:"Proprietà, metodi ed eventi accessibili via JS"}),`
`,e.jsx(i.p,{children:"Il componente espone i seguenti metodi e eventi accessibili via JavaScript."}),`
`,e.jsx(i.h3,{id:"metodi",children:"Metodi"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"playAutoplay()"}),", avvia l'autoplay (se configurato)."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"pauseAutoplay()"}),", mette in pausa l'autoplay."]}),`
`]}),`
`,e.jsx(i.h3,{id:"eventi",children:"Eventi"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"it-carousel-play"}),", emesso quando l'autoplay viene avviato. Evento configurato con ",e.jsx(i.code,{children:"bubbles: true"})," e ",e.jsx(i.code,{children:"composed: true"}),". Nel ",e.jsx(i.code,{children:"detail"})," contiene ",e.jsx(i.code,{children:"{ id: string }"})," (id della istanza Splide)."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"it-carousel-pause"}),", emesso quando l'autoplay viene messo in pausa. Evento configurato con ",e.jsx(i.code,{children:"bubbles: true"})," e ",e.jsx(i.code,{children:"composed: true"}),". Nel ",e.jsx(i.code,{children:"detail"})," contiene ",e.jsx(i.code,{children:"{ id: string }"}),"."]}),`
`]}),`
`,e.jsx(i.h2,{id:"",children:o.name}),`
`,e.jsx(d,{of:o}),`
`,e.jsx(i.h2,{id:"personalizzazione-degli-stili",children:"Personalizzazione degli stili"}),`
`,e.jsxs(i.p,{children:["Per personalizzare l'aspetto di ",e.jsx(i.code,{children:"it-carousel"})," dall'esterno dello shadow DOM, usa il selettore ",e.jsx(i.code,{children:"::part()"})," sui seguenti part esposti dal componente:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"arrows"}),", per il wrapper che contiene i pulsanti freccia (prev/next);"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"arrow-prev"}),', per il pulsante "precedente";']}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"arrow-next"}),', per il pulsante "successivo";']}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"pagination-track"}),", per il contenitore della paginazione (lista di dot);"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"pagination-dot"}),", per ogni singolo dot/pulsante della paginazione;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"autoplay-toggle"}),", per il toggle Play/Pausa peresente quando ",e.jsx(i.code,{children:"autoplay"})," è attivo o ",e.jsx(i.code,{children:"config.autoplay"})," è configurato;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"autoplay-play"}),", per l'icona SVG di Play all'interno del toggle;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"autoplay-pause"}),", per l'icona SVG di Pause all'interno del toggle."]}),`
`]}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"/docs/personalizzazione-degli-stili--documentazione#selettore-part",children:"Vai alla guida sul selettore part"})})]})}function I(a={}){const{wrapper:i}={...r(),...a.components};return i?e.jsx(i,{...a,children:e.jsx(s,{...a})}):s(a)}export{I as default};

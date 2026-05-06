import{j as e,M as s,C as n,a as c,D as d}from"./blocks-wEbwr2sX.js";import{useMDXComponents as r}from"./index-Dja3nfEA.js";import{S as p,E as o,V as u,a as h,b as m,c as j,d as x,C as g,F as z,T as v,A as f,e as b,I as l}from"./it-carousel.stories-Tl-8O3Ia.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-CEKgHznA.js";function t(a){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...r(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:p}),`
`,e.jsx(i.h1,{id:"carousel",children:"Carousel"}),`
`,e.jsx("description",{children:"Componente di presentazione per scorrere orizzontalmente una sequenza di elementi, immagini o diapositive di testo"}),`
`,e.jsx(i.h2,{id:"cosa-fa",children:"Cosa fa"}),`
`,e.jsx(i.p,{children:"Puoi utilizzare il componente Carousel per presentare una serie di contenuti correlati che non possono essere visualizzati contemporaneamente sullo schermo."}),`
`,e.jsx(i.p,{children:"È particolarmente utile per elementi come eventi, notizie o servizi in evidenza."}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"https://designers.italia.it/design-system/componenti/carousel/",rel:"nofollow",children:"Approfondisci come e quando usare il componente Carousel"})}),`
`,e.jsx(i.h2,{id:"anteprima-e-attributi-del-componente",children:"Anteprima e attributi del componente"}),`
`,e.jsx(i.p,{children:"Nella tabella trovi gli attributi per personalizzare l'aspetto e il comportamento del componente. Data la complessità del componente, l'anteprima non verrà aggiornata in tempo reale al variare degli attributi."}),`
`,e.jsx(i.p,{children:"Per comprendere appieno le funzionalità del componente e delle sue varianti, consulta gli esempi interattivi contenuti nelle altre sezioni di questa pagina."}),`
`,e.jsx(n,{of:o}),`
`,e.jsx(c,{of:o}),`
`,e.jsx(i.h2,{id:"indicazioni-generali",children:"Indicazioni generali"}),`
`,e.jsxs(i.p,{children:["Il componente ",e.jsx(i.code,{children:"it-carousel"}),` consente di creare una sequenza orizzontale di slide che possono contenere qualsiasi contenuto HTML (card, immagini, video, ecc.).
Segui queste indicazioni per implementare correttamente il componente:`]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Usa il tag ",e.jsx(i.code,{children:"<it-carousel>"})," come wrapper principale."]}),`
`,e.jsxs(i.li,{children:[`Inserisci ogni elemento "slide" all'interno di un elemento `,e.jsx(i.code,{children:"<it-carousel-slide>"}),", nel suo slot di default."]}),`
`,e.jsxs(i.li,{children:["Fornisci un'intestazione nello slot ",e.jsx(i.code,{children:"title"})," usando un elemento di testata (",e.jsx(i.code,{children:"h2"}),"–",e.jsx(i.code,{children:"h6"}),")."]}),`
`]}),`
`,e.jsx(i.p,{children:"Il componente espone i seguenti attributi:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"variant"}),": per selezionare la variante di layout."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"arrows"}),": per mostrare le frecce di navigazione."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"fullscreen"}),": per visualizzare il Carousel a tutto schermo."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"type"}),": per controllare il comportamento di scorrimento. Se non impostato viene usato il valore di default della variante."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"config"}),": oggetto di configurazione avanzata (passato come stringa JSON nell'attributo). Permette di estendere le opzioni offerte da Splide (perPage, gap, breakpoints, autoplay, interval, ecc.)."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"autoplay"}),": abilita il comportamento Play/Pause; di default il componente usa la modalità ",e.jsx(i.code,{children:"pause"})," (è renderizzato un pulsante Play/Pausa per l'utente)."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"config"}),": per personalizzazioni avanzate. Vedi la sezione dedicata per ulteriori informazioni."]}),`
`]}),`
`,e.jsx(i.h2,{id:"accessibilità",children:"Accessibilità"}),`
`,e.jsxs(i.p,{children:["Il componente ",e.jsx(i.code,{children:"it-carousel"})," integra Splide.js e si conforma alle specifiche ",e.jsx(i.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/carousel/",rel:"nofollow",children:"W3C Carousel Design Pattern"}),". Fai riferimento alla documentazione ufficiale di Splide per una panoramica completa delle ",e.jsx(i.a,{href:"https://splidejs.com/guides/accessibility",rel:"nofollow",children:"funzionalità di accessibilità"})," offerte dalla libreria."]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Il wrapper principale del componente utilizza ",e.jsx(i.code,{children:'role="region"'}),", permettendo agli utenti di screen reader di individuare e saltare rapidamente alla sezione."]}),`
`,e.jsxs(i.li,{children:["Puoi assegnare un nome accessibile automaticamente: inserendo un elemento di testata (da h2 a h6) nello slot ",e.jsx(i.code,{children:"title"}),", il componente genera un ID univoco e lo collega al carosello tramite ",e.jsx(i.code,{children:"aria-labelledby"}),". Se vuoi nascondere l'intestazione visivamente, puoi utilizzare la classe ",e.jsx(i.code,{children:"visually-hidden"})," sull'elemento di intestazione."]}),`
`,e.jsx(i.li,{children:`Il componente applica l'attributo inert a tutte le slide non visibili. Questo garantisce che gli utenti che usano la tastiera non finiscano mai su elementi "fantasma" o nascosti.`}),`
`,e.jsxs(i.li,{children:["I controlli (frecce e paginazione) sono realizzati con elementi ",e.jsx(i.code,{children:"<button>"})," nativi. Durante la transizione, il componente rimuove preventivamente le restrizioni di focus dalla slide di destinazione per permettere alle tecnologie assistive di seguirne il contenuto."]}),`
`,e.jsx(i.li,{children:`Se attivi l'autoplay, viene reso disponibile un pulsante di Play/Pausa dedicato. Il componente è configurato in modalità "pause" di default: il movimento non parte automaticamente, e l'animazione di transizione viene disabilitata se l'utente fa hover o mette a fuoco il carosello, o se ha impostato una preferenza per ridurre le animazioni a livello di sistema operativo/browser.`}),`
`,e.jsxs(i.li,{children:["Grazie all'estensione ",e.jsx(i.a,{href:"https://splidejs.com/extensions/intersection/",rel:"nofollow",children:"Intersection"}),", il carosello mette in pausa l'autoplay quando esce dal campo visivo dell'utente, risparmiando risorse e riducendo il rumore cognitivo."]}),`
`]}),`
`,e.jsx(i.p,{children:"Per garantire un'esperienza utente ottimale ed accessibile, fai attenzione a:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Evitare che le transizioni tra i contenuti del carousel siano troppo veloci, per permettere alle persone di assimilare le informazioni."}),`
`,e.jsx(i.li,{children:"Controllare che il carousel non intralci l'esperienza dell'utente se viene ignorato o non utilizzato."}),`
`,e.jsx(i.li,{children:"Verificare che le immagini o i contenuti del carousel siano di alta qualità e chiaramente visibili su tutti i dispositivi, e che includano testo alternativo descrittivo."}),`
`,e.jsx(i.li,{children:"Non utilizzare il carousel come unico mezzo di navigazione sul tuo sito o applicazione."}),`
`,e.jsxs(i.li,{children:["Fornisci sempre un'intestazione chiara e descrittiva per il carousel, in modo che gli utenti di screen reader possano comprendere il suo scopo e il tipo di contenuto che contiene. Se l'intestazione è puramente decorativa, puoi nasconderla visivamente usando la classe ",e.jsx(i.code,{children:"visually-hidden"}),"."]}),`
`,e.jsx(i.li,{children:"Assicurati che il carousel non interferisca con altri elementi interattivi sulla pagina."}),`
`]}),`
`,e.jsx(i.h2,{id:"varianti",children:"Varianti"}),`
`,e.jsxs(i.p,{children:["Il componente supporta diverse varianti che possono essere selezionate tramite l'attributo ",e.jsx(i.code,{children:"variant"}),`. Ogni variante è progettata per adattarsi a specifici casi d'uso e
contesti di design.`]}),`
`,e.jsx(i.p,{children:"Di seguito sono mostrate le varianti disponibili."}),`
`,e.jsx(i.h3,{id:"variante-singola",children:"Variante singola"}),`
`,e.jsxs(i.p,{children:["La variante ",e.jsx(i.code,{children:"single"})," è progettata per visualizzare un singolo elemento alla volta, con frecce di navigazione per scorrere tra gli elementi."]}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(i.h3,{id:"variante-a-tre-colonne",children:"Variante a tre colonne"}),`
`,e.jsxs(i.p,{children:["La variante ",e.jsx(i.code,{children:"columns"})," consente di visualizzare più elementi contemporaneamente, organizzati in colonne."]}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(i.h3,{id:"varianti-galleria",children:"Varianti galleria"}),`
`,e.jsxs(i.p,{children:["Le varianti ",e.jsx(i.code,{children:"gallery-sm"})," e ",e.jsx(i.code,{children:"gallery-lg"})," sono progettate per presentare una serie di immagini o contenuti visivi in un formato di galleria."]}),`
`,e.jsxs(i.p,{children:["La variante ",e.jsx(i.code,{children:"gallery-sm"})," è adatta per gallerie più compatte, mentre la variante ",e.jsx(i.code,{children:"gallery-lg"})," offre una visualizzazione più ampia e immersiva."]}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(i.h2,{id:"aggiungere-un-separatore-tra-le-slide",children:"Aggiungere un separatore tra le slide"}),`
`,e.jsxs(i.p,{children:["Puoi aggiungere un separatore verticale visivo tra le slide in tutte le varianti del Carousel utilizzando l'attributo ",e.jsx(i.code,{children:"separator"}),". Questa opzione è particolarmente utile per migliorare la distinzione visiva tra gli elementi, soprattutto quando il contenuto delle slide è simile o quando si utilizzano varianti che mostrano più elementi contemporaneamente (come ",e.jsx(i.code,{children:"columns"}),")."]}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(i.h2,{id:"frecce-di-navigazione",children:"Frecce di navigazione"}),`
`,e.jsxs(i.p,{children:["Il componente include frecce di navigazione per facilitare lo scorrimento tra gli elementi. Puoi abilitare le frecce di navigazione aggiungendo l'attributo ",e.jsx(i.code,{children:"arrows"}),"."]}),`
`,e.jsx(i.p,{children:`Le frecce di navigazione sono abilitate/disabilitate durante la navigazione in modo dinamico in base alla posizione corrente all'interno del carosello (ad esempio, la freccia "precedente" è disabilitata quando si è sulla prima slide), al tipo di scorrimento e alla variante selezionata.`}),`
`,e.jsx(n,{of:g}),`
`,e.jsx(i.h2,{id:"fullscreen",children:"Fullscreen"}),`
`,e.jsxs(i.p,{children:["Per visualizzare il componente a tutto schermo puoi aggiungere l'attributo ",e.jsx(i.code,{children:"fullscreen"}),`.
Questa opzione è particolarmente utile per le varianti di galleria, ma può essere applicata a qualsiasi variante per creare un'esperienza immersiva.`]}),`
`,e.jsx(n,{of:z}),`
`,e.jsx(i.h2,{id:"modificare-il-comportamento-di-scorrimento",children:"Modificare il comportamento di scorrimento"}),`
`,e.jsxs(i.p,{children:["Puoi modificare il comportamento di scorrimento del Carousel tramite l'attributo ",e.jsx(i.code,{children:"type"}),". Se valorizzato, questo attributo sovrascrive le impostazioni predefinite della variante selezionata."]}),`
`,e.jsx(i.p,{children:"I valori disponibili sono:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"slide"}),": la transizione sposta le slide lateralmente."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"loop"}),": permette uno scorrimento circolare senza interruzioni tra l'ultima e la prima slide."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"fade"}),": le slide si dissolvono l'una nell'altra offrendo una transizione più morbida."]}),`
`]}),`
`,e.jsxs(i.p,{children:["Se hai bisogno di opzioni di transizione più avanzate (durata, easing, comportamento su breakpoint, ecc.), passa un oggetto compatibile a Splide tramite l'attributo ",e.jsx(i.code,{children:"config"}),"."]}),`
`,e.jsxs(i.p,{children:["Per dettagli completi sulle opzioni e sulle relative impostazioni, consulta la ",e.jsx(i.a,{href:"https://splidejs.com/guides/options/#type",rel:"nofollow",children:"documentazione ufficiale di Splide"}),"."]}),`
`,e.jsx(n,{of:v}),`
`,e.jsx(i.h2,{id:"autoplay",children:"Autoplay"}),`
`,e.jsxs(i.p,{children:["Il componente supporta la funzionalità di autoplay, che consente di far scorrere automaticamente le slide dopo un intervallo di tempo specificato. Per abilitare l'autoplay, puoi utilizzare l'attributo ",e.jsx(i.code,{children:"autoplay"}),"."]}),`
`,e.jsx(i.p,{children:`Quando viene abilitato l'autoplay, il componente è configurato in modalità "pause" di default: l'animazione di transizione viene disabilitata se l'utente fa hover o mette a fuoco il carosello, o se ha impostato una preferenza per ridurre le animazioni a livello di sistema operativo/browser.`}),`
`,e.jsxs(i.p,{children:["Il tempo di intervallo tra le transizioni può essere personalizzato tramite l'attributo ",e.jsx(i.code,{children:"config"}),", passando un oggetto compatibile a Splide con la proprietà ",e.jsx(i.code,{children:"interval"})," (espressa in millisecondi). Di default, l'intervallo è impostato a 5000 ms (5 secondi)."]}),`
`,e.jsx(n,{of:f}),`
`,e.jsxs(i.h2,{id:"personalizzazione-avanzata-attraverso-lattributo-config",children:["Personalizzazione avanzata attraverso l'attributo ",e.jsx(i.code,{children:"config"})]}),`
`,e.jsxs(i.p,{children:["Puoi fornire configurazioni specifiche a Splide, la libreria sottostante che gestisce il comportamento del Carousel valorizzando l'attributo ",e.jsx(i.code,{children:"config"}),". Questo permette di personalizzare ulteriormente il comportamento del Carousel, ad esempio modificando la velocità di scorrimento, il numero di elementi visualizzati per pagina, o abilitando funzionalità avanzate breakpoints e stili personalizzati."]}),`
`,e.jsxs(i.p,{children:["Dovrai fornire un oggetto di configurazione che rispetti ",e.jsx(i.a,{href:"https://splidejs.com/guides/options",rel:"nofollow",children:"le opzioni rese disponibili da Splide"}),"."]}),`
`,e.jsx(i.p,{children:"In questo esempio, il Carousel è configurato per visualizzare 2 elementi per pagina, abilitare l'autoplay e il loop, e impostare un intervallo di 3 secondi tra le transizioni. È importante consultare la documentazione di Splide per conoscere tutte le opzioni disponibili e assicurarsi che le configurazioni personalizzate siano compatibili con la struttura e il design del Carousel."}),`
`,e.jsx("div",{class:"callout callout-warning",children:e.jsxs("div",{class:"callout-inner",children:[e.jsx("div",{class:"callout-title",children:e.jsx("span",{class:"text",children:"Accessibilità"})}),e.jsx("p",{children:e.jsx(i.p,{children:"Il seguente esempio viene fornito a scopo illustrativo e potrebbe non essere adatto per tutti i contesti o esigenze di accessibilità."})})]})}),`
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
`,e.jsx(i.h2,{id:"proprietà-metodi-ed-eventi-accessibili-via-js",children:"Proprietà, Metodi, ed Eventi accessibili via JS"}),`
`,e.jsx(i.p,{children:"Il componente espone i seguenti metodi e eventi accessibili via JavaScript."}),`
`,e.jsx(i.h3,{id:"metodi",children:"Metodi"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"playAutoplay()"})," — avvia l'autoplay (se configurato)."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"pauseAutoplay()"})," — mette in pausa l'autoplay."]}),`
`]}),`
`,e.jsx(i.h3,{id:"eventi",children:"Eventi"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"it-carousel-play"})," — emesso quando l'autoplay viene avviato. Evento configurato con ",e.jsx(i.code,{children:"bubbles: true"})," e ",e.jsx(i.code,{children:"composed: true"}),". Nel ",e.jsx(i.code,{children:"detail"})," contiene ",e.jsx(i.code,{children:"{ id: string }"})," (id della istanza Splide)."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"it-carousel-pause"})," — emesso quando l'autoplay viene messo in pausa. Evento configurato con ",e.jsx(i.code,{children:"bubbles: true"})," e ",e.jsx(i.code,{children:"composed: true"}),". Nel ",e.jsx(i.code,{children:"detail"})," contiene ",e.jsx(i.code,{children:"{ id: string }"}),"."]}),`
`]}),`
`,e.jsx(i.h2,{id:"",children:l.name}),`
`,e.jsx(d,{of:l}),`
`,e.jsx(i.h2,{id:"personalizzazione-degli-stili",children:"Personalizzazione degli stili"}),`
`,e.jsxs(i.p,{children:["Per personalizzare l'aspetto del componente ",e.jsx(i.code,{children:"it-carousel"})," dall'esterno dello shadow DOM puoi utilizzare il selettore ",e.jsx(i.code,{children:"::part()"})," sui seguenti part esposti dal componente:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"arrows"})," — wrapper che contiene i pulsanti freccia (prev/next)."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"arrow-prev"}),' — il pulsante "precedente".']}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"arrow-next"}),' — il pulsante "successivo".']}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"pagination-track"})," — il contenitore della paginazione (lista di dot)."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"pagination-dot"})," — ogni singolo dot/pulsante della paginazione."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"autoplay-toggle"})," — il bottone toggle Play/Pausa (renderizzato quando ",e.jsx(i.code,{children:"autoplay"})," è attivo o ",e.jsx(i.code,{children:"config.autoplay"})," è configurato)."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"autoplay-play"})," — icona SVG di Play all'interno del toggle."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"autoplay-pause"})," — icona SVG di Pause all'interno del toggle."]}),`
`]}),`
`,e.jsxs(i.p,{children:[e.jsx(i.a,{href:"/docs/personalizzazione-degli-stili--documentazione#selettore-part",children:"Vedi qui la guida dettagliata"}),"."]})]})}function I(a={}){const{wrapper:i}={...r(),...a.components};return i?e.jsx(i,{...a,children:e.jsx(t,{...a})}):t(a)}export{I as default};

import{j as e,M as u,C as n,a as h,D as l}from"./blocks-BFLJgE_w.js";import{useMDXComponents as p}from"./index-CcyBHh0h.js";import{S as m,E as s,C as j,a as x,I as a,b as t,G as r,c as d,d as f}from"./it-video.stories-HrCuZ4vG.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-CqGhHw05.js";function c(o){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...p(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(u,{of:m}),`
`,e.jsx(i.h1,{id:"video-player",children:"Video player"}),`
`,e.jsx("description",{children:"Lettore per mostrare video sul proprio sito o incorporarli da piattaforme terze rispettando privacy e accessibilità."}),`
`,e.jsx(i.h2,{id:"cosa-fa",children:"Cosa fa"}),`
`,e.jsxs(i.p,{children:["Il componente ",e.jsx(i.code,{children:"it-video"}),` consente di incorporare video all’interno delle pagine web, offrendo un lettore video accessibile e rispettoso della privacy degli utenti.
Supporta sia la riproduzione di video ospitati localmente che l’incorporamento di video da piattaforme esterne come YouTube, garantendo un’esperienza utente coerente e personalizzabile.`]}),`
`,e.jsxs(i.p,{children:["Questo componente utilizza la libreria ",e.jsx(i.a,{href:"https://videojs.com/",rel:"nofollow",children:"Video.js"})," per implementare funzionalità avanzate come il supporto a diversi formati video, la personalizzazione dell’interfaccia utente e l’integrazione con API esterne."]}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"https://designers.italia.it/design-system/componenti/video-player/",rel:"nofollow",children:"Approfondisci come e quando usare il componente Video player"})}),`
`,e.jsx(i.h2,{id:"anteprima-e-attributi-del-componente",children:"Anteprima e attributi del componente"}),`
`,e.jsxs(i.p,{children:["Modifica gli attributi nella tabella per personalizzare in tempo reale l'aspetto e il comportamento del componente. Per vedere come cambia il codice, clicca su ",e.jsx(i.strong,{children:"Show code"}),"."]}),`
`,e.jsx(n,{of:s}),`
`,e.jsx(h,{of:s}),`
`,e.jsx(i.h2,{id:"indicazioni-generali",children:"Indicazioni generali"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Per aggiungere un video, usa il componente ",e.jsx(i.code,{children:"<it-video />"})," e i relativi attributi per gestirne la sorgente e le opzioni del video player."]}),`
`,e.jsxs(i.li,{children:["Usa l'attributo ",e.jsx(i.code,{children:"options"})," personalizzare il comportamento, l’aspetto e le funzionalità del player usando le ",e.jsx(i.a,{href:"https://videojs.com/guides/options/",rel:"nofollow",children:"opzioni di Video.js"}),"."]}),`
`,e.jsxs(i.li,{children:["Usa l'attributo ",e.jsx(i.code,{children:"translations"})," per definire le traduzioni del player diverse dalla lingua italiana o per sovrascrivere le traduzioni italiane preimpostate."]}),`
`]}),`
`,e.jsx(i.h3,{id:"font-per-le-icone-del-player",children:"Font per le icone del player"}),`
`,e.jsxs(i.p,{children:["Per utilizzare le icone del player, devi includere il font ",e.jsx(i.code,{children:"VideoJS.woff"})," nella tua applicazione. Puoi farlo aggiungendo il CSS compilato di dev-kit-italia nel tuo sorgente HTML:"]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<link rel="stylesheet" href="dev-kit-italia/dist/styles.css" />
`})}),`
`,e.jsxs(i.p,{children:["Oppure, se stai usando SCSS, puoi definire il font direttamente nel tuo file SCSS, copiando l'asset ",e.jsx(i.code,{children:"VideoJS.woff"})," nella tua cartella assets/fonts dal package dev-kit-italia:"]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-scss",children:`@font-face {
  font-family: VideoJS;
  src: url('./assets/fonts/VideoJS.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
`})}),`
`,e.jsx(i.h3,{id:"plug-in-per-videojs",children:"Plug-in per Video.js"}),`
`,e.jsx(i.p,{children:"Esistono numerosi plug-in disponibili per Video.js che consentono di aggiungere nuove funzionalità, come la riproduzione di video in VR, l’analisi delle statistiche di visualizzazione del video, le utility per la UI mobile e molto altro ancora."}),`
`,e.jsxs(i.p,{children:[e.jsx(l,{children:" (Ad esempio il plugin per l'embed di Vimeo)"}),`
Se vuoi usare plug-in, includi il nome della funzione di inizializzazione dei plug-in nel componente `,e.jsx(i.code,{children:"<it-video>"})," con l'attributo  ",e.jsx(i.code,{children:"init-plugins"}),". La funzione deve essere definita nella window."]}),`
`,e.jsx(i.p,{children:"Esempio:"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<it-video ...... init-plugins="myInitPlugin"></it-video>
<script> const myInitPlugin = (videojs)=>{ /*my code*/ }<\/script>
`})}),`
`,e.jsx(i.h2,{id:"accessibilità",children:"Accessibilità"}),`
`,e.jsxs(i.p,{children:["I comandi del video player sono agevolmente accessibili alle persone che usano tecnologie assistive. Tuttavia, per rendere accessibile un contenuto video, assicurati di soddisfare i criteri di successo delle ",e.jsx(i.a,{href:"https://www.w3.org/Translations/WCAG21-it/#time-based-media",rel:"nofollow",children:"linee guida 1.2 Media temporizzati delle WCAG (versione corrente)"}),"."]}),`
`,e.jsx(i.p,{children:"In particolare:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"fornisci sempre sottotitoli (Criterio di successo 1.2.2);"}),`
`,e.jsx(i.li,{children:"fornisci una trascrizione se il contenuto è solo video oppure solo audio (Criterio di successo 1.2.1);"}),`
`,e.jsx(i.li,{children:"fornisci audio descrizioni quando sono presenti scene o contenuti non descritti dalla traccia audio primaria (Criteri di successo 1.2.3 e 1.2.5)."}),`
`]}),`
`,e.jsx(i.h2,{id:"con-trascrizione",children:"Con trascrizione"}),`
`,e.jsxs(i.p,{children:["Per aggiungere una trascrizione al video, usa il componente ",e.jsx(i.code,{children:"<it-accordion>"})," come elemento figlio del componente ",e.jsx(i.code,{children:"<it-video>"}),". All'interno dell'accordion, puoi inserire il testo della trascrizione del video."]}),`
`,e.jsxs(i.p,{children:[e.jsx(i.a,{href:"?path=/docs/componenti-accordion--documentazione",children:"Vai alla documentazione di Accordion"})," per maggiori dettagli su come utilizzarlo."]}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(i.h2,{id:"sottotitoli-didascalie-capitoli-e-descrizioni",children:"Sottotitoli, didascalie, capitoli e descrizioni"}),`
`,e.jsxs(i.p,{children:["Tramite l’attributo ",e.jsx(i.code,{children:"track"})," puoi aggiungere il testo per sottotitoli, didascalie, capitoli o descrizioni audio definito in un file testuale in formato WebVTT."]}),`
`,e.jsxs(i.p,{children:["L'attributo ",e.jsx(i.code,{children:"track"})," accetta un elenco di valori con il seguente formato, dove ogni singolo elemento rappresenta un file di sottotitoli, didascalie, capitoli o descrizioni:"]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-js",children:`[{kind:'captions', src:'https://example.com/captions.vtt', srclang:'it', label:'Italiano', default:true}, ...]
`})}),`
`,e.jsxs(i.p,{children:["In base al contenuto del file, valorizza opportunamente la proprietà ",e.jsx(i.code,{children:"kind"})," con:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"captions"}),", per i sottotitoli (trascrizione dei dialoghi);"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"subtitles"}),", per le didascalie (trascrizione dei dialoghi, degli effetti sonori, trascrizione del tipo di emozioni rappresentate dalla musica, ecc.);"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"chapters"}),", per i capitoli;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"descriptions"}),", per le descrizioni audio (testo che descrive il contenuto visivo del video, utile per le persone con disabilità visive);"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"metadata"}),", per i metadati (informazioni aggiuntive sul video, come la durata, la risoluzione, ecc.)."]}),`
`]}),`
`,e.jsxs(i.p,{children:["L'attributo ",e.jsx(i.code,{children:"default"})," indica se il file associato è quello predefinito da utilizzare quando il video viene caricato."]}),`
`,e.jsxs(i.p,{children:["Per approfondire, ",e.jsx(i.a,{href:"https://videojs.com/guides/text-tracks/",rel:"nofollow",children:"vai alla documentazione di VideoJS (Inglese)"}),"."]}),`
`,e.jsx(i.p,{children:'Di seguito un esempio d’uso delle didascalie (kind:"captions") in diverse lingue:'}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(i.h2,{id:"immagine-di-anteprima",children:"Immagine di anteprima"}),`
`,e.jsx(l,{of:a}),`
`,e.jsx(n,{of:a}),`
`,e.jsx(i.h2,{id:"streaming",children:"Streaming"}),`
`,e.jsx(l,{of:t}),`
`,e.jsx(n,{of:t}),`
`,e.jsx(i.h2,{id:"gestire-più-tracce-audio",children:"Gestire più tracce audio"}),`
`,e.jsx(l,{of:r}),`
`,e.jsx(n,{of:r}),`
`,e.jsx(i.h2,{id:"embed-da-piattaforme-terze",children:"Embed da piattaforme terze"}),`
`,e.jsx(l,{of:d}),`
`,e.jsx(n,{of:d}),`
`,e.jsx(i.h2,{id:"i18n",children:"i18n"}),`
`,e.jsx(l,{of:f})]})}function S(o={}){const{wrapper:i}={...p(),...o.components};return i?e.jsx(i,{...o,children:e.jsx(c,{...o})}):c(o)}export{S as default};

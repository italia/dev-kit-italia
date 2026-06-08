import{j as e,M as d,C as n,a as t}from"./blocks-BmJ51On6.js";import{useMDXComponents as o}from"./index-CEGOQIeq.js";import{H as c,a as l,S as h,b as p,c as m,d as u,e as x,f as j,g as r,h as g,i as v,j as b}from"./header.stories-4hKKr4GJ.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-Dq0Es6_d.js";function s(a){const i={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:c}),`
`,e.jsx(i.h1,{id:"header",children:"Header"}),`
`,e.jsx("description",{children:"Area di intestazione principale di un sito o servizio che presenta l'identità visiva e il menu di navigazione primaria"}),`
`,e.jsx(i.h2,{id:"cosa-fa",children:"Cosa fa"}),`
`,e.jsx(i.p,{children:"Permette di gestire l'intestazione principale di un sito o servizio, e gestisce automaticamente la visualizzazione mobile/desktop dell'header, mostrando o nascondendo le parti che lo compongono a seconda della dimensione dello schermo."}),`
`,e.jsx(i.p,{children:"L'header di un sito della Pubblica Amministrazione è solitamente composto da 3 elementi principali:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Slim Header"}),": una sottile fascia dello stesso colore o, preferibilmente, di colore lievemente diverso rispetto al tema principale del sito, che mostra appartenenza e alcuni link funzionali con impatto globale o esterno al sito stesso."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Header Centrale"}),": che identifica in modo chiaro il sito attraverso logo, testo e social, e può contenere un link per effettuare ricerche sul sito."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Header Nav"}),': dedicato alla navigazione, visibile su schermi di grandi dimensioni e attraverso il classico pulsante di tipo "burger menu" su dispositivi mobili.']}),`
`]}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"https://designers.italia.it/design-system/componenti/header/",rel:"nofollow",children:"Approfondisci quando e come usare il componente Header"})}),`
`,e.jsx(i.h2,{id:"anteprima-e-attributi-del-componente",children:"Anteprima e attributi del componente"}),`
`,e.jsxs(i.p,{children:["Modifica gli attributi nella tabella per personalizzare in tempo reale l'aspetto e il comportamento del componente. Per vedere come cambia il codice, clicca su ",e.jsx(i.strong,{children:"Show code"}),"."]}),`
`,e.jsx(n,{of:l}),`
`,e.jsx(t,{of:l}),`
`,e.jsx(i.h2,{id:"informazioni-generali",children:"Informazioni generali"}),`
`,e.jsxs(i.p,{children:["Non è consigliato modificare il valore dell'attributo ",e.jsx(i.code,{children:"breakpoint"})," del componente ",e.jsx(i.code,{children:"<it-header>"}),", che di default è impostato a ",e.jsx(i.code,{children:"lg"})," (992px), in quanto è stato studiato per adattarsi al meglio alla maggior parte dei siti della PA ed è coerente con le regole css di visibilità dei vari elementi che compongono l'header (es: il menu di navigazione principale è nascosto su schermi più piccoli di ",e.jsx(i.code,{children:"lg"}),`).
Se vuoi implementare un breakpoint personalizzato, assicurati di modificare anche le regole css di visibilità dei vari elementi dell'header, in modo da mantenere una coerenza tra il breakpoint di attivazione del menu mobile e la visualizzazione degli elementi che lo compongono.`]}),`
`,e.jsx(i.h2,{id:"accessibilità",children:"Accessibilità"}),`
`,e.jsx(i.p,{children:"Considerando l'importanza dell'Header per la navigazione, si ricorda di porre particolare attenzione all'utilizzo della corretta semantica HTML, alle etichette e agli attributi ARIA, oltre a validare e testare sempre con utenti il risultato."}),`
`,e.jsxs(i.p,{children:[`Il titolo del sito, "Nome dell'Istituzione" negli esempi, è contenuto in un `,e.jsx(i.code,{children:"<div>"})," generico e non un tag ",e.jsx(i.code,{children:"<h1>"})," per evitare conflitti con gli ",e.jsx(i.code,{children:"<h1>"}),` presenti nelle singole pagine.
Nel caso in cui la home page fosse priva di un titolo (es: il primo contenuto in pagina è una notizia in evidenza) si può inserire in pagina un `,e.jsx(i.code,{children:'<h1 class="visually-hidden">'})," non visibile con l'apposita classe ",e.jsx(i.code,{children:".visually-hidden"}),", in modo che sia visibile ai lettori di schermo."]}),`
`,e.jsxs(i.p,{children:["Questa soluzione sarà anche utile a dare focus direttamente al tag ",e.jsx(i.code,{children:"<h1>"})," laddove siano presenti ",e.jsx(i.a,{href:"?path=/docs/componenti-skiplinks--documentazione",children:"skiplinks"})," che permettano agli utenti che navigano da tastiera o con tecnologie assistive di saltare i contenuti dell'Header."]}),`
`,e.jsx(i.h2,{id:"slim-header",children:"Slim Header"}),`
`,e.jsx(i.p,{children:"Lo Slim Header mostra un'intestazione, solitamente con riferimento all'ente di appartenenza del progetto o riferimenti utili, oltre ad un eventuale menu per il cambio lingua e l'accesso ad area riservata."}),`
`,e.jsxs(i.p,{children:["Il cambio lingua è gestito con il componente ",e.jsx(i.code,{children:"it-dropdown"}),"."]}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(i.h3,{id:"zona-destra-con-pulsante-full-responsive",children:"Zona destra con pulsante full-responsive"}),`
`,e.jsxs(i.p,{children:["Il pulsante di ",e.jsx(i.em,{children:"action"})," situato nella zona destra dell'Header Slim (nell'elemento con classe ",e.jsx(i.code,{children:".it-header-slim-right-zone"}),"), può essere sia un link sia un pulsante di tipo ",e.jsx(i.code,{children:"<it-button>"}),"."]}),`
`,e.jsxs(i.p,{children:["Per applicargli l'aspetto ",e.jsx(i.em,{children:"full-responsive"}),", a seconda dei due casi puoi:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["se un link, applicare la classe ",e.jsx(i.code,{children:".btn-full"}),":"]}),`
`]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<a href="#" class="btn btn-primary btn-icon btn-full">
  <span class="rounded-icon">
    <it-icon name="it-user" color="primary" size="xs"></it-icon>
  </span>
  <span class="d-none d-lg-block">Accedi all'area personale</span>
</a>
`})}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["se è un componente di tipo ",e.jsx(i.code,{children:"it-button"})," aggiungere l'attributo ",e.jsx(i.code,{children:"full"}),":"]}),`
`]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<it-button variant="primary" full>
  <span class="rounded-icon">
    <it-icon name="it-user" color="primary" size="xs"></it-icon>
  </span>
  <span class="d-none d-lg-block">Accedi all'area personale</span>
</it-button>
`})}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(i.h3,{id:"versione-chiara",children:"Versione chiara"}),`
`,e.jsxs(i.p,{children:["Per cambiare tema all’Header Slim è sufficiente aggiungere la classe ",e.jsx(i.code,{children:"theme-light"})," al tag",e.jsx(i.code,{children:'<div class="it-header-slim-wrapper">'}),"."]}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(i.h2,{id:"header-centrale",children:"Header Centrale"}),`
`,e.jsx(i.p,{children:"L'Header Centrale mostra il logo dell’ente e la sua descrizione, i link aggiuntivi ai social media ed eventualmente l’accesso al motore di ricerca, se presente."}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(i.h3,{id:"versione-compatta",children:"Versione compatta"}),`
`,e.jsxs(i.p,{children:["Per utilizzare la versione più compatta in altezza dell’header centrale, puoi aggiungere la classe ",e.jsx(i.code,{children:"it-small-header"})," al tag ",e.jsx(i.code,{children:'<div class="it-header-center-wrapper">'}),"."]}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(i.h3,{id:"versione-chiara-1",children:"Versione chiara"}),`
`,e.jsxs(i.p,{children:["Per cambiare tema all’header centrale puoi aggiungere la classe ",e.jsx(i.code,{children:"theme-light"})," al tag ",e.jsx(i.code,{children:'<div class="it-header-center-wrapper">'}),"."]}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(i.h2,{id:"header-nav",children:"Header Nav"}),`
`,e.jsxs(i.p,{children:["L'Header Nav mostra il menu di navigazione principale del sito, e può essere costituito da semplici link, pulsanti con ",e.jsx(i.a,{href:"?path=/docs/componenti-dropdown--documentazione",children:"Dropdown"})," e ",e.jsx(i.a,{href:"?path=/docs/componenti-megamenu--documentazione",children:"Megamenu"}),"."]}),`
`,e.jsx(n,{of:r}),`
`,e.jsx(i.h3,{id:"temi-colore-disponibili",children:"Temi colore disponibili"}),`
`,e.jsx(i.p,{children:"I’Header Nav ha due temi colore:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["uno di default uguale al ",e.jsx(i.strong,{children:"colore primario"})," del sito"]}),`
`,e.jsx(i.li,{children:"un chiaro (“light”)"}),`
`]}),`
`,e.jsxs(i.p,{children:["Su ",e.jsx(i.strong,{children:"mobile"})," lo stile del menu è sempre uguale, indifferentemente dal tema scelto: ha un ",e.jsx(i.strong,{children:"background bianco e testi e link di colore primario"}),"."]}),`
`,e.jsxs(i.p,{children:["Per modificare il tema dell’Header Nav e impostarlo alla versione chiara, è sufficiente aggiungere la classe ",e.jsx(i.code,{children:"theme-light"})," al tag ",e.jsx(i.code,{children:'<nav class="it-header-navbar-wrapper">'}),":"]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<nav class="it-header-navbar-wrapper theme-light">...</nav>
`})}),`
`,e.jsx("br",{}),`
`,e.jsx(i.h4,{id:"header-nav-standard-default",children:"Header Nav standard (default)"}),`
`,e.jsx(n,{of:r}),`
`,e.jsx(i.h4,{id:"header-nav-desktop-chiara",children:"Header Nav desktop chiara"}),`
`,e.jsx(n,{of:g}),`
`,e.jsx(i.h3,{id:"navigazione-secondaria",children:"Navigazione secondaria"}),`
`,e.jsxs(i.p,{children:["Al menu di navigazione principale puoi aggiungere anche un menu di navigazione secondario includendo in ",e.jsx(i.code,{children:".menu-wrapper"})," una seconda lista ",e.jsx(i.code,{children:"<ul>"})," con classe ",e.jsx(i.code,{children:".navbar-nav.navbar-secondary"})," e la stessa struttura dati della lista ",e.jsx(i.code,{children:".navbar-nav"})," principale."]}),`
`,e.jsx(n,{of:v}),`
`,e.jsx(i.h2,{id:"header-completa",children:"Header Completa"}),`
`,e.jsxs(i.p,{children:["L'anteprima mostra la struttura HTML statica dell'header completo. Per abilitare la ",e.jsx(i.strong,{children:"navigazione mobile interattiva"})," (menu burger) devi wrappare l'intera struttura con il componente ",e.jsx(i.code,{children:"<it-header>"}),", che gestisce automaticamente la transizione tra layout desktop e mobile creando una modale di navigazione al di sotto del breakpoint configurato."]}),`
`,e.jsxs(i.p,{children:["La classe ",e.jsx(i.code,{children:".it-header-wrapper"})," va applicata al tag ",e.jsx(i.code,{children:"<header>"})," semantico interno a ",e.jsx(i.code,{children:"<it-header>"}),":"]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<it-header>
  <header class="it-header-wrapper">
    <!-- slim, center e navbar -->
  </header>
</it-header>
`})}),`
`,e.jsx(n,{of:l}),`
`,e.jsx(i.h3,{id:"versione-chiara-2",children:"Versione chiara"}),`
`,e.jsxs(i.p,{children:["Nella versione light è consigliabile aggiungere la classe ",e.jsx(i.code,{children:".it-shadow"})," al tag ",e.jsx(i.code,{children:'<header class="it-header-wrapper">'})," per creare un'ombra per enfatizzare l'Header rispetto alla pagina in cui è contenuto."]}),`
`,e.jsx(n,{of:b}),`
`,e.jsx(i.h3,{id:"tema-dellheader-centrale-nella-modale-mobile",children:"Tema dell'Header Centrale nella modale mobile"}),`
`,e.jsxs(i.p,{children:["Puoi usare l'attributo ",e.jsx(i.code,{children:"modal-header-theme"})," sul componente ",e.jsx(i.code,{children:"<it-header>"})," per forzare il tema della testata della modale di navigazione mobile."]}),`
`,e.jsx(i.p,{children:"Di defualt, il tema della testata della modale coincide con il tema dell'Header Centrale, ma se vuoi forzare un tema specifico indipendentemente da quello dell'Header Centrale, puoi usare questo attributo."}),`
`,e.jsx(i.p,{children:"Valori supportati:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"dark"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"light"})}),`
`]}),`
`,e.jsx(i.p,{children:"Se l'attributo non è valorizzato, il comportamento resta quello di default: il colore della testata della modale rimane coerente con il tema dell'Header Centrale."}),`
`,e.jsx(i.p,{children:"Esempio:"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<it-header modal-header-theme="dark">
  <header class="it-header-wrapper">
    <!-- slim, center e navbar -->
  </header>
</it-header>
`})}),`
`,e.jsx(i.h3,{id:"comportamento-su-mobile-sotto-il-breakpoint",children:"Comportamento su mobile (sotto il breakpoint)"}),`
`,e.jsxs(i.p,{children:["Quando la larghezza viewport scende sotto il valore di ",e.jsx(i.code,{children:"breakpoint"})," (di default ",e.jsx(i.code,{children:"991"}),"), ",e.jsx(i.code,{children:"<it-header>"})," passa dalla modalità inline a quella mobile e crea automaticamente una modale laterale (",e.jsx(i.code,{children:"it-modal"}),") che contiene una copia strutturata della navigazione."]}),`
`,e.jsxs(i.p,{children:["Durante questa transizione, il componente ",e.jsx(i.strong,{children:"clona"})," e inserisce nella modale questi elementi in questo ordine (se presenti):"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["il ",e.jsx(i.code,{children:"brand wrapper"})," (",e.jsx(i.code,{children:".it-brand-wrapper"}),") nello slot ",e.jsx(i.code,{children:"header"})," della modale (se ",e.jsx(i.code,{children:"hide-header-brand"})," non è attivo)"]}),`
`,e.jsxs(i.li,{children:["il ",e.jsx(i.code,{children:"nav"})," principale (",e.jsx(i.code,{children:".it-header-navbar-wrapper nav"}),") con tutte le liste ",e.jsx(i.code,{children:".menu-wrapper > ul"}),":",`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"prima la lista principale"}),`
`,e.jsxs(i.li,{children:["poi eventuali liste successive (es: menu secondario) a cui aggiunge la classe ",e.jsx(i.code,{children:"secondary"})]}),`
`]}),`
`]}),`
`,e.jsxs(i.li,{children:["il menu dell'Header Slim (",e.jsx(i.code,{children:".it-header-slim-wrapper ul"}),"), a cui assegna le classi ",e.jsx(i.code,{children:"secondary header-slim-menu"})]}),`
`,e.jsxs(i.li,{children:["il blocco social (",e.jsx(i.code,{children:".it-socials"}),")"]}),`
`]}),`
`,e.jsx(i.p,{children:"L'ordine finale nel menu laterale è il seguente:"}),`
`,e.jsxs(i.ol,{children:[`
`,e.jsx(i.li,{children:"header della modale con brand (se non nascosto)"}),`
`,e.jsxs(i.li,{children:["contenuto modale (",e.jsx(i.code,{children:'slot="content"'}),")"]}),`
`,e.jsxs(i.li,{children:["dentro al contenuto: ",e.jsx(i.code,{children:"nav.modal-nav"})]}),`
`,e.jsxs(i.li,{children:["dentro al ",e.jsx(i.code,{children:"nav.modal-nav"}),": liste del nav principale (in ordine), poi il menu dell'Header Slim"]}),`
`,e.jsx(i.li,{children:"in coda al contenuto: i social"}),`
`]}),`
`,e.jsx(i.p,{children:"Questo comportamento è automatico: tornando sopra breakpoint, la modale viene rimossa e l'header torna alla composizione desktop originale."}),`
`,e.jsx(i.h2,{id:"header-sticky",children:"Header Sticky"}),`
`,e.jsxs(i.p,{children:["Per rendere sticky l'header durante lo scroll della pagina, wrappa l'intera struttura con il componente ",e.jsx(i.code,{children:"<it-sticky>"}),"."]}),`
`,e.jsxs(i.p,{children:["In questo caso la classe ",e.jsx(i.code,{children:".it-header-wrapper"})," (e ",e.jsx(i.code,{children:"it-header-sticky"}),") va spostata su ",e.jsx(i.code,{children:"<it-sticky>"})," — e ",e.jsx(i.strong,{children:"non"})," sul tag ",e.jsx(i.code,{children:"<header>"})," interno:"]}),`
`,e.jsx(i.p,{children:"Ricordati di:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["aggiungere l'attributo ",e.jsx(i.code,{children:'sticky-class-name="is-sticky"'})," per applicare la classe ",e.jsx(i.code,{children:"is-sticky"})," quando l'header diventa sticky, in modo da poter gestire eventuali stili specifici per questo stato."]}),`
`,e.jsxs(i.li,{children:["aggiungere l'attributo ",e.jsx(i.code,{children:"trigger-selector"})," con l'",e.jsx(i.code,{children:"id"})," dell'",e.jsx(i.code,{children:"<it-header>"})," interno, in modo che lo sticky si attivi solo dopo che l'intero header ha superato il bordo superiore della viewport (e non immediatamente al primo pixel di scroll)."]}),`
`]}),`
`,e.jsx(i.p,{children:"Esempio:"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<it-sticky class="it-header-wrapper it-header-sticky" sticky-class-name="is-sticky" trigger-selector="#header-complete-full">
  <it-header id="header-complete-full">
    <header>
      <!-- Contenuto dell'header -->
    </header>
  </it-header>
</it-sticky>
`})}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"?path=/story/esempi-header--header-sticky",children:"Vai all'esempio per questa funzionalità"})}),`
`,e.jsxs(i.p,{children:["Per maggiori dettagli su come utilizzare il componente ",e.jsx(i.code,{children:"it-sticky"})," e le sue funzionalità, consulta la ",e.jsx(i.a,{href:"?path=/docs/componenti-sticky--documentazione",children:"documentazione dedicata"}),"."]})]})}function w(a={}){const{wrapper:i}={...o(),...a.components};return i?e.jsx(i,{...a,children:e.jsx(s,{...a})}):s(a)}export{w as default};

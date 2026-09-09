import{j as e,M as d,C as n,a as t}from"./blocks-CRFIrLVd.js";import{useMDXComponents as o}from"./index--O4jdOk5.js";import{H as c,a as l,S as h,b as p,c as m,d as u,e as x,f as j,g as r,h as g,i as v,j as z}from"./header.stories-_j2ZLVoV.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-CPP02t7X.js";function s(a){const i={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:c}),`
`,e.jsx(i.h1,{id:"header",children:"Header"}),`
`,e.jsx("description",{children:"Area di intestazione principale di un sito o servizio che presenta l'identità visiva e il menu di navigazione primaria."}),`
`,e.jsx(i.h2,{id:"cosa-fa",children:"Cosa fa"}),`
`,e.jsx(i.p,{children:"Il componente Header rappresenta l'intestazione principale di un sito o servizio. Ospita gli elementi di identità visiva e gli strumenti di navigazione che consentono agli utenti di orientarsi e riconoscere il servizio."}),`
`,e.jsx(i.p,{children:"Un header è composto da 3 elementi principali, che vengono mostrati o nascosti a seconda della dimensione dello schermo:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Slim header"}),", una fascia sottile di colore lievemente diverso rispetto al tema principale del sito, che può contenere link secondari, la funzionalità di cambio lingua e il pulsante di accesso a un'area riservata;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Header centrale"}),", raccoglie gli elementi identificativi del sito o servizio, come il logo e il titolo, oltre ai collegamenti ai social media e alla funzionalità di ricerca;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Header nav"}),", contiene le voci di navigazione interna al sito e viene sostituito da un burger menu su dispositivi mobili."]}),`
`]}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"https://designers.italia.it/design-system/componenti/header/",rel:"nofollow",children:"Approfondisci quando e come usare il componente Header"})}),`
`,e.jsx(i.h2,{id:"anteprima-e-attributi-del-componente",children:"Anteprima e attributi del componente"}),`
`,e.jsxs(i.p,{children:["Modifica gli attributi nella tabella per personalizzare in tempo reale l'aspetto e il comportamento del componente. Per vedere come cambia il codice, clicca su ",e.jsx(i.strong,{children:"Show code"}),"."]}),`
`,e.jsx(n,{of:l}),`
`,e.jsx(t,{of:l}),`
`,e.jsx(i.h2,{id:"informazioni-generali",children:"Informazioni generali"}),`
`,e.jsxs(i.p,{children:["L'attributo ",e.jsx(i.code,{children:"breakpoint"})," del componente ",e.jsx(i.code,{children:"<it-header>"})," ha come valore predefinito ",e.jsx(i.code,{children:"lg"})," (992px). Mantieni questo valore per garantire un comportamento ottimale nella maggior parte dei siti della Pubblica Amministrazione e per preservare la coerenza con le regole CSS che gestiscono la visibilità degli elementi dell'header. Con una larghezza dello schermo inferiore a ",e.jsx(i.code,{children:"lg"}),", l'header nasconde il menu di navigazione principale e utilizza la navigazione mobile."]}),`
`,e.jsx(i.p,{children:"Se vuoi implementare un breakpoint personalizzato, assicurati di modificare anche le regole css di visibilità dei vari elementi dell'header. In questo modo manterrai coerenza tra il breakpoint di attivazione del menu mobile e la visualizzazione degli elementi che lo compongono."}),`
`,e.jsx(i.h2,{id:"accessibilità",children:"Accessibilità"}),`
`,e.jsx(i.p,{children:"L'header è un elemento fondamentale per la navigazione: presta particolare attenzione alla corretta semantica HTML, all'utilizzo delle etichette e degli attributi ARIA. Valida e testa sempre con gli utenti la soluzione adottata."}),`
`,e.jsxs(i.p,{children:[`Il titolo del sito, indicato come "Nome dell'Istituzione" negli esempi, è contenuto in un elemento `,e.jsx(i.code,{children:"<div>"})," generico e non in un tag ",e.jsx(i.code,{children:"<h1>"}),", per evitare conflitti con gli ",e.jsx(i.code,{children:"<h1>"})," presenti nelle singole pagine."]}),`
`,e.jsxs(i.p,{children:["Se la homepage non presenta un titolo (ad esempio, quando il primo contenuto della pagina è una notizia in evidenza), inserisci un ",e.jsx(i.code,{children:'<h1 class="visually-hidden">'})," nascosto visivamente tramite la classe ",e.jsx(i.code,{children:".visually-hidden"}),", così da renderlo disponibile ai lettori di schermo. Questa soluzione consente agli utenti che navigano da tastiera o tramite tecnologie assistive di raggiungere direttamente il titolo della pagina attraverso gli ",e.jsx(i.a,{href:"?path=/docs/componenti-skiplinks--documentazione",children:"skiplinks"}),", evitando di dover attraversare i contenuti dell'Header."]}),`
`,e.jsx(i.h2,{id:"slim-header",children:"Slim header"}),`
`,e.jsx(i.p,{children:"Lo Slim header mostra un'intestazione, solitamente l'indicazione dell'ente di appartenenza del progetto, un eventuale menu per il cambio lingua e il pulsante di accesso all'area riservata."}),`
`,e.jsxs(i.p,{children:["Il cambio lingua è gestito con il componente ",e.jsx(i.code,{children:"it-dropdown"}),"."]}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(i.h3,{id:"zona-destra-con-pulsante-full-responsive",children:"Zona destra con pulsante full-responsive"}),`
`,e.jsxs(i.p,{children:["Il pulsante è situato nella zona destra dello Slim header, nell'elemento con classe ",e.jsx(i.code,{children:".it-header-slim-right-zone"}),". Può essere sia un link che un pulsante di tipo ",e.jsx(i.code,{children:"<it-button>"}),"."]}),`
`,e.jsxs(i.p,{children:["Per ottenere l'aspetto ",e.jsx(i.em,{children:"full-responsive"}),":"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["se è un link, applica la classe ",e.jsx(i.code,{children:".btn-full"}),";"]}),`
`]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<a href="#" class="btn btn-primary btn-icon btn-full">
  <span class="rounded-icon">
    <it-icon name="it-user" color="primary" size="xs"></it-icon>
  </span>
  <span class="d-none d-lg-block">Accedi all'area personale</span>
</a>
`})}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["se è un componente di tipo ",e.jsx(i.code,{children:"it-button"}),", aggiungi l'attributo ",e.jsx(i.code,{children:"full"}),"."]}),`
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
`,e.jsxs(i.p,{children:["Per cambiare tema allo Slim header, aggiungi la classe ",e.jsx(i.code,{children:"theme-light"})," al tag",e.jsx(i.code,{children:'<div class="it-header-slim-wrapper">'}),"."]}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(i.h2,{id:"header-centrale",children:"Header centrale"}),`
`,e.jsx(i.p,{children:"L'Header centrale mostra il logo dell’ente e la sua intestazione, i link ai social media e l'icona per aprire la funzionalità di ricerca, se presente."}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(i.h3,{id:"versione-compatta",children:"Versione compatta"}),`
`,e.jsxs(i.p,{children:["Per utilizzare la versione più compatta in altezza dell’Header centrale, aggiungi la classe ",e.jsx(i.code,{children:"it-small-header"})," al tag ",e.jsx(i.code,{children:'<div class="it-header-center-wrapper">'}),"."]}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(i.h3,{id:"versione-chiara-1",children:"Versione chiara"}),`
`,e.jsxs(i.p,{children:["Per cambiare tema all’Header centrale, aggiungi la classe ",e.jsx(i.code,{children:"theme-light"})," al tag ",e.jsx(i.code,{children:'<div class="it-header-center-wrapper">'}),"."]}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(i.h2,{id:"header-navigazione",children:"Header navigazione"}),`
`,e.jsxs(i.p,{children:["L'Header navigazione contiene il menu di navigazione principale del sito. Può includere semplici link oppure pulsanti con ",e.jsx(i.a,{href:"?path=/docs/componenti-dropdown--documentazione",children:"Dropdown"})," e ",e.jsx(i.a,{href:"?path=/docs/componenti-megamenu--documentazione",children:"Megamenu"}),"."]}),`
`,e.jsx(n,{of:r}),`
`,e.jsx(i.h3,{id:"temi-colore-disponibili",children:"Temi colore disponibili"}),`
`,e.jsx(i.p,{children:"L’Header navigazione ha due temi colore:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["uno di default uguale al ",e.jsx(i.strong,{children:"colore primario"})," del sito;"]}),`
`,e.jsx(i.li,{children:"uno chiaro (“light”)."}),`
`]}),`
`,e.jsxs(i.p,{children:["Su ",e.jsx(i.strong,{children:"mobile"})," lo stile del menu è sempre uguale, indipendentemente dal tema scelto: ha un ",e.jsx(i.strong,{children:"background bianco e testi e link di colore primario"}),"."]}),`
`,e.jsxs(i.p,{children:["Per modificare il tema dell’Header navigazione e impostarlo alla versione chiara, aggiungi la classe ",e.jsx(i.code,{children:"theme-light"})," al tag ",e.jsx(i.code,{children:'<nav class="it-header-navbar-wrapper">'}),":"]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<nav class="it-header-navbar-wrapper theme-light">...</nav>
`})}),`
`,e.jsx("br",{}),`
`,e.jsx(i.h4,{id:"header-navigazione-standard-default",children:"Header navigazione standard (default)"}),`
`,e.jsx(n,{of:r}),`
`,e.jsx(i.h4,{id:"header-navigazione-desktop-chiaro",children:"Header navigazione desktop chiaro"}),`
`,e.jsx(n,{of:g}),`
`,e.jsx(i.h3,{id:"navigazione-secondaria",children:"Navigazione secondaria"}),`
`,e.jsxs(i.p,{children:["Per aggiungere un menu di navigazione secondaria, includi in ",e.jsx(i.code,{children:".menu-wrapper"})," una seconda lista ",e.jsx(i.code,{children:"<ul>"})," con classe ",e.jsx(i.code,{children:".navbar-nav.navbar-secondary"})," e la stessa struttura dati della lista ",e.jsx(i.code,{children:".navbar-nav"})," principale."]}),`
`,e.jsx(n,{of:v}),`
`,e.jsx(i.h2,{id:"header-completa",children:"Header completa"}),`
`,e.jsxs(i.p,{children:["L'anteprima mostra la struttura HTML statica dell'header completo. Per abilitare la ",e.jsx(i.strong,{children:"navigazione mobile interattiva"})," (menu burger), racchiudi l'intera struttura nel componente ",e.jsx(i.code,{children:"<it-header>"}),". Il componente gestisce automaticamente la transizione tra il layout desktop e quello mobile, creando una modale di navigazione quando si raggiunge il breakpoint configurato."]}),`
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
`,e.jsx(n,{of:z}),`
`,e.jsx(i.h3,{id:"tema-della-modale-mobile",children:"Tema della modale mobile"}),`
`,e.jsxs(i.p,{children:["Di default, la testata della modale utilizza lo stesso tema dell'Header centrale. Se vuoi impostare un tema specifico, usa l'attributo ",e.jsx(i.code,{children:"modal-header-theme"})," sul componente ",e.jsx(i.code,{children:"<it-header>"})," con il valore ",e.jsx(i.code,{children:"dark"})," o ",e.jsx(i.code,{children:"light"}),"."]}),`
`,e.jsx(i.p,{children:"Esempio:"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<it-header modal-header-theme="dark">
  <header class="it-header-wrapper">
    <!-- slim, center e navbar -->
  </header>
</it-header>
`})}),`
`,e.jsx(i.h3,{id:"comportamento-su-mobile-sotto-il-breakpoint",children:"Comportamento su mobile (sotto il breakpoint)"}),`
`,e.jsxs(i.p,{children:["Quando la larghezza viewport scende sotto il valore di ",e.jsx(i.code,{children:"breakpoint"})," predefinito, ",e.jsx(i.code,{children:"<it-header>"})," passa dalla modalità inline a quella mobile e crea automaticamente una modale laterale (",e.jsx(i.code,{children:"it-modal"}),") che contiene una copia strutturata della navigazione."]}),`
`,e.jsx(i.p,{children:"Durante la transizione, il componente clona e inserisce nella modale i seguenti elementi (se presenti) in ordine:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["il ",e.jsx(i.code,{children:"brand wrapper"})," (",e.jsx(i.code,{children:".it-brand-wrapper"}),") nello slot ",e.jsx(i.code,{children:"header"})," della modale (se ",e.jsx(i.code,{children:"hide-header-brand"})," non è attivo);"]}),`
`,e.jsxs(i.li,{children:["il ",e.jsx(i.code,{children:"nav"})," principale (",e.jsx(i.code,{children:".it-header-navbar-wrapper nav"}),") con tutte le liste ",e.jsx(i.code,{children:".menu-wrapper > ul"}),":",`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"prima la lista principale;"}),`
`,e.jsxs(i.li,{children:["poi eventuali liste successive (es: menu secondario) a cui aggiunge la classe ",e.jsx(i.code,{children:"secondary"}),"."]}),`
`]}),`
`]}),`
`,e.jsxs(i.li,{children:["il menu dello Slim header (",e.jsx(i.code,{children:".it-header-slim-wrapper ul"}),"), a cui assegna le classi ",e.jsx(i.code,{children:"secondary header-slim-menu"}),";"]}),`
`,e.jsxs(i.li,{children:["il blocco social (",e.jsx(i.code,{children:".it-socials"}),")."]}),`
`]}),`
`,e.jsx(i.p,{children:"Nel menu mobile quindi gli elementi sono ordinati in questo modo:"}),`
`,e.jsxs(i.ol,{children:[`
`,e.jsx(i.li,{children:"header della modale con brand (se non nascosto);"}),`
`,e.jsxs(i.li,{children:["contenuto modale (",e.jsx(i.code,{children:'slot="content"'}),");"]}),`
`,e.jsxs(i.li,{children:["dentro al contenuto: ",e.jsx(i.code,{children:"nav.modal-nav"}),";"]}),`
`,e.jsxs(i.li,{children:["dentro al ",e.jsx(i.code,{children:"nav.modal-nav"}),": liste del nav principale (in ordine), poi il menu dello Slim header;"]}),`
`,e.jsx(i.li,{children:"in coda al contenuto, i social."}),`
`]}),`
`,e.jsxs(i.p,{children:["Quando la viewport supera la dimensione prevista dall'attributo ",e.jsx(i.code,{children:"breakpoint"}),", la modale viene rimossa."]}),`
`,e.jsx(i.h2,{id:"header-sticky",children:"Header sticky"}),`
`,e.jsxs(i.p,{children:["Per rendere sticky l'header durante lo scroll della pagina, racchiudi l'intera struttura con il componente ",e.jsx(i.code,{children:"<it-sticky>"}),"."]}),`
`,e.jsxs(i.p,{children:["In questo caso, sposta le classi ",e.jsx(i.code,{children:".it-header-wrapper"})," e ",e.jsx(i.code,{children:"it-header-sticky"})," su ",e.jsx(i.code,{children:"<it-sticky>"}),", e ",e.jsx(i.strong,{children:"non"})," sul tag ",e.jsx(i.code,{children:"<header>"})," interno."]}),`
`,e.jsx(i.p,{children:"Ricordati di:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["aggiungere l'attributo ",e.jsx(i.code,{children:'sticky-class-name="is-sticky"'})," per applicare la classe ",e.jsx(i.code,{children:"is-sticky"})," quando l'header diventa sticky, in modo da poter gestire eventuali stili specifici per questo stato;"]}),`
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
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"?path=/story/esempi-header--header-sticky",children:"Consulta un esempio di questa funzionalità"})}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"?path=/docs/componenti-sticky--documentazione",children:"Approfondisci le specifiche del componente Sticky"})})]})}function w(a={}){const{wrapper:i}={...o(),...a.components};return i?e.jsx(i,{...a,children:e.jsx(s,{...a})}):s(a)}export{w as default};

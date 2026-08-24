import{j as e,M as r,C as n,a as l}from"./blocks-CiljGaP5.js";import{useMDXComponents as o}from"./index-dC3epPjb.js";import{A as c,E as t,a as d,b as p,c as h,d as u,e as x,C as j,f as m,G as v,g,h as z,i as f,j as b,k as A}from"./it-avatar.stories-Nf67p8wa.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-BIx49rSp.js";function s(a){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:c}),`
`,e.jsx(i.h1,{id:"avatar",children:"Avatar"}),`
`,e.jsx("description",{children:"Rappresentazione grafica di un utente per identificare visivamente la persona online"}),`
`,e.jsx(i.h2,{id:"cosa-fa",children:"Cosa fa"}),`
`,e.jsxs(i.p,{children:["Il componente Avatar (",e.jsx(i.code,{children:"it-avatar"}),") permette di rappresentare una persona, il suo stato e le sue azioni in contesti di interazione."]}),`
`,e.jsx(i.p,{children:"Può essere utile, ad esempio, per indicare l'autore di un testo, il proprio profilo in un'area riservata e le persone che hanno interagito con un contenuto."}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"https://designers.italia.it/design-system/componenti/avatar/",rel:"nofollow",children:"Approfondisci come e quando usare il componente Avatar"})}),`
`,e.jsx(i.h2,{id:"anteprima-e-attributi-del-componente",children:"Anteprima e attributi del componente"}),`
`,e.jsxs(i.p,{children:["Modifica gli attributi nella tabella per personalizzare in tempo reale l'aspetto e il comportamento del componente. Per vedere come cambia il codice, clicca su ",e.jsx(i.strong,{children:"Show code"}),"."]}),`
`,e.jsx(n,{of:t}),`
`,e.jsx(l,{of:t}),`
`,e.jsx(i.h2,{id:"accessibilità",children:"Accessibilità"}),`
`,e.jsx(i.p,{children:"Il componente Avatar implementa automaticamente le seguenti caratteristiche di accessibilità:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"supporto attributi ARIA;"}),`
`,e.jsx(i.li,{children:"gestione di testo alternativo per immagini;"}),`
`,e.jsx(i.li,{children:"stato e presenza comunicati tramite attributi;"}),`
`,e.jsx(i.li,{children:"testo per screen reader nelle varianti testuali e icona."}),`
`]}),`
`,e.jsx(i.h2,{id:"avatar-con-immagine",children:"Avatar con immagine"}),`
`,e.jsxs(i.p,{children:[`Il componente Avatar ridimensiona automaticamente l'immagine adattandola al formato circolare e centrandola. Ti consigliamo in ogni caso di usare immagini delle dimensioni corrette.
`,e.jsx("div",{class:"callout callout-success",children:e.jsxs("div",{class:"callout-inner",children:[e.jsx("div",{class:"callout-title",children:e.jsx("span",{class:"text",children:"Accessibilità delle immagini"})}),`
`,e.jsxs("p",{children:["Per ragioni di accessibilità, inserisci il nome dell'utente associato all'avatar all'interno dell'attributo ",e.jsx(i.code,{children:"alt"})," dell'immagine."]})]})})]}),`
`,e.jsx(n,{of:d}),`
`,e.jsx(i.h2,{id:"avatar-con-testo",children:"Avatar con testo"}),`
`,e.jsxs(i.p,{children:["La versione con testo contiene le iniziali dell'utente (una sola nel caso delle dimensioni ",e.jsx(i.code,{children:"xs"})," e ",e.jsx(i.code,{children:"sm"}),")."]}),`
`,e.jsx(i.p,{children:"Oltre ai colori di default, puoi utilizzare uno sfondo a scelta fra:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"primario"}),", aggiungendo l'attributo ",e.jsx(i.code,{children:'variant="primary"'}),";"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"secondario"}),", aggiungendo l'attributo ",e.jsx(i.code,{children:'variant="secondary"'}),"."]}),`
`]}),`
`,e.jsx(i.p,{children:"In questi casi il testo sarà di colore bianco."}),`
`,e.jsxs(i.p,{children:["Un avatar con testo conterrà uno ",e.jsx(i.code,{children:'<span class="visually-hidden">Nome Utente</span>'})," contenente il nome dell'utente, utile alle tecnologie assistive."]}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(i.h2,{id:"avatar-con-icona",children:"Avatar con icona"}),`
`,e.jsxs(i.p,{children:["Per mostrare un'icona all'interno di un avatar, usa l'attributo ",e.jsx(i.code,{children:"icon"})," valorizzato con il nome dell'icona scelta dalla ",e.jsx(i.a,{href:"https://designers.italia.it/design-system/fondamenti/iconografia/",rel:"nofollow",children:"libreria icone"}),". Puoi cambiare il colore del'icona usando una delle classi disponibili."]}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(i.h2,{id:"avatar-con-link",children:"Avatar con link"}),`
`,e.jsxs(i.p,{children:["Per associare un avatar a un'azione o un link, usa l'attributo ",e.jsx(i.code,{children:"href"})," con relativo link o chiamata JavaScript."]}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(i.h2,{id:"avatar-link-con-tooltip",children:"Avatar link con tooltip"}),`
`,e.jsxs(i.p,{children:["È possibile associare un tooltip con maggiori informazioni relative all'utente o all'azione associata utilizzando il ",e.jsx(i.a,{href:"/docs/componenti-tooltip--documentazione",children:"componente tooltip"}),"."]}),`
`,e.jsxs(i.p,{children:["Per farlo, avvolgi l'avatar in un componente ",e.jsx(i.code,{children:"it-tooltip"}),": inserisci l'avatar nello slot ",e.jsx(i.code,{children:"trigger"})," e il testo del tooltip nello slot ",e.jsx(i.code,{children:"content"}),"."]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<it-tooltip placement="left">
	<it-avatar slot="trigger" src="..." alt="Anna Barbieri" href="#" avatar-title="Anna Barbieri"></it-avatar>
	<span slot="content"><strong>Anna Barbieri</strong><br /><em>Amministratore</em></span>
</it-tooltip>
`})}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(i.h2,{id:"presenza-utente",children:"Presenza utente"}),`
`,e.jsxs(i.p,{children:["Per aggiungere l'indicatore di presenza dell'utente a un avatar, usa l'attributo ",e.jsx(i.code,{children:"presence"}),":"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"stato attivo"}),", con l'attributo ",e.jsx(i.code,{children:'presence="active"'}),";"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"stato non disponibile"}),", con l'attributo ",e.jsx(i.code,{children:'presence="busy"'}),";"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"stato invisibile"}),", con l'attributo ",e.jsx(i.code,{children:'presence="hidden"'}),"."]}),`
`]}),`
`,e.jsx(i.h3,{id:"personalizzazione-con-slot",children:"Personalizzazione con slot"}),`
`,e.jsxs(i.p,{children:[`Puoi personalizzare il componente con stili o contenuti differenti tramite gli slot.
`,e.jsx("div",{class:"callout callout-success",children:e.jsxs("div",{class:"callout-inner",children:[e.jsx("div",{class:"callout-title",children:e.jsx("span",{class:"text",children:"Accessibilità"})}),`
`,e.jsxs("p",{children:["Ricordarti di includere sempre il testo per i lettori di schermo con ",e.jsx(i.code,{children:'<span class="visually-hidden">'})," in caso di  personalizzazione."]})]})})]}),`
`,e.jsxs(i.p,{children:["Per personalizzare l'indicatore di presenza usa lo ",e.jsx(i.strong,{children:e.jsx(i.code,{children:'slot="presence"'})}),":"]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<it-avatar text="Nome Utente" presence="active">
	<span slot="presence" class="custom-presence-indicator">
		<it-icon name="it-check"></it-icon>
		<span class="visually-hidden">Utente online</span>
	</span>
</it-avatar>
`})}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-css",children:`.custom-presence-indicator {
	position: absolute;
	bottom: 0;
	right: 0;
	/* altri stili personalizzati */
}
`})}),`
`,e.jsxs(i.p,{children:["Le traduzioni dei nomi degli stati sono gestite automaticamente tramite il ",e.jsx(i.a,{href:"/docs/i18n-internazionalizzazione--documentazione",children:"sistema @italia/i18n"}),"."]}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(i.h2,{id:"status-utente",children:"Status utente"}),`
`,e.jsxs(i.p,{children:["Per aggiungere l'indicatore di stato dell'account a un avatar, usa l'attributo ",e.jsx(i.code,{children:"status"}),":"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"stato approvato"}),", con l'attributo ",e.jsx(i.code,{children:'status="approved"'}),";"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"stato respinto"}),", con l'attributo ",e.jsx(i.code,{children:'status="declined"'}),";"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"stato notifica"}),", con l'attributo ",e.jsx(i.code,{children:'status="notify"'}),"."]}),`
`]}),`
`,e.jsx(i.h3,{id:"personalizzazione-con-slot-1",children:"Personalizzazione con slot"}),`
`,e.jsxs(i.p,{children:[`Puoi personalizzare il componente con stili o contenuti differenti tramite gli slot.
`,e.jsx("div",{class:"callout callout-success",children:e.jsxs("div",{class:"callout-inner",children:[e.jsx("div",{class:"callout-title",children:e.jsx("span",{class:"text",children:"Accessibilità"})}),`
`,e.jsxs("p",{children:["Ricordarti di includere sempre il testo per i lettori di schermo con ",e.jsx(i.code,{children:'<span class="visually-hidden">'})," in caso di personalizzazione."]})]})})]}),`
`,e.jsxs(i.p,{children:["Per personalizzare l'indicatore di stato usa lo ",e.jsx(i.strong,{children:e.jsx(i.code,{children:'slot="status"'})}),":"]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<it-avatar text="Nome Utente" status="approved">
	<span slot="status" class="custom-status-indicator">
		<it-icon name="it-check-circle"></it-icon>
		<span class="visually-hidden">Account verificato</span>
	</span>
</it-avatar>
`})}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-css",children:`.custom-status-indicator {
	position: absolute;
	top: -5px;
	right: -5px;
	/* altri stili personalizzati */
}
`})}),`
`,e.jsxs(i.p,{children:["Le traduzioni sono gestite automaticamente tramite il ",e.jsx(i.a,{href:"/docs/i18n-internazionalizzazione--documentazione",children:"sistema @italia/i18n"}),"."]}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(i.h2,{id:"gruppi-di-avatar---liste-verticali",children:"Gruppi di avatar - Liste verticali"}),`
`,e.jsxs(i.p,{children:["Per ottenere una lista verticale con avatar affiancati da link e testi, aggiungi la classe ",e.jsx(i.code,{children:".avatar-group"})," al componente."]}),`
`,e.jsxs(i.p,{children:["All'interno della lista puoi usare avatar di dimensione ",e.jsx(i.code,{children:"sm"})," o ",e.jsx(i.code,{children:"md"}),"."]}),`
`,e.jsx(n,{of:v}),`
`,e.jsx(i.h2,{id:"gruppi-di-avatar---liste-verticali-con-testo-aggiuntivo",children:"Gruppi di avatar - Liste verticali con testo aggiuntivo"}),`
`,e.jsxs(i.p,{children:["Per combinare le liste verticali con avatar che includono testo aggiuntivo, usa lo slot ",e.jsx(i.code,{children:"extra-text"}),"."]}),`
`,e.jsx(i.p,{children:"Questa impostazione è particolarmente utile per creare liste di utenti con informazioni aggiuntive come ruoli, date o descrizioni."}),`
`,e.jsx(n,{of:g}),`
`,e.jsx(i.h2,{id:"gruppi-di-avatar---avatar-sovrapposti",children:"Gruppi di avatar - Avatar Sovrapposti"}),`
`,e.jsxs(i.p,{children:["Per visualizzare una lista orizzontale di avatar parzialmente sovrapposti, racchiudili in una lista di tipo ",e.jsx(i.code,{children:"<ul>"})," con classe ",e.jsx(i.code,{children:".avatar-group-stacked"}),". In questo tipo di gruppo puoi anche inserire dei dropdown per racchiudere ulteriori elementi avatar."]}),`
`,e.jsxs(i.p,{children:["Puoi utilizzare avatar di dimensione ",e.jsx(i.code,{children:"sm"})," o ",e.jsx(i.code,{children:"md"})," all'interno della lista."]}),`
`,e.jsxs(i.p,{children:["Per mostrare ulteriori avatar in un menu a discesa, usa ",e.jsx(i.code,{children:"it-avatar"})," con ",e.jsx(i.code,{children:'type="dropdown"'}),"."]}),`
`,e.jsx(i.p,{children:"L'avatar dropdown eredita automaticamente la dimensione dal gruppo e può contenere una lista di avatar con nomi nel menu."}),`
`,e.jsx("div",{class:"callout callout-success",children:e.jsxs("div",{class:"callout-inner",children:[e.jsx("div",{class:"callout-title",children:e.jsx("span",{class:"text",children:"Accessibilità del dropdown"})}),`
`,e.jsxs("p",{children:["Usa l'attributo ",e.jsx(i.code,{children:"it-aria-label"})," sul componente ",e.jsx(i.code,{children:"it-dropdown"})," per fornire una descrizione completa agli screen reader. L'aria-label deve contenere sia il testo visibile che la sua spiegazione, ad esempio: ",e.jsx(i.code,{children:'it-aria-label="Visualizza altri 4 utenti"'}),". In questo modo uno screen reader leggerà l'intera descrizione fornendo il contesto completo all'utente."]})]})}),`
`,e.jsx(n,{of:z}),`
`,e.jsx(i.h3,{id:"avatar-sovrapposti---varianti-di-dimensione",children:"Avatar sovrapposti - varianti di dimensione"}),`
`,e.jsx(i.p,{children:"Hai a disposizione due varianti di dimensione per gli avatar sovrapposti all'interno del gruppo:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"piccola (sm)"}),", utilizzando avatar di dimensione ",e.jsx(i.code,{children:"sm"}),";"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"media (md)"}),"; utilizzando avatar di dimensione ",e.jsx(i.code,{children:"md"}),"."]}),`
`]}),`
`,e.jsx(n,{of:f}),`
`,e.jsx(n,{of:b}),`
`,e.jsx(i.h2,{id:"avatar-con-testo-aggiuntivo",children:"Avatar con testo aggiuntivo"}),`
`,e.jsxs(i.p,{children:["Per ottenere una versione del componente con nome esteso ed eventuale testo accessorio, usa lo slot ",e.jsx(i.code,{children:"extra-text"}),"."]}),`
`,e.jsxs(i.p,{children:["Per il nome puoi usare i tag ",e.jsx(i.code,{children:"<h3>"})," o ",e.jsx(i.code,{children:"<h4>"})," tramite lo slot. Per il testo esteso puoi usare un ",e.jsx(i.code,{children:"<p>"})," o un tag ",e.jsx(i.code,{children:"<time>"})," nel caso di date/orari."]}),`
`,e.jsx(n,{of:A}),`
`,e.jsx(i.h2,{id:"personalizzazione-degli-stili",children:"Personalizzazione degli stili"}),`
`,e.jsxs(i.p,{children:["Per personalizzare gli stili, puoi usare il selettore ",e.jsx(i.code,{children:"::part"})," passando il valore ",e.jsx(i.code,{children:"avatar"}),"."]}),`
`,e.jsx(i.p,{children:"Altri valori disponibili per il selettore part per i vari slot esposti dal componente sono:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"presence"}),", target dello slot dell'indicatore di presenza;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"status"}),", target dello slot dell'indicatore di stato;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"extra-text"}),", target dello slot dell'testo aggiuntivo."]}),`
`]}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"/docs/personalizzazione-degli-stili--documentazione#selettore-part",children:"Vai alla guida sul selettore part"})})]})}function I(a={}){const{wrapper:i}={...o(),...a.components};return i?e.jsx(i,{...a,children:e.jsx(s,{...a})}):s(a)}export{I as default};

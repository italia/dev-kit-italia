import{j as e,M as s,C as n,a as t}from"./blocks-eb9HL6DI.js";import{useMDXComponents as l}from"./index-BhVOkJfz.js";import{S as d,E as o,a as c,b as p,C as u,c as h,d as x,e as j,M as m,f as g,g as v,D as z,P as f,L as b,h as C,B as P,i as w,j as q,k,I as U,A,l as I,m as L,n as S,o as y,p as M,q as D,r as N}from"./it-card.stories-kV4kdiIE.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-CwKCcALr.js";function r(a){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:d}),`
`,e.jsx(i.h1,{id:"card",children:"Card"}),`
`,e.jsx("description",{children:"Aiutano a presentare un gruppo di contenuti correlati, come articoli o sezioni di un sito web e permettono di continuare la navigazione verso le rispettive pagine di dettaglio."}),`
`,e.jsx(i.h2,{id:"cosa-fa",children:"Cosa fa"}),`
`,e.jsxs(i.p,{children:["Il componente Card (",e.jsx(i.code,{children:"it-card"}),") organizza e presenta contenuti strutturati in modo coerente, offrendo un contenitore flessibile e adattabile a diversi contesti e necessità."]}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"https://designers.italia.it/design-system/componenti/card/",rel:"nofollow",children:"Approfondisci come e quando usare il componente Card"})}),`
`,e.jsx(i.h2,{id:"anteprima-e-attributi-del-componente",children:"Anteprima e attributi del componente"}),`
`,e.jsxs(i.p,{children:["Modifica gli attributi nella tabella per personalizzare in tempo reale l'aspetto e il comportamento del componente. Per vedere come cambia il codice, clicca su ",e.jsx(i.strong,{children:"Show code"}),"."]}),`
`,e.jsx(n,{of:o}),`
`,e.jsx(t,{of:o}),`
`,e.jsx(i.h2,{id:"indicazioni-generali",children:"Indicazioni generali"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Rendi la card cliccabile, collegandola a una pagina che approfondisce le informazioni."}),`
`,e.jsx(i.li,{children:"Includi contenuti unici in ogni card, evitando di ripetere informazioni presenti già in altre."}),`
`,e.jsx(i.li,{children:"Non usare le card a semplice scopo decorativo."}),`
`,e.jsx(i.li,{children:"Scrivi titoli concisi che invoglino a approfondire e usa la descrizione per contenuti secondari."}),`
`,e.jsx(i.li,{children:"Scegli immagini della dimensione corretta, assicurandoti che si visualizzino bene su qualsiasi dispositivo."}),`
`]}),`
`,e.jsx(i.h2,{id:"accessibilità",children:"Accessibilità"}),`
`,e.jsx(i.p,{children:"Il componente implementa automaticamente diverse caratteristiche per garantire l'accessibilità, ma è importante che anche i contenuti inseriti nelle card siano accessibili."}),`
`,e.jsx(i.h3,{id:"metadati-e-contenuti-descrittivi",children:"Metadati e contenuti descrittivi"}),`
`,e.jsx(i.p,{children:"Per migliorare la comprensione dei metadati da parte delle tecnologie assistive:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["aggiungi testi descrittivi nascosti (ad esempio, “Categoria correlata: “, “Argomento correlato: “) con ",e.jsx(i.code,{children:".visually-hidden"})," o ",e.jsx(i.code,{children:"aria-label"}),";"]}),`
`,e.jsxs(i.li,{children:["valuta attentamente se le liste di elementi (come contenuti affini, link secondari o più card) abbiano bisogno di etichette ",e.jsx(i.code,{children:"aria-label"})," o ",e.jsx(i.code,{children:"aria-labelledby"})," per descriverne le finalità."]}),`
`]}),`
`,e.jsx(i.h3,{id:"icone-e-contenuti-visivi",children:"Icone e contenuti visivi"}),`
`,e.jsxs(i.p,{children:["Imposta le ",e.jsx(i.strong,{children:"icone"})," in base al ruolo semantico:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["se sono ",e.jsx(i.strong,{children:"decorative"})," (il significato è già chiaro dal contesto testuale), usa ",e.jsx(i.code,{children:'aria-hidden="true"'}),";"]}),`
`,e.jsxs(i.li,{children:["se sono ",e.jsx(i.strong,{children:"informative"})," (comunicano informazioni aggiuntive, come il tipo di file o la presenza di un link esterno), aggiungi testo nascosto con ",e.jsx(i.code,{children:'<span class="visually-hidden">'})," che descriva l'informazione se non già veicolata diversamente;"]}),`
`,e.jsxs(i.li,{children:["se sono ",e.jsx(i.strong,{children:"funzionali"})," (indicano un'azione o stato), assicurati che il significato sia comunicato anche testualmente."]}),`
`]}),`
`,e.jsxs(i.p,{children:["Per le ",e.jsx(i.strong,{children:"immagini"}),", usa l'attributo ",e.jsx(i.code,{children:"alt"}),":"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["se il loro contenuto è funzionale alla comprensione delle informazioni, aggiungi una breve descrizione testuale: ",e.jsx(i.code,{children:'alt="Breve descrizione."'}),";"]}),`
`,e.jsxs(i.li,{children:["se sono puramente decorative, lascialo vuoto: ",e.jsx(i.code,{children:'alt=""'}),"."]}),`
`]}),`
`,e.jsx(i.h3,{id:"collegamenti-e-navigazione",children:"Collegamenti e navigazione"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Usa ",e.jsx(i.code,{children:"a"})," per i collegamenti di navigazione e ",e.jsx(i.code,{children:"button"})," per azioni nella stessa pagina."]}),`
`,e.jsx(i.li,{children:"Segnala chiaramente la destinazione dei link esterni con testo nascosto e icone appropriate."}),`
`,e.jsx(i.li,{children:"Usa i titoli come elementi principali di navigazione, evitando troppi collegamenti nella stessa card."}),`
`]}),`
`,e.jsx(i.p,{children:"Negli esempi non abbiamo usato il target del link per favorire la normale navigazione del browser. Se la pagina di destinazione si apre in una nuova tab o finestra, comunicalo in modo chiaro all'utente con un'icona di link esterno e un testo alternativo o nascosto per i lettori di schermo."}),`
`,e.jsx(i.h3,{id:"date-e-orari-nelle-card",children:"Date e orari nelle card"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Quando presenti date e orari, usa l'elemento ",e.jsx(i.code,{children:"time"})," con l'appropriato attributo ",e.jsx(i.code,{children:"datetime"}),"."]}),`
`,e.jsxs(i.li,{children:["Inserisci eventuali contenuti guida per lettori di schermo solo se realmente necessari per evitare il rumore, ad esempio ",e.jsx(i.code,{children:'<span class="visually-hidden">Data evento:</span>'}),"."]}),`
`,e.jsx(i.li,{children:'Comunica chiaramente agli utenti quando una data ha il ruolo di "Scadenza" aggiungendo un testo adeguato oltre alla data stessa, come negli esempi che trovi per la variante "Card per servizi e bandi".'}),`
`,e.jsxs(i.li,{children:["Non usare solo il colore (negli esempi ",e.jsx(i.code,{children:".text-warning"}),") per veicolare l'importanza dell'informazione."]}),`
`,e.jsx(i.li,{children:"Se sono presenti altre date, valuta di nascondere la data di pubblicazione per non creare confusione."}),`
`,e.jsx(i.li,{children:"Svolgi sempre test di usabilità anche con utenti che utilizzano tecnologie assistive."}),`
`]}),`
`,e.jsx(i.h3,{id:"gerarchia-dei-titoli",children:"Gerarchia dei titoli"}),`
`,e.jsxs(i.p,{children:["Usa il corretto livello di intestazione (",e.jsx(i.code,{children:"h2"}),", ",e.jsx(i.code,{children:"h3"}),", ecc.) per il titolo delle card."]}),`
`,e.jsxs(i.p,{children:["Negli esempi abbiamo usato quasi sempre ",e.jsx(i.code,{children:"h3"})," per le card editoriali e ",e.jsx(i.code,{children:"h4"})," per quelle informative, ma ricorda di adattare il codice in base alla gerarchia dei contenuti sulle tue pagine."]}),`
`,e.jsx(i.h3,{id:"contrasto-e-visibilità",children:"Contrasto e visibilità"}),`
`,e.jsx(i.p,{children:`Mantieni un rapporto di contrasto di almeno 3:1 tra le card e lo sfondo.
Le combinazioni di bordi, ombre e colori di sfondo possono aiutarti a raggiungere questo obiettivo.`}),`
`,e.jsx(i.h2,{id:"card-per-contenuti-editoriali",children:"Card per contenuti editoriali"}),`
`,e.jsx(i.p,{children:`Le card per contenuti editoriali sono utili a fornire un'anteprima di notizie, articoli, pagine evento o pagine che presentano media (video o audio).
Sono le classiche card con cui puoi comporre una sezione di copertina delle notizie in evidenza nella pagina principale del sito.`}),`
`,e.jsx(i.h3,{id:"card-editoriali-standard",children:"Card editoriali standard"}),`
`,e.jsx(i.p,{children:"Queste card presentano titolo, descrizione, data di pubblicazione, categora o argomenti (tag). Possono essere con e senza immagine."}),`
`,e.jsx(i.p,{children:"La struttura dei metadati include:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["categorie nell'elemento ",e.jsx(i.code,{children:".it-card-taxonomy"}),";"]}),`
`,e.jsx(i.li,{children:"argomenti (tag) in liste, quando sono più di uno;"}),`
`,e.jsxs(i.li,{children:["date in elementi HTML semantici ",e.jsx(i.code,{children:"time"}),", con il corretto attributo ",e.jsx(i.code,{children:"datetime"}),"."]}),`
`]}),`
`,e.jsx(n,{of:c}),`
`,e.jsx(i.h3,{id:"card-editoriali-featured",children:"Card editoriali featured"}),`
`,e.jsx(i.p,{children:"Usa questa variante per presentare contenuti di approfondimento, anche ospitati su piattaforme terze."}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Quando le card mandano a piattaforme terze, comunica all'utente la destinazione e aggiungi un'icona a fianco del titolo con la classe ",e.jsx(i.code,{children:".it-card-title-icon-wrapper"})," per segnalare l'uscita dal sito."]}),`
`,e.jsxs(i.li,{children:["Per mostrare un sottotitolo, usa lo slot ",e.jsx(i.code,{children:"subtitle"}),"."]}),`
`,e.jsxs(i.li,{children:["Per indicare l'autore del contenuto, usa lo slot ",e.jsx(i.code,{children:"signature"}),"."]}),`
`]}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(i.h3,{id:"card-inline",children:"Card inline"}),`
`,e.jsx(i.p,{children:"Usa questa variante per mettere in evidenza alcune card principali rispetto alle altre. Funziona solo con card con immagini."}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Per ottenere la disposizione inline, usa l'attributo ",e.jsx(i.code,{children:'variant="inline"'}),"."]}),`
`,e.jsxs(i.li,{children:["Per invertire solamente l'ordine visivo tra destra e sinistra, usa invece l'attributo ",e.jsx(i.code,{children:'variant="inline-reverse"'}),"."]}),`
`]}),`
`,e.jsx(i.p,{children:"Su viewport medi e grandi la card si presenta in orizzontale, mentre su dispositivi piccoli o con ingrandimento elevato passa a disposizione verticale, simile alla card base."}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(i.h4,{id:"card-inline-mini",children:"Card inline mini"}),`
`,e.jsxs(i.p,{children:["Usa la variante mini per raggruppare in poco spazio card editoriali con contenuti correlati secondari. Questa variante presenta una dimensione ridotta per il titolo, non include il corpo (slot ",e.jsx(i.code,{children:"text"}),") e il footer è visibile solo se presente (slot ",e.jsx(i.code,{children:"footer"}),")."]}),`
`,e.jsxs(i.p,{children:["Per ottenere la variante mini, usa l'attributo ",e.jsx(i.code,{children:'variant="inline-mini"'}),"."]}),`
`,e.jsx(i.p,{children:"La variante mini rimane orizzontale anche in viewport piccole o viste ingrandite."}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(i.h3,{id:"card-per-eventi",children:"Card per eventi"}),`
`,e.jsx(i.p,{children:"Usa questa variante per mostrare contenuti relativi a eventi."}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Per mostrare la data o la durata di un evento, aggiungili in un paragrafo all'inizio del corpo della card usando lo slot ",e.jsx(i.code,{children:"subtitle"}),"."]}),`
`,e.jsxs(i.li,{children:["Usa lo slot ",e.jsx(i.code,{children:"actions"})," per collegamenti o pulsanti secondari, utile quando il titolo porta alla pagina di descrizione dell'evento ma vuoi dare accesso diretto all'azione principale (ad esempio, l'iscrizione all'evento)."]}),`
`,e.jsxs(i.li,{children:["Per applicare il colore secondario ai collegamenti ",e.jsx(i.code,{children:"a"})," inseriti nel corpo o nel footer della card, usa la classe ",e.jsx(i.code,{children:".it-card-link"}),"."]}),`
`]}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(i.h4,{id:"card-per-eventi-inline",children:"Card per eventi inline"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Per disporre le card eventi in orizzontale, usa la struttura della variante ",e.jsx(i.code,{children:"inline"}),"."]}),`
`,e.jsxs(i.li,{children:["Per invertire solamente l'ordine visivo tra destra e sinistra, usa la struttura della variante ",e.jsx(i.code,{children:"inline-reverse"}),"."]}),`
`]}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(i.h3,{id:"card-per-media-video-e-audio",children:"Card per media video e audio"}),`
`,e.jsx(i.p,{children:"Usa queste varianti per presentare un'anteprima di contenuti video o audio e rimandare alle relative pagine di dettaglio, anche su piattaforme terze."}),`
`,e.jsxs(i.p,{children:["Assicurati di comunicare all'utente la tipologia del contenuto e l'eventuale uscita dal sito stesso. Per farlo, puoi anche aggiungere un'icona a fianco del titolo, usando la classe ",e.jsx(i.code,{children:".it-card-title-icon-wrapper"})," come negli esempi."]}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(i.h4,{id:"card-per-media-video-inline",children:"Card per media video inline"}),`
`,e.jsxs(i.p,{children:["Per disporre le card video in orizzontale o invertire l'ordine visivo tra sinistra e destra, usa la struttura e gli attributi della variante ",e.jsx(i.code,{children:"inline"}),"."]}),`
`,e.jsx(n,{of:g}),`
`,e.jsx(i.h2,{id:"card-informative-e-di-servizio",children:"Card informative e di servizio"}),`
`,e.jsx(i.p,{children:"Usa queste varianti per fornire un'anteprima per pagine di dettaglio di servizi e bandi, documenti o altri tipi di allegati."}),`
`,e.jsx(i.h3,{id:"card-per-servizi-e-bandi",children:"Card per servizi e bandi"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Usa un breve testo descrittivo nello slot ",e.jsx(i.code,{children:"text"})," o nello slot ",e.jsx(i.code,{children:"subtitle"})," per descrivere il contesto del contenuto della card."]}),`
`,e.jsxs(i.li,{children:["Per fornire indicazioni sullo stato del servizio o del bando, usa un componente ",e.jsx(i.a,{href:"/docs/componenti-chip--documentazione",children:"Chip"})," nell'elemento ",e.jsx(i.code,{children:"footer"}),"."]}),`
`,e.jsxs(i.li,{children:["Per indicare una data di scadenza, usa la classe ",e.jsx(i.code,{children:".it-card-date"})," e un testo descrittivo nell'elemento ",e.jsx(i.code,{children:"footer"}),"."]}),`
`,e.jsxs(i.li,{children:["Usa lo slot ",e.jsx(i.code,{children:"actions"})," per collegamenti o pulsanti secondari, utile quando il titolo porta alla pagina di approfondimento ma vuoi dare accesso diretto all'azione principale (ad esempio, la candidatura al bando)."]}),`
`,e.jsxs(i.li,{children:["Usa la classe ",e.jsx(i.code,{children:".it-card-link"})," per applicare il colore secondario ai collegamenti ",e.jsx(i.code,{children:"a"})," inseriti nel corpo o nel footer della card."]}),`
`]}),`
`,e.jsx(n,{of:v}),`
`,e.jsx(i.h3,{id:"card-per-documenti-e-allegati",children:"Card per documenti e allegati"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Per aggiungere un'icona a fianco del titolo, usa la classe ",e.jsx(i.code,{children:".it-card-title-icon-wrapper"}),"."]}),`
`,e.jsxs(i.li,{children:["Usa lo slot ",e.jsx(i.code,{children:"actions"})," per collegamenti o pulsanti secondari, utile quando il titolo porta alla pagina di approfondimento ma vuoi dare accesso diretto all'azione principale (ad esempio, scaricare il file)."]}),`
`]}),`
`,e.jsx(n,{of:z}),`
`,e.jsx(i.h3,{id:"card-per-profili-personali",children:"Card per profili personali"}),`
`,e.jsx(i.p,{children:"Usa questa variante per rappresentare profili personali o i relatori di un evento."}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Attivala usando l'attributo ",e.jsx(i.code,{children:'variant="profile"'}),"."]}),`
`,e.jsxs(i.li,{children:["Per un'immagine di profilo sulla destra, integra il componente ",e.jsx(i.a,{href:"/docs/componenti-avatar--documentazione",children:"Avatar"}),", idealmente nelle varianti di dimensioni ",e.jsx(i.code,{children:"xl"}),"."]}),`
`,e.jsxs(i.li,{children:["La lista di metadati del profilo è costruita utilizzando liste descrittive ",e.jsx(i.code,{children:".it-card-description-list"})," con ogni coppia di item ",e.jsx(i.code,{children:"dd"}),"-",e.jsx(i.code,{children:"dt"})," raccolta in un ",e.jsx(i.code,{children:"div"})," contenitore."]}),`
`,e.jsxs(i.li,{children:["Per un effetto decorativo, usa l'attributo ",e.jsx(i.code,{children:"border-top"})," e le ",e.jsx(i.a,{href:"#anteprima-e-attributi-del-componente",children:"varianti di colore disponibili nella tabella degli attributi"}),"."]}),`
`]}),`
`,e.jsx(n,{of:f}),`
`,e.jsx(i.h3,{id:"card-per-luoghi",children:"Card per luoghi"}),`
`,e.jsx(i.p,{children:"Usa questa variante per rappresentare dei luoghi."}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Attivala usando l'attributo ",e.jsx(i.code,{children:'variant="location"'}),"."]}),`
`,e.jsxs(i.li,{children:["Per aggiungere un'immagine, usa lo slot ",e.jsx(i.code,{children:"image"}),"."]}),`
`,e.jsxs(i.li,{children:["Per aggiungere un'icona sulla destra e allinearla correttamente, racchiudila in un ",e.jsx(i.code,{children:"div"})," con classe ",e.jsx(i.code,{children:".it-card-profile-image-icon-wrapper"}),"."]}),`
`,e.jsxs(i.li,{children:["La lista di metadati del luogo è costruita utilizzando liste descrittive ",e.jsx(i.code,{children:".it-card-description-list"})," con ogni coppia di item ",e.jsx(i.code,{children:"dd"}),"-",e.jsx(i.code,{children:"dt"})," raccolta in un ",e.jsx(i.code,{children:"div"})," contenitore."]}),`
`,e.jsxs(i.li,{children:["Per eventuali collegamenti o dettagli della mappa, puoi usare lo slot ",e.jsx(i.code,{children:"footer"}),"."]}),`
`]}),`
`,e.jsx(n,{of:b}),`
`,e.jsx(i.h3,{id:"card-con-liste-di-contenuti-affini",children:"Card con liste di contenuti affini"}),`
`,e.jsx(i.p,{children:"Usa questa variante quando vuoi facilitare l'accesso a contenuti importanti, come i correlati o gli approfondimenti di un argomento in evidenza o di un evento."}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Integra liste strutturate di link nel corpo della card usando le classi ",e.jsx(i.code,{children:".list-group"}),"."]}),`
`,e.jsxs(i.li,{children:["Applica il colore primario o secondario alla lista dei link usando la classe ",e.jsx(i.code,{children:".it-card-link"}),"."]}),`
`,e.jsxs(i.li,{children:["Aggiungi link o pulsanti di servizio nello slot ",e.jsx(i.code,{children:"footer"}),"."]}),`
`]}),`
`,e.jsxs("it-callout",{variant:"success","heading-level":"h4",children:[e.jsx("span",{slot:"title",children:"Accessibilità dei link"}),e.jsxs("p",{children:["Valuta se applicare un aria-label all'elemento ",e.jsx(i.code,{children:"ul"})," per permettere ai lettori di schermo di comprendere la natura di questi link."]})]}),`
`,e.jsx(n,{of:C}),`
`,e.jsx(i.h2,{id:"card-presentazione",children:"Card presentazione"}),`
`,e.jsx(i.p,{children:"Queste varianti sono utili per facilitare l'accesso a contenuti importanti oppure presentare dati."}),`
`,e.jsx(i.h3,{id:"card-banner",children:"Card banner"}),`
`,e.jsx(i.p,{children:"Usa la variante banner per presentare e facilitare l'accesso a una sezione principale del sito, a un servizio importante o a una funzionalità."}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Attivala con l'attributo ",e.jsx(i.code,{children:'variant="banner"'}),"."]}),`
`,e.jsxs(i.li,{children:["Per inserire un'icona, usa lo slot ",e.jsx(i.code,{children:"image"}),"."]}),`
`]}),`
`,e.jsx(n,{of:P}),`
`,e.jsx(i.h4,{id:"card-banner-con-azione",children:"Card banner con azione"}),`
`,e.jsxs(i.p,{children:["Per guidare verso un'azione specifica, aggiungi un pulsante o un link nello slot ",e.jsx(i.code,{children:"footer"}),", senza collegare il titolo della card."]}),`
`,e.jsx(n,{of:w}),`
`,e.jsx(i.h4,{id:"card-banner-inline",children:"Card banner inline"}),`
`,e.jsxs(i.p,{children:["Per disporre le card banner in orizzontale, usa l'attributo ",e.jsx(i.code,{children:'variant="inline-banner"'}),"."]}),`
`,e.jsxs(i.p,{children:["Per mantenere il layout orizzontale anche su viewport piccole o fortemente ingrandite, usa ",e.jsx(i.code,{children:'variant="inline-banner-mini'})," come nelle ultime card dell'esempio."]}),`
`,e.jsx(n,{of:q}),`
`,e.jsx(i.h2,{id:"personalizzazione-del-componente",children:"Personalizzazione del componente"}),`
`,e.jsx(i.h3,{id:"bordi-e-ombre",children:"Bordi e ombre"}),`
`,e.jsx(i.p,{children:"La configurazione base delle card prevede un bordo e un'ombra leggera."}),`
`,e.jsx(i.p,{children:"Per aumentare la separazione visiva dal contesto, puoi utilizzare ombre più evidenti con questi attributi:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:'shadow="sm"'}),", per ombra leggera (valore predefinito);"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:'shadow="md"'}),", per ombra media;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:'shadow="lg"'}),", per ombra pronunciata;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:'shadow="none"'}),", nessuna ombra."]}),`
`]}),`
`,e.jsxs(i.p,{children:["Quando usi ombre più evidenti e la distinzione dallo sfondo è sufficientemente chiara, puoi rimuovere il bordo impostando ",e.jsx(i.code,{children:'border="0"'}),"."]}),`
`,e.jsxs("it-callout",{variant:"success","heading-level":"h4",children:[e.jsx("span",{slot:"title",children:"Accessibilità: contrasto con lo sfondo"}),e.jsx("p",{children:"Per garantire una buona accessibilità, mantieni un rapporto di contrasto colore di almeno 3:1 tra la card e lo sfondo. Le combinazioni di bordi, ombre e colori di sfondo possono aiutarti a raggiungere questo obiettivo."})]}),`
`,e.jsx(n,{of:k}),`
`,e.jsx(i.h3,{id:"immagini",children:"Immagini"}),`
`,e.jsxs(i.p,{children:["Per definire il rapporto tra altezza e larghezza delle immagini in tutte le card di base, usa l'attributo ",e.jsx(i.code,{children:"ratio"}),"."]}),`
`,e.jsx(i.p,{children:"Le opzioni disponibili sono:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:'ratio="1x1"'}),", rapporto quadrato;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:'ratio="4x3"'}),", rapporto classico;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:'ratio="16x9"'}),", rapporto widescreen;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:'ratio="21x9"'}),", rapporto cinematografico."]}),`
`]}),`
`,e.jsx(i.p,{children:`Le varianti inline delle card hanno proporzioni immagini specifiche su desktop.
Su dispositivi piccoli o con ingrandimento elevato usano il layout verticale con le proporzioni presenti in questi esempi, ad eccezione della variante mini.`}),`
`,e.jsx(n,{of:U}),`
`,e.jsx(i.h3,{id:"altezze-delle-card",children:"Altezze delle card"}),`
`,e.jsx(i.p,{children:"Per impostazione predefinita, l’altezza delle singole card nei gruppi è determinata dal loro contenuto, come negli esempi che precedono."}),`
`,e.jsxs(i.p,{children:["Per farla estendere su tutta l’altezza disponibile, usa l'attributo ",e.jsx(i.code,{children:"full-height"})," sull'elemento ",e.jsx(i.code,{children:"<it-card>"}),". Il contenuto dello slot ",e.jsx(i.code,{children:"footer"})," si allinea verticalmente al bordo inferiore, come la data nell'esempio che segue."]}),`
`,e.jsx(n,{of:A}),`
`,e.jsx(i.h3,{id:"pulsanti-a-tutta-larghezza-su-mobile",children:"Pulsanti a tutta larghezza su mobile"}),`
`,e.jsxs(i.p,{children:["Per ottenere pulsanti a larghezza fluida su dispositivi mobili, usa le classi ",e.jsx(i.code,{children:".d-grid"})," e ",e.jsx(i.code,{children:".d-md-block"})," nell'area metadati della card."]}),`
`,e.jsxs(i.p,{children:["Per maggiori informazioni, consulta la ",e.jsx(i.a,{href:"/docs/componenti-button--documentazione#varianti-di-dimensione",children:"documentazione sulle varianti di dimensioni dei button"}),"."]}),`
`,e.jsx(n,{of:I}),`
`,e.jsx(i.h3,{id:"stili",children:"Stili"}),`
`,e.jsxs(i.p,{children:["Per personalizzare gli stili del componente, puoi usare il selettore ",e.jsx(i.code,{children:"::part"})," con questi valori:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"title"}),", per il titolo;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"body"}),", per il corpo;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"subtitle"}),", per il sottotitolo;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"signature"}),", per l'autore;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"text"}),", per il testo;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"footer"}),", per il footer;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"actions"}),", per le azioni aggiuntive;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"image-wrapper"}),", per il contenitore dell'immagine."]}),`
`]}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"/docs/personalizzazione-degli-stili--documentazione#selettore-part",children:"Vai alla guida sul selettore part"})}),`
`,e.jsx(i.h2,{id:"organizzazione-e-layout",children:"Organizzazione e layout"}),`
`,e.jsx(i.h3,{id:"uso-di-contenitori-responsive",children:"Uso di contenitori responsive"}),`
`,e.jsxs(i.p,{children:["Se il layout lo consente, racchiudi ogni gruppo di card in un contenitore responsive, usando le classi ",e.jsx(i.code,{children:".container-xl"})," o ",e.jsx(i.code,{children:".container-xxl"})," su un elemento ",e.jsx(i.code,{children:"div"})," che includa l'intero gruppo e il suo sistema di griglie."]}),`
`,e.jsxs(i.p,{children:["In questo modo sfrutti al meglio lo spazio disponibile su tutte le dimensioni di viewport e livelli di ingrandimento. L’uso di contenitori con breakpoint fissi come ",e.jsx(i.code,{children:".container"})," può invece lasciare troppo spazio vuoto ai lati in alcune configurazioni."]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<div class="container-xl">
  <div class="row">...</div>
  <div class="row">...</div>
</div>
`})}),`
`,e.jsx(i.h3,{id:"uso-della-griglia",children:"Uso della griglia"}),`
`,e.jsxs(i.p,{children:["Usa il sistema di griglie per organizzare le card in righe e colonne, tramite le classi ",e.jsx(i.code,{children:".row"})," e ",e.jsx(i.code,{children:".col-*"}),"."]}),`
`,e.jsxs(i.p,{children:["La scelta del ",e.jsx(i.strong,{children:"numero di colonne dipende dal layout della pagina"})," e influisce sullo spazio disponibile per i contenuti. Bilancia quindi dimensioni e quantità di contenuto per garantire una buona leggibilità e un aspetto visivamente equilibrato a tutte le dimensioni di viewport e livelli di ingrandimento."]}),`
`,e.jsxs(i.p,{children:["In questi esempi abbiamo usato la combinazione ",e.jsx(i.code,{children:".col-12 col-md-6 col-lg-4"})," per ottenere 1 colonna su viewport piccole, 2 su viewport medie e 3 su viewport grandi."]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<div class="container-xl">
  <div class="row">
    <div class="col-12 col-md-6 col-lg-4 mb-3 mb-md-4">
      <it-card>...</it-card>
    </div>
    <div class="col-12 col-md-6 col-lg-4 mb-3 mb-md-4">
      <it-card>...</it-card>
    </div>
  </div>
</div>
`})}),`
`,e.jsx(i.h3,{id:"liste-per-gruppi-numerosi-di-card",children:"Liste per gruppi numerosi di card"}),`
`,e.jsxs(i.p,{children:["Per ",e.jsx(i.strong,{children:"gruppi numerosi di card"})," (come pagine di listini, cataloghi, risultati di ricerca), usa liste semantiche ",e.jsx(i.code,{children:"<ul>"})," con classe ",e.jsx(i.code,{children:".it-card-list"})," combinandole con il sistema di colonne."]}),`
`,e.jsxs("it-callout",{variant:"success","heading-level":"h4",children:[e.jsx("span",{slot:"title",children:"Accessibilità: lista link correlati"}),e.jsx("p",{children:"Con le liste, le tecnologie assistive permettono agli utenti di conoscere il numero totale di componenti card che si stanno esplorando e navigare più facilmente."}),e.jsxs("p",{children:["Se necessario nel contesto aggiungi una ",e.jsx("code",{children:"aria-label"})," che spieghi i contenuti della lista come nell'esempio che segue."]})]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<div class="container-xl">
  <ul class="it-card-list row" aria-label="Risultati della ricerca: ">
    <li class="col-12 col-md-6 col-lg-4 mb-3 mb-md-4">
      <it-card>...</it-card>
    </li>
    <li class="col-12 col-md-6 col-lg-4 mb-3 mb-md-4">
      <it-card>...</it-card>
    </li>
  </ul>
</div>
`})}),`
`,e.jsx(i.p,{children:"Esempio di lista di card:"}),`
`,e.jsx(n,{of:L}),`
`,e.jsx(i.h3,{id:"uso-di-classi-dedicate-per-piccoli-gruppi",children:"Uso di classi dedicate (per piccoli gruppi)"}),`
`,e.jsxs(i.p,{children:["Per piccoli gruppi di card (2–6 elementi), puoi usare ",e.jsx(i.code,{children:".it-card-group"})," per creare facilmente un layout responsive all’interno di un ",e.jsx(i.code,{children:"div"})," contenitore."]}),`
`,e.jsx(i.p,{children:"Di default, il layout prevede 4 colonne su desktop."}),`
`,e.jsx(n,{of:S}),`
`,e.jsx(i.h4,{id:"numero-di-colonne-specifiche",children:"Numero di colonne specifiche"}),`
`,e.jsxs(i.p,{children:["Per ottenere layout con 2 o 3 colonne su desktop, usa ",e.jsx(i.code,{children:".it-card-group-N-cols"})," sostituendo ",e.jsx(i.code,{children:"N"})," con 2 o 3."]}),`
`,e.jsx(n,{of:y}),`
`,e.jsx(i.h4,{id:"centrate-orizzontalmente",children:"Centrate orizzontalmente"}),`
`,e.jsxs(i.p,{children:["Per centrare orizzontalmente il gruppo di card all'interno del contenitore, usa ",e.jsx(i.code,{children:".it-card-group-center"}),"."]}),`
`,e.jsx(n,{of:M}),`
`,e.jsx(i.h4,{id:"responsive-rispetto-il-contenitore-sperimentale",children:"Responsive rispetto il contenitore (sperimentale)"}),`
`,e.jsxs(i.p,{children:["Per far adattare un gruppo di card alla dimensione del contenitore tramite Container Queries, invece che alla viewport, usa la classe ",e.jsx(i.code,{children:".it-card-group-container-aware"}),"."]}),`
`,e.jsx(i.p,{children:"Ridimensiona la viewport o visualizza la pagina su dispositivi diversi per notare la differenza."}),`
`,e.jsx(i.p,{children:"Le Container Queries sono una tecnologia CSS moderna supportata dalla maggior parte dei browser recenti. Nei browser non compatibili viene applicato automaticamente un fallback basato su Media Queries standard."}),`
`,e.jsx(n,{of:D}),`
`,e.jsx(i.h4,{id:"confronto-in-colonne-diverse",children:"Confronto in colonne diverse"}),`
`,e.jsx(i.p,{children:"In questo esempio puoi scoprire come lo stesso gruppo di card “container-aware” si adatta automaticamente a larghezze di colonna diverse, permettendo di creare layout complessi."}),`
`,e.jsx(n,{of:N})]})}function V(a={}){const{wrapper:i}={...l(),...a.components};return i?e.jsx(i,{...a,children:e.jsx(r,{...a})}):r(a)}export{V as default};

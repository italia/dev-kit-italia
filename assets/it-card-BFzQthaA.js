import{j as e,M as s,C as n,a as t}from"./blocks-Ba-BLByO.js";import{useMDXComponents as l}from"./index-D34vi_EH.js";import{S as d,E as o,a as c,b as p,C as u,c as h,d as m,e as x,M as j,f as g,g as v,D as z,P as b,L as f,h as C,B as P,i as q,j as w,k as L,I as U,A as k,l as S,m as A,n as y,o as D,p as I,q as M,r as N}from"./it-card.stories-Dwmx4dIe.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-B5mMrHNl.js";function r(a){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:d}),`
`,e.jsx(i.h1,{id:"card",children:"Card"}),`
`,e.jsx("description",{children:"Aiutano a presentare un gruppo di contenuti correlati, come articoli o sezioni di un sito web e permettono di continuare la navigazione verso le rispettive pagine di dettaglio"}),`
`,e.jsx(i.h2,{id:"cosa-fa",children:"Cosa fa"}),`
`,e.jsx(i.p,{children:"Le card sono contenitori flessibili e versatili per organizzare e presentare contenuti strutturati in modo coerente, adattabili a diversi contesti e necessità."}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"https://designers.italia.it/design-system/componenti/card/",rel:"nofollow",children:"Approfondisci come e quando usare il componente Card"})}),`
`,e.jsx(i.h2,{id:"anteprima-e-attributi-del-componente",children:"Anteprima e attributi del componente"}),`
`,e.jsxs(i.p,{children:["Modifica gli attributi nella tabella per personalizzare in tempo reale l'aspetto e il comportamento del componente. Per vedere come cambia il codice, clicca su ",e.jsx(i.strong,{children:"Show code"}),"."]}),`
`,e.jsx(n,{of:o}),`
`,e.jsx(t,{of:o}),`
`,e.jsx(i.h2,{id:"indicazioni-generali",children:"Indicazioni generali"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Rendi la card azionabile poiché è una sintesi di informazioni più dettagliate. Ogni card deve puntare a una pagina di dettaglio tramite link."}),`
`,e.jsx(i.li,{children:"Includi contenuti unici, evitando di ripetere immagini o informazioni che sono presenti in altre card."}),`
`,e.jsx(i.li,{children:"Non usare la card a scopo decorativo, creando un contorno per qualunque tipologia di contenuto."}),`
`,e.jsx(i.li,{children:"Scegli immagini della dimensione corretta, assicurandoti che funzionino bene su qualsiasi dispositivo e dimensione."}),`
`,e.jsx(i.li,{children:"Scrivi titoli concisi che stimolino l'interesse dell'utente ad approfondire il contenuto."}),`
`,e.jsx(i.li,{children:"Usa la descrizione per contenuti secondari, non per informazioni essenziali, in quanto gli utenti potrebbero prestarvi minore attenzione."}),`
`]}),`
`,e.jsx(i.h2,{id:"accessibilità",children:"Accessibilità"}),`
`,e.jsx(i.p,{children:`Le card implementano diverse caratteristiche per garantire un’esperienza accessibile a tutte le persone,
la maggior parte di esse sono implementato nel componente stesso,
ma è importante che anche i contenuti inseriti nelle card siano accessibili.`}),`
`,e.jsx(i.h3,{id:"metadati-e-contenuti-descrittivi",children:"Metadati e contenuti descrittivi"}),`
`,e.jsxs(i.p,{children:["Per migliorare la comprensione dei metadati da parte delle tecnologie assistive aggiungi testi descrittivi nascosti con ",e.jsx(i.code,{children:".visually-hidden"})," (es. “Categoria correlata: “, “Argomento correlato: “) o applicati con ",e.jsx(i.code,{children:"aria-label"}),` (es. “Argomenti correlati: “).
Valuta attentamente se gli elementi come le liste (es. di contenuti affini, link secondari o una stessa lista di card) abbiano o meno bisogno di etichette `,e.jsx(i.code,{children:"aria-label"})," o ",e.jsx(i.code,{children:"aria-labelledby"})," per descriverne le finalità."]}),`
`,e.jsx(i.h3,{id:"icone-e-contenuti-visivi",children:"Icone e contenuti visivi"}),`
`,e.jsx(i.p,{children:"Le icone nelle card possono avere diversi ruoli semantici:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Decorative: quando il significato è già chiaro dal contesto testuale, usa ",e.jsx(i.code,{children:'aria-hidden="true"'}),"."]}),`
`,e.jsxs(i.li,{children:["Informative: quando comunicano informazioni aggiuntive (es. tipo di file, link esterno), aggiungi testo nascosto con ",e.jsx(i.code,{children:'<span class="visually-hidden">'})," che descriva l'informazione se non già veicolata diversamente."]}),`
`,e.jsx(i.li,{children:"Funzionali: quando indicano un'azione o stato, assicurati che il significato sia comunicato anche testualmente."}),`
`]}),`
`,e.jsxs(i.p,{children:["Per le immagini aggiungi una breve descrizione immagine (con l'attributo ",e.jsx(i.code,{children:'alt="Breve descrizione."'}),`) se ha senso nel contesto,
marcale altrimenti come decorative lasciando l'attributo `,e.jsx(i.code,{children:"alt"})," applicato ma vuoto."]}),`
`,e.jsx(i.h3,{id:"collegamenti-e-navigazione",children:"Collegamenti e navigazione"}),`
`,e.jsxs(i.p,{children:["Usa ",e.jsx(i.code,{children:"a"})," per i collegamenti di navigazione e ",e.jsx(i.code,{children:"button"}),` per azioni nella stessa pagina.
Per contenuti esterni, comunica chiaramente la destinazione, ad esempio con testo nascosto e icone appropriate.
Privilegia il titolo come elemento principale di navigazione, evitando troppi collegamenti nella stessa card.`]}),`
`,e.jsx(i.p,{children:`Negli esempi non abbiamo usato il target del link per favorire la normale navigazione del browser.
Se la pagina di destinazione si apre in una nuova tab o finestra, comunicalo in modo chiaro all'utente con un'icona di link esterno e un testo alternativo o nascosto per i lettori di schermo.`}),`
`,e.jsx(i.h3,{id:"date-e-orari-nelle-card",children:"Date e orari nelle card"}),`
`,e.jsxs(i.p,{children:["Quando presenti date e orari, usa l'elemento ",e.jsx(i.code,{children:"time"})," con l'appropriato attributo ",e.jsx(i.code,{children:"datetime"}),`.
Inserisci eventuali contenuti guida per lettori di schermo solo se realmente necessari per evitare il rumore,
ad esempio `,e.jsx(i.code,{children:'<span class="visually-hidden">Data evento:</span>'}),`.
Comunica chiaramente agli utenti quando una data ha il ruolo di "Scadenza" aggiungendo un testo adeguato oltre alla data stessa, come negli esempi che trovi nella sezione "Card per servizi e bandi".
Non usare solo il colore (negli esempi `,e.jsx(i.code,{children:".text-warning"}),") per veicolare l'importanza dell'informazione."]}),`
`,e.jsx(i.p,{children:`Poni particolare attenzione che non si crei confusione se nella card fosse presente anche la data di pubblicazione,
in caso valuta di non mostrarla.`}),`
`,e.jsx(i.p,{children:"Consigliamo, inoltre, di svolgere sempre test di usabilità anche con utenti che utilizzano tecnologie assistive."}),`
`,e.jsx(i.h3,{id:"gerarchia-dei-titoli",children:"Gerarchia dei titoli"}),`
`,e.jsxs(i.p,{children:["Utilizza gli elementi di intestazione (",e.jsx(i.code,{children:"h2"}),", ",e.jsx(i.code,{children:"h3"}),`, etc.) appropriati per il contesto intorno alle card.
Negli esempi abbiamo usato quasi sempre `,e.jsx(i.code,{children:"h3"})," per le card editoriali e ",e.jsx(i.code,{children:"h4"}),` per quelle informative.
Adatta la gerarchia alla struttura complessiva della tua pagina in modo da rispettare l'ordine.`]}),`
`,e.jsx(i.h3,{id:"contrasto-e-visibilità",children:"Contrasto e visibilità"}),`
`,e.jsx(i.p,{children:`Mantieni un rapporto di contrasto di almeno 3:1 tra le card e lo sfondo.
Le combinazioni di bordi, ombre e colori di sfondo possono aiutarti a raggiungere questo obiettivo.`}),`
`,e.jsx(i.h2,{id:"card-per-contenuti-editoriali",children:"Card per contenuti editoriali"}),`
`,e.jsx(i.p,{children:`Le card per contenuti editoriali sono utili a fornire un'anteprima di notizie, articoli, pagine evento o pagine che presentano media (video o audio).
Sono le classiche card con cui puoi comporre una sezione di copertina delle notizie in evidenza nella pagina principale del sito.`}),`
`,e.jsx(i.h3,{id:"card-editoriali-standard",children:"Card editoriali standard"}),`
`,e.jsx(i.p,{children:"Esempi con descrizione e data di pubblicazione della scheda, con categoria oppure con argomenti (tag) di appartenenza, con e senza immagine."}),`
`,e.jsx(i.p,{children:"La struttura dei metadati include:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Categorie nell'elemento ",e.jsx(i.code,{children:".it-card-taxonomy"})]}),`
`,e.jsx(i.li,{children:"Tag/argomenti in liste quando sono più di uno"}),`
`,e.jsxs(i.li,{children:["Date in elementi HTML semantici ",e.jsx(i.code,{children:"time"}),", con il corretto attributo ",e.jsx(i.code,{children:"datetime"})]}),`
`]}),`
`,e.jsx(n,{of:c}),`
`,e.jsx(i.h3,{id:"card-editoriali-featured",children:"Card editoriali featured"}),`
`,e.jsxs(i.p,{children:[`Usa queste card per presentare contenuti di approfondimento, anche quelli ospitati su piattaforme terze.
Se i contenuti sono su piattaforme terze, comunica chiaramente all'utente dove si trova il contenuto e che sta per uscire dal sito.
Puoi aggiungere un'icona a fianco del titolo, usando la classe `,e.jsx(i.code,{children:".it-card-title-icon-wrapper"})," come negli esempi che seguono."]}),`
`,e.jsxs(i.p,{children:["Per mostrare un sottotitolo sulle card, usa lo slot ",e.jsx(i.code,{children:"subtitle"}),"."]}),`
`,e.jsxs(i.p,{children:["Per indicare l'autore del contenuto, usa lo slot ",e.jsx(i.code,{children:"signature"}),"."]}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(i.h3,{id:"card-inline",children:"Card inline"}),`
`,e.jsx(i.p,{children:`Usa questa variante inline per evidenziare una o due card rispetto alle altre.
Usa questa variante solo quando per il contenuto è disponibile un'immagine.`}),`
`,e.jsxs(i.p,{children:["Per ottenere la disposizione inline, usa l'attributo ",e.jsx(i.code,{children:'variant="inline"'}),"."]}),`
`,e.jsx(i.p,{children:`La card inline è orizzontale su viewport medio-grandi.
Su dispositivi piccoli o con ingrandimento elevato adotta una disposizione verticale simile alla card base.`}),`
`,e.jsxs(i.p,{children:["Per invertire solamente l'ordine visivo tra destra e sinistra, usa invece l'attributo ",e.jsx(i.code,{children:'variant="inline-reverse"'}),"."]}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(i.h4,{id:"card-inline-mini",children:"Card inline mini"}),`
`,e.jsxs(i.p,{children:[`Usa la variante mini delle card orizzontali per raggruppare in poco spazio card editoriali con contenuti correlati secondari.
In ragione di ciò, la card mini non ha il corpo (slot `,e.jsx(i.code,{children:"text"}),") e il footer (slot ",e.jsx(i.code,{children:"footer"}),`) è visibile solo se presente.
La dimensione del titolo è ridotta per adattarsi a questo layout.`]}),`
`,e.jsxs(i.p,{children:[`La variante mini rimane orizzontale anche in viewport piccole o viste ingrandite.
Questa variante si ottiene applicando l'attributo `,e.jsx(i.code,{children:'variant="inline-mini"'}),"."]}),`
`,e.jsx(i.p,{children:`Consigliamo di non aggiungere altri contenuti oltre al titolo (da mantenere breve),
l'eventuale categoria o argomento principale e la data.`}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(i.h3,{id:"card-per-eventi",children:"Card per eventi"}),`
`,e.jsxs(i.p,{children:["Per mostrare la data o la durata di un evento in una card, aggiungili in un paragrafo all'inizio del corpo della card usando lo slot ",e.jsx(i.code,{children:"subtitle"}),"."]}),`
`,e.jsxs(i.p,{children:["Usa lo slot ",e.jsx(i.code,{children:"actions"}),` per creare uno spazio dedicato a collegamenti o pulsanti secondari, come negli esempi seguenti.
Questa impostazione è utile quando il titolo della card porta a una pagina di approfondimento (ad esempio, la descrizione dettagliata dell'evento),
ma si vuole dare accesso diretto e immediato all'azione principale (ad esempio, l'iscrizione all'evento).`]}),`
`,e.jsxs(i.p,{children:["Per applicare il colore secondario ai collegamenti ",e.jsx(i.code,{children:"a"})," inseriti nel corpo o nel footer della card, usa la classe ",e.jsx(i.code,{children:".it-card-link"}),"."]}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(i.h4,{id:"card-per-eventi-inline",children:"Card per eventi inline"}),`
`,e.jsxs(i.p,{children:["Per disporre le card eventi in orizzontale, usa la variante ",e.jsx(i.code,{children:"inline"}),"."]}),`
`,e.jsxs(i.p,{children:["Per invertire l'ordine visivo, usa la variante ",e.jsx(i.code,{children:"inline-reverse"}),"."]}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(i.h3,{id:"card-per-media-video-audio",children:"Card per media (video, audio)"}),`
`,e.jsxs(i.p,{children:[`Usa queste varianti di card per presentare contenuti media come video o audio e rimandare alle relative pagine di dettaglio, anche se ospitate su piattaforme terze.
Anche in questo caso, assicurati di comunicare all'utente la tipologia del contenuto e l'eventuale uscita dal sito stesso.
Per farlo, puoi anche aggiungere un'icona a fianco del titolo, usando la classe `,e.jsx(i.code,{children:".it-card-title-icon-wrapper"})," come negli esempi che seguono."]}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(i.h4,{id:"card-per-media-video-inline",children:"Card per media video inline"}),`
`,e.jsxs(i.p,{children:["Per disporre le card media di tipo video in orizzontale, usa la variante ",e.jsx(i.code,{children:"inline"}),"."]}),`
`,e.jsx(i.p,{children:"Usa le stesse regole delle card inline standard per struttura e inversione dell'ordine."}),`
`,e.jsx(n,{of:g}),`
`,e.jsx(i.h2,{id:"card-informative-e-di-servizio",children:"Card informative e di servizio"}),`
`,e.jsx(i.p,{children:`Le card informative e di servizio sono utili a fornire un'anteprima per pagine di dettaglio di servizi e bandi,
oppure per rappresentare documenti e altri tipi di allegati.`}),`
`,e.jsx(i.h3,{id:"card-per-servizi-e-bandi",children:"Card per servizi e bandi"}),`
`,e.jsxs(i.p,{children:["Consigliamo di usare alternativamente un breve testo descrittivo nello slot ",e.jsx(i.code,{children:"text"})," o nello slot ",e.jsx(i.code,{children:"subtitle"})," per descrivere il contesto della card."]}),`
`,e.jsx(i.p,{children:"Per aggiungere indicazioni sullo stato del servizio o bando e un'eventuale data di scadenza, come negli esempi seguenti, puoi usare l'elemento footer:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["per lo stato del servizio o bando, usa un componente ",e.jsx(i.a,{href:"/docs/componenti-chip--documentazione",children:"Chip"})]}),`
`,e.jsxs(i.li,{children:["per un'eventuale data di scadenza, usa la classe ",e.jsx(i.code,{children:".it-card-date"})," e un testo descrittivo."]}),`
`]}),`
`,e.jsxs(i.p,{children:["Per creare un ulteriore spazio dedicato a collegamenti o pulsanti secondari, come negli esempi seguenti, puoi usare lo slot ",e.jsx(i.code,{children:"actions"}),`.
Questa impostazione è utile quando il titolo della card porta a una pagina di approfondimento (ad esempio, la descrizione dettagliata di un bando),
ma si vuole dare accesso diretto e immediato all'azione principale (ad esempio, la candidatura al bando).`]}),`
`,e.jsxs(i.p,{children:["Per applicare il colore secondario ai collegamenti ",e.jsx(i.code,{children:"a"})," inseriti nel corpo o nel footer della card, usa la classe ",e.jsx(i.code,{children:".it-card-link"}),"."]}),`
`,e.jsx(n,{of:v}),`
`,e.jsx(i.h3,{id:"card-per-documenti-e-allegati",children:"Card per documenti e allegati"}),`
`,e.jsxs(i.p,{children:[`Usa questa variante per presentare documenti e allegati.
Puoi aggiungere un'icona a fianco del titolo, usando la classe `,e.jsx(i.code,{children:".it-card-title-icon-wrapper"})," come negli esempi che seguono."]}),`
`,e.jsxs(i.p,{children:["Per creare un ulteriore spazio dedicato a collegamenti o pulsanti secondari, come negli esempi seguenti, puoi usare lo slot ",e.jsx(i.code,{children:"actions"}),`.
Questa impostazione è utile quando il titolo della card porta a una pagina di approfondimento (ad esempio, la descrizione dettagliata del documento),
ma si vuole dare accesso diretto e immediato all'azione principale (ad esempio, scaricare il file sul proprio dispositivo).`]}),`
`,e.jsx(n,{of:z}),`
`,e.jsx(i.h3,{id:"card-per-profili-personali",children:"Card per profili personali"}),`
`,e.jsxs(i.p,{children:[`Usa questa variante per indicare schede personali o i relatori a un evento.
Si attiva con l'attributo `,e.jsx(i.code,{children:'variant="profile"'}),"."]}),`
`,e.jsxs(i.p,{children:["L'immagine di profilo sulla destra è visualizzata integrando il componente ",e.jsx(i.a,{href:"/docs/componenti-avatar--documentazione",children:"Avatar"}),", si consiglia di usarlo nelle varianti di dimensioni ",e.jsx(i.code,{children:"xl"}),"."]}),`
`,e.jsxs(i.p,{children:["La lista di metadati del profilo è costruita utilizzando liste descrittive ",e.jsx(i.code,{children:".it-card-description-list"})," con ogni coppia di item ",e.jsx(i.code,{children:"dd"}),"-",e.jsx(i.code,{children:"dt"})," raccolta in un ",e.jsx(i.code,{children:"div"})," contenitore."]}),`
`,e.jsxs(i.p,{children:["Per un effetto decorativo, puoi usare l'attributo ",e.jsx(i.code,{children:"border-top"})," (vedi le varianti di colore disponibili nella ",e.jsx(i.a,{href:"#anteprima-e-attributi-del-componente",children:"tabella degli attributi"}),`).
Non usare questo attributo per comunicare significato semantico, ma solo come eventuale elemento decorativo.`]}),`
`,e.jsx(n,{of:b}),`
`,e.jsx(i.h3,{id:"card-per-luoghi",children:"Card per luoghi"}),`
`,e.jsxs(i.p,{children:[`Usa questa variante per presentare schede località.
Si attiva con con l'attributo `,e.jsx(i.code,{children:'variant="location"'}),"."]}),`
`,e.jsxs(i.p,{children:["Per i luoghi puoi inserire un'immagine in uno slot ",e.jsx(i.code,{children:"image"}),` o un'icona sulla destra.
Racchiudi l'icona in un `,e.jsx(i.code,{children:"div"})," con classe ",e.jsx(i.code,{children:".it-card-profile-image-icon-wrapper"})," per l'allineamento corretto."]}),`
`,e.jsxs(i.p,{children:["La lista di metadati del luogo è costruita utilizzando liste descrittive ",e.jsx(i.code,{children:".it-card-description-list"})," con ogni coppia di item ",e.jsx(i.code,{children:"dd"}),"-",e.jsx(i.code,{children:"dt"})," raccolta in un ",e.jsx(i.code,{children:"div"})," contenitore."]}),`
`,e.jsxs(i.p,{children:["Puoi combinare un piede con eventuali collegamenti o dettagli della mappa usando lo slot ",e.jsx(i.code,{children:"footer"}),"."]}),`
`,e.jsx(n,{of:f}),`
`,e.jsx(i.h3,{id:"card-con-liste-di-contenuti-affini",children:"Card con liste di contenuti affini"}),`
`,e.jsxs(i.p,{children:["Per presentare liste di contenuti affini, puoi integrare liste strutturate di link nel corpo della card usando le classi ",e.jsx(i.code,{children:".list-group"}),"."]}),`
`,e.jsx(i.p,{children:"Usa questa variante con moderazione e solo quando è necessario facilitare l'accesso ai contenuti in evidenza di un sito web, come ad esempio:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"i contenuti correlati a un argomento in evidenza"}),`
`,e.jsx(i.li,{children:"le varie pagine di approfondimento correlate a un evento in evidenza."}),`
`]}),`
`,e.jsxs("it-callout",{variant:"success","heading-level":"h4",children:[e.jsx("span",{slot:"title",children:"Accessibilità: lista link correlati"}),e.jsxs("p",{children:["Valuta caso per caso l'applicazione di un'eventuale aria-label all'elemento ",e.jsx(i.code,{children:"ul"}),", per permettere ai lettori di schermo di comprendere la natura di questi link."]})]}),`
`,e.jsxs(i.p,{children:[`Valuta caso per caso l'uso del colore primario per la lista di link,
oppure l'applicazione del colore secondario usando la classe dedicata `,e.jsx(i.code,{children:".it-card-link"}),"."]}),`
`,e.jsxs(i.p,{children:["Puoi combinare questa impostazione con le funzionalità dello slot ",e.jsx(i.code,{children:"footer"})," per ospitare link e pulsanti di servizio."]}),`
`,e.jsx(n,{of:C}),`
`,e.jsx(i.h2,{id:"card-presentazione",children:"Card presentazione"}),`
`,e.jsx(i.p,{children:"Le card presentazione sono utili per mettere in evidenza l'accesso rapido a contenuti chiave oppure permettere la presentazione di dati."}),`
`,e.jsx(i.h3,{id:"card-banner",children:"Card banner"}),`
`,e.jsxs(i.p,{children:[`Usa la variante banner per presentare una sezione principale del sito, un servizio chiave, oppure permettere l'accesso rapido a una funzionalità.
Attivala con l'attributo `,e.jsx(i.code,{children:'variant="banner"'}),"."]}),`
`,e.jsxs(i.p,{children:["Per inserire l'icona inseriscila nello slot ",e.jsx(i.code,{children:"image"}),"."]}),`
`,e.jsx(n,{of:P}),`
`,e.jsx(i.h4,{id:"card-banner-con-azione",children:"Card banner con azione"}),`
`,e.jsxs(i.p,{children:["Per guidare verso un'azione specifica, usa lo slot ",e.jsx(i.code,{children:"footer"}),` per ospitare un pulsante o link.
In questo caso, evita di collegare il titolo della card.`]}),`
`,e.jsx(n,{of:q}),`
`,e.jsx(i.h4,{id:"card-banner-inline",children:"Card banner inline"}),`
`,e.jsxs(i.p,{children:["Per disporre le card banner in orizzontale, usa l'attributo ",e.jsx(i.code,{children:'variant="inline-banner"'}),"."]}),`
`,e.jsxs(i.p,{children:["Per mantenere il layout orizzontale anche su viewport piccole o fortemente ingrandite, usa ",e.jsx(i.code,{children:'variant="inline-banner-mini'})," come nelle ultime card dell'esempio."]}),`
`,e.jsx(n,{of:w}),`
`,e.jsx(i.h2,{id:"personalizzazioni-e-stili",children:"Personalizzazioni e stili"}),`
`,e.jsx(i.p,{children:"Alcuni attributi utili a personalizzare le card."}),`
`,e.jsx(i.h3,{id:"bordi-e-ombre",children:"Bordi e ombre"}),`
`,e.jsx(i.p,{children:`La configurazione base delle card prevede un bordo e un'ombra leggera.
Per aumentare la separazione visiva dal contesto, puoi utilizzare ombre più evidenti impostando gli attributi come segue:`}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:'shadow="sm"'})," - ombra leggera (è il valore predefinito)"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:'shadow="md"'})," - ombra media"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:'shadow="lg"'})," - ombra pronunciata"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:'shadow="none"'})," - nessuna ombra"]}),`
`]}),`
`,e.jsxs(i.p,{children:["Quando utilizzi ombre più evidenti, puoi rimuovere il bordo se la distinzione dallo sfondo è sufficientemente chiara, impostando ",e.jsx(i.code,{children:'border="0"'}),"."]}),`
`,e.jsxs("it-callout",{variant:"success","heading-level":"h4",children:[e.jsx("span",{slot:"title",children:"Accessibilità: contrasto con lo sfondo"}),e.jsx("p",{children:"Per garantire una buona accessibilità, mantieni un rapporto di contrasto colore di almeno 3:1 tra la card e lo sfondo. Le combinazioni di bordi, ombre e colori di sfondo possono aiutarti a raggiungere questo obiettivo."})]}),`
`,e.jsx(n,{of:L}),`
`,e.jsx(i.h3,{id:"immagini",children:"Immagini"}),`
`,e.jsxs(i.p,{children:["Per definire il rapporto tra altezza e larghezza delle immagini in tutte le card di base, usa l'attributo ",e.jsx(i.code,{children:"ratio"}),"."]}),`
`,e.jsx(i.p,{children:"Le opzioni disponibili sono:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:'ratio="1x1"'})," - rapporto quadrato"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:'ratio="4x3"'})," - rapporto classico"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:'ratio="16x9"'})," - rapporto widescreen"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:'ratio="21x9"'})," - rapporto cinematografico"]}),`
`]}),`
`,e.jsx(i.p,{children:`Le varianti inline delle card hanno proporzioni immagini specifiche su desktop.
Su dispositivi piccoli o con ingrandimento elevato (tranne le mini) usano il layout verticale con le proporzioni degli esempi seguenti.`}),`
`,e.jsx(n,{of:U}),`
`,e.jsx(i.h3,{id:"altezze-delle-card",children:"Altezze delle card"}),`
`,e.jsx(i.p,{children:"Per la gestione delle altezze in caso di gruppi di card, l'impostazione di base è l’altezza basata sul contenuto."}),`
`,e.jsxs(i.p,{children:["Puoi cambiare questo comportamento per ogni card usando l'attributo ",e.jsx(i.code,{children:"full-height"})," (altezza basata su tutto lo spazio disponibile) sull'elemento ",e.jsx(i.code,{children:"<it-card>"}),`.
Questa impostazione è presente in diversi degli esempi che precedono.`]}),`
`,e.jsxs(i.p,{children:["Il contenuto dello slot ",e.jsx(i.code,{children:"footer"})," si allinea verticalmente al bordo inferiore come la data nell'esempio che segue."]}),`
`,e.jsx(n,{of:k}),`
`,e.jsx(i.h3,{id:"pulsanti-a-tutta-larghezza-su-mobile",children:"Pulsanti a tutta larghezza su mobile"}),`
`,e.jsxs(i.p,{children:["Puoi personalizzare il comportamento dei pulsanti nell'area metadati della card per ottenere pulsanti a larghezza fluida su dispositivi mobili utilizzando le classi ",e.jsx(i.code,{children:".d-grid"})," e ",e.jsx(i.code,{children:".d-md-block"}),`.
Per maggiori informazioni sulla personalizzazione dei pulsanti, consulta la `,e.jsx(i.a,{href:"/docs/componenti-button--documentazione#varianti-di-dimensione",children:"documentazione sulle varianti di dimensioni dei buttons"}),"."]}),`
`,e.jsx(n,{of:S}),`
`,e.jsx(i.h3,{id:"personalizzazione-degli-stili",children:"Personalizzazione degli stili"}),`
`,e.jsxs(i.p,{children:["Per personalizzare gli stili del componente puoi usare il selettore ",e.jsx(i.code,{children:"::part"})," passando i seguenti valori:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"title"})," - per personalizzare il titolo"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"body"})," - per personalizzare il corpo"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"subtitle"})," - per personalizzare il sottotitolo"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"signature"})," - per personalizzare la porzione dell'autore"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"text"})," - per personalizzare il testo"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"footer"})," - per personalizzare il piede"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"actions"})," - per personalizzare le azioni aggiuntive della card"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"image-wrapper"})," - per personalizzare il contenitore dell'immagine"]}),`
`]}),`
`,e.jsxs(i.p,{children:[e.jsx(i.a,{href:"/docs/personalizzazione-degli-stili--documentazione#selettore-part",children:"Vedi qui la guida dettagliata"}),"."]}),`
`,e.jsx(i.h2,{id:"organizzazione-e-layout",children:"Organizzazione e layout"}),`
`,e.jsx(i.h3,{id:"uso-di-contenitori-responsive",children:"Uso di contenitori responsive"}),`
`,e.jsxs(i.p,{children:[`Se il tuo layout di pagina lo permette ti consigliamo di comprendere ogni gruppo di card in contenitori responsive,
usando le classi `,e.jsx(i.code,{children:".container-xl"})," oppure ",e.jsx(i.code,{children:".container-xxl"})," su un elemento ",e.jsx(i.code,{children:"div"}),` che contenga tutto il gruppo e il suo sistema di griglie.
Così potrai sfruttare al massimo tutto lo spazio a disposizione in tutte le combinazioni di dimensioni della viewport e fattori di ingrandimento.`]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<div class="container-xl">
  <div class="row">...</div>
  <div class="row">...</div>
</div>
`})}),`
`,e.jsxs(i.p,{children:["Usando contenitori con breakpoint fissi ",e.jsx(i.code,{children:".container"})," potresti sprecare un eccessivo spazio vuoto a destra e sinistra in alcune combinazioni."]}),`
`,e.jsx(i.h3,{id:"uso-della-griglia",children:"Uso della griglia"}),`
`,e.jsxs(i.p,{children:["Usando le griglie puoi organizzare le card in righe e colonne con le classi ",e.jsx(i.code,{children:".row"})," e ",e.jsx(i.code,{children:".col-*"})," per definire il numero di colonne desiderate."]}),`
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
`,e.jsxs(i.p,{children:["Negli esempi precedenti abbiamo usato per esempio ",e.jsx(i.code,{children:".col-12 col-md-6 col-lg-4"}),` per ottenere 1 colonna su dispositivi piccoli o viewport strette, 2 colonne su viewport medie e 3 colonne su viewport grandi.
Sono esempi puramente dimostrativi, `,e.jsx(i.strong,{children:"puoi usare qualsiasi combinazione"})," di colonne per ottenere il layout desiderato."]}),`
`,e.jsxs(i.p,{children:["La scelta del ",e.jsx(i.strong,{children:"numero di colonne"})," dipende dal layout della tua pagina e ha un ",e.jsx(i.strong,{children:"impatto sullo spazio interno"}),` alla card per il contenuto.
È importante quindi `,e.jsx(i.strong,{children:"bilanciare la dimensione"})," dei contenuti della card per garantire una buona leggibilità e un aspetto visivamente gradevole a tutte le dimensioni e/o fattori di ingrandimento della viewport."]}),`
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
`,e.jsx(i.p,{children:"Esempio di lista card:"}),`
`,e.jsx(n,{of:A}),`
`,e.jsx(i.h3,{id:"uso-di-classi-dedicate-per-piccoli-gruppi",children:"Uso di classi dedicate (per piccoli gruppi)"}),`
`,e.jsxs(i.p,{children:["Solo per piccoli gruppi di card (2-6 card) puoi inoltre usare ",e.jsx(i.code,{children:".it-card-group"})," per creare facilmente un layout responsive in un ",e.jsx(i.code,{children:"div"}),` contenitore.
Di default il numero di colonne su desktop è impostato a 4.`]}),`
`,e.jsx(n,{of:y}),`
`,e.jsx(i.h4,{id:"numero-di-colonne-specifiche",children:"Numero di colonne specifiche"}),`
`,e.jsxs(i.p,{children:["Usa ",e.jsx(i.code,{children:".it-card-group-N-cols"}),", dove modificando ",e.jsx(i.code,{children:"N"})," si possono ottenere layout con 2 o 3 colonne su desktop."]}),`
`,e.jsx(n,{of:D}),`
`,e.jsx(i.h4,{id:"centrate-orizzontalmente",children:"Centrate orizzontalmente"}),`
`,e.jsxs(i.p,{children:["Usa ",e.jsx(i.code,{children:".it-card-group-center"})," per centrare orizzontalmente il gruppo di card all'interno del contenitore."]}),`
`,e.jsx(n,{of:I}),`
`,e.jsx(i.h4,{id:"uso-di-classi-dedicate-rispetto-al-contenitore-sperimentale",children:"Uso di classi dedicate rispetto al contenitore (sperimentale)"}),`
`,e.jsxs(i.p,{children:["Gruppo di card che risponde a Container Queries attivabile usando la classe dedicata ",e.jsx(i.code,{children:".it-card-group-container-aware"}),` per adattarsi responsive alla dimensione del contenitore invece che alla viewport.
Ridimensiona la viewport o prova a visualizzare questa pagina su dispositivi di diverse dimensioni per apprezzare la differenza di approccio.`]}),`
`,e.jsx(i.p,{children:`Le Container Queries sono una tecnologia CSS moderna supportata nella maggior parte dei browser recenti.
Per i browser che non supportano questa funzionalità, si applica automaticamente un fallback basato su Media Queries standard.`}),`
`,e.jsx(n,{of:M}),`
`,e.jsx(i.h4,{id:"confronto-in-colonne-diverse",children:"Confronto in colonne diverse"}),`
`,e.jsx(i.p,{children:'Qui puoi esplorare come lo stesso gruppo di card "container-aware" si adatta a diverse larghezze di colonna, permettendo di realizzare layout complessi:'}),`
`,e.jsx(n,{of:N})]})}function F(a={}){const{wrapper:i}={...l(),...a.components};return i?e.jsx(i,{...a,children:e.jsx(r,{...a})}):r(a)}export{F as default};

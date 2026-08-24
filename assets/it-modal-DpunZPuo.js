import{j as e,M as s,T as d,C as n,a as c}from"./blocks-D1miezzc.js";import{useMDXComponents as r}from"./index-XvL543Dm.js";import{S as o,E as a,M as p,F as u,C as m,a as h,b as x,P as j,c as g,d as v,e as f,A as z,f as b,D as I,g as A,B as w,h as P,i as C}from"./it-modal.stories-ChfNsYN9.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-BcvJloFY.js";function t(l){const i={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...l.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:o}),`
`,e.jsx(d,{of:o}),`
`,e.jsx("description",{children:"Finestra di interazione a comparsa in sovrapposizione sul contenuto principale per focalizzare l'attenzione su un'azione specifica o un messaggio importante."}),`
`,e.jsx(i.h2,{id:"cosa-fa",children:"Cosa fa"}),`
`,e.jsxs(i.p,{children:["Il componente Modal (",e.jsx(i.code,{children:"<it-modal>"}),"), in italiano modale, è una finestra che si apre in sovrapposizione per permettere all'utente di leggere informazioni cruciali o svolgere azioni senza lasciare la pagina su cui si trova. È utile per conferme di azioni, form di accesso o registrazione e approfondimenti di contenuti specifici."]}),`
`,e.jsx(i.p,{children:"Usa le modali con moderazione: un uso eccessivo interrompe il normale flusso di navigazione."}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"https://designers.italia.it/design-system/componenti/modal/",rel:"nofollow",children:"Approfondisci quando e come usare il componente Modal"})}),`
`,e.jsx(i.h3,{id:"alternative-a-questo-componente",children:"Alternative a questo componente"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Tooltip (in lavorazione) e ",e.jsx(i.a,{href:"/docs/componenti-popover--documentazione",children:"Popover"}),": per spiegare una funzione specifica o fornire informazioni aggiuntive, sono meno invasive di una finestra modale e si possono attivare in diversi modi."]}),`
`]}),`
`,e.jsx(i.h2,{id:"anteprima-e-attributi-del-componente",children:"Anteprima e attributi del componente"}),`
`,e.jsx(i.p,{children:"Nella tabella trovi gli attributi per personalizzare l'aspetto e il comportamento del componente. Data la complessità, l'anteprima non verrà aggiornata in tempo reale al variare degli attributi."}),`
`,e.jsx(i.p,{children:"Per comprendere appieno le funzionalità del componente e delle sue varianti, consulta gli esempi interattivi contenuti nelle altre sezioni di questa pagina."}),`
`,e.jsx(n,{of:a}),`
`,e.jsx(c,{of:a}),`
`,e.jsx(i.h2,{id:"indicazioni-generali",children:"Indicazioni generali"}),`
`,e.jsxs(i.p,{children:["Per creare una modale, usa il componente ",e.jsx(i.code,{children:"<it-modal>"})," e inserisci al suo interno contenuto desiderato, intestazione ed eventuali azioni."]}),`
`,e.jsxs(i.p,{children:["Il componente ",e.jsx(i.code,{children:"<it-modal>"})," è composto dai seguenti slot:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"trigger"})," (",e.jsx(i.strong,{children:"obbligatorio"}),"), per definire il pulsante o l'elemento interattivo che apre la modale al clic;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"header"}),", per personalizzare l'intestazione della modale. Il contenuto di questo slot, come per l'attributo ",e.jsx(i.code,{children:"modal-title"}),", verrà associato all'attributo ",e.jsx(i.code,{children:"aria-labelledby"})," della modale;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"header-icon"}),": per inserire un'icona accanto all'intestazione nell'header della modale, disponibile per la variante ",e.jsx(i.code,{children:"alert"}),";"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"description"}),": per inserire una descrizione aggiuntiva. Il contenuto di questo slot, come per l'attributo ",e.jsx(i.code,{children:"modal-description"}),", verrà associato all'attributo ",e.jsx(i.code,{children:"aria-describedby"})," della modale;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"content"})," (",e.jsx(i.strong,{children:"obbligatorio"}),"), per inserire il contenuto principale della modale;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"footer"}),", per le azioni della modale come pulsanti di conferma o cancellazione ed eventuali elementi aggiuntivi."]}),`
`]}),`
`,e.jsxs(i.p,{children:["Inserisci il trigger per l'apertura della modale nello slot ",e.jsx(i.code,{children:"trigger"}),", come mostrato negli esempi con il componente ",e.jsx(i.code,{children:"it-button"}),"."]}),`
`,e.jsxs(i.p,{children:["Definisci il titolo della modale tramite lo slot ",e.jsx(i.code,{children:"header"})," o l’attributo ",e.jsx(i.code,{children:"modal-title"}),". Se non vuoi mostrare un titolo, fornisci un’etichetta accessibile tramite l’attributo it-aria-label."]}),`
`,e.jsxs(i.p,{children:["Imposta manualmente nello slot ",e.jsx(i.code,{children:"footer"})," eventuali azioni di conferma, cancellazione e chiusura della modale. Tutti gli esempi includono un’implementazione di base per la chiusura della modale al clic sui pulsanti, realizzata tramite event listener nello slot ",e.jsx(i.code,{children:"footer"}),", come mostrato di seguito:"]}),`
`,e.jsx("div",{class:"callout callout-primary",children:e.jsxs("div",{class:"callout-inner",children:[e.jsx("div",{class:"callout-title",children:e.jsx("span",{class:"text",children:"Attivazione via Javascript"})}),e.jsx("p",{children:e.jsxs(i.p,{children:["Il componente espone i metodi pubblici ",e.jsx(i.code,{children:"show()"}),", ",e.jsx(i.code,{children:"hide()"})," e ",e.jsx(i.code,{children:"toggle()"}),", rispettivamente per aprire/chiudere la modale e commutarne lo stato via codice."]})}),e.jsx("p",{class:"font-weight-bold",children:e.jsxs("strong",{children:["Non è necessaria l'implementazione via JS per l'apertura della modale, in quanto il componente gestisce automaticamente l'apertura al click dell'",e.jsx(i.code,{children:"it-button"})," o del pulsante inserito nello slot ",e.jsx(i.code,{children:"trigger"}),", ma è possibile implementare un'apertura manuale via JS qualora fosse necessario, ad esempio in caso di trigger non convenzionali o per esigenze specifiche di interazione e/o logiche di business."]})}),e.jsx("p",{class:"font-weight-bold",children:e.jsxs(i.p,{children:[`Al fine di garantire la completa compatibilità con tutti i moderni framework Javascript,
`,e.jsxs("strong",{children:["dovrai implementare autonomamente la chiusura della modale se vuoi inserire dei pulsanti di chiusura all'interno dello slot ",e.jsx(i.code,{children:"footer"}),"."]})]})}),e.jsxs("p",{children:[e.jsxs(i.p,{children:["Tutti gli esempi seguenti forniscono un'implementazione di base per la chiusura della modale, analoga alla seguente, attraverso event listener sul click dei pulsanti appartenenti allo slot ",e.jsx(i.code,{children:"footer"})," dei vari esempi:"]}),e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-js",children:`const closeModal = (event: Event) => {
  const el = event.currentTarget;
  const modal = el.closest('it-modal');
  modal?.hide();
};
`})})]}),e.jsx("p",{children:e.jsx(i.p,{children:"Se stai usando un framework moderno come React, Vue o Svelte, segui le best practice per l'implementazione dei Web Component all'interno del tuo framework, ad esempio gestendo le referenze agli elementi per l'attivazione manuale della modale via JS."})}),e.jsx("p",{children:e.jsxs(i.p,{children:["Vedi la sezione ",e.jsx("strong",{children:'"Proprietà, Metodi, ed Eventi accessibili via JS"'})," per maggiori dettagli sui metodi e gli eventi esposti dal componente."]})})]})}),`
`,e.jsx(i.h2,{id:"accessibilità",children:"Accessibilità"}),`
`,e.jsxs(i.p,{children:["Il componente ",e.jsx(i.code,{children:"it-modal"}),":"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["implementa le specifiche ARIA ",e.jsx(i.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/dialog/",rel:"nofollow",children:"WAI-ARIA Authoring Practices 1.1 dialog pattern"})," e gestisce automaticamente gli attributi ARIA necessari per garantire l'accessibilità della modale;"]}),`
`,e.jsx(i.li,{children:"rispetta le preferenze di riduzione del movimento impostate dall'utente a livello di sistema operativo, disabilitando le animazioni se l'impostazione è rilevata a livello di browser;"}),`
`,e.jsx(i.li,{children:"gestisce automaticamente il focus all'interno della modale quando viene aperta, spostandolo sul primo elemento interattivo disponibile e ciclando poi il focus all'interno della modale stessa attraverso una focus trap;"}),`
`,e.jsxs(i.li,{children:["supporta la chiusura della modale tramite il tasto ESC e/o cliccando sul backdrop, a meno che non venga specificato l'attributo ",e.jsx(i.code,{children:"static-backdrop"}),";"]}),`
`,e.jsx(i.li,{children:"ripristina il focus sull'elemento trigger una volta che la modale viene chiusa."}),`
`]}),`
`,e.jsx(i.p,{children:"Il componente rispetta le preferenze di riduzione del movimento impostate dall'utente a livello di sistema operativo, disabilitando le animazioni se l'impostazione è rilevata a livello di browser."}),`
`,e.jsx(i.p,{children:"Il componente gestisce automaticamente il focus all'interno della modale quando questa viene aperta, spostandolo sul primo elemento interattivo disponibile, e ciclando poi il focus all'interno della modale stessa attraverso una focus trap."}),`
`,e.jsxs(i.p,{children:["Il componente supporta la chiusura della modale tramite il tasto ESC e/o cliccando sul backdrop, a meno che non venga specificato l'attributo ",e.jsx(i.code,{children:"static-backdrop"}),"."]}),`
`,e.jsx(i.p,{children:"Il focus viene ripristinato sull'elemento di trigger una volta che la modale viene chiusa."}),`
`,e.jsx(i.p,{children:"Per realizzare modali accessibili a tutti gli utenti, assicurati di:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["popolare lo slot ",e.jsx(i.code,{children:"trigger"})," esclusivamente con elementi interattivi semanticamente corretti, come ",e.jsx(i.code,{children:"it-button"}),", ",e.jsx(i.code,{children:"button"})," o che supportino il ruolo di button."]}),`
`,e.jsxs(i.li,{children:["popolare lo slot ",e.jsx(i.code,{children:"header"})," o uno tra gli attributi ",e.jsx(i.code,{children:"modal-title"})," e ",e.jsx(i.code,{children:"it-aria-label"})," per fornire un'etichetta accessibile alla modale. Se non vuoi mostrare il titolo, devi usare l'attributo ",e.jsx(i.code,{children:"it-aria-label"}),";"]}),`
`,e.jsxs(i.li,{children:["in caso di contenuti che includono strutture semantiche (come liste, tabelle, paragrafi multipli), non valorizzare l'attributo ",e.jsx(i.code,{children:"modal-description"})," e/o non inserire contenuto nello slot ",e.jsx(i.code,{children:"description"}),". (",e.jsx(i.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/#wai-ariaroles,states,andproperties",rel:"nofollow",children:"Approfondisci ruoli, stati e proprietà WAI-ARIA"}),");"]}),`
`,e.jsxs(i.li,{children:["includi sempre un pulsante di chiusura della modale tramite l'attributo ",e.jsx(i.code,{children:"close-button"}),", o implementalo manualmente nello slot ",e.jsx(i.code,{children:"footer"})," tramite un pulsante ",e.jsx(i.code,{children:"it-button"}),"."]}),`
`]}),`
`,e.jsx(i.h2,{id:"con-pulsante-di-chiusura",children:"Con pulsante di chiusura"}),`
`,e.jsx(i.p,{children:"Il pulsante di chiusura è posizionato nell'angolo in alto a destra della modale."}),`
`,e.jsxs(i.p,{children:["Imposta il valore dell'attributo ",e.jsx(i.code,{children:"close-button"})," su ",e.jsx(i.code,{children:"true"})," (valore di default) per mostrarlo o su ",e.jsx(i.code,{children:"false"})," per nasconderlo."]}),`
`,e.jsxs(i.p,{children:["Fornisci un'etichetta accessibile al pulsante di chiusura tramite l'attributo ",e.jsx(i.code,{children:"close-label"}),"."]}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(i.h2,{id:"con-footer-personalizzato",children:"Con footer personalizzato"}),`
`,e.jsxs(i.p,{children:["Puoi personalizzare il footer della modale inserendo il contenuto desiderato nello slot ",e.jsx(i.code,{children:"footer"}),"."]}),`
`,e.jsx(i.p,{children:"Questo ti permette di aggiungere pulsanti di azione, link o qualsiasi altro elemento HTML che ritieni opportuno."}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(i.h2,{id:"modale-con-elementi-form",children:"Modale con elementi form"}),`
`,e.jsx(i.p,{children:"Puoi inserire elementi form all’interno della modale."}),`
`,e.jsx(i.p,{children:"Ad esempio, una modale con un elenco di radio button:"}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(i.h2,{id:"varianti",children:"Varianti"}),`
`,e.jsxs(i.p,{children:["Il componente ",e.jsx(i.code,{children:"<it-modal>"})," offre alcune varianti predefinite per adattarsi a diversi scenari d'uso."]}),`
`,e.jsx(i.h3,{id:"modale-con-icona",children:"Modale con icona"}),`
`,e.jsxs(i.p,{children:["Per dare enfasi visiva, puoi aggiungere un'icona nell'header inserendo un componente ",e.jsx(i.code,{children:"it-icon"})," nello slot ",e.jsx(i.code,{children:"header-icon"}),". Valorizza l'attributo ",e.jsx(i.code,{children:"variation"})," con valore ",e.jsx(i.code,{children:"alert"})," per ottenere il layout corretto."]}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(i.h3,{id:"modale-con-liste-di-link",children:"Modale con liste di link"}),`
`,e.jsxs(i.p,{children:["Per inserire liste di link all’interno della modale, valorizza l'attributo ",e.jsx(i.code,{children:"variation"})," con valore ",e.jsx(i.code,{children:"link-list"}),"."]}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(i.h3,{id:"modale-popconfirm",children:"Modale popconfirm"}),`
`,e.jsxs(i.p,{children:["La modale di tipo popconfirm è utile per brevi messaggi di conferma. Per ottenere questo layout, valorizza l'attributo ",e.jsx(i.code,{children:"variant"})," con valore ",e.jsx(i.code,{children:"popconfirm"}),"."]}),`
`,e.jsxs(i.p,{children:["Il titolo della modale è facoltativo. Se non hai bisogno di un titolo, non popolare lo slot ",e.jsx(i.code,{children:"header"})," né valorizzare l'attributo ",e.jsx(i.code,{children:"modal-title"}),", ma fornisci un titolo alternativo tramite l'attributo ",e.jsx(i.code,{children:"it-aria-label"})," per garantire accessibilità."]}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(i.h2,{id:"scroll-di-contenuti-lunghi",children:"Scroll di contenuti lunghi"}),`
`,e.jsx(i.p,{children:"Quando le modali sono troppo lunghe per il viewport o il dispositivo dell’utente, scorrono indipendentemente dalla pagina stessa."}),`
`,e.jsxs(i.p,{children:["Puoi utilizzare l'attributo ",e.jsx(i.code,{children:"footer-shadow"})," per distinguere l'elemento footer con un'ombra."]}),`
`,e.jsx(n,{of:g}),`
`,e.jsx(i.h2,{id:"scroll-interno-alla-modale",children:"Scroll interno alla modale"}),`
`,e.jsxs(i.p,{children:["Puoi abilitare lo scroll all'interno del corpo della modale utilizzando l'attributo ",e.jsx(i.code,{children:"scrollable"}),"."]}),`
`,e.jsx(i.p,{children:"Quando abiliti questa funzionalità:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"l'altezza della modale viene limitata in base all'altezza del viewport;"}),`
`,e.jsx(i.li,{children:"il contenuto all'interno della modale diventa scrollabile se supera questa altezza massima;"}),`
`,e.jsxs(i.li,{children:["il contenuto all'interno della modale diventa raggiungibile da tastiera, secondo le ",e.jsx(i.a,{href:"https://dequeuniversity.com/rules/axe-devtools/4.6/scrollable-region-focusable",rel:"nofollow",children:"linee guida ARIA"}),"."]}),`
`]}),`
`,e.jsx(n,{of:v}),`
`,e.jsx(i.h2,{id:"posizionamento",children:"Posizionamento"}),`
`,e.jsx(i.h3,{id:"centratura-verticale",children:"Centratura verticale"}),`
`,e.jsxs(i.p,{children:["Per centrare verticalmente la modale, valorizza l'attributo ",e.jsx(i.code,{children:"position"})," con il valore ",e.jsx(i.code,{children:"center"}),"."]}),`
`,e.jsx(n,{of:f}),`
`,e.jsx(i.h3,{id:"allineamento-a-sinistra",children:"Allineamento a sinistra"}),`
`,e.jsxs(i.p,{children:["Per aprire la modale da sinistra a destra, valorizza l'attributo ",e.jsx(i.code,{children:"position"})," con il valore ",e.jsx(i.code,{children:"left"}),"."]}),`
`,e.jsx(i.p,{children:"Il contenuto della modale diventa scrollabile e raggiungibile da tastiera automaticamente."}),`
`,e.jsx(n,{of:z}),`
`,e.jsx(i.h3,{id:"allineamento-a-destra",children:"Allineamento a destra"}),`
`,e.jsxs(i.p,{children:["Per aprire la modale da destra a sinistra, valorizza l'attributo ",e.jsx(i.code,{children:"position"})," con il valore ",e.jsx(i.code,{children:"right"}),"."]}),`
`,e.jsx(i.p,{children:"Il contenuto della modale diventa scrollabile e raggiungibile da tastiera automaticamente."}),`
`,e.jsx(n,{of:b}),`
`,e.jsx(i.h2,{id:"dimensioni-opzionali",children:"Dimensioni opzionali"}),`
`,e.jsxs(i.p,{children:["Usa l'attributo ",e.jsx(i.code,{children:"size"})," per modificare la larghezza della modale. I valori disponibili sono ",e.jsx(i.code,{children:"sm"}),", ",e.jsx(i.code,{children:"lg"}),", ",e.jsx(i.code,{children:"xl"}),`.
Queste dimensioni entrano in gioco in determinati breakpoint per evitare barre di scorrimento orizzontali su finestre più strette.`]}),`
`,e.jsx(n,{of:I}),`
`,e.jsx(i.h2,{id:"rimuovere-lanimazione",children:"Rimuovere l’animazione"}),`
`,e.jsxs(i.p,{children:["Per far aprire una modale senza senza animazione, aggiungi l'attributo ",e.jsx(i.code,{children:"disable-animation"}),"."]}),`
`,e.jsx(i.p,{children:"È una scelta stilistica e non influisce sull'accessibilità della modale: le animazioni rispettano già le preferenze di riduzione del movimento impostate dall'utente."}),`
`,e.jsx(n,{of:A}),`
`,e.jsx(i.h2,{id:"backdrop-statico",children:"Backdrop statico"}),`
`,e.jsxs(i.p,{children:["Per creare una modale che non si chiude cliccando sullo sfondo, usa l'atributo ",e.jsx(i.code,{children:"static-backdrop"}),`.
La modale si chiuderà solo tramite il pulsante di chiusura, tramite altre azioni specifiche all'interno della modale stessa e premendo `,e.jsx(i.code,{children:"Esc"})," da tastiera ."]}),`
`,e.jsx(n,{of:w}),`
`,e.jsx(i.h2,{id:"proprietà-metodi-ed-eventi-accessibili-via-js",children:"Proprietà, metodi ed eventi accessibili via js"}),`
`,e.jsx(i.p,{children:"Il componente espone dei metodi ed eventi utili per eventuali interazioni via js."}),`
`,e.jsx(i.h3,{id:"metodi",children:"Metodi"}),`
`,e.jsx(i.p,{children:"Il componente espone i seguenti metodi pubblici:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"show()"}),", apre la modale;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"hide()"}),", chiude la modale;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"toggle()"}),", alterna lo stato."]}),`
`]}),`
`,e.jsx(n,{of:P}),`
`,e.jsx(i.h3,{id:"eventi",children:"Eventi"}),`
`,e.jsx(i.p,{children:"Il componente emette i seguenti eventi custom:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"it-modal-open"}),", quando la modale si apre;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"it-modal-close"}),", quando la modale si chiude."]}),`
`]}),`
`,e.jsxs(i.p,{children:["Entrambi gli eventi sono ",e.jsx(i.strong,{children:"cancelable"}),": il comportamento di default (apertura/chiusura) viene eseguito solo se l'evento non viene annullato. Chiamando ",e.jsx(i.code,{children:"event.preventDefault()"})," puoi intercettare l'azione e, ad esempio, eseguire logica personalizzata e richiamare poi ",e.jsx(i.code,{children:"hide()"})," per chiudere la modale programmaticamente:"]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-js",children:`const modal = document.querySelector('it-modal');
let _closing = false;

modal.addEventListener('it-modal-close', (e) => {
  if (_closing) return;
  e.preventDefault(); // intercetta la chiusura di default
  // esegui qui la tua logica personalizzata...
  _closing = true;
  modal.hide(); // chiudi la modale programmaticamente
  _closing = false;
});
`})}),`
`,e.jsx(n,{of:C}),`
`,e.jsx(i.h2,{id:"personalizzazione-degli-stili",children:"Personalizzazione degli stili"}),`
`,e.jsxs(i.p,{children:["Per personalizzare stili, usa il selettore ",e.jsx(i.code,{children:"::part"})," passando uno dei seguenti valori a seconda delle parti su cui vuoi agire:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"::part(modal)"}),";"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"::part(modal-content-wrapper)"}),";"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"::part(modal-content)"}),";"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"::part(modal-header)"}),";"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"::part(modal-body)"}),";"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"::part(modal-footer)"}),"."]}),`
`]}),`
`,e.jsxs(i.p,{children:[e.jsx(i.a,{href:"/docs/personalizzazione-degli-stili--documentazione#selettore-part",children:"Vai alla guida sul selettore part"}),"."]})]})}function E(l={}){const{wrapper:i}={...r(),...l.components};return i?e.jsx(i,{...l,children:e.jsx(t,{...l})}):t(l)}export{E as default};

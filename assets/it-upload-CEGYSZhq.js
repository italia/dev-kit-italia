import{j as e,M as m,C as n,a as l,D as o}from"./blocks-CToh_lwI.js";import{useMDXComponents as p}from"./index-Bhsl1YDk.js";import{S as h,E as r,U as u,a as x,b as t,c as j,d as s,e as g,f as d,M as v,g as f,h as z,I as b}from"./it-upload.stories-BR3hPjXS.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-Cl3Kz-XE.js";import"./formControlReusableStories-Bet2TDPn.js";function c(a){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...p(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:h}),`
`,e.jsx(i.h1,{id:"upload",children:"Upload"}),`
`,e.jsx("description",{children:"Elementi dei form dedicati al caricamento file"}),`
`,e.jsx(i.h2,{id:"cosa-fa",children:"Cosa fa"}),`
`,e.jsx(i.p,{children:"Il componente Upload consente l'upload di file attraverso diverse modalità: lista verticale, anteprima immagini, gallery, avatar, o drag & drop."}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"https://designers.italia.it/design-system/componenti/upload/",rel:"nofollow",children:"Approfondisci come e quando usare il componente Upload"})}),`
`,e.jsx(i.h2,{id:"indicazioni-generali",children:"Indicazioni generali"}),`
`,e.jsx(i.p,{children:"Il Kit offre tre componenti distinti che coprono i principali casi d'uso per l'upload di file:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"<it-upload>"})," — lista verticale dei file caricati, con supporto per anteprima immagini e variante gallery. Adatto a form che richiedono l'allegato di uno o più documenti."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"<it-upload-avatar>"})," — caricamento e anteprima immediata di una foto profilo circolare. Ideale per sezioni di impostazioni account o profilo utente."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"<it-upload-drag-drop>"})," — area di trascinamento per il caricamento di un singolo file, con stati di progresso gestibili via JavaScript. Adatto a flussi che richiedono un'esperienza di upload più guidata."]}),`
`]}),`
`,e.jsxs(i.p,{children:["Ognuno dei tre componenti delega la selezione dei file a un ",e.jsx(i.code,{children:'<input type="file">'})," nativo, accessibile da tastiera e compatibile con le tecnologie assistive. In ",e.jsx(i.code,{children:"<it-upload-avatar>"})," e ",e.jsx(i.code,{children:"<it-upload-drag-drop>"})," l'input è nascosto visivamente ma rimane accessibile agli screen reader tramite l'etichetta ARIA associata."]}),`
`,e.jsxs(i.p,{children:["Tutti e tre i componenti partecipano alla validazione nativa HTML: aggiungi l'attributo ",e.jsx(i.code,{children:"required"})," per rendere il campo obbligatorio all'interno di un ",e.jsx(i.code,{children:"<form>"}),". Assegna sempre un ",e.jsx(i.code,{children:"name"})," significativo per identificare il campo nei dati del form."]}),`
`,e.jsx(i.p,{children:"Gli attributi condivisi dai tre componenti sono:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"name"})," — nome del campo, inviato con il valore nella sottomissione del form."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"required"})," — rende il campo obbligatorio; in assenza di un file selezionato il form non può essere inviato."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"disabled"})," — disabilita il componente e ne impedisce l'interazione."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"accept"})," — limita i tipi di file accettati (es. ",e.jsx(i.code,{children:'"image/*"'}),", ",e.jsx(i.code,{children:'".pdf,.docx"'}),")."]}),`
`]}),`
`,e.jsxs(i.p,{children:["Per ",e.jsx(i.code,{children:"<it-upload>"}),", fornisci sempre un'etichetta nello slot ",e.jsx(i.code,{children:"label"})," (",e.jsx(i.code,{children:'<span slot="label">Carica documenti</span>'}),"): il componente la usa come testo del pulsante e come nome accessibile del campo."]}),`
`,e.jsxs(i.p,{children:["Se vuoi modificare l'icona del pulsante di ",e.jsx(i.code,{children:"<it-upload>"}),", usa un componente ",e.jsx(i.code,{children:"it-icon"})," nello slot ",e.jsx(i.code,{children:"icon"})," per sostituire l'icona predefinita con una a tua scelta."]}),`
`,e.jsx(i.h2,{id:"accessibilità",children:"Accessibilità"}),`
`,e.jsx(i.p,{children:"I tre componenti Upload sono progettati per supportare la navigazione da tastiera, gli screen reader e le best practice ARIA."}),`
`,e.jsx(i.p,{children:"In particolare:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["In ",e.jsx(i.code,{children:"<it-upload>"}),", il testo dello slot ",e.jsx(i.code,{children:"label"})," è usato sia come etichetta visibile sia come nome accessibile dell'input nativo. Il componente emette un avviso in console se l'etichetta manca."]}),`
`,e.jsxs(i.li,{children:["In ",e.jsx(i.code,{children:"<it-upload-avatar>"}),", l'etichetta dell'input file è generata automaticamente tramite il sistema i18n del componente."]}),`
`,e.jsxs(i.li,{children:["In ",e.jsx(i.code,{children:"<it-upload-drag-drop>"}),", l'area di drop espone ",e.jsx(i.code,{children:'role="region"'}),' con un nome accessibile; il link "selezionalo dal dispositivo" consente la selezione da tastiera senza necessità di trascinamento.']}),`
`]}),`
`,e.jsx(i.p,{children:"Per garantire l'accessibilità dei componenti Upload, segui queste linee guida:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Fornisci sempre un'etichetta descrittiva per ogni campo upload."}),`
`,e.jsxs(i.li,{children:["Usa l'attributo ",e.jsx(i.code,{children:"support-text"})," di ",e.jsx(i.code,{children:"<it-upload>"})," per informare l'utente sui requisiti del campo (formati accettati, dimensione massima) prima dell'interazione."]}),`
`,e.jsxs(i.li,{children:["Per ",e.jsx(i.code,{children:"<it-upload-drag-drop>"}),", completa sempre il ciclo di caricamento via JavaScript (progresso, successo o errore): lo stato viene comunicato esplicitamente anche agli utenti di screen reader."]}),`
`]}),`
`,e.jsx(i.h2,{id:"upload-con-lista-di-file",children:"Upload con lista di file"}),`
`,e.jsxs(i.p,{children:["Modifica gli attributi nella tabella per personalizzare in tempo reale l'aspetto e il comportamento del componente. Per vedere come cambia il codice, clicca su ",e.jsx(i.strong,{children:"Show code"}),"."]}),`
`,e.jsx(n,{of:r}),`
`,e.jsx(l,{of:r}),`
`,e.jsx(i.h2,{id:"con-anteprima-delle-immagini",children:"Con anteprima delle immagini"}),`
`,e.jsxs(i.p,{children:["Aggiungi ",e.jsx(i.code,{children:"image-preview"})," per sostituire l'icona generica che rappresenta un file con un'anteprima thumbnail delle immagini caricate: è consigliato quando il campo accetta prevalentemente immagini."]}),`
`,e.jsx(i.p,{children:"Il componente ottimizza la visualizzazione delle immagini anche quando queste non hanno proporzione quadrata, si consiglia comunque di utilizzare immagini dal peso contenuto."}),`
`,e.jsxs(i.p,{children:["Ogni file nella lista può trovarsi in uno dei seguenti stati: ",e.jsx(i.code,{children:"loading"})," (con percentuale di avanzamento), ",e.jsx(i.code,{children:"success"})," (caricamento completato) o ",e.jsx(i.code,{children:"error"})," (caricamento fallito)."]}),`
`,e.jsxs(i.p,{children:["I file in stato ",e.jsx(i.code,{children:"success"})," possono essere rimossi tramite il pulsante X aggiuntivo: l'utente può così correggere la selezione senza dover ricaricare il form."]}),`
`,e.jsxs(i.p,{children:["Usa i metodi ",e.jsx(i.code,{children:"addFile()"}),", ",e.jsx(i.code,{children:"setFileStatus()"})," e ",e.jsx(i.code,{children:"setFileThumbnail()"})," per gestire la lista programmaticamente — consulta la sezione ",e.jsx(i.strong,{children:"Proprietà, Metodi ed Eventi"})," per i dettagli."]}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(i.h3,{id:"upload-gallery",children:"Upload Gallery"}),`
`,e.jsxs(i.p,{children:["Con ",e.jsx(i.code,{children:'variant="gallery"'}),' le foto caricate vengono visualizzate in una griglia a "pictures wall", ideale per gestire upload multipli di immagini.']}),`
`,e.jsx(i.p,{children:"Anche in questo caso, nonostante il componente ottimizzi la visualizzazione delle immagini quando queste non hanno proporzione quadrata, si consiglia comunque di utilizzare immagini dal peso contenuto."}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(i.h2,{id:"upload-con-avatar",children:"Upload con Avatar"}),`
`,e.jsx(i.p,{children:"Questo elemento combina la visualizzazione dell’immagine Avatar con l’input tipo file per permettere l’upload di una nuova immagine."}),`
`,e.jsxs(i.p,{children:["Modifica gli attributi nella tabella per personalizzare in tempo reale l'aspetto e il comportamento del componente. Per vedere come cambia il codice, clicca su ",e.jsx(i.strong,{children:"Show code"}),"."]}),`
`,e.jsx(n,{of:t}),`
`,e.jsx(l,{of:t}),`
`,e.jsxs(i.p,{children:["Puoi scegliere tra due dimensioni tramite l'attributo ",e.jsx(i.code,{children:"size"}),": ",e.jsx(i.code,{children:"xxl"})," (standard) e ",e.jsx(i.code,{children:"xl"})," (compatta). L'anteprima viene aggiornata immediatamente dopo la selezione di un nuovo file."]}),`
`,e.jsxs(i.p,{children:[e.jsx(i.strong,{children:"Ci si aspetta venga caricato un solo file (immagine)"}),"."]}),`
`,e.jsxs(i.p,{children:[e.jsx(i.strong,{children:"L’elemento ha design e comportamento differenti in versione mobile"}),", si consiglia quindi di ridurre le dimensioni della finestra del browser per testare questa versione."]}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(i.h2,{id:"upload-drag--drop",children:"Upload Drag & Drop"}),`
`,e.jsxs(i.p,{children:["Usa ",e.jsx(i.code,{children:"<it-upload-drag-drop>"})," per proporre un'area di trascinamento dedicata dove l'utente può caricare un file trascinandolo sull'area, oppure tramite il link di selezione manuale."]}),`
`,e.jsxs(i.p,{children:["Modifica gli attributi nella tabella per personalizzare in tempo reale l'aspetto e il comportamento del componente. Per vedere come cambia il codice, clicca su ",e.jsx(i.strong,{children:"Show code"}),"."]}),`
`,e.jsx(n,{of:s}),`
`,e.jsx(l,{of:s}),`
`,e.jsx(i.h3,{id:"gestione-automatica-e-manuale-dello-stato",children:"Gestione automatica e manuale dello stato"}),`
`,e.jsx(i.p,{children:"Il componente supporta due modalità per gestire il caricamento:"}),`
`,e.jsxs(i.p,{children:[e.jsx(i.strong,{children:"Modalità automatica (consigliata per casi semplici):"})," Il componente auto-gestisce l'avvio e lo stato indeterminato"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Al completamento del ",e.jsx(i.strong,{children:"dragenter"}),": emette l'evento annullabile ",e.jsx(i.code,{children:"it-dd-start"}),". Se non prevenuto, chiama ",e.jsx(i.code,{children:"start()"})," e mostra l'indicatore di progresso indeterminato."]}),`
`,e.jsxs(i.li,{children:["Al completamento del ",e.jsx(i.strong,{children:"drop"})," (o selezione da file input): emette l'evento annullabile ",e.jsx(i.code,{children:"it-dd-drop"}),". Se non prevenuto, chiama ",e.jsx(i.code,{children:"start()"})," e attiva la visualizzazione indeterminata."]}),`
`]}),`
`,e.jsxs(i.p,{children:[e.jsx(i.strong,{children:"Modalità manuale (per scenari complessi):"})," Tu assumi il controllo totale del ciclo di caricamento"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Ascolta gli eventi ",e.jsx(i.code,{children:"it-dd-start"})," e ",e.jsx(i.code,{children:"it-dd-drop"})]}),`
`,e.jsxs(i.li,{children:["Chiama ",e.jsx(i.code,{children:"e.preventDefault()"})," per annullare il comportamento automatico"]}),`
`,e.jsxs(i.li,{children:["Invoca manualmente ",e.jsx(i.code,{children:"el.start()"}),", ",e.jsx(i.code,{children:"el.progress(value)"}),", ",e.jsx(i.code,{children:"el.success()"}),", oppure ",e.jsx(i.code,{children:"el.reset()"})," nei tempi che preferisci"]}),`
`]}),`
`,e.jsx(i.p,{children:"Esempo di controllo manuale:"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-js",children:`const dd = document.getElementById('my-upload');

// Annulla il comportamento automatico e gestisci manualmente
dd.addEventListener('it-dd-drop', (event) => {
  event.preventDefault();

  // Inizia il caricamento
  dd.start();

  // Simula la progressione
  let progress = 0;
  const interval = setInterval(() => {
    progress += 0.1;
    dd.progress(Math.min(progress, 1));

    if (progress >= 1) {
      clearInterval(interval);
      // Completa l'operazione
      dd.success();
    }
  }, 500);
});
`})}),`
`,e.jsx(i.p,{children:"Lo stato di success dipende dal caricamento corretto del file sul server e va quindi gestito da chi svilupperà il front-end/back-end del sito o webapp."}),`
`,e.jsxs(i.p,{children:["Per tornare allo stato iniziale (inattivo, senza file selezionato, progresso a 0), chiama ",e.jsx(i.code,{children:"el.reset()"}),"."]}),`
`,e.jsx(i.p,{children:"Viene mostrato di seguito un esempio interattivo simulato."}),`
`,e.jsx(n,{of:g}),`
`,e.jsx(i.h2,{id:"integrazione-form-e-validazione",children:"Integrazione form e validazione"}),`
`,e.jsxs(i.p,{children:["Tutti e tre i componenti partecipano alla validazione nativa HTML tramite il meccanismo ",e.jsx(i.code,{children:"FormControlController"}),". Aggiungendo l'attributo ",e.jsx(i.code,{children:"required"})," il campo impedisce l'invio del form se non è valorizzato."]}),`
`,e.jsxs(i.p,{children:["Per ",e.jsx(i.code,{children:"<it-upload-avatar>"}),", se ",e.jsx(i.code,{children:"src"})," è già valorizzato, il requisito è soddisfatto anche senza un nuovo caricamento: l'immagine esistente è considerata un valore valido."]}),`
`,e.jsx(o,{of:d}),`
`,e.jsx(n,{of:d}),`
`,e.jsx(i.h2,{id:"proprietà-metodi-ed-eventi-accessibili-via-js",children:"Proprietà, Metodi, ed Eventi accessibili via JS"}),`
`,e.jsx(i.h3,{id:"it-upload",children:e.jsx(i.code,{children:"<it-upload>"})}),`
`,e.jsx(o,{of:v}),`
`,e.jsx(i.h3,{id:"it-upload-avatar",children:e.jsx(i.code,{children:"<it-upload-avatar>"})}),`
`,e.jsx(o,{of:f}),`
`,e.jsx(i.h3,{id:"it-upload-drag-drop",children:e.jsx(i.code,{children:"<it-upload-drag-drop>"})}),`
`,e.jsx(o,{of:z}),`
`,e.jsx(i.h2,{id:"i18n",children:"i18n"}),`
`,e.jsx(o,{of:b}),`
`,e.jsx(i.h2,{id:"personalizzazione-degli-stili",children:"Personalizzazione degli stili"}),`
`,e.jsxs(i.p,{children:["Puoi personalizzare lo stile interno dei componenti tramite il selettore ",e.jsx(i.code,{children:"::part"}),"."]}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"/docs/personalizzazione-degli-stili--documentazione#selettore-part",children:"Vai alla guida sul selettore part"})}),`
`,e.jsx(i.h3,{id:"it-upload-1",children:"it-upload"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:e.jsx(i.code,{children:"input-label"})}),' - Il pulsante/etichetta "Carica file" (elemento ',e.jsx(i.code,{children:"<label>"})," associato all'input)."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:e.jsx(i.code,{children:"file-remove-button"})})," - Il pulsante di rimozione di ogni riga nella lista file."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:e.jsx(i.code,{children:"gallery-remove-button"})})," - Il pulsante di rimozione circolare su ogni immagine nella gallery."]}),`
`]}),`
`,e.jsx(i.h3,{id:"it-upload-avatar-1",children:"it-upload-avatar"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:e.jsx(i.code,{children:"overlay-label"})})," - L'etichetta overlay che copre l'avatar al passaggio del mouse / focus."]}),`
`]}),`
`,e.jsx(i.h3,{id:"it-upload-drag-drop-1",children:"it-upload-drag-drop"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:e.jsx(i.code,{children:"drop-zone"})})," - L'area di trascinamento principale (il ",e.jsx(i.code,{children:'<div role="region">'}),")."]}),`
`]})]})}function P(a={}){const{wrapper:i}={...p(),...a.components};return i?e.jsx(i,{...a,children:e.jsx(c,{...a})}):c(a)}export{P as default};

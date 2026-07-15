import{j as e,M as h,C as n,a as p,D as a}from"./blocks-CT7VCudE.js";import{useMDXComponents as c}from"./index-JxopJXbk.js";import{T as x,E as s,C as j,a as m,b as u,D as g,V as z,c as f,G as o,d as v,e as b,I as r,M as t}from"./it-transfer.stories-BdvnK_3Q.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-DqPvw_k1.js";import"./formControlReusableStories-Bva_l15F.js";function d(l){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...l.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:x}),`
`,e.jsx(i.h1,{id:"transfer",children:"Transfer"}),`
`,e.jsx("description",{children:"Componente per la creazione e gestione di liste di checkbox con trasferimento di elementi tra una lista sorgente e una lista destinazione."}),`
`,e.jsx(i.h2,{id:"cosa-fa",children:"Cosa fa"}),`
`,e.jsx(i.p,{children:"Il componente Transfer permette di spostare facilmente elementi tra due liste affiancate. È particolarmente indicato per:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"gestire selezioni multiple di elementi;"}),`
`,e.jsx(i.li,{children:"organizzare e classificare contenuti;"}),`
`,e.jsx(i.li,{children:"filtrare dati in modo interattivo;"}),`
`,e.jsx(i.li,{children:"personalizzare preferenze o configurazioni utente."}),`
`]}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"https://designers.italia.it/design-system/componenti/transfer/",rel:"nofollow",children:"Approfondisci quando e come usare il componente Transfer"})}),`
`,e.jsx(i.h2,{id:"anteprima-e-attributi-del-componente",children:"Anteprima e attributi del componente"}),`
`,e.jsxs(i.p,{children:["Modifica gli attributi nella tabella per personalizzare in tempo reale l'aspetto e il comportamento del componente. Per vedere come cambia il codice, clicca su ",e.jsx(i.strong,{children:"Show code"}),"."]}),`
`,e.jsx(n,{of:s}),`
`,e.jsx(p,{of:s}),`
`,e.jsx(i.h2,{id:"indicazioni-generali",children:"Indicazioni generali"}),`
`,e.jsx(i.p,{children:"Il componente è composto da tre parti principali:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Lista sorgente"})," (sinistra): gli elementi disponibili tra cui scegliere;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Pulsanti di azione"})," (centro): per trasferire, ritrasferire e ripristinare;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Lista destinazione"})," (destra): gli elementi selezionati."]}),`
`]}),`
`,e.jsx(i.p,{children:"Il componente Transfer è composto da due elementi:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"it-transfer"}),": il contenitore principale che gestisce la logica e l'integrazione con il form;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"it-transfer-item"}),": il singolo elemento trasferibile, da inserire come figlio diretto di ",e.jsx(i.code,{children:"it-transfer"}),"."]}),`
`]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<it-transfer name="my-field">
  <it-transfer-item value="item1">Voce 1</it-transfer-item>
  <it-transfer-item value="item2">Voce 2</it-transfer-item>
</it-transfer>
`})}),`
`,e.jsx(i.h3,{id:"singolo-elemento-trasferibile",children:"Singolo elemento trasferibile"}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"it-transfer-item"})," rappresenta il singolo elemento che può essere spostato tra le due liste, ed espone i seguenti attributi:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"value"}),": il valore univoco dell'elemento, che viene inviato nel form se l'elemento è presente nella lista destinazione;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"disabled"}),": se impostato, l'elemento non può essere trasferito;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"target"}),": se impostato, l'elemento parte già nella lista destinazione al caricamento."]}),`
`]}),`
`,e.jsxs(i.p,{children:["Il testo all'interno di ",e.jsx(i.code,{children:"it-transfer-item"})," rappresenta l'etichetta visualizzata per l'elemento: questa può essere inserita nello slot di default, come testo semplice."]}),`
`,e.jsx(i.h2,{id:"accessibilità",children:"Accessibilità"}),`
`,e.jsx(i.p,{children:"Il componente Transfer implementa le seguenti specifiche per garantire un'esperienza accessibile:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["navigazione da tastiera: ",e.jsx(i.code,{children:"Tab"})," per spostarsi tra gli elementi, ",e.jsx(i.code,{children:"Space"})," per selezionare/deselezionare le checkbox, ",e.jsx(i.code,{children:"Enter"})," o ",e.jsx(i.code,{children:"Space"})," per attivare i pulsanti di trasferimento;"]}),`
`,e.jsxs(i.li,{children:["ogni lista ha un ",e.jsx(i.code,{children:'role="group"'})," con ",e.jsx(i.code,{children:"aria-labelledby"})," che punta all'intestazione;"]}),`
`,e.jsxs(i.li,{children:["i pulsanti di azione hanno ",e.jsx(i.code,{children:"aria-label"})," descrittivo e ",e.jsx(i.code,{children:"aria-disabled"})," per comunicare lo stato agli screen reader;"]}),`
`,e.jsxs(i.li,{children:["il checkbox di selezione totale nell'header riflette lo stato intermedio (",e.jsx(i.code,{children:"indeterminate"}),") quando solo alcuni elementi sono selezionati;"]}),`
`]}),`
`,e.jsx(i.h2,{id:"con-valori-preimpostati",children:"Con valori preimpostati"}),`
`,e.jsxs(i.p,{children:["Puoi impostare elementi nella lista destinazione al caricamento aggiungendo l'attributo ",e.jsx(i.code,{children:"target"})," agli ",e.jsx(i.code,{children:"it-transfer-item"})," desiderati."]}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(i.h2,{id:"etichette-personalizzate",children:"Etichette personalizzate"}),`
`,e.jsxs(i.p,{children:["Le etichette delle intestazioni delle due liste possono essere personalizzate con gli attributi ",e.jsx(i.code,{children:"source-label"})," e ",e.jsx(i.code,{children:"target-label"}),`. Di default vengono utilizzate le etichette in lingua italiana ("Sorgente" e "Destinazione").
Il testo di queste etichette è importante per l'accessibilità, in quanto viene letto dagli screen reader per identificare le liste. Assicurati che siano descrittive e coerenti con il contesto d'uso.`]}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(i.h2,{id:"elemento-singolo-non-trasferibile",children:"Elemento singolo non trasferibile"}),`
`,e.jsxs(i.p,{children:["Puoi rendere un singolo elemento non trasferibile con l'attributo ",e.jsx(i.code,{children:"disabled"})," sull'",e.jsx(i.code,{children:"it-transfer-item"}),"."]}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(i.h2,{id:"stato-disabilitato",children:"Stato disabilitato"}),`
`,e.jsxs(i.p,{children:["Impostando l'attributo ",e.jsx(i.code,{children:"disabled"})," su ",e.jsx(i.code,{children:"it-transfer"}),", l'intero componente viene disabilitato: le checkbox e i pulsanti non sono interagibili."]}),`
`,e.jsx(n,{of:g}),`
`,e.jsx(i.h2,{id:"integrazione-con-il-form",children:"Integrazione con il form"}),`
`,e.jsxs(i.p,{children:["Il componente ",e.jsx(i.code,{children:"it-transfer"})," si integra nativamente con i form HTML. Il valore inviato alla sottomissione è un array JSON dei valori (",e.jsx(i.code,{children:"value"}),") degli elementi presenti nella lista destinazione."]}),`
`,e.jsx(i.p,{children:e.jsx(i.strong,{children:"Esempio di valore nel form:"})}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{children:`selections=["item10","item11","item12"]
`})}),`
`,e.jsx(i.h2,{id:"validazione-e-gestione-degli-errori",children:"Validazione e gestione degli errori"}),`
`,e.jsxs(i.p,{children:["Se non hai impostato la validazione custom tramite l'attributo ",e.jsx(i.code,{children:"custom-validation"})," e hai impostato l'attributo ",e.jsx(i.code,{children:"required"}),", viene effettuata una validazione interna utilizzando la validazione nativa del browser."]}),`
`,e.jsx(n,{of:z}),`
`,e.jsx(i.h3,{id:"personalizzazione-dei-messaggi-di-errore",children:"Personalizzazione dei messaggi di errore"}),`
`,e.jsxs(i.p,{children:["Puoi personalizzare i messaggi di errore di validazione, traducendo le seguenti stringhe tramite l'",e.jsx(i.a,{href:"/docs/i18n-internazionalizzazione--documentazione",children:"utility di internazionalizzazione"}),":"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"validityGroupRequired"}),", messaggio che viene mostrato quando la lista destinazione è vuota e il componente ha l'attributo ",e.jsx(i.code,{children:"required"}),"."]}),`
`]}),`
`,e.jsx(i.p,{children:"Per gli altri errori di validazione non indicati, verranno mostrati i messaggi di errore nativi del browser."}),`
`,e.jsx(i.h3,{id:"validazione-esterna-validazione-custom",children:"Validazione esterna (validazione custom)"}),`
`,e.jsxs(i.p,{children:["Puoi anche validare il campo esternamente (ad esempio, via js o lato server), impostando l'attributo ",e.jsx(i.code,{children:'custom-validation="true"'}),`.
In questo modo la validazione di default del browser effettuata internamente al componente è disabilitata.`]}),`
`,e.jsx(i.h4,{id:"campo-invalido",children:"Campo invalido"}),`
`,e.jsxs(i.p,{children:["Nel caso il campo non sia valido, devi invalidarlo impostando il messaggio di errore da visualizzare attraverso l'attributo ",e.jsx(i.code,{children:'validity-message="Messaggio di errore"'}),"."]}),`
`,e.jsx(i.h4,{id:"campo-valido",children:"Campo valido"}),`
`,e.jsxs(i.p,{children:["Per riportare il campo ad uno stato 'valido', è sufficiente impostare il messaggio di errore a vuoto: ",e.jsx(i.code,{children:'validity-message=""'}),"."]}),`
`,e.jsx(n,{of:f}),`
`,e.jsx(i.h2,{id:"gestione-degli-eventi",children:"Gestione degli eventi"}),`
`,e.jsx(a,{of:o}),`
`,e.jsx(n,{of:o}),`
`,e.jsx(i.h2,{id:"evento-annullabile",children:"Evento annullabile"}),`
`,e.jsx(n,{of:v}),`
`,e.jsxs(i.p,{children:["Per riprendere l'azione dopo logica asincrona senza rischio di ricorsione, vedi ",e.jsx(i.a,{href:"#evento-annullabile-con-ripresa-asincrona",children:"la sezione dedicata"})," e il metodo ",e.jsx(i.code,{children:"commit()"}),"."]}),`
`,e.jsx(i.h2,{id:"evento-annullabile-con-ripresa-asincrona",children:"Evento annullabile con ripresa asincrona"}),`
`,e.jsx(i.p,{children:"Quando il trasferimento deve attendere una logica asincrona (validazione remota, conferma dell'utente, ecc.), il pattern corretto è:"}),`
`,e.jsxs(i.ol,{children:[`
`,e.jsxs(i.li,{children:["Chiama ",e.jsx(i.code,{children:"event.preventDefault()"})," nell'handler di ",e.jsx(i.code,{children:"it-transfer"})," per bloccare l'azione;"]}),`
`,e.jsx(i.li,{children:"Esegui la tua logica asincrona;"}),`
`,e.jsxs(i.li,{children:["Chiama ",e.jsx(i.code,{children:"el.commit(event.detail)"})," per applicare lo stato proposto dall'evento, senza rieseguire l'evento stesso."]}),`
`]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-js",children:`const el = document.querySelector('it-transfer');
el.addEventListener('it-transfer', async (e) => {
  e.preventDefault();
  const ok = await fetchConfirmation(e.detail);
  if (ok) el.commit(e.detail);
});
`})}),`
`,e.jsx(n,{of:b}),`
`,e.jsx(i.h2,{id:"",children:r.name}),`
`,e.jsx(a,{of:r}),`
`,e.jsx(i.h2,{id:"-1",children:t.name}),`
`,e.jsx(a,{of:t}),`
`,e.jsx(n,{of:t}),`
`,e.jsx(i.h2,{id:"personalizzazione-degli-stili",children:"Personalizzazione degli stili"}),`
`,e.jsxs(i.p,{children:["Per personalizzare l'aspetto del componente ",e.jsx(i.code,{children:"it-transfer"})," dall'esterno dello shadow DOM puoi utilizzare il selettore ",e.jsx(i.code,{children:"::part()"})," sui seguenti part esposti dal componente:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"base"})," — il ",e.jsx(i.code,{children:"div"})," radice che avvolge l'intero componente."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"row"})," — la riga Bootstrap che affianca le due liste e la colonna dei pulsanti."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"source-col"})," — la colonna che contiene la lista sorgente (sinistra)."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"buttons-col"})," — la colonna centrale che contiene i pulsanti di azione."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"target-col"})," — la colonna che contiene la lista destinazione (destra)."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"source-wrapper"})," — il ",e.jsx(i.code,{children:"div"})," della lista sorgente con bordo e intestazione (è anche il nodo ",e.jsx(i.code,{children:'role="group"'}),")."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"target-wrapper"})," — il ",e.jsx(i.code,{children:"div"})," della lista destinazione con bordo e intestazione (è anche il nodo ",e.jsx(i.code,{children:'role="group"'}),")."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"header"}),` — l'intestazione di ciascuna lista, contenente la checkbox "seleziona tutto" e il contatore degli elementi. Presente in entrambe le liste.`]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"scroll"})," — l'area a scorrimento verticale contenente le checkbox degli elementi. Presente in entrambe le liste."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"group"})," — il ",e.jsx(i.code,{children:"div"})," interno che raggruppa le singole checkbox degli elementi. Presente in entrambe le liste."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"buttons"})," — il ",e.jsx(i.code,{children:"div"})," che raggruppa i tre pulsanti di azione (trasferisci, ritrasferisci, ripristina)."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"forward-button"})," — il pulsante che sposta gli elementi selezionati dalla lista sorgente alla lista destinazione."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"back-button"})," — il pulsante che riporta gli elementi selezionati dalla lista destinazione alla lista sorgente."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"reset-button"})," — il pulsante che ripristina entrambe le liste allo stato iniziale."]}),`
`]}),`
`,e.jsxs(i.p,{children:[e.jsx(i.a,{href:"/docs/personalizzazione-degli-stili--documentazione#selettore-part",children:"Vedi qui la guida dettagliata"}),"."]})]})}function w(l={}){const{wrapper:i}={...c(),...l.components};return i?e.jsx(i,{...l,children:e.jsx(d,{...l})}):d(l)}export{w as default};

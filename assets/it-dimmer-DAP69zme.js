import{j as e,M as a,T as d,C as n,a as c}from"./blocks-CiljGaP5.js";import{useMDXComponents as t}from"./index-dC3epPjb.js";import{S as r,E as s,C as m,a as h,b as p,c as u,d as j,A as x,e as z}from"./it-dimmer.stories-luvirPnn.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-BIx49rSp.js";function l(o){const i={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:r}),`
`,e.jsx(d,{of:r}),`
`,e.jsx("description",{children:"Elemento che oscura una porzione di pagina per focalizzare l'attenzione su un contenuto specifico"}),`
`,e.jsx(i.h2,{id:"cosa-fa",children:"Cosa fa"}),`
`,e.jsx(i.p,{children:"Il componente Dimmer può essere utilizzato per focalizzare l'attenzione dell'utente su un contenuto di particolare rilevanza, posizionandosi in sovrapposizione ad una porzione o sezione di pagina esistente."}),`
`,e.jsx(i.h3,{id:"alternative-a-questo-componente",children:"Alternative a questo componente"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"/docs/componenti-notification--documentazione",children:"Notification"}),": per comunicare all'utente il risultato di un'operazione o un cambiamento di stato del sistema."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"/docs/componenti-modal--documentazione",children:"Modal"}),": quando l'utente deve compiere un'azione consapevole per proseguire."]}),`
`]}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"https://designers.italia.it/design-system/componenti/dimmer/",rel:"nofollow",children:"Approfondisci quando e come usare il Dimmer"})}),`
`,e.jsx(i.h2,{id:"anteprima-e-attributi-del-componente",children:"Anteprima e attributi del componente"}),`
`,e.jsxs(i.p,{children:["Modifica gli attributi nella tabella per personalizzare in tempo reale l'aspetto e il comportamento del componente. Per vedere come cambia il codice, clicca su ",e.jsx(i.strong,{children:"Show code"}),"."]}),`
`,e.jsx(n,{of:s}),`
`,e.jsx(c,{of:s}),`
`,e.jsx(i.h2,{id:"indicazioni-generali",children:"Indicazioni generali"}),`
`,e.jsxs(i.p,{children:["Inserisci il contenuto da oscurare nel ",e.jsx(i.strong,{children:"default slot"}),", e inserisci il contenuto dell'overlay nello ",e.jsxs(i.strong,{children:["slot ",e.jsx(i.code,{children:"content"})]}),"."]}),`
`,e.jsx(i.p,{children:e.jsx(i.strong,{children:"Slot disponibili:"})}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Nome"}),e.jsx("th",{children:"Descrizione"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"(default)"})}),e.jsx("td",{children:"Contenuto di sfondo da oscurare (card, immagini, testo, ecc.)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"content"})}),e.jsx("td",{children:"Contenuto libero dell'overlay: testi, titoli, pulsanti. Completamente a carico dell'utilizzatore"})]})]})]}),`
`,e.jsxs(i.p,{children:[e.jsx(i.strong,{children:"Proprietà icona:"})," usa l'attributo ",e.jsx(i.code,{children:"icon-name"})," con un nome icona Bootstrap Italia per aggiungere automaticamente una ",e.jsx(i.code,{children:"<it-icon>"})," nell'header del dimmer, senza dover inserire markup aggiuntivo."]}),`
`,e.jsx(i.h2,{id:"accessibilità",children:"Accessibilità"}),`
`,e.jsx(i.p,{children:"Il componente dimmer è progettato per essere accessibile, ma è importante seguire alcune linee guida per garantire un'esperienza accessibile:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["includi sempre una descrizione significativa nello slot ",e.jsx(i.code,{children:"content"})," quando il dimmer è usato per comunicare un messaggio;"]}),`
`,e.jsx(i.li,{children:"se il dimmer contiene pulsanti d'azione, assicurati che abbiano etichette comprensibili;"}),`
`]}),`
`,e.jsx(i.h2,{id:"varianti",children:"Varianti"}),`
`,e.jsxs(i.p,{children:["Il dimmer supporta una variante cromatica primaria, con sfondo del colore primario, attivabile tramite l'attributo ",e.jsx(i.code,{children:'variant="primary"'}),", e una variante scura ",e.jsx(i.code,{children:'variant="dark"'}),"."]}),`
`,e.jsx(i.h3,{id:"variante-primaria",children:"Variante primaria"}),`
`,e.jsxs(i.p,{children:["Puoi utilizzare l'attributo ",e.jsx(i.code,{children:"variant"})," con valore ",e.jsx(i.code,{children:'"primary"'})," per ottenere una versione con sfondo del colore primario. Questa è anche la variante di default del dimmer nel caso in cui l'attributo ",e.jsx(i.code,{children:"variant"})," non sia specificato."]}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(i.h3,{id:"variante-scura",children:"Variante scura"}),`
`,e.jsxs(i.p,{children:["Puoi utilizzare l'attributo ",e.jsx(i.code,{children:"variant"})," con valore ",e.jsx(i.code,{children:'"dark"'})," per ottenere una versione con sfondo scuro."]}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(i.h2,{id:"dimmer-con-azioni",children:"Dimmer con Azioni"}),`
`,e.jsxs(i.p,{children:["Un dimmer può contenere titoli e pulsanti d'azione. Inseriscili nello slot ",e.jsx(i.code,{children:"content"})," all'interno di un contenitore con classi ",e.jsx(i.code,{children:"dimmer-buttons bg-dark"}),". Gli esempi seguenti mostrano le possibili combinazioni di varianti e pulsanti azione."]}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(i.h3,{id:"dimmer-con-azioni-nella-variante-scura",children:"Dimmer con azioni nella variante scura"}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(i.h3,{id:"azione-singola",children:"Azione singola"}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(i.h2,{id:"attivo-di-default",children:"Attivo di default"}),`
`,e.jsxs(i.p,{children:["Puoi creare un dimmer inizialmente visibile valorizzando l'attributo ",e.jsx(i.code,{children:"active"}),". Il dimmer può anche essere attivato via codice usando i metodi pubblici ",e.jsx(i.code,{children:"show()"}),", ",e.jsx(i.code,{children:"hide()"})," e ",e.jsx(i.code,{children:"toggle()"}),"."]}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(i.h2,{id:"proprietà-metodi-ed-eventi-accessibili-via-js",children:"Proprietà, metodi ed eventi accessibili via js"}),`
`,e.jsx(i.p,{children:"Il componente espone dei metodi ed eventi utili per eventuali interazioni via js."}),`
`,e.jsx(i.h3,{id:"metodi",children:"Metodi"}),`
`,e.jsx(i.p,{children:"Il componente espone i seguenti metodi pubblici per la gestione programmatica:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"show()"})," — mostra il dimmer;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"hide()"})," — nasconde il dimmer;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"toggle()"})," — alterna lo stato di visibilità."]}),`
`]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-js",children:`const dimmerEl = document.getElementById('myDimmer');

dimmerEl.show();   // mostra
dimmerEl.hide();   // nasconde
dimmerEl.toggle(); // alterna
`})}),`
`,e.jsx(n,{of:z}),`
`,e.jsx(i.h3,{id:"eventi",children:"Eventi"}),`
`,e.jsx(i.p,{children:"Il componente emette i seguenti eventi custom:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"it-dimmer-show"}),":  Emesso quando il dimmer diventa visibile"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"it-dimmer-hide"}),":  Emesso quando il dimmer viene nascosto"]}),`
`]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-js",children:`const dimmerEl = document.getElementById('myDimmer');

dimmerEl.addEventListener('it-dimmer-show', (e) => {
  console.log('Dimmer visibile', e.detail.dimmer);
});

dimmerEl.addEventListener('it-dimmer-hide', (e) => {
  console.log('Dimmer nascosto', e.detail.dimmer);
});
`})}),`
`,e.jsx(i.h2,{id:"personalizzazione-degli-stili",children:"Personalizzazione degli stili"}),`
`,e.jsxs(i.p,{children:["Per personalizzare gli stili usa il selettore ",e.jsx(i.code,{children:"::part"})," con uno dei seguenti valori:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"::part(dimmable)"})," — il wrapper che racchiude l'intero componente;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"::part(dimmer)"})," — l'elemento overlay;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"::part(dimmer-inner)"})," — il contenitore centrale del contenuto dell'overlay;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"::part(dimmer-icon)"})," — il wrapper dell'icona (presente solo se ",e.jsx(i.code,{children:"icon-name"})," è valorizzato);"]}),`
`]}),`
`,e.jsxs(i.p,{children:[e.jsx(i.a,{href:"/docs/personalizzazione-degli-stili--documentazione#selettore-part",children:"Vai alla guida sul selettore part"}),"."]})]})}function C(o={}){const{wrapper:i}={...t(),...o.components};return i?e.jsx(i,{...o,children:e.jsx(l,{...o})}):l(o)}export{C as default};

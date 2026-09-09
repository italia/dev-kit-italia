import{j as e,M as l,T as c,C as n,a as d}from"./blocks-CRFIrLVd.js";import{useMDXComponents as s}from"./index--O4jdOk5.js";import{S as r,E as t,C as m,a as h,b as p,c as j,d as u,A as x,e as v}from"./it-dimmer.stories-DKEOeOxq.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-CPP02t7X.js";function a(o){const i={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:r}),`
`,e.jsx(c,{of:r}),`
`,e.jsx("description",{children:"Elemento che oscura una porzione di pagina per focalizzare l'attenzione su un contenuto specifico."}),`
`,e.jsx(i.h2,{id:"cosa-fa",children:"Cosa fa"}),`
`,e.jsxs(i.p,{children:["Il componente Dimmer (",e.jsx(i.code,{children:"it-dimmer"}),") oscura una porzione della pagina per portare l’attenzione dell’utente su contenuti o azioni mostrati in sovrapposizione all’interfaccia."]}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"https://designers.italia.it/design-system/componenti/dimmer/",rel:"nofollow",children:"Approfondisci quando e come usare il componente Dimmer"})}),`
`,e.jsx(i.h3,{id:"alternative-a-questo-componente",children:"Alternative a questo componente"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"/docs/componenti-notification--documentazione",children:"Notification"}),": per comunicare all'utente il risultato di un'operazione o un cambiamento di stato del sistema."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"/docs/componenti-modal--documentazione",children:"Modal"}),": quando l'utente deve compiere un'azione consapevole per proseguire."]}),`
`]}),`
`,e.jsx(i.h2,{id:"anteprima-e-attributi-del-componente",children:"Anteprima e attributi del componente"}),`
`,e.jsxs(i.p,{children:["Modifica gli attributi nella tabella per personalizzare in tempo reale l'aspetto e il comportamento del componente. Per vedere come cambia il codice, clicca su ",e.jsx(i.strong,{children:"Show code"}),"."]}),`
`,e.jsx(n,{of:t}),`
`,e.jsx(d,{of:t}),`
`,e.jsx(i.h2,{id:"indicazioni-generali",children:"Indicazioni generali"}),`
`,e.jsxs(i.p,{children:["Inserisci il contenuto da oscurare nello ",e.jsxs(i.strong,{children:["slot ",e.jsx(i.code,{children:"default"})]})," e il contenuto dell'overlay nello ",e.jsxs(i.strong,{children:["slot ",e.jsx(i.code,{children:"content"})]}),"."]}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Nome"}),e.jsx("th",{children:"Descrizione"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"(default)"})}),e.jsx("td",{children:"Contenuto di sfondo da oscurare (card, immagini, testo, ecc.)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"content"})}),e.jsx("td",{children:"Contenuto libero dell'overlay: testi, titoli, pulsanti. Completamente a carico dell'utilizzatore"})]})]})]}),`
`,e.jsx(i.h3,{id:"icona",children:"Icona"}),`
`,e.jsxs(i.p,{children:["Usa l’attributo ",e.jsx(i.code,{children:"icon-name"})," con il nome di un’icona Bootstrap Italia per aggiungere automaticamente un elemento ",e.jsx(i.code,{children:"<it-icon>"})," nell’header del dimmer, senza inserire markup aggiuntivo."]}),`
`,e.jsx(i.h2,{id:"accessibilità",children:"Accessibilità"}),`
`,e.jsx(i.p,{children:"Il componente Dimmer è progettato per essere accessibile, ma assicurati di:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["includere sempre una descrizione significativa nello slot ",e.jsx(i.code,{children:"content"})," quando lo usi per comunicare un messaggio;"]}),`
`,e.jsx(i.li,{children:"aggiungere etichette chiare e comprensibili per eventuali pulsanti."}),`
`]}),`
`,e.jsx(i.h2,{id:"varianti",children:"Varianti"}),`
`,e.jsxs(i.p,{children:["Il dimmer supporta due varianti cromatiche, configurabili tramite l’attributo ",e.jsx(i.code,{children:"variant"}),". Il dimmer supporta una variante cromatica primaria, con sfondo del colore primario, attivabile tramite l'attributo ",e.jsx(i.code,{children:'variant="primary"'}),", e una variante scura ",e.jsx(i.code,{children:'variant="dark"'}),"."]}),`
`,e.jsx(i.h3,{id:"variante-primaria",children:"Variante primaria"}),`
`,e.jsxs(i.p,{children:["Per la versione con sfondo di colore primario, usa l'attributo ",e.jsx(i.code,{children:'variant="primary"'}),". Questa è anche la variante predefinita se l’attributo non viene specificato."]}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(i.h3,{id:"variante-scura",children:"Variante scura"}),`
`,e.jsxs(i.p,{children:["Per la versione con sfondo scuro, usa l'attributo ",e.jsx(i.code,{children:'variant="dark"'}),"."]}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(i.h2,{id:"dimmer-con-azioni",children:"Dimmer con azioni"}),`
`,e.jsxs(i.p,{children:["Un dimmer può contenere titoli e pulsanti d'azione. Inseriscili nello slot ",e.jsx(i.code,{children:"content"})," all'interno di un contenitore con classi ",e.jsx(i.code,{children:"dimmer-buttons bg-dark"}),"."]}),`
`,e.jsx(i.p,{children:"Questi esempi seguenti mostrano le possibili combinazioni di varianti e pulsanti azione."}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(i.h3,{id:"dimmer-con-azioni-nella-variante-scura",children:"Dimmer con azioni nella variante scura"}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(i.h3,{id:"azione-singola",children:"Azione singola"}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(i.h2,{id:"attivo-di-default",children:"Attivo di default"}),`
`,e.jsxs(i.p,{children:["Per impostare lo stato attivo, valorizza l'attributo ",e.jsx(i.code,{children:"active"}),". Puoi attivare un dimmer anche via codice, usando i metodi pubblici ",e.jsx(i.code,{children:"show()"}),", ",e.jsx(i.code,{children:"hide()"})," e ",e.jsx(i.code,{children:"toggle()"}),"."]}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(i.h2,{id:"proprietà-metodi-ed-eventi-accessibili-via-js",children:"Proprietà, metodi ed eventi accessibili via JS"}),`
`,e.jsx(i.p,{children:"Il componente espone metodi ed eventi utili per eventuali interazioni via JavaScript."}),`
`,e.jsx(i.h3,{id:"metodi",children:"Metodi"}),`
`,e.jsx(i.p,{children:"Il componente espone i seguenti metodi pubblici per la gestione programmatica:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"show()"}),", mostra il dimmer;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"hide()"}),", nasconde il dimmer;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"toggle()"}),", alterna lo stato di visibilità."]}),`
`]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-js",children:`const dimmerEl = document.getElementById('myDimmer');

dimmerEl.show();   // mostra
dimmerEl.hide();   // nasconde
dimmerEl.toggle(); // alterna
`})}),`
`,e.jsx(n,{of:v}),`
`,e.jsx(i.h3,{id:"eventi",children:"Eventi"}),`
`,e.jsx(i.p,{children:"Il componente emette i seguenti eventi custom:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"it-dimmer-show"}),", quando il dimmer diventa visibile;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"it-dimmer-hide"}),", quando il dimmer viene nascosto."]}),`
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
`,e.jsxs(i.p,{children:["Per personalizzare gli stili, usa i selettori ",e.jsx(i.code,{children:"::part"})," dedicati:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"::part(dimmable)"}),", per il wrapper che racchiude l'intero componente;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"::part(dimmer)"}),", per l'elemento overlay;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"::part(dimmer-inner)"}),", per il contenitore centrale del contenuto dell'overlay;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"::part(dimmer-icon)"}),", peril wrapper dell'icona (presente solo se ",e.jsx(i.code,{children:"icon-name"})," è valorizzato)."]}),`
`]}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"/docs/personalizzazione-degli-stili--documentazione#selettore-part",children:"Vai alla guida sul selettore part"})})]})}function E(o={}){const{wrapper:i}={...s(),...o.components};return i?e.jsx(i,{...o,children:e.jsx(a,{...o})}):a(o)}export{E as default};

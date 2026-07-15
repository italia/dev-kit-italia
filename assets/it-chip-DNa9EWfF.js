import{j as e,M as l,C as n,a as r}from"./blocks-B2Z53WGn.js";import{useMDXComponents as c}from"./index-BcnZ8Wn6.js";import{C as t,E as s,V as d,a as h,b as p,c as u,d as x,e as j,f as m,g as v,h as f}from"./it-chip.stories-ClMQ9xIy.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-Ts_oPF3y.js";function a(o){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:t}),`
`,e.jsx(i.h1,{id:"chip",children:"Chip"}),`
`,e.jsx("description",{children:"Etichetta cliccabile che contiene brevi testi (tag) e icone per classificare, ordinare e filtriare contenuti e altri elementi di interfaccia."}),`
`,e.jsx(i.h2,{id:"cosa-fa",children:"Cosa fa"}),`
`,e.jsx(i.p,{children:"Usa il componente per classificare e organizzare contenuti e parti dell'interfaccia in base a liste di tag, stati, utenti o altre ontologie legate al contesto; puoi usarlo inoltre per dare accesso diretto ad archivi di contenuti filtrati per attributi o per permettere all'utente di selezionare o rimuovere scelte di input (ad esempio filtri per attributo o utenti destinatari di un messaggio)."}),`
`,e.jsx(i.p,{children:"Le chips possono essere parte di un gruppo (set) e permettere selezione, deselezione o rimozione a seconda del contesto."}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"https://designers.italia.it/design-system/componenti/chips/",rel:"nofollow",children:"Approfondisci quando e come usare il componente Chip"})}),`
`,e.jsx(i.h3,{id:"alternative-a-questo-componente",children:"Alternative a questo componente"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"/docs/componenti-badge--documentazione",children:"Badge"}),": per singole etichette statiche o quantitative (ad esempio numero notifiche)."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"/docs/componenti-button--documentazione",children:"Button"}),": per azioni che non coinvolgono scelte o filtri"]}),`
`]}),`
`,e.jsx(i.h2,{id:"anteprima-e-attributi-del-componente",children:"Anteprima e attributi del componente"}),`
`,e.jsxs(i.p,{children:["Modifica gli attributi nella tabella per personalizzare in tempo reale l'aspetto e il comportamento del componente. Per vedere come cambia il codice, clicca su ",e.jsx(i.strong,{children:"Show code"}),"."]}),`
`,e.jsx(n,{of:s}),`
`,e.jsx(r,{of:s}),`
`,e.jsx(i.h2,{id:"informazioni-generali",children:"Informazioni generali"}),`
`,e.jsxs(i.p,{children:["Il componente ",e.jsx(i.code,{children:"it-chip"})," si compone principalmente di una label testuale e, opzionalmente, di:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["un ",e.jsx(i.strong,{children:"avatar"})," (immagine) a sinistra, tramite la proprietà ",e.jsx(i.code,{children:"avatar"})]}),`
`,e.jsxs(i.li,{children:["un'",e.jsx(i.strong,{children:"icona"})," inserita nello slot ",e.jsx(i.code,{children:"icon"})]}),`
`,e.jsxs(i.li,{children:["un ",e.jsx(i.strong,{children:"pulsante di chiusura"})," nello slot ",e.jsx(i.code,{children:"dismiss-button"}),", per le chip cancellabili/rimuovibili (la rimozione è gestita di default dal componente e può essere sovrascritta)"]}),`
`]}),`
`,e.jsx(i.h2,{id:"accessibilità",children:"Accessibilità"}),`
`,e.jsx(i.p,{children:"Il componente chip implementa best practice di accessibilità:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Supporto per navigazione da tastiera nei link e nei pulsanti di chiusura"}),`
`,e.jsx(i.li,{children:"Attributi ARIA appropriati per comunicare lo stato agli screen reader"}),`
`,e.jsxs(i.li,{children:["Descrizioni accessibili opzionali tramite ",e.jsx(i.code,{children:"a11y-description"})]}),`
`]}),`
`,e.jsx(i.h2,{id:"varianti-di-colore",children:"Varianti di colore"}),`
`,e.jsxs(i.p,{children:[`Sono disponibili diverse varianti di colore per le chip.
Usa l'attributo `,e.jsx(i.code,{children:"variant"})," per applicare i diversi colori: ",e.jsx(i.code,{children:"primary"}),", ",e.jsx(i.code,{children:"secondary"}),", ",e.jsx(i.code,{children:"success"}),", ",e.jsx(i.code,{children:"danger"}),", ",e.jsx(i.code,{children:"warning"}),"."]}),`
`,e.jsx(n,{of:d}),`
`,e.jsx(i.h2,{id:"varianti-di-dimensione",children:"Varianti di dimensione"}),`
`,e.jsxs(i.p,{children:["Le chip sono disponibili in due dimensioni: ",e.jsx(i.code,{children:"sm"})," (small, predefinita) e ",e.jsx(i.code,{children:"lg"})," (large)."]}),`
`,e.jsxs(i.p,{children:["Usa l'attributo ",e.jsx(i.code,{children:"size"})," per impostare la dimensione desiderata. La dimensione influisce sull'altezza della chip e sulla dimensione degli elementi che contiene (icone, avatar)."]}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(i.h2,{id:"chip-come-link",children:"Chip come link"}),`
`,e.jsxs(i.p,{children:["Per rendere una chip cliccabile come link, usa l'attributo ",e.jsx(i.code,{children:"href"})," con l'URL di destinazione. La chip verrà renderizzata come elemento ",e.jsx(i.code,{children:"<a>"})," anziché ",e.jsx(i.code,{children:"<div>"}),"."]}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(i.h2,{id:"chip-link-colorate",children:"Chip link colorate"}),`
`,e.jsxs(i.p,{children:["Combinando l'attributo ",e.jsx(i.code,{children:"href"})," con le varianti di colore messe a disposizione dall'attributo ",e.jsx(i.code,{children:"variant"}),", puoi creare chip cliccabili con diverse varianti di colore."]}),`
`,e.jsx(i.p,{children:"La chip si comporterà come un link interattivo mantenendo lo stile della variante di colore scelta."}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(i.h2,{id:"chip-con-avatar",children:"Chip con avatar"}),`
`,e.jsxs(i.p,{children:["Le chip possono includere un componente ",e.jsx(i.a,{href:"/docs/componenti-avatar--documentazione",children:"Avatar"})," utilizzando gli attributi ",e.jsx(i.code,{children:"avatar"})," e ",e.jsx(i.code,{children:"avatar-alt"}),"."]}),`
`,e.jsx(i.p,{children:"L'avatar viene ridimensionato automaticamente in base alla dimensione della chip:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Chip ",e.jsx(i.code,{children:"sm"})," imposta la dimensione dell'avatar a ",e.jsx(i.code,{children:"xs"})]}),`
`,e.jsxs(i.li,{children:["Chip ",e.jsx(i.code,{children:"lg"})," imposta la dimensione dell'avatar a ",e.jsx(i.code,{children:"sm"})]}),`
`]}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(i.h2,{id:"chip-con-icona",children:"Chip con icona"}),`
`,e.jsxs(i.p,{children:["Le chip possono includere un'icona utilizzando lo slot ",e.jsx(i.code,{children:"icon"})," con il componente ",e.jsx(i.code,{children:"it-icon"}),"."]}),`
`,e.jsx(i.p,{children:"L'icona viene ridimensionata automaticamente:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Chip ",e.jsx(i.code,{children:"sm"})," imposta la dimensione dell'icona a ",e.jsx(i.code,{children:"xs"})]}),`
`,e.jsxs(i.li,{children:["Chip ",e.jsx(i.code,{children:"lg"})," imposta la dimensione dell'icona a ",e.jsx(i.code,{children:"sm"})]}),`
`]}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(i.h2,{id:"chip-con-chiusura",children:"Chip con chiusura"}),`
`,e.jsxs(i.p,{children:["La proprietà ",e.jsx(i.code,{children:"dismissable"})," ",e.jsx(i.strong,{children:"non aggiunge automaticamente il pulsante"}),": dovrai fornire un ",e.jsx(i.code,{children:"<it-button>"})," con ",e.jsx(i.code,{children:'slot="dismiss-button"'}),"."]}),`
`,e.jsxs(i.p,{children:["L'icona di chiusura deve avere dimensione ",e.jsx(i.code,{children:"sm"})," per rispettare le proporzioni."]}),`
`,e.jsx(i.p,{children:"Per abilitare una chip rimuovibile è quindi sufficiente:"}),`
`,e.jsxs(i.ol,{children:[`
`,e.jsxs(i.li,{children:["Impostare l'attributo ",e.jsx(i.code,{children:"dismissable"})," sulla chip"]}),`
`,e.jsxs(i.li,{children:["Inserire un ",e.jsx(i.code,{children:"<it-button>"})," nello slot ",e.jsx(i.code,{children:"dismiss-button"})]}),`
`]}),`
`,e.jsxs(i.p,{children:["Il componente ",e.jsx(i.strong,{children:"gestisce di default la rimozione"}),": al click sul pulsante (anche da tastiera con ",e.jsx(i.code,{children:"Enter"})," o ",e.jsx(i.code,{children:"Spazio"}),", tramite il pulsante nativo) la chip emette l'evento ",e.jsx(i.code,{children:"it-chip-close"})," e, se non annullato, viene rimossa dal DOM, spostando il focus su una chip adiacente quando presente."]}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(i.h3,{id:"logica-di-rimozione-personalizzata",children:"Logica di rimozione personalizzata"}),`
`,e.jsxs(i.p,{children:["L'evento ",e.jsx(i.code,{children:"it-chip-close"})," è ",e.jsx(i.strong,{children:"cancelable"}),". Chiamando ",e.jsx(i.code,{children:"event.preventDefault()"})," puoi intercettare la rimozione ed eseguire la tua logica (ad esempio una conferma), richiamando poi il metodo pubblico ",e.jsx(i.code,{children:"close()"})," quando opportuno:"]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-js",children:`const chip = document.querySelector('it-chip');
chip.addEventListener('it-chip-close', (e) => {
  e.preventDefault(); // impedisce la rimozione di default
  if (confirm('Rimuovere questa chip?')) chip.close();
});
`})}),`
`,e.jsx(i.p,{children:"Clicca sul pulsante di chiusura in questo esempio: la rimozione avviene solo dopo la conferma."}),`
`,e.jsx(n,{of:v}),`
`,e.jsx(i.h2,{id:"proprietà-metodi-ed-eventi-accessibili-via-js",children:"Proprietà, Metodi, ed Eventi accessibili via JS"}),`
`,e.jsx(i.p,{children:"Il componente espone i seguenti metodi e eventi accessibili via JavaScript."}),`
`,e.jsx(i.h3,{id:"metodi",children:"Metodi"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"close()"})," — rimuove la chip dal DOM, spostando il focus su una chip adiacente se presente."]}),`
`]}),`
`,e.jsx(i.h3,{id:"eventi",children:"Eventi"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"it-chip-close"})," — emesso al click sul pulsante di rimozione. L'evento è cancellabile: chiamando ",e.jsx(i.code,{children:"event.preventDefault()"})," si impedisce la rimozione automatica. Il ",e.jsx(i.code,{children:"detail"})," contiene ",e.jsx(i.code,{children:"chip"}),", riferimento all'elemento ",e.jsx(i.code,{children:"it-chip"})," corrente."]}),`
`]}),`
`,e.jsx(i.h2,{id:"chip-disabilitata",children:"Chip disabilitata"}),`
`,e.jsxs(i.p,{children:["Usa l'attributo ",e.jsx(i.code,{children:"is-disabled"})," per disabilitare una chip. La chip disabilitata non sarà cliccabile e il pulsante di chiusura, se presente, sarà anch'esso disabilitato."]}),`
`,e.jsx(n,{of:f}),`
`,e.jsx(i.h2,{id:"personalizzazione-degli-stili",children:"Personalizzazione degli stili"}),`
`,e.jsxs(i.p,{children:["Per la personalizzazione degli stili puoi usare i selettori ",e.jsx(i.code,{children:"::part"})," dedicati:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"::part(chip)"})," - elemento chip (div o a, a seconda della presenza di ",e.jsx(i.code,{children:"href"}),")"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"::part(focusable)"})," - presente solo quando la chip è un link (",e.jsx(i.code,{children:"href"})," valorizzato)"]}),`
`]}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"/docs/personalizzazione-degli-stili--documentazione#selettore-part",children:"Vai alla guida sul selettore part"})})]})}function k(o={}){const{wrapper:i}={...c(),...o.components};return i?e.jsx(i,{...o,children:e.jsx(a,{...o})}):a(o)}export{k as default};

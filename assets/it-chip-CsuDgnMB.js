import{j as i,M as c,C as n,a as r}from"./blocks-Cg7HoPIi.js";import{useMDXComponents as l}from"./index-BqGwsfRJ.js";import{C as t,E as s,V as d,a as h,b as p,c as x,d as j,e as m,f as u,g}from"./it-chip.stories-wlzWpbi7.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-DTKPvNQN.js";function a(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...l(),...o.components};return i.jsxs(i.Fragment,{children:[i.jsx(c,{of:t}),`
`,i.jsx(e.h1,{id:"chip",children:"Chip"}),`
`,i.jsx("description",{children:"Etichetta cliccabile che contiene brevi testi (tag) e icone per classificare, ordinare e filtriare contenuti e altri elementi di interfaccia."}),`
`,i.jsx(e.h2,{id:"cosa-fa",children:"Cosa fa"}),`
`,i.jsx(e.p,{children:"Usa il componente per classificare e organizzare contenuti e parti dell'interfaccia in base a liste di tag, stati, utenti o altre ontologie legate al contesto; puoi usarlo inoltre per dare accesso diretto ad archivi di contenuti filtrati per attributi o per permettere all'utente di selezionare o rimuovere scelte di input (ad esempio filtri per attributo o utenti destinatari di un messaggio)."}),`
`,i.jsx(e.p,{children:"Le chips possono essere parte di un gruppo (set) e permettere selezione, deselezione o rimozione a seconda del contesto."}),`
`,i.jsx(e.p,{children:i.jsx(e.a,{href:"https://designers.italia.it/design-system/componenti/chips/",rel:"nofollow",children:"Approfondisci quando e come usare il componente Chip"})}),`
`,i.jsx(e.h3,{id:"alternative-a-questo-componente",children:"Alternative a questo componente"}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsxs(e.li,{children:[i.jsx(e.a,{href:"/docs/componenti-badge--documentazione",children:"Badge"}),": per singole etichette statiche o quantitative (ad esempio numero notifiche)."]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.a,{href:"/docs/componenti-button--documentazione",children:"Button"}),": per azioni che non coinvolgono scelte o filtri"]}),`
`]}),`
`,i.jsx(e.h2,{id:"anteprima-e-attributi-del-componente",children:"Anteprima e attributi del componente"}),`
`,i.jsxs(e.p,{children:["Modifica gli attributi nella tabella per personalizzare in tempo reale l'aspetto e il comportamento del componente. Per vedere come cambia il codice, clicca su ",i.jsx(e.strong,{children:"Show code"}),"."]}),`
`,i.jsx(n,{of:s}),`
`,i.jsx(r,{of:s}),`
`,i.jsx(e.h2,{id:"informazioni-generali",children:"Informazioni generali"}),`
`,i.jsxs(e.p,{children:["Il componente ",i.jsx(e.code,{children:"it-chip"})," si compone principalmente di una label testuale e, opzionalmente, di:"]}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsxs(e.li,{children:["un ",i.jsx(e.strong,{children:"avatar"})," (immagine) a sinistra, tramite la proprietà ",i.jsx(e.code,{children:"avatar"})]}),`
`,i.jsxs(e.li,{children:["un'",i.jsx(e.strong,{children:"icona"})," inserita nello slot ",i.jsx(e.code,{children:"icon"})]}),`
`,i.jsxs(e.li,{children:["un ",i.jsx(e.strong,{children:"pulsante di chiusura"})," nello slot ",i.jsx(e.code,{children:"dismiss-button"}),", per le chip cancellabili/rimuovibili (la logica di rimozione è a carico dell'utilizzatore)"]}),`
`]}),`
`,i.jsx(e.h2,{id:"accessibilità",children:"Accessibilità"}),`
`,i.jsx(e.p,{children:"Il componente chip implementa best practice di accessibilità:"}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsx(e.li,{children:"Supporto per navigazione da tastiera nei link e nei pulsanti di chiusura"}),`
`,i.jsx(e.li,{children:"Attributi ARIA appropriati per comunicare lo stato agli screen reader"}),`
`,i.jsxs(e.li,{children:["Descrizioni accessibili opzionali tramite ",i.jsx(e.code,{children:"a11y-description"})]}),`
`]}),`
`,i.jsx(e.h2,{id:"varianti-di-colore",children:"Varianti di colore"}),`
`,i.jsxs(e.p,{children:[`Sono disponibili diverse varianti di colore per le chip.
Usa l'attributo `,i.jsx(e.code,{children:"variant"})," per applicare i diversi colori: ",i.jsx(e.code,{children:"primary"}),", ",i.jsx(e.code,{children:"secondary"}),", ",i.jsx(e.code,{children:"success"}),", ",i.jsx(e.code,{children:"danger"}),", ",i.jsx(e.code,{children:"warning"}),"."]}),`
`,i.jsx(n,{of:d}),`
`,i.jsx(e.h2,{id:"varianti-di-dimensione",children:"Varianti di dimensione"}),`
`,i.jsxs(e.p,{children:["Le chip sono disponibili in due dimensioni: ",i.jsx(e.code,{children:"sm"})," (small, predefinita) e ",i.jsx(e.code,{children:"lg"})," (large)."]}),`
`,i.jsxs(e.p,{children:["Usa l'attributo ",i.jsx(e.code,{children:"size"})," per impostare la dimensione desiderata. La dimensione influisce sull'altezza della chip e sulla dimensione degli elementi che contiene (icone, avatar)."]}),`
`,i.jsx(n,{of:h}),`
`,i.jsx(e.h2,{id:"chip-come-link",children:"Chip come link"}),`
`,i.jsxs(e.p,{children:["Per rendere una chip cliccabile come link, usa l'attributo ",i.jsx(e.code,{children:"href"})," con l'URL di destinazione. La chip verrà renderizzata come elemento ",i.jsx(e.code,{children:"<a>"})," anziché ",i.jsx(e.code,{children:"<div>"}),"."]}),`
`,i.jsx(n,{of:p}),`
`,i.jsx(e.h2,{id:"chip-link-colorate",children:"Chip link colorate"}),`
`,i.jsxs(e.p,{children:["Combinando l'attributo ",i.jsx(e.code,{children:"href"})," con le varianti di colore messe a disposizione dall'attributo ",i.jsx(e.code,{children:"variant"}),", puoi creare chip cliccabili con diverse varianti di colore."]}),`
`,i.jsx(e.p,{children:"La chip si comporterà come un link interattivo mantenendo lo stile della variante di colore scelta."}),`
`,i.jsx(n,{of:x}),`
`,i.jsx(e.h2,{id:"chip-con-avatar",children:"Chip con avatar"}),`
`,i.jsxs(e.p,{children:["Le chip possono includere un componente ",i.jsx(e.a,{href:"/docs/componenti-avatar--documentazione",children:"Avatar"})," utilizzando gli attributi ",i.jsx(e.code,{children:"avatar"})," e ",i.jsx(e.code,{children:"avatar-alt"}),"."]}),`
`,i.jsx(e.p,{children:"L'avatar viene ridimensionato automaticamente in base alla dimensione della chip:"}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsxs(e.li,{children:["Chip ",i.jsx(e.code,{children:"sm"})," imposta la dimensione dell'avatar a ",i.jsx(e.code,{children:"xs"})]}),`
`,i.jsxs(e.li,{children:["Chip ",i.jsx(e.code,{children:"lg"})," imposta la dimensione dell'avatar a ",i.jsx(e.code,{children:"sm"})]}),`
`]}),`
`,i.jsx(n,{of:j}),`
`,i.jsx(e.h2,{id:"chip-con-icona",children:"Chip con icona"}),`
`,i.jsxs(e.p,{children:["Le chip possono includere un'icona utilizzando lo slot ",i.jsx(e.code,{children:"icon"})," con il componente ",i.jsx(e.code,{children:"it-icon"}),"."]}),`
`,i.jsx(e.p,{children:"L'icona viene ridimensionata automaticamente:"}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsxs(e.li,{children:["Chip ",i.jsx(e.code,{children:"sm"})," imposta la dimensione dell'icona a ",i.jsx(e.code,{children:"xs"})]}),`
`,i.jsxs(e.li,{children:["Chip ",i.jsx(e.code,{children:"lg"})," imposta la dimensione dell'icona a ",i.jsx(e.code,{children:"sm"})]}),`
`]}),`
`,i.jsx(n,{of:m}),`
`,i.jsx(e.h2,{id:"chip-con-chiusura",children:"Chip con chiusura"}),`
`,i.jsxs(e.p,{children:["La proprietà ",i.jsx(e.code,{children:"dismissable"})," ",i.jsx(e.strong,{children:"non aggiunge automaticamente il pulsante"}),": dovrai fornire un ",i.jsx(e.code,{children:"<it-button>"})," con ",i.jsx(e.code,{children:'slot="dismiss-button"'})," e la logica di rimozione che preferisci."]}),`
`,i.jsxs(e.p,{children:["L'icona di chiusura deve avere dimensione ",i.jsx(e.code,{children:"sm"})," per rispettare le proporzioni."]}),`
`,i.jsxs(e.p,{children:["Il componente ",i.jsx(e.strong,{children:"non gestisce automaticamente la rimozione della chip"}),". Dovrai:"]}),`
`,i.jsxs(e.ol,{children:[`
`,i.jsxs(e.li,{children:["Impostare l'attributo ",i.jsx(e.code,{children:"dismissable"})," sulla chip"]}),`
`,i.jsxs(e.li,{children:["Inserire un ",i.jsx(e.code,{children:"<it-button>"})," nello slot ",i.jsx(e.code,{children:"dismiss-button"})]}),`
`,i.jsx(e.li,{children:"Aggiungere la tua logica JavaScript per gestire l'evento click/keydown"}),`
`]}),`
`,i.jsxs(e.p,{children:["Il codice dell'esempio gestisce la rimozione della chip sia via click che via tastiera (",i.jsx(e.code,{children:"Enter"})," o ",i.jsx(e.code,{children:"Spazio"}),")."]}),`
`,i.jsx(n,{of:u}),`
`,i.jsx(e.h2,{id:"chip-disabilitata",children:"Chip disabilitata"}),`
`,i.jsxs(e.p,{children:["Usa l'attributo ",i.jsx(e.code,{children:"is-disabled"})," per disabilitare una chip. La chip disabilitata non sarà cliccabile e il pulsante di chiusura, se presente, sarà anch'esso disabilitato."]}),`
`,i.jsx(n,{of:g}),`
`,i.jsx(e.h2,{id:"personalizzazione-degli-stili",children:"Personalizzazione degli stili"}),`
`,i.jsxs(e.p,{children:["Per la personalizzazione degli stili puoi usare i selettori ",i.jsx(e.code,{children:"::part"})," dedicati:"]}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:"::part(chip)"})," - elemento chip (div o a, a seconda della presenza di ",i.jsx(e.code,{children:"href"}),")"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:"::part(focusable)"})," - presente solo quando la chip è un link (",i.jsx(e.code,{children:"href"})," valorizzato)"]}),`
`]}),`
`,i.jsx(e.p,{children:i.jsx(e.a,{href:"/docs/personalizzazione-degli-stili--documentazione#selettore-part",children:"Vai alla guida sul selettore part"})})]})}function L(o={}){const{wrapper:e}={...l(),...o.components};return e?i.jsx(e,{...o,children:i.jsx(a,{...o})}):a(o)}export{L as default};

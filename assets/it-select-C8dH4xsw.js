import{j as e,M as c,C as n,a as p,D as a}from"./blocks-FPQAOa66.js";import{useMDXComponents as d}from"./index-D5SWu1Yp.js";import{S as m,E as s,D as h,G as u,a as x,V as j,b as g,c as r,M as t}from"./it-select.stories-Bf7DJ6eP.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-CGo9iNzD.js";import"./formControlReusableStories-BOYMiSyM.js";function l(o){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:m}),`
`,e.jsx(i.h1,{id:"select",children:"Select"}),`
`,e.jsx("description",{children:"Campo di selezione di un form per scegliere una o più opzioni da una lista predefinita di valori."}),`
`,e.jsx(i.h2,{id:"cosa-fa",children:"Cosa fa"}),`
`,e.jsx(i.p,{children:"Il componente Select (it-select) permette agli utenti di selezionare uno o più elementi all'interno di un elenco di opzioni predefinite."}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"https://designers.italia.it/design-system/componenti/select/",rel:"nofollow",children:"Approfondisci come e quando usare il componente Select"})}),`
`,e.jsx(i.h3,{id:"alternative-a-questo-componente",children:"Alternative a questo componente"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"/docs/componenti-form-radio--documentazione",children:"Radio button"}),": per selezionare una singola opzione da un insieme limitato di scelte visibili tutte insieme, da preferire se è necessario che l'utente sia consapevole di tutte le opzioni e se il numero di scelte è limitato."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"/docs/componenti-form-checkbox--documentazione",children:"Checkbox"}),": per selezionare una o più opzioni da un insieme limitato di scelte visibili tutte insieme, da preferire se è necessario che l'utente sia consapevole di tutte le opzioni quando la modalità di scelta è multipla."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"/docs/componenti-form-autocomplete--documentazione",children:"Autocomplete"}),": per selezionare un'opzione da un elenco di scelte più ampio, con la possibilità di filtrare le opzioni digitando."]}),`
`]}),`
`,e.jsx(i.h2,{id:"anteprima-e-attributi-del-componente",children:"Anteprima e attributi del componente"}),`
`,e.jsxs(i.p,{children:["Modifica gli attributi nella tabella per personalizzare in tempo reale l'aspetto e il comportamento del componente. Per vedere come cambia il codice, clicca su ",e.jsx(i.strong,{children:"Show code"}),"."]}),`
`,e.jsx(n,{of:s}),`
`,e.jsx(p,{of:s}),`
`,e.jsx(i.h2,{id:"accessibilità",children:"Accessibilità"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Tutti gli attributi ",e.jsx(i.code,{children:"it-aria-*"})," passati a ",e.jsx(i.code,{children:"<it-select>"})," vengono applicati alla select generata."]}),`
`,e.jsx(i.li,{children:"Il componente impelementa una select di default del browser, pertanto eredita il comportamento accessibile nativo."}),`
`,e.jsxs(i.li,{children:["L'etichetta viene associata automaticamente alla select tramite l'attributo ",e.jsx(i.code,{children:"for"})," generato."]}),`
`]}),`
`,`
`,`
`,e.jsx(i.h2,{id:"select-disabilitata",children:"Select disabilitata"}),`
`,e.jsxs(i.p,{children:["Per disabilitare un ",e.jsx(i.code,{children:"it-select"}),", aggiungi l'attributo ",e.jsx(i.code,{children:"disabled"}),"."]}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(i.h2,{id:"select-con-gruppi",children:"Select con gruppi"}),`
`,e.jsxs(i.p,{children:["Per ottenere un ",e.jsx(i.code,{children:"it-select"})," con raggruppamenti, usa il tag HTML ",e.jsx(i.code,{children:"<optgroup>"})," per raggruppare le ",e.jsx(i.code,{children:"<option>"})," al suo interno."]}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(i.h2,{id:"testo-di-supporto",children:"Testo di supporto"}),`
`,e.jsxs(i.p,{children:["Per mostrare un testo di supporto, aggiungi l'attributo ",e.jsx(i.code,{children:"supportText"})," a ",e.jsx(i.code,{children:"<it-select>"}),"."]}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(i.h2,{id:"validazione-e-gestione-degli-errori",children:"Validazione e gestione degli errori"}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(i.h3,{id:"personalizzazione-dei-messaggi-di-errore",children:"Personalizzazione dei messaggi di errore"}),`
`,e.jsxs(i.p,{children:["Puoi personalizzare alcuni dei messaggi di errore di validazione, traducendo le seguenti stringhe tramite l'",e.jsx(i.a,{href:"/docs/i18n-internazionalizzazione--documentazione",children:"utility di internazionalizzazione"}),":"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"validityRequired"}),", messaggio che viene mostrato quando ",e.jsx(i.code,{children:"<it-select>"})," ha l'attributo ",e.jsx(i.code,{children:"required"})," e non è compilato."]}),`
`]}),`
`,e.jsx(i.p,{children:"Per gli altri errori di validazione non indicati, verranno mostrati i messaggi di errore nativi del browser."}),`
`,e.jsx(i.h3,{id:"validazione-esterna-validazione-custom",children:"Validazione esterna (validazione custom)"}),`
`,e.jsxs(i.p,{children:["Puoi anche validare il campo esternamente (ad esempio, via js o lato server), impostando l'attributo ",e.jsx(i.code,{children:'custom-validation="true"'}),`.
In questo modo la validazione di default del browser effettuata internamente al componente è disabilitata.`]}),`
`,e.jsx(i.h4,{id:"campo-invalido",children:"Campo invalido"}),`
`,e.jsxs(i.p,{children:["Nel caso il campo non sia valido, devi invalidarlo impostando il messaggio di errore da visualizzare attraverso l'attributo ",e.jsx(i.code,{children:'validity-message="Messaggio di errore"'}),"."]}),`
`,e.jsx(n,{of:g}),`
`,e.jsx(i.h4,{id:"campo-valido",children:"Campo valido"}),`
`,e.jsxs(i.p,{children:["Per riportare il campo ad uno stato 'valido', imposta il messaggio di errore a vuoto: ",e.jsx(i.code,{children:'validity-message=""'}),"."]}),`
`,e.jsx(i.h2,{id:"gestione-degli-eventi",children:"Gestione degli eventi"}),`
`,e.jsx(a,{of:r}),`
`,e.jsx(n,{of:r}),`
`,e.jsx(i.h2,{id:"",children:t.name}),`
`,e.jsx(a,{of:t}),`
`,e.jsx(n,{of:t})]})}function P(o={}){const{wrapper:i}={...d(),...o.components};return i?e.jsx(i,{...o,children:e.jsx(l,{...o})}):l(o)}export{P as default};

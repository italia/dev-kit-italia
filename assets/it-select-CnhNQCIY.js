import{j as e,M as c,C as n,a as p,D as t}from"./blocks-D0bmdpqR.js";import{useMDXComponents as d}from"./index-C6divXtw.js";import{S as u,E as s,D as m,G as h,a as x,V as j,b as g,c as r,M as a}from"./it-select.stories-e5HqPohx.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-D9yc0utV.js";import"./formControlReusableStories-B_gqPWyx.js";function l(o){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:u}),`
`,e.jsx(i.h1,{id:"select",children:"Select"}),`
`,e.jsx("description",{children:"Campo di selezione di un form per scegliere una o più opzioni da una lista predefinita di valori."}),`
`,e.jsx(i.h2,{id:"cosa-fa",children:"Cosa fa"}),`
`,e.jsx(i.p,{children:"Il componente it-select, permette agli utenti di selezionare uno o più elementi elementi all'interno di un elenco di opzioni predefinite."}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"https://designers.italia.it/design-system/componenti/select/",rel:"nofollow",children:"Approfondisci come e quando usare il componente Select"})}),`
`,e.jsx(i.h3,{id:"alternative-a-questo-componente",children:"Alternative a questo componente"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"/docs/componenti-form-radio--documentazione",children:"Radio"}),": per selezionare una singola opzione da un insieme limitato di scelte visibili tutte insieme. Da preferire un gruppo di Radio button a livello di usabilità e se è necessario essere certi che l'utente sia consapevole di tutte le opzioni, consigliabile in particolare se il numero di scelte è limitato."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"/docs/componenti-form-checkbox--documentazione",children:"Checkbox"}),": per selezionare una o più opzioni da un insieme limitato di scelte visibili tutte insieme. Da preferire un gruppo di Checkbox a livello di usabilità e se è necessario essere certi che l'utente sia consapevole di tutte le opzioni quando la modalità di scelta è multipla."]}),`
`,e.jsx(i.li,{children:"Autocomplete (in lavorazione): per selezionare un'opzione da un elenco di scelte più ampio, con la possibilità di filtrare le opzioni digitando."}),`
`]}),`
`,e.jsx(i.h2,{id:"anteprima-e-attributi-del-componente",children:"Anteprima e attributi del componente"}),`
`,e.jsxs(i.p,{children:["Modifica gli attributi nella tabella per personalizzare in tempo reale l'aspetto e il comportamento del componente. Per vedere come cambia il codice, clicca su ",e.jsx(i.strong,{children:"Show code"}),"."]}),`
`,e.jsx(n,{of:s}),`
`,e.jsx(p,{of:s}),`
`,e.jsx(i.h2,{id:"accessibilità",children:"Accessibilità"}),`
`,e.jsxs(i.p,{children:["Tutti gli attributi ",e.jsx(i.code,{children:"it-aria-*"})," passati a ",e.jsx(i.code,{children:"<it-select>"})," vengono applicati alla select generata."]}),`
`,e.jsx(i.p,{children:"Il componente impelementa una select di default del browser, pertanto eredita il comportamento accessibile nativo."}),`
`,e.jsxs(i.p,{children:["L'etichetta viene associata automaticamente alla select tramite l'attributo ",e.jsx(i.code,{children:"for"})," generato."]}),`
`,`
`,e.jsx(i.h2,{id:"select-disabilitata",children:"Select disabilitata"}),`
`,e.jsxs(i.p,{children:["Aggiungi l'attributo ",e.jsx(i.code,{children:"disabled"})," per disabilitare una ",e.jsx(i.code,{children:"it-select"}),"."]}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(i.h2,{id:"select-con-gruppi",children:"Select con gruppi"}),`
`,e.jsxs(i.p,{children:["Per ottenere una ",e.jsx(i.code,{children:"it-select"})," con raggruppamenti, utilizzare il tag HTML ",e.jsx(i.code,{children:"<optgroup>"})," per raggruppare le ",e.jsx(i.code,{children:"<option>"})," al suo interno."]}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(i.h2,{id:"testo-di-supporto",children:"Testo di supporto"}),`
`,e.jsxs(i.p,{children:["Per mostrare un testo di supporto alla select, aggiungi l'attributo ",e.jsx(i.code,{children:"supportText"})," a ",e.jsx(i.code,{children:"<it-select>"}),"."]}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(i.h2,{id:"validazione-e-gestione-degli-errori",children:"Validazione e gestione degli errori"}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(i.h3,{id:"personalizzazione-dei-messaggi-di-errore",children:"Personalizzazione dei messaggi di errore"}),`
`,e.jsxs(i.p,{children:["Puoi personalizzare alcuni dei messaggi di errore di validazione, traducendo le seguenti stringhe tramite l'",e.jsx(i.a,{href:"/docs/i18n-internazionalizzazione--documentazione",children:"utility di internazionalizzazione"}),":"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"validityRequired"}),": messaggio che viene mostrato quando ",e.jsx(i.code,{children:"<it-select>"})," ha l'attributo ",e.jsx(i.code,{children:"required"})," e non è compilato"]}),`
`]}),`
`,e.jsx(i.p,{children:"Per gli altri errori di validazione non indicati, verranno mostrati i messaggi di errore nativi del browser."}),`
`,e.jsx(i.h3,{id:"validazione-esterna-validazione-custom",children:"Validazione esterna (validazione custom)"}),`
`,e.jsxs(i.p,{children:["Puoi anche validare il campo esternamente (via js ad esempio, o lato server), impostando l'attributo ",e.jsx(i.code,{children:'custom-validation="true"'}),`.
In questo modo la validazione di default del browser effettuata internamente al componente è disabilitata.`]}),`
`,e.jsx(i.h4,{id:"campo-invalido",children:"Campo invalido"}),`
`,e.jsxs(i.p,{children:["Nel caso il campo non sia valido, devi invalidare il campo impostando il messaggio di errore da visualizzare attraverso l'attributo ",e.jsx(i.code,{children:'validity-message="Messaggio di errore"'}),"."]}),`
`,e.jsx(n,{of:g}),`
`,e.jsx(i.h4,{id:"campo-valido",children:"Campo valido"}),`
`,e.jsxs(i.p,{children:["Per riportare il campo ad uno stato 'valido', è sufficiente impostare il messaggio di errore a vuoto: ",e.jsx(i.code,{children:'validity-message=""'}),"."]}),`
`,e.jsx(i.h2,{id:"gestione-degli-eventi",children:"Gestione degli eventi"}),`
`,e.jsx(t,{of:r}),`
`,e.jsx(n,{of:r}),`
`,e.jsx(i.h2,{id:"",children:a.name}),`
`,e.jsx(t,{of:a}),`
`,e.jsx(n,{of:a})]})}function P(o={}){const{wrapper:i}={...d(),...o.components};return i?e.jsx(i,{...o,children:e.jsx(l,{...o})}):l(o)}export{P as default};

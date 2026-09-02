import{j as e,M as s,C as o,a as r}from"./blocks-CToh_lwI.js";import{useMDXComponents as a}from"./index-Bhsl1YDk.js";import{S as c,E as t,A as d,D as p,C as g,I as m,R as h}from"./it-toggle.stories-CKT8Vs8A.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-Cl3Kz-XE.js";function l(n){const i={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:c}),`
`,e.jsx(i.h1,{id:"toggle",children:"Toggle"}),`
`,e.jsx("description",{children:"Pulsante di tipo 'interruttore' che permette di alternare tra due stati e semplificare la gestione di opzioni o impostazioni."}),`
`,e.jsx(i.h2,{id:"cosa-fa",children:"Cosa fa"}),`
`,e.jsxs(i.p,{children:["Il componente Toggle (",e.jsx(i.code,{children:"it-toggle"}),") permette all'utente di attivare o disattivare una singola opzione attraverso un'interfaccia di tipo interruttore a levetta, visivamente più intuitiva di una semplice checkbox per questo tipo di interazione."]}),`
`,e.jsx(i.p,{children:"È un'opzione utile per permettere di modificare velocemente le impostazioni di un account o le preferenze di un servizio, soprattutto quando lo spazio a disposizione è poco, come sui dispositivi mobile."}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"https://designers.italia.it/design-system/componenti/toggle/",rel:"nofollow",children:"Approfondisci come e quando usare il componente Toggle"})}),`
`,e.jsx(i.h3,{id:"alternative-a-questo-componente",children:"Alternative a questo componente"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"/docs/componenti-form-checkbox--documentazione",children:"Checkbox"}),": interfaccia grafica più adatta per scelte multiple o filtri, quando è importante mostrare tutte le opzioni disponibili contemporaneamente"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"/docs/componenti-form-radio--documentazione",children:"Radio button"}),": interfaccia grafica più adatta per scelte singole, quando è importante mostrare tutte le opzioni disponibili contemporaneamente"]}),`
`]}),`
`,e.jsx(i.h2,{id:"anteprima-e-attributi-del-componente",children:"Anteprima e attributi del componente"}),`
`,e.jsxs(i.p,{children:["Modifica gli attributi nella tabella per personalizzare in tempo reale l'aspetto e il comportamento del componente. Per vedere come cambia il codice, clicca su ",e.jsx(i.strong,{children:"Show code"}),"."]}),`
`,e.jsx(o,{of:t}),`
`,e.jsx(r,{of:t}),`
`,e.jsx(i.h2,{id:"accessibilità",children:"Accessibilità"}),`
`,e.jsxs(i.p,{children:["Tutti gli attributi ",e.jsx(i.code,{children:"it-aria-*"})," passati a ",e.jsx(i.code,{children:"<it-toggle>"}),` vengono applicati all'input generato. Il componente toggle mantiene la semantica corretta di un input type="checkbox" per garantire la massima accessibilità con screen reader e dispositivi di assistenza.`]}),`
`,e.jsx(i.h2,{id:"stato-attivo",children:"Stato attivo"}),`
`,e.jsxs(i.p,{children:["Per attivare un toggle, aggiungi l'attributo ",e.jsx(i.code,{children:"checked"})," al componente ",e.jsx(i.code,{children:"<it-toggle>"}),"."]}),`
`,e.jsx(o,{of:d}),`
`,e.jsx(i.h2,{id:"stato-disabilitato",children:"Stato disabilitato"}),`
`,e.jsxs(i.p,{children:["Per disabilitare un toggle, aggiungi l'attributo ",e.jsx(i.code,{children:"disabled"})," al componente ",e.jsx(i.code,{children:"<it-toggle>"}),". Un toggle disabilitato non può essere interattivo fino a quando non viene rimosso l'attributo."]}),`
`,e.jsx(o,{of:p}),`
`,e.jsx(i.h2,{id:"testo-di-supporto",children:"Testo di supporto"}),`
`,e.jsxs(i.p,{children:["Per mostrare un testo di supporto al toggle, aggiungi l'attributo ",e.jsx(i.code,{children:'support-text="Testo di supporto"'})," al componente ",e.jsx(i.code,{children:"<it-toggle>"}),"."]}),`
`,e.jsx(o,{of:g}),`
`,e.jsx(i.h2,{id:"inline",children:"Inline"}),`
`,e.jsxs(i.p,{children:["Per allineare orizzontalmente più interruttori, racchiudili in elementi con classe ",e.jsx(i.code,{children:".form-check-inline"}),"."]}),`
`,e.jsx(o,{of:m}),`
`,e.jsx(i.h2,{id:"raggruppati-visivamente",children:"Raggruppati visivamente"}),`
`,e.jsxs(i.p,{children:["Per raggruppare visivamente gli interruttori, racchiudi tutti gli elementi ",e.jsx(i.code,{children:"<it-toggle>"})," all'interno del componente ",e.jsx(i.code,{children:"<it-toggle-group>"})," e assegna al gruppo l'attributo ",e.jsx(i.code,{children:"name"})," corrispondente al nome del campo da salvare nel form."]}),`
`,e.jsxs(i.p,{children:["Sul componente ",e.jsx(i.code,{children:"<it-toggle-group>"})," sono disponibili alcuni attributi che si riflettono automaticamente sugli ",e.jsx(i.code,{children:"<it-toggle>"})," figli, senza doverli replicare in ognuno di essi."]}),`
`,e.jsx(i.p,{children:"Questi attributi sono:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"name"}),", indica il nome del campo nella form in cui verranno salvati i valori selezionati nel gruppo di toggle;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"required"}),", rende obbligatorio il campo della form relativo al gruppo di toggle;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"disabled"}),", disabilita tutti gli interruttori del gruppo di toggle;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"group"}),", applica lo stile di default ",e.jsx(i.em,{children:"gruppo di toggle"}),";"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"inline"}),", applica lo stile ",e.jsx(i.em,{children:"inline"})," al gruppo di toggle."]}),`
`]}),`
`,e.jsxs(i.p,{children:["Inserisci l'etichetta del gruppo in un elemento con attributo ",e.jsx(i.code,{children:'slot="legend"'})," all'interno di ",e.jsx(i.code,{children:"<it-toggle-group>"}),"."]}),`
`,e.jsxs(i.p,{children:["Quando utilizzi il componente ",e.jsx(i.code,{children:"it-toggle-group"})," in un form, il modo corretto per estrarre il valore del campo al submit via JS è:"]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-js",children:"const formData = new FormData(document.getElementById('form'));\nformData.getAll(field_name) // dove `field_name` è il valore dell'attributo `[name]`\n"})}),`
`,e.jsx(o,{of:h}),`
`,e.jsx(i.h2,{id:"validazione-e-gestione-degli-errori",children:"Validazione e gestione degli errori"}),`
`,e.jsx(i.p,{children:"Essendo una estensione del componente checkbox, il toggle supporta gli stessi meccanismi di validazione (nativa e custom) del componente checkbox."}),`
`,e.jsxs(i.p,{children:["Per maggiori dettagli, consulta la sezione dedicata alla validazione del componente ",e.jsx(i.a,{href:"/docs/componenti-form-checkbox--documentazione#validazione",children:"Checkbox"}),"."]}),`
`,e.jsx(i.h2,{id:"gestione-degli-eventi",children:"Gestione degli eventi"}),`
`,e.jsx(i.p,{children:"Essendo una estensione del componente checkbox, il toggle supporta gli stessi meccanismi di gestione degli eventi del componente checkbox."}),`
`,e.jsxs(i.p,{children:["Per maggiori dettagli, consulta la sezione dedicata alla gestione degli eventi del componente ",e.jsx(i.a,{href:"/docs/componenti-form-checkbox--documentazione#gestione-degli-eventi",children:"Checkbox"}),"."]}),`
`,e.jsx(i.h2,{id:"proprietà-metodi-ed-eventi-accessibili-via-js",children:"Proprietà, Metodi ed Eventi accessibili via js"}),`
`,e.jsx(i.p,{children:"Essendo una estensione del componente checkbox, il toggle supporta le stesse proprietà, metodi ed eventi accessibili via js del componente checkbox."}),`
`,e.jsxs(i.p,{children:["Per maggiori dettagli, consulta la sezione dedicata alle proprietà, metodi ed eventi accessibili via js del componente ",e.jsx(i.a,{href:"/docs/componenti-form-checkbox--documentazione#propriet%C3%A0-metodi-ed-eventi-accessibili-via-js",children:"Checkbox"}),"."]})]})}function f(n={}){const{wrapper:i}={...a(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(l,{...n})}):l(n)}export{f as default};

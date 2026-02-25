import{j as e,M as c,C as o,a as h,D as r}from"./blocks-C1WJMGUC.js";import{useMDXComponents as d}from"./index-BrQ7_w4M.js";import{S as p,E as l,D as x,I as u,G as m,a as j,b as g,c as b,V as v,d as f,e as t,M as a}from"./it-checkbox.stories-DxMaXZf3.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-90FZwcPR.js";import"./formControlReusableStories-C_aA7F-L.js";function s(n){const i={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...d(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:p}),`
`,e.jsx(i.h1,{id:"checkbox",children:"Checkbox"}),`
`,e.jsx("description",{children:"Casella di controllo accessibile e responsiva, che consente all'utente di attivare o disattivare un'opzione."}),`
`,e.jsx(i.h2,{id:"cosa-fa",children:"Cosa fa"}),`
`,e.jsx(i.p,{children:"Il componente checkbox consente all’utente di selezionare o deselezionare una o più opzioni da un elenco di scelte predefinite."}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"https://designers.italia.it/design-system/componenti/checkbox/",rel:"nofollow",children:"Approfondisci come e quando usare il componente Checkbox"})}),`
`,e.jsx(i.h2,{id:"anteprima-e-attributi-del-componente",children:"Anteprima e attributi del componente"}),`
`,e.jsxs(i.p,{children:["Modifica gli attributi nella tabella per personalizzare in tempo reale l'aspetto e il comportamento del componente. Per vedere come cambia il codice, clicca su ",e.jsx(i.strong,{children:"Show code"}),"."]}),`
`,e.jsx(o,{of:l}),`
`,e.jsx(h,{of:l}),`
`,e.jsx(i.h2,{id:"accessibilità",children:"Accessibilità"}),`
`,e.jsxs(i.p,{children:["Tutti gli attributi ",e.jsx(i.code,{children:"it-aria-*"})," passati a ",e.jsx(i.code,{children:"<it-checkbox>"})," vengono applicati all'input generato."]}),`
`,e.jsx(i.h2,{id:"stato-disabilitato",children:"Stato disabilitato"}),`
`,e.jsxs(i.p,{children:["Per disabilitare una checkbox, aggiungi l'attributo ",e.jsx(i.code,{children:"disabled"})," al componente ",e.jsx(i.code,{children:"<it-checkbox>"}),"."]}),`
`,e.jsx(o,{of:x}),`
`,e.jsx(i.h2,{id:"stato-indeterminato-mixed",children:"Stato indeterminato (mixed)"}),`
`,e.jsxs(i.p,{children:["Per ottenere lo stato indeterminato di una checkbox, aggiungi l'attributo ",e.jsx(i.code,{children:"indeterminate"})," al componente ",e.jsx(i.code,{children:"<it-checkbox>"}),"."]}),`
`,e.jsx(o,{of:u}),`
`,e.jsx(i.h2,{id:"gruppo-di-checkbox",children:"Gruppo di checkbox"}),`
`,e.jsxs(i.p,{children:["Per creare un gruppo di checkbox, racchiudi tutti gli elementi ",e.jsx(i.code,{children:"<it-checkbox>"})," all'interno del componente ",e.jsx(i.code,{children:"<it-checkbox-group>"})," e assegna al gruppo l'attributo ",e.jsx(i.code,{children:"name"})," corrispondente al nome del campo da salvare nella form."]}),`
`,e.jsxs(i.p,{children:["Sul componente ",e.jsx(i.code,{children:"<it-checkbox-group>"})," sono disponibili alcuni attributi che si riflettono automaticamente sugli ",e.jsx(i.code,{children:"<it-checkbox>"})," figli, e che non è necessario replicare in ognuno di essi. Questi attributi sono:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"name"}),": indica il nome del campo nella form in cui verranno salvati i valori selezionati nel gruppo di checkbox"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"required"}),": rende obbligatorio il campo della form relativo al gruppo di checkbox"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"disabled"}),": disabilita tutte le checkbox del gruppo di checkbox"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"group"}),": applica lo stile ",e.jsx(i.em,{children:"gruppo di checkbox"}),". È lo stile di default per il gruppo di checkbox"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"inline"}),": applica lo stile ",e.jsx(i.em,{children:"inline"})," al gruppo di checkbox."]}),`
`]}),`
`,e.jsxs(i.p,{children:["Inserisci l'etichetta del gruppo in un elemento con attributo ",e.jsx(i.code,{children:'slot="legend"'})," all'interno di ",e.jsx(i.code,{children:"<it-checkbox-group>"}),"."]}),`
`,e.jsxs(i.p,{children:["Quando utilizzi il componente ",e.jsx(i.code,{children:"it-checkbox-group"})," in una form, il modo corretto per estrarre il valore del campo al submit via JS è:"]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-js",children:"const formData = new FormData(document.getElementById('form'));\nformData.getAll(field_name) // dove `field_name` è il valore dell'attributo `[name]`\n"})}),`
`,e.jsx(i.h3,{id:"allineati-in-colonna",children:"Allineati in colonna"}),`
`,e.jsxs(i.p,{children:["È lo stile di default del gruppo di checkbox, ed equivale ad impostare l'attributo ",e.jsx(i.code,{children:"group"})," su ",e.jsx(i.code,{children:"<it-checkbox-group>"}),"."]}),`
`,e.jsx(i.p,{children:"L’elemento grafico di spunta verrà allineato alla destra del contenuto testuale."}),`
`,e.jsx(o,{of:m}),`
`,e.jsx(i.h3,{id:"inline",children:"Inline"}),`
`,e.jsxs(i.p,{children:["Per allineare orizzontalmente le checkbox, aggiungi l'attributo ",e.jsx(i.code,{children:"inline"})," a ",e.jsx(i.code,{children:"<it-checkbox-group>"}),"."]}),`
`,e.jsx(o,{of:j}),`
`,e.jsx(i.h3,{id:"valore-di-default-del-gruppo",children:"Valore di default del gruppo"}),`
`,e.jsxs(i.p,{children:["Per impostare un valore di default al gruppo di checkbox, usa l'attributo ",e.jsx(i.code,{children:"value"}),` impostando una rappresentazione in stringa di un array, ad esempio:
`,e.jsx(i.code,{children:`value='["valore_1","valore_3"]'`}),"."]}),`
`,e.jsx(o,{of:g}),`
`,e.jsx(i.h2,{id:"testo-di-supporto",children:"Testo di supporto"}),`
`,e.jsxs(i.p,{children:["Per mostrare un testo di supporto alla checkbox, aggiungi l'attributo ",e.jsx(i.code,{children:'supportText="Testo di supporto"'})," a ",e.jsx(i.code,{children:"<it-checkbox>"}),"."]}),`
`,e.jsx(o,{of:b}),`
`,e.jsx(i.h2,{id:"validazione-e-gestione-degli-errori",children:"Validazione e gestione degli errori"}),`
`,e.jsxs(i.p,{children:["Questa sezione si riferisce sia al componente ",e.jsx(i.code,{children:"<it-checkbox>"})," che al componente ",e.jsx(i.code,{children:"<it-checkbox-group>"}),"."]}),`
`,e.jsxs(i.p,{children:["Se non hai impostato la validazione custom tramite l'attributo ",e.jsx(i.code,{children:"custom-validation"}),", e hai impostato l'attributo ",e.jsx(i.code,{children:"required"}),", viene effettuata una validazione interna utilizzando la validazione nativa del browser."]}),`
`,e.jsx(o,{of:v}),`
`,e.jsx(i.h3,{id:"personalizzazione-dei-messaggi-di-errore",children:"Personalizzazione dei messaggi di errore"}),`
`,e.jsxs(i.p,{children:["Puoi personalizzare alcuni dei messaggi di errore di validazione, traducendo le seguenti stringhe tramite l'",e.jsx(i.a,{href:"/docs/i18n-internazionalizzazione--documentazione",children:"utility di internazionalizzazione"}),":"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"validityRequired"}),": messaggio che viene mostrato quando ",e.jsx(i.code,{children:"<it-checkbox>"})," ha l'attributo ",e.jsx(i.code,{children:"required"})," e non è compilato"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"validityGroupRequired"}),": messaggio che viene mostrato quando il gruppo di checkbox è ",e.jsx(i.code,{children:"required"})," e non è compilato"]}),`
`]}),`
`,e.jsx(i.p,{children:"Per gli altri errori di validazione non indicati, verranno mostrati i messaggi di errore nativi del browser."}),`
`,e.jsx(i.h3,{id:"validazione-esterna-validazione-custom",children:"Validazione esterna (validazione custom)"}),`
`,e.jsxs(i.p,{children:["Puoi anche validare il campo esternamente (via js ad esempio, o lato server), impostando l'attributo ",e.jsx(i.code,{children:'custom-validation="true"'}),`.
In questo modo la validazione di default del browser effettuata internamente al componente è disabilitata.`]}),`
`,e.jsx(i.h4,{id:"campo-invalido",children:"Campo invalido"}),`
`,e.jsxs(i.p,{children:["Nel caso il campo non sia valido, devi invalidare il campo impostando il messaggio di errore da visualizzare attraverso l'attributo ",e.jsx(i.code,{children:'validity-message="Messaggio di errore"'}),"."]}),`
`,e.jsx(i.h4,{id:"campo-valido",children:"Campo valido"}),`
`,e.jsxs(i.p,{children:["Per riportare il campo ad uno stato 'valido', è sufficiente impostare il messaggio di errore a vuoto: ",e.jsx(i.code,{children:'validity-message=""'}),"."]}),`
`,e.jsx(o,{of:f}),`
`,e.jsx(i.h2,{id:"gestione-degli-eventi",children:"Gestione degli eventi"}),`
`,e.jsx(r,{of:t}),`
`,e.jsx(o,{of:t}),`
`,e.jsx(i.h2,{id:"",children:a.name}),`
`,e.jsx(r,{of:a}),`
`,e.jsx(o,{of:a})]})}function I(n={}){const{wrapper:i}={...d(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(s,{...n})}):s(n)}export{I as default};

import{j as e,M as l,T as d,C as n,a as c}from"./blocks-FPQAOa66.js";import{useMDXComponents as s}from"./index-D5SWu1Yp.js";import{S as t,B as a,V as u,P as p,M as h,a as m,b as x,c as j,d as g,e as f,f as v,g as z,h as b}from"./it-dropdown.stories-DEoSDCTy.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-CGo9iNzD.js";function r(o){const i={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:t}),`
`,e.jsx(d,{of:t}),`
`,e.jsx("description",{children:"Elenco di azioni o link a comparsa per risparmiare spazio e organizzare opzioni in modo compatto e coerente"}),`
`,e.jsx(i.h2,{id:"cosa-fa",children:"Cosa fa"}),`
`,e.jsx(i.p,{children:`Il componente dropdown, chiamato anche menu a tendina, offre una navigazione veloce al contenuto desiderato, permettendo agli utenti di risparmiare tempo e accedere direttamente a specifici contenuti.
È utile quindi per creare menu contestuali tramite un elenco di link o azioni.`}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"https://designers.italia.it/design-system/componenti/dropdown/",rel:"nofollow",children:"Approfondisci quando e come usare il componente Dropdown"})}),`
`,e.jsx(i.h3,{id:"alternative-a-questo-componente",children:"Alternative a questo componente"}),`
`,e.jsxs(i.p,{children:["Per permettere all'utente di esprimere scelte tra più elementi in un modulo (",e.jsx(i.a,{href:"/docs/componenti-form--documentazione",children:"Form"}),") usa i componenti dedicati:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"/docs/componenti-form-select--documentazione",children:"Select"}),": per selezionare un'opzione da una lista predefinita di valori."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"/docs/componenti-form-autocomplete--documentazione",children:"Autocomplete"}),": per selezionare un'opzione da un elenco di scelte più ampio, con la possibilità di filtrare le opzioni digitando."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"/docs/componenti-form-radio--documentazione",children:"Radio button"}),": per selezionare una singola opzione da un insieme limitato di scelte visibili tutte insieme, da preferire se è necessario che l'utente sia consapevole di tutte le opzioni e se il numero di scelte è limitato."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"/docs/componenti-form-checkbox--documentazione",children:"Checkbox"}),": per selezionare una o più opzioni da un insieme limitato di scelte visibili tutte insieme, da preferire se è necessario che l'utente sia consapevole di tutte le opzioni quando la modalità di scelta è multipla."]}),`
`]}),`
`,e.jsx(i.h2,{id:"anteprima-e-attributi-del-componente",children:"Anteprima e attributi del componente"}),`
`,e.jsxs(i.p,{children:["Modifica gli attributi nella tabella per personalizzare in tempo reale l'aspetto e il comportamento del componente. Per vedere come cambia il codice, clicca su ",e.jsx(i.strong,{children:"Show code"}),"."]}),`
`,e.jsx(n,{of:a}),`
`,e.jsx(c,{of:a}),`
`,e.jsx(i.h2,{id:"informazioni-generali",children:"Informazioni generali"}),`
`,e.jsxs(i.p,{children:["Per la creazione di un Dropdown usa il componente ",e.jsx(i.code,{children:"<it-dropdown>"})," e inserisci al suo interno uno o più ",e.jsx(i.code,{children:"<it-dropdown-item>"}),`.
Dovrai specificare l'etichetta del menu tramite l'attributo `,e.jsx(i.code,{children:"label"}),`.
Puoi specificare una variante tramite l'attributo `,e.jsx(i.code,{children:"variant"}),", questa verrà applicata al pulsante di attivazione del menu."]}),`
`,e.jsx(i.h2,{id:"accessibilità",children:"Accessibilità"}),`
`,e.jsxs(i.p,{children:["Lo standard ",e.jsx(i.a,{href:"https://www.w3.org/TR/wai-aria/",rel:"nofollow",children:"WAI ARIA"})," definisce un widget con proprietà ",e.jsx(i.a,{href:"https://www.w3.org/TR/wai-aria/#menu",rel:"nofollow",children:e.jsx(i.code,{children:'role="menu"'})}),", specifica per i menu applicativi con link o azioni."]}),`
`,e.jsx(i.p,{children:"Questi menu possono contenere solo voci di menu, voci di menu di caselle di controllo, voci di menu dei pulsanti di opzione, gruppi di pulsanti di opzione e sottomenu."}),`
`,e.jsxs(i.p,{children:["I dropdown di ",e.jsx(i.strong,{children:"Dev Kit Italia"}),` sono progettati per essere invece generici e applicabili a una varietà di situazioni.
Per questo motivo, il componente `,e.jsx(i.code,{children:"it-dropdown"})," ha come ruolo predefinito il ruolo ",e.jsx(i.code,{children:"menu"})," e gestisce automaticamente il ruolo degli elementi interni, ma puoi modificare il ruolo del Dropdown generato da questo componente ad una semplice lista impostando l'attributo ",e.jsx(i.code,{children:'it-role="list"'}),"."]}),`
`,e.jsxs(i.p,{children:["Questo componente comprende di base il supporto per la maggior parte delle interazioni standard del menu della tastiera, come la possibilità di spostarsi tra i singoli elementi ",e.jsx(i.code,{children:"it-dropdown-item"})," usando i tasti freccia, e chiude il menu con il tasto ESC."]}),`
`,e.jsxs(i.p,{children:["Infine, dovrai inserire un'etichetta per il pulsante di attivazione del menu tramite l'attributo ",e.jsx(i.code,{children:"label"}),`, che verrà letta dagli screen reader.
In alternativa, puoi omettere l'attributo `,e.jsx(i.code,{children:"label"})," e aggiungere un attributo ",e.jsx(i.code,{children:"it-aria-label"})," al componente ",e.jsx(i.code,{children:"<it-dropdown>"}),"."]}),`
`,e.jsx(i.h2,{id:"varianti",children:"Varianti"}),`
`,e.jsxs(i.p,{children:["Ovviamente sono disponibili ",e.jsx(i.a,{href:"/docs/componenti-button--documentazione#varianti-di-colore",children:"tutte le varianti"})," già presenti per i pulsanti: ",e.jsx(i.code,{children:"primary"}),", ",e.jsx(i.code,{children:"secondary"}),", ",e.jsx(i.code,{children:"success"}),", ",e.jsx(i.code,{children:"danger"})," (oltre a ",e.jsx(i.code,{children:"warning"}),", ",e.jsx(i.code,{children:"light"}),", ",e.jsx(i.code,{children:"link"}),"). Qui un esempio con alcune di esse."]}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(i.h2,{id:"posizionamento",children:"Posizionamento"}),`
`,e.jsxs(i.p,{children:["Per aprire le voci di menu in direzioni diverse, usa l'attributo ",e.jsx(i.code,{children:"alignment"})," con i valori:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"top"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"right"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"bottom"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"left"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"top-start"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"top-end"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"right-start"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"right-end"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"bottom-start"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"bottom-end"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"left-start"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"left-end"})}),`
`]}),`
`,e.jsxs(i.p,{children:["I valori ",e.jsx(i.code,{children:"top"}),", ",e.jsx(i.code,{children:"right"}),", ",e.jsx(i.code,{children:"bottom"}),", ",e.jsx(i.code,{children:"left"}),` aprono il menu in posizione centrata rispetto al pulsante;
quelli con `,e.jsx(i.code,{children:"-start"})," / ",e.jsx(i.code,{children:"-end"})," permettono un allineamento più preciso."]}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(i.h2,{id:"menu-disabilitato",children:"Menu disabilitato"}),`
`,e.jsxs(i.p,{children:["Aggiungi l'attributo ",e.jsx(i.code,{children:"disabled"})," sul tag ",e.jsx(i.code,{children:"<it-dropdown>"})," per disabilitare completamente il menu."]}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(i.h2,{id:"dropdown-menu",children:"Dropdown menu"}),`
`,e.jsx(i.p,{children:"Puoi personalizzare le voci del menu che viene aperto al click."}),`
`,e.jsx(i.h3,{id:"menu-voci-attive",children:"Menu voci attive"}),`
`,e.jsxs(i.p,{children:["Aggiungi l'attributo ",e.jsx(i.code,{children:"active"}),' agli elementi da mostrare come attivi. Per accessibilità viene aggiunto automaticamente il testo nascosto "attivo" in coda al contenuto.']}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(i.h3,{id:"menu-voci-disabilitate",children:"Menu voci disabilitate"}),`
`,e.jsxs(i.p,{children:["Per rendere non selezionabili alcune voci aggiungi ",e.jsx(i.code,{children:"disabled"})," agli elementi ",e.jsx(i.code,{children:"<it-dropdown-item>"})," interessati."]}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(i.h3,{id:"menu-con-intestazioni-e-separatori",children:"Menu con intestazioni e separatori"}),`
`,e.jsxs(i.p,{children:["Puoi inserire un'intestazione usando un elemento con ",e.jsx(i.code,{children:'slot="header"'})," e dividere le sezioni con un elemento ",e.jsx(i.code,{children:"<it-dropdown-item separator>"}),"."]}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(i.h3,{id:"menu-con-voci-grandi",children:"Menu con voci grandi"}),`
`,e.jsxs(i.p,{children:["Usa l'attributo ",e.jsx(i.code,{children:"large"})," su una voce per aumentarne la dimensione."]}),`
`,e.jsx(n,{of:g}),`
`,e.jsx(i.h3,{id:"menu-a-tutta-larghezza",children:"Menu a tutta larghezza"}),`
`,e.jsxs(i.p,{children:["Usa l'attributo ",e.jsx(i.code,{children:"full-width"}),` per espandere il menu alla larghezza del contenitore.
Le voci vengono disposte orizzontalmente se lo spazio lo consente.`]}),`
`,e.jsx(n,{of:f}),`
`,e.jsx(i.h3,{id:"menu-con-icona-a-destra",children:"Menu con icona a destra"}),`
`,e.jsxs(i.p,{children:["Usa lo slot ",e.jsx(i.code,{children:"suffix"})," per aggiungere agli elementi del menu un'icona illustrativa allineata a destra."]}),`
`,e.jsx(n,{of:v}),`
`,e.jsx(i.h3,{id:"menu-con-icona-a-sinistra",children:"Menu con icona a sinistra"}),`
`,e.jsxs(i.p,{children:["Usa lo slot ",e.jsx(i.code,{children:"prefix"})," per aggiungere agli elementi del menu un'icona illustrativa allineata a sinistra."]}),`
`,e.jsx(n,{of:z}),`
`,e.jsx(i.h3,{id:"menu-dark",children:"Menu dark"}),`
`,e.jsxs(i.p,{children:["Aggiungi l'attributo ",e.jsx(i.code,{children:"dark"})," al dropdown per ottenere la versione scura con colori primari invertiti."]}),`
`,e.jsx(n,{of:b})]})}function I(o={}){const{wrapper:i}={...s(),...o.components};return i?e.jsx(i,{...o,children:e.jsx(r,{...o})}):r(o)}export{I as default};

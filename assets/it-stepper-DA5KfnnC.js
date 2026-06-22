import{j as e,M as r,C as n,a as l}from"./blocks-9k5qyFqi.js";import{useMDXComponents as t}from"./index-BPN0viyD.js";import{S as c,E as s,a as d,T as p,b as h,N as x,P as u,c as j,d as m,C as g,e as v,f}from"./it-stepper.stories-uQyDCs3I.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-LX9gLJPF.js";function a(o){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...t(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:c}),`
`,e.jsx(i.h1,{id:"stepper",children:"Stepper"}),`
`,e.jsx("description",{children:"Elementi di navigazione che mostrano l'avanzamento dell'utente all'interno di una procedura complessa e permettono di navigare tra i vari passaggi di interazione"}),`
`,e.jsx(i.h2,{id:"cosa-fa",children:"Cosa fa"}),`
`,e.jsxs(i.p,{children:["Il componente ",e.jsx(i.code,{children:"it-stepper"}),` mostra lo stato di avanzamento di una procedura composta da più passaggi logici.
Ogni passaggio viene definito con un elemento `,e.jsx(i.code,{children:"it-stepper-step"})," inserito all'interno del componente."]}),`
`,e.jsx(i.p,{children:`Lo stepper è composto da intestazione, area contenuto e navigazione.
Puoi mostrare tutte le aree insieme oppure nasconderne alcune quando devi riprodurre solo l'intestazione, solo l'avanzamento o un flusso con salvataggio e conferma.`}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"https://designers.italia.it/design-system/componenti/steppers/",rel:"nofollow",children:"Approfondisci come e quando usare il componente Stepper"})}),`
`,e.jsx(i.h2,{id:"anteprima-e-attributi-del-componente",children:"Anteprima e attributi del componente"}),`
`,e.jsxs(i.p,{children:[`Modifica gli attributi nella tabella per personalizzare in tempo reale l'aspetto e il comportamento del componente.
Per vedere come cambia il codice, clicca su `,e.jsx(i.strong,{children:"Show code"}),"."]}),`
`,e.jsx(n,{of:s}),`
`,e.jsx(l,{of:s}),`
`,e.jsx(i.h2,{id:"accessibilità",children:"Accessibilità"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["L'area contenuto utilizza ",e.jsx(i.code,{children:'aria-live="polite"'})," per notificare i lettori di schermo quando cambia lo step attivo."]}),`
`,e.jsxs(i.li,{children:["Il passo attivo espone ",e.jsx(i.code,{children:'aria-current="step"'})," nell'intestazione e nei pallini."]}),`
`,e.jsx(i.li,{children:'I passi confermati includono testo nascosto per screen reader con stato "Confermato".'}),`
`,e.jsx(i.li,{children:'Il passo attivo include testo nascosto con stato "Attivo".'}),`
`,e.jsxs(i.li,{children:["Per la variante ",e.jsx(i.code,{children:"numbers"}),', il testo nascosto include il numero dello step insieme allo stato, ad esempio "Confermato Step 1".']}),`
`,e.jsx(i.li,{children:"Progress bar e pallini usano il totale effettivo dei passi e comunicano lo stato corrente alle tecnologie assistive."}),`
`,e.jsx(i.li,{children:"I pulsanti di navigazione vengono disabilitati quando si raggiunge il primo o l'ultimo passo disponibile."}),`
`]}),`
`,e.jsx(i.h2,{id:"intestazione",children:"Intestazione"}),`
`,e.jsxs(i.p,{children:["L'intestazione può essere personalizzata tramite l'attributo ",e.jsx(i.code,{children:"header-variant"}),`.
Sono disponibili tre varianti.`]}),`
`,e.jsx(i.h3,{id:"solo-testo",children:"Solo testo"}),`
`,e.jsxs(i.p,{children:["La variante predefinita (",e.jsx(i.code,{children:"text"}),") mostra l'etichetta di ciascun passo e il suo stato."]}),`
`,e.jsx(n,{of:d}),`
`,e.jsx(i.h3,{id:"testo-e-icone",children:"Testo e icone"}),`
`,e.jsxs(i.p,{children:["La variante ",e.jsx(i.code,{children:"icons"}),` mostra un'icona prima dell'etichetta di ciascun passo.
Per ogni `,e.jsx(i.code,{children:"it-stepper-step"})," puoi specificare il nome dell'icona tramite l'attributo ",e.jsx(i.code,{children:"icon"}),", ad esempio ",e.jsx(i.code,{children:"it-calendar"}),", ",e.jsx(i.code,{children:"it-lock"})," o ",e.jsx(i.code,{children:"it-settings"}),"."]}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(i.h3,{id:"testo-e-numeri",children:"Testo e numeri"}),`
`,e.jsxs(i.p,{children:["La variante ",e.jsx(i.code,{children:"numbers"}),` mostra il numero ordinale del passo all'interno di un cerchio.
I passi confermati mostrano una spunta al posto del numero.`]}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(i.h2,{id:"navigazione-degli-step",children:"Navigazione degli step"}),`
`,e.jsxs(i.p,{children:[`La barra di navigazione contiene i pulsanti "Indietro" e "Avanti".
Le etichette possono essere personalizzate tramite gli attributi `,e.jsx(i.code,{children:"prev-label"})," e ",e.jsx(i.code,{children:"next-label"}),"."]}),`
`,e.jsxs(i.p,{children:["Puoi navigare anche via JavaScript tramite i metodi pubblici ",e.jsx(i.code,{children:"next()"})," e ",e.jsx(i.code,{children:"prev()"}),", oppure modificando l'attributo ",e.jsx(i.code,{children:"current"}),`.
Ogni cambio di step emette un evento `,e.jsx(i.code,{children:"it-stepper-change"})," con ",e.jsx(i.code,{children:"detail.step"})," e ",e.jsx(i.code,{children:"detail.prevStep"}),"."]}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(i.h3,{id:"progress-bar",children:"Progress bar"}),`
`,e.jsxs(i.p,{children:["Imposta ",e.jsx(i.code,{children:'mobile-progress="bar"'}),` per mostrare una barra di progresso tra i pulsanti di navigazione.
Per impostazione predefinita l'indicatore segue il comportamento Bootstrap Italia ed è visibile solo su mobile.
Per modificare questa impostazione e mostrare l'indicatore su qualsiasi schermo, imposta l'attributo `,e.jsx(i.code,{children:"mobile-progress-on-desktop"}),"."]}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(i.h3,{id:"pallini",children:"Pallini"}),`
`,e.jsxs(i.p,{children:["Imposta ",e.jsx(i.code,{children:'mobile-progress="dots"'}),` per mostrare dei pallini indicatori tra i pulsanti di navigazione.
I pallini completati vengono evidenziati e il pallino corrente espone testo accessibile.`]}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(i.h2,{id:"salva",children:"Salva"}),`
`,e.jsxs(i.p,{children:["Per aggiungere un'area di salvataggio sotto la barra di navigazione, usa l'attributo ",e.jsx(i.code,{children:"save-label"}),`.
Quando l'utente clicca sul pulsante di salvataggio, il componente emette l'evento `,e.jsx(i.code,{children:"it-stepper-save"}),"."]}),`
`,e.jsxs(i.p,{children:["Il titolo e la descrizione dell'area possono essere personalizzati tramite ",e.jsx(i.code,{children:"save-title"})," e ",e.jsx(i.code,{children:"save-description"}),"."]}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(i.h2,{id:"conferma",children:"Conferma"}),`
`,e.jsxs(i.p,{children:["Aggiungi l'attributo ",e.jsx(i.code,{children:"show-confirm"}),` per sostituire il pulsante "Avanti" con il pulsante "Conferma".
Quando l'utente clicca sul pulsante, il componente emette l'evento `,e.jsx(i.code,{children:"it-stepper-confirm"}),"."]}),`
`,e.jsx(n,{of:g}),`
`,e.jsx(i.h2,{id:"sfondo-scuro",children:"Sfondo scuro"}),`
`,e.jsxs(i.p,{children:["L'attributo ",e.jsx(i.code,{children:"dark"})," attiva la variante per sfondo scuro."]}),`
`,e.jsx(n,{of:v}),`
`,e.jsx(i.p,{children:"Le varianti dell'intestazione sono disponibili anche su sfondo scuro."}),`
`,e.jsx(n,{of:f}),`
`,e.jsx(i.h2,{id:"personalizzazione-degli-stili",children:"Personalizzazione degli stili"}),`
`,e.jsxs(i.p,{children:[`Il componente usa gli stili e le variabili tokenizzate di Bootstrap Italia.
Per personalizzazioni locali puoi usare il selettore `,e.jsx(i.code,{children:"::part"})," con questi valori:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"stepper"})," - contenitore principale."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"header"})," - area intestazione."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"header-list"})," - lista degli step nell'intestazione."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"content"})," - area contenuto."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"nav"})," - navigazione."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"progress"})," - progress bar mobile."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"dots"})," - pallini mobile."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"save"})," - area di salvataggio."]}),`
`]}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"/docs/personalizzazione-degli-stili--documentazione#selettore-part",children:"Vai alla guida sul selettore part"})})]})}function C(o={}){const{wrapper:i}={...t(),...o.components};return i?e.jsx(i,{...o,children:e.jsx(a,{...o})}):a(o)}export{C as default};

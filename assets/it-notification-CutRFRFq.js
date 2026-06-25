import{j as i,M as r,T as c,C as n,a as d}from"./blocks-D20nVk-z.js";import{useMDXComponents as l}from"./index-De_GF6sN.js";import{S as a,E as t,C as p,a as h,b as u,P as m,c as x,A as j,d as f}from"./it-notification.stories-lCAvOy1B.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-C-T64Vf2.js";function s(o){const e={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...l(),...o.components};return i.jsxs(i.Fragment,{children:[i.jsx(r,{of:a}),`
`,i.jsx(c,{of:a}),`
`,i.jsx("description",{children:"Messaggio di testo a comparsa per informare l'utente di eventi, aggiornamenti o azioni che richiedono la sua attenzione"}),`
`,i.jsx(e.h2,{id:"cosa-fa",children:"Cosa fa"}),`
`,i.jsx(e.p,{children:`Usa il componente notification, in italiano notifica, per aggiornare l'utente su modifiche o aggiornamenti minori all'interno dell'applicazione.
Questi messaggi temporanei appaiono in sovrimpressione e tendono a scomparire dopo pochi secondi, quindi potrebbero non essere sempre notati o letti attentamente.`}),`
`,i.jsx(e.p,{children:i.jsx(e.a,{href:"https://designers.italia.it/design-system/componenti/notifications/",rel:"nofollow",children:"Approfondisci come e quando usare il componente Notification"})}),`
`,i.jsx(e.h3,{id:"alternative-a-questo-componente",children:"Alternative a questo componente"}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsxs(e.li,{children:[i.jsx(e.a,{href:"/docs/componenti-alert--documentazione",children:"Alert"}),": per mostrare all'utente messaggi di avviso importanti che restano nel corpo della pagina senza scomparire automaticamente."]}),`
`]}),`
`,i.jsx(e.h2,{id:"anteprima-e-attributi-del-componente",children:"Anteprima e attributi del componente"}),`
`,i.jsxs(e.p,{children:["Modifica gli attributi nella tabella per personalizzare in tempo reale l'aspetto e il comportamento del componente. Per vedere come cambia il codice, clicca su ",i.jsx(e.strong,{children:"Show code"}),"."]}),`
`,i.jsx(n,{of:t}),`
`,i.jsx(d,{of:t}),`
`,i.jsx(e.h2,{id:"indicazioni-generali",children:"Indicazioni generali"}),`
`,i.jsx(e.p,{children:`Lo stato naturale dell'elemento è invisibile.
Gli esempi di questa pagina sono stati resi statici per facilitare un confronto fra le varie tipologie.`}),`
`,i.jsxs(e.p,{children:["Passa alla sezione ",i.jsx(e.a,{href:"#attivazione-tramite-codice",children:"Attivazione tramite codice"})," per vedere gli esempi di notifica funzionanti."]}),`
`,i.jsx(e.h2,{id:"accessibilità",children:"Accessibilità"}),`
`,i.jsxs(e.p,{children:["Il componente utilizza il tag ",i.jsx(e.code,{children:"h2"}),` per il titolo delle notifiche per impostazione predefinita.
Utilizza il tag `,i.jsx(e.code,{children:"h"}),` corretto a seconda del contesto.
Usa l'attributo `,i.jsx(e.code,{children:"heading-level"})," per impostarlo."]}),`
`,i.jsxs(e.p,{children:["Il componente si occupa automaticamente di impostare e gestire gli attributi necessari per l'accessibilità, sia ",i.jsx(e.code,{children:"role"})," che ",i.jsx(e.code,{children:"aria-hidden"}),"."]}),`
`,i.jsx(e.h2,{id:"testo-supplementare",children:"Testo supplementare"}),`
`,i.jsxs(e.p,{children:["Puoi aggiungere un breve testo al di sotto del titolo utilizzando un tag ",i.jsx(e.code,{children:"<p>"}),"."]}),`
`,i.jsx(n,{of:p}),`
`,i.jsx(e.h2,{id:"pulsante-di-chiusura",children:"Pulsante di chiusura"}),`
`,i.jsx(e.p,{children:"Le notifiche con pulsante di chiusura non vengono nascoste dopo un intervallo di tempo ma vengono chiuse solo quando si clicca sul rispettivo pulsante di chiusura."}),`
`,i.jsxs(e.p,{children:["Utilizza un attributo aggiuntivo ",i.jsx(e.code,{children:"dismissable"})," per ottenere questo comportamento."]}),`
`,i.jsx(n,{of:h}),`
`,i.jsx(e.h2,{id:"stati",children:"Stati"}),`
`,i.jsxs(e.p,{children:[`Alle notifiche possono essere applicati attributi aggiuntivi che ne determinano lo stato modificando il colore delle icone e del bordo.
Utilizza l'attributo `,i.jsx(e.code,{children:"status"})," con uno di questi valori:"]}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:"success"})," - per messaggi di procedure andate a buon fine"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:"error"})," - per messaggi di errore"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:"info"})," - per info generiche"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:"warning"})," - per messaggi di precauzione"]}),`
`]}),`
`,i.jsx(n,{of:u}),`
`,i.jsx(e.h2,{id:"posizione",children:"Posizione"}),`
`,i.jsx(e.p,{children:"La posizione predefinita delle notifiche è nella parte destra inferiore della finestra."}),`
`,i.jsx(e.p,{children:`Utilizzando gli attributi aggiuntivi di posizione fissa elencati di seguito la notifica verrà posizionata a filo di uno dei margini indicati,
modificando l'arrotondamento degli angoli di conseguenza.`}),`
`,i.jsxs("it-callout",{variant:"warning","heading-level":"h3",children:[i.jsx("span",{slot:"title",children:"Posizione su mobile"}),i.jsx("p",{children:"Questi attributi non influenzano il posizionamento su device mobile, in questo caso la Notification è sempre a piede della finestra e ne occupa tutta la larghezza"})]}),`
`,i.jsx(e.h3,{id:"posizione-predefinita",children:"Posizione predefinita"}),`
`,i.jsx(e.p,{children:"Posizionamento predefinito della notifica."}),`
`,i.jsx(n,{of:m}),`
`,i.jsx(e.h3,{id:"posizione-fissa",children:"Posizione fissa"}),`
`,i.jsx(e.p,{children:"Esempi delle quattro posizioni fisse possibili."}),`
`,i.jsx(n,{of:x}),`
`,i.jsx(e.h2,{id:"attivazione-tramite-codice",children:"Attivazione tramite codice"}),`
`,i.jsxs(e.p,{children:["Puoi mostrare una notifica chiamando il metodo ",i.jsx(e.code,{children:"show"})," di un elemento ",i.jsx(e.code,{children:"it-notification"}),`.
Puoi passare come parametro il valore in millisecondi di permanenza della notifica.
Se non viene specificato viene usato il valore dell'attributo `,i.jsx(e.code,{children:"timeout"}),", oppure viene usato il valore predefinito di 3 secondi."]}),`
`,i.jsx(e.p,{children:"Trovi qui sotto due esempi su come usare le notifiche."}),`
`,i.jsx(e.h3,{id:"notifiche-a-scomparsa-automatica",children:"Notifiche a scomparsa automatica"}),`
`,i.jsxs(e.p,{children:["Questo è il comportamento di default che ottieni quando non imposti l'attributo ",i.jsx(e.code,{children:"dismissable"}),"."]}),`
`,i.jsx(n,{of:j}),`
`,i.jsx(e.h3,{id:"notifiche-a-scomparsa-manuale",children:"Notifiche a scomparsa manuale"}),`
`,i.jsxs(e.p,{children:["Questo è un esempio di come rimuovere manualmente le notifiche quando imposti l'attributo ",i.jsx(e.code,{children:"dismissable"}),`.
Il click sul pulsante di chiusura interno alla notifica è automaticamente configurato per nasconderla.`]}),`
`,i.jsxs(e.p,{children:["Puoi inoltre controllarne la chiusura dall'esterno programmaticamente, chiamando il metodo ",i.jsx(e.code,{children:"hide"})," dell'elemento ",i.jsx(e.code,{children:"it-notification"}),"."]}),`
`,i.jsx(n,{of:f}),`
`,i.jsx(e.h2,{id:"personalizzazione-degli-stili",children:"Personalizzazione degli stili"}),`
`,i.jsxs(e.p,{children:["Per personalizzare gli stili del componente puoi usare il selettore ",i.jsx(e.code,{children:"::part"})," passando i seguenti valori:"]}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:"notification"})," - per personalizzare il contenitore principale"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:"title"})," - per personalizzare il titolo"]}),`
`]}),`
`,i.jsxs(e.p,{children:[i.jsx(e.a,{href:"/docs/personalizzazione-degli-stili--documentazione#selettore-part",children:"Vedi qui la guida dettagliata"}),"."]})]})}function q(o={}){const{wrapper:e}={...l(),...o.components};return e?i.jsx(e,{...o,children:i.jsx(s,{...o})}):s(o)}export{q as default};

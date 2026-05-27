import{j as i,M as h,C as n,a as m,D as a}from"./blocks-BWmD3jw0.js";import{useMDXComponents as u}from"./index-DsXIUD6o.js";import{S as x,E as t,P as j,T as g,L as z,I as s,D as r,a as v,R as f,b,c as P,V as y,d as w,G as l,M as d,e as c}from"./it-input.stories-D391TrQ-.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-ClE6dn2R.js";import"./types-CucKb5le.js";import"./formControlReusableStories-CpzJTnw7.js";function p(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...u(),...o.components};return i.jsxs(i.Fragment,{children:[i.jsx(h,{of:x}),`
`,i.jsx(e.h1,{id:"input",children:"Input"}),`
`,i.jsx("description",{children:"Campi per l'inserimento di dati testuali, numerici, in forma libera o in formati specifici, all'interno di un form"}),`
`,i.jsx(e.h2,{id:"cosa-fa",children:"Cosa fa"}),`
`,i.jsxs(e.p,{children:["Il componente ",i.jsx(e.code,{children:"it-input"}),` consente all’utente di inserire dati testuali o numerici, sia in forma libera che secondo formati prestabiliti, all’interno di moduli (form).
È ideale per raccogliere informazioni brevi (come nomi, email, telefono) o lunghe (come descrizioni), nonché per supportare varianti specifiche come password e aree di testo.
Si utilizza quando si vuole dare all’utente la possibilità di digitare direttamente un valore e non semplicemente selezionarlo da un elenco di opzioni.`]}),`
`,i.jsx(e.p,{children:i.jsx(e.a,{href:"https://designers.italia.it/design-system/componenti/input/",rel:"nofollow",children:"Approfondisci come e quando usare il componente Input"})}),`
`,i.jsx(e.h2,{id:"anteprima-e-attributi-del-componente",children:"Anteprima e attributi del componente"}),`
`,i.jsxs(e.p,{children:["Modifica gli attributi nella tabella per personalizzare in tempo reale l'aspetto e il comportamento del componente. Per vedere come cambia il codice, clicca su ",i.jsx(e.strong,{children:"Show code"}),"."]}),`
`,i.jsx(n,{of:t}),`
`,i.jsx(m,{of:t}),`
`,i.jsx(e.h2,{id:"indicazioni-generali",children:"Indicazioni generali"}),`
`,i.jsxs(e.p,{children:["Per il corretto funzionamento degli elementi di tipo ",i.jsx(e.code,{children:"<it-input>"})," è di fondamentale importanza l’utilizzo uno degli appositi attributi ",i.jsx(e.code,{children:"type"}),' (ad esempio, "email" per l’inserimento di indirizzi email o "number" per informazioni numeriche), in modo da sfruttare i controlli nativi dei browser più recenti come la verifica dell’email, l’utilizzo di metodo di input numerico ed altro.']}),`
`,i.jsx(e.h2,{id:"accessibilità",children:"Accessibilità"}),`
`,i.jsxs(e.p,{children:["Tutti gli attributi ",i.jsx(e.code,{children:"it-aria-*"})," passati a ",i.jsx(e.code,{children:"<it-input>"})," vengono applicati all'input generato."]}),`
`,i.jsx(e.h2,{id:"testo-segnaposto",children:"Testo segnaposto"}),`
`,i.jsxs(e.p,{children:["Puoi abbinare al componente ",i.jsx(e.code,{children:"<it-input>"})," un testo segnaposto (placeholder) per fornire indicazioni sul tipo di contenuto atteso. Questo testo non sostituisce l’etichetta, ma fornisce informazioni aggiuntive."]}),`
`,i.jsx(n,{of:j}),`
`,i.jsx(e.h2,{id:"testo-di-supporto",children:"Testo di supporto"}),`
`,i.jsxs(e.p,{children:["In caso di necessità, puoi anche utilizzare un ulteriore contenuto testuale sotto il campo di testo, indicando nell'attributo ",i.jsx(e.code,{children:"support-text"})," il testo da visualizzare."]}),`
`,i.jsx(n,{of:g}),`
`,i.jsx(e.h2,{id:"etichetta-nascosta",children:"Etichetta nascosta"}),`
`,i.jsxs(e.p,{children:["Se vuoi nascondere l'etichetta, come ad esempio nei campi di ricerca, è sufficiente passare l'attributo ",i.jsx(e.code,{children:"label-hidden"}),"."]}),`
`,i.jsx(n,{of:z}),`
`,i.jsx(e.h2,{id:"icone-o-pulsanti",children:"Icone o pulsanti"}),`
`,i.jsx(a,{of:s}),`
`,i.jsx(n,{of:s}),`
`,i.jsx(e.h2,{id:"dimensioni",children:"Dimensioni"}),`
`,i.jsx(a,{of:r}),`
`,i.jsx(n,{of:r}),`
`,i.jsx(e.h2,{id:"stato-disabilitato",children:"Stato disabilitato"}),`
`,i.jsxs(e.p,{children:["Aggiungi l’attributo ",i.jsx(e.code,{children:"disabled"})," ad un ",i.jsx(e.code,{children:"<it-input>"})," per impedire la modifica del valore contenuto e non inviare i dati in esso contenuti."]}),`
`,i.jsx(n,{of:v}),`
`,i.jsx(e.h2,{id:"stato-readonly",children:"Stato readonly"}),`
`,i.jsxs(e.p,{children:["Aggiungi l’attributo ",i.jsx(e.code,{children:"readonly"})," ad un ",i.jsx(e.code,{children:"<it-input>"})," per impedire la modifica del valore contenuto."]}),`
`,i.jsx(e.h3,{id:"readonly-normalizzato",children:"Readonly normalizzato"}),`
`,i.jsxs(e.p,{children:["Se per qualche motivo vuoi avere gli elementi input readonly nella forma stilizzata come testo, aggiungi l'attributo ",i.jsx(e.code,{children:"plaintext"})," a ",i.jsx(e.code,{children:"<it-input>"}),"."]}),`
`,i.jsx(n,{of:f}),`
`,i.jsx(e.h2,{id:"password",children:"Password"}),`
`,i.jsxs(e.p,{children:["Per semplificare l’inserimento della password, il componente ",i.jsx(e.code,{children:"<it-input>"})," di tipo password include un pulsante che mostra i caratteri digitati."]}),`
`,i.jsxs(e.p,{children:["Puoi aggiungere anche un testo di supporto che aiuti nella compilazione, attraverso l’attributo ",i.jsx(e.code,{children:"support-text"}),"."]}),`
`,i.jsx(e.h3,{id:"misuratore-sicurezza-e-suggerimenti",children:"Misuratore sicurezza e suggerimenti"}),`
`,i.jsxs(e.p,{children:["Nel caso di un campo per la scelta di una nuova password, puoi abbinare controlli per segnalare quanto la password che si sta inserendo segua alcuni suggerimenti di sicurezza, come la lunghezza minima o l’uso di caratteri speciali, attraverso gli attributi ",i.jsx(e.code,{children:'strength-meter="true"'})," e ",i.jsx(e.code,{children:"minlength"})," per modificare la lunghezza minima richiesta per la password."]}),`
`,i.jsxs(e.p,{children:["Inoltre, puoi restituire all’utente una lista dei suggerimenti, con indicati quelli che sono stati soddisfatti, attraverso l’attributo ",i.jsx(e.code,{children:'suggestions="true"'}),"."]}),`
`,i.jsx(n,{of:b}),`
`,i.jsx(e.h2,{id:"area-di-testo",children:"Area di testo"}),`
`,i.jsxs(e.p,{children:["Per permettere agli utenti di inserire un testo esteso (ad esempio per lasciare commenti o informazioni), è bene utilizzare un elemento ",i.jsx(e.code,{children:"<it-input>"})," con ",i.jsx(e.code,{children:'type="textarea"'}),"."]}),`
`,i.jsx(n,{of:P}),`
`,i.jsx(e.h2,{id:"validazione-e-gestione-degli-errori",children:"Validazione e gestione degli errori"}),`
`,i.jsxs(e.p,{children:["Se non hai impostato la validazione custom tramite l'attributo ",i.jsx(e.code,{children:"custom-validation"}),", e hai impostato uno di questi attributi"]}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsx(e.li,{children:i.jsx(e.code,{children:"required"})}),`
`,i.jsx(e.li,{children:i.jsx(e.code,{children:"pattern"})}),`
`,i.jsx(e.li,{children:i.jsx(e.code,{children:"min"})}),`
`,i.jsx(e.li,{children:i.jsx(e.code,{children:"max"})}),`
`,i.jsx(e.li,{children:i.jsx(e.code,{children:"step"})}),`
`,i.jsx(e.li,{children:i.jsx(e.code,{children:"minlength"})}),`
`,i.jsx(e.li,{children:i.jsx(e.code,{children:"maxlength"})}),`
`]}),`
`,i.jsx(e.p,{children:"viene effettuata una validazione interna utilizzando la validazione nativa del browser."}),`
`,i.jsx(n,{of:y}),`
`,i.jsx(e.h3,{id:"personalizzazione-dei-messaggi-di-errore",children:"Personalizzazione dei messaggi di errore"}),`
`,i.jsxs(e.p,{children:["Puoi personalizzare alcuni dei messaggi di errore di validazione, traducendo le seguenti stringhe tramite l'",i.jsx(e.a,{href:"/docs/i18n-internazionalizzazione--documentazione",children:"utility di internazionalizzazione"}),":"]}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:"validityRequired"}),": messaggio che viene mostrato quando il campo è ",i.jsx(e.code,{children:"required"})," e non è compilato"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:"validityPattern"}),": messaggio che viene mostrato quando il campo non rispetta il pattern indicato"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:"validityMinlength"}),": messaggio che viene mostrato quando la lunghezza del valore del campo è troppo corta rispetto al valore passatto nell'attributo ",i.jsx(e.code,{children:"min-length"})]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:"validityMaxlength"}),": messaggio che viene mostrato quando la lunghezza del valore del campo è troppo lunga rispetto al valore passatto nell'attributo ",i.jsx(e.code,{children:"max-length"})]}),`
`]}),`
`,i.jsx(e.p,{children:"Per gli altri errori di validazione non indicati, verranno mostrati i messaggi di errore nativi del browser."}),`
`,i.jsx(e.h3,{id:"validazione-esterna-validazione-custom",children:"Validazione esterna (validazione custom)"}),`
`,i.jsxs(e.p,{children:["Puoi anche validare il campo esternamente (via js ad esempio, o lato server), impostando l'attributo ",i.jsx(e.code,{children:'custom-validation="true"'}),`.
In questo modo la validazione di default del browser effettuata internamente al componente è disabilitata.`]}),`
`,i.jsx(e.h4,{id:"campo-invalido",children:"Campo invalido"}),`
`,i.jsxs(e.p,{children:["Nel caso il campo non sia valido, devi invalidare il campo impostando il messaggio di errore da visualizzare attraverso l'attributo ",i.jsx(e.code,{children:'validity-message="Messaggio di errore"'}),"."]}),`
`,i.jsx(e.h4,{id:"campo-valido",children:"Campo valido"}),`
`,i.jsxs(e.p,{children:["Per riportare il campo ad uno stato 'valido', è sufficiente impostare il messaggio di errore a vuoto: ",i.jsx(e.code,{children:'validity-message=""'}),"."]}),`
`,i.jsx(n,{of:w}),`
`,i.jsx(e.h2,{id:"gestione-degli-eventi",children:"Gestione degli eventi"}),`
`,i.jsx(a,{of:l}),`
`,i.jsx(n,{of:l}),`
`,i.jsx(e.h2,{id:"",children:d.name}),`
`,i.jsx(a,{of:d}),`
`,i.jsx(e.h2,{id:"-1",children:c.name}),`
`,i.jsx(a,{of:c})]})}function E(o={}){const{wrapper:e}={...u(),...o.components};return e?i.jsx(e,{...o,children:i.jsx(p,{...o})}):p(o)}export{E as default};

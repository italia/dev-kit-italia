import{j as e,M as o,C as t}from"./blocks-DSPejIpl.js";import{useMDXComponents as s}from"./index-B-Z8tbgt.js";import{F as r,E as l}from"./forward.stories-631cUVNL.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-DHDslVeB.js";function a(n){const i={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:r}),`
`,e.jsx(i.h1,{id:"forward",children:"Forward"}),`
`,e.jsx("description",{children:"Pulsante per scorrere rapidamente a un contenuto specifico su una pagina lunga."}),`
`,e.jsx(i.h2,{id:"cosa-fa",children:"Cosa fa"}),`
`,e.jsx(i.p,{children:"Il componente Forward crea link ancore che permettono di scorrere automaticamente la pagina fino a un contenuto specifico con un'animazione fluida. È particolarmente utile su pagine molto lunghe."}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"https://designers.italia.it/design-system/componenti/forward/",rel:"nofollow",children:"Approfondisci quando e come usare il componente Forward"})}),`
`,e.jsx(i.h2,{id:"anteprima-e-attributi-del-componente",children:"Anteprima e attributi del componente"}),`
`,e.jsxs(i.p,{children:["Questo componente non possiede attributi, ma si basa su una struttura HTML predefinita e riutilizzabile. Per vedere l'anteprima del codice, clicca su ",e.jsx(i.strong,{children:"Show code"}),"."]}),`
`,e.jsx(t,{of:l}),`
`,e.jsx(i.h2,{id:"indicazioni-generali",children:"Indicazioni generali"}),`
`,e.jsxs(i.p,{children:["Per attivare lo scorrimento automatico della pagina all'àncora indicata nell'attributo ",e.jsx(i.code,{children:"href"}),", aggiungi al tag link la classe ",e.jsx(i.code,{children:".forward"})," e un semplice script JavaScript che gestisca l'evento di clic. Un esempio è fornito insieme all’esempio interattivo."]}),`
`,e.jsx(i.p,{children:"Fai attenzione a:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"non usare più forward sulla stessa pagina;"}),`
`,e.jsx(i.li,{children:"mantenerne coerente la funzione se il componente è presente su più pagine dello stesso sito o servizio;"}),`
`,e.jsx(i.li,{children:"testarne il funzionamento, verificando che al completamento dell’azione nessun contenuto venga nascosto da elementi sticky o barre di navigazione."}),`
`]}),`
`,e.jsx("div",{class:"callout callout-primary",children:e.jsxs("div",{class:"callout-inner",children:[e.jsx("div",{class:"callout-title",children:e.jsx("span",{class:"text",children:"Stili"})}),e.jsxs("p",{children:[e.jsxs(i.p,{children:[`Se non stai utilizzando il bundle unico, assicurarti di avere importato tutti i fogli di stile necessari
da `,e.jsx(i.code,{children:"bootstrap-italia"}),":"]}),e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-css",children:`@import 'bootstrap-italia/src/scss/base/functions';
@import 'bootstrap-italia/src/scss/base/variables';
@import 'bootstrap-italia/src/scss/base/mixins';
@import 'bootstrap-italia/src/scss/components/forward';
`})})]})]})}),`
`,e.jsx(i.h2,{id:"accessibilità",children:"Accessibilità"}),`
`,e.jsx(i.p,{children:"Per garantire l'accessibilità del componente Forward:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"considera le preferenze di riduzione del movimento degli utenti. Lo script incluso negli esempi interattivi gestisce automaticamente questa impostazione, disabilitando l’animazione di scorrimento fluido se l’utente ha richiesto di ridurre il movimento;"}),`
`,e.jsx(i.li,{children:"assicurati che il link sia chiaramente identificabile come tale e che il testo, o il testo di supporto, descriva in modo accurato la destinazione dello scorrimento."}),`
`]})]})}function h(n={}){const{wrapper:i}={...s(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(a,{...n})}):a(n)}export{h as default};

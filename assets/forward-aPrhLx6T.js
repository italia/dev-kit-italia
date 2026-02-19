import{j as e,M as a,C as t}from"./blocks-BP8HPP5W.js";import{useMDXComponents as o}from"./index-CT4ALEgr.js";import{F as r,E as c}from"./forward.stories-Zz1ujtvz.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-BzMxVCvJ.js";function s(n){const i={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:r}),`
`,e.jsx(i.h1,{id:"forward",children:"Forward"}),`
`,e.jsx("description",{children:"Pulsante per scorrere rapidamente a un contenuto specifico su una pagina lunga"}),`
`,e.jsx(i.h2,{id:"cosa-fa",children:"Cosa fa"}),`
`,e.jsx(i.p,{children:`Il componente Forward permette di creare link che, quando cliccati, scorrono automaticamente la pagina fino a un'àncora specifica con un'animazione fluida.
Puoi utilizzare il componente Forward su pagine lunghe, per permettere agli utenti di scorrere direttamente a un contenuto specifico.`}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"https://designers.italia.it/design-system/componenti/forward/",rel:"nofollow",children:"Approfondisci quando e come usare il componente Forward"})}),`
`,e.jsx(i.h2,{id:"anteprima-e-attributi-del-componente",children:"Anteprima e attributi del componente"}),`
`,e.jsxs(i.p,{children:["Questo componente non possiede attributi, ma si basa su una struttura HTML predefinita e riutilizzabile. Per vedere l'anteprima del codice, clicca su ",e.jsx(i.strong,{children:"Show code"}),"."]}),`
`,e.jsx(t,{of:c}),`
`,e.jsx(i.h2,{id:"indicazioni-generali",children:"Indicazioni generali"}),`
`,e.jsxs(i.p,{children:["Per attivare lo scorrimento automatico del documento all'àncora indicata nell'attributo ",e.jsx(i.code,{children:"href"}),", è sufficiente aggiungere al tag link la classe ",e.jsx(i.code,{children:".forward"})," e un semplice script JavaScript che gestisce l'evento di click: viene fornito un esempio associato all'esempio interattivo."]}),`
`,e.jsx(i.p,{children:"Fai attenzione a:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Non usare più componenti Forward sulla stessa pagina."}),`
`,e.jsx(i.li,{children:"Rendere coerente la funzione nel contesto dello stesso sito o servizio se presente su più pagine."}),`
`,e.jsx(i.li,{children:"Testare il funzionamento e il risultato dell'azione, in particolare ponendo attenzione che al compiersi dell'azione alcuni contenuti non siano nascosti da elementi sticky o barre di navigazione."}),`
`]}),`
`,e.jsx("div",{class:"callout callout-primary",children:e.jsxs("div",{class:"callout-inner",children:[e.jsx("div",{class:"callout-title",children:e.jsx("span",{class:"text",children:"Stili"})}),e.jsxs("p",{children:[e.jsxs(i.p,{children:[`In caso non si stia utilizzando il bundle unico, assicurarsi di avere importato tutti i fogli di stile necessari
da `,e.jsx(i.code,{children:"bootstrap-italia"}),":"]}),e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-css",children:`@import 'bootstrap-italia/src/scss/base/functions';
@import 'bootstrap-italia/src/scss/base/variables';
@import 'bootstrap-italia/src/scss/base/mixins';
@import 'bootstrap-italia/src/scss/components/forward';
`})})]})]})}),`
`,e.jsx(i.h2,{id:"accessibilità",children:"Accessibilità"}),`
`,e.jsx(i.p,{children:"Per garantire l'accessibilità del componente Forward, segui queste linee guida:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[`
`,e.jsx(i.p,{children:`Assicurati di considerare le preferenze di riduzione del movimento degli utenti.
Lo script di esempio incluso nell'esempio interattivo tiene conto di queste preferenze, disabilitando l'animazione di scorrimento fluido se l'utente ha indicato una preferenza per ridurre il movimento.`}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsx(i.p,{children:"Assicurati  che il link sia chiaramente identificabile come tale e che il testo/testo di supporto del link descriva in modo accurato la destinazione dello scorrimento."}),`
`]}),`
`]})]})}function h(n={}){const{wrapper:i}={...o(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(s,{...n})}):s(n)}export{h as default};

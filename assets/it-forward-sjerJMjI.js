import{j as e,M as t,C as a}from"./blocks-AWYFoa02.js";import{useMDXComponents as s}from"./index-DFJevQmi.js";import{F as r,E as l,N as c}from"./it-forward.stories-CJRzDYu0.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-BAOCzTeu.js";import"./dispatch-cancelable-Dbrx1KBI.js";function o(n){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:r}),`
`,e.jsx(i.h1,{id:"forward",children:"Forward"}),`
`,e.jsx("description",{children:"Pulsante per scorrere rapidamente a un contenuto specifico su una pagina lunga."}),`
`,e.jsx(i.h2,{id:"cosa-fa",children:"Cosa fa"}),`
`,e.jsx(i.p,{children:"Il componente Forward crea link ancore che permettono di scorrere automaticamente la pagina fino a un contenuto specifico con un'animazione fluida. È particolarmente utile su pagine molto lunghe."}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"https://designers.italia.it/design-system/componenti/forward/",rel:"nofollow",children:"Approfondisci quando e come usare il componente Forward"})}),`
`,e.jsx(i.h2,{id:"anteprima-e-attributi-del-componente",children:"Anteprima e attributi del componente"}),`
`,e.jsxs(i.p,{children:["Questo componente non possiede attributi, ma si basa su una struttura HTML predefinita e riutilizzabile. Per vedere l'anteprima del codice, clicca su ",e.jsx(i.strong,{children:"Show code"}),"."]}),`
`,e.jsx(a,{of:l}),`
`,e.jsx(i.h2,{id:"indicazioni-generali",children:"Indicazioni generali"}),`
`,e.jsxs(i.p,{children:["Per attivare lo scorrimento automatico della pagina all’àncora indicata nell’attributo ",e.jsx(i.code,{children:"href"}),", avvolgi nel componente ",e.jsx(i.code,{children:"<it-forward>"})," un link con la classe ",e.jsx(i.code,{children:".forward"}),". ",e.jsx(i.strong,{children:"Non è più necessario scrivere codice JavaScript"}),": lo scorrimento fluido e lo spostamento del focus sulla destinazione sono gestiti di default dal componente."]}),`
`,e.jsx(i.p,{children:"Fai attenzione a:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"non usare più forward sulla stessa pagina;"}),`
`,e.jsx(i.li,{children:"mantenerne coerente la funzione se il componente è presente su più pagine dello stesso sito o servizio;"}),`
`,e.jsx(i.li,{children:"testarne il funzionamento, verificando che al completamento dell’azione nessun contenuto venga nascosto da elementi sticky o barre di navigazione."}),`
`]}),`
`,e.jsx("div",{class:"callout callout-primary",children:e.jsxs("div",{class:"callout-inner",children:[e.jsx("div",{class:"callout-title",children:e.jsx("span",{class:"text",children:"Stili"})}),e.jsxs("p",{children:[e.jsxs(i.p,{children:[`Se non stai utilizzando il bundle unico, assicurarti di avere importato tutti i fogli di stile necessari
da `,e.jsx(i.code,{children:"bootstrap-italia"}),":"]}),e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-scss",children:`@use ‘bootstrap-italia/src/scss/base/functions’ as *;
@use ‘bootstrap-italia/src/scss/base/config’ as *;
@use ‘bootstrap-italia/src/scss/base/variables’ as *;
@use ‘bootstrap-italia/src/scss/base/mixins’ as *;
@use ‘bootstrap-italia/src/scss/components/forward’ as *;
`})})]})]})}),`
`,e.jsx(i.h2,{id:"accessibilità",children:"Accessibilità"}),`
`,e.jsx(i.p,{children:"Per garantire l’accessibilità del componente Forward:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"considera le preferenze di riduzione del movimento degli utenti. Il componente gestisce automaticamente questa impostazione, disabilitando l’animazione di scorrimento fluido se l’utente ha richiesto di ridurre il movimento;"}),`
`,e.jsx(i.li,{children:"assicurati che il link sia chiaramente identificabile come tale e che il testo, o il testo di supporto, descriva in modo accurato la destinazione dello scorrimento."}),`
`]}),`
`,e.jsx(i.h2,{id:"eventi-e-personalizzazione",children:"Eventi e personalizzazione"}),`
`,e.jsxs(i.p,{children:["Il componente emette l’evento ",e.jsx(i.code,{children:"it-forward-navigate"}),", ",e.jsx(i.strong,{children:"cancelable"}),". Chiamando ",e.jsx(i.code,{children:"event.preventDefault()"})," puoi intercettare lo scorrimento e gestire la navigazione in autonomia (ad esempio integrandola con il routing di un framework). Nel ",e.jsx(i.code,{children:"detail"})," dell’evento trovi l’",e.jsx(i.code,{children:"href"})," e l’elemento ",e.jsx(i.code,{children:"target"})," di destinazione:"]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-js",children:`const forward = document.querySelector(‘it-forward’);
forward.addEventListener(‘it-forward-navigate’, (e) => {
  e.preventDefault(); // impedisce lo scorrimento di default
  // ...logica personalizzata, ad esempio:
  if (e.detail.target) forward.navigateTo(e.detail.target);
});
`})}),`
`,e.jsx(a,{of:c}),`
`,e.jsx(i.h2,{id:"proprietà-metodi-ed-eventi-accessibili-via-js",children:"Proprietà, Metodi, ed Eventi accessibili via JS"}),`
`,e.jsx(i.p,{children:"Il componente espone i seguenti metodi e eventi accessibili via JavaScript."}),`
`,e.jsx(i.h3,{id:"metodi",children:"Metodi"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"navigateTo(target: HTMLElement)"})," — scorre la pagina fino all’elemento ",e.jsx(i.code,{children:"target"})," con animazione fluida (o istantaneamente se l’utente ha preferenze di riduzione del movimento)."]}),`
`]}),`
`,e.jsx(i.h3,{id:"eventi",children:"Eventi"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"it-forward-navigate"})," — emesso prima dello scorrimento. L’evento è cancellabile: chiamando ",e.jsx(i.code,{children:"event.preventDefault()"})," si impedisce lo scorrimento di default. Il ",e.jsx(i.code,{children:"detail"})," contiene ",e.jsx(i.code,{children:"href"})," (string) e ",e.jsx(i.code,{children:"target"})," (HTMLElement | null) con le coordinate della destinazione."]}),`
`]})]})}function j(n={}){const{wrapper:i}={...s(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(o,{...n})}):o(n)}export{j as default};

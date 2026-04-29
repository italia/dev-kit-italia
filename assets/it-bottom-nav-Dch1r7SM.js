import{j as e,M as t,C as a,a as r}from"./blocks-B2DXvGE7.js";import{useMDXComponents as s}from"./index-D9ZdyO8Y.js";import{B as c,E as l,C as d,a as p}from"./it-bottom-nav.stories-DMgLkTMA.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-DvG09N_F.js";function o(n){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:c}),`
`,e.jsx(i.h1,{id:"bottomnav",children:"Bottomnav"}),`
`,e.jsx("description",{children:"Barra di navigazione fissa a fondo pagina per dispositivi mobile"}),`
`,e.jsx(i.h2,{id:"cosa-fa",children:"Cosa fa"}),`
`,e.jsx(i.p,{children:"Usa il componente Bottomnav per fornire una barra di navigazione ancorata al fondo della pagina su dispositivi mobile, come avviene sulla maggior parte delle app mobile."}),`
`,e.jsx(i.h3,{id:"alternative-a-questo-componente",children:"Alternative a questo componente"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Header (in lavorazione): quando vuoi fornire una navigazione di primo livello ancorata in cima al viewport di un sito o una app."}),`
`]}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"https://designers.italia.it/design-system/componenti/bottomnav/",rel:"nofollow",children:"Approfondisci quando e come usare il componente Bottomnav"})}),`
`,e.jsx(i.h2,{id:"anteprima-e-attributi-del-componente",children:"Anteprima e attributi del componente"}),`
`,e.jsxs(i.p,{children:["Modifica gli attributi nella tabella per personalizzare in tempo reale l'aspetto e il comportamento del componente. Per vedere come cambia il codice, clicca su ",e.jsx("strong",{children:"Show code"}),"."]}),`
`,e.jsx(a,{of:l}),`
`,e.jsx(r,{of:l}),`
`,e.jsx(i.h2,{id:"indicazioni-generali",children:"Indicazioni generali"}),`
`,e.jsxs(i.p,{children:["Il componente ",e.jsx(i.code,{children:"it-bottom-nav"})," è il contenitore principale e include uno o più elementi ",e.jsx(i.code,{children:"it-bottom-nav-item"}),"."]}),`
`,e.jsxs(i.p,{children:["Il componente ",e.jsx(i.code,{children:"it-bottom-nav-item"})," è una singola voce di navigazione e va sempre usato come figlio di ",e.jsx(i.code,{children:"it-bottom-nav"}),"."]}),`
`,e.jsxs(i.p,{children:["Ogni ",e.jsx(i.code,{children:"it-bottom-nav-item"})," espone uno ",e.jsx(i.strong,{children:"slot default"})," in cui inserire il link di navigazione:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Inserisci un normale link ",e.jsx(i.code,{children:'<a href="...">'})," con al suo interno un'icona e uno ",e.jsx(i.code,{children:'<span class="bottom-nav-label">'})," per il testo"]}),`
`,e.jsxs(i.li,{children:["La voce attiva si indica aggiungendo l'attributo ",e.jsx(i.code,{children:"active"})," sull'elemento ",e.jsx(i.code,{children:"it-bottom-nav-item"})]}),`
`,e.jsxs(i.li,{children:["Il componente imposta automaticamente ",e.jsx(i.code,{children:'aria-current="page"'})," sul link della voce attiva"]}),`
`]}),`
`,e.jsxs(i.p,{children:["Se utilizzi un framework JavaScript come React, Angular, Svelte o Vue.js, segui le best practice del framework per la gestione della navigazione e dello stato attivo, assicurandoti di applicare l'attributo ",e.jsx(i.code,{children:"active"})," all'elemento ",e.jsx(i.code,{children:"it-bottom-nav-item"})," corrispondente alla pagina corrente."]}),`
`,e.jsx("div",{class:"callout callout-primary",children:e.jsxs("div",{class:"callout-inner",children:[e.jsx("div",{class:"callout-title",children:e.jsx("span",{class:"text",children:"Stili"})}),e.jsxs("p",{children:[e.jsxs(i.p,{children:["Alcune classi provenienti da Boostrap Italia sono usate all'interno del link (",e.jsx(i.code,{children:"bottom-nav-label"}),", ",e.jsx(i.code,{children:"bottom-nav-badge"}),", ",e.jsx(i.code,{children:"bottom-nav-alert"}),", ",e.jsx(i.code,{children:".icon"}),"). Queste classi si trovano nel light DOM e non possono essere raggiunte dal shadow DOM del componente. Se non stai utilizzando il bundle completo, includi il foglio di stile globale nel tuo progetto per applicare questi stili:"]}),e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-scss",children:`@import '@italia/bottom-nav/styles/globals';
`})})]})]})}),`
`,e.jsx(i.h2,{id:"accessibilità",children:"Accessibilità"}),`
`,e.jsx(i.p,{children:"Il componente è progettato per essere accessibile e supporta la navigazione da tastiera e l'uso di screen reader:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Il componente fornisce automaticamente ",e.jsx(i.code,{children:'aria-current="page"'})," sul link della voce attiva"]}),`
`,e.jsxs(i.li,{children:["L'attributo ",e.jsx(i.code,{children:"aria-label"})," sul ",e.jsx(i.code,{children:"<nav>"})," è configurabile tramite ",e.jsx(i.code,{children:"it-aria-label"}),' (default: "Navigazione principale")']}),`
`]}),`
`,e.jsx("div",{class:"callout callout-warning",children:e.jsxs("div",{class:"callout-inner",children:[e.jsx("div",{class:"callout-title",children:e.jsx("span",{class:"text",children:"Accessibilità e semantica"})}),e.jsx("p",{children:e.jsxs(i.p,{children:["Inserisci il testo descrittivo del link all'interno del tag ",e.jsx(i.code,{children:"<a>"})," per garantire una corretta semantica e accessibilità."]})}),e.jsx("p",{children:e.jsxs(i.p,{children:["Valorizza sempre l'attributo ",e.jsx(i.code,{children:"href"})," per rendere il link effettivamente navigabile e semanticamente corretto."]})})]})}),`
`,e.jsx(i.h2,{id:"badge-e-alert",children:"Badge e Alert"}),`
`,e.jsxs(i.p,{children:["Aggiungi uno ",e.jsx(i.code,{children:'<span class="bottom-nav-badge">'})," o uno ",e.jsx(i.code,{children:'<span class="bottom-nav-alert">'})," all'interno di un ",e.jsx(i.code,{children:'<div class="badge-wrapper">'})," posizionato prima dell'icona per indicare notifiche o nuovi contenuti."]}),`
`,e.jsx("div",{class:"callout callout-warning",children:e.jsxs("div",{class:"callout-inner",children:[e.jsx("div",{class:"callout-title",children:e.jsx("span",{class:"text",children:"Accessibilità"})}),e.jsx("p",{children:e.jsxs(i.p,{children:["Badge e alert sono nascosti agli screen reader (",e.jsx("code",{children:'aria-hidden="true"'}),`).
Per garantire l'accessibilità aggiungi uno `,e.jsx("code",{children:'<span class="visually-hidden">'}),`
all'interno della label con un testo descrittivo, ad esempio "1 messaggio da leggere".`]})})]})}),`
`,e.jsx(a,{of:d}),`
`,e.jsx(a,{of:p}),`
`,e.jsx(i.h2,{id:"personalizzazione-degli-stili",children:"Personalizzazione degli stili"}),`
`,e.jsxs(i.p,{children:["Per personalizzare gli stili, puoi utilizzare i selettori ",e.jsx(i.code,{children:"::part"})," dedicati:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"::part(bottom-nav)"}),", per il container ",e.jsx(i.code,{children:"<nav>"})]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"::part(bottom-nav-item)"}),", per ogni singolo item ",e.jsx(i.code,{children:"<li>"})]}),`
`]}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"/docs/personalizzazione-degli-stili--documentazione#selettore-part",children:"Vai alla guida sul selettore part"})})]})}function g(n={}){const{wrapper:i}={...s(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(o,{...n})}):o(n)}export{g as default};

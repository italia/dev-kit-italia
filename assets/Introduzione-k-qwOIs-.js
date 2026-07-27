import{j as i,M as a}from"./blocks-BOPJQLxO.js";import{useMDXComponents as s}from"./index-B0YyzAz0.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-C2GQMFKp.js";function t(n){const e={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...n.components};return i.jsxs(i.Fragment,{children:[i.jsx(a,{title:"Introduzione"}),`
`,i.jsxs("div",{className:"mb-4",children:[i.jsx("h1",{className:"visually-hidden",children:"Dev Kit Italia"}),i.jsx("div",{children:i.jsx("img",{src:"./logo.png",width:"500px",alt:".italia dev kit"})}),i.jsxs("p",{className:"lead mb-5",children:["Dev Kit Italia è un set di Web components che implementa il Design system .italia e i componenti presenti su ",i.jsx(e.a,{href:"https://github.com/italia/design-ui-kit",rel:"nofollow",children:`UI Kit
Italia`}),"."]}),i.jsx("p",{className:"lead mb-5",children:i.jsxs("b",{children:["⚠️ Attenzione: questo repository e i relativi pacchetti sono in lavorazione.",i.jsx("br",{}),`Attualmente sono pubblicati per permetterne lo sviluppo, non sono consigliati per l'utilizzo in ambienti di
produzione.`]})})]}),`
`,i.jsx(e.h2,{id:"il-progetto",children:"Il progetto"}),`
`,i.jsxs(e.p,{children:["Dev Kit Italia è un progetto open source che raccoglie strumenti, componenti e risorse per sviluppare interfacce coerenti con il Design System ",i.jsx(e.strong,{children:".italia"}),"."]}),`
`,i.jsx(e.h3,{id:"obiettivo",children:"Obiettivo"}),`
`,i.jsx(e.p,{children:"Il suo obiettivo è semplificare la creazione di siti e applicazioni della Pubblica Amministrazione, offrendo componenti pronti all’uso, con documentazione chiara e linee guida condivise."}),`
`,i.jsxs(e.p,{children:["Il progetto nasce per evolvere le attuali librerie di sviluppo (come Bootstrap Italia, React Kit e Angular Kit) verso un sistema basato su ",i.jsx(e.strong,{children:"web component"}),` nativi HTML, più flessibile, duraturo e indipendente dai framework.
Questo approccio permette di:`]}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsxs(e.li,{children:["usare gli stessi componenti in ",i.jsx(e.strong,{children:"qualsiasi ambiente"})," di sviluppo;"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:"ridurre"})," la manutenzione del codice e il ",i.jsx(e.strong,{children:"debito tecnico"}),";"]}),`
`,i.jsxs(e.li,{children:["garantire ",i.jsx(e.strong,{children:"accessibilità"})," (WCAG 2.2) e uniformità visiva;"]}),`
`,i.jsxs(e.li,{children:["facilitare la ",i.jsx(e.strong,{children:"personalizzazione"})," tramite design token integrati."]}),`
`]}),`
`,i.jsx(e.p,{children:"In sintesi, Dev Kit Italia punta a rendere più facile e sostenibile lo sviluppo di siti e servizi pubblici digitali, offrendo strumenti moderni e aperti a chiunque voglia contribuire o creare esperienze utente di qualità."}),`
`,i.jsx(e.h2,{id:"come-iniziare",children:"Come iniziare"}),`
`,i.jsxs(e.p,{children:["Per iniziare, è sufficiente installare il pacchetto ",i.jsx(e.code,{children:"npm"})," attraverso il seguente comando:"]}),`
`,i.jsx(e.pre,{children:i.jsx(e.code,{className:"language-bash",children:`npm install @italia/dev-kit-italia
`})}),`
`,i.jsx(e.p,{children:"e importare le risorse necessarie nel vostro progetto così:"}),`
`,i.jsx(e.pre,{children:i.jsx(e.code,{className:"language-javascript",children:`import '@italia/dev-kit-italia/fonts.css';
import '@italia/dev-kit-italia/styles.css';
import '@italia/dev-kit-italia/elements.js';

// Pronti a utilizzare i Web Components!
return (
  <div>
    <it-button ...></it-button>
  </div>
)
`})}),`
`,i.jsx(e.p,{children:`Come alternativa, è possibile installare i singoli pacchetti dei Web Components.
Sarà comunque necessario importare il file CSS generale come mostrato sopra.`}),`
`,i.jsx(e.pre,{children:i.jsx(e.code,{className:"language-bash",children:`npm install @italia/button @italia/dev-kit-italia
`})}),`
`,i.jsx(e.pre,{children:i.jsx(e.code,{className:"language-javascript",children:`import '@italia/dev-kit-italia/fonts.css';
import '@italia/dev-kit-italia/styles.css';
import '@italia/button/it-button.js';

return (
  <div>
    <it-button ...></it-button>
  </div>
)
`})}),`
`,i.jsx(e.h2,{id:"licenza",children:"Licenza"}),`
`,i.jsxs(e.p,{children:["Il progetto è distribuito con licenza BSD-3 (consultabile nel file ",i.jsx(e.a,{href:"https://github.com/italia/dev-kit-italia/blob/main/LICENSE",rel:"nofollow",children:"LICENSE"}),`),
un modello ancora più permissivo della classica licenza GPL, in quanto consente di modificare e ridistribuire
questo software secondo varie modalità, anche di tipo closed-source.`]})]})}function d(n={}){const{wrapper:e}={...s(),...n.components};return e?i.jsx(e,{...n,children:i.jsx(t,{...n})}):t(n)}export{d as default};

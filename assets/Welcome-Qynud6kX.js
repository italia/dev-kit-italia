import{j as e,M as t}from"./index-a6WM3-ks.js";import{useMDXComponents as l}from"./index-C1EbfRbw.js";import"./iframe-BJMmF07V.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";function a(n){const i={a:"a",code:"code",h2:"h2",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Welcome"}),`
`,e.jsxs("div",{class:"mb-4",children:[e.jsx("h1",{class:"visually-hidden",children:"Dev Kit Italia"}),e.jsx("div",{children:e.jsx("img",{src:"./logo.png",width:"500px",alt:".italia dev kit"})}),e.jsx("p",{class:"lead mb-5",children:e.jsxs(i.p,{children:["Dev Kit Italia è un set di Web components che implementa il Design system .italia e i componenti presenti su ",e.jsx(i.a,{href:"https://github.com/italia/design-ui-kit",rel:"nofollow",children:`UI Kit
Italia`}),"."]})})]}),`
`,e.jsx(i.h2,{id:"come-iniziare",children:"Come iniziare"}),`
`,e.jsxs(i.p,{children:["Per iniziare, è sufficiente installare il pacchetto ",e.jsx(i.code,{children:"npm"})," attraverso il seguente comando:"]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-bash",children:`npm install @italia/dev-kit-italia --save
`})}),`
`,e.jsxs(i.p,{children:["e seguire le istruzioni presenti ",e.jsx(i.a,{href:"https://github.com/italia/dev-kit-italia?tab=readme-ov-file#come-usare-la-libreria",rel:"nofollow",children:`sulla pagina GitHub del
progetto`}),"."]}),`
`,e.jsxs(i.p,{children:["Il progetto è distribuito con licenza BSD-3 (consultabile nel file ",e.jsx(i.a,{href:"https://github.com/italia/dev-kit-italia/blob/main/LICENSE",rel:"nofollow",children:"LICENSE"}),`),
un modello ancora più permissivo della classica licenza GPL, in quanto consente di modificare e ridistribuire
questo software secondo varie modalità, anche di tipo closed-source.`]}),`
`,e.jsx(i.h2,{id:"come-contribuire",children:"Come contribuire"}),`
`,e.jsxs(i.p,{children:["Per installare la libreria e avviare Storybook in locale, è necessario avere installato ",e.jsx(i.a,{href:"https://nodejs.org/",rel:"nofollow",children:"Node.js"})," e ",e.jsx(i.a,{href:"https://pnpm.io/",rel:"nofollow",children:"pnpm"}),"."]}),`
`,e.jsx(i.p,{children:"Per installare le dipendenze:"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-bash",children:`pnpm install
`})}),`
`,e.jsx(i.p,{children:"Per compilare tutti i componenti:"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-bash",children:`pnpm build
`})}),`
`,e.jsx(i.p,{children:"Per avviare Storybook in locale:"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-bash",children:`pnpm storybook
`})}),`
`,e.jsx(i.p,{children:e.jsx(i.strong,{children:"Durante lo sviluppo:"})}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Documentazione/Storie e tipi: si aggiornano automaticamente ✨"}),`
`,e.jsx(i.li,{children:"Componenti: puoi ricompilare il solo package modificato"}),`
`]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-bash",children:`# Per esempio, se stai modificando il componente button:
pnpm build --filter=@italia/button
# Poi ricarica la pagina del browser
`})}),`
`,e.jsx(i.h2,{id:"testare-lintegrazione-in-altri-framework-js",children:"Testare l'integrazione in altri framework JS"}),`
`,e.jsx(i.p,{children:"Si consiglia di partire creando un progetto di esempio utilizzando il framework desiderato e importando i Web Components da Dev Kit Italia."}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-bash",children:`# Esegui questo comando
npm create vite@latest test-app
# Poi segui il prompt!
`})}),`
`,e.jsx(i.p,{children:"Dopo aver creato il progetto, è possibile installare Dev Kit Italia come dipendenza:"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-bash",children:`npm install @italia/dev-kit-italia
`})}),`
`,e.jsx(i.p,{children:"A questo punto bisogna importare i Web Components nel progetto."}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-javascript",children:`import '@italia/dev-kit-italia/fonts.css';
import '@italia/dev-kit-italia/styles.css';
import '@italia/dev-kit-italia/elements.js';

// Pronti a utilizzare i Web Components!
return (
  <div>
    <it-button ...></it-button>
  </div>
)
`})}),`
`,e.jsx(i.p,{children:"Come alternativa, è possibile installare i singoli pacchetti dei Web Components. Sarà comunque necessario importare il file CSS generale come mostrato sopra."}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-bash",children:`npm install @italia/button
`})}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-javascript",children:`import '@italia/dev-kit-italia/styles.css';
import '@italia/button/it-button.js';

return (
  <div>
    <it-button ...></it-button>
  </div>
)
`})}),`
`,e.jsx(i.h2,{id:"applicazioni-predefinite-per-il-testing",children:"Applicazioni predefinite per il testing"}),`
`,e.jsxs(i.p,{children:["All'interno di questo progetto, sotto alla cartella ",e.jsx(i.code,{children:"/apps"})," sono gia disponibili alcune applicazioni create con i framework ",e.jsx(i.strong,{children:"Angular"}),", ",e.jsx(i.strong,{children:"React"}),", ",e.jsx(i.strong,{children:"Svelte"})," e ",e.jsx(i.strong,{children:"Vue"})," che consentono di testare l'attuale versione della libreria (o del branch corrente)."]}),`
`,e.jsx(i.h4,{id:"come-testare",children:"Come testare:"}),`
`,e.jsxs(i.ol,{children:[`
`,e.jsx(i.li,{children:"compilare sempre la versione corrente della libreria posizionandosi nella root con"}),`
`]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-bash",children:`pnpm build
`})}),`
`,e.jsxs(i.ol,{start:"2",children:[`
`,e.jsx(i.li,{children:"posizionarsi nella cartella del framework che si vuole testare. Ad esempio se vogliamo testare il framework React (oppure Vue, o Svelte):"}),`
`]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-bash",children:`cd apps/react-app
npm install # Per copiare nella node_modules la versione compilata di dev-kit-italia
npm run dev
`})}),`
`,e.jsx(i.p,{children:"Se invece si vuole testare l'app Angular, è necessario avere installato in locale la CLI di Angular e fare:"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-bash",children:`cd apps/angular-app
npm install # Per copiare nella node_modules la versione compilata di dev-kit-italia
ng serve
`})})]})}function h(n={}){const{wrapper:i}={...l(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(a,{...n})}):a(n)}export{h as default};

import{j as e,M as r}from"./blocks-CT7VCudE.js";import{useMDXComponents as l}from"./index-JxopJXbk.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-DqPvw_k1.js";function a(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Come contribuire"}),`
`,e.jsx(n.h1,{id:"come-contribuire",children:"Come contribuire"}),`
`,e.jsxs(n.p,{children:["Per installare la libreria e avviare Storybook in locale, è necessario avere installato ",e.jsx(n.a,{href:"https://nodejs.org/",rel:"nofollow",children:"Node.js"})," e ",e.jsx(n.a,{href:"https://pnpm.io/",rel:"nofollow",children:"pnpm"}),"."]}),`
`,e.jsx(n.p,{children:"Per installare le dipendenze:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`pnpm install
`})}),`
`,e.jsx(n.p,{children:"Per compilare tutti i componenti:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`pnpm build
`})}),`
`,e.jsx(n.p,{children:"Per avviare Storybook in locale:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`pnpm storybook
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Durante lo sviluppo:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Documentazione/Storie e tipi: si aggiornano automaticamente ✨"}),`
`,e.jsx(n.li,{children:"Componenti: puoi ricompilare il solo package modificato"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`# Per esempio, se stai modificando il componente button:
pnpm build --filter=@italia/button
# Poi ricarica la pagina del browser
`})}),`
`,e.jsx(n.h2,{id:"testare-lintegrazione-in-altri-framework-js",children:"Testare l'integrazione in altri framework JS"}),`
`,e.jsx(n.p,{children:"Si consiglia di partire creando un progetto di esempio utilizzando il framework desiderato e importando i Web Components da Dev Kit Italia."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`# Esegui questo comando
npm create vite@latest test-app
# Poi segui il prompt!
`})}),`
`,e.jsx(n.p,{children:"Dopo aver creato il progetto, è possibile installare Dev Kit Italia come dipendenza:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install @italia/dev-kit-italia
`})}),`
`,e.jsx(n.p,{children:"A questo punto bisogna importare i Web Components nel progetto:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import '@italia/dev-kit-italia/fonts.css';
import '@italia/dev-kit-italia/styles.css';
import '@italia/dev-kit-italia/elements.js';

// Pronti a utilizzare i Web Components!
return (
  <div>
    <it-button ...></it-button>
  </div>
)
`})}),`
`,e.jsx(n.p,{children:"Come alternativa, è possibile installare i singoli pacchetti dei Web Components. Sarà comunque necessario importare il file CSS generale come mostrato sopra."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install @italia/button
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import '@italia/dev-kit-italia/styles.css';
import '@italia/button/it-button.js';

return (
  <div>
    <it-button ...></it-button>
  </div>
)
`})}),`
`,e.jsx(n.h2,{id:"applicazioni-predefinite-per-il-testing",children:"Applicazioni predefinite per il testing"}),`
`,e.jsxs(n.p,{children:["All'interno di questo progetto, sotto alla cartella ",e.jsx(n.code,{children:"/examples"})," sono gia disponibili alcune applicazioni create con i framework ",e.jsx(n.strong,{children:"Angular"}),", ",e.jsx(n.strong,{children:"React"}),", ",e.jsx(n.strong,{children:"Svelte"})," e ",e.jsx(n.strong,{children:"Vue"})," che consentono di testare l'attuale versione della libreria (o del branch corrente)."]}),`
`,e.jsx(n.h3,{id:"come-testare",children:"Come testare"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"compilare sempre la versione corrente della libreria posizionandosi nella root con"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`pnpm install # Per installare tutte le dipendeze dei vari packages
pnpm build
`})}),`
`,e.jsxs(n.ol,{start:"2",children:[`
`,e.jsx(n.li,{children:"posizionarsi nella cartella del framework che si vuole testare. Ad esempio se vogliamo testare il framework React (oppure Vue, o Svelte):"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`cd examples/react-app
npm install # Per copiare nella node_modules la versione compilata di dev-kit-italia
npm run dev
`})}),`
`,e.jsx(n.p,{children:"Se invece si vuole testare l'app Angular, è necessario fare:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`cd examples/angular-app
npm install # Per copiare nella node_modules la versione compilata di dev-kit-italia
npm start
`})})]})}function p(i={}){const{wrapper:n}={...l(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(a,{...i})}):a(i)}export{p as default};

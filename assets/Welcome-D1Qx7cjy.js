import{j as e,M as o}from"./index-B3_mrhad.js";import{useMDXComponents as l}from"./index-Cay6A1jk.js";import"./iframe-Cw1PCwZ-.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";function s(i){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Welcome"}),`
`,e.jsxs("div",{class:"mb-4",children:[e.jsx("h1",{class:"visually-hidden",children:"Design Web Components"}),e.jsx("div",{class:"text-center",children:e.jsx("img",{src:"./logo.png",width:"500px",alt:"Design Web Components"})}),e.jsx("div",{class:"text-center mb-4",children:e.jsxs(n.p,{children:["Design Web Components è un set di Web components che implementa il Design system .italia e i componenti presenti su"," ",`
`,e.jsx(n.a,{href:"https://github.com/italia/design-ui-kit",rel:"nofollow",children:"UI Kit Italia"}),"."]})})]}),`
`,e.jsxs(n.p,{children:["Per iniziare, è sufficiente installare il pacchetto ",e.jsx(n.code,{children:"npm"})," attraverso il seguente comando:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install @italia/design-web-components --save
`})}),`
`,e.jsxs(n.p,{children:["e seguire le istruzioni presenti ",e.jsx(n.a,{href:"https://github.com/italia/design-web-components?tab=readme-ov-file#come-usare-la-libreria",rel:"nofollow",children:`sulla pagina GitHub del
progetto`}),"."]}),`
`,e.jsxs(n.p,{children:["Il progetto è distribuito con licenza BSD-3 (consultabile nel file ",e.jsx(n.a,{href:"https://github.com/italia/design-web-components/blob/main/LICENSE",rel:"nofollow",children:"LICENSE"}),`),
un modello ancora più permissivo della classica licenza GPL, in quanto consente di modificare e ridistribuire
questo software secondo varie modalità, anche di tipo closed-source.`]}),`
`,e.jsx(n.h2,{id:"come-contribuire-",children:"Come contribuire 💙"}),`
`,e.jsxs(n.p,{children:["Per installare la libreria e avviare Storybook in locale, è necessario avere installato ",e.jsx(n.a,{href:"https://nodejs.org/",rel:"nofollow",children:"Node.js"})," e ",e.jsx(n.a,{href:"https://pnpm.io/",rel:"nofollow",children:"pnpm"}),"."]}),`
`,e.jsx(n.p,{children:"Per installare le dipendenze:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-sh",children:`pnpm install
`})}),`
`,e.jsx(n.p,{children:"Per compilare tutti i componenti:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-sh",children:`pnpm build
`})}),`
`,e.jsx(n.p,{children:"Per avviare Storybook in locale:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-sh",children:`pnpm storybook
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Durante lo sviluppo:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Documentazione/Storie e tipi: si aggiornano automaticamente ✨"}),`
`,e.jsx(n.li,{children:"Componenti: puoi ricompilare il solo package modificato"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-sh",children:`# Per esempio, se stai modificando il componente button:
pnpm build --filter=@italia/button
# Poi ricarica la pagina del browser
`})}),`
`,e.jsx(n.h3,{id:"testare-lintegrazione-dei-web-components-in-altri-framework-javascript",children:"Testare l'integrazione dei Web Components in altri framework JavaScript"}),`
`,e.jsx(n.p,{children:"Si consiglia di partire creando un progetto di esempio utilizzando il framework desiderato e importando i Web Components da Design Web Components."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`# Esegui questo comando
npm create vite@latest test-app
# Poi segui il prompt!
`})}),`
`,e.jsx(n.p,{children:"Dopo aver creato il progetto, è possibile installare Design Web Components come dipendenza:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install @italia/design-web-components
`})}),`
`,e.jsx(n.p,{children:"A questo punto bisogna importare i Web Components nel progetto."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import '@italia/design-web-components/fonts.css';
import '@italia/design-web-components/styles.css';
import '@italia/design-web-components/elements.js';

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
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import '@italia/design-web-components/styles.css';
import '@italia/button/it-button.js';

return (
  <div>
    <it-button ...></it-button>
  </div>
)
`})}),`
`,e.jsx(n.h3,{id:"applicazioni-predefinite-per-il-testing-angular-react-svelte-vue",children:"Applicazioni predefinite per il testing (Angular, React, Svelte, Vue)"}),`
`,e.jsxs(n.p,{children:["All'interno di questo progetto, sotto alla cartella ",e.jsx(n.code,{children:"/apps"})," sono gia disponibili alcune applicazioni create con i framework"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Angualar"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"React"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Svelte"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Vue"})}),`
`]}),`
`,e.jsx(n.p,{children:"che consentono di testare l'attuale versione della libreria (o del branch corrente) su questi framework."}),`
`,e.jsx(n.h4,{id:"come-testare",children:"Come testare:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"compilare sempre la versione corrente della libreria posizionandosi nella root con"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`pnpm build
`})}),`
`,e.jsxs(n.ol,{start:"2",children:[`
`,e.jsx(n.li,{children:"posizionarsi nella cartella del framework che si vuole testare. Ad esempio se vogliamo testare il framework React (oppure Vue, o Svelte):"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`cd apps/react-app
npm install //per copiare nella node_modules la versione compilata di design-web-components
npm run dev
`})}),`
`,e.jsx(n.p,{children:"Se invece si vuole testare l'app Angular, è necessario avere installato in locale la CLI di Angular e fare:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`cd apps/angular-app
npm install //per copiare nella node_modules la versione compilata di design-web-components
ng serve
`})})]})}function m(i={}){const{wrapper:n}={...l(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{m as default};

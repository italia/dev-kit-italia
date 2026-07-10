import{j as e,M as l}from"./blocks-eb9HL6DI.js";import{useMDXComponents as t}from"./index-BhVOkJfz.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-CwKCcALr.js";var s={GH_PAGES_PATH:"https://design-web-components.vercel.app"};const r=s.GH_PAGES_PATH+"/vanilla-app/";function a(n){const i={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Framework/Vanilla"}),`
`,`
`,e.jsx(i.h1,{id:"vanilla-js",children:"Vanilla JS"}),`
`,e.jsx(i.p,{children:"Dev Kit Italia può essere usato direttamente in qualsiasi pagina HTML, senza bundler né framework. È sufficiente includere i file CSS e JS del pacchetto tramite tag standard."}),`
`,e.jsxs(i.p,{children:[e.jsx("a",{href:r,title:"Vai all'esempio di integrazione Vanilla",children:"Esempio di integrazione"})," - ",e.jsx("a",{href:"https://github.com/italia/dev-kit-italia/tree/main/examples/vanilla-app",title:"Vai al codice su GitHub",children:"Codice GitHub"})]}),`
`,e.jsx(i.h2,{id:"installazione",children:"Installazione"}),`
`,e.jsxs(i.p,{children:["Installa il pacchetto tramite npm o scarica i file dalla ",e.jsx(i.a,{href:"https://github.com/italia/dev-kit-italia/releases",rel:"nofollow",children:"pagina delle release"}),":"]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-bash",children:`npm install @italia/dev-kit-italia
# oppure
pnpm add @italia/dev-kit-italia
# oppure
yarn add @italia/dev-kit-italia
`})}),`
`,e.jsx(i.h2,{id:"importazione",children:"Importazione"}),`
`,e.jsxs(i.p,{children:["Nell'",e.jsx(i.code,{children:"<head>"})," della pagina HTML, collega i fogli di stile e carica i componenti come modulo ES:"]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<!-- index.html -->
<link rel="stylesheet" href="/node_modules/@italia/dev-kit-italia/dist/fonts.css" />
<link rel="stylesheet" href="/node_modules/@italia/dev-kit-italia/dist/styles.css" />
<script type="module" src="/node_modules/@italia/dev-kit-italia/dist/elements.js"><\/script>
`})}),`
`,e.jsx(i.h2,{id:"utilizzo",children:"Utilizzo"}),`
`,e.jsxs(i.p,{children:["Usa i componenti direttamente nell'HTML e aggiungi i gestori degli eventi tramite ",e.jsx(i.code,{children:"addEventListener"}),":"]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<!-- button.html -->
<it-button variant="primary" type="button" id="btn-principale">
  Cliccami
</it-button>

<script type="module">
  document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('it-button#btn-principale');
    if (button) {
      button.addEventListener('click', () => {
        alert('Mi hai cliccato!');
      });
    }
  });
<\/script>
`})}),`
`,e.jsx(i.h2,{id:"routing",children:"Routing"}),`
`,e.jsxs(i.p,{children:["Dev Kit Italia è progettato in modo che ogni elemento interattivo che normalmente contiene un tag ",e.jsx(i.code,{children:"<a>"})," lo esponga come slot."]}),`
`,e.jsxs(i.p,{children:["In Vanilla JS puoi usare direttamente un tag ",e.jsx(i.code,{children:"<a>"})," standard, oppure gestire la navigazione lato client aggiornando ",e.jsx(i.code,{children:"href"})," via JavaScript."]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<it-dropdown-item>
  <a href="/pagina">Vai alla pagina</a>
</it-dropdown-item>
`})}),`
`,e.jsx(i.h2,{id:"internazionalizzazione",children:"Internazionalizzazione"}),`
`,e.jsxs(i.p,{children:["Per gestire l'internazionalizzazione in una applicazione Vanilla JS, è necessario importare ",e.jsx(i.code,{children:"registerTranslation"}),` e registrare le traduzioni.
Questo può essere fatto nel file di ingresso dell'applicazione, se le traduzioni sono centralizzate in un unico punto:`]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-javascript",children:`// main.js
import { registerTranslation } from '@italia/dev-kit-italia/elements.js';
import '@italia/dev-kit-italia/fonts.css';
import '@italia/dev-kit-italia/styles.css';

const it = {
  $code: 'it',
  $name: 'Italiano',
  $dir: 'ltr',
  showHidePassword: 'Mostra/Nascondi Password CUSTOM.',
};

registerTranslation(it);
`})}),`
`,e.jsx(i.p,{children:"Oppure all'interno di un modulo specifico per pagina:"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-javascript",children:`// js/accordion.js

import { registerTranslation } from '@italia/dev-kit-italia/elements.js';

const it = {
  $code: 'it',
  $name: 'Italiano',
  $dir: 'ltr',
  showHidePassword: 'Mostra/Nascondi Password (in CUSTOM MODULE).',
};

registerTranslation(it);
`})}),`
`,e.jsx(i.p,{children:"Il modulo va incluso nella pagina HTML corrispondente:"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<!-- accordion.html -->
<script type="module" src="./js/accordion.js"><\/script>
`})})]})}function h(n={}){const{wrapper:i}={...t(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(a,{...n})}):a(n)}export{h as default,r as path};

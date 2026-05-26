import{j as i,M as l}from"./blocks-B4cgbpI_.js";import{useMDXComponents as t}from"./index-DhGLikld.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-R3-NR_41.js";var s={GH_PAGES_PATH:"/dev-kit-italia"};const r=s.GH_PAGES_PATH+"/vanilla-app/";function a(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...t(),...n.components};return i.jsxs(i.Fragment,{children:[i.jsx(l,{title:"Framework/Vanilla"}),`
`,`
`,i.jsx(e.h1,{id:"vanilla-js",children:"Vanilla JS"}),`
`,i.jsx(e.p,{children:"Dev Kit Italia può essere usato direttamente in qualsiasi pagina HTML, senza bundler né framework. È sufficiente includere i file CSS e JS del pacchetto tramite tag standard."}),`
`,i.jsxs(e.p,{children:[i.jsx("a",{href:r,title:"Vai all'esempio di integrazione Vanilla",children:"Esempio di integrazione"})," - ",i.jsx("a",{href:"https://github.com/italia/dev-kit-italia/tree/main/examples/vanilla-app",title:"Vai al codice su GitHub",children:"Codice GitHub"})]}),`
`,i.jsx(e.h2,{id:"installazione",children:"Installazione"}),`
`,i.jsxs(e.p,{children:["Installa il pacchetto tramite npm o scarica i file dalla ",i.jsx(e.a,{href:"https://github.com/italia/dev-kit-italia/releases",rel:"nofollow",children:"pagina delle release"}),":"]}),`
`,i.jsx(e.pre,{children:i.jsx(e.code,{className:"language-bash",children:`npm install @italia/dev-kit-italia
# oppure
pnpm add @italia/dev-kit-italia
# oppure
yarn add @italia/dev-kit-italia
`})}),`
`,i.jsx(e.h2,{id:"importazione",children:"Importazione"}),`
`,i.jsxs(e.p,{children:["Nell'",i.jsx(e.code,{children:"<head>"})," della pagina HTML, collega i fogli di stile e carica i componenti come modulo ES:"]}),`
`,i.jsx(e.pre,{children:i.jsx(e.code,{className:"language-html",children:`<!-- index.html -->
<link rel="stylesheet" href="/node_modules/@italia/dev-kit-italia/dist/fonts.css" />
<link rel="stylesheet" href="/node_modules/@italia/dev-kit-italia/dist/full.css" />
<script type="module" src="/node_modules/@italia/dev-kit-italia/dist/elements.js"><\/script>
`})}),`
`,i.jsx(e.h2,{id:"utilizzo",children:"Utilizzo"}),`
`,i.jsxs(e.p,{children:["Usa i componenti direttamente nell'HTML e aggiungi i gestori degli eventi tramite ",i.jsx(e.code,{children:"addEventListener"}),":"]}),`
`,i.jsx(e.pre,{children:i.jsx(e.code,{className:"language-html",children:`<!-- button.html -->
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
`,i.jsx(e.h2,{id:"routing",children:"Routing"}),`
`,i.jsxs(e.p,{children:["Dev Kit Italia è progettato in modo che ogni elemento interattivo che normalmente contiene un tag ",i.jsx(e.code,{children:"<a>"})," lo esponga come slot."]}),`
`,i.jsxs(e.p,{children:["In Vanilla JS puoi usare direttamente un tag ",i.jsx(e.code,{children:"<a>"})," standard, oppure gestire la navigazione lato client aggiornando ",i.jsx(e.code,{children:"href"})," via JavaScript."]}),`
`,i.jsx(e.pre,{children:i.jsx(e.code,{className:"language-html",children:`<it-dropdown-item>
  <a href="/pagina">Vai alla pagina</a>
</it-dropdown-item>
`})}),`
`,i.jsx(e.h2,{id:"internazionalizzazione",children:"Internazionalizzazione"}),`
`,i.jsxs(e.p,{children:["Per gestire l'internazionalizzazione in una applicazione Vanilla JS, è necessario importare ",i.jsx(e.code,{children:"registerTranslation"}),` e registrare le traduzioni.
Questo può essere fatto nel file di ingresso dell'applicazione, se le traduzioni sono centralizzate in un unico punto:`]}),`
`,i.jsx(e.pre,{children:i.jsx(e.code,{className:"language-javascript",children:`// main.js
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
`,i.jsx(e.p,{children:"Oppure all'interno di un modulo specifico per pagina:"}),`
`,i.jsx(e.pre,{children:i.jsx(e.code,{className:"language-javascript",children:`// js/accordion.js

import { registerTranslation } from '@italia/dev-kit-italia/elements.js';

const it = {
  $code: 'it',
  $name: 'Italiano',
  $dir: 'ltr',
  showHidePassword: 'Mostra/Nascondi Password (in CUSTOM MODULE).',
};

registerTranslation(it);
`})}),`
`,i.jsx(e.p,{children:"Il modulo va incluso nella pagina HTML corrispondente:"}),`
`,i.jsx(e.pre,{children:i.jsx(e.code,{className:"language-html",children:`<!-- accordion.html -->
<script type="module" src="./js/accordion.js"><\/script>
`})})]})}function h(n={}){const{wrapper:e}={...t(),...n.components};return e?i.jsx(e,{...n,children:i.jsx(a,{...n})}):a(n)}export{h as default,r as path};

import{j as n,M as l}from"./blocks-D6EPeW41.js";import{useMDXComponents as t}from"./index-DaLkFkQr.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-taocDA-g.js";function a(i){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...t(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{title:"Framework/Vanilla"}),`
`,n.jsx(e.h1,{id:"vanilla-js",children:"Vanilla JS"}),`
`,n.jsx(e.p,{children:"Dev Kit Italia può essere usato direttamente in qualsiasi pagina HTML, senza bundler né framework. È sufficiente includere i file CSS e JS del pacchetto tramite tag standard."}),`
`,n.jsx(e.h2,{id:"installazione",children:"Installazione"}),`
`,n.jsxs(e.p,{children:["Installa il pacchetto tramite npm o scarica i file dalla ",n.jsx(e.a,{href:"https://github.com/italia/dev-kit-italia/releases",rel:"nofollow",children:"pagina delle release"}),":"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm install @italia/dev-kit-italia
# oppure
pnpm add @italia/dev-kit-italia
# oppure
yarn add @italia/dev-kit-italia
`})}),`
`,n.jsx(e.h2,{id:"importazione",children:"Importazione"}),`
`,n.jsxs(e.p,{children:["Nell'",n.jsx(e.code,{children:"<head>"})," della pagina HTML, collega i fogli di stile e carica i componenti come modulo ES:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<!-- index.html -->
<link rel="stylesheet" href="/node_modules/@italia/dev-kit-italia/dist/fonts.css" />
<link rel="stylesheet" href="/node_modules/@italia/dev-kit-italia/dist/full.css" />
<script type="module" src="/node_modules/@italia/dev-kit-italia/dist/elements.js"><\/script>
`})}),`
`,n.jsx(e.h2,{id:"utilizzo",children:"Utilizzo"}),`
`,n.jsxs(e.p,{children:["Usa i componenti direttamente nell'HTML e aggiungi i gestori degli eventi tramite ",n.jsx(e.code,{children:"addEventListener"}),":"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<!-- button.html -->
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
`,n.jsx(e.h2,{id:"routing",children:"Routing"}),`
`,n.jsxs(e.p,{children:["Dev Kit Italia è progettato in modo che ogni elemento interattivo che normalmente contiene un tag ",n.jsx(e.code,{children:"<a>"})," lo esponga come slot."]}),`
`,n.jsxs(e.p,{children:["In Vanilla JS puoi usare direttamente un tag ",n.jsx(e.code,{children:"<a>"})," standard, oppure gestire la navigazione lato client aggiornando ",n.jsx(e.code,{children:"href"})," via JavaScript."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<it-dropdown-item>
  <a href="/pagina">Vai alla pagina</a>
</it-dropdown-item>
`})}),`
`,n.jsx(e.h2,{id:"internazionalizzazione",children:"Internazionalizzazione"}),`
`,n.jsxs(e.p,{children:["Per gestire l'internazionalizzazione in una applicazione Vanilla JS, è necessario importare ",n.jsx(e.code,{children:"registerTranslation"}),` e registrare le traduzioni.
Questo può essere fatto nel file di ingresso dell'applicazione, se le traduzioni sono centralizzate in un unico punto:`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// main.js
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
`,n.jsx(e.p,{children:"Oppure all'interno di un modulo specifico per pagina:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// js/accordion.js

import { registerTranslation } from '@italia/dev-kit-italia/elements.js';

const it = {
  $code: 'it',
  $name: 'Italiano',
  $dir: 'ltr',
  showHidePassword: 'Mostra/Nascondi Password (in CUSTOM MODULE).',
};

registerTranslation(it);
`})}),`
`,n.jsx(e.p,{children:"Il modulo va incluso nella pagina HTML corrispondente:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<!-- accordion.html -->
<script type="module" src="./js/accordion.js"><\/script>
`})})]})}function c(i={}){const{wrapper:e}={...t(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(a,{...i})}):a(i)}export{c as default};

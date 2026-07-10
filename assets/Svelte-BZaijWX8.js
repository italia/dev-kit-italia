import{j as e,M as s}from"./blocks-HeM7HRRU.js";import{useMDXComponents as a}from"./index-BNB5zOl4.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-BBsXzWsk.js";var o={GH_PAGES_PATH:"https://design-web-components.vercel.app"};const r=o.GH_PAGES_PATH+"/svelte-app/";function n(t){const i={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...a(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Framework/Svelte"}),`
`,`
`,e.jsx(i.h1,{id:"svelte",children:"Svelte"}),`
`,e.jsx(i.p,{children:"Dev Kit Italia si integra nativamente con Svelte tramite i Custom Elements standard del browser. I componenti si usano direttamente nel markup senza wrapper aggiuntivi."}),`
`,e.jsxs(i.p,{children:[e.jsx("a",{href:r,title:"Vai all'esempio di integrazione Svelte",children:"Esempio di integrazione"})," - ",e.jsx("a",{href:"https://github.com/italia/dev-kit-italia/tree/main/examples/svelte-app",title:"Vai al codice su GitHub",children:"Codice GitHub"})]}),`
`,e.jsx(i.h2,{id:"installazione",children:"Installazione"}),`
`,e.jsx(i.p,{children:"Installa il pacchetto nel tuo progetto Svelte:"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-bash",children:`npm install @italia/dev-kit-italia
# oppure
pnpm add @italia/dev-kit-italia
# oppure
yarn add @italia/dev-kit-italia
`})}),`
`,e.jsx(i.h2,{id:"importazione",children:"Importazione"}),`
`,e.jsxs(i.p,{children:["Nel punto di ingresso dell'applicazione (",e.jsx(i.code,{children:"main.js"}),"), importa i componenti e i fogli di stile:"]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-javascript",children:`// main.js
import '@italia/dev-kit-italia/elements.js';
import '@italia/dev-kit-italia/fonts.css';
import '@italia/dev-kit-italia/styles.css';
`})}),`
`,e.jsx(i.h2,{id:"utilizzo",children:"Utilizzo"}),`
`,e.jsxs(i.p,{children:["Usa i componenti direttamente nel markup Svelte e gestisci gli eventi con la direttiva ",e.jsx(i.code,{children:"on:"}),":"]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-javascript",children:`// Button.svelte

<it-button
  variant="primary"
  type="button"
  on:click={() => {
    alert('Mi hai cliccato!');
  }}
>
  Cliccami
</it-button>
`})}),`
`,e.jsx(i.h2,{id:"routing",children:"Routing"}),`
`,e.jsxs(i.p,{children:["Dev Kit Italia è progettato in modo che ogni elemento interattivo che normalmente contiene un tag ",e.jsx(i.code,{children:"<a>"})," lo esponga come slot."]}),`
`,e.jsxs(i.p,{children:["Questo ti permette di passare il componente di navigazione della tua libreria di routing — come ",e.jsx(i.code,{children:"<a use:link>"})," di svelte-routing o qualsiasi altra soluzione — senza alcun wrapper aggiuntivo."]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-javascript",children:`// NavItem.svelte

<script>
  import { link } from 'svelte-routing';
<\/script>

<it-dropdown-item>
  <a href="/pagina" use:link>Vai alla pagina</a>
</it-dropdown-item>
`})}),`
`,e.jsx(i.h2,{id:"internazionalizzazione",children:"Internazionalizzazione"}),`
`,e.jsxs(i.p,{children:["Per gestire l'internazionalizzazione in una applicazione Svelte, è necessario importare ",e.jsx(i.code,{children:"registerTranslation"}),` e registrare le traduzioni.
Questo può essere fatto nel punto di ingresso dell'applicazione, se le traduzioni sono centralizzate in un unico punto:`]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-javascript",children:`// main.js
import App from './App.svelte';
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

const app = new App({
  target: document.getElementById('app'),
});

export default app;
`})}),`
`,e.jsx(i.p,{children:"Oppure all'interno dei propri componenti:"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-javascript",children:`// MyPassword.svelte

<script>
  import { onMount } from 'svelte';
  import { registerTranslation } from '@italia/dev-kit-italia/elements.js';

  const it = {
    $code: 'it',
    $name: 'Italiano',
    $dir: 'ltr',
    showHidePassword: 'Mostra/Nascondi Password (in CUSTOM COMPONENT).',
  };

  let translationsLoaded = false;

  onMount(() => {
    registerTranslation(it);
    translationsLoaded = true;
  });
<\/script>

{#if translationsLoaded}
  <it-input
    id="campo-password"
    type="password"
    name="campo-password"
    support-text="Inserisci almeno 8 caratteri e alcuni caratteri speciali."
    strength-meter={true}
    minlength="8"
    suggestions={true}
  >
    <span slot="label">Campo password</span>
  </it-input>
{/if}
`})})]})}function m(t={}){const{wrapper:i}={...a(),...t.components};return i?e.jsx(i,{...t,children:e.jsx(n,{...t})}):n(t)}export{m as default,r as path};

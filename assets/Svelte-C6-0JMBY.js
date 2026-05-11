import{j as n,M as s}from"./blocks-Di1y6RyP.js";import{useMDXComponents as a}from"./index-BK3DIZ4d.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-D7fXMUtU.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...a(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"Framework/Svelte"}),`
`,n.jsx(e.h1,{id:"svelte",children:"Svelte"}),`
`,n.jsx(e.p,{children:"Dev Kit Italia si integra nativamente con Svelte tramite i Custom Elements standard del browser. I componenti si usano direttamente nel markup senza wrapper aggiuntivi."}),`
`,n.jsx(e.h2,{id:"installazione",children:"Installazione"}),`
`,n.jsx(e.p,{children:"Installa il pacchetto nel tuo progetto Svelte:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm install @italia/dev-kit-italia
# oppure
pnpm add @italia/dev-kit-italia
# oppure
yarn add @italia/dev-kit-italia
`})}),`
`,n.jsx(e.h2,{id:"importazione",children:"Importazione"}),`
`,n.jsxs(e.p,{children:["Nel punto di ingresso dell'applicazione (",n.jsx(e.code,{children:"main.js"}),"), importa i componenti e i fogli di stile:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// main.js
import '@italia/dev-kit-italia/elements.js';
import '@italia/dev-kit-italia/fonts.css';
import '@italia/dev-kit-italia/full.css';
`})}),`
`,n.jsx(e.h2,{id:"utilizzo",children:"Utilizzo"}),`
`,n.jsxs(e.p,{children:["Usa i componenti direttamente nel markup Svelte e gestisci gli eventi con la direttiva ",n.jsx(e.code,{children:"on:"}),":"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Button.svelte

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
`,n.jsx(e.h2,{id:"routing",children:"Routing"}),`
`,n.jsxs(e.p,{children:["Dev Kit Italia è progettato in modo che ogni elemento interattivo che normalmente contiene un tag ",n.jsx(e.code,{children:"<a>"})," lo esponga come slot."]}),`
`,n.jsxs(e.p,{children:["Questo ti permette di passare il componente di navigazione della tua libreria di routing — come ",n.jsx(e.code,{children:"<a use:link>"})," di svelte-routing o qualsiasi altra soluzione — senza alcun wrapper aggiuntivo."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// NavItem.svelte

<script>
  import { link } from 'svelte-routing';
<\/script>

<it-dropdown-item>
  <a href="/pagina" use:link>Vai alla pagina</a>
</it-dropdown-item>
`})}),`
`,n.jsx(e.h2,{id:"internazionalizzazione",children:"Internazionalizzazione"}),`
`,n.jsxs(e.p,{children:["Per gestire l'internazionalizzazione in una applicazione Svelte, è necessario importare ",n.jsx(e.code,{children:"registerTranslation"}),` e registrare le traduzioni.
Questo può essere fatto nel punto di ingresso dell'applicazione, se le traduzioni sono centralizzate in un unico punto:`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// main.js
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
`,n.jsx(e.p,{children:"Oppure all'interno dei propri componenti:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// MyPassword.svelte

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
`})})]})}function p(i={}){const{wrapper:e}={...a(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(t,{...i})}):t(i)}export{p as default};

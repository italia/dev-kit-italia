import{j as e,M as s}from"./blocks-D1miezzc.js";import{useMDXComponents as a}from"./index-XvL543Dm.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-BcvJloFY.js";var r={GH_PAGES_PATH:"https://design-web-components.vercel.app"};const o=r.GH_PAGES_PATH+"/vue-app/";function n(t){const i={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...a(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Framework/Vue"}),`
`,`
`,e.jsx(i.h1,{id:"vue",children:"Vue"}),`
`,e.jsx(i.p,{children:"Dev Kit Italia si integra nativamente con Vue 3 tramite i Custom Elements standard del browser. I componenti si usano direttamente nei template senza registrazione né wrapper aggiuntivi."}),`
`,e.jsxs(i.p,{children:[e.jsx("a",{href:o,title:"Vai all'esempio di integrazione Vue",children:"Esempio di integrazione"})," - ",e.jsx("a",{href:"https://github.com/italia/dev-kit-italia/tree/main/examples/vue-app",title:"Vai al codice su GitHub",children:"Codice GitHub"})]}),`
`,e.jsx("div",{class:"callout callout-primary",children:e.jsxs("div",{class:"callout-inner",children:[e.jsx("div",{class:"callout-title",children:e.jsx("span",{class:"text",children:"SSR"})}),e.jsx("p",{children:e.jsxs(i.p,{children:["Se usi Vue all'interno di un framework con SSR abilitato (es. Nuxt), l'import statico di ",e.jsx("code",{children:"elements.js"})," mostrato di seguito va adattato: consulta la guida dedicata a ",e.jsx("a",{href:"/docs/framework-ssr--documentazione",children:"SSR"}),"."]})})]})}),`
`,e.jsx(i.h2,{id:"installazione",children:"Installazione"}),`
`,e.jsx(i.p,{children:"Installa il pacchetto nel tuo progetto Vue:"}),`
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
`,e.jsx(i.p,{children:"Usa i componenti direttamente nel template e gestisci gli eventi con la sintassi Vue:"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-javascript",children:`// Button.vue

<script setup>
const handleClick = () => {
  alert('Mi hai cliccato!');
};
<\/script>

<template>
  <it-button variant="primary" type="button" @click="handleClick">
    Cliccami
  </it-button>
</template>
`})}),`
`,e.jsx(i.h2,{id:"routing",children:"Routing"}),`
`,e.jsxs(i.p,{children:["Dev Kit Italia è progettato in modo che ogni elemento interattivo che normalmente contiene un tag ",e.jsx(i.code,{children:"<a>"})," lo esponga come slot."]}),`
`,e.jsxs(i.p,{children:["Questo ti permette di passare direttamente il componente ",e.jsx(i.code,{children:"<RouterLink>"})," di Vue Router — senza alcun wrapper aggiuntivo."]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-javascript",children:`// NavItem.vue

<script setup>
import { RouterLink } from 'vue-router';
<\/script>

<template>
  <it-dropdown-item>
    <RouterLink to="/pagina">Vai alla pagina</RouterLink>
  </it-dropdown-item>
</template>
`})}),`
`,e.jsx(i.h2,{id:"internazionalizzazione",children:"Internazionalizzazione"}),`
`,e.jsxs(i.p,{children:["Per gestire l'internazionalizzazione in una applicazione Vue, è necessario importare ",e.jsx(i.code,{children:"registerTranslation"}),` e registrare le traduzioni.
Questo può essere fatto nel punto di ingresso dell'applicazione, se le traduzioni sono centralizzate in un unico punto:`]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-javascript",children:`// main.js
import { createApp } from 'vue';
import { registerTranslation } from '@italia/dev-kit-italia/elements.js';
import '@italia/dev-kit-italia/fonts.css';
import '@italia/dev-kit-italia/styles.css';
import App from './App.vue';
import router from './routes.js';

const it = {
  $code: 'it',
  $name: 'Italiano',
  $dir: 'ltr',
  showHidePassword: 'Mostra/Nascondi Password CUSTOM.',
};

registerTranslation(it);

createApp(App).use(router).mount('#app');
`})}),`
`,e.jsx(i.p,{children:"Oppure all'interno dei propri componenti:"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-typescript",children:`// MyPassword.vue

<script setup>
import { onMounted, ref } from 'vue';
import { registerTranslation } from '@italia/dev-kit-italia/elements.js';

const it = {
  $code: 'it',
  $name: 'Italiano',
  $dir: 'ltr',
  showHidePassword: 'Mostra/Nascondi Password (in CUSTOM COMPONENT).',
};

const translationsLoaded = ref(false);

onMounted(() => {
  registerTranslation(it);
  translationsLoaded.value = true;
});
<\/script>

<template>
  <it-input
    v-if="translationsLoaded"
    id="campo-password"
    type="password"
    name="campo-password"
    support-text="Inserisci almeno 8 caratteri e alcuni caratteri speciali."
    :strength-meter="true"
    minlength="8"
    :suggestions="true"
  >
    <span slot="label">Campo password</span>
  </it-input>
</template>
`})})]})}function m(t={}){const{wrapper:i}={...a(),...t.components};return i?e.jsx(i,{...t,children:e.jsx(n,{...t})}):n(t)}export{m as default,o as path};

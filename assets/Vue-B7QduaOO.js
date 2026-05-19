import{j as n,M as r}from"./blocks-Cfdtkg6u.js";import{useMDXComponents as a}from"./index-CRGMk0FE.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-dUoPoR-O.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...a(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"Framework/Vue"}),`
`,n.jsx(e.h1,{id:"vue",children:"Vue"}),`
`,n.jsx(e.p,{children:"Dev Kit Italia si integra nativamente con Vue 3 tramite i Custom Elements standard del browser. I componenti si usano direttamente nei template senza registrazione né wrapper aggiuntivi."}),`
`,n.jsxs(e.p,{children:[n.jsx("a",{href:"/vue-app/",title:"Vai all'esempio di integrazione Vue",children:"Esempio di integrazione"})," - ",n.jsx("a",{href:"https://github.com/italia/dev-kit-italia/tree/main/examples/vue-app",title:"Vai al codice su GitHub",children:"Codice GitHub"})]}),`
`,n.jsx(e.h2,{id:"installazione",children:"Installazione"}),`
`,n.jsx(e.p,{children:"Installa il pacchetto nel tuo progetto Vue:"}),`
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
`,n.jsx(e.p,{children:"Usa i componenti direttamente nel template e gestisci gli eventi con la sintassi Vue:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Button.vue

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
`,n.jsx(e.h2,{id:"routing",children:"Routing"}),`
`,n.jsxs(e.p,{children:["Dev Kit Italia è progettato in modo che ogni elemento interattivo che normalmente contiene un tag ",n.jsx(e.code,{children:"<a>"})," lo esponga come slot."]}),`
`,n.jsxs(e.p,{children:["Questo ti permette di passare direttamente il componente ",n.jsx(e.code,{children:"<RouterLink>"})," di Vue Router — senza alcun wrapper aggiuntivo."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// NavItem.vue

<script setup>
import { RouterLink } from 'vue-router';
<\/script>

<template>
  <it-dropdown-item>
    <RouterLink to="/pagina">Vai alla pagina</RouterLink>
  </it-dropdown-item>
</template>
`})}),`
`,n.jsx(e.h2,{id:"internazionalizzazione",children:"Internazionalizzazione"}),`
`,n.jsxs(e.p,{children:["Per gestire l'internazionalizzazione in una applicazione Vue, è necessario importare ",n.jsx(e.code,{children:"registerTranslation"}),` e registrare le traduzioni.
Questo può essere fatto nel punto di ingresso dell'applicazione, se le traduzioni sono centralizzate in un unico punto:`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// main.js
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
`,n.jsx(e.p,{children:"Oppure all'interno dei propri componenti:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// MyPassword.vue

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
`})})]})}function c(i={}){const{wrapper:e}={...a(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(t,{...i})}):t(i)}export{c as default};

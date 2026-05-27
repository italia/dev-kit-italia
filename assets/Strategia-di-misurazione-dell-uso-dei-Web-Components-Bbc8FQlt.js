import{j as e,M as r}from"./blocks-BWmD3jw0.js";import{useMDXComponents as o}from"./index-DsXIUD6o.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-ClE6dn2R.js";function t(i){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Misurare l'adozione del Kit"}),`
`,e.jsx(n.h1,{id:"misurare-ladozione-del-kit",children:"Misurare l'adozione del Kit"}),`
`,e.jsx(n.p,{children:"Misura l'utilizzo del Dev Kit Italia nel tuo sito o servizio per valutarne l'impatto e guidarne le evoluzioni future."}),`
`,e.jsx(n.h2,{id:"perché-misurare-ladozione-del-kit",children:"Perché misurare l'adozione del Kit"}),`
`,e.jsx(n.p,{children:"Misurare l’utilizzo dei Web Components del Dev Kit Italia ti permette di capire quali componenti vengono effettivamente impiegati, in quali contesti tecnologici e qual è la loro efficacia. Questi dati ti aiutano a valutarne l'impatto complessivo, ottimizzare le integrazioni esistenti e guidare le future evoluzioni del tuo sito o servizio."}),`
`,e.jsx(n.p,{children:"La strategia proposta si pone tre obiettivi principali:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["identificare i Web Components utilizzati nelle pagine web, sfruttando un prefisso standard (",e.jsx(n.code,{children:"it-"}),") che li rende facilmente riconoscibili;"]}),`
`,e.jsx(n.li,{children:"rilevare l’uso di componenti classici, ovvero quelli implementati tramite classi CSS e HTML puro, per ottenere una visione completa dell’adozione del design system;"}),`
`,e.jsx(n.li,{children:"determinare il framework o CMS utilizzato nella pagina, un’informazione utile per analisi più approfondite e per orientare le future evoluzioni del progetto."}),`
`]}),`
`,e.jsx(n.h2,{id:"come-misurare-ladozione-del-kit",children:"Come misurare l'adozione del Kit"}),`
`,e.jsx(n.p,{children:"Per misurare l'adozione del Kit, ti suggeriamo di usare una tecnica basata sull'analisi del DOM. Questa tecnica non è invasiva e ti permette di:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"identificare i Web Components utilizzati nelle pagine web;"}),`
`,e.jsx(n.li,{children:"rilevare l’uso di componenti classici implementati tramite classi CSS e HTML puro;"}),`
`,e.jsx(n.li,{children:"determinare il framework o CMS utilizzato nella pagina."}),`
`]}),`
`,e.jsxs(n.p,{children:["I Web Components vengono identificati tramite il loro prefisso standard (",e.jsx(n.code,{children:"it-"}),"), mentre i componenti implementati via HTML vengono rilevati cercando le specifiche classi CSS documentate nelle pagine dei componenti. Puoi riconoscere i due tipi di componenti dai tag presenti in alto a ciascuna pagina: ",e.jsx(n.code,{children:"Componente"})," per i Web Components e ",e.jsx(n.code,{children:"Documentazione HTML"})," per i componenti HTML."]}),`
`,e.jsx(n.p,{children:"Per quanto riguarda il framework o CMS, vengono usate euristiche che analizzano oggetti globali, meta-tag e pattern generati dai principali strumenti di sviluppo front-end."}),`
`,e.jsx(n.h2,{id:"implementazione-dello-script-di-analisi",children:"Implementazione dello script di analisi"}),`
`,e.jsx(n.p,{children:"Per usare questa tecnica di misurazione, integra nel tuo progetto questo script JavaScript."}),`
`,e.jsx(n.p,{children:"Lo script è già impostato per identificare Web Components e componenti HTML tramite analisi del DOM, rilevare il framework o CMS tramite l'uso di euristiche, e aggregare i risultati."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`function detectWebComponents(prefix = 'it-') {
  const allElements = document.getElementsByTagName('*');
  const components = {};

  Array.from(allElements).forEach(el => {
    const tag = el.tagName.toLowerCase();

    if (tag.startsWith(prefix)) {
      if (!components[tag]) {
        components[tag] = 0;
      }
      components[tag]++;
    }
  });

  return components;
}

function detectClassicComponents() {
  const components = {};

  const classes = [
    'affix-top',
    'affix-bottom',
    'badge',
    'it-footer',
    'form-group',
  ];

  classes.forEach(cl => {
    const elements = document.getElementsByClassName(cl);
    Array.from(elements).forEach(el => {
      if (!components[cl]) {
        components[cl] = 0;
      }
      components[cl]++;
    });
  });

  return components;
}

function analyzeComponentsUsage(prefix = 'it-') {
  if (!window._itAnalytics) return null;

  const components = {
    webComponents: detectWebComponents(prefix),
    classicComponents: detectClassicComponents(),
  };

  const wcTotal = Object.values(components.webComponents).reduce((sum, value) => sum + value, 0);
  const classicTotal = Object.values(components.classicComponents).reduce((sum, value) => sum + value, 0);

  return {
    total: wcTotal + classicTotal,
    byComponent: components,
  };
}
`})}),`
`,e.jsx(n.p,{children:"Puoi usare questa tecnica per rilevare anche il framework e/o il CMS frontend utilizzato dalla pagina (ad esempio, React, Angular, Vue, Svelte, CMS come WordPress e Drupal) e correlare l’uso dei Web Components al contesto tecnologico."}),`
`,e.jsx(n.h2,{id:"implementazione-cms--framework-detection",children:"Implementazione CMS / framework detection"}),`
`,e.jsx(n.p,{children:"Il rilevamento del framework / CMS è possibile attraverso l'analisi di vari indicatori, tra cui:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"la presenza di oggetti globali;"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"i meta tag e attributi nel DOM;"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"i pattern generati dai principali framework e CMS."}),`
`]}),`
`]}),`
`,e.jsx(n.p,{children:"Esempio di implementazione:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`function detectFramework() {

  // Framework / Library frontend
  if (window.ng && window.getAllAngularRootElements) return 'Angular';

  if (window.__REACT_DEVTOOLS_ATTACH__ || document.querySelector('[data-reactroot], [data-reactid], [data-react-helmet]')) return 'React';

  if (window.__VUE_DEVTOOLS_GLOBAL_HOOK__ || document.querySelector('[data-v-app], [data-vue-meta]')) return 'Vue';

  if (document.querySelector('[data-svelte-h]')) return 'Svelte';

  if (window.__NEXT_DATA__) return 'Next.js';

  if (window.__NUXT__ || document.querySelector('[data-n-head]')) return 'Nuxt.js';

  if (document.querySelector('[data-astro-root]')) return 'Astro';

  if (window.__SVELTEKIT_APP_VERSION__) return 'SvelteKit';

  if (window.__REMIXX_CONTEXT__) return 'Remix';

  if (document.querySelector('[data-hydrate]') && document.querySelector('script[type="module"]')) return 'Qwik';

  // Altri framework noti
  if (window.Ember) return 'Ember.js';

  if (window.Backbone) return 'Backbone.js';

  if (window.Meteor) return 'Meteor';

  // Fallback
  return 'Vanilla JS / Unknown';

}



function detectCMS() {
  // CMS

  if (window.wp && window.wp.data) return 'WordPress';

  if (document.querySelector('meta[name="generator"][content*="WordPress"]')) return 'WordPress';

  if (document.querySelector('meta[name="Generator"][content*="Drupal"]')) return 'Drupal';

  if (document.querySelector('meta[name="Generator"][content*="Joomla"]')) return 'Joomla';

  // Fallback
  return null;

}
`})}),`
`,e.jsx(n.p,{children:"Nota bene: questo esempio di implementazione potrebbe diventare obsoleto in qualsiasi momento, dato che si basa su variabili e/o informazioni impostate autonomamente dai diversi framework/CMS."}),`
`,e.jsx(n.h2,{id:"esempio-di-output",children:"Esempio di output"}),`
`,e.jsx(n.p,{children:"Eseguendo lo script su una pagina web, ottieni un output strutturato che riassume i dati raccolti. Ad esempio:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{
  "webComponents": { "it-button": 5, "it-card": 3 },
  "classicComponents": { "badge": 2 },
  "framework": "React"
}
`})}),`
`,e.jsx(n.p,{children:"Questo output mostra il numero di istanze per ciascun tipo di componente, sia Web Components che classici, e identifica il framework utilizzato."}),`
`,e.jsx(n.h2,{id:"raccomandazioni-operative",children:"Raccomandazioni operative"}),`
`,e.jsxs(n.p,{children:["Per ottenere risultati accurati, esegui lo script dopo che la pagina ha completato il rendering, ad esempio in risposta all’evento ",e.jsx(n.code,{children:"load"}),"."]}),`
`,e.jsx(n.p,{children:"Inoltre, ricorda di rispettare la normativa sulla privacy, inviando i dati raccolti solo a endpoint conformi."}),`
`,e.jsx(n.h2,{id:"limitazioni-del-rilevamento-di-cms-e-framework",children:"Limitazioni del rilevamento di CMS e framework"}),`
`,e.jsx(n.p,{children:"Il rilevamento del framework o CMS si basa su un approccio “best effort”: lo script controlla oggetti globali, meta tag e pattern generati dai principali strumenti front-end. Alcune di queste informazioni possono cambiare nel tempo o non essere presenti, quindi i risultati potrebbero non essere sempre precisi."}),`
`,e.jsx(n.p,{children:"Ad esempio, un framework potrebbe non esporre oggetti globali o utilizzare pattern non documentati, mentre un CMS potrebbe non includere meta tag identificativi. Per questo motivo, interpreta sempre i risultati come indicazioni di massima e non come dati definitivi."})]})}function d(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{d as default};

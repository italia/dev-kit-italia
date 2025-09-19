import{j as n,M as l}from"./index-a6WM3-ks.js";import{useMDXComponents as a}from"./index-C1EbfRbw.js";import"./iframe-BJMmF07V.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...a(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{title:"i18n - Internazionalizzazione"}),`
`,n.jsx(e.h1,{id:"internazionalizzazione",children:"Internazionalizzazione"}),`
`,n.jsxs(e.p,{children:["L'internazionalizzazione dei componenti si basa sul package indipendente @italia/i18n. L'unica lingua fornita di default è l'italiano.",n.jsx("br",{}),`
Se vi è necessità di avere traduzioni in altre lingue, è compito dello sviluppatore implementarle.`]}),`
`,n.jsx(e.h2,{id:"cambio-di-lingua",children:"Cambio di lingua"}),`
`,n.jsxs(e.p,{children:["Per cambiare la lingua corrente a livello di sito, è sufficiente modificare l'attributo ",n.jsx(e.code,{children:"lang"})," sull'elemento ",n.jsx(e.code,{children:"html"}),". Le modifiche a ",n.jsx(e.code,{children:"<html lang>"})," attivano automaticamente l’aggiornamento di tutti i componenti localizzati:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<html lang="en">
  ...
</html>
`})}),`
`,n.jsxs(e.p,{children:["È inoltre possibile cambiare la lingua solo per una parte dei componenti presenti in pagina, passando l'attributo ",n.jsx(e.code,{children:"lang"})," ad ogni singolo componente:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<html lang="it">
  <body>
    <my-element>Questo elemento è in Italiano</my-element>
    <my-element lang="en">This will be English</my-element>
  </body>
</html>
`})}),`
`,n.jsx(e.h2,{id:"creazione-delle-traduzioni",children:"Creazione delle traduzioni"}),`
`,n.jsxs(e.p,{children:["Ogni traduzione deve estendere il tipo ",n.jsx(e.code,{children:"Translation"})," e includere le proprietà meta con il prefisso ",n.jsx(e.code,{children:"$"}),", più eventuali termini addizionali:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`// en.ts
import type { Translation } from '@italia/i18n';

const translation: Translation = {
  $code: 'en',
  $name: 'English',
  $dir: 'ltr',
  upload: 'Upload',
  greetUser: (name: string) => \`Hello, \${name}!\`,
  numFilesSelected: (count: number) => {
    if (count === 0) return 'No files selected';
    if (count === 1) return '1 file selected';
    return \`\${count} files selected\`;
  },
};

export default translation;
`})}),`
`,n.jsxs(e.p,{children:["Ogni componente che prevede traduzioni, registra le proprie traduzioni tramite ",n.jsx(e.code,{children:"registerTranslation"}),":"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`import { registerTranslation } from '@italia/i18n';
import en from './en';
import es from './es';

registerTranslation(en, es);
`})}),`
`,n.jsx(e.p,{children:"È inoltre possibile registrare le traduzioni dinamicamente in risposta alle modifiche della lingua:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`async function changeLanguage(lang) {
  if (['en', 'es', 'fr', 'de'].includes(lang)) {
    const translation = await import(\`/translations/\${lang}.js\`);
    registerTranslation(translation);
  }
}
`})}),`
`,n.jsxs(e.p,{children:["Se si vuole definire e localizzare un proprio componente, e abilitare su di esso le traduzioni, questo deve estendere ",n.jsx(e.code,{children:"BaseLocalizedComponent"})," di ",n.jsx(e.code,{children:"@italia/globals"}),":"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`import { registerTranslation } from '@italia/i18n';
import { BaseLocalizedComponent } from '@italia/globals';
import en from '../translations/en';
import es from '../translations/es';

registerTranslation(en, es);

@customElement('my-element')
export class MyElement extends BaseLocalizedComponent {
  render() {
    return html\` <div>
        <h2>Lang</h2>
        \${this.$localize.lang()}
      </div>
      <div>
        <h2>Direction</h2>
        \${this.$localize.dir()}
      </div>
      <div>
        <h2>Translate string</h2>
        \${this.$t('hello_world')}
      </div>
      <div>
        <h2>Date</h2>
        \${this.$d('2021-09-15 14:00:00 ET', { year: 'numeric', month: 'long', day: 'numeric' })}
      </div>
      <div>
        <h2>Number</h2>
        \${this.$n(1234.56, { style: 'currency', currency: 'USD' })}
      </div>\`;
  }
}
`})}),`
`,n.jsx(e.h2,{id:"uso-del-bundle-globale",children:"Uso del bundle globale"}),`
`,n.jsxs(e.p,{children:["La libreria di internazionalizzazione è già inclusa nel bundle globale ",n.jsx(e.code,{children:"@italia/dev-kit-italia"}),". Pertanto sarà sufficiente fare:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<html lang="it">
  <head>
    ...
    <script type="module">
      import '@italia/dev-kit-italia/dist/elements.js';

      registerTranslation(
        {
          $code: 'it',
          $name: 'Italiano',
          $dir: 'ltr',
          video_consent_accept: 'Accetto i cookie',
        },
        {
          $code: 'en',
          $name: 'English',
          $dir: 'ltr',
          video_consent_accept: 'Accept',
        },
      );
    <\/script>
  </head>
  ...
</html>
`})}),`
`,n.jsx(e.h2,{id:"uso-di-bundle-specifici",children:"Uso di bundle specifici"}),`
`,n.jsx(e.p,{children:"Se vuoi importare solamente alcuni componenti nella tua applicazione, puoi fare:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<html lang="it">
  <head>
    ...
    <script type="module">
      import '@italia/video'; // esempio di import di un componente specifico
      import '@italia/i18n';

      registerTranslation(
        {
          $code: 'it',
          $name: 'Italiano',
          $dir: 'ltr',
          video_consent_accept: 'Accetto i cookie',
        },
        {
          $code: 'en',
          $name: 'English',
          $dir: 'ltr',
          video_consent_accept: 'Accept',
        },
      );
    <\/script>
  </head>
  ...
</html>
`})})]})}function p(i={}){const{wrapper:e}={...a(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(t,{...i})}):t(i)}export{p as default};

import{j as e,M as s}from"./blocks-BOPJQLxO.js";import{useMDXComponents as a}from"./index-B0YyzAz0.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-C2GQMFKp.js";var o={GH_PAGES_PATH:"https://design-web-components.vercel.app"};const r=o.GH_PAGES_PATH+"/react-app/";function n(t){const i={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...a(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Framework/React"}),`
`,`
`,e.jsx(i.h1,{id:"react",children:"React"}),`
`,e.jsx(i.p,{children:"Dev Kit Italia si integra nativamente con React tramite i Custom Elements standard del browser. I componenti si usano direttamente nel JSX senza wrapper aggiuntivi."}),`
`,e.jsxs(i.p,{children:[e.jsx("a",{href:r,title:"Vai all'esempio di integrazione React",children:"Esempio di integrazione"})," - ",e.jsx("a",{href:"https://github.com/italia/dev-kit-italia/tree/main/examples/react-app",title:"Vai al codice su GitHub",children:"Codice GitHub"})]}),`
`,e.jsx("div",{class:"callout callout-warning",children:e.jsxs("div",{class:"callout-inner",children:[e.jsx("div",{class:"callout-title",children:e.jsx("span",{class:"text",children:"Attenzione"})}),e.jsx("p",{children:e.jsxs(i.p,{children:[`Per il funzionamento corretto dei web components in React, è necessario avere una versione
`,e.jsx("strong",{children:"React >= 19.0.0"}),"."]})})]})}),`
`,e.jsx("div",{class:"callout callout-primary",children:e.jsxs("div",{class:"callout-inner",children:[e.jsx("div",{class:"callout-title",children:e.jsx("span",{class:"text",children:"SSR"})}),e.jsx("p",{children:e.jsxs(i.p,{children:["Se usi React all'interno di un framework con SSR abilitato (es. Next.js App Router), l'import statico di ",e.jsx("code",{children:"elements.js"})," mostrato di seguito va adattato: consulta la guida dedicata a ",e.jsx("a",{href:"/docs/framework-ssr--documentazione",children:"SSR"}),"."]})})]})}),`
`,e.jsx(i.h2,{id:"installazione",children:"Installazione"}),`
`,e.jsx(i.p,{children:"Installa il pacchetto nel tuo progetto React:"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-bash",children:`npm install @italia/dev-kit-italia
# oppure
pnpm add @italia/dev-kit-italia
# oppure
yarn add @italia/dev-kit-italia
`})}),`
`,e.jsx(i.h2,{id:"importazione",children:"Importazione"}),`
`,e.jsxs(i.p,{children:["Nel punto di ingresso dell'applicazione (",e.jsx(i.code,{children:"main.jsx"}),"), importa i componenti e i fogli di stile:"]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-jsx",children:`// main.jsx
import '@italia/dev-kit-italia/elements.js';
import '@italia/dev-kit-italia/fonts.css';
import '@italia/dev-kit-italia/styles.css';
`})}),`
`,e.jsx(i.h2,{id:"utilizzo",children:"Utilizzo"}),`
`,e.jsx(i.p,{children:"Usa i componenti direttamente nel JSX e gestisci gli eventi con la sintassi React:"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-jsx",children:`// Button.jsx

const Button = () => (
  <it-button
    variant="primary"
    type="button"
    onClick={() => alert('Mi hai cliccato!')}
  >
    Cliccami
  </it-button>
);

export default Button;
`})}),`
`,e.jsx(i.h2,{id:"routing",children:"Routing"}),`
`,e.jsxs(i.p,{children:["Dev Kit Italia è progettato in modo che ogni elemento interattivo che normalmente contiene un tag ",e.jsx(i.code,{children:"<a>"})," lo esponga come slot."]}),`
`,e.jsxs(i.p,{children:["Questo ti permette di passare il componente di navigazione del tuo framework — come ",e.jsx(i.code,{children:"<Link>"})," di React Router o Next.js — senza alcun wrapper aggiuntivo."]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-jsx",children:`import { Link } from 'react-router-dom';
// oppure, con Next.js:
// import Link from 'next/link';

const NavItem = () => (
  <it-dropdown-item>
    <Link to="/pagina">Vai alla pagina</Link>
  </it-dropdown-item>
);

export default NavItem;
`})}),`
`,e.jsx(i.h2,{id:"internazionalizzazione",children:"Internazionalizzazione"}),`
`,e.jsxs(i.p,{children:["Per gestire l'internazionalizzazione in una applicazione React, è necessario importare ",e.jsx(i.code,{children:"registerTranslations"}),` e registrare le traduzioni.
Questo può essere fatto nella root dell'applicazione, se le traduzioni sono centralizzate in un unico punto:`]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-jsx",children:`import { registerTranslation } from '@italia/dev-kit-italia/elements.js';

const it = {
  $code: 'it',
  $name: 'Italiano',
  $dir: 'ltr',
  showHidePassword: 'Mostra/Nascondi Password CUSTOM.',
};

import '@italia/dev-kit-italia/fonts.css';
import '@italia/dev-kit-italia/styles.css';
import '@italia/dev-kit-italia/elements.js';

registerTranslation(it);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
`})}),`
`,e.jsx(i.p,{children:"Oppure all'interno dei propri componenti:"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-jsx",children:`//MyPassword.jsx

import React, { useEffect, useState } from 'react';
import { registerTranslation } from '@italia/dev-kit-italia/elements.js';

const it = {
  $code: 'it',
  $name: 'Italiano',
  $dir: 'ltr',
  showHidePassword: 'Mostra/Nascondi Password (in CUSTOM COMPONENT).',
};

const MyPassword = () => {
  const [translationsLoaded, setTranslationsLoaded] = useState(false);
  useEffect(() => {
    registerTranslation(it);
    setTranslationsLoaded(true);
  }, []);

  return translationsLoaded ? (
    <it-input
      id="field-password-strength-example"
      type="password"
      name="field-password-strength-example"
      support-text="Inserisci almeno 8 caratteri e alcuni caratteri speciali."
      strength-meter={true}
      minlength="8"
      suggestions={true}
    >
      <span slot="label">Campo password</span>
    </it-input>
  ) : (
    <></>
  );
};

export default MyPassword;
`})})]})}function m(t={}){const{wrapper:i}={...a(),...t.components};return i?e.jsx(i,{...t,children:e.jsx(n,{...t})}):n(t)}export{m as default,r as path};

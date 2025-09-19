import{j as n,M as a}from"./index-a6WM3-ks.js";import{useMDXComponents as s}from"./index-C1EbfRbw.js";import"./iframe-BJMmF07V.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";function i(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(a,{title:"Frameworks/React"}),`
`,n.jsx(e.h1,{id:"react",children:"React"}),`
`,n.jsx("div",{class:"callout callout-warning",children:n.jsxs("div",{class:"callout-inner",children:[n.jsx("div",{class:"callout-title",children:n.jsx("span",{class:"text",children:"Attenzione"})}),n.jsx("p",{children:n.jsxs(e.p,{children:[`Per il funzionamento corretto dei web components in React, è necessario avere una versione
`,n.jsx("strong",{children:"React >= 19.0.0"}),"."]})})]})}),`
`,n.jsx(e.h2,{id:"internazionalizzazione",children:"Internazionalizzazione"}),`
`,n.jsxs(e.p,{children:["Per gestire l'internazionalizzazione in una applicazione React, è necessario importare ",n.jsx(e.code,{children:"registerTranslations"}),` e registrare le traduzioni.
Questo può essere fatto nella root dell'applicazione, se le traduzioni sono centralizzate in un unico punto:`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { registerTranslation } from '@italia/dev-kit-italia/elements.js';

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
`,n.jsx(e.p,{children:"Oppure all'interno dei propri componenti:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`//MyPassword.jsx

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
      label="Campo password"
      type="password"
      name="field-password-strength-example"
      support-text="Inserisci almeno 8 caratteri e alcuni caratteri speciali."
      strength-meter={true}
      minlength="8"
      suggestions={true}
    ></it-input>
  ) : (
    <></>
  );
};

export default MyPassword;
`})})]})}function m(t={}){const{wrapper:e}={...s(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(i,{...t})}):i(t)}export{m as default};

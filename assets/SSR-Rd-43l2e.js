import{j as e,M as o}from"./blocks-DGm5YkTy.js";import{useMDXComponents as l}from"./index-DbevRHTU.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-Ug63oIzY.js";var s={GH_PAGES_PATH:"https://design-web-components.vercel.app"};const r=s.GH_PAGES_PATH+"/next-app/";function t(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Framework/SSR"}),`
`,`
`,e.jsx(n.h1,{id:"ssr-server-side-rendering",children:"SSR (Server-Side Rendering)"}),`
`,e.jsxs(n.p,{children:["I pattern di importazione mostrati nelle altre pagine di questa sezione (",e.jsx(n.code,{children:"import '@italia/dev-kit-italia/elements.js'"})," nel punto di ingresso) assumono un contesto ",e.jsx(n.strong,{children:"client-only"}),", cioè un'applicazione senza SSR. In un'app con SSR abilitato — Next.js App Router, SvelteKit, Nuxt, Angular SSR — quello stesso import va sostituito con uno dei pattern descritti in questa pagina. Vedi ",e.jsx(n.a,{href:"https://github.com/italia/dev-kit-italia/issues/360",rel:"nofollow",children:"issue #360"}),"."]}),`
`,e.jsx("div",{class:"callout callout-warning",children:e.jsxs("div",{class:"callout-inner",children:[e.jsx("div",{class:"callout-title",children:e.jsx("span",{class:"text",children:"Attenzione"})}),e.jsx("p",{children:e.jsxs(n.p,{children:["Lit estende ",e.jsx("code",{children:"HTMLElement"})," al caricamento del modulo. In Node ",e.jsx("code",{children:"HTMLElement"})," non esiste, quindi importare ",e.jsx("code",{children:"elements.js"})," a livello di modulo in un ambiente SSR causa un errore (tipicamente ",e.jsx("code",{children:"HTMLElement is not defined"}),`, a volte un hydration mismatch a seconda del framework e della versione).
In React, `,e.jsx("code",{children:"'use client'"})," non basta a evitare il problema: protegge il componente dall'essere reso lato server, ma non impedisce che gli import a livello di modulo vengano comunque valutati server-side."]})})]})}),`
`,e.jsx(n.h2,{id:"due-livelli-oggi",children:"Due livelli, oggi"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Evitare il crash"})," — il kit resta client-only: il server non genera il markup dei componenti, ma l'app non crasha. Non è SSR, ma è un punto di partenza sicuro."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"HTML-first + hydration"})," — il server genera comunque il tag custom element con il contenuto ",e.jsx(n.strong,{children:"slottato"})," nell'HTML, grazie all'approccio HTML-first già seguito dal kit. Il contenuto è visibile e indicizzabile anche prima che il componente venga idratato lato client. È il livello raggiungibile oggi con le patch di importazione qui sotto, ",e.jsx(n.strong,{children:"a condizione che il markup nello slot sia statico"})," e già presente nel render server-side — se viene popolato dinamicamente via JS dopo l'hydration, si ricade al livello precedente."]}),`
`]}),`
`,e.jsxs(n.p,{children:["Un vero SSR con Declarative Shadow DOM (markup interno dei componenti generato dal server, tramite ",e.jsx(n.code,{children:"@lit-labs/ssr"}),") è in valutazione ma richiede fix lato kit non ancora completati: non è documentato qui."]}),`
`,e.jsx(n.h2,{id:"nextjs-app-router",children:"Next.js (App Router)"}),`
`,e.jsxs(n.p,{children:[e.jsx("a",{href:r,title:"Vai all'esempio di integrazione NextJS",children:"Esempio di integrazione"})," - ",e.jsx("a",{href:"https://github.com/italia/dev-kit-italia/tree/main/examples/next-app",title:"Vai al codice su GitHub",children:"Codice GitHub"})]}),`
`,e.jsx("div",{class:"callout callout-warning",children:e.jsxs("div",{class:"callout-inner",children:[e.jsx("div",{class:"callout-title",children:e.jsx("span",{class:"text",children:"Attenzione"})}),e.jsx("p",{children:e.jsxs(n.p,{children:["Con Next.js 16 il bundler di default è Turbopack, il cui parser CSS attualmente rifiuta con un errore bloccante una regola malformata presente in ",e.jsx("code",{children:"styles.css"})," (ereditata da un bug di ",e.jsx("code",{children:"bootstrap-italia"}),": ",e.jsx("code",{children:"var(-bsi-spacing-inset-m)"}),", manca un trattino). In attesa della correzione a monte, usa webpack con ",e.jsx("code",{children:"next dev --webpack"})," e ",e.jsx("code",{children:"next build --webpack"}),": il suo parser CSS tollera la regola."]})})]})}),`
`,e.jsxs(n.p,{children:["Isola l'import di ",e.jsx(n.code,{children:"elements.js"})," in un componente client, differendolo a dopo il mount, e lascia il markup (inclusi gli slot) statico nel JSX così che il server lo generi comunque:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`// src/components/ItButton.jsx
'use client';

import { useEffect } from 'react';

export default function ItButton({ children, ...props }) {
  useEffect(() => {
    import('@italia/dev-kit-italia/elements.js');
  }, []);

  return <it-button {...props}>{children}</it-button>;
}
`})}),`
`,e.jsxs(n.p,{children:["Se invece il componente non ha contenuto slottato utile a livello server (es. logica interamente client-side), è preferibile escluderlo del tutto dal render server con ",e.jsx(n.code,{children:"next/dynamic"})," e ",e.jsx(n.code,{children:"ssr: false"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import dynamic from 'next/dynamic';

const ItButton = dynamic(() => import('./ItButton'), { ssr: false });
`})}),`
`,e.jsx(n.p,{children:"Infine, aggiungi le type declarations se necessario:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`// src/types/web-components.d.ts
declare namespace JSX {
  interface IntrinsicElements {
    'my-web-component': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & { value?: string },
      HTMLElement
    >
  }
}
`})}),`
`,e.jsx(n.h2,{id:"sveltekit",children:"SvelteKit"}),`
`,e.jsxs(n.p,{children:["Stesso principio, con ",e.jsx(n.code,{children:"onMount"})," al posto di ",e.jsx(n.code,{children:"useEffect"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-svelte",children:`<script>
  import { onMount } from 'svelte';

  onMount(async () => {
    await import('@italia/dev-kit-italia/elements.js');
  });
<\/script>

<it-button>Cliccami</it-button>
`})}),`
`,e.jsx(n.h2,{id:"altri-framework-ssr-nuxt-angular-ssr-remix-",children:"Altri framework SSR (Nuxt, Angular SSR, Remix, ...)"}),`
`,e.jsxs(n.p,{children:["Il principio è lo stesso ovunque: registra i componenti in un hook lato client (",e.jsx(n.code,{children:"onMounted"})," in Nuxt, un guard su ",e.jsx(n.code,{children:"isPlatformBrowser"})," o ",e.jsx(n.code,{children:"afterNextRender"})," in Angular SSR, ",e.jsx(n.code,{children:"useEffect"}),"/",e.jsx(n.code,{children:"ClientOnly"})," in Remix), e mantieni il markup con gli slot statico nel template così che il server lo emetta comunque."]}),`
`,e.jsx(n.h2,{id:"internazionalizzazione",children:"Internazionalizzazione"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"registerTranslation"})," accede anch'esso ad API globali del browser: registra le traduzioni nello stesso hook client-only usato per l'import di ",e.jsx(n.code,{children:"elements.js"}),', non a livello di modulo. Vedi la sezione "Internazionalizzazione" delle pagine ',e.jsx(n.a,{href:"/docs/framework-react--documentazione",children:"React"})," e ",e.jsx(n.a,{href:"/docs/framework-svelte--documentazione",children:"Svelte"})," per un esempio completo di questo pattern."]})]})}function p(i={}){const{wrapper:n}={...l(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{p as default,r as path};

import{j as i,M as l}from"./blocks-HeM7HRRU.js";import{useMDXComponents as s}from"./index-BNB5zOl4.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-BBsXzWsk.js";function r(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...e.components};return i.jsxs(i.Fragment,{children:[i.jsx(l,{title:"Documentazione tecnica"}),`
`,i.jsx(n.h1,{id:"documentazione-tecnica-del-progetto-dev-kit-italia",children:"Documentazione tecnica del progetto Dev Kit Italia"}),`
`,i.jsxs(n.p,{children:[`In questa pagina sono descritte le scelte tecniche e le linee guida adottate per la realizzazione della libreria
`,i.jsx(n.strong,{children:"Dev Kit Italia"})," basata su ",i.jsx(n.strong,{children:"Lit"})," e organizzata in ",i.jsx(n.strong,{children:"monorepo"}),"."]}),`
`,i.jsx(n.p,{children:`L'obiettivo è fornire una base scalabile,
manutenibile e pronta per l'espansione futura.`}),`
`,i.jsx(n.h2,{id:"stack-tecnologico",children:"Stack tecnologico"}),`
`,i.jsxs(n.ul,{children:[`
`,i.jsxs(n.li,{children:[i.jsx(n.strong,{children:"Framework:"})," ",i.jsx(n.a,{href:"https://lit.dev",rel:"nofollow",children:"Lit"})]}),`
`,i.jsxs(n.li,{children:[i.jsx(n.strong,{children:"Linguaggio:"})," TypeScript"]}),`
`,i.jsxs(n.li,{children:[i.jsx(n.strong,{children:"Struttura:"})," Monorepo (es. npm/pnpm workspaces, Nx, Turborepo)"]}),`
`,i.jsxs(n.li,{children:[i.jsx(n.strong,{children:"Strumenti di supporto:"})," ",i.jsx(n.a,{href:"https://open-wc.org",rel:"nofollow",children:"Open Web Components"})]}),`
`]}),`
`,i.jsx(n.h2,{id:"perché-open-web-components",children:"Perché Open Web Components"}),`
`,i.jsx(n.p,{children:"Open Web Components fornisce strumenti e convenzioni standardizzate per sviluppare Web Components in modo coerente, scalabile e manutenibile."}),`
`,i.jsx(n.p,{children:i.jsx(n.strong,{children:"Vantaggi principali:"})}),`
`,i.jsxs(n.ul,{children:[`
`,i.jsxs(n.li,{children:[i.jsx("strong",{children:"Avvio rapido con best practice consolidate"}),": include generatori di progetto (",i.jsx(n.code,{children:"npm @open-wc"}),`) che
integrano configurazioni moderne (es. Vite, TypeScript, testing).`]}),`
`,i.jsxs(n.li,{children:[i.jsx("strong",{children:"Testing integrato"}),": supporta ",i.jsx(n.code,{children:"@web/test-runner"}),", ",i.jsx(n.code,{children:"sinon"}),", ",i.jsx(n.code,{children:"chai"}),` e strumenti di mocking mirati per
ambienti DOM.`]}),`
`,i.jsxs(n.li,{children:[i.jsx(n.strong,{children:"Qualità del codice"}),": linting specifico per Lit (eslint-plugin-lit), configurazioni Prettier e suggerimenti per migliorare performance e accessibilità."]}),`
`,i.jsxs(n.li,{children:[i.jsx(n.strong,{children:"Supporto alla documentazione"}),": integrazione nativa con Storybook."]}),`
`,i.jsxs(n.li,{children:[i.jsx(n.strong,{children:"Ottimizzazione per la pubblicazione"}),": configurazioni pronte per bundling, tree-shaking e distribuzione su NPM via ESM."]}),`
`,i.jsxs(n.li,{children:[i.jsx(n.strong,{children:"Allineamento agli standard"}),": segue le raccomandazioni W3C e promuove l'uso di API native senza lock-in proprietari."]}),`
`,i.jsxs(n.li,{children:[i.jsx(n.strong,{children:"Adozione da parte di attori di rilievo"}),": utilizzato in progetti di produzione da organizzazioni come Adobe (Spectrum Web Components)."]}),`
`]}),`
`,i.jsx(n.h2,{id:"struttura-del-monorepo-esempio",children:"Struttura del monorepo (esempio)"}),`
`,i.jsx(n.pre,{children:i.jsx(n.code,{className:"language-bash",children:`
/web-components-monorepo
├── packages/
│   ├── card/
│   │   ├── src/
│   │   │   └── card.ts
│   │   └── package.json
│   ├── button/
│   └── ...
├── shared/
│   └── base-component/
│       └── base-component.ts
├── tsconfig.base.json
├── ...
└── README.md
`})}),`
`,i.jsx(n.h2,{id:"struttura-di-un-componente",children:"Struttura di un componente"}),`
`,i.jsx(n.p,{children:"Ogni componente:"}),`
`,i.jsxs(n.ul,{children:[`
`,i.jsxs(n.li,{children:["Utilizza i decorator ",i.jsx(n.code,{children:"@customElement"})," e ",i.jsx(n.code,{children:"@property"})," di Lit"]}),`
`,i.jsx(n.li,{children:"Include SCSS nel proprio shadow DOM"}),`
`,i.jsxs(n.li,{children:["Gestisce attributi e ",i.jsx(n.strong,{children:"slot"})]}),`
`,i.jsxs(n.li,{children:["È progettato per essere ",i.jsx(n.strong,{children:"riusabile"})," e ",i.jsx(n.strong,{children:"accessibile"})]}),`
`]}),`
`,i.jsxs(n.p,{children:[i.jsx(n.strong,{children:"Esempio:"})," ",i.jsx(n.a,{href:"https://github.com/italia/dev-kit-italia/blob/main/packages/icon/src/it-icon.ts",rel:"nofollow",children:"it-icon"})]}),`
`,i.jsx(n.p,{children:"Include:"}),`
`,i.jsxs(n.ul,{children:[`
`,i.jsxs(n.li,{children:["@property configurabili (",i.jsx(n.code,{children:"align"}),", ",i.jsx(n.code,{children:"padded"}),",...)"]}),`
`,i.jsx(n.li,{children:"Slot: per l'svg customElement"}),`
`,i.jsxs(n.li,{children:["Condizioni dinamiche con ",i.jsx(n.code,{children:"nothing"})]}),`
`]}),`
`,i.jsx(n.h2,{id:"shadow-dom-vs-light-dom",children:"Shadow DOM vs light DOM"}),`
`,i.jsx(n.h3,{id:"scelta-del-progetto",children:"Scelta del progetto"}),`
`,i.jsxs(n.p,{children:["L'implementazione di default utilizza ",i.jsx(n.strong,{children:"shadow DOM"})," per:"]}),`
`,i.jsxs(n.ul,{children:[`
`,i.jsx(n.li,{children:"Incapsulamento degli stili"}),`
`,i.jsx(n.li,{children:"Isolamento del markup interno"}),`
`]}),`
`,i.jsx(n.p,{children:`pertanto il funzionamento e il rendering dei componenti è garantito esclusivamente con
javascript abilitato (non è supportato js disabilitato).`}),`
`,i.jsx(n.p,{children:"Tuttavia, in alcuni casi specifici (soprattutto legati all'accessibilità), può essere utilizzato il light DOM."}),`
`,i.jsx(n.h3,{id:"quando-evitare-lo-shadow-dom",children:"Quando evitare lo shadow DOM"}),`
`,i.jsxs(n.p,{children:["Alcuni casi d'uso (accessibilità) possono richiedere il ",i.jsx(n.strong,{children:"light DOM"}),", ad esempio:"]}),`
`,i.jsxs(n.ul,{children:[`
`,i.jsx(n.li,{children:"Screen reader che non leggono contenuti shadow"}),`
`,i.jsx(n.li,{children:"Attributi ARIA che non si propagano correttamente"}),`
`,i.jsx(n.li,{children:"Problemi di focus management con tastiera"}),`
`]}),`
`,i.jsxs(n.p,{children:[i.jsx(n.strong,{children:"Linea guida:"}),`
Usare `,i.jsx(n.strong,{children:"shadow DOM"})," di default. Usare ",i.jsx(n.strong,{children:"light DOM"})," solo nei casi in cui ci siano impedimenti dimostrabili alla piena accessibilità con lo shadow DOM."]}),`
`,i.jsx(n.h2,{id:"migrazione-da-bootstrap-italia",children:"Migrazione da Bootstrap Italia"}),`
`,i.jsxs(n.p,{children:["I progetti che utilizzano ",i.jsx(n.strong,{children:"Bootstrap Italia"})," possono migrare progressivamente verso i nuovi ",i.jsx(n.strong,{children:"Web Components"}),", seguendo la ",i.jsx(n.a,{href:"/docs/migrazione--documentazione#migrazione-da-bootstrap-italia",children:`guida
all'upgrade dedicata`}),"."]}),`
`,i.jsx(n.p,{children:"Vantaggi della migrazione a Web Components:"}),`
`,i.jsxs(n.ul,{children:[`
`,i.jsx(n.li,{children:"Markup semplificato"}),`
`,i.jsx(n.li,{children:"Stili incapsulati"}),`
`,i.jsx(n.li,{children:"Comportamenti accessibili integrati"}),`
`,i.jsx(n.li,{children:"Maggiore riusabilità e composizione"}),`
`]}),`
`,i.jsx(n.p,{children:"I Web Components verranno usati in modalità HTML-first, sfruttando gli slot e componendo tutto il markup esternamente."}),`
`,i.jsx(n.h2,{id:"approccio-html-first",children:"Approccio HTML-first"}),`
`,i.jsx(n.p,{children:"Vantaggi:"}),`
`,i.jsxs(n.ul,{children:[`
`,i.jsx(n.li,{children:"Ottimizzazione per SEO e performance (contenuto visibile nel markup server-side)"}),`
`,i.jsx(n.li,{children:"Maggiore controllo del markup accessibile"}),`
`,i.jsx(n.li,{children:`Integrazione diretta con componenti come next/image (React) e/o altri
framework`}),`
`]}),`
`,i.jsxs("it-callout",{variant:"primary","heading-level":"h3",children:[i.jsx("span",{slot:"title",children:"NOTA"}),i.jsxs("p",{children:["Nella cartella ",i.jsx(n.code,{children:"examples"})," della root del progetto, sono forniti e documentati per gli utilizzatori finali gli snippet HTML da utilizzare sia in ambiente JS vanilla, che nei framework React, Angular, Vue, Svelte"]})]}),`
`,i.jsx(n.p,{children:"Esempio:"}),`
`,i.jsx(n.pre,{children:i.jsx(n.code,{className:"language-html",children:`<div
  className="d-flex align-items-center justify-content-center
h-100 w-100"
>
  <div className="row w-100">
    <div className="col-12 col-lg-6">
      <it-card>
        <div slot="image">
          <figure>
            <it-image
              src="https://placehold.co/400x300/0066cc/FFFFFF/?text=IMMAGINE%20
              DI%20ESEMPIO"
              alt="Descrizione immagine"
              fill
            />
          </figure>
        </div>
        <it-card-calendar date="{new" Date().toISOString()}></it-card-calendar>
        <div slot="card-body">
          <h3 slot="card-title">Sono un componente totalmente html1st</h3>
          <p>Contenuto della card in questo slot.</p>
        </div>
        <div slot="card-link">
          <a href="#">sono un link custom</a>
        </div>
      </it-card>
    </div>
  </div>
</div>
`})}),`
`,i.jsx("br",{}),`
`,i.jsx(n.h2,{id:"layout-shift-e-fouc",children:"Layout Shift e FOUC"}),`
`,i.jsxs(n.p,{children:["Il ",i.jsx(n.strong,{children:"Cumulative Layout Shift (CLS)"}),` misura quanto gli elementi visivi cambiano posizione durante il caricamento. Un'esperienza utente ottimale
richiede che tali spostamenti siano ridotti al minimo.`]}),`
`,i.jsxs(n.p,{children:["Anche il ",i.jsx(n.strong,{children:"Flash of Unstyled Content (FOUC)"}),` – quando contenuti
visibili non sono ancora correttamente stilizzati – impatta negativamente la percezione della qualità. Per ridurre
questi problemi, è importante distinguere le responsabilità tra chi sviluppa la libreria di Web Components e chi la
utilizza in un'applicazione o sito.`]}),`
`,i.jsx(n.p,{children:`Per ridurre questi problemi, è importante distinguere le responsabilità tra chi sviluppa la libreria di Web Components e
chi la utilizza in un'applicazione o sito.`}),`
`,i.jsx(n.h3,{id:"responsabilità-della-libreria",children:"Responsabilità della libreria"}),`
`,i.jsxs(n.ul,{children:[`
`,i.jsxs(n.li,{children:[`
`,i.jsxs(n.p,{children:[i.jsx(n.strong,{children:"Garantire layout prevedibili"}),":"]}),`
`,i.jsxs(n.ul,{children:[`
`,i.jsxs(n.li,{children:[`
`,i.jsxs(n.p,{children:["Definire ",i.jsx(n.strong,{children:"dimensioni"})," minime o fisse nei componenti (min-height, aspect-ratio, ecc.)"]}),`
`]}),`
`,i.jsxs(n.li,{children:[`
`,i.jsxs(n.p,{children:["Prevedere ",i.jsx(n.strong,{children:"slot con layout stabile"})," anche prima del caricamento degli stili o dell'hydration"]}),`
`]}),`
`]}),`
`]}),`
`,i.jsxs(n.li,{children:[`
`,i.jsxs(n.p,{children:["Prevedere ",i.jsx(n.strong,{children:"fallback CSS"}),":"]}),`
`,i.jsxs(n.ul,{children:[`
`,i.jsxs(n.li,{children:["Fornire stili CSS di base caricabili esternamente (via style.css) o inline (",i.jsx(n.code,{children:"<style>"})," in light DOM)"]}),`
`]}),`
`]}),`
`,i.jsxs(n.li,{children:[`
`,i.jsxs(n.p,{children:["Progettare per ",i.jsx(n.strong,{children:"HTML-first"}),":"]}),`
`,i.jsxs(n.ul,{children:[`
`,i.jsxs(n.li,{children:[`
`,i.jsxs(n.p,{children:["Permettere l'inserimento di contenuti tramite ",i.jsx(n.strong,{children:"slot"})," (e non solo proprietà dinamiche)"]}),`
`]}),`
`,i.jsxs(n.li,{children:[`
`,i.jsx(n.p,{children:"Evitare dipendenze critiche da render() di Lit per i contenuti essenziali"}),`
`]}),`
`]}),`
`]}),`
`,i.jsxs(n.li,{children:[`
`,i.jsxs(n.p,{children:["Facilitare il ",i.jsx(n.strong,{children:"preload degli stili"}),":"]}),`
`,i.jsxs(n.ul,{children:[`
`,i.jsx(n.li,{children:"Rendere disponibili gli stili critici in file separati e documentarne l'uso"}),`
`]}),`
`]}),`
`]}),`
`,i.jsx(n.h3,{id:"responsabilità-dellutilizzatore-consumatore-dei-componenti",children:"Responsabilità dell'utilizzatore (consumatore dei componenti)"}),`
`,i.jsx(n.p,{children:"Chi integra i Web Components in un'applicazione deve:"}),`
`,i.jsxs(n.ul,{children:[`
`,i.jsxs(n.li,{children:[`
`,i.jsxs(n.p,{children:["Adottare un ",i.jsx(n.strong,{children:"approccio HTML-first"}),":"]}),`
`,i.jsxs(n.ul,{children:[`
`,i.jsxs(n.li,{children:[`
`,i.jsx(n.p,{children:"Usare il markup completo (come da documentazione) e contenuti slot nel primo render server-side"}),`
`]}),`
`,i.jsxs(n.li,{children:[`
`,i.jsx(n.p,{children:"Evitare di popolare dinamicamente gli slot via JS dopo l'hydration HTML"}),`
`]}),`
`]}),`
`]}),`
`,i.jsxs(n.li,{children:[`
`,i.jsxs(n.p,{children:["Caricare gli ",i.jsx(n.strong,{children:"stili critici"})," anticipatamente:"]}),`
`,i.jsxs(n.ul,{children:[`
`,i.jsxs(n.li,{children:["Utilizzare ",i.jsx(n.code,{children:'<link rel="preload">'})," o tecniche come ",i.jsx(n.code,{children:"vite-plugin-critical"})," per includere gli stili nel primo paint"]}),`
`]}),`
`]}),`
`,i.jsxs(n.li,{children:[`
`,i.jsxs(n.p,{children:["Usare ",i.jsx(n.strong,{children:"skeletons o placeholder"})," coerenti:"]}),`
`,i.jsxs(n.ul,{children:[`
`,i.jsx(n.li,{children:'Inserire contenuti temporanei che rispettino la dimensione finale per evitare "salti" visivi'}),`
`]}),`
`]}),`
`,i.jsxs(n.li,{children:[`
`,i.jsxs(n.p,{children:["Garantire per quanto possibile ",i.jsx(n.strong,{children:"coerenza"})," tra layout iniziale e finale:"]}),`
`,i.jsxs(n.ul,{children:[`
`,i.jsxs(n.li,{children:[`
`,i.jsx(n.p,{children:"Assicurarsi che la struttura del DOM server-side corrisponda a quella post-hydration, assicurandosi di seguire la documentazione fornita dal kit."}),`
`]}),`
`,i.jsxs(n.li,{children:[`
`,i.jsxs(n.p,{children:["Comunicare all'utente finale con un apposito tag ",i.jsx(n.code,{children:"<noscript>"})," la necessità di abilitare Javascript per poter fruire di tutte le funzionalità del sito / applicazione. Es."]}),`
`,i.jsx(n.pre,{children:i.jsx(n.code,{className:"language-html",children:`<noscript>
  <div
    style="background-color: #ffdddd; color: #a00; padding: 1em; text-align:
center; font-family: sans-serif;"
  >
    ⚠ JavaScript è disabilitato. Per utilizzare tutte le funzionalità di questo sito, abilita JavaScript nelle
    impostazioni del tuo browser.
  </div>
</noscript>
`})}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,i.jsx(n.h3,{id:"nota-finale",children:"Nota finale"}),`
`,i.jsx(n.p,{children:"L'efficacia del fallback styling è strettamente legata all'approccio HTML-first."}),`
`,i.jsx(n.p,{children:`Se i Web Components sono utilizzati con contenuto dinamico popolato dopo il caricamento, si
introduce un rischio significativo di layout shift.`}),`
`,i.jsx(n.p,{children:`Viceversa, un uso coerente di slot e markup completo nel primo render HTML riduce drasticamente il CLS e migliora la stabilità
visiva.`})]})}function d(e={}){const{wrapper:n}={...s(),...e.components};return n?i.jsx(n,{...e,children:i.jsx(r,{...e})}):r(e)}export{d as default};

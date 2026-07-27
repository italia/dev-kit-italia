import{j as e,M as l,C as o,a}from"./blocks-BOPJQLxO.js";import{useMDXComponents as t}from"./index-B0YyzAz0.js";import{S as c,E as r,B as d,a as p,b as u,c as h,I as x,D as j,d as m}from"./it-back-to-top.stories-B8fL75mP.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-C2GQMFKp.js";function s(n){const i={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:c}),`
`,e.jsx(i.h1,{id:"back-to-top",children:"Back to top"}),`
`,e.jsx("description",{children:"Pulsante per tornare rapidamente all'inizio di una pagina con contenuti lunghi"}),`
`,e.jsx(i.h2,{id:"cosa-fa",children:"Cosa fa"}),`
`,e.jsxs(i.p,{children:["Il componente Back to top (",e.jsx(i.code,{children:"it-back-to-top"}),") genera un pulsante scorciatoia che riporta l'utente in cima alla pagina, particolarmente utile quando ci sono contenuti molto lunghi."]}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"https://designers.italia.it/design-system/componenti/back-to-top/",rel:"nofollow",children:"Approfondisci come e quando usare il componente Back to Top"})}),`
`,e.jsx(i.h2,{id:"anteprima-e-attributi-del-componente",children:"Anteprima e attributi del componente"}),`
`,e.jsxs(i.p,{children:["Modifica gli attributi nella tabella per personalizzare in tempo reale l'aspetto e il comportamento del componente. Per vedere come cambia il codice, clicca su ",e.jsx(i.strong,{children:"Show code"}),"."]}),`
`,e.jsxs(i.p,{children:["Nota: negli esempi sottostanti il valore di ",e.jsx(i.code,{children:"scroll-limit"})," è impostato a ",e.jsx(i.code,{children:"0"})," per permettere di testarne il funzionamento."]}),`
`,e.jsx("it-back-to-top",{}),`
`,e.jsx(o,{of:r}),`
`,e.jsx(a,{of:r}),`
`,e.jsx(i.h2,{id:"indicazioni-generali",children:"Indicazioni generali"}),`
`,e.jsx(i.p,{children:`Per vedere il componente in azione, scrolla verso il basso la pagina su cui è stato implementato. Il pulsante "Torna su" apparirà nell'angolo in basso a destra.
Puoi testarlo anche in questa pagina.`}),`
`,e.jsx(i.h2,{id:"accessibilità",children:"Accessibilità"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[`
`,e.jsxs(i.p,{children:["Imposta sempre l'attributo ",e.jsx(i.code,{children:"border"})," per garantire una maggiore visibilità del pulsante su sfondi di colori simili al pulsante stesso. Puoi cambiare il colore del bordo tramite l'attributo ",e.jsx(i.code,{children:"border-color"}),"."]}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsxs(i.p,{children:["Su pagine con tema scuro o con molte sezioni a sfondo scuro, usa l'attributo ",e.jsx(i.code,{children:"inverse"})," per garantire il contrasto minimo richiesto dalle linee guida WCAG 2.1."]}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsxs(i.p,{children:["Fornisci un'etichetta accessibile al pulsante tramite l'attributo ",e.jsx(i.code,{children:"it-aria-label"}),", in modo che gli utenti di tecnologie assistive possano comprenderne la funzione."]}),`
`]}),`
`]}),`
`,e.jsx(i.h4,{id:"note-sugli-attributi-aria",children:"Note sugli attributi ARIA"}),`
`,e.jsxs(i.p,{children:["Tutti gli attributi ",e.jsx(i.code,{children:"it-aria-*"})," passati a ",e.jsx(i.code,{children:"<it-back-to-top>"})," vengono applicati al pulsante generato come attributi ",e.jsx(i.code,{children:"aria-*"}),`.
Anche l'attributo `,e.jsx(i.code,{children:"it-role"})," viene passato al pulsante come attributo ",e.jsx(i.code,{children:"role"}),"."]}),`
`,e.jsx(i.h2,{id:"versione-con-bordo",children:"Versione con bordo"}),`
`,e.jsxs(i.p,{children:["Aggiungi l'attributo ",e.jsx(i.code,{children:"border"})," per ottenere un pulsante con un bordo a contrasto, utile a garantirne l'accessibilità su sfondi di colori / tonalità simili al pulsante."]}),`
`,e.jsx(i.p,{children:"Nota: nell'esempio sottostante è stato aggiunto volutamente uno sfondo dello stesso colore del pulsante, per mettere in risalto l'utilità del bordo."}),`
`,e.jsx(o,{of:d}),`
`,e.jsxs(i.p,{children:["Puoi anche modificare il colore del bordo usando l'apposito attributo ",e.jsx(i.code,{children:"border-color"}),":"]}),`
`,e.jsx(o,{of:p}),`
`,e.jsx(i.h2,{id:"versione-ridotta",children:"Versione ridotta"}),`
`,e.jsxs(i.p,{children:["Aggiungi l'attributo ",e.jsx(i.code,{children:"small"})," per ottenere un pulsante di dimensioni ridotte."]}),`
`,e.jsx(o,{of:u}),`
`,e.jsx(i.h2,{id:"versione-con-ombra",children:"Versione con ombra"}),`
`,e.jsxs(i.p,{children:["Aggiungi l'attributo ",e.jsx(i.code,{children:"shadow"})," per aggiungere un'ombra all'hover."]}),`
`,e.jsx(o,{of:h}),`
`,e.jsx(i.h2,{id:"colore-dellicona",children:"Colore dell'icona"}),`
`,e.jsxs(i.p,{children:["Attraverso l'attributo ",e.jsx(i.code,{children:"icon-color"})," puoi modificare il colore dell'icona."]}),`
`,e.jsx(o,{of:x}),`
`,e.jsx(i.h2,{id:"versione-su-sfondo-scuro",children:"Versione su sfondo scuro"}),`
`,e.jsxs(i.p,{children:["Aggiungi l'attributo ",e.jsx(i.code,{children:"inverse"})," per adattare il pulsante a sfondi scuri."]}),`
`,e.jsxs(i.p,{children:["Tramite l'attributo ",e.jsx(i.code,{children:"icon-color"})," puoi anche personalizzare il colore dell'icona."]}),`
`,e.jsxs(i.p,{children:["Tramite l'attributo ",e.jsx(i.code,{children:"border-color"})," puoi anche personalizzare il colore del bordo. Se il pulsante è ",e.jsx(i.code,{children:"inverse,"})," il colore di default del bordo è ",e.jsx(i.code,{children:"primary"}),"."]}),`
`,e.jsx(o,{of:j}),`
`,e.jsx(i.h2,{id:"versione-con-ombra-su-sfondo-scuro",children:"Versione con ombra su sfondo scuro"}),`
`,e.jsxs(i.p,{children:["Combina gli attributi ",e.jsx(i.code,{children:"inverse"})," e ",e.jsx(i.code,{children:"shadow"})," per adattare il pulsante a sfondi scuri e aggiungere l'ombra all'hover."]}),`
`,e.jsx(o,{of:m}),`
`,e.jsx(i.h2,{id:"personalizzazone-degli-stili",children:"Personalizzazone degli stili"}),`
`,e.jsxs(i.p,{children:["Per personalizzare gli stili del pulsante, usa il selettore ",e.jsx(i.code,{children:"::part"})," passando il valore ",e.jsx(i.code,{children:"button"}),"."]}),`
`,e.jsxs(i.p,{children:["Per personalizzare l'icona, usa il selettore ",e.jsx(i.code,{children:"::part"})," con il valore ",e.jsx(i.code,{children:"icon"}),"."]}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"/docs/personalizzazione-degli-stili--documentazione#selettore-part",children:"Vai alla guida sul selettore part"})})]})}function A(n={}){const{wrapper:i}={...t(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(s,{...n})}):s(n)}export{A as default};

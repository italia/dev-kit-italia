import{j as i,M as s,C as o,a as l,D as c}from"./blocks-DK8AJ4SG.js";import{useMDXComponents as a}from"./index-BmLyTK7M.js";import{R as d,E as r,V as p,S as u,I as h,O as m,a as x,M as j}from"./it-rating.stories-p-suIL7p.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-DO9HwPeR.js";import"./formControlReusableStories-sUXWDcvs.js";function t(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...a(),...n.components};return i.jsxs(i.Fragment,{children:[i.jsx(s,{of:d}),`
`,i.jsx(e.h1,{id:"rating",children:"Rating"}),`
`,i.jsx("description",{children:"Scala di valori grafica a stelline per esprimere una valutazione su un servizio o un contenuto"}),`
`,i.jsx(e.h2,{id:"cosa-fa",children:"Cosa fa"}),`
`,i.jsx(e.p,{children:"Il componente Rating può essere utilizzato in diverse situazioni, come ad esempio quando si desidera raccogliere il parere delle persone su un prodotto, un servizio digitale o la chiarezza informativa di una pagina."}),`
`,i.jsx(e.p,{children:"Consente alle persone di esprimere la loro opinione in modo semplice e intuitivo."}),`
`,i.jsx(e.p,{children:i.jsx(e.a,{href:"https://designers.italia.it/design-system/componenti/rating/",rel:"nofollow",children:"Approfondisci quando e come usare il componente Rating"})}),`
`,i.jsx(e.h2,{id:"anteprima-del-componente",children:"Anteprima del componente"}),`
`,i.jsx(o,{of:r}),`
`,i.jsx(e.p,{children:"Questi attributi definiscono l’aspetto, il comportamento e il contenuto del componente. Puoi modificare questi valori per personalizzare il componente. L’anteprima e il codice si aggiornano in tempo reale, così puoi vedere subito il risultato delle tue modifiche."}),`
`,i.jsx(l,{of:r}),`
`,i.jsx(e.h2,{id:"accessibilità",children:"Accessibilità"}),`
`,i.jsxs(e.p,{children:["Il rating implementa le specifiche ARIA ",i.jsx(e.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/radio/",rel:"nofollow",children:"WAI-ARIA Authoring Practices 1.2 Radio Group pattern"})," per garantire piena accessibilità:"]}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsxs(e.li,{children:["Navigazione da tastiera con tasti freccia per spostarsi tra gli elementi, ",i.jsx(e.code,{children:"Home"}),"/",i.jsx(e.code,{children:"End"})," per andare rispettivamente alla prima/ultima opzione"]}),`
`,i.jsxs(e.li,{children:["Supporto per ",i.jsx(e.code,{children:"Space"})," ed ",i.jsx(e.code,{children:"Enter"})," per selezionare il valore corrente."]}),`
`,i.jsx(e.li,{children:"Attributi ARIA appropriati per comunicare lo stato e il ruolo del componente agli screen reader"}),`
`,i.jsx(e.li,{children:"Gestone del focus attraverso roving tabindex per una migliore esperienza di navigazione tramite tastiera."}),`
`]}),`
`,i.jsx(e.p,{children:i.jsxs(e.strong,{children:["È obbligatorio fornire una label per ogni ",i.jsx(e.code,{children:"<it-rating-item>"})," e una label per il gruppo ",i.jsx(e.code,{children:"<it-rating>"}),", tramite i rispettivi slot ",i.jsx(e.code,{children:"label"}),"."]})}),`
`,i.jsx(e.h2,{id:"con-valore-preimpostato",children:"Con valore preimpostato"}),`
`,i.jsxs(e.p,{children:["Puoi inizializzare il componente con un valore preimpostato utilizzando l'attributo ",i.jsx(e.code,{children:"value"}),"."]}),`
`,i.jsx(o,{of:p}),`
`,i.jsx(e.h2,{id:"sola-lettura",children:"Sola lettura"}),`
`,i.jsxs(e.p,{children:["Puoi impostare il componente in modalità sola lettura utilizzando l'attributo ",i.jsx(e.code,{children:"read-only"}),". In questa modalità, il rating non è interattivo e serve solo per visualizzare una valutazione esistente."]}),`
`,i.jsx(o,{of:u}),`
`,i.jsx(e.h2,{id:"icone-personalizzate",children:"Icone personalizzate"}),`
`,i.jsxs(e.p,{children:["Puoi personalizzare l'icona utilizzata per il rating tramite l'attributo ",i.jsx(e.code,{children:"icon"})," su ",i.jsx(e.code,{children:"<it-rating>"}),"."]}),`
`,i.jsxs(e.p,{children:["Di default viene utilizzata l'icona ",i.jsx(e.code,{children:"it-star-full"}),", ma puoi usare qualsiasi ",i.jsx(e.a,{href:"?path=/story/componenti-icon--icone-disponibili",children:"icona disponibile nel design system"}),"."]}),`
`,i.jsx(o,{of:h}),`
`,i.jsx(e.h2,{id:"obbligatorio",children:"Obbligatorio"}),`
`,i.jsxs(e.p,{children:["Puoi impostare il componente come obbligatorio utilizzando l'attributo ",i.jsx(e.code,{children:"required"}),". L'utente dovrà selezionare una valutazione prima di poter inviare il modulo."]}),`
`,i.jsx(o,{of:m}),`
`,i.jsx(e.h2,{id:"integrazione-con-form",children:"Integrazione con form"}),`
`,i.jsx(e.p,{children:"Esempio completo di integrazone del componente in un form."}),`
`,i.jsx(o,{of:x}),`
`,i.jsx(e.h2,{id:"personalizzazione-degli-stili",children:"Personalizzazione degli stili"}),`
`,i.jsxs(e.p,{children:["Per la personalizzazione degli stili del componente ",i.jsx(e.code,{children:"<it-rating-item>"})," si può usare il selettore ",i.jsx(e.code,{children:"::part"})," con i seguenti valori:"]}),`
`,i.jsx(e.h3,{id:"it-rating-item",children:"it-rating-item"}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:"input"}),": il contenitore dell'input nascosto"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:"star"}),": l'icona (stella o icona personalizzata)"]}),`
`]}),`
`,i.jsxs(e.p,{children:[i.jsx(e.a,{href:"/docs/personalizzazione-degli-stili--documentazione#selettore-part",children:"Vedi qui la guida dettagliata"}),"."]}),`
`,i.jsx(e.h2,{id:"proprietà-metodi-ed-eventi-accessibili-via-js",children:"Proprietà, Metodi, ed Eventi accessibili via js"}),`
`,i.jsx(c,{of:j})]})}function I(n={}){const{wrapper:e}={...a(),...n.components};return e?i.jsx(e,{...n,children:i.jsx(t,{...n})}):t(n)}export{I as default};

import{j as e,M as r,C as n,a as c}from"./blocks-AWYFoa02.js";import{useMDXComponents as a}from"./index-DFJevQmi.js";import{S as t,E as s,V as d,a as p,b as h,c as x,d as m,e as j,I as u}from"./it-icon.stories-CQm74TGY.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-BAOCzTeu.js";function l(o){const i={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...a(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:t}),`
`,e.jsx(i.h1,{id:"icon",children:"Icon"}),`
`,e.jsx("description",{children:"Componente per l'utilizzo di icone del Design System e/o icone personalizzate"}),`
`,e.jsx(i.h2,{id:"cosa-fa",children:"Cosa fa"}),`
`,e.jsx(i.p,{children:"Il componente Icon ti consente di visualizzare una delle icone SVG disponibili nel Design System, usare un'icona SVG proprietaria o un'icona SVG tramite URL."}),`
`,e.jsx(i.p,{children:"Tutte le icone vengono caricate unicamente in modalità asincrona."}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"https://designers.italia.it/design-system/fondamenti/icone/",rel:"nofollow",children:"Approfondisci come e quando usare le icone nel Design System"})}),`
`,e.jsx(i.h2,{id:"anteprima-e-attributi-del-componente",children:"Anteprima e attributi del componente"}),`
`,e.jsxs(i.p,{children:["Modifica gli attributi nella tabella per personalizzare in tempo reale l'aspetto e il comportamento del componente. Per vedere come cambia il codice, clicca su ",e.jsx(i.strong,{children:"Show code"}),"."]}),`
`,e.jsx(n,{of:s}),`
`,e.jsx(c,{of:s}),`
`,e.jsx(i.h2,{id:"accessibilità",children:"Accessibilità"}),`
`,e.jsxs(i.p,{children:["Di default, le icone sono considerate decorative: il componente aggiunge automaticamente ",e.jsx(i.code,{children:'role="presentation"'})," e ",e.jsx(i.code,{children:'aria-hidden="true"'})," all'elemento SVG, così da essere ignorate dalle tecnologie assistive."]}),`
`,e.jsxs(i.p,{children:["Se invece viene valorizzato l'attributo ",e.jsx(i.code,{children:"label"}),", il componente ",e.jsx(i.code,{children:"<it-icon>"})," inserisce un tag ",e.jsx(i.code,{children:"<title>"})," all'interno dell'SVG, corredato da relativo ",e.jsx(i.code,{children:"aria-labelledBy"}),", e imposta ",e.jsx(i.code,{children:'role="img"'})," per supportare tecnologie assistive come gli screen reader."]}),`
`,e.jsx(i.h2,{id:"varianti-di-colore",children:"Varianti di colore"}),`
`,e.jsxs(i.p,{children:["Utilizza l'attributo ",e.jsx(i.code,{children:"color"})," per cambiare il colore dell'icona."]}),`
`,e.jsx(n,{of:d}),`
`,e.jsx(i.h2,{id:"varianti-di-dimensione",children:"Varianti di dimensione"}),`
`,e.jsxs(i.p,{children:["Il componente ",e.jsx(i.code,{children:"<it-icon>"})," supporta quattro dimensioni predefinite: ",e.jsx(i.code,{children:"xs"}),", ",e.jsx(i.code,{children:"sm"}),", ",e.jsx(i.code,{children:"lg"}),", ",e.jsx(i.code,{children:"xl"}),". Utilizza l'attributo ",e.jsx(i.code,{children:"size"})," per impostare la dimensione desiderata."]}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(i.h2,{id:"varianti-di-allineamento",children:"Varianti di allineamento"}),`
`,e.jsxs(i.p,{children:["Puoi usare l'attributo ",e.jsx(i.code,{children:"align"})," per posizionare le icone all'interno di un elemento. I valori disponibili sono: ",e.jsx(i.code,{children:"top"}),", ",e.jsx(i.code,{children:"middle"}),", ",e.jsx(i.code,{children:"bottom"}),"."]}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(i.h2,{id:"spaziatura",children:"Spaziatura"}),`
`,e.jsxs(i.p,{children:["Puoi applicare l'attributo ",e.jsx(i.code,{children:"padded"})," all'icona per creare attorno all'icona un padding proporzionale alla dimensione dell'icona stessa."]}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(i.h2,{id:"svg-personalizzato",children:"SVG personalizzato"}),`
`,e.jsxs(i.p,{children:["Puoi usare ",e.jsx(i.code,{children:"<it-icon>"})," come contenitore per un qualsiasi SVG personalizzato, semplicemente inserendolo nello slot:"]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<it-icon size='sm' label='Icona utente'>
  <svg viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" fill="red"></circle>
  </svg>
</it-icon>
`})}),`
`,e.jsx(i.p,{children:"In questo caso:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"il componente si occupa comunque di gestire l'accessibilità"}),`
`,e.jsxs(i.li,{children:["vengono rimossi eventuali ",e.jsx(i.code,{children:"<title>"})," duplicati"]}),`
`,e.jsxs(i.li,{children:["viene forzato ",e.jsx(i.code,{children:'aria-hidden="true"'})," se necessario"]}),`
`]}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(i.h2,{id:"svg-esterno",children:"SVG esterno"}),`
`,e.jsxs(i.p,{children:["È possibile utilizzare un'immagine esterna come icona, utilizzando l'URL dell'immagine nell'attributo ",e.jsx(i.code,{children:"src"})," del componente."]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<it-icon src="https://…/logo.svg" label="Logo"></it-icon>
`})}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(i.h2,{id:"icone-disponibili",children:"Icone disponibili"}),`
`,e.jsxs(i.p,{children:["Questa sezione mostra tutte le icone SVG disponibili nel Design System. Puoi cercare un'icona per nome e cliccarla per copiarne il nome identificativo da usare nell'attributo ",e.jsx(i.code,{children:"name"}),"."]}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(i.h2,{id:"personalizzazione-degli-stili",children:"Personalizzazione degli stili"}),`
`,e.jsxs(i.p,{children:["Per la personalizzazione degli stili puoi usare il selettore ",e.jsx(i.code,{children:"::part"})," dedicato passando il valore ",e.jsx(i.code,{children:"icon"}),"."]}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"/docs/personalizzazione-degli-stili--documentazione#selettore-part",children:"Vai alla guida sul selettore part"})})]})}function S(o={}){const{wrapper:i}={...a(),...o.components};return i?e.jsx(i,{...o,children:e.jsx(l,{...o})}):l(o)}export{S as default};

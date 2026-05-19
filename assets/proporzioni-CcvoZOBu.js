import{j as e,M as a,C as o}from"./blocks-kXjNyv9H.js";import{useMDXComponents as s}from"./index-5OW0b18u.js";import{S as l,E as c,V as t,P as d,a as p}from"./proporzioni.stories-ClexEXTv.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-C1Ia5SDB.js";import"./organizzare-gli-spazi.helpers-CrIQdEvL.js";function r(n){const i={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:l}),`
`,e.jsx(i.h1,{id:"proporzioni",children:"Proporzioni"}),`
`,e.jsxs(i.p,{children:["Utilizza queste classi helper per gestire le proporzioni di contenuti esterni come ",e.jsx(i.code,{children:"<iframe>"}),", ",e.jsx(i.code,{children:"<embed>"}),", ",e.jsx(i.code,{children:"<video>"})," e ",e.jsx(i.code,{children:"<object>"}),". Queste classi possono inoltre essere utilizzate per ridimensionare qualsiasi elemento HTML standard come ",e.jsx(i.code,{children:"<div>"})," o ",e.jsx(i.code,{children:"<img>"}),". Gli stili vengono applicati dall'elemento contenitore ",e.jsx(i.code,{children:".ratio"})," all'elemento contenuto."]}),`
`,e.jsxs(i.p,{children:["Le proporzioni predefinite sono dichiarate in una mappa Sass ed incluse in ogni classe con una variabile CSS, la quale permette di generare ",e.jsx(i.a,{href:"#proporzioni-custom",children:"proporzioni custom"}),"."]}),`
`,e.jsxs(i.blockquote,{children:[`
`,e.jsx(i.p,{children:e.jsx(i.strong,{children:"Attenzione"})}),`
`,e.jsx(i.h5,{id:"nota",children:"Nota"}),`
`,e.jsx(i.p,{children:"Le seguenti classi utilizzate negli esempi servono unicamente per gli stessi e vanno ignorate:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"ratio-example"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"ratio-example-breakpoint"})}),`
`]}),`
`]}),`
`,e.jsxs(i.p,{children:[e.jsx(i.strong,{children:"Pro-Tip!"})," Non hai bisogno di includere l'attributo ",e.jsx(i.code,{children:'frameborder="0"'})," nei tuoi ",e.jsx(i.code,{children:"<iframe>"}),`, questo viene automaticamente
sovrascritto.`]}),`
`,e.jsx(i.h2,{id:"esempio",children:"Esempio"}),`
`,e.jsxs(i.p,{children:["Estendi ogni oggetto, ad esempio un ",e.jsx(i.code,{children:"<iframe>"}),", aggiungendo al suo contenitore la classe ",e.jsx(i.code,{children:".ratio"}),` e le proporzioni
richieste. L'elemento contenuto viene automaticamente ridimensionato grazie al selettore universale `,e.jsx(i.code,{children:"ratio > *"}),"."]}),`
`,e.jsx(o,{of:c}),`
`,e.jsx(i.h2,{id:"proporzioni-predefinite",children:"Proporzioni predefinite"}),`
`,e.jsxs(i.p,{children:["Le proporzioni possono essere personalizzate con delle classi apposite.",e.jsx(i.br,{}),`
`,"Vengono fornite le seguenti proporzioni pre-impostate:"]}),`
`,e.jsx(o,{of:t}),`
`,e.jsx(i.h2,{id:"proporzioni-custom",children:"Proporzioni custom"}),`
`,e.jsxs(i.p,{children:["Ogni classe ",e.jsx(i.code,{children:".ratio-*"})," include una variabile CSS nel selettore. Puoi fare un override di questa variabile per creare una proporzione custom ",e.jsx(i.em,{children:"al volo"})," facendo un rapido calcolo."]}),`
`,e.jsxs(i.p,{children:["Ad esempio, per creare una proporzione custom 2x1, utilizza il valore ",e.jsx(i.code,{children:"--bs-aspect-ratio: 50%"})," sull'elemento ",e.jsx(i.code,{children:".ratio"}),"."]}),`
`,e.jsx(o,{of:d}),`
`,e.jsxs(i.p,{children:["Questa variabile CSS rende semplice modificare la proporzione a seconda del breakpoint. Il seguente esempio è un 4x3 inizialmente ma cambia a 2x1 al breakpoint ",e.jsx(i.code,{children:"md"}),"."]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-scss",children:`.ratio-4x3 {
  @include media-breakpoint-up(md) {
    --bs-aspect-ratio: 50%; // 2x1
  }
}
`})}),`
`,e.jsx(o,{of:p}),`
`,e.jsx(i.h2,{id:"sass-map",children:"Sass map"}),`
`,e.jsxs(i.p,{children:["All'interno del file ",e.jsx(i.code,{children:"src\\scss\\_variables.scss"})," è possibile modificare e aggiungere proporzioni predefinite. Questa è la mappa utilizzata di default. Modifica la mappa a piacimento e ricompila il CSS per utilizzarla."]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-scss",children:`$aspect-ratios: (
  '1x1': 100%,
  '4x3': calc(3 / 4 * 100%),
  '16x9': calc(9 / 16 * 100%),
  '21x9': calc(9 / 21 * 100%),
);
`})})]})}function g(n={}){const{wrapper:i}={...s(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(r,{...n})}):r(n)}export{g as default};

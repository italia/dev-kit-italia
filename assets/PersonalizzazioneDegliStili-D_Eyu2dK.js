import{j as e,M as l}from"./index-a6WM3-ks.js";import{useMDXComponents as t}from"./index-C1EbfRbw.js";import"./iframe-BJMmF07V.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";function o(n){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Personalizzazione degli stili"}),`
`,e.jsx(i.h1,{id:"personalizzazione-degli-stili-dei-componenti",children:"Personalizzazione degli stili dei componenti"}),`
`,e.jsx(i.p,{children:"Il componenti di dev-kit-italia utilizzano Shadow DOM per incapsulare internamente il contenuto HTML e proteggerne gli stili."}),`
`,e.jsx(i.h2,{id:"selettore-part",children:"Selettore ::part"}),`
`,e.jsxs(i.p,{children:["Per consentire la personalizzazione degli stili da parte degli utilizzatori, espongono l'attributo ",e.jsx(i.code,{children:"part"}),` nativo direttamente sull'elemento renderizzato.
Grazie a questo attributo, si possono applicare gli stili sull'elemento dall’esterno dello Shadow DOM usando il selettore `,e.jsx(i.code,{children:"::part()"}),". ",e.jsx(i.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/::part:",rel:"nofollow",children:"https://developer.mozilla.org/en-US/docs/Web/CSS/::part:"}),"."]}),`
`,e.jsx(i.h3,{id:"esempio",children:"Esempio"}),`
`,e.jsxs(i.p,{children:["Applichiamo all'icona creata con il componente ",e.jsx(i.code,{children:"<it-icon>"})," il colore ",e.jsx(i.code,{children:"#6c007a"})," (viola):"]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-css",children:`it-icon::part(icon) {
  width: 48px;
  height: 48px;
  fill: #6c007a;
  stroke: #000;
  stroke-width: 1px;
}
`})})]})}function h(n={}){const{wrapper:i}={...t(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(o,{...n})}):o(n)}export{h as default};

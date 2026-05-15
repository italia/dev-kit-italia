import{j as e,M as c,C as o}from"./blocks-Bjay87BK.js";import{useMDXComponents as d}from"./index-WpZ0gc8Y.js";import{S as r,C as l}from"./spaziature.stories-CJJ6unpH.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-DxWuwFk9.js";import"./organizzare-gli-spazi.helpers-DWm9bOGF.js";function s(n){const i={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...d(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:r}),`
`,e.jsx(i.h1,{id:"spaziatura",children:"Spaziatura"}),`
`,e.jsx(i.h2,{id:"come-funziona",children:"Come funziona"}),`
`,e.jsxs(i.p,{children:["Assegna con apposite classi responsive valori di ",e.jsx(i.code,{children:"margin"})," o di ",e.jsx(i.code,{children:"padding"})," agli elementi, impostando singole proprietà o coppie di proprietà in base alla direzione (",e.jsx(i.code,{children:"x"})," e ",e.jsx(i.code,{children:"y"})," per orizzontale e verticale)."]}),`
`,e.jsxs(i.p,{children:["Le dimensioni delle spaziature possono variare da ",e.jsx(i.code,{children:"4px"})," per i valori ",e.jsx(i.code,{children:"*-1"})," a ",e.jsx(i.code,{children:"48px"})," per i valori ",e.jsx(i.code,{children:"*-5"}),"."]}),`
`,e.jsx(i.h2,{id:"note",children:"Note"}),`
`,e.jsxs(i.p,{children:["Le classi applicabili a tutti i breakpoint da ",e.jsx(i.code,{children:"xs"})," to ",e.jsx(i.code,{children:"xxl"}),` non hanno alcun breakpoint nei loro nome, poiché
sono applicate da `,e.jsx(i.code,{children:"min-width: 0"})," in su, quindi non sono legate a media query specifiche."]}),`
`,e.jsxs(i.p,{children:["Le classi sono denominate utilizzando il formato ",e.jsx(i.code,{children:"{proprietà}{lato}-{dimensione}"})," per ",e.jsx(i.code,{children:"xs"}),` e
`,e.jsx(i.code,{children:"{proprietà}{lato}-{breakpoint}-{dimensione}"})," per ",e.jsx(i.code,{children:"sm"}),", ",e.jsx(i.code,{children:"md"}),", ",e.jsx(i.code,{children:"lg"}),", ",e.jsx(i.code,{children:"xl"})," e ",e.jsx(i.code,{children:"xxl"}),"."]}),`
`,e.jsxs(i.p,{children:["Dove la ",e.jsx(i.em,{children:"proprietà"})," è una tra:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"m"})," - per le classi che impostano ",e.jsx(i.code,{children:"margin"})]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"p"})," - per le classi che impostano ",e.jsx(i.code,{children:"padding"})]}),`
`]}),`
`,e.jsxs(i.p,{children:["Dove uno dei ",e.jsx(i.em,{children:"lati"})," è tra:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"t"})," - per le classi che impostano ",e.jsx(i.code,{children:"margin-top"})," o ",e.jsx(i.code,{children:"padding-top"})]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"b"})," - per le classi che impostano ",e.jsx(i.code,{children:"margin-bottom"})," o ",e.jsx(i.code,{children:"padding-bottom"})]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"s"})," - per le classi che impostano ",e.jsx(i.code,{children:"margin-left"})," o ",e.jsx(i.code,{children:"padding-left"})]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"e"})," - per le classi che impostano ",e.jsx(i.code,{children:"margin-right"})," o ",e.jsx(i.code,{children:"padding-right"})]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"x"})," - per le classi che impostano insieme ",e.jsx(i.code,{children:"*-left"})," e ",e.jsx(i.code,{children:"*-right"})]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"y"})," - per le classi che impostano insieme ",e.jsx(i.code,{children:"*-top"})," e ",e.jsx(i.code,{children:"*-bottom"})]}),`
`,e.jsxs(i.li,{children:["blank - per le classi che impostano ",e.jsx(i.code,{children:"margin"})," o ",e.jsx(i.code,{children:"padding"})," su tutti e quattro i lati dell'elemento"]}),`
`]}),`
`,e.jsxs(i.p,{children:["Dove la ",e.jsx(i.em,{children:"dimensione"})," è una tra:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"0"})," - per le classi che eliminano ",e.jsx(i.code,{children:"margin"})," o ",e.jsx(i.code,{children:"padding"})," impostandolo a ",e.jsx(i.code,{children:"0"})]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"1"})," - (di default) per le classi che impostano ",e.jsx(i.code,{children:"margin"})," o ",e.jsx(i.code,{children:"padding"})," a ",e.jsx(i.code,{children:"$spacer * .25"})]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"2"})," - (di default) per le classi che impostano ",e.jsx(i.code,{children:"margin"})," o ",e.jsx(i.code,{children:"padding"})," a ",e.jsx(i.code,{children:"$spacer * .5"})]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"3"})," - (di default) per le classi che impostano ",e.jsx(i.code,{children:"margin"})," o ",e.jsx(i.code,{children:"padding"})," a ",e.jsx(i.code,{children:"$spacer"})]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"4"})," - (di default) per le classi che impostano ",e.jsx(i.code,{children:"margin"})," o ",e.jsx(i.code,{children:"padding"})," a ",e.jsx(i.code,{children:"$spacer * 1.5"})]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"5"})," - (di default) per le classi che impostano ",e.jsx(i.code,{children:"margin"})," o ",e.jsx(i.code,{children:"padding"})," a ",e.jsx(i.code,{children:"$spacer * 3"})]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"auto"})," - per le classi che impostano ",e.jsx(i.code,{children:"margin"})," ad auto"]}),`
`]}),`
`,e.jsxs(i.p,{children:["(Puoi aggiungere dimensioni inserendo nuovi ",e.jsx(i.code,{children:"$spacers"})," nella mappa variabili di Sass.)"]}),`
`,e.jsx(i.h2,{id:"esempi",children:"Esempi"}),`
`,e.jsx(i.p,{children:"Ecco alcuni esempi di utilizzo delle classi di spaziatura:"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-scss",children:`.mt-0 {
  margin-top: 0 !important;
}

.ms-1 {
  margin-left: ($spacer * 0.25) !important;
}

.px-2 {
  padding-left: ($spacer * 0.5) !important;
  padding-right: ($spacer * 0.5) !important;
}

.p-3 {
  padding: $spacer !important;
}
`})}),`
`,e.jsx(i.h3,{id:"centratura-orizzontale",children:"Centratura orizzontale"}),`
`,e.jsxs(i.p,{children:["Per centrare orizzontalmente un elemento con una larghezza fissa e ",e.jsx(i.code,{children:"display: block"})," puoi utilizzare la classe ",e.jsx(i.code,{children:".mx-auto"})," che imposta i margini laterali ad ",e.jsx(i.code,{children:"auto"}),"."]}),`
`,e.jsx(o,{of:l})]})}function m(n={}){const{wrapper:i}={...d(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(s,{...n})}):s(n)}export{m as default};

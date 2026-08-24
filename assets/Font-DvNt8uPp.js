import{j as t,M as a}from"./blocks-D1miezzc.js";import{useMDXComponents as l}from"./index-XvL543Dm.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-BcvJloFY.js";function o(n){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(a,{title:"Font"}),`
`,t.jsx(i.h1,{id:"font",children:"Font"}),`
`,t.jsxs(i.p,{children:["È necessario anche includere i file relativi ai caratteri tipografici referenziati nel CSS della libreria. L’inclusione dei font può avvenire includendo il bundle fornito dal pacchetto ",t.jsx(i.code,{children:"@italia/dev-kit-italia"}),", oppure utilizzando CSS."]}),`
`,t.jsx(i.p,{children:"Dev Kit Italia include tre famiglie di caratteri tipografici:"}),`
`,t.jsxs(i.ul,{children:[`
`,t.jsxs(i.li,{children:[t.jsx(i.strong,{children:"Titillium"})," (Web o Sans Pro): font principale sans-serif per interfacce e testi brevi"]}),`
`,t.jsxs(i.li,{children:[t.jsx(i.strong,{children:"Lora"}),": font serif per contenuti editoriali e testi lunghi"]}),`
`,t.jsxs(i.li,{children:[t.jsx(i.strong,{children:"Roboto Mono"}),": font monospace per codice, dati tabulari e numeri"]}),`
`]}),`
`,t.jsx(i.h2,{id:"titillium-il-font-principale",children:"Titillium: il font principale"}),`
`,t.jsx(i.p,{children:"Dev Kit Italia include due varianti del carattere sans-serif Titillium con licenza aperta:"}),`
`,t.jsxs(i.ul,{children:[`
`,t.jsxs(i.li,{children:[t.jsx(i.strong,{children:"Titillium Web"}),": versione originale e default, è il carattere di riferimento del Design system .italia (",t.jsx(i.a,{href:"https://nta.accademiadiurbino.it/titillium/",rel:"nofollow",children:"storia del font Titillium e crediti"}),")."]}),`
`,t.jsxs(i.li,{children:[t.jsx(i.strong,{children:"Titillium Sans Pro"}),": evoluzione del Titillium Web con supporto linguistico esteso e scrittura matematica (",t.jsx(i.a,{href:"https://github.com/chialab/titillium_pro/tree/main",rel:"nofollow",children:"repository Titillium Sans Pro e crediti"}),")."]}),`
`]}),`
`,t.jsx(i.p,{children:"Per scegliere quale delle due varianti usare come font principale, importa uno dei due file CSS dei font disponibili nel bundle: sono equivalenti, contengono entrambi Lora e Roboto Mono, e differiscono solo per la variante di Titillium inclusa. Non serve nessuna configurazione aggiuntiva: la tipografia della libreria usa già di default il carattere sans-serif disponibile, quindi importando solo uno dei due file il browser userà automaticamente la variante di Titillium presente."}),`
`,t.jsxs(i.ul,{children:[`
`,t.jsxs(i.li,{children:[t.jsx(i.code,{children:"fonts.css"}),": Titillium Web (default) + Lora + Roboto Mono"]}),`
`,t.jsxs(i.li,{children:[t.jsx(i.code,{children:"fonts-sans-pro.css"}),": Titillium Sans Pro + Lora + Roboto Mono"]}),`
`]}),`
`,t.jsxs(i.p,{children:["Non importare entrambi i file insieme: se sono presenti i ",t.jsx(i.code,{children:"@font-face"})," di entrambe le varianti, viene sempre applicata Titillium Web, che è la prima della lista di fallback."]}),`
`,t.jsx(i.p,{children:"Usa il selettore font nella toolbar di Storybook (in alto) per esplorare la resa delle due varianti su tutta la documentazione, in tempo reale."}),`
`,t.jsxs(i.p,{children:["Ulteriori informazioni sull'uso dei font nella scheda ",t.jsx(i.a,{href:"/docs/organizzare-i-contenuti-tipografia--documentazione",children:"Tipografia"}),"."]}),`
`,t.jsx(i.h2,{id:"carica-via-bundle",children:"Carica via bundle"}),`
`,t.jsx(i.p,{children:"È disponibile il bundle dei font relativo alla variante di Titillium scelta, includibile con:"}),`
`,t.jsx(i.pre,{children:t.jsx(i.code,{className:"language-html",children:`<!-- Titillium Web (default) -->
<link rel="stylesheet" href="dev-kit-italia/fonts.css" />

<!-- oppure, Titillium Sans Pro -->
<link rel="stylesheet" href="dev-kit-italia/fonts-sans-pro.css" />
`})}),`
`,t.jsx(i.h2,{id:"carica-via-css",children:"Carica via CSS"}),`
`,t.jsxs(i.p,{children:["È possibile caricare i font via CSS. Per semplicità abbiamo utilizzato la sintassi SCSS in modo da utilizzare una variabile per specificare il percorso ",t.jsx(i.code,{children:"$font-path"})," dove trovare i file dei font. Include il blocco ",t.jsx(i.code,{children:"@font-face"})," di Lora e Roboto Mono insieme a ",t.jsx(i.strong,{children:"una sola"})," delle due varianti di Titillium."]}),`
`,t.jsxs(i.h3,{id:"titillium-web-per-fontscss",children:["Titillium Web (per ",t.jsx(i.code,{children:"fonts.css"}),")"]}),`
`,t.jsx(i.pre,{children:t.jsx(i.code,{className:"language-css",children:`$font-path: './assets/fonts';

/* Titillium+Web:300,400,600,700 */

/* titillium-web-300 - latin-ext_latin */
@font-face {
  font-display: swap;
  font-family: 'Titillium Web';
  font-style: normal;
  font-weight: 300;
  src: url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-300.eot'); /* IE9 Compat Modes */
  src:
    local(''),
    url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-300.eot?#iefix') format('embedded-opentype'),
    /* IE6-IE8 */ url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-300.woff2') format('woff2'),
    /* Super Modern Browsers */ url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-300.woff')
      format('woff'),
    /* Modern Browsers */ url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-300.ttf')
      format('truetype'),
    /* Safari, Android, iOS */ url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-300.svg#TitilliumWeb')
      format('svg'); /* Legacy iOS */
}

/* titillium-web-300italic - latin-ext_latin */
@font-face {
  font-display: swap;
  font-family: 'Titillium Web';
  font-style: italic;
  font-weight: 300;
  src: url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-300italic.eot'); /* IE9 Compat Modes */
  src:
    local(''),
    url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-300italic.eot?#iefix')
      format('embedded-opentype'),
    /* IE6-IE8 */ url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-300italic.woff2') format('woff2'),
    /* Super Modern Browsers */ url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-300italic.woff')
      format('woff'),
    /* Modern Browsers */ url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-300italic.ttf')
      format('truetype'),
    /* Safari, Android, iOS */
      url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-300italic.svg#TitilliumWeb') format('svg'); /* Legacy iOS */
}

/* titillium-web-regular - latin-ext_latin */
@font-face {
  font-display: swap;
  font-family: 'Titillium Web';
  font-style: normal;
  font-weight: 400;
  src: url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-regular.eot'); /* IE9 Compat Modes */
  src:
    local(''),
    url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-regular.eot?#iefix') format('embedded-opentype'),
    /* IE6-IE8 */ url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-regular.woff2') format('woff2'),
    /* Super Modern Browsers */ url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-regular.woff')
      format('woff'),
    /* Modern Browsers */ url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-regular.ttf')
      format('truetype'),
    /* Safari, Android, iOS */
      url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-regular.svg#TitilliumWeb') format('svg'); /* Legacy iOS */
}

/* titillium-web-italic - latin-ext_latin */
@font-face {
  font-display: swap;
  font-family: 'Titillium Web';
  font-style: italic;
  font-weight: 400;
  src: url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-italic.eot'); /* IE9 Compat Modes */
  src:
    local(''),
    url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-italic.eot?#iefix') format('embedded-opentype'),
    /* IE6-IE8 */ url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-italic.woff2') format('woff2'),
    /* Super Modern Browsers */ url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-italic.woff')
      format('woff'),
    /* Modern Browsers */ url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-italic.ttf')
      format('truetype'),
    /* Safari, Android, iOS */
      url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-italic.svg#TitilliumWeb') format('svg'); /* Legacy iOS */
}

/* titillium-web-700 - latin-ext_latin */
@font-face {
  font-display: swap;
  font-family: 'Titillium Web';
  font-style: normal;
  font-weight: 700;
  src: url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-700.eot'); /* IE9 Compat Modes */
  src:
    local(''),
    url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-700.eot?#iefix') format('embedded-opentype'),
    /* IE6-IE8 */ url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-700.woff2') format('woff2'),
    /* Super Modern Browsers */ url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-700.woff')
      format('woff'),
    /* Modern Browsers */ url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-700.ttf')
      format('truetype'),
    /* Safari, Android, iOS */ url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-700.svg#TitilliumWeb')
      format('svg'); /* Legacy iOS */
}

/* titillium-web-700italic - latin-ext_latin */
@font-face {
  font-display: swap;
  font-family: 'Titillium Web';
  font-style: italic;
  font-weight: 700;
  src: url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-700italic.eot'); /* IE9 Compat Modes */
  src:
    local(''),
    url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-700italic.eot?#iefix')
      format('embedded-opentype'),
    /* IE6-IE8 */ url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-700italic.woff2') format('woff2'),
    /* Super Modern Browsers */ url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-700italic.woff')
      format('woff'),
    /* Modern Browsers */ url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-700italic.ttf')
      format('truetype'),
    /* Safari, Android, iOS */
      url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-700italic.svg#TitilliumWeb') format('svg'); /* Legacy iOS */
}
/* titillium-web-600 - latin-ext_latin */
@font-face {
  font-display: swap;
  font-family: 'Titillium Web';
  font-style: normal;
  font-weight: 600;
  src: url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-600.eot'); /* IE9 Compat Modes */
  src:
    local(''),
    url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-600.eot?#iefix') format('embedded-opentype'),
    /* IE6-IE8 */ url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-600.woff2') format('woff2'),
    /* Super Modern Browsers */ url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-600.woff')
      format('woff'),
    /* Modern Browsers */ url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-600.ttf')
      format('truetype'),
    /* Safari, Android, iOS */ url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-600.svg#TitilliumWeb')
      format('svg'); /* Legacy iOS */
}

/* titillium-web-600italic - latin-ext_latin */
@font-face {
  font-display: swap;
  font-family: 'Titillium Web';
  font-style: italic;
  font-weight: 600;
  src: url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-600italic.eot'); /* IE9 Compat Modes */
  src:
    local(''),
    url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-600italic.eot?#iefix')
      format('embedded-opentype'),
    /* IE6-IE8 */ url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-600italic.woff2') format('woff2'),
    /* Super Modern Browsers */ url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-600italic.woff')
      format('woff'),
    /* Modern Browsers */ url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-600italic.ttf')
      format('truetype'),
    /* Safari, Android, iOS */
      url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-600italic.svg#TitilliumWeb') format('svg'); /* Legacy iOS */
}

`})}),`
`,t.jsxs(i.h3,{id:"titillium-sans-pro-per-fonts-sans-procss",children:["Titillium Sans Pro (per ",t.jsx(i.code,{children:"fonts-sans-pro.css"}),")"]}),`
`,t.jsx(i.pre,{children:t.jsx(i.code,{className:"language-css",children:`$font-path: './assets/fonts';

/* Titillium Sans Pro - Light 300 */
@font-face {
  font-display: swap;
  font-family: 'Titillium Sans Pro';
  font-style: normal;
  font-weight: 300;
  src:
    url('#{$font-path}/Titillium_Sans_Pro/TitilliumSansPro-Light.woff2') format('woff2'),
    url('#{$font-path}/Titillium_Sans_Pro/TitilliumSansPro-Light.woff') format('woff');
}

/* Titillium Sans Pro - Regular 400 */
@font-face {
  font-display: swap;
  font-family: 'Titillium Sans Pro';
  font-style: normal;
  font-weight: 400;
  src:
    url('#{$font-path}/Titillium_Sans_Pro/TitilliumSansPro-Regular.woff2') format('woff2'),
    url('#{$font-path}/Titillium_Sans_Pro/TitilliumSansPro-Regular.woff') format('woff');
}

/* Titillium Sans Pro - Italic 400 */
@font-face {
  font-display: swap;
  font-family: 'Titillium Sans Pro';
  font-style: italic;
  font-weight: 400;
  src:
    url('#{$font-path}/Titillium_Sans_Pro/TitilliumSansPro-Italic.woff2') format('woff2'),
    url('#{$font-path}/Titillium_Sans_Pro/TitilliumSansPro-Italic.woff') format('woff');
}

/* Titillium Sans Pro - Semibold 600 */
@font-face {
  font-display: swap;
  font-family: 'Titillium Sans Pro';
  font-style: normal;
  font-weight: 600;
  src:
    url('#{$font-path}/Titillium_Sans_Pro/TitilliumSansPro-Semibold.woff2') format('woff2'),
    url('#{$font-path}/Titillium_Sans_Pro/TitilliumSansPro-Semibold.woff') format('woff');
}

/* Titillium Sans Pro - Semibold Italic 600 */
@font-face {
  font-display: swap;
  font-family: 'Titillium Sans Pro';
  font-style: italic;
  font-weight: 600;
  src:
    url('#{$font-path}/Titillium_Sans_Pro/TitilliumSansPro-SemiboldItalic.woff2') format('woff2'),
    url('#{$font-path}/Titillium_Sans_Pro/TitilliumSansPro-SemiboldItalic.woff') format('woff');
}

/* Titillium Sans Pro - Bold 700 */
@font-face {
  font-display: swap;
  font-family: 'Titillium Sans Pro';
  font-style: normal;
  font-weight: 700;
  src:
    url('#{$font-path}/Titillium_Sans_Pro/TitilliumSansPro-Bold.woff2') format('woff2'),
    url('#{$font-path}/Titillium_Sans_Pro/TitilliumSansPro-Bold.woff') format('woff');
}

/* Titillium Sans Pro - Bold Italic 700 */
@font-face {
  font-display: swap;
  font-family: 'Titillium Sans Pro';
  font-style: italic;
  font-weight: 700;
  src:
    url('#{$font-path}/Titillium_Sans_Pro/TitilliumSansPro-BoldItalic.woff2') format('woff2'),
    url('#{$font-path}/Titillium_Sans_Pro/TitilliumSansPro-BoldItalic.woff') format('woff');
}
`})}),`
`,t.jsx(i.h3,{id:"lora-e-roboto-mono-in-entrambi-i-file",children:"Lora e Roboto Mono (in entrambi i file)"}),`
`,t.jsx(i.pre,{children:t.jsx(i.code,{className:"language-css",children:`/* Lora:400,700 */

/* lora-regular - latin-ext_latin */
@font-face {
  font-display: swap;
  font-family: 'Lora';
  font-style: normal;
  font-weight: 400;
  src: url('#{$font-path}/Lora/lora-v20-latin-ext_latin-regular.eot'); /* IE9 Compat Modes */
  src:
    local(''),
    url('#{$font-path}/Lora/lora-v20-latin-ext_latin-regular.eot?#iefix') format('embedded-opentype'),
    /* IE6-IE8 */ url('#{$font-path}/Lora/lora-v20-latin-ext_latin-regular.woff2') format('woff2'),
    /* Super Modern Browsers */ url('#{$font-path}/Lora/lora-v20-latin-ext_latin-regular.woff') format('woff'),
    /* Modern Browsers */ url('#{$font-path}/Lora/lora-v20-latin-ext_latin-regular.ttf') format('truetype'),
    /* Safari, Android, iOS */ url('#{$font-path}/Lora/lora-v20-latin-ext_latin-regular.svg#Lora') format('svg'); /* Legacy iOS */
}

/* lora-700 - latin-ext_latin */
@font-face {
  font-display: swap;
  font-family: 'Lora';
  font-style: normal;
  font-weight: 700;
  src: url('#{$font-path}/Lora/lora-v20-latin-ext_latin-700.eot'); /* IE9 Compat Modes */
  src:
    local(''),
    url('#{$font-path}/Lora/lora-v20-latin-ext_latin-700.eot?#iefix') format('embedded-opentype'),
    /* IE6-IE8 */ url('#{$font-path}/Lora/lora-v20-latin-ext_latin-700.woff2') format('woff2'),
    /* Super Modern Browsers */ url('#{$font-path}/Lora/lora-v20-latin-ext_latin-700.woff') format('woff'),
    /* Modern Browsers */ url('#{$font-path}/Lora/lora-v20-latin-ext_latin-700.ttf') format('truetype'),
    /* Safari, Android, iOS */ url('#{$font-path}/Lora/lora-v20-latin-ext_latin-700.svg#Lora') format('svg'); /* Legacy iOS */
}

/* lora-italic - latin-ext_latin */
@font-face {
  font-display: swap;
  font-family: 'Lora';
  font-style: italic;
  font-weight: 400;
  src: url('#{$font-path}/Lora/lora-v20-latin-ext_latin-italic.eot'); /* IE9 Compat Modes */
  src:
    local(''),
    url('#{$font-path}/Lora/lora-v20-latin-ext_latin-italic.eot?#iefix') format('embedded-opentype'),
    /* IE6-IE8 */ url('#{$font-path}/Lora/lora-v20-latin-ext_latin-italic.woff2') format('woff2'),
    /* Super Modern Browsers */ url('#{$font-path}/Lora/lora-v20-latin-ext_latin-italic.woff') format('woff'),
    /* Modern Browsers */ url('#{$font-path}/Lora/lora-v20-latin-ext_latin-italic.ttf') format('truetype'),
    /* Safari, Android, iOS */ url('#{$font-path}/Lora/lora-v20-latin-ext_latin-italic.svg#Lora') format('svg'); /* Legacy iOS */
}

/* lora-700italic - latin-ext_latin */
@font-face {
  font-display: swap;
  font-family: 'Lora';
  font-style: italic;
  font-weight: 700;
  src: url('#{$font-path}/Lora/lora-v20-latin-ext_latin-700italic.eot'); /* IE9 Compat Modes */
  src:
    local(''),
    url('#{$font-path}/Lora/lora-v20-latin-ext_latin-700italic.eot?#iefix') format('embedded-opentype'),
    /* IE6-IE8 */ url('#{$font-path}/Lora/lora-v20-latin-ext_latin-700italic.woff2') format('woff2'),
    /* Super Modern Browsers */ url('#{$font-path}/Lora/lora-v20-latin-ext_latin-700italic.woff') format('woff'),
    /* Modern Browsers */ url('#{$font-path}/Lora/lora-v20-latin-ext_latin-700italic.ttf') format('truetype'),
    /* Safari, Android, iOS */ url('#{$font-path}/Lora/lora-v20-latin-ext_latin-700italic.svg#Lora') format('svg'); /* Legacy iOS */
}

/* Roboto+Mono:400,700 */

/* roboto-mono-regular - latin-ext_latin */
@font-face {
  font-display: swap;
  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: 400;
  src: url('#{$font-path}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-regular.eot'); /* IE9 Compat Modes */
  src:
    local(''),
    url('#{$font-path}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-regular.eot?#iefix') format('embedded-opentype'),
    /* IE6-IE8 */ url('#{$font-path}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-regular.woff2') format('woff2'),
    /* Super Modern Browsers */ url('#{$font-path}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-regular.woff')
      format('woff'),
    /* Modern Browsers */ url('#{$font-path}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-regular.ttf')
      format('truetype'),
    /* Safari, Android, iOS */ url('#{$font-path}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-regular.svg#RobotoMono')
      format('svg'); /* Legacy iOS */
}

/* roboto-mono-700 - latin-ext_latin */
@font-face {
  font-display: swap;
  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: 700;
  src: url('#{$font-path}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-700.eot'); /* IE9 Compat Modes */
  src:
    local(''),
    url('#{$font-path}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-700.eot?#iefix') format('embedded-opentype'),
    /* IE6-IE8 */ url('#{$font-path}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-700.woff2') format('woff2'),
    /* Super Modern Browsers */ url('#{$font-path}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-700.woff') format('woff'),
    /* Modern Browsers */ url('#{$font-path}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-700.ttf') format('truetype'),
    /* Safari, Android, iOS */ url('#{$font-path}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-700.svg#RobotoMono')
      format('svg'); /* Legacy iOS */
}

/* roboto-mono-italic - latin-ext_latin */
@font-face {
  font-display: swap;
  font-family: 'Roboto Mono';
  font-style: italic;
  font-weight: 400;
  src: url('#{$font-path}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-italic.eot'); /* IE9 Compat Modes */
  src:
    local(''),
    url('#{$font-path}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-italic.eot?#iefix') format('embedded-opentype'),
    /* IE6-IE8 */ url('#{$font-path}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-italic.woff2') format('woff2'),
    /* Super Modern Browsers */ url('#{$font-path}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-italic.woff')
      format('woff'),
    /* Modern Browsers */ url('#{$font-path}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-italic.ttf') format('truetype'),
    /* Safari, Android, iOS */ url('#{$font-path}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-italic.svg#RobotoMono')
      format('svg'); /* Legacy iOS */
}

/* roboto-mono-700italic - latin-ext_latin */
@font-face {
  font-display: swap;
  font-family: 'Roboto Mono';
  font-style: italic;
  font-weight: 700;
  src: url('#{$font-path}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-700italic.eot'); /* IE9 Compat Modes */
  src:
    local(''),
    url('#{$font-path}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-700italic.eot?#iefix') format('embedded-opentype'),
    /* IE6-IE8 */ url('#{$font-path}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-700italic.woff2') format('woff2'),
    /* Super Modern Browsers */ url('#{$font-path}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-700italic.woff')
      format('woff'),
    /* Modern Browsers */ url('#{$font-path}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-700italic.ttf')
      format('truetype'),
    /* Safari, Android, iOS */ url('#{$font-path}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-700italic.svg#RobotoMono')
      format('svg'); /* Legacy iOS */
}
`})})]})}function m(n={}){const{wrapper:i}={...l(),...n.components};return i?t.jsx(i,{...n,children:t.jsx(o,{...n})}):o(n)}export{m as default};

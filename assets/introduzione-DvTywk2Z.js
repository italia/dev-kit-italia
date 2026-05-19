import{j as e,M as l}from"./blocks-DY0RjfjX.js";import{useMDXComponents as t}from"./index-Ck0gki_e.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-6eu1PyyH.js";function o(n){const i={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Organizzare i contenuti/Introduzione"}),`
`,e.jsx(i.h1,{id:"introduzione",children:"Introduzione"}),`
`,e.jsx(i.p,{children:"Classi e utilità per organizzare le diverse tipologie di contenuti all'interno di una pagina web."}),`
`,e.jsx(i.p,{children:"In questa sezione sono mostrate utilità per l'organizzazione dei contenuti, come testi, liste, tabelle e immagini."}),`
`,e.jsxs(i.p,{children:["Di seguito viene introdotto ",e.jsx(i.em,{children:'"Reboot"'}),", una collezione di regole CSS applicate agli elementi HTML che Bootstrap utilizza per definire una base consistente di stile su cui è costruito tutto il resto."]}),`
`,e.jsx(i.h2,{id:"reboot",children:"Reboot"}),`
`,e.jsx(i.p,{children:`Reboot è una piccola parte del CSS di Bootstrap che si basa su Normalize e "inizializza" lo stile di molti elementi HTML
attraverso il solo utilizzo di selettori di tipo (quindi non selettori di classe).`}),`
`,e.jsxs(i.p,{children:[`Ogni altro stile aggiuntivo è invece applicato da Bootstrap, e quindi da Bootstrap Italia, con l'utilizzo di selettori di classe.
Ad esempio, la parte Reboot di Bootstrap inizializza gli stili per le tabelle utilizzando `,e.jsx(i.code,{children:"<table>"}),`, ed in seguito
definisce `,e.jsx(i.code,{children:".table"}),", ",e.jsx(i.code,{children:".table-bordered"})," ed altri."]}),`
`,e.jsx(i.p,{children:"Di seguito, alcuni dettagli di ciò che Reboot implementa e che sarebbe bene seguire:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Aggiorna alcuni valori di default del browser con l'utilizzo di ",e.jsx(i.code,{children:"rem"})," anziché ",e.jsx(i.code,{children:"em"})," per avere componenti più semplicemente ridimensionabili."]}),`
`,e.jsxs(i.li,{children:["Evita ",e.jsx(i.code,{children:"margin-top"}),". Margini verticali possono collassare tra loro, portando risultati inattesi a seconda del dispositivo."]}),`
`,e.jsxs(i.li,{children:["Per avere una migliore ridimensionabilità a diverse dimensioni, elementi block dovrebbero usare ",e.jsx(i.code,{children:"rem"})," per i margini."]}),`
`,e.jsxs(i.li,{children:["Lascia ogni dichiarazione relativa alle proprietà dei testi (",e.jsx(i.code,{children:"font-"}),") al minimo, usando il default ",e.jsx(i.code,{children:"inherit"})," quando possibile."]}),`
`]}),`
`,e.jsx(i.h3,{id:"default-di-pagina",children:"Default di pagina"}),`
`,e.jsxs(i.p,{children:["Gli elementi ",e.jsx(i.code,{children:"<html>"})," e ",e.jsx(i.code,{children:"<body>"})," stessi impostano attraverso Reboot alcuni comportamenti, tra cui:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"box-sizing"})," è settato a ",e.jsx(i.code,{children:"border-box"})," globalmente, anche per ",e.jsx(i.code,{children:"*::before"})," e ",e.jsx(i.code,{children:"*::after"}),". Questo assicura che la dimensione dichiarata non aumenti mai per la presenza di padding o bordi."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"<html>"})," e ",e.jsx(i.code,{children:"<body>"})," imposta una dimensione di base per ",e.jsx(i.code,{children:"font-size"}),", assumendola in 16px per i device fino a 575px e a 18px per i device sopra i 575px ."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"<body>"})," imposta anche ",e.jsx(i.code,{children:"font-family"}),", ",e.jsx(i.code,{children:"line-height"}),", e ",e.jsx(i.code,{children:"text-align"})," globali, per evitare inconsistenze in alcuni elementi dei form."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"<body>"})," imposta ",e.jsx(i.code,{children:"background-color"})," a ",e.jsx(i.code,{children:"#fff"}),"."]}),`
`]}),`
`,e.jsx(i.p,{children:"Reboot si occupa uniformare e semplificare comportamenti tra diversi browser e dispositivi anche inizializzando alcune regole su tabelle, form, attributi, ecc."}),`
`,e.jsxs(i.p,{children:["Per maggiori informazioni si rimanda alla ",e.jsx(i.a,{href:"https://getbootstrap.com/docs/5.3/content/reboot/",rel:"nofollow",children:"pagina descrittiva di Reboot"})," sul sito di Bootstrap (in inglese)."]})]})}function c(n={}){const{wrapper:i}={...t(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(o,{...n})}):o(n)}export{c as default};

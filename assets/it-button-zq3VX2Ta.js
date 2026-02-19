import{j as e,M as d,C as n,a as p,D as s}from"./blocks-D0bmdpqR.js";import{useMDXComponents as c}from"./index-C6divXtw.js";import{S as u,E as t,V as h,a as x,D as j,T as m,b as a,C as l,c as b}from"./it-button.stories-DrXwN4Kk.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-D9yc0utV.js";function r(o){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...c(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:u}),`
`,e.jsx(i.h1,{id:"button",children:"Button"}),`
`,e.jsx("description",{children:"Pulsante con etichetta di testo o icona che al clic inizia un'azione o un evento"}),`
`,e.jsx(i.h2,{id:"cosa-fa",children:"Cosa fa"}),`
`,e.jsxs(i.p,{children:["Il componente ",e.jsx(i.code,{children:"it-button"}),` ti consente di generare pulsanti la cui interazione dà il via a un’azione o a un evento.
Non dovrebbero essere usati per attivare la navigazione verso altre pagine o link esterni.`]}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"https://designers.italia.it/design-system/componenti/buttons/",rel:"nofollow",children:"Approfondisci come e quando usare il componente Button"})}),`
`,e.jsx(i.h2,{id:"anteprima-e-attributi-del-componente",children:"Anteprima e attributi del componente"}),`
`,e.jsxs(i.p,{children:["Modifica gli attributi nella tabella per personalizzare in tempo reale l'aspetto e il comportamento del componente. Per vedere come cambia il codice, clicca su ",e.jsx(i.strong,{children:"Show code"}),"."]}),`
`,e.jsx(n,{of:t}),`
`,e.jsx(p,{of:t}),`
`,e.jsx(i.h2,{id:"accessibilità",children:"Accessibilità"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[`
`,e.jsxs(i.p,{children:["Le classi ",e.jsx(i.code,{children:".btn"})," e ",e.jsx(i.code,{children:".btn-"})," conferiscono agli elementi html l’aspetto visivo di un pulsante. Anche elementi ",e.jsx(i.code,{children:"<a>"})," o ",e.jsx(i.code,{children:"<span>"}),` possono subire questa trasformazione provocando discrepanza tra ciò che si rappresenta e la funzione semantica dell’elemento.
Questo può provocare complesse problematiche di accessibilità.`]}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsxs(i.p,{children:["Dove il click sul pulsante non genera un cambio di pagina utilizza esclusivamente il componente ",e.jsx(i.code,{children:"<it-button>"}),`.
Qualora non fosse possibile, è necessario applicare in modo appropriato l’attributo `,e.jsx(i.code,{children:'role="button"'})," su elementi ",e.jsx(i.code,{children:"<a>"})," o ",e.jsx(i.code,{children:"<span>"})," per trasmetterne lo scopo alle tecnologie assistive."]}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsxs(i.p,{children:["Quando si utilizza l'attributo ",e.jsx(i.code,{children:"disabled"})," è consigliato usare anche l'attributo ",e.jsx(i.code,{children:"it-aria-describedby"})," (o un elemento all'interno di it-button con classe ",e.jsx(i.code,{children:".sr-only"}),") per informare tramite gli screen-reader il motivo per il quale il pulsante è disabilitato."]}),`
`]}),`
`]}),`
`,e.jsx(i.h4,{id:"note-sugli-attributi-aria",children:"Note sugli attributi ARIA"}),`
`,e.jsxs(i.p,{children:["Tutti gli attributi ",e.jsx(i.code,{children:"it-aria-*"})," passati a ",e.jsx(i.code,{children:"<it-button>"})," vengono applicati al button generato come attributi ",e.jsx(i.code,{children:"aria-*"}),`.
Anche l'attributo `,e.jsx(i.code,{children:"it-role"})," viene passato al button come attributo ",e.jsx(i.code,{children:"role"}),"."]}),`
`,e.jsx(i.h2,{id:"varianti-di-colore",children:"Varianti di colore"}),`
`,e.jsx(i.p,{children:"Gli stili definiti da Bootstrap Italia utilizzano un naming consistente con Bootstrap, con alcune personalizzazioni."}),`
`,e.jsxs(i.p,{children:["Utilizza l'attributo ",e.jsx(i.code,{children:"variant"})," per cambiare il colore del pulsante."]}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(i.h2,{id:"varianti-di-dimensione",children:"Varianti di dimensione"}),`
`,e.jsxs(i.p,{children:["Per ottenere pulsanti di dimensione più grande o più piccola, puoi utilizzare l'attributo ",e.jsx(i.code,{children:"size"})," con i valori ",e.jsx(i.code,{children:"lg"})," o ",e.jsx(i.code,{children:"xs"}),"."]}),`
`,e.jsxs(i.p,{children:["Utilizzando invece l'attributo ",e.jsx(i.code,{children:"block"})," otterrai pulsanti che prendono tutta l’ampiezza a loro disposizione, a seconda delle dimensioni del loro contenitore."]}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(i.h2,{id:"stato-disabilitato",children:"Stato disabilitato"}),`
`,e.jsxs(i.p,{children:["Per disabilitare un pulsante, passa l'attributo ",e.jsx(i.code,{children:"disabled"})," al componente."]}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(i.h2,{id:"tipologie",children:"Tipologie"}),`
`,e.jsxs(i.p,{children:["I pulsanti possono essere di diverso tipo: semplici ",e.jsx(i.code,{children:"button"}),", bottoni di tipo ",e.jsx(i.code,{children:"submit"}),", bottoni di tipo ",e.jsx(i.code,{children:"reset"}),"."]}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(i.h2,{id:"sfondo-scuro",children:"Sfondo scuro"}),`
`,e.jsxs(i.p,{children:["Su sfondo scuro, le varianti ",e.jsx(i.code,{children:"primary"}),", ",e.jsx(i.code,{children:"secondary"})," e ",e.jsx(i.code,{children:"link"}),` assumono un aspetto diverso dall'originale per garantirne l'acessibilità.
Putte le altre varianti di colore non sono previsti cambiamenti di tonalità.`]}),`
`,e.jsx(s,{of:a}),`
`,e.jsx(n,{of:a}),`
`,e.jsx(i.h2,{id:"con-icona",children:"Con icona"}),`
`,e.jsxs(i.p,{children:["Usa l'attributo ",e.jsx(i.code,{children:'icon="true"'})," (o ",e.jsx(i.code,{children:'icon=""'}),", o semplicemente ",e.jsx(i.code,{children:"icon"}),") per applicare al pulsante gli stili corretti."]}),`
`,e.jsxs(i.p,{children:["Quando inserisci un’icona all’interno di un elemento ",e.jsx(i.code,{children:"<it-button>"}),", devi inserire il testo del pulsante all’interno di un tag ",e.jsx(i.code,{children:"<span/>"})," per garantire un perfetto allineamento ed una corretta spaziatura tra l’icona e lo stesso testo."]}),`
`,e.jsx(i.p,{children:"Puoi posizionare l'icona a sinistra o a destra del testo, a seconda della posizione in cui viene inserita all’interno del pulsante."}),`
`,e.jsx(s,{of:l}),`
`,e.jsx(n,{of:l}),`
`,e.jsx(i.h3,{id:"dimensione-dellicona",children:"Dimensione dell'icona"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Nei pulsanti di dimensione ",e.jsx(i.code,{children:"lg"})," o default (",e.jsx(i.code,{children:"sm"}),"), devi usare l'attributo ",e.jsx(i.code,{children:'size="sm"'})," sull'icona."]}),`
`,e.jsxs(i.li,{children:["Nei pulsanti di dimensione ",e.jsx(i.code,{children:"xs"}),", devi usare l'attributo ",e.jsx(i.code,{children:'size="xs"'})," sull'icona ."]}),`
`]}),`
`,e.jsx(i.h3,{id:"icona-cerchiata",children:"Icona cerchiata"}),`
`,e.jsxs(i.p,{children:["Inserisci l'icona all'interno di uno elemento con classe ",e.jsx(i.code,{children:".rounded-icon"}),` per poter avere il contorno circolare.
In questo caso, la dimensione dell'icona deve sempre essere  `,e.jsx(i.code,{children:"xs"}),", quindi ",e.jsx(i.code,{children:"<it-icon>"})," deve avere sempre l'attributo ",e.jsx(i.code,{children:'size="xs"'}),"."]}),`
`,e.jsx(n,{of:b}),`
`,e.jsx(i.h2,{id:"personalizzazione-degli-stili",children:"Personalizzazione degli stili"}),`
`,e.jsxs(i.p,{children:["Per la personalizzazione degli stili puoi usare il selettore ",e.jsx(i.code,{children:"::part"})," passando il valore ",e.jsx(i.code,{children:"button"}),". ",e.jsx(i.a,{href:"/docs/personalizzazione-degli-stili--documentazione#selettore-part",children:"Vedi qui la guida dettagliata"}),"."]})]})}function D(o={}){const{wrapper:i}={...c(),...o.components};return i?e.jsx(i,{...o,children:e.jsx(r,{...o})}):r(o)}export{D as default};

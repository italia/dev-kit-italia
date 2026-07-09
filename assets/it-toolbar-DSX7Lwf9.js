import{j as e,M as s,C as o,a as l}from"./blocks-DrClPdxq.js";import{useMDXComponents as d}from"./index-B6A7NClu.js";import{S as c,E as t,T as a,a as m,b as h,c as p,d as x,e as j,f as b,g as u,h as g,i as v,j as z,k as f,l as w}from"./it-toolbar.stories-B0phw8GR.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-CDz1eqbY.js";function r(n){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...d(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:c}),`
`,e.jsx(i.h1,{id:"toolbar",children:"Toolbar"}),`
`,e.jsx("description",{children:"Menu di navigazione a icone che può contenere link, pulsanti e dropdown"}),`
`,e.jsx(i.h2,{id:"cosa-fa",children:"Cosa fa"}),`
`,e.jsxs(i.p,{children:["Il componente ",e.jsx(i.code,{children:"it-toolbar"}),` è un elemento contenitore di link, pulsanti o dropdown.
È particolarmente utile per realizzare applicazioni molto specifiche, come ad esempio dashboard o strumenti di monitoraggio.
Consiste in un elenco `,e.jsx(i.code,{children:"<ul>"})," con tanti elementi ",e.jsx(i.code,{children:"<li>"}),` quante sono le voci richieste.
Occupa tutta la larghezza del suo contenitore, adattandosi di conseguenza, e può essere di tre dimensioni diverse: grande, media e piccola per meglio adattarsi allo spazio disponibile.`]}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"https://designers.italia.it/design-system/componenti/toolbar/",rel:"nofollow",children:"Approfondisci come e quando usare il componente Toolbar"})}),`
`,e.jsx(i.h2,{id:"anteprima-e-attributi-del-componente",children:"Anteprima e attributi del componente"}),`
`,e.jsxs(i.p,{children:["Modifica gli attributi nella tabella per personalizzare in tempo reale l'aspetto e il comportamento del componente. Per vedere come cambia il codice, clicca su ",e.jsx(i.strong,{children:"Show code"}),"."]}),`
`,e.jsx(o,{of:t}),`
`,e.jsx(l,{of:t}),`
`,e.jsxs(i.h3,{id:"anteprima-e-attributi-del-componente-it-toolbar-item",children:["Anteprima e attributi del componente ",e.jsx(i.code,{children:"it-toolbar-item"})]}),`
`,e.jsxs(i.p,{children:["Ogni elemento della toolbar, deve essere un componente ",e.jsx(i.code,{children:"it-toolbar-item"})," che rappresenta un link, un pulsante o un dropdown. Puoi personalizzare ogni elemento modificando i suoi attributi."]}),`
`,e.jsx(o,{of:a}),`
`,e.jsx(l,{of:a}),`
`,e.jsxs(i.h3,{id:"eventi-click-di-it-toolbar-item",children:["Eventi click di ",e.jsx(i.code,{children:"it-toolbar-item"})]}),`
`,e.jsxs(i.p,{children:["Se ",e.jsx(i.code,{children:"it-toolbar-item"})," viene renderizzato come pulsante, il componente genera internamente un ",e.jsx(i.code,{children:"it-button"})," nello shadow DOM. Gli attributi inline del tipo ",e.jsx(i.code,{children:"onclick"})," non vengono forwardati automaticamente a quell'elemento interno."]}),`
`,e.jsxs(i.p,{children:["Per intercettare l'azione di click, aggancia il listener direttamente a ",e.jsx(i.code,{children:"it-toolbar-item"})," oppure ascolta l'evento custom ",e.jsx(i.code,{children:"it-toolbar-item-click"}),", emesso dal componente in bubbling."]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<it-toolbar-item label="Messaggi" icon="it-comment"></it-toolbar-item>

<script>
  const item = document.querySelector('it-toolbar-item');

  item?.addEventListener('click', (event) => {
    console.log('Click nativo sul componente', event);
  });

  item?.addEventListener('it-toolbar-item-click', (event) => {
    console.log('Evento custom della toolbar', event.detail);
  });
<\/script>
`})}),`
`,e.jsx(i.h2,{id:"accessibilità",children:"Accessibilità"}),`
`,e.jsxs(i.p,{children:["I componenti ",e.jsx(i.code,{children:"it-toolbar"})," e ",e.jsx(i.code,{children:"it-toolbar-item"})," sono progettati per essere accessibili e conformi agli standard di accessibilità."]}),`
`,e.jsx(i.p,{children:"Ecco alcune linee guida per garantire che il tuo utilizzo del componente sia accessibile:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[`
`,e.jsxs(i.p,{children:[e.jsx(i.strong,{children:"Etichette chiare"}),": Assicurati che ogni elemento all'interno della toolbar (che non sia un elemento divisorio) abbia un'etichetta chiara e descrittiva."]}),`
`,e.jsxs(i.p,{children:["Utilizza testo visibile impostando l'attributo dedicato ",e.jsx(i.code,{children:"label"})," ed eventualmente testo aggiuntivo per i soli lettori di schermo tramite l'attributo ",e.jsx(i.code,{children:"label-extended"}),"."]}),`
`,e.jsxs(i.p,{children:["Se le etichette sono nascoste tramite l'attributo ",e.jsx(i.code,{children:"hide-label"})," assicurati di fornire una descrizione accessibile tramite gli attributi ",e.jsx(i.code,{children:"label"}),", ",e.jsx(i.code,{children:"it-aria-label"})," ed eventualmente ",e.jsx(i.code,{children:"label-extended"}),"."]}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsxs(i.p,{children:["Se un elemento della toolbar mostra un badge, imposta sempre l'attributo ",e.jsx(i.code,{children:"label-extended"})," sul componente ",e.jsx(i.code,{children:"it-toolbar-item"})," per fornire una descrizione più dettagliata del badge ai lettori di schermo."]}),`
`]}),`
`]}),`
`,e.jsx(i.h2,{id:"varianti-di-dimensione",children:"Varianti di dimensione"}),`
`,e.jsx(i.p,{children:"La Toolbar si adatta automaticamente in larghezza al suo contenitore. Per ottimizzare lo spazio disponibile l'elemento è fornito in tre versioni: grande, media e piccola."}),`
`,e.jsx(i.h3,{id:"toolbar-grande",children:"Toolbar grande"}),`
`,e.jsx(i.p,{children:"La versione predefinita dell'elemento è quella con icone grandi e label."}),`
`,e.jsx(o,{of:m}),`
`,e.jsx(i.h3,{id:"toolbar-media",children:"Toolbar media"}),`
`,e.jsxs(i.p,{children:["Applicando l'attributo ",e.jsx(i.code,{children:'size="md"'})," alla Toolbar si ottiene una versione di dimensioni medie. In questo caso le label, vengono automaticamente nascoste visivamente dal componente tramite la classe ",e.jsx(i.code,{children:".visually-hidden"}),", per rendere disponibile la descrizione agli screen reader."]}),`
`,e.jsx(o,{of:h}),`
`,e.jsx(i.h3,{id:"toolbar-piccola",children:"Toolbar piccola"}),`
`,e.jsxs(i.p,{children:["Applicando l'attributo ",e.jsx(i.code,{children:'size="sm"'})," alla Toolbar si ottiene la versione più piccola. Anche in questo caso le label, vengono automaticamente nascoste visivamente dal componente tramite la classe ",e.jsx(i.code,{children:".visually-hidden"}),", per rendere disponibile la descrizione agli screen reader."]}),`
`,e.jsx(o,{of:p}),`
`,e.jsx(i.h2,{id:"stato-degli-elementi",children:"Stato degli elementi"}),`
`,e.jsx(i.h3,{id:"elemento-attivo",children:"Elemento attivo"}),`
`,e.jsxs(i.p,{children:["Puoi rendere attivo un elemento della Toolbar aggiungendo l'attributo ",e.jsx(i.code,{children:"active"})," all'elemento ",e.jsx(i.code,{children:"<it-toolbar-item>"}),"."]}),`
`,e.jsx(i.h3,{id:"elemento-disabilitato",children:"Elemento disabilitato"}),`
`,e.jsxs(i.p,{children:["Puoi disabilitare un elemento della Toolbar aggiungendo l'attributo ",e.jsx(i.code,{children:"disabled"})," all'elemento ",e.jsx(i.code,{children:"<it-toolbar-item>"}),"."]}),`
`,e.jsxs(i.p,{children:["Agli elementi disabilitati verranno applicati automaticamente dal componente ",e.jsx(i.code,{children:"<it-toolbar-item>"})," alcuni accorgimenti relativi all'accessibilità:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["ai link (",e.jsx(i.code,{children:"<a>"}),") verranno aggiunti automaticamente gli attributi HTML ",e.jsx(i.code,{children:"disabled"})," e ",e.jsx(i.code,{children:'aria-disabled="true"'}),"."]}),`
`,e.jsxs(i.li,{children:["al pulsante (",e.jsx(i.code,{children:"<it-button>"}),") verrà aggiunto automaticamente l'attributo ",e.jsx(i.code,{children:"disabled"})," che di conseguenza imposta l'attributo ",e.jsx(i.code,{children:'aria-disabled="true"'})," al ",e.jsx(i.code,{children:"<button>"})," generato."]}),`
`]}),`
`,e.jsx(i.h2,{id:"divisori",children:"Divisori"}),`
`,e.jsxs(i.p,{children:["Puoi aggiungere degli elementi divisori fra gli elementi inserendo un elemento di tipo ",e.jsx(i.code,{children:"<it-toolbar-item divider></it-toolbar-item>"})]}),`
`,e.jsxs(i.p,{children:["Il componente ",e.jsx(i.code,{children:"<it-toolbar-item>"})," si occuperà di gestire autonomamente gli attributi per l'accessiblità dell'elemento divisorio."]}),`
`,e.jsx(o,{of:x}),`
`,e.jsx(i.h2,{id:"con-badge",children:"Con badge"}),`
`,e.jsx(i.p,{children:"I Badge possono essere utilizzati per contenere numeri al fine di indicare, ad esempio, contenuti non letti."}),`
`,e.jsxs(i.p,{children:["Utilizza l'attributo ",e.jsx(i.code,{children:"badge"})," sul componente ",e.jsx(i.code,{children:"it-toolbar-item"})," per specificare il numero da visualizzare all'interno del badge."]}),`
`,e.jsxs(i.p,{children:["Utilizza l'attributo ",e.jsx(i.code,{children:"label-extended"})," per fornire una descrizione più dettagliata del badge ai lettori di schermo."]}),`
`,e.jsx(o,{of:j}),`
`,e.jsx(i.h3,{id:"toolbar-media-e-piccola-con-badge",children:"Toolbar media e piccola con badge"}),`
`,e.jsxs(i.p,{children:["Nelle versioni media e piccola della toolbar (",e.jsx(i.code,{children:'<it-toolbar size="md">'})," e ",e.jsx(i.code,{children:'<it-toolbar size="sm">'}),"), i Badge non contengono numeri ma possono essere usati come alert generici. Il numero dei contenuti non letti o nuovi va indicato nell'attributo ",e.jsx(i.code,{children:"label-extended"})," riservato agli screen reader."]}),`
`,e.jsx(o,{of:b}),`
`,e.jsx(i.h2,{id:"toolbar-con-dropdown",children:"Toolbar con dropdown"}),`
`,e.jsx(i.p,{children:"All’interno della Toolbar è possibile implementare dei pulsanti dropdown con relativo sottomenù."}),`
`,e.jsxs(i.p,{children:["Aggiungi l'attributo ",e.jsx(i.code,{children:"dropdown"})," al componente ",e.jsx(i.code,{children:"<it-toolbar-item>"})," per trasformarlo in un elemento dropdown. Le voci del menu di tipo ",e.jsx(i.code,{children:"<it-dropdown-item>"})," vanno inserite nello slot dedicato ",e.jsx(i.code,{children:"items"})," in questo modo:"]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<it-toolbar-item dropdown label="Dropdown">
  <it-dropdown-item slot="items">Voce 1</it-dropdown-item>
  <it-dropdown-item slot="items">Voce 2</it-dropdown-item>
</it-toolbar-item>
`})}),`
`,e.jsxs(i.p,{children:["Se aggiungi la classe ",e.jsx(i.code,{children:"no-expand"})," al componente ",e.jsx(i.code,{children:"<it-toolbar-item>"}),", l'icona di espansione del menu non verrà mostrata. Questo è utile quando hai un menu del tipo ",e.jsx(i.code,{children:"altro"})," o ",e.jsx(i.code,{children:"more"}),` il cui simbolo di espansione è già implicito nell'icona stessa e quindi l'icona di espansione risulterebbe ridondante.
(Negli esempi sottostanti, nell'elemento 'Altro' è stata rimossa l'icona di espansione del menu tramite la classe `,e.jsx(i.code,{children:"no-expand"}),")."]}),`
`,e.jsx(i.h3,{id:"toolbar-grande-con-dropdown",children:"Toolbar grande con dropdown"}),`
`,e.jsx(o,{of:u}),`
`,e.jsx(i.h3,{id:"toolbar-media-con-dropdown",children:"Toolbar media con dropdown"}),`
`,e.jsx(o,{of:g}),`
`,e.jsx(i.h3,{id:"toolbar-piccola-con-dropdown",children:"Toolbar piccola con dropdown"}),`
`,e.jsx(o,{of:v}),`
`,e.jsx(i.h2,{id:"toolbar-verticale",children:"Toolbar verticale"}),`
`,e.jsxs(i.p,{children:["Applicando l'attributo ",e.jsx(i.code,{children:'orientation="vertical"'})," alla Toolbar gli elementi vengono visualizzati in colonna."]}),`
`,e.jsx(o,{of:z}),`
`,e.jsx(i.h3,{id:"toolbar-media-verticale",children:"Toolbar media verticale"}),`
`,e.jsx(o,{of:f}),`
`,e.jsx(i.h3,{id:"toolbar-piccola-verticale",children:"Toolbar piccola verticale"}),`
`,e.jsx(o,{of:w}),`
`,e.jsx(i.h2,{id:"proprietà-metodi-ed-eventi-accessibili-via-js",children:"Proprietà, metodi ed eventi accessibili via js"}),`
`,e.jsxs(i.p,{children:["Il componente ",e.jsx(i.code,{children:"<it-toolbar-item>"})," espone le seguenti proprietà, metodi ed eventi accessibili via JavaScript."]}),`
`,e.jsx(i.h3,{id:"eventi",children:"Eventi"}),`
`,e.jsxs(i.p,{children:["Il componente ",e.jsx(i.code,{children:"<it-toolbar-item>"})," emette i seguenti eventi custom:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"it-toolbar-item-click"}),", quando l'elemento viene cliccato. L'evento fornisce il dettaglio dell'elemento cliccato (",e.jsx(i.code,{children:"event.detail"}),"). E'utile soprattuto quando l'elemento renderizza un bottone sul quale è necessario definire un comportamento custom al click."]}),`
`]}),`
`,e.jsx(i.h2,{id:"personalizzazione-degli-stili",children:"Personalizzazione degli stili"}),`
`,e.jsxs(i.p,{children:["Per la personalizzazione degli stili puoi usare i selettori ",e.jsx(i.code,{children:"::part"})," dedicati."]}),`
`,e.jsxs(i.h3,{id:"selettori-di-it-toolbar",children:["Selettori di ",e.jsx(i.code,{children:"it-toolbar"})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"::part(toolbar-container)"})," — elemento ",e.jsx(i.code,{children:"<nav>"})," contenitore della toolbar"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"::part(toolbar-list)"})," — elemento ",e.jsx(i.code,{children:"<ul>"})," della lista degli item"]}),`
`]}),`
`,e.jsxs(i.h3,{id:"selettori-di-it-toolbar-item",children:["Selettori di ",e.jsx(i.code,{children:"it-toolbar-item"})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"::part(toolbar-item)"})," — elemento ",e.jsx(i.code,{children:"<li>"})," wrapper di ogni voce"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"::part(toolbar-divider)"})," — aggiunto insieme a ",e.jsx(i.code,{children:"toolbar-item"})," quando l'elemento è un divisore"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"::part(toolbar-item-element)"})," — elemento interno della voce (link, bottone o dropdown)"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"::part(focusable)"})," — elemento su cui cade il focus (link o bottone interno)"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"::part(button)"})," — bottone interno (solo variante pulsante e dropdown)"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"::part(icon)"})," — icona dell'elemento"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"::part(expand-icon)"})," — icona di espansione del dropdown (solo variante ",e.jsx(i.code,{children:"dropdown"}),")"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"::part(badge-wrapper)"})," — contenitore del badge"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"::part(badge)"})," — elemento ",e.jsx(i.code,{children:"<span>"})," del badge"]}),`
`]}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"/docs/personalizzazione-degli-stili--documentazione#selettore-part",children:"Vai alla guida sul selettore part"})})]})}function A(n={}){const{wrapper:i}={...d(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(r,{...n})}):r(n)}export{A as default};

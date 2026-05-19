import{j as e,M as d,C as n,a as p,D as a}from"./blocks-DY0RjfjX.js";import{useMDXComponents as l}from"./index-Ck0gki_e.js";import{S as u,E as t,P as m,T as h,C as x,a as j,D as g,L as b,b as f,R as v,c as z,M as P,d as r,I as s}from"./it-autocomplete.stories-CT-yGO7Q.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-6eu1PyyH.js";function c(o){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:u}),`
`,e.jsx(i.h1,{id:"autocomplete",children:"Autocomplete"}),`
`,e.jsx("description",{children:"Campo di input che suggerisce automaticamente opzioni di completamento man mano che l'utente digita."}),`
`,e.jsx(i.h2,{id:"cosa-fa",children:"Cosa fa"}),`
`,e.jsxs(i.p,{children:["Il componente Autocomplete (",e.jsx(i.code,{children:"it-autocomplete"}),") suggerisce opzioni di autocompletamento mentre l'utente digita in un campo input. I suggerimenti si basano sul testo inserito e aiutano l'utente a compilare rapidamente il campo senza dover scrivere il testo per intero."]}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"https://designers.italia.it/design-system/form/autocompletamento/",rel:"nofollow",children:"Approfondisci quando e come usare il componente Autocomplete"})}),`
`,e.jsx(i.h2,{id:"anteprima-e-attributi-del-componente",children:"Anteprima e attributi del componente"}),`
`,e.jsxs(i.p,{children:[`Modifica gli attributi nella tabella per personalizzare in tempo reale l'aspetto e il comportamento del componente.
Per vedere come cambia il codice, clicca su `,e.jsx(i.strong,{children:"Show code"}),"."]}),`
`,e.jsx(n,{of:t}),`
`,e.jsx(p,{of:t}),`
`,e.jsx(i.h2,{id:"accessibilità",children:"Accessibilità"}),`
`,e.jsxs(i.p,{children:["Il componente implementa il pattern ",e.jsx(i.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-autocomplete-list/",rel:"nofollow",children:"ARIA Combobox with List Autocomplete"}),`
che garantisce:`]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"corretti attributi ARIA per la navigazione assistita;"}),`
`,e.jsx(i.li,{children:"annunci vocali per lettori di schermo;"}),`
`,e.jsx(i.li,{children:"gestione completa della navigazione da tastiera;"}),`
`,e.jsx(i.li,{children:"appropriata gestione del focus."}),`
`]}),`
`,e.jsxs(i.p,{children:["Includi sempre un’etichetta descrittiva del campo nello slot ",e.jsx(i.code,{children:"label"}),"."]}),`
`,e.jsx(i.h2,{id:"testo-segnaposto",children:"Testo segnaposto"}),`
`,e.jsxs(i.p,{children:["Per aggiungere un testo segnaposto con esempi di compilazione, usa l'attributo ",e.jsx(i.code,{children:"placeholder"}),"."]}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(i.h2,{id:"testo-di-supporto",children:"Testo di supporto"}),`
`,e.jsxs(i.p,{children:["Per aggiungere un testo con istruzioni di compilazione, usa l'attributo ",e.jsx(i.code,{children:"support-text"}),". Il testo di supporto apparirà sotto il campo input e resterà sempre visibile."]}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(i.h2,{id:"campo-obbligatorio",children:"Campo obbligatorio"}),`
`,e.jsxs(i.p,{children:["Per rendere il campo obbligatorio, usa l'attributo ",e.jsx(i.code,{children:"required"}),"."]}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(i.h2,{id:"lunghezza-minima-per-i-suggerimenti",children:"Lunghezza minima per i suggerimenti"}),`
`,e.jsxs(i.p,{children:["Per impostare un numero minimo di caratteri da digitare prima che vengano mostrati i suggerimenti, usa l'opzione ",e.jsx(i.code,{children:"min-length"}),". Questo è particolarmente utile quando si lavora con grandi quantità di dati."]}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(i.h2,{id:"stato-disabilitato",children:"Stato disabilitato"}),`
`,e.jsxs(i.p,{children:["Per impedire l'interazione con il campo, usa l'attributo ",e.jsx(i.code,{children:"disabled"}),"."]}),`
`,e.jsx(n,{of:g}),`
`,e.jsx(i.h2,{id:"etichetta-nascosta",children:"Etichetta nascosta"}),`
`,e.jsxs(i.p,{children:["Per nascondere l'etichetta (ad esempio nei campi di ricerca), usa l'attributo ",e.jsx(i.code,{children:"label-hidden"}),"."]}),`
`,e.jsx(i.p,{children:"L'etichetta sarà nascosta visivamente ma verrà letta dai lettori di schermo."}),`
`,e.jsx(n,{of:b}),`
`,e.jsx(i.h2,{id:"opzioni-dinamiche",children:"Opzioni dinamiche"}),`
`,e.jsxs(i.p,{children:["Puoi far popolare dinamicamente le opzioni del componente ",e.jsx(i.code,{children:"it-autocomplete"})," attraverso manipolazioni JavaScript e/o definendo una funzione da associare all'attributo ",e.jsx(i.code,{children:"source"})," via JS. Il formato delle opzioni deve essere un array di oggetti con le proprietà ",e.jsx(i.code,{children:"value"})," e ",e.jsx(i.code,{children:"label"}),"."]}),`
`,e.jsx(i.h3,{id:"dati-dipendenti-da-un-altro-input",children:"Dati dipendenti da un altro input"}),`
`,e.jsx(i.p,{children:"Puoi impostare che le opzioni suggerite dal componente si aggiornino dinamicamente in base al valore che è stato selezionato in un altro campo input, come ad esempio una select di un form."}),`
`,e.jsx(i.p,{children:"Espandi il codice degli esempi per scoprire come implementare questa funzionalità."}),`
`,e.jsx(n,{of:f}),`
`,e.jsx(n,{of:v}),`
`,e.jsx(i.h3,{id:"ricerca-asincrona",children:"Ricerca asincrona"}),`
`,e.jsxs(i.p,{children:["Puoi passare come opzione ",e.jsx(i.code,{children:"source"}),` una funzione per filtrare i dati e popolare il componente dinamicamente.
La funzione riceve come parametri la query di ricerca e una callback per popolare i risultati.`]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-ts",children:`source: AutocompleteOption[]
  | ((
        query: string,
        callback: (results: AutocompleteOption[]) => void
      ) => void)
`})}),`
`,e.jsx(i.p,{children:"Espandi il codice dell'esempio per scoprire come implementare questa funzionalità."}),`
`,e.jsx(n,{of:z}),`
`,e.jsx(i.h2,{id:"valore-di-default",children:"Valore di default"}),`
`,e.jsxs(i.p,{children:["Per impostare un valore iniziale, usa l'attributo ",e.jsx(i.code,{children:"default-value"}),"."]}),`
`,e.jsxs(i.p,{children:["Impostare un valore iniziale richiede un approccio diverso a seconda di come carichi i dati relativi alle opzioni (",e.jsx(i.code,{children:"source"}),"):"]}),`
`,e.jsxs(i.ol,{children:[`
`,e.jsxs(i.li,{children:[`
`,e.jsxs(i.p,{children:["Per ",e.jsx(i.strong,{children:"opzioni statiche"}),", ",e.jsx(i.strong,{children:"usa una stringa"}),". Se passi un array statico a ",e.jsx(i.code,{children:"source"}),", imposta l'attributo ",e.jsx(i.code,{children:"default-value"})," con il valore stringa del ",e.jsx(i.code,{children:"value"})," corrispondente. Il componente troverà da solo l'etichetta corretta da mostrare."]}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsxs(i.p,{children:["Per ",e.jsx(i.strong,{children:"opzioni dinamiche"}),", ",e.jsx(i.strong,{children:"usa un oggetto completo"}),". Se usi una funzione per caricare i dati nell'attributo ",e.jsx(i.code,{children:"source"}),", il componente potrebbe non conoscere le opzioni all'avvio. Popola l'attributo ",e.jsx(i.code,{children:"default-value"})," con un oggetto che contenga sia ",e.jsx(i.code,{children:"value"})," che ",e.jsx(i.code,{children:"label"}),"."]}),`
`]}),`
`]}),`
`,e.jsx(i.p,{children:"Se stai usando il componente in un framework (React, Angular, Vue, Svelte), segui le indicazioni del tuo framework per quanto riguarda gestione eventi, lifecycle events e fetching asincrono dei dati."}),`
`,e.jsx(i.p,{children:"Per scoprire i diversi comportamenti, clicca su Show code negli gli esempi."}),`
`,e.jsx(n,{of:P}),`
`,e.jsx(i.h2,{id:"",children:r.name}),`
`,e.jsx(a,{of:r}),`
`,e.jsx(i.h2,{id:"-1",children:s.name}),`
`,e.jsx(a,{of:s})]})}function D(o={}){const{wrapper:i}={...l(),...o.components};return i?e.jsx(i,{...o,children:e.jsx(c,{...o})}):c(o)}export{D as default};

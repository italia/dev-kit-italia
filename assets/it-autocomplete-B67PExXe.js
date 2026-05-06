import{j as e,M as d,C as n,a as p,D as t}from"./blocks-wEbwr2sX.js";import{useMDXComponents as l}from"./index-Dja3nfEA.js";import{S as u,E as a,P as m,T as h,C as x,a as j,D as g,L as f,b,R as v,c as z,M as A,d as s,I as r}from"./it-autocomplete.stories-B2cbHLpG.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-CEKgHznA.js";function c(o){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:u}),`
`,e.jsx(i.h1,{id:"autocomplete",children:"Autocomplete"}),`
`,e.jsx("description",{children:"Campo di input che suggerisce automaticamente opzioni di completamento man mano che l'utente digita"}),`
`,e.jsx(i.h2,{id:"cosa-fa",children:"Cosa fa"}),`
`,e.jsx(i.p,{children:"Il componente Autocomplete consiste in un campo input con funzione di autocompletamento dei dati che fornisce all'utente suggerimenti pertinenti mentre inizia a digitare."}),`
`,e.jsx(i.p,{children:"Questi suggerimenti si basano sul testo inserito e aiutano l'utente a completare rapidamente il campo senza dover scrivere il testo per intero."}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"https://designers.italia.it/design-system/form/autocompletamento/",rel:"nofollow",children:"Approfondisci quando e come usare il componente Autocomplete"})}),`
`,e.jsx(i.h2,{id:"anteprima-e-attributi-del-componente",children:"Anteprima e attributi del componente"}),`
`,e.jsxs(i.p,{children:[`Modifica gli attributi nella tabella per personalizzare in tempo reale l'aspetto e il comportamento del componente.
Per vedere come cambia il codice, clicca su `,e.jsx(i.strong,{children:"Show code"}),"."]}),`
`,e.jsx(n,{of:a}),`
`,e.jsx(p,{of:a}),`
`,e.jsx(i.h2,{id:"accessibilità",children:"Accessibilità"}),`
`,e.jsxs(i.p,{children:["Il componente implementa il pattern ",e.jsx(i.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-autocomplete-list/",rel:"nofollow",children:"ARIA Combobox with List Autocomplete"}),`
che garantisce:`]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"corretti attributi ARIA per la navigazione assistita"}),`
`,e.jsx(i.li,{children:"annunci vocali per screen reader"}),`
`,e.jsx(i.li,{children:"gestione completa da tastiera"}),`
`,e.jsx(i.li,{children:"focus management appropriato"}),`
`]}),`
`,e.jsxs(i.p,{children:["Ricordati di includere sempre un'etichetta descrittiva, in modo che gli utenti comprendano chiaramente la sua funzione, dichiarandola nello slot ",e.jsx(i.code,{children:"label"}),"."]}),`
`,e.jsx(i.h2,{id:"testo-segnaposto",children:"Testo segnaposto"}),`
`,e.jsxs(i.p,{children:["Puoi abbinare al componente un testo segnaposto per fornire indicazioni sul tipo di contenuto atteso valorizzando l'attributo ",e.jsx(i.code,{children:"placeholder"}),"."]}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(i.h2,{id:"testo-di-supporto",children:"Testo di supporto"}),`
`,e.jsxs(i.p,{children:["In caso di necessità, puoi utilizzare un ulteriore contenuto testuale sotto il campo, indicando nell'attributo ",e.jsx(i.code,{children:"support-text"}),`
il testo da visualizzare.`]}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(i.h2,{id:"campo-obbligatorio",children:"Campo obbligatorio"}),`
`,e.jsxs(i.p,{children:["Per rendere il campo obbligatorio, aggiungi l'attributo ",e.jsx(i.code,{children:"required"}),"."]}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(i.h2,{id:"lunghezza-minima-per-i-suggerimenti",children:"Lunghezza minima per i suggerimenti"}),`
`,e.jsxs(i.p,{children:["L'opzione ",e.jsx(i.code,{children:"min-length"}),` impedisce la visualizzazione dei suggerimenti se vengono digitati meno di N caratteri.
Questo è particolarmente utile quando si lavora con grandi quantità di dati.`]}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(i.h2,{id:"stato-disabilitato",children:"Stato disabilitato"}),`
`,e.jsxs(i.p,{children:["Aggiungi l'attributo ",e.jsx(i.code,{children:"disabled"})," per impedire l'interazione con il campo."]}),`
`,e.jsx(n,{of:g}),`
`,e.jsx(i.h2,{id:"etichetta-nascosta",children:"Etichetta nascosta"}),`
`,e.jsxs(i.p,{children:["Se vuoi nascondere l'etichetta (ad esempio nei campi di ricerca), utilizza l'attributo ",e.jsx(i.code,{children:"label-hidden"}),"."]}),`
`,e.jsx(i.p,{children:"L'etichetta sarà nascosta visivamente ma verrà letta dai lettori di schermo."}),`
`,e.jsx(n,{of:f}),`
`,e.jsx(i.h2,{id:"opzioni-dinamiche",children:"Opzioni dinamiche"}),`
`,e.jsxs(i.p,{children:["Attraverso manipolazioni JavaScript e/o definendo una funzione da associare all'attributo ",e.jsx(i.code,{children:"source"})," via JS, puoi popolare dinamicamente le opzioni del componente ",e.jsx(i.code,{children:"it-autocomplete"}),"."]}),`
`,e.jsxs(i.p,{children:["Il formato delle opzioni deve essere un array di oggetti con le proprietà ",e.jsx(i.code,{children:"value"})," e ",e.jsx(i.code,{children:"label"}),"."]}),`
`,e.jsx(i.h3,{id:"dati-dipendenti-da-un-altro-input",children:"Dati dipendenti da un altro input"}),`
`,e.jsx(i.p,{children:`In questo esempio viene mostrato come popolare il componente con dati che cambiano a fronte di un altro input,
ad esempio il valore di un altro elemento di un form (come una select nell'esempio che segue).`}),`
`,e.jsx(i.p,{children:"Espandi il codice degli esempi sottostanti per vedere un esempio di come implementare questa funzionalità."}),`
`,e.jsx(n,{of:b}),`
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
`,e.jsx(i.p,{children:"Espandi il codice dell'esempio sottostante per vedere come implementare questa funzionalità."}),`
`,e.jsx(n,{of:z}),`
`,e.jsx(i.h2,{id:"valore-di-default",children:"Valore di default"}),`
`,e.jsxs(i.p,{children:["Puoi impostare un valore iniziale utilizzando l'attributo ",e.jsx(i.code,{children:"default-value"}),`.
Impostare un valore iniziale richiede un approccio diverso a seconda di come carichi i dati relativi alle opzioni (`,e.jsx(i.code,{children:"source"}),")."]}),`
`,e.jsxs(i.ol,{children:[`
`,e.jsxs(i.li,{children:[`
`,e.jsxs(i.p,{children:[e.jsx(i.strong,{children:"Opzioni statiche: Usa una stringa"}),". Se passi un array statico alla ",e.jsx(i.code,{children:"source"}),", imposta l'attributo ",e.jsx(i.code,{children:"default-value"})," con il valore stringa del ",e.jsx(i.code,{children:"value"})," corrispondente. Il componente troverà da solo l'etichetta corretta da mostrare."]}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsxs(i.p,{children:[e.jsx(i.strong,{children:"Opzioni dinamiche: Usa un oggetto completo"}),". Se usi una funzione per caricare i dati nell'attributo ",e.jsx(i.code,{children:"source"}),", il componente potrebbe non conoscere le opzioni all'avvio. Popola l'attributo ",e.jsx(i.code,{children:"default-value"})," con un oggetto che contenga sia ",e.jsx(i.code,{children:"value"})," che ",e.jsx(i.code,{children:"label"}),"."]}),`
`]}),`
`]}),`
`,e.jsx(i.p,{children:"Se stai usando il componente in un framework (React, Angular, Vue, Svelte), segui le best practice del tuo framework per quanto riguarda gestione eventi, lifecycle events e fetching asincrono dei dati."}),`
`,e.jsx(i.p,{children:"Puoi esaminare gli esempi sottostanti per vedere i diversi comportamenti con esempi semplificati, clicca su Show code."}),`
`,e.jsx(n,{of:A}),`
`,e.jsx(i.h2,{id:"",children:s.name}),`
`,e.jsx(t,{of:s}),`
`,e.jsx(i.h2,{id:"-1",children:r.name}),`
`,e.jsx(t,{of:r})]})}function M(o={}){const{wrapper:i}={...l(),...o.components};return i?e.jsx(i,{...o,children:e.jsx(c,{...o})}):c(o)}export{M as default};

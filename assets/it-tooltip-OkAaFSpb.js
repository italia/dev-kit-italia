import{j as e,M as r,T as c,C as n,a as d}from"./blocks-B6hS5Cag.js";import{useMDXComponents as a}from"./index-BuMJafY_.js";import{T as t,B as l,S as p,P as h,a as u,A as m,E as x}from"./it-tooltip.stories-Bw8VikAD.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-CbN6PWjR.js";function s(o){const i={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...a(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:t}),`
`,e.jsx(c,{of:t}),`
`,e.jsx("description",{children:"Breve messaggio a comparsa per fornire spiegazioni contestuali e suggerimenti"}),`
`,e.jsx(i.h2,{id:"cosa-fa",children:"Cosa fa"}),`
`,e.jsxs(i.p,{children:["Il componente Tooltip (",e.jsx(i.code,{children:"it-tooltip"}),`) visualizza una breve etichetta testuale in overlay, posizionata dinamicamente rispetto a un elemento trigger.
Utilizza `,e.jsx(i.a,{href:"https://floating-ui.com/",rel:"nofollow",children:"Floating UI"})," per il posizionamento intelligente e si adatta automaticamente allo spazio disponibile."]}),`
`,e.jsx(i.p,{children:"A differenza del Popover, il Tooltip è pensato per contenuti brevissimi (una frase o poche parole) e si attiva automaticamente al passaggio del mouse o al focus da tastiera, senza richiedere un click."}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"https://designers.italia.it/design-system/componenti/tooltip/",rel:"nofollow",children:"Approfondisci quando e come usare il componente Tooltip"})}),`
`,e.jsx(i.h3,{id:"alternative-a-questo-componente",children:"Alternative a questo componente"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"/docs/componenti-popover--documentazione",children:"Popover"}),": contenuti più strutturati con titolo, testo e link."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"/docs/componenti-modal--documentazione",children:"Modal"}),": finestre di dialogo che richiedono l'attenzione dell'utente e bloccano l'interazione con il resto dell'interfaccia."]}),`
`]}),`
`,e.jsx(i.h3,{id:"anteprima-e-attributi-del-componente",children:"Anteprima e attributi del componente"}),`
`,e.jsxs(i.p,{children:[`Modifica gli attributi nella tabella per personalizzare in tempo reale l'aspetto e il comportamento del componente.
Per vedere come cambia il codice, clicca su `,e.jsx(i.strong,{children:"Show code"}),"."]}),`
`,e.jsx(n,{of:l}),`
`,e.jsx(d,{of:l}),`
`,e.jsx(i.h2,{id:"indicazioni-generali",children:"Indicazioni generali"}),`
`,e.jsxs(i.p,{children:["Il tooltip si attiva automaticamente al passaggio del mouse (",e.jsx(i.code,{children:"mouseenter"}),") o al focus da tastiera (",e.jsx(i.code,{children:"focusin"}),") su qualsiasi elemento interattivo inserito nello slot ",e.jsx(i.code,{children:"trigger"}),`.
È adatto sia per `,e.jsx(i.code,{children:"it-button"})," che per elementi nativi come ",e.jsx(i.code,{children:"<button>"})," o ",e.jsx(i.code,{children:"<a>"}),"."]}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(i.h2,{id:"accessibilità",children:"Accessibilità"}),`
`,e.jsx(i.p,{children:"Il componente implementa le seguenti funzionalità per garantire l'accessibilità:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"attributi ARIA"}),": gestisce automaticamente ",e.jsx(i.code,{children:'role="tooltip"'})," sul pannello e ",e.jsx(i.code,{children:"aria-describedby"})," sul trigger;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"navigazione da tastiera"}),": supporta la chiusura con ",e.jsx(i.code,{children:"Esc"})," quando il tooltip è aperto tramite focus;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"stato nascosto"}),": imposta ",e.jsx(i.code,{children:'aria-hidden="true"'})," sul pannello quando il tooltip non è visibile;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"nessun focus steal"}),": il tooltip non sposta il focus quando viene mostrato."]}),`
`]}),`
`,e.jsxs(i.p,{children:[`I tooltip di Dev Kit Italia restano visibili quando il puntatore si sposta dal trigger al tooltip stesso,
migliorando così la conformità al criterio `,e.jsxs(i.a,{href:"https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus.html",rel:"nofollow",children:["WCAG 2.1 ",e.jsx(i.strong,{children:"1.4.13 - Content on Hover or Focus"})]}),`.
Per gli utenti da tastiera il requisito è già soddisfatto tramite la gestione del focus.`]}),`
`,e.jsxs("it-callout",{variant:"warning","heading-level":"h3",children:[e.jsx("span",{slot:"title",children:"Attenzione"}),e.jsxs("p",{children:["È importante usare come ",e.jsx(i.code,{children:"trigger"})," solo elementi HTML che sono tradizionalmente attivabili da tastiera e interattivi (link, pulsanti o elementi di form)."]}),e.jsxs("p",{children:["Sebbene arbitrariamente gli elementi HTML (come ",e.jsx(i.code,{children:"<span>"}),") possano essere resi attivabili tramite l'attributo ",e.jsx(i.code,{children:'tabindex="0"'}),`,
ciò aggiungerà interruzioni di tabulazioni potenzialmente dannose per gli utenti che usano la tastiera per navigare.
Inoltre, la maggior parte delle tecnologie assistive in questa situazione non annuncia il tooltip come ci si potrebbe invece attendere.`]})]}),`
`,e.jsx(i.h2,{id:"posizione",children:"Posizione"}),`
`,e.jsxs(i.p,{children:["Il componente supporta 12 posizioni tramite l'attributo ",e.jsx(i.code,{children:"placement"}),". Usa ",e.jsx(i.code,{children:"top"}),", ",e.jsx(i.code,{children:"right"}),", ",e.jsx(i.code,{children:"bottom"})," o ",e.jsx(i.code,{children:"left"})," per posizioni centrate, oppure aggiungi ",e.jsx(i.code,{children:"-start"})," o ",e.jsx(i.code,{children:"-end"})," per allineamenti specifici."]}),`
`,e.jsx(i.p,{children:"Il posizionamento si adatta automaticamente allo spazio disponibile."}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(i.h2,{id:"codice-html-personalizzato",children:"Codice HTML personalizzato"}),`
`,e.jsxs(i.p,{children:["Puoi inserire codice HTML personalizzato nello slot ",e.jsx(i.code,{children:"content"}),`.
Non è consigliato inserire elementi interattivi, valuta l'uso di `,e.jsx(i.a,{href:"/docs/componenti-popover--documentazione",children:"Popover"})," per casi d'uso più complessi."]}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(i.h2,{id:"attivazione-controllata",children:"Attivazione controllata"}),`
`,e.jsxs(i.p,{children:["Impostando l'attributo ",e.jsx(i.code,{children:"controlled"}),`, il tooltip non gestisce automaticamente l'apertura e la chiusura.
Per controllarne lo stato, richiama i metodi `,e.jsx(i.code,{children:"showTooltip()"}),", ",e.jsx(i.code,{children:"hideTooltip()"})," o ",e.jsx(i.code,{children:"toggle()"}),"."]}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(i.h2,{id:"metodi-ed-eventi",children:"Metodi ed eventi"}),`
`,e.jsx(i.p,{children:"Puoi controllare programmaticamente il tooltip utilizzando i seguenti metodi:"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-javascript",children:`const tooltip = document.querySelector('it-tooltip');

tooltip.showTooltip();  // Mostra il tooltip
tooltip.hideTooltip();  // Nasconde il tooltip
tooltip.toggle();       // Alterna la visibilità
`})}),`
`,e.jsxs(i.p,{children:["Il componente emette l'evento ",e.jsx(i.code,{children:"it-tooltip-open"})," quando viene mostrato e ",e.jsx(i.code,{children:"it-tooltip-close"}),` quando viene nascosto.
Apri la console del browser per vedere i log.`]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-javascript",children:`const tooltip = document.querySelector('it-tooltip');

tooltip.addEventListener('it-tooltip-open', (e) => {
  console.log('Tooltip aperto', e);
});

tooltip.addEventListener('it-tooltip-close', (e) => {
  console.log('Tooltip chiuso', e);
});
`})}),`
`,e.jsx(n,{of:x})]})}function b(o={}){const{wrapper:i}={...a(),...o.components};return i?e.jsx(i,{...o,children:e.jsx(s,{...o})}):s(o)}export{b as default};

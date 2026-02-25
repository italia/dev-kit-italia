import{j as e,M as s,C as o}from"./blocks-C1WJMGUC.js";import{useMDXComponents as t}from"./index-BrQ7_w4M.js";import{S as l,D as d,A as r,a as c,V as p,E as u}from"./form.stories-B2V1gbhj.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-90FZwcPR.js";function a(n){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:l}),`
`,e.jsx(i.h1,{id:"form",children:"Form"}),`
`,e.jsx("description",{children:"Campi input aggregati per la raccolta di dati e la configurazione di opzioni"}),`
`,e.jsx(i.h2,{id:"cosa-fa",children:"Cosa fa"}),`
`,e.jsx(i.p,{children:"Il componente form, o modulo, è un involucro (wrapper) che permette di raggruppare e impaginare campi input correlati per l'invio di informazioni o la configurazione di opzioni."}),`
`,e.jsx(i.p,{children:"Le persone possono inviare il form quando tutti i campi obbligatori sono compilati e i dati sono validi rispetto al formato richiesto dallo specifico campo."}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"https://designers.italia.it/design-system/componenti/form/",rel:"nofollow",children:"Approfondisci come e quando usare il componente Form"})}),`
`,e.jsx(i.h2,{id:"organizzazione-dei-campi",children:"Organizzazione dei campi"}),`
`,e.jsxs(i.p,{children:[`Nella visualizzazione predefinita di un form gli elementi sono distribuiti verticalmente, ma è possibile utilizzare classi aggiuntive per variare questo tipo di layout.
(Bootstrap Italia applica automaticamente a tutti i form `,e.jsx(i.code,{children:"display: block"})," e ",e.jsx(i.code,{children:"width: 100%"}),".)"]}),`
`,e.jsx(i.h3,{id:"dimensionamento-delle-colonne",children:"Dimensionamento delle colonne"}),`
`,e.jsxs(i.p,{children:[`Strutture più complesse possono essere costruite usando il sistema a griglia, da utilizzare per layout che richiedono più colonne, larghezze diverse e opzioni di allineamento aggiuntive.
La classe `,e.jsx(i.code,{children:".row"})," ne assicura una corretta spaziatura. Questa classe deve essere applicata ad un elemento html contenitore (ad esempio un ",e.jsx(i.code,{children:"<div>"}),")."]}),`
`,e.jsxs(i.p,{children:["Si può scegliere di dare una dimensione ad una colonna, ad esempio dandogli una classe ",e.jsx(i.code,{children:".col-md-6"})," per ottenere una certo design dal breakpoint ",e.jsx(i.code,{children:"md"})," in su, mentre le restanti colonne con classe ",e.jsx(i.code,{children:".col-md"}),` si divideranno il resto dello spazio.
La classe `,e.jsx(i.code,{children:".col-md*"})," può essere applicata sia ad un tag html che fa da contenitore (ad esempio un ",e.jsx(i.code,{children:"div"}),"), sia al componente di input stesso (ad esempio su ",e.jsx(i.code,{children:'<it-input class="col-md-6">'}),")."]}),`
`,e.jsx(o,{of:d}),`
`,e.jsx(i.h3,{id:"autodimensionamento",children:"Autodimensionamento"}),`
`,e.jsxs(i.p,{children:["L’esempio seguente usa una delle ",e.jsx(i.a,{href:"https://italia.github.io/bootstrap-italia/docs/organizzare-gli-spazi/flex/",rel:"nofollow",children:"utilità di flexbox"})," per centrare verticalmente dal breakpoint ",e.jsx(i.code,{children:"lg"})," in su il contenuto e cambiando ",e.jsx(i.code,{children:".col"})," con ",e.jsx(i.code,{children:".col-auto"}),` in modo che le colonne occupino solo lo spazio necessario.
In altre parole, la colonna si dimensiona in base al contenuto.`]}),`
`,e.jsxs(i.p,{children:["È possibile usarlo anche quando sono presenti altre colonne con dimensioni specifiche (es.: ",e.jsx(i.code,{children:"col-sm-3"}),")."]}),`
`,e.jsx(o,{of:r}),`
`,e.jsx(i.h2,{id:"disabilitare-un-campo",children:"Disabilitare un campo"}),`
`,e.jsxs(i.p,{children:["Aggiungi l’attributo booleano ",e.jsx(i.code,{children:"disabled"})," su un campo della form per impedire le interazioni dell’utente e renderlo più chiaro."]}),`
`,e.jsx(o,{of:c}),`
`,e.jsx(i.h2,{id:"validazione",children:"Validazione"}),`
`,e.jsxs(i.p,{children:["Di base, i componenti che implementano widget utilizzabili nelle form, come ad esempio ",e.jsx(i.code,{children:"<it-input>"}),", forniscono la validazione standard del browser a seconda del tipo di campo e/o degli attributi ",e.jsx(i.code,{children:"minlength"}),", ",e.jsx(i.code,{children:"maxlength"}),", ",e.jsx(i.code,{children:"pattern"})," e ",e.jsx(i.code,{children:"required"}),"."]}),`
`,e.jsx(i.h3,{id:"validazione-custom",children:"Validazione custom"}),`
`,e.jsxs(i.p,{children:["In alternativa, è possibile eseguire una propria validazione (lato server, o con js), impostando l' attributo ",e.jsx(i.code,{children:'custom-validation="true"'}),". In questo modo la validazione di default effettuata internamente al componente è disabilitata."]}),`
`,e.jsxs(i.p,{children:["Nel caso il campo non sia valido, è necessario invalidare il campo impostando il messaggio di errore da visualizzare attraverso l'attributo ",e.jsx(i.code,{children:'validity-message="Messaggio di errore"'}),"."]}),`
`,e.jsx(o,{of:p}),`
`,e.jsx(i.h3,{id:"validazione-via-js",children:"Validazione via js"}),`
`,e.jsx(i.p,{children:"È possibile implementare una propria validazione via JS, intercettando gli eventi emessi dai componenti:"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-js",children:` window.addEventListener('DOMContentLoaded', () => {
      const form = document.querySelector('#form');
      const all_input = form.querySelectorAll('it-input');

      // evento scatenato quando il web-component ha effettutato il primo render, e l'input è disonibile nel DOM
      all_input.forEach(input=>{
        input.addEventListener('it-input-ready', (event) => {
          const input = event.detail.el;
          // il tuo codice qui.
        });
      });

      // evento scatenato quando l'input riceve l'evento di 'it-input' (ad esempio, durante l'inserimento di testo da parte dell'utente)
      all_input.forEach(i=>{
        i.addEventListener('it-input', (event) => {
          const input = event.detail.el;
          // il tuo codice qui.
        });
      });

      form.addEventListener('submit', (e) => {
        e.preventDefault();
        // il tuo codice qui.
      });
    });
`})}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(i.h4,{id:"esempio-di-validazione-via-js-con-plugin-justvalidate",children:"Esempio di validazione via JS con plugin JustValidate"}),`
`,e.jsxs(i.p,{children:["Ecco qui un esempio di implementazione della validazione con il plugin ",e.jsx(i.a,{href:"https://just-validate.dev/",rel:"nofollow",children:"JustValidate"}),"."]}),`
`,e.jsx(o,{of:u}),`
`,e.jsx(i.h2,{id:"tipologie-di-campi",children:"Tipologie di campi"}),`
`,e.jsxs(i.p,{children:["I singoli campi di tipo ",e.jsx(i.code,{children:"<it-input>"}),", ",e.jsx(i.code,{children:"<it-checkbox>"}),", ",e.jsx(i.code,{children:"<it-radio>"}),", ",e.jsx(i.code,{children:"<it-toggle>"}),", ecc. sono trattati in pagine separate della documentazione."]})]})}function v(n={}){const{wrapper:i}={...t(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(a,{...n})}):a(n)}export{v as default};

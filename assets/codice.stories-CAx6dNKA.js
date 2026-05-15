import{b as i}from"./iframe-DxWuwFk9.js";const s={title:"Organizzare i contenuti/Codice"},e={name:"Codice inline",tags:["!dev"],parameters:{docs:{source:{code:"Per esempio, <code>&lt;section&gt;</code> dovrebbe essere renderizzato come inline."}}},render:()=>i`Per esempio, <code>&lt;section&gt;</code> dovrebbe essere renderizzato come inline.`},r={name:"Blocchi di codice",tags:["!dev"],parameters:{docs:{source:{code:`<pre><code>&lt;p&gt;Testo di esempio qui...&lt;/p&gt;
&lt;p&gt;E un'altra linea di testo di esempio qui...&lt;/p&gt;
</code></pre>`}}},render:()=>i`<pre><code>&lt;p&gt;Testo di esempio qui...&lt;/p&gt;
&lt;p&gt;E un'altra linea di testo di esempio qui...&lt;/p&gt;
</code></pre>`},t={name:"Variabili",tags:["!dev"],parameters:{docs:{source:{code:"<var>y</var> = <var>m</var><var>x</var> + <var>b</var>"}}},render:()=>i`<var>y</var> = <var>m</var><var>x</var> + <var>b</var>`},o={name:"Input utente",tags:["!dev"],parameters:{docs:{source:{code:`Per cambiare directory, digitare <kbd>cd</kbd> seguito dal nome della directory.<br>
Per modificare le impostazioni, premi <kbd>ctrl</kbd> + <kbd>i</kbd>.`}}},render:()=>i`Per cambiare directory, digitare <kbd>cd</kbd> seguito dal nome della directory.<br />
      Per modificare le impostazioni, premi <kbd>ctrl</kbd> + <kbd>i</kbd>.`},a={name:"Output di esempio",tags:["!dev"],parameters:{docs:{source:{code:"<samp>Questo testo è pensato per essere trattato come output di esempio di un programma per computer.</samp>"}}},render:()=>i`<samp>Questo testo è pensato per essere trattato come output di esempio di un programma per computer.</samp>`};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'Codice inline',
  tags: ['!dev'],
  parameters: {
    docs: {
      source: {
        code: \`Per esempio, <code>&lt;section&gt;</code> dovrebbe essere renderizzato come inline.\`
      }
    }
  },
  render: () => html\`Per esempio, <code>&lt;section&gt;</code> dovrebbe essere renderizzato come inline.\`
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Blocchi di codice',
  tags: ['!dev'],
  parameters: {
    docs: {
      source: {
        code: \`<pre><code>&lt;p&gt;Testo di esempio qui...&lt;/p&gt;
&lt;p&gt;E un'altra linea di testo di esempio qui...&lt;/p&gt;
</code></pre>\`
      }
    }
  },
  render: () => html\`<pre><code>&lt;p&gt;Testo di esempio qui...&lt;/p&gt;
&lt;p&gt;E un'altra linea di testo di esempio qui...&lt;/p&gt;
</code></pre>\`
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Variabili',
  tags: ['!dev'],
  parameters: {
    docs: {
      source: {
        code: \`<var>y</var> = <var>m</var><var>x</var> + <var>b</var>\`
      }
    }
  },
  render: () => html\`<var>y</var> = <var>m</var><var>x</var> + <var>b</var>\`
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Input utente',
  tags: ['!dev'],
  parameters: {
    docs: {
      source: {
        code: \`Per cambiare directory, digitare <kbd>cd</kbd> seguito dal nome della directory.<br>
Per modificare le impostazioni, premi <kbd>ctrl</kbd> + <kbd>i</kbd>.\`
      }
    }
  },
  render: () => html\`Per cambiare directory, digitare <kbd>cd</kbd> seguito dal nome della directory.<br />
      Per modificare le impostazioni, premi <kbd>ctrl</kbd> + <kbd>i</kbd>.\`
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Output di esempio',
  tags: ['!dev'],
  parameters: {
    docs: {
      source: {
        code: \`<samp>Questo testo è pensato per essere trattato come output di esempio di un programma per computer.</samp>\`
      }
    }
  },
  render: () => html\`<samp>Questo testo è pensato per essere trattato come output di esempio di un programma per computer.</samp>\`
}`,...a.parameters?.docs?.source}}};const d=["CodiceInline","BlocchiDiCodice","Variabili","InputUtente","OutputDiEsempio"],c=Object.freeze(Object.defineProperty({__proto__:null,BlocchiDiCodice:r,CodiceInline:e,InputUtente:o,OutputDiEsempio:a,Variabili:t,__namedExportsOrder:d,default:s},Symbol.toStringTag,{value:"Module"}));export{r as B,e as C,o as I,a as O,c as S,t as V};

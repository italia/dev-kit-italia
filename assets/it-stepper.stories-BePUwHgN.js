import{b as o,o as n}from"./iframe-CPP02t7X.js";const I=["text","icons","numbers"],D=["bar","dots",""],$=[{label:"Primo contenuto",icon:"it-calendar"},{label:"Secondo contenuto",icon:"it-lock"},{label:"Terzo contenuto",icon:"it-settings"}],q=o`
  <style>
    .stepper-variant-stack {
      display: flex;
      flex-direction: column;
      gap: var(--bsi-spacing-xl, 2rem);
    }
  </style>
`,T=[(e,t)=>{const r=t.parameters.stepperDemo??{},w=[r.dark??t.args.dark?"bg-dark p-4":"",r.stack?"stepper-variant-stack":""].filter(Boolean).join(" ");return o`
      ${q}
      <div class=${w}>${e()}</div>
    `}],a=(e,t=$)=>o`
  <it-stepper
    current=${e.current}
    ?dark=${e.dark}
    header-variant=${n(e["header-variant"]||void 0)}
    mobile-progress=${n(e["mobile-progress"]||void 0)}
    ?mobile-progress-on-desktop=${e["mobile-progress-on-desktop"]}
    prev-label=${n(e["prev-label"]||void 0)}
    next-label=${n(e["next-label"]||void 0)}
    confirm-label=${n(e["confirm-label"]||void 0)}
    ?show-confirm=${e["show-confirm"]}
    save-label=${n(e["save-label"]||void 0)}
    save-title=${n(e["save-title"]||void 0)}
    save-description=${n(e["save-description"]||void 0)}
    ?next-disabled=${e["next-disabled"]}
  >
    ${t.map((r,k)=>o`
        <it-stepper-step icon=${r.icon}>
          <span slot="label">${r.label}</span>
          <div class="p-5 text-center border ${e.dark?"text-white":"bg-light"}">
            <p class="m-0">Contenuto dello step ${k+1}</p>
          </div>
        </it-stepper-step>
      `)}
  </it-stepper>
`,P={title:"Componenti/Stepper",tags:["web-component","a11y-ok"],component:"it-stepper",args:{current:1,dark:!1,"header-variant":"","mobile-progress":"","mobile-progress-on-desktop":!1,"prev-label":"","next-label":"","confirm-label":"","show-confirm":!1,"save-label":"","save-title":"","save-description":"","next-disabled":!1},argTypes:{current:{control:{type:"number",min:0,max:5,step:1},description:"Indice (0-based) dello step attivo.",name:"current",table:{defaultValue:{summary:"0"}}},dark:{control:"boolean",description:"Visualizza lo stepper su sfondo scuro.",name:"dark",table:{defaultValue:{summary:"false"}}},"header-variant":{control:"select",options:I,description:"Variante dell'intestazione degli step: solo testo, icone o numeri.",name:"header-variant",table:{defaultValue:{summary:"text"}}},"mobile-progress":{control:"select",options:D,description:"Indicatore di progresso mostrato su mobile tra i pulsanti di navigazione.",name:"mobile-progress",table:{defaultValue:{summary:""}}},"mobile-progress-on-desktop":{control:"boolean",description:"Mostra progress bar o pallini anche su viewport desktop.",name:"mobile-progress-on-desktop",table:{defaultValue:{summary:"false"}}},"prev-label":{control:"text",description:'Etichetta del pulsante "Indietro".',name:"prev-label",table:{defaultValue:{summary:"Indietro"}}},"next-label":{control:"text",description:'Etichetta del pulsante "Avanti".',name:"next-label",table:{defaultValue:{summary:"Avanti"}}},"confirm-label":{control:"text",description:'Etichetta del pulsante "Conferma" (visibile quando `show-confirm` è attivo).',name:"confirm-label",table:{defaultValue:{summary:"Conferma"}}},"show-confirm":{control:"boolean",description:'Mostra il pulsante "Conferma" al posto del pulsante "Avanti".',name:"show-confirm",table:{defaultValue:{summary:"false"}}},"save-label":{control:"text",description:`Etichetta del pulsante "Salva". Se vuoto, l'area di salvataggio non viene mostrata.`,name:"save-label",table:{defaultValue:{summary:""}}},"save-title":{control:"text",description:"Titolo della sezione di salvataggio. Mostrato solamente se viene aggiunto anche `save-label`.",name:"save-title",table:{defaultValue:{summary:""}}},"save-description":{control:"text",description:"Testo descrittivo della sezione di salvataggio. Mostrato solamente se viene aggiunto anche `save-label`.",name:"save-description",table:{defaultValue:{summary:""}}},"next-disabled":{control:"boolean",description:'Disabilita il pulsante "Avanti" e il pulsante "Conferma" (se `show-confirm` è attivo).',name:"next-disabled",table:{defaultValue:{summary:"false"}}}},parameters:{pageLayout:"w-100",docs:{source:{excludeDecorators:!0}}},decorators:T},s={name:"Esempio interattivo",tags:["!dev"],parameters:{docs:{canvas:{sourceState:"shown"}}},render:e=>a(e)},i={name:"Solo testo",args:{"header-variant":"text"},render:e=>a(e)},l={name:"Testo e icone",args:{"header-variant":"icons"},render:e=>a(e)},p={name:"Testo e numeri",args:{"header-variant":"numbers"},render:e=>a(e)},c={name:"Navigazione degli step",args:{"next-label":"Successivo","prev-label":"Precedente"},render:e=>a(e)},d={args:{"mobile-progress":"bar","mobile-progress-on-desktop":!0},render:e=>a(e)},m={args:{"mobile-progress":"dots","mobile-progress-on-desktop":!0},render:e=>a(e)},u={args:{"save-label":"Salva","save-title":"Vuoi salvare il progresso?","save-description":"Potrai riprendere il flusso da questo punto in poi."},render:e=>a(e)},v={args:{"show-confirm":!0,"confirm-label":"Conferma"},render:e=>a(e)},x=(e="")=>o`
  <it-stepper-step icon="it-pencil">
    <span slot="label">Dati personali</span>
    <div class="p-5 border bg-light">
      <form>
        <it-input required name="nome" placeholder="Inserisci il nome">
          <span slot="label">Nome</span>
        </it-input>
      </form>
      ${e}
    </div>
  </it-stepper-step>
  <it-stepper-step icon="it-check">
    <span slot="label">Conferma</span>
    <div class="p-5 text-center border bg-light">
      <p class="m-0">Riepilogo dei dati inseriti</p>
    </div>
  </it-stepper-step>
`,z=o`
  <it-notification status="success" dismissable class="mt-3">
    <span slot="title">Procedura confermata</span>
    I dati inseriti sono stati salvati.
  </it-notification>
`,h=e=>e.currentTarget,C=(e,t)=>t>=e.querySelectorAll("it-stepper-step").length-1,y=(e,t)=>{const r=e.querySelector("form");return t===0&&!!r&&!r.checkValidity()},E=e=>{h(e).parentElement?.querySelector("it-notification")?.show?.()},A=e=>{const t=h(e);t.nextDisabled=y(t,t.current)},L=e=>{const t=h(e);t.showConfirm=C(t,e.detail.step),t.nextDisabled=y(t,e.detail.step)},V=e=>`  <it-stepper-step icon="it-pencil">
    <span slot="label">Dati personali</span>
    <div class="p-5 border bg-light">
      <form>
        <it-input required name="nome" placeholder="Inserisci il nome">
          <span slot="label">Nome</span>
        </it-input>
      </form>
    </div>
  </it-stepper-step>
  <it-stepper-step icon="it-check">
    <span slot="label">Conferma</span>
    <div class="p-5 text-center border bg-light">
      <p class="m-0">Riepilogo dei dati inseriti</p>
    </div>
  </it-stepper-step>
</it-stepper>

<it-notification id="${e}" status="success" dismissable class="mt-3">
  <span slot="title">Procedura confermata</span>
  I dati inseriti sono stati salvati.
</it-notification>`,f={name:"Validazione del form nello step",tags:["!dev"],parameters:{docs:{canvas:{sourceState:"shown"},description:{story:`Il pulsante resta disabilitato finché il campo obbligatorio non è compilato.

Lo stepper non riconosce da sé l'ultimo passo: \`show-confirm\` viene attivato dallo script, così "Conferma" sostituisce "Avanti" solo alla fine del flusso.`},source:{code:`<it-stepper id="validazione" confirm-label="Conferma" next-disabled>
${V("validazione-esito")}

<script type="module">
  const stepper = document.getElementById('validazione');
  const notification = document.getElementById('validazione-esito');
  const form = stepper.querySelector('form');

  // Il form è nel primo passo: solo lì l'avanzamento va bloccato.
  const nonValido = (step) => step === 0 && !form.checkValidity();

  const aggiornaStato = (step) => {
    stepper.nextDisabled = nonValido(step);
    // "Conferma" solo sull'ultimo passo.
    stepper.showConfirm = step >= stepper.querySelectorAll('it-stepper-step').length - 1;
  };

  form.addEventListener('it-input', () => aggiornaStato(stepper.current));
  stepper.addEventListener('it-stepper-change', (e) => aggiornaStato(e.detail.step));
  stepper.addEventListener('it-stepper-confirm', () => notification.show());
<\/script>`}}},render:()=>o`
    <div>
      <it-stepper
        confirm-label="Conferma"
        next-disabled
        @it-input=${A}
        @it-stepper-change=${L}
        @it-stepper-confirm=${E}
      >
        ${x()}
      </it-stepper>
      ${z}
    </div>
  `},N=e=>{const t=h(e);if(e.detail.step>e.detail.prevStep&&y(t,e.detail.prevStep)){e.preventDefault(),t.querySelector("form")?.requestSubmit();return}t.showConfirm=C(t,e.detail.step)},g={name:"Validazione con evento cancelabile",tags:["!dev"],parameters:{docs:{canvas:{sourceState:"shown"},description:{story:"Il pulsante resta attivo: l'avanzamento viene annullato al click con `preventDefault()` e `requestSubmit()` fa comparire i messaggi dei campi non compilati.\n\nCome nell'esempio precedente, `show-confirm` viene attivato dallo script solo sull'ultimo passo."},source:{code:`<it-stepper id="validazione-evento" confirm-label="Conferma">
${V("validazione-evento-esito")}

<script type="module">
  const stepper = document.getElementById('validazione-evento');
  const notification = document.getElementById('validazione-evento-esito');
  const form = stepper.querySelector('form');

  stepper.addEventListener('it-stepper-change', (e) => {
    // Solo in avanti, e solo dal passo che contiene il form.
    if (e.detail.step > e.detail.prevStep && e.detail.prevStep === 0 && !form.checkValidity()) {
      e.preventDefault();
      form.requestSubmit(); // mostra i messaggi dei campi, senza inviare nulla
      return;
    }

    // "Conferma" solo sull'ultimo passo.
    stepper.showConfirm = e.detail.step >= stepper.querySelectorAll('it-stepper-step').length - 1;
  });

  stepper.addEventListener('it-stepper-confirm', () => notification.show());
<\/script>`}}},render:()=>o`
    <div>
      <it-stepper confirm-label="Conferma" @it-stepper-change=${N} @it-stepper-confirm=${E}>
        ${x(o`<p class="mt-3 mb-0 text-muted">Clicca "Avanti" per vedere gli errori del form.</p>`)}
      </it-stepper>
      ${z}
    </div>
  `},b={name:"Sfondo scuro",args:{dark:!0},render:e=>a(e)},S={name:"Sfondo scuro - varianti intestazione",parameters:{backgrounds:{default:"dark"},stepperDemo:{dark:!0,stack:!0}},render:e=>o`
    ${["text","icons","numbers"].map(t=>a({...e,dark:!0,"header-variant":t},$))}
  `};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Esempio interattivo',
  tags: ['!dev'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      }
    }
  },
  render: args => renderStepper(args)
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Solo testo',
  args: {
    'header-variant': 'text'
  },
  render: args => renderStepper(args)
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Testo e icone',
  args: {
    'header-variant': 'icons'
  },
  render: args => renderStepper(args)
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Testo e numeri',
  args: {
    'header-variant': 'numbers'
  },
  render: args => renderStepper(args)
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Navigazione degli step',
  args: {
    'next-label': 'Successivo',
    'prev-label': 'Precedente'
  },
  render: args => renderStepper(args)
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    'mobile-progress': 'bar',
    'mobile-progress-on-desktop': true
  },
  render: args => renderStepper(args)
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    'mobile-progress': 'dots',
    'mobile-progress-on-desktop': true
  },
  render: args => renderStepper(args)
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    'save-label': 'Salva',
    'save-title': 'Vuoi salvare il progresso?',
    'save-description': 'Potrai riprendere il flusso da questo punto in poi.'
  },
  render: args => renderStepper(args)
}`,...u.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    'show-confirm': true,
    'confirm-label': 'Conferma'
  },
  render: args => renderStepper(args)
}`,...v.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Validazione del form nello step',
  tags: ['!dev'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      description: {
        story: \`Il pulsante resta disabilitato finché il campo obbligatorio non è compilato.

Lo stepper non riconosce da sé l'ultimo passo: \\\`show-confirm\\\` viene attivato dallo script, così "Conferma" sostituisce "Avanti" solo alla fine del flusso.\`
      },
      source: {
        code: \`<it-stepper id="validazione" confirm-label="Conferma" next-disabled>
\${validationSourceMarkup('validazione-esito')}

<script type="module">
  const stepper = document.getElementById('validazione');
  const notification = document.getElementById('validazione-esito');
  const form = stepper.querySelector('form');

  // Il form è nel primo passo: solo lì l'avanzamento va bloccato.
  const nonValido = (step) => step === 0 && !form.checkValidity();

  const aggiornaStato = (step) => {
    stepper.nextDisabled = nonValido(step);
    // "Conferma" solo sull'ultimo passo.
    stepper.showConfirm = step >= stepper.querySelectorAll('it-stepper-step').length - 1;
  };

  form.addEventListener('it-input', () => aggiornaStato(stepper.current));
  stepper.addEventListener('it-stepper-change', (e) => aggiornaStato(e.detail.step));
  stepper.addEventListener('it-stepper-confirm', () => notification.show());
<\/script>\`
      }
    }
  },
  render: () => html\`
    <div>
      <it-stepper
        confirm-label="Conferma"
        next-disabled
        @it-input=\${syncNextDisabled}
        @it-stepper-change=\${syncOnStepChange}
        @it-stepper-confirm=\${notifyConfirm}
      >
        \${validationSteps()}
      </it-stepper>
      \${confirmNotification}
    </div>
  \`
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Validazione con evento cancelabile',
  tags: ['!dev'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      description: {
        story: \`Il pulsante resta attivo: l'avanzamento viene annullato al click con \\\`preventDefault()\\\` e \\\`requestSubmit()\\\` fa comparire i messaggi dei campi non compilati.

Come nell'esempio precedente, \\\`show-confirm\\\` viene attivato dallo script solo sull'ultimo passo.\`
      },
      source: {
        code: \`<it-stepper id="validazione-evento" confirm-label="Conferma">
\${validationSourceMarkup('validazione-evento-esito')}

<script type="module">
  const stepper = document.getElementById('validazione-evento');
  const notification = document.getElementById('validazione-evento-esito');
  const form = stepper.querySelector('form');

  stepper.addEventListener('it-stepper-change', (e) => {
    // Solo in avanti, e solo dal passo che contiene il form.
    if (e.detail.step > e.detail.prevStep && e.detail.prevStep === 0 && !form.checkValidity()) {
      e.preventDefault();
      form.requestSubmit(); // mostra i messaggi dei campi, senza inviare nulla
      return;
    }

    // "Conferma" solo sull'ultimo passo.
    stepper.showConfirm = e.detail.step >= stepper.querySelectorAll('it-stepper-step').length - 1;
  });

  stepper.addEventListener('it-stepper-confirm', () => notification.show());
<\/script>\`
      }
    }
  },
  render: () => html\`
    <div>
      <it-stepper confirm-label="Conferma" @it-stepper-change=\${vetoInvalidStep} @it-stepper-confirm=\${notifyConfirm}>
        \${validationSteps(html\`<p class="mt-3 mb-0 text-muted">Clicca "Avanti" per vedere gli errori del form.</p>\`)}
      </it-stepper>
      \${confirmNotification}
    </div>
  \`
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Sfondo scuro',
  args: {
    dark: true
  },
  render: args => renderStepper(args)
}`,...b.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Sfondo scuro - varianti intestazione',
  parameters: {
    backgrounds: {
      default: 'dark'
    },
    stepperDemo: {
      dark: true,
      stack: true
    }
  },
  render: args => html\`
    \${(['text', 'icons', 'numbers'] as const).map(variant => renderStepper({
    ...args,
    dark: true,
    'header-variant': variant
  }, headerSteps))}
  \`
}`,...S.parameters?.docs?.source}}};const B=["EsempioInterattivo","SoloTesto","TestoEIcone","TestoENumeri","Navigazione","ProgressBar","Pallini","Salva","Conferma","FormValidazione","FormValidazioneEvento","SfondoScuro","SfondoScuroVarianti"],M=Object.freeze(Object.defineProperty({__proto__:null,Conferma:v,EsempioInterattivo:s,FormValidazione:f,FormValidazioneEvento:g,Navigazione:c,Pallini:m,ProgressBar:d,Salva:u,SfondoScuro:b,SfondoScuroVarianti:S,SoloTesto:i,TestoEIcone:l,TestoENumeri:p,__namedExportsOrder:B,default:P},Symbol.toStringTag,{value:"Module"}));export{v as C,s as E,f as F,c as N,d as P,M as S,l as T,i as a,p as b,m as c,u as d,g as e,b as f,S as g};

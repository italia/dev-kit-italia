import{b as i,o as p}from"./iframe-DqPvw_k1.js";const b=["primary","dark"],r=t=>{t.currentTarget.closest("[data-demo-wrapper]")?.querySelector("it-dimmer")?.toggle()},g=t=>{t.currentTarget.closest("[data-demo-wrapper]")?.querySelector("it-dimmer")?.show()},y=t=>{t.currentTarget.closest("[data-demo-wrapper]")?.querySelector("it-dimmer")?.hide()},e=i`
  <div class="row">
    <div class="col-12 col-md-6">
      <it-card>
        <figure slot="image" class="figure img-full">
          <img src="https://picsum.photos/seed/city/800/600" alt="Breve descrizione immagine" />
        </figure>
        <a slot="title" href="#">Titolo del contenuto</a>
        <span slot="text">
          Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe,
          senza troncamento.
        </span>
        <time slot="footer" class="it-card-date" datetime="2026-04-22">22 aprile 2026</time>
      </it-card>
    </div>
    <div class="col-12 col-md-6">
      <it-card>
        <figure slot="image" class="figure img-full">
          <img src="https://picsum.photos/seed/city/800/600" alt="Breve descrizione immagine" />
        </figure>
        <a slot="title" href="#">Titolo del contenuto</a>
        <span slot="text">
          Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe,
          senza troncamento.
        </span>
        <time slot="footer" class="it-card-date" datetime="2026-04-22">22 aprile 2026</time>
      </it-card>
    </div>
  </div>
`,h={title:"Componenti/Dimmer",component:"it-dimmer",tags:["new","web-component","a11y-ok"],parameters:{layout:"padded",docs:{story:{inline:!0}}},args:{active:!1,variant:"","icon-name":"",contentText:"Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras."},argTypes:{active:{control:"boolean",description:"Stato del dimmer (visibile/nascosto), il default è `false`",table:{defaultValue:{summary:"false"}}},variant:{control:"select",options:b,description:"Variante cromatica del dimmer, il default è primary",table:{defaultValue:{summary:"''"}}},"icon-name":{control:"text",description:"Nome icona Bootstrap Italia da mostrare (es. `it-info-circle`)",table:{defaultValue:{summary:"''"}}},contentText:{table:{disable:!0}}},decorators:[t=>i` <div data-demo-wrapper>${t()}</div> `]},o={render:t=>i`
    <it-dimmer
      ?active="${t.active}"
      variant="${p(t.variant||void 0)}"
      icon-name="${p(t["icon-name"]||void 0)}"
    >
      <p slot="content">${t.contentText}</p>
      ${e}
    </it-dimmer>
  `,parameters:{docs:{canvas:{sourceState:"hidden"}}}},a={name:"Attivo di default",parameters:{docs:{source:{code:`
<div>
  <div class="mb-3">
    <it-button variant="primary" id="btn-dimmer">Toggle dimmer</it-button>
  </div>
  <it-dimmer id="dimmer" icon-name="it-info-circle" active>
    <p slot="content">Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras.</p>
    <!-- contenuto di sfondo -->
  </it-dimmer>
  <script>
    const dimmer = document.querySelector('#dimmer');
    // Usa show(), hide() o toggle() per controllare lo stato del dimmer
    document.querySelector('#btn-dimmer').addEventListener('click', () => dimmer.toggle());
  <\/script>
</div>
        `}}},render:()=>i`
    <div class="mb-3">
      <it-button variant="primary" @click="${r}">Toggle dimmer</it-button>
    </div>
    <it-dimmer icon-name="it-info-circle" active>
      <p slot="content">Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras.</p>
      ${e}
    </it-dimmer>
  `},m={name:"Colore primario",parameters:{docs:{source:{code:`
<div>
  <div class="mb-3">
    <it-button variant="primary" id="btn-dimmer">Toggle dimmer</it-button>
  </div>
  <it-dimmer id="dimmer" active variant="primary" icon-name="it-pa">
    <p slot="content">
      Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras.
      Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.
      Nulla vulputate luctus sem, eu maximus lacus faucibus eget.
    </p>
    <!-- contenuto di sfondo -->
  </it-dimmer>
  <script>
    const dimmer = document.querySelector('#dimmer');
    document.querySelector('#btn-dimmer').addEventListener('click', () => dimmer.toggle());
  <\/script>
</div>
        `}}},render:()=>i`
    <div class="mb-3">
      <it-button variant="primary" @click="${r}">Toggle dimmer</it-button>
    </div>
    <it-dimmer active variant="primary" icon-name="it-pa">
      <p slot="content">
        Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo donec
        enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus. Nulla vulputate luctus sem, eu maximus lacus faucibus
        eget.
      </p>
      ${e}
    </it-dimmer>
  `},n={name:"Colore scuro",parameters:{docs:{source:{code:`
<div>
  <div class="mb-3">
    <it-button variant="primary" id="btn-dimmer">Toggle dimmer</it-button>
  </div>
  <it-dimmer id="dimmer" active variant="dark" icon-name="it-pa">
    <p slot="content">
      Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras.
      Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.
      Nulla vulputate luctus sem, eu maximus lacus faucibus eget.
    </p>
    <!-- contenuto di sfondo -->
  </it-dimmer>
  <script>
    const dimmer = document.querySelector('#dimmer');
    document.querySelector('#btn-dimmer').addEventListener('click', () => dimmer.toggle());
  <\/script>
</div>
        `}}},render:()=>i`
    <div class="mb-3">
      <it-button variant="primary" @click="${r}">Toggle dimmer</it-button>
    </div>
    <it-dimmer active variant="dark" icon-name="it-pa">
      <p slot="content">
        Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo donec
        enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus. Nulla vulputate luctus sem, eu maximus lacus faucibus
        eget.
      </p>
      ${e}
    </it-dimmer>
  `},d={name:"Con azioni",parameters:{docs:{source:{code:`
<div>
  <div class="mb-3">
    <it-button variant="primary" id="btn-dimmer">Toggle dimmer</it-button>
  </div>
  <it-dimmer id="dimmer" active variant="dark" icon-name="it-info-circle">
    <div slot="content">
      <h4>Titolo Dimmer</h4>
      <p>Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras.</p>
      <div class="dimmer-buttons bg-dark">
        <it-button variant="primary">Azione primaria</it-button>
        <it-button variant="primary" outline>Azione secondaria</it-button>
      </div>
    </div>
    <!-- contenuto di sfondo -->
  </it-dimmer>
  <script>
    const dimmer = document.querySelector('#dimmer');
    document.querySelector('#btn-dimmer').addEventListener('click', () => dimmer.toggle());
  <\/script>
</div>
        `}}},render:()=>i`
    <div class="mb-3">
      <it-button variant="primary" @click="${r}">Toggle dimmer</it-button>
    </div>
    <it-dimmer active variant="dark" icon-name="it-info-circle">
      <div slot="content">
        <h4>Titolo Dimmer</h4>
        <p>Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras.</p>
        <div class="dimmer-buttons bg-dark">
          <it-button variant="primary">Azione primaria</it-button>
          <it-button variant="primary" outline="">Azione secondaria</it-button>
        </div>
      </div>
      ${e}
    </it-dimmer>
  `},s={name:"Con azioni - colore primario",parameters:{docs:{source:{code:`
<div>
  <div class="mb-3">
    <it-button variant="primary" id="btn-dimmer">Toggle dimmer</it-button>
  </div>
  <it-dimmer id="dimmer" active variant="primary" icon-name="it-pa">
    <div slot="content">
      <h4>Titolo Dimmer</h4>
      <div class="dimmer-buttons bg-dark">
        <it-button variant="primary">Azione primaria</it-button>
        <it-button variant="primary" outline="">Azione secondaria</it-button>
      </div>
    </div>
    <!-- contenuto di sfondo -->
  </it-dimmer>
  <script>
    const dimmer = document.querySelector('#dimmer');
    document.querySelector('#btn-dimmer').addEventListener('click', () => dimmer.toggle());
  <\/script>
</div>
        `}}},render:()=>i`
    <div class="mb-3">
      <it-button variant="primary" @click="${r}">Toggle dimmer</it-button>
    </div>
    <it-dimmer active variant="primary" icon-name="it-pa">
      <div slot="content">
        <h4>Titolo Dimmer</h4>
        <div class="dimmer-buttons bg-dark">
          <it-button variant="primary">Azione primaria</it-button>
          <it-button variant="primary" outline="">Azione secondaria</it-button>
        </div>
      </div>
      ${e}
    </it-dimmer>
  `},c={name:"Con azioni - azione singola",parameters:{docs:{source:{code:`
<div>
  <div class="mb-3">
    <it-button variant="primary" id="btn-dimmer">Toggle dimmer</it-button>
  </div>
  <it-dimmer id="dimmer" active variant="primary" icon-name="it-pa">
    <div slot="content">
      <h4>Titolo Dimmer</h4>
      <div class="dimmer-buttons bg-dark">
        <it-button variant="primary">Azione primaria</it-button>
      </div>
    </div>
    <!-- contenuto di sfondo -->
  </it-dimmer>
  <script>
    const dimmer = document.querySelector('#dimmer');
    document.querySelector('#btn-dimmer').addEventListener('click', () => dimmer.toggle());
  <\/script>
</div>
        `}}},render:()=>i`
    <div class="mb-3">
      <it-button variant="primary" @click="${r}">Toggle dimmer</it-button>
    </div>
    <it-dimmer active variant="primary" icon-name="it-pa">
      <div slot="content">
        <h4>Titolo Dimmer</h4>
        <div class="dimmer-buttons bg-dark">
          <it-button variant="primary">Azione primaria</it-button>
        </div>
      </div>
      ${e}
    </it-dimmer>
  `},u={name:"Attivazione via JS",render:()=>i`
    <div class="mb-3 d-flex gap-2">
      <it-button variant="primary" @click="${g}">show()</it-button>
      <it-button variant="primary" outline="" @click="${y}">hide()</it-button>
      <it-button variant="secondary" outline="" @click="${r}">toggle()</it-button>
    </div>
    <it-dimmer id="js-dimmer" icon-name="it-info-circle">
      <p slot="content">Controllato via <code>show()</code>, <code>hide()</code> e <code>toggle()</code>.</p>
      ${e}
    </it-dimmer>
  `,parameters:{docs:{source:{code:`
<div>
  <div class="mb-3 d-flex gap-2">
    <it-button variant="primary" id="btn-show">show()</it-button>
    <it-button variant="primary" outline id="btn-hide">hide()</it-button>
    <it-button variant="secondary" outline id="btn-toggle">toggle()</it-button>
  </div>
  <it-dimmer id="js-dimmer" icon-name="it-info-circle">
    <p slot="content">Controllato via show(), hide() e toggle().</p>
    <!-- contenuto di sfondo -->
  </it-dimmer>
  <script>
    const dimmer = document.querySelector('#js-dimmer');
    document.querySelector('#btn-show').addEventListener('click', () => dimmer.show());
    document.querySelector('#btn-hide').addEventListener('click', () => dimmer.hide());
    document.querySelector('#btn-toggle').addEventListener('click', () => dimmer.toggle());
  <\/script>
</div>
        `}}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => html\`
    <it-dimmer
      ?active="\${args.active}"
      variant="\${ifDefined(args.variant || undefined)}"
      icon-name="\${ifDefined(args['icon-name'] || undefined)}"
    >
      <p slot="content">\${args.contentText}</p>
      \${backgroundCards}
    </it-dimmer>
  \`,
  parameters: {
    docs: {
      canvas: {
        sourceState: 'hidden'
      }
    }
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Attivo di default',
  parameters: {
    docs: {
      source: {
        code: \`
<div>
  <div class="mb-3">
    <it-button variant="primary" id="btn-dimmer">Toggle dimmer</it-button>
  </div>
  <it-dimmer id="dimmer" icon-name="it-info-circle" active>
    <p slot="content">Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras.</p>
    <!-- contenuto di sfondo -->
  </it-dimmer>
  <script>
    const dimmer = document.querySelector('#dimmer');
    // Usa show(), hide() o toggle() per controllare lo stato del dimmer
    document.querySelector('#btn-dimmer').addEventListener('click', () => dimmer.toggle());
  <\/script>
</div>
        \`
      }
    }
  },
  render: () => html\`
    <div class="mb-3">
      <it-button variant="primary" @click="\${toggleDimmer}">Toggle dimmer</it-button>
    </div>
    <it-dimmer icon-name="it-info-circle" active>
      <p slot="content">Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras.</p>
      \${backgroundCards}
    </it-dimmer>
  \`
}`,...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Colore primario',
  parameters: {
    docs: {
      source: {
        code: \`
<div>
  <div class="mb-3">
    <it-button variant="primary" id="btn-dimmer">Toggle dimmer</it-button>
  </div>
  <it-dimmer id="dimmer" active variant="primary" icon-name="it-pa">
    <p slot="content">
      Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras.
      Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.
      Nulla vulputate luctus sem, eu maximus lacus faucibus eget.
    </p>
    <!-- contenuto di sfondo -->
  </it-dimmer>
  <script>
    const dimmer = document.querySelector('#dimmer');
    document.querySelector('#btn-dimmer').addEventListener('click', () => dimmer.toggle());
  <\/script>
</div>
        \`
      }
    }
  },
  render: () => html\`
    <div class="mb-3">
      <it-button variant="primary" @click="\${toggleDimmer}">Toggle dimmer</it-button>
    </div>
    <it-dimmer active variant="primary" icon-name="it-pa">
      <p slot="content">
        Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo donec
        enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus. Nulla vulputate luctus sem, eu maximus lacus faucibus
        eget.
      </p>
      \${backgroundCards}
    </it-dimmer>
  \`
}`,...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Colore scuro',
  parameters: {
    docs: {
      source: {
        code: \`
<div>
  <div class="mb-3">
    <it-button variant="primary" id="btn-dimmer">Toggle dimmer</it-button>
  </div>
  <it-dimmer id="dimmer" active variant="dark" icon-name="it-pa">
    <p slot="content">
      Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras.
      Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.
      Nulla vulputate luctus sem, eu maximus lacus faucibus eget.
    </p>
    <!-- contenuto di sfondo -->
  </it-dimmer>
  <script>
    const dimmer = document.querySelector('#dimmer');
    document.querySelector('#btn-dimmer').addEventListener('click', () => dimmer.toggle());
  <\/script>
</div>
        \`
      }
    }
  },
  render: () => html\`
    <div class="mb-3">
      <it-button variant="primary" @click="\${toggleDimmer}">Toggle dimmer</it-button>
    </div>
    <it-dimmer active variant="dark" icon-name="it-pa">
      <p slot="content">
        Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo donec
        enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus. Nulla vulputate luctus sem, eu maximus lacus faucibus
        eget.
      </p>
      \${backgroundCards}
    </it-dimmer>
  \`
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Con azioni',
  parameters: {
    docs: {
      source: {
        code: \`
<div>
  <div class="mb-3">
    <it-button variant="primary" id="btn-dimmer">Toggle dimmer</it-button>
  </div>
  <it-dimmer id="dimmer" active variant="dark" icon-name="it-info-circle">
    <div slot="content">
      <h4>Titolo Dimmer</h4>
      <p>Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras.</p>
      <div class="dimmer-buttons bg-dark">
        <it-button variant="primary">Azione primaria</it-button>
        <it-button variant="primary" outline>Azione secondaria</it-button>
      </div>
    </div>
    <!-- contenuto di sfondo -->
  </it-dimmer>
  <script>
    const dimmer = document.querySelector('#dimmer');
    document.querySelector('#btn-dimmer').addEventListener('click', () => dimmer.toggle());
  <\/script>
</div>
        \`
      }
    }
  },
  render: () => html\`
    <div class="mb-3">
      <it-button variant="primary" @click="\${toggleDimmer}">Toggle dimmer</it-button>
    </div>
    <it-dimmer active variant="dark" icon-name="it-info-circle">
      <div slot="content">
        <h4>Titolo Dimmer</h4>
        <p>Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras.</p>
        <div class="dimmer-buttons bg-dark">
          <it-button variant="primary">Azione primaria</it-button>
          <it-button variant="primary" outline="">Azione secondaria</it-button>
        </div>
      </div>
      \${backgroundCards}
    </it-dimmer>
  \`
}`,...d.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Con azioni - colore primario',
  parameters: {
    docs: {
      source: {
        code: \`
<div>
  <div class="mb-3">
    <it-button variant="primary" id="btn-dimmer">Toggle dimmer</it-button>
  </div>
  <it-dimmer id="dimmer" active variant="primary" icon-name="it-pa">
    <div slot="content">
      <h4>Titolo Dimmer</h4>
      <div class="dimmer-buttons bg-dark">
        <it-button variant="primary">Azione primaria</it-button>
        <it-button variant="primary" outline="">Azione secondaria</it-button>
      </div>
    </div>
    <!-- contenuto di sfondo -->
  </it-dimmer>
  <script>
    const dimmer = document.querySelector('#dimmer');
    document.querySelector('#btn-dimmer').addEventListener('click', () => dimmer.toggle());
  <\/script>
</div>
        \`
      }
    }
  },
  render: () => html\`
    <div class="mb-3">
      <it-button variant="primary" @click="\${toggleDimmer}">Toggle dimmer</it-button>
    </div>
    <it-dimmer active variant="primary" icon-name="it-pa">
      <div slot="content">
        <h4>Titolo Dimmer</h4>
        <div class="dimmer-buttons bg-dark">
          <it-button variant="primary">Azione primaria</it-button>
          <it-button variant="primary" outline="">Azione secondaria</it-button>
        </div>
      </div>
      \${backgroundCards}
    </it-dimmer>
  \`
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Con azioni - azione singola',
  parameters: {
    docs: {
      source: {
        code: \`
<div>
  <div class="mb-3">
    <it-button variant="primary" id="btn-dimmer">Toggle dimmer</it-button>
  </div>
  <it-dimmer id="dimmer" active variant="primary" icon-name="it-pa">
    <div slot="content">
      <h4>Titolo Dimmer</h4>
      <div class="dimmer-buttons bg-dark">
        <it-button variant="primary">Azione primaria</it-button>
      </div>
    </div>
    <!-- contenuto di sfondo -->
  </it-dimmer>
  <script>
    const dimmer = document.querySelector('#dimmer');
    document.querySelector('#btn-dimmer').addEventListener('click', () => dimmer.toggle());
  <\/script>
</div>
        \`
      }
    }
  },
  render: () => html\`
    <div class="mb-3">
      <it-button variant="primary" @click="\${toggleDimmer}">Toggle dimmer</it-button>
    </div>
    <it-dimmer active variant="primary" icon-name="it-pa">
      <div slot="content">
        <h4>Titolo Dimmer</h4>
        <div class="dimmer-buttons bg-dark">
          <it-button variant="primary">Azione primaria</it-button>
        </div>
      </div>
      \${backgroundCards}
    </it-dimmer>
  \`
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Attivazione via JS',
  render: () => html\`
    <div class="mb-3 d-flex gap-2">
      <it-button variant="primary" @click="\${showDimmer}">show()</it-button>
      <it-button variant="primary" outline="" @click="\${hideDimmer}">hide()</it-button>
      <it-button variant="secondary" outline="" @click="\${toggleDimmer}">toggle()</it-button>
    </div>
    <it-dimmer id="js-dimmer" icon-name="it-info-circle">
      <p slot="content">Controllato via <code>show()</code>, <code>hide()</code> e <code>toggle()</code>.</p>
      \${backgroundCards}
    </it-dimmer>
  \`,
  parameters: {
    docs: {
      source: {
        code: \`
<div>
  <div class="mb-3 d-flex gap-2">
    <it-button variant="primary" id="btn-show">show()</it-button>
    <it-button variant="primary" outline id="btn-hide">hide()</it-button>
    <it-button variant="secondary" outline id="btn-toggle">toggle()</it-button>
  </div>
  <it-dimmer id="js-dimmer" icon-name="it-info-circle">
    <p slot="content">Controllato via show(), hide() e toggle().</p>
    <!-- contenuto di sfondo -->
  </it-dimmer>
  <script>
    const dimmer = document.querySelector('#js-dimmer');
    document.querySelector('#btn-show').addEventListener('click', () => dimmer.show());
    document.querySelector('#btn-hide').addEventListener('click', () => dimmer.hide());
    document.querySelector('#btn-toggle').addEventListener('click', () => dimmer.toggle());
  <\/script>
</div>
        \`
      }
    }
  }
}`,...u.parameters?.docs?.source}}};const f=["EsempioInterattivo","AttivoDefault","ColorePrimario","ColoreDark","ConAzioni","ConAzioniPrimario","ConAzioneSingola","AttivazioneViaJS"],S=Object.freeze(Object.defineProperty({__proto__:null,AttivazioneViaJS:u,AttivoDefault:a,ColoreDark:n,ColorePrimario:m,ConAzioneSingola:c,ConAzioni:d,ConAzioniPrimario:s,EsempioInterattivo:o,__namedExportsOrder:f,default:h},Symbol.toStringTag,{value:"Module"}));export{a as A,m as C,o as E,S,n as a,s as b,d as c,c as d,u as e};

import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import type { ItDimmer } from '../src/it-dimmer.ts';
import { DIMMER_VARIANTS } from '../src/types.ts';

interface DimmerProps {
  active: boolean;
  variant: string;
  'icon-name': string;
  // Demo prop
  contentText: string;
}

const toggleDimmer = (event: Event) => {
  const btn = event.currentTarget as HTMLElement;
  const dimmer = btn.closest('[data-demo-wrapper]')?.querySelector('it-dimmer') as unknown as ItDimmer;
  dimmer?.toggle();
};

const showDimmer = (event: Event) => {
  const btn = event.currentTarget as HTMLElement;
  const dimmer = btn.closest('[data-demo-wrapper]')?.querySelector('it-dimmer') as unknown as ItDimmer;
  dimmer?.show();
};

const hideDimmer = (event: Event) => {
  const btn = event.currentTarget as HTMLElement;
  const dimmer = btn.closest('[data-demo-wrapper]')?.querySelector('it-dimmer') as unknown as ItDimmer;
  dimmer?.hide();
};

// Cards di sfondo usando il web component it-card
const backgroundCards = html`
  <div class="row">
    <div class="col-12 col-md-6">
      <it-card>
        <figure slot="image" class="figure img-full">
          <img src="https://placeholderimage.eu/api/city/800/600" alt="Breve descrizione immagine" />
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
          <img src="https://placeholderimage.eu/api/city/800/600" alt="Breve descrizione immagine" />
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
`;

const meta: Meta<DimmerProps> = {
  title: 'Componenti/Dimmer',
  component: 'it-dimmer',
  tags: ['new', 'web-component'],
  parameters: {
    layout: 'padded',
    docs: {
      story: {
        inline: true,
      },
    },
  },
  args: {
    active: false,
    variant: '',
    'icon-name': '',
    contentText: 'Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras.',
  },
  argTypes: {
    active: {
      control: 'boolean',
      description: 'Stato del dimmer (visibile/nascosto), il default è `false`',
      table: { defaultValue: { summary: 'false' } },
    },
    variant: {
      control: 'select',
      options: DIMMER_VARIANTS,
      description: 'Variante cromatica del dimmer, il default è primary',
      table: { defaultValue: { summary: "''" } },
    },
    'icon-name': {
      control: 'text',
      description: 'Nome icona Bootstrap Italia da mostrare (es. `it-info-circle`)',
      table: { defaultValue: { summary: "''" } },
    },
    contentText: {
      table: { disable: true },
    },
  },
  decorators: [(Story) => html` <div data-demo-wrapper>${Story()}</div> `],
};

export default meta;
type Story = StoryObj<DimmerProps>;

// ── Esempio Interattivo ──────────────────────────────────────────────────────

export const EsempioInterattivo: Story = {
  render: (args) => html`
    <it-dimmer
      ?active="${args.active}"
      variant="${ifDefined(args.variant || undefined)}"
      icon-name="${ifDefined(args['icon-name'] || undefined)}"
    >
      <p slot="content">${args.contentText}</p>
      ${backgroundCards}
    </it-dimmer>
  `,
  parameters: {
    docs: {
      canvas: { sourceState: 'hidden' },
    },
  },
};

// ── Attivo di default (stato iniziale) ───────────────────────────────────────

export const AttivoDefault: Story = {
  name: 'Attivo di default',
  parameters: {
    docs: {
      source: {
        code: `
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
  </script>
</div>
        `,
      },
    },
  },
  render: () => html`
    <div class="mb-3">
      <it-button variant="primary" @click="${toggleDimmer}">Toggle dimmer</it-button>
    </div>
    <it-dimmer icon-name="it-info-circle" active>
      <p slot="content">Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras.</p>
      ${backgroundCards}
    </it-dimmer>
  `,
};

// ── Colore Primario ──────────────────────────────────────────────────────────

export const ColorePrimario: Story = {
  name: 'Colore primario',
  parameters: {
    docs: {
      source: {
        code: `
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
  </script>
</div>
        `,
      },
    },
  },
  render: () => html`
    <div class="mb-3">
      <it-button variant="primary" @click="${toggleDimmer}">Toggle dimmer</it-button>
    </div>
    <it-dimmer active variant="primary" icon-name="it-pa">
      <p slot="content">
        Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo donec
        enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus. Nulla vulputate luctus sem, eu maximus lacus faucibus
        eget.
      </p>
      ${backgroundCards}
    </it-dimmer>
  `,
};
// ── Colore Dark ──────────────────────────────────────────────────────────

export const ColoreDark: Story = {
  name: 'Colore scuro',

  parameters: {
    docs: {
      source: {
        code: `
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
  </script>
</div>
        `,
      },
    },
  },
  render: () => html`
    <div class="mb-3">
      <it-button variant="primary" @click="${toggleDimmer}">Toggle dimmer</it-button>
    </div>
    <it-dimmer active variant="dark" icon-name="it-pa">
      <p slot="content">
        Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo donec
        enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus. Nulla vulputate luctus sem, eu maximus lacus faucibus
        eget.
      </p>
      ${backgroundCards}
    </it-dimmer>
  `,
};

// ── Con Azioni (dark) ────────────────────────────────────────────────────────

export const ConAzioni: Story = {
  name: 'Con azioni',
  parameters: {
    docs: {
      source: {
        code: `
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
  </script>
</div>
        `,
      },
    },
  },
  render: () => html`
    <div class="mb-3">
      <it-button variant="primary" @click="${toggleDimmer}">Toggle dimmer</it-button>
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
      ${backgroundCards}
    </it-dimmer>
  `,
};

// ── Con Azioni Primario ──────────────────────────────────────────────────────

export const ConAzioniPrimario: Story = {
  name: 'Con azioni - colore primario',
  parameters: {
    docs: {
      source: {
        code: `
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
  </script>
</div>
        `,
      },
    },
  },
  render: () => html`
    <div class="mb-3">
      <it-button variant="primary" @click="${toggleDimmer}">Toggle dimmer</it-button>
    </div>
    <it-dimmer active variant="primary" icon-name="it-pa">
      <div slot="content">
        <h4>Titolo Dimmer</h4>
        <div class="dimmer-buttons bg-dark">
          <it-button variant="primary">Azione primaria</it-button>
          <it-button variant="primary" outline="">Azione secondaria</it-button>
        </div>
      </div>
      ${backgroundCards}
    </it-dimmer>
  `,
};

export const ConAzioneSingola: Story = {
  name: 'Con azioni - azione singola',
  parameters: {
    docs: {
      source: {
        code: `
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
  </script>
</div>
        `,
      },
    },
  },
  render: () => html`
    <div class="mb-3">
      <it-button variant="primary" @click="${toggleDimmer}">Toggle dimmer</it-button>
    </div>
    <it-dimmer active variant="primary" icon-name="it-pa">
      <div slot="content">
        <h4>Titolo Dimmer</h4>
        <div class="dimmer-buttons bg-dark">
          <it-button variant="primary">Azione primaria</it-button>
        </div>
      </div>
      ${backgroundCards}
    </it-dimmer>
  `,
};

// ── Attivazione via JS ───────────────────────────────────────────────────────

export const AttivazioneViaJS: Story = {
  name: 'Attivazione via JS',
  render: () => html`
    <div class="mb-3 d-flex gap-2">
      <it-button variant="primary" @click="${showDimmer}">show()</it-button>
      <it-button variant="primary" outline="" @click="${hideDimmer}">hide()</it-button>
      <it-button variant="secondary" outline="" @click="${toggleDimmer}">toggle()</it-button>
    </div>
    <it-dimmer id="js-dimmer" icon-name="it-info-circle">
      <p slot="content">Controllato via <code>show()</code>, <code>hide()</code> e <code>toggle()</code>.</p>
      ${backgroundCards}
    </it-dimmer>
  `,
  parameters: {
    docs: {
      source: {
        code: `
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
  </script>
</div>
        `,
      },
    },
  },
};

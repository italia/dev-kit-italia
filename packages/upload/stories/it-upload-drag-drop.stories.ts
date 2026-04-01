import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

import type { ItUploadDragDrop } from '../src/it-upload-drag-drop.js';

interface UploadDragDropProps {
  accept: string;
  name: string;
}

const renderComponent = (params: Partial<UploadDragDropProps>) => html`
  <it-upload-drag-drop
    accept="${ifDefined(params.accept || undefined)}"
    name="${ifDefined(params.name || undefined)}"
  ></it-upload-drag-drop>
`;

const meta = {
  title: 'Componenti/Form/Upload Drag & Drop',
  tags: ['a11y-ok', 'web-component'],
  component: 'it-upload-drag-drop',
  args: {
    accept: '',
    name: 'upload-dd',
  },
  argTypes: {
    accept: {
      control: 'text',
      description: "Tipi di file accettati, es. 'image/*,.pdf'",
    },
    name: {
      control: 'text',
      description: 'Attributo name del campo nascosto (utile se dentro una form)',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
Componente per il caricamento file tramite trascinamento (drag & drop). Integra un indicatore di progresso a ciambella (\`it-progress type="donut"\`) e supporta gli stati \`idle\`, \`dragover\`, \`loading\` e \`success\`.

Espone metodi pubblici per controllare lo stato programmaticamente:
- \`start()\` — avvia il caricamento
- \`progress(value: 0-1)\` — aggiorna l'avanzamento
- \`success()\` — segna il caricamento come completato
- \`reset()\` — ritorna allo stato iniziale
`,
      },
    },
  },
} satisfies Meta<UploadDragDropProps>;

export default meta;
type Story = StoryObj<UploadDragDropProps>;

export const EsempioInterattivo: Story = {
  ...meta,
  name: 'Esempio interattivo',
  tags: ['!autodocs', '!dev'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'closed',
      },
    },
  },
  render: (params) => html`${renderComponent({ ...params })}`,
};

export const Default: Story = {
  ...meta,
  name: 'Stato iniziale (idle)',
  args: {
    name: 'upload-dd-idle',
  },
  render: (params) => html`${renderComponent({ ...params })}`,
};

export const StatoDragOver: Story = {
  ...meta,
  name: 'Stato dragover',
  parameters: {
    docs: {
      description: {
        story:
          'Stato che si attiva quando un file viene trascinato sopra il componente. In questo esempio viene attivato programmaticamente tramite la proprietà interna.',
      },
    },
  },
  render: () => html`
    <it-upload-drag-drop
      id="upload-dd-dragover"
      name="upload-dd-dragover"
    ></it-upload-drag-drop>
    <script>
      customElements.whenDefined('it-upload-drag-drop').then(() => {
        const el = document.getElementById('upload-dd-dragover');
        if (el) el._state = 'dragover';
      });
    </script>
  `,
};

export const StatoCaricamento: Story = {
  ...meta,
  name: 'Stato caricamento',
  parameters: {
    docs: {
      description: {
        story:
          "Stato attivo durante il caricamento. Il componente mostra l'indicatore di progresso a ciambella. Si attiva tramite il metodo pubblico `start()` e si aggiorna con `progress(value)`.",
      },
    },
  },
  render: () => html`
    <it-upload-drag-drop
      id="upload-dd-loading"
      name="upload-dd-loading"
    ></it-upload-drag-drop>
    <script>
      customElements.whenDefined('it-upload-drag-drop').then(() => {
        const el = document.getElementById('upload-dd-loading');
        if (el) {
          el.start();
          el.progress(0.45);
        }
      });
    </script>
  `,
};

export const StatoSuccesso: Story = {
  ...meta,
  name: 'Stato completato',
  parameters: {
    docs: {
      description: {
        story:
          'Stato che si attiva al completamento del caricamento, chiamando il metodo pubblico `success()`.',
      },
    },
  },
  render: () => html`
    <it-upload-drag-drop
      id="upload-dd-success"
      name="upload-dd-success"
    ></it-upload-drag-drop>
    <script>
      customElements.whenDefined('it-upload-drag-drop').then(() => {
        const el = document.getElementById('upload-dd-success');
        if (el) {
          el.start();
          el.progress(1);
          el.success();
        }
      });
    </script>
  `,
};

export const TipiFile: Story = {
  ...meta,
  name: 'Restrizione tipi file',
  parameters: {
    docs: {
      description: {
        story:
          "Con l'attributo `accept` si possono limitare i file selezionabili. In questo esempio solo immagini e PDF sono accettati.",
      },
    },
  },
  args: {
    name: 'upload-dd-accept',
    accept: 'image/*,.pdf',
  },
  render: (params) => html`${renderComponent({ ...params })}`,
};

export const UsoProgrammatico: Story = {
  ...meta,
  name: 'Uso programmatico (demo)',
  parameters: {
    docs: {
      description: {
        story: `Demo interattiva che mostra come controllare il componente via JS.

\`\`\`js
const el = document.querySelector('it-upload-drag-drop');

// Avvia il caricamento dopo la selezione del file
el.addEventListener('it-change', () => {
  el.start();
  // Simula un avanzamento
  let v = 0;
  const timer = setInterval(() => {
    v += 0.1;
    el.progress(v);
    if (v >= 1) {
      clearInterval(timer);
      el.success();
    }
  }, 300);
});
\`\`\``,
      },
    },
  },
  render: () => html`
    <it-upload-drag-drop id="upload-dd-demo" name="upload-dd-demo"></it-upload-drag-drop>
    <div style="margin-top: 1rem; display: flex; gap: 0.5rem; flex-wrap: wrap;">
      <it-button
        id="btn-start"
        variant="primary"
        @click="${() => {
          const el = document.getElementById('upload-dd-demo') as ItUploadDragDrop;
          el?.start();
          el?.progress(0);
        }}"
      >Avvia caricamento</it-button>
      <it-button
        id="btn-progress"
        variant="secondary"
        @click="${() => {
          const el = document.getElementById('upload-dd-demo') as ItUploadDragDrop;
          el?.progress(0.6);
        }}"
      >Progresso 60%</it-button>
      <it-button
        id="btn-success"
        variant="success"
        @click="${() => {
          const el = document.getElementById('upload-dd-demo') as ItUploadDragDrop;
          el?.progress(1);
          el?.success();
        }}"
      >Completato</it-button>
      <it-button
        id="btn-reset"
        variant="outline-secondary"
        @click="${() => {
          const el = document.getElementById('upload-dd-demo') as ItUploadDragDrop;
          el?.reset();
        }}"
      >Reset</it-button>
    </div>
  `,
};

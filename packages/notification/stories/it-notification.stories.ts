import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import {
  NOTIFICATION_FIX,
  NOTIFICATION_HEADING_LEVELS,
  NOTIFICATION_STATUS,
  type NotificationFix,
  type NotificationHeadingLevel,
  type NotificationStatus,
} from '../src/types.js';

interface NotificationProps {
  headingLevel?: NotificationHeadingLevel;
  icon?: string;
  status?: NotificationStatus;
  dismissable?: boolean;
  fix?: NotificationFix;
  timeout?: number;
}

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Componenti/Notification',
  tags: ['a11y-ok', 'web-component', 'alpha'],
  component: 'it-notification',
  parameters: {
    layout: 'padded',
  },
  // decorators: [(story) => html` <div class="container p-0">${story()}</div> `],
  args: {
    icon: 'it-info-circle',
    dismissable: false,
  },
  argTypes: {
    headingLevel: {
      name: 'heading-level',
      control: 'select',
      type: 'string',
      options: [undefined, ...NOTIFICATION_HEADING_LEVELS],
      description:
        'Livello di heading da usare per il titolo della notifica. Se non specificato, viene usato h2. Vedi la sezione "Accessibilità" della documentazione per maggiori dettagli.',
    },
    icon: {
      name: 'icon',
      control: 'text',
      description: "Nome dell'icona da visualizzare nella notifica.",
    },
    status: {
      control: 'select',
      type: 'string',
      options: [undefined, ...NOTIFICATION_STATUS],
      description: 'Stato della notifica, che ne influenza il colore.',
    },
    dismissable: {
      control: 'boolean',
      type: 'boolean',
      description: 'Se presente, mostra un pulsante per chiudere la notifica.',
    },
    fix: {
      control: 'select',
      type: 'string',
      options: [undefined, ...NOTIFICATION_FIX],
      description: 'Fissa la posizione della notifica nel lato scelto dello schermo.',
    },
    timeout: {
      control: 'number',
      type: 'number',
      description: 'Tempo di permanenza della notifica, espresso in millisecondi.',
    },
  },
} satisfies Meta<NotificationProps>;

export default meta;
type Story = StoryObj<NotificationProps>;

function disabledControls(except?: (keyof (typeof meta)['argTypes'])[]) {
  return Object.keys(meta.argTypes).reduce<Record<string, { table: { disable: true } }>>((acc, key) => {
    if (!except?.includes(key as keyof (typeof meta)['argTypes'])) {
      acc[key] = { table: { disable: true } };
    }
    return acc;
  }, {});
}

export const EsempioInterattivo: Story = {
  name: 'Esempio interattivo',
  tags: ['!dev'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
  decorators: [
    (story) => html`
      <div class="test-docs" style="display:grid;gap:24px;grid-template-columns:1fr 1fr;">${story()}</div>
    `,
  ],
  render: (args) => html`
    <div>
      <p class="mb-4"><strong>Notification standard</strong></p>
      <it-notification
        heading-level=${ifDefined(args.headingLevel)}
        status=${ifDefined(args.status)}
        ?dismissable=${args.dismissable}
        ?fix=${args.fix}
        timeout=${ifDefined(args.timeout || undefined)}
      >
        <span slot="title">Titolo notifica</span>
      </it-notification>
    </div>

    <div>
      <p class="mb-4"><strong>Notification con icona</strong></p>
      <it-notification
        heading-level=${ifDefined(args.headingLevel)}
        icon=${ifDefined(args.icon || undefined)}
        status=${ifDefined(args.status)}
        ?dismissable=${args.dismissable}
        ?fix=${args.fix}
        timeout=${ifDefined(args.timeout || undefined)}
      >
        <span slot="title">Titolo notifica</span>
      </it-notification>
    </div>
  `,
};

export const ConMessaggio: Story = {
  name: 'Notifica con messaggio',
  decorators: [
    (story) => html`
      <div class="test-docs" style="display:grid;gap:24px;grid-template-columns:1fr 1fr;">${story()}</div>
    `,
  ],
  argTypes: { ...disabledControls(['headingLevel', 'status']) },
  render: (args) => html`
    <div>
      <p class="mb-4"><strong>Notifica standard con testo</strong></p>
      <it-notification heading-level=${ifDefined(args.headingLevel)} status=${ifDefined(args.status)}>
        <span slot="title">Titolo notifica</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</p>
      </it-notification>
    </div>

    <div>
      <p class="mb-4"><strong>Notifica con icona e testo</strong></p>
      <it-notification
        heading-level=${ifDefined(args.headingLevel)}
        icon=${ifDefined(args.icon || undefined)}
        status=${ifDefined(args.status)}
      >
        <span slot="title">Titolo notifica</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</p>
      </it-notification>
    </div>
  `,
};

export const Eliminabili: Story = {
  decorators: [
    (story) => html`
      <div class="test-docs" style="display:grid;gap:24px;grid-template-columns:1fr 1fr;">${story()}</div>
    `,
  ],
  argTypes: { ...disabledControls() },
  render: (args) => html`
    <div>
      <p class="mb-4"><strong>Notification standard</strong></p>
      <it-notification dismissable>
        <span slot="title">Titolo notifica</span>
      </it-notification>
    </div>

    <div>
      <p class="mb-4"><strong>Notification con icona</strong></p>
      <it-notification icon=${ifDefined(args.icon || undefined)} status="success" dismissable>
        <span slot="title">Titolo notifica</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</p>
      </it-notification>
    </div>
  `,
};

export const Stati: Story = {
  decorators: [
    (story) => html`
      <div class="test-docs" style="display:grid;gap:24px;grid-template-columns:1fr 1fr;">${story()}</div>
    `,
  ],
  argTypes: { ...disabledControls() },
  render: () => html`
    <div>
      <p class="mb-4"><strong>Successo</strong></p>
      <it-notification status="success" icon="it-check-circle">
        <span slot="title">Titolo notifica</span>
      </it-notification>
    </div>

    <div>
      <p class="mb-4"><strong>Errore</strong></p>
      <it-notification status="error" icon="it-close-circle">
        <span slot="title">Titolo notifica</span>
      </it-notification>
    </div>

    <div>
      <p class="mb-4"><strong>Info</strong></p>
      <it-notification status="info" icon="it-info-circle">
        <span slot="title">Titolo notifica</span>
      </it-notification>
    </div>

    <div>
      <p class="mb-4"><strong>Precauzione</strong></p>
      <it-notification status="warning" icon="it-error">
        <span slot="title">Titolo notifica</span>
      </it-notification>
    </div>
  `,
};

export const PosizionePredefinita: Story = {
  name: 'Posizione predefinita',
  decorators: [(story) => html` <div class="test-desktop">${story()}</div> `],
  argTypes: { ...disabledControls() },
  render: () => html`
    <it-notification icon="it-check-circle" status="success">
      <span slot="title">Titolo notifica</span>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</p>
    </it-notification>
  `,
};

export const PosizioneFissa: Story = {
  name: 'Posizione fissa',
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [(story) => html` <div class="test-desktop">${story()}</div> `],
  argTypes: { ...disabledControls() },
  render: () => html`
    <it-notification icon="it-check-circle" status="success" fix="top">
      <span slot="title">Top fix</span>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</p>
    </it-notification>
    <it-notification icon="it-check-circle" status="success" fix="bottom">
      <span slot="title">Bottom fix</span>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</p>
    </it-notification>
    <it-notification icon="it-check-circle" status="success" fix="left">
      <span slot="title">Titolo notifica</span>
    </it-notification>
    <it-notification icon="it-check-circle" status="success" fix="right">
      <span slot="title">Titolo notifica</span>
    </it-notification>
  `,
};

export const Attivazione: Story = {
  name: 'A scomparsa automatica',
  decorators: [(story) => html` <div style="position:relative;width:100%;height:400px">${story()}</div> `],
  argTypes: { ...disabledControls(['timeout']) },
  render: (args) => html`
    <div id="esempio-attivazione">
      <it-button type="button" variant="primary">Inviami una notifica</it-button>
      <it-button type="button" variant="primary" id="five-sec"> Inviami una notifica (durata 5 secondi) </it-button>
      <it-notification icon="it-check-circle" status="success" timeout="${ifDefined(args.timeout || undefined)}">
        <span slot="title">Titolo notifica</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</p>
      </it-notification>
    </div>

    <script>
      document.querySelector('#esempio-attivazione it-button').addEventListener('click', () => {
        document.querySelector('#esempio-attivazione it-notification').show();
      });
      document.querySelector('#esempio-attivazione it-button#five-sec').addEventListener('click', () => {
        document.querySelector('#esempio-attivazione it-notification').show(5000);
      });
    </script>
  `,
};

export const AttivazioneEdEliminazione: Story = {
  name: 'A scomparsa manuale',
  decorators: [(story) => html` <div style="position:relative;width:100%;height:400px">${story()}</div> `],
  argTypes: { ...disabledControls() },
  render: () => html`
    <div id="esempio-eliminazione">
      <it-button type="button" variant="primary">Inviami una notifica</it-button>
      <it-button type="button" variant="primary" id="delete-notification"> Rimuovi notifica </it-button>
      <it-notification icon="it-check-circle" status="success" dismissable>
        <span slot="title">Titolo notifica</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</p>
      </it-notification>
    </div>

    <script>
      document.querySelector('#esempio-eliminazione it-button').addEventListener('click', () => {
        document.querySelector('#esempio-eliminazione it-notification').show();
      });
      document.querySelector('#esempio-eliminazione it-button#delete-notification').addEventListener('click', () => {
        document.querySelector('#esempio-eliminazione it-notification').hide();
      });
    </script>
  `,
};

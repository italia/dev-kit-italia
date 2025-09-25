import type { Meta, StoryObj } from '@storybook/web-components';
import { html, nothing } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import {
  type AvatarSize,
  type AvatarColor,
  type AvatarPresence,
  type AvatarStatus,
  type AvatarType,
  type AvatarGroupSize,
  type AvatarGroupDirection,
} from '../src/types.js';
import '@italia/avatar';
import '@italia/icon';
import '@italia/dropdown';

interface AvatarProps {
  size: AvatarSize;
  type: AvatarType;
  color: AvatarColor;
  presence: AvatarPresence;
  status: AvatarStatus;
  src: string;
  alt: string;
  text: string;
  initials: string;
  icon: string;
  href: string;
  avatarTitle: string;
  extraText: string;
  extraTextTag: 'h3' | 'h4' | 'p' | 'time';
  extraTextWrapper: boolean;
}

const AVATAR_SIZES: AvatarSize[] = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
const AVATAR_COLORS: AvatarColor[] = ['', 'primary', 'secondary'];
const AVATAR_TYPES: AvatarType[] = ['', 'image', 'text', 'icon'];
const AVATAR_PRESENCE: AvatarPresence[] = ['', 'active', 'busy', 'hidden'];
const AVATAR_STATUS: AvatarStatus[] = ['', 'approved', 'declined', 'notify'];

const renderComponent = (params: Partial<AvatarProps>) => html`
  <it-avatar
    type="${ifDefined(params.type) || nothing}"
    size="${ifDefined(params.size) || nothing}"
    color="${ifDefined(params.color) || nothing}"
    presence="${ifDefined(params.presence) || nothing}"
    status="${ifDefined(params.status) || nothing}"
    src="${ifDefined(params.src) || nothing}"
    alt="${ifDefined(params.alt) || nothing}"
    text="${ifDefined(params.text) || nothing}"
    initials="${ifDefined(params.initials) || nothing}"
    icon="${ifDefined(params.icon) || nothing}"
    href="${ifDefined(params.href) || nothing}"
    avatar-title="${ifDefined(params.avatarTitle) || nothing}"
    extra-text="${ifDefined(params.extraText) || nothing}"
    extra-text-tag="${ifDefined(params.extraTextTag) || nothing}"
    ?extra-text-wrapper="${params.extraTextWrapper}"
  ></it-avatar>
`;

const meta = {
  title: 'Componenti/Avatar',
  component: 'it-avatar',
  tags: ['autodocs', 'alpha', 'new'],
  args: {
    type: '',
    size: 'md',
    color: '',
    presence: '',
    status: '',
    src: 'https://randomuser.me/api/portraits/men/43.jpg',
    alt: 'Mario Rossi',
    text: 'Mario Rossi',
    initials: '',
    icon: 'search',
    href: '',
    avatarTitle: '',
    extraText: '',
    extraTextTag: 'h4',
    extraTextWrapper: false,
  },
  argTypes: {
    type: {
      control: 'select',
      description:
        "Tipo di contenuto dell'avatar. Se vuoto, viene determinato automaticamente: src → image, icon → icon, altrimenti text.",
      options: AVATAR_TYPES,
      table: { defaultValue: { summary: 'auto' } },
    },
    size: {
      control: 'select',
      description: "Dimensione dell'avatar.",
      options: AVATAR_SIZES,
      table: { defaultValue: { summary: 'md' } },
    },
    color: {
      control: 'select',
      description: "Colore di sfondo dell'avatar per avatar con testo.",
      options: AVATAR_COLORS,
      table: { defaultValue: { summary: '' } },
    },
    presence: {
      control: 'select',
      description: "Indicatore di presenza dell'utente.",
      options: AVATAR_PRESENCE,
      table: { defaultValue: { summary: '' } },
    },
    status: {
      control: 'select',
      description: "Indicatore di stato dell'account utente.",
      options: AVATAR_STATUS,
      table: { defaultValue: { summary: '' } },
    },
    src: {
      control: 'text',
      description: "URL dell'immagine per avatar di tipo immagine.",
    },
    alt: {
      control: 'text',
      description: "Testo alternativo per l'immagine dell'avatar.",
    },
    text: {
      control: 'text',
      description: "Testo per generare le iniziali dell'avatar.",
    },
    initials: {
      control: 'text',
      description: "Iniziali personalizzate per l'avatar (sovrascrive quelle generate dal testo).",
    },
    icon: {
      control: 'text',
      description: "Nome dell'icona per avatar di tipo icona.",
    },
    href: {
      control: 'text',
      description: "URL del link se l'avatar deve essere cliccabile.",
    },
    avatarTitle: {
      control: 'text',
      description: 'Titolo per accessibilità e tooltip.',
    },
    extraText: {
      control: 'text',
      description: "Testo aggiuntivo da mostrare accanto all'avatar.",
    },
    extraTextTag: {
      control: 'select',
      description: 'Tag HTML per il titolo del testo aggiuntivo.',
      options: ['h3', 'h4', 'p', 'time'],
      table: { defaultValue: { summary: 'h4' } },
    },
    extraTextWrapper: {
      control: 'boolean',
      description: 'Abilita il wrapper per il testo aggiuntivo.',
      table: { defaultValue: { summary: 'false' } },
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
<Description>Rappresentazione grafica di un utente.</Description>

L'elemento avatar è la rappresentazione grafica di un utente e può includere un'immagine, un testo, un'icona o essere utilizzato come link.

Sono disponibili sei dimensioni: \`xs\`, \`sm\`, \`md\` (default), \`lg\`, \`xl\`, \`xxl\`.

Per ottenere un elemento grafico non interattivo, non utilizzare l'attributo \`href\`. Ogni avatar può essere associato ad un'azione, utilizzando per esso l'attributo \`href\`.

Per indicazioni su "Come e Quando usarlo" si fa riferimento alla [guida del design-system](https://designers.italia.it/design-system/componenti/avatar/).
`,
      },
    },
  },
} satisfies Meta<AvatarProps>;

export default meta;
type Story = StoryObj<AvatarProps>;

export const EsempioInterattivo: Story = {
  ...meta,
  name: 'Esempio interattivo',
  args: {
    type: 'image',
    src: 'https://randomuser.me/api/portraits/men/43.jpg',
    alt: 'Mario Rossi',
  },
  tags: ['!autodocs', '!dev'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
  render: (params) => renderComponent(params),
};

export const PersonalizzazioneDegliStili: Story = {
  name: 'Personalizzazione degli stili',
  tags: ['!dev'],
  parameters: {
    viewMode: 'docs',
    docs: {
      canvas: { hidden: true, sourceState: 'none' },
      description: {
        story: `
Per la personalizzazione degli stili si può usare il selettore \`::part\` passando il valore \`avatar\`. [Vedi qui la guida dettagliata](/docs/personalizzazione-degli-stili--documentazione#selettore-part).
`,
      },
    },
  },
  render: () => html`<div class="hide-preview"></div>`,
};

export const AvatarConImmagine: Story = {
  name: 'Avatar con immagine',
  args: {
    type: 'image',
  },
  argTypes: {
    type: { table: { disable: true } },
    text: { table: { disable: true } },
    initials: { table: { disable: true } },
    icon: { table: { disable: true } },
    color: { table: { disable: true } },
  },
  parameters: {
    docs: {
      description: {
        story: `
Il componente avatar ridimensiona automaticamente l'immagine adattandola al formato circolare e centrandola. Si consiglia in ogni caso di utilizzare immagini delle dimensioni corrette.
<div class="callout callout-success"><div class="callout-inner"><div class="callout-title"><span class="text">Accessibilità delle immagini</span></div>
<p>Per ragioni di accessibilità è importante indicare all'interno dell'avatar il nome dell'utente associato allo stesso.<br>
Nel caso di avatar con immagine utilizzare l'attributo \`alt\` dell'immagine inserendo in esso il nome dell'utente.</p></div></div>

`,
      },
    },
  },
  render: () => html`
    <div class="d-flex align-items-center justify-content-around flex-wrap flex-sm-nowrap gap-4">
      ${renderComponent({
        type: 'image',
        src: 'https://randomuser.me/api/portraits/women/44.jpg',
        alt: 'Luisa Neri',
        size: 'xs',
      })}
      ${renderComponent({
        type: 'image',
        src: 'https://randomuser.me/api/portraits/women/44.jpg',
        alt: 'Luisa Neri',
        size: 'sm',
      })}
      ${renderComponent({
        type: 'image',
        src: 'https://randomuser.me/api/portraits/men/43.jpg',
        alt: 'Gioacchino Romani',
        size: 'md',
      })}
      ${renderComponent({
        type: 'image',
        src: 'https://randomuser.me/api/portraits/women/41.jpg',
        alt: 'Anna Barbieri',
        size: 'lg',
      })}
      ${renderComponent({
        type: 'image',
        src: 'https://randomuser.me/api/portraits/men/33.jpg',
        alt: 'Carlo Poli',
        size: 'xl',
      })}
      ${renderComponent({
        type: 'image',
        src: 'https://randomuser.me/api/portraits/women/90.jpg',
        alt: 'Giovanna Ferrero',
        size: 'xxl',
      })}
    </div>
  `,
};

export const AvatarConTesto: Story = {
  name: 'Avatar con testo',
  args: {
    type: 'text',
  },
  argTypes: {
    type: { table: { disable: true } },
    src: { table: { disable: true } },
    alt: { table: { disable: true } },
    icon: { table: { disable: true } },
  },
  parameters: {
    docs: {
      description: {
        story: `
La versione con testo contiene le iniziali dell'utente (una sola nel caso delle dimensioni xs ed sm). Oltre ai colori di default è possibile utilizzare uno sfondo a scelta fra:

- **Primario**: aggiungendo l'attributo \`color="primary"\`
- **Secondario**: aggiungendo l'attributo \`color="secondary"\`

In questi casi il testo sarà di colore bianco.

Un avatar con testo conterrà uno \`<span>\` per soli screen reader con il nome dell'utente indicato per esteso: \`<span class="visually-hidden">Nome Utente</span>\`.
`,
      },
    },
  },
  render: () => html`
    <div class="d-flex align-items-center justify-content-around flex-wrap flex-sm-nowrap mb-3 gap-4">
      ${renderComponent({
        type: 'text',
        text: 'Mario Rossi',
        size: 'xs',
      })}
      ${renderComponent({
        type: 'text',
        text: 'Mario Rossi',
        size: 'sm',
      })}
      ${renderComponent({
        type: 'text',
        text: 'Mario Rossi',
        size: 'md',
      })}
      ${renderComponent({
        type: 'text',
        text: 'Mario Rossi',
        size: 'lg',
      })}
      ${renderComponent({
        type: 'text',
        text: 'Mario Rossi',
        size: 'xl',
      })}
      ${renderComponent({
        type: 'text',
        text: 'Mario Rossi',
        size: 'xxl',
      })}
    </div>
    <div class="d-flex align-items-center justify-content-around flex-wrap flex-sm-nowrap mb-3 gap-4">
      ${renderComponent({
        type: 'text',
        text: 'Mario Rossi',
        color: 'primary',
        size: 'xs',
      })}
      ${renderComponent({
        type: 'text',
        text: 'Mario Rossi',
        color: 'primary',
        size: 'sm',
      })}
      ${renderComponent({
        type: 'text',
        text: 'Mario Rossi',
        color: 'primary',
        size: 'md',
      })}
      ${renderComponent({
        type: 'text',
        text: 'Mario Rossi',
        color: 'primary',
        size: 'lg',
      })}
      ${renderComponent({
        type: 'text',
        text: 'Mario Rossi',
        color: 'primary',
        size: 'xl',
      })}
      ${renderComponent({
        type: 'text',
        text: 'Mario Rossi',
        color: 'primary',
        size: 'xxl',
      })}
    </div>
    <div class="d-flex align-items-center justify-content-around flex-wrap flex-sm-nowrap gap-4">
      ${renderComponent({
        type: 'text',
        text: 'Mario Rossi',
        color: 'secondary',
        size: 'xs',
      })}
      ${renderComponent({
        type: 'text',
        text: 'Mario Rossi',
        color: 'secondary',
        size: 'sm',
      })}
      ${renderComponent({
        type: 'text',
        text: 'Mario Rossi',
        color: 'secondary',
        size: 'md',
      })}
      ${renderComponent({
        type: 'text',
        text: 'Mario Rossi',
        color: 'secondary',
        size: 'lg',
      })}
      ${renderComponent({
        type: 'text',
        text: 'Mario Rossi',
        color: 'secondary',
        size: 'xl',
      })}
      ${renderComponent({
        type: 'text',
        text: 'Mario Rossi',
        color: 'secondary',
        size: 'xxl',
      })}
    </div>
  `,
};

export const AvatarConIcona: Story = {
  name: 'Avatar con icona',
  args: {
    type: 'icon',
  },
  argTypes: {
    type: { table: { disable: true } },
    src: { table: { disable: true } },
    alt: { table: { disable: true } },
    text: { table: { disable: true } },
    initials: { table: { disable: true } },
    color: { table: { disable: true } },
  },
  parameters: {
    docs: {
      description: {
        story: `
Per utilizzare un'icona all'interno di un avatar è sufficiente includere il nome dell'icona prescelta dalla [libreria icone](https://designers.italia.it/design-system/fondamenti/iconografia/) e indicarne il colore con una delle classi disponibili.

Per gli avatar con icona inserire un testo alternativo: \`<span class="visually-hidden">Testo icona</span>\`
`,
      },
    },
  },
  render: () => html`
    <div class="d-flex align-items-center justify-content-around flex-wrap flex-sm-nowrap gap-4">
      ${renderComponent({
        type: 'icon',
        icon: 'it-search',
        avatarTitle: 'Cerca',
        size: 'xs',
      })}
      ${renderComponent({
        type: 'icon',
        icon: 'it-search',
        avatarTitle: 'Cerca',
        size: 'sm',
      })}
      ${renderComponent({
        type: 'icon',
        icon: 'it-search',
        avatarTitle: 'Cerca',
        size: 'md',
      })}
      ${renderComponent({
        type: 'icon',
        icon: 'it-search',
        avatarTitle: 'Cerca',
        size: 'lg',
      })}
      ${renderComponent({
        type: 'icon',
        icon: 'it-search',
        avatarTitle: 'Cerca',
        size: 'xl',
      })}
      ${renderComponent({
        type: 'icon',
        icon: 'it-search',
        avatarTitle: 'Cerca',
        size: 'xxl',
      })}
    </div>
  `,
};

export const AvatarLink: Story = {
  name: 'Avatar Link',
  argTypes: {
    href: { table: { disable: true } },
  },
  parameters: {
    docs: {
      description: {
        story: `
Per associare un avatar ad un'azione o un link, utilizzare l'attributo \`href\` con relativo link o chiamata JavaScript.

#### Avatar link con tooltip

È possibile associare un tooltip con maggiori informazioni relative all'utente o all'azione associata utilizzando il componente tooltip.
`,
      },
    },
  },
  render: () => html`
    <div class="d-flex align-items-center gap-3 flex-wrap">
      ${renderComponent({
        type: 'image',
        src: 'https://randomuser.me/api/portraits/women/41.jpg',
        alt: 'Anna Barbieri',
        href: '#',
        avatarTitle: 'Anna Barbieri',
      })}
      ${renderComponent({
        type: 'text',
        text: 'Mario Rossi',
        href: '#',
        avatarTitle: 'Mario Rossi',
      })}
      ${renderComponent({
        type: 'text',
        text: 'Mario Rossi',
        color: 'primary',
        href: '#',
        avatarTitle: 'Mario Rossi',
      })}
      ${renderComponent({
        type: 'icon',
        icon: 'search',
        href: '#',
        avatarTitle: 'Cerca',
      })}
    </div>
  `,
};

export const ComportamentoPresenzaUtente: Story = {
  name: 'Comportamento - Presenza utente',
  argTypes: {
    presence: { table: { disable: true } },
  },
  parameters: {
    docs: {
      description: {
        story: `
L'avatar supporta indicatori di presenza dell'utente attraverso l'attributo \`presence\`:

- **Lo stato attivo** si ottiene aggiungendo l'attributo \`presence="active"\`
- **Lo stato non disponibile** si ottiene aggiungendo l'attributo \`presence="busy"\`
- **Lo stato invisibile** si ottiene aggiungendo l'attributo \`presence="hidden"\`

## Personalizzazione con Slot

È possibile personalizzare completamente l'indicatore di presenza usando il **\`slot="presence"\`**:

\`\`\`html
<it-avatar text="Nome Utente" presence="active">
  <span slot="presence" class="custom-presence-indicator">
    <it-icon name="it-check"></it-icon>
    <span class="visually-hidden">Utente online</span>
  </span>
</it-avatar>
\`\`\`

\`\`\`css
.custom-presence-indicator {
  position: absolute;
  bottom: 0;
  right: 0;
  /* altri stili personalizzati */
}
\`\`\`

Le traduzioni sono gestite automaticamente tramite il sistema @italia/i18n.
`,
      },
    },
  },
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <!-- Esempi standard -->
      <div>
        <h4>Presenza standard</h4>
        <div class="d-flex align-items-center gap-4 flex-wrap">
          <div class="text-center">
            ${renderComponent({
              type: 'image',
              src: 'https://randomuser.me/api/portraits/men/43.jpg',
              alt: 'Mario Rossi',
              presence: 'active',
              size: 'lg',
            })}
            <div class="mt-2"><small>Attivo</small></div>
          </div>
          <div class="text-center">
            ${renderComponent({
              type: 'image',
              src: 'https://randomuser.me/api/portraits/women/41.jpg',
              alt: 'Luisa Neri',
              presence: 'busy',
              size: 'lg',
            })}
            <div class="mt-2"><small>Non disponibile</small></div>
          </div>
          <div class="text-center">
            ${renderComponent({
              type: 'image',
              src: 'https://randomuser.me/api/portraits/men/33.jpg',
              alt: 'Gioacchino Romani',
              presence: 'hidden',
              size: 'lg',
            })}
            <div class="mt-2"><small>Invisibile</small></div>
          </div>
        </div>
      </div>

      <!-- Esempi con slot personalizzati -->
      <div>
        <h4>Presenza personalizzata con slot</h4>
        <div class="d-flex align-items-center gap-4 flex-wrap">
          <div class="text-center">
            <it-avatar type="text" text="Marco Bianchi" color="primary" presence="active" size="lg">
              <span slot="presence" class="custom-presence custom-presence-success">
                <it-icon name="it-check" size="xs" color="white"></it-icon>
                <span class="visually-hidden">Utente online e disponibile</span>
              </span>
            </it-avatar>
            <div class="mt-2"><small>Con icona check</small></div>
          </div>

          <div class="text-center">
            <it-avatar type="text" text="Sara Verdi" color="secondary" presence="busy" size="lg">
              <span slot="presence" class="custom-presence custom-presence-danger">
                !
                <span class="visually-hidden">Utente occupato, non disturbare</span>
              </span>
            </it-avatar>
            <div class="mt-2"><small>Con testo custom</small></div>
          </div>

          <div class="text-center">
            <it-avatar
              src="https://randomuser.me/api/portraits/women/32.jpg"
              alt="Anna Rossi"
              presence="hidden"
              size="lg"
            >
              <span slot="presence" class="custom-presence custom-presence-muted">
                <it-icon name="it-minus" size="xs" color="white"></it-icon>
                <span class="visually-hidden">Utente invisibile</span>
              </span>
            </it-avatar>
            <div class="mt-2"><small>Con icona minus</small></div>
          </div>
        </div>
      </div>
    </div>

    <style>
      /* Esempi di classi CSS per personalizzare gli slot presence */
      .custom-presence {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        bottom: 0;
        right: 0;
        width: 20px;
        height: 20px;
        border: 2px solid white;
        border-radius: 50%;
      }

      .custom-presence-success {
        background: #28a745;
      }

      .custom-presence-danger {
        background: #dc3545;
        font-size: 10px;
        font-weight: bold;
        color: white;
      }

      .custom-presence-muted {
        background: #6c757d;
        opacity: 0.7;
      }
    </style>
  `,
};

export const ComportamentoStatusUtente: Story = {
  name: 'Comportamento - Status utente',
  argTypes: {
    status: { table: { disable: true } },
  },
  parameters: {
    docs: {
      description: {
        story: `
L'avatar supporta indicatori di stato dell'account attraverso l'attributo \`status\`:

- **Lo stato approvato** si ottiene aggiungendo l'attributo \`status="approved"\`
- **Lo stato respinto** si ottiene aggiungendo l'attributo \`status="declined"\`
- **Lo stato notifica** si ottiene aggiungendo l'attributo \`status="notify"\`

## Personalizzazione con Slot

È possibile personalizzare completamente l'indicatore di stato usando il **\`slot="status"\`**:

\`\`\`html
<it-avatar text="Nome Utente" status="approved">
  <span slot="status" class="custom-status-indicator">
    <it-icon name="it-check-circle"></it-icon>
    <span class="visually-hidden">Account verificato</span>
  </span>
</it-avatar>
\`\`\`

\`\`\`css
.custom-status-indicator {
  position: absolute;
  top: -5px;
  right: -5px;
  /* altri stili personalizzati */
}
\`\`\`

#### Accessibilità

Le traduzioni sono gestite automaticamente tramite il sistema @italia/i18n. Ricordarsi sempre di includere testo per screen reader con \`<span class="visually-hidden">\`.
`,
      },
    },
  },
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <!-- Esempi standard -->
      <div>
        <h4>Status standard</h4>
        <div class="d-flex align-items-center gap-4 flex-wrap">
          <div class="text-center">
            ${renderComponent({
              type: 'image',
              src: 'https://randomuser.me/api/portraits/men/43.jpg',
              alt: 'Mario Rossi',
              status: 'approved',
              size: 'lg',
            })}
            <div class="mt-2"><small>Approvato</small></div>
          </div>
          <div class="text-center">
            ${renderComponent({
              type: 'image',
              src: 'https://randomuser.me/api/portraits/women/41.jpg',
              alt: 'Luisa Neri',
              status: 'declined',
              size: 'lg',
            })}
            <div class="mt-2"><small>Respinto</small></div>
          </div>
          <div class="text-center">
            ${renderComponent({
              type: 'image',
              src: 'https://randomuser.me/api/portraits/men/33.jpg',
              alt: 'Gioacchino Romani',
              status: 'notify',
              size: 'lg',
            })}
            <div class="mt-2"><small>Notifica</small></div>
          </div>
        </div>
      </div>

      <!-- Esempi con slot personalizzati -->
      <div>
        <h4>Status personalizzato con slot</h4>
        <div class="d-flex align-items-center gap-4 flex-wrap">
          <div class="text-center">
            <it-avatar type="text" text="Luigi Neri" color="primary" status="approved" size="lg">
              <span slot="status" class="custom-status custom-status-success">
                <it-icon name="it-check-circle" size="xs" color="white"></it-icon>
                <span class="visually-hidden">Account verificato e approvato</span>
              </span>
            </it-avatar>
            <div class="mt-2"><small>Verificato</small></div>
          </div>

          <div class="text-center">
            <it-avatar type="text" text="Carla Blu" color="secondary" status="declined" size="lg">
              <span slot="status" class="custom-status custom-status-danger">
                <it-icon name="it-close" size="xs" color="white"></it-icon>
                <span class="visually-hidden">Account sospeso o respinto</span>
              </span>
            </it-avatar>
            <div class="mt-2"><small>Sospeso</small></div>
          </div>

          <div class="text-center">
            <it-avatar
              src="https://randomuser.me/api/portraits/men/25.jpg"
              alt="Paolo Gialli"
              status="notify"
              size="lg"
            >
              <span slot="status" class="custom-status custom-status-notify">
                <span class="notification-dot"></span>
                <span class="visually-hidden">Nuove notifiche disponibili</span>
              </span>
            </it-avatar>
            <div class="mt-2"><small>Notifiche</small></div>
          </div>
        </div>
      </div>
    </div>

    <style>
      /* Esempi di classi CSS per personalizzare gli slot status */
      .custom-status {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: -5px;
        right: -5px;
        width: 24px;
        height: 24px;
        border: 2px solid white;
        border-radius: 50%;
      }

      .custom-status-success {
        background: #28a745;
      }

      .custom-status-danger {
        background: #dc3545;
      }

      .custom-status-notify {
        background: #17a2b8;
        padding: 2px;
      }

      .notification-dot {
        width: 8px;
        height: 8px;
        background: white;
        border-radius: 50%;
      }
    </style>
  `,
};

export const AvatarConTestoAggiuntivo: Story = {
  name: 'Avatar con testo aggiuntivo',
  argTypes: {
    extraTextWrapper: { table: { disable: true } },
    extraText: { table: { disable: true } },
    extraTextTag: { table: { disable: true } },
  },
  parameters: {
    docs: {
      description: {
        story: `
Per ottenere una versione del componente con nome esteso ed eventuale testo accessorio, è necessario abilitare \`extra-text-wrapper\` e aggiungere il testo esteso nell'attributo \`extra-text\`.

Per il nome è possibile utilizzare i tag \`h3\` o \`h4\` tramite l'attributo \`extra-text-tag\`. Il testo esteso può essere contenuto in un \`p\` o in un tag \`time\` nel caso di date/orari.
`,
      },
    },
  },
  render: () => html`
    <div class="d-flex flex-column gap-4">
      ${renderComponent({
        type: 'image',
        src: 'https://randomuser.me/api/portraits/men/43.jpg',
        alt: 'Mario Rossi',
        text: 'Mario Rossi',
        extraTextWrapper: true,
        extraText: '15 SET 2025',
        extraTextTag: 'time',
      })}
      ${renderComponent({
        type: 'image',
        src: 'https://randomuser.me/api/portraits/women/44.jpg',
        alt: 'Giulia Neri',
        text: 'Giulia Neri',
        extraTextWrapper: true,
        extraText: 'LOREM IPSUM DOLOR',
        extraTextTag: 'p',
      })}
      ${renderComponent({
        type: 'text',
        text: 'Michele Dotti',
        color: 'primary',
        extraTextWrapper: true,
        extraText: '12 MAG 2025',
        extraTextTag: 'time',
      })}
    </div>
  `,
};

export const GruppiAvatarListe: Story = {
  parameters: {
    docs: {
      description: {
        story: `
## Gruppi Avatar

Per organizzare più avatar in una lista verticale, utilizzare il componente \`it-avatar-group\` con \`direction="vertical"\`.

### Comportamenti

- **vertical** (default): Lista semplice verticale
- **horizontal**: Layout sovrapposto orizzontale

Il componente propaga automaticamente la dimensione agli avatar contenuti.
`,
      },
    },
  },
  render: () => html`
    <div style="display: flex; gap: 3rem; flex-wrap: wrap;">
      <div style="flex: 1; min-width: 300px;">
        <h4>Lista Verticale - Dimensione SM</h4>
        <it-avatar-group size="sm" direction="vertical">
          <div class="link-list-wrapper">
            <ul class="link-list">
              <li>
                <a class="list-item" href="#">
                  ${renderComponent({ src: 'https://randomuser.me/api/portraits/men/43.jpg', alt: 'Mario Rossi' })}
                  <span>Mario Rossi</span>
                </a>
              </li>
              <li>
                <a class="list-item" href="#">
                  ${renderComponent({ src: 'https://randomuser.me/api/portraits/women/44.jpg', alt: 'Anna Verdi' })}
                  <span>Anna Verdi</span>
                </a>
              </li>
              <li>
                <div class="list-item">
                  ${renderComponent({ text: 'Sara Ghione', color: 'primary' })}
                  <span>Sara Ghione</span>
                </div>
              </li>
              <li>
                <div class="list-item">
                  ${renderComponent({ icon: 'it-user', avatarTitle: 'Utente generico' })}
                  <span>Antonio Esposito</span>
                </div>
              </li>
            </ul>
          </div>
        </it-avatar-group>
      </div>

      <div style="flex: 1; min-width: 300px;">
        <h4>Lista Verticale - Dimensione MD</h4>
        <it-avatar-group size="md" direction="vertical">
          <div class="link-list-wrapper">
            <ul class="link-list">
              <li>
                <a class="list-item" href="#">
                  ${renderComponent({ src: 'https://randomuser.me/api/portraits/men/32.jpg', alt: 'Luca Bianchi' })}
                  <span>Luca Bianchi</span>
                </a>
              </li>
              <li>
                <a class="list-item" href="#">
                  ${renderComponent({ src: 'https://randomuser.me/api/portraits/women/28.jpg', alt: 'Elena Rossi' })}
                  <span>Elena Rossi</span>
                </a>
              </li>
              <li>
                <div class="list-item">
                  ${renderComponent({ text: 'Marco Neri', color: 'secondary' })}
                  <span>Marco Neri</span>
                </div>
              </li>
              <li>
                <div class="list-item">
                  ${renderComponent({ icon: 'it-search', avatarTitle: 'Cerca' })}
                  <span>Cerca utenti</span>
                </div>
              </li>
            </ul>
          </div>
        </it-avatar-group>
      </div>
    </div>
  `,
};

export const AvatarSovrapposti: Story = {
  parameters: {
    docs: {
      description: {
        story: `
## Avatar Sovrapposti

Per creare un gruppo di avatar sovrapposti, utilizzare \`it-avatar-group\` con \`direction="horizontal"\`.


### Dropdown per utenti aggiuntivi

È possibile inserire un dropdown \`it-dropdown\` come ultimo elemento per racchiudere ulteriori avatar:

\`\`\`html
<ul class="avatar-group-stacked">
  <li><it-avatar src="..." alt="Utente 1"></it-avatar></li>
  <li><it-avatar src="..." alt="Utente 2"></it-avatar></li>
  <li>
    <it-dropdown label="+4">

      <ul slot="menu" class="dropdown-menu">
        <li><a class="dropdown-item list-item" href="#">
          <it-avatar src="..." alt="Utente 3"></it-avatar>
          <span>Nome Utente</span>
        </a></li>
      </ul>
    </it-dropdown>
  </li>
</ul>
\`\`\`
`,
      },
    },
  },
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 3rem;">
      <div>
        <h4>Avatar Sovrapposti - Dimensione SM</h4>
        <it-avatar-group size="sm" direction="horizontal">
          <div class="link-list-wrapper">
            <ul class="avatar-group-stacked">
              <li>
                <it-avatar src="https://randomuser.me/api/portraits/women/44.jpg" alt="Arianna Rossi"></it-avatar>
              </li>
              <li><it-avatar src="https://randomuser.me/api/portraits/men/43.jpg" alt="Giulio Neri"></it-avatar></li>
              <li>
                <it-avatar src="https://randomuser.me/api/portraits/women/41.jpg" alt="Andrea Gallo"></it-avatar>
              </li>
              <li><it-avatar text="Tommaso Sordi" color="primary"></it-avatar></li>
              <li><it-avatar text="Barbara Tosi" color="secondary"></it-avatar></li>
              <li><it-avatar icon="it-user" avatar-title="Altri utenti"></it-avatar></li>
            </ul>
          </div>
        </it-avatar-group>
        <p style="margin-top: 0.5rem; font-size: 14px; color: #666;">
          <a href="#" style="color: #0066cc; text-decoration: none;">Visualizza altri 8 utenti →</a>
        </p>
      </div>

      <div>
        <h4>Avatar Sovrapposti - Dimensione MD</h4>
        <it-avatar-group size="md" direction="horizontal">
          <div class="link-list-wrapper">
            <ul class="avatar-group-stacked">
              <li>
                <it-avatar src="https://randomuser.me/api/portraits/women/44.jpg" alt="Arianna Rossi"></it-avatar>
              </li>
              <li><it-avatar src="https://randomuser.me/api/portraits/men/43.jpg" alt="Giulio Neri"></it-avatar></li>
              <li><it-avatar text="Angelica Mola" color="primary"></it-avatar></li>
              <li><it-avatar text="Sandro Penna" color="secondary"></it-avatar></li>
              <li>
                <it-dropdown label="+4">
                    <it-dropdown-item href="#">
                        <it-avatar
                          src="https://randomuser.me/api/portraits/men/22.jpg"
                          alt="Roberto Milano"
                        ></it-avatar>
                        <span>Roberto Milano</span>
                      </a>
                    </it-dropdown-item>
                    <it-dropdown-item href="#">
                        <it-avatar text="Giuseppe Verde" color="primary"></it-avatar>
                        <span>Giuseppe Verde</span>
                      </a>
                    </it-dropdown-item>
                    <it-dropdown-item href="#">
                        <it-avatar text="Laura Blu" color="secondary"></it-avatar>
                        <span>Laura Blu</span>
                      </a>
                    </it-dropdown-item>
                    <it-dropdown-item href="#">
                        <it-avatar icon="it-user" avatar-title="Altri utenti"></it-avatar>
                        <span>Altri utenti...</span>
                      </a>
                    </it-dropdown-item>
                </it-dropdown>
              </li>
            </ul>
          </div>
        </it-avatar-group>
        <p style="margin-top: 0.75rem; font-size: 16px; color: #666;">
          Clicca su "+4" per visualizzare gli utenti rimanenti
        </p>
      </div>
    </div>
  `,
};

export const VariantiDimensione: Story = {
  name: 'Varianti di dimensione',
  argTypes: {
    size: { table: { disable: true } },
    type: { table: { disable: true } },
  },
  parameters: {
    docs: {
      description: {
        story: `
Sono disponibili sei dimensioni diverse per l'avatar: \`xs\`, \`sm\`, \`md\` (default), \`lg\`, \`xl\`, \`xxl\`.

Ogni dimensione mantiene le proporzioni corrette per tutti i tipi di avatar (immagine, testo, icona).
`,
      },
    },
  },
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <!-- Avatar con immagine -->
      <div>
        <h4 style="margin-bottom: 1rem;">Avatar con immagine</h4>
        <div style="display: flex; align-items: center; gap: 1rem; flex-wrap: wrap;">
          ${AVATAR_SIZES.map(
            (size) => html`
              <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
                ${renderComponent({
                  type: 'image',
                  src: 'https://randomuser.me/api/portraits/men/43.jpg',
                  alt: 'Mario Rossi',
                  size,
                })}
                <small style="font-size: 12px; color: #666;">${size}</small>
              </div>
            `,
          )}
        </div>
      </div>

      <!-- Avatar con testo -->
      <div>
        <h4 style="margin-bottom: 1rem;">Avatar con testo</h4>
        <div style="display: flex; align-items: center; gap: 1rem; flex-wrap: wrap;">
          ${AVATAR_SIZES.map(
            (size) => html`
              <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
                ${renderComponent({
                  type: 'text',
                  text: 'Mario Rossi',
                  color: 'primary',
                  size,
                })}
                <small style="font-size: 12px; color: #666;">${size}</small>
              </div>
            `,
          )}
        </div>
      </div>

      <!-- Avatar con icona -->
      <div>
        <h4 style="margin-bottom: 1rem;">Avatar con icona</h4>
        <div style="display: flex; align-items: center; gap: 1rem; flex-wrap: wrap;">
          ${AVATAR_SIZES.map(
            (size) => html`
              <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
                ${renderComponent({
                  type: 'icon',
                  icon: 'search',
                  avatarTitle: 'Cerca',
                  size,
                })}
                <small style="font-size: 12px; color: #666;">${size}</small>
              </div>
            `,
          )}
        </div>
      </div>
    </div>
  `,
};

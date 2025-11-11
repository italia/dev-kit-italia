import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html, nothing } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import {
  type AvatarSize,
  type AvatarColor,
  type AvatarPresence,
  type AvatarStatus,
  type AvatarType,
} from '../src/types.js';

interface AvatarProps {
  size: AvatarSize;
  type: AvatarType;
  variant: AvatarColor;
  presence: AvatarPresence;
  status: AvatarStatus;
  src: string;
  alt: string;
  text: string;
  icon: string;
  href: string;
  avatarTitle: string;
}

const AVATAR_SIZES: AvatarSize[] = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
const AVATAR_COLORS: AvatarColor[] = ['primary', 'secondary'];
const AVATAR_TYPES: AvatarType[] = ['image', 'text', 'icon'];
const AVATAR_PRESENCE: AvatarPresence[] = ['active', 'busy', 'hidden'];
const AVATAR_STATUS: AvatarStatus[] = ['approved', 'declined', 'notify'];

const renderComponent = (params: Partial<AvatarProps> & { slot?: 'trigger' }) => html`
  <it-avatar
    type="${ifDefined(params.type || nothing)}"
    size="${ifDefined(params.size || nothing)}"
    variant="${ifDefined(params.variant || nothing)}"
    presence="${ifDefined(params.presence || nothing)}"
    status="${ifDefined(params.status || nothing)}"
    src="${ifDefined(params.src || nothing)}"
    alt="${ifDefined(params.alt || nothing)}"
    text="${ifDefined(params.text || nothing)}"
    icon="${ifDefined(params.icon || nothing)}"
    href="${ifDefined(params.href || nothing)}"
    avatar-title="${ifDefined(params.avatarTitle || nothing)}"
    slot="${ifDefined(params.slot || nothing)}"
  ></it-avatar>
`;

const meta = {
  title: 'Componenti/Avatar',
  component: 'it-avatar',
  tags: ['autodocs', 'beta', 'a11y-ok', 'web-component'],
  args: {
    size: 'md',
    src: 'https://randomuser.me/api/portraits/men/43.jpg',
    alt: 'Mario Rossi',
    text: 'Mario Rossi',
    icon: '',
    href: '',
    avatarTitle: '',
  },
  argTypes: {
    type: {
      control: 'select',
      description:
        "Tipo di contenuto dell'avatar. Se vuoto, viene determinato automaticamente: src → image, icon → icon, altrimenti text.",
      options: AVATAR_TYPES,
    },
    size: {
      control: 'select',
      description: "Dimensione dell'avatar.",
      options: AVATAR_SIZES,
      table: { defaultValue: { summary: 'md' } },
    },
    variant: {
      control: 'select',
      description: "Colore di sfondo dell'avatar per avatar con testo.",
      options: AVATAR_COLORS,
    },
    presence: {
      control: 'select',
      description: "Indicatore di presenza dell'utente.",
      options: AVATAR_PRESENCE,
    },
    status: {
      control: 'select',
      description: "Indicatore di stato dell'account utente.",
      options: AVATAR_STATUS,
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
\nAltri valori disponibili per il selettore part per i vari slot esposti dal componente sono:
- \`presence\`: target dello slot dell'indicatore di presenza.
- \`status\`: target dello slot dell'indicatore di stato.
- \`extra-text\`: target dello slot dell'testo aggiuntivo.

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
    icon: { table: { disable: true } },
    variant: { table: { disable: true } },
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

- **Primario**: aggiungendo l'attributo \`variant="primary"\`
- **Secondario**: aggiungendo l'attributo \`variant="secondary"\`

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
        variant: 'primary',
        size: 'xs',
      })}
      ${renderComponent({
        type: 'text',
        text: 'Mario Rossi',
        variant: 'primary',
        size: 'sm',
      })}
      ${renderComponent({
        type: 'text',
        text: 'Mario Rossi',
        variant: 'primary',
        size: 'md',
      })}
      ${renderComponent({
        type: 'text',
        text: 'Mario Rossi',
        variant: 'primary',
        size: 'lg',
      })}
      ${renderComponent({
        type: 'text',
        text: 'Mario Rossi',
        variant: 'primary',
        size: 'xl',
      })}
      ${renderComponent({
        type: 'text',
        text: 'Mario Rossi',
        variant: 'primary',
        size: 'xxl',
      })}
    </div>
    <div class="d-flex align-items-center justify-content-around flex-wrap flex-sm-nowrap gap-4">
      ${renderComponent({
        type: 'text',
        text: 'Mario Rossi',
        variant: 'secondary',
        size: 'xs',
      })}
      ${renderComponent({
        type: 'text',
        text: 'Mario Rossi',
        variant: 'secondary',
        size: 'sm',
      })}
      ${renderComponent({
        type: 'text',
        text: 'Mario Rossi',
        variant: 'secondary',
        size: 'md',
      })}
      ${renderComponent({
        type: 'text',
        text: 'Mario Rossi',
        variant: 'secondary',
        size: 'lg',
      })}
      ${renderComponent({
        type: 'text',
        text: 'Mario Rossi',
        variant: 'secondary',
        size: 'xl',
      })}
      ${renderComponent({
        type: 'text',
        text: 'Mario Rossi',
        variant: 'secondary',
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
    variant: { table: { disable: true } },
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
        icon: 'it-user',
        avatarTitle: 'Cerca',
        size: 'xs',
      })}
      ${renderComponent({
        type: 'icon',
        icon: 'it-user',
        avatarTitle: 'Cerca',
        size: 'sm',
      })}
      ${renderComponent({
        type: 'icon',
        icon: 'it-user',
        avatarTitle: 'Cerca',
        size: 'md',
      })}
      ${renderComponent({
        type: 'icon',
        icon: 'it-user',
        avatarTitle: 'Cerca',
        size: 'lg',
      })}
      ${renderComponent({
        type: 'icon',
        icon: 'it-user',
        avatarTitle: 'Cerca',
        size: 'xl',
      })}
      ${renderComponent({
        type: 'icon',
        icon: 'it-user',
        avatarTitle: 'Cerca',
        size: 'xxl',
      })}
    </div>
  `,
};

export const AvatarLink: Story = {
  argTypes: {
    href: { table: { disable: true } },
  },
  parameters: {
    docs: {
      description: {
        story: `
Per associare un avatar ad un'azione o un link, utilizzare l'attributo \`href\` con relativo link o chiamata JavaScript.

<div class="callout callout-warning"><div class="callout-inner"><div class="callout-title"><span class="text">Tooltip non ancora implementato</span></div>
<p>La funzionalità tooltip per gli avatar con link è attualmente in fase di sviluppo. </p></div></div>

`,
      },
    },
  },
  render: () => html`
    <div>
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
          variant: 'primary',
          href: '#',
          avatarTitle: 'Mario Rossi',
        })}
        ${renderComponent({
          type: 'icon',
          icon: 'it-user',
          href: '#',
          avatarTitle: 'Cerca',
        })}
      </div>
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

#### Personalizzazione con Slot
L'esempio "Presenza personalizzata con slot" mostra come lo stesso componente possa essere adattato a stili o contenuti differenti tramite gli slot, per illustrare la flessibilità dell'approccio.
<div class="callout callout-success"><div class="callout-inner"><div class="callout-title"><span class="text">Accessibilità</span></div>
<p>Ricordarsi sempre di includere testo per screen reader con \`<span class="visually-hidden">\` in caso di uso di personalizzazione.</p></div></div>

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

Le traduzioni dei nomi degli stati sono gestite automaticamente tramite il [sistema @italia/i18n](/docs/componenti-i18n--documentazione).
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
        <p>
          L'esempio "Presenza personalizzata con slot" mostra come lo stesso componente possa essere adattato a stili o
          contenuti differenti tramite gli slot, per illustrare la flessibilità dell'approccio.
        </p>
        <div class="d-flex align-items-center gap-4 flex-wrap">
          <div class="text-center">
            <it-avatar type="text" text="Marco Bianchi" variant="primary" presence="active" size="lg">
              <span slot="presence" class="custom-presence custom-presence-success">
                <it-icon name="it-check" size="xs" color="white"></it-icon>
                <span class="visually-hidden">Utente online e disponibile</span>
              </span>
            </it-avatar>
            <div class="mt-2"><small>Con icona check</small></div>
          </div>

          <div class="text-center">
            <it-avatar type="text" text="Sara Verdi" variant="secondary" presence="busy" size="lg">
              <span slot="presence" class="custom-presence custom-presence-danger">
                !
                <span class="visually-hidden">Utente occupato, non disturbare</span>
              </span>
            </it-avatar>
            <div class="mt-2"><small>Con testo custom</small></div>
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
        z-index: 10;
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

#### Personalizzazione con Slot
L'esempio "Status personalizzato con slot" mostra come lo stesso componente possa essere adattato a stili o contenuti differenti tramite gli slot, per illustrare la flessibilità dell'approccio.
<div class="callout callout-success"><div class="callout-inner"><div class="callout-title"><span class="text">Accessibilità</span></div>
<p>Ricordarsi sempre di includere testo per screen reader con \`<span class="visually-hidden">\` in caso di uso di personalizzazione.</p></div></div>


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


Le traduzioni sono gestite automaticamente tramite il [sistema @italia/i18n](/docs/componenti-i18n--documentazione).
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
        <p>
          L'esempio "Status personalizzato con slot" mostra come lo stesso componente possa essere adattato a stili o
          contenuti differenti tramite gli slot, per illustrare la flessibilità dell'approccio.
        </p>
        <div class="d-flex align-items-center gap-4 flex-wrap">
          <div class="text-center">
            <it-avatar type="text" text="Luigi Neri" variant="primary" status="approved" size="lg">
              <span slot="status" class="custom-status custom-status-success">
                <it-icon name="it-check-circle" size="xs" color="white"></it-icon>
                <span class="visually-hidden">Account verificato e approvato</span>
              </span>
            </it-avatar>
            <div class="mt-2"><small>Verificato</small></div>
          </div>

          <div class="text-center">
            <it-avatar type="text" text="Carla Blu" variant="secondary" status="declined" size="lg">
              <span slot="status" class="custom-status custom-status-danger">
                <it-icon name="it-close" size="xs" color="white"></it-icon>
                <span class="visually-hidden">Account sospeso o respinto</span>
              </span>
            </it-avatar>
            <div class="mt-2"><small>Sospeso</small></div>
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
        z-index: 10;
      }

      .custom-status-success {
        background: #28a745;
      }

      .custom-status-danger {
        background: #dc3545;
      }
    </style>
  `,
};

export const GruppiAvatarListe: Story = {
  name: 'Gruppi di avatar - Liste verticali',
  parameters: {
    docs: {
      description: {
        story: `
Utilizzando una lista di link con l’aggiunta della classe .avatar-group si ottiene una lista verticale con avatar affiancati da link e testi.

È possibile utilizzare avatar di dimensione \`sm\` o \`md\` all'interno della lista.
`,
      },
    },
  },
  render: () => html`
    <div style="display: flex; gap: 3rem; flex-wrap: wrap;">
      <div style="flex: 1; min-width: 300px;">
        <h4>Lista Verticale - Dimensione SM</h4>
        <div class="link-list-wrapper">
          <ul class="link-list avatar-group">
            <li>
              <a class="list-item" href="#">
                ${renderComponent({ size: 'sm', src: 'https://randomuser.me/api/portraits/men/43.jpg' })}
                <span>Mario Rossi</span>
              </a>
            </li>
            <li>
              <a class="list-item" href="#">
                ${renderComponent({ size: 'sm', src: 'https://randomuser.me/api/portraits/women/44.jpg' })}
                <span>Anna Verdi</span>
              </a>
            </li>
            <li>
              <div class="list-item">
                ${renderComponent({ size: 'sm', text: 'Sara Ghione', variant: 'primary' })}
                <span>Sara Ghione</span>
              </div>
            </li>
            <li>
              <div class="list-item">
                ${renderComponent({ size: 'sm', icon: 'it-user', avatarTitle: 'Utente generico' })}
                <span>Antonio Esposito</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div style="flex: 1; min-width: 300px;">
        <h4>Lista Verticale - Dimensione MD</h4>
        <div class="link-list-wrapper">
          <ul class="link-list avatar-group">
            <li>
              <a class="list-item" href="#">
                ${renderComponent({ src: 'https://randomuser.me/api/portraits/men/32.jpg' })}
                <span>Luca Bianchi</span>
              </a>
            </li>
            <li>
              <a class="list-item" href="#">
                ${renderComponent({ src: 'https://randomuser.me/api/portraits/women/28.jpg' })}
                <span>Elena Rossi</span>
              </a>
            </li>
            <li>
              <div class="list-item">
                ${renderComponent({ text: 'Marco Neri', variant: 'secondary' })}
                <span>Marco Neri</span>
              </div>
            </li>
            <li>
              <div class="list-item">
                ${renderComponent({ icon: 'it-user', avatarTitle: 'Cerca' })}
                <span>Cerca utenti</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  `,
};

export const AvatarSovrapposti: Story = {
  name: 'Gruppi di avatar - Avatar Sovrapposti',
  parameters: {
    docs: {
      description: {
        story: `

Racchiudendo una serie di avatar in una lista di tipo <ul> con classe .avatar-group-stacked questi verranno visualizzati come una lista orizzontale in cui i singoli elementi sono parzialmente sovrapposti. In questo tipo di gruppo è possibile inserire dei Dropdown per racchiudere ulteriori elementi avatar.

È possibile utilizzare avatar di dimensione \`sm\` o \`md\` all'interno della lista.


Per mostrare ulteriori avatar in un menu a discesa, utilizzare \`it-avatar\` con \`type="dropdown"\`.

L'avatar dropdown eredita automaticamente la dimensione dal gruppo e può contenere una lista di avatar con nomi nel menu.

<div class="callout callout-success"><div class="callout-inner"><div class="callout-title"><span class="text">Accessibilità del dropdown</span></div>
<p>È fondamentale utilizzare l'attributo \`it-aria-label\` sul componente \`it-dropdown\` per fornire una descrizione significativa agli screen reader. Senza questo attributo, uno screen reader leggerebbe solo il testo del label (es. "+4") senza contesto, mentre con \`it-aria-label="Altri utenti"\` fornisce una descrizione chiara e comprensibile.</p></div></div>
`,
      },
    },
  },
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 3rem; height: 300px;">
      <div>
        <ul class="avatar-group-stacked">
          <li>
            <it-avatar src="https://randomuser.me/api/portraits/women/44.jpg" alt="Foto profilo" href="#"></it-avatar>
          </li>
          <li>
            <it-avatar src="https://randomuser.me/api/portraits/men/43.jpg" alt="Foto profilo" href="#"></it-avatar>
          </li>
          <li>
            ${renderComponent({
              type: 'text',
              text: 'Giulia Neri',
              variant: 'primary',
              href: '#',
              avatarTitle: 'Giulia Neri',
              slot: 'trigger',
            })}
          </li>
          <li><it-avatar text="Sandro Penna" variant="secondary" href="#"></it-avatar></li>
          <li>
            <it-avatar type="dropdown">
              <it-dropdown label="4+" slot="avatar-dropdown-content" it-aria-label="Altri utenti" variant="secondary">
                <it-dropdown-item href="#">
                  <it-avatar src="https://randomuser.me/api/portraits/men/22.jpg" alt="Foto profilo"></it-avatar>
                  <span>Roberto Milano</span>
                </it-dropdown-item>
                <it-dropdown-item href="#">
                  <it-avatar text="Giuseppe Verde" variant="primary"></it-avatar>
                  <span>Giuseppe Verde</span>
                </it-dropdown-item>
                <it-dropdown-item href="#">
                  <it-avatar text="Laura Blu" variant="secondary"></it-avatar>
                  <span>Laura Blu</span>
                </it-dropdown-item>
                <it-dropdown-item href="#">
                  <it-avatar icon="it-user" avatar-title="Altri utenti"></it-avatar>
                  <span>Altri utenti...</span>
                </it-dropdown-item>
              </it-dropdown>
            </it-avatar>
          </li>
        </ul>
      </div>
      <p style="margin-top: 0.75rem; font-size: 16px; variant: #666;">
        Clicca su "+4" per visualizzare gli utenti rimanenti
      </p>
    </div>
  `,
};
export const AvatarSovrappostiSM: Story = {
  name: 'Gruppi di avatar - Avatar Sovrapposti Piccoli',

  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 3rem;">
      <div>
        <ul class="avatar-group-stacked">
          <li>
            <it-avatar src="https://randomuser.me/api/portraits/women/44.jpg" alt="Foto profilo" size="sm"></it-avatar>
          </li>
          <li>
            <it-avatar src="https://randomuser.me/api/portraits/men/43.jpg" alt="Foto profilo" size="sm"></it-avatar>
          </li>
          <li>
            <it-avatar src="https://randomuser.me/api/portraits/women/41.jpg" alt="Foto profilo" size="sm"></it-avatar>
          </li>
          <li><it-avatar text="Tommaso Sordi" variant="primary" size="sm"></it-avatar></li>
          <li><it-avatar text="Barbara Tosi" size="sm"></it-avatar></li>
          <li><it-avatar text="Barbara Tosi" variant="secondary" size="sm"></it-avatar></li>
        </ul>
      </div>
    </div>
  `,
};

export const AvatarSovrappostiMD: Story = {
  name: 'Gruppi di avatar - Avatar Sovrapposti Medi',

  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 3rem;">
      <div>
        <div>
          <ul class="avatar-group-stacked">
            <li>
              <it-avatar src="https://randomuser.me/api/portraits/women/44.jpg" alt="Foto profilo" href="#"></it-avatar>
            </li>
            <li>
              <it-avatar src="https://randomuser.me/api/portraits/men/43.jpg" alt="Foto profilo" href="#"></it-avatar>
            </li>
            <li>
              ${renderComponent({
                type: 'text',
                text: 'Giulia Neri',
                variant: 'primary',
                href: '#',
                avatarTitle: 'Giulia Neri',
                slot: 'trigger',
              })}
            </li>
            <li><it-avatar text="Sandro Penna" variant="secondary" href="#"></it-avatar></li>
            <li><it-avatar text="Sandro Penna" href="#"></it-avatar></li>
          </ul>
        </div>
      </div>
    </div>
  `,
};
export const AvatarConTestoAggiuntivo: Story = {
  name: 'Avatar con testo aggiuntivo',
  parameters: {
    docs: {
      description: {
        story: `
Per ottenere una versione del componente con nome esteso ed eventuale testo accessorio, utilizza lo slot \`extra-text\`.

Per il nome è possibile utilizzare i tag \`<h3>\` o \`<h4>\` tramite lo slot. Il testo esteso può essere contenuto in un \`<p>\` o in un tag \`<time>\` nel caso di date/orari.
`,
      },
    },
  },
  render: () => html`
    <div class="d-flex gap-4">
      <it-avatar type="image" src="https://randomuser.me/api/portraits/men/43.jpg" size="xl" text="Mario Rossi">
        <div slot="extra-text">
          <h4>Mario Rossi</h4>
          <time>15 SET 2025</time>
        </div>
      </it-avatar>

      <it-avatar type="image" src="https://randomuser.me/api/portraits/women/44.jpg" size="xl" text="Giulia Neri">
        <div slot="extra-text">
          <h4>Giulia Neri</h4>
          <p>LOREM IPSUM DOLOR</p>
        </div>
      </it-avatar>

      <it-avatar type="text" text="Michele Dotti" variant="primary" size="xl">
        <div slot="extra-text">
          <h4>Michele Dotti</h4>
          <time>12 MAG 2025</time>
        </div>
      </it-avatar>
    </div>
  `,
};
export const GruppiAvatarConTesto: Story = {
  name: 'Gruppi di avatar - Liste verticali con testo aggiuntivo',
  parameters: {
    docs: {
      description: {
        story: `
È possibile combinare le liste verticali con avatar che includono testo aggiuntivo tramite lo slot \`extra-text\`.

Questo è particolarmente utile per creare liste di utenti con informazioni aggiuntive come ruoli, date o descrizioni.
`,
      },
    },
  },
  render: () => html`
    <div style="max-width: 400px;">
      <h4>Lista Team con Ruoli</h4>
      <div class="link-list-wrapper">
        <ul class="link-list avatar-group">
          <li>
            <div class="list-item">
              <it-avatar src="https://randomuser.me/api/portraits/men/43.jpg" alt="Foto profilo">
                <div slot="extra-text">
                  <h4>Mario Rossi</h4>
                  <p>TEAM LEADER</p>
                </div>
              </it-avatar>
            </div>
          </li>
          <li>
            <div class="list-item">
              <it-avatar src="https://randomuser.me/api/portraits/women/44.jpg" alt="Foto profilo">
                <div slot="extra-text">
                  <h4>Giulia Neri</h4>
                  <p>FRONTEND DEVELOPER</p>
                </div>
              </it-avatar>
            </div>
          </li>
          <li>
            <div class="list-item">
              <it-avatar text="Andrea Bianchi" variant="primary">
                <div slot="extra-text">
                  <h4>Andrea Bianchi</h4>
                  <p>BACKEND DEVELOPER</p>
                </div>
              </it-avatar>
            </div>
          </li>
          <li>
            <div class="list-item">
              <it-avatar text="Sara Verde" variant="secondary">
                <div slot="extra-text">
                  <h4>Sara Verde</h4>
                  <time>ULTIMO ACCESSO: 12 SET 2025</time>
                </div>
              </it-avatar>
            </div>
          </li>
        </ul>
      </div>
    </div>
  `,
};

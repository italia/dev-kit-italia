import type { Meta, StoryObj } from '@storybook/web-components';
import { html, nothing } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import {
  type AvatarSize,
  type AvatarColor,
  type AvatarPresence,
  type AvatarStatus,
  type AvatarType,
} from '../src/types.js';
import '@italia/avatar';
import '@italia/icon';

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
const AVATAR_TYPES: AvatarType[] = ['image', 'text', 'icon'];
const AVATAR_PRESENCE: AvatarPresence[] = ['', 'active', 'busy', 'hidden'];
const AVATAR_STATUS: AvatarStatus[] = ['', 'approved', 'declined', 'notify'];

const renderComponent = (params: Partial<AvatarProps>) => {
  return html`
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
};

const meta = {
  title: 'Componenti/Avatar',
  component: 'it-avatar',
  tags: ['autodocs', 'alpha', 'new'],
  args: {
    type: 'image',
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
      description: "Tipo di contenuto dell'avatar.",
      options: AVATAR_TYPES,
      table: { defaultValue: { summary: 'image' } },
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
    <div class="d-flex align-items-center justify-content-around flex-wrap flex-sm-nowrap">
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
    <div class="d-flex align-items-center justify-content-around flex-wrap flex-sm-nowrap mb-3">
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
    <div class="d-flex align-items-center justify-content-around flex-wrap flex-sm-nowrap mb-3">
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
    <div class="d-flex align-items-center justify-content-around flex-wrap flex-sm-nowrap">
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
    <div class="d-flex align-items-center justify-content-around flex-wrap flex-sm-nowrap">
      ${renderComponent({
        type: 'icon',
        icon: 'search',
        avatarTitle: 'Cerca',
        size: 'xs',
      })}
      ${renderComponent({
        type: 'icon',
        icon: 'search',
        avatarTitle: 'Cerca',
        size: 'sm',
      })}
      ${renderComponent({
        type: 'icon',
        icon: 'search',
        avatarTitle: 'Cerca',
        size: 'md',
      })}
      ${renderComponent({
        type: 'icon',
        icon: 'search',
        avatarTitle: 'Cerca',
        size: 'lg',
      })}
      ${renderComponent({
        type: 'icon',
        icon: 'search',
        avatarTitle: 'Cerca',
        size: 'xl',
      })}
      ${renderComponent({
        type: 'icon',
        icon: 'search',
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
Inserendo un \`div\` con classe \`.avatar-presence\` all'interno dell'Avatar si otterrà un indicatore dello stato di presenza dell'utente:

- **Lo stato attivo** si ottiene aggiungendo l'attributo \`presence="active"\`
- **Lo stato non disponibile** si ottiene aggiungendo l'attributo \`presence="busy"\`
- **Lo stato invisibile** si ottiene aggiungendo l'attributo \`presence="hidden"\`

Inserire uno \`<span>\` riservato agli screen reader con indicazione della presenza dell'utente: \`<span class="visually-hidden">Presenza: (stato presenza)</span>\`.
`,
      },
    },
  },
  render: () => html`
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
      <div class="text-center">
        ${renderComponent({
          type: 'text',
          text: 'Ludovica Galli',
          color: 'primary',
          presence: 'busy',
          size: 'lg',
        })}
        <div class="mt-2"><small>Testo + Non disponibile</small></div>
      </div>
      <div class="text-center">
        ${renderComponent({
          type: 'icon',
          icon: 'search',
          avatarTitle: 'Cerca',
          presence: 'active',
          size: 'lg',
        })}
        <div class="mt-2"><small>Icona + Attivo</small></div>
      </div>
    </div>
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
Inserendo un \`div\` con classe \`.avatar-status\` all'interno dell'Avatar si otterrà un indicatore dello stato dell'account utente:

- **Lo stato approvato** si ottiene aggiungendo l'attributo \`status="approved"\`
- **Lo stato respinto** si ottiene aggiungendo l'attributo \`status="declined"\`
- **Lo stato notifica** si ottiene aggiungendo l'attributo \`status="notify"\`

#### Accessibilità dello stato

Inserire uno \`<span>\` riservato agli screen reader con indicazione dello stato dell'utenza: \`<span class="visually-hidden">Stato: (stato utenza)</span>\`
`,
      },
    },
  },
  render: () => html`
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
      <div class="text-center">
        ${renderComponent({
          type: 'text',
          text: 'Ludovica Galli',
          color: 'secondary',
          status: 'approved',
          size: 'lg',
        })}
        <div class="mt-2"><small>Testo + Approvato</small></div>
      </div>
      <div class="text-center">
        ${renderComponent({
          type: 'icon',
          icon: 'search',
          avatarTitle: 'Cerca',
          status: 'declined',
          size: 'lg',
        })}
        <div class="mt-2"><small>Icona + Respinto</small></div>
      </div>
    </div>
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

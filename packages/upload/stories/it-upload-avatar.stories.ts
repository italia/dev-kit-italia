import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

interface UploadAvatarProps {
  src: string;
  alt: string;
  size: 'standard' | 'sm';
  accept: string;
  name: string;
  disabled: boolean;
}

const renderComponent = (params: Partial<UploadAvatarProps>) => html`
  <it-upload-avatar
    src="${ifDefined(params.src || undefined)}"
    alt="${ifDefined(params.alt || undefined)}"
    size="${ifDefined(params.size || undefined)}"
    accept="${ifDefined(params.accept || undefined)}"
    name="${ifDefined(params.name || undefined)}"
    ?disabled="${params.disabled}"
  ></it-upload-avatar>
`;

const meta = {
  title: 'Componenti/Form/Upload Avatar',
  tags: ['a11y-ok', 'web-component'],
  component: 'it-upload-avatar',
  args: {
    src: '',
    alt: 'Mario Rossi',
    size: 'standard',
    accept: 'image/*',
    name: 'avatar',
    disabled: false,
  },
  argTypes: {
    src: {
      control: 'text',
      description: "URL dell'immagine corrente dell'avatar",
    },
    alt: {
      control: 'text',
      description: "Testo alternativo per l'immagine avatar",
    },
    size: {
      control: 'select',
      options: ['standard', 'sm'],
      description: "Dimensione del wrapper dell'avatar upload",
      table: { defaultValue: { summary: 'standard' } },
    },
    accept: {
      control: 'text',
      description: "Tipi di file accettati, es. 'image/png,image/jpeg'",
      table: { defaultValue: { summary: 'image/*' } },
    },
    name: {
      control: 'text',
      description: 'Attributo name del campo nascosto (utile se dentro una form)',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabilita il componente',
      table: { defaultValue: { summary: 'false' } },
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
Componente overlay per il caricamento di una foto profilo. L'utente può selezionare un'immagine dal dispositivo; il componente la mostra subito come anteprima nell'avatar e notifica il cambiamento tramite l'evento \`it-change\`.
`,
      },
    },
  },
} satisfies Meta<UploadAvatarProps>;

export default meta;
type Story = StoryObj<UploadAvatarProps>;

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

export const SenzaImmagine: Story = {
  ...meta,
  name: 'Senza immagine iniziale',
  args: {
    src: '',
    alt: 'Mario Rossi',
    name: 'avatar-empty',
  },
  render: (params) => html`${renderComponent({ ...params })}`,
};

export const ConImmagine: Story = {
  ...meta,
  name: 'Con immagine iniziale',
  args: {
    src: 'https://randomuser.me/api/portraits/men/43.jpg',
    alt: 'Mario Rossi',
    name: 'avatar-with-image',
  },
  render: (params) => html`${renderComponent({ ...params })}`,
};

export const DimensioneRidotta: Story = {
  ...meta,
  name: 'Dimensione ridotta (sm)',
  parameters: {
    docs: {
      description: {
        story:
          "Con `size=\"sm\"` il wrapper dell'avatar assume dimensioni ridotte, mantenendo comunque l'avatar xxl come da specifica BSI.",
      },
    },
  },
  args: {
    src: 'https://randomuser.me/api/portraits/women/32.jpg',
    alt: 'Laura Bianchi',
    size: 'sm',
    name: 'avatar-sm',
  },
  render: (params) => html`${renderComponent({ ...params })}`,
};

export const Disabilitato: Story = {
  ...meta,
  name: 'Stato disabilitato',
  args: {
    src: 'https://randomuser.me/api/portraits/men/43.jpg',
    alt: 'Mario Rossi',
    disabled: true,
    name: 'avatar-disabled',
  },
  render: (params) => html`${renderComponent({ ...params })}`,
};

export const Dimensioni: Story = {
  ...meta,
  name: 'Confronto dimensioni',
  parameters: {
    docs: {
      description: {
        story: 'Confronto affiancato fra la dimensione standard e quella ridotta (sm).',
      },
    },
  },
  render: () => html`
    <div style="display: flex; gap: 3rem; flex-wrap: wrap; align-items: flex-start;">
      ${renderComponent({ src: 'https://randomuser.me/api/portraits/men/43.jpg', alt: 'Standard', size: 'standard', name: 'avatar-cmp-standard' })}
      ${renderComponent({ src: 'https://randomuser.me/api/portraits/men/43.jpg', alt: 'Small', size: 'sm', name: 'avatar-cmp-sm' })}
    </div>
  `,
};

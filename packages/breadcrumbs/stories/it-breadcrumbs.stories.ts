import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import '@italia/breadcrumbs';
import '@italia/icon';

interface BreadcrumbProps {
  label?: string;
  dark?: boolean;
  separator?: string;
}

const meta = {
  title: 'Componenti/Breadcrumbs',
  tags: ['new', 'component', 'a11y-ok'],
  component: 'it-breadcrumb',
  args: {
    label: 'Percorso di navigazione',
    dark: false,
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Testo usato come `aria-label` sul contenitore di navigazione (es. "Percorso di navigazione").',
    },
    dark: {
      control: 'boolean',
      description: 'Imposta la variante a tema scuro.',
    },
  },
} satisfies Meta<BreadcrumbProps>;

export default meta;
type Story = StoryObj<BreadcrumbProps>;

export const EsempioInterattivo: Story = {
  ...meta,
  name: 'Esempio interattivo',
  tags: ['!autodocs', '!dev'],
  parameters: { docs: { canvas: { sourceState: 'shown' } } },
  render: (args) => html`
    <it-breadcrumbs label=${args.label} ?dark="${ifDefined(args.dark)}">
      <it-breadcrumb-item><a href="#">Home</a></it-breadcrumb-item>
      <it-breadcrumb-item><a href="#">Sezione</a></it-breadcrumb-item>
      <it-breadcrumb-item>Voce corrente</it-breadcrumb-item>
    </it-breadcrumbs>
  `,
};

export const ConLink: Story = {
  tags: ['!autodocs', '!dev'],
  args: {
    label: 'Breadcrumb con link',
  },
  render: (args) => html`
    <it-breadcrumbs label=${args.label}>
      <it-breadcrumb-item><a href="#">Home</a></it-breadcrumb-item>
      <it-breadcrumb-item><a href="#">Sezione</a></it-breadcrumb-item>
      <it-breadcrumb-item>Voce corrente</it-breadcrumb-item>
    </it-breadcrumbs>
  `,
};

export const ConIcona: Story = {
  name: 'Con icona',
  render: () => html`
    <it-breadcrumbs label="Percorso di navigazione">
      <it-breadcrumb-item>
        <a href="#"><it-icon name="it-link" color="secondary" size="sm" class="me-1"></it-icon>Home</a>
      </it-breadcrumb-item>
      <it-breadcrumb-item>
        <a href="#"><it-icon name="it-link" color="secondary" size="sm" class="me-1"></it-icon>Sezione</a>
      </it-breadcrumb-item>
      <it-breadcrumb-item>
        <a href="#"><it-icon name="it-link" color="secondary" size="sm" class="me-1"></it-icon>Voce corrente</a>
      </it-breadcrumb-item>
    </it-breadcrumbs>
  `,
};

export const SeparatorePersonalizzato: Story = {
  args: {
    label: 'Breadcrumb con separatore personalizzato',
    separator: '>',
  },
  render: (args) => html`
    <it-breadcrumbs label=${args.label} separator=${args.separator}>
      <it-breadcrumb-item><a href="#">Home</a></it-breadcrumb-item>
      <it-breadcrumb-item><a href="#">Sezione</a></it-breadcrumb-item>
      <it-breadcrumb-item>Voce corrente</it-breadcrumb-item>
    </it-breadcrumbs>

    <it-breadcrumbs label="Percorso di navigazione con icona come separatore" class="mt-3">
      <it-breadcrumb-item>
        <a href="#">Home</a>
        <it-icon name="it-chevron-right" color="secondary" size="sm" slot="separator" class="my-separator"></it-icon>
      </it-breadcrumb-item>
      <it-breadcrumb-item>
        <a href="#">Sezione</a>
        <it-icon name="it-chevron-right" color="secondary" size="sm" slot="separator" class="my-separator"></it-icon>
      </it-breadcrumb-item>
      <it-breadcrumb-item>Voce corrente</it-breadcrumb-item>
    </it-breadcrumbs>

    <style>
      .my-separator {
        padding: 0 4px;
      }
    </style>
  `,
};

export const Sfondo: Story = {
  name: 'Sfondo scuro',
  render: () => html`
    <it-breadcrumbs label="Percorso di navigazione" dark>
      <it-breadcrumb-item><a href="#">Home</a></it-breadcrumb-item>
      <it-breadcrumb-item><a href="#">Sezione</a></it-breadcrumb-item>
      <it-breadcrumb-item>Voce corrente</it-breadcrumb-item>
    </it-breadcrumbs>
    <it-breadcrumbs label="Percorso di navigazione2" dark>
      <it-breadcrumb-item>
        <a href="#">Home</a>
        <it-icon name="it-chevron-right" color="white" size="sm" slot="separator" class="my-separator"></it-icon>
      </it-breadcrumb-item>
      <it-breadcrumb-item>
        <a href="#">Sezione</a>
        <it-icon name="it-chevron-right" color="white" size="sm" slot="separator" class="my-separator"></it-icon>
      </it-breadcrumb-item>
      <it-breadcrumb-item>Voce corrente</it-breadcrumb-item>
    </it-breadcrumbs>
    <it-breadcrumbs label="Percorso di navigazione3" dark>
      <it-breadcrumb-item>
        <a href="#">
          <it-icon name="it-link" color="white" size="sm" class="me-1"></it-icon>
          Home
        </a>
      </it-breadcrumb-item>
      <it-breadcrumb-item>
        <a href="#">
          <it-icon name="it-link" color="white" size="sm" class="me-1"></it-icon>
          Sezione
        </a>
      </it-breadcrumb-item>
      <it-breadcrumb-item>
        <a href="#">
          <it-icon name="it-link" color="white" size="sm" class="me-1"></it-icon>
          Voce corrente
        </a>
      </it-breadcrumb-item>
    </it-breadcrumbs>
    <style>
      .my-separator {
        padding: 0 4px;
      }
    </style>
  `,
};

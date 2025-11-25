import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import '@italia/breadcrumbs';
import '@italia/icon';

interface BreadcrumbProps {
  'it-aria-label'?: string;
  dark?: boolean;
  separator?: string;
}

const meta = {
  title: 'Componenti/Breadcrumbs',
  tags: ['beta', 'web-component', 'a11y-ok'],
  component: 'it-breadcrumbs',

  args: {
    'it-aria-label': 'Percorso di navigazione',
    dark: false,
  },
  argTypes: {
    'it-aria-label': {
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
  name: 'Esempio interattivo',
  tags: ['!autodocs', '!dev'],
  parameters: { docs: { canvas: { sourceState: 'hidden' } } },
  render: (args) => html`
    <it-breadcrumbs it-aria-label=${args['it-aria-label']} ?dark="${ifDefined(args.dark)}">
      <it-breadcrumb-item><a href="#">Home</a></it-breadcrumb-item>
      <it-breadcrumb-item><a href="#">Sezione</a></it-breadcrumb-item>
      <it-breadcrumb-item>Voce corrente</it-breadcrumb-item>
    </it-breadcrumbs>
  `,
};

export const ConLink: Story = {
  tags: ['!autodocs', '!dev'],
  args: {
    'it-aria-label': 'Breadcrumb con link',
  },
  render: (args) => html`
    <it-breadcrumbs it-aria-label=${args['it-aria-label']}>
      <it-breadcrumb-item><a href="#">Home</a></it-breadcrumb-item>
      <it-breadcrumb-item><a href="#">Sezione</a></it-breadcrumb-item>
      <it-breadcrumb-item>Voce corrente</it-breadcrumb-item>
    </it-breadcrumbs>
  `,
};

export const ConIcona: Story = {
  name: 'Con icona',
  render: () => html`
    <it-breadcrumbs it-aria-label="Percorso di navigazione">
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
    'it-aria-label': 'Breadcrumb con separatore personalizzato',
    separator: '>',
  },
  render: (args) => html`
    <it-breadcrumbs label=${args['it-aria-label']} separator=${args.separator}>
      <it-breadcrumb-item><a href="#">Home</a></it-breadcrumb-item>
      <it-breadcrumb-item><a href="#">Sezione</a></it-breadcrumb-item>
      <it-breadcrumb-item>Voce corrente</it-breadcrumb-item>
    </it-breadcrumbs>

    <it-breadcrumbs it-aria-label="Percorso di navigazione con icona come separatore" class="mt-3">
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
        margin-inline: -4px;
      }
    </style>
  `,
};

export const Sfondo: Story = {
  name: 'Sfondo scuro',
  render: () => html`
    <it-breadcrumbs it-aria-label="Percorso di navigazione" dark>
      <it-breadcrumb-item><a href="#">Home</a></it-breadcrumb-item>
      <it-breadcrumb-item><a href="#">Sezione</a></it-breadcrumb-item>
      <it-breadcrumb-item>Voce corrente</it-breadcrumb-item>
    </it-breadcrumbs>
    <it-breadcrumbs it-aria-label="Percorso di navigazione2" dark>
      <it-breadcrumb-item>
        <a href="#">Home</a>
        <it-icon name="it-chevron-right" color="inverse" size="sm" slot="separator" class="my-separator"></it-icon>
      </it-breadcrumb-item>
      <it-breadcrumb-item>
        <a href="#">Sezione</a>
        <it-icon name="it-chevron-right" color="inverse" size="sm" slot="separator" class="my-separator"></it-icon>
      </it-breadcrumb-item>
      <it-breadcrumb-item>Voce corrente</it-breadcrumb-item>
    </it-breadcrumbs>
    <it-breadcrumbs it-aria-label="Percorso di navigazione3" dark>
      <it-breadcrumb-item>
        <a href="#">
          <it-icon name="it-link" color="inverse" size="sm" class="me-1"></it-icon>
          Home
        </a>
      </it-breadcrumb-item>
      <it-breadcrumb-item>
        <a href="#">
          <it-icon name="it-link" color="inverse" size="sm" class="me-1"></it-icon>
          Sezione
        </a>
      </it-breadcrumb-item>
      <it-breadcrumb-item>
        <it-icon name="it-link" color="inverse" size="sm" class="me-1"></it-icon>
        Voce corrente
      </it-breadcrumb-item>
    </it-breadcrumbs>
    <style>
      .my-separator {
        margin-inline: -4px;
      }
    </style>
  `,
};

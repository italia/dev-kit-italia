import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

interface BottomNavProps {
  'it-aria-label'?: string;
}

const meta = {
  title: 'Componenti/Bottomnav',
  tags: ['alpha', 'web-component', 'a11y-ok'],
  component: 'it-bottom-nav',
  parameters: {
    docs: { excludeDecorators: true },
    a11y: {
      config: {
        rules: [
          {
            id: 'list',
            enabled: false,
          },
          {
            id: 'listitem',
            enabled: false,
          },
        ],
      },
    },
  },
  args: {
    'it-aria-label': 'Navigazione principale',
  },
  argTypes: {
    'it-aria-label': {
      control: 'text',
      description: 'Testo usato come `aria-label` sul contenitore di navigazione.',
    },
  },
  decorators: [
    (Story) => html`
      <div
        style="height: 400px;width:400px;background-color:#f5f5f5;border:1px solid #cecece;position:relative;margin:-0.5rem;transform:translateZ(0);overflow:hidden;"
      >
        <div style="height: calc(100% - var(--it-bottom-nav-height)); overflow-y: scroll;">
          <div style="height: 600px;"></div>
        </div>
        ${Story()}
      </div>
    `,
  ],
} satisfies Meta<BottomNavProps>;

export default meta;
type Story = StoryObj<BottomNavProps>;

export const EsempioInterattivo: Story = {
  name: 'Esempio interattivo',
  tags: ['!autodocs', '!dev'],
  parameters: { docs: { canvas: { sourceState: 'hidden' } } },

  render: (args) => html`
    <it-bottom-nav it-aria-label=${ifDefined(args['it-aria-label'])}>
      <it-bottom-nav-item active>
        <a href="#">
          <it-icon name="it-comment"></it-icon>
          <span class="bottom-nav-label">messaggi</span>
        </a>
      </it-bottom-nav-item>
      <it-bottom-nav-item>
        <a href="#">
          <it-icon name="it-camera"></it-icon>
          <span class="bottom-nav-label">immagini</span>
        </a>
      </it-bottom-nav-item>
      <it-bottom-nav-item>
        <a href="#">
          <it-icon name="it-file"></it-icon>
          <span class="bottom-nav-label">documenti</span>
        </a>
      </it-bottom-nav-item>
    </it-bottom-nav>
  `,
};

export const TreVoci: Story = {
  name: 'Tre voci',
  render: () => html`
    <it-bottom-nav it-aria-label="Navigazione principale">
      <it-bottom-nav-item active>
        <a href="#">
          <it-icon name="it-comment"></it-icon>
          <span class="bottom-nav-label">messaggi</span>
        </a>
      </it-bottom-nav-item>
      <it-bottom-nav-item>
        <a href="#">
          <it-icon name="it-camera"></it-icon>
          <span class="bottom-nav-label">immagini</span>
        </a>
      </it-bottom-nav-item>
      <it-bottom-nav-item>
        <a href="#">
          <it-icon name="it-file"></it-icon>
          <span class="bottom-nav-label">documenti</span>
        </a>
      </it-bottom-nav-item>
    </it-bottom-nav>
  `,
};

export const QuattroVoci: Story = {
  name: 'Quattro voci',
  render: () => html`
    <it-bottom-nav it-aria-label="Navigazione principale">
      <it-bottom-nav-item active>
        <a href="#">
          <it-icon name="it-comment"></it-icon>
          <span class="bottom-nav-label">messaggi</span>
        </a>
      </it-bottom-nav-item>
      <it-bottom-nav-item>
        <a href="#">
          <it-icon name="it-camera"></it-icon>
          <span class="bottom-nav-label">immagini</span>
        </a>
      </it-bottom-nav-item>
      <it-bottom-nav-item>
        <a href="#">
          <it-icon name="it-file"></it-icon>
          <span class="bottom-nav-label">documenti</span>
        </a>
      </it-bottom-nav-item>
      <it-bottom-nav-item>
        <a href="#">
          <it-icon name="it-star-outline"></it-icon>
          <span class="bottom-nav-label">preferiti</span>
        </a>
      </it-bottom-nav-item>
    </it-bottom-nav>
  `,
};

export const ConBadge: Story = {
  name: 'Con badge',
  render: () => html`
    <it-bottom-nav it-aria-label="Navigazione principale">
      <it-bottom-nav-item active>
        <a href="#">
          <div class="badge-wrapper">
            <span class="bottom-nav-badge" aria-hidden="true">1</span>
          </div>
          <it-icon name="it-comment"></it-icon>
          <span class="bottom-nav-label">
            messaggi
            <span class="visually-hidden">1 messaggio da leggere</span>
          </span>
        </a>
      </it-bottom-nav-item>
      <it-bottom-nav-item>
        <a href="#">
          <it-icon name="it-camera"></it-icon>
          <span class="bottom-nav-label">
            immagini
          </span>
        </a>
      </it-bottom-nav-item>
      <it-bottom-nav-item>
        <a href="#">
          <div class="badge-wrapper">
            <span class="bottom-nav-badge" aria-hidden="true">42</span>
          </div>
          <it-icon name="it-file"></it-icon>
          <span class="bottom-nav-label">documenti <span class="visually-hidden">42 documenti da visualizzare</span></span>
        </a>
      </it-bottom-nav-item>
    </it-bottom-nav>
  `,
};

export const ConAlert: Story = {
  name: 'Con alert',
  render: () => html`
    <it-bottom-nav it-aria-label="Navigazione principale">
      <it-bottom-nav-item active>
        <a href="#">
          <div class="badge-wrapper">
            <span class="bottom-nav-alert" aria-hidden="true"></span>
          </div>
          <it-icon name="it-comment"></it-icon>
          <span class="bottom-nav-label">
            messaggi
            <span class="visually-hidden">ci sono nuovi messaggi da leggere</span>
          </span>
        </a>
      </it-bottom-nav-item>
      <it-bottom-nav-item>
        <a href="#">
          <it-icon name="it-camera"></it-icon>
          <span class="bottom-nav-label">immagini</span>
        </a>
      </it-bottom-nav-item>
      <it-bottom-nav-item>
        <a href="#">
          <it-icon name="it-file"></it-icon>
          <span class="bottom-nav-label">documenti</span>
        </a>
      </it-bottom-nav-item>
    </it-bottom-nav>
  `,
};

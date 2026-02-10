import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html, nothing } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import type { StickyOptions } from '../src/sticky-controller.js';

function renderSticky({ stackable, paddingTop, stickyClassName, positionType }: StickyOptions) {
  return html`
    <it-sticky
      ?stackable=${ifDefined(stackable)}
      padding-top=${ifDefined(paddingTop || nothing)}
      sticky-class-name=${ifDefined(stickyClassName || nothing)}
      position-type=${ifDefined(positionType || nothing)}
    >
      <div class="bg-primary text-white p-3">Elemento Sticky</div>
    </it-sticky>
  `;
}

const meta: Meta = {
  title: 'Componenti/Sticky',
  component: 'it-sticky',
  tags: ['alpha', 'a11y-ok', 'web-component'],
  args: {
    stackable: false,
    paddingTop: 0,
    stickyClassName: undefined,
    positionType: undefined,
  },
  argTypes: {
    stackable: {
      control: 'boolean',
      description:
        "Attiva/disattiva la possibilità di rendere l'elemento impilabile su altri elementi sticky presenti in pagina",
      table: { defaultValue: { summary: false } },
    },
    paddingTop: {
      control: 'number',
      description: "Indica la distanza dall'elemento in sticky dal margine superiore",
      table: { defaultValue: { summary: 0 } },
    },
    stickyClassName: {
      control: 'text',
      description: "Classi CSS da applicare all'elemento quando viene attivata la funzionalità sticky",
      table: { defaultValue: { summary: '' } },
    },
    positionType: {
      control: { type: 'select' },
      options: ['sticky', 'fixed'],
      description: 'Indica il valore della proprietà CSS `position`. I valori ammessi sono `sticky` o `fixed`',
      table: { defaultValue: { summary: 'sticky' } },
    },
  },
  render: (args) => renderSticky(args),
};
export default meta;

type Story = StoryObj;

export const EsempioInterattivo: Story = {
  tags: ['!dev'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
};

export const Offset: Story = {
  args: {
    paddingTop: 50,
  },
};

export const PositionFixed: Story = {
  parameters: {
    docs: {
      source: {
        code: `<it-sticky position-type="fixed">
  <div class="bg-primary text-white p-3">Elemento Sticky</div>
</it-sticky>`,
      },
    },
  },
};

export const ClassiPersonalizzate: Story = {
  args: {
    stickyClassName: 'bg-light text-black',
  },
};

export const VersioneImpilabile: Story = {
  args: {
    stackable: true,
    paddingTop: 0,
    stickyClassName: '',
  },
};

export const EventiCustom: Story = {
  parameters: {
    viewMode: 'docs',
    docs: {
      canvas: { hidden: true, sourceState: 'none' },
    },
  },
};

/* eslint-disable storybook/no-redundant-story-name */
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { wrapExample } from './organizzare-gli-spazi.helpers';

const meta = {
  title: 'Organizzare gli spazi/Flex',
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Flexbox: Story = {
  name: 'Flexbox',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: `<div class="d-flex p-2 bd-highlight-primary">Io sono un contenitore flexbox!</div>`,
      },
    },
  },
  render: () =>
    wrapExample(html`<div class="d-flex p-2 bd-highlight-primary">Io sono un contenitore flexbox!</div>`, {
      className: 'bd-example-row',
    }),
};

export const InlineFlexbox: Story = {
  name: 'Inline flexbox',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: `<div class="d-inline-flex p-2 bd-highlight-primary">Io sono un contenitore inline flexbox!</div>`,
      },
    },
  },
  render: () =>
    wrapExample(
      html`<div class="d-inline-flex p-2 bd-highlight-primary">Io sono un contenitore inline flexbox!</div>`,
      {
        className: 'bd-example-row',
      },
    ),
};

export const VariantiDiDirezione: Story = {
  name: 'Varianti di direzione',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: `<div class="d-flex flex-row mb-3">
  <div class="p-2 bd-highlight-primary">Elemento flex 1</div>
  <div class="p-2 bd-highlight-primary">Elemento flex 2</div>
  <div class="p-2 bd-highlight-primary">Elemento flex 3</div>
</div>
<div class="d-flex flex-row-reverse">
  <div class="p-2 bd-highlight-primary">Elemento flex 1</div>
  <div class="p-2 bd-highlight-primary">Elemento flex 2</div>
  <div class="p-2 bd-highlight-primary">Elemento flex 3</div>
</div>`,
      },
    },
  },
  render: () =>
    wrapExample(
      html`<div class="d-flex flex-row mb-3">
          <div class="p-2 bd-highlight-primary">Elemento flex 1</div>
          <div class="p-2 bd-highlight-primary">Elemento flex 2</div>
          <div class="p-2 bd-highlight-primary">Elemento flex 3</div>
        </div>
        <div class="d-flex flex-row-reverse">
          <div class="p-2 bd-highlight-primary">Elemento flex 1</div>
          <div class="p-2 bd-highlight-primary">Elemento flex 2</div>
          <div class="p-2 bd-highlight-primary">Elemento flex 3</div>
        </div>`,
      { className: 'bd-example-row' },
    ),
};

export const VariantiDiDirezioneVerticale: Story = {
  name: 'Varianti di direzione verticale',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: `<div class="d-flex flex-column mb-3">
  <div class="p-2 bd-highlight-primary">Elemento flex 1</div>
  <div class="p-2 bd-highlight-primary">Elemento flex 2</div>
  <div class="p-2 bd-highlight-primary">Elemento flex 3</div>
</div>
<div class="d-flex flex-column-reverse">
  <div class="p-2 bd-highlight-primary">Elemento flex 1</div>
  <div class="p-2 bd-highlight-primary">Elemento flex 2</div>
  <div class="p-2 bd-highlight-primary">Elemento flex 3</div>
</div>`,
      },
    },
  },
  render: () =>
    wrapExample(
      html`<div class="d-flex flex-column mb-3">
          <div class="p-2 bd-highlight-primary">Elemento flex 1</div>
          <div class="p-2 bd-highlight-primary">Elemento flex 2</div>
          <div class="p-2 bd-highlight-primary">Elemento flex 3</div>
        </div>
        <div class="d-flex flex-column-reverse">
          <div class="p-2 bd-highlight-primary">Elemento flex 1</div>
          <div class="p-2 bd-highlight-primary">Elemento flex 2</div>
          <div class="p-2 bd-highlight-primary">Elemento flex 3</div>
        </div>`,
      { className: 'bd-example-row' },
    ),
};

export const ContenutoGiustificato: Story = {
  name: 'Contenuto giustificato',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: `<div class="d-flex justify-content-start mb-3">
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
  </div>
  <div class="d-flex justify-content-end mb-3">
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
  </div>
  <div class="d-flex justify-content-center mb-3">
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
  </div>
  <div class="d-flex justify-content-between mb-3">
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
  </div>
  <div class="d-flex justify-content-around">
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
  </div>`,
      },
    },
  },
  render: () =>
    wrapExample(
      html`<div class="d-flex justify-content-start mb-3">
          <div class="p-2 bd-highlight-primary">Elemento flex</div>
          <div class="p-2 bd-highlight-primary">Elemento flex</div>
          <div class="p-2 bd-highlight-primary">Elemento flex</div>
        </div>
        <div class="d-flex justify-content-end mb-3">
          <div class="p-2 bd-highlight-primary">Elemento flex</div>
          <div class="p-2 bd-highlight-primary">Elemento flex</div>
          <div class="p-2 bd-highlight-primary">Elemento flex</div>
        </div>
        <div class="d-flex justify-content-center mb-3">
          <div class="p-2 bd-highlight-primary">Elemento flex</div>
          <div class="p-2 bd-highlight-primary">Elemento flex</div>
          <div class="p-2 bd-highlight-primary">Elemento flex</div>
        </div>
        <div class="d-flex justify-content-between mb-3">
          <div class="p-2 bd-highlight-primary">Elemento flex</div>
          <div class="p-2 bd-highlight-primary">Elemento flex</div>
          <div class="p-2 bd-highlight-primary">Elemento flex</div>
        </div>
        <div class="d-flex justify-content-around">
          <div class="p-2 bd-highlight-primary">Elemento flex</div>
          <div class="p-2 bd-highlight-primary">Elemento flex</div>
          <div class="p-2 bd-highlight-primary">Elemento flex</div>
        </div>`,
      { className: 'bd-example-row' },
    ),
};

export const AllineamentoElementi: Story = {
  name: 'Allineamento elementi',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: `<div class="d-flex align-items-start mb-3" style="height: 100px">
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
  </div>
  <div class="d-flex align-items-end mb-3" style="height: 100px">
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
  </div>
  <div class="d-flex align-items-center mb-3" style="height: 100px">
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
  </div>
  <div class="d-flex align-items-baseline mb-3" style="height: 100px">
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
  </div>
  <div class="d-flex align-items-stretch" style="height: 100px">
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
  </div>
</div>`,
      },
    },
  },
  render: () =>
    wrapExample(
      html`<div class="d-flex align-items-start mb-3" style="height: 100px">
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
  </div>
  <div class="d-flex align-items-end mb-3" style="height: 100px">
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
  </div>
  <div class="d-flex align-items-center mb-3" style="height: 100px">
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
  </div>
  <div class="d-flex align-items-baseline mb-3" style="height: 100px">
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
  </div>
  <div class="d-flex align-items-stretch" style="height: 100px">
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
  </div>
</div>`,
      { className: 'bd-example-row' },
    ),
};

export const AutoAllineamento: Story = {
  name: 'Auto allineamento',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: `<div class="d-flex mb-3" style="height: 100px">
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="align-self-start p-2 bd-highlight-primary">Elemento flex allineato</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
  </div>
  <div class="d-flex mb-3" style="height: 100px">
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="align-self-end p-2 bd-highlight-primary">Elemento flex allineato</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
  </div>
  <div class="d-flex mb-3" style="height: 100px">
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="align-self-center p-2 bd-highlight-primary">Elemento flex allineato</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
  </div>
  <div class="d-flex mb-3" style="height: 100px">
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="align-self-baseline p-2 bd-highlight-primary">Elemento flex allineato</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
  </div>
  <div class="d-flex" style="height: 100px">
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="align-self-stretch p-2 bd-highlight-primary">Elemento flex allineato</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
  </div>
</div>`,
      },
    },
  },
  render: () =>
    wrapExample(
      html`<div class="d-flex mb-3" style="height: 100px">
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="align-self-start p-2 bd-highlight-primary">Elemento flex allineato</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
  </div>
  <div class="d-flex mb-3" style="height: 100px">
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="align-self-end p-2 bd-highlight-primary">Elemento flex allineato</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
  </div>
  <div class="d-flex mb-3" style="height: 100px">
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="align-self-center p-2 bd-highlight-primary">Elemento flex allineato</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
  </div>
  <div class="d-flex mb-3" style="height: 100px">
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="align-self-baseline p-2 bd-highlight-primary">Elemento flex allineato</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
  </div>
  <div class="d-flex" style="height: 100px">
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="align-self-stretch p-2 bd-highlight-primary">Elemento flex allineato</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
  </div>
</div>`,
      { className: 'bd-example-row' },
    ),
};

export const MarginiAutomatici: Story = {
  name: 'Margini automatici',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: `<div class="d-flex mb-3">
  <div class="p-2 bd-highlight-primary">Elemento flex</div>
  <div class="p-2 bd-highlight-primary">Elemento flex</div>
  <div class="p-2 bd-highlight-primary">Elemento flex</div>
</div>
<div class="d-flex mb-3">
  <div class="me-auto p-2 bd-highlight-primary">Elemento flex</div>
  <div class="p-2 bd-highlight-primary">Elemento flex</div>
  <div class="p-2 bd-highlight-primary">Elemento flex</div>
</div>
<div class="d-flex mb-3">
  <div class="p-2 bd-highlight-primary">Elemento flex</div>
  <div class="p-2 bd-highlight-primary">Elemento flex</div>
  <div class="ms-auto p-2 bd-highlight-primary">Elemento flex</div>
</div>`,
      },
    },
  },
  render: () =>
    wrapExample(
      html`<div class="d-flex mb-3">
          <div class="p-2 bd-highlight-primary">Elemento flex</div>
          <div class="p-2 bd-highlight-primary">Elemento flex</div>
          <div class="p-2 bd-highlight-primary">Elemento flex</div>
        </div>
        <div class="d-flex mb-3">
          <div class="me-auto p-2 bd-highlight-primary">Elemento flex</div>
          <div class="p-2 bd-highlight-primary">Elemento flex</div>
          <div class="p-2 bd-highlight-primary">Elemento flex</div>
        </div>
        <div class="d-flex mb-3">
          <div class="p-2 bd-highlight-primary">Elemento flex</div>
          <div class="p-2 bd-highlight-primary">Elemento flex</div>
          <div class="ms-auto p-2 bd-highlight-primary">Elemento flex</div>
        </div>`,
      { className: 'bd-example-row' },
    ),
};

export const ConElementiSpostatiInCimaOInFondo: Story = {
  name: 'Con elementi spostati in cima o in fondo',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: `<div class="d-flex align-items-start flex-column mb-3" style="height: 200px;">
  <div class="mb-auto p-2 bd-highlight-primary">Elemento flex</div>
  <div class="p-2 bd-highlight-primary">Elemento flex</div>
  <div class="p-2 bd-highlight-primary">Elemento flex</div>
</div>
<div class="d-flex align-items-end flex-column mb-3" style="height: 200px;">
  <div class="p-2 bd-highlight-primary">Elemento flex</div>
  <div class="p-2 bd-highlight-primary">Elemento flex</div>
  <div class="mt-auto p-2 bd-highlight-primary">Elemento flex</div>
</div>`,
      },
    },
  },
  render: () =>
    wrapExample(
      html`<div class="d-flex align-items-start flex-column mb-3" style="height: 200px;">
          <div class="mb-auto p-2 bd-highlight-primary">Elemento flex</div>
          <div class="p-2 bd-highlight-primary">Elemento flex</div>
          <div class="p-2 bd-highlight-primary">Elemento flex</div>
        </div>
        <div class="d-flex align-items-end flex-column mb-3" style="height: 200px;">
          <div class="p-2 bd-highlight-primary">Elemento flex</div>
          <div class="p-2 bd-highlight-primary">Elemento flex</div>
          <div class="mt-auto p-2 bd-highlight-primary">Elemento flex</div>
        </div>`,
      { className: 'bd-example-row' },
    ),
};

export const NoWrap: Story = {
  name: 'No-wrap',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: `<div class="d-flex flex-nowrap" style="width: 8rem;">
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
  </div>`,
      },
    },
  },
  render: () =>
    wrapExample(
      html`<div class="d-flex flex-nowrap" style="width: 8rem;">
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
      </div>`,
      { className: 'bd-example-row' },
    ),
};

export const Wrap: Story = {
  name: 'Wrap',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: `<div class="d-flex flex-wrap">
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
  </div>`,
      },
    },
  },
  render: () =>
    wrapExample(
      html`<div class="d-flex flex-wrap">
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
      </div>`,
      { className: 'bd-example-row' },
    ),
};

export const WrapReverse: Story = {
  name: 'Wrap-reverse',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: `<div class="d-flex flex-wrap-reverse">
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
  </div>`,
      },
    },
  },
  render: () =>
    wrapExample(
      html`<div class="d-flex flex-wrap-reverse">
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
      </div>`,
      { className: 'bd-example-row' },
    ),
};

export const Ordinamento: Story = {
  name: 'Ordinamento',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: `<div class="d-flex flex-nowrap">
  <div class="order-3 p-2 bd-highlight-primary">Primo elemento flex</div>
  <div class="order-2 p-2 bd-highlight-primary">Secondo elemento flex</div>
  <div class="order-1 p-2 bd-highlight-primary">Terzo elemento flex</div>
</div>`,
      },
    },
  },
  render: () =>
    wrapExample(
      html`<div class="d-flex flex-nowrap">
        <div class="order-3 p-2 bd-highlight-primary">Primo elemento flex</div>
        <div class="order-2 p-2 bd-highlight-primary">Secondo elemento flex</div>
        <div class="order-1 p-2 bd-highlight-primary">Terzo elemento flex</div>
      </div>`,
      { className: 'bd-example-row' },
    ),
};

export const AlignContentStart: Story = {
  name: 'Align-content-start',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: `<div class="d-flex align-content-start flex-wrap mb-3" style="height: 200px">
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
  </div>`,
      },
    },
  },
  render: () =>
    wrapExample(
      html`<div class="d-flex align-content-start flex-wrap mb-3" style="height: 200px">
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
      </div>`,
      { className: 'bd-example-row' },
    ),
};

export const AlignContentEnd: Story = {
  name: 'Align-content-end',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: `<div class="d-flex align-content-end flex-wrap mb-3" style="height: 200px">
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
  </div>`,
      },
    },
  },
  render: () =>
    wrapExample(
      html`<div class="d-flex align-content-end flex-wrap mb-3" style="height: 200px">
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
      </div>`,
      { className: 'bd-example-row' },
    ),
};

export const AlignContentCenter: Story = {
  name: 'Align-content-center',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: `<div class="d-flex align-content-center flex-wrap mb-3" style="height: 200px">
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
  </div>`,
      },
    },
  },
  render: () =>
    wrapExample(
      html`<div class="d-flex align-content-center flex-wrap mb-3" style="height: 200px">
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
      </div>`,
      { className: 'bd-example-row' },
    ),
};

export const AlignContentBetween: Story = {
  name: 'Align-content-between',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: `<div class="d-flex align-content-between flex-wrap mb-3" style="height: 200px">
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
  </div>`,
      },
    },
  },
  render: () =>
    wrapExample(
      html`<div class="d-flex align-content-between flex-wrap mb-3" style="height: 200px">
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
      </div>`,
      { className: 'bd-example-row' },
    ),
};

export const AlignContentAround: Story = {
  name: 'Align-content-around',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: `<div class="d-flex align-content-around flex-wrap mb-3" style="height: 200px">
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
  </div>`,
      },
    },
  },
  render: () =>
    wrapExample(
      html`<div class="d-flex align-content-around flex-wrap mb-3" style="height: 200px">
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
      </div>`,
      { className: 'bd-example-row' },
    ),
};

export const AlignContentStretch: Story = {
  name: 'Align-content-stretch',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: `<div class="d-flex align-content-stretch flex-wrap mb-3" style="height: 200px">
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
    <div class="p-2 bd-highlight-primary">Elemento flex</div>
  </div>`,
      },
    },
  },
  render: () =>
    wrapExample(
      html`<div class="d-flex align-content-stretch flex-wrap mb-3" style="height: 200px">
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
        <div class="p-2 bd-highlight-primary">Elemento flex</div>
      </div>`,
      { className: 'bd-example-row' },
    ),
};

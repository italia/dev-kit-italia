import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { wrapExample } from './organizzare-gli-spazi.helpers';

const meta = {
  title: 'Organizzare gli spazi/Float',
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const VariantiStartEndNone: Story = {
  name: 'Varianti start-end-none',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: `<div class="float-start">Esempio di float a sinistra per tutte le dimensioni</div><br />
<div class="float-end">Esempio di float a destra per tutte le dimensioni</div><br />
<div class="float-none">Float disattivo per tutte le dimensioni</div>`,
      },
    },
  },
  render: () =>
    wrapExample(
      html`<div class="clearfix">
        <div class="float-start">Esempio di float a sinistra per tutte le dimensioni</div>
        <div class="float-end">Esempio di float a destra per tutte le dimensioni</div>
        <div class="float-none">Float disattivo per tutte le dimensioni</div>
      </div>`,
    ),
};

export const VariantiResponsive: Story = {
  name: 'Varianti responsive',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: `<div class="float-sm-end">Esempio di float a destra per dimensioni SM (small) o maggiori.</div><br />
<div class="float-md-end">Esempio di float a destra per dimensioni MD (medium) o maggiori.</div><br />
<div class="float-lg-end">Esempio di float a destra per dimensioni LG (large) o maggiori.</div><br />
<div class="float-xl-end">Esempio di float a destra per dimensioni XL (extra-large) o maggiori.</div><br />
<div class="float-xxl-end">Esempio di float a destra per dimensioni XXL (extra-extra-large) o maggiori.</div>`,
      },
    },
  },
  render: () =>
    wrapExample(
      html`<div class="clearfix">
        <div class="float-sm-end">Esempio di float a destra per dimensioni SM (small) o maggiori.</div>
        <div class="float-md-end">Esempio di float a destra per dimensioni MD (medium) o maggiori.</div>
        <div class="float-lg-end">Esempio di float a destra per dimensioni LG (large) o maggiori.</div>
        <div class="float-xl-end">Esempio di float a destra per dimensioni XL (extra-large) o maggiori.</div>
        <div class="float-xxl-end">Esempio di float a destra per dimensioni XXL (extra-extra-large) o maggiori.</div>
      </div>`,
    ),
};

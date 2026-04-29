/* eslint-disable storybook/no-redundant-story-name */
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { wrapExample } from './organizzare-gli-spazi.helpers';

const meta = {
  title: 'Organizzare gli spazi/Display',
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Inline: Story = {
  name: 'Inline',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: `<div class="d-inline p-2 bg-primary text-white">d-inline</div>
<div class="d-inline p-2 bg-dark text-white">d-inline</div>`,
      },
    },
  },
  render: () =>
    wrapExample(
      html`<div class="d-inline p-2 bg-primary text-white">d-inline</div>
        <div class="d-inline p-2 bg-dark text-white">d-inline</div>`,
    ),
};

export const Block: Story = {
  name: 'Block',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: `<span class="d-block p-2 bg-primary text-white">d-block</span>
<span class="d-block p-2 bg-dark text-white">d-block</span>`,
      },
    },
  },
  render: () =>
    wrapExample(
      html`<span class="d-block p-2 bg-primary text-white">d-block</span>
        <span class="d-block p-2 bg-dark text-white">d-block</span>`,
    ),
};

export const Responsive: Story = {
  name: 'Responsive',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: `<div class="d-lg-none">Nascosto su schermi più larghi di lg</div>
<div class="d-none d-lg-block">Nascosto su schermi più piccoli di lg</div>`,
      },
    },
  },
  render: () =>
    wrapExample(
      html`<div class="d-lg-none">Nascosto su schermi più larghi di lg</div>
        <div class="d-none d-lg-block">Nascosto su schermi più piccoli di lg</div>`,
    ),
};

export const Stampa: Story = {
  name: 'Stampa',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: `<div class="d-print-none">Solo schermo (Nascondi solo su stampa)</div>
<div class="d-none d-print-block">Solo stampa (Nascondi solo sullo schermo)</div>
<div class="d-none d-lg-block d-print-block">Nascondi fino al grande schermo, ma mostra sempre sulla stampa</div>`,
      },
    },
  },
  render: () =>
    wrapExample(
      html`<div class="d-print-none">Solo schermo (Nascondi solo su stampa)</div>
        <div class="d-none d-print-block">Solo stampa (Nascondi solo sullo schermo)</div>
        <div class="d-none d-lg-block d-print-block">
          Nascondi fino al grande schermo, ma mostra sempre sulla stampa
        </div>`,
    ),
};

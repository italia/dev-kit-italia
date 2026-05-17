import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { wrapExample } from './organizzare-gli-spazi.helpers';

const meta = {
  title: 'Organizzare gli spazi/Dimensionamento',
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const LarghezzaFissa: Story = {
  name: 'Larghezza fissa',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: `<div class="border">
  <div class="bg-primary text-white p-3 w-100">Width 100%</div>
  <div class="bg-primary text-white p-3 w-75">Width 75%</div>
  <div class="bg-primary text-white p-3 w-50">Width 50%</div>
  <div class="bg-primary text-white p-3 w-25">Width 25%</div>
</div>`,
      },
    },
  },
  render: () =>
    wrapExample(
      html`<div class="border">
        <div class="bg-primary text-white p-3 w-100">Width 100%</div>
        <div class="bg-primary text-white p-3 w-75">Width 75%</div>
        <div class="bg-primary text-white p-3 w-50">Width 50%</div>
        <div class="bg-primary text-white p-3 w-25">Width 25%</div>
      </div>`,
    ),
};

export const AltezzaFissa: Story = {
  name: 'Altezza fissa',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: `<div class="border d-flex" style="height: 200px;">
  <div class="bg-primary text-white text-center h-100 d-inline-block" style="width: 120px;">Height 100%</div>
  <div class="bg-primary text-white text-center h-75 d-inline-block" style="width: 120px;">Height 75%</div>
  <div class="bg-primary text-white text-center h-50 d-inline-block" style="width: 120px;">Height 50%</div>
  <div class="bg-primary text-white text-center h-25 d-inline-block" style="width: 120px;">Height 25%</div>
</div>`,
      },
    },
  },
  render: () =>
    wrapExample(
      html`<div class="border d-flex" style="height: 200px;">
        <div class="bg-primary text-white text-center h-100 d-inline-block" style="width: 120px;">Height 100%</div>
        <div class="bg-primary text-white text-center h-75 d-inline-block" style="width: 120px;">Height 75%</div>
        <div class="bg-primary text-white text-center h-50 d-inline-block" style="width: 120px;">Height 50%</div>
        <div class="bg-primary text-white text-center h-25 d-inline-block" style="width: 120px;">Height 25%</div>
      </div>`,
    ),
};

export const LarghezzaMassima: Story = {
  name: 'Larghezza massima',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: `<div style="width: 100px;">
 <div class="bg-primary text-white mw-100" style="width: 500px;">Max-width 100%</div>
</div>`,
      },
    },
  },
  render: () =>
    wrapExample(
      html`<div style="width: 100px;">
        <div class="bg-primary text-white mw-100" style="width: 500px;">Max-width 100%</div>
      </div>`,
    ),
};

export const AltezzaMassima: Story = {
  name: 'Altezza massima',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: `<div style="height: 100px;">
  <div class="bg-primary text-white mh-100" style="height: 400px;">Max-height 100%</div>
</div>`,
      },
    },
  },
  render: () =>
    wrapExample(
      html`<div style="height: 100px;">
        <div class="bg-primary text-white mh-100" style="height: 400px;">Max-height 100%</div>
      </div>`,
    ),
};

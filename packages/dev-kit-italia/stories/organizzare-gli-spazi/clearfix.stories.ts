/* eslint-disable storybook/no-redundant-story-name */
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { wrapExample } from './organizzare-gli-spazi.helpers';

const meta = {
  title: 'Organizzare gli spazi/Clearfix',
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const SenzaClearfix: Story = {
  name: 'Senza clearfix',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: `<div class="p-2" style="background-color: var(--bsi-color-background-muted)">
  <button type="button" class="btn btn-secondary float-start">Pulsante con float a sinistra</button>
  <button type="button" class="btn btn-secondary float-end">Pulsante con float a destra</button>
</div>`,
      },
    },
  },
  render: () =>
    wrapExample(
      html`<div class="p-2" style="background-color: var(--bsi-color-background-muted)">
        <button type="button" class="btn btn-secondary float-start">Pulsante con float a sinistra</button>
        <button type="button" class="btn btn-secondary float-end">Pulsante con float a destra</button>
      </div>`,
      { className: 'clearfix-example' },
    ),
};

export const Base: Story = {
  name: 'Base',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: `<div class="p-2 clearfix" style="background-color: var(--bsi-color-background-muted)">
  <button type="button" class="btn btn-secondary float-start">Pulsante con float a sinistra</button>
  <button type="button" class="btn btn-secondary float-end">Pulsante con float a destra</button>
</div>`,
      },
    },
  },
  render: () =>
    wrapExample(
      html`<div class="p-2 clearfix" style="background-color: var(--bsi-color-background-muted)">
        <button type="button" class="btn btn-secondary float-start">Pulsante con float a sinistra</button>
        <button type="button" class="btn btn-secondary float-end">Pulsante con float a destra</button>
      </div>`,
    ),
};

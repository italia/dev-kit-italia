/* eslint-disable storybook/no-redundant-story-name */
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { wrapExample } from './organizzare-gli-spazi.helpers';

const meta = {
  title: 'Organizzare gli spazi/Spaziatura',
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const CentraturaOrizzontale: Story = {
  name: 'Centratura orizzontale',
  tags: ['!dev'],
  parameters: {
    docs: {
      source: {
        code: `<div class="mx-auto border bg-dark text-white text-center" style="width: 200px;">
    Elemento centrato
  </div>`,
      },
    },
  },
  render: () =>
    wrapExample(
      html`<div class="mx-auto border bg-dark text-white text-center" style="width: 200px;">Elemento centrato</div>`,
    ),
};

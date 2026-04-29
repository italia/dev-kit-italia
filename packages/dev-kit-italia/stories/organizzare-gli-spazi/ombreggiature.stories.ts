import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { wrapExample } from './organizzare-gli-spazi.helpers';

const meta = {
  title: 'Organizzare gli spazi/Ombreggiature',
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const VariantiDiProfondita: Story = {
  name: 'Varianti di profondità',
  tags: ['!dev'],
  parameters: {
    docs: {
      source: {
        code: `<div class="shadow-none p-3 mb-5 bg-light">Nessuna ombra</div>
<div class="shadow-sm p-3 mb-5 bg-white">Ombra piccola</div>
<div class="shadow p-3 mb-5 bg-white">Ombra media</div>
<div class="shadow-lg p-3 mb-5 bg-white">Ombra grande</div>`,
      },
    },
  },
  render: () =>
    wrapExample(
      html`<div class="shadow-none p-3 mb-5 bg-light">Nessuna ombra</div>
        <div class="shadow-sm p-3 mb-5 bg-white">Ombra piccola</div>
        <div class="shadow p-3 mb-5 bg-white">Ombra media</div>
        <div class="shadow-lg p-3 mb-5 bg-white">Ombra grande</div>`,
    ),
};

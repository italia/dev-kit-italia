import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { wrapExample } from './organizzare-gli-spazi.helpers';

const meta = {
  title: 'Organizzare gli spazi/Allineamento verticale',
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const ConElementiInline: Story = {
  name: 'Con elementi inline',
  tags: ['!dev'],
  parameters: {
    docs: {
      source: {
        code: `<span class="bg-primary text-white p-1 align-baseline">baseline</span>
<span class="bg-primary text-white p-1 align-top">top</span>
<span class="bg-primary text-white p-1 align-middle">middle</span>
<span class="bg-primary text-white p-1 align-bottom">bottom</span>
<span class="bg-primary text-white p-1 align-text-top">text-top</span>
<span class="bg-primary text-white p-1 align-text-bottom">text-bottom</span>`,
      },
    },
  },
  render: () =>
    wrapExample(
      html`<span class="bg-primary text-white p-1 align-baseline">baseline</span>
        <span class="bg-primary text-white p-1 align-top">top</span>
        <span class="bg-primary text-white p-1 align-middle">middle</span>
        <span class="bg-primary text-white p-1 align-bottom">bottom</span>
        <span class="bg-primary text-white p-1 align-text-top">text-top</span>
        <span class="bg-primary text-white p-1 align-text-bottom">text-bottom</span>`,
    ),
};

export const ConCelleDiTabella: Story = {
  name: 'Con celle di tabella',
  tags: ['!dev'],
  parameters: {
    docs: {
      source: {
        code: `<table style="height: 100px;" class="table table-bordered">
  <tbody>
    <tr>
      <td class="align-baseline">baseline</td>
      <td class="align-top">top</td>
      <td class="align-middle">middle</td>
      <td class="align-bottom">bottom</td>
      <td class="align-text-top">text-top</td>
      <td class="align-text-bottom">text-bottom</td>
    </tr>
  </tbody>
</table>`,
      },
    },
  },
  render: () =>
    wrapExample(
      html`<table style="height: 100px;" class="table table-bordered">
        <tbody>
          <tr>
            <td class="align-baseline">baseline</td>
            <td class="align-top">top</td>
            <td class="align-middle">middle</td>
            <td class="align-bottom">bottom</td>
            <td class="align-text-top">text-top</td>
            <td class="align-text-bottom">text-bottom</td>
          </tr>
        </tbody>
      </table>`,
    ),
};

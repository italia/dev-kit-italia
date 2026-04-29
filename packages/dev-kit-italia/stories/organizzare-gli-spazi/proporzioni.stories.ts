/* eslint-disable storybook/no-redundant-story-name */
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { wrapExample } from './organizzare-gli-spazi.helpers';

const meta = {
  title: 'Organizzare gli spazi/Proporzioni',
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const EsempioProporzione16x9: Story = {
  name: 'Esempio proporzione 16x9',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: `<div class="ratio ratio-16x9">
  <iframe title="Video YouTube" src="https://www.youtube-nocookie.com/embed/RaHmGbBOP84" allowfullscreen></iframe>
</div>`,
      },
    },
  },
  render: () =>
    wrapExample(
      html`<div class="ratio ratio-16x9">
        <iframe title="Video YouTube" src="https://www.youtube-nocookie.com/embed/RaHmGbBOP84" allowfullscreen></iframe>
      </div>`,
      { className: 'ratio-examples' },
    ),
};

export const VariantiDiProporzioni: Story = {
  name: 'Varianti di proporzioni',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: `<div class="ratio ratio-1x1 ratio-example">
  <div>1x1</div>
</div>
<div class="ratio ratio-4x3 ratio-example">
  <div>4x3</div>
</div>
<div class="ratio ratio-16x9 ratio-example">
  <div>16x9</div>
</div>
<div class="ratio ratio-21x9 ratio-example">
  <div>21x9</div>
</div>`,
      },
    },
  },
  render: () =>
    wrapExample(
      html`<div class="ratio ratio-1x1 ratio-example">
          <div>1x1</div>
        </div>
        <div class="ratio ratio-4x3 ratio-example">
          <div>4x3</div>
        </div>
        <div class="ratio ratio-16x9 ratio-example">
          <div>16x9</div>
        </div>
        <div class="ratio ratio-21x9 ratio-example">
          <div>21x9</div>
        </div>`,
      { className: 'ratio-examples' },
    ),
};

export const ProporzionePersonalizzata: Story = {
  name: 'Proporzione personalizzata',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: `<div class="ratio ratio-example" style="--bs-aspect-ratio: 50%;">
  <div>2x1</div>
</div>`,
      },
    },
  },
  render: () =>
    wrapExample(
      html`<div class="ratio ratio-example" style="--bs-aspect-ratio: 50%;">
        <div>2x1</div>
      </div>`,
      { className: 'ratio-examples' },
    ),
};

export const ProporzionePersonalizzataResponsive: Story = {
  name: 'Proporzione personalizzata responsive',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: `<div class="ratio ratio-4x3 ratio-example ratio-example-breakpoint">
  <div>4x3, poi 2x1</div>
</div>`,
      },
    },
  },
  render: () =>
    wrapExample(
      html`<div class="ratio ratio-4x3 ratio-example ratio-example-breakpoint">
        <div>4x3, poi 2x1</div>
      </div>`,
      { className: 'ratio-examples' },
    ),
};

/* eslint-disable storybook/no-redundant-story-name */
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { wrapExample } from './organizzare-gli-spazi.helpers';

const meta = {
  title: 'Organizzare gli spazi/Introduzione',
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Container: Story = {
  name: 'Container',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: `<div class="bd-example">
  <div class="bd-example-container">
    <div class="bd-example-container-header"></div>
    <div class="bd-example-container-sidebar"></div>
    <div class="bd-example-container-body"></div>
  </div>
</div>`,
      },
    },
  },
  render: () =>
    wrapExample(
      html`<div class="bd-example">
        <div class="bd-example-container">
          <div class="bd-example-container-header"></div>
          <div class="bd-example-container-sidebar"></div>
          <div class="bd-example-container-body"></div>
        </div>
      </div>`,
      { className: 'container-demo' },
    ),
};

export const ContainerFluido: Story = {
  name: 'Container fluido',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: `<div class="bd-example">
  <div class="bd-example-container bd-example-container-fluid">
    <div class="bd-example-container-header"></div>
    <div class="bd-example-container-sidebar"></div>
    <div class="bd-example-container-body"></div>
  </div>
</div>`,
      },
    },
  },
  render: () =>
    wrapExample(
      html`<div class="bd-example">
        <div class="bd-example-container bd-example-container-fluid">
          <div class="bd-example-container-header"></div>
          <div class="bd-example-container-sidebar"></div>
          <div class="bd-example-container-body"></div>
        </div>
      </div>`,
      { className: 'container-demo' },
    ),
};

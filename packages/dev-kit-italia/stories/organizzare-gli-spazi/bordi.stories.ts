/* eslint-disable storybook/no-redundant-story-name */
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { wrapExample } from './organizzare-gli-spazi.helpers';

const meta = {
  title: 'Organizzare gli spazi/Bordi',
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Aggiuntivo: Story = {
  name: 'Aggiuntivo',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: `<span class="border"></span>
<span class="border-top"></span>
<span class="border-end"></span>
<span class="border-bottom"></span>
<span class="border-start"></span>`,
      },
    },
  },
  render: () =>
    wrapExample(
      html`<span class="border"></span>
        <span class="border-top"></span>
        <span class="border-end"></span>
        <span class="border-bottom"></span>
        <span class="border-start"></span>`,
      { className: 'bd-example-border-utils' },
    ),
};

export const Sottrattivo: Story = {
  name: 'Sottrattivo',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: `<span class="border-0"></span>
<span class="border-top-0"></span>
<span class="border-end-0"></span>
<span class="border-bottom-0"></span>
<span class="border-start-0"></span>`,
      },
    },
  },
  render: () =>
    wrapExample(
      html`<span class="border-0"></span>
        <span class="border-top-0"></span>
        <span class="border-end-0"></span>
        <span class="border-bottom-0"></span>
        <span class="border-start-0"></span>`,
      { className: 'bd-example-border-utils bd-example-border-utils-0' },
    ),
};

export const VariantiDiColore: Story = {
  name: 'Varianti di colore',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: `<span class="border border-primary"></span>
<span class="border border-secondary"></span>
<span class="border border-success"></span>
<span class="border border-danger"></span>
<span class="border border-warning"></span>
<span class="border border-white"></span>`,
      },
    },
  },
  render: () =>
    wrapExample(
      html`<span class="border border-primary"></span>
        <span class="border border-secondary"></span>
        <span class="border border-success"></span>
        <span class="border border-danger"></span>
        <span class="border border-warning"></span>
        <span class="border border-white"></span>`,
      { className: 'bd-example-border-utils' },
    ),
};

export const Arrotondati: Story = {
  name: 'Arrotondati',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: `<img src="https://placehold.co/75x75/ebebeb/808080/?text=Immagine" class="rounded" alt="Esempio di immagine arrotondata">
  <img src="https://placehold.co/75x75/ebebeb/808080/?text=Immagine" class="rounded-top" alt="Esempio di immagine arrotondata in alto">
  <img src="https://placehold.co/75x75/ebebeb/808080/?text=Immagine" class="rounded-end" alt="Esempio di immagine arrotondata a destra">
  <img src="https://placehold.co/75x75/ebebeb/808080/?text=Immagine" class="rounded-bottom" alt="Esempio di immagine arrotondata in basso">
  <img src="https://placehold.co/75x75/ebebeb/808080/?text=Immagine" class="rounded-start" alt="Esempio di immagine arrotondata a sinistra">
  <img src="https://placehold.co/75x75/ebebeb/808080/?text=Immagine" class="rounded-circle" alt="Esempio di immagine arrotondata a cerchio">
  <img src="https://placehold.co/75x75/ebebeb/808080/?text=Immagine" class="rounded-0" alt="Esempio di immagine non arrotondata (sovrascrive l'eventuale arrotondamento applicato precedentemente)">
  <img src="https://placehold.co/150x75/ebebeb/808080/?text=Immagine" class="rounded-pill" alt="Esempio di immagine arrotondata a pillola">`,
      },
    },
  },
  render: () =>
    wrapExample(
      html`<img
          src="https://placehold.co/75x75/ebebeb/808080/?text=Immagine"
          class="rounded"
          alt="Esempio di immagine arrotondata"
        />
        <img
          src="https://placehold.co/75x75/ebebeb/808080/?text=Immagine"
          class="rounded-top"
          alt="Esempio di immagine arrotondata in alto"
        />
        <img
          src="https://placehold.co/75x75/ebebeb/808080/?text=Immagine"
          class="rounded-end"
          alt="Esempio di immagine arrotondata a destra"
        />
        <img
          src="https://placehold.co/75x75/ebebeb/808080/?text=Immagine"
          class="rounded-bottom"
          alt="Esempio di immagine arrotondata in basso"
        />
        <img
          src="https://placehold.co/75x75/ebebeb/808080/?text=Immagine"
          class="rounded-start"
          alt="Esempio di immagine arrotondata a sinistra"
        />
        <img
          src="https://placehold.co/75x75/ebebeb/808080/?text=Immagine"
          class="rounded-circle"
          alt="Esempio di immagine arrotondata a cerchio"
        />
        <img
          src="https://placehold.co/75x75/ebebeb/808080/?text=Immagine"
          class="rounded-0"
          alt="Esempio di immagine non arrotondata (sovrascrive l'eventuale arrotondamento applicato precedentemente)"
        />
        <img
          src="https://placehold.co/150x75/ebebeb/808080/?text=Immagine"
          class="rounded-pill"
          alt="Esempio di immagine arrotondata a pillola"
        />`,
    ),
};

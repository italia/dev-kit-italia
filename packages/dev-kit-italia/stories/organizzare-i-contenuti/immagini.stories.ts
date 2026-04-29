import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

const meta = {
  title: 'Organizzare i contenuti/Immagini',
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Base: Story = {
  name: 'Base',
  tags: ['!dev'],
  parameters: {
    docs: {
      source: {
        code: `<img src="https://placehold.co/120x120/ebebeb/808080/?text=Immagine" class="img-fluid" alt="Immagine responsive generica">`,
      },
    },
  },
  render: () => html`<img src="https://placehold.co/120x120/ebebeb/808080/?text=Immagine" class="img-fluid" alt="Immagine responsive generica">`,
};

export const Thumbnail: Story = {
  name: 'Thumbnail',
  tags: ['!dev'],
  parameters: {
    docs: {
      source: {
        code: `<img src="https://placehold.co/120x120/ebebeb/808080/?text=Immagine" class="img-thumbnail" alt="Una generica immagine segnaposto quadrata con un bordo bianco attorno ad essa, che la rende simile a una foto scattata con una vecchia macchina fotografica istantanea">`,
      },
    },
  },
  render: () => html`<img src="https://placehold.co/120x120/ebebeb/808080/?text=Immagine" class="img-thumbnail" alt="Una generica immagine segnaposto quadrata con un bordo bianco attorno ad essa, che la rende simile a una foto scattata con una vecchia macchina fotografica istantanea">`,
};

export const AllineamentiStartEnd: Story = {
  name: 'Allineamenti start-end',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: `<img src="https://placehold.co/120x120/ebebeb/808080/?text=Immagine" class="rounded float-start" alt="Un'immagine generica segnaposto con angoli arrotondati">
  <img src="https://placehold.co/120x120/ebebeb/808080/?text=Immagine" class="rounded float-end" alt="Un'immagine generica segnaposto con angoli arrotondati">`,
      },
    },
  },
  render: () => html`<div style="min-height: 150px;">
    <img src="https://placehold.co/120x120/ebebeb/808080/?text=Immagine" class="rounded float-start me-3" alt="Un'immagine generica segnaposto con angoli arrotondati">
    <img src="https://placehold.co/120x120/ebebeb/808080/?text=Immagine" class="rounded float-end ms-3" alt="Un'immagine generica segnaposto con angoli arrotondati">
  </div>`,
};

export const AllineamentoCentrato: Story = {
  name: 'Allineamento centrato',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: `<img src="https://placehold.co/120x120/ebebeb/808080/?text=Immagine" class="rounded mx-auto d-block" alt="Un'immagine generica segnaposto con angoli arrotondati">`,
      },
    },
  },
  render: () => html`<img src="https://placehold.co/120x120/ebebeb/808080/?text=Immagine" class="rounded mx-auto d-block" alt="Un'immagine generica segnaposto con angoli arrotondati">`,
};

export const AllineamentoCentratoAlternativa: Story = {
  name: 'Allineamento centrato, alternativa',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: `<div class="text-center">
    <img src="https://placehold.co/120x120/ebebeb/808080/?text=Immagine" class="rounded" alt="Un'immagine generica segnaposto con angoli arrotondati">
  </div>`,
      },
    },
  },
  render: () => html`<div class="text-center">
    <img src="https://placehold.co/120x120/ebebeb/808080/?text=Immagine" class="rounded" alt="Un'immagine generica segnaposto con angoli arrotondati">
  </div>`,
};

export const Figure: Story = {
  name: 'Figure',
  tags: ['!dev'],
  parameters: {
    docs: {
      source: {
        code: `<figure class="figure">
  <img src="https://placehold.co/280x120/ebebeb/808080/?text=Immagine" class="figure-img img-fluid rounded" alt="Un'immagine generica segnaposto con angoli arrotondati in una figura.">
  <figcaption class="figure-caption">Una didascalia per l'immagine sopra.</figcaption>
</figure>`,
      },
    },
  },
  render: () => html`<figure class="figure">
  <img src="https://placehold.co/280x120/ebebeb/808080/?text=Immagine" class="figure-img img-fluid rounded" alt="Un'immagine generica segnaposto con angoli arrotondati in una figura.">
  <figcaption class="figure-caption">Una didascalia per l'immagine sopra.</figcaption>
</figure>`,
};

export const FigureConDidascaliaAllineataADestra: Story = {
  name: 'Figure con didascalia allineata a destra',
  tags: ['!dev'],
  parameters: {
    docs: {
      source: {
        code: `<figure class="figure">
  <img src="https://placehold.co/280x120/ebebeb/808080/?text=Immagine" class="figure-img img-fluid rounded" alt="Un'immagine generica segnaposto con angoli arrotondati in una figura.">
  <figcaption class="figure-caption text-end">Una didascalia per l'immagine sopra.</figcaption>
</figure>`,
      },
    },
  },
  render: () => html`<figure class="figure">
  <img src="https://placehold.co/280x120/ebebeb/808080/?text=Immagine" class="figure-img img-fluid rounded" alt="Un'immagine generica segnaposto con angoli arrotondati in una figura.">
  <figcaption class="figure-caption text-end">Una didascalia per l'immagine sopra.</figcaption>
</figure>`,
};

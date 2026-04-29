import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { wrapExample } from './organizzare-gli-spazi.helpers';

const meta = {
  title: 'Organizzare gli spazi/Griglie',
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Base: Story = {
  name: 'Base',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: `<div class="container">
  <div class="row">
    <div class="col-sm"> Una di tre colonne </div>
    <div class="col-sm"> Una di tre colonne </div>
    <div class="col-sm">Una di tre colonne</div>
  </div>
</div>`,
      },
    },
  },
  render: () =>
    wrapExample(
      html`<div class="container">
        <div class="row">
          <div class="col-sm">Una di tre colonne</div>
          <div class="col-sm">Una di tre colonne</div>
          <div class="col-sm">Una di tre colonne</div>
        </div>
      </div>`,
      { className: 'bd-example-row' },
    ),
};

export const ColonneConLarghezzeOmogenee: Story = {
  name: 'Colonne con larghezze omogenee',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: `<div class="container">
  <div class="row">
    <div class="col">1 di 2</div>
    <div class="col">2 di 2</div>
  </div>
  <div class="row">
    <div class="col">1 di 3</div>
    <div class="col">2 di 3</div>
    <div class="col">3 di 3</div>
  </div>
</div>`,
      },
    },
  },
  render: () =>
    wrapExample(
      html`<div class="container">
        <div class="row">
          <div class="col">1 di 2</div>
          <div class="col">2 di 2</div>
        </div>
        <div class="row">
          <div class="col">1 di 3</div>
          <div class="col">2 di 3</div>
          <div class="col">3 di 3</div>
        </div>
      </div>`,
      { className: 'bd-example-row' },
    ),
};

export const ColonneConLarghezzeOmogeneeAlternativa: Story = {
  name: 'Colonne con larghezze omogenee, alternativa',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: `<div class="container">
  <div class="row">
    <div class="col">Colonna</div>
    <div class="col">Colonna</div>
    <div class="w-100"></div>
    <div class="col">Colonna</div>
    <div class="col">Colonna</div>
  </div>
</div>`,
      },
    },
  },
  render: () =>
    wrapExample(
      html`<div class="container">
        <div class="row">
          <div class="col">Colonna</div>
          <div class="col">Colonna</div>
          <div class="w-100"></div>
          <div class="col">Colonna</div>
          <div class="col">Colonna</div>
        </div>
      </div>`,
      { className: 'bd-example-row' },
    ),
};

export const ImpostareLaLarghezzaDiUnaColonna: Story = {
  name: 'Impostare la larghezza di una colonna',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: `<div class="container">
  <div class="row">
    <div class="col">1 di 3</div>
    <div class="col-6">2 di 3 (larga 6/12)</div>
    <div class="col">3 di 3</div>
  </div>
  <div class="row">
    <div class="col">1 di 3</div>
    <div class="col-5">2 di 3 (larga 5/12)</div>
    <div class="col">3 di 3</div>
  </div>
</div>`,
      },
    },
  },
  render: () =>
    wrapExample(
      html`<div class="container">
        <div class="row">
          <div class="col">1 di 3</div>
          <div class="col-6">2 di 3 (larga 6/12)</div>
          <div class="col">3 di 3</div>
        </div>
        <div class="row">
          <div class="col">1 di 3</div>
          <div class="col-5">2 di 3 (larga 5/12)</div>
          <div class="col">3 di 3</div>
        </div>
      </div>`,
      { className: 'bd-example-row' },
    ),
};

export const ContenutoALarghezzaVariabile: Story = {
  name: 'Contenuto a larghezza variabile',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: `<div class="container">
  <div class="row justify-content-md-center">
    <div class="col col-lg-2">1 di 3</div>
    <div class="col-md-auto">Contenuto a larghezza variabile</div>
    <div class="col col-lg-2">3 di 3</div>
  </div>
  <div class="row">
    <div class="col">1 di 3</div>
    <div class="col-md-auto">Contenuto a larghezza variabile</div>
    <div class="col col-lg-2">3 di 3</div>
  </div>
</div>`,
      },
    },
  },
  render: () =>
    wrapExample(
      html`<div class="container">
        <div class="row justify-content-md-center">
          <div class="col col-lg-2">1 di 3</div>
          <div class="col-md-auto">Contenuto a larghezza variabile</div>
          <div class="col col-lg-2">3 di 3</div>
        </div>
        <div class="row">
          <div class="col">1 di 3</div>
          <div class="col-md-auto">Contenuto a larghezza variabile</div>
          <div class="col col-lg-2">3 di 3</div>
        </div>
      </div>`,
      { className: 'bd-example-row' },
    ),
};

export const LarghezzaIdenticaSuPiuRighe: Story = {
  name: 'Larghezza identica su più righe',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: `<div class="row">
  <div class="col">col</div>
  <div class="col">col</div>
  <div class="w-100"></div>
  <div class="col">col</div>
  <div class="col">col</div>
</div>`,
      },
    },
  },
  render: () =>
    wrapExample(
      html`<div class="row">
        <div class="col">col</div>
        <div class="col">col</div>
        <div class="w-100"></div>
        <div class="col">col</div>
        <div class="col">col</div>
      </div>`,
      { className: 'bd-example-row' },
    ),
};

export const ResponsivePerTuttiIBreakpoint: Story = {
  name: 'Responsive, per tutti i breakpoint',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: `<div class="row">
  <div class="col">col</div>
  <div class="col">col</div>
  <div class="col">col</div>
  <div class="col">col</div>
</div>
<div class="row">
  <div class="col-8">col-8</div>
  <div class="col-4">col-4</div>
</div>`,
      },
    },
  },
  render: () =>
    wrapExample(
      html`<div class="row">
          <div class="col">col</div>
          <div class="col">col</div>
          <div class="col">col</div>
          <div class="col">col</div>
        </div>
        <div class="row">
          <div class="col-8">col-8</div>
          <div class="col-4">col-4</div>
        </div>`,
      { className: 'bd-example-row' },
    ),
};

export const ResponsiveRaccoltiInOrizzontale: Story = {
  name: 'Responsive, raccolti in orizzontale',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: `<div class="row">
  <div class="col-sm-8">col-sm-8</div>
  <div class="col-sm-4">col-sm-4</div>
</div>
<div class="row">
  <div class="col-sm">col-sm</div>
  <div class="col-sm">col-sm</div>
  <div class="col-sm">col-sm</div>
</div>`,
      },
    },
  },
  render: () =>
    wrapExample(
      html`<div class="row">
          <div class="col-sm-8">col-sm-8</div>
          <div class="col-sm-4">col-sm-4</div>
        </div>
        <div class="row">
          <div class="col-sm">col-sm</div>
          <div class="col-sm">col-sm</div>
          <div class="col-sm">col-sm</div>
        </div>`,
      { className: 'bd-example-row' },
    ),
};

export const ResponsiveMischiareEAbbinare: Story = {
  name: 'Responsive, mischiare e abbinare',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: `<!-- Ordina le colonne sui dispositivi mobile creando una larghezza intera e l'altra mezza larghezza -->
<div class="row">
  <div class="col-12 col-md-8">.col-12 .col-md-8</div>
  <div class="col-6 col-md-4">.col-6 .col-md-4</div>
</div>

<!-- Le colonne partono con una larghezza del 50% sui dispositivi mobile e arrivano al 33.3% sui desktop -->
<div class="row">
  <div class="col-6 col-md-4">.col-6 .col-md-4</div>
  <div class="col-6 col-md-4">.col-6 .col-md-4</div>
  <div class="col-6 col-md-4">.col-6 .col-md-4</div>
</div>

<!-- Le colonne sono sempre larghe 50%, su dispositivi mobile e desktop -->
<div class="row">
  <div class="col-6">.col-6</div>
  <div class="col-6">.col-6</div>
</div>`,
      },
    },
  },
  render: () =>
    wrapExample(
      html`<!-- Ordina le colonne sui dispositivi mobile creando una larghezza intera e l'altra mezza larghezza -->
        <div class="row">
          <div class="col-12 col-md-8">.col-12 .col-md-8</div>
          <div class="col-6 col-md-4">.col-6 .col-md-4</div>
        </div>

        <!-- Le colonne partono con una larghezza del 50% sui dispositivi mobile e arrivano al 33.3% sui desktop -->
        <div class="row">
          <div class="col-6 col-md-4">.col-6 .col-md-4</div>
          <div class="col-6 col-md-4">.col-6 .col-md-4</div>
          <div class="col-6 col-md-4">.col-6 .col-md-4</div>
        </div>

        <!-- Le colonne sono sempre larghe 50%, su dispositivi mobile e desktop -->
        <div class="row">
          <div class="col-6">.col-6</div>
          <div class="col-6">.col-6</div>
        </div>`,
      { className: 'bd-example-row' },
    ),
};

export const ResponsiveRigheDiColonneEg1: Story = {
  name: 'Responsive, righe di colonne, eg. 1',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: `<div class="container">
  <div class="row row-cols-2">
    <div class="col">Colonna</div>
    <div class="col">Colonna</div>
    <div class="col">Colonna</div>
    <div class="col">Colonna</div>
  </div>
</div>`,
      },
    },
  },
  render: () =>
    wrapExample(
      html`<div class="container">
        <div class="row row-cols-2">
          <div class="col">Colonna</div>
          <div class="col">Colonna</div>
          <div class="col">Colonna</div>
          <div class="col">Colonna</div>
        </div>
      </div>`,
      { className: 'bd-example-row' },
    ),
};

export const ResponsiveRigheDiColonneEg2: Story = {
  name: 'Responsive, righe di colonne, eg. 2',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: `<div class="container">
  <div class="row row-cols-3">
    <div class="col">Colonna</div>
    <div class="col">Colonna</div>
    <div class="col">Colonna</div>
    <div class="col">Colonna</div>
  </div>
</div>`,
      },
    },
  },
  render: () =>
    wrapExample(
      html`<div class="container">
        <div class="row row-cols-3">
          <div class="col">Colonna</div>
          <div class="col">Colonna</div>
          <div class="col">Colonna</div>
          <div class="col">Colonna</div>
        </div>
      </div>`,
      { className: 'bd-example-row' },
    ),
};

export const ResponsiveRigheDiColonneEg3: Story = {
  name: 'Responsive, righe di colonne, eg. 3',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: `<div class="container">
  <div class="row row-cols-4">
    <div class="col">Colonna</div>
    <div class="col">Colonna</div>
    <div class="col">Colonna</div>
    <div class="col">Colonna</div>
  </div>
</div>`,
      },
    },
  },
  render: () =>
    wrapExample(
      html`<div class="container">
        <div class="row row-cols-4">
          <div class="col">Colonna</div>
          <div class="col">Colonna</div>
          <div class="col">Colonna</div>
          <div class="col">Colonna</div>
        </div>
      </div>`,
      { className: 'bd-example-row' },
    ),
};

export const ResponsiveRigheDiColonneEg4: Story = {
  name: 'Responsive, righe di colonne, eg. 4',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: `<div class="container">
  <div class="row row-cols-4">
    <div class="col">Colonna</div>
    <div class="col">Colonna</div>
    <div class="col-6">Colonna</div>
    <div class="col">Colonna</div>
  </div>
</div>`,
      },
    },
  },
  render: () =>
    wrapExample(
      html`<div class="container">
        <div class="row row-cols-4">
          <div class="col">Colonna</div>
          <div class="col">Colonna</div>
          <div class="col-6">Colonna</div>
          <div class="col">Colonna</div>
        </div>
      </div>`,
      { className: 'bd-example-row' },
    ),
};

export const ResponsiveRigheDiColonneEg5: Story = {
  name: 'Responsive, righe di colonne, eg. 5',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: `<div class="container">
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
    <div class="col">Colonna</div>
    <div class="col">Colonna</div>
    <div class="col">Colonna</div>
    <div class="col">Colonna</div>
  </div>
</div>`,
      },
    },
  },
  render: () =>
    wrapExample(
      html`<div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
          <div class="col">Colonna</div>
          <div class="col">Colonna</div>
          <div class="col">Colonna</div>
          <div class="col">Colonna</div>
        </div>
      </div>`,
      { className: 'bd-example-row' },
    ),
};

export const AllineamentoVerticale: Story = {
  name: 'Allineamento verticale',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: `<div class="container">
  <div class="row align-items-start" style="min-height: 5rem;">
    <div class="col">Una di tre colonne</div>
    <div class="col">Una di tre colonne</div>
    <div class="col">Una di tre colonne</div>
  </div>
  <div class="row align-items-center" style="min-height: 5rem;">
    <div class="col">Una di tre colonne</div>
    <div class="col">Una di tre colonne</div>
    <div class="col">Una di tre colonne</div>
  </div>
  <div class="row align-items-end" style="min-height: 5rem;">
    <div class="col">Una di tre colonne</div>
    <div class="col">Una di tre colonne</div>
    <div class="col">Una di tre colonne</div>
  </div>
</div>`,
      },
    },
  },
  render: () =>
    wrapExample(
      html`<div class="container">
        <div class="row align-items-start" style="min-height: 5rem;">
          <div class="col">Una di tre colonne</div>
          <div class="col">Una di tre colonne</div>
          <div class="col">Una di tre colonne</div>
        </div>
        <div class="row align-items-center" style="min-height: 5rem;">
          <div class="col">Una di tre colonne</div>
          <div class="col">Una di tre colonne</div>
          <div class="col">Una di tre colonne</div>
        </div>
        <div class="row align-items-end" style="min-height: 5rem;">
          <div class="col">Una di tre colonne</div>
          <div class="col">Una di tre colonne</div>
          <div class="col">Una di tre colonne</div>
        </div>
      </div>`,
      { className: 'bd-example-row' },
    ),
};

export const AllineamentoVerticaleMisto: Story = {
  name: 'Allineamento verticale, misto',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: `<div class="container">
  <div class="row" style="min-height: 5rem;">
    <div class="col align-self-start">Una di tre colonne</div>
    <div class="col align-self-center">Una di tre colonne</div>
    <div class="col align-self-end">Una di tre colonne</div>
  </div>
</div>`,
      },
    },
  },
  render: () =>
    wrapExample(
      html`<div class="container">
        <div class="row" style="min-height: 5rem;">
          <div class="col align-self-start">Una di tre colonne</div>
          <div class="col align-self-center">Una di tre colonne</div>
          <div class="col align-self-end">Una di tre colonne</div>
        </div>
      </div>`,
      { className: 'bd-example-row bd-example-bg' },
    ),
};

export const AllineamentoOrizzontale: Story = {
  name: 'Allineamento orizzontale',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: `<div class="container">
  <div class="row justify-content-start">
    <div class="col-4">Una di due colonne</div>
    <div class="col-4">Una di due colonne</div>
  </div>
  <div class="row justify-content-center">
    <div class="col-4">Una di due colonne</div>
    <div class="col-4">Una di due colonne</div>
  </div>
  <div class="row justify-content-end">
    <div class="col-4">Una di due colonne</div>
    <div class="col-4">Una di due colonne</div>
  </div>
  <div class="row justify-content-around">
    <div class="col-4">Una di due colonne</div>
    <div class="col-4">Una di due colonne</div>
  </div>
  <div class="row justify-content-between">
    <div class="col-4">Una di due colonne</div>
    <div class="col-4">Una di due colonne</div>
  </div>
</div>`,
      },
    },
  },
  render: () =>
    wrapExample(
      html`<div class="container">
        <div class="row justify-content-start">
          <div class="col-4">Una di due colonne</div>
          <div class="col-4">Una di due colonne</div>
        </div>
        <div class="row justify-content-center">
          <div class="col-4">Una di due colonne</div>
          <div class="col-4">Una di due colonne</div>
        </div>
        <div class="row justify-content-end">
          <div class="col-4">Una di due colonne</div>
          <div class="col-4">Una di due colonne</div>
        </div>
        <div class="row justify-content-around">
          <div class="col-4">Una di due colonne</div>
          <div class="col-4">Una di due colonne</div>
        </div>
        <div class="row justify-content-between">
          <div class="col-4">Una di due colonne</div>
          <div class="col-4">Una di due colonne</div>
        </div>
      </div>`,
      { className: 'bd-example-row bd-example-bg' },
    ),
};

export const SenzaGutter: Story = {
  name: 'Senza gutter',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: `<div class="row g-0">
  <div class="col-12 col-sm-6 col-md-8">.col-12 .col-sm-6 .col-md-8</div>
  <div class="col-6 col-md-4">.col-6 .col-md-4</div>
</div>`,
      },
    },
  },
  render: () =>
    wrapExample(
      html`<div class="row g-0">
        <div class="col-12 col-sm-6 col-md-8">.col-12 .col-sm-6 .col-md-8</div>
        <div class="col-6 col-md-4">.col-6 .col-md-4</div>
      </div>`,
      { className: 'bd-example-row' },
    ),
};

export const GutterVariabile: Story = {
  name: 'Gutter variabile',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: `<div class="row variable-gutters">
  <div class="col-12 col-sm-6 col-md-8">.col-12 .col-sm-6 .col-md-8</div>
  <div class="col-6 col-md-4">.col-6 .col-md-4</div>
</div>`,
      },
    },
  },
  render: () =>
    wrapExample(
      html`<div class="row variable-gutters">
        <div class="col-12 col-sm-6 col-md-8">.col-12 .col-sm-6 .col-md-8</div>
        <div class="col-6 col-md-4">.col-6 .col-md-4</div>
      </div>`,
      { className: 'bd-example-row' },
    ),
};

export const ColonnaACapo: Story = {
  name: 'Colonna a capo',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: `<div class="row">
  <div class="col-9">.col-9</div>
  <div class="col-4">.col-4<br>Dato che 9 + 4 = 13 &gt; 12, questo div largo come 4 colonne viene portato a capo su una nuova linea come un'unità contigua.</div>
  <div class="col-6">.col-6<br>Le colonne successive continuano lungo la nuova riga.</div>
</div>`,
      },
    },
  },
  render: () =>
    wrapExample(
      html`<div class="row">
        <div class="col-9">.col-9</div>
        <div class="col-4">
          .col-4<br />Dato che 9 + 4 = 13 &gt; 12, questo div largo come 4 colonne viene portato a capo su una nuova
          linea come un'unità contigua.
        </div>
        <div class="col-6">.col-6<br />Le colonne successive continuano lungo la nuova riga.</div>
      </div>`,
      { className: 'bd-example-row' },
    ),
};

export const InterruzioneDiColonna: Story = {
  name: 'Interruzione di colonna',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: `<div class="row">
  <div class="col-6 col-sm-3">.col-6 .col-sm-3</div>
  <div class="col-6 col-sm-3">.col-6 .col-sm-3</div>
  <!-- Forza le prossime colonne per passare a una nuova riga -->
  <div class="w-100"></div>
  <div class="col-6 col-sm-3">.col-6 .col-sm-3</div>
  <div class="col-6 col-sm-3">.col-6 .col-sm-3</div>
</div>`,
      },
    },
  },
  render: () =>
    wrapExample(
      html`<div class="row">
        <div class="col-6 col-sm-3">.col-6 .col-sm-3</div>
        <div class="col-6 col-sm-3">.col-6 .col-sm-3</div>
        <!-- Forza le prossime colonne per passare a una nuova riga -->
        <div class="w-100"></div>
        <div class="col-6 col-sm-3">.col-6 .col-sm-3</div>
        <div class="col-6 col-sm-3">.col-6 .col-sm-3</div>
      </div>`,
      { className: 'bd-example-row' },
    ),
};

export const InterruzioneDiColonnaResponsive: Story = {
  name: 'Interruzione di colonna, responsive',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: `<div class="row">
  <div class="col-6 col-sm-4">.col-6 .col-sm-4</div>
  <div class="col-6 col-sm-4">.col-6 .col-sm-4</div>
  <!-- Forza le prossime colonne per passare alla nuova riga al breakpoint md e superiori -->
  <div class="w-100 d-none d-md-block"></div>
  <div class="col-6 col-sm-4">.col-6 .col-sm-4</div>
  <div class="col-6 col-sm-4">.col-6 .col-sm-4</div>
</div>`,
      },
    },
  },
  render: () =>
    wrapExample(
      html`<div class="row">
        <div class="col-6 col-sm-4">.col-6 .col-sm-4</div>
        <div class="col-6 col-sm-4">.col-6 .col-sm-4</div>
        <!-- Forza le prossime colonne per passare alla nuova riga al breakpoint md e superiori -->
        <div class="w-100 d-none d-md-block"></div>
        <div class="col-6 col-sm-4">.col-6 .col-sm-4</div>
        <div class="col-6 col-sm-4">.col-6 .col-sm-4</div>
      </div>`,
      { className: 'bd-example-row' },
    ),
};

export const Riordinamento: Story = {
  name: 'Riordinamento',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: `<div class="container">
  <div class="row">
    <div class="col">Prima, ma non ordinata</div>
    <div class="col order-2">Seconda, ma ultima</div>
    <div class="col order-1">Terza ma prima</div>
  </div>
</div>`,
      },
    },
  },
  render: () =>
    wrapExample(
      html`<div class="container">
        <div class="row">
          <div class="col">Prima, ma non ordinata</div>
          <div class="col order-2">Seconda, ma ultima</div>
          <div class="col order-1">Terza ma prima</div>
        </div>
      </div>`,
      { className: 'bd-example-row' },
    ),
};

export const RiordinamentoFirstELast: Story = {
  name: 'Riordinamento first e last',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: `<div class="container">
  <div class="row">
    <div class="col order-last">Prima, ma non ordinata</div>
    <div class="col">Seconda, ma non ordinata</div>
    <div class="col order-first">Terza ma prima</div>
  </div>
</div>`,
      },
    },
  },
  render: () =>
    wrapExample(
      html`<div class="container">
        <div class="row">
          <div class="col order-last">Prima, ma non ordinata</div>
          <div class="col">Seconda, ma non ordinata</div>
          <div class="col order-first">Terza ma prima</div>
        </div>
      </div>`,
      { className: 'bd-example-row' },
    ),
};

export const Offset: Story = {
  name: 'Offset',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: `<div class="row">
  <div class="col-md-4">.col-md-4</div>
  <div class="col-md-4 offset-md-4">.col-md-4 .offset-md-4</div>
</div>
<div class="row">
  <div class="col-md-3 offset-md-3">.col-md-3 .offset-md-3</div>
  <div class="col-md-3 offset-md-3">.col-md-3 .offset-md-3</div>
</div>
<div class="row">
  <div class="col-md-6 offset-md-3">.col-md-6 .offset-md-3</div>
</div>`,
      },
    },
  },
  render: () =>
    wrapExample(
      html`<div class="row">
          <div class="col-md-4">.col-md-4</div>
          <div class="col-md-4 offset-md-4">.col-md-4 .offset-md-4</div>
        </div>
        <div class="row">
          <div class="col-md-3 offset-md-3">.col-md-3 .offset-md-3</div>
          <div class="col-md-3 offset-md-3">.col-md-3 .offset-md-3</div>
        </div>
        <div class="row">
          <div class="col-md-6 offset-md-3">.col-md-6 .offset-md-3</div>
        </div>`,
      { className: 'bd-example-row' },
    ),
};

export const OffsetResponsive: Story = {
  name: 'Offset responsive',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: `<div class="row">
  <div class="col-sm-5 col-md-6">.col-sm-5 .col-md-6</div>
  <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0">.col-sm-5 .offset-sm-2 .col-md-6 .offset-md-0</div>
</div>

<div class="row">
  <div class="col-sm-6 col-md-5 col-lg-6">.col-sm-6 .col-md-5 .col-lg-6</div>
  <div class="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">.col-sm-6 .col-md-5 .offset-md-2 .col-lg-6 .offset-lg-0</div>
</div>`,
      },
    },
  },
  render: () =>
    wrapExample(
      html`<div class="row">
          <div class="col-sm-5 col-md-6">.col-sm-5 .col-md-6</div>
          <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0">.col-sm-5 .offset-sm-2 .col-md-6 .offset-md-0</div>
        </div>

        <div class="row">
          <div class="col-sm-6 col-md-5 col-lg-6">.col-sm-6 .col-md-5 .col-lg-6</div>
          <div class="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">
            .col-sm-6 .col-md-5 .offset-md-2 .col-lg-6 .offset-lg-0
          </div>
        </div>`,
      { className: 'bd-example-row' },
    ),
};

export const MarginiForzatiTraColonneAdiacenti: Story = {
  name: 'Margini forzati tra colonne adiacenti',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: `<div class="row">
  <div class="col-md-4">.col-md-4</div>
  <div class="col-md-4 ms-auto">.col-md-4 .ms-auto</div>
</div>
<div class="row">
  <div class="col-md-3 ms-md-auto">.col-md-3 .ms-md-auto</div>
  <div class="col-md-3 ms-md-auto">.col-md-3 .ms-md-auto</div>
</div>
<div class="row">
  <div class="col-auto me-auto">.col-auto .me-auto</div>
  <div class="col-auto">.col-auto</div>
</div>`,
      },
    },
  },
  render: () =>
    wrapExample(
      html`<div class="row">
          <div class="col-md-4">.col-md-4</div>
          <div class="col-md-4 ms-auto">.col-md-4 .ms-auto</div>
        </div>
        <div class="row">
          <div class="col-md-3 ms-md-auto">.col-md-3 .ms-md-auto</div>
          <div class="col-md-3 ms-md-auto">.col-md-3 .ms-md-auto</div>
        </div>
        <div class="row">
          <div class="col-auto me-auto">.col-auto .me-auto</div>
          <div class="col-auto">.col-auto</div>
        </div>`,
      { className: 'bd-example-row' },
    ),
};

export const Annidamento: Story = {
  name: 'Annidamento',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: `<div class="row">
  <div class="col-sm-9">
    Livello 1: .col-sm-9
    <div class="row">
      <div class="col-8 col-sm-6">Livello 2: .col-8 .col-sm-6</div>
      <div class="col-4 col-sm-6">Livello 2: .col-4 .col-sm-6</div>
    </div>
  </div>
</div>`,
      },
    },
  },
  render: () =>
    wrapExample(
      html`<div class="row">
        <div class="col-sm-9">
          Livello 1: .col-sm-9
          <div class="row">
            <div class="col-8 col-sm-6">Livello 2: .col-8 .col-sm-6</div>
            <div class="col-4 col-sm-6">Livello 2: .col-4 .col-sm-6</div>
          </div>
        </div>
      </div>`,
      { className: 'bd-example-row' },
    ),
};

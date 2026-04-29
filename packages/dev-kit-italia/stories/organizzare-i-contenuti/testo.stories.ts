import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { wrapExample } from './organizzare-i-contenuti.helpers';

const meta = {
  title: 'Organizzare i contenuti/Testo',
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const AllineatoASinistra: Story = {
  name: 'Allineato a sinistra',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: `<p class="text-start">Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium purus sit amet fermentum.</p>`,
      },
    },
  },
  render: () => html`<p class="text-start">Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium purus sit amet fermentum.</p>`,
};

export const VariantiDiAllineamento: Story = {
  name: 'Varianti di allineamento',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: `<p class="text-start">Testo allineato a sinistra per tutte le dimensioni del viewport.</p>
<p class="text-center">Testo allineato al centro per tutte le dimensioni del viewport.</p>
<p class="text-end">Testo allineato a destra per tutte le dimensioni del viewport.</p>

<p class="text-sm-left">Testo allineato a sinistra per dimensioni SM (small) o maggiori.</p>
<p class="text-md-left">Testo allineato a sinistra per dimensioni MD (medium) o maggiori.</p>
<p class="text-lg-left">Testo allineato a sinistra per dimensioni LG (large) o maggiori.</p>
<p class="text-xl-left">Testo allineato a sinistra per dimensioni XL (extra-large) o maggiori.</p>`,
      },
    },
  },
  render: () => html`<p class="text-start">Testo allineato a sinistra per tutte le dimensioni del viewport.</p>
<p class="text-center">Testo allineato al centro per tutte le dimensioni del viewport.</p>
<p class="text-end">Testo allineato a destra per tutte le dimensioni del viewport.</p>

<p class="text-sm-left">Testo allineato a sinistra per dimensioni SM (small) o maggiori.</p>
<p class="text-md-left">Testo allineato a sinistra per dimensioni MD (medium) o maggiori.</p>
<p class="text-lg-left">Testo allineato a sinistra per dimensioni LG (large) o maggiori.</p>
<p class="text-xl-left">Testo allineato a sinistra per dimensioni XL (extra-large) o maggiori.</p>`,
};

export const PerEstesoEOverflow: Story = {
  name: 'Per esteso e overflow',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: `<div class="text-nowrap bd-highlight" style="width: 10rem;">
  Questo testo oltrepassa il contenitore.
</div>`,
      },
    },
  },
  render: () =>
    wrapExample(
      html`<div class="text-nowrap bd-highlight" style="width: 10rem;overflow:hidden;">
  Questo testo oltrepassa il contenitore.
</div>`,
    ),
};

export const ConTroncamentoInPuntiDiSospensione: Story = {
  name: 'Con troncamento in punti di sospensione',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: `<!-- Block level -->
<div class="row">
  <div class="col-2 text-truncate">
    Praeterea iter est quasdam res quas ex communi.
  </div>
</div>

<!-- Inline level -->
<span class="d-inline-block text-truncate" style="max-width: 150px;">
  Praeterea iter est quasdam res quas ex communi.
</span>`,
      },
    },
  },
  render: () =>
    wrapExample(
      html`<!-- Block level -->
<div class="row">
  <div class="col-2 text-truncate">
    Praeterea iter est quasdam res quas ex communi.
  </div>
</div>

<!-- Inline level -->
<span class="d-inline-block text-truncate" style="max-width: 150px;">
  Praeterea iter est quasdam res quas ex communi.
</span>`,
    ),
};

export const Trasformazioni: Story = {
  name: 'Trasformazioni',
  tags: ['!dev'],
  parameters: {
    docs: {
      source: {
        code: `<p class="text-lowercase">Testo tutto minuscolo.</p>
<p class="text-uppercase">Testo tutto maiuscolo.</p>
<p class="text-capitalize">Testo con prime lettere MaiuscOLE.</p>`,
      },
    },
  },
  render: () =>
    wrapExample(
      html`<p class="text-lowercase">Testo tutto minuscolo.</p>
<p class="text-uppercase">Testo tutto maiuscolo.</p>
<p class="text-capitalize">Testo con prime lettere MaiuscOLE.</p>`,
    ),
};

export const Stile: Story = {
  name: 'Stile',
  tags: ['!dev'],
  parameters: {
    docs: {
      source: {
        code: `<p class="fw-bold">Testo in grassetto.</p>
<p class="fw-semibold">Testo in semi-grassetto.</p>
<p class="fw-normal">Testo normale.</p>
<p class="fw-light">Testo sottile.</p>
<p class="fst-italic">Testo in corsivo.</p>`,
      },
    },
  },
  render: () =>
    wrapExample(
      html`<p class="fw-bold">Testo in grassetto.</p>
<p class="fw-semibold">Testo in semi-grassetto.</p>
<p class="fw-normal">Testo normale.</p>
<p class="fw-light">Testo sottile.</p>
<p class="fst-italic">Testo in corsivo.</p>`,
    ),
};

export const Monospaziato: Story = {
  name: 'Monospaziato',
  tags: ['!dev'],
  parameters: {
    docs: {
      source: {
        code: `<p class="font-monospace">Testo monospace</p>`,
      },
    },
  },
  render: () => wrapExample(html`<p class="font-monospace">Testo monospace</p>`),
};

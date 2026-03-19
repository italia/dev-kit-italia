import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

interface ProgressStoryProps {
  type: 'bar' | 'donut' | 'spinner';
  value: number;
  'it-aria-label': string;
  showValue: boolean;
  label: string;
  indeterminate: boolean;
  color: string;

  active: boolean;
  double: boolean;
  size: 'sm' | 'md' | 'lg' | 'xl';
}

const renderComponent = (params: ProgressStoryProps) => {
  if (params.type === 'donut') {
    return html`
      <it-progress
        type="donut"
        value="${params.value}"
        it-aria-label="${ifDefined(params['it-aria-label'] || undefined)}"
        color="${ifDefined(params.color || undefined)}"
      ></it-progress>
    `;
  }

  if (params.type === 'spinner') {
    return html`
      <it-progress
        type="spinner"
        ?active="${params.active}"
        ?double="${params.double}"
        size="${params.size}"
        it-aria-label="${ifDefined(params['it-aria-label'] || undefined)}"
      >
        <span class="visually-hidden">Caricamento...</span>
      </it-progress>
    `;
  }

  return html`
    <it-progress
      type="bar"
      value="${params.value}"
      it-aria-label="${ifDefined(params['it-aria-label'] || undefined)}"
      ?show-value="${params.showValue}"
      label="${ifDefined(params.label || undefined)}"
      ?indeterminate="${params.indeterminate}"
      color="${ifDefined(params.color !== 'default' ? params.color : undefined)}"
    ></it-progress>
  `;
};

const meta = {
  title: 'Componenti/Progress',
  tags: ['a11y-ok', 'web-component', 'new'],
  component: 'it-progress',
  args: {
    type: 'bar',
    value: 50,
    'it-aria-label': 'Caricamento',
    showValue: false,
    label: '',
    indeterminate: false,
    color: 'default',
    active: true,
    double: false,
    size: 'md',
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['bar', 'donut', 'spinner'],
      description: 'Tipologia di progress indicator',
      table: { defaultValue: { summary: 'bar' } },
    },
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Percentuale di avanzamento (da 0 a 100)',
      table: { defaultValue: { summary: '50' } },
    },
    showValue: {
      name: 'show-value',
      control: 'boolean',
      description: '<strong>Progress bar:</strong>: mostra la percentuale di avanzamento',
      table: { defaultValue: { summary: 'false' } },
    },
    'it-aria-label': {
      control: 'text',
      description: 'Etichetta accessibile per gli screen reader (aria-label)',
      table: { defaultValue: { summary: 'Caricamento' } },
    },
    label: {
      name: 'label',
      control: 'text',
      description:
        "<strong>Progress bar:</strong> se si vuole mostrare un testo personalizzato per l'etichetta, invece della percentuale di avanzamento",
    },
    indeterminate: {
      control: 'boolean',
      description: '<strong>Progress bar:</strong> stato indeterminato (animazione infinita)',
      table: { defaultValue: { summary: 'false' } },
    },
    color: {
      control: 'text',
      description:
        '<strong>Progress bar:</strong> default|success|info|warning|danger. <br/><br/><strong>Donut:</strong>  colore CSS della barra (default: `var(--bsi-secondary)`)',
      table: { defaultValue: { summary: 'default' } },
    },

    active: {
      control: 'boolean',
      description: "<strong>Spinner:</strong> attiva/disattiva l'animazione",
      table: { defaultValue: { summary: 'true' } },
    },
    double: {
      control: 'boolean',
      description: '<strong>Spinner:</strong> variante doppia',
      table: { defaultValue: { summary: 'false' } },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      description: '<strong>Spinner:</strong> dimensione',
      table: { defaultValue: { summary: 'md' } },
    },
  },
  parameters: {
    pageLayout: 'w-100',
  },
} satisfies Meta<ProgressStoryProps>;

export default meta;
type Story = StoryObj<ProgressStoryProps>;

export const EsempioInterattivo: Story = {
  name: 'Esempio interattivo',
  tags: ['!dev'],
  args: {
    type: 'bar',
    value: 50,
    color: 'default',
    showValue: false,
    label: '',
    indeterminate: false,
  },
  parameters: {
    docs: { canvas: { sourceState: 'shown' } },
  },
  render: renderComponent,
};

export const Base: Story = {
  args: { type: 'bar', value: 50 },
  render: renderComponent,
};

export const ConEtichetta: Story = {
  name: 'Con etichetta',
  args: { type: 'bar', value: 35, showValue: true, label: '35%' },
  render: (params) => html`
    <it-progress type="bar" value="${params.value}" ?show-value="${params.showValue}" it-aria-label="Progresso">
      ${params.label}
    </it-progress>
  `,
};

export const Indeterminato: Story = {
  args: { type: 'bar', indeterminate: true },
  render: (params) => html`
    <it-progress type="bar" ?indeterminate="${params.indeterminate}" it-aria-label="In elaborazione..."></it-progress>
  `,
};

export const Colori: Story = {
  name: 'Varianti di colore',
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 12px;">
      <it-progress type="bar" value="25" color="success" it-aria-label="Caricamento - successo"></it-progress>
      <it-progress type="bar" value="33" color="info" it-aria-label="Caricamento - info"></it-progress>
      <it-progress type="bar" value="50" color="warning" it-aria-label="Caricamento - warning"></it-progress>
      <it-progress type="bar" value="66" color="danger" it-aria-label="Caricamento - danger"></it-progress>
    </div>
  `,
};

export const Donut: Story = {
  args: {
    type: 'donut',
    value: 75,
    'it-aria-label': 'Caricamento',
  },
  render: (params: ProgressStoryProps) => html`
    <div class="row">
      <div class="col-6">
        Stato iniziale (0%):<br /><br />
        ${renderComponent({ ...params, value: 0 })}
      </div>
      <div class="col-6">
        Stato avanzamento (75%):<br /><br />
        ${renderComponent({ ...params })}
      </div>
    </div>
  `,
};

const renderSpinner = (params: ProgressStoryProps, name: string) => html`
  <div class="row">
    <div class="col-3">
      <p class="my-3">${name} standard</p>
      ${renderComponent({ ...params, type: 'spinner', active: false })}
    </div>
    <div class="col-3">
      <p class="my-3">${name} attivo</p>
      ${renderComponent({ ...params, type: 'spinner', active: true })}
    </div>
    <div class="col-3">
      <p class="my-3">${name} small</p>
      ${renderComponent({ ...params, type: 'spinner', active: false, size: 'sm' })}
    </div>
    <div class="col-3">
      <p class="my-3">${name} small attivo</p>
      ${renderComponent({ ...params, type: 'spinner', active: true, size: 'sm' })}
    </div>
  </div>
  <div class="row">
    <div class="col-3">
      <p class="my-3">${name} large</p>
      ${renderComponent({ ...params, type: 'spinner', active: false, size: 'lg' })}
    </div>
    <div class="col-3">
      <p class="my-3">${name} large attivo</p>
      ${renderComponent({ ...params, type: 'spinner', active: true, size: 'lg' })}
    </div>
    <div class="col-3">
      <p class="my-3">${name} extralarge</p>
      ${renderComponent({ ...params, type: 'spinner', active: false, size: 'xl' })}
    </div>
    <div class="col-3">
      <p class="my-3">${name} extralarge attivo</p>
      ${renderComponent({ ...params, type: 'spinner', active: true, size: 'xl' })}
    </div>
  </div>
`;

export const Spinner: Story = {
  args: {
    type: 'spinner',
    active: true,
    double: false,
    size: 'md',
  },
  render: (params) => renderSpinner(params, 'Spinner'),
};

export const SpinnerDoppio: Story = {
  tags: ['!dev'],
  name: 'Spinner doppio',
  args: { type: 'spinner', active: true, double: true, size: 'md' },
  render: (params) => renderSpinner(params, 'Spinner doppio'),
};

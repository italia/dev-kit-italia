import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

interface ProgressStoryProps {
  type: 'bar' | 'donut' | 'spinner';
  value: number;
  label: string;
  showLabel: boolean;
  labelText: string;
  indeterminate: boolean;
  color: string;
  trailColor: string;
  strokeWidth: number;
  trailWidth: number;
  duration: number;
  easing: string;
  animate: boolean;
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
        label="${ifDefined(params.label || undefined)}"
        color="${ifDefined(params.color || undefined)}"
        trail-color="${ifDefined(params.trailColor || undefined)}"
        stroke-width="${params.strokeWidth}"
        trail-width="${params.trailWidth}"
        duration="${params.duration}"
        easing="${ifDefined(params.easing || undefined)}"
        ?animate="${params.animate}"
      ></it-progress>
    `;
  }

  if (params.type === 'spinner') {
    return html`
      <it-progress type="spinner" ?active="${params.active}" ?double="${params.double}" size="${params.size}">
        <span class="visually-hidden">Caricamento...</span>
      </it-progress>
    `;
  }

  return html`
    <it-progress
      type="bar"
      value="${params.value}"
      label="${ifDefined(params.label || undefined)}"
      ?show-label="${params.showLabel}"
      label-text="${ifDefined(params.labelText || undefined)}"
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
    label: 'Caricamento',
    showLabel: false,
    labelText: '',
    indeterminate: false,
    color: 'default',
    trailColor: '#D4E9FF',
    strokeWidth: 24,
    trailWidth: 12,
    duration: 1400,
    easing: 'easeInOut',
    animate: true,
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
      description: 'Progress bar: percentuale (0–100). Donut: valore in scala 0–1',
      table: { defaultValue: { summary: '50' } },
    },
    label: {
      control: 'text',
      description: 'Etichetta accessibile per gli screen reader (aria-label)',
      table: { defaultValue: { summary: 'Caricamento' } },
    },
    showLabel: {
      name: 'show-label',
      control: 'boolean',
      description: 'Progress bar: mostra etichetta testuale con la percentuale',
      table: { defaultValue: { summary: 'false' } },
    },
    labelText: {
      name: 'label-text',
      control: 'text',
      description: "Progress bar: testo personalizzato per l'etichetta",
    },
    indeterminate: {
      control: 'boolean',
      description: 'Progress bar: stato indeterminato (animazione infinita)',
      table: { defaultValue: { summary: 'false' } },
    },
    color: {
      control: 'text',
      description: 'Bar: default|success|info|warning|danger. Donut: colore CSS della barra',
      table: { defaultValue: { summary: 'default' } },
    },
    trailColor: {
      name: 'trail-color',
      control: 'color',
      description: 'Donut: colore della guida della barra',
      table: { defaultValue: { summary: '#D4E9FF' } },
    },
    strokeWidth: {
      name: 'stroke-width',
      control: { type: 'range', min: 1, max: 40, step: 1 },
      description: 'Donut: spessore della barra',
      table: { defaultValue: { summary: '24' } },
    },
    trailWidth: {
      name: 'trail-width',
      control: { type: 'range', min: 1, max: 40, step: 1 },
      description: 'Donut: spessore della guida',
      table: { defaultValue: { summary: '12' } },
    },
    duration: {
      control: { type: 'number', min: 0, step: 100 },
      description: "Donut: durata dell'animazione in ms",
      table: { defaultValue: { summary: '1400' } },
    },
    easing: {
      control: 'text',
      description: 'Donut: funzione di easing',
      table: { defaultValue: { summary: 'easeInOut' } },
    },
    animate: {
      control: 'boolean',
      description: "Donut: attiva/disattiva l'animazione",
      table: { defaultValue: { summary: 'true' } },
    },
    active: {
      control: 'boolean',
      description: "Spinner: attiva/disattiva l'animazione",
      table: { defaultValue: { summary: 'true' } },
    },
    double: {
      control: 'boolean',
      description: 'Spinner: variante doppia',
      table: { defaultValue: { summary: 'false' } },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Spinner: dimensione',
      table: { defaultValue: { summary: 'md' } },
    },
  },
} satisfies Meta<ProgressStoryProps>;

export default meta;
type Story = StoryObj<ProgressStoryProps>;

export const EsempioInterattivoBar: Story = {
  name: 'Esempio interattivo (bar)',
  tags: ['!dev'],
  args: {
    type: 'bar',
    value: 50,
    color: 'default',
    showLabel: false,
    labelText: '',
    indeterminate: false,
  },
  parameters: {
    docs: { canvas: { sourceState: 'shown' } },
    controls: {
      include: ['value', 'label', 'showLabel', 'labelText', 'indeterminate', 'color'],
    },
  },
  render: renderComponent,
};

export const Base: Story = {
  args: { type: 'bar', value: 50 },
  render: renderComponent,
};

export const ConEtichetta: Story = {
  name: 'Con etichetta',
  args: { type: 'bar', value: 35, showLabel: true },
  render: (params) => html`
    <it-progress type="bar" value="${params.value}" ?show-label="${params.showLabel}" label="Progresso"></it-progress>
  `,
};

export const Indeterminato: Story = {
  args: { type: 'bar', indeterminate: true },
  render: (params) => html`
    <it-progress type="bar" ?indeterminate="${params.indeterminate}" label="In elaborazione..."></it-progress>
  `,
};

export const Colori: Story = {
  name: 'Varianti di colore',
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 12px;">
      <it-progress type="bar" value="25" color="success" label="Caricamento - successo"></it-progress>
      <it-progress type="bar" value="33" color="info" label="Caricamento - info"></it-progress>
      <it-progress type="bar" value="50" color="warning" label="Caricamento - warning"></it-progress>
      <it-progress type="bar" value="66" color="danger" label="Caricamento - danger"></it-progress>
    </div>
  `,
};

export const EsempioInterattivoDonut: Story = {
  name: 'Esempio interattivo (donut)',
  tags: ['!dev'],
  args: {
    type: 'donut',
    value: 0.75,
    label: 'Caricamento',
    color: '#0073E6',
    trailColor: '#D4E9FF',
    strokeWidth: 24,
    trailWidth: 12,
    duration: 1400,
    easing: 'easeInOut',
    animate: true,
  },
  parameters: {
    docs: { canvas: { sourceState: 'shown' } },
    controls: {
      include: ['value', 'label', 'color', 'trailColor', 'strokeWidth', 'trailWidth', 'duration', 'easing', 'animate'],
    },
  },
  render: renderComponent,
};

export const StatoIniziale: Story = {
  args: { type: 'donut', value: 0 },
  render: renderComponent,
};

export const Attivo75: Story = {
  name: 'Attivo (75%)',
  args: { type: 'donut', value: 0.75 },
  render: renderComponent,
};

export const EsempioInterattivoSpinner: Story = {
  name: 'Esempio interattivo (spinner)',
  tags: ['!dev'],
  args: {
    type: 'spinner',
    active: true,
    double: false,
    size: 'md',
  },
  parameters: {
    docs: { canvas: { sourceState: 'shown' } },
    controls: {
      include: ['active', 'double', 'size'],
    },
  },
  render: renderComponent,
};

export const Standard: Story = {
  args: { type: 'spinner', active: true, double: false, size: 'md' },
  render: renderComponent,
};

export const Small: Story = {
  args: { type: 'spinner', active: true, size: 'sm' },
  render: renderComponent,
};

export const Large: Story = {
  args: { type: 'spinner', active: true, size: 'lg' },
  render: renderComponent,
};

export const ExtraLarge: Story = {
  args: { type: 'spinner', active: true, size: 'xl' },
  render: renderComponent,
};

export const Doppio: Story = {
  name: 'Spinner doppio',
  args: { type: 'spinner', active: true, double: true, size: 'md' },
  render: renderComponent,
};

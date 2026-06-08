import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { STEPPER_HEADER_VARIANTS, STEPPER_MOBILE_PROGRESS } from '../src/types.js';

interface StepperArgs {
  current: number;
  dark: boolean;
  'header-variant'?: string;
  'mobile-progress'?: string;
  'mobile-progress-on-desktop'?: boolean;
  'prev-label'?: string;
  'next-label'?: string;
  'confirm-label'?: string;
  'show-confirm'?: boolean;
  'save-label'?: string;
  'save-title'?: string;
  'save-description'?: string;
}

type Story = StoryObj<StepperArgs>;

interface StepperDemoParameters {
  dark?: boolean;
  stack?: boolean;
}

const headerSteps = [
  { label: 'Primo contenuto', icon: 'it-calendar' },
  { label: 'Secondo contenuto', icon: 'it-lock' },
  { label: 'Terzo contenuto', icon: 'it-settings' },
];

const demoStyles = html`
  <style>
    .stepper-variant-stack {
      display: flex;
      flex-direction: column;
      gap: var(--bsi-spacing-xl);
    }
  </style>
`;

const demoDecorators: NonNullable<Meta<StepperArgs>['decorators']> = [
  (story, context) => {
    const stepperDemo = (context.parameters.stepperDemo ?? {}) as StepperDemoParameters;
    const isDark = stepperDemo.dark ?? context.args.dark;
    const wrapperClasses = [isDark ? 'bg-dark p-4' : '', stepperDemo.stack ? 'stepper-variant-stack' : '']
      .filter(Boolean)
      .join(' ');

    return html`
      ${demoStyles}
      <div class=${wrapperClasses}>${story()}</div>
    `;
  },
];

const renderStepper = (args: StepperArgs, steps = headerSteps) => html`
  <it-stepper
    current=${args.current}
    ?dark=${args.dark}
    header-variant=${ifDefined(args['header-variant'] || undefined)}
    mobile-progress=${ifDefined(args['mobile-progress'] || undefined)}
    ?mobile-progress-on-desktop=${args['mobile-progress-on-desktop']}
    prev-label=${ifDefined(args['prev-label'] || undefined)}
    next-label=${ifDefined(args['next-label'] || undefined)}
    confirm-label=${ifDefined(args['confirm-label'] || undefined)}
    ?show-confirm=${args['show-confirm']}
    save-label=${ifDefined(args['save-label'] || undefined)}
    save-title=${ifDefined(args['save-title'] || undefined)}
    save-description=${ifDefined(args['save-description'] || undefined)}
  >
    ${steps.map(
      (step, i) => html`
        <it-stepper-step icon=${step.icon}>
          <span slot="label">${step.label}</span>
          <div class="p-5 text-center border ${args.dark ? 'text-white' : 'bg-light'}">
            <p class="m-0">Contenuto dello step ${i + 1}</p>
          </div>
        </it-stepper-step>
      `,
    )}
  </it-stepper>
`;

const meta: Meta<StepperArgs> = {
  title: 'Componenti/Stepper',
  tags: ['alpha', 'web-component'],
  component: 'it-stepper' as unknown as keyof HTMLElementTagNameMap,
  args: {
    current: 1,
    dark: false,
    'header-variant': '',
    'mobile-progress': '',
    'mobile-progress-on-desktop': false,
    'prev-label': '',
    'next-label': '',
    'confirm-label': '',
    'show-confirm': false,
    'save-label': '',
    'save-title': '',
    'save-description': '',
  },
  argTypes: {
    current: {
      control: { type: 'number', min: 0, max: 5, step: 1 },
      description: 'Indice (0-based) dello step attivo.',
      name: 'current',
      table: { defaultValue: { summary: '0' } },
    },
    dark: {
      control: 'boolean',
      description: 'Visualizza lo stepper su sfondo scuro.',
      name: 'dark',
      table: { defaultValue: { summary: 'false' } },
    },
    'header-variant': {
      control: 'select',
      options: STEPPER_HEADER_VARIANTS,
      description: "Variante dell'intestazione degli step: solo testo, icone o numeri.",
      name: 'header-variant',
      table: { defaultValue: { summary: 'text' } },
    },
    'mobile-progress': {
      control: 'select',
      options: STEPPER_MOBILE_PROGRESS,
      description: 'Indicatore di progresso mostrato su mobile tra i pulsanti di navigazione.',
      name: 'mobile-progress',
      table: { defaultValue: { summary: '' } },
    },
    'mobile-progress-on-desktop': {
      control: 'boolean',
      description: 'Mostra progress bar o pallini anche su viewport desktop.',
      name: 'mobile-progress-on-desktop',
      table: { defaultValue: { summary: 'false' } },
    },
    'prev-label': {
      control: 'text',
      description: 'Etichetta del pulsante "Indietro".',
      name: 'prev-label',
      table: { defaultValue: { summary: 'Indietro' } },
    },
    'next-label': {
      control: 'text',
      description: 'Etichetta del pulsante "Avanti".',
      name: 'next-label',
      table: { defaultValue: { summary: 'Avanti' } },
    },
    'confirm-label': {
      control: 'text',
      description: 'Etichetta del pulsante "Conferma" (visibile quando `show-confirm` è attivo).',
      name: 'confirm-label',
      table: { defaultValue: { summary: 'Conferma' } },
    },
    'show-confirm': {
      control: 'boolean',
      description: 'Mostra il pulsante "Conferma" al posto del pulsante "Avanti".',
      name: 'show-confirm',
      table: { defaultValue: { summary: 'false' } },
    },
    'save-label': {
      control: 'text',
      description: 'Etichetta del pulsante "Salva". Se vuoto, l\'area di salvataggio non viene mostrata.',
      name: 'save-label',
      table: { defaultValue: { summary: '' } },
    },
    'save-title': {
      control: 'text',
      description: 'Titolo della sezione di salvataggio. Mostrato solamente se viene aggiunto anche `save-label`.',
      name: 'save-title',
      table: { defaultValue: { summary: 'Vuoi salvare il progresso?' } },
    },
    'save-description': {
      control: 'text',
      description:
        'Testo descrittivo della sezione di salvataggio. Mostrato solamente se viene aggiunto anche `save-label`.',
      name: 'save-description',
      table: { defaultValue: { summary: 'Potrai riprendere il flusso da questo punto in poi.' } },
    },
  },
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        excludeDecorators: true,
      },
    },
  },
  decorators: demoDecorators,
};

export default meta;

export const EsempioInterattivo: Story = {
  name: 'Esempio interattivo',
  tags: ['!dev'],
  parameters: { docs: { canvas: { sourceState: 'shown' } } },
  render: (args) => renderStepper(args),
};

export const SoloTesto: Story = {
  name: 'Solo testo',
  args: { 'header-variant': 'text' },
  render: (args) => renderStepper(args),
};

export const TestoEIcone: Story = {
  name: 'Testo e icone',
  args: { 'header-variant': 'icons' },
  render: (args) => renderStepper(args),
};

export const TestoENumeri: Story = {
  name: 'Testo e numeri',
  args: { 'header-variant': 'numbers' },
  render: (args) => renderStepper(args),
};

export const Navigazione: Story = {
  name: 'Navigazione degli step',
  args: { 'next-label': 'Successivo', 'prev-label': 'Precedente' },
  render: (args) => renderStepper(args),
};

export const ProgressBar: Story = {
  args: { 'mobile-progress': 'bar', 'mobile-progress-on-desktop': true },
  render: (args) => renderStepper(args),
};

export const Pallini: Story = {
  args: { 'mobile-progress': 'dots', 'mobile-progress-on-desktop': true },
  render: (args) => renderStepper(args),
};

export const Salva: Story = {
  args: {
    'save-label': 'Salva',
    'save-title': 'Vuoi salvare il progresso?',
    'save-description': 'Potrai riprendere il flusso da questo punto in poi.',
  },
  render: (args) => renderStepper(args),
};

export const Conferma: Story = {
  args: { 'show-confirm': true, 'confirm-label': 'Conferma' },
  render: (args) => renderStepper(args),
};

export const SfondoScuro: Story = {
  name: 'Sfondo scuro',
  args: { dark: true },
  render: (args) => renderStepper(args),
};

export const SfondoScuroVarianti: Story = {
  name: 'Sfondo scuro - varianti intestazione',
  parameters: { backgrounds: { default: 'dark' }, stepperDemo: { dark: true, stack: true } },
  render: (args) => html`
    ${(['text', 'icons', 'numbers'] as const).map((variant) =>
      renderStepper({ ...args, dark: true, 'header-variant': variant }, headerSteps),
    )}
  `,
};

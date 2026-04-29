import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { STEPPER_HEADER_VARIANTS, STEPPER_MOBILE_PROGRESS } from '../src/types.js';

interface StepperArgs {
  current: number;
  dark: boolean;
  'header-variant': string;
  'mobile-progress': string;
  'total-steps': number;
  'hide-header': boolean;
  'hide-content': boolean;
  'hide-nav': boolean;
  'mobile-progress-on-desktop': boolean;
  'prev-label': string;
  'next-label': string;
  'confirm-label': string;
  'show-confirm': boolean;
  'save-label': string;
  'save-title': string;
  'save-description': string;
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

const defaultSteps = [
  ...headerSteps,
  { label: 'Quarto contenuto', icon: 'it-mail' },
  { label: 'Quinto contenuto', icon: 'it-file' },
  { label: 'Sesto contenuto', icon: 'it-check' },
];

const demoStyles = html`
  <style>
    .stepper-reference-demo {
      width: 100%;
    }

    .stepper-reference-demo it-stepper::part(content) {
      display: flex;
      min-height: 9rem;
      align-items: center;
      justify-content: center;
      border: 1px dashed var(--bsi-color-border-subtle, var(--bsi-border-color));
      background: var(--bsi-color-background-secondary-lighter, var(--bsi-body-bg));
      color: var(--bsi-body-color);
      text-align: center;
    }

    .stepper-reference-demo it-stepper::part(content) p {
      margin: 0;
      font-size: var(--bsi-font-size-sm);
    }

    .stepper-reference-demo.is-dark {
      padding: var(--bsi-spacing-l);
      background: var(--bsi-color-background-inverse);
    }

    .stepper-reference-demo.is-dark it-stepper::part(content) {
      border-color: var(--bsi-color-border-inverse, var(--bsi-color-border-subtle));
      background: transparent;
      color: var(--bsi-color-text-inverse);
    }

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
    const wrapperClasses = [
      'stepper-reference-demo',
      isDark ? 'is-dark' : '',
      stepperDemo.stack ? 'stepper-variant-stack' : '',
    ]
      .filter(Boolean)
      .join(' ');

    return html`
      ${demoStyles}
      <div class=${wrapperClasses}>${story()}</div>
    `;
  },
];

const renderStepper = (args: StepperArgs, steps = defaultSteps) => html`
  <it-stepper
    current=${args.current}
    ?dark=${args.dark}
    header-variant=${args['header-variant']}
    mobile-progress=${args['mobile-progress']}
    total-steps=${ifDefined(args['total-steps'] > 0 ? args['total-steps'] : undefined)}
    ?hide-header=${args['hide-header']}
    ?hide-content=${args['hide-content']}
    ?hide-nav=${args['hide-nav']}
    ?mobile-progress-on-desktop=${args['mobile-progress-on-desktop']}
    prev-label=${args['prev-label']}
    next-label=${args['next-label']}
    confirm-label=${args['confirm-label']}
    ?show-confirm=${args['show-confirm']}
    save-label=${ifDefined(args['save-label'] || undefined)}
    save-title=${args['save-title']}
    save-description=${args['save-description']}
  >
    ${steps.map(
      (step, i) => html`
        <it-stepper-step label=${step.label} icon=${step.icon}>
          <p>Contenuto dello step ${i + 1}</p>
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
    'header-variant': 'text',
    'mobile-progress': '',
    'total-steps': 6,
    'hide-header': false,
    'hide-content': false,
    'hide-nav': false,
    'mobile-progress-on-desktop': false,
    'prev-label': 'Indietro',
    'next-label': 'Avanti',
    'confirm-label': 'Conferma',
    'show-confirm': false,
    'save-label': '',
    'save-title': 'Vuoi salvare il progresso?',
    'save-description': 'Potrai riprendere il flusso da questo punto in poi.',
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
    'total-steps': {
      control: { type: 'number', min: 0, step: 1 },
      description: 'Numero totale di passi usato per indice mobile, progress bar e pallini.',
      name: 'total-steps',
      table: { defaultValue: { summary: 'numero di it-stepper-step' } },
    },
    'hide-header': {
      control: 'boolean',
      description: "Nasconde l'intestazione degli step.",
      name: 'hide-header',
      table: { defaultValue: { summary: 'false' } },
    },
    'hide-content': {
      control: 'boolean',
      description: "Nasconde l'area contenuto mantenendo gli step disponibili per intestazione e stato.",
      name: 'hide-content',
      table: { defaultValue: { summary: 'false' } },
    },
    'hide-nav': {
      control: 'boolean',
      description: 'Nasconde la navigazione dello stepper.',
      name: 'hide-nav',
      table: { defaultValue: { summary: 'false' } },
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
      description: 'Titolo della sezione di salvataggio.',
      name: 'save-title',
      table: { defaultValue: { summary: 'Vuoi salvare il progresso?' } },
    },
    'save-description': {
      control: 'text',
      description: 'Testo descrittivo della sezione di salvataggio.',
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
  parameters: { docs: { canvas: { sourceState: 'shown' } } },
  render: (args) => renderStepper(args),
};

export const SoloTesto: Story = {
  name: 'Solo testo',
  args: { 'header-variant': 'text', 'total-steps': 3, 'hide-content': true, 'hide-nav': true },
  render: (args) => renderStepper(args, headerSteps),
};

export const TestoEIcone: Story = {
  name: 'Testo e icone',
  args: { 'header-variant': 'icons', 'total-steps': 3, 'hide-content': true, 'hide-nav': true },
  render: (args) => renderStepper(args, headerSteps),
};

export const TestoENumeri: Story = {
  name: 'Testo e numeri',
  args: { 'header-variant': 'numbers', 'total-steps': 3, 'hide-content': true, 'hide-nav': true },
  render: (args) => renderStepper(args, headerSteps),
};

export const ProgressBar: Story = {
  args: { 'hide-header': true, 'mobile-progress': 'bar', 'mobile-progress-on-desktop': true },
  render: (args) => renderStepper(args),
};

export const Pallini: Story = {
  args: { 'hide-header': true, 'mobile-progress': 'dots', 'mobile-progress-on-desktop': true },
  render: (args) => renderStepper(args),
};

export const Salva: Story = {
  args: { 'hide-header': true, 'save-label': 'Salva' },
  render: (args) => renderStepper(args),
};

export const Conferma: Story = {
  args: { 'hide-header': true, 'show-confirm': true },
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
      renderStepper(
        { ...args, dark: true, 'header-variant': variant, 'total-steps': 3, 'hide-content': true, 'hide-nav': true },
        headerSteps,
      ),
    )}
  `,
};

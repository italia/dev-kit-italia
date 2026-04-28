import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { STEPPER_HEADER_VARIANTS, STEPPER_MOBILE_PROGRESS } from '../src/types.js';

interface StepperArgs {
  current: number;
  dark: boolean;
  'header-variant': string;
  'mobile-progress': string;
  'prev-label': string;
  'next-label': string;
  'confirm-label': string;
  'show-confirm': boolean;
  'save-label': string;
  'save-title': string;
  'save-description': string;
}

type Story = StoryObj<StepperArgs>;

const defaultSteps = [
  { label: 'Primo contenuto', icon: 'it-calendar' },
  { label: 'Secondo contenuto', icon: 'it-lock' },
  { label: 'Terzo contenuto', icon: 'it-settings' },
];

const renderStepper = (args: StepperArgs, steps = defaultSteps) => html`
  <it-stepper
    current=${args.current}
    ?dark=${args.dark}
    header-variant=${args['header-variant']}
    mobile-progress=${args['mobile-progress']}
    prev-label=${args['prev-label']}
    next-label=${args['next-label']}
    confirm-label=${args['confirm-label']}
    ?show-confirm=${args['show-confirm']}
    save-label=${args['save-label']}
    save-title=${args['save-title']}
    save-description=${args['save-description']}
  >
    ${steps.map(
      (step, i) => html`
        <it-stepper-step label=${step.label} icon=${step.icon}>
          <p>Contenuto dello step ${i + 1}.</p>
          <p>
            Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
            facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
          </p>
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
    current: 0,
    dark: false,
    'header-variant': 'text',
    'mobile-progress': '',
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
      control: { type: 'number', min: 0, max: 2, step: 1 },
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
      description: 'Variante dell\'intestazione degli step: solo testo, icone o numeri.',
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
};

export default meta;

export const Esempio: Story = {
  name: 'Esempio interattivo',
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

export const ProgressBar: Story = {
  name: 'Progress bar',
  args: { 'mobile-progress': 'bar' },
  render: (args) => renderStepper(args),
};

export const Pallini: Story = {
  name: 'Pallini',
  args: { 'mobile-progress': 'dots' },
  render: (args) => renderStepper(args),
};

export const Salva: Story = {
  name: 'Salva',
  args: { 'save-label': 'Salva' },
  render: (args) => renderStepper(args),
};

export const Conferma: Story = {
  name: 'Conferma',
  args: { 'show-confirm': true, current: 2 },
  render: (args) => renderStepper(args),
};

export const SfondoScuro: Story = {
  name: 'Sfondo scuro',
  args: { dark: true },
  render: (args) => renderStepper(args),
};

export const SfondoScuroVarianti: Story = {
  name: 'Sfondo scuro - varianti intestazione',
  parameters: { backgrounds: { default: 'dark' } },
  render: (args) =>
    html`
      <div style="display: flex; flex-direction: column; gap: 2rem;">
        ${(['text', 'icons', 'numbers'] as const).map(
          (variant) => html`
            <div>
              <p style="color: white; margin-bottom: 0.5rem;">Variante: <strong>${variant}</strong></p>
              ${renderStepper({ ...args, dark: true, 'header-variant': variant })}
            </div>
          `,
        )}
      </div>
    `,
};

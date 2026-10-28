import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { STEPPER_HEADER_VARIANTS, STEPPER_MOBILE_PROGRESS, type StepperChangeEventDetail } from '../src/types.js';
import type { ItStepper } from '../src/it-stepper.js';

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
  'next-disabled'?: boolean;
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
      gap: var(--bsi-spacing-xl, 2rem);
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
    ?next-disabled=${args['next-disabled']}
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
  tags: ['web-component', 'a11y-ok'],
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
    'next-disabled': false,
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
      table: { defaultValue: { summary: '' } },
    },
    'save-description': {
      control: 'text',
      description:
        'Testo descrittivo della sezione di salvataggio. Mostrato solamente se viene aggiunto anche `save-label`.',
      name: 'save-description',
      table: { defaultValue: { summary: '' } },
    },
    'next-disabled': {
      control: 'boolean',
      description: 'Disabilita il pulsante "Avanti" e il pulsante "Conferma" (se `show-confirm` è attivo).',
      name: 'next-disabled',
      table: { defaultValue: { summary: 'false' } },
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

const validationSteps = (extra: unknown = '') => html`
  <it-stepper-step icon="it-pencil">
    <span slot="label">Dati personali</span>
    <div class="p-5 border bg-light">
      <form>
        <it-input required name="nome" placeholder="Inserisci il nome">
          <span slot="label">Nome</span>
        </it-input>
      </form>
      ${extra}
    </div>
  </it-stepper-step>
  <it-stepper-step icon="it-check">
    <span slot="label">Conferma</span>
    <div class="p-5 text-center border bg-light">
      <p class="m-0">Riepilogo dei dati inseriti</p>
    </div>
  </it-stepper-step>
`;

const confirmNotification = html`
  <it-notification status="success" dismissable class="mt-3">
    <span slot="title">Procedura confermata</span>
    I dati inseriti sono stati salvati.
  </it-notification>
`;

const stepperOf = (event: Event) => event.currentTarget as ItStepper;

/**
 * Lo stepper non riconosce da sé l'ultimo passo: `show-confirm` va attivato
 * dal consumer, così "Conferma" sostituisce "Avanti" solo alla fine del flusso.
 */
const isLastStep = (stepper: ItStepper, step: number) => step >= stepper.querySelectorAll('it-stepper-step').length - 1;

/** Il form è nel primo passo: solo lì l'avanzamento va bloccato. */
const isFirstStepInvalid = (stepper: ItStepper, step: number) => {
  const form = stepper.querySelector('form');
  return step === 0 && !!form && !form.checkValidity();
};

const notifyConfirm = (event: Event) => {
  const notification = stepperOf(event).parentElement?.querySelector('it-notification');
  (notification as (HTMLElement & { show?: () => void }) | null)?.show?.();
};

/**
 * Approccio 1: tiene `next-disabled` allineato alla validità del form.
 * Il form è raggiunto da `it-stepper` perché `it-input` propaga l'evento
 * (`bubbles` + `composed`).
 */
const syncNextDisabled = (event: Event) => {
  const stepper = stepperOf(event);
  stepper.nextDisabled = isFirstStepInvalid(stepper, stepper.current);
};

const syncOnStepChange = (event: CustomEvent<StepperChangeEventDetail>) => {
  const stepper = stepperOf(event);
  stepper.showConfirm = isLastStep(stepper, event.detail.step);
  stepper.nextDisabled = isFirstStepInvalid(stepper, event.detail.step);
};

/** Markup condiviso dagli snippet copiabili delle due storie di validazione. */
const validationSourceMarkup = (notificationId: string) => `  <it-stepper-step icon="it-pencil">
    <span slot="label">Dati personali</span>
    <div class="p-5 border bg-light">
      <form>
        <it-input required name="nome" placeholder="Inserisci il nome">
          <span slot="label">Nome</span>
        </it-input>
      </form>
    </div>
  </it-stepper-step>
  <it-stepper-step icon="it-check">
    <span slot="label">Conferma</span>
    <div class="p-5 text-center border bg-light">
      <p class="m-0">Riepilogo dei dati inseriti</p>
    </div>
  </it-stepper-step>
</it-stepper>

<it-notification id="${notificationId}" status="success" dismissable class="mt-3">
  <span slot="title">Procedura confermata</span>
  I dati inseriti sono stati salvati.
</it-notification>`;

export const FormValidazione: Story = {
  name: 'Validazione del form nello step',
  tags: ['!dev'],
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      description: {
        story: `Il pulsante resta disabilitato finché il campo obbligatorio non è compilato.

Lo stepper non riconosce da sé l'ultimo passo: \`show-confirm\` viene attivato dallo script, così "Conferma" sostituisce "Avanti" solo alla fine del flusso.`,
      },
      source: {
        code: `<it-stepper id="validazione" confirm-label="Conferma" next-disabled>
${validationSourceMarkup('validazione-esito')}

<script type="module">
  const stepper = document.getElementById('validazione');
  const notification = document.getElementById('validazione-esito');
  const form = stepper.querySelector('form');

  // Il form è nel primo passo: solo lì l'avanzamento va bloccato.
  const nonValido = (step) => step === 0 && !form.checkValidity();

  const aggiornaStato = (step) => {
    stepper.nextDisabled = nonValido(step);
    // "Conferma" solo sull'ultimo passo.
    stepper.showConfirm = step >= stepper.querySelectorAll('it-stepper-step').length - 1;
  };

  form.addEventListener('it-input', () => aggiornaStato(stepper.current));
  stepper.addEventListener('it-stepper-change', (e) => aggiornaStato(e.detail.step));
  stepper.addEventListener('it-stepper-confirm', () => notification.show());
</script>`,
      },
    },
  },
  render: () => html`
    <div>
      <it-stepper
        confirm-label="Conferma"
        next-disabled
        @it-input=${syncNextDisabled}
        @it-stepper-change=${syncOnStepChange}
        @it-stepper-confirm=${notifyConfirm}
      >
        ${validationSteps()}
      </it-stepper>
      ${confirmNotification}
    </div>
  `,
};

/**
 * Approccio 2: il pulsante resta attivo e l'avanzamento viene bloccato al click.
 *
 * I componenti di form del design kit non mostrano i messaggi nativi del
 * browser: ogni controllo rende il proprio messaggio in linea, nascosto fino al
 * primo invio del form. Per farli comparire si usa `form.requestSubmit()`, che
 * il form intercetta bloccando l'invio quando i campi non sono validi.
 */
const vetoInvalidStep = (event: CustomEvent<StepperChangeEventDetail>) => {
  const stepper = stepperOf(event);

  // Blocca solo l'avanzamento, mai il ritorno al passo precedente.
  if (event.detail.step > event.detail.prevStep && isFirstStepInvalid(stepper, event.detail.prevStep)) {
    event.preventDefault();
    stepper.querySelector('form')?.requestSubmit();
    return;
  }

  stepper.showConfirm = isLastStep(stepper, event.detail.step);
};

export const FormValidazioneEvento: Story = {
  name: 'Validazione con evento cancelabile',
  tags: ['!dev'],
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      description: {
        story: `Il pulsante resta attivo: l'avanzamento viene annullato al click con \`preventDefault()\` e \`requestSubmit()\` fa comparire i messaggi dei campi non compilati.

Come nell'esempio precedente, \`show-confirm\` viene attivato dallo script solo sull'ultimo passo.`,
      },
      source: {
        code: `<it-stepper id="validazione-evento" confirm-label="Conferma">
${validationSourceMarkup('validazione-evento-esito')}

<script type="module">
  const stepper = document.getElementById('validazione-evento');
  const notification = document.getElementById('validazione-evento-esito');
  const form = stepper.querySelector('form');

  stepper.addEventListener('it-stepper-change', (e) => {
    // Solo in avanti, e solo dal passo che contiene il form.
    if (e.detail.step > e.detail.prevStep && e.detail.prevStep === 0 && !form.checkValidity()) {
      e.preventDefault();
      form.requestSubmit(); // mostra i messaggi dei campi, senza inviare nulla
      return;
    }

    // "Conferma" solo sull'ultimo passo.
    stepper.showConfirm = e.detail.step >= stepper.querySelectorAll('it-stepper-step').length - 1;
  });

  stepper.addEventListener('it-stepper-confirm', () => notification.show());
</script>`,
      },
    },
  },
  render: () => html`
    <div>
      <it-stepper confirm-label="Conferma" @it-stepper-change=${vetoInvalidStep} @it-stepper-confirm=${notifyConfirm}>
        ${validationSteps(html`<p class="mt-3 mb-0 text-muted">Clicca "Avanti" per vedere gli errori del form.</p>`)}
      </it-stepper>
      ${confirmNotification}
    </div>
  `,
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

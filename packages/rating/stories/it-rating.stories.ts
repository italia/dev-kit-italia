import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

import { StoryFormControlMethodAndProps } from '@italia/globals';

interface RatingProps {
  name: string;
  value: number;
  icon: string;
  disabled: boolean;
  readOnly: boolean;
  required: boolean;
  maxElements: number;
}

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Componenti/Rating',
  tags: ['beta', 'web-component', 'a11y-ok'],
  component: 'it-rating',
  args: {
    name: 'rating',
    value: 0,
    disabled: false,
    readOnly: false,
    required: false,
    icon: 'it-star-outline',
    maxElements: 5,
  },
  argTypes: {
    name: {
      control: 'text',
      description: "Nome del campo per l'invio del form",
    },
    value: {
      control: { type: 'number', min: 0, max: 5, step: 1 },
      description: 'Valore corrente della valutazione (0-5, 0 = nessuna stella selezionata)',
    },
    icon: {
      control: 'text',
      description: "Nome dell'icona da utilizzare per gli item del rating",
      table: { defaultValue: { summary: 'it-star-outline' } },
    },
    disabled: {
      control: 'boolean',
      type: 'boolean',
      description: 'Se il rating è disabilitato',
      table: { defaultValue: { summary: 'false' } },
    },
    readOnly: {
      name: 'read-only',
      control: 'boolean',
      type: 'boolean',
      description: 'Se il rating è in sola lettura (non interattivo)',
      table: { defaultValue: { summary: 'false' } },
    },
    required: {
      control: 'boolean',
      type: 'boolean',
      description: 'Se la selezione è obbligatoria',
      table: { defaultValue: { summary: 'false' } },
    },
    maxElements: {
      name: 'max-elements',
      control: { type: 'number', min: 1, step: 1 },
      description:
        'Numero massimo di elementi nel rating, per messaggi di supporto e accessibilità, modificare rispetto al default solo se si cambia il numero di elementi visualizzati rispetto al default di 5',
      table: { defaultValue: { summary: '5' } },
    },
  },
} satisfies Meta<RatingProps>;

export default meta;
type Story = StoryObj<RatingProps>;

export const EsempioInterattivo: Story = {
  ...meta,
  name: 'Esempio interattivo',
  tags: ['!autodocs', '!dev'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
  render: (args) => html`
    <it-rating
      name=${ifDefined(args.name || undefined)}
      value=${args.value.toString()}
      ?disabled=${args.disabled}
      ?read-only=${args.readOnly}
      ?required=${args.required}
      @change=${(e: CustomEvent) => {
        console.log('Rating changed:', (e.target as HTMLElement).getAttribute('value'));
      }}
      icon=${ifDefined(args.icon || undefined)}
      max-elements=${args.maxElements.toString()}
    >
      <span slot="label">Valuta questo contenuto</span>
      <it-rating-item value="1" ?checked=${args.value === 1}>
        <span slot="label">1 stella</span>
      </it-rating-item>
      <it-rating-item value="2" ?checked=${args.value === 2}>
        <span slot="label">2 stelle</span>
      </it-rating-item>
      <it-rating-item value="3" ?checked=${args.value === 3}>
        <span slot="label">3 stelle</span>
      </it-rating-item>
      <it-rating-item value="4" ?checked=${args.value === 4}>
        <span slot="label">4 stelle</span>
      </it-rating-item>
      <it-rating-item value="5" ?checked=${args.value === 5}>
        <span slot="label">5 stelle</span>
      </it-rating-item>
    </it-rating>
  `,
};

export const PersonalizzazioneDegliStili: Story = {
  name: 'Personalizzazione degli stili',
  tags: ['!dev'],
  parameters: {
    viewMode: 'docs',
    docs: {
      canvas: { hidden: true, sourceState: 'none' },
    },
  },
  render: () => html`<div class="hide-preview"></div>`,
};

export const ValorePreimpostato: Story = {
  name: 'Con valore preimpostato',
  args: {
    value: 3,
  },

  render: () => html`
    <it-rating name="rating-preset" value="3">
      <span slot="label">Valutazione</span>
      <it-rating-item value="1"><span slot="label">1 stella</span></it-rating-item>
      <it-rating-item value="2"><span slot="label">2 stelle</span></it-rating-item>
      <it-rating-item value="3"><span slot="label">3 stelle</span></it-rating-item>
      <it-rating-item value="4"><span slot="label">4 stelle</span></it-rating-item>
      <it-rating-item value="5"><span slot="label">5 stelle</span></it-rating-item>
    </it-rating>
  `,
};

export const SolaLettura: Story = {
  name: 'Sola lettura',
  args: {
    value: 4,
    readOnly: true,
  },

  render: () => html`
    <it-rating name="rating-readonly" value="4" read-only>
      <span slot="label">Sola lettura</span>
      <it-rating-item value="1"><span slot="label">1 stella</span></it-rating-item>
      <it-rating-item value="2"><span slot="label">2 stelle</span></it-rating-item>
      <it-rating-item value="3"><span slot="label">3 stelle</span></it-rating-item>
      <it-rating-item value="4" checked><span slot="label">4 stelle</span></it-rating-item>
      <it-rating-item value="5"><span slot="label">5 stelle</span></it-rating-item>
    </it-rating>
    <p class="mt-3">Valutazione 4 stelle su 5</p>
  `,
};

export const IconePersonalizzate: Story = {
  name: 'Con icone personalizzate',
  args: {
    value: 3,
  },

  render: () => html`
    <it-rating name="rating-check" icon="it-check-circle" value="4">
      <span slot="label">Valutazione con check</span>
      <it-rating-item value="1"><span slot="label">1 check</span></it-rating-item>
      <it-rating-item value="2"><span slot="label">2 check</span></it-rating-item>
      <it-rating-item value="3"><span slot="label">3 check</span></it-rating-item>
      <it-rating-item value="4"><span slot="label">4 check</span></it-rating-item>
      <it-rating-item value="5"><span slot="label">5 check</span></it-rating-item>
    </it-rating>
  `,
};

export const Obbligatorio: Story = {
  args: {
    value: 0,
    required: true,
  },

  render: () => html`
    <form
      @submit=${(e: Event) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        console.log(`Rating selezionato: ${formData.get('rating-required')}`);
      }}
    >
      <it-rating name="rating-required" required>
        <span slot="label">Valutazione (obbligatoria)</span>
        <it-rating-item value="1">
          <span slot="label">1 stella</span>
        </it-rating-item>
        <it-rating-item value="2">
          <span slot="label">2 stelle</span>
        </it-rating-item>
        <it-rating-item value="3">
          <span slot="label">3 stelle</span>
        </it-rating-item>
        <it-rating-item value="4">
          <span slot="label">4 stelle</span>
        </it-rating-item>
        <it-rating-item value="5">
          <span slot="label">5 stelle</span>
        </it-rating-item>
      </it-rating>
      <it-button type="submit" class="mt-3" variant="primary">Invia</it-button>
    </form>
  `,
};

export const InForm: Story = {
  name: 'Integrazione con form',
  render: () => html`
    <form
      id="review-form"
      @submit=${(e: Event) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        console.log(`Form inviato! Rating: ${data.rating} Commento: ${data.comment}`);
      }}
    >
      <div class="mb-4">
        <it-rating name="rating" required>
          <span slot="label">Valuta questo servizio (obbligatorio)</span>
          <it-rating-item value="1">
            <span slot="label">1 stella</span>
          </it-rating-item>
          <it-rating-item value="2">
            <span slot="label">2 stelle</span>
          </it-rating-item>
          <it-rating-item value="3">
            <span slot="label">3 stelle</span>
          </it-rating-item>
          <it-rating-item value="4">
            <span slot="label">4 stelle</span>
          </it-rating-item>
          <it-rating-item value="5">
            <span slot="label">5 stelle</span>
          </it-rating-item>
        </it-rating>
      </div>

      <div class="mb-4">
        <div class="form-group">
          <label for="comment">Commento</label>
          <it-input type="textarea" id="comment" name="comment" class="form-control" rows="3" required></textarea>
        </div>
      </div>

      <it-button type="submit" variant="primary">Invia recensione</it-button>
      <it-button type="reset" variant="primary" outline>Reset</it-button>
    </form>
    <style>
      #review-form  {
        max-width: 400px;
      }
    </style>
  `,
};

export const MetodiEPropPubblici: Story = {
  ...StoryFormControlMethodAndProps('', `|\`click()\`| Triggera l'evento di click sull'input reale | - |`),
  tags: ['!dev'],
};

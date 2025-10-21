import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

import '@italia/rating';
import '@italia/radio';
import '@italia/icon';
import '@italia/input';

interface RatingProps {
  name: string;
  value: number;
  label: string;
  disabled: boolean;
  readOnly: boolean;
  required: boolean;
  maxStars: number;
}

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Componenti/Rating',
  tags: ['autodocs'],
  component: 'it-rating',
  args: {
    name: 'rating',
    value: 0,
    disabled: false,
    readOnly: false,
    required: false,
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
  },
  parameters: {
    docs: {
      description: {
        component: `
<Description>Una scala di valori grafica a stelline, utile per esprimere una valutazione su un servizio o un contenuto.</Description>

Il componente \`<it-rating>\` permette agli utenti di valutare contenuti o servizi con un sistema di stelle da 1 a 5 (configurabile).

<div class="callout callout-success"><div class="callout-inner"><div class="callout-title"><span class="text">Accessibilità</span></div>
<p>
Il componente implementa completamente le specifiche ARIA per i rating: utilizza \`role="radiogroup"\` per il gruppo di stelle e \`role="radio"\` per ogni stella quando il componente è interattivo.
</p>
<p>
La navigazione da tastiera è completa e intuitiva: le frecce permettono di navigare tra le stelle, Home e End vanno alla prima e ultima stella rispettivamente, mentre Spazio ed Enter selezionano la stella corrente.

È obbligatorio, per ragioni di accessibilità, fornire la label per ogni stella tramite lo slot \`label\`. È obbligatorio anche fornire una label per il gruppo di stelle, tramite lo slot \`label\`.
</p>
</div></div>


`,
      },
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
    >
      <span slot="label">${args.label || 'Valuta questo contenuto'}</span>
      <it-rating-item name=${args.name} value="1" ?checked=${args.value === 1}>
        <span slot="label">1 stella</span>
      </it-rating-item>
      <it-rating-item name=${args.name} value="2" ?checked=${args.value === 2}>
        <span slot="label">2 stelle</span>
      </it-rating-item>
      <it-rating-item name=${args.name} value="3" ?checked=${args.value === 3}>
        <span slot="label">3 stelle</span>
      </it-rating-item>
      <it-rating-item name=${args.name} value="4" ?checked=${args.value === 4}>
        <span slot="label">4 stelle</span>
      </it-rating-item>
      <it-rating-item name=${args.name} value="5" ?checked=${args.value === 5}>
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
      description: {
        story: `
Per la personalizzazione degli stili del componente \`<it-rating-item>\` si può usare il selettore \`::part\` con i seguenti valori:

#### it-rating-item

| Part | Descrizione |
|------|-------------|
| \`input\` | Il contenitore dell'input nascosto |
| \`star\` | L'icona (stella o icona personalizzata) |

#### Attributi di personalizzazione

| Attributo | Tipo | Default | Descrizione |
|-----------|------|---------|-------------|
| \`icon\` | \`string\` | \`'it-star-full'\` | Nome dell'icona da utilizzare per il rating item |

[Vedi qui la guida dettagliata](/docs/personalizzazione-degli-stili--documentazione#selettore-part).

Esempio di personalizzazione:

\`\`\`css
it-rating::part(label) {
  font-weight: bold;
  font-size: 1.2rem;
}

it-rating-item::part(star) {
  transform: scale(1.2);
}

it-rating-item::part(label) {
  color: #333;
}
\`\`\`
<p></p>
`,
      },
    },
  },
  render: () => html`<div class="hide-preview"></div>`,
};

export const ValorePreimpostato: Story = {
  name: 'Con valore preimpostato',
  args: {
    value: 3,
  },
  parameters: {
    docs: {
      description: {
        story: `È possibile inizializzare il componente con un valore preimpostato utilizzando l'attributo \`value\`.`,
      },
    },
  },
  render: () => html`
    <it-rating name="rating-preset" value="3">
      <span slot="label">Valutazione</span>
      <it-rating-item name="rating-preset" value="1"><span slot="label">1 stella</span></it-rating-item>
      <it-rating-item name="rating-preset" value="2"><span slot="label">2 stelle</span></it-rating-item>
      <it-rating-item name="rating-preset" value="3" checked><span slot="label">3 stelle</span></it-rating-item>
      <it-rating-item name="rating-preset" value="4"><span slot="label">4 stelle</span></it-rating-item>
      <it-rating-item name="rating-preset" value="5"><span slot="label">5 stelle</span></it-rating-item>
    </it-rating>
  `,
};

export const SolaLettura: Story = {
  name: 'Sola lettura',
  args: {
    value: 4,
    readOnly: true,
  },
  parameters: {
    docs: {
      description: {
        story: `È possibile impostare il componente in modalità sola lettura utilizzando l'attributo \`read-only\`. In questa modalità, il rating non è interattivo e serve solo per visualizzare una valutazione esistente.`,
      },
    },
  },
  render: () => html`
    <it-rating name="rating-readonly" value="4" read-only>
      <span slot="label">Sola lettura</span>
      <it-rating-item name="rating-readonly" value="1"><span slot="label">1 stella</span></it-rating-item>
      <it-rating-item name="rating-readonly" value="2"><span slot="label">2 stelle</span></it-rating-item>
      <it-rating-item name="rating-readonly" value="3"><span slot="label">3 stelle</span></it-rating-item>
      <it-rating-item name="rating-readonly" value="4" checked><span slot="label">4 stelle</span></it-rating-item>
      <it-rating-item name="rating-readonly" value="5"><span slot="label">5 stelle</span></it-rating-item>
    </it-rating>
    <p class="mt-3">Valutazione 4 stelle su 5</p>
  `,
};

export const IconePersonalizzate: Story = {
  name: 'Con icone personalizzate',
  args: {
    value: 3,
  },
  parameters: {
    docs: {
      description: {
        story: `È possibile personalizzare l'icona utilizzata per il rating tramite l'attributo \`icon\` su \`<it-rating-item>\`. Di default viene utilizzata l'icona \`it-star-full\`, ma è possibile usare qualsiasi icona disponibile nel design system e/o icone personalizzate.`,
      },
    },
  },
  render: () => html`
    <div>
      <it-rating name="rating-check" value="4">
        <span slot="label">Valutazione con check</span>
        <it-rating-item name="rating-check" value="1" icon="it-check-circle"
          ><span slot="label">1 check</span></it-rating-item
        >
        <it-rating-item name="rating-check" value="2" icon="it-check-circle"
          ><span slot="label">2 check</span></it-rating-item
        >
        <it-rating-item name="rating-check" value="3" icon="it-check-circle"
          ><span slot="label">3 check</span></it-rating-item
        >
        <it-rating-item name="rating-check" value="4" icon="it-check-circle" checked
          ><span slot="label">4 check</span></it-rating-item
        >
        <it-rating-item name="rating-check" value="5" icon="it-check-circle"
          ><span slot="label">5 check</span></it-rating-item
        >
      </it-rating>
    </div>
  `,
};

export const Obbligatorio: Story = {
  args: {
    value: 0,
    required: true,
  },
  parameters: {
    docs: {
      description: {
        story: `È possibile impostare il componente come obbligatorio utilizzando l'attributo \`required\`. In questo modo, l'utente deve selezionare una valutazione prima di poter inviare il modulo.`,
      },
    },
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
        <it-rating-item name="rating-required" value="1"><span slot="label">1 stella</span></it-rating-item>
        <it-rating-item name="rating-required" value="2"><span slot="label">2 stelle</span></it-rating-item>
        <it-rating-item name="rating-required" value="3"><span slot="label">3 stelle</span></it-rating-item>
        <it-rating-item name="rating-required" value="4"><span slot="label">4 stelle</span></it-rating-item>
        <it-rating-item name="rating-required" value="5"><span slot="label">5 stelle</span></it-rating-item>
      </it-rating>
      <button type="submit" class="btn btn-primary mt-3">Invia</button>
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
          <it-rating-item name="rating" value="1"><span slot="label">1 stella</span></it-rating-item>
          <it-rating-item name="rating" value="2"><span slot="label">2 stelle</span></it-rating-item>
          <it-rating-item name="rating" value="3"><span slot="label">3 stelle</span></it-rating-item>
          <it-rating-item name="rating" value="4"><span slot="label">4 stelle</span></it-rating-item>
          <it-rating-item name="rating" value="5"><span slot="label">5 stelle</span></it-rating-item>
        </it-rating>
      </div>

      <div class="mb-4">
        <div class="form-group">
          <label for="comment">Commento</label>
          <it-input type="textarea" id="comment" name="comment" class="form-control" rows="3" required></textarea>
        </div>
      </div>

      <button type="submit" class="btn btn-primary">Invia recensione</button>
      <button type="reset" class="btn btn-outline-primary ms-2">Reset</button>
    </form>
  `,
};

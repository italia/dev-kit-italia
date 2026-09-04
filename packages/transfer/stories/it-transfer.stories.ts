import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { StoryFormControlMethodAndProps } from '@italia/globals';
import i18nIT from '../src/locales/it.js';

interface TransferProps {
  name: string;
  sourceLabel: string;
  targetLabel: string;
  disabled: boolean;
  required: boolean;
  customValidation: boolean;
  validityMessage: string;
}

const defaultItems = () => html`
  <it-transfer-item value="item1">Voce 1</it-transfer-item>
  <it-transfer-item value="item2">Voce 2</it-transfer-item>
  <it-transfer-item value="item3">Voce 3</it-transfer-item>
  <it-transfer-item value="item4">Voce 4</it-transfer-item>
  <it-transfer-item value="item5">Voce 5</it-transfer-item>
  <it-transfer-item value="item6">Voce 6</it-transfer-item>
`;

const renderTransfer = (params: TransferProps) => html`
  <it-transfer
    name="${ifDefined(params.name || undefined)}"
    source-label="${ifDefined(params.sourceLabel || undefined)}"
    target-label="${ifDefined(params.targetLabel || undefined)}"
    ?disabled="${params.disabled}"
    ?required="${params.required}"
    ?custom-validation="${params.customValidation}"
    validity-message="${ifDefined(params.validityMessage || undefined)}"
  >
    ${defaultItems()}
  </it-transfer>
`;

const meta: Meta<TransferProps> = {
  title: 'Componenti/Form/Transfer',
  tags: ['a11y-ok', 'web-component'],
  component: 'it-transfer',
  args: {
    name: 'transfer-items',
    sourceLabel: '',
    targetLabel: '',
    disabled: false,
    required: false,
    customValidation: false,
    validityMessage: '',
  },
  argTypes: {
    name: {
      control: 'text',
      description: 'Il nome del campo nel form, usato nella sottomissione.',
    },
    sourceLabel: {
      control: 'text',
      description: 'Etichetta descrittiva per la lista sorgente (sinistra). Sovrascrive il default i18n.',
      name: 'source-label',
      table: { defaultValue: { summary: 'Sorgente' } },
    },
    targetLabel: {
      control: 'text',
      description: 'Etichetta descrittiva per la lista destinazione (destra). Sovrascrive il default i18n.',
      name: 'target-label',
      table: { defaultValue: { summary: 'Destinazione' } },
    },
    disabled: {
      control: 'boolean',
      description: 'Disabilita il componente.',
      table: { defaultValue: { summary: 'false' } },
    },
    required: {
      control: 'boolean',
      description:
        'Rende il campo obbligatorio: la lista destinazione non può essere vuota alla sottomissione del form.',
      table: { defaultValue: { summary: 'false' } },
    },
    customValidation: {
      control: 'boolean',
      description: 'Disabilita la validazione nativa e usa `validity-message` per mostrare un errore personalizzato.',
      name: 'custom-validation',
      table: { defaultValue: { summary: 'false' } },
    },
    validityMessage: {
      control: 'text',
      description: 'Messaggio di errore personalizzato (richiede `custom-validation`).',
      name: 'validity-message',
      table: { defaultValue: { summary: '' } },
    },
  },
  parameters: {
    layout: 'padded',
    pageLayout: 'w-100',
    docs: {
      canvas: { sourceState: 'shown' },
    },
  },
};

export default meta;
type Story = StoryObj<TransferProps>;

export const EsempioInterattivo: Story = {
  name: 'Esempio interattivo',
  tags: ['!dev'],
  render: (args) => renderTransfer(args),
};

export const ConValoriPreimpostati: Story = {
  name: 'Con valori preimpostati',
  render: () => html`
    <it-transfer name="preset">
      <it-transfer-item value="item7">Voce 7</it-transfer-item>
      <it-transfer-item value="item8">Voce 8</it-transfer-item>
      <it-transfer-item value="item9">Voce 9</it-transfer-item>
      <it-transfer-item value="item10" target>Voce 10</it-transfer-item>
      <it-transfer-item value="item11" target>Voce 11</it-transfer-item>
      <it-transfer-item value="item12" target>Voce 12</it-transfer-item>
    </it-transfer>
  `,
};

export const EtichettePersonalizzate: Story = {
  name: 'Etichette personalizzate',
  render: () => html`
    <it-transfer name="custom-labels" source-label="Comuni disponibili" target-label="Comuni selezionati">
      <it-transfer-item value="rm">Roma</it-transfer-item>
      <it-transfer-item value="mi">Milano</it-transfer-item>
      <it-transfer-item value="na">Napoli</it-transfer-item>
      <it-transfer-item value="to">Torino</it-transfer-item>
    </it-transfer>
  `,
};

export const Disabilitato: Story = {
  render: () => html`
    <it-transfer name="disabled-example" disabled>
      <it-transfer-item value="a">Voce A</it-transfer-item>
      <it-transfer-item value="b">Voce B</it-transfer-item>
      <it-transfer-item value="c" target>Voce C</it-transfer-item>
    </it-transfer>
  `,
};

export const ValidazioneNativa: Story = {
  name: 'Validazione nativa',
  args: { required: true },
  render: (params) => html`
    <form>
      ${renderTransfer({ ...params, name: 'required-transfer' })}
      <div class="mt-3">
        <it-button type="submit" variant="primary">Invia</it-button>
        <it-button type="reset" variant="secondary" class="ms-2">Reimposta</it-button>
      </div>
    </form>
  `,
};

export const ElementoDisabilitato: Story = {
  name: 'Elemento singolo disabilitato',
  render: () => html`
    <it-transfer name="disabled-item">
      <it-transfer-item value="a">Voce A</it-transfer-item>
      <it-transfer-item value="b" disabled>Voce B (non trasferibile)</it-transfer-item>
      <it-transfer-item value="c">Voce C</it-transfer-item>
    </it-transfer>
  `,
};

export const ValidazioneCustom: Story = {
  name: 'Validazione custom',
  args: { customValidation: true, validityMessage: 'Questo campo è obbligatorio!!!' },
  render: (params) => renderTransfer({ ...params, name: 'custom-validation-transfer' }),
};

export const GestioneEventi: Story = {
  name: 'Gestione degli eventi',
  parameters: {
    docs: {
      description: {
        story: `Il componente Transfer emette due eventi principali:

- \`it-transfer\`: emesso **prima** di ogni azione (trasferimento, ritrasferimento, ripristino). Annullabile con \`event.preventDefault()\`.
- \`it-change\`: emesso **dopo** ogni modifica delle liste.

Per bloccare un trasferimento dal listener:

\`\`\`js
document.querySelector('it-transfer').addEventListener('it-transfer', (e) => {
  if (e.detail.action === 'transfer' && shouldBlock) {
    e.preventDefault(); // annulla il trasferimento
  }
});
\`\`\`

Per intercettare ogni modifica delle liste:

\`\`\`js
document.querySelector('it-transfer').addEventListener('it-change', (e) => {
  console.log('Lista destinazione aggiornata:', e.detail.value);
});
\`\`\``,
      },
    },
  },
  render: () => html`
    <script>
      document.querySelector('it-transfer#event-transfer-example').addEventListener('it-transfer', (e) => {
        if (e.detail.action === 'transfer') {
          e.preventDefault();
          // eslint-disable-next-line no-alert
          alert('Trasferimento bloccato dal listener it-transfer!');
        }
      });
      document.querySelector('it-transfer#event-transfer-example').addEventListener('it-change', (e) => {
        console.log('Lista destinazione:', e.detail.value);
      });
    </script>
    <it-transfer id="event-transfer-example" name="event-example">
      <it-transfer-item value="a">Voce A</it-transfer-item>
      <it-transfer-item value="b">Voce B</it-transfer-item>
      <it-transfer-item value="c">Voce C</it-transfer-item>
    </it-transfer>
  `,
};

export const I18n: Story = {
  name: 'i18n',
  tags: ['!dev'],
  render: () => html`<div class="hide-preview"></div>`,
  parameters: {
    viewMode: 'docs',
    docs: {
      description: {
        story: `
Per questo componente sono disponibili alcune stringhe traducibili tramite l'[utility di internazionalizzazione](/docs/i18n-internazionalizzazione--documentazione).

\`\`\`js
const translation = ${JSON.stringify(i18nIT, null, 2)}
\`\`\`
`,
      },
    },
  },
};

export const EventoAnnullabile: Story = {
  name: 'Evento annullabile',
  parameters: {
    docs: {
      description: {
        story: `L'evento \`it-transfer\` è annullabile. Chiamando \`event.preventDefault()\` puoi bloccare
l'azione in corso (transfer, backtransfer, reset) ed eseguire una logica di validazione personalizzata.

Questo esempio mostra come bloccare il trasferimento quando il numero di elementi nella lista di
destinazione supererebbe il limite di 3 elementi.

Per riprendere l'azione dopo logica asincrona (validazione remota, conferma dell'utente), usa il metodo pubblico \`commit(event.detail)\`.
Vedi la sezione dedicata per un esempio completo.`,
      },
    },
  },
  render: () => html`
    <div id="transfer-cancelable-example">
      <it-transfer name="max-items-transfer">
        <it-transfer-item value="a">Voce A</it-transfer-item>
        <it-transfer-item value="b">Voce B</it-transfer-item>
        <it-transfer-item value="c">Voce C</it-transfer-item>
        <it-transfer-item value="d">Voce D</it-transfer-item>
        <it-transfer-item value="e">Voce E</it-transfer-item>
        <it-transfer-item value="f">Voce F</it-transfer-item>
      </it-transfer>
      <p role="status" aria-live="polite" style="margin-top: 1rem; color: #d32f2f;"></p>
    </div>

    <script>
      const el = document.querySelector('#transfer-cancelable-example it-transfer');
      const statusEl = document.querySelector('#transfer-cancelable-example p[role="status"]');

      el.addEventListener('it-transfer', (e) => {
        if (e.detail.action === 'transfer' && e.detail.target.length > 3) {
          e.preventDefault();
          statusEl.textContent = 'Limite di 3 elementi nel target raggiunto.';
        } else {
          statusEl.textContent = '';
        }
      });
    </script>
  `,
};

export const EventoAnnullabileConRipresa: Story = {
  name: 'Evento annullabile con ripresa',
  parameters: {
    docs: {
      description: {
        story: `Chiama \`event.preventDefault()\` per bloccare l'azione, poi usa il metodo pubblico \`commit(event.detail)\` per applicarla in modo programmatico dopo la tua logica asincrona — senza rieseguire l'evento.`,
      },
    },
  },
  render: () => html`
    <div id="transfer-resume-example">
      <it-transfer name="resume-transfer">
        <it-transfer-item value="a">Voce A</it-transfer-item>
        <it-transfer-item value="b">Voce B</it-transfer-item>
        <it-transfer-item value="c">Voce C</it-transfer-item>
        <it-transfer-item value="d">Voce D</it-transfer-item>
      </it-transfer>
      <p role="status" aria-live="polite" id="transfer-resume-status" style="margin-top: 1rem;"></p>
    </div>

    <script>
      const el2 = document.querySelector('#transfer-resume-example it-transfer');
      const statusEl2 = document.querySelector('#transfer-resume-status');

      el2.addEventListener('it-transfer', (e) => {
        if (e.detail.action === 'transfer') {
          e.preventDefault();
          statusEl2.textContent = 'Attendere conferma…';
          // Simula logica asincrona (es. chiamata API, conferma utente)
          setTimeout(() => {
            el2.commit(e.detail); // applica lo stato proposto senza rieseguire l'evento
            statusEl2.textContent = '';
          }, 4000);
        }
      });
    </script>
  `,
};

export const MetodiEPropPubblici: Story = {
  ...StoryFormControlMethodAndProps({
    componentName: 'it-transfer',
    otherProps: `|\`value\`| Array JSON dei valori degli elementi presenti nella lista destinazione. |`,
    otherMethods: `|\`transfer()\`| Sposta gli elementi selezionati dalla lista sorgente alla lista destinazione. Equivale al click sul pulsante →. | - |
|\`backtransfer()\`| Riporta gli elementi selezionati dalla lista destinazione alla lista sorgente. Equivale al click sul pulsante ←. | - |
|\`reset()\`| Ripristina entrambe le liste allo stato iniziale. Equivale al click sul pulsante ↺. | - |
|\`commit(detail)\`| Applica lo stato proposto da un evento \`it-transfer\` precedentemente annullato, senza rieseguire l'evento. Usare dopo \`event.preventDefault()\` per riprendere l'azione in modo programmatico. | detail: \`TransferEventDetail\` |`,
    otherEvents: `|\`it-transfer\`| Emesso prima di ogni azione (transfer, backtransfer, reset). Annullabile con \`event.preventDefault()\`. Il \`detail\` contiene \`{ action, items, source, target }\` che descrive lo stato proposto. |
|\`it-change\`| Emesso dopo ogni modifica delle liste. Il \`detail\` contiene \`{ value, el }\`. |`,
  }),
  tags: ['!dev'],
};

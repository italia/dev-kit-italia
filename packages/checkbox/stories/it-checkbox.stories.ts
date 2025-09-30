import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { StoryFormControlMethodAndProps } from '@italia/globals';

import i18nIT from '../src/locales/it.js';

import '@italia/checkbox';

interface CheckboxProps {
  id: string;
  label: string;
  name: string;
  value: string;
  checked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;

  form: string;
  customValidation: boolean;
  validityMessage: string;

  required: boolean;

  supportText: string;
  labelHidden: boolean;
}

// Renderizza il wc it-checkbox di default
const renderComponent = (params: any) =>
  html`<it-checkbox
    id="${ifDefined(params.id || undefined)}"
    label="${ifDefined(params.label || undefined)}"
    name="${ifDefined(params.name || undefined)}"
    value="${ifDefined(params.value || undefined)}"
    ?checked="${params.checked}"
    ?indeterminate="${params.indeterminate}"
    ?disabled="${params.disabled}"
    form="${ifDefined(params.form || undefined)}"
    ?custom-validation="${params.customValidation}"
    validity-message="${ifDefined(params.validityMessage || undefined)}"
    ?required="${params.required}"
    support-text="${ifDefined(params.supportText || undefined)}"
    ?label-hidden="${params.labelHidden}"
    >${ifDefined(params.children || undefined)}</it-checkbox
  >`;

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Componenti/Form/Checkbox',
  tags: ['autodocs'],
  component: 'it-checkbox',
  args: {
    id: '',
    label: 'Checkbox di esempio',
    name: 'esempio',
    value: '',
    checked: false,
    indeterminate: false,
    disabled: false,

    form: '',
    customValidation: false,
    validityMessage: '',

    required: false,

    supportText: '',
    labelHidden: false,
  },
  argTypes: {
    id: {
      control: 'text',
      description: 'ID del campo',
    },
    label: {
      control: 'text',
      description: 'Etichetta del campo',
    },
    name: {
      control: 'text',
    },
    value: {
      control: 'text',
      description: 'Valore del campo',
    },
    checked: {
      control: 'boolean',
      type: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    indeterminate: {
      control: 'boolean',
      type: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    disabled: {
      control: 'boolean',
      type: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    form: {
      control: 'text',
      description: "ID html del form a cui è associato il campo, se il campo non si trova all'interno di una form ",
    },
    customValidation: {
      name: 'custom-validation',
      control: 'boolean',
      type: 'boolean',
      table: { defaultValue: { summary: 'false' } },
      description:
        'Se la validazione del campo è fatta esternamente (lato server o con plugin js - validazione custom), impostare questo attributo a `true`.',
    },
    validityMessage: {
      name: 'validity-message',
      control: 'text',
      description:
        "Messaggio da mostrare quando il campo è invalido nel caso di validazione esterna (validazione custom). Se impostato a '' (stringa vuota) il campo viene considerato valido.",
    },
    required: {
      control: 'boolean',
      type: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    supportText: {
      name: 'support-text',
      control: 'text',
      description: 'Testo di supporto',
    },
    labelHidden: {
      name: 'label-hidden',
      control: 'boolean',
      type: 'boolean',
      description: 'Se si vuole nascondere la label. Risulterà comunque accessibile per i lettori di schermo.',
      table: { defaultValue: { summary: 'false' } },
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
<Description>Casella di controllo accessibile e responsiva, che consente di selezionare una o più opzioni da un elenco predefinito .</Description>


<div class="callout callout-success"><div class="callout-inner"><div class="callout-title"><span class="text">Accessibilità</span></div>
<p>
Tutti gli attributi \`aria-*\` passati a \`<it-checkbox>\` vengono applicati all'input generato.
</p></div></div>
`,
      },
    },
  },
} satisfies Meta<CheckboxProps>;

export default meta;
type Story = StoryObj<CheckboxProps>;

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
  render: (params) =>
    html`${renderComponent({
      ...params,
    })} `,
};

export const Placeholder: Story = {
  ...meta,
  name: 'Testo segnaposto',
  args: {
    type: 'text',
    placeholder: 'Testo segnaposto',
    label: 'Etichetta',
    name: 'placeholder-example',
    id: 'placeholder-example',
  },

  parameters: {
    docs: {
      description: {
        story: `
È possibile abbinare al componente \`<it-checkbox>\` un testo segnaposto (placeholder) per fornire indicazioni sul tipo di contenuto atteso. Questo testo non sostituisce l’etichetta, ma fornisce informazioni aggiuntive.
`,
      },
    },
  },
  render: (params) => html`
    ${renderComponent({
      ...params,
    })}
  `,
};

export const MetodiEPropPubblici: Story = { ...StoryFormControlMethodAndProps, tags: ['!dev'] };

export const I18n: Story = {
  name: 'i18n',
  tags: ['!dev'],
  render: () => html`<div class="hide-preview"></div>`,
  parameters: {
    viewMode: 'docs', // assicura che si apra la tab Docs anziché Canvas
    docs: {
      description: {
        story: `
Per questo componente sono disponibili alcune stringhe traducibili tramite l'[utility di internazionalizzazione](/docs/i18n-internazionalizzazione--documentazione).

\`\`\`js
const translation = {
  ${JSON.stringify(i18nIT).replaceAll('{"', '"').replaceAll('",', '",\n\t').replaceAll('"}', '"')}
}
\`\`\`
`,
      },
    },
  },
};

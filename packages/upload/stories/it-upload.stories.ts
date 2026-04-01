import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { StoryFormControlMethodAndProps } from '@italia/globals';

import type { UploadVariant } from '../src/types.js';
import i18nIT from '../src/locales/it.js';

interface UploadProps {
  name: string;
  multiple: boolean;
  accept: string;
  imagePreview: boolean;
  variant: UploadVariant;
  supportText: string;
  disabled: boolean;
  required: boolean;
}

const VARIANTS: UploadVariant[] = ['default', 'gallery'];

const renderComponent = (params: Partial<UploadProps>) => html`
  <it-upload
    name="${ifDefined(params.name || undefined)}"
    ?multiple="${params.multiple}"
    accept="${ifDefined(params.accept || undefined)}"
    ?image-preview="${params.imagePreview}"
    variant="${ifDefined(params.variant || undefined)}"
    support-text="${ifDefined(params.supportText || undefined)}"
    ?disabled="${params.disabled}"
    ?required="${params.required}"
  >
    <span slot="label">${i18nIT.upload_label}</span>
  </it-upload>
`;

const meta = {
  title: 'Componenti/Form/Upload',
  tags: ['a11y-ok', 'web-component'],
  component: 'it-upload',
  args: {
    name: 'upload',
    multiple: false,
    accept: '',
    imagePreview: false,
    variant: 'default',
    supportText: '',
    disabled: false,
    required: false,
  },
  argTypes: {
    name: {
      control: 'text',
      description: 'Attributo name del campo (necessario per i form)',
    },
    multiple: {
      control: 'boolean',
      description: 'Consente la selezione di più file contemporaneamente',
      table: { defaultValue: { summary: 'false' } },
    },
    accept: {
      control: 'text',
      description: "Tipi di file accettati, es. 'image/*,.pdf'",
    },
    imagePreview: {
      name: 'image-preview',
      control: 'boolean',
      description: "Se attivo, mostra un'anteprima dell'immagine nella lista dei file",
      table: { defaultValue: { summary: 'false' } },
    },
    variant: {
      control: 'select',
      options: VARIANTS,
      description: "Layout del componente: 'default' mostra una lista verticale, 'gallery' mostra una griglia a parete",
      table: { defaultValue: { summary: 'default' } },
    },
    supportText: {
      name: 'support-text',
      control: 'text',
      description: 'Testo di supporto visualizzato sotto il pulsante di caricamento',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabilita il componente',
      table: { defaultValue: { summary: 'false' } },
    },
    required: {
      control: 'boolean',
      description: 'Rende obbligatoria la selezione di almeno un file',
      table: { defaultValue: { summary: 'false' } },
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
Componente per il caricamento di file all'interno di un form. Supporta la selezione singola e multipla, l'anteprima delle immagini e la variante a galleria.

[Approfondisci come e quando usare il componente Upload](https://bootstrap-italia.readthedocs.io/it/latest/docs/form/upload/)
`,
      },
    },
  },
} satisfies Meta<UploadProps>;

export default meta;
type Story = StoryObj<UploadProps>;

export const EsempioInterattivo: Story = {
  ...meta,
  name: 'Esempio interattivo',
  tags: ['!autodocs', '!dev'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'closed',
      },
    },
  },
  render: (params) => html`${renderComponent({ ...params })}`,
};

export const Default: Story = {
  ...meta,
  name: 'Upload base',
  args: {
    name: 'upload-base',
    multiple: false,
  },
  render: (params) => html`${renderComponent({ ...params })}`,
};

export const Multiplo: Story = {
  ...meta,
  name: 'Selezione multipla',
  args: {
    name: 'upload-multiple',
    multiple: true,
  },
  render: (params) => html`${renderComponent({ ...params })}`,
};

export const ConAnteprimaImmagine: Story = {
  ...meta,
  name: 'Con anteprima immagine',
  parameters: {
    docs: {
      description: {
        story: "Con l'attributo `image-preview`, le immagini caricate mostrano un'anteprima nella lista dei file.",
      },
    },
  },
  args: {
    name: 'upload-image-preview',
    multiple: true,
    accept: 'image/*',
    imagePreview: true,
  },
  render: (params) => html`${renderComponent({ ...params })}`,
};

export const Galleria: Story = {
  ...meta,
  name: 'Variante galleria',
  parameters: {
    docs: {
      description: {
        story:
          "Con `variant=\"gallery\"` il componente visualizza le foto caricate in una griglia a parete (pictures wall), ideale per selezioni di immagini multiple.",
      },
    },
  },
  args: {
    name: 'upload-gallery',
    variant: 'gallery',
    multiple: true,
    accept: 'image/*',
  },
  render: (params) => html`${renderComponent({ ...params })}`,
};

export const TestoDiSupporto: Story = {
  ...meta,
  name: 'Testo di supporto',
  args: {
    name: 'upload-support',
    supportText: 'Formati accettati: PDF, JPG, PNG. Dimensione massima: 5 MB.',
  },
  render: (params) => html`${renderComponent({ ...params })}`,
};

export const Richiesto: Story = {
  ...meta,
  name: 'Obbligatorio',
  parameters: {
    docs: {
      description: {
        story:
          "Con l'attributo `required`, il campo è obbligatorio. Il messaggio di errore viene mostrato alla sottomissione del form se nessun file è stato selezionato.",
      },
    },
  },
  args: {
    name: 'upload-required',
    required: true,
  },
  render: (params) => html`
    <form
      id="form-upload-required"
      @submit="${(e: Event) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        // eslint-disable-next-line no-console
        console.log('Form inviato:', [...formData.entries()]);
      }}"
    >
      ${renderComponent({ ...params })}
      <it-button type="submit" variant="primary" style="margin-top: 1rem;">Invia</it-button>
    </form>
  `,
};

export const Disabilitato: Story = {
  ...meta,
  name: 'Stato disabilitato',
  args: {
    name: 'upload-disabled',
    disabled: true,
  },
  render: (params) => html`${renderComponent({ ...params })}`,
};

export const MetodiEPropPubblici: Story = {
  ...StoryFormControlMethodAndProps({
    componentName: 'it-upload',
    otherProps: `
|\`files\`| Array dei file caricati (\`UploadFile[]\`). |`,
    otherMethods: `
|\`addFile(file)\`| Aggiunge programmaticamente un file con stato 'loading'. Ritorna l'id generato. | file: File |
|\`setFileStatus(id, status, progress?)\`| Aggiorna lo stato (e il progresso opzionale 0-100) di un file. | id: string, status: 'loading' o 'success' o 'error', progress?: number |
|\`removeFile(id)\`| Rimuove un file dalla lista per id. | id: string |`,
    otherEvents: `
|\`it-upload-add\`| Emesso quando l'utente seleziona nuovi file. \`detail: { files: File[] }\` |
|\`it-upload-remove\`| Emesso quando un file viene rimosso. \`detail: { id: string, name: string }\` |
|\`it-change\`| Emesso ad ogni modifica della lista file. \`detail: { files: File[] }\` |`,
  }),
  tags: ['!dev'],
};

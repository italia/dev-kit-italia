import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html, nothing } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { type CalloutVariant, CALLOUT_VARIANTS } from '../src/types.ts';
import '@italia/callout';
import '@italia/icon';

interface CalloutProps {
  variant: CalloutVariant;
  highlight: boolean;
  more: boolean;
}

const renderComponent = ({
  variant,
  highlight = false,
  more = false,
  icon = '',
  title = 'Titolo callout',
  content = 'Maecenas vulputate ante dictum vestibulum volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non augue non purus vestibulum varius.',
  moreContent = '',
}) => html`
  <it-callout variant="${ifDefined(variant)}" ?highlight="${highlight}" ?more="${more}">
    ${icon ? html`<it-icon slot="icon" name="${icon}" size="md"></it-icon>` : nothing}
    <span slot="title">${title}</span>
    ${content ? html`<p>${content}</p>` : ''} ${moreContent ? html`<div slot="more-content">${moreContent}</div>` : ''}
  </it-callout>
`;

const meta = {
  title: 'Componenti/Callout',
  tags: ['autodocs'],
  component: 'it-callout',
  args: {
    variant: '',
    highlight: false,
    more: false,
  },
  argTypes: {
    variant: {
      control: 'select',
      description: 'Variante di colore del callout',
      options: CALLOUT_VARIANTS,
    },
    highlight: {
      control: 'boolean',
      description: 'Applicare lo stile highlight (bordo solo a sinistra)',
      table: { defaultValue: { summary: 'false' } },
    },
    more: {
      control: 'boolean',
      description: 'Applicare lo stile more per contenuti estesi',
      table: { defaultValue: { summary: 'false' } },
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
<Description>Componente per evidenziare contenuti testuali.</Description>

I callout possono essere utilizzati per evidenziare alcune parti del testo che richiedono particolare attenzione. Possono contenere messaggi di errore, avvertimento, suggerimenti, ecc.

Per indicazioni su "Come e Quando usarlo" si fa riferimento alla [guida del design-system](https://designers.italia.it/design-system/componenti/callout/).
`,
      },
    },
  },
} satisfies Meta<CalloutProps>;

export default meta;
type Story = StoryObj<CalloutProps>;

export const EsempioInterattivo: Story = {
  name: 'Esempio interattivo',
  tags: ['!autodocs', '!dev'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
  render: (params) => renderComponent({ ...params, icon: 'it-info-circle' }),
};

export const CalloutBase: Story = {
  parameters: {
    docs: {
      description: {
        story: `
Il callout base è costituito da un web component \`<it-callout>\` che genera la struttura HTML necessaria. È possibile aggiungere un titolo utilizzando lo slot \`title\` e il contenuto principale utilizzando lo slot di default.

Al titolo può essere aggiunta un'icona utilizzando lo slot \`icon\`. L'icona viene automaticamente colorata in base alla proprietà \`variant\` del callout, eliminando la necessità di specificare manualmente l'attributo \`color\`.

#### Accessibilità

Nel caso l'icona comunicasse visivamente contenuti non disponibili nel testo (ad esempio un allarme o una conferma) questa andrà affiancata da un testo riservato agli screen reader: \`<span class="visually-hidden">Testo alternativo</span>\`
`,
      },
    },
  },
  render: (params) => html` <div class="row">${renderComponent({ ...params, icon: 'it-info-circle' })}</div> `,
};

export const CalloutPrimario: Story = {
  parameters: {
    docs: {
      description: {
        story: `
Utilizzare la proprietà \`variant="primary"\` per applicare il colore primario agli elementi grafici del callout. È consigliato per dare un evidenza particolare al componente nel contesto della pagina.
`,
      },
    },
  },
  render: () => html`
    <div class="row">
      ${renderComponent({
        variant: 'primary',
        highlight: false,
        more: false,
        title: 'Note a riguardo',
        icon: 'it-info-circle',
        // @ts-ignore
        content: html`<p>
          Maecenas at erat id <strong>sem interdum efficitur eu sed nunc.</strong> Mauris sit amet erat eget augue
          molestie malesuada ut sed ex. In sed dignissim elit. Donec efficitur, sem eget vestibulum auctor, sem erat
          interdum magna, eu commodo odio mauris semper dolor.
        </p>`,
      })}
    </div>
  `,
};

export const CalloutSuccess: Story = {
  parameters: {
    docs: {
      description: {
        story: `
Utilizzare la proprietà \`variant="success"\` per indicare una procedura andata a buon fine.
`,
      },
    },
  },
  render: () => html`
    <div class="row">
      ${renderComponent({
        variant: 'success',
        highlight: false,
        more: false,
        title: 'Titolo di conferma',
        icon: 'it-check-circle',
        // @ts-ignore
        content: html`<p>
          Maecenas at erat id <strong>sem interdum efficitur eu sed nunc.</strong> Mauris sit amet erat eget augue
          molestie malesuada ut sed ex. In sed dignissim elit. Donec efficitur, sem eget vestibulum auctor, sem erat
          interdum magna, eu commodo odio mauris semper dolor.
        </p>`,
      })}
    </div>
  `,
};

export const CalloutWarning: Story = {
  parameters: {
    docs: {
      description: {
        story: `
Utilizzare la proprietà \`variant="warning"\` per indicare una procedura o testo che richiede l'attenzione dell'utente.
`,
      },
    },
  },
  render: () => html`
    <div class="row">
      ${renderComponent({
        variant: 'warning',
        highlight: false,
        more: false,
        title: 'Titolo di attenzione',
        icon: 'it-warning-circle',
        // @ts-ignore
        content: html`<p>
          Maecenas at erat id <strong>sem interdum efficitur eu sed nunc.</strong> Mauris sit amet erat eget augue
          molestie malesuada ut sed ex. In sed dignissim elit. Donec efficitur, sem eget vestibulum auctor, sem erat
          interdum magna, eu commodo odio mauris semper dolor.
        </p>`,
      })}
    </div>
  `,
};

export const CalloutDanger: Story = {
  parameters: {
    docs: {
      description: {
        story: `
Utilizzare la proprietà \`variant="danger"\` per indicare un errore o una procedura pericolosa o non consentita.
`,
      },
    },
  },
  render: () => html`
    <div class="row">
      ${renderComponent({
        variant: 'danger',
        highlight: false,
        more: false,
        title: 'Titolo di allerta',
        icon: 'it-close-circle',
        // @ts-ignore
        content: html`<p>
          Maecenas at erat id <strong>sem interdum efficitur eu sed nunc.</strong> Mauris sit amet erat eget augue
          molestie malesuada ut sed ex. In sed dignissim elit. Donec efficitur, sem eget vestibulum auctor, sem erat
          interdum magna, eu commodo odio mauris semper dolor.
        </p>`,
      })}
    </div>
  `,
};

export const HighlightBase: Story = {
  parameters: {
    docs: {
      description: {
        story: `
Utilizzando la proprietà \`highlight\` si ottiene una differente versione del callout, con bordo solo sul lato sinistro.
`,
      },
    },
  },
  render: () => html`
    <div class="row">
      ${renderComponent({
        variant: '',
        highlight: true,
        more: false,
        title: 'Titolo callout',
        icon: '',
        // @ts-ignore
        content: html`<p>
          Maecenas at erat id <strong>sem interdum efficitur eu sed nunc.</strong> Mauris sit amet erat eget augue
          molestie malesuada ut sed ex. In sed dignissim elit. Donec efficitur, sem eget vestibulum auctor, sem erat
          interdum magna, eu commodo odio mauris semper dolor.
        </p>`,
      })}
    </div>
  `,
};

export const HighlightPrimario: Story = {
  parameters: {
    docs: {
      description: {
        story: `
Callout highlight con variante primaria.
`,
      },
    },
  },
  render: () => html`
    <div class="row">
      ${renderComponent({
        variant: 'primary',
        highlight: true,
        more: false,
        title: 'Titolo callout',
        icon: '',
        // @ts-ignore
        content: html`<p>
          Maecenas at erat id <strong>sem interdum efficitur eu sed nunc.</strong> Mauris sit amet erat eget augue
          molestie malesuada ut sed ex. In sed dignissim elit. Donec efficitur, sem eget vestibulum auctor, sem erat
          interdum magna, eu commodo odio mauris semper dolor.
        </p>`,
      })}
    </div>
  `,
};

export const HighlightSuccess: Story = {
  parameters: {
    docs: {
      description: {
        story: `
Callout highlight con variante success.
`,
      },
    },
  },
  render: () => html`
    <div class="row">
      ${renderComponent({
        variant: 'success',
        highlight: true,
        more: false,
        title: 'Titolo di conferma',
        icon: 'it-check-circle',
        // @ts-ignore
        content: html`<p>
          Maecenas at erat id <strong>sem interdum efficitur eu sed nunc.</strong> Mauris sit amet erat eget augue
          molestie malesuada ut sed ex. In sed dignissim elit. Donec efficitur, sem eget vestibulum auctor, sem erat
          interdum magna, eu commodo odio mauris semper dolor.
        </p>`,
      })}
    </div>
  `,
};

export const HighlightWarning: Story = {
  parameters: {
    docs: {
      description: {
        story: `
Callout highlight con variante warning.
`,
      },
    },
  },
  render: () => html`
    <div class="row">
      ${renderComponent({
        variant: 'warning',
        highlight: true,
        more: false,
        title: 'Titolo di attenzione',
        icon: 'it-warning-circle',
        // @ts-ignore
        content: html`<p>
          Maecenas at erat id <strong>sem interdum efficitur eu sed nunc.</strong> Mauris sit amet erat eget augue
          molestie malesuada ut sed ex. In sed dignissim elit. Donec efficitur, sem eget vestibulum auctor, sem erat
          interdum magna, eu commodo odio mauris semper dolor.
        </p>`,
      })}
    </div>
  `,
};

export const HighlightDanger: Story = {
  parameters: {
    docs: {
      description: {
        story: `
Callout highlight con variante danger.
`,
      },
    },
  },
  render: () => html`
    <div class="row">
      ${renderComponent({
        variant: 'danger',
        highlight: true,
        more: false,
        title: 'Titolo di allerta',
        icon: 'it-close-circle',
        // @ts-ignore
        content: html`<p>
          Maecenas at erat id <strong>sem interdum efficitur eu sed nunc.</strong> Mauris sit amet erat eget augue
          molestie malesuada ut sed ex. In sed dignissim elit. Donec efficitur, sem eget vestibulum auctor, sem erat
          interdum magna, eu commodo odio mauris semper dolor.
        </p>`,
      })}
    </div>
  `,
};

export const CalloutApprofondimento: Story = {
  parameters: {
    docs: {
      description: {
        story: `
Il callout di tipo approfondimento, ottenibile utilizzando la proprietà \`more\`, ha un aspetto radicalmente differente dagli altri stili disponibili ed è indicato per testi più estesi.

Come da esempio, è possibile aggiungere ulteriore testo all'interno di un Collapse standard presente al fondo del contenuto utilizzando lo slot \`more-content\`.

Il pulsante di controllo del collapse può essere affiancato da un link per download di PDF o altri tipi di documento, con relativa icona.
`,
      },
    },
  },
  render: () => html`
    <div class="row">
      ${renderComponent({
        variant: '',
        highlight: false,
        more: true,
        title: 'Approfondimento',
        icon: 'it-info-circle',
        // @ts-ignore
        content: html`
          <p>
            Quisque suscipit interdum augue non volutpat. Cras tristique arcu tortor. Mauris eu magna nibh. Curabitur
            malesuada neque in lectus sagittis accumsan. In vitae justo eros. Maecenas pellentesque lacinia ipsum vitae
            rhoncus. Vestibulum pretium tempor turpis, nec gravida eros viverra in. Proin dictum nibh ut semper
            tristique.
          </p>
          <p>
            Maecenas at erat id <strong>sem interdum efficitur eu sed nunc.</strong> Mauris sit amet erat eget augue
            molestie malesuada ut sed ex. In sed dignissim elit. Donec efficitur, sem eget vestibulum auctor, sem erat
            interdum magna, eu commodo odio mauris semper dolor.
          </p>
          <p>
            Maecenas vulputate ante dictum <a href="#">vestibulum volutpat</a>. Lorem ipsum dolor sit amet,
            <strong>consectetur adipiscing elit.</strong> Aenean non augue non purus vestibulum varius. Maecenas
            ullamcorper tincidunt nulla quis laoreet.
          </p>
        `,
        // moreContent: `
        //     <div class="collapse-header d-flex align-items-center justify-content-between">
        //       <button class="btn btn-outline-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
        //         Leggi tutto
        //       </button>
        //       <a href="#" class="btn btn-primary ms-2">
        //         <it-icon name="it-download" size="xs" color="white"></it-icon>
        //         PDF Download
        //       </a>
        //     </div>
        //     <div class="collapse" id="collapseExample">
        //       <div class="collapse-content">
        //         <p>Contenuto aggiuntivo che viene mostrato quando il collapse è espanso. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        //       </div>
        //     </div>
        //   `,
      })}
    </div>
  `,
};

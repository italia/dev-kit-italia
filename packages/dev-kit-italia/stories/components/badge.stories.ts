import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

const meta = {
  title: 'Componenti/Badge',
  tags: ['documentation', 'new'],

  //   parameters: {
  //     docs: {
  //       description: {
  //         component: `
  // <Description>Questo elemento è utile per piccoli contatori ed etichette.</Description>

  // La dimensione e il carattere di ogni badge si adattano automaticamente a quelli dell’elemento che lo contiene.
  // `,
  //       },
  //     },
  //   },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Dimensione: Story = {
  ...meta,
  parameters: {
    docs: {
      description: {
        story: `La dimensione e il carattere di ogni badge si adattano automaticamente a quelli dell’elemento che lo contiene.`,
      },
    },
  },
  render: () => html`
    <div class="h1">Titolo di esempio h1<span class="badge badge-secondary">New</span></div>
    <div class="h2">Titolo di esempio h2<span class="badge badge-secondary">New</span></div>
    <div class="h3">Titolo di esempio h3<span class="badge badge-secondary">New</span></div>
    <div class="h4">Titolo di esempio h4<span class="badge badge-secondary">New</span></div>
    <div class="h5">Titolo di esempio h5<span class="badge badge-secondary">New</span></div>
    <div class="h6">Titolo di esempio h6<span class="badge badge-secondary">New</span></div>
  `,
};

export const BottoniELink: Story = {
  ...meta,
  name: 'Bottoni e link',
  parameters: {
    docs: {
      description: {
        story: `I badge possono essere utilizzati come contatori all’interno di link o pulsanti. Per questi casi, si consiglia di utilizzare la classe \`.badge-sm\` che riduce la spaziatura laterale interna.

`,
      },
    },
  },
  render: () => html`
    <it-button variant="primary">
      Notifiche
      <span class="badge badge-sm badge-inverse">4</span>
      <span class="visually-hidden">Messaggi non letti</span>
    </it-button>
  `,
};

export const VariazioniColore: Story = {
  ...meta,
  name: 'Variazioni di colore',
  parameters: {
    docs: {
      description: {
        story: `Aggiungi una delle seguenti classi per modificare l’aspetto di un badge.

<div class="callout callout-success"><div class="callout-inner"><div class="callout-title"><span class="text">Trasmettere significato alle tecnologie assistive</span></div>
<p>
L’uso del colore per aggiungere un significato fornisce solo un’indicazione visiva, che non sarà trasmesso agli utenti di tecnologie assistive – come gli screen reader.
<br/><br/>
Assicurati che le informazioni denotate dal colore siano rese disponibili anche dal contenuto stesso (es.: il testo visibile), o siano incluse attraverso mezzi alternativi, come testo aggiuntivo nascosto con la classe \`.visually-hidden\`.
</p>
</div></div>

Le varianti di colore corrispondono agli stessi status disponibili per il componente \`it-alert\`.
`,
      },
    },
  },
  render: () => html`
    <span class="badge badge-primary">Primary</span>
    <span class="badge badge-secondary">Secondary</span>
    <span class="badge badge-success">Success</span>
    <span class="badge badge-danger">Danger</span>
    <span class="badge badge-warning">Warning</span>
  `,
};

export const Arrotondato: Story = {
  ...meta,
  name: 'Badges arrotondati',
  parameters: {
    docs: {
      description: {
        story: `Per rendere i badge arrotondati puoi usare la classe \`.rounded-pill\`.
`,
      },
    },
  },
  render: () => html`
    <span class="badge rounded-pill badge-primary">Primary</span>
    <span class="badge rounded-pill badge-secondary">Secondary</span>
    <span class="badge rounded-pill badge-success">Success</span>
    <span class="badge rounded-pill badge-danger">Danger</span>
    <span class="badge rounded-pill badge-warning">Warning</span>
  `,
};

export const Link: Story = {
  ...meta,
  parameters: {
    docs: {
      description: {
        story: `Se hai bisogno di trasformare un badge in un link, aggiungi una delle classi contestuali \`.badge-*\` all’elemento . In questo modo, il badge risponderà agli stati hover e focus.
`,
      },
    },
  },
  render: () => html`
    <a href="#" class="badge badge-primary">Primary</a>
    <a href="#" class="badge badge-secondary">Secondary</a>
    <a href="#" class="badge badge-success">Success</a>
    <a href="#" class="badge badge-danger">Danger</a>
    <a href="#" class="badge badge-warning">Warning</a>
  `,
};

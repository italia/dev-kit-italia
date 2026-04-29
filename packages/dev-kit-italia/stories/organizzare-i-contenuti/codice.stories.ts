import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

const meta = {
  title: 'Organizzare i contenuti/Codice',
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const CodiceInline: Story = {
  name: 'Codice inline',
  tags: ['!dev'],
  parameters: {
    docs: {
      source: {
        code: `Per esempio, <code>&lt;section&gt;</code> dovrebbe essere renderizzato come inline.`,
      },
    },
  },
  render: () => html`Per esempio, <code>&lt;section&gt;</code> dovrebbe essere renderizzato come inline.`,
};

export const BlocchiDiCodice: Story = {
  name: 'Blocchi di codice',
  tags: ['!dev'],
  parameters: {
    docs: {
      source: {
        code: `<pre><code>&lt;p&gt;Testo di esempio qui...&lt;/p&gt;
&lt;p&gt;E un'altra linea di testo di esempio qui...&lt;/p&gt;
</code></pre>`,
      },
    },
  },
  render: () => html`<pre><code>&lt;p&gt;Testo di esempio qui...&lt;/p&gt;
&lt;p&gt;E un'altra linea di testo di esempio qui...&lt;/p&gt;
</code></pre>`,
};

export const Variabili: Story = {
  name: 'Variabili',
  tags: ['!dev'],
  parameters: {
    docs: {
      source: {
        code: `<var>y</var> = <var>m</var><var>x</var> + <var>b</var>`,
      },
    },
  },
  render: () => html`<var>y</var> = <var>m</var><var>x</var> + <var>b</var>`,
};

export const InputUtente: Story = {
  name: 'Input utente',
  tags: ['!dev'],
  parameters: {
    docs: {
      source: {
        code: `Per cambiare directory, digitare <kbd>cd</kbd> seguito dal nome della directory.<br>
Per modificare le impostazioni, premi <kbd>ctrl</kbd> + <kbd>i</kbd>.`,
      },
    },
  },
  render: () => html`Per cambiare directory, digitare <kbd>cd</kbd> seguito dal nome della directory.<br>
Per modificare le impostazioni, premi <kbd>ctrl</kbd> + <kbd>i</kbd>.`,
};

export const OutputDiEsempio: Story = {
  name: 'Output di esempio',
  tags: ['!dev'],
  parameters: {
    docs: {
      source: {
        code: `<samp>Questo testo è pensato per essere trattato come output di esempio di un programma per computer.</samp>`,
      },
    },
  },
  render: () => html`<samp>Questo testo è pensato per essere trattato come output di esempio di un programma per computer.</samp>`,
};

import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html, type TemplateResult } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

interface SkiplinksProps {
  ['it-aria-label']: string | undefined;
  slot?: string | TemplateResult;
}

// Renderizza il wc it-button di default
const renderComponent = (params: SkiplinksProps, defaultSlot: string | TemplateResult = '') => {
  const slot = params.slot ?? defaultSlot;
  return html`<it-skiplinks it-aria-label=${ifDefined(params['it-aria-label'])}> ${slot} </it-skiplinks>`;
};

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Componenti/Skiplinks',
  tags: ['new'],
  component: 'it-skiplinks',
  args: {
    'it-aria-label': 'Aria label',
  },
  argTypes: {
    'it-aria-label': {
      control: 'text',
      description: 'Testo aria-label del wrapper degli skiplinks.',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
<Description>Gli skiplinks sono scorciatoie di navigazione che consentono agli utenti di andare direttamente ai contenuti principali della pagina, soprattutto se questa è particolarmente complessa da navigare.</Description>

Questo componente permette a chi naviga sequenzialmente i contenuti di accedere a tutti i contenuti principali della pagina in modo più semplice. È particolarmente utile per chi usa la tastiera o tecnologie assistive come i lettori di schermo.

Deve essere il primo contenuto della pagina. Se è presente l’elemento \`<header>\` è raccomandato integrarlo come primo suo elemento figlio, così da includerlo sempre in un landmark di pagina.

Per navigare tra gli elementi puoi usare il tasto: **TAB** (tabulazione).


<div class="callout callout-success"><div class="callout-inner"><div class="callout-title"><span class="text">Accessibilità</span></div>
<p>
Nel caso in cui il numero di link sia superiore a 2, è necessario passare al componente \`it-skiplinks\` l'attributo \`it-aria-label\` dedicato che ne spieghi l’uso. In questo caso infatti verrà generato un elemento \`<nav>\` a cui verrà applicato l'attributo \`aria-label\` per migliorarne l'accessibilità.
</p></div></div>


Nell’esempio che segue, implementato per il sito Designers Italia, sono inseriti due collegamenti che è utile approfondire:

- un salto ad un *modulo per chiedere alle persone come stanno valutando l’esperienza d’uso* della pagina. Il testo dello skiplink anticipa già la domanda;
- un *collegamento diretto alla Dichiarazione di accessibilità disponibile sul form AgID*, che accompagnerà il necessario link presente anche nel piede di pagina, per permettere a chi naviga con strumenti assistivi di trovarla facilmente senza dover scansionare tutti i contennuti.

È raccomandato di limitare il numero di elementi scorciatoia per evitare che gli utenti debbano saltare le scorciatoie stesse.

`,
      },
    },
  },
} satisfies Meta<SkiplinksProps>;

export default meta;
type Story = StoryObj<SkiplinksProps>;

export const EsempioInterattivo: Story = {
  ...meta,
  name: 'Esempio',
  args: {
    'it-aria-label': 'Vai a:',
  },
  parameters: {
    docs: {
      className: 'my-wide-story',
      canvas: {
        sourceState: 'shown',
      },
    },
  },

  render: (params) =>
    html` ${renderComponent({
      ...params,
      slot: html`<a href="#menu">Vai al menu</a>
        <a href="#main-content">Vai al contenuto principale</a>
        <a href="#satisfaction">Questa pagina ti è stata utile?</a>
        <a href="#footer">Vai al piè di pagina</a>
        <a href="https://form.agid.gov.it/view/xyz">Dichiarazione di accessibilità (link esterno su sito AgID</a> `,
    })}`,
};

export const PochiLink: Story = {
  ...meta,
  name: 'Numero ridotto di link',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `
Quando sono presenti uno o due link, il componente evita di generare un elemento \`<nav>\` al fine di ridurre la complessità di lettura per gli screen reader.
`,
      },
    },
  },
  render: (params) =>
    html` ${renderComponent({
      ...params,
      // eslint-disable-next-line no-useless-computed-key
      ['it-aria-label']: undefined,
      slot: html`<a href="#menu">Vai al menu</a>
        <a href="#main-content">Vai al contenuto principale</a> `,
    })}`,
};

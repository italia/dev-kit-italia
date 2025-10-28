import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html, type TemplateResult } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

import '@italia/skiplinks';

interface SkiplinksProps {
  ['it-aria-label']: string;
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
  tags: ['autodocs'],
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
<Description>Gli Skiplinks sono scorciatoie di navigazione che consentono agli utenti di andare direttamente ai contenuti principali della pagina, soprattutto se la pagina è particolarmente complessa.</Description>

È un componente che permette a persone che navigano sequenzialmente i contenuti di aver accesso più facile a tutti i contenuti principali della pagina. È particolarmente utile per coloro che per navigare usano la tastiera o tecnologie assistive come i lettori di schermo.

Deve essere il primo contenuto che si incontra nella pagina. Se è presente l’elemento \`<header>\` suggeriamo di integrarlo come primo suo elemento figlio, in modo da comprenderlo in ogni caso in un landmark di pagina.

Per navigare tra gli elementi puoi usare il tasto: **TAB** (tabulazione).


<div class="callout callout-success"><div class="callout-inner"><div class="callout-title"><span class="text">Accessibilità</span></div>
<p>
È necessario passare al componente \`it-skiplinks\` l'attributo \`it-aria-label\` dedicato che ne spieghi l’uso.
</p></div></div>


Nell’esempio che segue, implementato per il sito Designers Italia, sono inseriti due collegamenti che è utile approfondire:

- un salto ad un *modulo per chiedere alle persone come stanno valutando l’esperienza d’uso* della pagina. Il testo dello skiplink anticipa già la domanda;
- un *collegamento diretto alla Dichiarazione di accessibilità disponibile sul form AgID*, che accompagnerà il necessario link presente anche nel piede di pagina, per permettere a chi naviga con strumenti assistivi di trovarla facilmente senza dover scansionare tutti i contennuti.

Consigliamo di non eccedere con il numero di elementi scorciatoia, altrimenti emergerebbe il bisogno di poter saltare le stesse scorciatoie.
`,
      },
    },
  },
} satisfies Meta<SkiplinksProps>;

export default meta;
type Story = StoryObj<SkiplinksProps>;

export const EsempioInterattivo: Story = {
  ...meta,
  name: 'Esempio interattivo',
  args: {
    'it-aria-label': 'Vai a:',
  },
  tags: ['!autodocs', '!dev'],
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

export const ComeUsarlo: Story = {
  name: 'Come visualizzare gli skiplinks su MacOS',
  tags: ['!dev'],
  render: () => html`<div class="hide-preview"></div>`,
  parameters: {
    viewMode: 'docs', // assicura che si apra la tab Docs anziché Canvas
    docs: {
      description: {
        story: `
<h4>Chrome</h4>
Per attivare la funzionalità si digita da tastiera il tasto: **TAB**.

<h4>Safari</h4>
Per attivare la navigazione via **TAB** è necessario:

1. Aprire il menu Safari > Preferenze
2. Cliccare sulla tab Avanzate
3. Selezionare “Premi tabulatore per evidenziare tutti gli elementi della pagina web”.

Alternativamente è possibile navigare gli elementi usando *opzione+TAB*.

<h4>Firefox</h4>
Le impostazioni di default di macOS non consentono la navigazione di tutti gli elementi interattivi di un sito con l’uso del pulsante TAB.
Per attivare questa modalità è necessario modificare le preferenze di sistema come segue:

1. Aprire il Menu Apple > Preferenze di Sistema, quindi fare clic su Tastiera.
2. Fare clic su Abbreviazioni.
3. Nella parte inferiore della finestra delle preferenze, selezionare “Usa la navigazione da tastiera per spostare la selezione tra i controlli”.

Una volta selezionata questa opzione gli skiplinks saranno attivabili su Firefox con il pulsante **TAB**.

Vedi anche la [guida ufficiale di Apple](https://support.apple.com/it-it/HT204434).
`,
      },
    },
  },
};

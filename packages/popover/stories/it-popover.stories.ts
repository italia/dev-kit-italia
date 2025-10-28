import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import '@italia/button';
import '@italia/popover';
import '@italia/icon';

type PopoverProps = {
  placement?:
    | 'top'
    | 'right'
    | 'bottom'
    | 'left'
    | 'top-start'
    | 'top-end'
    | 'right-start'
    | 'right-end'
    | 'bottom-start'
    | 'bottom-end'
    | 'left-start'
    | 'left-end';
  open?: boolean;
};

type Story = StoryObj<PopoverProps>;

const containerStyle = 'height:400px;display:flex;align-items:flex-start;';

const meta = {
  title: 'Componenti/Popover',
  component: 'it-popover',
  tags: ['autodocs'],
  args: {
    placement: 'bottom-start',
  },
  argTypes: {
    placement: {
      control: 'select',
      options: [
        'top',
        'right',
        'bottom',
        'left',
        'top-start',
        'top-end',
        'right-start',
        'right-end',
        'bottom-start',
        'bottom-end',
        'left-start',
        'left-end',
      ],
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
<Description>Documentazione ed esempi per aggiungere popover.</Description>

Il componente \`<it-popover>\` permette di visualizzare contenuti in overlay posizionati rispetto a un elemento trigger.
Utilizza [Floating UI](https://floating-ui.com/) per il posizionamento dinamico e supporta diverse posizioni tramite l'attributo \`placement\`.

Il componente implementa le best practices UX per i popover come [Polaris (Shopify)](https://polaris.shopify.com/components/overlays/popover), [Apple HIG](https://developer.apple.com/design/human-interface-guidelines/popovers) e [Material Design](https://m3.material.io/).

Il componente gestisce automaticamente il **click outside** e il tasto <kbd>Esc</kbd> per chiudere il popover (light dismiss pattern), perché questa è una caratteristica intrinseca dei popover.
Eventuali altri comportamenti devono essere implementati dall’utilizzatore in base al contesto specifico.

<div class="callout callout-success"><div class="callout-inner"><div class="callout-title"><span class="text">Accessibilità</span></div>
<p>Il componente gestisce automaticamente gli attributi ARIA necessari come <code>aria-haspopup</code> e <code>aria-expanded</code>.</p>
<p>Il popover si chiude automaticamente quando si fa clic all'esterno o si preme il tasto <kbd>Esc</kbd>.</p>
<p>È possibile controllare il popover anche tramite i metodi <code>openPopover()</code>, <code>closePopover()</code> e <code>toggle()</code>.</p>
<p>Il comportamento del focus non è gestito dal componente stesso, ma è lasciato all’utilizzatore. Questa scelta nasce dalla consapevolezza che solo l’utilizzatore conosce in dettaglio il contenuto del popover e il contesto in cui viene utilizzato, e può quindi determinare quale elemento debba ricevere il focus e quando farlo.

Delegare questa responsabilità garantisce maggiore flessibilità e coerenza funzionale, oltre a permettere una gestione del focus più aderente alle esigenze specifiche dell’applicazione e degli utenti finali. L’utilizzatore, quindi, dovrà definire esplicitamente nel proprio codice il comportamento del focus, in modo da garantire un’esperienza utente ottimale e accessibile.

Se l’obiettivo è creare un menu con azioni o un dropdown menu, è consigliato utilizzare il componente dedicato **Dropdown**, che gestisce automaticamente il comportamento del focus e altre logiche specifiche di navigazione e accessibilità.</p>
</div></div>

### Differenza tra Popover, Tooltip e Dialog/Modal

Un **popover** è un overlay non-modale che appare vicino a un elemento specifico, fornendo contenuto aggiuntivo contestuale e interattivo.

| Pattern | Modale | Backdrop | Chiusura | Contenuto | Esempi |
|---------|--------|----------|----------|-----------|--------|
| **Tooltip** | No | No | Light (hover out) | Solo testo breve | Descrizione funzione pulsante |
| **Popover** | No | No | Light (click outside) | Ricco e interattivo | Menu, color picker, tour delle funzionalità |
| **Dialog/Modal** | Sì | Sì | Explicit (button) | Complesso, richiede azione | Conferme, alert critici, form |

### Utilizzo

Il popover richiede due slot:
- \`trigger\`: L'elemento che attiva il popover (generalmente un pulsante)
- \`content\`: Il contenuto da visualizzare nel popover
`,
      },
    },
  },
} satisfies Meta<PopoverProps>;

export default meta;

function disabledControls(except?: (keyof (typeof meta)['argTypes'])[]) {
  return Object.keys(meta.argTypes).reduce<Record<string, { table: { disable: true } }>>((acc, key) => {
    if (!except?.includes(key as keyof (typeof meta)['argTypes'])) {
      acc[key] = { table: { disable: true } };
    }
    return acc;
  }, {});
}

export const Base: Story = {
  render: (args) => {
    const handleActionClick = (e: Event, action: string) => {
      e.preventDefault();
      const button = e.target as HTMLElement;
      const popover = button.closest('it-popover') as any;
      popover?.closePopover();
      // eslint-disable-next-line no-alert
      alert(`Azione selezionata: ${action}`);
    };

    return html`
      <it-popover placement=${ifDefined(args.placement)} ?open=${args.open}>
        <it-button slot="trigger" variant="primary">Opzioni utente, clicca per aprire</it-button>
        <div slot="content" class="popover">
          <div class="popover-inner">
            <h4 class="popover-header" style="margin-bottom:0;">Menu azioni</h4>
            <div class="popover-body">
              <div style="display: flex; flex-direction: column; gap: 8px;">
                <p style="min-width: 200px;">
                  Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras.
                </p>
                <a
                  href="#"
                  @click=${(e: Event) => handleActionClick(e, 'Modifica profilo')}
                  style="color: var(--bs-primary); text-decoration: none;"
                >
                  Modifica profilo
                </a>
                <a
                  href="#"
                  @click=${(e: Event) => handleActionClick(e, 'Impostazioni')}
                  style="color: var(--bs-primary); text-decoration: none;"
                >
                  Impostazioni
                </a>
                <a
                  href="#"
                  @click=${(e: Event) => handleActionClick(e, 'Esci')}
                  style="color: var(--bs-danger); text-decoration: none;"
                >
                  Esci
                </a>
              </div>
            </div>
          </div>
        </div>
      </it-popover>
    `;
  },
  decorators: [(Story) => html`<div style=${containerStyle}>${Story()}</div>`],
  parameters: {
    ...meta.parameters,
    docs: {
      source: { excludeDecorators: true },
      canvas: { sourceState: 'shown' },
      description: {
        story:
          'Esempio di popover con menu interattivo. I popover sono ideali per contenuti ricchi con link e azioni multiple.',
      },
    },
  },
  tags: ['!autodocs', '!dev'],
};

export const Direzioni: Story = {
  render: () => {
    const handleLinkClick = (e: Event) => {
      e.preventDefault();
      const link = e.target as HTMLElement;
      const popover = link.closest('it-popover') as any;
      popover?.closePopover();
      console.log('Link cliccato'); // eslint-disable-line no-console
    };

    return html`
        <it-popover placement="bottom-start">
          <it-button slot="trigger" variant="primary">Giù</it-button>
          <div slot="content" class="popover">
            <div class="popover-inner">
              <h4 class="popover-header" style="margin-bottom:0;">Azioni rapide</h4>
              <div class="popover-body">
               <p style="min-width: 200px;"> Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras.</p>
                <a href="#" @click=${handleLinkClick} style="color: var(--bs-primary); display: block;"> Copia link </a>
              </div>
            </div>
          </div>
        </it-popover>

        <it-popover placement="left">
          <it-button slot="trigger" variant="primary">Sinistra</it-button>
          <div slot="content" class="popover">
            <div class="popover-inner">
              <h4 class="popover-header" style="margin-bottom:0;">Azioni rapide</h4>
              <div class="popover-body">
               <p style="min-width: 200px;"> Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras.</p>
                <a href="#" @click=${handleLinkClick} style="color: var(--bs-primary); display: block;"> Condividi </a>
              </div>
            </div>
          </div>
        </it-popover>

        <it-popover placement="top-start">
          <it-button slot="trigger" variant="primary">Su</it-button>
          <div slot="content" class="popover">
            <div class="popover-inner">
              <h4 class="popover-header" style="margin-bottom:0;">Azioni rapide</h4>
              <div class="popover-body">
               <p style="min-width: 200px;"> Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras.</p>
                <a href="#" @click=${handleLinkClick} style="color: var(--bs-primary); display: block;"> ⬇️ Scarica </a>
              </div>
            </div>
          </div>
        </it-popover>

        <it-popover placement="right">
          <it-button slot="trigger" variant="primary">Destra</it-button>
          <div slot="content" class="popover">
            <div class="popover-inner">
              <h4 class="popover-header" style="margin-bottom:0;">Azioni rapide</h4>
              <div class="popover-body" ">
               <p style="min-width: 200px;"> Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras.</p>
                <a href="#" @click=${handleLinkClick} style="color: var(--bs-primary); display: block;">
                  Aggiungi ai preferiti
                </a>
              </div>
            </div>
          </div>
        </it-popover>
    `;
  },
  decorators: [
    (Story) =>
      html`<div style="${containerStyle}width:200px;gap:2rem;flex-wrap:wrap;justify-content:center">${Story()}</div>`,
  ],
  argTypes: { ...disabledControls() },
  parameters: {
    ...meta.parameters,
    docs: {
      source: { excludeDecorators: true },
      description: {
        story: `Per aprire i popover in direzioni diverse,
è possibile utilizzare l'attributo \`placement\` con i valori \`top\`, \`right\`,
\`bottom\`, \`left\`, \`top-start\`, \`top-end\`, \`right-start\`, \`right-end\`,
\`bottom-start\`, \`bottom-end\`, \`left-start\` e \`left-end\`.

I valori \`top\`, \`right\`, \`bottom\` e \`left\` aprono il popover in direzioni standard,
centrate rispetto al trigger,
mentre i valori \`top-start\`, \`top-end\`, \`right-start\`, \`right-end\`,
\`bottom-start\`, \`bottom-end\`, \`left-start\` e \`left-end\` permettono di specificare
la posizione esatta del popover rispetto al trigger`,
      },
    },
  },
};

export const ConIconaELink: Story = {
  name: 'Titolo con icona e link',
  render: () => {
    const handleLinkClick = (e: Event) => {
      e.preventDefault();
      const link = e.target as HTMLElement;
      const popover = link.closest('it-popover') as any;
      popover?.closePopover();
      console.log('Vai al link cliccato'); // eslint-disable-line no-console
    };

    return html`
      <it-popover>
        <it-button slot="trigger" variant="primary">Info documento</it-button>
        <div slot="content" class="popover">
          <div class="popover-inner">
            <h4 class="popover-header" style="margin-bottom:0;">
              <it-icon name="it-info-circle" size="sm" style="margin-right:0.5rem;"></it-icon>
              Informazioni documento
            </h4>
            <div class="popover-body">
              <p style="min-width: 200px;">
                Questo documento contiene informazioni sensibili. Prima di procedere assicurati di avere le
                autorizzazioni necessarie.
                <a href="#" class="popover-inner-link" @click=${handleLinkClick}>Leggi la policy completa</a>
              </p>
            </div>
          </div>
        </div>
      </it-popover>
    `;
  },
  decorators: [(Story) => html`<div style=${containerStyle}>${Story()}</div>`],
  argTypes: { ...disabledControls() },
  parameters: {
    ...meta.parameters,
    docs: {
      source: { excludeDecorators: true },
      description: {
        story:
          "È possibile aggiungere un'icona nel titolo del popover e un link nel contenuto con la classe `.popover-inner-link`.",
      },
    },
  },
};

// export const ElementoDisabilitato: Story = {
//   name: 'Elemento disabilitato',
//   render: () => {
//     const handleClick = (e: Event) => {
//       const span = e.currentTarget as HTMLElement;
//       const popover = span.querySelector('it-popover') as any;
//       popover?.toggle();
//     };
//
//     return html`
//       <span style="display:inline-block;" tabindex="0" @click=${handleClick}>
//         <it-popover placement="top">
//           <it-button slot="trigger" disabled variant="primary">Pulsante disabilitato</it-button>
//           <div slot="content" class="popover">
//             <div class="popover-inner">
//               <h4 class="popover-header" style="margin-bottom:0;">Popover disabilitato</h4>
//               <div class="popover-body">
//                 Questo popover appare su un elemento disabilitato. È necessario usare un elemento contenitore.
//               </div>
//             </div>
//           </div>
//         </it-popover>
//       </span>
//     `;
//   },
//   decorators: [(Story) => html`<div style=${containerStyle}>${Story()}</div>`],
//   argTypes: { ...disabledControls() },
//   parameters: {
//     ...meta.parameters,
//     docs: {
//       source: { excludeDecorators: true },
//       description: {
//         story:
//           'Per attivare un popover su elementi disabilitati, avvolgi il componente in un elemento contenitore (come `<span>` o `<div>`) con `tabindex="0"`.',
//       },
//     },
//   },
// };

export const PopoverSenzaPulsante: Story = {
  name: 'Con trigger personalizzato',
  render: () => {
    const handleActionClick = (e: Event, action: string) => {
      e.preventDefault();
      const link = e.target as HTMLElement;
      const popover = link.closest('it-popover') as any;
      popover?.closePopover();
      console.log(`Azione: ${action}`); // eslint-disable-line no-console
    };

    return html`
      <it-popover>
        <a href="#" slot="trigger" style="text-decoration:underline;color:var(--bs-primary);">
          Trigger personalizzato
        </a>
        <div slot="content" class="popover">
          <div class="popover-inner">
            <h4 class="popover-header" style="margin-bottom:0;">Informazioni sulla privacy</h4>
            <div class="popover-body">
              <div style="display: flex; flex-direction: column; gap: 8px;">
                <a
                  href="#"
                  @click=${(e: Event) => handleActionClick(e, 'Privacy Policy')}
                  style="color: var(--bs-primary); text-decoration: none;"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  @click=${(e: Event) => handleActionClick(e, 'Cookie Policy')}
                  style="color: var(--bs-primary); text-decoration: none;"
                >
                  Cookie Policy
                </a>
                <a
                  href="#"
                  @click=${(e: Event) => handleActionClick(e, 'Gestisci consensi')}
                  style="color: var(--bs-primary); text-decoration: none;"
                >
                  Gestisci consensi
                </a>
              </div>
            </div>
          </div>
        </div>
      </it-popover>
    `;
  },
  decorators: [(Story) => html`<div style=${containerStyle}>${Story()}</div>`],
  argTypes: { ...disabledControls() },
  parameters: {
    ...meta.parameters,
    docs: {
      source: { excludeDecorators: true },
      description: {
        story:
          'Il trigger del popover non deve necessariamente essere un pulsante. Può essere qualsiasi elemento HTML interattivo.',
      },
    },
  },
};

export const PopoverConHover: Story = {
  name: 'Attivazione su hover (sconsigliato)',
  render: () => {
    const handleMouseEnter = (e: Event) => {
      const button = e.target as HTMLElement;
      const popover = button.closest('it-popover') as any;
      popover?.openPopover();
    };

    const handleMouseLeave = (e: Event) => {
      const button = e.target as HTMLElement;
      const popover = button.closest('it-popover') as any;
      popover?.closePopover();
    };

    return html`
      <it-popover>
        <it-button slot="trigger" variant="primary" @mouseenter=${handleMouseEnter} @mouseleave=${handleMouseLeave}>
          Passa il mouse sopra
        </it-button>
        <div slot="content" class="popover">
          <div class="popover-inner">
            <h4 class="popover-header" style="margin-bottom:0;">Esempio tecnico</h4>
            <div class="popover-body">
              <p style="min-width: 200px;">
                Questo è un esempio tecnico di attivazione su hover. Per questo caso d'uso si raccomanda l'utilizzo di
                un componente Tooltip invece di un Popover.
              </p>
            </div>
          </div>
        </div>
      </it-popover>
    `;
  },
  decorators: [(Story) => html`<div style=${containerStyle}>${Story()}</div>`],
  argTypes: { ...disabledControls() },
  parameters: {
    ...meta.parameters,
    docs: {
      source: { excludeDecorators: true },
      description: {
        story: `
**Attenzione**: Questo pattern è tecnicamente possibile ma **sconsigliato** secondo le best practices UI.

#### Linee guida d'uso

Le best practices per componenti overlay distinguono i pattern in base al metodo di attivazione e al tipo di contenuto:

**Pattern raccomandati:**

- **Tooltip** (hover): Testo breve descrittivo, non interattivo, scompare automaticamente
- **Popover** (click): Contenuto ricco e interattivo con link, pulsanti, form, immagini
- **Modal/Dialog** (azione esplicita): Richiede attenzione immediata, blocca interazione con il resto della pagina

L'attivazione su hover è appropriata per tooltip con testo semplice e non interattivo. I popover, progettati per contenuto complesso che richiede interazione, dovrebbero essere attivati tramite azione esplicita dell'utente (click).

#### Implementazione tecnica

Se necessario per casi specifici, è possibile implementare l'attivazione su hover:

\`\`\`javascript
trigger.addEventListener('mouseenter', () => {
  popover.openPopover();
});

trigger.addEventListener('mouseleave', () => {
  popover.closePopover();
});
\`\`\`

**Nota**: Considerare l'utilizzo del componente Tooltip per questo scenario.
`,
      },
    },
  },
};

export const PopoverConFocus: Story = {
  name: 'Attivazione su focus (sconsigliato)',
  render: () => {
    let isOpen = false;
    let popoverElement: any = null;
    let triggerElement: HTMLElement | null = null;

    const checkAndClose = () => {
      const activeEl = document.activeElement;
      const popoverContent = popoverElement?.querySelector('[slot="content"]');

      // Chiudi se il focus non è né sul trigger né dentro il popover
      if (activeEl !== triggerElement && !popoverContent?.contains(activeEl)) {
        if (isOpen) {
          popoverElement?.closePopover();
          isOpen = false;
        }
      }
    };

    const handleFocus = (e: Event) => {
      const button = e.target as HTMLElement;
      triggerElement = button;
      popoverElement = button.closest('it-popover');

      if (!isOpen) {
        popoverElement?.openPopover();
        isOpen = true;
      }
    };

    const handleBlur = () => {
      // Delay per permettere al nuovo elemento di ricevere focus
      setTimeout(checkAndClose, 100);
    };

    const handleContentFocus = () => {
      // Il contenuto ha ricevuto focus, assicurati che sia aperto
      if (!isOpen) {
        popoverElement?.openPopover();
        isOpen = true;
      }
    };

    const handleContentBlur = () => {
      // Delay per permettere al nuovo elemento di ricevere focus
      setTimeout(checkAndClose, 100);
    };

    return html`
      <it-popover>
        <it-button slot="trigger" variant="primary" @focus=${handleFocus} @blur=${handleBlur}>
          Usa Tab per focus
        </it-button>
        <div slot="content" class="popover" @focus=${handleContentFocus} @blur=${handleContentBlur}>
          <div class="popover-inner">
            <h4 class="popover-header" style="margin-bottom:0;">Esempio tecnico</h4>
            <div class="popover-body">
              <p style="min-width: 200px;">
                Questo è un esempio tecnico di attivazione su focus tramite navigazione Tab. Per contenuti informativi
                brevi si raccomanda l'utilizzo di un Tooltip.
              </p>
            </div>
          </div>
        </div>
      </it-popover>
    `;
  },
  decorators: [(Story) => html`<div style=${containerStyle}>${Story()}</div>`],
  argTypes: { ...disabledControls() },
  parameters: {
    ...meta.parameters,
    docs: {
      source: { excludeDecorators: true },
      description: {
        story: `
**Attenzione**: Questo pattern è tecnicamente possibile ma **sconsigliato** per la maggior parte dei casi d'uso.

#### Linee guida d'uso

Le best practices UI per componenti overlay definiscono pattern specifici in base al metodo di attivazione:

**Pattern raccomandati:**

- **Tooltip** (hover): Testo breve descrittivo, non interattivo, scompare automaticamente
- **Popover** (click): Contenuto ricco e interattivo con link, pulsanti, form, immagini
- **Modal/Dialog** (azione esplicita): Richiede attenzione immediata, blocca interazione con il resto della pagina

L'attivazione automatica su focus può creare confusione nella navigazione da tastiera e interferire con tecnologie assistive come screen reader.

#### Implementazione tecnica

L'implementazione richiede gestione dello stato e coordinamento dei blur events con timeout:

\`\`\`javascript
let isOpen = false;
let popoverElement = null;
let triggerElement = null;

const checkAndClose = () => {
  const activeEl = document.activeElement;
  const popoverContent = popoverElement?.querySelector('[slot="content"]');

  // Chiudi se il focus non è né sul trigger né dentro il popover
  if (activeEl !== triggerElement && !popoverContent?.contains(activeEl)) {
    if (isOpen) {
      popoverElement?.closePopover();
      isOpen = false;
    }
  }
};

const handleFocus = (e) => {
  const button = e.target;
  triggerElement = button;
  popoverElement = button.closest('it-popover');

  if (!isOpen) {
    popoverElement?.openPopover();
    isOpen = true;
  }
};

const handleBlur = () => {
  setTimeout(checkAndClose, 100);
};

const handleContentBlur = () => {
  setTimeout(checkAndClose, 100);
};

// Applica i listener
trigger.addEventListener('focus', handleFocus);
trigger.addEventListener('blur', handleBlur);
popoverContent.addEventListener('blur', handleContentBlur);

\`\`\`


**Nota**: Valutare attentamente l'uso di questo pattern e preferire tooltip per contenuti informativi o click per interazioni complesse.
`,
      },
    },
  },
};

export const AttivazioneControllata: Story = {
  name: 'Attivazione controllata',
  tags: ['!dev'],
  render: () => html`
    <it-popover controlled>
      <it-button slot="trigger" variant="primary" id="controlled-trigger"> Popover controllato </it-button>
      <div slot="content" class="popover">
        <div class="popover-inner">
          <div class="popover-body">Questo popover non si aprirà e questo testo non si vedrà.</div>
        </div>
      </div>
    </it-popover>
  `,
  decorators: [(Story) => html`<div style="${containerStyle}height:auto">${Story()}</div>`],
  argTypes: { ...disabledControls() },
  parameters: {
    ...meta.parameters,
    docs: {
      source: { excludeDecorators: true },
      description: {
        story:
          "Impostando l'attributo `controlled`, il popover non gestisce automaticamente l'apertura e la chiusura. L'utilizzatore deve chiamare i metodi `openPopover()`, `closePopover()` o `toggle()` per controllarne lo stato.",
      },
    },
  },
};

export const Eventi: Story = {
  render: () => {
    const handleOpen = (e: CustomEvent) => {
      console.log('Popover aperto', e);
    };

    const handleClose = (e: CustomEvent) => {
      console.log('Popover chiuso', e);
    };

    return html`
      <it-popover @it-popover-open=${handleOpen} @it-popover-close=${handleClose}>
        <it-button slot="trigger" variant="primary">Popover con eventi</it-button>
        <div slot="content" class="popover">
          <div class="popover-inner">
            <h4 class="popover-header" style="margin-bottom:0;">Eventi del Popover</h4>
            <div class="popover-body">Apri e chiudi questo popover per vedere gli eventi nella console.</div>
          </div>
        </div>
      </it-popover>
    `;
  },
  decorators: [(Story) => html`<div style=${containerStyle}>${Story()}</div>`],
  argTypes: { ...disabledControls() },
  parameters: {
    ...meta.parameters,
    docs: {
      source: { excludeDecorators: true },
      description: {
        story:
          'Il componente emette gli eventi `it-popover-open` quando viene aperto e `it-popover-close` quando viene chiuso. Apri la console del browser per vedere i log.',
      },
    },
  },
};

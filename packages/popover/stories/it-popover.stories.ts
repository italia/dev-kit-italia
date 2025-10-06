import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import '@italia/button';
import '@italia/popover';

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

const containerStyle =
  'min-height:400px;display:flex;align-items:center;justify-content:center;min-width:600px;margin:auto;';

const meta = {
  title: 'Componenti/Popover',
  component: 'it-popover',
  tags: ['autodocs'],
  args: {
    placement: 'bottom-start',
    open: false,
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
    open: { control: 'boolean' },
  },
  decorators: [(Story) => html`<div style=${containerStyle}>${Story()}</div>`],
  parameters: {
    docs: {
      description: {
        component: `
<Description>Documentazione ed esempi per aggiungere popover (tooltip informativi) a qualsiasi elemento del tuo sito.</Description>

Il componente \`<it-popover>\` permette di visualizzare contenuti in overlay posizionati rispetto a un elemento trigger.
Utilizza [Floating UI](https://floating-ui.com/) per il posizionamento dinamico e supporta diverse posizioni tramite l'attributo \`placement\`.

## Cos'è un Popover?

Un **popover** è un overlay non-modale che appare vicino a un elemento specifico, fornendo contenuto aggiuntivo contestuale e interattivo.

### Differenza tra Popover, Tooltip e Dialog

| Pattern | Modale | Backdrop | Dismissal | Contenuto | Esempi |
|---------|--------|----------|-----------|-----------|---------|
| **Tooltip** | No | No | Light (hover out) | Solo testo breve | Descrizione funzione pulsante |
| **Popover** | No | No | Light (click outside) | Ricco e interattivo | Menu, date picker, color picker |
| **Dialog/Modal** | Sì | Sì | Explicit (button) | Complesso, richiede azione | Conferme, alert critici, form |

Il componente implementa le best practices UX per i popover secondo le linee guida di design system come [Polaris (Shopify)](https://polaris.shopify.com/components/overlays/popover), [Apple HIG](https://developer.apple.com/design/human-interface-guidelines/popovers) e [Material Design](https://m3.material.io/).

**Flessibilità del pattern di interazione**

I popover, a differenza dei dialog modali, non hanno un pattern di interazione univoco:
- **Click**: Per menu e azioni
- **Hover**: Per preview e rich tooltip
- **Focus**: Per accessibilità da tastiera
- **Programmatico**: Da codice, come risposta ad altre azioni
- **Custom**: Long press, combinazioni keyboard, ecc.

**Casi d'uso diversi richiedono logiche diverse**

- **Date Picker**: Aperto al click, chiuso alla selezione
- **Color Picker**: Aperto al click, aggiornamento real-time
- **Menu contestuale**: Aperto al click/right-click, chiuso alla selezione
- **Info tooltip**: Aperto all'hover, chiuso all'uscita
- **Form popover**: Aperto al focus, chiuso al blur o submit

**Nota**: Il componente gestisce comunque automaticamente il **click outside** per chiudere il popover (light dismiss pattern), perché questa è una caratteristica intrinseca dei popover.

## Utilizzo

Il popover richiede due slot:
- \`trigger\`: L'elemento che attiva il popover (generalmente un pulsante)
- \`content\`: Il contenuto da visualizzare nel popover

L'utente deve aggiungere gli event listener necessari per aprire/chiudere il popover chiamando i metodi \`toggle()\`, \`openPopover()\` o \`closePopover()\`.

\`\`\`html
<it-popover>
  <it-button slot="trigger" id="trigger-btn">Clicca per aprire</it-button>
  <div slot="content" class="popover" tabindex="-1">
    <div class="popover-inner">
      <h3 class="popover-header">Titolo</h3>
      <div class="popover-body">Contenuto del popover</div>
    </div>
  </div>
</it-popover>

<script>
  const popover = document.querySelector('it-popover');
  const trigger = document.getElementById('trigger-btn');

  trigger.addEventListener('click', () => {
    popover.toggle();
  });
</script>
\`\`\`

<div class="callout callout-success"><div class="callout-inner"><div class="callout-title"><span class="text">Accessibilità</span></div>
<p>Il componente gestisce automaticamente gli attributi ARIA necessari come <code>aria-haspopup</code> e <code>aria-expanded</code>.</p>
<p>Il popover si chiude automaticamente quando si fa clic all'esterno.</p>
<p>È possibile controllare il popover anche tramite i metodi <code>openPopover()</code>, <code>closePopover()</code> e <code>toggle()</code>.</p>
</div></div>
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
    const handleClick = (e: Event) => {
      const button = e.target as HTMLElement;
      const popover = button.closest('it-popover') as any;
      popover?.toggle();
    };

    return html`
      <it-popover placement=${ifDefined(args.placement)} ?open=${args.open}>
        <it-button slot="trigger" variant="danger" @click=${handleClick}>
          Clicca per attivare/disattivare il popover
        </it-button>
        <div slot="content" class="popover" tabindex="-1">
          <div class="popover-inner">
            <h3 class="popover-header">Titolo del Popover</h3>
            <div class="popover-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue.
            </div>
          </div>
        </div>
      </it-popover>
    `;
  },
  parameters: {
    ...meta.parameters,
    docs: {
      source: { excludeDecorators: true },
      canvas: { sourceState: 'shown' },
      description: {
        story: 'Esempio base di popover con titolo e contenuto. Clicca sul pulsante per aprire/chiudere il popover.',
      },
    },
  },
  tags: ['!autodocs', '!dev'],
};

export const Posizione: Story = {
  name: 'Posizioni',
  render: () => {
    const handleClick = (e: Event) => {
      const button = e.target as HTMLElement;
      const popover = button.closest('it-popover') as any;
      popover?.toggle();
    };

    return html`
      <div style="display:flex;gap:1rem;flex-wrap:wrap;">
        <it-popover placement="top">
          <it-button slot="trigger" variant="primary" @click=${handleClick}>Popover in alto</it-button>
          <div slot="content" class="popover" tabindex="-1">
            <div class="popover-inner">
              <h3 class="popover-header">Popover top</h3>
              <div class="popover-body">Questo popover viene visualizzato sopra l'elemento trigger.</div>
            </div>
          </div>
        </it-popover>

        <it-popover placement="right">
          <it-button slot="trigger" variant="primary" @click=${handleClick}>Popover a destra</it-button>
          <div slot="content" class="popover" tabindex="-1">
            <div class="popover-inner">
              <h3 class="popover-header">Popover right</h3>
              <div class="popover-body">Questo popover viene visualizzato a destra dell'elemento trigger.</div>
            </div>
          </div>
        </it-popover>

        <it-popover placement="bottom">
          <it-button slot="trigger" variant="primary" @click=${handleClick}>Popover in basso</it-button>
          <div slot="content" class="popover" tabindex="-1">
            <div class="popover-inner">
              <h3 class="popover-header">Popover bottom</h3>
              <div class="popover-body">Questo popover viene visualizzato sotto l'elemento trigger.</div>
            </div>
          </div>
        </it-popover>

        <it-popover placement="left">
          <it-button slot="trigger" variant="primary" @click=${handleClick}>Popover a sinistra</it-button>
          <div slot="content" class="popover" tabindex="-1">
            <div class="popover-inner">
              <h3 class="popover-header">Popover left</h3>
              <div class="popover-body">Questo popover viene visualizzato a sinistra dell'elemento trigger.</div>
            </div>
          </div>
        </it-popover>
      </div>
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
          'Sono disponibili quattro posizioni principali: `top`, `right`, `bottom` e `left`. Il componente gestisce automaticamente il posizionamento se lo spazio è insufficiente.',
      },
    },
  },
};

export const ConIconaELink: Story = {
  name: 'Titolo con icona e link',
  render: () => {
    const handleClick = (e: Event) => {
      const button = e.target as HTMLElement;
      const popover = button.closest('it-popover') as any;
      popover?.toggle();
    };

    return html`
      <it-popover placement="top">
        <it-button slot="trigger" variant="primary" @click=${handleClick}>Popover con icona e link</it-button>
        <div slot="content" class="popover" tabindex="-1">
          <div class="popover-inner">
            <h3 class="popover-header">
              <it-icon name="it-info-circle" size="sm" style="margin-right:0.5rem;"></it-icon>
              Titolo del Popover
            </h3>
            <div class="popover-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue. Vestibulum ante ipsum
              primis in faucibus orci luctus.
              <a href="#" class="popover-inner-link">Vai al link</a>
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
//           <div slot="content" class="popover" tabindex="-1">
//             <div class="popover-inner">
//               <h3 class="popover-header">Popover disabilitato</h3>
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

export const Eventi: Story = {
  name: 'Eventi',
  render: () => {
    const handleClick = (e: Event) => {
      const button = e.target as HTMLElement;
      const popover = button.closest('it-popover') as any;
      popover?.toggle();
    };

    const handleOpen = (e: CustomEvent) => {
      console.log('Popover aperto', e);
      const container = document.getElementById('event-log');
      if (container) {
        const message = document.createElement('div');
        message.textContent = `✅ Evento: it-popover-open - ${new Date().toLocaleTimeString()}`;
        message.style.cssText =
          'padding:0.5rem;background:#e7f5eb;border-left:3px solid #0bd187;margin-bottom:0.25rem;';
        container.prepend(message);
      }
    };

    const handleClose = (e: CustomEvent) => {
      console.log('Popover chiuso', e);
      const container = document.getElementById('event-log');
      if (container) {
        const message = document.createElement('div');
        message.textContent = `❌ Evento: it-popover-close - ${new Date().toLocaleTimeString()}`;
        message.style.cssText =
          'padding:0.5rem;background:#fde7ea;border-left:3px solid #d9364f;margin-bottom:0.25rem;';
        container.prepend(message);
      }
    };

    return html`
      <div style="display:flex;flex-direction:column;gap:1rem;align-items:center;">
        <it-popover placement="bottom" @it-popover-open=${handleOpen} @it-popover-close=${handleClose}>
          <it-button slot="trigger" variant="primary" @click=${handleClick}>Popover con eventi</it-button>
          <div slot="content" class="popover" tabindex="-1">
            <div class="popover-inner">
              <h3 class="popover-header">Eventi del Popover</h3>
              <div class="popover-body">
                Apri e chiudi questo popover per vedere gli eventi nella console e nel log sottostante.
              </div>
            </div>
          </div>
        </it-popover>

        <div
          id="event-log"
          style="width:100%;max-width:600px;padding:1rem;background:#f5f5f5;border-radius:4px;min-height:100px;max-height:200px;overflow-y:auto;"
        >
          <strong>Log eventi:</strong>
        </div>
      </div>
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

export const PopoverSenzaPulsante: Story = {
  name: 'Con trigger personalizzato',
  render: () => {
    const handleClick = (e: Event) => {
      e.preventDefault();
      const link = e.target as HTMLElement;
      const popover = link.closest('it-popover') as any;
      popover?.toggle();
    };

    return html`
      <it-popover placement="top">
        <a href="#" slot="trigger" style="text-decoration:underline;" @click=${handleClick}> Clicca questo link </a>
        <div slot="content" class="popover" tabindex="-1">
          <div class="popover-inner">
            <h3 class="popover-header">Trigger personalizzato</h3>
            <div class="popover-body">
              Il popover può essere attivato da qualsiasi elemento HTML, non solo da pulsanti. In questo caso è un link.
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
  name: 'Attivazione su hover',
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
      <it-popover placement="top">
        <it-button slot="trigger" variant="primary" @mouseenter=${handleMouseEnter} @mouseleave=${handleMouseLeave}>
          Passa il mouse sopra
        </it-button>
        <div slot="content" class="popover" tabindex="-1">
          <div class="popover-inner">
            <h3 class="popover-header">Popover su hover</h3>
            <div class="popover-body">
              Questo popover si apre quando passi il mouse sopra il trigger e si chiude quando esci. Utile per mostrare
              informazioni aggiuntive senza richiedere un click.
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
Il popover può essere attivato con hover utilizzando gli eventi \`mouseenter\` e \`mouseleave\`.

\`\`\`javascript
// Apri al mouseenter
trigger.addEventListener('mouseenter', () => {
  popover.openPopover();
});

// Chiudi al mouseleave
trigger.addEventListener('mouseleave', () => {
  popover.closePopover();
});
\`\`\`

Questo pattern è utile per **rich tooltip** che mostrano contenuto più complesso rispetto a un tooltip standard,
ma che non richiedono un'interazione esplicita da parte dell'utente.
`,
      },
    },
  },
};

export const PopoverConFocus: Story = {
  name: 'Attivazione su focus',
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

    const handleLinkClick = (e: Event) => {
      e.preventDefault(); // Previeni navigazione
    };

    return html`
      <it-popover placement="bottom">
        <it-button slot="trigger" variant="primary" @focus=${handleFocus} @blur=${handleBlur}>
          Usa Tab per focus
        </it-button>
        <div slot="content" class="popover" tabindex="-1" @focus=${handleContentFocus} @blur=${handleContentBlur}>
          <div class="popover-inner">
            <h3 class="popover-header">Popover su focus</h3>
            <div class="popover-body">
              <p>
                Questo popover si apre quando il pulsante riceve il focus (via Tab) e si chiude quando il focus esce
                completamente dal popover.
              </p>
              <a href="#" style="color: var(--bs-primary);" @click=${handleLinkClick}>Link di esempio</a>
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
Il popover può essere attivato con focus utilizzando gli eventi \`focus\` e \`blur\`.

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

// Se ci sono link/button nel popover, previeni navigazione di default
linkInsidePopover.addEventListener('click', (e) => e.preventDefault());
\`\`\`

Questo pattern è particolarmente utile per:
- **Accessibilità**: l'utente può navigare con Tab e vedere le informazioni aggiuntive
- **Form helper**: mostrare istruzioni quando l'utente entra in un campo o pulsante
- **Keyboard navigation**: supporto completo per utenti che usano solo tastiera

**Nota**: Il delay di 100ms sul blur è importante per permettere al browser di aggiornare \`document.activeElement\` prima di verificare se chiudere il popover. Il link deve avere \`preventDefault()\` per evitare navigazione durante il test del focus.
`,
      },
    },
  },
};

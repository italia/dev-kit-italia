import { html, nothing } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import { ifDefined } from 'lit/directives/if-defined.js';
import { CHIP_VARIANTS, CHIP_SIZES, type ChipProps } from '../src/types.ts';
import '@italia/icon';
import '@italia/button';
import '@italia/chip';

const meta = {
  title: 'Componenti/Chip',
  component: 'it-chip',
  tags: ['autodocs'],
  args: {
    size: 'sm',
    label: 'Etichetta',
    href: undefined,
    variant: 'primary',
    isDisabled: false,
    avatar: '',
    avatarAlt: 'Avatar',
    a11yDescription: '',
    dismissable: false,
    withIcon: false,
    withDismissButton: false,
  },
  argTypes: {
    size: {
      control: 'select',
      description: 'Dimensione del chip (`sm` o `lg`).',
      options: CHIP_SIZES,
      table: { defaultValue: { summary: 'sm' } },
    },
    label: {
      control: 'text',
      description: "Testo mostrato all'interno della chip.",
    },
    href: {
      control: 'text',
      description: 'Se valorizzato, la chip sarà un link (elemento `<a>`).',
    },
    variant: {
      control: 'select',
      description: 'Colore della chip, secondo le varianti di Bootstrap Italia.',
      options: CHIP_VARIANTS,
    },
    dismissable: {
      control: 'boolean',
      description:
        "Indica che la chip può essere chiusa, ma non inserisce alcun pulsante automaticamente. Il pulsante deve essere inserito nello slot `dismiss-button` dall'utilizzatore, comprensivo di eventuale JavaScript per handling di eventi. Per un esempio completo con Javascript, vedi la story [Chip con chiusura](?path=/story/componenti-chip--chip-con-chiusura).",
      table: { defaultValue: { summary: 'false' } },
    },
    isDisabled: {
      control: 'boolean',
      description: 'Disabilita la chip. Utile in contesti non interattivi o di sola lettura.',
      table: { defaultValue: { summary: 'false' } },
    },
    avatar: {
      control: 'text',
      description: `Percorso a un'immagine da mostrare come avatar, es. [randomuser.me](https://randomuser.me/api/portraits/men/46.jpg).`,
      table: { defaultValue: { summary: 'https://randomuser.me/api/portraits/men/46.jpg' } },
    },
    avatarAlt: {
      control: 'text',
      description: `Testo alternativo per l'immagine dell'avatar, utile per l'accessibilità.`,
      table: { defaultValue: { summary: 'Alt avatar' } },
    },
    a11yDescription: {
      control: 'text',
      description: `Testo descrittivo aggiuntivo per la chip, utile per l'accessibilità. Viene inserito come contenuto visivamente nascosto all'inizio della chip, ad esempio per specificare a che contenuto si fa riferimento, o assegnare una dicitur come "Argomento:".`,
      table: { defaultValue: { summary: '' } },
    },
    withIcon: {
      control: 'boolean',
      description:
        "Simula la presenza di un'icona nella chip. Non è una proprietà del componente, ma serve per mostrare composizioni nel playground interattivo.",
    },
    withDismissButton: {
      control: 'boolean',
      description:
        'Simula la presenza di un pulsante di rimozione nella chip. Non è una proprietà del componente, ma serve per mostrare composizioni nel playground interattivo.',
    },
  },

  parameters: {
    docs: {
      description: {
        component: `
<Description>Elementi compatti che rappresentano un input, attributo o azione.</Description>
Il componente \`<it-chip>\` si compone principalmente di una label testuale e, opzionalmente, di:

- un avatar (immagine) a sinistra, tramite la proprietà \`avatar\`;
- un'icona inserita nello slot \`icon\`;
- un pulsante di chiusura nello slot \`dismiss-button\`, per le chip cancellabili/rimuovibili (la logica di rimozione è a carico dell'utilizzatore, vedi sezione dedicata).

Per indicazioni su "Come e Quando usarlo" si fa riferimento alla [guida del design-system](https://designers.italia.it/design-system/componenti/chips/).
`,
      },
    },
  },
} satisfies Meta<
  ChipProps & {
    withIcon?: boolean;
    withDismissButton?: boolean;
  }
>;
export default meta;
type Story = StoryObj<
  ChipProps & {
    withIcon?: boolean;
    withDismissButton?: boolean;
  }
>;

const dismissTemplate = (label = 'Elimina etichetta', disabled = false, description = 'Aria description') => html`
  <it-button
    slot="dismiss-button"
    it-aria-label="${label}"
    it-aria-disabled="${disabled}"
    it-aria-description="${description}"
    ?icon=${true}
    @click=${(e: Event) => {
      if (disabled) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      const chip = (e.currentTarget as HTMLElement).closest('it-chip');
      if (chip) chip.remove();
    }}
    @keydown=${(e: KeyboardEvent) => {
      if (disabled) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      if (e.key === 'Enter' || e.key === ' ') {
        const chip = (e.currentTarget as HTMLElement).closest('it-chip');
        if (chip) chip.remove();
      }
    }}
  >
    <it-icon name="it-close" size="sm"></it-icon>
  </it-button>
`;

const iconTemplate = (color: string, size: string) => html`
  <it-icon slot="icon" name="it-github" size="${size === 'lg' ? 'sm' : 'xs'}" color=${color}></it-icon>
`;

// Renderizza il wc it-chip di default
const renderComponent = (params) => {
  const {
    avatar,
    avatarAlt,
    withIcon,
    label,
    size,
    variant,
    withDismissButton,
    dismissable,
    isDisabled,
    href,
    id,
    a11yDescription,
  } = params;
  return html`
    <it-chip
      label="${label ?? ''}"
      size="${size ?? 'sm'}"
      variant="${variant ?? ''}"
      ?dismissable=${dismissable}
      ?is-disabled=${isDisabled}
      href="${ifDefined(href || undefined)}"
      avatar="${ifDefined(avatar || undefined)}"
      avatar-alt="${ifDefined(avatarAlt || undefined)}"
      a11y-description="${a11yDescription}"
      ?id="${id}"
      >${withIcon ? iconTemplate(variant, size) : nothing}${dismissable && withDismissButton
        ? dismissTemplate('I am dismissable', isDisabled)
        : nothing}</it-chip
    >
  `;
};

export const EsempioInterattivo: Story = {
  ...meta,
  name: 'Esempio interattivo',
  args: {
    variant: 'primary',
  },
  tags: ['!autodocs', '!dev'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
  render: (params) => html`${renderComponent(params)}`,
};

export const PersonalizzazioneDegliStili: Story = {
  name: 'Personalizzazione degli stili',
  tags: ['!dev'],
  parameters: {
    viewMode: 'docs', // assicura che si apra la tab Docs anziché Canvas
    docs: {
      canvas: { hidden: true, sourceState: 'none' }, // nasconde solo il canvas nella docs page
      description: {
        story: `
Per la personalizzazione degli stili si può usare il selettore \`::part\` passando il valore \`chip\`. [Vedi qui la guida dettagliata](/docs/personalizzazione-degli-stili--documentazione#selettore-part).
`,
      },
    },
  },
  render: () => html`<div class="hide-preview"></div>`,
};

export const VarianteConLink: Story = {
  name: 'Variante con link',
  args: {
    size: 'sm',
    variant: '',
    href: '#',
  },
  render: () => html` <it-chip label="Etichetta" size="sm" variant="" href="#"></it-chip> `,
};

export const VariantiColore: Story = {
  name: 'Varianti di colore',
  args: { label: 'Etichetta', size: 'sm', dismissable: false },
  parameters: {
    docs: {
      description: {
        story: `
Gli stili definiti da Bootstrap Italia utilizzano un naming consistente con Bootstrap, con alcune personalizzazioni:
`,
      },
    },
  },
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      <it-chip label="Etichetta" size="sm" variant="primary"></it-chip>
      <it-chip label="Etichetta" size="sm" variant="secondary"></it-chip>
      <it-chip label="Etichetta" size="sm" variant="success"></it-chip>
      <it-chip label="Etichetta" size="sm" variant="danger"></it-chip>
      <it-chip label="Etichetta" size="sm" variant="warning"></it-chip>
    </div>
  `,
};
export const VariantiColoreLink: Story = {
  name: 'Varianti di colore link',
  args: { label: 'Etichetta', size: 'sm', dismissable: false },
  parameters: {
    docs: {
      description: {
        story: `

`,
      },
    },
  },
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      <it-chip label="Etichetta" size="sm" variant="primary" href="#"></it-chip>
      <it-chip label="Etichetta" size="sm" variant="secondary" href="#"></it-chip>
      <it-chip label="Etichetta" size="sm" variant="success" href="#"></it-chip>
      <it-chip label="Etichetta" size="sm" variant="danger" href="#"></it-chip>
      <it-chip label="Etichetta" size="sm" variant="warning" href="#"></it-chip>
    </div>
  `,
};

export const VariantiDimensione: Story = {
  name: 'Varianti di dimensione',
  args: {
    size: 'sm',
    variant: '',
    dismissable: true,
  },
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      <it-chip label="Etichetta" size="sm" variant="" dismissable></it-chip>
      <it-chip label="Etichetta" size="lg" variant="" dismissable></it-chip>
    </div>
  `,
};

export const ChipConChiusura: Story = {
  name: 'Chip con chiusura',
  render: () => html`
    <it-chip label="Etichetta" size="sm" variant="primary" dismissable id="chip-dismissable">
      <it-button
        slot="dismiss-button"
        icon
        it-aria-label="Elimina etichetta"
        it-aria-description="Puoi premere per eliminare la chip."
        @click=${(e: Event) => {
          const chip = (e.currentTarget as HTMLElement).closest('it-chip');
          if (chip) chip.remove();
        }}
        @keydown=${(e: KeyboardEvent) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            const chip = (e.currentTarget as HTMLElement).closest('it-chip');
            if (chip) chip.remove();
          }
        }}
      >
        <it-icon name="it-close" size="sm"></it-icon>
      </it-button>
    </it-chip>
  `,
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown',
      },
      description: {
        story: `
Questa composizione mostra una chip con funzionalità di chiusura.

La proprietà \`dismissable\` **non aggiunge automaticamente il pulsante**: è responsabilità dell'utilizzatore fornire un \`<it-button>\` con \`slot="dismiss-button"\` e logica di rimozione/logiche di esecuzione.
L'icona di chiusura deve avere dimensione \`sm\` per rispettare il design.
Il codice JS dell'esempio gestisce la rimozione della chip sia via click che via tastiera (\`Enter\` o \`Spazio\`).

`,
      },
      source: {
        code: `<it-chip label="Etichetta" size="sm" variant="primary" dismissable id="chip-dismissable">
  <it-button
    slot="dismiss-button"
    icon
    it-aria-label="Elimina etichetta"
    it-aria-description="Puoi premere per eliminare la chip."
  >
    <it-icon name="it-close" size="sm"></it-icon>
  </it-button>
</it-chip>

<script type="module">
  const dismissButtons = document.querySelectorAll('it-chip#chip-dismissable [slot="dismiss-button"]');

  dismissButtons.forEach((btn) => {
    const removeChip = (e) => {
      const chip = btn.closest('it-chip');
      if (chip) chip.remove();
    };

    btn.addEventListener('click', removeChip);
    btn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        removeChip(e);
      }
    });
  });
</script>

`,
        language: 'html',
      },
    },
  },
};
export const ChipDisabilitata: Story = {
  name: 'Chip disabilitata',
  args: {
    isDisabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: `
Aggiungendo l'attributo \`is-disabled\` si ottiene una chip disabilitata.
`,
      },
    },
  },
  render: (args) => html`
    <it-chip label="Etichetta" size="sm" variant="${args.variant}" dismissable is-disabled>
      <it-button
        slot="dismiss-button"
        icon
        it-aria-label="Elimina etichetta"
        it-aria-disabled="true"
        it-aria-description="Questa chip è disabilitata e non può essere rimossa."
      >
        <it-icon name="it-close"></it-icon>
      </it-button>
    </it-chip>
  `,
};

export const ChipConAvatar: Story = {
  name: 'Chip con avatar',
  parameters: {
    docs: {
      description: {
        story: `
Le chip possono includere un avatar utilizzando gli attributi \`avatar\` e \`avatar-alt\`.
`,
      },
    },
  },
  render: () => html`
    <div class="d-flex gap-2 flex-wrap">
      <it-chip
        label="Mario Rossi"
        size="sm"
        variant="primary"
        avatar="https://randomuser.me/api/portraits/men/46.jpg"
        avatar-alt="Mario Rossi"
        dismissable
      >
        <it-button
          slot="dismiss-button"
          icon
          it-aria-label="Rimuovi Mario Rossi"
          it-aria-description="Puoi premere per rimuovere questo utente."
        >
          <it-icon name="it-close"></it-icon>
        </it-button>
      </it-chip>
      <it-chip
        label="Anna Verdi"
        size="lg"
        variant="secondary"
        avatar="https://randomuser.me/api/portraits/women/32.jpg"
        avatar-alt="Anna Verdi"
        dismissable
      >
        <it-button
          slot="dismiss-button"
          icon
          it-aria-label="Rimuovi Anna Verdi"
          it-aria-description="Puoi premere per rimuovere questo utente."
        >
          <it-icon name="it-close"></it-icon>
        </it-button>
      </it-chip>
    </div>
  `,
};

export const ChipConIcona: Story = {
  name: 'Chip con icona',
  parameters: {
    docs: {
      description: {
        story: `
Le chip possono includere un'icona utilizzando lo slot \`icon\` con il componente it-icon.
`,
      },
    },
  },
  render: () => html`
    <div class="d-flex gap-2 flex-wrap">
      <it-chip label="Download" size="sm" variant="primary" dismissable>
        <it-icon slot="icon" name="it-download"></it-icon>
        <it-button
          slot="dismiss-button"
          icon
          it-aria-label="Rimuovi download"
          it-aria-description="Puoi premere per rimuovere questa azione."
        >
          <it-icon name="it-close"></it-icon>
        </it-button>
      </it-chip>
      <it-chip label="Carica file" size="lg" variant="success" dismissable>
        <it-icon slot="icon" name="it-upload"></it-icon>
        <it-button
          slot="dismiss-button"
          icon
          it-aria-label="Rimuovi carica file"
          it-aria-description="Puoi premere per rimuovere questa azione."
        >
          <it-icon name="it-close"></it-icon>
        </it-button>
      </it-chip>
      <it-chip href="#" label="Preferiti" size="sm" variant="warning">
        <it-icon slot="icon" name="it-star-full"></it-icon>
      </it-chip>
    </div>
  `,
};

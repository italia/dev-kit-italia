import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '@italia/icon';
import '@italia/button';

const meta = {
  title: 'Componenti/Liste',
  tags: ['autodocs'],

  parameters: {
    docs: {
      description: {
        component: `
<Description>La lista è un componente flessibile per la visualizzazione di liste con testo, link o elementi correlati.</Description>

Le liste sono componenti basati su classi CSS che possono essere applicati direttamente all'HTML. Non sono web components, ma semplici stili da utilizzare nelle tue applicazioni.
`,
      },
    },
    layout: 'padded',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

// ============================================
// TIPOLOGIE DI LISTA
// ============================================

export const IntroduzioneListe: Story = {
  name: 'Tipologie di lista',
  tags: ['!dev'],
  parameters: {
    viewMode: 'docs',
    docs: {
      canvas: { hidden: true, sourceState: 'none' },
      description: {
        story: `
Le liste, costituite da tag \`<ul>\` con classe \`.it-list\` all'interno di un wrapper con classe \`.it-list-wrapper\`, possono contenere testi, link, icone, avatar, immagini o una combinazione di questi elementi.
`,
      },
    },
  },
  render: () => html`<div class="hide-preview"></div>`,
};

export const ListaSemplice: Story = {
  name: 'Lista semplice solo testo',
  render: () => html`
    <div class="it-list-wrapper">
      <ul class="it-list">
        <li>
          <div class="list-item">
            <div class="it-right-zone">
              <span class="text">Testo</span>
            </div>
          </div>
        </li>
        <li>
          <a href="#" class="list-item">
            <div class="it-right-zone">
              <span class="text">Link</span>
            </div>
          </a>
        </li>
        <li>
          <div class="list-item">
            <div class="it-right-zone">
              <span class="text">Testo</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: `
Lista di base con elementi testuali. Gli elementi possono essere semplici testi (\`<div class="list-item">\`) o link (\`<a class="list-item">\`).
`,
      },
    },
  },
};

export const ListaConAvatar: Story = {
  name: 'Lista con avatar',
  render: () => html`
    <div class="it-list-wrapper">
      <ul class="it-list">
        <li>
          <div class="list-item">
            <div class="avatar">
              <img src="https://randomuser.me/api/portraits/women/41.jpg" alt="Anna Barbieri" />
            </div>
            <div class="it-right-zone">
              <span class="text">Testo</span>
            </div>
          </div>
        </li>
        <li>
          <a href="#" class="list-item">
            <div class="avatar">
              <img src="https://randomuser.me/api/portraits/women/41.jpg" alt="Anna Barbieri" />
            </div>
            <div class="it-right-zone">
              <span class="text">Anna Barbieri Link</span>
            </div>
          </a>
        </li>
        <li>
          <div class="list-item">
            <div class="avatar">
              <img src="https://randomuser.me/api/portraits/women/41.jpg" alt="Anna Barbieri" />
            </div>
            <div class="it-right-zone">
              <span class="text">Testo</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: `
<div class="alert alert-warning" role="alert">
  <it-icon name="it-warning-circle" color="warning" class="me-2"></it-icon>
  <span class="font-sans-serif">Questo caso d'uso è in fase di sviluppo, sarà completo non appena sarà pronto il componente \`it-avatar\`.</span>
</div>

L'elemento \`.avatar\` precede l'elemento \`.it-right-zone\` che contiene il testo.
`,
      },
    },
  },
};

export const ListaConIcona: Story = {
  name: 'Lista con icona',
  render: () => html`
    <div class="it-list-wrapper">
      <ul class="it-list">
        <li>
          <div class="list-item">
            <div class="it-rounded-icon">
              <it-icon name="it-folder""></it-icon>
            </div>
            <div class="it-right-zone">
              <span class="text">Testo</span>
            </div>
          </div>
        </li>
        <li>
          <a href="#" class="list-item">
            <div class="it-rounded-icon">
              <it-icon name="it-folder""></it-icon>
            </div>
            <div class="it-right-zone">
              <span class="text">Link</span>
            </div>
          </a>
        </li>
        <li>
          <div class="list-item">
            <div class="it-rounded-icon">
              <it-icon name="it-folder""></it-icon>
            </div>
            <div class="it-right-zone">
              <span class="text">Testo</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: `
L'elemento \`.it-rounded-icon\` con all'interno la relativa icona, precede l'elemento \`.it-right-zone\` che contiene il testo.
`,
      },
    },
  },
};

export const ListaConImmagine: Story = {
  name: 'Lista con immagine',
  render: () => html`
    <div class="it-list-wrapper">
      <ul class="it-list">
        <li>
          <div class="list-item">
            <div class="it-thumb ratio ratio-16x9">
              <img src="https://placehold.co/400x300.png?text=thumb" alt="descrizione immagine" />
            </div>
            <div class="it-right-zone">
              <span class="text">Testo</span>
            </div>
          </div>
        </li>
        <li>
          <a href="#" class="list-item">
            <div class="it-thumb ratio ratio-4x3">
              <img src="https://placehold.co/400x300.png?text=thumb" alt="descrizione immagine" />
            </div>
            <div class="it-right-zone">
              <span class="text">Link</span>
            </div>
          </a>
        </li>
        <li>
          <div class="list-item">
            <div class="it-thumb ratio ratio-1x1">
              <img src="https://placehold.co/400x300.png?text=thumb" alt="descrizione immagine" />
            </div>
            <div class="it-right-zone">
              <span class="text">Testo</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: `
L'elemento \`.it-thumb\` con all'interno la relativa immagine, precede l'elemento \`.it-right-zone\` che contiene il testo. Ha una dimensione massima di \`5rem\` che corrispondono a \`80px\`. La proporzione dell'immagine può essere modificata utilizzando le classi specifiche per le proporzioni.
`,
      },
    },
  },
};

// ============================================
// LISTA CON AZIONI
// ============================================

export const IntroduzioneAzioni: Story = {
  name: 'Lista con azioni',
  tags: ['!dev'],
  parameters: {
    viewMode: 'docs',
    docs: {
      canvas: { hidden: true, sourceState: 'none' },
      description: {
        story: `
Le liste con azioni hanno al loro interno icone o elementi interattivi da associare ad azioni specifiche decise in base alle esigenze.
`,
      },
    },
  },
  render: () => html`<div class="hide-preview"></div>`,
};

export const ListaConFreccia: Story = {
  name: 'Con freccia',
  render: () => html`
    <div class="it-list-wrapper">
      <ul class="it-list">
        <li>
          <a href="#" class="list-item">
            <div class="it-right-zone">
              <span class="text">Link</span>
              <it-icon name="it-chevron-right" color="primary" size="sm"></it-icon>
            </div>
          </a>
        </li>
        <li>
          <a href="#" class="list-item">
            <div class="it-right-zone">
              <span class="text">Link</span>
              <it-icon name="it-chevron-right" color="primary" size="sm"></it-icon>
            </div>
          </a>
        </li>
      </ul>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: `
L'elemento \`.icon\` con all'interno la relativa icona segue l'elemento \`.text\` che contiene il testo.
`,
      },
    },
  },
};

export const ListaConAzioniMultiple: Story = {
  name: 'Con azioni multiple',
  render: () => html`
    <div class="it-list-wrapper">
      <ul class="it-list">
        <li>
          <div class="list-item">
            <div class="it-right-zone">
              <span class="text">Testo</span>
              <span class="it-multiple">
                <a href="#" aria-label="Testo - Azione 1">
                  <it-icon name="it-code-circle" color="primary"></it-icon>
                </a>
                <a href="#" aria-label="Testo - Azione 2">
                  <it-icon name="it-code-circle" color="primary"></it-icon>
                </a>
                <a href="#" aria-label="Testo - Azione 3">
                  <it-icon name="it-code-circle" color="primary"></it-icon>
                </a>
              </span>
            </div>
          </div>
        </li>
        <li>
          <div class="list-item">
            <div class="it-right-zone">
              <a href="#">
                <span class="text">Link</span>
              </a>
              <span class="it-multiple">
                <a href="#" aria-label="Link - Azione 1">
                  <it-icon name="it-code-circle" color="primary"></it-icon>
                </a>
                <a href="#" aria-label="Link - Azione 2">
                  <it-icon name="it-code-circle" color="primary"></it-icon>
                </a>
                <a href="#" aria-label="Link - Azione 3">
                  <it-icon name="it-code-circle" color="primary"></it-icon>
                </a>
              </span>
            </div>
          </div>
        </li>
        <li>
          <div class="list-item">
            <div class="it-right-zone">
              <a href="#">
                <span class="text">Link</span>
              </a>
              <span class="it-multiple">
                <a href="#" aria-label="Link - Azione 1">
                  <it-icon name="it-code-circle" color="primary"></it-icon>
                </a>
                <a href="#" aria-label="Link - Azione 2">
                  <it-icon name="it-code-circle" color="primary"></it-icon>
                </a>
                <a href="#" aria-label="Link - Azione 3">
                  <it-icon name="it-code-circle" color="primary"></it-icon>
                </a>
              </span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: `
L'elemento \`.it-multiple\` con all'interno le relative icone, segue l'elemento \`.text\`.
`,
      },
    },
  },
};

// ============================================
// ALTRE VARIAZIONI
// ============================================

export const IntroduzioneVariazioni: Story = {
  name: 'Altre variazioni',
  tags: ['!dev'],
  parameters: {
    viewMode: 'docs',
    docs: {
      canvas: { hidden: true, sourceState: 'none' },
      description: {
        story: `
Le liste possono includere metadata e testo aggiuntivo per fornire più informazioni.
      `,
      },
    },
  },
  render: () => html`<div class="hide-preview"></div>`,
};

export const ListaConMetadata: Story = {
  name: 'Con metadata',
  render: () => html`
    <div class="it-list-wrapper">
      <ul class="it-list">
        <li>
          <div class="list-item">
            <div class="avatar">
              <img src="https://randomuser.me/api/portraits/women/41.jpg" alt="Anna Barbieri" />
            </div>
            <div class="it-right-zone">
              <span class="text">Testo</span>
              <span class="metadata">metadata testo</span>
            </div>
          </div>
        </li>
        <li>
          <div class="list-item">
            <div class="avatar">
              <img src="https://randomuser.me/api/portraits/women/41.jpg" alt="Anna Barbieri" />
            </div>
            <div class="it-right-zone">
              <span class="text">Testo</span>
              <span class="metadata"><a href="#">metadata link</a></span>
            </div>
          </div>
        </li>
        <li>
          <a href="#" class="list-item">
            <div class="avatar">
              <img src="https://randomuser.me/api/portraits/women/41.jpg" alt="Anna Barbieri" />
            </div>
            <div class="it-right-zone">
              <span class="text">Link</span>
              <span class="metadata">metadata testo</span>
            </div>
          </a>
        </li>
        <li>
          <div class="list-item">
            <div class="avatar">
              <img src="https://randomuser.me/api/portraits/women/41.jpg" alt="Anna Barbieri" />
            </div>
            <div class="it-right-zone">
              <a href="#">
                <span class="text">Link</span>
              </a>
              <span class="metadata"><a href="#">metadata link</a></span>
            </div>
          </div>
        </li>
        <li>
          <a class="list-item" href="#">
            <div class="avatar">
              <img src="https://randomuser.me/api/portraits/women/41.jpg" alt="Anna Barbieri" />
            </div>
            <div class="it-right-zone">
              <span class="text">Link</span>
              <span class="metadata">metadata testo</span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: `
<div class="alert alert-warning" role="alert">
  <it-icon name="it-warning-circle" color="warning" class="me-2"></it-icon>
  <span class="font-sans-serif">Questo caso d'uso è in fase di sviluppo, sarà completo non appena sarà pronto il componente \`it-avatar\`.</span>
</div>

Ad ogni lista si può aggiungere un campo testuale metadata, come nell'esempio seguente. L'elemento \`.metadata\`, segue l'elemento \`.text\`.
`,
      },
    },
  },
};

export const ListaConTestoAggiuntivo: Story = {
  name: 'Con testo aggiuntivo, azioni multiple e metadata',
  render: () => html`
    <div class="it-list-wrapper">
      <ul class="it-list">
        <li>
          <div class="list-item">
            <div class="it-right-zone">
              <div>
                <h4 class="text m-0">Testo</h4>
                <p class="small m-0">Lorem ipsum dolor sit amet.</p>
              </div>
              <span class="it-multiple">
                <span class="metadata">metadata testo</span>
                <a href="#" aria-label="Testo - Azione 1">
                  <it-icon color="primary" name="it-code-circle" label="Codice"></it-icon>
                </a>
                <a href="#" aria-label="Testo - Azione 2">
                  <it-icon color="primary" name="it-code-circle" label="Codice"></it-icon>
                </a>
                <a href="#" aria-label="Testo - Azione 3">
                  <it-icon color="primary" name="it-code-circle" label="Codice"></it-icon>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </li>
        <li>
          <div class="list-item">
            <div class="it-right-zone">
              <div>
                <h4 class="text m-0">Testo</h4>
                <p class="small m-0">Lorem ipsum dolor sit amet.</p>
              </div>
              <span class="it-multiple">
                <span class="metadata"><a href="#">metadata link</a></span>
                <a href="#" aria-label="Testo 2 - Azione 1">
                  <it-icon name="it-code-circle" label="Codice"></it-icon>
                </a>
                <a href="#" aria-label="Testo 2 - Azione 2">
                  <it-icon name="it-code-circle" label="Codice"></it-icon>
                </a>
                <a href="#" aria-label="Testo 2 - Azione 3">
                  <it-icon name="it-code-circle" label="Codice"></it-icon>
                </a>
              </span>
            </div>
          </div>
        </li>
        <li>
          <div class="list-item">
            <div class="it-right-zone">
              <div>
                <h4 class="text m-0"><a href="#">Link</a></h4>
                <p class="small m-0">Lorem ipsum dolor sit amet.</p>
              </div>
              <span class="it-multiple">
                <span class="metadata"><a href="#">metadata link</a></span>
                <a href="#" aria-label="Link - Azione 1">
                  <it-icon name="it-code-circle" label="Codice"></it-icon>
                </a>
                <a href="#" aria-label="Link - Azione 2">
                  <it-icon name="it-code-circle" label="Codice"></it-icon>
                </a>
                <a href="#" aria-label="Link - Azione 3">
                  <it-icon name="it-code-circle" label="Codice"></it-icon>
                </a>
              </span>
            </div>
          </div>
        </li>
        <li>
          <div class="list-item">
            <div class="it-right-zone">
              <div>
                <h4 class="text m-0"><a href="#">Link</a></h4>
                <p class="small m-0">Lorem ipsum dolor sit amet.</p>
              </div>
              <span class="it-multiple">
                <span class="metadata">metadata testo</span>
                <a href="#" aria-label="Link - Azione 1">
                  <it-icon name="it-code-circle" label="Codice"></it-icon>
                </a>
                <a href="#" aria-label="Link - Azione 2">
                  <it-icon name="it-code-circle" label="Codice"></it-icon>
                </a>
                <a href="#" aria-label="Link - Azione 3">
                  <it-icon name="it-code-circle" label="Codice"></it-icon>
                </a>
              </span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: `
Per avere una lista che permetta paragrafi di testo aggiuntivo per ogni elemento, bisogna utilizzare un approccio con titolo (heading) e paragrafo \`<p>\`, mantenendo la classe \`.text\` per l'elementi titolo. Entrambi devono essere inclusi in un elemento \`<div>\` per il corretto allineamento.
`,
      },
    },
  },
};

// ============================================
// LISTE PER MENU DI NAVIGAZIONE
// ============================================

export const IntroduzioneMenuNavigazione: Story = {
  name: 'Liste per menu di navigazione',
  tags: ['!dev'],
  parameters: {
    viewMode: 'docs',
    docs: {
      canvas: { hidden: true, sourceState: 'none' },
      description: {
        story: `
Le liste per menu di navigazione, costituite da tag \`<ul>\` con classe \`.link-list\` all'interno di un wrapper con classe \`.link-list-wrapper\`, vengono utilizzate per creare le voci dei menu Dropdown, Megamenu, Sidebar e Navscroll.
`,
      },
    },
  },
  render: () => html`<div class="hide-preview"></div>`,
};

export const LinkListLineaSingola: Story = {
  name: 'Linea singola',
  render: () => html`
    <div class="link-list-wrapper">
      <ul class="link-list">
        <li>
          <a class="list-item" href="#"><span>Link lista 1</span></a>
        </li>
        <li>
          <a class="list-item" href="#"><span>Link lista 2</span></a>
        </li>
        <li>
          <a class="list-item" href="#"><span>Link lista 3</span></a>
        </li>
      </ul>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: `
Lista di link semplice con linea singola. Ogni elemento è un link cliccabile.
`,
      },
    },
  },
};

export const LinkListElementoAttivo: Story = {
  name: 'Elemento con stato attivo',
  render: () => html`
    <div class="link-list-wrapper">
      <ul class="link-list">
        <li>
          <a class="list-item" href="#"><span>Link lista 1</span></a>
        </li>
        <li>
          <a class="list-item active" href="#"><span>Link lista 2 attivo</span></a>
        </li>
        <li>
          <a class="list-item" href="#"><span>Link lista 3</span></a>
        </li>
      </ul>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: `
Per rendere attivo un elemento è sufficiente aggiungere la classe \`.active\` al relativo link.
`,
      },
    },
  },
};

export const LinkListElementoDisabilitato: Story = {
  name: 'Elemento con stato disabilitato',
  render: () => html`
    <div class="link-list-wrapper">
      <ul class="link-list">
        <li>
          <a class="list-item" href="#"><span>Link lista 1</span></a>
        </li>
        <li>
          <a class="list-item disabled" href="#" aria-disabled="true"><span>Link lista 2 disabilitato</span></a>
        </li>
        <li>
          <a class="list-item" href="#"><span>Link lista 3</span></a>
        </li>
      </ul>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: `
Per disabilitare un elemento è sufficiente aggiungere la classe \`.disabled\` al relativo link.
`,
      },
    },
  },
};

export const LinkListIntestazioneSenzaLink: Story = {
  name: 'Intestazione senza link',
  render: () => html`
    <div class="link-list-wrapper">
      <h4 class="link-list-heading">Intestazione</h4>
      <ul class="link-list">
        <li>
          <a class="list-item" href="#"><span>Link lista 1</span></a>
        </li>
        <li>
          <a class="list-item" href="#"><span>Link lista 2</span></a>
        </li>
        <li>
          <a class="list-item" href="#"><span>Link lista 3</span></a>
        </li>
        <li><span class="divider" role="separator"></span></li>
        <li>
          <a class="list-item" href="#"><span>Link lista 4</span></a>
        </li>
      </ul>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: `
Le liste di link possono avere un'intestazione (con o senza link) e/o divisori per separare gruppi di link.

L'intestazione è costituita dall'elemento \`.link-list-heading\` che precede il tag \`<ul>\`.
Il divisore è costituito dal tag \`<span>\` con classe \`.divider\` e attributo \`role="separator"\` all'interno del tag \`<li>\`.
`,
      },
    },
  },
};

export const LinkListIntestazioneConLink: Story = {
  name: 'Intestazione con link',
  render: () => html`
    <div class="link-list-wrapper">
      <h4 class="link-list-heading"><a href="#">Intestazione con link</a></h4>
      <ul class="link-list">
        <li>
          <a class="list-item" href="#"><span>Link lista 1</span></a>
        </li>
        <li>
          <a class="list-item" href="#"><span>Link lista 2</span></a>
        </li>
        <li>
          <a class="list-item" href="#"><span>Link lista 3</span></a>
        </li>
        <li>
          <span class="divider" role="separator"></span>
        </li>
        <li>
          <a class="list-item" href="#"><span>Link lista 4</span></a>
        </li>
      </ul>
    </div>
  `,
};

export const LinkListDimensioni: Story = {
  name: 'Dimensioni',
  render: () => html`
    <div class="link-list-wrapper">
      <h4 class="link-list-heading">Intestazione</h4>
      <ul class="link-list">
        <li>
          <a class="list-item large" href="#"><span>Link lista 1</span></a>
        </li>
        <li>
          <a class="list-item large" href="#"><span>Link lista 2</span></a>
        </li>
        <li>
          <a class="list-item large" href="#"><span>Link lista 3</span></a>
        </li>
        <li><span class="divider" role="separator"></span></li>
        <li>
          <a class="list-item large" href="#"><span>Link lista 4</span></a>
        </li>
      </ul>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: `
Per ogni elemento di una lista di link è possibile definire una variante di dimensione maggiore utilizzando la classe \`.large\` applicata al tag \`<a>\`.
`,
      },
    },
  },
};

export const LinkListMultilineIcona: Story = {
  name: 'Multiline con icona',
  render: () => html`
    <div class="link-list-wrapper multiline">
      <ul class="link-list">
        <li>
          <a class="list-item active icon-right" href="#">
            <span class="list-item-title-icon-wrapper">
              <h4 class="list-item-title">Link lista 1 attivo</h4>
              <it-icon name="it-code-circle" color="primary" label="Codice"></it-icon>
            </span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit…</p>
          </a>
        </li>
        <li>
          <span class="divider" role="separator"></span>
        </li>
        <li>
          <a class="list-item icon-right" href="#">
            <span class="list-item-title-icon-wrapper">
              <h4 class="list-item-title">Link lista 2</h4>
              <it-icon name="it-code-circle" color="primary" label="Codice"></it-icon>
            </span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit…</p>
          </a>
        </li>
        <li><span class="divider"></span></li>
        <li>
          <a class="list-item disabled icon-right" href="#" aria-disabled="true">
            <span class="list-item-title-icon-wrapper">
              <h4 class="list-item-title">Link lista 3 disabilitato</h4>
              <it-icon name="it-code-circle" color="primary" label="Codice"></it-icon>
            </span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit…</p>
          </a>
        </li>
        <li>
          <span class="divider"></span>
        </li>
      </ul>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: `
Ogni elemento di una lista di link può avere un'icona (a destra o sinistra del testo) ed un abstract.

Per includere un'icona bisogna aggiungere al tag \`<a>\` una delle seguenti classi:
- \`icon-right\`: se si vuole posizionare l'icona a destra del testo
- \`icon-left\`: se si vuole posizionare l'icona a sinistra del testo

All'interno del tag \`<span class="list-item-title-icon-wrapper">\` subito dopo lo \`<span class="list-item-title">\` contenente il testo, puoi inserire [l'icona necessaria](/docs/componenti-icon--documentazione).
`,
      },
    },
  },
};

export const ListaConControlli: Story = {
  name: 'Lista con controlli',
  tags: ['!dev'],
  parameters: {
    viewMode: 'docs',
    docs: {
      canvas: { hidden: true, sourceState: 'none' },
      description: {
        story: `
Le liste di link con controlli sono caratterizzate da icone a destra e sinistra del testo. Quella di destra è descrittiva mentre quella di sinistra può essere un'eventuale azione aggiuntiva da gestire in Javascript.

È necessario aggiungere al tag \`<a>\` la classe \`.icon-right\` se si vuole posizionare l'icona a destra del testo, oppure la classe \`.icon-left\` se si vuole posizionare l'icona a sinistra del testo.
`,
      },
    },
  },
  render: () => html`<div class="hide-preview"></div>`,
};

export const LinkListControlliIconaSinistra: Story = {
  name: 'Azione primaria - Icona a sinistra',
  render: () => html`
    <div class="link-list-wrapper">
      <ul class="link-list">
        <li>
          <a class="list-item active icon-left" href="#">
            <span class="list-item-title-icon-wrapper">
              <it-icon name="it-chevron-right" color="primary" label="Freccia destra"></it-icon>
              <span class="list-item-title">Link lista 1 attivo</span>
            </span>
          </a>
        </li>
        <li>
          <a class="list-item icon-left" href="#">
            <span class="list-item-title-icon-wrapper">
              <it-icon name="it-chevron-right" color="primary" label="Freccia destra"></it-icon>
              <span class="list-item-title">Link lista 2</span>
            </span>
          </a>
        </li>
        <li>
          <a class="list-item icon-left disabled" href="#" aria-disabled="true">
            <span class="list-item-title-icon-wrapper">
              <it-icon name="it-chevron-right" color="primary" label="Freccia destra"></it-icon>
              <span class="list-item-title">Link lista 3 disabilitato</span>
            </span>
          </a>
        </li>
      </ul>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: `
All'interno del tag \`<span class="list-item-title-icon-wrapper">\` subito prima del tag \`<span class="list-item-title">\` contenente il testo, puoi inserire [l'icona necessaria](/docs/componenti-icon--documentazione). Per posizionare correttamente l'icona a sinistra del testo bisogna aggiungere al tag \`<a>\` la classe: \`.icon-left\`.
`,
      },
    },
  },
};

export const LinkListControlliIconaDestra: Story = {
  name: 'Azione secondaria - Icona a destra',
  render: () => html`
    <div class="link-list-wrapper">
      <ul class="link-list">
        <li>
          <a class="list-item active icon-right" href="#">
            <span class="list-item-title-icon-wrapper">
              <span class="list-item-title">Link lista 1 attivo</span>
              <it-icon name="it-link" color="primary" size="sm" label="Link"></it-icon>
            </span>
          </a>
        </li>
        <li>
          <a class="list-item icon-right" href="#">
            <span class="list-item-title-icon-wrapper">
              <span class="list-item-title">Link lista 2</span>
              <it-icon name="it-link" color="primary" size="sm" label="Link"></it-icon>
              </svg>
            </span>
          </a>
        </li>
        <li>
          <a class="list-item icon-right disabled" href="#" aria-disabled="true">
            <span class="list-item-title-icon-wrapper">
              <span class="list-item-title">Link lista 3 disabilitato</span>
              <it-icon name="it-link" color="primary" size="sm" label="Link"></it-icon>
            </span>
          </a>
        </li>
      </ul>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: `
All'interno del tag \`<span class="list-item-title-icon-wrapper">\` subito dopo il tag \`<span class="list-item-title">\` contenente il testo, puoi inserire [l'icona necessaria](/docs/componenti-icon--documentazione). Per posizionare correttamente l'icona a destra del testo bisogna aggiungere al tag \`<a>\` la classe: \`.icon-right\`.
`,
      },
    },
  },
};

export const LinkListControlliDoppiaIcona: Story = {
  name: 'Azioni primaria e secondaria - Icona a sinistra e a destra',
  render: () => html`
    <div class="link-list-wrapper">
      <ul class="link-list">
        <li>
          <a class="list-item active icon-left" href="#">
            <span class="list-item-title-icon-wrapper">
              <it-icon name="it-link" color="primary" size="sm" label="Link"></it-icon>
              <span class="list-item-title">Link lista 1 attivo</span>
            </span>
          </a>
        </li>
        <li>
          <a class="list-item icon-left" href="#">
            <span class="list-item-title-icon-wrapper">
              <it-icon name="it-link" color="primary" size="sm" label="Link"></it-icon>
              <span class="list-item-title">Link lista 2</span>
            </span>
          </a>
        </li>
        <li>
          <a class="list-item disabled icon-right" href="#" aria-disabled="true">
            <span class="list-item-title-icon-wrapper">
              <span class="list-item-title">Link lista 3 disabilitato con icona a destra</span>
              <it-icon name="it-link" color="primary" size="sm" label="Link"></it-icon>
            </span>
          </a>
        </li>
      </ul>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: `
Per aggiungere un'icona a sinistra del testo bisogna aggiungere al tag \`<a>\` la classe: \`.icon-left\`. Inserisci l'icona all'interno del tag \`<span class="list-item-title-icon-wrapper">\` subito prima del tag \`<span class="list-item-title">\` contenente il testo.

Per aggiungere un'icona a destra del testo bisogna aggiungere al tag \`<a>\` la classe: \`.icon-right\`. Inserisci l'icona all'interno del tag \`<span class="list-item-title-icon-wrapper">\` subito dopo del tag \`<span class="list-item-title">\` contenente il testo.
`,
      },
    },
  },
};

export const LinkListToggle: Story = {
  name: 'Lista con toggle',
  render: () => html`
    <div class="link-list-wrapper">
      <ul class="link-list">
        <li>
          <div class="toggles">
            <label for="toggle1">
              Label per toggle
              <input type="checkbox" id="toggle1" /><span class="lever"></span>
            </label>
          </div>
        </li>
        <li>
          <div class="toggles">
            <label for="toggle2">
              Label per toggle disabilitato
              <input type="checkbox" id="toggle2" disabled aria-disabled="true" /><span class="lever"></span>
            </label>
          </div>
        </li>
      </ul>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: `
<div class="alert alert-warning" role="alert">
  <it-icon name="it-warning-circle" color="warning" class="me-2"></it-icon>
  <span class="font-sans-serif">Questo caso d'uso è in fase di sviluppo, sarà completo non appena sarà pronto il componente \`it-toggle\`.</span>
</div>

Una lista di link può contenere anche elementi appartenenti ai form, di seguito un esempio contenente un [toggle](/docs/componenti-toggle--documentazione).
`,
      },
    },
  },
};

export const LinkListCheckbox: Story = {
  name: 'Lista con checkbox',
  render: () => html`
    <div class="link-list-wrapper">
      <ul class="link-list">
        <li>
          <div class="form-check form-check-group" aria-describedby="">
            <input type="checkbox" id="checkbox6" checked />
            <label for="checkbox6">Checkbox selezionato</label>
          </div>
        </li>
        <li>
          <div class="form-check form-check-group" aria-describedby="">
            <input type="checkbox" id="checkbox7" />
            <label for="checkbox7">Checkbox non selezionato</label>
          </div>
        </li>
        <li>
          <div class="form-check form-check-group disabled" aria-describedby="" aria-disabled="true">
            <input type="checkbox" id="checkbox8" disabled aria-disabled="true" />
            <label for="checkbox8">Checkbox disabilitato non selezionato</label>
          </div>
        </li>
      </ul>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: `
<div class="alert alert-warning" role="alert">
  <it-icon name="it-warning-circle" color="warning" class="me-2"></it-icon>
  <span class="font-sans-serif">Questo caso d'uso è in fase di sviluppo, sarà completo non appena sarà pronto il componente \`it-checkbox\`.</span>
</div>

Lista di link contenente un [checkbox](/docs/componenti-form-checkbox--documentazione).
`,
      },
    },
  },
};

export const ListeAnnidate: Story = {
  name: 'Liste annidate',
  tags: ['!dev'],
  parameters: {
    viewMode: 'docs',
    docs: {
      canvas: { hidden: true, sourceState: 'none' },
      description: {
        story: `
Le liste di link possono contenere link con sottosezioni espanse o collassabili.
`,
      },
    },
  },
  render: () => html`<div class="hide-preview"></div>`,
};

export const LinkListAnnidataEspansa: Story = {
  name: 'Espansa',
  render: () => html`
    <div class="link-list-wrapper">
      <ul class="link-list">
        <li>
          <a class="list-item large medium icon-right" href="#">
            <span class="list-item-title-icon-wrapper">
              <span class="list-item-title">Link lista 1</span>
              <it-icon name="it-link" color="primary" size="sm" label="Link"></it-icon>
            </span>
          </a>
        </li>
        <li>
          <a class="list-item large medium icon-right" href="#">
            <span class="list-item-title-icon-wrapper">
              <span class="list-item-title">Link lista 2</span>
              <it-icon name="it-link" color="primary" size="sm" label="Link"></it-icon>
            </span>
          </a>
          <ul class="link-sublist" id="">
            <li>
              <a class="list-item" href="#"><span>Link lista 1</span></a>
            </li>
            <li>
              <a class="list-item" href="#"><span>Link lista 2</span></a>
            </li>
            <li>
              <a class="list-item" href="#"><span>Link lista 3</span></a>
            </li>
          </ul>
        </li>
        <li>
          <a class="list-item large medium icon-right" href="#">
            <span class="list-item-title-icon-wrapper">
              <span class="list-item-title">Link lista 3</span>
              <it-icon name="it-link" color="primary" size="sm" label="Link"></it-icon>
            </span>
          </a>
        </li>
      </ul>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: `
Di seguito un esempio di navigazione annidata espansa.
`,
      },
    },
  },
};

export const LinkListAnnidataCollassabile: Story = {
  name: 'Collassabile',
  render: () => html`
    <div class="link-list-wrapper">
      <ul class="link-list">
        <li>
          <a
            class="list-item icon-left"
            href="#collapseList1"
            data-bs-toggle="collapse"
            aria-expanded="false"
            aria-controls="collapseList1"
          >
            <span class="list-item-title-icon-wrapper">
              <it-icon name="it-expand" color="primary" size="sm" class="left"></it-icon>
              <span class="list-item-title">Link lista 1</span>
            </span>
          </a>
          <ul class="link-sublist collapse" id="collapseList1">
            <li>
              <a class="list-item" href="#"><span>Link lista 1</span></a>
            </li>
            <li>
              <a class="list-item" href="#"><span>Link lista 2</span></a>
            </li>
            <li>
              <a class="list-item" href="#"><span>Link lista 3</span></a>
            </li>
          </ul>
        </li>
        <li>
          <a
            class="list-item icon-left"
            href="#collapseList2"
            data-bs-toggle="collapse"
            aria-expanded="false"
            aria-controls="collapseList2"
          >
            <span class="list-item-title-icon-wrapper">
              <it-icon name="it-expand" color="primary" size="sm" class="left"></it-icon>
              <span class="list-item-title">Link lista 2</span>
            </span>
          </a>
          <ul class="link-sublist collapse" id="collapseList2">
            <li>
              <a class="list-item" href="#"><span>Link lista 1</span></a>
            </li>
            <li>
              <a class="list-item" href="#"><span>Link lista 2</span></a>
            </li>
            <li>
              <a class="list-item" href="#"><span>Link lista 3</span></a>
            </li>
          </ul>
        </li>
        <li>
          <a
            class="list-item icon-left"
            href="#collapseList3"
            data-bs-toggle="collapse"
            aria-expanded="false"
            aria-controls="collapseList3"
          >
            <span class="list-item-title-icon-wrapper">
              <it-icon name="it-expand" color="primary" size="sm" class="left"></it-icon>
              <span class="list-item-title">Link lista 3</span>
            </span>
          </a>
          <ul class="link-sublist collapse" id="collapseList3">
            <li>
              <a class="list-item" href="#"><span>Link lista 1</span></a>
            </li>
            <li>
              <a class="list-item" href="#"><span>Link lista 2</span></a>
            </li>
            <li>
              <a class="list-item" href="#"><span>Link lista 3</span></a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: `
<div class="alert alert-warning" role="alert">
  <it-icon name="it-warning-circle" color="warning" class="me-2"></it-icon>
  <span class="font-sans-serif">Questo caso d'uso è in fase di sviluppo, sarà completo non appena sarà pronto il componente \`it-collapse\`.</span>
</div>

Esempio di navigazione annidata collassabile. Per questo tipo di link list sono state utilizzate, oltre alle classi custom, le classi e gli attributi di Bootstrap per l'attivazione del comportamento collapse.
`,
      },
    },
  },
};

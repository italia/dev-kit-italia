import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import type { ItModal } from '../src/it-modal.ts';
import { MODAL_SIZES, MODAL_POSITIONS, MODAL_VARIANTS } from '../src/types.ts';

interface ModalProps {
  'modal-title': string;
  'modal-description': string;
  size: string;
  position: string;
  scrollable: boolean;
  'static-backdrop': boolean;
  'hide-close-button': boolean;
  variant: string;
  'close-label': string;
  'disable-animation': boolean;
  'footer-shadow': boolean;
  // Demo props
  triggerLabel: string;
  bodyContent: string;
}

const closeModal = (event: Event) => {
  const el = event.currentTarget as HTMLElement;
  const modal = el.closest('it-modal') as unknown as ItModal;
  modal?.hide();
};

const meta = {
  title: 'Componenti/Modal',
  component: 'it-modal',
  tags: ['beta', 'a11y-ok', 'web-component'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      story: {
        inline: false,
        iframeHeight: 420,
      },
    },
  },
  args: {
    'modal-title': 'Titolo modale',
    'modal-description': 'Descrizione della modale',
    size: '',
    position: undefined,
    scrollable: false,
    'static-backdrop': false,
    'hide-close-button': false,
    variant: '',
    'close-label': 'Chiudi finestra modale',
    'disable-animation': false,
    'footer-shadow': false,
    triggerLabel: 'Apri modale',
    bodyContent: 'Contenuto della modale. Può includere testo, form, o qualsiasi altro elemento.',
  },
  argTypes: {
    'modal-title': {
      control: 'text',
      description: 'Titolo della modale (usa slot `header` per contenuto custom)',
    },
    'modal-description': {
      control: 'text',
      description:
        'Descrizione della modale (usa slot `description` per contenuto custom), verrrà inserita in un elemento visivamente nascosto per i lettori di schermo.',
    },
    size: {
      control: 'select',
      options: MODAL_SIZES,
      description: 'Dimensione della modale',
      table: { defaultValue: { summary: undefined } },
    },
    position: {
      control: 'select',
      options: MODAL_POSITIONS,
      description: 'Posizionamento della modale',
      table: { defaultValue: { summary: undefined } },
    },
    scrollable: {
      control: 'boolean',
      description: 'Abilita scroll interno al body',
      table: { defaultValue: { summary: 'false' } },
    },
    'static-backdrop': {
      control: 'boolean',
      description: 'Disabilita chiusura su click backdrop',
      table: { defaultValue: { summary: 'false' } },
    },
    'hide-close-button': {
      control: 'boolean',
      description: 'Nasconde il pulsante di chiusura',
    },
    variant: {
      control: 'select',
      options: MODAL_VARIANTS,
      description: 'Variante della modale',
      table: { defaultValue: { summary: undefined } },
    },
    'close-label': {
      control: 'text',
      description: 'Etichetta accessibile per il pulsante di chiusura',
      table: { defaultValue: { summary: 'Chiudi finestra modale' } },
    },
    'disable-animation': {
      control: 'boolean',
      description: 'Disabilita animazione fade',
    },
    'footer-shadow': {
      control: 'boolean',
      description: 'Ombra sul footer per contenuti lunghi',
      table: { defaultValue: { summary: 'false' } },
    },
    triggerLabel: {
      table: { disable: true },
    },
    bodyContent: {
      table: { disable: true },
    },
  },
} satisfies Meta<ModalProps>;

export default meta;
type Story = StoryObj<ModalProps>;

export const EsempioInterattivo: Story = {
  name: 'Esempio interattivo',
  tags: ['!dev'],
  parameters: {
    docs: {
      canvas: { sourceState: 'hidden' },
    },
  },
  render: (args) => html`
    <it-modal
      ?hide-close-button="${args['hide-close-button']}"
      ?disable-animation="${args['disable-animation']}"
      size="${ifDefined(args.size || undefined)}"
      position="${args.position}"
      variant="${ifDefined(args.variant || undefined)}"
      ?scrollable="${args.scrollable}"
      ?static-backdrop="${args['static-backdrop']}"
      ?footer-shadow="${args['footer-shadow']}"
      close-label="${args['close-label']}"
      modal-title="${args['modal-title']}"
      modal-description="${args['modal-description']}"
    >
      <it-button variant="primary" slot="trigger">Lancia la demo della modale</it-button>
      <span slot="header">${args['modal-title']}</span>
      <span slot="description">${args['modal-description']}</span>
      <p slot="content">${args.bodyContent}</p>
      <it-button slot="footer" variant="outline-primary" @click="${closeModal}">Annulla</it-button>
      <it-button slot="footer" variant="primary" @click="${closeModal}">Conferma</it-button>
    </it-modal>
  `,
};

export const ModaleBase: Story = {
  name: 'Con pulsante di chiusura',
  render: () => html`
    <div class="d-flex gap-4">
      <it-modal close-label="Chiudi finestra modale" modal-description="Descrizione della modale">
        <it-button variant="primary" slot="trigger">Lancia la demo della modale</it-button>
        <span slot="header">Titolo modale</span>
        <p slot="content">Testo che descrive lo scopo della modale e quali sono le azioni richieste all'utente.</p>
        <it-button slot="footer" variant="outline-primary" @click="${closeModal}">Annulla</it-button>
        <it-button slot="footer" variant="primary" @click="${closeModal}">Conferma</it-button>
      </it-modal>
      <it-modal hide-close-button>
        <it-button variant="primary" slot="trigger">Lancia la demo della modale senza close button</it-button>
        <span slot="header">Titolo modale</span>
        <p slot="content">Testo che descrive lo scopo della modale e quali sono le azioni richieste all'utente.</p>
        <it-button slot="footer" variant="outline-primary" @click="${closeModal}">Annulla</it-button>
        <it-button slot="footer" variant="primary" @click="${closeModal}">Conferma</it-button>
      </it-modal>
    </div>
  `,
};

export const ConIcona: Story = {
  name: 'Con icona',
  render: () => html`
    <it-modal variant="alert" close-label="Chiudi finestra modale">
      <it-button variant="primary" slot="trigger">Lancia la demo della modale</it-button>
      <it-icon slot="header-icon" name="it-warning-circle" size="lg" color="warning"></it-icon>
      <span slot="header">Questo è un messaggio di notifica</span>
      <p slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
      <it-button slot="footer" variant="primary" @click="${closeModal}">Conferma</it-button>
    </it-modal>
  `,
};
export const FooterCustom: Story = {
  name: 'Modale con footer personalizzato',
  render: () => html`
    <it-modal close-label="Chiudi finestra modale">
      <it-button variant="primary" slot="trigger">Lancia la demo della modale</it-button>
      <span slot="header">Con footer personalizzato</span>
      <p slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
      <div slot="footer" class="d-flex justify-content-between gap-2 align-items-center" style="width:100%;">
        <a href="#">Link di supporto</a>
        <div class="d-flex justify-content-end  gap-2">
          <it-button variant="outline-primary" @click="${closeModal}">Annulla</it-button>
          <it-button variant="primary" @click="${closeModal}">Conferma</it-button>
        </div>
      </div>
    </it-modal>
  `,
};

export const ConForm: Story = {
  name: 'Modale con elementi form',
  render: () => html`
    <it-modal close-label="Chiudi finestra modale">
      <it-button variant="primary" slot="trigger">Lancia la demo della modale</it-button>
      <span slot="header">Seleziona un'opzione dal form</span>
      <div slot="content">
        <it-radio-group name="gruppo1">
          <span slot="label">Esempio interattivo</span>
          <it-radio id="radio1" value="opzione1">
            <span slot="label">Radio di esempio 1</span>
          </it-radio>
          <it-radio id="radio2" value="opzione2">
            <span slot="label">Radio di esempio 2</span>
          </it-radio>
          <it-radio id="radio3" value="opzione3">
            <span slot="label">Radio di esempio 3</span>
          </it-radio>
        </it-radio-group>
      </div>
      <it-button slot="footer" variant="primary" @click="${closeModal}">Conferma</it-button>
    </it-modal>
  `,
};

export const ConLinkList: Story = {
  name: 'Modale con Link List',
  render: () => html`
    <it-modal variant="link-list" close-label="Chiudi finestra modale">
      <it-button variant="primary" slot="trigger">Lancia la demo della modale</it-button>
      <span slot="header"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</span
      >
      <div class="link-list-wrapper" slot="content">
        <ul class="link-list">
          <li>
            <a class="list-item icon-left" href="#">
              <span>Link lista 1</span>
            </a>
          </li>
          <li>
            <a class="list-item icon-left" href="#">
              <span>Link lista 2</span>
            </a>
          </li>
          <li>
            <a class="list-item icon-left" href="#">
              <span>Link lista 3</span>
            </a>
          </li>
        </ul>
      </div>
      <it-button slot="footer" variant="primary" @click="${closeModal}">Conferma</it-button>
    </it-modal>
  `,
};

export const Popconfirm: Story = {
  render: () => html`
    <div class="d-flex gap-3">
      <it-modal variant="popconfirm">
        <it-button variant="primary" slot="trigger">Popconfirm basico</it-button>
        <p slot="content">Breve messaggio di conferma inserito nella modale</p>
        <it-button slot="footer" variant="outline-primary" @click="${closeModal}">Azione 1</it-button>
        <it-button slot="footer" variant="primary" @click="${closeModal}">Azione 2</it-button>
      </it-modal>

      <it-modal variant="popconfirm">
        <it-button variant="primary" slot="trigger">Popconfirm con header</it-button>
        <span slot="header">Titolo modale</span>
        <p slot="content">Breve messaggio di conferma inserito nella modale</p>
        <it-button slot="footer" variant="outline-primary" @click="${closeModal}">Azione 1</it-button>
        <it-button slot="footer" variant="primary" @click="${closeModal}">Azione 2</it-button>
      </it-modal>
    </div>
  `,
};

export const ScrollLungo: Story = {
  parameters: {
    docs: {
      story: {
        iframeHeight: 600,
      },
    },
  },
  name: 'Scroll di contenuti lunghi',
  render: () => html`
    <it-modal footer-shadow close-label="Chiudi finestra modale">
      <it-button variant="primary" slot="trigger">Lancia la demo della modale</it-button>
      <span slot="header">Scroll di contenuti lunghi</span>
      <div slot="content">
        ${Array(20)
          .fill(0)
          .map(
            () => html`
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            `,
          )}
      </div>
      <it-button slot="footer" variant="outline-primary" @click="${closeModal}">Annulla</it-button>
      <it-button slot="footer" variant="primary" @click="${closeModal}">Conferma</it-button>
    </it-modal>
  `,
};

export const ScrollInterno: Story = {
  parameters: {
    docs: {
      story: {
        iframeHeight: 600,
      },
    },
  },
  name: 'Scroll interno alla modale',
  render: () => html`
    <it-modal scrollable footer-shadow close-label="Chiudi finestra modale">
      <it-button variant="primary" slot="trigger">Lancia la demo della modale</it-button>
      <span slot="header">Modale con scroll interno</span>
      <div slot="content">
        ${Array(20)
          .fill(0)
          .map(
            () => html`
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            `,
          )}
      </div>
      <it-button slot="footer" variant="outline-primary" @click="${closeModal}">Annulla</it-button>
      <it-button slot="footer" variant="primary" @click="${closeModal}">Conferma</it-button>
    </it-modal>
  `,
};

export const CentraturaVerticale: Story = {
  name: 'Centratura verticale',
  render: () => html`
    <it-modal position="center" close-label="Chiudi finestra modale">
      <it-button variant="primary" slot="trigger">Lancia la demo della modale</it-button>
      <span slot="header">Centratura verticale</span>
      <div slot="content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
      </div>
      <it-button slot="footer" variant="outline-primary" @click="${closeModal}">Annulla</it-button>
      <it-button slot="footer" variant="primary" @click="${closeModal}">Conferma</it-button>
    </it-modal>
  `,
};

export const AllineamentoSinistra: Story = {
  parameters: {
    docs: {
      story: {
        iframeHeight: 600,
      },
    },
  },
  name: 'Allineamento a sinistra',
  render: () => html`
    <it-modal position="left" close-label="Chiudi finestra modale" scrollable>
      <it-button variant="primary" slot="trigger">Lancia la demo della modale</it-button>
      <span slot="header">Modale allineata a sinistra</span>
      <p slot="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..
      </p>
      <it-button slot="footer" variant="outline-primary" @click="${closeModal}">Annulla</it-button>
      <it-button slot="footer" variant="primary" @click="${closeModal}">Conferma</it-button>
    </it-modal>
  `,
};

export const AllineamentoDestra: Story = {
  parameters: {
    docs: {
      story: {
        iframeHeight: 600,
      },
    },
  },
  decorators: [(story) => html` <div style="display:flex; height:100%; align-items:center;">${story()}</div> `],
  name: 'Allineamento a destra',
  render: () => html`
    <it-modal position="right" close-label="Chiudi finestra modale" scrollable>
      <it-button variant="primary" slot="trigger">Lancia la demo della modale</it-button>
      <span slot="header">Modale allineata a destra</span>
      <p slot="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <it-button slot="footer" variant="outline-primary" @click="${closeModal}">Annulla</it-button>
      <it-button slot="footer" variant="primary" @click="${closeModal}">Conferma</it-button>
    </it-modal>
  `,
};

export const DimensioniOpzionali: Story = {
  parameters: {
    docs: {
      story: {
        iframeHeight: 600,
      },
    },
  },
  name: 'Dimensioni opzionali',
  render: () => html`
    <div class="d-flex gap-3 flex-wrap">
      <it-modal size="sm" close-label="Chiudi finestra modale">
        <it-button slot="trigger" variant="primary">Modale piccola</it-button>
        <span slot="header">Modale piccola</span>
        <p slot="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis felis tortor, ultrices congue orci
          ultricies sed. In hac habitasse platea dictumst. Ut placerat ligula sed tincidunt dictum. Pellentesque dapibus
          nisl vel varius dignissim. Aliquam leo ligula, dapibus vitae porttitor sed, laoreet in massa. Aliquam interdum
          sollicitudin libero, consectetur lacinia enim aliquet pretium. Vestibulum sit amet ornare velit, ac efficitur
          nisi. In leo mauris, ultrices in turpis sit amet, tempus placerat neque. Cras in dolor sit amet ante pharetra
          commodo. Aliquam cursus euismod velit, ut condimentum ipsum imperdiet ac..
        </p>
        <it-button slot="footer" variant="primary" @click="${closeModal}">Chiudi</it-button>
      </it-modal>

      <it-modal size="lg" close-label="Chiudi finestra modale">
        <it-button slot="trigger" variant="primary">Modale grande</it-button>
        <span slot="header">Modale grande</span>
        <p slot="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis felis tortor, ultrices congue orci
          ultricies sed. In hac habitasse platea dictumst. Ut placerat ligula sed tincidunt dictum. Pellentesque dapibus
          nisl vel varius dignissim. Aliquam leo ligula, dapibus vitae porttitor sed, laoreet in massa. Aliquam interdum
          sollicitudin libero, consectetur lacinia enim aliquet pretium. Vestibulum sit amet ornare velit, ac efficitur
          nisi. In leo mauris, ultrices in turpis sit amet, tempus placerat neque. Cras in dolor sit amet ante pharetra
          commodo. Aliquam cursus euismod velit, ut condimentum ipsum imperdiet ac.
        </p>
        <it-button slot="footer" variant="primary" @click="${closeModal}">Chiudi</it-button>
      </it-modal>

      <it-modal size="xl" close-label="Chiudi finestra modale">
        <it-button slot="trigger" variant="primary">Modale molto grande</it-button>
        <span slot="header">Modale molto grande</span>
        <p slot="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis felis tortor, ultrices congue orci
          ultricies sed. In hac habitasse platea dictumst. Ut placerat ligula sed tincidunt dictum. Pellentesque dapibus
          nisl vel varius dignissim. Aliquam leo ligula, dapibus vitae porttitor sed, laoreet in massa. Aliquam interdum
          sollicitudin libero, consectetur lacinia enim aliquet pretium. Vestibulum sit amet ornare velit, ac efficitur
          nisi. In leo mauris, ultrices in turpis sit amet, tempus placerat neque. Cras in dolor sit amet ante pharetra
          commodo. Aliquam cursus euismod velit, ut condimentum ipsum imperdiet ac.
        </p>
        <it-button slot="footer" variant="primary" @click="${closeModal}">Chiudi</it-button>
      </it-modal>
    </div>
  `,
};

export const BackdropStatico: Story = {
  name: 'Backdrop statico',
  render: () => html`
    <it-modal static-backdrop close-label="Chiudi finestra modale">
      <it-button slot="trigger" variant="primary">Apri modale con backdrop statico</it-button>
      <span slot="header">Modale con backdrop statico</span>
      <p slot="content">Questa modale non si chiude cliccando sullo sfondo.</p>
      <it-button slot="footer" variant="outline-primary" @click="${closeModal}">Annulla</it-button>
      <it-button slot="footer" variant="primary" @click="${closeModal}">Conferma</it-button>
    </it-modal>
  `,
};

export const SenzaAnimazione: Story = {
  name: 'Rimuovere l’animazione',
  render: () => html`
    <it-modal disable-animation close-label="Chiudi finestra modale">
      <it-button slot="trigger" variant="primary">Apri modale senza animazione</it-button>
      <span slot="header">Modale senza animazione</span>
      <p slot="content">Questa modale appare immediatamente senza animazione di dissolvenza.</p>
      <it-button slot="footer" variant="outline-primary" @click="${closeModal}">Annulla</it-button>
      <it-button slot="footer" variant="primary" @click="${closeModal}">Conferma</it-button>
    </it-modal>
  `,
};

import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

type MegamenuProps = {
  label?: string;
  disabled?: boolean;
  alignment?:
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
  variant?: string;
  size?: string;
  'it-role'?: string;
  dark?: boolean;
  'full-width'?: boolean;
  'it-aria-label'?: string;
};
type Story = StoryObj<MegamenuProps>;

const meta = {
  title: 'Componenti/Megamenu',
  component: 'it-megamenu',
  parameters: { wrapperClasses: 'w100-layout megamenu-story-layout' },
  tags: ['a11y-ok', 'web-component', 'alpha'],
  args: {
    label: 'Megamenu',
    disabled: false,
    alignment: undefined,
    variant: 'primary',
    size: undefined,
    'it-role': undefined,
    dark: false,
    'full-width': false,
    'it-aria-label': undefined,
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Testo del pulsante che apre il dropdown del megamenu',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabilita il dropdown',
      table: { defaultValue: { summary: 'false' } },
    },
    alignment: {
      control: 'select',
      description: 'Posizionamento del menu rispetto al pulsante',
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
      type: 'string',
      table: { defaultValue: { summary: 'bottom-start' } },
    },
    variant: {
      control: 'select',
      description: 'Variante grafica del pulsante',
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'light', 'link'],
      type: 'string',
      table: { defaultValue: { summary: 'primary' } },
    },
    size: {
      control: 'select',
      description: 'Dimensione del pulsante',
      options: ['sm', 'lg'],
      type: 'string',
      table: {},
    },
    'it-role': {
      control: 'select',
      description: 'Ruolo del pulsante (vedi la sezione Accessibilità)',
      options: ['menu', 'list'],
      type: 'string',
      table: { defaultValue: { summary: 'menu' } },
    },
    dark: {
      control: 'boolean',
      description: 'Stile scuro per il menu dropdown',
      table: { defaultValue: { summary: 'false' } },
    },
    'full-width': {
      control: 'boolean',
      description: 'Imposta la larghezza del menu dropdown al 100% del contenitore',
      table: { defaultValue: { summary: 'false' } },
    },
    'it-aria-label': {
      control: 'text',
      description:
        "Valore per l'attributo `aria-label` del pulsante (obbligatorio per accessibilità se `label` è vuoto)",
      type: 'string',
    },
  },
} satisfies Meta<MegamenuProps>;

export default meta;

export const Base: Story = {
  render: (args) => html`
    <nav class="navbar navbar-expand-lg has-megamenu" aria-label="Menu principale">
      <it-button it-aria-label="Mostra o nascondi il menu" class="custom-navbar-toggler" it-aria-controls="navbar-A">
        <it-icon name="it-burger" color="inverse" size="sm"></it-icon>
      </it-button>
      <div class="navbar-collapsable" id="navbar-A" tabindex="-1">
        <div class="close-div">
          <it-button it-aria-label="Chiudi il menu" variant="link" size="sm" class="close-menu">
            <it-icon name="it-close" color="inverse" size="sm"></it-icon>
          </it-button>
        </div>
        <div class="menu-wrapper justify-content-lg-between">
          <ul class="navbar-nav">
            <!-- megamenu 1 -->
            <li class="nav-item dropdown megamenu">
              <it-megamenu
                label=${args.label}
                ?disabled=${args.disabled}
                alignment=${ifDefined(args.alignment)}
                size=${ifDefined(args.size)}
                variant=${args.variant}
                it-role=${ifDefined(args['it-role'])}
                ?dark=${args.dark}
                ?full-width=${args['full-width']}
                it-aria-label=${ifDefined(args['it-aria-label'])}
              >
                <div class="row">
                  <div class="col-xs-12 col-lg-4 px-0">
                    <div class="row">
                      <div class="col-12 it-vertical it-description pb-lg-3">
                        <div class="description-content ps-4 ps-sm-5 ms-3">
                          <div class="ratio ratio-21x9 lightgrey-bg-a1 mb-4 rounded">
                            <figure class="figure">
                              <img
                                src="https://placehold.co/560x240/ebebeb/808080/?text=Immagine"
                                class="figure-img img-fluid rounded"
                                alt="Segnaposto"
                              />
                            </figure>
                          </div>
                          <p>
                            Testo utile a fornire una descrizione dei contenuti della sezione
                            <strong>megamenu 1</strong>.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-lg-8">
                    <div class="it-heading-link-wrapper">
                      <a class="it-heading-link" href="#"
                        ><svg role="img" class="icon icon-sm me-2 mb-1">
                          <use href="/dist/svg/sprites.svg#it-arrow-right-triangle"></use>
                        </svg>
                        <span>Esplora la sezione megamenu 1</span>
                      </a>
                    </div>
                    <div class="row">
                      <div class="col-12 col-lg-6">
                        <div class="link-list-wrapper">
                          <ul class="link-list">
                            <li>
                              <a class="list-item dropdown-item" href="#">
                                <svg role="img" class="icon icon-sm me-2">
                                  <use href="/dist/svg/sprites.svg#it-arrow-right-triangle"></use>
                                </svg>
                                <span>Link lista 1</span>
                              </a>
                            </li>
                            <li>
                              <a class="list-item dropdown-item" href="#">
                                <svg role="img" class="icon icon-sm me-2">
                                  <use href="/dist/svg/sprites.svg#it-arrow-right-triangle"></use>
                                </svg>
                                <span>Link lista 2</span>
                              </a>
                            </li>
                            <li>
                              <a class="list-item dropdown-item " href="#">
                                <svg role="img" class="icon icon-sm me-2">
                                  <use href="/dist/svg/sprites.svg#it-arrow-right-triangle"></use>
                                </svg>
                                <span>Link lista 3</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="col-12 col-lg-6">
                        <div class="link-list-wrapper">
                          <ul class="link-list">
                            <li>
                              <a class="list-item dropdown-item" href="#">
                                <svg role="img" class="icon icon-sm me-2">
                                  <use href="/dist/svg/sprites.svg#it-arrow-right-triangle"></use>
                                </svg>
                                <span>Link lista 4</span>
                              </a>
                            </li>
                            <li>
                              <a class="list-item dropdown-item" href="#">
                                <svg role="img" class="icon icon-sm me-2">
                                  <use href="/dist/svg/sprites.svg#it-arrow-right-triangle"></use>
                                </svg>
                                <span>Link lista 5</span>
                              </a>
                            </li>
                            <li>
                              <a class="list-item dropdown-item " href="#">
                                <svg role="img" class="icon icon-sm me-2">
                                  <use href="/dist/svg/sprites.svg#it-arrow-right-triangle"></use>
                                </svg>
                                <span>Link lista 6</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </it-megamenu>
            </li>
            <!-- megamenu 2 -->
            <li class="nav-item dropdown megamenu"></li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  tags: ['!autodocs', '!dev'],
};

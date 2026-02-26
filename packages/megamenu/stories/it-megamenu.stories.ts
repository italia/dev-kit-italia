import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

type MegamenuProps = {
  label?: string;
  disabled?: boolean;
  active?: boolean;
  variant?: string;
  columns?: number;
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
    active: false,
    variant: 'primary',
    columns: 2,
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
    active: {
      control: 'boolean',
      description: 'Imposta lo stato attivo del pulsante',
      table: { defaultValue: { summary: 'false' } },
    },
    variant: {
      control: 'select',
      description: 'Variante grafica del pulsante',
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'light', 'link'],
      type: 'string',
      table: { defaultValue: { summary: 'primary' } },
    },
    columns: {
      control: 'number',
      description: 'Numero di colonne su cui verranno suddivisi i link del menu',
      table: { defaultValue: { summary: 2 } },
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
                ?active=${args.active}
                variant=${args.variant}
                it-aria-label=${ifDefined(args['it-aria-label'])}
                columns=${ifDefined(args.columns)}
              >
                <!-- SLOT DESCRIPTION -->
                <div slot="description">
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

                <!-- SLOT HEADER -->
                <div slot="header">
                  <a class="it-heading-link" href="#">
                    <it-icon
                      slot="prefix"
                      name="it-arrow-right-triangle"
                      size="sm"
                      color="primary"
                      class="me-2 mb-1"
                    ></it-icon>
                    <span>Esplora la sezione megamenu 1</span>
                  </a>
                </div>

                <!-- DROPDOWN LINKS ITEMS -->
                <it-dropdown-item href="#">
                  <it-icon slot="prefix" name="it-arrow-right-triangle" size="sm" color="primary"></it-icon>
                  Link lista 1</it-dropdown-item
                >
                <it-dropdown-item href="#">
                  <it-icon slot="prefix" name="it-arrow-right-triangle" size="sm" color="primary"></it-icon>
                  Link lista 2
                </it-dropdown-item>
                <it-dropdown-item href="#">
                  <it-icon slot="prefix" name="it-arrow-right-triangle" size="sm" color="primary"></it-icon>
                  Link lista 3
                </it-dropdown-item>
                <it-dropdown-item href="#">
                  <it-icon slot="prefix" name="it-arrow-right-triangle" size="sm" color="primary"></it-icon>
                  Link lista 4
                </it-dropdown-item>
                <it-dropdown-item href="#">
                  <it-icon slot="prefix" name="it-arrow-right-triangle" size="sm" color="primary"></it-icon>
                  Link lista 5
                </it-dropdown-item>
                <it-dropdown-item href="#">
                  <it-icon slot="prefix" name="it-arrow-right-triangle" size="sm" color="primary"></it-icon>
                  Link lista 6
                </it-dropdown-item>

                <!-- SLOT FOOTER

                <div slot="footer">
                  <a class="it-footer-link" href="#">
                    <it-icon
                      slot="prefix"
                      name="it-arrow-right-triangle"
                      size="sm"
                      color="primary"
                      class="me-2 mb-1"
                    ></it-icon>
                    <span>Esplora la sezione megamenu 1</span>
                  </a>
                </div>-->
              </it-megamenu>
            </li>
            <!-- megamenu 2 -->
            <li class="nav-item dropdown megamenu">
              <it-megamenu
                label="Megamenu 2"
                variant=${args.variant}
                columns="3"
                it-aria-label=${ifDefined(args['it-aria-label'])}
              >
                <!-- DROPDOWN LINKS ITEMS -->
                <it-dropdown-item href="#">
                  <it-icon slot="prefix" name="it-arrow-right-triangle" size="sm" color="primary"></it-icon>
                  Link lista 7</it-dropdown-item
                >
                <it-dropdown-item href="#">
                  <it-icon slot="prefix" name="it-arrow-right-triangle" size="sm" color="primary"></it-icon>
                  Link lista 8
                </it-dropdown-item>
                <it-dropdown-item href="#">
                  <it-icon slot="prefix" name="it-arrow-right-triangle" size="sm" color="primary"></it-icon>
                  Link lista 9
                </it-dropdown-item>
                <it-dropdown-item href="#">
                  <it-icon slot="prefix" name="it-arrow-right-triangle" size="sm" color="primary"></it-icon>
                  Link lista 10
                </it-dropdown-item>
                <it-dropdown-item href="#">
                  <it-icon slot="prefix" name="it-arrow-right-triangle" size="sm" color="primary"></it-icon>
                  Link lista 11
                </it-dropdown-item>
                <it-dropdown-item href="#">
                  <it-icon slot="prefix" name="it-arrow-right-triangle" size="sm" color="primary"></it-icon>
                  Link lista 12
                </it-dropdown-item>

                <div slot="footer">
                  <a class="it-footer-link" href="#">
                    <it-icon
                      slot="prefix"
                      name="it-arrow-right-triangle"
                      size="sm"
                      color="primary"
                      class="me-2 mb-1"
                    ></it-icon>
                    <span>Esplora la sezione megamenu 2</span>
                  </a>
                </div>
              </it-megamenu>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  tags: ['!autodocs', '!dev'],
};

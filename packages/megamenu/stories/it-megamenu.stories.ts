import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { type FooterAlign, FOOTER_ALIGN, type FooterPosition, FOOTER_POSITION } from '../src/types.ts';

type MegamenuProps = {
  label?: string;
  disabled?: boolean;
  active?: boolean;
  columns?: number;
  'it-aria-label'?: string;
  'footer-align'?: FooterAlign;
  'footer-position'?: FooterPosition;
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
    columns: 2,
    'it-aria-label': undefined,
    'footer-align': 'right',
    'footer-position': undefined,
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
    'footer-align': {
      control: 'select',
      description: 'Allineamento del contenuto del footer',
      options: FOOTER_ALIGN,
      type: 'string',
      table: { defaultValue: { summary: 'left' } },
    },
    'footer-position': {
      control: 'select',
      description: 'Posizione del footer all’interno del megamenu',
      options: FOOTER_POSITION,
      type: 'string',
      table: { defaultValue: { summary: 'bottom' } },
    },
  },
} satisfies Meta<MegamenuProps>;

const renderNav = (args: MegamenuProps, children: any) => html`
  <it-header>
    <div class="it-header-navbar-wrapper">
      <nav class="navbar navbar-expand-lg" aria-label="Navigazione principale">
        <div class="navbar-collapsable" id="navbar-A" tabindex="-1">
          <div class="menu-wrapper">
            <ul class="navbar-nav">
              ${children}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </it-header>
`;

const renderMegamenu = (args: MegamenuProps, children: any) => html`
  <it-megamenu
    label=${args.label}
    ?disabled=${args.disabled}
    ?active=${args.active}
    columns=${ifDefined(args.columns)}
    it-aria-label=${ifDefined(args['it-aria-label'])}
    footer-align=${ifDefined(args['footer-align'])}
    footer-position=${ifDefined(args['footer-position'])}
  >
    ${children}
  </it-megamenu>
`;

const renderLinks = (numLinks: number, start: number = 1) => {
  const links = [];
  for (let i = start; i < start + numLinks; i += 1) {
    links.push(html`
      <it-dropdown-item href="#">
        <it-icon slot="prefix" name="it-arrow-right-triangle" size="sm" color="primary"></it-icon>
        Link lista ${i}
      </it-dropdown-item>
    `);
  }
  return links.map((link) => html`${link}`);
};

const renderMegamenuCompleto = (args: MegamenuProps) =>
  html`${renderMegamenu(
    args,
    html` <!-- SLOT DESCRIPTION -->
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
          <strong>${args.label}</strong>.
        </p>
      </div>

      <!-- SLOT HEADER -->
      <div slot="header">
        <a class="it-heading-link" href="#">
          <it-icon name="it-arrow-right-triangle" size="sm" color="primary" class="me-2 mb-1"></it-icon>
          <span>Esplora la sezione ${args.label}</span>
        </a>
      </div>

      <!-- DROPDOWN LINKS ITEMS -->
      ${renderLinks(6)}`,
  )}`;

export default meta;

export const Base: Story = {
  render: (args) =>
    renderNav(
      args,
      html` <!-- megamenu 1 -->
        <li class="nav-item">${renderMegamenuCompleto(args)}</li>
        <!-- megamenu 2 -->
        <li class="nav-item">
          ${renderMegamenu(
            { ...args, active: false, label: 'Megamenu 2', columns: 3 },
            html`<!-- DROPDOWN LINKS ITEMS -->
              ${renderLinks(6, 7)}

              <!-- SLOT FOOTER -->
              <div slot="footer">
                <a class="it-footer-link" href="#">
                  <span>Esplora tutti i contenuti del megamenu</span>
                  <it-icon name="it-arrow-right" size="sm" color="primary" class="ms-2"></it-icon>
                </a>
              </div>`,
          )}
        </li>`,
    ),
  tags: ['!autodocs', '!dev'],
};

export const MegamenuCompleto: Story = {
  ...meta,
  name: 'Megamenu completo',
  render: (args) => renderNav(args, html`<li class="nav-item">${renderMegamenuCompleto(args)}</li> `),
};

export const MegamenuBase: Story = {
  ...meta,
  name: 'Megamenu base',
  args: { columns: 3 },

  render: (args) =>
    renderNav(
      args,
      html`
        <li class="nav-item">
          ${renderMegamenu(
            args,
            html` <!-- DROPDOWN LINKS ITEMS -->
              ${renderLinks(9)}`,
          )}
        </li>
      `,
    ),
};

export const MegamenuEsploraSezione: Story = {
  ...meta,
  name: 'Con link “Esplora la sezione”',
  args: { columns: 3 },

  render: (args) =>
    renderNav(
      args,
      html`
        <li class="nav-item">
          ${renderMegamenu(
            args,
            html` <!-- DROPDOWN LINKS ITEMS -->
              <!-- SLOT HEADER -->
              <div slot="header">
                <a class="it-heading-link" href="#">
                  <it-icon name="it-arrow-right-triangle" size="sm" color="primary" class="me-2 mb-1"></it-icon>
                  <span>Esplora la sezione ${args.label}</span>
                </a>
              </div>

              ${renderLinks(9)}`,
          )}
        </li>
      `,
    ),
};

export const MegamenuEsploraTutti: Story = {
  ...meta,
  name: 'Con link “Esplora tutti”',
  args: { columns: 3, 'footer-align': 'right' },
  render: (args) =>
    renderNav(
      args,
      html`
        <li class="nav-item">
          ${renderMegamenu(
            args,

            html`
              <!-- DROPDOWN LINKS ITEMS -->
              ${renderLinks(9)}

              <!-- SLOT FOOTER -->
              <div slot="footer">
                <a class="it-footer-link" href="#">
                  <span>Esplora tutti i contenuti del megamenu</span>
                  <it-icon name="it-arrow-right" size="sm" color="primary" class="ms-2"></it-icon>
                </a>
              </div>
            `,
          )}
        </li>
      `,
    ),
};

export const MegamenuCTABottom: Story = {
  ...meta,
  name: 'Con call to action in basso',
  args: { columns: 3, 'footer-position': 'bottom', 'footer-align': '' },
  render: (args) =>
    renderNav(
      args,
      html`
        <li class="nav-item">
          ${renderMegamenu(
            args,

            html`
              <!-- DROPDOWN LINKS ITEMS -->
              ${renderLinks(9)}

              <!-- SLOT FOOTER -->
              <div slot="footer">
                <div class="d-flex flex-column flex-lg-row">
                  <a class="it-footer-link flex-grow-1" href="#">
                    <it-icon name="it-bookmark" size="sm" color="primary" class="me-2"></it-icon>
                    <span>Call to action 1</span>
                  </a>
                  <a class="it-footer-link flex-grow-1" href="#">
                    <it-icon name="it-bookmark" size="sm" color="primary" class="me-2"></it-icon>
                    <span>Call to action 2</span>
                  </a>
                </div>
              </div>
            `,
          )}
        </li>
      `,
    ),
};

export const MegamenuCTARight: Story = {
  ...meta,
  name: 'Con call to action a destra',
  args: { columns: 3, 'footer-position': 'right', 'footer-align': '' },
  render: (args) =>
    renderNav(
      args,
      html`
        <li class="nav-item">
          ${renderMegamenu(
            args,

            html`
              <!-- DROPDOWN LINKS ITEMS -->
              ${renderLinks(9)}

              <!-- SLOT FOOTER -->
              <div slot="footer">
                <div class="d-flex flex-column justify-content-around">
                  <a class="it-footer-link" href="#">
                    <it-icon name="it-bookmark" size="sm" color="primary" class="me-2"></it-icon>
                    <span>Call to action 1</span>
                  </a>
                  <a class="it-footer-link" href="#">
                    <it-icon name="it-bookmark" size="sm" color="primary" class="me-2"></it-icon>
                    <span>Call to action 2</span>
                  </a>
                </div>
              </div>
            `,
          )}
        </li>
      `,
    ),
};

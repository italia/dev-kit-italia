import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '@italia/button';
import '@italia/dropdown';
import '@italia/icon';

type HeaderStoryArgs = {
  breakpoint: number;
  openAriaLabel: string;
  closeAriaLabel: string;
  modalAriaLabel: string;
  hideHeaderBrand: boolean;
  modalHeaderTheme?: 'dark' | 'light';
};
const defaultArgs = {
  breakpoint: 991,
  openAriaLabel: 'Mostra la navigazione',
  closeAriaLabel: 'Chiudi la navigazione',
  modalAriaLabel: 'Navigazione del sito',
  hideHeaderBrand: false,
  modalHeaderTheme: undefined,
};
const meta = {
  title: 'Componenti/Header',
  tags: ['alpha', 'documentation', 'a11y-ok'],
  parameters: {
    pageLayout: 'w-100',
  },
  argTypes: {
    breakpoint: {
      control: { type: 'number' },
      description: 'Larghezza in pixel sotto la quale si attiva la modalita mobile.',
      table: { defaultValue: { summary: 991 } },
    },
    openAriaLabel: {
      name: 'open-aria-label',
      control: { type: 'text' },
      description: 'Etichetta ARIA del pulsante che apre la navigazione mobile.',
      table: { defaultValue: { summary: 'Mostra la navigazione' } },
    },
    closeAriaLabel: {
      name: 'close-aria-label',
      control: { type: 'text' },
      description: 'Etichetta ARIA del pulsante che chiude la navigazione mobile.',
      table: { defaultValue: { summary: 'Chiudi la navigazione' } },
    },
    modalAriaLabel: {
      name: 'modal-aria-label',
      control: { type: 'text' },
      description: 'Etichetta ARIA della modale usata per la navigazione mobile.',
      table: { defaultValue: { summary: 'Navigazione del sito' } },
    },
    hideHeaderBrand: {
      name: 'hide-header-brand',
      control: { type: 'boolean' },
      description: 'Nasconde la fascia contente il brand, nell header della modale del menu su mobile.',
      table: { defaultValue: { summary: false } },
    },
    modalHeaderTheme: {
      name: 'modal-header-theme',
      control: { type: 'select' },
      options: ['dark', 'light'],
      description:
        "Tema del background dell'header della modale mobile. Se non valorizzato, usa il tema di default usato nell'Header Center.",
      table: { defaultValue: { summary: 'default (auto)' } },
    },
  },
} satisfies Meta<HeaderStoryArgs>;

export default meta;
type Story = StoryObj<HeaderStoryArgs>;

const renderHeaderSlim = ({ accessButton = 'default', theme = 'default' } = {}) => {
  let renderAccessButton = html`<it-button variant="primary" size="xs">Accedi</it-button>`;
  if (accessButton === 'full') {
    renderAccessButton = html` <a href="#" class="btn btn-primary btn-icon btn-full">
      <span class="rounded-icon">
        <it-icon name="it-user" color="primary" size="xs"></it-icon>
      </span>
      <span class="d-none d-lg-block">Accedi all'area personale</span>
    </a>`;
  }
  return html` <div class="it-header-slim-wrapper${theme === 'light' ? ' theme-light' : ''}">
    <div class="container-xxl">
      <div class="row">
        <div class="col-12">
          <div class="it-header-slim-wrapper-content">
            <a class="d-block navbar-brand" href="#">Ente appartenenza</a>
            <div class="nav-mobile">
              <nav aria-label="Navigazione accessoria">
                <div class="link-list-wrapper d-none d-lg-flex">
                  <ul class="link-list">
                    <li><a class="dropdown-item list-item" href="#" data-focus-mouse="false">Link 1</a></li>
                    <li><a class="list-item active" href="#" aria-current="page">Link 2 (Attivo)</a></li>
                  </ul>
                </div>
              </nav>
            </div>
            <div class="it-header-slim-right-zone">
              <it-dropdown label="ITA" size="sm" alignment="bottom-end">
                <it-dropdown-item href="#" active>
                  <span>ITA <span class="visually-hidden">selezionata</span></span>
                </it-dropdown-item>
                <it-dropdown-item href="#">
                  <span>ENG</span>
                </it-dropdown-item>
              </it-dropdown>
              <div class="it-access-top-wrapper">${renderAccessButton}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
};
export const SlimHeader: Story = {
  name: 'Slim Header',
  render: () => renderHeaderSlim(),
};

export const SlimHeaderActionFull: Story = {
  name: 'Slim Header con Pulsante full-responsive',
  render: () => renderHeaderSlim({ accessButton: 'full' }),
};

export const SlimHeaderLight: Story = {
  name: 'Slim Header - Versione chiara',
  render: () => renderHeaderSlim({ theme: 'light' }),
};

const renderHeaderCenter = ({ theme = 'default', compact = false } = {}) =>
  html` <div
    class="it-header-center-wrapper${theme === 'light' ? ' theme-light' : ''}${compact ? ' it-small-header' : ''} "
  >
    <div class="container-xxl">
      <div class="row">
        <div class="col-12">
          <div class="it-header-center-content-wrapper">
            <div class="it-brand-wrapper">
              <a href="#">
                <it-icon name="it-pa"></it-icon>
                <div class="it-brand-text">
                  <div class="it-brand-title">Nome dell'Istituzione</div>
                  <div class="it-brand-tagline d-none d-md-block">Tag line dell'Istituzione</div>
                </div>
              </a>
            </div>
            <div class="it-right-zone">
              <div class="it-socials d-none d-md-flex">
                <span>Seguici su</span>
                <ul>
                  <li>
                    <a href="#" aria-label="Facebook" target="_blank">
                      <it-icon name="it-facebook"></it-icon>
                    </a>
                  </li>
                  <li>
                    <a href="#" aria-label="Github" target="_blank">
                      <it-icon name="it-github"></it-icon>
                    </a>
                  </li>
                  <li>
                    <a href="#" aria-label="Twitter" target="_blank">
                      <it-icon name="it-twitter"></it-icon>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="it-search-wrapper">
                <span class="d-none d-md-block">Cerca</span>
                <a class="search-link rounded-icon" aria-label="Cerca nel sito" href="#">
                  <it-icon name="it-search"></it-icon>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;

export const HeaderCenter: Story = {
  name: 'Header Centrale',
  render: () => renderHeaderCenter({}),
};

export const HeaderCenterCompact: Story = {
  name: 'Header Centrale - Versione compatta',
  render: () => renderHeaderCenter({ compact: true }),
};

export const HeaderCenterLight: Story = {
  name: 'Header Centrale - Versione chiara',
  render: () => renderHeaderCenter({ theme: 'light' }),
};

const renderHeaderNav = ({ wrapperClassName = '' } = {}) =>
  html`<div class="it-header-navbar-wrapper ${wrapperClassName}">
    <div class="container-xxl">
      <div class="row">
        <div class="col-12">
          <!--start nav-->
          <nav class="navbar navbar-expand-lg" aria-label="Navigazione principale">
            <div class="navbar-collapsable" id="nav1" tabindex="-1">
              <div class="menu-wrapper">
                <ul class="navbar-nav">
                  <li class="nav-item active">
                    <a class="nav-link active" href="#" aria-current="page"><span>Link attivo</span></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link disabled" href="#" aria-disabled="true"><span>Link disabilitato</span></a>
                  </li>
                  <li class="nav-item">
                    <it-dropdown label="Dropdown" offset="0" no-flip>
                      <it-dropdown-item href="#">Link lista 1</it-dropdown-item>
                      <it-dropdown-item href="#">Link lista 2</it-dropdown-item>
                      <it-dropdown-item href="#">Link lista 3</it-dropdown-item>
                      <it-dropdown-item separator></it-dropdown-item>
                      <it-dropdown-item href="#">Link lista 4</it-dropdown-item>
                    </it-dropdown>
                  </li>
                  <!-- megamenu -->
                  <li class="nav-item">
                    <it-megamenu label="Megamenu" columns="2" footer-align="right">
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
                          <strong>Megamenu</strong>.
                        </p>
                      </div>

                      <!-- SLOT HEADER -->
                      <div slot="header">
                        <a class="it-heading-link" href="#">
                          <it-icon name="it-arrow-right-triangle" size="sm" color="primary" class="me-2 mb-1"></it-icon>
                          <span>Esplora la sezione Megamenu</span>
                        </a>
                      </div>

                      <!-- DROPDOWN LINKS ITEMS -->

                      <it-dropdown-item href="#">
                        <it-icon slot="prefix" name="it-arrow-right-triangle" size="sm" color="primary"></it-icon>
                        Link lista 1
                      </it-dropdown-item>

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
                    </it-megamenu>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>`;

export const HeaderNav: Story = {
  name: 'Header Nav',
  render: () => renderHeaderNav(),
};

export const HeaderNavDesktopLight: Story = {
  name: 'Header Nav - Versione chiara',
  render: () => renderHeaderNav({ wrapperClassName: 'theme-light' }),
};

export const HeaderNavSecondary: Story = {
  name: 'Header Nav con Navigazione secondaria',
  render: () =>
    html`<div class="it-header-navbar-wrapper">
      <div class="container-xxl">
        <div class="row">
          <div class="col-12">
            <!--start nav-->
            <nav class="navbar navbar-expand-lg" aria-label="Navigazione principale">
              <div class="navbar-collapsable" id="nav1" tabindex="-1">
                <div class="menu-wrapper">
                  <!-- Navigazione principale -->
                  <ul class="navbar-nav">
                    <li class="nav-item active">
                      <a class="nav-link active" href="#" aria-current="page"><span>Link attivo</span></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link disabled" href="#" aria-disabled="true"><span>Link disabilitato</span></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#"><span>Link</span></a>
                    </li>
                  </ul>
                  <!-- Navigazione secondaria -->
                  <ul class="navbar-nav navbar-secondary">
                    <li class="nav-item">
                      <a class="nav-link" href="#"><span>Link secondario</span></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#"><span>Link secondario</span></a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>`,
};

export const HeaderFull: Story = {
  name: 'Header completo',
  args: defaultArgs,
  render: (args) =>
    html`<it-header
      .breakpoint=${args.breakpoint}
      .openAriaLabel=${args.openAriaLabel}
      .closeAriaLabel=${args.closeAriaLabel}
      .hideHeaderBrand=${args.hideHeaderBrand}
      .modalHeaderTheme=${args.modalHeaderTheme}
    >
      <header class="it-header-wrapper">${renderHeaderSlim()} ${renderHeaderCenter()}${renderHeaderNav()}</header>
    </it-header>`,
};

export const HeaderFullLight: Story = {
  name: 'Header completo - Versione chiara',
  args: defaultArgs,
  render: () =>
    html`<it-header
      .breakpoint=${defaultArgs.breakpoint}
      .openAriaLabel=${defaultArgs.openAriaLabel}
      .closeAriaLabel=${defaultArgs.closeAriaLabel}
      .hideHeaderBrand=${defaultArgs.hideHeaderBrand}
      .modalHeaderTheme=${defaultArgs.modalHeaderTheme}
    >
      <header class="it-header-wrapper it-shadow">
        ${renderHeaderSlim({ theme: 'light' })}
        ${renderHeaderCenter({ theme: 'light' })}${renderHeaderNav({
          wrapperClassName: 'theme-light',
        })}
      </header>
    </it-header>`,
};

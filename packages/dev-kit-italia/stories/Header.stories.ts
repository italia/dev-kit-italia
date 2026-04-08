import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@italia/button';
import '@italia/dropdown';
import '@italia/icon';

const meta: Meta<{}> = {
  title: 'Componenti/Header',
  tags: ['autodocs'],
  decorators: (Story) => html`<div id="header-sb-wrapper" style="width:100%;margin:0;">${Story()}</div>`,
  parameters: {
    docs: {
      description: {
        component: `
L'header di un sito della Pubblica Amministrazione è solitamente composto di 3 elementi principali:

- **Slim Header**: una sottile fascia dello stesso colore o, preferibilmente, di colore lievemente diverso rispetto al tema principale del sito, che mostra appartenenza e alcuni link funzionali con impatto globale o esterno al sito stesso.
- **Header Centrale**: che identifica in modo chiaro il sito attraverso logo, testo e social, e può contenere un link per effettuare ricerche sul sito.
- **Header Nav**: dedicato alla navigazione, visibile su schermi di grandi dimensioni e attraverso il classico pulsante di tipo "burger menu" su dispositivi mobili.

Per indicazioni su "Come e Quando usarlo" si fa riferimento alla [guida del design-system](https://designers.italia.it/design-system/componenti/header/).

<div class="callout callout-success"><div class="callout-inner"><div class="callout-title"><span class="text">Accessibilità</span></div>
<p>Considerando l'importanza dell'Header per la navigazione, si ricorda porre particolare attenzione all'utilizzo della corretta semantica HTML, alle etichette e agli attributi ARIA, oltre a validare e testare sempre con utenti il risultato.</p>
<p>Il titolo del sito, "Nome dell'Istituzione" negli esempi, è contenuto in un <code>&lt;div&gt;</code> generico e non un tag <code>&lt;h1&gt;</code> per evitare conflitti con gli <code>&lt;h1&gt;</code> presenti nelle singole pagine. Nel caso in cui la home page fosse priva di un titolo (es: primo contenuto è una ultima notizia in evidenza) si può applicare il tag <code>&lt;h1&gt;</code> al titolo dell'header unicamente in quella pagina oppure creare un <code>h1</code> nei contenuti principali di pagina con classe <code>.visually-hidden</code>.</p>
<p>Questa ultima soluzione sarà anche utile a dare focus direttamente al tag <code>&lt;h1&gt;</code> laddove siano presenti <a href="https://bootstrap-italia-occbc2i3f-dip-trasformazione-digitale.vercel.app/docs/menu-di-navigazione/skiplinks/">skiplinks</a> che permettano agli utenti che navigano da tastiera o con tecnologie assistive di saltare i contenuti dell'Header.</p>
</div></div>
`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<{}>;

export const Preview: Story = {
  tags: ['!autodocs', '!dev'],
  render: () => html``,
};

export const SlimHeader: Story = {
  parameters: {
    docs: {
      description: {
        story: `
Lo Slim Header mostra un'intestazione, solitamente con riferimento all'ente di appartenenza del progetto o riferimenti utili, oltre ad un eventuale menu per il cambio lingua e l'accesso ad area riservata.

Il cambio lingua è gestito con il componente dropdown.
`,
      },
    },
  },
  render: () => html`
    <div class="it-header-slim-wrapper">
      <div class="container-xxl">
        <div class="row">
          <div class="col-12">
            <div class="it-header-slim-wrapper-content">
              <a class="d-none d-lg-block navbar-brand" href="#">Ente appartenenza</a>
              <div class="nav-mobile">
                <nav aria-label="Navigazione accessoria">
                  <a
                    class="it-opener d-lg-none"
                    data-bs-toggle="collapse"
                    href="#menu1a"
                    role="button"
                    aria-expanded="false"
                    aria-controls="menu1a"
                  >
                    <span>Ente appartenenza</span>
                    <it-icon name="it-expand"></it-icon>
                  </a>
                  <div class="link-list-wrapper collapse" id="menu1a">
                    <ul class="link-list">
                      <li><a class="dropdown-item list-item" href="#">Link 1</a></li>
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
                <div class="it-access-top-wrapper">
                  <it-button variant="primary" size="xs">Accedi</it-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
};

export const SlimHeaderLight: Story = {
  name: 'Slim Header - Versione chiara',
  parameters: {
    docs: {
      description: {
        story: `
Per cambiare tema allo slim header è sufficiente aggiungere la classe \`theme-light\` al tag \`<div class="it-header-slim-wrapper">\`.
`,
      },
    },
  },
  render: () => html`
    <div class="it-header-slim-wrapper theme-light">
      <div class="container-xxl">
        <div class="row">
          <div class="col-12">
            <div class="it-header-slim-wrapper-content">
              <a class="d-none d-lg-block navbar-brand" href="#">Ente appartenenza</a>
              <div class="nav-mobile">
                <nav aria-label="Navigazione accessoria">
                  <a
                    class="it-opener d-lg-none"
                    data-bs-toggle="collapse"
                    href="#menu1b"
                    role="button"
                    aria-expanded="false"
                    aria-controls="menu1b"
                  >
                    <span>Ente appartenenza</span>
                    <it-icon name="it-expand" aria-hidden="true"></it-icon>
                  </a>
                  <div class="link-list-wrapper collapse" id="menu1b">
                    <ul class="link-list">
                      <li><a class="dropdown-item list-item" href="#">Link 1</a></li>
                      <li><a class="list-item active" href="#" aria-current="page">Link 2 (Attivo)</a></li>
                    </ul>
                  </div>
                </nav>
              </div>
              <div class="it-header-slim-right-zone">
                <it-dropdown label="ITA" size="sm" variant="light" alignment="bottom-end">
                  <it-dropdown-item href="#" active>
                    <span>ITA <span class="visually-hidden">selezionata</span></span>
                  </it-dropdown-item>
                  <it-dropdown-item href="#">
                    <span>ENG</span>
                  </it-dropdown-item>
                </it-dropdown>
                <div class="it-access-top-wrapper">
                  <it-button variant="primary" size="xs">Accedi</it-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
};

export const SlimHeaderFullResponsive: Story = {
  name: 'Slim Header - Pulsante full-responsive',
  parameters: {
    docs: {
      description: {
        story: `
Per trasformare il pulsante di action situato nell'elemento identificato con \`.it-header-slim-right-zone\` e renderlo full-responsive è sufficiente applicare la classe \`.btn-full\` alla classe \`.btn\` del link/pulsante.

Il modificatore \`.btn-full\` è disponibile anche con il tema chiaro attivato da \`.theme-light\`.
`,
      },
    },
  },
  render: () => html`
    <div class="it-header-slim-wrapper">
      <div class="container-xxl">
        <div class="row">
          <div class="col-12">
            <div class="it-header-slim-wrapper-content">
              <a class="d-lg-block navbar-brand" href="#">Ente appartenenza</a>
              <div class="it-header-slim-right-zone">
                <it-dropdown label="ITA" size="sm" alignment="bottom-end">
                  <it-dropdown-item href="#" active>
                    <span>ITA <span class="visually-hidden">selezionata</span></span>
                  </it-dropdown-item>
                  <it-dropdown-item href="#">
                    <span>ENG</span>
                  </it-dropdown-item>
                </it-dropdown>
                <a href="#" class="btn btn-primary btn-icon btn-full">
                  <span class="rounded-icon">
                    <it-icon name="it-user" color="primary"></it-icon>
                  </span>
                  <span class="d-none d-lg-block">Accedi all'area personale</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
};

export const HeaderCentrale: Story = {
  parameters: {
    docs: {
      description: {
        story: `
Header Centrale, per mostrare il logo dell'ente e la sua descrizione, link aggiuntivi ai social media e l'accesso al motore di ricerca, se presente.
`,
      },
    },
  },
  render: () => html`
    <div class="it-header-center-wrapper">
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
    </div>
  `,
};

export const HeaderCentraleCompatto: Story = {
  name: 'Header Centrale - Versione compatta',
  parameters: {
    docs: {
      description: {
        story: `
Per utilizzare la versione più compatta in verticale dell'header centrale è sufficiente aggiungere la classe \`it-small-header\` al tag \`<div class="it-header-center-wrapper">\`.
`,
      },
    },
  },
  render: () => html`
    <div class="it-header-center-wrapper it-small-header">
      <div class="container-xxl">
        <div class="row">
          <div class="col-12">
            <div class="it-header-center-content-wrapper">
              <div class="it-brand-wrapper">
                <a href="#">
                  <it-icon name="it-pa" aria-hidden="true"></it-icon>
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
    </div>
  `,
};

export const HeaderCentraleLight: Story = {
  name: 'Header Centrale - Versione chiara',
  parameters: {
    docs: {
      description: {
        story: `
Per cambiare tema all'header centrale è sufficiente aggiungere la classe \`theme-light\` al tag \`<div class="it-header-center-wrapper">\`.
`,
      },
    },
  },
  render: () => html`
    <div class="it-header-center-wrapper theme-light">
      <div class="container-xxl">
        <div class="row">
          <div class="col-12">
            <div class="it-header-center-content-wrapper">
              <div class="it-brand-wrapper">
                <a href="#">
                  <it-icon name="it-pa" aria-hidden="true"></it-icon>
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
    </div>
  `,
};

export const HeaderNav: Story = {
  parameters: {
    docs: {
      description: {
        story: `
Header Nav, per elencare le voci di navigazione, siano esse semplici link, o pulsanti per Dropdown.
`,
      },
    },
  },
  render: () => html`
    <div class="it-header-navbar-wrapper">
      <div class="container-xxl">
        <div class="row">
          <div class="col-12">
            <nav class="navbar navbar-expand-lg has-megamenu" aria-label="Navigazione principale">
              <button
                class="custom-navbar-toggler"
                type="button"
                aria-controls="nav1"
                aria-expanded="false"
                aria-label="Mostra/Nascondi la navigazione"
                data-bs-toggle="navbarcollapsible"
                data-bs-target="#nav1"
              >
                <it-icon name="it-burger" class="bg-override"></it-icon>
              </button>
              <div class="navbar-collapsable" id="nav1" style="display: none;">
                <div class="overlay" style="display: none;"></div>
                <div class="close-div">
                  <button class="btn close-menu" type="button">
                    <span class="visually-hidden">Nascondi la navigazione</span>
                    <it-icon name="it-close-big"></it-icon>
                  </button>
                </div>
                <div class="menu-wrapper">
                  <ul class="navbar-nav">
                    <li class="nav-item active">
                      <a class="nav-link active" href="#" aria-current="page"><span>Link attivo</span></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#"><span>Link</span></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link disabled" href="#" aria-disabled="true"><span>Link disabilitato</span></a>
                    </li>
                    <li class="nav-item">
                      <it-dropdown size="lg" label="Menu Dropdown">
                        <it-dropdown-item href="#">Link lista 1</it-dropdown-item>
                        <it-dropdown-item href="#">Link lista 2</it-dropdown-item>
                        <it-dropdown-item href="#">Link lista 3</it-dropdown-item>
                        <it-dropdown-item separator></it-dropdown-item>
                        <it-dropdown-item href="#">Link lista 4</it-dropdown-item>
                      </it-dropdown>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  `,
};

export const HeaderNavMobileScura: Story = {
  name: 'Header Nav - Mobile scura',
  parameters: {
    docs: {
      description: {
        story: `
Per modificare il tema dell'Header Nav mobile aggiungere la classe \`.theme-dark-mobile\` al tag \`<div class="it-header-navbar-wrapper">\`.
`,
      },
    },
  },
  render: () => html`
    <div class="it-header-navbar-wrapper theme-dark-mobile">
      <div class="container-xxl">
        <div class="row">
          <div class="col-12">
            <nav class="navbar navbar-expand-lg has-megamenu" aria-label="Navigazione principale">
              <button
                class="custom-navbar-toggler"
                type="button"
                aria-controls="nav2"
                aria-expanded="false"
                aria-label="Mostra/Nascondi la navigazione"
                data-bs-toggle="navbarcollapsible"
                data-bs-target="#nav2"
              >
                <it-icon name="it-burger" class="bg-override"></it-icon>
              </button>
              <div class="navbar-collapsable" id="nav2" style="display: none;">
                <div class="overlay" style="display: none;"></div>
                <div class="close-div">
                  <button class="btn close-menu" type="button">
                    <span class="visually-hidden">Nascondi la navigazione</span>
                    <it-icon name="it-close-big"></it-icon>
                  </button>
                </div>
                <div class="menu-wrapper">
                  <ul class="navbar-nav">
                    <li class="nav-item active">
                      <a class="nav-link active" href="#" aria-current="page"><span>Link attivo</span></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#"><span>Link</span></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link disabled" href="#" aria-disabled="true"><span>Link disabilitato</span></a>
                    </li>
                    <li class="nav-item">
                      <it-dropdown size="lg" label="Link Dropdown">
                        <it-dropdown-item href="#">Link lista 1</it-dropdown-item>
                        <it-dropdown-item href="#">Link lista 2</it-dropdown-item>
                        <it-dropdown-item href="#">Link lista 3</it-dropdown-item>
                        <it-dropdown-item separator></it-dropdown-item>
                        <it-dropdown-item href="#">Link lista 4</it-dropdown-item>
                      </it-dropdown>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  `,
};

export const HeaderNavDesktopChiara: Story = {
  name: 'Header Nav - Desktop chiara',
  parameters: {
    docs: {
      description: {
        story: `
Per modificare il tema dell'Header Nav desktop aggiungere la classe \`.theme-light-desk\` al tag \`<div class="it-header-navbar-wrapper">\`.
`,
      },
    },
  },
  render: () => html`
    <div class="it-header-navbar-wrapper theme-light-desk">
      <div class="container-xxl">
        <div class="row">
          <div class="col-12">
            <nav class="navbar navbar-expand-lg has-megamenu" aria-label="Navigazione principale">
              <button
                class="custom-navbar-toggler"
                type="button"
                aria-controls="nav3"
                aria-expanded="false"
                aria-label="Mostra/Nascondi la navigazione"
                data-bs-toggle="navbarcollapsible"
                data-bs-target="#nav3"
              >
                <it-icon name="it-burger"></it-icon>
              </button>
              <div class="navbar-collapsable" id="nav3" style="display: none;">
                <div class="overlay" style="display: none;"></div>
                <div class="close-div">
                  <button class="btn close-menu" type="button">
                    <span class="visually-hidden">Nascondi la navigazione</span>
                    <it-icon name="it-close-big"></it-icon>
                  </button>
                </div>
                <div class="menu-wrapper">
                  <ul class="navbar-nav">
                    <li class="nav-item active">
                      <a class="nav-link active" href="#" aria-current="page"><span>Link attivo</span></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#"><span>Link</span></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link disabled" href="#" aria-disabled="true"><span>Link disabilitato</span></a>
                    </li>
                    <li class="nav-item">
                      <it-dropdown size="lg" label="Menu Dropdown" variant="light">
                        <div class="link-list-wrapper">
                          <ul class="link-list">
                            <li>
                              <a class="dropdown-item list-item" href="#"><span>Link lista 1</span></a>
                            </li>
                            <li>
                              <a class="dropdown-item list-item" href="#"><span>Link lista 2</span></a>
                            </li>
                            <li>
                              <a class="dropdown-item list-item" href="#"><span>Link lista 3</span></a>
                            </li>
                            <li><span class="divider"></span></li>
                            <li>
                              <a class="dropdown-item list-item" href="#"><span>Link lista 4</span></a>
                            </li>
                          </ul>
                        </div>
                      </it-dropdown>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  `,
};

export const HeaderNavSecondaria: Story = {
  name: 'Header Nav - Navigazione secondaria',
  parameters: {
    docs: {
      description: {
        story: `
Al menu di navigazione principale può essere aggiunto anche un menu di navigazione secondario includendo a \`.menu-wrapper\` una seconda lista \`<ul>\` con classe \`.navbar-nav.navbar-secondary\` e la stessa struttura dati della lista \`.navbar-nav\` principale.
`,
      },
    },
  },
  render: () => html`
    <div class="it-header-navbar-wrapper">
      <div class="container-xxl">
        <div class="row">
          <div class="col-12">
            <nav class="navbar navbar-expand-lg has-megamenu" aria-label="Navigazione principale">
              <button
                class="custom-navbar-toggler"
                type="button"
                aria-controls="nav4"
                aria-expanded="false"
                aria-label="Mostra/Nascondi la navigazione"
                data-bs-toggle="navbarcollapsible"
                data-bs-target="#nav4"
              >
                <it-icon name="it-burger" class="bg-override"></it-icon>
              </button>
              <div class="navbar-collapsable" id="nav4" style="display: none;">
                <div class="overlay" style="display: none;"></div>
                <div class="close-div">
                  <button class="btn close-menu" type="button">
                    <span class="visually-hidden">Nascondi la navigazione</span>
                    <it-icon name="it-close-big"></it-icon>
                  </button>
                </div>
                <div class="menu-wrapper">
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
    </div>
  `,
};

export const HeaderCompleto: Story = {
  parameters: {
    docs: {
      description: {
        story: `
Esempio di header completo che combina tutti e tre gli elementi: Slim Header, Header Centrale e Header Nav.
`,
      },
    },
  },
  render: () => html`
    <header class="it-header-wrapper">
      <!-- Slim Header -->
      <div class="it-header-slim-wrapper">
        <div class="container-xxl">
          <div class="row">
            <div class="col-12">
              <div class="it-header-slim-wrapper-content">
                <a class="d-none d-lg-block navbar-brand" href="#">Ente appartenenza</a>
                <div class="nav-mobile">
                  <nav aria-label="Navigazione secondaria">
                    <a
                      class="it-opener d-lg-none"
                      data-bs-toggle="collapse"
                      href="#menuC1"
                      role="button"
                      aria-expanded="false"
                      aria-controls="menuC1"
                    >
                      <span>Ente appartenenza</span>
                      <it-icon name="it-expand" aria-hidden="true"></it-icon>
                    </a>
                    <div class="link-list-wrapper collapse" id="menuC1">
                      <ul class="link-list">
                        <li><a class="dropdown-item list-item" href="#">Link 1</a></li>
                        <li><a class="list-item active" href="#" aria-current="page">Link 2 (Attivo)</a></li>
                      </ul>
                    </div>
                  </nav>
                </div>
                <div class="it-header-slim-right-zone">
                  <it-dropdown label="ITA" size="sm">
                    <it-dropdown-item href="#" active>
                      <span>ITA <span class="visually-hidden">selezionata</span></span>
                    </it-dropdown-item>
                    <it-dropdown-item href="#">
                      <span>ENG</span>
                    </it-dropdown-item>
                  </it-dropdown>
                  <div class="it-access-top-wrapper">
                    <it-button variant="primary" size="xs">Accedi</it-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Header Centrale e Nav -->
      <div class="it-nav-wrapper">
        <div class="it-header-center-wrapper">
          <div class="container-xxl">
            <div class="row">
              <div class="col-12">
                <div class="it-header-center-content-wrapper">
                  <div class="it-brand-wrapper">
                    <a href="#">
                      <it-icon name="it-pa" aria-hidden="true"></it-icon>
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
        </div>

        <div class="it-header-navbar-wrapper">
          <div class="container-xxl">
            <div class="row">
              <div class="col-12">
                <nav class="navbar navbar-expand-lg has-megamenu" aria-label="Navigazione principale">
                  <button
                    class="custom-navbar-toggler"
                    type="button"
                    aria-controls="navC1"
                    aria-expanded="false"
                    aria-label="Mostra/Nascondi la navigazione"
                    data-bs-toggle="navbarcollapsible"
                    data-bs-target="#navC1"
                  >
                    <it-icon name="it-burger"></it-icon>
                  </button>
                  <div class="navbar-collapsable" id="navC1" style="display: none;">
                    <div class="overlay" style="display: none;"></div>
                    <div class="close-div">
                      <button class="btn close-menu" type="button">
                        <span class="visually-hidden">Nascondi la navigazione</span>
                        <it-icon name="it-close-big"></it-icon>
                      </button>
                    </div>
                    <div class="menu-wrapper">
                      <ul class="navbar-nav">
                        <li class="nav-item active">
                          <a class="nav-link active" href="#" aria-current="page"><span>Link attivo</span></a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#"><span>Link</span></a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link disabled" href="#" aria-disabled="true"><span>Link disabilitato</span></a>
                        </li>
                        <li class="nav-item">
                          <it-dropdown size="lg" label="Menu Dropdown">
                            <it-dropdown-item href="#">Link lista 1</it-dropdown-item>
                            <it-dropdown-item href="#">Link lista 2</it-dropdown-item>
                            <it-dropdown-item href="#">Link lista 3</it-dropdown-item>
                            <it-dropdown-item separator></it-dropdown-item>
                            <it-dropdown-item href="#">Link lista 4</it-dropdown-item>
                          </it-dropdown>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  `,
};

export const HeaderCompletoLight: Story = {
  name: 'Header Completo - Versione chiara',
  parameters: {
    docs: {
      description: {
        story: `
Nella versione light è consigliabile aggiungere la classe \`.it-shadow\` al tag \`<div class="it-header-wrapper">\`. Verrà creata un'ombra per enfatizzare l'Header rispetto alla pagina in cui è contenuto.
`,
      },
    },
  },
  render: () => html`
    <header class="it-header-wrapper it-shadow">
      <!-- Slim Header -->
      <div class="it-header-slim-wrapper theme-light">
        <div class="container-xxl">
          <div class="row">
            <div class="col-12">
              <div class="it-header-slim-wrapper-content">
                <a class="d-none d-lg-block navbar-brand" href="#">Ente appartenenza</a>
                <div class="nav-mobile">
                  <nav aria-label="Navigazione secondaria">
                    <a
                      class="it-opener d-lg-none"
                      data-bs-toggle="collapse"
                      href="#menuC2"
                      role="button"
                      aria-expanded="false"
                      aria-controls="menuC2"
                    >
                      <span>Ente appartenenza</span>
                      <it-icon name="it-expand" aria-hidden="true"></it-icon>
                    </a>
                    <div class="link-list-wrapper collapse" id="menuC2">
                      <ul class="link-list">
                        <li><a class="dropdown-item list-item" href="#">Link 1</a></li>
                        <li><a class="list-item active" href="#" aria-current="page">Link 2 (Attivo)</a></li>
                      </ul>
                    </div>
                  </nav>
                </div>
                <div class="it-header-slim-right-zone">
                  <it-dropdown label="ITA" size="sm" alignment="bottom-end" variant="light">
                    <it-dropdown-item href="#" active>
                      <span>ITA <span class="visually-hidden">selezionata</span></span>
                    </it-dropdown-item>
                    <it-dropdown-item href="#">
                      <span>ENG</span>
                    </it-dropdown-item>
                  </it-dropdown>
                  <div class="it-access-top-wrapper">
                    <it-button variant="primary" size="xs">Accedi</it-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Header Centrale e Nav -->
      <div class="it-nav-wrapper">
        <div class="it-header-center-wrapper theme-light">
          <div class="container-xxl">
            <div class="row">
              <div class="col-12">
                <div class="it-header-center-content-wrapper">
                  <div class="it-brand-wrapper">
                    <a href="#">
                      <it-icon name="it-pa" aria-hidden="true"></it-icon>
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
        </div>

        <div class="it-header-navbar-wrapper theme-light-desk">
          <div class="container-xxl">
            <div class="row">
              <div class="col-12">
                <nav class="navbar navbar-expand-lg has-megamenu" aria-label="Navigazione principale">
                  <button
                    class="custom-navbar-toggler"
                    type="button"
                    aria-controls="navC2"
                    aria-expanded="false"
                    aria-label="Mostra/Nascondi la navigazione"
                    data-bs-toggle="navbarcollapsible"
                    data-bs-target="#navC2"
                  >
                    <it-icon name="it-burger"></it-icon>
                  </button>
                  <div class="navbar-collapsable" id="navC2" style="display: none;">
                    <div class="overlay" style="display: none;"></div>
                    <div class="close-div">
                      <button class="btn close-menu" type="button">
                        <span class="visually-hidden">Nascondi la navigazione</span>
                        <it-icon name="it-close-big"></it-icon>
                      </button>
                    </div>
                    <div class="menu-wrapper">
                      <ul class="navbar-nav">
                        <li class="nav-item active">
                          <a class="nav-link active" href="#" aria-current="page"><span>Link attivo</span></a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#"><span>Link</span></a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link disabled" href="#" aria-disabled="true"><span>Link disabilitato</span></a>
                        </li>
                        <li class="nav-item">
                          <it-dropdown size="lg" label="Menu Dropdown" variant="light">
                            <it-dropdown-item href="#">Link lista 1</it-dropdown-item>
                            <it-dropdown-item href="#">Link lista 2</it-dropdown-item>
                            <it-dropdown-item href="#">Link lista 3</it-dropdown-item>
                            <it-dropdown-item separator></it-dropdown-item>
                            <it-dropdown-item href="#">Link lista 4</it-dropdown-item>
                          </it-dropdown>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  `,
};

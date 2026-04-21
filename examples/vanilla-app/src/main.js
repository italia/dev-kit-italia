import javascriptLogo from './javascript.svg';

import '@italia/dev-kit-italia/elements.js';
// pagina-specific scripts (es. examples per componenti)
import './js/popover.js';

const it = {
  $code: 'it',
  $name: 'Italiano',
  $dir: 'ltr',
  video_consent_accept: 'Accetto i cookie',
  showHidePassword: 'Mostra/Nascondi Password (Custom translated message).',
};

const en = {
  $code: 'en',
  $name: 'English',
  $dir: 'ltr',
  video_consent_accept: 'Accept',
  showHidePassword: 'Show/Hide Password (Custom translated message).',
};

registerTranslation(it);
registerTranslation(en);

const componentsMenuItems = [
  { label: 'Accordion', href: '/src/accordion' },
  { label: 'Affix', href: '/src/affix' },
  { label: 'Alert', href: '/src/alert' },
  { label: 'Autocomplete', href: '/src/autocomplete' },
  { label: 'Avatar', href: '/src/avatar' },
  { label: 'Back to Top', href: '/src/back-to-top' },
  { label: 'Back', href: '/src/back' },
  { label: 'Badge', href: '/src/badge' },
  { label: 'Bottom Nav', href: '/src/bottom-nav' },
  { label: 'Breadcrumbs', href: '/src/breadcrumbs' },
  { label: 'Button', href: '/src/button' },
  { label: 'Callout', href: '/src/callout' },
  { label: 'Checkbox', href: '/src/checkbox' },
  { label: 'Chip', href: '/src/chip' },
  { label: 'Collapse', href: '/src/collapse ' },
  { label: 'Dimmer', href: '/src/dimmer' },
  { label: 'Dropdown', href: '/src/dropdown' },
  { label: 'Form', href: '/src/form' },
  { label: 'Forward', href: '/src/forward' },
  { label: 'Hero', href: '/src/hero' },
  { label: 'Icon', href: '/src/icon' },
  { label: 'Input', href: '/src/input' },
  { label: 'List', href: '/src/list' },
  { label: 'Megamenu', href: '/src/megamenu' },
  { label: 'Modal', href: '/src/modal' },
  { label: 'Navscroll', href: '/src/navscroll' },
  { label: 'Overlay', href: '/src/overlay' },
  { label: 'Pagination', href: '/src/pagination.html' },
  { label: 'Popover', href: '/src/popover' },
  { label: 'Progress', href: '/src/progress' },
  { label: 'Radio', href: '/src/radio-examples.html' },
  { label: 'Rating', href: '/src/rating.html' },
  { label: 'Section', href: '/src/section' },
  { label: 'Select', href: '/src/select' },
  { label: 'Sidebar', href: '/src/sidebar' },
  { label: 'Skiplinks', href: '/src/skiplinks' },
  { label: 'Bottom Nav', href: '/src/bottom-nav' },
  { label: 'Sticky', href: '/src/sticky' },
  { label: 'Timeline', href: '/src/timeline' },
  { label: 'Tables', href: '/src/tables' },
  { label: 'Tabs', href: '/src/tabs' },
  { label: 'Toggle', href: '/src/toggle' },
  { label: 'Transfer', href: '/src/transfer' },
  { label: 'Video', href: '/src/video' },
];

document.querySelector('#app-header').innerHTML = `
  <div class="app-header bg-primary">
    <div class="container">
      <a href="https://vite.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
        <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
      </a>
      <nav class="navbar navbar-expand-lg" aria-label="Menu principale">
        <div class="navbar-collapsable" id="navbar-A" tabindex="-1">
          <div class="menu-wrapper justify-content-lg-between">
            <ul class="navbar-nav">
              <li class="nav-item">
                <it-megamenu label="Componenti" columns="6">
                  <!-- DROPDOWN LINKS ITEMS -->
                  ${componentsMenuItems
                    .map(
                      (item) => `<it-dropdown-item href="${item.href}">
                                <it-icon
                                  slot="prefix"
                                  name="it-arrow-right-triangle"
                                  size="sm"
                                  color="primary"
                                ></it-icon>
                                ${item.label}
                              </it-dropdown-item>`,
                    )
                    .join('')}
                  </it-megamenu>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>
`;

document.querySelector('#app-footer').innerHTML = `
  <footer class="it-footer">
    <div class="it-footer-main">
      <div class="container">
        <section class="pb-4">
          <div class="row clearfix">
            <div class="col-sm-12">
              <div class="it-brand-wrapper">
                <a href="#">
                  <it-icon name="it-pa" size="lg" color="inverse"></it-icon>
                  <div class="it-brand-text ms-3">
                    <h2 class="no_toc">Nome Ente</h2>
                    <h3 class="no_toc">Tagline</h3>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div class="row">
            <div class="col-lg-3 col-md-3 col-sm-6 pb-2">
              <h4>
                <a href="#" title="Vai alla pagina: Amministrazione">Amministrazione</a>
              </h4>
              <div class="link-list-wrapper">
                <ul class="footer-list link-list clearfix">
                  <li><a class="list-item" href="#">Giunta e consiglio</a></li>
                  <li><a class="list-item" href="#">Aree di competenza</a></li>
                  <li><a class="list-item" href="#">Dipendenti</a></li>
                  <li><a class="list-item" href="#">Luoghi</a></li>
                  <li><a class="list-item" href="#">Associazioni e società partecipate</a></li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6 pb-2">
              <h4>
                <a href="#" title="Vai alla pagina: Servizi">Servizi</a>
              </h4>
              <div class="link-list-wrapper">
                <ul class="footer-list link-list clearfix">
                  <li><a class="list-item" href="#">Pagamenti</a></li>
                  <li><a class="list-item" href="#">Sostegno</a></li>
                  <li><a class="list-item" href="#">Domande e iscrizioni</a></li>
                  <li><a class="list-item" href="#">Segnalazioni</a></li>
                  <li><a class="list-item" href="#">Autorizzazioni e concessioni</a></li>
                  <li><a class="list-item" href="#">Certificati e dichiarazioni</a></li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6 pb-2">
              <h4>
                <a href="#" title="Vai alla pagina: Novità">Novità</a>
              </h4>
              <div class="link-list-wrapper">
                <ul class="footer-list link-list clearfix">
                  <li><a class="list-item" href="#">Notizie</a></li>
                  <li><a class="list-item" href="#">Eventi</a></li>
                  <li><a class="list-item" href="#">Comunicati stampa</a></li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6">
              <h4>
                <a href="#" title="Vai alla pagina: Documenti">Documenti</a>
              </h4>
              <div class="link-list-wrapper">
                <ul class="footer-list link-list clearfix">
                  <li><a class="list-item" href="#">Progetti e attività</a></li>
                  <li><a class="list-item" href="#">Delibere, determine e ordinanze</a></li>
                  <li><a class="list-item" href="#">Bandi</a></li>
                  <li><a class="list-item" href="#">Concorsi</a></li>
                  <li><a class="list-item" href="#">Albo pretorio</a></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section class="py-4 border-white border-top">
          <div class="row">
            <div class="col-lg-4 col-md-4 pb-2">
              <h4>Contatti</h4>
              <p>
                <strong>Nome Ente</strong><br />
                Via Roma 0 - 00000 Città - Codice fiscale / P. IVA: 000000000
              </p>
              <div class="link-list-wrapper">
                <ul class="footer-list link-list clearfix">
                  <li><a class="list-item" href="#">Posta Elettronica Certificata</a></li>
                  <li>
                    <a class="list-item" href="#">URP - Ufficio Relazioni con il Pubblico</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 pb-2">
              <div class="pb-2">
                <h4>Seguici su</h4>
                <ul class="list-inline text-left social">
                  <li class="list-inline-item">
                    <a class="p-2 text-white" href="#">
                      <it-icon color="inverse" size="sm" name="it-designers-italia"></it-icon>
                      <span class="visually-hidden">Designers Italia (link esterno)</span>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a class="p-2 text-white" href="#">
                      <it-icon color="inverse" size="sm" name="it-twitter"></it-icon>
                      <span class="visually-hidden">X (link esterno)</span>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a class="p-2 text-white" href="#">
                      <it-icon color="inverse" size="sm" name="it-medium"></it-icon>
                      <span class="visually-hidden">Medium (link esterno)</span>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a class="p-2 text-white" href="#">
                      <it-icon color="inverse" size="sm" name="it-behance"></it-icon>
                      <span class="visually-hidden">Behance (link esterno)</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 mt-2">
              <h4>Newsletter</h4>
              <div class="form-group d-flex gap-1">
                <it-input
                  slotted
                  type="text"
                  id="newsletter-email"
                  size="sm"
                  placeholder="Inserisci la tua email"
                  label-hidden
                >
                  <span slot="label">Iscriviti alla newsletter</span>
                  <it-button type="submit" variant="primary" slot="append">Iscriviti</it-button>
                </it-input>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    <div class="it-footer-small-prints clearfix">
      <div class="container">
        <ul class="it-footer-small-prints-list list-inline mb-0 d-flex flex-column flex-md-row">
          <li class="list-inline-item"><a href="#">Media policy</a></li>
          <li class="list-inline-item"><a href="#">Note legali</a></li>
          <li class="list-inline-item"><a href="#">Privacy policy</a></li>
          <li class="list-inline-item"><a href="#">Mappa del sito</a></li>
          <li class="list-inline-item">
            <a href="https://form.agid.gov.it/view/xyz">
              Dichiarazione di accessibilità <span class="visually-hidden">(link esterno su sito AgID)</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
`;

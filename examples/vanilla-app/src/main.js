import javascriptLogo from './javascript.svg';

// import '@italia/dev-kit-italia/fonts.css';
// import '@italia/dev-kit-italia/styles.css';
import '@italia/dev-kit-italia/elements.js';

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

document.querySelector('#app-header').innerHTML = `
  <div class="app-header">
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <nav class="app-nav">
      <a href="/src/accordion">
        Accordion
      </a>
      <a href="/src/affix">
        Affix
      </a>
      <a href="/src/avatar">
        Avatar
      </a>
      <a href="/src/back-to-top">
        Back to Top
      </a>
      <a href="/src/badge">
        Badge
      </a>
      <a href="/src/button">
        Button
      </a>
      <a href="/src/checkbox">
        Checkbox
      </a>
      <a href="/src/chip">
        Chip
      </a>
      <a href="/src/collapse">
        Collapse
      </a>
      <a href="/src/dropdown">
        Dropdown
      </a>
      <a href="/src/form">
        Form
      </a>
      <a href="/src/icon">
        Icon
      </a>
      <a href="/src/input">
        Input
      </a>
      <a href="/src/modal">
        Modal
      </a>
      <a href="/src/overlay">
        Overlay
      </a>
      <a href="/src/radio-examples.html">
        Radio
      </a>
      <a href="/src/rating.html">
        Rating
      </a>
      <a href="/src/section">
        Section
      </a>
      <a href="/src/skiplinks">
        Skiplinks
      </a>
      <a href="/src/sticky">
        Sticky
      </a>
      <a href="/src/video">
        Video
      </a>
    </nav>

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

// Static, HTML-first markup (level 2 of the SSR guide): the custom-element tags
// render server-side as plain HTML and get upgraded on the client once
// elements.js is registered (see KitElementsLoader). No 'use client' needed.
export default function Header() {
  return (
    <it-header>
      <header className="it-header-wrapper">
        <div className="it-header-slim-wrapper">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <div className="it-header-slim-wrapper-content">
                  <a className="d-block navbar-brand" href="#">
                    Ente appartenenza
                  </a>
                  <div className="it-header-slim-right-zone">
                    <it-dropdown label="ITA" size="sm" alignment="bottom-end">
                      <it-dropdown-item href="#" active>
                        <span>
                          ITA <span className="visually-hidden">selezionata</span>
                        </span>
                      </it-dropdown-item>
                      <it-dropdown-item href="#">
                        <span>ENG</span>
                      </it-dropdown-item>
                    </it-dropdown>
                    <div className="it-access-top-wrapper">
                      <it-button variant="primary" size="xs">
                        Accedi
                      </it-button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="it-header-center-wrapper">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <div className="it-header-center-content-wrapper">
                  <div className="it-brand-wrapper">
                    <a href="#">
                      <it-icon name="it-pa"></it-icon>
                      <div className="it-brand-text">
                        <div className="it-brand-title">Nome dell&rsquo;Istituzione</div>
                        <div className="it-brand-tagline d-none d-md-block">Tag line dell&rsquo;Istituzione</div>
                      </div>
                    </a>
                  </div>
                  <div className="it-right-zone">
                    <div className="it-search-wrapper">
                      <span className="d-none d-md-block">Cerca</span>
                      <a className="search-link rounded-icon" aria-label="Cerca nel sito" href="#">
                        <it-icon name="it-search"></it-icon>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="it-header-navbar-wrapper">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <nav className="navbar navbar-expand-lg" aria-label="Navigazione principale">
                  <div className="navbar-collapsable" id="nav-header" tabIndex="-1">
                    <div className="menu-wrapper">
                      <ul className="navbar-nav">
                        <li className="nav-item active">
                          <a className="nav-link active" href="#" aria-current="page">
                            <span>Home</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            <span>Amministrazione</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            <span>Servizi</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </it-header>
  );
}

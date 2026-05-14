export default function Megamenu() {
  return (
    <>
      <h1>Megamenu</h1>

      {/* completo */}
      <section>
        <h2>Megamenu completo</h2>
        <it-header>
          <div className="it-header-navbar-wrapper">
            <nav className="navbar navbar-expand-lg" aria-label="Navigazione principale">
              <div className="navbar-collapsable" id="navbar-E" tabIndex="-1">
                <div className="menu-wrapper">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <it-megamenu label="Megamenu" columns="2" footer-align="right">
                        {/* SLOT DESCRIPTION */}
                        <div slot="description">
                          <div className="ratio ratio-21x9 lightgrey-bg-a1 mb-4 rounded">
                            <figure className="figure">
                              <img
                                src="https://placehold.co/560x240/ebebeb/808080/?text=Immagine"
                                className="figure-img img-fluid rounded"
                                alt="Segnaposto"
                              />
                            </figure>
                          </div>
                          <p>
                            Testo utile a fornire una descrizione dei contenuti della sezione
                            <strong>Megamenu</strong>.
                          </p>
                        </div>

                        {/* SLOT HEADER */}
                        <div slot="header">
                          <a className="it-heading-link" href="#">
                            <it-icon
                              name="it-arrow-right-triangle"
                              size="sm"
                              color="primary"
                              className="me-2 mb-1"
                            ></it-icon>
                            <span>Esplora la sezione Megamenu</span>
                          </a>
                        </div>

                        {/* DROPDOWN LINKS ITEMS  */}

                        <it-dropdown-item href="#">
                          <it-icon
                            slot="prefix"
                            name="it-arrow-right-triangle"
                            size="sm"
                            color="primary"
                            className="me-2"
                          ></it-icon>
                          Link lista 1
                        </it-dropdown-item>

                        <it-dropdown-item href="#">
                          <it-icon
                            slot="prefix"
                            name="it-arrow-right-triangle"
                            size="sm"
                            color="primary"
                            className="me-2"
                          ></it-icon>
                          Link lista 2
                        </it-dropdown-item>

                        <it-dropdown-item href="#">
                          <it-icon
                            slot="prefix"
                            name="it-arrow-right-triangle"
                            size="sm"
                            color="primary"
                            className="me-2"
                          ></it-icon>
                          Link lista 3
                        </it-dropdown-item>

                        <it-dropdown-item href="#">
                          <it-icon
                            slot="prefix"
                            name="it-arrow-right-triangle"
                            size="sm"
                            color="primary"
                            className="me-2"
                          ></it-icon>
                          Link lista 4
                        </it-dropdown-item>

                        <it-dropdown-item href="#">
                          <it-icon
                            slot="prefix"
                            name="it-arrow-right-triangle"
                            size="sm"
                            color="primary"
                            className="me-2"
                          ></it-icon>
                          Link lista 5
                        </it-dropdown-item>

                        <it-dropdown-item href="#">
                          <it-icon
                            slot="prefix"
                            name="it-arrow-right-triangle"
                            size="sm"
                            color="primary"
                            className="me-2"
                          ></it-icon>
                          Link lista 6
                        </it-dropdown-item>
                      </it-megamenu>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </it-header>
      </section>

      {/* base */}
      <section>
        <h2>Megamenu base</h2>
        <it-header>
          <div className="it-header-navbar-wrapper">
            <nav className="navbar navbar-expand-lg" aria-label="Navigazione principale">
              <div className="navbar-collapsable" id="navbar-E" tabIndex="-1">
                <div className="menu-wrapper">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <it-megamenu label="Megamenu" columns="3" footer-align="right">
                        {/* DROPDOWN LINKS ITEMS */}

                        <it-dropdown-item href="#">
                          <it-icon
                            slot="prefix"
                            name="it-arrow-right-triangle"
                            size="sm"
                            color="primary"
                            className="me-2"
                          ></it-icon>
                          Link lista 1
                        </it-dropdown-item>

                        <it-dropdown-item href="#">
                          <it-icon
                            slot="prefix"
                            name="it-arrow-right-triangle"
                            size="sm"
                            color="primary"
                            className="me-2"
                          ></it-icon>
                          Link lista 2
                        </it-dropdown-item>

                        <it-dropdown-item href="#">
                          <it-icon
                            slot="prefix"
                            name="it-arrow-right-triangle"
                            size="sm"
                            color="primary"
                            className="me-2"
                          ></it-icon>
                          Link lista 3
                        </it-dropdown-item>

                        <it-dropdown-item href="#">
                          <it-icon
                            slot="prefix"
                            name="it-arrow-right-triangle"
                            size="sm"
                            color="primary"
                            className="me-2"
                          ></it-icon>
                          Link lista 4
                        </it-dropdown-item>

                        <it-dropdown-item href="#">
                          <it-icon
                            slot="prefix"
                            name="it-arrow-right-triangle"
                            size="sm"
                            color="primary"
                            className="me-2"
                          ></it-icon>
                          Link lista 5
                        </it-dropdown-item>

                        <it-dropdown-item href="#">
                          <it-icon
                            slot="prefix"
                            name="it-arrow-right-triangle"
                            size="sm"
                            color="primary"
                            className="me-2"
                          ></it-icon>
                          Link lista 6
                        </it-dropdown-item>

                        <it-dropdown-item href="#">
                          <it-icon
                            slot="prefix"
                            name="it-arrow-right-triangle"
                            size="sm"
                            color="primary"
                            className="me-2"
                          ></it-icon>
                          Link lista 7
                        </it-dropdown-item>

                        <it-dropdown-item href="#">
                          <it-icon
                            slot="prefix"
                            name="it-arrow-right-triangle"
                            size="sm"
                            color="primary"
                            className="me-2"
                          ></it-icon>
                          Link lista 8
                        </it-dropdown-item>

                        <it-dropdown-item href="#">
                          <it-icon
                            slot="prefix"
                            name="it-arrow-right-triangle"
                            size="sm"
                            color="primary"
                            className="me-2"
                          ></it-icon>
                          Link lista 9
                        </it-dropdown-item>
                      </it-megamenu>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </it-header>
      </section>

      {/* con link esplora la sezione */}
      <section>
        <h2>Megamenu con link “Esplora la sezione”</h2>
        <it-header>
          <div className="it-header-navbar-wrapper">
            <nav className="navbar navbar-expand-lg" aria-label="Navigazione principale">
              <div className="navbar-collapsable" id="navbar-E" tabIndex="-1">
                <div className="menu-wrapper">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <it-megamenu label="Megamenu" columns="3" footer-align="right">
                        {/* DROPDOWN LINKS ITEMS */}
                        {/* SLOT HEADER */}
                        <div slot="header">
                          <a className="it-heading-link" href="#">
                            <it-icon
                              name="it-arrow-right-triangle"
                              size="sm"
                              color="primary"
                              className="me-2 mb-1"
                            ></it-icon>
                            <span>Esplora la sezione Megamenu</span>
                          </a>
                        </div>

                        <it-dropdown-item href="#">
                          <it-icon
                            slot="prefix"
                            name="it-arrow-right-triangle"
                            size="sm"
                            color="primary"
                            className="me-2"
                          ></it-icon>
                          Link lista 1
                        </it-dropdown-item>

                        <it-dropdown-item href="#">
                          <it-icon
                            slot="prefix"
                            name="it-arrow-right-triangle"
                            size="sm"
                            color="primary"
                            className="me-2"
                          ></it-icon>
                          Link lista 2
                        </it-dropdown-item>

                        <it-dropdown-item href="#">
                          <it-icon
                            slot="prefix"
                            name="it-arrow-right-triangle"
                            size="sm"
                            color="primary"
                            className="me-2"
                          ></it-icon>
                          Link lista 3
                        </it-dropdown-item>

                        <it-dropdown-item href="#">
                          <it-icon
                            slot="prefix"
                            name="it-arrow-right-triangle"
                            size="sm"
                            color="primary"
                            className="me-2"
                          ></it-icon>
                          Link lista 4
                        </it-dropdown-item>

                        <it-dropdown-item href="#">
                          <it-icon
                            slot="prefix"
                            name="it-arrow-right-triangle"
                            size="sm"
                            color="primary"
                            className="me-2"
                          ></it-icon>
                          Link lista 5
                        </it-dropdown-item>

                        <it-dropdown-item href="#">
                          <it-icon
                            slot="prefix"
                            name="it-arrow-right-triangle"
                            size="sm"
                            color="primary"
                            className="me-2"
                          ></it-icon>
                          Link lista 6
                        </it-dropdown-item>

                        <it-dropdown-item href="#">
                          <it-icon
                            slot="prefix"
                            name="it-arrow-right-triangle"
                            size="sm"
                            color="primary"
                            className="me-2"
                          ></it-icon>
                          Link lista 7
                        </it-dropdown-item>

                        <it-dropdown-item href="#">
                          <it-icon
                            slot="prefix"
                            name="it-arrow-right-triangle"
                            size="sm"
                            color="primary"
                            className="me-2"
                          ></it-icon>
                          Link lista 8
                        </it-dropdown-item>

                        <it-dropdown-item href="#">
                          <it-icon
                            slot="prefix"
                            name="it-arrow-right-triangle"
                            size="sm"
                            color="primary"
                            className="me-2"
                          ></it-icon>
                          Link lista 9
                        </it-dropdown-item>
                      </it-megamenu>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </it-header>
      </section>

      {/* con link esplora tutti */}
      <section>
        <h2>Megamenu con link “Esplora tutti”</h2>
        <it-header>
          <div className="it-header-navbar-wrapper">
            <nav className="navbar navbar-expand-lg" aria-label="Navigazione principale">
              <div className="navbar-collapsable" id="navbar-E" tabIndex="-1">
                <div className="menu-wrapper">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <it-megamenu label="Megamenu" columns="3" footer-align="right">
                        {/* DROPDOWN LINKS ITEMS */}

                        <it-dropdown-item href="#">
                          <it-icon
                            slot="prefix"
                            name="it-arrow-right-triangle"
                            size="sm"
                            color="primary"
                            className="me-2"
                          ></it-icon>
                          Link lista 1
                        </it-dropdown-item>

                        <it-dropdown-item href="#">
                          <it-icon
                            slot="prefix"
                            name="it-arrow-right-triangle"
                            size="sm"
                            color="primary"
                            className="me-2"
                          ></it-icon>
                          Link lista 2
                        </it-dropdown-item>

                        <it-dropdown-item href="#">
                          <it-icon
                            slot="prefix"
                            name="it-arrow-right-triangle"
                            size="sm"
                            color="primary"
                            className="me-2"
                          ></it-icon>
                          Link lista 3
                        </it-dropdown-item>

                        <it-dropdown-item href="#">
                          <it-icon
                            slot="prefix"
                            name="it-arrow-right-triangle"
                            size="sm"
                            color="primary"
                            className="me-2"
                          ></it-icon>
                          Link lista 4
                        </it-dropdown-item>

                        <it-dropdown-item href="#">
                          <it-icon
                            slot="prefix"
                            name="it-arrow-right-triangle"
                            size="sm"
                            color="primary"
                            className="me-2"
                          ></it-icon>
                          Link lista 5
                        </it-dropdown-item>

                        <it-dropdown-item href="#">
                          <it-icon
                            slot="prefix"
                            name="it-arrow-right-triangle"
                            size="sm"
                            color="primary"
                            className="me-2"
                          ></it-icon>
                          Link lista 6
                        </it-dropdown-item>

                        <it-dropdown-item href="#">
                          <it-icon
                            slot="prefix"
                            name="it-arrow-right-triangle"
                            size="sm"
                            color="primary"
                            className="me-2"
                          ></it-icon>
                          Link lista 7
                        </it-dropdown-item>

                        <it-dropdown-item href="#">
                          <it-icon
                            slot="prefix"
                            name="it-arrow-right-triangle"
                            size="sm"
                            color="primary"
                            className="me-2"
                          ></it-icon>
                          Link lista 8
                        </it-dropdown-item>

                        <it-dropdown-item href="#">
                          <it-icon
                            slot="prefix"
                            name="it-arrow-right-triangle"
                            size="sm"
                            color="primary"
                            className="me-2"
                          ></it-icon>
                          Link lista 9
                        </it-dropdown-item>

                        {/* SLOT FOOTER */}
                        <div slot="footer">
                          <a className="it-footer-link" href="#">
                            <span>Esplora tutti i contenuti del megamenu</span>
                            <it-icon name="it-arrow-right" size="sm" color="primary" className="ms-2"></it-icon>
                          </a>
                        </div>
                      </it-megamenu>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </it-header>
      </section>

      {/* con call to action in basso */}
      <section>
        <h2>Megamenu con call to action in basso</h2>

        <it-header>
          <div className="it-header-navbar-wrapper">
            <nav className="navbar navbar-expand-lg" aria-label="Navigazione principale">
              <div className="navbar-collapsable" id="navbar-E" tabIndex="-1">
                <div className="menu-wrapper">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <it-megamenu label="Megamenu" columns="3" footer-align="" footer-position="bottom">
                        {/* DROPDOWN LINKS ITEMS */}

                        <it-dropdown-item href="#">
                          <it-icon
                            slot="prefix"
                            name="it-arrow-right-triangle"
                            size="sm"
                            color="primary"
                            className="me-2"
                          ></it-icon>
                          Link lista 1
                        </it-dropdown-item>

                        <it-dropdown-item href="#">
                          <it-icon
                            slot="prefix"
                            name="it-arrow-right-triangle"
                            size="sm"
                            color="primary"
                            className="me-2"
                          ></it-icon>
                          Link lista 2
                        </it-dropdown-item>

                        <it-dropdown-item href="#">
                          <it-icon
                            slot="prefix"
                            name="it-arrow-right-triangle"
                            size="sm"
                            color="primary"
                            className="me-2"
                          ></it-icon>
                          Link lista 3
                        </it-dropdown-item>

                        <it-dropdown-item href="#">
                          <it-icon
                            slot="prefix"
                            name="it-arrow-right-triangle"
                            size="sm"
                            color="primary"
                            className="me-2"
                          ></it-icon>
                          Link lista 4
                        </it-dropdown-item>

                        <it-dropdown-item href="#">
                          <it-icon
                            slot="prefix"
                            name="it-arrow-right-triangle"
                            size="sm"
                            color="primary"
                            className="me-2"
                          ></it-icon>
                          Link lista 5
                        </it-dropdown-item>

                        <it-dropdown-item href="#">
                          <it-icon
                            slot="prefix"
                            name="it-arrow-right-triangle"
                            size="sm"
                            color="primary"
                            className="me-2"
                          ></it-icon>
                          Link lista 6
                        </it-dropdown-item>

                        <it-dropdown-item href="#">
                          <it-icon
                            slot="prefix"
                            name="it-arrow-right-triangle"
                            size="sm"
                            color="primary"
                            className="me-2"
                          ></it-icon>
                          Link lista 7
                        </it-dropdown-item>

                        <it-dropdown-item href="#">
                          <it-icon
                            slot="prefix"
                            name="it-arrow-right-triangle"
                            size="sm"
                            color="primary"
                            className="me-2"
                          ></it-icon>
                          Link lista 8
                        </it-dropdown-item>

                        <it-dropdown-item href="#">
                          <it-icon
                            slot="prefix"
                            name="it-arrow-right-triangle"
                            size="sm"
                            color="primary"
                            className="me-2"
                          ></it-icon>
                          Link lista 9
                        </it-dropdown-item>

                        {/* SLOT FOOTER */}
                        <div slot="footer">
                          <div className="d-flex flex-column flex-lg-row">
                            <a className="it-footer-link flex-grow-1" href="#">
                              <it-icon name="it-bookmark" size="sm" color="primary" className="me-2"></it-icon>
                              <span>Call to action 1</span>
                            </a>
                            <a className="it-footer-link flex-grow-1" href="#">
                              <it-icon name="it-bookmark" size="sm" color="primary" className="me-2"></it-icon>
                              <span>Call to action 2</span>
                            </a>
                          </div>
                        </div>
                      </it-megamenu>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </it-header>
      </section>

      {/* con call to action a destra */}
      <section>
        <h2>Megamenu con call to action a destra</h2>

        <it-header>
          <div className="it-header-navbar-wrapper">
            <nav className="navbar navbar-expand-lg" aria-label="Navigazione principale">
              <div className="navbar-collapsable" id="navbar-E" tabIndex="-1">
                <div className="menu-wrapper">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <it-megamenu label="Megamenu" columns="3" footer-align="" footer-position="right">
                        {/* DROPDOWN LINKS ITEMS */}

                        <it-dropdown-item href="#">
                          <it-icon
                            slot="prefix"
                            name="it-arrow-right-triangle"
                            size="sm"
                            color="primary"
                            className="me-2"
                          ></it-icon>
                          Link lista 1
                        </it-dropdown-item>

                        <it-dropdown-item href="#">
                          <it-icon
                            slot="prefix"
                            name="it-arrow-right-triangle"
                            size="sm"
                            color="primary"
                            className="me-2"
                          ></it-icon>
                          Link lista 2
                        </it-dropdown-item>

                        <it-dropdown-item href="#">
                          <it-icon
                            slot="prefix"
                            name="it-arrow-right-triangle"
                            size="sm"
                            color="primary"
                            className="me-2"
                          ></it-icon>
                          Link lista 3
                        </it-dropdown-item>

                        <it-dropdown-item href="#">
                          <it-icon
                            slot="prefix"
                            name="it-arrow-right-triangle"
                            size="sm"
                            color="primary"
                            className="me-2"
                          ></it-icon>
                          Link lista 4
                        </it-dropdown-item>

                        <it-dropdown-item href="#">
                          <it-icon
                            slot="prefix"
                            name="it-arrow-right-triangle"
                            size="sm"
                            color="primary"
                            className="me-2"
                          ></it-icon>
                          Link lista 5
                        </it-dropdown-item>

                        <it-dropdown-item href="#">
                          <it-icon
                            slot="prefix"
                            name="it-arrow-right-triangle"
                            size="sm"
                            color="primary"
                            className="me-2"
                          ></it-icon>
                          Link lista 6
                        </it-dropdown-item>

                        <it-dropdown-item href="#">
                          <it-icon
                            slot="prefix"
                            name="it-arrow-right-triangle"
                            size="sm"
                            color="primary"
                            className="me-2"
                          ></it-icon>
                          Link lista 7
                        </it-dropdown-item>

                        <it-dropdown-item href="#">
                          <it-icon
                            slot="prefix"
                            name="it-arrow-right-triangle"
                            size="sm"
                            color="primary"
                            className="me-2"
                          ></it-icon>
                          Link lista 8
                        </it-dropdown-item>

                        <it-dropdown-item href="#">
                          <it-icon
                            slot="prefix"
                            name="it-arrow-right-triangle"
                            size="sm"
                            color="primary"
                            className="me-2"
                          ></it-icon>
                          Link lista 9
                        </it-dropdown-item>

                        {/* SLOT FOOTER */}
                        <div slot="footer">
                          <div className="d-flex flex-column justify-content-around">
                            <a className="it-footer-link" href="#">
                              <it-icon name="it-bookmark" size="sm" color="primary" className="me-2"></it-icon>
                              <span>Call to action 1</span>
                            </a>
                            <a className="it-footer-link" href="#">
                              <it-icon name="it-bookmark" size="sm" color="primary" className="me-2"></it-icon>
                              <span>Call to action 2</span>
                            </a>
                          </div>
                        </div>
                      </it-megamenu>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </it-header>
      </section>
    </>
  );
}

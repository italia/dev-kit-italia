<template>
      <h1>Header</h1>

      <section>
        <h2>Slim Header</h2>
        <p>
          Lo Slim Header mostra il riferimento all'ente di appartenenza e può contenere il cambio lingua
          e l'accesso all'area personale.
        </p>

        <h3>Versione standard</h3>
        <div class="it-header-slim-wrapper mb-5">
          <div class="container-xxl">
            <div class="row">
              <div class="col-12">
                <div class="it-header-slim-wrapper-content">
                  <a class="d-block navbar-brand" href="#">Ente appartenenza</a>
                  <div class="nav-mobile">
                    <nav aria-label="Navigazione accessoria slim standard">
                      <div class="link-list-wrapper d-none d-lg-flex">
                        <ul class="link-list">
                          <li><a class="list-item" href="#" data-focus-mouse="false">Link 1</a></li>
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

        <h3>Pulsante full-responsive</h3>
        <div class="it-header-slim-wrapper mb-5">
          <div class="container-xxl">
            <div class="row">
              <div class="col-12">
                <div class="it-header-slim-wrapper-content">
                  <a class="d-block navbar-brand" href="#">Ente appartenenza</a>
                  <div class="nav-mobile">
                    <nav aria-label="Navigazione accessoria slim full responsive">
                      <div class="link-list-wrapper d-none d-lg-flex">
                        <ul class="link-list">
                          <li><a class="list-item" href="#" data-focus-mouse="false">Link 1</a></li>
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
                      <a href="#" class="btn btn-primary btn-icon btn-full">
                        <span class="rounded-icon">
                          <it-icon name="it-user" color="primary" size="xs"></it-icon>
                        </span>
                        <span class="d-none d-lg-block">Accedi all'area personale</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3>Versione chiara</h3>
        <div class="it-header-slim-wrapper theme-light mb-5">
          <div class="container-xxl">
            <div class="row">
              <div class="col-12">
                <div class="it-header-slim-wrapper-content">
                  <a class="d-block navbar-brand" href="#">Ente appartenenza</a>
                  <div class="nav-mobile">
                    <nav aria-label="Navigazione accessoria slim light">
                      <div class="link-list-wrapper d-none d-lg-flex">
                        <ul class="link-list">
                          <li><a class="list-item" href="#" data-focus-mouse="false">Link 1</a></li>
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
      </section>

      <section>
        <h2>Header Centrale</h2>
        <p>
          L'Header Centrale mostra logo, nome dell'istituzione e area destra con social e ricerca.
        </p>

        <h3>Versione standard</h3>
        <div class="it-header-center-wrapper mb-5">
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

        <h3>Versione compatta</h3>
        <div class="it-header-center-wrapper it-small-header mb-5">
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

        <h3>Versione chiara</h3>
        <div class="it-header-center-wrapper theme-light mb-5">
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
      </section>

      <section>
        <h2>Header Nav</h2>
        <p>
          L'Header Nav mostra il menu di navigazione principale, con supporto per Dropdown e Megamenu.
        </p>

        <h3>Header Nav standard</h3>
        <div class="it-header-navbar-wrapper mb-5">
          <div class="container-xxl">
            <div class="row">
              <div class="col-12">
                <nav class="navbar navbar-expand-lg" aria-label="Navigazione principale header nav standard">
                  <div class="navbar-collapsable" id="nav-header-standard" tabindex="-1">
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
                        <li class="nav-item">
                          <it-megamenu label="Megamenu" columns="2" footer-align="right">
                            <div slot="description">
                              <div class="ratio ratio-21x9 lightgrey-bg-a1 mb-4 rounded">
                                <figure class="figure">
                                  <img src="https://placehold.co/560x240/ebebeb/808080/?text=Immagine"
                                    class="figure-img img-fluid rounded" alt="Segnaposto" />
                                </figure>
                              </div>
                              <p>
                                Testo utile a fornire una descrizione dei contenuti della sezione
                                <strong>Megamenu</strong>.
                              </p>
                            </div>

                            <div slot="header">
                              <a class="it-heading-link" href="#">
                                <it-icon name="it-arrow-right-triangle" size="sm" color="primary"
                                  class="me-2 mb-1"></it-icon>
                                <span>Esplora la sezione Megamenu</span>
                              </a>
                            </div>

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
        </div>

        <h3>Header Nav mobile scura</h3>
        <div class="it-header-navbar-wrapper theme-dark-mobile mb-5">
          <div class="container-xxl">
            <div class="row">
              <div class="col-12">
                <nav class="navbar navbar-expand-lg" aria-label="Navigazione principale header nav mobile scura">
                  <div class="navbar-collapsable" id="nav-header-mobile-dark" tabindex="-1">
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
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <h3>Header Nav chiara</h3>
        <div class="it-header-navbar-wrapper theme-light mb-5">
          <div class="container-xxl">
            <div class="row">
              <div class="col-12">
                <nav class="navbar navbar-expand-lg" aria-label="Navigazione principale header nav chiara">
                  <div class="navbar-collapsable" id="nav-header-light" tabindex="-1">
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
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <h3>Navigazione secondaria</h3>
        <div class="it-header-navbar-wrapper mb-5">
          <div class="container-xxl">
            <div class="row">
              <div class="col-12">
                <nav class="navbar navbar-expand-lg" aria-label="Navigazione principale e secondaria">
                  <div class="navbar-collapsable" id="nav-header-secondary" tabindex="-1">
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
      </section>

      <section>
        <h2>Header Completa</h2>

        <h3>Versione standard</h3>
        <header class="it-header-wrapper mb-5">
          <div class="it-header-slim-wrapper">
            <div class="container-xxl">
              <div class="row">
                <div class="col-12">
                  <div class="it-header-slim-wrapper-content">
                    <a class="d-block navbar-brand" href="#">Ente appartenenza</a>
                    <div class="nav-mobile">
                      <nav aria-label="Navigazione accessoria slim standard">
                        <div class="link-list-wrapper d-none d-lg-flex">
                          <ul class="link-list">
                            <li><a class="list-item" href="#" data-focus-mouse="false">Link 1</a></li>
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
                  <nav class="navbar navbar-expand-lg" aria-label="Navigazione principale header completo standard">
                    <div class="navbar-collapsable" id="nav-header-full" tabindex="-1">
                      <div class="menu-wrapper">
                        <ul class="navbar-nav">
                          <li class="nav-item active">
                            <a class="nav-link active" href="#" aria-current="page"><span>Link attivo</span></a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="#"><span>Link</span></a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="#"><span>Link</span></a>
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

        <h3>Versione chiara</h3>
        <header class="it-header-wrapper it-shadow mb-5">
          <div class="it-header-slim-wrapper theme-light">
            <div class="container-xxl">
              <div class="row">
                <div class="col-12">
                  <div class="it-header-slim-wrapper-content">
                    <a class="d-block navbar-brand" href="#">Ente appartenenza</a>
                    <div class="nav-mobile">
                      <nav aria-label="Navigazione accessoria slim standard">
                        <div class="link-list-wrapper d-none d-lg-flex">
                          <ul class="link-list">
                            <li><a class="list-item" href="#" data-focus-mouse="false">Link 1</a></li>
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

          <div class="it-header-center-wrapper theme-light">
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

          <div class="it-header-navbar-wrapper theme-light">
            <div class="container-xxl">
              <div class="row">
                <div class="col-12">
                  <nav class="navbar navbar-expand-lg" aria-label="Navigazione principale header completo chiaro">
                    <div class="navbar-collapsable" id="nav-header-full-light" tabindex="-1">
                      <div class="menu-wrapper">
                        <ul class="navbar-nav">
                          <li class="nav-item active">
                            <a class="nav-link active" href="#" aria-current="page"><span>Link attivo</span></a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="#"><span>Link</span></a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="#"><span>Link</span></a>
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

        <h3>Header sticky</h3>
        <p>
          Per rendere sticky l'Header, aggiungi la classe <code>it-header-sticky</code> al wrapper principale.
        </p>
        <it-sticky class="it-header-wrapper it-header-sticky" sticky-class-name="is-sticky">
          <header>
            <div class="it-header-slim-wrapper">
              <div class="container-xxl">
                <div class="row">
                  <div class="col-12">
                    <div class="it-header-slim-wrapper-content">
                      <a class="d-block navbar-brand" href="#">Ente appartenenza</a>
                      <div class="nav-mobile">
                        <nav aria-label="Navigazione accessoria slim standard">
                          <div class="link-list-wrapper d-none d-lg-flex">
                            <ul class="link-list">
                              <li><a class="list-item" href="#" data-focus-mouse="false">Link 1</a></li>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="it-header-navbar-wrapper">
              <div class="container-xxl">
                <div class="row">
                  <div class="col-12">
                    <nav class="navbar navbar-expand-lg" aria-label="Navigazione principale header sticky">
                      <div class="navbar-collapsable" id="nav-header-sticky" tabindex="-1">
                        <div class="menu-wrapper">
                          <ul class="navbar-nav">
                            <li class="nav-item active">
                              <a class="nav-link active" href="#" aria-current="page"><span>Link attivo</span></a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link" href="#"><span>Link</span></a>
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
        </it-sticky>
        <div style="height:500px">Simulazione contenuto, per testare lo sticky header</div>
      </section>
</template>

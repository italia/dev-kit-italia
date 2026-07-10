import{b as e}from"./iframe-BBsXzWsk.js";import"./preload-helper-PPVm8Dsz.js";const n={title:"Esempi/Header",tags:["!autodocs","!dev"],decorators:[a=>e`
      <div>
        <div style="container-type: inline-size; background-color: #fff;">
          <div class="container" style="height: 4000px;">${a()}</div>
        </div>
      </div>
      <style>
        section {
          margin-bottom: 2rem;
          line-height: 1.5;
          font-size: 1.1rem;
        }
        #storybook-root {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          margin: 0;
          width: 100%;
          background: linear-gradient(#eee, #ccc);
        }
        #root-inner {
          width: 100%;
          max-width: 1140px;
        }
        .l-0 {
          left: 0 !important;
        }
        .container {
          padding: 0;
        }

        @container (min-width: 1200px) {
          .container {
            width: 1140px;
          }
        }

        @container (min-width: 992px) and (max-width: 1199px) {
          .container {
            width: 960px;
          }
        }

        @container (min-width: 768px) and (max-width: 991px) {
          .container {
            width: 720px;
          }
        }

        @container (max-width: 767px) {
          .container {
            padding: 0 1rem;
          }
        }
        /* Media query globali per resize finestra */
        @media (min-width: 1200px) {
          .container {
            width: 1140px;
          }
        }
        @media (min-width: 992px) and (max-width: 1199px) {
          .container {
            width: 960px;
          }
        }
        @media (min-width: 768px) and (max-width: 991px) {
          .container {
            width: 720px;
          }
        }
        @media (max-width: 767px) {
          .container {
            padding: 0 1rem;
          }
        }
        main {
          padding: 0 2rem !important;
        }
      </style>
    `],parameters:{layout:"fullscreen"}},i={render:()=>e`
    <it-sticky
      class="it-header-wrapper it-header-sticky"
      sticky-class-name="is-sticky"
      trigger-selector="#header-complete-full"
    >
      <it-header id="header-complete-full">
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
                          <ul class="link-list" aria-label="Link utili">
                            <li><a class="list-item" href="#" data-focus-mouse="false">Link 1</a></li>
                            <li><a class="list-item active" href="#" aria-current="page">Link 2 (Attivo)</a></li>
                          </ul>
                        </div>
                      </nav>
                    </div>
                    <div class="it-header-slim-right-zone">
                      <it-dropdown
                        label="ITA"
                        size="sm"
                        alignment="bottom-end"
                        it-aria-label="Selettore lingua. Lingua attiva: Italiano"
                      >
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

          <div class="it-header-navbar-wrapper mb-5">
            <div class="container-xxl">
              <div class="row">
                <div class="col-12">
                  <!-- navigazione principale -->
                  <nav class="navbar navbar-expand-lg" aria-label="Navigazione principale header nav standard">
                    <div class="navbar-collapsable" id="nav-header-standard" tabindex="-1">
                      <div class="menu-wrapper">
                        <ul class="navbar-nav">
                          <li class="nav-item active">
                            <a class="nav-link active" href="#" aria-current="page"><span>Link attivo</span></a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link disabled" href="#" aria-disabled="true"
                              ><span>Link disabilitato</span></a
                            >
                          </li>
                          <li class="nav-item active">
                            <it-dropdown label="Dropdown" offset="0" no-flip class="active">
                              <it-dropdown-item href="#">Link lista 1</it-dropdown-item>
                              <it-dropdown-item href="#">Link lista 2</it-dropdown-item>
                              <it-dropdown-item href="#">Link lista 3</it-dropdown-item>
                              <it-dropdown-item href="#">Link lista 4</it-dropdown-item>
                            </it-dropdown>
                          </li>
                          <li class="nav-item">
                            <it-megamenu label="Megamenu" columns="2" footer-align="right">
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

                              <div slot="header">
                                <a class="it-heading-link" href="#">
                                  <it-icon
                                    name="it-arrow-right-triangle"
                                    size="sm"
                                    color="primary"
                                    class="me-2 mb-1"
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
                                ></it-icon>
                                Link lista 1
                              </it-dropdown-item>
                              <it-dropdown-item href="#">
                                <it-icon
                                  slot="prefix"
                                  name="it-arrow-right-triangle"
                                  size="sm"
                                  color="primary"
                                ></it-icon>
                                Link lista 2
                              </it-dropdown-item>
                              <it-dropdown-item href="#">
                                <it-icon
                                  slot="prefix"
                                  name="it-arrow-right-triangle"
                                  size="sm"
                                  color="primary"
                                ></it-icon>
                                Link lista 3
                              </it-dropdown-item>
                              <it-dropdown-item href="#">
                                <it-icon
                                  slot="prefix"
                                  name="it-arrow-right-triangle"
                                  size="sm"
                                  color="primary"
                                ></it-icon>
                                Link lista 4
                              </it-dropdown-item>
                              <it-dropdown-item href="#">
                                <it-icon
                                  slot="prefix"
                                  name="it-arrow-right-triangle"
                                  size="sm"
                                  color="primary"
                                ></it-icon>
                                Link lista 5
                              </it-dropdown-item>
                              <it-dropdown-item href="#">
                                <it-icon
                                  slot="prefix"
                                  name="it-arrow-right-triangle"
                                  size="sm"
                                  color="primary"
                                ></it-icon>
                                Link lista 6
                              </it-dropdown-item>
                            </it-megamenu>
                          </li>
                        </ul>
                        <!-- navigazione secondaria  -->
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
        </header>
      </it-header>
    </it-sticky>
    <main class="container my-4">
      <h1>Benvenuto nel sito dell'istituzione</h1>

      <section>Questa una pagina di esempio per testare il funzionamento dell'header completo anche su mobile.</section>

      <section>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur posuere justo lacus, ut interdum arcu tempor
        vel. Maecenas id est viverra, blandit orci id, accumsan nisl. Suspendisse at metus arcu. Proin arcu dui, aliquet
        consectetur porta et, hendrerit quis nulla. Quisque pharetra facilisis elit, congue vestibulum augue efficitur
        in. Praesent sodales ligula et feugiat fermentum. Etiam orci metus, ultricies vel massa vel, consectetur
        vehicula purus. Nullam sed massa tincidunt ligula dictum pellentesque. Nulla eu suscipit sem, a pharetra nisi.
        Nam laoreet interdum risus quis condimentum. Praesent lobortis nunc magna, vel maximus risus faucibus eget. Sed
        porta volutpat nisl, ac pharetra purus posuere non.
      </section>

      <section>
        Curabitur placerat sem et leo eleifend, ac malesuada nisl egestas. Donec lacus mauris, elementum sed dignissim
        sed, malesuada ac dolor. Morbi molestie arcu non dignissim condimentum. Cras non mollis felis. Ut tincidunt diam
        sit amet est blandit, id malesuada metus interdum. Pellentesque mi ligula, pharetra a quam at, consequat
        pellentesque arcu. Curabitur ac lobortis tellus. Quisque efficitur nec dui quis pharetra. Etiam felis nisi,
        auctor sit amet quam et, mattis convallis massa. Vestibulum eu sapien arcu. Sed ac feugiat velit. Nam at nibh
        sed est ultricies viverra a a nisi. In lacinia augue eget enim tincidunt malesuada. Suspendisse augue dolor,
        auctor luctus mi et, rutrum aliquet nisl. Aliquam vulputate pharetra faucibus. Suspendisse tristique interdum
        metus, eget scelerisque enim sollicitudin eu.
      </section>

      <section>
        Vivamus pulvinar, velit a ornare pellentesque, risus augue varius dui, consectetur fringilla enim leo vel mi.
        Donec suscipit accumsan arcu sed tincidunt. Aenean condimentum congue ante, eget ultrices nulla placerat non.
        Vivamus efficitur efficitur tincidunt. Nulla quis risus elit. Donec pellentesque rhoncus mauris, in mollis mi
        iaculis id. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc
        diam risus, accumsan sed tortor ut, vulputate luctus metus. Quisque faucibus scelerisque cursus. Aliquam et
        vehicula lectus. Quisque dictum lorem at est finibus consequat.
      </section>

      <section>
        Donec in vehicula orci, quis porta arcu. Fusce commodo lobortis tortor. Curabitur posuere libero eu augue
        ultrices, id maximus ex vestibulum. Aliquam et libero nec tortor feugiat mattis eu in purus. Maecenas
        consectetur est ut facilisis semper. Fusce pellentesque, quam efficitur fermentum congue, massa est eleifend
        massa, eget cursus tellus lorem a leo. Praesent malesuada dui risus, quis placerat ipsum porta id. Integer
        tempor dui sit amet purus feugiat, commodo maximus nisl lacinia. Vestibulum convallis urna a convallis lacinia.
        Etiam vitae ipsum vel tortor efficitur imperdiet sit amet id velit. Duis maximus ipsum hendrerit, dapibus ex
        accumsan, bibendum dolor. Vivamus ut massa consequat, rhoncus arcu vitae, faucibus lacus. Morbi nec pulvinar
        purus.
      </section>

      <section>
        Donec tincidunt vestibulum eleifend. Aenean imperdiet laoreet varius. Curabitur vitae velit ac urna gravida
        egestas convallis mollis turpis. Aenean porta, nunc nec tempor rutrum, dui est porttitor velit, ut rhoncus
        libero massa sed tellus. Duis commodo ligula iaculis hendrerit porttitor. Vestibulum est purus, bibendum eget
        diam at, vulputate rutrum odio. Nulla facilisi.
      </section>
    </main>
  `};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <it-sticky
      class="it-header-wrapper it-header-sticky"
      sticky-class-name="is-sticky"
      trigger-selector="#header-complete-full"
    >
      <it-header id="header-complete-full">
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
                          <ul class="link-list" aria-label="Link utili">
                            <li><a class="list-item" href="#" data-focus-mouse="false">Link 1</a></li>
                            <li><a class="list-item active" href="#" aria-current="page">Link 2 (Attivo)</a></li>
                          </ul>
                        </div>
                      </nav>
                    </div>
                    <div class="it-header-slim-right-zone">
                      <it-dropdown
                        label="ITA"
                        size="sm"
                        alignment="bottom-end"
                        it-aria-label="Selettore lingua. Lingua attiva: Italiano"
                      >
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

          <div class="it-header-navbar-wrapper mb-5">
            <div class="container-xxl">
              <div class="row">
                <div class="col-12">
                  <!-- navigazione principale -->
                  <nav class="navbar navbar-expand-lg" aria-label="Navigazione principale header nav standard">
                    <div class="navbar-collapsable" id="nav-header-standard" tabindex="-1">
                      <div class="menu-wrapper">
                        <ul class="navbar-nav">
                          <li class="nav-item active">
                            <a class="nav-link active" href="#" aria-current="page"><span>Link attivo</span></a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link disabled" href="#" aria-disabled="true"
                              ><span>Link disabilitato</span></a
                            >
                          </li>
                          <li class="nav-item active">
                            <it-dropdown label="Dropdown" offset="0" no-flip class="active">
                              <it-dropdown-item href="#">Link lista 1</it-dropdown-item>
                              <it-dropdown-item href="#">Link lista 2</it-dropdown-item>
                              <it-dropdown-item href="#">Link lista 3</it-dropdown-item>
                              <it-dropdown-item href="#">Link lista 4</it-dropdown-item>
                            </it-dropdown>
                          </li>
                          <li class="nav-item">
                            <it-megamenu label="Megamenu" columns="2" footer-align="right">
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

                              <div slot="header">
                                <a class="it-heading-link" href="#">
                                  <it-icon
                                    name="it-arrow-right-triangle"
                                    size="sm"
                                    color="primary"
                                    class="me-2 mb-1"
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
                                ></it-icon>
                                Link lista 1
                              </it-dropdown-item>
                              <it-dropdown-item href="#">
                                <it-icon
                                  slot="prefix"
                                  name="it-arrow-right-triangle"
                                  size="sm"
                                  color="primary"
                                ></it-icon>
                                Link lista 2
                              </it-dropdown-item>
                              <it-dropdown-item href="#">
                                <it-icon
                                  slot="prefix"
                                  name="it-arrow-right-triangle"
                                  size="sm"
                                  color="primary"
                                ></it-icon>
                                Link lista 3
                              </it-dropdown-item>
                              <it-dropdown-item href="#">
                                <it-icon
                                  slot="prefix"
                                  name="it-arrow-right-triangle"
                                  size="sm"
                                  color="primary"
                                ></it-icon>
                                Link lista 4
                              </it-dropdown-item>
                              <it-dropdown-item href="#">
                                <it-icon
                                  slot="prefix"
                                  name="it-arrow-right-triangle"
                                  size="sm"
                                  color="primary"
                                ></it-icon>
                                Link lista 5
                              </it-dropdown-item>
                              <it-dropdown-item href="#">
                                <it-icon
                                  slot="prefix"
                                  name="it-arrow-right-triangle"
                                  size="sm"
                                  color="primary"
                                ></it-icon>
                                Link lista 6
                              </it-dropdown-item>
                            </it-megamenu>
                          </li>
                        </ul>
                        <!-- navigazione secondaria  -->
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
        </header>
      </it-header>
    </it-sticky>
    <main class="container my-4">
      <h1>Benvenuto nel sito dell'istituzione</h1>

      <section>Questa una pagina di esempio per testare il funzionamento dell'header completo anche su mobile.</section>

      <section>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur posuere justo lacus, ut interdum arcu tempor
        vel. Maecenas id est viverra, blandit orci id, accumsan nisl. Suspendisse at metus arcu. Proin arcu dui, aliquet
        consectetur porta et, hendrerit quis nulla. Quisque pharetra facilisis elit, congue vestibulum augue efficitur
        in. Praesent sodales ligula et feugiat fermentum. Etiam orci metus, ultricies vel massa vel, consectetur
        vehicula purus. Nullam sed massa tincidunt ligula dictum pellentesque. Nulla eu suscipit sem, a pharetra nisi.
        Nam laoreet interdum risus quis condimentum. Praesent lobortis nunc magna, vel maximus risus faucibus eget. Sed
        porta volutpat nisl, ac pharetra purus posuere non.
      </section>

      <section>
        Curabitur placerat sem et leo eleifend, ac malesuada nisl egestas. Donec lacus mauris, elementum sed dignissim
        sed, malesuada ac dolor. Morbi molestie arcu non dignissim condimentum. Cras non mollis felis. Ut tincidunt diam
        sit amet est blandit, id malesuada metus interdum. Pellentesque mi ligula, pharetra a quam at, consequat
        pellentesque arcu. Curabitur ac lobortis tellus. Quisque efficitur nec dui quis pharetra. Etiam felis nisi,
        auctor sit amet quam et, mattis convallis massa. Vestibulum eu sapien arcu. Sed ac feugiat velit. Nam at nibh
        sed est ultricies viverra a a nisi. In lacinia augue eget enim tincidunt malesuada. Suspendisse augue dolor,
        auctor luctus mi et, rutrum aliquet nisl. Aliquam vulputate pharetra faucibus. Suspendisse tristique interdum
        metus, eget scelerisque enim sollicitudin eu.
      </section>

      <section>
        Vivamus pulvinar, velit a ornare pellentesque, risus augue varius dui, consectetur fringilla enim leo vel mi.
        Donec suscipit accumsan arcu sed tincidunt. Aenean condimentum congue ante, eget ultrices nulla placerat non.
        Vivamus efficitur efficitur tincidunt. Nulla quis risus elit. Donec pellentesque rhoncus mauris, in mollis mi
        iaculis id. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc
        diam risus, accumsan sed tortor ut, vulputate luctus metus. Quisque faucibus scelerisque cursus. Aliquam et
        vehicula lectus. Quisque dictum lorem at est finibus consequat.
      </section>

      <section>
        Donec in vehicula orci, quis porta arcu. Fusce commodo lobortis tortor. Curabitur posuere libero eu augue
        ultrices, id maximus ex vestibulum. Aliquam et libero nec tortor feugiat mattis eu in purus. Maecenas
        consectetur est ut facilisis semper. Fusce pellentesque, quam efficitur fermentum congue, massa est eleifend
        massa, eget cursus tellus lorem a leo. Praesent malesuada dui risus, quis placerat ipsum porta id. Integer
        tempor dui sit amet purus feugiat, commodo maximus nisl lacinia. Vestibulum convallis urna a convallis lacinia.
        Etiam vitae ipsum vel tortor efficitur imperdiet sit amet id velit. Duis maximus ipsum hendrerit, dapibus ex
        accumsan, bibendum dolor. Vivamus ut massa consequat, rhoncus arcu vitae, faucibus lacus. Morbi nec pulvinar
        purus.
      </section>

      <section>
        Donec tincidunt vestibulum eleifend. Aenean imperdiet laoreet varius. Curabitur vitae velit ac urna gravida
        egestas convallis mollis turpis. Aenean porta, nunc nec tempor rutrum, dui est porttitor velit, ut rhoncus
        libero massa sed tellus. Duis commodo ligula iaculis hendrerit porttitor. Vestibulum est purus, bibendum eget
        diam at, vulputate rutrum odio. Nulla facilisi.
      </section>
    </main>
  \`
}`,...i.parameters?.docs?.source}}};const r=["HeaderSticky"];export{i as HeaderSticky,r as __namedExportsOrder,n as default};

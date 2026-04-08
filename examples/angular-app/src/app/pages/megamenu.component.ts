import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-megamenu',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <h1>Megamenu</h1>

    <!-- completo -->
    <section>
      <h2>Megamenu completo</h2>
      <nav class="navbar navbar-expand-lg" aria-label="Menu principale">
        <it-button
          it-aria-label="Mostra o nascondi il menu"
          class="custom-navbar-toggler"
          it-aria-controls="navbar-A"
        >
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
                      <it-icon
                        name="it-arrow-right-triangle"
                        size="sm"
                        color="primary"
                        class="me-2 mb-1"
                      ></it-icon>
                      <span>Esplora la sezione Megamenu</span>
                    </a>
                  </div>

                  <!-- DROPDOWN LINKS ITEMS -->

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
          </div>
        </div>
      </nav>
    </section>

    <!--base-->
    <section>
      <h2>Megamenu base</h2>
      <nav class="navbar navbar-expand-lg" aria-label="Menu principale">
        <it-button
          it-aria-label="Mostra o nascondi il menu"
          class="custom-navbar-toggler"
          it-aria-controls="navbar-A"
        >
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
              <li class="nav-item">
                <it-megamenu label="Megamenu" columns="3" footer-align="right">
                  <!-- DROPDOWN LINKS ITEMS -->

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

                  <it-dropdown-item href="#">
                    <it-icon
                      slot="prefix"
                      name="it-arrow-right-triangle"
                      size="sm"
                      color="primary"
                    ></it-icon>
                    Link lista 7
                  </it-dropdown-item>

                  <it-dropdown-item href="#">
                    <it-icon
                      slot="prefix"
                      name="it-arrow-right-triangle"
                      size="sm"
                      color="primary"
                    ></it-icon>
                    Link lista 8
                  </it-dropdown-item>

                  <it-dropdown-item href="#">
                    <it-icon
                      slot="prefix"
                      name="it-arrow-right-triangle"
                      size="sm"
                      color="primary"
                    ></it-icon>
                    Link lista 9
                  </it-dropdown-item>
                </it-megamenu>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>

    <!--con link esplora la sezione-->
    <section>
      <h2>Megamenu con link “Esplora la sezione”</h2>
      <nav class="navbar navbar-expand-lg" aria-label="Menu principale">
        <it-button
          it-aria-label="Mostra o nascondi il menu"
          class="custom-navbar-toggler"
          it-aria-controls="navbar-A"
        >
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
              <li class="nav-item">
                <it-megamenu label="Megamenu" columns="3" footer-align="right">
                  <!-- DROPDOWN LINKS ITEMS -->
                  <!-- SLOT HEADER -->
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

                  <it-dropdown-item href="#">
                    <it-icon
                      slot="prefix"
                      name="it-arrow-right-triangle"
                      size="sm"
                      color="primary"
                    ></it-icon>
                    Link lista 7
                  </it-dropdown-item>

                  <it-dropdown-item href="#">
                    <it-icon
                      slot="prefix"
                      name="it-arrow-right-triangle"
                      size="sm"
                      color="primary"
                    ></it-icon>
                    Link lista 8
                  </it-dropdown-item>

                  <it-dropdown-item href="#">
                    <it-icon
                      slot="prefix"
                      name="it-arrow-right-triangle"
                      size="sm"
                      color="primary"
                    ></it-icon>
                    Link lista 9
                  </it-dropdown-item>
                </it-megamenu>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>

    <!-- con link esplora tutti-->
    <section>
      <h2>Megamenu con link “Esplora tutti”</h2>
      <nav class="navbar navbar-expand-lg" aria-label="Menu principale">
        <it-button
          it-aria-label="Mostra o nascondi il menu"
          class="custom-navbar-toggler"
          it-aria-controls="navbar-A"
        >
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
              <li class="nav-item">
                <it-megamenu label="Megamenu" columns="3" footer-align="right">
                  <!-- DROPDOWN LINKS ITEMS -->

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

                  <it-dropdown-item href="#">
                    <it-icon
                      slot="prefix"
                      name="it-arrow-right-triangle"
                      size="sm"
                      color="primary"
                    ></it-icon>
                    Link lista 7
                  </it-dropdown-item>

                  <it-dropdown-item href="#">
                    <it-icon
                      slot="prefix"
                      name="it-arrow-right-triangle"
                      size="sm"
                      color="primary"
                    ></it-icon>
                    Link lista 8
                  </it-dropdown-item>

                  <it-dropdown-item href="#">
                    <it-icon
                      slot="prefix"
                      name="it-arrow-right-triangle"
                      size="sm"
                      color="primary"
                    ></it-icon>
                    Link lista 9
                  </it-dropdown-item>

                  <!-- SLOT FOOTER -->
                  <div slot="footer">
                    <a class="it-footer-link" href="#">
                      <span>Esplora tutti i contenuti del megamenu</span>
                      <it-icon
                        name="it-arrow-right"
                        size="sm"
                        color="primary"
                        class="ms-2"
                      ></it-icon>
                    </a>
                  </div>
                </it-megamenu>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>

    <!-- con call to action in basso-->
    <section>
      <h2>Megamenu con call to action in basso</h2>

      <nav class="navbar navbar-expand-lg" aria-label="Menu principale">
        <it-button
          it-aria-label="Mostra o nascondi il menu"
          class="custom-navbar-toggler"
          it-aria-controls="navbar-A"
        >
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
              <li class="nav-item">
                <it-megamenu label="Megamenu" columns="3" footer-align="" footer-position="bottom">
                  <!-- DROPDOWN LINKS ITEMS -->

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

                  <it-dropdown-item href="#">
                    <it-icon
                      slot="prefix"
                      name="it-arrow-right-triangle"
                      size="sm"
                      color="primary"
                    ></it-icon>
                    Link lista 7
                  </it-dropdown-item>

                  <it-dropdown-item href="#">
                    <it-icon
                      slot="prefix"
                      name="it-arrow-right-triangle"
                      size="sm"
                      color="primary"
                    ></it-icon>
                    Link lista 8
                  </it-dropdown-item>

                  <it-dropdown-item href="#">
                    <it-icon
                      slot="prefix"
                      name="it-arrow-right-triangle"
                      size="sm"
                      color="primary"
                    ></it-icon>
                    Link lista 9
                  </it-dropdown-item>

                  <!-- SLOT FOOTER -->
                  <div slot="footer">
                    <div class="d-flex flex-column flex-lg-row">
                      <a class="it-footer-link flex-grow-1" href="#">
                        <it-icon
                          name="it-bookmark"
                          size="sm"
                          color="primary"
                          class="me-2"
                        ></it-icon>
                        <span>Call to action 1</span>
                      </a>
                      <a class="it-footer-link flex-grow-1" href="#">
                        <it-icon
                          name="it-bookmark"
                          size="sm"
                          color="primary"
                          class="me-2"
                        ></it-icon>
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
    </section>

    <!-- con call to action a destra-->
    <section>
      <h2>Megamenu con call to action a destra</h2>

      <nav class="navbar navbar-expand-lg" aria-label="Menu principale">
        <it-button
          it-aria-label="Mostra o nascondi il menu"
          class="custom-navbar-toggler"
          it-aria-controls="navbar-A"
        >
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
              <li class="nav-item">
                <it-megamenu label="Megamenu" columns="3" footer-align="" footer-position="right">
                  <!-- DROPDOWN LINKS ITEMS -->

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

                  <it-dropdown-item href="#">
                    <it-icon
                      slot="prefix"
                      name="it-arrow-right-triangle"
                      size="sm"
                      color="primary"
                    ></it-icon>
                    Link lista 7
                  </it-dropdown-item>

                  <it-dropdown-item href="#">
                    <it-icon
                      slot="prefix"
                      name="it-arrow-right-triangle"
                      size="sm"
                      color="primary"
                    ></it-icon>
                    Link lista 8
                  </it-dropdown-item>

                  <it-dropdown-item href="#">
                    <it-icon
                      slot="prefix"
                      name="it-arrow-right-triangle"
                      size="sm"
                      color="primary"
                    ></it-icon>
                    Link lista 9
                  </it-dropdown-item>

                  <!-- SLOT FOOTER -->
                  <div slot="footer">
                    <div class="d-flex flex-column justify-content-around">
                      <a class="it-footer-link" href="#">
                        <it-icon
                          name="it-bookmark"
                          size="sm"
                          color="primary"
                          class="me-2"
                        ></it-icon>
                        <span>Call to action 1</span>
                      </a>
                      <a class="it-footer-link" href="#">
                        <it-icon
                          name="it-bookmark"
                          size="sm"
                          color="primary"
                          class="me-2"
                        ></it-icon>
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
    </section>
  `,
  styles: [],
})
export class MegamenuComponent {}

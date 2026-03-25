import React from 'react';

const Toolbar = () => {
  return (
    <>
      <h1>Toolbar</h1>
      <p>Menu di navigazione a icone che può contenere link, pulsanti e dropdown.</p>

      <section>
        <h2>Toolbar grande</h2>
        <p>Versione predefinita con icone grandi e label visibili.</p>
        <it-toolbar>
          <li>
            <a href="#" className="active">
              <svg className="icon">
                <use href="/dist/svg/sprites.svg#it-comment"></use>
              </svg>
              <span className="toolbar-label">messaggi</span>
            </a>
          </li>
          <li>
            <a href="#">
              <svg className="icon">
                <use href="/dist/svg/sprites.svg#it-camera"></use>
              </svg>
              <span className="toolbar-label">immagini</span>
            </a>
          </li>
          <li>
            <a href="#">
              <svg className="icon">
                <use href="/dist/svg/sprites.svg#it-file"></use>
              </svg>
              <span className="toolbar-label">documenti</span>
            </a>
          </li>
          <li>
            <a href="#">
              <svg className="icon">
                <use href="/dist/svg/sprites.svg#it-security"></use>
              </svg>
              <span className="toolbar-label">privacy</span>
            </a>
          </li>
          <li>
            <a href="#">
              <svg className="icon">
                <use href="/dist/svg/sprites.svg#it-star-full"></use>
              </svg>
              <span className="toolbar-label">preferiti</span>
            </a>
          </li>
        </it-toolbar>
      </section>

      <section>
        <h2>Toolbar media</h2>
        <p>Versione media con label nascoste visivamente.</p>
        <it-toolbar size="md">
          <li>
            <a href="#" className="active">
              <svg className="icon">
                <use href="/dist/svg/sprites.svg#it-comment"></use>
              </svg>
              <span className="visually-hidden">messaggi</span>
            </a>
          </li>
          <li>
            <a href="#">
              <svg className="icon">
                <use href="/dist/svg/sprites.svg#it-camera"></use>
              </svg>
              <span className="visually-hidden">immagini</span>
            </a>
          </li>
          <li>
            <a href="#">
              <svg className="icon">
                <use href="/dist/svg/sprites.svg#it-file"></use>
              </svg>
              <span className="visually-hidden">documenti</span>
            </a>
          </li>
          <li>
            <a href="#">
              <svg className="icon">
                <use href="/dist/svg/sprites.svg#it-security"></use>
              </svg>
              <span className="visually-hidden">privacy</span>
            </a>
          </li>
        </it-toolbar>
      </section>

      <section>
        <h2>Toolbar piccola</h2>
        <p>Versione piccola con label nascoste visivamente.</p>
        <it-toolbar size="sm">
          <li>
            <a href="#" className="active">
              <svg className="icon">
                <use href="/dist/svg/sprites.svg#it-comment"></use>
              </svg>
              <span className="visually-hidden">messaggi</span>
            </a>
          </li>
          <li>
            <a href="#">
              <svg className="icon">
                <use href="/dist/svg/sprites.svg#it-camera"></use>
              </svg>
              <span className="visually-hidden">immagini</span>
            </a>
          </li>
          <li>
            <a href="#">
              <svg className="icon">
                <use href="/dist/svg/sprites.svg#it-file"></use>
              </svg>
              <span className="visually-hidden">documenti</span>
            </a>
          </li>
        </it-toolbar>
      </section>

      <section>
        <h2>Toolbar verticale</h2>
        <p>La toolbar può essere disposta verticalmente.</p>
        <it-toolbar orientation="vertical">
          <li>
            <a href="#" className="active">
              <svg className="icon">
                <use href="/dist/svg/sprites.svg#it-comment"></use>
              </svg>
              <span className="toolbar-label">messaggi</span>
            </a>
          </li>
          <li>
            <a href="#">
              <svg className="icon">
                <use href="/dist/svg/sprites.svg#it-camera"></use>
              </svg>
              <span className="toolbar-label">immagini</span>
            </a>
          </li>
          <li>
            <a href="#">
              <svg className="icon">
                <use href="/dist/svg/sprites.svg#it-file"></use>
              </svg>
              <span className="toolbar-label">documenti</span>
            </a>
          </li>
        </it-toolbar>
      </section>

      <section>
        <h2>Toolbar con badge</h2>
        <p>I badge possono indicare contenuti non letti o notifiche.</p>
        <it-toolbar>
          <li>
            <a href="#" className="active">
              <svg className="icon">
                <use href="/dist/svg/sprites.svg#it-comment"></use>
              </svg>
              <span className="toolbar-label">
                messaggi <span className="visually-hidden">1 da leggere</span>
              </span>
              <span className="badge">1</span>
            </a>
          </li>
          <li>
            <a href="#">
              <svg className="icon">
                <use href="/dist/svg/sprites.svg#it-file"></use>
              </svg>
              <span className="toolbar-label">
                documenti <span className="visually-hidden">42 da esaminare</span>
              </span>
              <span className="badge">42</span>
            </a>
          </li>
          <li>
            <a href="#">
              <svg className="icon">
                <use href="/dist/svg/sprites.svg#it-camera"></use>
              </svg>
              <span className="toolbar-label">immagini</span>
            </a>
          </li>
        </it-toolbar>
      </section>

      <section>
        <h2>Toolbar con divisori</h2>
        <p>È possibile aggiungere divisori per raggruppare logicamente gli elementi.</p>
        <it-toolbar>
          <li>
            <a href="#" className="active">
              <svg className="icon">
                <use href="/dist/svg/sprites.svg#it-comment"></use>
              </svg>
              <span className="toolbar-label">messaggi</span>
            </a>
          </li>
          <li>
            <a href="#">
              <svg className="icon">
                <use href="/dist/svg/sprites.svg#it-camera"></use>
              </svg>
              <span className="toolbar-label">immagini</span>
            </a>
          </li>
          <li className="toolbar-divider" role="separator" aria-orientation="vertical"></li>
          <li>
            <a href="#">
              <svg className="icon">
                <use href="/dist/svg/sprites.svg#it-file"></use>
              </svg>
              <span className="toolbar-label">documenti</span>
            </a>
          </li>
          <li>
            <a href="#">
              <svg className="icon">
                <use href="/dist/svg/sprites.svg#it-security"></use>
              </svg>
              <span className="toolbar-label">privacy</span>
            </a>
          </li>
        </it-toolbar>
      </section>

      <section>
        <h2>Elemento disabilitato</h2>
        <p>Gli elementi possono avere uno stato disabilitato.</p>
        <it-toolbar>
          <li>
            <a href="#" className="active">
              <svg className="icon">
                <use href="/dist/svg/sprites.svg#it-comment"></use>
              </svg>
              <span className="toolbar-label">messaggi</span>
            </a>
          </li>
          <li>
            <a href="#" className="disabled" disabled>
              <svg className="icon">
                <use href="/dist/svg/sprites.svg#it-camera"></use>
              </svg>
              <span className="toolbar-label">immagini (disabilitato)</span>
            </a>
          </li>
          <li>
            <a href="#">
              <svg className="icon">
                <use href="/dist/svg/sprites.svg#it-file"></use>
              </svg>
              <span className="toolbar-label">documenti</span>
            </a>
          </li>
        </it-toolbar>
      </section>
    </>
  );
};

export default Toolbar;

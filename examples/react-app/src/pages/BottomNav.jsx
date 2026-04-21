import React from 'react';

const previewStyle = {
  transform: 'translateZ(0)',
  overflow: 'hidden',
  position: 'relative',
  height: '200px',
  width: '100%',
  maxWidth: '400px',
  background: '#f5f5f5',
  border: '1px solid #cecece',
  marginBottom: '2rem',
};

const previewContentStyle = {
  height: 'calc(100% - var(--it-bottom-nav-height, 64px))',
  overflowY: 'scroll',
};

const scrollAreaStyle = {
  height: '400px',
  padding: '1rem',
  color: '#666',
  fontSize: '0.875rem',
};

const BottomNav = () => {
  return (
    <>
      <h1>BottomNav</h1>
      <p>Componente di navigazione fisso in fondo allo schermo, pensato per dispositivi mobile.</p>

      <section>
        <h2>Tre voci</h2>
        <p>Barra di navigazione con tre voci.</p>
        <div style={previewStyle}>
          <div style={previewContentStyle}>
            <div style={scrollAreaStyle}>Scorri per vedere la barra in basso.</div>
          </div>
          <it-bottom-nav it-aria-label="Navigazione principale">
            <it-bottom-nav-item active>
              <a href="#">
                <it-icon name="it-comment"></it-icon>
                <span className="bottom-nav-label">messaggi</span>
              </a>
            </it-bottom-nav-item>
            <it-bottom-nav-item>
              <a href="#">
                <it-icon name="it-camera"></it-icon>
                <span className="bottom-nav-label">immagini</span>
              </a>
            </it-bottom-nav-item>
            <it-bottom-nav-item>
              <a href="#">
                <it-icon name="it-file"></it-icon>
                <span className="bottom-nav-label">documenti</span>
              </a>
            </it-bottom-nav-item>
          </it-bottom-nav>
        </div>
      </section>

      <section>
        <h2>Quattro voci</h2>
        <p>Barra di navigazione con quattro voci.</p>
        <div style={previewStyle}>
          <div style={previewContentStyle}>
            <div style={scrollAreaStyle}>Scorri per vedere la barra in basso.</div>
          </div>
          <it-bottom-nav it-aria-label="Navigazione principale">
            <it-bottom-nav-item active>
              <a href="#">
                <it-icon name="it-comment"></it-icon>
                <span className="bottom-nav-label">messaggi</span>
              </a>
            </it-bottom-nav-item>
            <it-bottom-nav-item>
              <a href="#">
                <it-icon name="it-camera"></it-icon>
                <span className="bottom-nav-label">immagini</span>
              </a>
            </it-bottom-nav-item>
            <it-bottom-nav-item>
              <a href="#">
                <it-icon name="it-file"></it-icon>
                <span className="bottom-nav-label">documenti</span>
              </a>
            </it-bottom-nav-item>
            <it-bottom-nav-item>
              <a href="#">
                <it-icon name="it-star-outline"></it-icon>
                <span className="bottom-nav-label">preferiti</span>
              </a>
            </it-bottom-nav-item>
          </it-bottom-nav>
        </div>
      </section>

      <section>
        <h2>Con badge</h2>
        <p>
          Badge e alert sono nascosti agli screen reader (<code>aria-hidden="true"</code>). Per garantire
          l&apos;accessibilità aggiungi uno <code>&lt;span className=&quot;visually-hidden&quot;&gt;</code> con un
          testo descrittivo.
        </p>
        <div style={previewStyle}>
          <div style={previewContentStyle}>
            <div style={scrollAreaStyle}>Scorri per vedere la barra in basso.</div>
          </div>
          <it-bottom-nav it-aria-label="Navigazione principale">
            <it-bottom-nav-item active>
              <a href="#">
                <div className="badge-wrapper">
                  <span className="bottom-nav-badge" aria-hidden="true">1</span>
                </div>
                <it-icon name="it-comment"></it-icon>
                <span className="bottom-nav-label">
                  messaggi
                  <span className="visually-hidden">1 messaggio da leggere</span>
                </span>
              </a>
            </it-bottom-nav-item>
            <it-bottom-nav-item>
              <a href="#">
                <it-icon name="it-camera"></it-icon>
                <span className="bottom-nav-label">
                  immagini
                </span>
              </a>
            </it-bottom-nav-item>
            <it-bottom-nav-item>
              <a href="#">
                <div className="badge-wrapper">
                  <span className="bottom-nav-badge" aria-hidden="true">42</span>
                </div>
                <it-icon name="it-file"></it-icon>
                <span className="bottom-nav-label">documenti <span className="visually-hidden">42 documenti da visualizzare</span></span>
              </a>
            </it-bottom-nav-item>
          </it-bottom-nav>
        </div>
      </section>

      <section>
        <h2>Con alert</h2>
        <p>Indicatore di notifica senza contatore — segnala la presenza di nuovi contenuti.</p>
        <div style={previewStyle}>
          <div style={previewContentStyle}>
            <div style={scrollAreaStyle}>Scorri per vedere la barra in basso.</div>
          </div>
          <it-bottom-nav it-aria-label="Navigazione principale">
            <it-bottom-nav-item active>
              <a href="#">
                <div className="badge-wrapper">
                  <span className="bottom-nav-alert" aria-hidden="true"></span>
                </div>
                <it-icon name="it-comment"></it-icon>
                <span className="bottom-nav-label">
                  messaggi
                  <span className="visually-hidden">ci sono nuovi messaggi da leggere</span>
                </span>
              </a>
            </it-bottom-nav-item>
            <it-bottom-nav-item>
              <a href="#">
                <it-icon name="it-camera"></it-icon>
                <span className="bottom-nav-label">immagini</span>
              </a>
            </it-bottom-nav-item>
            <it-bottom-nav-item>
              <a href="#">
                <it-icon name="it-file"></it-icon>
                <span className="bottom-nav-label">documenti</span>
              </a>
            </it-bottom-nav-item>
          </it-bottom-nav>
        </div>
      </section>
    </>
  );
};

export default BottomNav;

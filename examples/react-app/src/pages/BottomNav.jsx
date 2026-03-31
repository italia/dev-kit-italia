import React from 'react';

export default function BottomNav() {
  return (
    <>
      <h1>Bottom Nav</h1>

      {/* Esempio Interattivo */}
      <section>
        <h2>Esempio interattivo</h2>
        <p>Barra di navigazione di base con tre voci.</p>
        <div style={{ height: '400px', width: '400px', backgroundColor: '#f5f5f5', border: '1px solid #cecece', position: 'relative', margin: '-0.5rem' }}>
          <div style={{ height: 'calc(100% - 56px)', overflowY: 'scroll' }}>
            <div style={{ height: '600px' }}></div>
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

      {/* Tre Voci */}
      <section>
        <h2>Tre voci</h2>
        <p>Bottom nav con tre elementi di navigazione.</p>
        <div style={{ height: '400px', width: '400px', backgroundColor: '#f5f5f5', border: '1px solid #cecece', position: 'relative', margin: '-0.5rem' }}>
          <div style={{ height: 'calc(100% - 56px)', overflowY: 'scroll' }}>
            <div style={{ height: '600px' }}></div>
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

      {/* Quattro Voci */}
      <section>
        <h2>Quattro voci</h2>
        <p>Bottom nav con quattro elementi di navigazione.</p>
        <div style={{ height: '400px', width: '400px', backgroundColor: '#f5f5f5', border: '1px solid #cecece', position: 'relative', margin: '-0.5rem' }}>
          <div style={{ height: 'calc(100% - 56px)', overflowY: 'scroll' }}>
            <div style={{ height: '600px' }}></div>
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

      {/* Con Badge */}
      <section>
        <h2>Con badge</h2>
        <p>Bottom nav con badge per indicare notifiche.</p>
        <div style={{ height: '400px', width: '400px', backgroundColor: '#f5f5f5', border: '1px solid #cecece', position: 'relative', margin: '-0.5rem' }}>
          <div style={{ height: 'calc(100% - 56px)', overflowY: 'scroll' }}>
            <div style={{ height: '600px' }}></div>
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
                  <span className="visually-hidden">2 immagini da visualizzare</span>
                </span>
              </a>
            </it-bottom-nav-item>
            <it-bottom-nav-item>
              <a href="#">
                <div className="badge-wrapper">
                  <span className="bottom-nav-badge" aria-hidden="true">42</span>
                </div>
                <it-icon name="it-file"></it-icon>
                <span className="bottom-nav-label">documenti</span>
              </a>
            </it-bottom-nav-item>
          </it-bottom-nav>
        </div>
      </section>

      {/* Con Alert */}
      <section>
        <h2>Con alert</h2>
        <p>Bottom nav con alert per indicare nuovi contenuti.</p>
        <div style={{ height: '400px', width: '400px', backgroundColor: '#f5f5f5', border: '1px solid #cecece', position: 'relative', margin: '-0.5rem' }}>
          <div style={{ height: 'calc(100% - 56px)', overflowY: 'scroll' }}>
            <div style={{ height: '600px' }}></div>
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
}

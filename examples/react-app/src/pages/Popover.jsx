import React from 'react';

const Popover = () => {
  // Helper per gestire il click su azioni
  const handleAction = (e, action) => {
    e.preventDefault();
    e.currentTarget.closest('it-popover')?.closePopover();
    console.log(`Azione selezionata: ${action}`);
  };

  return (
    <>
      <h1>it-popover</h1>

      {/* Base - Menu utente */}
      <section style={{ marginBottom: '2rem' }}>
        <h2>Base - Menu utente</h2>
        <p>
          Esempio di popover con menu interattivo. I popover sono ideali per contenuti ricchi con link e azioni
          multiple.
        </p>
        <it-popover>
          <it-button slot="trigger" variant="primary">
            Opzioni utente, clicca per aprire
          </it-button>
          <div slot="content" className="popover">
            <div className="popover-inner">
              <h3 className="popover-header" style={{ marginBottom: '0' }}>
                Menu azioni
              </h3>
              <div className="popover-body">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <p style={{ minWidth: '200px' }}>
                    Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras.
                  </p>
                  <a
                    href="#"
                    onClick={(e) => handleAction(e, 'Modifica profilo')}
                    style={{ color: 'var(--bs-primary)', textDecoration: 'none' }}
                  >
                    Modifica profilo
                  </a>
                  <a
                    href="#"
                    onClick={(e) => handleAction(e, 'Impostazioni')}
                    style={{ color: 'var(--bs-primary)', textDecoration: 'none' }}
                  >
                    Impostazioni
                  </a>
                  <a
                    href="#"
                    onClick={(e) => handleAction(e, 'Esci')}
                    style={{ color: 'var(--bs-danger)', textDecoration: 'none' }}
                  >
                    Esci
                  </a>
                </div>
              </div>
            </div>
          </div>
        </it-popover>
      </section>

      {/* Direzioni */}
      <section style={{ marginBottom: '2rem' }}>
        <h2>Direzioni</h2>
        <p>I popover possono essere posizionati in diverse direzioni.</p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <it-popover placement="bottom-start">
            <it-button slot="trigger" variant="primary">
              Giù
            </it-button>
            <div slot="content" className="popover">
              <div className="popover-inner">
                <h3 className="popover-header" style={{ marginBottom: '0' }}>
                  Azioni rapide
                </h3>
                <div className="popover-body">
                  <p style={{ minWidth: '200px' }}>
                    Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras.
                  </p>
                  <a
                    href="#"
                    onClick={(e) => handleAction(e, 'Copia link')}
                    style={{ color: 'var(--bs-primary)', display: 'block' }}
                  >
                    Copia link
                  </a>
                </div>
              </div>
            </div>
          </it-popover>

          <it-popover placement="left">
            <it-button slot="trigger" variant="primary">
              Sinistra
            </it-button>
            <div slot="content" className="popover">
              <div className="popover-inner">
                <h3 className="popover-header" style={{ marginBottom: '0' }}>
                  Azioni rapide
                </h3>
                <div className="popover-body">
                  <p style={{ minWidth: '200px' }}>
                    Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras.
                  </p>
                  <a
                    href="#"
                    onClick={(e) => handleAction(e, 'Condividi')}
                    style={{ color: 'var(--bs-primary)', display: 'block' }}
                  >
                    Condividi
                  </a>
                </div>
              </div>
            </div>
          </it-popover>

          <it-popover placement="top-start">
            <it-button slot="trigger" variant="primary">
              Su
            </it-button>
            <div slot="content" className="popover">
              <div className="popover-inner">
                <h3 className="popover-header" style={{ marginBottom: '0' }}>
                  Azioni rapide
                </h3>
                <div className="popover-body">
                  <p style={{ minWidth: '200px' }}>
                    Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras.
                  </p>
                  <a
                    href="#"
                    onClick={(e) => handleAction(e, 'Scarica')}
                    style={{ color: 'var(--bs-primary)', display: 'block' }}
                  >
                    ⬇️ Scarica
                  </a>
                </div>
              </div>
            </div>
          </it-popover>

          <it-popover placement="right">
            <it-button slot="trigger" variant="primary">
              Destra
            </it-button>
            <div slot="content" className="popover">
              <div className="popover-inner">
                <h3 className="popover-header" style={{ marginBottom: '0' }}>
                  Azioni rapide
                </h3>
                <div className="popover-body">
                  <p style={{ minWidth: '200px' }}>
                    Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras.
                  </p>
                  <a
                    href="#"
                    onClick={(e) => handleAction(e, 'Aggiungi ai preferiti')}
                    style={{ color: 'var(--bs-primary)', display: 'block' }}
                  >
                    Aggiungi ai preferiti
                  </a>
                </div>
              </div>
            </div>
          </it-popover>
        </div>
      </section>

      {/* Titolo con icona e link */}
      <section style={{ marginBottom: '2rem' }}>
        <h2>Titolo con icona e link</h2>
        <p>È possibile aggiungere un'icona nel titolo e link nel contenuto.</p>
        <it-popover placement="top">
          <it-button slot="trigger" variant="primary">
            Info documento
          </it-button>
          <div slot="content" className="popover">
            <div className="popover-inner">
              <h3 className="popover-header" style={{ marginBottom: '0' }}>
                <it-icon name="it-info-circle" size="sm" style={{ marginRight: '0.5rem' }}></it-icon>
                Informazioni documento
              </h3>
              <div className="popover-body">
                <p style={{ minWidth: '200px' }}>
                  Questo documento contiene informazioni sensibili. Prima di procedere assicurati di avere le
                  autorizzazioni necessarie.
                  <a href="#" className="popover-inner-link" onClick={(e) => handleAction(e, 'Policy completa')}>
                    Leggi la policy completa
                  </a>
                </p>
              </div>
            </div>
          </div>
        </it-popover>
      </section>

      {/* Con trigger personalizzato */}
      <section style={{ marginBottom: '2rem' }}>
        <h2>Con trigger personalizzato</h2>
        <p>Il popover può essere attivato da qualsiasi elemento HTML.</p>
        <p style={{ maxWidth: '500px' }}>
          Per maggiori informazioni sulla privacy e su come trattiamo i tuoi dati,{' '}
          <it-popover placement="top">
            <a href="#" slot="trigger" style={{ textDecoration: 'underline', color: 'var(--bs-primary)' }}>
              consulta le nostre policy
            </a>
            <div slot="content" className="popover">
              <div className="popover-inner">
                <h3 className="popover-header">Informazioni sulla privacy</h3>
                <div className="popover-body">
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <a
                      href="#"
                      onClick={(e) => handleAction(e, 'Privacy Policy')}
                      style={{ color: 'var(--bs-primary)', textDecoration: 'none' }}
                    >
                      🔒 Privacy Policy
                    </a>
                    <a
                      href="#"
                      onClick={(e) => handleAction(e, 'Cookie Policy')}
                      style={{ color: 'var(--bs-primary)', textDecoration: 'none' }}
                    >
                      🍪 Cookie Policy
                    </a>
                    <a
                      href="#"
                      onClick={(e) => handleAction(e, 'Gestisci consensi')}
                      style={{ color: 'var(--bs-primary)', textDecoration: 'none' }}
                    >
                      ⚙️ Gestisci consensi
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </it-popover>
          .
        </p>
      </section>

      {/* Eventi */}
      <section style={{ marginBottom: '2rem' }}>
        <h2>Eventi</h2>
        <p>Il componente emette eventi quando viene aperto e chiuso.</p>
        <it-popover
          placement="bottom-start"
          onit-popover-open={() => console.log('✅ Popover aperto')}
          onit-popover-close={() => console.log('❌ Popover chiuso')}
        >
          <it-button slot="trigger" variant="primary">
            Popover con eventi
          </it-button>
          <div slot="content" className="popover">
            <div className="popover-inner">
              <h3 className="popover-header" style={{ marginBottom: '0' }}>
                Eventi del Popover
              </h3>
              <div className="popover-body">Apri e chiudi questo popover per vedere gli eventi nella console.</div>
            </div>
          </div>
        </it-popover>
      </section>
    </>
  );
};

export default Popover;

import React from 'react';

const Popover = () => {
  const popoverRef = document.querySelector('#popover-controlled');

  const handleOpen = () => {
    popoverRef?.openPopover();
  };

  const handleClose = () => {
    popoverRef?.closePopover();
  };

  const handleToggle = () => {
    popoverRef?.toggle();
  };

  // Helper per gestire il click sul trigger
  const handleTriggerClick = (e) => {
    // preveniamo la navigazione se il trigger è un link con href="#"
    if (e.currentTarget.tagName && e.currentTarget.tagName.toLowerCase() === 'a' && e.currentTarget.getAttribute('href') === '#') {
      e.preventDefault();
    }
    e.currentTarget.closest('it-popover')?.toggle();
  };

  // Helper per gestire il click su azioni
  const handleAction = (e, action) => {
    e.preventDefault();
    e.currentTarget.closest('it-popover')?.closePopover();
    console.log(`Azione selezionata: ${action}`);
  };

  return (
    <>
      <h1>it-popover</h1>

      <div className="alert alert-info" role="alert">
        <strong>Nota:</strong> Il componente <code>it-popover</code> non gestisce automaticamente il click sul trigger.
        È necessario aggiungere un event handler <code>onClick</code> che chiama <code>toggle()</code> sul popover. Vedi
        gli esempi sotto per i pattern da usare.
      </div>

      {/* Base - Menu utente */}
      <section style={{ marginBottom: '2rem' }}>
        <h2>Base - Menu utente</h2>
        <p>
          Esempio di popover con menu interattivo. I popover sono ideali per contenuti ricchi con link e azioni
          multiple.
        </p>
        <it-popover>
          <it-button slot="trigger" variant="primary" onClick={handleTriggerClick}>
            Opzioni utente
          </it-button>
          <div slot="content" className="popover">
            <div className="popover-inner">
              <h3 className="popover-header">Menu azioni</h3>
              <div className="popover-body">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <a
                    href="#"
                    onClick={(e) => handleAction(e, 'Modifica profilo')}
                    style={{ color: 'var(--bs-primary)', textDecoration: 'none' }}
                  >
                    📝 Modifica profilo
                  </a>
                  <a
                    href="#"
                    onClick={(e) => handleAction(e, 'Impostazioni')}
                    style={{ color: 'var(--bs-primary)', textDecoration: 'none' }}
                  >
                    ⚙️ Impostazioni
                  </a>
                  <a
                    href="#"
                    onClick={(e) => handleAction(e, 'Esci')}
                    style={{ color: 'var(--bs-danger)', textDecoration: 'none' }}
                  >
                    🚪 Esci
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
            <it-button slot="trigger" variant="primary" onClick={handleTriggerClick}>
              Giù
            </it-button>
            <div slot="content" className="popover">
              <div className="popover-inner">
                <h3 className="popover-header">Azioni rapide</h3>
                <div className="popover-body">
                  <a
                    href="#"
                    onClick={(e) => handleAction(e, 'Copia link')}
                    style={{ color: 'var(--bs-primary)', display: 'block' }}
                  >
                    📋 Copia link
                  </a>
                </div>
              </div>
            </div>
          </it-popover>

          <it-popover placement="left">
            <it-button slot="trigger" variant="primary" onClick={handleTriggerClick}>
              Sinistra
            </it-button>
            <div slot="content" className="popover">
              <div className="popover-inner">
                <h3 className="popover-header">Azioni rapide</h3>
                <div className="popover-body">
                  <a
                    href="#"
                    onClick={(e) => handleAction(e, 'Condividi')}
                    style={{ color: 'var(--bs-primary)', display: 'block' }}
                  >
                    📤 Condividi
                  </a>
                </div>
              </div>
            </div>
          </it-popover>

          <it-popover placement="top-start">
            <it-button slot="trigger" variant="primary" onClick={handleTriggerClick}>
              Su
            </it-button>
            <div slot="content" className="popover">
              <div className="popover-inner">
                <h3 className="popover-header">Azioni rapide</h3>
                <div className="popover-body">
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
            <it-button slot="trigger" variant="primary" onClick={handleTriggerClick}>
              Destra
            </it-button>
            <div slot="content" className="popover">
              <div className="popover-inner">
                <h3 className="popover-header">Azioni rapide</h3>
                <div className="popover-body">
                  <a
                    href="#"
                    onClick={(e) => handleAction(e, 'Aggiungi ai preferiti')}
                    style={{ color: 'var(--bs-primary)', display: 'block' }}
                  >
                    ⭐ Aggiungi ai preferiti
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
          <it-button slot="trigger" variant="primary" onClick={handleTriggerClick}>
            Info documento
          </it-button>
          <div slot="content" className="popover">
            <div className="popover-inner">
              <h3 className="popover-header">
                <it-icon name="it-info-circle" size="sm" style={{ marginRight: '0.5rem' }}></it-icon>
                Informazioni documento
              </h3>
              <div className="popover-body">
                Questo documento contiene informazioni sensibili. Prima di procedere assicurati di avere le
                autorizzazioni necessarie.
                <a href="#" className="popover-inner-link" onClick={(e) => handleAction(e, 'Policy completa')}>
                  Leggi la policy completa
                </a>
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
            <a
              href="#"
              slot="trigger"
              style={{ textDecoration: 'underline', color: 'var(--bs-primary)' }}
              onClick={handleTriggerClick}
            >
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
          <it-button slot="trigger" variant="primary" onClick={handleTriggerClick}>
            Popover con eventi
          </it-button>
          <div slot="content" className="popover">
            <div className="popover-inner">
              <h3 className="popover-header">Eventi del Popover</h3>
              <div className="popover-body">
                Apri e chiudi questo popover per vedere gli eventi nella console del browser.
              </div>
            </div>
          </div>
        </it-popover>
      </section>
    </>
  );
};

export default Popover;

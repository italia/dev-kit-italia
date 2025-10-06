import React, { useRef } from 'react';

const Popover = () => {
  const popoverRef = useRef(null);

  const handleOpen = () => {
    popoverRef.current?.openPopover();
  };

  const handleClose = () => {
    popoverRef.current?.closePopover();
  };

  const handleToggle = () => {
    popoverRef.current?.toggle();
  };

  // Helper per gestire il click sul trigger
  const handleTriggerClick = (e) => {
    e.currentTarget.closest('it-popover')?.toggle();
  };

  return (
    <>
      <h1>it-popover</h1>

      <div className="alert alert-info" role="alert">
        <strong>Nota:</strong> Il componente <code>it-popover</code> non gestisce automaticamente il click sul trigger.
        È necessario aggiungere un event handler <code>onClick</code> che chiama <code>toggle()</code>, <code>openPopover()</code> o <code>closePopover()</code> sul popover.
        Vedi gli esempi sotto per i pattern da usare.
      </div>

      {/* Base */}
      <section>
        <h2>Base</h2>
        <p>Esempio base di popover con titolo e contenuto.</p>
        <it-popover>
          <it-button
            slot="trigger"
            variant="danger"
            onClick={(e) => {
              e.currentTarget.closest('it-popover').toggle();
            }}
          >
            Clicca per attivare/disattivare il popover
          </it-button>
          <div slot="content" className="popover" tabIndex="-1">
            <div className="popover-inner">
              <h3 className="popover-header">Titolo del Popover</h3>
              <div className="popover-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue.
              </div>
            </div>
          </div>
        </it-popover>
      </section>

      {/* Posizioni */}
      <section>
        <h2>Posizioni</h2>
        <p>Sono disponibili quattro posizioni principali: top, right, bottom e left.</p>
        <div className="flex p-0" style={{ gap: '1rem', flexWrap: 'wrap' }}>
          <it-popover placement="top">
            <it-button slot="trigger" variant="primary">
              Popover in alto
            </it-button>
            <div slot="content" className="popover" tabIndex="-1">
              <div className="popover-inner">
                <h3 className="popover-header">Popover top</h3>
                <div className="popover-body">Questo popover viene visualizzato sopra l'elemento trigger.</div>
              </div>
            </div>
          </it-popover>

          <it-popover placement="right">
            <it-button slot="trigger" variant="primary">
              Popover a destra
            </it-button>
            <div slot="content" className="popover" tabIndex="-1">
              <div className="popover-inner">
                <h3 className="popover-header">Popover right</h3>
                <div className="popover-body">Questo popover viene visualizzato a destra dell'elemento trigger.</div>
              </div>
            </div>
          </it-popover>

          <it-popover placement="bottom">
            <it-button slot="trigger" variant="primary">
              Popover in basso
            </it-button>
            <div slot="content" className="popover" tabIndex="-1">
              <div className="popover-inner">
                <h3 className="popover-header">Popover bottom</h3>
                <div className="popover-body">Questo popover viene visualizzato sotto l'elemento trigger.</div>
              </div>
            </div>
          </it-popover>

          <it-popover placement="left">
            <it-button slot="trigger" variant="primary">
              Popover a sinistra
            </it-button>
            <div slot="content" className="popover" tabIndex="-1">
              <div className="popover-inner">
                <h3 className="popover-header">Popover left</h3>
                <div className="popover-body">Questo popover viene visualizzato a sinistra dell'elemento trigger.</div>
              </div>
            </div>
          </it-popover>
        </div>
      </section>

      {/* Titolo con icona e link */}
      <section>
        <h2>Titolo con icona e link</h2>
        <p>È possibile aggiungere un'icona nel titolo e un link nel contenuto.</p>
        <it-popover placement="top">
          <it-button slot="trigger" variant="primary">
            Popover con icona e link
          </it-button>
          <div slot="content" className="popover" tabIndex="-1">
            <div className="popover-inner">
              <h3 className="popover-header">
                <it-icon name="it-info-circle" size="sm" style={{ marginRight: '0.5rem' }}></it-icon>
                Titolo del Popover
              </h3>
              <div className="popover-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue. Vestibulum ante ipsum
                primis in faucibus orci luctus.
                <a href="#" className="popover-inner-link">
                  Vai al link
                </a>
              </div>
            </div>
          </div>
        </it-popover>
      </section>

      {/* Elemento disabilitato */}
      <section>
        <h2>Elemento disabilitato</h2>
        <p>Per attivare un popover su elementi disabilitati, è necessario usare un elemento contenitore.</p>
        <span style={{ display: 'inline-block' }} tabIndex="0">
          <it-popover placement="top">
            <it-button slot="trigger" disabled variant="primary">
              Pulsante disabilitato
            </it-button>
            <div slot="content" className="popover" tabIndex="-1">
              <div className="popover-inner">
                <h3 className="popover-header">Popover disabilitato</h3>
                <div className="popover-body">
                  Questo popover appare su un elemento disabilitato. È necessario usare un elemento contenitore.
                </div>
              </div>
            </div>
          </it-popover>
        </span>
      </section>

      {/* Contenuto personalizzato */}
      <section>
        <h2>Contenuto personalizzato</h2>
        <p>Il popover può contenere qualsiasi tipo di contenuto HTML.</p>
        <it-popover placement="right">
          <it-button slot="trigger" variant="success">
            Popover con contenuto ricco
          </it-button>
          <div slot="content" className="popover" tabIndex="-1" style={{ maxWidth: '400px' }}>
            <div className="popover-inner">
              <h3 className="popover-header">
                <it-icon name="it-check-circle" size="sm" color="success" style={{ marginRight: '0.5rem' }}></it-icon>
                Contenuto Ricco
              </h3>
              <div className="popover-body">
                <p>Il popover può contenere qualsiasi tipo di contenuto HTML:</p>
                <ul>
                  <li>Liste</li>
                  <li>Link</li>
                  <li>Immagini</li>
                  <li>Form</li>
                </ul>
                <p>
                  <it-button variant="primary" size="sm">
                    Azione
                  </it-button>
                </p>
              </div>
            </div>
          </div>
        </it-popover>
      </section>

      {/* Controllo programmatico */}
      <section>
        <h2>Controllo programmatico</h2>
        <p>Il popover può essere controllato tramite JavaScript.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <it-button variant="secondary" size="sm" onClick={handleOpen}>
              Apri
            </it-button>
            <it-button variant="secondary" size="sm" onClick={handleClose}>
              Chiudi
            </it-button>
            <it-button variant="secondary" size="sm" onClick={handleToggle}>
              Toggle
            </it-button>
          </div>

          <it-popover ref={popoverRef} placement="bottom">
            <it-button slot="trigger" variant="primary">
              Popover controllato
            </it-button>
            <div slot="content" className="popover" tabIndex="-1">
              <div className="popover-inner">
                <h3 className="popover-header">Controllo programmatico</h3>
                <div className="popover-body">
                  Questo popover può essere controllato tramite i metodi <code>openPopover()</code>,{' '}
                  <code>closePopover()</code> e <code>toggle()</code>.
                </div>
              </div>
            </div>
          </it-popover>
        </div>
      </section>

      {/* Trigger personalizzato */}
      <section>
        <h2>Trigger personalizzato</h2>
        <p>Il popover può essere attivato da qualsiasi elemento HTML, non solo pulsanti.</p>
        <it-popover placement="top">
          <a href="#" slot="trigger" style={{ textDecoration: 'underline' }}>
            Passa sopra o clicca questo link
          </a>
          <div slot="content" className="popover" tabIndex="-1">
            <div className="popover-inner">
              <h3 className="popover-header">Trigger personalizzato</h3>
              <div className="popover-body">
                Il popover può essere attivato da qualsiasi elemento HTML, non solo da pulsanti. In questo caso è un
                link.
              </div>
            </div>
          </div>
        </it-popover>
      </section>

      {/* Eventi */}
      <section>
        <h2>Eventi</h2>
        <p>Il componente emette eventi quando viene aperto e chiuso.</p>
        <it-popover
          placement="bottom"
          onit-popover-open={(e) => console.log('Popover aperto', e)}
          onit-popover-close={(e) => console.log('Popover chiuso', e)}
        >
          <it-button slot="trigger" variant="primary">
            Popover con eventi
          </it-button>
          <div slot="content" className="popover" tabIndex="-1">
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

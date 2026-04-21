import React, { useRef } from 'react';

const Tooltip = () => {
  const tooltipControlledRef = useRef(null);

  const handleLinkClick = (e) => {
    e.preventDefault();
  };

  const handleShowTooltip = () => {
    tooltipControlledRef.current?.showTooltip();
  };

  const handleHideTooltip = () => {
    tooltipControlledRef.current?.hideTooltip();
  };

  return (
    <>
      <h1>Tooltip</h1>

      {/* Base */}
      <section style={{ marginBottom: '2rem' }}>
        <h2>Base</h2>
        <div style={{ padding: '30px 0', textAlign: 'center' }}>
          <it-tooltip placement="top">
            <it-button slot="trigger" variant="primary">
              Mostra tooltip
            </it-button>
            <span slot="content">Testo del tooltip</span>
          </it-tooltip>
        </div>
      </section>

      {/* Su link e testo */}
      <section style={{ marginBottom: '2rem' }}>
        <h2>Su link e testo</h2>
        <p style={{ maxWidth: '400px', lineHeight: '2' }}>
          Il tooltip può essere usato su qualsiasi elemento interattivo, come i{' '}
          <it-tooltip placement="top">
            <a slot="trigger" href="#" onClick={handleLinkClick}>
              link in una frase
            </a>
            <span slot="content">Primo link con tooltip</span>
          </it-tooltip>{' '}
          di testo, per fornire informazioni contestuali senza occupare spazio nella pagina. Basta passare il mouse o
          portare il focus su un{' '}
          <it-tooltip placement="top">
            <a slot="trigger" href="#" onClick={handleLinkClick}>
              elemento con tooltip
            </a>
            <span slot="content">Secondo link con tooltip</span>
          </it-tooltip>{' '}
          per vedere l&apos;etichetta comparire.
        </p>
      </section>

      {/* Posizione */}
      <section style={{ marginBottom: '2rem' }}>
        <h2>Posizione</h2>
        <div
          style={{
            display: 'grid',
            gap: '.5rem',
            gridTemplate: '1fr 1fr 1fr / 1fr 1fr 1fr',
            placeItems: 'center',
          }}
        >
          <it-tooltip placement="bottom" style={{ gridColumn: '2', gridRow: '1' }}>
            <it-button slot="trigger" variant="primary">
              Giù
            </it-button>
            <span slot="content">Tooltip in basso</span>
          </it-tooltip>
          <it-tooltip placement="top" style={{ gridColumn: '2', gridRow: '3' }}>
            <it-button slot="trigger" variant="primary">
              Su
            </it-button>
            <span slot="content">Tooltip in alto</span>
          </it-tooltip>
          <it-tooltip placement="right" style={{ gridColumn: '1', gridRow: '2' }}>
            <it-button slot="trigger" variant="primary">
              Destra
            </it-button>
            <span slot="content">Tooltip a destra</span>
          </it-tooltip>
          <it-tooltip placement="left" style={{ gridColumn: '3', gridRow: '2' }}>
            <it-button slot="trigger" variant="primary">
              Sinistra
            </it-button>
            <span slot="content">Tooltip a sinistra</span>
          </it-tooltip>
        </div>
      </section>

      {/* Testo formattato */}
      <section style={{ marginBottom: '2rem' }}>
        <h2>Testo formattato</h2>
        <it-tooltip placement="right">
          <it-button slot="trigger" variant="primary">
            Mostra tooltip
          </it-button>
          <span slot="content">
            <em>Tooltip</em> <u>con</u> <strong>HTML</strong>
          </span>
        </it-tooltip>
      </section>

      {/* Attivazione controllata */}
      <section style={{ marginBottom: '2rem' }}>
        <h2>Attivazione controllata</h2>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', height: '70px' }}>
          <it-tooltip placement="bottom" controlled ref={tooltipControlledRef}>
            <it-button slot="trigger" variant="primary">
              Target
            </it-button>
            <span slot="content">Tooltip controllato</span>
          </it-tooltip>
          <button
            className="btn btn-secondary"
            onMouseEnter={handleShowTooltip}
            onMouseLeave={handleHideTooltip}
          >
            Hover qui per mostrare il tooltip
          </button>
        </div>
      </section>

      {/* Eventi */}
      <section style={{ marginBottom: '2rem' }}>
        <h2>Eventi</h2>
        <it-tooltip
          placement="right"
          onit-tooltip-open={(e) => console.log('Tooltip aperto', e)}
          onit-tooltip-close={(e) => console.log('Tooltip chiuso', e)}
        >
          <it-button slot="trigger" variant="primary">
            Hover o focus
          </it-button>
          <span slot="content">Tooltip con eventi</span>
        </it-tooltip>
      </section>
    </>
  );
};

export default Tooltip;

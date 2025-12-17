import React from 'react';

const Popover = () => {
  const handleLinkClick = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h1>it-popover</h1>

      {/* Base */}
      <section style={{ marginBottom: '2rem' }}>
        <h2>Base</h2>
        <it-popover placement="right">
          <it-button slot="trigger" variant="primary">
            Opzioni utente, clicca per aprire
          </it-button>
          <div slot="content" className="popover">
            <h4 className="popover-header">Titolo del popover</h4>
            <div className="popover-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue.
            </div>
          </div>
        </it-popover>
      </section>

      {/* Posizione */}
      <section style={{ marginBottom: '2rem' }}>
        <h2>Posizione</h2>
        <div style={{ display: 'grid', gap: '.5rem', gridTemplate: '1fr 1fr 1fr / 1fr 1fr 1fr' }}>
          <it-popover placement="bottom-start" style={{ gridColumn: '2' }}>
            <it-button slot="trigger" variant="primary">
              Giù
            </it-button>
            <div slot="content" className="popover">
              <h4 className="popover-header">Titolo del popover</h4>
              <div className="popover-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue.
              </div>
            </div>
          </it-popover>

          <it-popover placement="top-start" style={{ gridRow: '3', gridColumn: '2' }}>
            <it-button slot="trigger" variant="primary">
              Su
            </it-button>
            <div slot="content" className="popover">
              <h4 className="popover-header">Titolo del popover</h4>
              <div className="popover-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue.
              </div>
            </div>
          </it-popover>

          <it-popover placement="left" style={{ gridRow: '2', gridColumn: '3' }}>
            <it-button slot="trigger" variant="primary">
              Sinistra
            </it-button>
            <div slot="content" className="popover">
              <h4 className="popover-header">Titolo del popover</h4>
              <div className="popover-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue.
              </div>
            </div>
          </it-popover>

          <it-popover placement="right" style={{ gridRow: '2', gridColumn: '1' }}>
            <it-button slot="trigger" variant="primary">
              Destra
            </it-button>
            <div slot="content" className="popover">
              <h4 className="popover-header">Titolo del popover</h4>
              <div className="popover-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue.
              </div>
            </div>
          </it-popover>
        </div>
      </section>

      {/* Titolo con icona e link */}
      <section style={{ marginBottom: '2rem' }}>
        <h2>Titolo con icona e link</h2>
        <it-popover>
          <it-button slot="trigger" variant="primary">
            Popover con icona e link
          </it-button>
          <div slot="content" className="popover">
            <h4 className="popover-header">
              <it-icon name="it-help-circle" size="sm"></it-icon>
              Titolo con icona
            </h4>
            <div className="popover-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue.
              <a href="#" className="popover-inner-link" onClick={handleLinkClick}>
                Leggi tutto
                <it-icon name="it-arrow-right" size="xs" color="primary"></it-icon>
              </a>
            </div>
          </div>
        </it-popover>
      </section>

      {/* Elementi disabilitati */}
      <section style={{ marginBottom: '2rem' }}>
        <h2>Elementi disabilitati</h2>
        <it-popover placement="right">
          <it-button slot="trigger" variant="primary" disabled>
            Pulsante disabilitato, il popover non si apre
          </it-button>
          <div slot="content" className="popover">
            <div className="popover-body">Popover disabilitato</div>
          </div>
        </it-popover>
      </section>

      {/* Elementi disabilitati con hover */}
      <section style={{ marginBottom: '2rem' }}>
        <h2>Elementi disabilitati con hover</h2>
        <ElementiDisabilitatiConHover />
      </section>

      {/* Attivazione controllata */}
      <section style={{ marginBottom: '2rem' }}>
        <h2>Attivazione controllata</h2>
        <p>Non si apre semplicemente con il click, il comportamento dev'essere controllato tramite codice.</p>
        <it-popover controlled placement="right">
          <it-button slot="trigger" variant="primary">
            Popover controllato
          </it-button>
          <div slot="content" className="popover">
            <div className="popover-inner">
              <div className="popover-body">Questo popover non si aprirà e questo testo non si vedrà.</div>
            </div>
          </div>
        </it-popover>
      </section>

      {/* Eventi */}
      <section style={{ marginBottom: '2rem' }}>
        <h2>Eventi</h2>
        <it-popover
          onit-popover-open={(e) => console.log('Popover aperto', e)}
          onit-popover-close={(e) => console.log('Popover chiuso', e)}
          placement="right"
        >
          <it-button slot="trigger" variant="primary">
            Popover con eventi
          </it-button>
          <div slot="content" className="popover">
            <h4 className="popover-header">Eventi del Popover</h4>
            <div className="popover-body">Apri e chiudi questo popover per vedere gli eventi nella console.</div>
          </div>
        </it-popover>
      </section>
    </>
  );
};

// Componente separato per elementi disabilitati con hover
const ElementiDisabilitatiConHover = () => {
  const handleMouseEnter = (e) => {
    const button = e.target;
    const popover = button.closest('it-popover');
    popover?.openPopover();
  };

  const handleMouseLeave = (e) => {
    const button = e.target;
    const popover = button.closest('it-popover');
    popover?.closePopover();
  };

  const handleFocus = (e) => {
    const button = e.target;
    const popover = button.closest('it-popover');
    popover?.openPopover();
  };

  const handleBlur = (e) => {
    const target = e.relatedTarget;
    if (!target?.closest?.('it-popover')) {
      const button = e.target;
      const popover = button.closest('it-popover');
      popover?.closePopover();
    }
  };

  return (
    <it-popover placement="right">
      <it-button
        slot="trigger"
        variant="primary"
        disabled
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        Pulsante disabilitato
      </it-button>
      <div slot="content" className="popover" onBlur={handleBlur}>
        <div className="popover-body">Pulsante disabilitato, qui puoi spiegare il perché</div>
      </div>
    </it-popover>
  );
};

export default Popover;

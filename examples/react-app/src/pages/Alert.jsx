import React from 'react';

const Alert = () => {
  const handleClose = (event) => {
    const alertElement = event.target.closest('.alert');
    if (alertElement) {
      alertElement.classList.remove('show');
      setTimeout(() => {
        alertElement.remove();
      }, 150);
    }
  };

  return (
    <>
      <h1>Alert</h1>
      <p className="lead">
        Breve messaggio di testo con uno stile grafico distintivo per avvisare gli utenti di un evento o di un'azione
        che richiede la loro attenzione
      </p>

      <section>
        <h2>Esempi</h2>
        <p>Gli avvisi sono disponibili in quattro tipologie diverse e sono adatti a qualsiasi lunghezza di testo.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="alert alert-primary" role="alert">
            <it-icon name="it-info-circle" className="alert-icon"></it-icon>Questo è un alert di tipo "<b>primary</b>".
          </div>

          <div className="alert alert-secondary" role="alert">
            <it-icon name="it-info-circle" className="alert-icon"></it-icon>Questo è un alert di tipo "<b>secondary</b>
            ".
          </div>

          <div className="alert alert-success" role="alert">
            <it-icon name="it-check-circle" className="alert-icon"></it-icon>Questo è un alert di tipo "<b>success</b>".
          </div>

          <div className="alert alert-warning" role="alert">
            <it-icon name="it-info-circle" className="alert-icon"></it-icon>Questo è un alert di tipo "<b>warning</b>".
          </div>

          <div className="alert alert-danger" role="alert">
            <it-icon name="it-info-circle" className="alert-icon"></it-icon>Questo è un alert di tipo "<b>danger</b>".
          </div>
        </div>
      </section>

      <section>
        <h2>Link evidenziato</h2>
        <p>Usa la classe `.alert-link` per dare risalto ad un link all'interno dell'alert.</p>
        <div className="alert alert-danger" role="alert">
          Questo è un alert con un esempio di{' '}
          <a href="#" className="alert-link">
            link
          </a>{' '}
          evidenziato.
        </div>
      </section>

      <section>
        <h2>Contenuto aggiuntivo</h2>
        <p>I messaggi di avviso possono avere del contenuto HTML aggiuntivo come intestazioni, paragrafi e divisori.</p>
        <div className="alert alert-success" role="alert">
          <h4 className="alert-heading">Avviso di successo!</h4>
          <p>
            Stai leggendo questo importante messaggio di avviso di successo. Questo testo di esempio sarà più lungo in
            modo da poter vedere come funziona la spaziatura all'interno di un avviso con questo tipo di contenuto.
          </p>
          <hr />
          <p className="mb-0">
            Quando necessario, assicurati di inserire le utilità di margine per mantenere gli spazi equilibrati.
          </p>
        </div>
      </section>

      <section>
        <h2>Chiusura</h2>
        <p>È possibile eliminare qualsiasi avviso mediante un pulsante di chiusura.</p>
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
          <strong>Attenzione</strong> Alcuni campi inseriti sono da controllare.
          <it-button type="button" className="btn-close" it-aria-label="Chiudi avviso" onClick={handleClose}>
            <it-icon name="it-close"></it-icon>
          </it-button>
        </div>
      </section>
    </>
  );
};

export default Alert;

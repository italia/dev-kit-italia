<script>
  function handleClose(event) {
    const alertElement = event.target.closest('.alert');
    if (alertElement) {
      alertElement.classList.remove('show');
      setTimeout(() => {
        alertElement.remove();
      }, 150);
    }
  }
</script>

<h1>Alert</h1>
<p class="lead">
  Breve messaggio di testo con uno stile grafico distintivo per avvisare gli utenti di un evento o di un'azione che
  richiede la loro attenzione
</p>

<section>
  <h2>Esempi</h2>
  <p>Gli avvisi sono disponibili in quattro tipologie diverse e sono adatti a qualsiasi lunghezza di testo.</p>
  <div style="display: flex; flex-direction: column; gap: 1rem">
    <div class="alert alert-primary" role="alert">
      <it-icon name="it-info-circle" class="alert-icon"></it-icon>Questo è un alert di tipo "<b>primary</b>".
    </div>

    <div class="alert alert-secondary" role="alert">
      <it-icon name="it-info-circle" class="alert-icon"></it-icon>Questo è un alert di tipo "<b>secondary</b>".
    </div>

    <div class="alert alert-success" role="alert">
      <it-icon name="it-check-circle" class="alert-icon"></it-icon>Questo è un alert di tipo "<b>success</b>".
    </div>

    <div class="alert alert-warning" role="alert">
      <it-icon name="it-info-circle" class="alert-icon"></it-icon>Questo è un alert di tipo "<b>warning</b>".
    </div>

    <div class="alert alert-danger" role="alert">
      <it-icon name="it-info-circle" class="alert-icon"></it-icon>Questo è un alert di tipo "<b>danger</b>".
    </div>
  </div>
</section>

<section>
  <h2>Link evidenziato</h2>
  <p>Usa la classe `.alert-link` per dare risalto ad un link all'interno dell'alert.</p>
  <div class="alert alert-danger" role="alert">
    Questo è un alert con un esempio di
    <a href="#" class="alert-link">link</a>
    evidenziato.
  </div>
</section>

<section>
  <h2>Contenuto aggiuntivo</h2>
  <p>I messaggi di avviso possono avere del contenuto HTML aggiuntivo come intestazioni, paragrafi e divisori.</p>
  <div class="alert alert-success" role="alert">
    <h4 class="alert-heading">Avviso di successo!</h4>
    <p>
      Stai leggendo questo importante messaggio di avviso di successo. Questo testo di esempio sarà più lungo in modo
      da poter vedere come funziona la spaziatura all'interno di un avviso con questo tipo di contenuto.
    </p>
    <hr />
    <p class="mb-0">
      Quando necessario, assicurati di inserire le utilità di margine per mantenere gli spazi equilibrati.
    </p>
  </div>
</section>

<section>
  <h2>Chiusura</h2>
  <p>È possibile eliminare qualsiasi avviso mediante un pulsante di chiusura.</p>
  <div class="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>Attenzione</strong> Alcuni campi inseriti sono da controllare.
    <it-button type="button" class="btn-close" it-aria-label="Chiudi avviso" on:click={handleClose}>
      <it-icon name="it-close"></it-icon>
    </it-button>
  </div>
</section>

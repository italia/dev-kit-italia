<script>
  function onAlertClose(e) {
    e.preventDefault();
    if (window.confirm('Vuoi davvero chiudere questo avviso?')) {
      e.currentTarget.close();
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
    <it-alert variant="primary">
      <div class="alert">
        <it-icon name="it-info-circle" class="alert-icon"></it-icon>Questo è un alert di tipo "<b>primary</b>".
      </div>
    </it-alert>

    <it-alert variant="secondary">
      <div class="alert">
        <it-icon name="it-info-circle" class="alert-icon"></it-icon>Questo è un alert di tipo "<b>secondary</b>".
      </div>
    </it-alert>

    <it-alert variant="success">
      <div class="alert">
        <it-icon name="it-check-circle" class="alert-icon"></it-icon>Questo è un alert di tipo "<b>success</b>".
      </div>
    </it-alert>

    <it-alert variant="warning">
      <div class="alert">
        <it-icon name="it-info-circle" class="alert-icon"></it-icon>Questo è un alert di tipo "<b>warning</b>".
      </div>
    </it-alert>

    <it-alert variant="danger">
      <div class="alert">
        <it-icon name="it-info-circle" class="alert-icon"></it-icon>Questo è un alert di tipo "<b>danger</b>".
      </div>
    </it-alert>
  </div>
</section>

<section>
  <h2>Link evidenziato</h2>
  <p>Usa la classe `.alert-link` per dare risalto ad un link all'interno dell'alert.</p>
  <it-alert variant="danger">
    <div class="alert">
      Questo è un alert con un esempio di
      <a href="#" class="alert-link">link</a>
      evidenziato.
    </div>
  </it-alert>
</section>

<section>
  <h2>Contenuto aggiuntivo</h2>
  <p>I messaggi di avviso possono avere del contenuto HTML aggiuntivo come intestazioni, paragrafi e divisori.</p>
  <it-alert variant="success">
    <div class="alert">
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
  </it-alert>
</section>

<section>
  <h2>Chiusura</h2>
  <p>È possibile eliminare qualsiasi avviso mediante un pulsante di chiusura.</p>
  <it-alert variant="warning">
    <div class="alert alert-dismissible fade show">
      <strong>Attenzione</strong> Alcuni campi inseriti sono da controllare.
      <it-button type="button" class="btn-close" it-aria-label="Chiudi avviso">
        <it-icon name="it-close"></it-icon>
      </it-button>
    </div>
  </it-alert>
</section>

<section>
  <h2>Chiusura con logica personalizzata</h2>
  <p>
    L'evento <code>it-alert-close</code> è cancelable: chiamando <code>preventDefault()</code> puoi intercettare la
    chiusura ed eseguire una logica personalizzata, richiamando poi il metodo pubblico <code>close()</code>.
  </p>
  <it-alert variant="warning" on:it-alert-close={onAlertClose}>
    <div class="alert alert-dismissible fade show">
      <strong>Attenzione</strong> La chiusura richiede conferma.
      <it-button type="button" class="btn-close" it-aria-label="Chiudi avviso">
        <it-icon name="it-close"></it-icon>
      </it-button>
    </div>
  </it-alert>
</section>

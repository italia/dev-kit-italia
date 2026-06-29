<script>
  let notificationRef;
  let notificationDismissableRef;
  let notificationSuccessRef;
  let notificationErrorRef;
  let notificationWarningRef;
  let notificationInfoRef;
  let notificationManualRef;
  let confirmNotification;

  function onNotificationClose(e) {
    e.preventDefault();
    if (window.confirm('Vuoi davvero chiudere la notifica?')) {
      e.currentTarget.hide();
    }
  }

  function showNotification(ref) {
    if (ref) {
      ref.show();
    }
  }

  function showNotificationByTarget(event) {
    const notification = event.currentTarget.previousElementSibling;
    if (notification) {
      notification.show();
    }
  }

  function showNotificationWithTimeout(event, timeout) {
    const notification = event.currentTarget.previousElementSibling;
    if (notification) {
      notification.show(timeout);
    }
  }
</script>

<h1>Notification</h1>
<p>Messaggio di testo a comparsa per informare l'utente di eventi, aggiornamenti o azioni che richiedono la sua attenzione.</p>

<!-- Sezione: Con messaggio -->
<section class="my-5">
  <h2>Con messaggio</h2>
  <div class="d-flex gap-3 flex-wrap">
    <div>
      <it-notification bind:this={notificationRef} icon="it-info-circle" status="info">
        <span slot="title">Titolo della notifica</span>
        <p>Testo descrittivo della notifica che fornisce informazioni all'utente.</p>
      </it-notification>
      <button class="btn btn-primary mt-3" on:click={() => showNotification(notificationRef)}>
        Mostra notifica
      </button>
    </div>
  </div>
</section>

<!-- Sezione: Eliminabili -->
<section class="my-5">
  <h2>Eliminabili (dismissable)</h2>
  <p>Le notifiche eliminabili non vengono nascoste dopo un intervallo di tempo ma vengono chiuse solo quando si clicca sul pulsante di chiusura.</p>
  <div class="d-flex gap-3 flex-wrap">
    <div>
      <it-notification bind:this={notificationDismissableRef} icon="it-check-circle" status="success" dismissable>
        <span slot="title">Operazione completata</span>
        <p>La tua azione è stata eseguita con successo.</p>
      </it-notification>
      <button class="btn btn-primary mt-3" on:click={() => showNotification(notificationDismissableRef)}>
        Mostra notifica dismissable
      </button>
    </div>
  </div>
</section>

<!-- Sezione: Stati -->
<section class="my-5">
  <h2>Stati (success, error, warning, info)</h2>
  <div class="d-flex gap-3 flex-wrap">
    <div>
      <it-notification bind:this={notificationSuccessRef} icon="it-check-circle" status="success">
        <span slot="title">Successo</span>
        <p>L'operazione è stata completata con successo.</p>
      </it-notification>
      <button class="btn btn-success mt-3" on:click={() => showNotification(notificationSuccessRef)}>
        Mostra notifica di successo
      </button>
    </div>

    <div>
      <it-notification bind:this={notificationErrorRef} icon="it-error" status="error">
        <span slot="title">Errore</span>
        <p>Si è verificato un errore durante l'operazione.</p>
      </it-notification>
      <button class="btn btn-danger mt-3" on:click={() => showNotification(notificationErrorRef)}>
        Mostra notifica di errore
      </button>
    </div>

    <div>
      <it-notification bind:this={notificationWarningRef} icon="it-warning-circle" status="warning">
        <span slot="title">Attenzione</span>
        <p>Si prega di prestare attenzione a questo avviso importante.</p>
      </it-notification>
      <button class="btn btn-warning mt-3" on:click={() => showNotification(notificationWarningRef)}>
        Mostra notifica di avviso
      </button>
    </div>

    <div>
      <it-notification bind:this={notificationInfoRef} icon="it-info-circle" status="info">
        <span slot="title">Informazione</span>
        <p>Ecco un'informazione utile per te.</p>
      </it-notification>
      <button class="btn btn-info mt-3" on:click={() => showNotification(notificationInfoRef)}>
        Mostra notifica di informazione
      </button>
    </div>
  </div>
</section>

<!-- Sezione: Posizione -->
<section class="my-5">
  <h2>Posizione fissa</h2>
  <p>La posizione predefinita delle notifiche è nella parte destra inferiore della finestra. Utilizzando l'attributo fix, puoi posizionare la notifica a filo di uno dei margini.</p>

  <div class="d-flex gap-3 flex-wrap">
    <div>
      <it-notification icon="it-info-circle" status="info" fix="top">
        <span slot="title">Notifica in alto</span>
        <p>Questa notifica è posizionata in alto.</p>
      </it-notification>
      <button class="btn btn-outline-primary" on:click={showNotificationByTarget}>
        Mostra in alto
      </button>
    </div>

    <div>
      <it-notification icon="it-info-circle" status="info" fix="bottom">
        <span slot="title">Notifica in basso</span>
        <p>Questa notifica è posizionata in basso.</p>
      </it-notification>
      <button class="btn btn-outline-primary" on:click={showNotificationByTarget}>
        Mostra in basso
      </button>
    </div>

    <div>
      <it-notification icon="it-info-circle" status="info" fix="left">
        <span slot="title">Notifica a sinistra</span>
        <p>Questa notifica è posizionata a sinistra.</p>
      </it-notification>
      <button class="btn btn-outline-primary" on:click={showNotificationByTarget}>
        Mostra a sinistra
      </button>
    </div>

    <div>
      <it-notification icon="it-info-circle" status="info" fix="right">
        <span slot="title">Notifica a destra</span>
        <p>Questa notifica è posizionata a destra.</p>
      </it-notification>
      <button class="btn btn-outline-primary" on:click={showNotificationByTarget}>
        Mostra a destra
      </button>
    </div>
  </div>
</section>

<!-- Sezione: Attivazione automatica -->
<section class="my-5">
  <h2>Notifiche a scomparsa automatica</h2>
  <p>Questo è il comportamento di default quando non imposti l'attributo dismissable. La notifica si nasconde automaticamente dopo il timeout specificato (default: 3000ms).</p>

  <div class="d-flex gap-3 flex-wrap">
    <div>
      <it-notification icon="it-check-circle" status="success">
        <span slot="title">Notifica con timeout di 2 secondi</span>
        <p>Questa notifica scomparirà dopo 2 secondi.</p>
      </it-notification>
      <button class="btn btn-primary mt-3" on:click={(e) => showNotificationWithTimeout(e, 2000)}>
        Mostra (2s)
      </button>
    </div>

    <div>
      <it-notification icon="it-check-circle" status="success">
        <span slot="title">Notifica con timeout di 5 secondi</span>
        <p>Questa notifica scomparirà dopo 5 secondi.</p>
      </it-notification>
      <button class="btn btn-primary mt-3" on:click={(e) => showNotificationWithTimeout(e, 5000)}>
        Mostra (5s)
      </button>
    </div>
  </div>
</section>

<!-- Sezione: Controllo manuale -->
<section class="my-5">
  <h2>Notifiche a scomparsa manuale (con pulsante di chiusura)</h2>
  <p>Quando imposti l'attributo dismissable, la notifica non si nasconde automaticamente. Puoi chiuderla usando il pulsante di chiusura interno oppure programmatichemante con il metodo hide().</p>

  <div class="d-flex gap-3 flex-wrap">
    <div>
      <it-notification bind:this={notificationManualRef} dismissable icon="it-warning-circle" status="warning">
        <span slot="title">Notifica con chiusura manuale</span>
        <p>Clicca il pulsante per chiudere la notifica.</p>
      </it-notification>
      <button class="btn btn-warning mt-3" on:click={() => showNotification(notificationManualRef)}>
        Mostra notifica
      </button>
    </div>
  </div>
</section>

<!-- Sezione: Heading level -->
<section class="my-5">
  <h2>Heading level personalizzato</h2>
  <p>Utilizza l'attributo heading-level per impostare il tag HTML corretto (h2, h3, h4, h5, h6) a seconda del contesto della pagina.</p>

  <div class="d-flex gap-3 flex-wrap">
    <div>
      <it-notification icon="it-info-circle" status="info" heading-level="h3">
        <span slot="title">Notifica con h3</span>
        <p>Questa notifica usa h3 come tag di intestazione.</p>
      </it-notification>
      <button class="btn btn-outline-primary mt-3" on:click={showNotificationByTarget}>
        Mostra con h3
      </button>
    </div>

    <div>
      <it-notification icon="it-info-circle" status="info" heading-level="h4">
        <span slot="title">Notifica con h4</span>
        <p>Questa notifica usa h4 come tag di intestazione.</p>
      </it-notification>
      <button class="btn btn-outline-primary mt-3" on:click={showNotificationByTarget}>
        Mostra con h4
      </button>
    </div>
  </div>
</section>

<!-- Sezione: Senza animazione -->
<section class="my-5">
  <h2>Senza animazione di fade</h2>
  <p>Per rimuovere l'animazione di dissolvenza, imposta l'attributo fade a false.</p>

  <div class="d-flex gap-3 flex-wrap">
    <div>
      <it-notification fade={false} icon="it-info-circle" status="info">
        <span slot="title">Notifica senza fade</span>
        <p>Questa notifica appare e scompare senza animazione.</p>
      </it-notification>
      <button class="btn btn-outline-primary mt-3" on:click={showNotificationByTarget}>
        Mostra senza animazione
      </button>
    </div>
  </div>
</section>

<!-- Sezione: Combinazioni -->
<section class="my-5">
  <h2>Esempi combinati</h2>
  <p>Combinazioni di attributi per creare notifiche complesse e personalizzate.</p>

  <div class="d-flex gap-3 flex-wrap">
    <div>
      <it-notification
        icon="it-check-circle"
        status="success"
        dismissable
        fix="top"
        heading-level="h3"
      >
        <span slot="title">Successo con opzioni avanzate</span>
        <p>Questa notifica combina status success, dismissable, posizione top e h3 heading.</p>
      </it-notification>
      <button class="btn btn-success mt-3" on:click={showNotificationByTarget}>
        Mostra notifica combinata
      </button>
    </div>

    <div>
      <it-notification
        icon="it-error"
        status="error"
        dismissable
        fix="bottom"
        heading-level="h4"
      >
        <span slot="title">Errore con opzioni avanzate</span>
        <p>Questa notifica combina status error, dismissable, posizione bottom e h4 heading.</p>
      </it-notification>
      <button class="btn btn-danger mt-3" on:click={showNotificationByTarget}>
        Mostra notifica di errore
      </button>
    </div>
  </div>
</section>

<!-- Sezione: Chiusura con conferma -->
<section class="my-5">
  <h2>Chiusura con conferma</h2>
  <p>L'evento <code>it-notification-close</code> è annullabile: viene emesso prima della chiusura e può essere intercettato con <code>preventDefault()</code> per chiedere conferma all'utente.</p>

  <div class="d-flex gap-3 flex-wrap">
    <div>
      <it-notification bind:this={confirmNotification} dismissable icon="it-warning-circle" status="warning"
                       on:it-notification-close={onNotificationClose}>
        <span slot="title">Chiusura con conferma</span>
        <p>Clicca il pulsante di chiusura: verrà chiesta conferma prima di chiudere.</p>
      </it-notification>
      <button class="btn btn-warning mt-3" on:click={() => confirmNotification.show()}>Mostra notifica</button>
    </div>
  </div>
</section>

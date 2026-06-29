import React, { useRef, useEffect } from 'react';

const Notification = () => {
  const notificationRef = useRef(null);
  const notificationDismissableRef = useRef(null);
  const notificationSuccessRef = useRef(null);
  const notificationErrorRef = useRef(null);
  const notificationWarningRef = useRef(null);
  const notificationInfoRef = useRef(null);
  const notificationConfirmRef = useRef(null);

  useEffect(() => {
    const el = notificationConfirmRef.current;
    if (!el) return;
    const onClose = (e) => {
      e.preventDefault();
      if (window.confirm('Vuoi davvero chiudere la notifica?')) el.hide();
    };
    el.addEventListener('it-notification-close', onClose);
    return () => el.removeEventListener('it-notification-close', onClose);
  }, []);

  const showNotification = (ref) => {
    if (ref.current) {
      ref.current.show();
    }
  };

  const hideNotification = (ref) => {
    if (ref.current) {
      ref.current.hide();
    }
  };

  const showNotificationWithTimeout = (ref, timeout) => {
    if (ref.current) {
      ref.current.show(timeout);
    }
  };

  return (
    <>
      <h1>Notification</h1>
      <p>Messaggio di testo a comparsa per informare l'utente di eventi, aggiornamenti o azioni che richiedono la sua attenzione.</p>

      {/* Sezione: Con messaggio */}
      <section className="my-5">
        <h2>Con messaggio</h2>
        <div className="d-flex gap-3 flex-wrap">
          <div>
            <it-notification ref={notificationRef} icon="it-info-circle" status="info">
              <span slot="title">Titolo della notifica</span>
              <p>Testo descrittivo della notifica che fornisce informazioni all'utente.</p>
            </it-notification>
            <button
              className="btn btn-primary mt-3"
              onClick={() => showNotification(notificationRef)}
            >
              Mostra notifica
            </button>
          </div>
        </div>
      </section>

      {/* Sezione: Eliminabili */}
      <section className="my-5">
        <h2>Eliminabili (dismissable)</h2>
        <p>Le notifiche eliminabili non vengono nascoste dopo un intervallo di tempo ma vengono chiuse solo quando si clicca sul pulsante di chiusura.</p>
        <div className="d-flex gap-3 flex-wrap">
          <div>
            <it-notification ref={notificationDismissableRef} icon="it-check-circle" status="success" dismissable>
              <span slot="title">Operazione completata</span>
              <p>La tua azione è stata eseguita con successo.</p>
            </it-notification>
            <button
              className="btn btn-primary mt-3"
              onClick={() => showNotification(notificationDismissableRef)}
            >
              Mostra notifica dismissable
            </button>
          </div>
        </div>
      </section>

      {/* Sezione: Stati */}
      <section className="my-5">
        <h2>Stati (success, error, warning, info)</h2>
        <div className="d-flex gap-3 flex-wrap">
          <div>
            <it-notification ref={notificationSuccessRef} icon="it-check-circle" status="success">
              <span slot="title">Successo</span>
              <p>L'operazione è stata completata con successo.</p>
            </it-notification>
            <button
              className="btn btn-success mt-3"
              onClick={() => showNotification(notificationSuccessRef)}
            >
              Mostra notifica di successo
            </button>
          </div>

          <div>
            <it-notification ref={notificationErrorRef} icon="it-error" status="error">
              <span slot="title">Errore</span>
              <p>Si è verificato un errore durante l'operazione.</p>
            </it-notification>
            <button
              className="btn btn-danger mt-3"
              onClick={() => showNotification(notificationErrorRef)}
            >
              Mostra notifica di errore
            </button>
          </div>

          <div>
            <it-notification ref={notificationWarningRef} icon="it-warning-circle" status="warning">
              <span slot="title">Attenzione</span>
              <p>Si prega di prestare attenzione a questo avviso importante.</p>
            </it-notification>
            <button
              className="btn btn-warning mt-3"
              onClick={() => showNotification(notificationWarningRef)}
            >
              Mostra notifica di avviso
            </button>
          </div>

          <div>
            <it-notification ref={notificationInfoRef} icon="it-info-circle" status="info">
              <span slot="title">Informazione</span>
              <p>Ecco un'informazione utile per te.</p>
            </it-notification>
            <button
              className="btn btn-info mt-3"
              onClick={() => showNotification(notificationInfoRef)}
            >
              Mostra notifica di informazione
            </button>
          </div>
        </div>
      </section>

      {/* Sezione: Posizione */}
      <section className="my-5">
        <h2>Posizione fissa</h2>
        <p>La posizione predefinita delle notifiche è nella parte destra inferiore della finestra. Utilizzando l'attributo fix, puoi posizionare la notifica a filo di uno dei margini.</p>

        <div className="d-flex gap-3 flex-wrap">
          <div>
            <it-notification icon="it-info-circle" status="info" fix="top">
              <span slot="title">Notifica in alto</span>
              <p>Questa notifica è posizionata in alto.</p>
            </it-notification>
            <button
              className="btn btn-outline-primary"
              onClick={(e) => e.currentTarget.previousElementSibling.show()}
            >
              Mostra in alto
            </button>
          </div>

          <div>
            <it-notification icon="it-info-circle" status="info" fix="bottom">
              <span slot="title">Notifica in basso</span>
              <p>Questa notifica è posizionata in basso.</p>
            </it-notification>
            <button
              className="btn btn-outline-primary"
              onClick={(e) => e.currentTarget.previousElementSibling.show()}
            >
              Mostra in basso
            </button>
          </div>

          <div>
            <it-notification icon="it-info-circle" status="info" fix="left">
              <span slot="title">Notifica a sinistra</span>
              <p>Questa notifica è posizionata a sinistra.</p>
            </it-notification>
            <button
              className="btn btn-outline-primary"
              onClick={(e) => e.currentTarget.previousElementSibling.show()}
            >
              Mostra a sinistra
            </button>
          </div>

          <div>
            <it-notification icon="it-info-circle" status="info" fix="right">
              <span slot="title">Notifica a destra</span>
              <p>Questa notifica è posizionata a destra.</p>
            </it-notification>
            <button
              className="btn btn-outline-primary"
              onClick={(e) => e.currentTarget.previousElementSibling.show()}
            >
              Mostra a destra
            </button>
          </div>
        </div>
      </section>

      {/* Sezione: Attivazione automatica */}
      <section className="my-5">
        <h2>Notifiche a scomparsa automatica</h2>
        <p>Questo è il comportamento di default quando non imposti l'attributo dismissable. La notifica si nasconde automaticamente dopo il timeout specificato (default: 3000ms).</p>

        <div className="d-flex gap-3 flex-wrap">
          <div>
            <it-notification icon="it-check-circle" status="success">
              <span slot="title">Notifica con timeout di 2 secondi</span>
              <p>Questa notifica scomparirà dopo 2 secondi.</p>
            </it-notification>
            <button
              className="btn btn-primary mt-3"
              onClick={(e) => showNotificationWithTimeout(e.currentTarget.previousElementSibling, 2000)}
            >
              Mostra (2s)
            </button>
          </div>

          <div>
            <it-notification icon="it-check-circle" status="success">
              <span slot="title">Notifica con timeout di 5 secondi</span>
              <p>Questa notifica scomparirà dopo 5 secondi.</p>
            </it-notification>
            <button
              className="btn btn-primary mt-3"
              onClick={(e) => showNotificationWithTimeout(e.currentTarget.previousElementSibling, 5000)}
            >
              Mostra (5s)
            </button>
          </div>
        </div>
      </section>

      {/* Sezione: Controllo manuale */}
      <section className="my-5">
        <h2>Notifiche a scomparsa manuale (con pulsante di chiusura)</h2>
        <p>Quando imposti l'attributo dismissable, la notifica non si nasconde automaticamente. Puoi chiuderla usando il pulsante di chiusura interno oppure programmatichemante con il metodo hide().</p>

        <div className="d-flex gap-3 flex-wrap">
          <div>
            <it-notification dismissable icon="it-warning-circle" status="warning">
              <span slot="title">Notifica con chiusura manuale</span>
              <p>Clicca il pulsante per chiudere la notifica.</p>
            </it-notification>
            <button
              className="btn btn-warning mt-3"
              onClick={(e) => showNotification(e.currentTarget.previousElementSibling)}
            >
              Mostra notifica
            </button>
          </div>
        </div>
      </section>

      {/* Sezione: Heading level */}
      <section className="my-5">
        <h2>Heading level personalizzato</h2>
        <p>Utilizza l'attributo heading-level per impostare il tag HTML corretto (h2, h3, h4, h5, h6) a seconda del contesto della pagina.</p>

        <div className="d-flex gap-3 flex-wrap">
          <div>
            <it-notification icon="it-info-circle" status="info" heading-level="h3">
              <span slot="title">Notifica con h3</span>
              <p>Questa notifica usa h3 come tag di intestazione.</p>
            </it-notification>
            <button
              className="btn btn-outline-primary mt-3"
              onClick={(e) => e.currentTarget.previousElementSibling.show()}
            >
              Mostra con h3
            </button>
          </div>

          <div>
            <it-notification icon="it-info-circle" status="info" heading-level="h4">
              <span slot="title">Notifica con h4</span>
              <p>Questa notifica usa h4 come tag di intestazione.</p>
            </it-notification>
            <button
              className="btn btn-outline-primary mt-3"
              onClick={(e) => e.currentTarget.previousElementSibling.show()}
            >
              Mostra con h4
            </button>
          </div>
        </div>
      </section>

      {/* Sezione: Senza animazione */}
      <section className="my-5">
        <h2>Senza animazione di fade</h2>
        <p>Per rimuovere l'animazione di dissolvenza, imposta l'attributo fade a false.</p>

        <div className="d-flex gap-3 flex-wrap">
          <div>
            <it-notification fade={false} icon="it-info-circle" status="info">
              <span slot="title">Notifica senza fade</span>
              <p>Questa notifica appare e scompare senza animazione.</p>
            </it-notification>
            <button
              className="btn btn-outline-primary mt-3"
              onClick={(e) => e.currentTarget.previousElementSibling.show()}
            >
              Mostra senza animazione
            </button>
          </div>
        </div>
      </section>

      {/* Sezione: Combinazioni */}
      <section className="my-5">
        <h2>Esempi combinati</h2>
        <p>Combinazioni di attributi per creare notifiche complesse e personalizzate.</p>

        <div className="d-flex gap-3 flex-wrap">
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
            <button
              className="btn btn-success mt-3"
              onClick={(e) => e.currentTarget.previousElementSibling.show()}
            >
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
            <button
              className="btn btn-danger mt-3"
              onClick={(e) => e.currentTarget.previousElementSibling.show()}
            >
              Mostra notifica di errore
            </button>
          </div>
        </div>
      </section>

      {/* Sezione: Chiusura con conferma */}
      <section className="my-5">
        <h2>Chiusura con conferma</h2>
        <div className="d-flex gap-3 flex-wrap">
          <div>
            <it-notification ref={notificationConfirmRef} dismissable icon="it-warning-circle" status="warning">
              <span slot="title">Chiusura con conferma</span>
              <p>Clicca il pulsante di chiusura: verrà chiesta conferma prima di chiudere.</p>
            </it-notification>
            <button
              className="btn btn-warning mt-3"
              onClick={() => showNotification(notificationConfirmRef)}
            >
              Mostra notifica
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Notification;

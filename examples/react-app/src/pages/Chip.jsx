import { useEffect, useRef } from 'react';

const Chip = () => {
  const chipRef = useRef(null);

  useEffect(() => {
    const el = chipRef.current;
    if (!el) return;
    const onClose = (e) => {
      e.preventDefault();
      if (window.confirm('Rimuovere questa chip?')) {
        el.close();
      }
    };
    el.addEventListener('it-chip-close', onClose);
    return () => el.removeEventListener('it-chip-close', onClose);
  }, []);

  return (
    <>
      <h1>Chip</h1>

      <it-chip label="Etichetta" size="sm" variant="primary"></it-chip>

      <section>
        <h2>Varianti di colore</h2>
        <div className="flex p-0">
          <it-chip label="Etichetta" size="sm" variant="primary"></it-chip>
          <it-chip label="Etichetta" size="sm" variant="secondary"></it-chip>
          <it-chip label="Etichetta" size="sm" variant="success"></it-chip>
          <it-chip label="Etichetta" size="sm" variant="danger"></it-chip>
          <it-chip label="Etichetta" size="sm" variant="warning"></it-chip>
        </div>
      </section>

      <section>
        <h2>Varianti di colore link</h2>
        <div className="flex p-0">
          <it-chip label="Etichetta" size="sm" variant="primary" href="#"></it-chip>
          <it-chip label="Etichetta" size="sm" variant="secondary" href="#"></it-chip>
          <it-chip label="Etichetta" size="sm" variant="success" href="#"></it-chip>
          <it-chip label="Etichetta" size="sm" variant="danger" href="#"></it-chip>
          <it-chip label="Etichetta" size="sm" variant="warning" href="#"></it-chip>
        </div>
      </section>

      <section>
        <h2>Varianti di dimensione</h2>
        <div className="flex p-0">
          <it-chip label="Etichetta" size="sm" variant=""></it-chip>
          <it-chip label="Etichetta" size="lg" variant=""></it-chip>
          <it-chip label="Etichetta" size="sm" variant="" href="#"></it-chip>
          <it-chip label="Etichetta" size="lg" variant="" href="#"></it-chip>
        </div>
      </section>

      <section>
        <h2>Chip con avatar</h2>
        <div className="flex p-0">
          <it-chip
            label="Etichetta"
            size="sm"
            variant="primary"
            avatar="https://randomuser.me/api/portraits/men/46.jpg"
            avatar-alt="Avatar alt"
            dismissable
          >
            <it-button
              slot="dismiss-button"
              icon
              it-aria-label="Elimina etichetta"
              it-aria-description="Puoi premere per eliminare la chip."
            >
              <it-icon name="it-close" size="sm"></it-icon>
            </it-button>
          </it-chip>
          <it-chip
            label="Etichetta"
            size="lg"
            variant="primary"
            avatar="https://randomuser.me/api/portraits/men/46.jpg"
            avatar-alt="Avatar alt"
            dismissable
          >
            <it-button
              slot="dismiss-button"
              icon
              it-aria-label="Elimina etichetta"
              it-aria-description="Puoi premere per eliminare la chip."
            >
              <it-icon name="it-close" size="sm"></it-icon>
            </it-button>
          </it-chip>
        </div>
      </section>

      <section>
        <h2>Chip con chiusura</h2>
        <div className="flex p-0">
          <it-chip label="Rimuovibile" size="sm" variant="primary" dismissable>
            <it-button
              slot="dismiss-button"
              icon
              it-aria-label="Elimina chip"
              it-aria-description="Puoi premere per eliminare la chip."
            >
              <it-icon name="it-close" size="sm"></it-icon>
            </it-button>
          </it-chip>

          <it-chip label="Altra rimuovibile" size="sm" variant="danger" dismissable>
            <it-button
              slot="dismiss-button"
              icon
              it-aria-label="Elimina chip"
              it-aria-description="Puoi premere per eliminare la chip."
            >
              <it-icon name="it-close" size="sm"></it-icon>
            </it-button>
          </it-chip>
        </div>
      </section>

      <section>
        <h2>Chip disabilitata</h2>
        <div className="flex p-0">
          <it-chip label="Etichetta" size="sm" variant="primary" dismissable is-disabled>
            <it-button
              slot="dismiss-button"
              icon
              it-aria-label="Elimina etichetta"
              disabled
              it-aria-description="Puoi premere per eliminare la chip."
            >
              <it-icon name="it-close" size="sm"></it-icon>
            </it-button>
          </it-chip>
        </div>
      </section>

      <section>
        <h2>Chip con icona</h2>
        <div className="flex p-0">
          <it-chip label="Download" size="sm" variant="primary" dismissable>
            <it-icon slot="icon" name="it-download" size="sm"></it-icon>
            <it-button
              slot="dismiss-button"
              icon
              it-aria-label="Rimuovi download"
              it-aria-description="Puoi premere per rimuovere questa azione."
            >
              <it-icon name="it-close" size="sm"></it-icon>
            </it-button>
          </it-chip>
          <it-chip label="Carica file" size="lg" variant="success" dismissable>
            <it-icon slot="icon" name="it-upload" size="sm"></it-icon>
            <it-button
              slot="dismiss-button"
              icon
              it-aria-label="Rimuovi carica file"
              it-aria-description="Puoi premere per rimuovere questa azione."
            >
              <it-icon name="it-close" size="sm"></it-icon>
            </it-button>
          </it-chip>
          <it-chip label="Preferiti" size="sm" variant="warning">
            <it-icon slot="icon" name="it-star-full" size="sm"></it-icon>
          </it-chip>
        </div>
      </section>

      <section>
        <h2>Logica di rimozione personalizzata</h2>
        <p>
          L'evento `it-chip-close` è cancelable. Chiamando `event.preventDefault()` puoi intercettare la rimozione ed
          eseguire una logica personalizzata (ad esempio una conferma), richiamando poi il metodo pubblico `close()`
          quando opportuno.
        </p>
        <div className="flex p-0">
          <it-chip ref={chipRef} label="Etichetta" size="sm" variant="primary" dismissable>
            <it-button
              slot="dismiss-button"
              icon
              it-aria-label="Elimina etichetta"
              it-aria-description="La rimozione richiede conferma."
            >
              <it-icon name="it-close" size="sm"></it-icon>
            </it-button>
          </it-chip>
        </div>
      </section>
    </>
  );
};

export default Chip;

import React from 'react';

const Modal = () => {
  const closeModal = (e) => {
    const modal = e.currentTarget.closest('it-modal');
    if (modal) {
      modal.hide();
    }
  };

  return (
    <div className="container my-5">
      <h1>Modal</h1>
      <p>Componente Modal per finestre di dialogo modali.</p>

      <section className="my-5">
        <h2>Con pulsante di chiusura</h2>
        <div className="d-flex gap-4">
          <it-modal close-label="Chiudi finestra modale" modal-description="Descrizione della modale">
            <it-button variant="primary" slot="trigger">
              Lancia la demo della modale
            </it-button>
            <span slot="header">Titolo modale</span>
            <p slot="content">Testo che descrive lo scopo della modale e quali sono le azioni richieste all'utente.</p>
            <it-button onClick={closeModal} slot="footer" variant="outline-primary">
              Annulla
            </it-button>
            <it-button onClick={closeModal} slot="footer" variant="primary">
              Conferma
            </it-button>
          </it-modal>
          <it-modal hide-close-button>
            <it-button variant="primary" slot="trigger">
              Lancia la demo della modale senza close button
            </it-button>
            <span slot="header">Titolo modale</span>
            <p slot="content">Testo che descrive lo scopo della modale e quali sono le azioni richieste all'utente.</p>
            <it-button onClick={closeModal} slot="footer" variant="outline-primary">
              Annulla
            </it-button>
            <it-button onClick={closeModal} slot="footer" variant="primary">
              Conferma
            </it-button>
          </it-modal>
        </div>
      </section>

      <section className="my-5">
        <h2>Con icona</h2>
        <it-modal variant="alert" close-label="Chiudi finestra modale">
          <it-button variant="primary" slot="trigger">
            Lancia la demo della modale
          </it-button>
          <it-icon slot="header-icon" name="it-warning-circle" size="lg" color="warning"></it-icon>
          <span slot="header">Questo è un messaggio di notifica</span>
          <p slot="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
          </p>
          <it-button onClick={closeModal} slot="footer" variant="primary">
            Conferma
          </it-button>
        </it-modal>
      </section>

      <section className="my-5">
        <h2>Modale con footer personalizzato</h2>
        <it-modal close-label="Chiudi finestra modale">
          <it-button variant="primary" slot="trigger">
            Lancia la demo della modale
          </it-button>
          <span slot="header">Con footer personalizzato</span>
          <p slot="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
          </p>
          <div
            slot="footer"
            className="d-flex justify-content-between gap-2 align-items-center"
            style={{ width: '100%' }}
          >
            <a href="#">Link di supporto</a>
            <div className="d-flex justify-content-end gap-2">
              <it-button variant="outline-primary">Annulla</it-button>
              <it-button onClick={closeModal} slot="footer" variant="primary">
                Conferma
              </it-button>
            </div>
          </div>
        </it-modal>
      </section>

      <section className="my-5">
        <h2>Modale con elementi form</h2>
        <it-modal close-label="Chiudi finestra modale">
          <it-button variant="primary" slot="trigger">
            Lancia la demo della modale
          </it-button>
          <span slot="header">Seleziona un'opzione dal form</span>
          <div slot="content">
            <it-radio-group name="gruppo1">
              <span slot="label">Esempio interattivo</span>
              <it-radio id="radio1" value="opzione1">
                <span slot="label">Radio di esempio 1</span>
              </it-radio>
              <it-radio id="radio2" value="opzione2">
                <span slot="label">Radio di esempio 2</span>
              </it-radio>
              <it-radio id="radio3" value="opzione3">
                <span slot="label">Radio di esempio 3</span>
              </it-radio>
            </it-radio-group>
          </div>
          <it-button onClick={closeModal} slot="footer" variant="primary">
            Conferma
          </it-button>
        </it-modal>
      </section>

      <section className="my-5">
        <h2>Modale con Link List</h2>
        <it-modal variant="link-list" close-label="Chiudi finestra modale">
          <it-button variant="primary" slot="trigger">
            Lancia la demo della modale
          </it-button>
          <span slot="header">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          </span>
          <div className="link-list-wrapper" slot="content">
            <ul className="link-list">
              <li>
                <a className="list-item icon-left" href="#">
                  <span>Link lista 1</span>
                </a>
              </li>
              <li>
                <a className="list-item icon-left" href="#">
                  <span>Link lista 2</span>
                </a>
              </li>
              <li>
                <a className="list-item icon-left" href="#">
                  <span>Link lista 3</span>
                </a>
              </li>
            </ul>
          </div>
          <it-button onClick={closeModal} slot="footer" variant="primary">
            Conferma
          </it-button>
        </it-modal>
      </section>

      <section className="my-5">
        <h2>Popconfirm</h2>
        <div className="d-flex gap-3">
          <it-modal variant="popconfirm">
            <it-button variant="primary" slot="trigger">
              Popconfirm basico
            </it-button>
            <p slot="content">Breve messaggio di conferma inserito nella modale</p>
            <it-button onClick={closeModal} slot="footer" variant="outline-primary">
              Azione 1
            </it-button>
            <it-button onClick={closeModal} slot="footer" variant="primary">
              Azione 2
            </it-button>
          </it-modal>

          <it-modal variant="popconfirm">
            <it-button variant="primary" slot="trigger">
              Popconfirm con header
            </it-button>
            <span slot="header">Titolo modale</span>
            <p slot="content">Breve messaggio di conferma inserito nella modale</p>
            <it-button onClick={closeModal} slot="footer" variant="outline-primary">
              Azione 1
            </it-button>
            <it-button onClick={closeModal} slot="footer" variant="primary">
              Azione 2
            </it-button>
          </it-modal>
        </div>
      </section>

      <section className="my-5">
        <h2>Scroll di contenuti lunghi</h2>
        <it-modal footer-shadow close-label="Chiudi finestra modale">
          <it-button variant="primary" slot="trigger">
            Lancia la demo della modale
          </it-button>
          <span slot="header">Scroll di contenuti lunghi</span>
          <div slot="content">
            {Array(20)
              .fill(0)
              .map((_, i) => (
                <p key={i}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </p>
              ))}
          </div>
          <it-button onClick={closeModal} slot="footer" variant="outline-primary">
            Annulla
          </it-button>
          <it-button onClick={closeModal} slot="footer" variant="primary">
            Conferma
          </it-button>
        </it-modal>
      </section>

      <section className="my-5">
        <h2>Scroll interno alla modale</h2>
        <it-modal scrollable footer-shadow close-label="Chiudi finestra modale">
          <it-button variant="primary" slot="trigger">
            Lancia la demo della modale
          </it-button>
          <span slot="header">Modale con scroll interno</span>
          <div slot="content">
            {Array(20)
              .fill(0)
              .map((_, i) => (
                <p key={i}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </p>
              ))}
          </div>
          <it-button onClick={closeModal} slot="footer" variant="outline-primary">
            Annulla
          </it-button>
          <it-button onClick={closeModal} slot="footer" variant="primary">
            Conferma
          </it-button>
        </it-modal>
      </section>

      <section className="my-5">
        <h2>Centratura verticale</h2>
        <it-modal position="center" close-label="Chiudi finestra modale">
          <it-button variant="primary" slot="trigger">
            Lancia la demo della modale
          </it-button>
          <span slot="header">Centratura verticale</span>
          <div slot="content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </div>
          <it-button onClick={closeModal} slot="footer" variant="outline-primary">
            Annulla
          </it-button>
          <it-button onClick={closeModal} slot="footer" variant="primary">
            Conferma
          </it-button>
        </it-modal>
      </section>

      <section className="my-5">
        <h2>Allineamento a sinistra</h2>
        <it-modal position="left" close-label="Chiudi finestra modale" scrollable>
          <it-button variant="primary" slot="trigger">
            Lancia la demo della modale
          </it-button>
          <span slot="header">Modale allineata a sinistra</span>
          <p slot="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
          <it-button onClick={closeModal} slot="footer" variant="outline-primary">
            Annulla
          </it-button>
          <it-button onClick={closeModal} slot="footer" variant="primary">
            Conferma
          </it-button>
        </it-modal>
      </section>

      <section className="my-5">
        <h2>Allineamento a destra</h2>
        <it-modal position="right" close-label="Chiudi finestra modale" scrollable>
          <it-button variant="primary" slot="trigger">
            Lancia la demo della modale
          </it-button>
          <span slot="header">Modale allineata a destra</span>
          <p slot="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
          <it-button onClick={closeModal} slot="footer" variant="outline-primary">
            Annulla
          </it-button>
          <it-button onClick={closeModal} slot="footer" variant="primary">
            Conferma
          </it-button>
        </it-modal>
      </section>

      <section className="my-5">
        <h2>Dimensioni opzionali</h2>
        <div className="d-flex gap-3 flex-wrap">
          <it-modal size="sm" close-label="Chiudi finestra modale">
            <it-button slot="trigger" variant="primary">
              Modale piccola
            </it-button>
            <span slot="header">Modale piccola</span>
            <p slot="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis felis tortor, ultrices congue orci
              ultricies sed. In hac habitasse platea dictumst.
            </p>
            <it-button onClick={closeModal} slot="footer" variant="primary">
              Chiudi
            </it-button>
          </it-modal>

          <it-modal size="lg" close-label="Chiudi finestra modale">
            <it-button slot="trigger" variant="primary">
              Modale grande
            </it-button>
            <span slot="header">Modale grande</span>
            <p slot="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis felis tortor, ultrices congue orci
              ultricies sed. In hac habitasse platea dictumst.
            </p>
            <it-button onClick={closeModal} slot="footer" variant="primary">
              Chiudi
            </it-button>
          </it-modal>

          <it-modal size="xl" close-label="Chiudi finestra modale">
            <it-button slot="trigger" variant="primary">
              Modale molto grande
            </it-button>
            <span slot="header">Modale molto grande</span>
            <p slot="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis felis tortor, ultrices congue orci
              ultricies sed. In hac habitasse platea dictumst.
            </p>
            <it-button onClick={closeModal} slot="footer" variant="primary">
              Chiudi
            </it-button>
          </it-modal>
        </div>
      </section>

      <section className="my-5">
        <h2>Backdrop statico</h2>
        <it-modal static-backdrop close-label="Chiudi finestra modale">
          <it-button slot="trigger" variant="primary">
            Apri modale con backdrop statico
          </it-button>
          <span slot="header">Modale con backdrop statico</span>
          <p slot="content">Questa modale non si chiude cliccando sullo sfondo.</p>
          <it-button onClick={closeModal} slot="footer" variant="outline-primary">
            Annulla
          </it-button>
          <it-button onClick={closeModal} slot="footer" variant="primary">
            Conferma
          </it-button>
        </it-modal>
      </section>

      <section className="my-5">
        <h2>Rimuovere l'animazione</h2>
        <it-modal disable-animation close-label="Chiudi finestra modale">
          <it-button slot="trigger" variant="primary">
            Apri modale senza animazione
          </it-button>
          <span slot="header">Modale senza animazione</span>
          <p slot="content">Questa modale appare immediatamente senza animazione di dissolvenza.</p>
          <it-button onClick={closeModal} slot="footer" variant="outline-primary">
            Annulla
          </it-button>
          <it-button onClick={closeModal} slot="footer" variant="primary">
            Conferma
          </it-button>
        </it-modal>
      </section>
    </div>
  );
};

export default Modal;

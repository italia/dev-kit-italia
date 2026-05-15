import React from 'react';

const BackgroundCards = () => (
  <div className="row">
    <div className="col-12 col-md-6">
      <it-card>
        <figure slot="image" className="figure img-full">
          <img src="https://picsum.photos/seed/city/800/600" alt="Breve descrizione immagine" />
        </figure>
        <a slot="title" href="#">
          Titolo del contenuto
        </a>
        <span slot="text">
          Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe,
          senza troncamento.
        </span>
        <time slot="footer" className="it-card-date" dateTime="2026-04-22">
          22 aprile 2026
        </time>
      </it-card>
    </div>
    <div className="col-12 col-md-6">
      <it-card>
        <figure slot="image" className="figure img-full">
          <img src="https://picsum.photos/seed/city/800/600" alt="Breve descrizione immagine" />
        </figure>
        <a slot="title" href="#">
          Titolo del contenuto
        </a>
        <span slot="text">
          Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe,
          senza troncamento.
        </span>
        <time slot="footer" className="it-card-date" dateTime="2026-04-22">
          22 aprile 2026
        </time>
      </it-card>
    </div>
  </div>
);

const Dimmer = () => {
  const toggle = (e) => {
    const btn = e.currentTarget;
    const wrapper = btn.closest('[data-demo-wrapper]');
    const dimmer = wrapper?.querySelector('it-dimmer');
    dimmer?.toggle();
  };

  const show = (e) => {
    const btn = e.currentTarget;
    const wrapper = btn.closest('[data-demo-wrapper]');
    const dimmer = wrapper?.querySelector('it-dimmer');
    dimmer?.show();
  };

  const hide = (e) => {
    const btn = e.currentTarget;
    const wrapper = btn.closest('[data-demo-wrapper]');
    const dimmer = wrapper?.querySelector('it-dimmer');
    dimmer?.hide();
  };

  return (
    <>
      <h1>Dimmer</h1>
      <p>
        Componente per focalizzare l'attenzione su un contenuto sovrapposto, oscurando il contenuto principale
        sottostante.
      </p>

      {/* Attivo di default */}
      <section className="my-5">
        <h2>Attivo di default</h2>
        <div data-demo-wrapper>
          <div className="mb-3">
            <it-button variant="primary" onClick={toggle}>
              Toggle dimmer
            </it-button>
          </div>
          <it-dimmer icon-name="it-info-circle" active>
            <p slot="content">Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras.</p>
            <BackgroundCards />
          </it-dimmer>
        </div>
      </section>

      {/* Colore primario */}
      <section className="my-5">
        <h2>Colore primario</h2>
        <div data-demo-wrapper>
          <div className="mb-3">
            <it-button variant="primary" onClick={toggle}>
              Toggle dimmer
            </it-button>
          </div>
          <it-dimmer active variant="primary" icon-name="it-pa">
            <p slot="content">
              Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo
              donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus. Nulla vulputate luctus sem, eu maximus lacus
              faucibus eget.
            </p>
            <BackgroundCards />
          </it-dimmer>
        </div>
      </section>

      {/* Colore scuro */}
      <section className="my-5">
        <h2>Colore scuro</h2>
        <div data-demo-wrapper>
          <div className="mb-3">
            <it-button variant="primary" onClick={toggle}>
              Toggle dimmer
            </it-button>
          </div>
          <it-dimmer active variant="dark" icon-name="it-pa">
            <p slot="content">
              Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo
              donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus. Nulla vulputate luctus sem, eu maximus lacus
              faucibus eget.
            </p>
            <BackgroundCards />
          </it-dimmer>
        </div>
      </section>

      {/* Con azioni */}
      <section className="my-5">
        <h2>Con azioni</h2>
        <div data-demo-wrapper>
          <div className="mb-3">
            <it-button variant="primary" onClick={toggle}>
              Toggle dimmer
            </it-button>
          </div>
          <it-dimmer active variant="dark" icon-name="it-info-circle">
            <div slot="content">
              <h4>Titolo Dimmer</h4>
              <p>Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras.</p>
              <div className="dimmer-buttons bg-dark">
                <it-button variant="primary">Azione primaria</it-button>
                <it-button variant="primary" outline="">
                  Azione secondaria
                </it-button>
              </div>
            </div>
            <BackgroundCards />
          </it-dimmer>
        </div>
      </section>

      {/* Con azioni - colore primario */}
      <section className="my-5">
        <h2>Con azioni - colore primario</h2>
        <div data-demo-wrapper>
          <div className="mb-3">
            <it-button variant="primary" onClick={toggle}>
              Toggle dimmer
            </it-button>
          </div>
          <it-dimmer active variant="primary" icon-name="it-pa">
            <div slot="content">
              <h4>Titolo Dimmer</h4>
              <div className="dimmer-buttons bg-dark">
                <it-button variant="primary">Azione primaria</it-button>
                <it-button variant="primary" outline="">
                  Azione secondaria
                </it-button>
              </div>
            </div>
            <BackgroundCards />
          </it-dimmer>
        </div>
      </section>

      {/* Con azioni - azione singola */}
      <section className="my-5">
        <h2>Con azioni - azione singola</h2>
        <div data-demo-wrapper>
          <div className="mb-3">
            <it-button variant="primary" onClick={toggle}>
              Toggle dimmer
            </it-button>
          </div>
          <it-dimmer active variant="primary" icon-name="it-pa">
            <div slot="content">
              <h4>Titolo Dimmer</h4>
              <div className="dimmer-buttons bg-dark">
                <it-button variant="primary">Azione primaria</it-button>
              </div>
            </div>
            <BackgroundCards />
          </it-dimmer>
        </div>
      </section>

      {/* Attivazione via JS */}
      <section className="my-5">
        <h2>Attivazione via JS</h2>
        <div data-demo-wrapper>
          <div className="mb-3 d-flex gap-2">
            <it-button variant="primary" onClick={show}>
              show()
            </it-button>
            <it-button variant="primary" outline="" onClick={hide}>
              hide()
            </it-button>
            <it-button variant="secondary" outline="" onClick={toggle}>
              toggle()
            </it-button>
          </div>
          <it-dimmer id="js-dimmer" icon-name="it-info-circle">
            <p slot="content">
              Controllato via <code>show()</code>, <code>hide()</code> e <code>toggle()</code>.
            </p>
            <BackgroundCards />
          </it-dimmer>
        </div>
      </section>
    </>
  );
};

export default Dimmer;

import React from 'react';

const Card = () => {
  return (
    <>
      <h1>Card</h1>

      <section>
        <h2>Anteprima</h2>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
            <it-card>
              <a slot="title" href="#">
                Titolo del contenuto
              </a>
              <figure slot="image" className="figure img-full">
                <img
                  src="https://placeholderimage.eu/api/city/800/600"
                  alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
                />
              </figure>
              <span slot="text">
                Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
                righe, senza troncamento.
              </span>
              <time slot="footer" className="it-card-date" dateTime="2026-04-22">
                22 aprile 2026
              </time>
            </it-card>
          </div>
        </div>
      </section>

      <section>
        <h2>Card per contenuti editoriali</h2>

        <section>
          <h3>Card editoriali standard</h3>
          <div style={{ display: 'grid', gap: '24px', gridTemplateColumns: '1fr 1fr' }}>
            <it-card full-height>
              <a slot="title" href="#">
                Titolo del contenuto
              </a>
              <figure slot="image" className="figure img-full">
                <img
                  src="https://placeholderimage.eu/api/city/800/600"
                  alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
                />
              </figure>
              <span slot="text">
                Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
                righe, senza troncamento.
              </span>
              <div slot="footer" className="it-card-taxonomy">
                <a href="#" className="it-card-category it-card-link">
                  <span className="visually-hidden">Categoria correlata: </span>
                  Categoria
                </a>
              </div>
              <time slot="footer" className="it-card-date" dateTime="2026-04-22">
                22 aprile 2026
              </time>
            </it-card>

            <it-card full-height>
              <a slot="title" href="#">
                Titolo del contenuto
              </a>
              <figure slot="image" className="figure img-full">
                <img
                  src="https://placeholderimage.eu/api/nature/800/600"
                  alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
                />
              </figure>
              <span slot="text">
                Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
                righe, senza troncamento.
              </span>
              <div slot="footer" className="it-card-taxonomy">
                <ul className="it-card-chips" aria-label="Argomenti correlati: ">
                  <li className="list-item">
                    <it-chip label="Argomento 1" size="sm" href="#"></it-chip>
                  </li>
                  <li className="list-item">
                    <it-chip label="Argomento 2" size="sm" href="#"></it-chip>
                  </li>
                </ul>
              </div>
              <time slot="footer" className="it-card-date" dateTime="2026-04-22">
                22 aprile 2026
              </time>
            </it-card>

            <it-card>
              <a slot="title" href="#">
                Titolo del contenuto
              </a>
              <span slot="text">
                Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
                righe, senza troncamento.
              </span>
              <time slot="footer" className="it-card-date" dateTime="2026-04-22">
                22 aprile 2026
              </time>
            </it-card>
          </div>
        </section>

        <section>
          <h3>Card editoriali featured</h3>
          <div style={{ display: 'grid', gap: '24px', gridTemplateColumns: '1fr 1fr' }}>
            <it-card full-height>
              <a slot="title" href="#">
                Titolo del contenuto featured
                <span className="visually-hidden"> (link esterno su piattaforma XYZ)</span>
                <div className="it-card-title-icon-wrapper">
                  <it-icon color="primary" name="it-file"></it-icon>
                </div>
              </a>
              <figure slot="image" className="figure img-full">
                <img
                  src="https://placeholderimage.eu/api/city/800/600"
                  alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
                />
              </figure>
              <span slot="subtitle">Sottotitolo del contenuto</span>
              <span slot="text">
                Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
                righe, senza troncamento.
              </span>
              <div slot="footer" className="it-card-taxonomy">
                <a href="#" className="it-card-category it-card-link">
                  <span className="visually-hidden">Categoria correlata: </span>
                  Categoria
                </a>
              </div>
              <time slot="footer" className="it-card-date" dateTime="2026-04-22">
                22 aprile 2026
              </time>
            </it-card>

            <it-card full-height>
              <a slot="title" href="#">
                Titolo del contenuto featured
                <span className="visually-hidden"> (link esterno su Designers Italia)</span>
                <div className="it-card-title-icon-wrapper">
                  <it-icon color="primary" name="it-designers-italia"></it-icon>
                </div>
              </a>
              <figure slot="image" className="figure img-full">
                <img
                  src="https://placeholderimage.eu/api/nature/800/600"
                  alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
                />
              </figure>
              <span slot="subtitle">Sottotitolo del contenuto</span>
              <span slot="signature">di Maria Verde</span>
              <span slot="text">
                Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
                righe, senza troncamento.
              </span>
              <div slot="footer" className="it-card-taxonomy">
                <ul className="it-card-chips" aria-label="Argomenti correlati: ">
                  <li className="list-item">
                    <it-chip label="Argomento 1" size="sm" href="#"></it-chip>
                  </li>
                  <li className="list-item">
                    <it-chip label="Argomento 2" size="sm" href="#"></it-chip>
                  </li>
                </ul>
              </div>
              <time slot="footer" className="it-card-date" dateTime="2026-04-22">
                22 aprile 2026
              </time>
            </it-card>

            <it-card>
              <a slot="title" href="#">
                Titolo del contenuto featured
                <span className="visually-hidden"> (link esterno)</span>
                <div className="it-card-title-icon-wrapper">
                  <it-icon color="primary" name="it-external-link"></it-icon>
                </div>
              </a>
              <span slot="signature">di Maria Verde</span>
              <span slot="text">
                Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
                righe, senza troncamento.
              </span>
              <time slot="footer" className="it-card-date" dateTime="2026-04-22">
                22 aprile 2026
              </time>
            </it-card>
          </div>
        </section>

        <section>
          <h3>Card inline</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <it-card variant="inline">
              <a slot="title" href="#">
                Titolo contenuto editoriale
              </a>
              <span slot="text">
                Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
                righe, senza troncamento.
              </span>
              <div slot="footer" className="it-card-taxonomy">
                <a href="#" className="it-card-category it-card-link">
                  <span className="visually-hidden">Categoria correlata: </span>
                  Categoria
                </a>
              </div>
              <time slot="footer" className="it-card-date" dateTime="2026-04-22">
                22 aprile 2026
              </time>
              <figure slot="image" className="figure img-full">
                <img
                  src="https://placeholderimage.eu/api/city/800/600"
                  alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
                />
              </figure>
            </it-card>

            <it-card variant="inline-reverse">
              <a slot="title" href="#">
                Titolo contenuto editoriale
              </a>
              <span slot="text">
                Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
                righe, senza troncamento.
              </span>
              <div slot="footer" className="it-card-taxonomy">
                <a href="#" className="it-card-category it-card-link">
                  <span className="visually-hidden">Categoria correlata: </span>
                  Categoria
                </a>
              </div>
              <time slot="footer" className="it-card-date" dateTime="2026-04-22">
                22 aprile 2026
              </time>
              <figure slot="image" className="figure img-full">
                <img
                  src="https://placeholderimage.eu/api/city/800/600"
                  alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
                />
              </figure>
            </it-card>
          </div>

          <h4>Card inline mini</h4>
          <div style={{ display: 'grid', gap: '24px', gridTemplateColumns: '1fr 1fr' }}>
            <it-card variant="inline-mini">
              <a slot="title" href="#">
                Titolo contenuto editoriale
              </a>
              <div slot="footer" className="it-card-taxonomy">
                <a href="#" className="it-card-category it-card-link">
                  <span className="visually-hidden">Categoria correlata: </span>
                  Categoria
                </a>
              </div>
              <time slot="footer" className="it-card-date" dateTime="2026-04-22">
                22 aprile 2026
              </time>
              <figure slot="image" className="figure img-full">
                <img
                  src="https://placeholderimage.eu/api/city/800/600"
                  alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
                />
              </figure>
            </it-card>

            <it-card variant="inline-mini-reverse">
              <a slot="title" href="#">
                Titolo contenuto editoriale
              </a>
              <div slot="footer" className="it-card-taxonomy">
                <a href="#" className="it-card-category it-card-link">
                  <span className="visually-hidden">Categoria correlata: </span>
                  Categoria
                </a>
              </div>
              <time slot="footer" className="it-card-date" dateTime="2026-04-22">
                22 aprile 2026
              </time>
              <figure slot="image" className="figure img-full">
                <img
                  src="https://placeholderimage.eu/api/city/800/600"
                  alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
                />
              </figure>
            </it-card>
          </div>
        </section>

        <section>
          <h3>Card per eventi</h3>
          <div style={{ display: 'grid', gap: '24px', gridTemplateColumns: '1fr 1fr' }}>
            <it-card full-height>
              <a slot="title" href="#">
                Titolo evento
              </a>
              <figure slot="image" className="figure img-full">
                <img
                  src="https://placeholderimage.eu/api/city/800/600"
                  alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
                />
              </figure>
              <span slot="subtitle">Dal 4 al 6 agosto</span>
              <span slot="text">
                Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
                righe, senza troncamento.
              </span>
              <div slot="footer" className="it-card-taxonomy">
                <a href="#" className="it-card-category it-card-link">
                  <span className="visually-hidden">Categoria correlata: </span>
                  Categoria
                </a>
              </div>
              <time slot="footer" className="it-card-date" dateTime="2026-04-22">
                22 aprile 2026
              </time>
              <a slot="actions" href="#" className="it-card-link">
                <span className="visually-hidden">Link correlati: </span>
                Iscriviti all'evento
              </a>
            </it-card>

            <it-card full-height>
              <a slot="title" href="#">
                Titolo evento
              </a>
              <figure slot="image" className="figure img-full">
                <img
                  src="https://placeholderimage.eu/api/nature/800/600"
                  alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
                />
              </figure>
              <span slot="subtitle">Dal 4 al 6 novembre</span>
              <span slot="text">
                Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
                righe, senza troncamento.
              </span>
              <it-button slot="actions" variant="secondary" outline>
                <span className="visually-hidden">Link correlati: </span>
                Compila il form di iscrizione
              </it-button>
            </it-card>

            <it-card>
              <a slot="title" href="#">
                Titolo evento
              </a>
              <span slot="subtitle">
                <span className="visually-hidden">Data evento:</span> <time dateTime="08-19">19 agosto</time>,{' '}
                <span className="visually-hidden">Orario:</span> <time>11:30</time>–<time>13:00</time>
              </span>
              <span slot="text">
                Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
                righe, senza troncamento.
              </span>
              <div slot="footer" className="it-card-taxonomy">
                <a href="#" className="it-card-category it-card-link">
                  <span className="visually-hidden">Categoria correlata: </span>
                  Categoria
                </a>
              </div>
              <time slot="footer" className="it-card-date" dateTime="2026-04-22">
                22 aprile 2026
              </time>
            </it-card>
          </div>

          <h4>Card per eventi inline</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <it-card variant="inline">
              <a slot="title" href="#">
                Titolo evento
              </a>
              <span slot="subtitle">
                <span className="visually-hidden">Data evento:</span> <time dateTime="08-19">19 agosto</time>,{' '}
                <span className="visually-hidden">Orario:</span> <time>11:30</time>–<time>13:00</time>
              </span>
              <span slot="text">
                Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
                righe, senza troncamento.
              </span>
              <div slot="footer" className="it-card-taxonomy">
                <a href="#" className="it-card-category it-card-link">
                  <span className="visually-hidden">Categoria correlata: </span>
                  Categoria
                </a>
              </div>
              <time slot="footer" className="it-card-date" dateTime="2026-04-22">
                22 aprile 2026
              </time>
              <a slot="actions" href="#" className="it-card-link">
                <span className="visually-hidden">Link correlati: </span>
                Iscriviti all'evento
              </a>
              <figure slot="image" className="figure img-full">
                <img
                  src="https://placeholderimage.eu/api/city/800/600"
                  alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
                />
              </figure>
            </it-card>

            <it-card variant="inline-reverse">
              <a slot="title" href="#">
                Titolo evento
              </a>
              <span slot="subtitle"> Dal 4 al 6 agosto </span>
              <span slot="text">
                Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
                righe, senza troncamento.
              </span>
              <div slot="footer" className="it-card-taxonomy">
                <a href="#" className="it-card-category it-card-link">
                  <span className="visually-hidden">Categoria correlata: </span>
                  Categoria
                </a>
              </div>
              <time slot="footer" className="it-card-date" dateTime="2026-04-22">
                22 aprile 2026
              </time>
              <it-button slot="actions" variant="secondary" outline>
                <span className="visually-hidden">Link correlati: </span>
                Iscriviti
              </it-button>
              <figure slot="image" className="figure img-full">
                <img
                  src="https://placeholderimage.eu/api/nature/800/600"
                  alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
                />
              </figure>
            </it-card>
          </div>
        </section>

        <section>
          <h3>Card per media (video, audio)</h3>
          <div style={{ display: 'grid', gap: '24px', gridTemplateColumns: '1fr 1fr' }}>
            <it-card full-height>
              <a slot="title" href="#">
                Titolo contenuto video
                <div className="it-card-title-icon-wrapper">
                  <it-icon color="primary" name="it-video" label="Tipo: Video"></it-icon>
                </div>
              </a>
              <figure slot="image" className="figure img-full">
                <img
                  src="https://placeholderimage.eu/api/city/800/600"
                  alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
                />
              </figure>
              <span slot="text">
                Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
                righe, senza troncamento.
              </span>
              <div slot="footer" className="it-card-taxonomy">
                <a href="#" className="it-card-category it-card-link">
                  <span className="visually-hidden">Categoria correlata: </span>
                  Categoria
                </a>
              </div>
              <time slot="footer" className="it-card-date" dateTime="2026-04-22">
                22 aprile 2026
              </time>
            </it-card>

            <it-card full-height>
              <a slot="title" href="#">
                Titolo contenuto video
                <div className="it-card-title-icon-wrapper">
                  <it-icon color="primary" name="it-video" label="Tipo: Video"></it-icon>
                </div>
              </a>
              <figure slot="image" className="figure img-full">
                <img
                  src="https://placeholderimage.eu/api/nature/800/600"
                  alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
                />
              </figure>
              <span slot="text">
                Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
                righe, senza troncamento.
              </span>
              <div slot="footer" className="it-card-taxonomy">
                <ul className="it-card-chips" aria-label="Argomenti correlati: ">
                  <li className="list-item">
                    <it-chip label="Argomento 1" size="sm" href="#"></it-chip>
                  </li>
                  <li className="list-item">
                    <it-chip label="Argomento 2" size="sm" href="#"></it-chip>
                  </li>
                </ul>
              </div>
              <time slot="footer" className="it-card-date" dateTime="2026-04-22">
                22 aprile 2026
              </time>
            </it-card>

            <it-card>
              <a slot="title" href="#">
                Titolo contenuto audio
                <div className="it-card-title-icon-wrapper">
                  <it-icon color="primary" name="it-horn" label="Tipo: Audio"></it-icon>
                </div>
              </a>
              <span slot="text">
                Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
                righe, senza troncamento.
              </span>
              <div slot="footer" className="it-card-taxonomy">
                <a href="#" className="it-card-category it-card-link">
                  <span className="visually-hidden">Categoria correlata: </span>
                  Categoria
                </a>
              </div>
              <time slot="footer" className="it-card-date" dateTime="2026-04-22">
                22 aprile 2026
              </time>
            </it-card>

            <it-card>
              <a slot="title" href="#">
                Titolo contenuto audio
                <div className="it-card-title-icon-wrapper">
                  <it-icon color="primary" name="it-horn" label="Tipo: Audio"></it-icon>
                </div>
              </a>
              <span slot="text">
                Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
                righe, senza troncamento.
              </span>
              <div slot="footer" className="it-card-taxonomy">
                <ul className="it-card-chips" aria-label="Argomenti correlati: ">
                  <li className="list-item">
                    <it-chip label="Argomento 1" size="sm" href="#"></it-chip>
                  </li>
                  <li className="list-item">
                    <it-chip label="Argomento 2" size="sm" href="#"></it-chip>
                  </li>
                </ul>
              </div>
              <time slot="footer" className="it-card-date" dateTime="2026-04-22">
                22 aprile 2026
              </time>
            </it-card>
          </div>

          <h4>Card per media video inline</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <it-card variant="inline">
              <a slot="title" href="#">
                Titolo contenuto video
                <div className="it-card-title-icon-wrapper">
                  <it-icon color="primary" name="it-video" label="Tipo: Video"></it-icon>
                </div>
              </a>
              <span slot="text">
                Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
                righe, senza troncamento.
              </span>
              <div slot="footer" className="it-card-taxonomy">
                <a href="#" className="it-card-category it-card-link">
                  <span className="visually-hidden">Categoria correlata: </span>
                  Categoria
                </a>
              </div>
              <time slot="footer" className="it-card-date" dateTime="2026-04-22">
                22 aprile 2026
              </time>
              <figure slot="image" className="figure img-full">
                <img
                  src="https://placeholderimage.eu/api/city/800/600"
                  alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
                />
              </figure>
            </it-card>

            <it-card variant="inline-reverse">
              <a slot="title" href="#">
                Titolo contenuto video
                <div className="it-card-title-icon-wrapper">
                  <it-icon color="primary" name="it-video" label="Tipo: Video"></it-icon>
                </div>
              </a>
              <span slot="text">
                Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
                righe, senza troncamento.
              </span>
              <div slot="footer" className="it-card-taxonomy">
                <a href="#" className="it-card-category it-card-link">
                  <span className="visually-hidden">Categoria correlata: </span>
                  Categoria
                </a>
              </div>
              <time slot="footer" className="it-card-date" dateTime="2026-04-22">
                22 aprile 2026
              </time>
              <figure slot="image" className="figure img-full">
                <img
                  src="https://placeholderimage.eu/api/nature/800/600"
                  alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
                />
              </figure>
            </it-card>
          </div>
        </section>
      </section>

      <section>
        <h2>Card informative e di servizio</h2>

        <section>
          <h3>Card per servizi e bandi</h3>
          <div style={{ display: 'grid', gap: '24px', gridTemplateColumns: '1fr 1fr' }}>
            <it-card full-height>
              <a slot="title" href="#">
                Titolo servizio
              </a>
              <span slot="text">
                Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
                righe, senza troncamento.
              </span>
              <div slot="footer" className="it-card-taxonomy">
                <a href="#" className="it-card-category it-card-link">
                  <span className="visually-hidden">Categoria correlata: </span>
                  Categoria
                </a>
              </div>
            </it-card>

            <it-card full-height>
              <a slot="title" href="#">
                Titolo del servizio
              </a>
              <span slot="subtitle">Sottotitolo del servizio</span>
              <div slot="footer" className="it-card-taxonomy">
                <span className="visually-hidden">Stato del servizio: </span>
                <it-chip label="Attivo" variant="success" size="sm"></it-chip>
              </div>
              <a slot="actions" href="#" className="it-card-link">
                <span className="visually-hidden">Link correlati: </span>
                Requisiti per l'accesso
              </a>
            </it-card>

            <it-card full-height>
              <a slot="title" href="#">
                Titolo del bando
              </a>
              <span slot="subtitle">Sottotitolo del bando</span>
              <div slot="footer" className="it-card-taxonomy">
                <span className="visually-hidden">Stato del bando: </span>
                <it-chip label="Aperto" variant="success" size="sm"></it-chip>
              </div>
              <span slot="footer" className="it-card-date text-warning">
                <strong>Scadenza: </strong>
                <time className="it-card-date text-warning" dateTime="2026-04-22">
                  22 aprile 2026
                </time>
              </span>
              <it-button slot="actions" variant="secondary" outline>
                <span className="visually-hidden">Link correlati: </span>
                Compila il form di candidatura
              </it-button>
            </it-card>
          </div>
        </section>

        <section>
          <h3>Card per documenti e allegati</h3>
          <div style={{ display: 'grid', gap: '24px', gridTemplateColumns: '1fr 1fr' }}>
            <it-card>
              <a slot="title" href="#">
                Titolo del documento
                <div className="it-card-title-icon-wrapper">
                  <it-icon color="primary" name="it-file"></it-icon>
                </div>
              </a>
              <span slot="text">Eventuale breve estratto descrittivo del documento.</span>
              <div slot="footer" className="it-card-taxonomy">
                <a href="#" className="it-card-category it-card-link">
                  <span className="visually-hidden">Categoria correlata: </span>
                  Categoria
                </a>
              </div>
            </it-card>

            <it-card>
              <a slot="title" href="#">
                Titolo del documento
                <div className="it-card-title-icon-wrapper">
                  <it-icon color="primary" name="it-file"></it-icon>
                </div>
              </a>
              <span slot="text">Eventuale breve estratto descrittivo del documento. Formato PDF (200KB)</span>
              <div slot="footer" className="it-card-taxonomy">
                <a href="#" className="it-card-category it-card-link">
                  <span className="visually-hidden">Categoria correlata: </span>
                  Categoria
                </a>
              </div>
              <span slot="actions" className="me-2">
                Scarica come:
              </span>
              <a slot="actions" href="#" className="it-card-link">
                ODT (300KB)
                <span className="visually-hidden">: Titolo del documento</span>
              </a>
              <a slot="actions" href="#" className="it-card-link">
                ODS (400KB)
                <span className="visually-hidden">: Titolo del documento</span>
              </a>
            </it-card>

            <it-card>
              <a slot="title" href="#">
                Titolo del file allegato
                <span className="visually-hidden">(Formato ODT, 200KB)</span>
                <div className="it-card-title-icon-wrapper">
                  <it-icon color="primary" name="it-file-odt"></it-icon>
                </div>
              </a>
              <span slot="text" aria-hidden="true">
                Formato ODT (200KB)
              </span>
            </it-card>
          </div>
        </section>

        <section>
          <h3>Card per profili personali</h3>
          <div style={{ display: 'grid', gap: '24px', gridTemplateColumns: '1fr 1fr' }}>
            <it-card full-height variant="profile">
              <a slot="title" href="#">
                Nome Personale
              </a>
              <span slot="subtitle">Ruolo nell'organizzazione</span>
              <it-avatar
                slot="image"
                type="text"
                size="xl"
                text="Nome Personale"
                avatar-title="Nome Personale"
              ></it-avatar>
            </it-card>

            <it-card full-height variant="profile" border-top="secondary">
              <a slot="title" href="#">
                Nome Personale
              </a>
              <span slot="subtitle">Ruolo nell'organizzazione</span>
              <it-avatar
                slot="image"
                size="xl"
                text="Nome Personale"
                src="https://randomuser.me/api/portraits/women/14.jpg"
                alt="Woman image"
              ></it-avatar>
            </it-card>

            <it-card full-height variant="profile">
              <a slot="title" href="#">
                Nome Personale
              </a>
              <span slot="subtitle">Ruolo nell'organizzazione</span>
              <it-avatar
                slot="image"
                type="text"
                size="xl"
                text="Nome Personale"
                avatar-title="Nome Personale"
              ></it-avatar>
              <dl slot="body" className="it-card-description-list">
                <div>
                  <dt>Area:</dt>
                  <dd>
                    <a className="it-card-link" href="#">
                      Nome dell'area di appartenenza
                    </a>
                  </dd>
                </div>
                <div>
                  <dt>Email:</dt>
                  <dd>me@mail.com</dd>
                </div>
                <div>
                  <dt>Tel:</dt>
                  <dd>340.4050600</dd>
                </div>
                <div>
                  <dt>Indirizzo:</dt>
                  <dd>Via della città, 5 - 00100 Città</dd>
                </div>
              </dl>
            </it-card>

            <it-card full-height variant="profile" border-top="secondary">
              <a slot="title" href="#">
                Nome Personale
              </a>
              <span slot="subtitle">Ruolo nell'organizzazione</span>
              <it-avatar
                slot="image"
                type="text"
                size="xl"
                text="Nome Personale"
                avatar-title="Nome Personale"
              ></it-avatar>
              <dl slot="body" className="it-card-description-list">
                <div>
                  <dt>Area:</dt>
                  <dd>
                    <a className="it-card-link" href="#">
                      Nome dell'area di appartenenza
                    </a>
                  </dd>
                </div>
                <div>
                  <dt>Email:</dt>
                  <dd>me@mail.com</dd>
                </div>
                <div>
                  <dt>Tel:</dt>
                  <dd>340.4050600</dd>
                </div>
                <div>
                  <dt>Indirizzo:</dt>
                  <dd>Via della città, 5 - 00100 Città</dd>
                </div>
              </dl>
            </it-card>
          </div>
        </section>

        <section>
          <h3>Card per luoghi</h3>
          <div style={{ display: 'grid', gap: '24px', gridTemplateColumns: '1fr 1fr' }}>
            <it-card full-height variant="location">
              <a slot="title" href="#">
                Toponimo o luogo
              </a>
              <span slot="subtitle">Tipologia di luogo</span>
              <div slot="image" className="it-card-profile-image-icon-wrapper">
                <it-icon color="primary" name="it-pa" size="lg"></it-icon>
              </div>
            </it-card>

            <it-card full-height variant="location" border-top="secondary">
              <a slot="title" href="#">
                Toponimo o luogo
              </a>
              <span slot="subtitle">Tipologia di luogo</span>
              <figure slot="image" className="figure img-full">
                <img
                  src="https://placeholderimage.eu/api/monument/320/320"
                  alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
                />
              </figure>
            </it-card>

            <it-card full-height variant="location">
              <a slot="title" href="#">
                Toponimo o luogo
              </a>
              <span slot="subtitle">Tipologia di luogo</span>
              <div slot="image" className="it-card-profile-image-icon-wrapper">
                <it-icon color="primary" name="it-pa" size="lg"></it-icon>
              </div>
              <dl slot="body" className="it-card-description-list border-bottom-0 mb-0">
                <div>
                  <dt>Email:</dt>
                  <dd>me@mail.com</dd>
                </div>
                <div>
                  <dt>Tel:</dt>
                  <dd>340.4050600</dd>
                </div>
                <div>
                  <dt>Indirizzo:</dt>
                  <dd>Via della città, 5 - 00100 Città</dd>
                </div>
              </dl>
            </it-card>

            <it-card full-height variant="location" border-top="secondary">
              <a slot="title" href="#">
                Toponimo o luogo
              </a>
              <span slot="subtitle">Tipologia di luogo</span>
              <figure slot="image" className="figure img-full">
                <img
                  src="https://placeholderimage.eu/api/monument/320/320"
                  alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
                />
              </figure>
              <dl slot="body" className="it-card-description-list border-bottom-0 mb-0">
                <div>
                  <dt>Email:</dt>
                  <dd>me@mail.com</dd>
                </div>
                <div>
                  <dt>Tel:</dt>
                  <dd>340.4050600</dd>
                </div>
                <div>
                  <dt>Indirizzo:</dt>
                  <dd>Via della città, 5 - 00100 Città</dd>
                </div>
              </dl>
              <div slot="footer" style={{ flexGrow: 1 }}>
                <it-icon color="secondary" name="it-map-marker" size="sm"></it-icon>
                <strong>Distanza:</strong> 900 metri
              </div>
              <a slot="footer" href="#" target="_blank" className="it-card-link">
                Apri in mappa
                <span className="visually-hidden"> Toponimo o Luogo (si apre in una nuova finestra)</span>
                <it-icon className="ms-2" color="secondary" name="it-external-link" size="sm"></it-icon>
              </a>
            </it-card>
          </div>
        </section>

        <section>
          <h3>Card con liste di contenuti affini</h3>
          <div style={{ display: 'grid', gap: '24px', gridTemplateColumns: '1fr 1fr' }}>
            <it-card full-height ratio="21x9">
              <a slot="title" href="#">
                Argomento Y
              </a>
              <figure slot="image" className="figure img-full">
                <img
                  src="https://placeholderimage.eu/api/nature/800/600"
                  alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
                />
              </figure>
              <span slot="text">Descrizione breve dell'argomento in poche righe non troncate.</span>
              <ul slot="body" className="list-group list-group-flush" aria-label="Contenuti in evidenza:">
                <li className="list-group-item">
                  <a href="#">Titolo notizia affine</a>
                </li>
                <li className="list-group-item">
                  <a href="#">Titolo media affine</a>
                </li>
                <li className="list-group-item">
                  <a href="#">Altro titolo scheda affine</a>
                </li>
                <li className="list-group-item">
                  <a href="#">Pagina profilo affine</a>
                </li>
              </ul>
            </it-card>

            <it-card full-height ratio="21x9">
              <a slot="title" href="#">
                Titolo evento
              </a>
              <figure slot="image" className="figure img-full">
                <img
                  src="https://placeholderimage.eu/api/monument/800/600"
                  alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
                />
              </figure>
              <span slot="subtitle">Dal 17 al 22 novembre</span>
              <span slot="text">Descrizione breve dell'evento in poche righe non troncate.</span>
              <ul slot="body" className="list-group list-group-flush" aria-label="Contenuti in evidenza:">
                <li className="list-group-item">
                  <a href="#">Gli artisti</a>
                </li>
                <li className="list-group-item">
                  <a href="#">Il luogo</a>
                </li>
                <li className="list-group-item">
                  <a href="#">Il programma dettagliato</a>
                </li>
              </ul>
              <div slot="footer" style={{ flexGrow: 1 }}>
                <a className="it-card-link" href="#">
                  Iscriviti per rimanere aggiornato
                </a>
              </div>
              <a slot="footer" href="#" target="_blank" className="it-card-link">
                Apri la mappa
                <span className="visually-hidden"> di Titolo evento (si apre in una nuova finestra)</span>
                <it-icon className="ms-2" color="secondary" name="it-external-link" size="sm"></it-icon>
              </a>
            </it-card>

            <it-card full-height>
              <a slot="title" href="#">
                Argomento X
              </a>
              <span slot="text">Descrizione breve dell'argomento in poche righe non troncate.</span>
              <ul slot="body" className="list-group list-group-flush" aria-label="Contenuti in evidenza:">
                <li className="list-group-item">
                  <a href="#" className="it-card-link">
                    Titolo notizia affine
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="#" className="it-card-link">
                    Titolo media affine
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="#" className="it-card-link">
                    Altro titolo scheda affine
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="#" className="it-card-link">
                    Pagina profilo affine
                  </a>
                </li>
              </ul>
            </it-card>
          </div>
        </section>
      </section>

      <section>
        <h2>Card presentazione</h2>

        <section>
          <h3>Card banner</h3>
          <div style={{ display: 'grid', gap: '24px', gridTemplateColumns: '1fr 1fr' }}>
            <it-card variant="banner">
              <a slot="title" href="#">
                Titolo del contenuto
              </a>
              <it-icon slot="image" color="secondary" name="it-chart-line" size="xl"></it-icon>
              <span slot="subtitle">Sottotitolo</span>
            </it-card>
          </div>

          <h4>Card banner con azione</h4>
          <div style={{ display: 'grid', gap: '24px', gridTemplateColumns: '1fr 1fr' }}>
            <it-card variant="banner">
              <span slot="title">Titolo del contenuto</span>
              <it-icon slot="image" color="secondary" name="it-chart-line" size="xl"></it-icon>
              <span slot="subtitle">Sottotitolo</span>
              <a slot="footer" href="#">
                Scopri maggiori informazioni
                <span className="visually-hidden">su Titolo del contenuto</span>
              </a>
            </it-card>

            <it-card variant="banner">
              <span slot="title">Titolo del contenuto</span>
              <it-icon slot="image" color="secondary" name="it-chart-line" size="xl"></it-icon>
              <span slot="subtitle">Sottotitolo</span>
              <it-button slot="footer" variant="primary" outline>
                Apri il form di iscrizione
                <span className="visually-hidden">per Titolo del contenuto</span>
              </it-button>
            </it-card>
          </div>

          <h4>Card banner inline</h4>
          <div style={{ display: 'grid', gap: '24px', gridTemplateColumns: '1fr 1fr' }}>
            <it-card variant="inline-banner">
              <a slot="title" href="#">
                Titolo del contenuto
              </a>
              <it-icon slot="image" color="secondary" name="it-chart-line" size="xl"></it-icon>
              <span slot="subtitle">Sottotitolo</span>
            </it-card>

            <it-card variant="inline-banner-reverse">
              <a slot="title" href="#">
                Titolo del contenuto
              </a>
              <it-icon slot="image" color="secondary" name="it-chart-line" size="xl"></it-icon>
              <span slot="subtitle">Sottotitolo</span>
            </it-card>

            <it-card variant="inline-banner-mini">
              <a slot="title" href="#">
                Titolo del contenuto
              </a>
              <it-icon slot="image" color="secondary" name="it-chart-line" size="xl"></it-icon>
              <span slot="subtitle">Versione inline anche su mobile</span>
            </it-card>

            <it-card variant="inline-banner-mini-reverse">
              <a slot="title" href="#">
                Titolo del contenuto
              </a>
              <it-icon slot="image" color="secondary" name="it-chart-line" size="xl"></it-icon>
              <span slot="subtitle">Versione inline anche su mobile</span>
            </it-card>
          </div>
        </section>
      </section>

      <section>
        <h2>Personalizzazioni e stili</h2>

        <section>
          <h3>Bordi e ombre</h3>
          <div style={{ display: 'grid', gap: '24px', gridTemplateColumns: '1fr 1fr 1fr' }}>
            <it-card>
              <a slot="title" href="#">
                Titolo h3
              </a>
              <span slot="text">
                Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
                righe, senza troncamento.
              </span>
              <time slot="footer" className="it-card-date" dateTime="2026-10-12">
                12 ottobre, 2026
              </time>
            </it-card>

            <it-card shadow="md">
              <a slot="title" href="#">
                Titolo h3
              </a>
              <span slot="text">
                Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
                righe, senza troncamento.
              </span>
              <time slot="footer" className="it-card-date" dateTime="2026-10-12">
                12 ottobre, 2026
              </time>
            </it-card>

            <it-card shadow="lg">
              <a slot="title" href="#">
                Titolo h3
              </a>
              <span slot="text">
                Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
                righe, senza troncamento.
              </span>
              <time slot="footer" className="it-card-date" dateTime="2026-10-12">
                12 ottobre, 2026
              </time>
            </it-card>

            <it-card shadow="md" border="0" style={{ gridColumn: '2' }}>
              <a slot="title" href="#">
                Titolo h3
              </a>
              <span slot="text">
                Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
                righe, senza troncamento.
              </span>
              <time slot="footer" className="it-card-date" dateTime="2026-10-12">
                12 ottobre, 2026
              </time>
            </it-card>

            <it-card shadow="lg" border="0" style={{ gridColumn: '3' }}>
              <a slot="title" href="#">
                Titolo h3
              </a>
              <span slot="text">
                Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
                righe, senza troncamento.
              </span>
              <time slot="footer" className="it-card-date" dateTime="2026-10-12">
                12 ottobre, 2026
              </time>
            </it-card>
          </div>
        </section>

        <section>
          <h3>Immagini</h3>
          <div style={{ display: 'grid', gap: '24px', gridTemplateColumns: '1fr 1fr' }}>
            <it-card ratio="21x9">
              <a slot="title" href="#">
                Titolo del contenuto
              </a>
              <figure slot="image" className="figure img-full">
                <img
                  src="https://placeholderimage.eu/api/city/800/600"
                  alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
                />
              </figure>
              <span slot="text">Card con immagine con proporzioni 21:9.</span>
              <time slot="footer" className="it-card-date" dateTime="2026-04-22">
                22 aprile 2026
              </time>
            </it-card>

            <it-card ratio="16x9">
              <a slot="title" href="#">
                Titolo del contenuto
              </a>
              <figure slot="image" className="figure img-full">
                <img
                  src="https://placeholderimage.eu/api/city/800/600"
                  alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
                />
              </figure>
              <span slot="text">Card con immagine con proporzioni 16:9.</span>
              <time slot="footer" className="it-card-date" dateTime="2026-04-22">
                22 aprile 2026
              </time>
            </it-card>

            <it-card ratio="4x3">
              <a slot="title" href="#">
                Titolo del contenuto
              </a>
              <figure slot="image" className="figure img-full">
                <img
                  src="https://placeholderimage.eu/api/city/800/600"
                  alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
                />
              </figure>
              <span slot="text">Card con immagine con proporzioni 4:3.</span>
              <time slot="footer" className="it-card-date" dateTime="2026-04-22">
                22 aprile 2026
              </time>
            </it-card>

            <it-card ratio="1x1">
              <a slot="title" href="#">
                Titolo del contenuto
              </a>
              <figure slot="image" className="figure img-full">
                <img
                  src="https://placeholderimage.eu/api/city/800/600"
                  alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
                />
              </figure>
              <span slot="text">Card con immagine con proporzioni 1:1.</span>
              <time slot="footer" className="it-card-date" dateTime="2026-04-22">
                22 aprile 2026
              </time>
            </it-card>
          </div>
        </section>

        <section>
          <h3>Altezza delle card</h3>
          <div style={{ display: 'grid', gap: '24px', gridTemplateColumns: '1fr 1fr' }}>
            <it-card full-height>
              <a slot="title" href="#">
                Titolo del contenuto
              </a>
              <figure slot="image" className="figure img-full">
                <img
                  src="https://placeholderimage.eu/api/city/800/600"
                  alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
                />
              </figure>
              <span slot="text">
                Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
                righe, senza troncamento.
              </span>
              <time slot="footer" className="it-card-date" dateTime="2026-04-22">
                22 aprile 2026
              </time>
            </it-card>

            <it-card full-height>
              <a slot="title" href="#">
                Titolo del contenuto
              </a>
              <span slot="text">
                Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
                righe, senza troncamento.
              </span>
              <time slot="footer" className="it-card-date" dateTime="2026-04-22">
                22 aprile 2026
              </time>
            </it-card>
          </div>
        </section>

        <section>
          <h3>Pulsanti a tutta larghezza su mobile</h3>
          <div style={{ display: 'grid', gap: '24px', gridTemplateColumns: '1fr 1fr' }}>
            <it-card>
              <a slot="title" href="#">
                Titolo dell'evento
              </a>
              <span slot="subtitle">Dal 4 al 6 agosto</span>
              <span slot="text">
                Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
                righe, senza troncamento.
              </span>
              <time slot="footer" className="it-card-date" dateTime="2026-04-22">
                22 aprile 2026
              </time>
              <div slot="actions" className="d-grid gap-2 d-md-block">
                <a href="#" className="btn btn-outline-secondary">
                  Prenota
                  <span className="visually-hidden">per Titolo dell'evento</span>
                </a>
              </div>
            </it-card>
          </div>
        </section>
      </section>

      <section>
        <h2>Organizzazione e layout</h2>

        <section>
          <h3>Liste per gruppi numerosi di card</h3>
          <ul className="it-card-list row" aria-label="Risultati della ricerca: ">
            <li className="col-12 col-md-6 col-lg-4 mb-3 mb-md-4">
              <it-card>
                <a slot="title" href="#">
                  Primo risultato
                </a>
                <span slot="text">
                  Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o
                  quattro righe, senza troncamento.
                </span>
                <time slot="footer" className="it-card-date" dateTime="2026-04-22">
                  22 aprile 2026
                </time>
              </it-card>
            </li>
            <li className="col-12 col-md-6 col-lg-4 mb-3 mb-md-4">
              <it-card>
                <a slot="title" href="#">
                  Secondo risultato
                </a>
                <span slot="text">
                  Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o
                  quattro righe, senza troncamento.
                </span>
                <time slot="footer" className="it-card-date" dateTime="2026-04-22">
                  22 aprile 2026
                </time>
              </it-card>
            </li>
            <li className="col-12 col-md-6 col-lg-4 mb-3 mb-md-4">
              <it-card>
                <a slot="title" href="#">
                  Terzo risultato
                </a>
                <span slot="text">
                  Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o
                  quattro righe, senza troncamento.
                </span>
                <time slot="footer" className="it-card-date" dateTime="2026-04-22">
                  22 aprile 2026
                </time>
              </it-card>
            </li>
            <li className="col-12 col-md-6 col-lg-4 mb-3 mb-md-4">
              <it-card>
                <a slot="title" href="#">
                  Quarto risultato
                </a>
                <span slot="text">
                  Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o
                  quattro righe, senza troncamento.
                </span>
                <time slot="footer" className="it-card-date" dateTime="2026-04-22">
                  22 aprile 2026
                </time>
              </it-card>
            </li>
            <li className="col-12 col-md-6 col-lg-4 mb-3 mb-md-4">
              <it-card>
                <a slot="title" href="#">
                  Quinto risultato
                </a>
                <span slot="text">
                  Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o
                  quattro righe, senza troncamento.
                </span>
                <time slot="footer" className="it-card-date" dateTime="2026-04-22">
                  22 aprile 2026
                </time>
              </it-card>
            </li>
            <li className="col-12 col-md-6 col-lg-4 mb-3 mb-md-4">
              <it-card>
                <a slot="title" href="#">
                  Sesto risultato
                </a>
                <span slot="text">
                  Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o
                  quattro righe, senza troncamento.
                </span>
                <time slot="footer" className="it-card-date" dateTime="2026-04-22">
                  22 aprile 2026
                </time>
              </it-card>
            </li>
          </ul>
        </section>

        <section>
          <h3>Uso di classi dedicate (per piccoli gruppi)</h3>
          <div className="it-card-group">
            <it-card>
              <a slot="title" href="#">
                Titolo della prima card
              </a>
              <span slot="text">Questo è un testo breve che riassume il contenuto della pagina di destinazione.</span>
              <time slot="footer" className="it-card-date" dateTime="2026-10-12">
                12 ottobre, 2026
              </time>
            </it-card>
            <it-card>
              <a slot="title" href="#">
                Titolo della seconda card
              </a>
              <span slot="text">Questo è un testo breve che riassume il contenuto della pagina di destinazione.</span>
              <time slot="footer" className="it-card-date" dateTime="2026-10-12">
                12 ottobre, 2026
              </time>
            </it-card>
            <it-card>
              <a slot="title" href="#">
                Titolo della terza card
              </a>
              <span slot="text">Questo è un testo breve che riassume il contenuto della pagina di destinazione.</span>
              <time slot="footer" className="it-card-date" dateTime="2026-10-12">
                12 ottobre, 2026
              </time>
            </it-card>
            <it-card>
              <a slot="title" href="#">
                Titolo della quarta card
              </a>
              <span slot="text">Questo è un testo breve che riassume il contenuto della pagina di destinazione.</span>
              <time slot="footer" className="it-card-date" dateTime="2026-10-12">
                12 ottobre, 2026
              </time>
            </it-card>
          </div>

          <h4>Numero di colonne specifiche</h4>
          <div className="it-card-group it-card-group-2-cols">
            <it-card>
              <a slot="title" href="#">
                Card in due colonne
              </a>
              <span slot="text">Questo gruppo mostra sempre due colonne su viewport medie e grandi.</span>
            </it-card>
            <it-card>
              <a slot="title" href="#">
                Card in due colonne
              </a>
              <span slot="text">Questo gruppo mostra sempre due colonne su viewport medie e grandi.</span>
            </it-card>
          </div>

          <h4>Centrate orizzontalmente</h4>
          <div className="it-card-group it-card-group-center">
            <it-card>
              <a slot="title" href="#">
                Card centrata
              </a>
              <span slot="text">Questo gruppo ha le card centrate nella pagina.</span>
            </it-card>
            <it-card>
              <a slot="title" href="#">
                Card centrata
              </a>
              <span slot="text">Questo gruppo ha le card centrate nella pagina.</span>
            </it-card>
          </div>

          <h4>Uso rispetto al contenitore (sperimentale)</h4>
          <div className="it-card-group it-card-group-container-aware">
            <it-card>
              <a slot="title" href="#">
                Card con Container Queries
              </a>
              <span slot="text">Questa card si adatta alla dimensione del suo contenitore, non della viewport.</span>
              <time slot="footer" className="it-card-date" dateTime="2026-10-12">
                12 ottobre, 2026
              </time>
            </it-card>
            <it-card>
              <a slot="title" href="#">
                Card con Container Queries
              </a>
              <span slot="text">Questa card si adatta alla dimensione del suo contenitore, non della viewport.</span>
              <time slot="footer" className="it-card-date" dateTime="2026-10-12">
                12 ottobre, 2026
              </time>
            </it-card>
            <it-card>
              <a slot="title" href="#">
                Card con Container Queries
              </a>
              <span slot="text">Questa card si adatta alla dimensione del suo contenitore, non della viewport.</span>
              <time slot="footer" className="it-card-date" dateTime="2026-10-12">
                12 ottobre, 2026
              </time>
            </it-card>
            <it-card>
              <a slot="title" href="#">
                Card con Container Queries
              </a>
              <span slot="text">Questa card si adatta alla dimensione del suo contenitore, non della viewport.</span>
              <time slot="footer" className="it-card-date" dateTime="2026-10-12">
                12 ottobre, 2026
              </time>
            </it-card>
          </div>

          <h4>Confronto in colonne diverse</h4>
          <div className="row">
            <div className="col-12 col-lg-8 mb-4">
              <div className="p-3 bg-light">
                <div className="it-card-group it-card-group-container-aware">
                  <it-card>
                    <a slot="title" href="#">
                      Card in colonna larga
                    </a>
                    <span slot="text">In questa colonna larga, le card si distribuiscono su più colonne.</span>
                  </it-card>
                  <it-card>
                    <a slot="title" href="#">
                      Card in colonna larga
                    </a>
                    <span slot="text">In questa colonna larga, le card si distribuiscono su più colonne.</span>
                  </it-card>
                  <it-card>
                    <a slot="title" href="#">
                      Card in colonna larga
                    </a>
                    <span slot="text">In questa colonna larga, le card si distribuiscono su più colonne.</span>
                  </it-card>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4 mb-4">
              <div className="p-3 bg-light">
                <div className="it-card-group it-card-group-container-aware">
                  <it-card>
                    <a slot="title" href="#">
                      Card in colonna stretta
                    </a>
                    <span slot="text">In questa colonna stretta, le card si dispongono su una singola colonna.</span>
                  </it-card>
                  <it-card>
                    <a slot="title" href="#">
                      Card in colonna stretta
                    </a>
                    <span slot="text">In questa colonna stretta, le card si dispongono su una singola colonna.</span>
                  </it-card>
                  <it-card>
                    <a slot="title" href="#">
                      Card in colonna stretta
                    </a>
                    <span slot="text">In questa colonna stretta, le card si dispongono su una singola colonna.</span>
                  </it-card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Card;

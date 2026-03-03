import React from 'react';

const slides = Array.from({ length: 6 });

const SimpleCard = () => (
  <it-card full-height="">
    <a slot="title" href="#">
      Titolo contenuto editoriale
      <div className="it-card-title-icon-wrapper">
        <it-icon color="primary" name="it-video" label="Tipo: Video"></it-icon>
      </div>
    </a>
    <span slot="text">
      Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe,
      senza troncamento.
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
      {' '}
      22 aprile 2026{' '}
    </time>
  </it-card>
);

const InlineCard = () => (
  <it-card variant="inline">
    <a slot="title" href="#">
      Titolo contenuto editoriale
    </a>
    <span slot="text">
      Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe,
      senza troncamento.
    </span>
    <div slot="footer" className="it-card-taxonomy">
      <a href="#" className="it-card-category it-card-link">
        <span className="visually-hidden">Categoria correlata: </span>
        Categoria
      </a>
    </div>
    <time slot="footer" className="it-card-date" dateTime="2026-04-22">
      {' '}
      22 aprile 2026{' '}
    </time>
    <figure slot="image" className="figure img-full">
      <img
        src="https://placeholderimage.eu/api/city/800/600"
        alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
      />
    </figure>
  </it-card>
);

const CardWithImage = () => (
  <it-card full-height="">
    <a slot="title" href="#">
      Titolo contenuto editoriale
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
      Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe,
      senza troncamento.
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
      {' '}
      22 aprile 2026{' '}
    </time>
  </it-card>
);

const ImageSlide = () => (
  <div className="card-wrapper">
    <div className="img-responsive-wrapper">
      <div className="img-responsive">
        <div className="img-wrapper">
          <img src="https://www.placeholderimage.eu/api/800/600" title="titolo immagine" alt="descrizione immagine" />
        </div>
      </div>
    </div>
  </div>
);

const VideoSlide = () => (
  <it-video src="https://vjs.zencdn.net/v/oceans.webm" poster="" type="video/mp4" lang="it" track="[]"></it-video>
);

const Carousel = () => (
  <>
    <h1>Carousel</h1>

    <section className="my-5">
      <h2>Variante singola</h2>
      <it-carousel variant="single">
        <h2 slot="title">Titolo carousel</h2>
        {slides.map((_, i) => (
          <it-carousel-slide key={i}>
            <InlineCard />
          </it-carousel-slide>
        ))}
      </it-carousel>
    </section>

    <section className="my-5">
      <h2>Variante 3 colonne</h2>
      <it-carousel variant="columns">
        <h2 slot="title">Titolo carousel</h2>
        {slides.map((_, i) => (
          <it-carousel-slide key={i}>
            <SimpleCard />
          </it-carousel-slide>
        ))}
      </it-carousel>
    </section>

    <section className="my-5">
      <h2>Variante gallery small</h2>
      <it-carousel variant="gallery-sm">
        <h2 slot="title">Titolo carousel</h2>
        {slides.map((_, i) => (
          <it-carousel-slide key={i}>
            <ImageSlide />
          </it-carousel-slide>
        ))}
      </it-carousel>
    </section>

    <section className="my-5">
      <h2>Variante gallery large</h2>
      <it-carousel variant="gallery-lg">
        <h2 slot="title">Titolo carousel</h2>
        {slides.map((_, i) => (
          <it-carousel-slide key={i}>
            <ImageSlide />
          </it-carousel-slide>
        ))}
      </it-carousel>
    </section>

    <section className="my-5">
      <h2>Con frecce di navigazione — colonne</h2>
      <it-carousel variant="columns" arrows>
        <h2 slot="title">Titolo carousel</h2>
        {slides.map((_, i) => (
          <it-carousel-slide key={i}>
            <CardWithImage />
          </it-carousel-slide>
        ))}
      </it-carousel>
    </section>

    <section className="my-5">
      <h2>Con frecce di navigazione — singola</h2>
      <it-carousel variant="single" arrows>
        <h2 slot="title">Titolo carousel</h2>
        {slides.map((_, i) => (
          <it-carousel-slide key={i}>
            <CardWithImage />
          </it-carousel-slide>
        ))}
      </it-carousel>
    </section>

    <section className="my-5">
      <h2>Fullscreen</h2>
      <it-carousel variant="single" arrows fullscreen>
        <h2 slot="title">Titolo carousel</h2>
        {slides.map((_, i) => (
          <it-carousel-slide key={i}>
            <InlineCard />
          </it-carousel-slide>
        ))}
      </it-carousel>
    </section>

    <section className="my-5">
      <h2>Modalità di scorrimento loop</h2>
      <it-carousel variant="single" type="loop">
        <h2 slot="title">Titolo carousel</h2>
        {slides.map((_, i) => (
          <it-carousel-slide key={i}>
            <CardWithImage />
          </it-carousel-slide>
        ))}
      </it-carousel>
    </section>

    <section className="my-5">
      <h2>Configurazione avanzata</h2>
      <it-carousel
        variant="columns"
        config='{"type":"loop","autoplay":"pause","interval":3000,"pauseOnHover":true,"resetProgress":false,"perPage":2,"arrows":true,"gap":16,"padding":{"left":8,"right":8},"breakpoints":{"560":{"perPage":1,"gap":0,"padding":{"left":24,"right":24},"arrows":false},"768":{"perPage":2,"gap":0,"padding":{"left":0,"right":0},"arrows":false},"992":{"perPage":3,"gap":0,"padding":{"left":0,"right":0},"arrows":false}}}'
      >
        <h2 slot="title">Titolo carousel</h2>
        {slides.map((_, i) => (
          <it-carousel-slide key={i}>
            <CardWithImage />
          </it-carousel-slide>
        ))}
      </it-carousel>
    </section>

    <section className="my-5">
      <h2>Video</h2>
      <it-carousel variant="single" arrows fullscreen>
        <h2 slot="title">Titolo carousel</h2>
        {slides.map((_, i) => (
          <it-carousel-slide key={i}>
            <VideoSlide />
          </it-carousel-slide>
        ))}
      </it-carousel>
    </section>
  </>
);

export default Carousel;

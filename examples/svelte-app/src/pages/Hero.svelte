<h1>Hero</h1>
<section>
  <h2>Con immagine</h2>
  <it-hero it-aria-label="In evidenza">
    <img
      title="titolo immagine"
      alt="descrizione immagine"
      slot="background"
      src="https://animals.sandiegozoo.org/sites/default/files/2016-08/animals_hero_mountains.jpg"
    />
  </it-hero>
</section>

<section>
  <h2>Con contenuti testuali</h2>
  <it-hero>
    <div slot="text" class="it-hero-text-wrapper bg-dark">
      <span class="it-category">Titolo occhiello</span>
      <h2>Titolo della sezione</h2>
      <p class="d-none d-lg-block">
        Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo donec
        enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.
      </p>
      <div class="my-btn-container">
        <a class="btn btn-sm btn-outline-primary" href="#">Azione primaria </a>
      </div>
    </div>
  </it-hero>
</section>

<section>
  <h3>Con contenuti testuali centrati</h3>
  <it-hero center>
    <div slot="text" class="it-hero-text-wrapper bg-dark">
      <span class="it-category">Titolo occhiello</span>
      <h2>Titolo della sezione</h2>
      <p class="d-none d-lg-block">
        Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo donec
        enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.
      </p>
      <div class="my-btn-container">
        <a class="btn btn-sm btn-outline-primary" href="#">Azione primaria </a>
      </div>
    </div>
  </it-hero>
</section>

<section>
  <h2>Con testi e immagine di sfondo</h2>
  <it-hero>
    <img
      title="titolo immagine"
      alt="descrizione immagine"
      slot="background"
      src="https://animals.sandiegozoo.org/sites/default/files/2016-08/animals_hero_mountains.jpg"
    />
    <div slot="text" class="it-hero-text-wrapper bg-dark">
      <span class="it-category">Titolo occhiello</span>
      <h2>Titolo della sezione</h2>
      <p class="d-none d-lg-block">
        Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo donec
        enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.
      </p>
      <div class="my-btn-container">
        <a class="btn btn-sm btn-outline-primary" href="#">Azione primaria </a>
      </div>
    </div>
  </it-hero>
</section>

<section>
  <h3>Con overlay di colore primario</h3>
  <it-hero overlay-color="primary">
    <img
      title="titolo immagine"
      alt="descrizione immagine"
      slot="background"
      src="https://animals.sandiegozoo.org/sites/default/files/2016-08/animals_hero_mountains.jpg"
    />
    <div slot="text" class="it-hero-text-wrapper bg-dark">
      <span class="it-category">Titolo occhiello</span>
      <h2>Titolo della sezione</h2>
      <p class="d-none d-lg-block">
        Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo donec
        enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.
      </p>
      <div class="my-btn-container">
        <a class="btn btn-sm btn-outline-primary" href="#">Azione primaria </a>
      </div>
    </div>
  </it-hero>
</section>

<section>
  <h3>Con overlay e filtro di colore primario</h3>
  <it-hero it-aria-label="In evidenza" overlay-color="filter">
    <img
      title="titolo immagine"
      alt="descrizione immagine"
      slot="background"
      src="https://animals.sandiegozoo.org/sites/default/files/2016-08/animals_hero_mountains.jpg"
    />
  </it-hero>
</section>

<section>
  <h2>Con immagine e margine negativo per contenuti sovrapposti</h2>
  <it-hero overlap>
    <img
      title="titolo immagine"
      alt="descrizione immagine"
      slot="background"
      src="https://animals.sandiegozoo.org/sites/default/files/2016-08/animals_hero_mountains.jpg"
    />
    <div slot="text" class="it-hero-text-wrapper bg-dark">
      <span class="it-category">Titolo occhiello</span>
      <h2>Titolo della sezione</h2>
      <p class="d-none d-lg-block">
        Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo donec
        enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.
      </p>
      <div class="my-btn-container">
        <a class="btn btn-sm btn-outline-primary" href="#">Azione primaria </a>
      </div>
    </div>
  </it-hero>

  <div class="container">
    <div class="row">
      <div class="col-12">
        <!-- <div class="col-12 col-lg-10 offset-lg-1"> e card-space nel wrapper>-->
        <div class="col-12 mb-3 mb-md-4">
          <!--start it-card-->
          <article class="it-card rounded shadow border px-5 py-4">
            <!--card first child is the title (link)-->
            <h3 class="it-card-title no_toc h4">Titolo del contenuto</h3>
            <!--card body content-->
            <div class="it-card-body">
              <p class="it-card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div class="it-card-footer border-0" aria-label="Link correlati:">
              <a href="#" class="it-card-link"
                >Scopri di più
                <span class="visually-hidden">su Titolo del contenuto</span></a
              >
            </div>
          </article>
          <!--end it-card-->
        </div>
      </div>
    </div>
  </div>
</section>

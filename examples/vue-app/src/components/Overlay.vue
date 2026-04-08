

<template>
  <h1>Overlay panel</h1>

  <section>
    <h2>Esempio</h2>
    <div class="container">
        <div class="row">
          <div class="col-12 col-md-6">
            <p><strong>Overlay ad altezza fissa</strong></p>
            <figure class="overlay-wrapper">
              <img src="https://picsum.photos/240/160?image=1056" alt="descrizione immagine" class="img-fluid" />
              <figcaption class="overlay-panel"><span>Label immagine</span></figcaption>
            </figure>
          </div>
          <div class="col-12 col-md-6">
            <p><strong>Overlay a tutta altezza</strong></p>
            <figure class="overlay-wrapper">
              <img src="https://picsum.photos/240/160?image=1056" alt="descrizione immagine" class="img-fluid" />
              <figcaption class="overlay-panel overlay-panel-fullheight"><span>Label immagine</span></figcaption>
            </figure>
          </div>
          <div class="col-12">
            <p><strong>Esempio con differenti proporzioni</strong></p>
            <figure class="overlay-wrapper">
              <img src="https://picsum.photos/800/300?image=1055" alt="descrizione immagine" class="img-fluid" />
              <figcaption class="overlay-panel"><span>Label immagine</span></figcaption>
            </figure>
          </div>
        </div>
      </div>
  </section>

  <section>
    <h2>Overlay nero</h2>
    <div class="container">
        <div class="row">
          <div class="col-12 col-md-6">
            <p><strong>Overlay ad altezza fissa</strong></p>
            <figure class="overlay-wrapper">
              <img src="https://picsum.photos/240/160?image=1056" alt="descrizione immagine" class="img-fluid" />
              <figcaption class="overlay-panel overlay-black"><span>Label immagine</span></figcaption>
            </figure>
          </div>
          <div class="col-12 col-md-6">
            <p><strong>Overlay a tutta altezza</strong></p>
            <figure class="overlay-wrapper">
              <img src="https://picsum.photos/240/160?image=1056" alt="descrizione immagine" class="img-fluid" />
              <figcaption class="overlay-panel overlay-panel-fullheight overlay-black">
                <span>Label immagine</span>
              </figcaption>
            </figure>
          </div>
          <div class="col-12">
            <p><strong>Esempio con differenti proporzioni</strong></p>
            <figure class="overlay-wrapper">
              <img src="https://picsum.photos/800/300?image=1055" alt="descrizione immagine" class="img-fluid" />
              <figcaption class="overlay-panel overlay-black"><span>Label immagine</span></figcaption>
            </figure>
          </div>
        </div>
      </div>
  </section>

  <section>
    <h2>Overlay con icona</h2>
    <div class="container">
        <div class="row">
          <div class="col-12 col-md-6">
            <p><strong>Overlay primary (default)</strong></p>
            <figure class="overlay-wrapper">
              <img src="https://picsum.photos/240/160?image=1056" alt="descrizione immagine" />
              <figcaption class="overlay-panel overlay-icon">
                <span class="visually-hidden">Immagine Preferita</span>
                <it-icon name="it-star-outline" color="inverse"></it-icon>
              </figcaption>
            </figure>
          </div>
          <div class="col-12 col-md-6">
            <p><strong>Overlay nero</strong></p>
            <figure class="overlay-wrapper">
              <img src="https://picsum.photos/240/160?image=1056" alt="descrizione immagine" />
              <figcaption class="overlay-panel overlay-black overlay-icon">
                <span class="visually-hidden">Immagine Preferita</span>
                <it-icon name="it-star-outline" color="inverse"></it-icon>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
  </section>

</template>

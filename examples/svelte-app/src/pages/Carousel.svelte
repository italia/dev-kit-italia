<script>
  const slides = Array.from({ length: 6 });
  const advancedConfig = '{"type":"loop","autoplay":"pause","interval":3000,"pauseOnHover":true,"resetProgress":false,"perPage":2,"arrows":true,"gap":16,"padding":{"left":8,"right":8},"breakpoints":{"560":{"perPage":1,"gap":0,"padding":{"left":24,"right":24},"arrows":false},"768":{"perPage":2,"gap":0,"padding":{"left":0,"right":0},"arrows":false},"992":{"perPage":3,"gap":0,"padding":{"left":0,"right":0},"arrows":false}}}';
</script>

<h1>Carousel</h1>

<section class="my-5">
  <h2>Variante singola</h2>
  <it-carousel variant="single">
    <h2 slot="title">Titolo carousel</h2>
    {#each slides as _, i}
      <it-carousel-slide>
        <it-card variant="inline">
          <a slot="title" href="#">Titolo contenuto editoriale</a>
          <span slot="text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</span>
          <div slot="footer" class="it-card-taxonomy">
            <a href="#" class="it-card-category it-card-link"><span class="visually-hidden">Categoria correlata: </span>Categoria</a>
          </div>
          <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
          <figure slot="image" class="figure img-full">
            <img src="https://placeholderimage.eu/api/city/800/600" alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto." />
          </figure>
        </it-card>
      </it-carousel-slide>
    {/each}
  </it-carousel>
</section>

<section class="my-5">
  <h2>Variante 3 colonne</h2>
  <it-carousel variant="columns">
    <h2 slot="title">Titolo carousel</h2>
    {#each slides as _, i}
      <it-carousel-slide>
        <it-card full-height="">
          <a slot="title" href="#">Titolo contenuto editoriale<div class="it-card-title-icon-wrapper"><it-icon color="primary" name="it-video" label="Tipo: Video"></it-icon></div></a>
          <span slot="text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</span>
          <div slot="footer" class="it-card-taxonomy"><ul class="it-card-chips" aria-label="Argomenti correlati: "><li class="list-item"><it-chip label="Argomento 1" size="sm" href="#"></it-chip></li><li class="list-item"><it-chip label="Argomento 2" size="sm" href="#"></it-chip></li></ul></div>
          <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
        </it-card>
      </it-carousel-slide>
    {/each}
  </it-carousel>
</section>

<section class="my-5">
  <h2>Variante gallery small</h2>
  <it-carousel variant="gallery-sm">
    <h2 slot="title">Titolo carousel</h2>
    {#each slides as _, i}
      <it-carousel-slide>
        <div class="card-wrapper"><div class="img-responsive-wrapper"><div class="img-responsive"><div class="img-wrapper"><img src="https://www.placeholderimage.eu/api/800/600" title="titolo immagine" alt="descrizione immagine" /></div></div></div></div>
      </it-carousel-slide>
    {/each}
  </it-carousel>
</section>

<section class="my-5">
  <h2>Variante gallery large</h2>
  <it-carousel variant="gallery-lg">
    <h2 slot="title">Titolo carousel</h2>
    {#each slides as _, i}
      <it-carousel-slide>
        <div class="card-wrapper"><div class="img-responsive-wrapper"><div class="img-responsive"><div class="img-wrapper"><img src="https://www.placeholderimage.eu/api/800/600" title="titolo immagine" alt="descrizione immagine" /></div></div></div></div>
      </it-carousel-slide>
    {/each}
  </it-carousel>
</section>

<section class="my-5">
  <h2>Con frecce di navigazione — colonne</h2>
  <it-carousel variant="columns" arrows>
    <h2 slot="title">Titolo carousel</h2>
    {#each slides as _, i}
      <it-carousel-slide>
        <it-card full-height="">
          <a slot="title" href="#">Titolo contenuto editoriale<div class="it-card-title-icon-wrapper"><it-icon color="primary" name="it-video" label="Tipo: Video"></it-icon></div></a>
          <figure slot="image" class="figure img-full"><img src="https://placeholderimage.eu/api/city/800/600" alt="Breve descrizione immagine." /></figure>
          <span slot="text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</span>
          <div slot="footer" class="it-card-taxonomy"><ul class="it-card-chips" aria-label="Argomenti correlati: "><li class="list-item"><it-chip label="Argomento 1" size="sm" href="#"></it-chip></li><li class="list-item"><it-chip label="Argomento 2" size="sm" href="#"></it-chip></li></ul></div>
          <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
        </it-card>
      </it-carousel-slide>
    {/each}
  </it-carousel>
</section>

<section class="my-5">
  <h2>Con frecce di navigazione — singola</h2>
  <it-carousel variant="single" arrows>
    <h2 slot="title">Titolo carousel</h2>
    {#each slides as _, i}
      <it-carousel-slide>
        <it-card full-height="">
          <a slot="title" href="#">Titolo contenuto editoriale<div class="it-card-title-icon-wrapper"><it-icon color="primary" name="it-video" label="Tipo: Video"></it-icon></div></a>
          <figure slot="image" class="figure img-full"><img src="https://placeholderimage.eu/api/city/800/600" alt="Breve descrizione immagine." /></figure>
          <span slot="text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</span>
          <div slot="footer" class="it-card-taxonomy"><ul class="it-card-chips" aria-label="Argomenti correlati: "><li class="list-item"><it-chip label="Argomento 1" size="sm" href="#"></it-chip></li><li class="list-item"><it-chip label="Argomento 2" size="sm" href="#"></it-chip></li></ul></div>
          <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
        </it-card>
      </it-carousel-slide>
    {/each}
  </it-carousel>
</section>

<section class="my-5">
  <h2>Fullscreen</h2>
  <it-carousel variant="single" arrows fullscreen>
    <h2 slot="title">Titolo carousel</h2>
    {#each slides as _, i}
      <it-carousel-slide>
        <it-card variant="inline">
          <a slot="title" href="#">Titolo contenuto editoriale</a>
          <span slot="text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</span>
          <div slot="footer" class="it-card-taxonomy">
            <a href="#" class="it-card-category it-card-link"><span class="visually-hidden">Categoria correlata: </span>Categoria</a>
          </div>
          <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
          <figure slot="image" class="figure img-full"><img src="https://placeholderimage.eu/api/city/800/600" alt="Breve descrizione immagine." /></figure>
        </it-card>
      </it-carousel-slide>
    {/each}
  </it-carousel>
</section>

<section class="my-5">
  <h2>Modalità di scorrimento loop</h2>
  <it-carousel variant="single" type="loop">
    <h2 slot="title">Titolo carousel</h2>
    {#each slides as _, i}
      <it-carousel-slide>
        <it-card full-height="">
          <a slot="title" href="#">Titolo contenuto editoriale<div class="it-card-title-icon-wrapper"><it-icon color="primary" name="it-video" label="Tipo: Video"></it-icon></div></a>
          <figure slot="image" class="figure img-full"><img src="https://placeholderimage.eu/api/city/800/600" alt="Breve descrizione immagine." /></figure>
          <span slot="text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</span>
          <div slot="footer" class="it-card-taxonomy"><ul class="it-card-chips" aria-label="Argomenti correlati: "><li class="list-item"><it-chip label="Argomento 1" size="sm" href="#"></it-chip></li><li class="list-item"><it-chip label="Argomento 2" size="sm" href="#"></it-chip></li></ul></div>
          <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
        </it-card>
      </it-carousel-slide>
    {/each}
  </it-carousel>
</section>

<section class="my-5">
  <h2>Configurazione avanzata</h2>
  <it-carousel variant="columns" config={advancedConfig}>
    <h2 slot="title">Titolo carousel</h2>
    {#each slides as _, i}
      <it-carousel-slide>
        <it-card full-height="">
          <a slot="title" href="#">Titolo contenuto editoriale<div class="it-card-title-icon-wrapper"><it-icon color="primary" name="it-video" label="Tipo: Video"></it-icon></div></a>
          <figure slot="image" class="figure img-full"><img src="https://placeholderimage.eu/api/city/800/600" alt="Breve descrizione immagine." /></figure>
          <span slot="text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</span>
          <div slot="footer" class="it-card-taxonomy"><ul class="it-card-chips" aria-label="Argomenti correlati: "><li class="list-item"><it-chip label="Argomento 1" size="sm" href="#"></it-chip></li><li class="list-item"><it-chip label="Argomento 2" size="sm" href="#"></it-chip></li></ul></div>
          <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
        </it-card>
      </it-carousel-slide>
    {/each}
  </it-carousel>
</section>



<section class="my-5">
  <h2>Autoplay</h2>
  <it-carousel variant="single" autoplay>
    <h2 slot="title">Titolo carousel</h2>
    {#each slides as _, i}
      <it-carousel-slide>
        <it-card variant="inline">
          <a slot="title" href="#">Titolo contenuto editoriale</a>
          <span slot="text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</span>
          <div slot="footer" class="it-card-taxonomy">
            <a href="#" class="it-card-category it-card-link"><span class="visually-hidden">Categoria correlata: </span>Categoria</a>
          </div>
          <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
          <figure slot="image" class="figure img-full">
            <img src="https://placeholderimage.eu/api/city/800/600" alt="Breve descrizione immagine se ha senso nel contesto." />
          </figure>
        </it-card>
      </it-carousel-slide>
    {/each}
  </it-carousel>
</section>



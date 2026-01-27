<template>
  <div class="container my-4">
    <h1>it-breadcrumbs</h1>

    <!-- Breadcrumb con link -->
    <section>
      <h2>Breadcrumb con link</h2>
      <p>
        Mostra l'uso tipico: tutte le voci intermedie sono link verso i livelli superiori; l'ultima voce rappresenta la
        pagina corrente e non dovrebbe essere linkata.
      </p>

      <it-breadcrumbs label="Percorso di navigazione">
        <it-breadcrumb-item>
          <a href="#">Home</a>
        </it-breadcrumb-item>
        <it-breadcrumb-item>
          <a href="#">Sezione</a>
        </it-breadcrumb-item>
        <it-breadcrumb-item>Voce corrente</it-breadcrumb-item>
      </it-breadcrumbs>
    </section>

    <!-- Con icona -->
    <section>
      <h2>Con icona</h2>
      <p>
        Per aggiungere un'icona all'elemento breadcrumb è sufficiente inserire l'<code>it-icon</code> corrispondente
        nello slot dell'elemento <code>it-breadcrumb-item</code>.
      </p>

      <it-breadcrumbs label="Percorso di navigazione">
        <it-breadcrumb-item>
          <a href="#">
            <it-icon name="it-link" color="secondary" size="sm" class="me-1"></it-icon>
            Home
          </a>
        </it-breadcrumb-item>
        <it-breadcrumb-item>
          <a href="#">
            <it-icon name="it-link" color="secondary" size="sm" class="me-1"></it-icon>
            Sezione
          </a>
        </it-breadcrumb-item>
        <it-breadcrumb-item>
          <a href="#">
            <it-icon name="it-link" color="secondary" size="sm" class="me-1"></it-icon>
            Voce corrente
          </a>
        </it-breadcrumb-item>
      </it-breadcrumbs>
    </section>

    <!-- Separatore personalizzato -->
    <section>
      <h2>Separatore personalizzato</h2>
      <p>
        È possibile personalizzare il separatore inserendo un elemento nello slot 'separator' all'interno di ciascun
        item. Questo permette di usare simboli diversi o icone.
      </p>

      <it-breadcrumbs label="Percorso di navigazione" separator="&gt;">
        <it-breadcrumb-item>
          <a href="#">Home</a>
        </it-breadcrumb-item>
        <it-breadcrumb-item>
          <a href="#">Sezione</a>
        </it-breadcrumb-item>
        <it-breadcrumb-item>Voce corrente</it-breadcrumb-item>
      </it-breadcrumbs>

      <it-breadcrumbs label="Percorso di navigazione 2" class="mt-3">
        <it-breadcrumb-item>
          <a href="#">Home</a>
          <it-icon name="it-chevron-right" color="secondary" size="sm" slot="separator" class="my-separator"></it-icon>
        </it-breadcrumb-item>
        <it-breadcrumb-item>
          <a href="#">Sezione</a>
          <it-icon name="it-chevron-right" color="secondary" size="sm" slot="separator" class="my-separator"></it-icon>
        </it-breadcrumb-item>
        <it-breadcrumb-item>Voce corrente</it-breadcrumb-item>
      </it-breadcrumbs>
    </section>

    <!-- Sfondo scuro -->
    <section>
      <h2>Sfondo scuro</h2>
      <p>
        Per la versione su sfondo scuro delle breadcrumbs è sufficiente aggiungere l'attributo <code>dark</code>. Il
        colore del testo e del separatore cambieranno automaticamente in base al tema scuro, mentre il colore delle
        icone e/o contenuti inseriti negli slot separator dovrà essere impostato manualmente.
      </p>

      <it-breadcrumbs label="Percorso di navigazione" dark>
        <it-breadcrumb-item>
          <a href="#">Home</a>
        </it-breadcrumb-item>
        <it-breadcrumb-item>
          <a href="#">Sezione</a>
        </it-breadcrumb-item>
        <it-breadcrumb-item>Voce corrente</it-breadcrumb-item>
      </it-breadcrumbs>

      <it-breadcrumbs label="Percorso di navigazione 2" dark class="mt-3">
        <it-breadcrumb-item>
          <a href="#">Home</a>
          <it-icon name="it-chevron-right" color="white" size="sm" slot="separator" class="my-separator"></it-icon>
        </it-breadcrumb-item>
        <it-breadcrumb-item>
          <a href="#">Sezione</a>
          <it-icon name="it-chevron-right" color="white" size="sm" slot="separator" class="my-separator"></it-icon>
        </it-breadcrumb-item>
        <it-breadcrumb-item>Voce corrente</it-breadcrumb-item>
      </it-breadcrumbs>

      <it-breadcrumbs label="Percorso di navigazione 3" dark class="mt-3">
        <it-breadcrumb-item>
          <a href="#">
            <it-icon name="it-link" color="white" size="sm" class="me-1"></it-icon>
            Home
          </a>
        </it-breadcrumb-item>
        <it-breadcrumb-item>
          <a href="#">
            <it-icon name="it-link" color="white" size="sm" class="me-1"></it-icon>
            Sezione
          </a>
        </it-breadcrumb-item>
        <it-breadcrumb-item>
          <a href="#">
            <it-icon name="it-link" color="white" size="sm" class="me-1"></it-icon>
            Voce corrente
          </a>
        </it-breadcrumb-item>
      </it-breadcrumbs>
    </section>
  </div>
</template>

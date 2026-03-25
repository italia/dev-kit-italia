<template>
  <h1>Toolbar</h1>
  <p>Menu di navigazione a icone che può contenere link, pulsanti e dropdown.</p>

  <section>
    <h2>Toolbar grande</h2>
    <p>Versione predefinita con icone grandi e label visibili.</p>
    <it-toolbar>
      <li>
        <a href="#" class="active">
          <svg class="icon">
            <use href="/dist/svg/sprites.svg#it-comment"></use>
          </svg>
          <span class="toolbar-label">messaggi</span>
        </a>
      </li>
      <li>
        <a href="#">
          <svg class="icon">
            <use href="/dist/svg/sprites.svg#it-camera"></use>
          </svg>
          <span class="toolbar-label">immagini</span>
        </a>
      </li>
      <li>
        <a href="#">
          <svg class="icon">
            <use href="/dist/svg/sprites.svg#it-file"></use>
          </svg>
          <span class="toolbar-label">documenti</span>
        </a>
      </li>
      <li>
        <a href="#">
          <svg class="icon">
            <use href="/dist/svg/sprites.svg#it-security"></use>
          </svg>
          <span class="toolbar-label">privacy</span>
        </a>
      </li>
      <li>
        <a href="#">
          <svg class="icon">
            <use href="/dist/svg/sprites.svg#it-star-full"></use>
          </svg>
          <span class="toolbar-label">preferiti</span>
        </a>
      </li>
    </it-toolbar>
  </section>

  <section>
    <h2>Toolbar media</h2>
    <p>Versione media con label nascoste visivamente.</p>
    <it-toolbar size="md">
      <li>
        <a href="#" class="active">
          <svg class="icon">
            <use href="/dist/svg/sprites.svg#it-comment"></use>
          </svg>
          <span class="visually-hidden">messaggi</span>
        </a>
      </li>
      <li>
        <a href="#">
          <svg class="icon">
            <use href="/dist/svg/sprites.svg#it-camera"></use>
          </svg>
          <span class="visually-hidden">immagini</span>
        </a>
      </li>
      <li>
        <a href="#">
          <svg class="icon">
            <use href="/dist/svg/sprites.svg#it-file"></use>
          </svg>
          <span class="visually-hidden">documenti</span>
        </a>
      </li>
      <li>
        <a href="#">
          <svg class="icon">
            <use href="/dist/svg/sprites.svg#it-security"></use>
          </svg>
          <span class="visually-hidden">privacy</span>
        </a>
      </li>
    </it-toolbar>
  </section>

  <section>
    <h2>Toolbar piccola</h2>
    <p>Versione piccola con label nascoste visivamente.</p>
    <it-toolbar size="sm">
      <li>
        <a href="#" class="active">
          <svg class="icon">
            <use href="/dist/svg/sprites.svg#it-comment"></use>
          </svg>
          <span class="visually-hidden">messaggi</span>
        </a>
      </li>
      <li>
        <a href="#">
          <svg class="icon">
            <use href="/dist/svg/sprites.svg#it-camera"></use>
          </svg>
          <span class="visually-hidden">immagini</span>
        </a>
      </li>
      <li>
        <a href="#">
          <svg class="icon">
            <use href="/dist/svg/sprites.svg#it-file"></use>
          </svg>
          <span class="visually-hidden">documenti</span>
        </a>
      </li>
    </it-toolbar>
  </section>

  <section>
    <h2>Toolbar verticale</h2>
    <p>La toolbar può essere disposta verticalmente.</p>
    <it-toolbar orientation="vertical">
      <li>
        <a href="#" class="active">
          <svg class="icon">
            <use href="/dist/svg/sprites.svg#it-comment"></use>
          </svg>
          <span class="toolbar-label">messaggi</span>
        </a>
      </li>
      <li>
        <a href="#">
          <svg class="icon">
            <use href="/dist/svg/sprites.svg#it-camera"></use>
          </svg>
          <span class="toolbar-label">immagini</span>
        </a>
      </li>
      <li>
        <a href="#">
          <svg class="icon">
            <use href="/dist/svg/sprites.svg#it-file"></use>
          </svg>
          <span class="toolbar-label">documenti</span>
        </a>
      </li>
    </it-toolbar>
  </section>

  <section>
    <h2>Toolbar con badge</h2>
    <p>I badge possono indicare contenuti non letti o notifiche.</p>
    <it-toolbar>
      <li>
        <a href="#" class="active">
          <svg class="icon">
            <use href="/dist/svg/sprites.svg#it-comment"></use>
          </svg>
          <span class="toolbar-label"> messaggi <span class="visually-hidden">1 da leggere</span> </span>
          <span class="badge">1</span>
        </a>
      </li>
      <li>
        <a href="#">
          <svg class="icon">
            <use href="/dist/svg/sprites.svg#it-file"></use>
          </svg>
          <span class="toolbar-label"> documenti <span class="visually-hidden">42 da esaminare</span> </span>
          <span class="badge">42</span>
        </a>
      </li>
      <li>
        <a href="#">
          <svg class="icon">
            <use href="/dist/svg/sprites.svg#it-camera"></use>
          </svg>
          <span class="toolbar-label">immagini</span>
        </a>
      </li>
    </it-toolbar>
  </section>

  <section>
    <h2>Toolbar con divisori</h2>
    <p>È possibile aggiungere divisori per raggruppare logicamente gli elementi.</p>
    <it-toolbar>
      <li>
        <a href="#" class="active">
          <svg class="icon">
            <use href="/dist/svg/sprites.svg#it-comment"></use>
          </svg>
          <span class="toolbar-label">messaggi</span>
        </a>
      </li>
      <li>
        <a href="#">
          <svg class="icon">
            <use href="/dist/svg/sprites.svg#it-camera"></use>
          </svg>
          <span class="toolbar-label">immagini</span>
        </a>
      </li>
      <li class="toolbar-divider" role="separator" aria-orientation="vertical"></li>
      <li>
        <a href="#">
          <svg class="icon">
            <use href="/dist/svg/sprites.svg#it-file"></use>
          </svg>
          <span class="toolbar-label">documenti</span>
        </a>
      </li>
      <li>
        <a href="#">
          <svg class="icon">
            <use href="/dist/svg/sprites.svg#it-security"></use>
          </svg>
          <span class="toolbar-label">privacy</span>
        </a>
      </li>
    </it-toolbar>
  </section>

  <section>
    <h2>Elemento disabilitato</h2>
    <p>Gli elementi possono avere uno stato disabilitato.</p>
    <it-toolbar>
      <li>
        <a href="#" class="active">
          <svg class="icon">
            <use href="/dist/svg/sprites.svg#it-comment"></use>
          </svg>
          <span class="toolbar-label">messaggi</span>
        </a>
      </li>
      <li>
        <a href="#" class="disabled" disabled>
          <svg class="icon">
            <use href="/dist/svg/sprites.svg#it-camera"></use>
          </svg>
          <span class="toolbar-label">immagini (disabilitato)</span>
        </a>
      </li>
      <li>
        <a href="#">
          <svg class="icon">
            <use href="/dist/svg/sprites.svg#it-file"></use>
          </svg>
          <span class="toolbar-label">documenti</span>
        </a>
      </li>
    </it-toolbar>
  </section>
</template>

<script>
  const handleLinkClick = (e) => {
    e.preventDefault();
  };

  const handleMouseEnter = (e) => {
    const button = e.target;
    const popover = button.closest('it-popover');
    popover?.openPopover();
  };

  const handleMouseLeave = (e) => {
    const button = e.target;
    const popover = button.closest('it-popover');
    popover?.closePopover();
  };

  const handleFocus = (e) => {
    const button = e.target;
    const popover = button.closest('it-popover');
    popover?.openPopover();
  };

  const handleBlur = (e) => {
    const target = e.relatedTarget;
    if (!target?.closest?.('it-popover')) {
      const button = e.target;
      const popover = button.closest('it-popover');
      popover?.closePopover();
    }
  };

  const handlePopoverOpen = (e) => {
    console.log('Popover aperto', e);
  };

  const handlePopoverClose = (e) => {
    console.log('Popover chiuso', e);
  };
</script>

<h1>it-popover</h1>

<!-- Base -->
<section style="margin-bottom: 2rem">
  <h2>Base</h2>
  <it-popover placement="right">
    <it-button slot="trigger" variant="primary">Opzioni utente, clicca per aprire</it-button>
    <div slot="content" class="popover">
      <h4 class="popover-header">Titolo del popover</h4>
      <div class="popover-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue.</div>
    </div>
  </it-popover>
</section>

<!-- Posizione -->
<section style="margin-bottom: 2rem">
  <h2>Posizione</h2>
  <div style="display: grid; gap: .5rem; grid: 1fr 1fr 1fr / 1fr 1fr 1fr">
    <it-popover placement="bottom-start" style="grid-column: 2">
      <it-button slot="trigger" variant="primary">Giù</it-button>
      <div slot="content" class="popover">
        <h4 class="popover-header">Titolo del popover</h4>
        <div class="popover-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue.</div>
      </div>
    </it-popover>

    <it-popover placement="top-start" style="grid-row: 3; grid-column: 2">
      <it-button slot="trigger" variant="primary">Su</it-button>
      <div slot="content" class="popover">
        <h4 class="popover-header">Titolo del popover</h4>
        <div class="popover-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue.</div>
      </div>
    </it-popover>

    <it-popover placement="left" style="grid-row: 2; grid-column: 3">
      <it-button slot="trigger" variant="primary">Sinistra</it-button>
      <div slot="content" class="popover">
        <h4 class="popover-header">Titolo del popover</h4>
        <div class="popover-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue.</div>
      </div>
    </it-popover>

    <it-popover placement="right" style="grid-row: 2; grid-column: 1">
      <it-button slot="trigger" variant="primary">Destra</it-button>
      <div slot="content" class="popover">
        <h4 class="popover-header">Titolo del popover</h4>
        <div class="popover-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue.</div>
      </div>
    </it-popover>
  </div>
</section>

<!-- Titolo con icona e link -->
<section style="margin-bottom: 2rem">
  <h2>Titolo con icona e link</h2>
  <it-popover>
    <it-button slot="trigger" variant="primary">Popover con icona e link</it-button>
    <div slot="content" class="popover">
      <h4 class="popover-header">
        <it-icon name="it-help-circle" size="sm"></it-icon>
        Titolo con icona
      </h4>
      <div class="popover-body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue.
        <!-- svelte-ignore a11y-invalid-attribute -->
        <a href="#" class="popover-inner-link" on:click={handleLinkClick}>
          Leggi tutto
          <it-icon name="it-arrow-right" size="xs" color="primary"></it-icon>
        </a>
      </div>
    </div>
  </it-popover>
</section>

<!-- Elementi disabilitati -->
<section style="margin-bottom: 2rem">
  <h2>Elementi disabilitati</h2>
  <it-popover placement="right">
    <it-button slot="trigger" variant="primary" disabled>Pulsante disabilitato, il popover non si apre</it-button>
    <div slot="content" class="popover">
      <div class="popover-body">Popover disabilitato</div>
    </div>
  </it-popover>
</section>

<!-- Elementi disabilitati con hover -->
<section style="margin-bottom: 2rem">
  <h2>Elementi disabilitati con hover</h2>
  <it-popover placement="right">
    <it-button
      slot="trigger"
      variant="primary"
      disabled
      on:mouseenter={handleMouseEnter}
      on:mouseleave={handleMouseLeave}
      on:focus={handleFocus}
      on:blur={handleBlur}
    >
      Pulsante disabilitato
    </it-button>
    <div slot="content" class="popover" on:blur={handleBlur}>
      <div class="popover-body">Pulsante disabilitato, qui puoi spiegare il perché</div>
    </div>
  </it-popover>
</section>

<!-- Attivazione controllata -->
<section style="margin-bottom: 2rem">
  <h2>Attivazione controllata</h2>
  <p>Non si apre semplicemente con il click, il comportamento dev'essere controllato tramite codice.</p>
  <it-popover controlled placement="right">
    <it-button slot="trigger" variant="primary">Popover controllato</it-button>
    <div slot="content" class="popover">
      <div class="popover-inner">
        <div class="popover-body">Questo popover non si aprirà e questo testo non si vedrà.</div>
      </div>
    </div>
  </it-popover>
</section>

<!-- Eventi -->
<section style="margin-bottom: 2rem">
  <h2>Eventi</h2>
  <it-popover on:it-popover-open={handlePopoverOpen} on:it-popover-close={handlePopoverClose} placement="right">
    <it-button slot="trigger" variant="primary">Popover con eventi</it-button>
    <div slot="content" class="popover">
      <h4 class="popover-header">Eventi del Popover</h4>
      <div class="popover-body">Apri e chiudi questo popover per vedere gli eventi nella console.</div>
    </div>
  </it-popover>
</section>

<!-- Con trigger personalizzato -->
<section style="margin-bottom: 2rem">
  <h2>Con trigger personalizzato</h2>
  <p>Il popover può essere attivato da qualsiasi elemento HTML.</p>
  <div style="max-width: 500px">
    Per maggiori informazioni sulla privacy e su come trattiamo i tuoi dati,
    <it-popover placement="top">
      <!-- svelte-ignore a11y-invalid-attribute -->
      <a href="#" slot="trigger" style="text-decoration: underline; color: var(--bs-primary)"> consulta le nostre policy </a>
      <div slot="content" class="popover">
        <div class="popover-inner">
          <h3 class="popover-header">Informazioni sulla privacy</h3>
          <div class="popover-body">
            <div style="display: flex; flex-direction: column; gap: 8px">
              <!-- svelte-ignore a11y-invalid-attribute -->
              <a href="#" on:click={(e) => handleAction(e, 'Privacy Policy')} style="color: var(--bs-primary); text-decoration: none"> 🔒 Privacy Policy </a>
              <!-- svelte-ignore a11y-invalid-attribute -->
              <a href="#" on:click={(e) => handleAction(e, 'Cookie Policy')} style="color: var(--bs-primary); text-decoration: none"> 🍪 Cookie Policy </a>
              <!-- svelte-ignore a11y-invalid-attribute -->
              <a href="#" on:click={(e) => handleAction(e, 'Gestisci consensi')} style="color: var(--bs-primary); text-decoration: none"> ⚙️ Gestisci consensi </a>
            </div>
          </div>
        </div>
      </div>
    </it-popover>
    .
  </div>
</section>

<!-- Eventi -->
<section style="margin-bottom: 2rem">
  <h2>Eventi</h2>
  <p>Il componente emette eventi quando viene aperto e chiuso.</p>
  <it-popover placement="bottom-start" on:it-popover-open={handlePopoverOpen} on:it-popover-close={handlePopoverClose}>
    <it-button slot="trigger" variant="primary">Popover con eventi</it-button>
    <div slot="content" class="popover">
      <div class="popover-inner">
        <h3 class="popover-header" style="margin-bottom: 0">Eventi del Popover</h3>
        <div class="popover-body">
          Apri e chiudi questo popover per vedere gli eventi nella console.
        </div>
      </div>
    </div>
  </it-popover>
</section>

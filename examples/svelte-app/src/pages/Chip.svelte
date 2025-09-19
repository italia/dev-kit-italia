<script>
  function handleDismiss(event) {
    const chip = event.currentTarget.closest('it-chip');
    if (chip?.hasAttribute('is-disabled')) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    if (chip) chip.remove();
  }

  function handleKeyDown(event) {
    const chip = event.currentTarget.closest('it-chip');

    // Lascia passare Tab e Shift+Tab per la navigazione
    if (event.key === 'Tab') {
      return;
    }

    // Controlla se la chip è disabilitata per altri tasti
    if (chip?.hasAttribute('is-disabled')) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      if (chip) chip.remove();
    }
  }
</script>

<h1>it-chip</h1>

<it-chip label="Etichetta" size="sm" variant="primary"></it-chip>

<section>
  <h2>Varianti di colore</h2>
  <div class="flex p-0">
    <it-chip label="Etichetta" size="sm" variant="primary"></it-chip>
    <it-chip label="Etichetta" size="sm" variant="secondary"></it-chip>
    <it-chip label="Etichetta" size="sm" variant="success"></it-chip>
    <it-chip label="Etichetta" size="sm" variant="danger"></it-chip>
    <it-chip label="Etichetta" size="sm" variant="warning"></it-chip>
  </div>
</section>

<section>
  <h2>Varianti di colore link</h2>
  <div class="flex p-0">
    <it-chip label="Etichetta" size="sm" variant="primary" href="#"></it-chip>
    <it-chip label="Etichetta" size="sm" variant="secondary" href="#"></it-chip>
    <it-chip label="Etichetta" size="sm" variant="success" href="#"></it-chip>
    <it-chip label="Etichetta" size="sm" variant="danger" href="#"></it-chip>
    <it-chip label="Etichetta" size="sm" variant="warning" href="#"></it-chip>
  </div>
</section>

<section>
  <h2>Varianti di dimensione</h2>
  <div class="flex p-0">
    <it-chip label="Etichetta" size="sm" variant=""></it-chip>
    <it-chip label="Etichetta" size="lg" variant=""></it-chip>
    <it-chip label="Etichetta" size="sm" variant="" href="#"></it-chip>
    <it-chip label="Etichetta" size="lg" variant="" href="#"></it-chip>
  </div>
</section>

<section>
  <h2>Chip con avatar</h2>
  <div class="flex p-0">
    <it-chip label="Etichetta" size="sm" variant="primary" avatar="https://randomuser.me/api/portraits/men/46.jpg" avatar-alt="Avatar alt" id="chip-dismissable">
      <it-button
        slot="dismiss-button"
        icon
        it-aria-label="Elimina etichetta"
        it-aria-disabled="true"
        it-aria-description="Puoi premere per eliminare la chip."
        on:click={handleDismiss}
        on:keydown={handleKeyDown}
      >
        <it-icon name="it-close" size="sm"></it-icon>
      </it-button>
    </it-chip>
    <it-chip label="Etichetta" size="lg" variant="primary" avatar="https://randomuser.me/api/portraits/men/46.jpg" avatar-alt="Avatar alt" id="chip-dismissable">
      <it-button
        slot="dismiss-button"
        icon
        it-aria-label="Elimina etichetta"
        it-aria-disabled="true"
        it-aria-description="Puoi premere per eliminare la chip."
        on:click={handleDismiss}
        on:keydown={handleKeyDown}
      >
        <it-icon name="it-close" size="sm"></it-icon>
      </it-button>
    </it-chip>
  </div>
</section>

<section>
  <h2>Chip con chiusura</h2>
  <div class="flex p-0">
    <it-chip
      label="Rimuovibile"
      size="sm"
      variant="primary"
      dismissable
      id="chip-dismissable-1"
    >
      <it-button
        slot="dismiss-button"
        icon
        it-aria-label="Elimina chip"
        it-aria-description="Puoi premere per eliminare la chip."
        on:click={handleDismiss}
        on:keydown={handleKeyDown}
      >
        <it-icon name="it-close" size="sm"></it-icon>
      </it-button>
    </it-chip>

    <it-chip
      label="Altra rimuovibile"
      size="sm"
      variant="danger"
      dismissable
      id="chip-dismissable-2"
    >
      <it-button
        slot="dismiss-button"
        icon
        it-aria-label="Elimina chip"
        it-aria-disabled="true"
        it-aria-description="Puoi premere per eliminare la chip."
        on:click={handleDismiss}
        on:keydown={handleKeyDown}
      >
        <it-icon name="it-close" size="sm"></it-icon>
      </it-button>
    </it-chip>
  </div>
</section>

<section>
  <h2>Chip disabilitata</h2>
  <div class="flex p-0">
    <it-chip label="Etichetta" size="sm" variant="primary" dismissable is-disabled>
      <it-button
        slot="dismiss-button"
        icon
        it-aria-label="Elimina etichetta"
        it-aria-disabled="true"
        it-aria-description="Puoi premere per eliminare la chip."
        on:click={handleDismiss}
        on:keydown={handleKeyDown}
      >
        <it-icon name="it-close" size="sm"></it-icon>
      </it-button>
    </it-chip>
  </div>
</section>

<section>
  <h2>Chip con icona</h2>
  <div class="flex p-0">
    <it-chip label="Download" size="sm" variant="primary" dismissable>
      <it-icon slot="icon" name="it-download" size="sm"></it-icon>
      <it-button
        slot="dismiss-button"
        icon
        it-aria-label="Rimuovi download"
        it-aria-description="Puoi premere per rimuovere questa azione."
        on:click={handleDismiss}
        on:keydown={handleKeyDown}
      >
        <it-icon name="it-close" size="sm"></it-icon>
      </it-button>
    </it-chip>
    <it-chip label="Carica file" size="lg" variant="success" dismissable>
      <it-icon slot="icon" name="it-upload" size="sm"></it-icon>
      <it-button
        slot="dismiss-button"
        icon
        it-aria-label="Rimuovi carica file"
        it-aria-description="Puoi premere per rimuovere questa azione."
        on:click={handleDismiss}
        on:keydown={handleKeyDown}
      >
        <it-icon name="it-close" size="sm"></it-icon>
      </it-button>
    </it-chip>
    <it-chip label="Preferiti" size="sm" variant="warning">
      <it-icon slot="icon" name="it-star-full" size="sm"></it-icon>
    </it-chip>
  </div>
</section>

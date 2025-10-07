<template>
  <h1>it-popover</h1>

  <div class="alert alert-info" role="alert">
    <strong>Nota:</strong> Il componente <code>it-popover</code> non gestisce automaticamente il click sul trigger. È
    necessario aggiungere un event handler <code>@click</code> che chiama <code>toggle()</code> sul popover. Vedi gli
    esempi sotto per i pattern da usare.
  </div>

  <!-- Base - Menu utente -->
  <section style="margin-bottom: 2rem">
    <h2>Base - Menu utente</h2>
    <p>
      Esempio di popover con menu interattivo. I popover sono ideali per contenuti ricchi con link e azioni multiple.
    </p>
    <it-popover>
      <it-button slot="trigger" variant="primary" @click="handleTriggerClick">Opzioni utente</it-button>
      <div slot="content" class="popover">
        <div class="popover-inner">
          <h3 class="popover-header">Menu azioni</h3>
          <div class="popover-body">
            <div style="display: flex; flex-direction: column; gap: 8px">
              <a
                href="#"
                @click="(e) => handleAction(e, 'Modifica profilo')"
                style="color: var(--bs-primary); text-decoration: none"
              >
                📝 Modifica profilo
              </a>
              <a
                href="#"
                @click="(e) => handleAction(e, 'Impostazioni')"
                style="color: var(--bs-primary); text-decoration: none"
              >
                ⚙️ Impostazioni
              </a>
              <a
                href="#"
                @click="(e) => handleAction(e, 'Esci')"
                style="color: var(--bs-danger); text-decoration: none"
              >
                🚪 Esci
              </a>
            </div>
          </div>
        </div>
      </div>
    </it-popover>
  </section>

  <!-- Direzioni -->
  <section style="margin-bottom: 2rem">
    <h2>Direzioni</h2>
    <p>I popover possono essere posizionati in diverse direzioni.</p>
    <div style="display: flex; gap: 1rem; flex-wrap: wrap">
      <it-popover placement="bottom-start">
        <it-button slot="trigger" variant="primary" @click="handleTriggerClick">Giù</it-button>
        <div slot="content" class="popover">
          <div class="popover-inner">
            <h3 class="popover-header">Azioni rapide</h3>
            <div class="popover-body">
              <a
                href="#"
                @click="(e) => handleAction(e, 'Copia link')"
                style="color: var(--bs-primary); display: block"
              >
                📋 Copia link
              </a>
            </div>
          </div>
        </div>
      </it-popover>

      <it-popover placement="left">
        <it-button slot="trigger" variant="primary" @click="handleTriggerClick">Sinistra</it-button>
        <div slot="content" class="popover">
          <div class="popover-inner">
            <h3 class="popover-header">Azioni rapide</h3>
            <div class="popover-body">
              <a href="#" @click="(e) => handleAction(e, 'Condividi')" style="color: var(--bs-primary); display: block">
                📤 Condividi
              </a>
            </div>
          </div>
        </div>
      </it-popover>

      <it-popover placement="top-start">
        <it-button slot="trigger" variant="primary" @click="handleTriggerClick">Su</it-button>
        <div slot="content" class="popover">
          <div class="popover-inner">
            <h3 class="popover-header">Azioni rapide</h3>
            <div class="popover-body">
              <a href="#" @click="(e) => handleAction(e, 'Scarica')" style="color: var(--bs-primary); display: block">
                ⬇️ Scarica
              </a>
            </div>
          </div>
        </div>
      </it-popover>

      <it-popover placement="right">
        <it-button slot="trigger" variant="primary" @click="handleTriggerClick">Destra</it-button>
        <div slot="content" class="popover">
          <div class="popover-inner">
            <h3 class="popover-header">Azioni rapide</h3>
            <div class="popover-body">
              <a
                href="#"
                @click="(e) => handleAction(e, 'Aggiungi ai preferiti')"
                style="color: var(--bs-primary); display: block"
              >
                ⭐ Aggiungi ai preferiti
              </a>
            </div>
          </div>
        </div>
      </it-popover>
    </div>
  </section>

  <!-- Titolo con icona e link -->
  <section style="margin-bottom: 2rem">
    <h2>Titolo con icona e link</h2>
    <p>È possibile aggiungere un'icona nel titolo e link nel contenuto.</p>
    <it-popover placement="top">
      <it-button slot="trigger" variant="primary" @click="handleTriggerClick">Info documento</it-button>
      <div slot="content" class="popover">
        <div class="popover-inner">
          <h3 class="popover-header">
            <it-icon name="it-info-circle" size="sm" style="margin-right: 0.5rem"></it-icon>
            Informazioni documento
          </h3>
          <div class="popover-body">
            Questo documento contiene informazioni sensibili. Prima di procedere assicurati di avere le autorizzazioni
            necessarie.
            <a href="#" class="popover-inner-link" @click="(e) => handleAction(e, 'Policy completa')"
              >Leggi la policy completa</a
            >
          </div>
        </div>
      </div>
    </it-popover>
  </section>

  <!-- Con trigger personalizzato -->
  <section style="margin-bottom: 2rem">
    <h2>Con trigger personalizzato</h2>
    <p>Il popover può essere attivato da qualsiasi elemento HTML.</p>
    <p style="max-width: 500px">
      Per maggiori informazioni sulla privacy e su come trattiamo i tuoi dati,
      <it-popover placement="top">
        <a
          href="#"
          slot="trigger"
          style="text-decoration: underline; color: var(--bs-primary)"
          @click="handleTriggerClick"
        >
          consulta le nostre policy
        </a>
        <div slot="content" class="popover">
          <div class="popover-inner">
            <h3 class="popover-header">Informazioni sulla privacy</h3>
            <div class="popover-body">
              <div style="display: flex; flex-direction: column; gap: 8px">
                <a
                  href="#"
                  @click="(e) => handleAction(e, 'Privacy Policy')"
                  style="color: var(--bs-primary); text-decoration: none"
                >
                  🔒 Privacy Policy
                </a>
                <a
                  href="#"
                  @click="(e) => handleAction(e, 'Cookie Policy')"
                  style="color: var(--bs-primary); text-decoration: none"
                >
                  🍪 Cookie Policy
                </a>
                <a
                  href="#"
                  @click="(e) => handleAction(e, 'Gestisci consensi')"
                  style="color: var(--bs-primary); text-decoration: none"
                >
                  ⚙️ Gestisci consensi
                </a>
              </div>
            </div>
          </div>
        </div>
      </it-popover>
      .
    </p>
  </section>

  <!-- Eventi -->
  <section style="margin-bottom: 2rem">
    <h2>Eventi</h2>
    <p>Il componente emette eventi quando viene aperto e chiuso.</p>
    <it-popover placement="bottom-start" @it-popover-open="handlePopoverOpen" @it-popover-close="handlePopoverClose">
      <it-button slot="trigger" variant="primary" @click="handleTriggerClick">Popover con eventi</it-button>
      <div slot="content" class="popover">
        <div class="popover-inner">
          <h3 class="popover-header">Eventi del Popover</h3>
          <div class="popover-body">Apri e chiudi questo popover per vedere gli eventi nella console del browser.</div>
        </div>
      </div>
    </it-popover>
  </section>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'PopoverDemo',
  setup() {
    const popoverRef = ref(null);

    const handleTriggerClick = (e) => {
      if (e.currentTarget.tagName && e.currentTarget.tagName.toLowerCase() === 'a' && e.currentTarget.getAttribute('href') === '#') {
        e.preventDefault();
      }
      e.currentTarget.closest('it-popover')?.toggle();
    };

    const handleAction = (e, action) => {
      e.preventDefault();
      e.currentTarget.closest('it-popover')?.closePopover();
      console.log(`Azione selezionata: ${action}`);
    };

    const openPopover = () => {
      popoverRef.value?.openPopover();
    };

    const closePopover = () => {
      popoverRef.value?.closePopover();
    };

    const togglePopover = () => {
      popoverRef.value?.toggle();
    };

    const handlePopoverOpen = () => {
      console.log('✅ Popover aperto');
    };

    const handlePopoverClose = () => {
      console.log('❌ Popover chiuso');
    };

    return {
      popoverRef,
      handleTriggerClick,
      handleAction,
      openPopover,
      closePopover,
      togglePopover,
      handlePopoverOpen,
      handlePopoverClose,
    };
  },
};
</script>

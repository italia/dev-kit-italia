<template>
  <h1>it-popover</h1>

  <!-- Base -->
  <section>
    <h2>Base</h2>
    <p>Esempio base di popover con titolo e contenuto.</p>
    <it-popover>
      <it-button slot="trigger" variant="danger">Clicca per attivare/disattivare il popover</it-button>
      <div slot="content" class="popover" tabindex="-1">
        <div class="popover-inner">
          <h3 class="popover-header">Titolo del Popover</h3>
          <div class="popover-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue.</div>
        </div>
      </div>
    </it-popover>
  </section>

  <!-- Posizioni -->
  <section>
    <h2>Posizioni</h2>
    <p>Sono disponibili quattro posizioni principali: top, right, bottom e left.</p>
    <div class="flex p-0" style="gap: 1rem; flex-wrap: wrap">
      <it-popover placement="top">
        <it-button slot="trigger" variant="primary">Popover in alto</it-button>
        <div slot="content" class="popover" tabindex="-1">
          <div class="popover-inner">
            <h3 class="popover-header">Popover top</h3>
            <div class="popover-body">Questo popover viene visualizzato sopra l'elemento trigger.</div>
          </div>
        </div>
      </it-popover>

      <it-popover placement="right">
        <it-button slot="trigger" variant="primary">Popover a destra</it-button>
        <div slot="content" class="popover" tabindex="-1">
          <div class="popover-inner">
            <h3 class="popover-header">Popover right</h3>
            <div class="popover-body">Questo popover viene visualizzato a destra dell'elemento trigger.</div>
          </div>
        </div>
      </it-popover>

      <it-popover placement="bottom">
        <it-button slot="trigger" variant="primary">Popover in basso</it-button>
        <div slot="content" class="popover" tabindex="-1">
          <div class="popover-inner">
            <h3 class="popover-header">Popover bottom</h3>
            <div class="popover-body">Questo popover viene visualizzato sotto l'elemento trigger.</div>
          </div>
        </div>
      </it-popover>

      <it-popover placement="left">
        <it-button slot="trigger" variant="primary">Popover a sinistra</it-button>
        <div slot="content" class="popover" tabindex="-1">
          <div class="popover-inner">
            <h3 class="popover-header">Popover left</h3>
            <div class="popover-body">Questo popover viene visualizzato a sinistra dell'elemento trigger.</div>
          </div>
        </div>
      </it-popover>
    </div>
  </section>

  <!-- Titolo con icona e link -->
  <section>
    <h2>Titolo con icona e link</h2>
    <p>È possibile aggiungere un'icona nel titolo e un link nel contenuto.</p>
    <it-popover placement="top">
      <it-button slot="trigger" variant="primary">Popover con icona e link</it-button>
      <div slot="content" class="popover" tabindex="-1">
        <div class="popover-inner">
          <h3 class="popover-header">
            <it-icon name="it-info-circle" size="sm" style="margin-right: 0.5rem"></it-icon>
            Titolo del Popover
          </h3>
          <div class="popover-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue. Vestibulum ante ipsum
            primis in faucibus orci luctus.
            <a href="#" class="popover-inner-link">Vai al link</a>
          </div>
        </div>
      </div>
    </it-popover>
  </section>

  <!-- Elemento disabilitato -->
  <section>
    <h2>Elemento disabilitato</h2>
    <p>Per attivare un popover su elementi disabilitati, è necessario usare un elemento contenitore.</p>
    <span style="display: inline-block" tabindex="0">
      <it-popover placement="top">
        <it-button slot="trigger" disabled variant="primary">Pulsante disabilitato</it-button>
        <div slot="content" class="popover" tabindex="-1">
          <div class="popover-inner">
            <h3 class="popover-header">Popover disabilitato</h3>
            <div class="popover-body">
              Questo popover appare su un elemento disabilitato. È necessario usare un elemento contenitore.
            </div>
          </div>
        </div>
      </it-popover>
    </span>
  </section>

  <!-- Contenuto personalizzato -->
  <section>
    <h2>Contenuto personalizzato</h2>
    <p>Il popover può contenere qualsiasi tipo di contenuto HTML.</p>
    <it-popover placement="right">
      <it-button slot="trigger" variant="success">Popover con contenuto ricco</it-button>
      <div slot="content" class="popover" tabindex="-1" style="max-width: 400px">
        <div class="popover-inner">
          <h3 class="popover-header">
            <it-icon name="it-check-circle" size="sm" color="success" style="margin-right: 0.5rem"></it-icon>
            Contenuto Ricco
          </h3>
          <div class="popover-body">
            <p>Il popover può contenere qualsiasi tipo di contenuto HTML:</p>
            <ul>
              <li>Liste</li>
              <li>Link</li>
              <li>Immagini</li>
              <li>Form</li>
            </ul>
            <p>
              <it-button variant="primary" size="sm">Azione</it-button>
            </p>
          </div>
        </div>
      </div>
    </it-popover>
  </section>

  <!-- Controllo programmatico -->
  <section>
    <h2>Controllo programmatico</h2>
    <p>Il popover può essere controllato tramite JavaScript.</p>
    <div style="display: flex; flex-direction: column; gap: 1rem; align-items: flex-start">
      <div style="display: flex; gap: 0.5rem">
        <it-button variant="secondary" size="sm" @click="openPopover">Apri</it-button>
        <it-button variant="secondary" size="sm" @click="closePopover">Chiudi</it-button>
        <it-button variant="secondary" size="sm" @click="togglePopover">Toggle</it-button>
      </div>

      <it-popover ref="popoverRef" placement="bottom">
        <it-button slot="trigger" variant="primary">Popover controllato</it-button>
        <div slot="content" class="popover" tabindex="-1">
          <div class="popover-inner">
            <h3 class="popover-header">Controllo programmatico</h3>
            <div class="popover-body">
              Questo popover può essere controllato tramite i metodi <code>openPopover()</code>,
              <code>closePopover()</code> e <code>toggle()</code>.
            </div>
          </div>
        </div>
      </it-popover>
    </div>
  </section>

  <!-- Trigger personalizzato -->
  <section>
    <h2>Trigger personalizzato</h2>
    <p>Il popover può essere attivato da qualsiasi elemento HTML, non solo pulsanti.</p>
    <it-popover placement="top">
      <a href="#" slot="trigger" style="text-decoration: underline">Passa sopra o clicca questo link</a>
      <div slot="content" class="popover" tabindex="-1">
        <div class="popover-inner">
          <h3 class="popover-header">Trigger personalizzato</h3>
          <div class="popover-body">
            Il popover può essere attivato da qualsiasi elemento HTML, non solo da pulsanti. In questo caso è un link.
          </div>
        </div>
      </div>
    </it-popover>
  </section>

  <!-- Eventi -->
  <section>
    <h2>Eventi</h2>
    <p>Il componente emette eventi quando viene aperto e chiuso.</p>
    <it-popover placement="bottom" @it-popover-open="handlePopoverOpen" @it-popover-close="handlePopoverClose">
      <it-button slot="trigger" variant="primary">Popover con eventi</it-button>
      <div slot="content" class="popover" tabindex="-1">
        <div class="popover-inner">
          <h3 class="popover-header">Eventi del Popover</h3>
          <div class="popover-body">
            Apri e chiudi questo popover per vedere gli eventi nella console del browser.
          </div>
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

    const openPopover = () => {
      popoverRef.value?.openPopover();
    };

    const closePopover = () => {
      popoverRef.value?.closePopover();
    };

    const togglePopover = () => {
      popoverRef.value?.toggle();
    };

    const handlePopoverOpen = (e) => {
      console.log('Popover aperto', e);
    };

    const handlePopoverClose = (e) => {
      console.log('Popover chiuso', e);
    };

    return {
      popoverRef,
      openPopover,
      closePopover,
      togglePopover,
      handlePopoverOpen,
      handlePopoverClose,
    };
  },
};
</script>

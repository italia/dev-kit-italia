<script setup>
import { ref } from 'vue';

const backStatus = ref('');

const onBack = (event) => {
  event.preventDefault();
  backStatus.value = 'Navigazione indietro intercettata: la gestisce il tuo router.';
};
</script>

<template>
  <h1>Back</h1>

  <section>
    <h2>Link</h2>
    <it-back>
      <a href="#" class="go-back">
        <it-icon name="it-arrow-left" size="sm" color="primary"></it-icon>
        <span>Torna indietro</span>
      </a>
    </it-back>
  </section>

  <section>
    <h2>Pulsanti</h2>
    <div class="d-flex gap-3 flex-wrap">
      <it-back>
        <it-button variant="primary" class="go-back">
          <it-icon name="it-arrow-left" size="sm" color="inverse"></it-icon>
          <span>Torna indietro</span>
        </it-button>
      </it-back>

      <it-back>
        <it-button variant="primary" class="go-back">
          <it-icon name="it-arrow-up" size="sm" color="inverse"></it-icon>
          <span>Torna indietro</span>
        </it-button>
      </it-back>
    </div>
  </section>

  <section>
    <h2>Navigazione personalizzata</h2>
    <p>
      L'evento `it-back-navigate` è cancelable. Chiamando `event.preventDefault()` impedisci `window.history.back()` e
      puoi gestire la navigazione indietro secondo il router del tuo framework.
    </p>
    <it-back @it-back-navigate="onBack">
      <a href="#" class="go-back">
        <it-icon name="it-arrow-left" size="sm" color="primary"></it-icon>
        <span>Torna indietro</span>
      </a>
    </it-back>
    <p class="mt-3" style="font-size: 0.9rem" role="status" aria-live="polite">{{ backStatus }}</p>
  </section>
</template>

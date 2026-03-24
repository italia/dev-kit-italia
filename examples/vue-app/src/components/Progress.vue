<template>
  <h1>Progress</h1>

  <section>
    <h2>Barra di avanzamento</h2>
    <div class="d-flex flex-column gap-3">
      <it-progress type="bar" value="50" it-aria-label="Caricamento al 50%"></it-progress>

      <h3 class="mt-4">Con etichetta</h3>
      <it-progress type="bar" value="35" show-value it-aria-label="Progresso con etichetta">35%</it-progress>

      <h3 class="mt-4">Indeterminato</h3>
      <it-progress type="bar" indeterminate it-aria-label="Caricamento in corso"></it-progress>

      <h3 class="mt-4">Varianti di colore</h3>
      <it-progress type="bar" value="25" color="success" it-aria-label="Caricamento successo"></it-progress>
      <it-progress type="bar" value="50" color="warning" it-aria-label="Caricamento warning"></it-progress>
      <it-progress type="bar" value="75" color="danger" it-aria-label="Caricamento danger"></it-progress>
    </div>
  </section>

  <section>
    <h2>Donut</h2>
    <div class="row g-4">
      <div class="col-6">
        <p class="mb-2">Stato iniziale</p>
        <it-progress type="donut" value="0" it-aria-label="Caricamento 0%"></it-progress>
      </div>
      <div class="col-6">
        <p class="mb-2">Stato avanzamento</p>
        <it-progress type="donut" value="75" it-aria-label="Caricamento 75%"></it-progress>
      </div>
    </div>
  </section>

  <section>
    <h2>Spinner</h2>

    <h3 class="mt-4">Spinner base</h3>
    <div class="d-flex flex-wrap gap-4 align-items-center">
      <it-progress type="spinner" size="md" it-aria-label="Spinner standard"></it-progress>
      <it-progress type="spinner" active size="md" it-aria-label="Spinner attivo"></it-progress>
    </div>

    <h3 class="mt-4">Dimensioni dello spinner</h3>
    <div class="d-flex flex-wrap gap-4 align-items-center">
      <it-progress type="spinner" size="sm" it-aria-label="Spinner small"></it-progress>
      <it-progress type="spinner" size="lg" it-aria-label="Spinner large"></it-progress>
      <it-progress type="spinner" size="xl" it-aria-label="Spinner extra large"></it-progress>
    </div>

    <h3 class="mt-4">Spinner doppio</h3>
    <div class="d-flex flex-wrap gap-4 align-items-center">
      <it-progress type="spinner" double active size="md" it-aria-label="Spinner doppio attivo"></it-progress>
    </div>
  </section>

  <section>
    <h2>Button con Progress</h2>
    <div class="d-flex flex-wrap gap-3 align-items-center">
      <it-button variant="primary" disabled class="m-4">
        Label del pulsante
        <it-icon name="it-github" color="inverse"></it-icon>
        <it-progress type="bar" value="50" it-aria-label="Caricamento"></it-progress>
      </it-button>
      <it-button variant="secondary" disabled class="m-4">
        Label del pulsante
        <it-icon name="it-github" color="inverse"></it-icon>
        <it-progress type="bar" value="75" it-aria-label="Caricamento"></it-progress>
      </it-button>
    </div>
  </section>
</template>

<script setup></script>

<script setup>
const steps = [
  { label: 'Primo contenuto', icon: 'it-calendar' },
  { label: 'Secondo contenuto', icon: 'it-lock' },
  { label: 'Terzo contenuto', icon: 'it-settings' },
];

function logStepperEvent(event) {
  console.info(event.type, event.detail);
}
</script>

<template>
  <div
    class="stepper-examples"
    @it-stepper-change="logStepperEvent"
    @it-stepper-save="logStepperEvent"
    @it-stepper-confirm="logStepperEvent"
  >
    <h1>Stepper</h1>

    <section>
      <h2>Solo testo</h2>
      <it-stepper current="1" header-variant="text">
        <it-stepper-step v-for="(step, index) in steps" :key="step.label" :icon="step.icon">
          <span slot="label">{{ step.label }}</span>
          <div class="p-5 text-center border bg-light"><p class="m-0">Contenuto dello step {{ index + 1 }}</p></div>
        </it-stepper-step>
      </it-stepper>
    </section>

    <section>
      <h2>Testo e icone</h2>
      <it-stepper current="1" header-variant="icons">
        <it-stepper-step v-for="(step, index) in steps" :key="step.label" :icon="step.icon">
          <span slot="label">{{ step.label }}</span>
          <div class="p-5 text-center border bg-light"><p class="m-0">Contenuto dello step {{ index + 1 }}</p></div>
        </it-stepper-step>
      </it-stepper>
    </section>

    <section>
      <h2>Testo e numeri</h2>
      <it-stepper current="1" header-variant="numbers">
        <it-stepper-step v-for="(step, index) in steps" :key="step.label" :icon="step.icon">
          <span slot="label">{{ step.label }}</span>
          <div class="p-5 text-center border bg-light"><p class="m-0">Contenuto dello step {{ index + 1 }}</p></div>
        </it-stepper-step>
      </it-stepper>
    </section>

    <section>
      <h2>Navigazione degli step</h2>
      <it-stepper current="1" prev-label="Precedente" next-label="Successivo">
        <it-stepper-step v-for="(step, index) in steps" :key="step.label" :icon="step.icon">
          <span slot="label">{{ step.label }}</span>
          <div class="p-5 text-center border bg-light"><p class="m-0">Contenuto dello step {{ index + 1 }}</p></div>
        </it-stepper-step>
      </it-stepper>
    </section>

    <section>
      <h2>Progress bar</h2>
      <it-stepper current="1" mobile-progress="bar" mobile-progress-on-desktop>
        <it-stepper-step v-for="(step, index) in steps" :key="step.label" :icon="step.icon">
          <span slot="label">{{ step.label }}</span>
          <div class="p-5 text-center border bg-light"><p class="m-0">Contenuto dello step {{ index + 1 }}</p></div>
        </it-stepper-step>
      </it-stepper>
    </section>

    <section>
      <h2>Pallini</h2>
      <it-stepper current="1" mobile-progress="dots" mobile-progress-on-desktop>
        <it-stepper-step v-for="(step, index) in steps" :key="step.label" :icon="step.icon">
          <span slot="label">{{ step.label }}</span>
          <div class="p-5 text-center border bg-light"><p class="m-0">Contenuto dello step {{ index + 1 }}</p></div>
        </it-stepper-step>
      </it-stepper>
    </section>

    <section>
      <h2>Salva</h2>
      <it-stepper
        current="1"
        save-label="Salva"
        save-title="Vuoi salvare il progresso?"
        save-description="Potrai riprendere il flusso da questo punto in poi."
      >
        <it-stepper-step v-for="(step, index) in steps" :key="step.label" :icon="step.icon">
          <span slot="label">{{ step.label }}</span>
          <div class="p-5 text-center border bg-light"><p class="m-0">Contenuto dello step {{ index + 1 }}</p></div>
        </it-stepper-step>
      </it-stepper>
    </section>

    <section>
      <h2>Conferma</h2>
      <it-stepper current="1" show-confirm confirm-label="Conferma">
        <it-stepper-step v-for="(step, index) in steps" :key="step.label" :icon="step.icon">
          <span slot="label">{{ step.label }}</span>
          <div class="p-5 text-center border bg-light"><p class="m-0">Contenuto dello step {{ index + 1 }}</p></div>
        </it-stepper-step>
      </it-stepper>
    </section>

    <section class="bg-dark p-4">
      <h2 class="text-white">Sfondo scuro</h2>
      <it-stepper current="1" dark>
        <it-stepper-step v-for="(step, index) in steps" :key="step.label" :icon="step.icon">
          <span slot="label">{{ step.label }}</span>
          <div class="p-5 text-center border text-white"><p class="m-0">Contenuto dello step {{ index + 1 }}</p></div>
        </it-stepper-step>
      </it-stepper>
    </section>

    <section class="stepper-variant-stack bg-dark p-4">
      <h2 class="text-white">Sfondo scuro - varianti intestazione</h2>
      <it-stepper current="1" dark header-variant="text">
        <it-stepper-step v-for="(step, index) in steps" :key="step.label" :icon="step.icon">
          <span slot="label">{{ step.label }}</span>
          <div class="p-5 text-center border text-white"><p class="m-0">Contenuto dello step {{ index + 1 }}</p></div>
        </it-stepper-step>
      </it-stepper>
      <it-stepper current="1" dark header-variant="icons">
        <it-stepper-step v-for="(step, index) in steps" :key="step.label" :icon="step.icon">
          <span slot="label">{{ step.label }}</span>
          <div class="p-5 text-center border text-white"><p class="m-0">Contenuto dello step {{ index + 1 }}</p></div>
        </it-stepper-step>
      </it-stepper>
      <it-stepper current="1" dark header-variant="numbers">
        <it-stepper-step v-for="(step, index) in steps" :key="step.label" :icon="step.icon">
          <span slot="label">{{ step.label }}</span>
          <div class="p-5 text-center border text-white"><p class="m-0">Contenuto dello step {{ index + 1 }}</p></div>
        </it-stepper-step>
      </it-stepper>
    </section>
  </div>
</template>

<style scoped>
.stepper-examples {
  display: flex;
  flex-direction: column;
  gap: var(--bsi-spacing-xl, 2rem);
}

.stepper-variant-stack {
  display: flex;
  flex-direction: column;
  gap: var(--bsi-spacing-xl, 2rem);
}
</style>

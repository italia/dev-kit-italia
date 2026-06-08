<script>
  const steps = [
    { label: 'Primo contenuto', icon: 'it-calendar' },
    { label: 'Secondo contenuto', icon: 'it-lock' },
    { label: 'Terzo contenuto', icon: 'it-settings' },
  ];

  function logStepperEvent(event) {
    console.info(event.type, event.detail);
  }
</script>

<div
  class="stepper-examples"
  on:it-stepper-change={logStepperEvent}
  on:it-stepper-save={logStepperEvent}
  on:it-stepper-confirm={logStepperEvent}
>
  <h1>Stepper</h1>

  <section>
    <h2>Solo testo</h2>
    <it-stepper current="1" header-variant="text">
      {#each steps as step, index (step.label)}
        <it-stepper-step icon={step.icon}>
          <span slot="label">{step.label}</span>
          <div class="p-5 text-center border bg-light"><p class="m-0">Contenuto dello step {index + 1}</p></div>
        </it-stepper-step>
      {/each}
    </it-stepper>
  </section>

  <section>
    <h2>Testo e icone</h2>
    <it-stepper current="1" header-variant="icons">
      {#each steps as step, index (step.label)}
        <it-stepper-step icon={step.icon}>
          <span slot="label">{step.label}</span>
          <div class="p-5 text-center border bg-light"><p class="m-0">Contenuto dello step {index + 1}</p></div>
        </it-stepper-step>
      {/each}
    </it-stepper>
  </section>

  <section>
    <h2>Testo e numeri</h2>
    <it-stepper current="1" header-variant="numbers">
      {#each steps as step, index (step.label)}
        <it-stepper-step icon={step.icon}>
          <span slot="label">{step.label}</span>
          <div class="p-5 text-center border bg-light"><p class="m-0">Contenuto dello step {index + 1}</p></div>
        </it-stepper-step>
      {/each}
    </it-stepper>
  </section>

  <section>
    <h2>Navigazione degli step</h2>
    <it-stepper current="1" prev-label="Precedente" next-label="Successivo">
      {#each steps as step, index (step.label)}
        <it-stepper-step icon={step.icon}>
          <span slot="label">{step.label}</span>
          <div class="p-5 text-center border bg-light"><p class="m-0">Contenuto dello step {index + 1}</p></div>
        </it-stepper-step>
      {/each}
    </it-stepper>
  </section>

  <section>
    <h2>Progress bar</h2>
    <it-stepper current="1" mobile-progress="bar" mobile-progress-on-desktop>
      {#each steps as step, index (step.label)}
        <it-stepper-step icon={step.icon}>
          <span slot="label">{step.label}</span>
          <div class="p-5 text-center border bg-light"><p class="m-0">Contenuto dello step {index + 1}</p></div>
        </it-stepper-step>
      {/each}
    </it-stepper>
  </section>

  <section>
    <h2>Pallini</h2>
    <it-stepper current="1" mobile-progress="dots" mobile-progress-on-desktop>
      {#each steps as step, index (step.label)}
        <it-stepper-step icon={step.icon}>
          <span slot="label">{step.label}</span>
          <div class="p-5 text-center border bg-light"><p class="m-0">Contenuto dello step {index + 1}</p></div>
        </it-stepper-step>
      {/each}
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
      {#each steps as step, index (step.label)}
        <it-stepper-step icon={step.icon}>
          <span slot="label">{step.label}</span>
          <div class="p-5 text-center border bg-light"><p class="m-0">Contenuto dello step {index + 1}</p></div>
        </it-stepper-step>
      {/each}
    </it-stepper>
  </section>

  <section>
    <h2>Conferma</h2>
    <it-stepper current="1" show-confirm confirm-label="Conferma">
      {#each steps as step, index (step.label)}
        <it-stepper-step icon={step.icon}>
          <span slot="label">{step.label}</span>
          <div class="p-5 text-center border bg-light"><p class="m-0">Contenuto dello step {index + 1}</p></div>
        </it-stepper-step>
      {/each}
    </it-stepper>
  </section>

  <section class="bg-dark p-4">
    <h2 class="text-white">Sfondo scuro</h2>
    <it-stepper current="1" dark>
      {#each steps as step, index (step.label)}
        <it-stepper-step icon={step.icon}>
          <span slot="label">{step.label}</span>
          <div class="p-5 text-center border text-white"><p class="m-0">Contenuto dello step {index + 1}</p></div>
        </it-stepper-step>
      {/each}
    </it-stepper>
  </section>

  <section class="stepper-variant-stack bg-dark p-4">
    <h2 class="text-white">Sfondo scuro - varianti intestazione</h2>
    <it-stepper current="1" dark header-variant="text">
      {#each steps as step, index (step.label)}
        <it-stepper-step icon={step.icon}>
          <span slot="label">{step.label}</span>
          <div class="p-5 text-center border text-white"><p class="m-0">Contenuto dello step {index + 1}</p></div>
        </it-stepper-step>
      {/each}
    </it-stepper>
    <it-stepper current="1" dark header-variant="icons">
      {#each steps as step, index (step.label)}
        <it-stepper-step icon={step.icon}>
          <span slot="label">{step.label}</span>
          <div class="p-5 text-center border text-white"><p class="m-0">Contenuto dello step {index + 1}</p></div>
        </it-stepper-step>
      {/each}
    </it-stepper>
    <it-stepper current="1" dark header-variant="numbers">
      {#each steps as step, index (step.label)}
        <it-stepper-step icon={step.icon}>
          <span slot="label">{step.label}</span>
          <div class="p-5 text-center border text-white"><p class="m-0">Contenuto dello step {index + 1}</p></div>
        </it-stepper-step>
      {/each}
    </it-stepper>
  </section>
</div>

<style>
  .stepper-examples {
    display: flex;
    flex-direction: column;
    gap: var(--bsi-spacing-xl, 2rem);
  }

  .stepper-variant-stack {
    display: flex;
    flex-direction: column;
    gap: var(--bsi-spacing-xl);
  }
</style>

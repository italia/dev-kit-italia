<script>
  const steps = [
    { label: 'Primo contenuto', icon: 'it-calendar' },
    { label: 'Secondo contenuto', icon: 'it-lock' },
    { label: 'Terzo contenuto', icon: 'it-settings' },
    { label: 'Quarto contenuto', icon: 'it-mail' },
    { label: 'Quinto contenuto', icon: 'it-file' },
    { label: 'Sesto contenuto', icon: 'it-check' },
  ];

  const headerSteps = steps.slice(0, 3);

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
    <h2>Anteprima e attributi del componente</h2>
    <it-stepper current="1" total-steps="6">
      {#each steps as step, index (step.label)}
        <it-stepper-step label={step.label} icon={step.icon}>
          <p>Contenuto dello step {index + 1}</p>
        </it-stepper-step>
      {/each}
    </it-stepper>
  </section>

  <section class="stepper-example-stack">
    <h2>Intestazione</h2>
    <it-stepper current="1" total-steps="3" header-variant="text" hide-content hide-nav>
      {#each headerSteps as step, index (step.label)}
        <it-stepper-step label={step.label} icon={step.icon}>
          <p>Contenuto dello step {index + 1}</p>
        </it-stepper-step>
      {/each}
    </it-stepper>
    <it-stepper current="1" total-steps="3" header-variant="icons" hide-content hide-nav>
      {#each headerSteps as step, index (step.label)}
        <it-stepper-step label={step.label} icon={step.icon}>
          <p>Contenuto dello step {index + 1}</p>
        </it-stepper-step>
      {/each}
    </it-stepper>
    <it-stepper current="1" total-steps="3" header-variant="numbers" hide-content hide-nav>
      {#each headerSteps as step, index (step.label)}
        <it-stepper-step label={step.label} icon={step.icon}>
          <p>Contenuto dello step {index + 1}</p>
        </it-stepper-step>
      {/each}
    </it-stepper>
  </section>

  <section class="stepper-example-stack">
    <h2>Navigazione e avanzamento</h2>
    <it-stepper current="1" total-steps="6" mobile-progress="bar" mobile-progress-on-desktop hide-header>
      {#each steps as step, index (step.label)}
        <it-stepper-step label={step.label} icon={step.icon}>
          <p>Contenuto dello step {index + 1}</p>
        </it-stepper-step>
      {/each}
    </it-stepper>
    <it-stepper current="1" total-steps="6" mobile-progress="dots" mobile-progress-on-desktop hide-header>
      {#each steps as step, index (step.label)}
        <it-stepper-step label={step.label} icon={step.icon}>
          <p>Contenuto dello step {index + 1}</p>
        </it-stepper-step>
      {/each}
    </it-stepper>
  </section>

  <section>
    <h2>Salva</h2>
    <it-stepper current="1" total-steps="6" save-label="Salva" hide-header>
      {#each steps as step, index (step.label)}
        <it-stepper-step label={step.label} icon={step.icon}>
          <p>Contenuto dello step {index + 1}</p>
        </it-stepper-step>
      {/each}
    </it-stepper>
  </section>

  <section>
    <h2>Conferma</h2>
    <it-stepper current="1" total-steps="6" show-confirm hide-header>
      {#each steps as step, index (step.label)}
        <it-stepper-step label={step.label} icon={step.icon}>
          <p>Contenuto dello step {index + 1}</p>
        </it-stepper-step>
      {/each}
    </it-stepper>
  </section>

  <section class="stepper-example-stack stepper-dark-demo">
    <h2 class="text-white">Sfondo scuro</h2>
    <it-stepper current="1" total-steps="6" dark>
      {#each steps as step, index (step.label)}
        <it-stepper-step label={step.label} icon={step.icon}>
          <p>Contenuto dello step {index + 1}</p>
        </it-stepper-step>
      {/each}
    </it-stepper>
    <it-stepper current="1" total-steps="3" dark header-variant="text" hide-content hide-nav>
      {#each headerSteps as step, index (step.label)}
        <it-stepper-step label={step.label} icon={step.icon}>
          <p>Contenuto dello step {index + 1}</p>
        </it-stepper-step>
      {/each}
    </it-stepper>
    <it-stepper current="1" total-steps="3" dark header-variant="icons" hide-content hide-nav>
      {#each headerSteps as step, index (step.label)}
        <it-stepper-step label={step.label} icon={step.icon}>
          <p>Contenuto dello step {index + 1}</p>
        </it-stepper-step>
      {/each}
    </it-stepper>
    <it-stepper current="1" total-steps="3" dark header-variant="numbers" hide-content hide-nav>
      {#each headerSteps as step, index (step.label)}
        <it-stepper-step label={step.label} icon={step.icon}>
          <p>Contenuto dello step {index + 1}</p>
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

  .stepper-example-stack {
    display: flex;
    flex-direction: column;
    gap: var(--bsi-spacing-xl, 2rem);
  }

  .stepper-examples :global(it-stepper::part(content)) {
    display: flex;
    min-height: 9rem;
    align-items: center;
    justify-content: center;
    border: 1px dashed var(--bsi-color-border-subtle, var(--bsi-border-color));
    background: var(--bsi-color-background-secondary-lighter, var(--bsi-body-bg));
    color: var(--bsi-body-color);
    text-align: center;
  }

  .stepper-examples :global(it-stepper-step p) {
    margin: 0;
    font-size: var(--bsi-font-size-sm);
  }

  .stepper-dark-demo {
    padding: var(--bsi-spacing-l, 1.5rem);
    background: var(--bsi-color-background-inverse, #17324d);
  }

  .stepper-dark-demo :global(it-stepper::part(content)) {
    border-color: var(--bsi-color-border-inverse, var(--bsi-color-border-subtle));
    background: transparent;
    color: var(--bsi-color-text-inverse, #fff);
  }
</style>

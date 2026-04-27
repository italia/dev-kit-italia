<script>
  import { onMount } from 'svelte';

  let tooltipControlled;

  const handleLinkClick = (e) => {
    e.preventDefault();
  };

  const handleTooltipOpen = (e) => {
    console.log('Tooltip aperto', e);
  };

  const handleTooltipClose = (e) => {
    console.log('Tooltip chiuso', e);
  };

  const handleShowTooltip = () => {
    tooltipControlled?.showTooltip();
  };

  const handleHideTooltip = () => {
    tooltipControlled?.hideTooltip();
  };
</script>

<h1>Tooltip</h1>

<!-- Base -->
<section style="margin-bottom: 2rem">
  <h2>Base</h2>
  <div style="padding: 30px 0; text-align: center">
    <it-tooltip placement="top">
      <it-button slot="trigger" variant="primary">Mostra tooltip</it-button>
      <span slot="content">Testo del tooltip</span>
    </it-tooltip>
  </div>
</section>

<!-- Su link e testo -->
<section style="margin-bottom: 2rem">
  <h2>Su link e testo</h2>
  <p style="max-width: 400px; line-height: 2">
    Il tooltip può essere usato su qualsiasi elemento interattivo, come i
    <it-tooltip placement="top">
      <!-- svelte-ignore a11y-invalid-attribute -->
      <a slot="trigger" href="#" on:click={handleLinkClick}>link in una frase</a>
      <span slot="content">Primo link con tooltip</span>
    </it-tooltip>
    di testo, per fornire informazioni contestuali senza occupare spazio nella pagina. Basta passare il mouse o
    portare il focus su un
    <it-tooltip placement="top">
      <!-- svelte-ignore a11y-invalid-attribute -->
      <a slot="trigger" href="#" on:click={handleLinkClick}>elemento con tooltip</a>
      <span slot="content">Secondo link con tooltip</span>
    </it-tooltip>
    per vedere l'etichetta comparire.
  </p>
</section>

<!-- Posizione -->
<section style="margin-bottom: 2rem">
  <h2>Posizione</h2>
  <div style="display: grid; gap: .5rem; grid-template: 1fr 1fr 1fr / 1fr 1fr 1fr; place-items: center">
    <it-tooltip placement="bottom" style="grid-column: 2; grid-row: 1">
      <it-button slot="trigger" variant="primary">Giù</it-button>
      <span slot="content">Tooltip in basso</span>
    </it-tooltip>
    <it-tooltip placement="top" style="grid-column: 2; grid-row: 3">
      <it-button slot="trigger" variant="primary">Su</it-button>
      <span slot="content">Tooltip in alto</span>
    </it-tooltip>
    <it-tooltip placement="right" style="grid-column: 1; grid-row: 2">
      <it-button slot="trigger" variant="primary">Destra</it-button>
      <span slot="content">Tooltip a destra</span>
    </it-tooltip>
    <it-tooltip placement="left" style="grid-column: 3; grid-row: 2">
      <it-button slot="trigger" variant="primary">Sinistra</it-button>
      <span slot="content">Tooltip a sinistra</span>
    </it-tooltip>
  </div>
</section>

<!-- Testo formattato -->
<section style="margin-bottom: 2rem">
  <h2>Testo formattato</h2>
  <it-tooltip placement="right">
    <it-button slot="trigger" variant="primary">Mostra tooltip</it-button>
    <span slot="content"><em>Tooltip</em> <u>con</u> <strong>HTML</strong></span>
  </it-tooltip>
</section>

<!-- Attivazione controllata -->
<section style="margin-bottom: 2rem">
  <h2>Attivazione controllata</h2>
  <div style="display: flex; gap: 1rem; align-items: flex-start; height: 70px">
    <it-tooltip placement="bottom" controlled bind:this={tooltipControlled}>
      <it-button slot="trigger" variant="primary">Target</it-button>
      <span slot="content">Tooltip controllato</span>
    </it-tooltip>
    <button
      class="btn btn-secondary"
      on:mouseenter={handleShowTooltip}
      on:mouseleave={handleHideTooltip}
    >
      Hover qui per mostrare il tooltip
    </button>
  </div>
</section>

<!-- Eventi -->
<section style="margin-bottom: 2rem">
  <h2>Eventi</h2>
  <it-tooltip
    placement="right"
    on:it-tooltip-open={handleTooltipOpen}
    on:it-tooltip-close={handleTooltipClose}
  >
    <it-button slot="trigger" variant="primary">Hover o focus</it-button>
    <span slot="content">Tooltip con eventi</span>
  </it-tooltip>
</section>

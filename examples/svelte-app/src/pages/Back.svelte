<h1>Back</h1>

<section>
  <h2>Link</h2>
  <a href="#" class="go-back" on:click|preventDefault={() => window.history.back()}>
    <it-icon name="it-arrow-left" size="sm" color="primary"></it-icon>
    <span>Back</span>
  </a>
</section>

<section>
  <h2>Pulsanti</h2>
  <it-button variant="primary" class="go-back" icon on:click={() => window.history.back()}>
    <it-icon name="it-arrow-left" size="sm" color="inverse"></it-icon>
    <span>Back</span>
  </it-button>

  <it-button variant="primary" class="go-back" icon on:click={() => window.history.back()}>
    <it-icon name="it-arrow-up" size="sm" color="inverse"></it-icon>
    <span>Back</span>
  </it-button>
</section>

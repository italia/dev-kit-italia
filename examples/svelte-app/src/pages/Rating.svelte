<script lang="ts">
  let requiredRating = '';
  let formRating = '';
  let comment = '';

  function handleRequiredSubmit(e: Event) {
    e.preventDefault();
    console.log(`Rating selezionato: ${requiredRating}`);
    alert(`Rating selezionato: ${requiredRating}`);
  }

  function handleReviewSubmit(e: Event) {
    e.preventDefault();
    console.log(`Form inviato! Rating: ${formRating} Commento: ${comment}`);
    alert(`Form inviato! Rating: ${formRating} Commento: ${comment}`);
  }

  function handleReviewReset() {
    formRating = '';
    comment = '';
  }
</script>

<h1>Rating</h1>

<section class="mb-5">
  <h2>Con valore preimpostato</h2>
  <div style="display: flex; justify-content: center;">
    <it-rating name="rating-preset" value="3">
      <span slot="label">Valutazione</span>
      <it-rating-item value="1"><span slot="label">1 stella</span></it-rating-item>
      <it-rating-item value="2"><span slot="label">2 stelle</span></it-rating-item>
      <it-rating-item value="3" checked><span slot="label">3 stelle</span></it-rating-item>
      <it-rating-item value="4"><span slot="label">4 stelle</span></it-rating-item>
      <it-rating-item value="5"><span slot="label">5 stelle</span></it-rating-item>
    </it-rating>
  </div>
</section>

<section class="mb-5">
  <h2>Sola lettura</h2>
  <div style="display: flex; justify-content: center;">
    <it-rating name="rating-readonly" value="4" read-only>
      <span slot="label">Sola lettura</span>
      <it-rating-item value="1"><span slot="label">1 stella</span></it-rating-item>
      <it-rating-item value="2"><span slot="label">2 stelle</span></it-rating-item>
      <it-rating-item value="3"><span slot="label">3 stelle</span></it-rating-item>
      <it-rating-item value="4" checked><span slot="label">4 stelle</span></it-rating-item>
      <it-rating-item value="5"><span slot="label">5 stelle</span></it-rating-item>
    </it-rating>
  </div>
  <p class="mt-3">Valutazione 4 stelle su 5</p>
</section>

<section class="mb-5">
  <h2>Con icone personalizzate</h2>
  <div style="display: flex; justify-content: center;">
    <it-rating name="rating-check" value="4" icon="it-check-circle">
      <span slot="label">Valutazione con check</span>
      <it-rating-item value="1" icon="it-check-circle"><span slot="label">1 check</span></it-rating-item>
      <it-rating-item value="2" icon="it-check-circle"><span slot="label">2 check</span></it-rating-item>
      <it-rating-item value="3" icon="it-check-circle"><span slot="label">3 check</span></it-rating-item>
      <it-rating-item value="4" icon="it-check-circle" checked><span slot="label">4 check</span></it-rating-item>
      <it-rating-item value="5" icon="it-check-circle"><span slot="label">5 check</span></it-rating-item>
    </it-rating>
  </div>
</section>

<section class="mb-5">
  <h2>Obbligatorio</h2>
  <div style="display: flex; justify-content: center;">
    <form on:submit={handleRequiredSubmit}>
      <it-rating
        name="rating-required"
        required
        value={requiredRating}
        on:change={(e) => (requiredRating = e.target.value)}
      >
        <span slot="label">Valutazione (obbligatoria)</span>
        <it-rating-item value="1"><span slot="label">1 stella</span></it-rating-item>
        <it-rating-item value="2"><span slot="label">2 stelle</span></it-rating-item>
        <it-rating-item value="3"><span slot="label">3 stelle</span></it-rating-item>
        <it-rating-item value="4"><span slot="label">4 stelle</span></it-rating-item>
        <it-rating-item value="5"><span slot="label">5 stelle</span></it-rating-item>
      </it-rating>
      <it-button type="submit" class="btn btn-primary mt-3">Invia</it-button>
    </form>
  </div>
</section>

<section class="mb-5">
  <h2>Integrazione con form</h2>
  <div style="display: flex; justify-content: center;">
    <form on:submit={handleReviewSubmit} on:reset={handleReviewReset}>
      <div class="mb-4">
        <it-rating name="rating" required value={formRating} on:change={(e) => (formRating = e.target.value)}>
          <span slot="label">Valuta questo servizio (obbligatorio)</span>
          <it-rating-item value="1"><span slot="label">1 stella</span></it-rating-item>
          <it-rating-item value="2"><span slot="label">2 stelle</span></it-rating-item>
          <it-rating-item value="3"><span slot="label">3 stelle</span></it-rating-item>
          <it-rating-item value="4"><span slot="label">4 stelle</span></it-rating-item>
          <it-rating-item value="5"><span slot="label">5 stelle</span></it-rating-item>
        </it-rating>
      </div>

      <div class="mb-4">
        <div class="form-group">
          <label for="comment">Commento</label>
          <textarea id="comment" name="comment" class="form-control" rows="3" required bind:value={comment}></textarea>
        </div>
      </div>

      <it-button type="submit" class="btn btn-primary">Invia recensione</it-button>
      <it-button type="reset" class="btn btn-outline-primary ms-2">Reset</it-button>
    </form>
  </div>
</section>

<script lang="ts">
  function handleForwardClick(e: MouseEvent) {
    e.preventDefault();
    const link = e.currentTarget as HTMLAnchorElement;
    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId || '');
    if (targetElement) {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      targetElement.scrollIntoView({ 
        behavior: prefersReducedMotion ? 'auto' : 'smooth', 
        block: 'start' 
      });
    }
  }
</script>

<div class="container my-4">
  <h1>Forward</h1>

  <section class="mb-5">
    <h2>Esempio base</h2>
    <p class="mb-4">Clicca sull'icona per scorrere automaticamente alla sezione di destinazione.</p>
    <a href="#sezione-esempio" class="forward" aria-label="Vai a: Sezione di esempio" on:click={handleForwardClick}>
      <it-icon name="it-expand" size="lg" color="primary"></it-icon>
    </a>
  </section>

  <div style="height: 100vh; background: linear-gradient(to bottom, #f0f6fc, #e6f0fa);">
    <div class="container py-5">
      <h3>Contenuto intermedio</h3>
      <p>
        Questo è un contenuto che separa il link Forward dalla sezione di destinazione. L'animazione scorrerà
        automaticamente fino alla sezione target quando si clicca sul link sopra.
      </p>
    </div>
  </div>

  <div id="sezione-esempio" class="container my-5 py-5" style="background: #fff3cd; border-radius: 8px;">
    <h2>Sezione di esempio</h2>
    <p>
      Et et consectetur ipsum labore excepteur est proident excepteur ad velit occaecat qui minim occaecat veniam.
      Fugiat veniam incididunt anim aliqua enim pariatur veniam sunt est aute sit dolor anim.
    </p>
    <p>
      Velit non irure adipisicing aliqua ullamco irure incididunt irure non esse consectetur nostrud minim non minim
      occaecat. Amet duis do nisi duis veniam non est eiusmod tempor incididunt tempor dolor ipsum in qui sit.
    </p>
  </div>

  <section class="my-5">
    <h2>Seconda sezione</h2>
    <p class="mb-4">Altro esempio di navigazione con Forward.</p>
    <a href="#sezione-target" class="forward" aria-label="Vai a: Sezione target" on:click={handleForwardClick}>
      <it-icon name="it-expand" size="lg" color="primary"></it-icon>
    </a>
  </section>

  <div style="height: 120vh; background: linear-gradient(to bottom, #e6f0fa, #d1e7f7);">
    <div class="container py-5">
      <h3>Contenuto intermedio più lungo</h3>
      <p>Anche qui lo scroll sarà automatico e fluido.</p>
    </div>
  </div>

  <div id="sezione-target" class="container my-5 py-5" style="background: #d1ecf1; border-radius: 8px;">
    <h2>Sezione target</h2>
    <p>
      Nulla est ullamco ut irure incididunt nulla Lorem Lorem minim irure officia enim reprehenderit. Magna duis labore
      cillum sint adipisicing exercitation ipsum.
    </p>
  </div>
</div>

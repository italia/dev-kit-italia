<template>
  <div class="container my-4">
    <h1>Forward</h1>

    <section class="mb-5">
      <h2>Esempio base</h2>
      <p class="mb-4">Clicca sull'icona per scorrere automaticamente alla sezione di destinazione.</p>
      <it-forward>
        <a href="#sezione-esempio" class="forward" aria-label="Vai a: Sezione di esempio">
          <it-icon name="it-expand" size="lg" color="primary"></it-icon>
        </a>
      </it-forward>
    </section>

    <div style="height: 100vh; background: linear-gradient(to bottom, #f0f6fc, #e6f0fa)">
      <div class="container py-5">
        <h3>Contenuto intermedio</h3>
        <p>
          Questo è un contenuto che separa il link Forward dalla sezione di destinazione. L'animazione scorrerà
          automaticamente fino alla sezione target quando si clicca sul link sopra.
        </p>
      </div>
    </div>

    <div id="sezione-esempio" class="container my-5 py-5" style="background: #fff3cd; border-radius: 8px">
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
      <it-forward>
        <a href="#sezione-target" class="forward" aria-label="Vai a: Sezione target">
          <it-icon name="it-expand" size="lg" color="primary"></it-icon>
        </a>
      </it-forward>
    </section>

    <section class="my-5">
      <h2>Navigazione personalizzata</h2>
      <p class="mb-4">
        L'evento `it-forward-navigate` è cancelable. Chiamando `event.preventDefault()` puoi intercettare lo
        scorrimento e gestire la navigazione in autonomia, richiamando poi `navigateTo(target)` quando opportuno.
      </p>
      <it-forward @it-forward-navigate="onNavigate">
        <a href="#sezione-personalizzata" class="forward" aria-label="Vai a: Sezione personalizzata">
          <it-icon name="it-expand" size="lg" color="primary"></it-icon>
        </a>
      </it-forward>
      <p class="mt-3" style="font-size: 0.9rem" role="status" aria-live="polite">{{ navigateStatus }}</p>
    </section>

    <div style="height: 120vh; background: linear-gradient(to bottom, #e6f0fa, #d1e7f7)">
      <div class="container py-5">
        <h3>Contenuto intermedio più lungo</h3>
        <p>Anche qui lo scroll sarà automatico e fluido.</p>
      </div>
    </div>

    <div id="sezione-target" class="container my-5 py-5" style="background: #d1ecf1; border-radius: 8px">
      <h2>Sezione target</h2>
      <p>
        Nulla est ullamco ut irure incididunt nulla Lorem Lorem minim irure officia enim reprehenderit. Magna duis
        labore cillum sint adipisicing exercitation ipsum.
      </p>
    </div>

    <div style="height: 100vh; background: linear-gradient(to bottom, #d1ecf1, #c8e6f0)">
      <div class="container py-5">
        <h3>Contenuto intermedio</h3>
        <p>Spazio aggiuntivo per separare le sezioni.</p>
      </div>
    </div>

    <div id="sezione-personalizzata" class="container my-5 py-5" style="background: #d4edda; border-radius: 8px">
      <h2>Sezione personalizzata</h2>
      <p>
        Et et consectetur ipsum labore excepteur est proident excepteur ad velit occaecat qui minim occaecat veniam.
        Fugiat veniam incididunt anim aliqua enim pariatur veniam sunt est aute sit dolor anim.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Forward',
  data() {
    return {
      navigateStatus: '',
    };
  },
  methods: {
    onNavigate(e) {
      e.preventDefault();
      this.navigateStatus = `Navigazione intercettata verso "${e.detail.href}". Scorro io…`;
      if (e.detail.target) {
        e.currentTarget.navigateTo(e.detail.target);
      }
    },
  },
};
</script>

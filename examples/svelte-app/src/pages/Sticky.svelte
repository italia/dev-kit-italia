<script>
  function handleResize(event) {
    const container = event.target.closest('section').querySelector('.container-resizable');
    if (container) {
      container.style.width = `${event.target.value}px`;
      container.getBoundingClientRect();
    }
  }
</script>

<h1>it-sticky</h1>
<div style="height: 4000px; background: linear-gradient(#eee, #ccc); padding: 20px;">
  
  <section>
    <h2>Esempio componente it-sticky</h2>
    <p>Scrollare la pagina per vedere l'effetto sticky</p>
    <it-sticky class="w-100 bg-primary p-2 text-white">
      <div class="w-100">Elemento sticky</div>
    </it-sticky>
  </section>

  <div style="height: 800px;"></div>

  <section>
    <h2>Esempio componente it-sticky: position-top offset</h2>
    <p>Scrollare la pagina per vedere l'effetto sticky con offset</p>
    <it-sticky class="w-100 bg-primary p-2 text-white" padding-top="50">
      <div class="w-100">Elemento sticky con top offset</div>
    </it-sticky>
  </section>

  <div style="height: 800px;"></div>

  <section>
    <h2>Esempio componente it-sticky: position-type fixed</h2>
    <p>Scrollare la pagina per vedere l'effetto sticky: vedrai applicate la classi bg-warning w-100 l-0 fornite a sticky-class-name</p>
    <it-sticky 
      sticky-class-name="bg-warning w-100 l-0" 
      position-type="fixed" 
      class="w-100 bg-primary p-2 text-white"
    >
      <div class="w-100">Elemento sticky Fixed</div>
    </it-sticky>
  </section>

  <div style="height: 800px;"></div>

  <section>
    <h2>Esempio componente it-sticky: stackable</h2>
    <p>Scrollare la pagina per vedere l'effetto sticky: vedrai il componenti impilarsi uno sopra l'altro, e l'ultimo mantenere il suo top offset di 50px</p>
    
    <it-sticky class="bg-primary p-2 text-white w-100" stackable>
      <div>Elemento sticky stackable</div>
    </it-sticky>
    
    <div style="height: 500px;"></div>
    
    <it-sticky class="bg-success p-2 text-white w-100" stackable>
      <div>Elemento sticky stackable</div>
    </it-sticky>
    
    <div style="height: 500px;"></div>
    
    <it-sticky class="bg-danger p-2 text-white w-100" stackable>
      <div>Elemento sticky stackable</div>
    </it-sticky>
    
    <div style="height: 500px;"></div>
    
    <it-sticky class="bg-warning p-2 text-white w-100" stackable padding-top="50">
      <div>Elemento sticky stackable con top offset 50px</div>
    </it-sticky>
  </section>

  <div style="height: 800px;"></div>

  <section>
    <h2>Sticky impilabili con resize</h2>
    <p>Questo esempio mostra più componenti it-sticky con attributo stackable e la gestione dei resize del suo contenitore (ie media query).</p>
    
    <div style="container-type: inline-size; height: 100%; transition: width 0.3s; padding: 1rem;">
      <label for="size">Seleziona la larghezza del contenuto:</label>
      <select
        id="size"
        name="size"
        on:change={handleResize}
      >
        <option value="1200">1200px</option>
        <option value="1000">1000px</option>
        <option value="800">800px</option>
        <option value="600">600px</option>
        <option value="400">400px</option>
      </select>

      <div class="container-resizable" style="width: 1200px; transition: width 0.3s;">
        <it-sticky class="bg-primary p-2 text-white w-100" stackable>
          <div class="resizable-content">Sticky Stackable 1</div>
        </it-sticky>

        <div style="height: 500px;"></div>

        <it-sticky class="bg-success p-2 text-white w-100" stackable>
          <div class="resizable-content">Sticky Stackable 2</div>
        </it-sticky>

        <div style="height: 500px;"></div>

        <it-sticky class="bg-danger p-2 text-white w-100" stackable>
          <div class="resizable-content">Sticky Stackable 3</div>
        </it-sticky>
      </div>
    </div>
  </section>

</div>

<style>
  :global(.resizable-content) {
    height: 40px;
    transition: height 0.3s;
  }

  @container (max-width: 1200px) {
    :global(.resizable-content) {
      height: 40px;
    }
  }
  @container (max-width: 1000px) {
    :global(.resizable-content) {
      height: 60px;
    }
  }
  @container (max-width: 800px) {
    :global(.resizable-content) {
      height: 80px;
    }
  }
  @container (max-width: 500px) {
    :global(.resizable-content) {
      height: 100px;
    }
  }

  :global(.l-0) {
    left: 0 !important;
  }
</style>

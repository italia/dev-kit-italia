<script>
  import Router from './Router.svelte';
  import svelteLogo from './assets/svelte.svg';
  import viteLogo from '/vite.svg';
</script>

<main>
  <div class="app-header">
    <div>
      <a href="https://vite.dev" target="_blank" rel="noreferrer">
        <img src={viteLogo} class="logo" alt="Vite Logo" />
      </a>
      <a href="https://svelte.dev" target="_blank" rel="noreferrer">
        <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
      </a>
    </div>
    <div>Vite + Svelte</div>
    <nav class="app-nav">
      <a href="#/button">Button</a>
      <a href="#/dropdown">Dropdown</a>
      <a href="#/form">Form</a>
      <a href="#/icon">Icon</a>
      <a href="#/input">Input</a>
      <a href="#/section">Section</a>
      <a href="#/video">Video</a>
    </nav>
  </div>
  <Router />
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }

  .app-header {
    border-bottom: 1px solid currentColor;
    margin-bottom: 2rem;
  }

  .app-nav {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin: 1rem 0;
  }

  section {
    margin: 4rem 0;
  }

  .flex {
    display: flex;
    align-items: start;
    padding: 0.3rem 0;
    gap: 0.6rem;
  }
</style>

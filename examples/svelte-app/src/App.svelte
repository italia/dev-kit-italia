<script>
  import Router from './Router.svelte';
  import Footer from './components/Footer.svelte';
  import svelteLogo from './assets/svelte.svg';
  import viteLogo from '/vite.svg';
</script>

<main>
  <div class="app-header">
    <div>
      <a href="https://vite.dev" target="_blank">
        <img src={viteLogo} class="logo" alt="Vite logo" />
      </a>
      <a href="https://svelte.dev" target="_blank" rel="noreferrer">
        <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
      </a>
    </div>
    <div>Vite + Svelte</div>
    <nav class="app-nav">
      <a href="#/accordion">Accordion</a>
      <a href="#/affix">Affix</a>
      <a href="#/avatar">Avatar</a>
      <a href="#/badge">Badge</a>
      <a href="#/button">Button</a>
      <a href="#/checkbox">Checkbox</a>
      <a href="#/chip">Chip</a>
      <a href="#/collapse">Collapse</a>
      <a href="#/dropdown">Dropdown</a>
      <a href="#/form">Form</a>
      <a href="#/icon">Icon</a>
      <a href="#/input">Input</a>
      <a href="#/radio">Radio</a>
      <a href="#/section">Section</a>
      <a href="#/skiplinks">Skiplinks</a>
      <a href="#/sticky">Sticky</a>
      <a href="#/video">Video</a>
    </nav>
  </div>
  <div class="container mb-4">
    <Router />
  </div>
  <Footer />
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

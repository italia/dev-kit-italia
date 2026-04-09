<script>
  import Router from './Router.svelte';
  import Footer from './components/Footer.svelte';
  import svelteLogo from './assets/svelte.svg';
  import viteLogo from '/vite.svg';
  import { AppRoutes } from './routes';
</script>

<main>
  <header class="app-header bg-primary">
    <div>
      <a href="https://vite.dev" target="_blank">
        <img src={viteLogo} class="logo" alt="Vite logo" />
      </a>
      <a href="https://svelte.dev" target="_blank" rel="noreferrer">
        <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
      </a>
    </div>
    <div class="container">
      <nav class="navbar navbar-expand-lg" aria-label="Menu principale">
        <div class="navbar-collapsable" id="navbar-A" tabindex="-1">
          <div class="menu-wrapper justify-content-lg-between">
            <ul class="navbar-nav">
              <li class="nav-item">
                <it-megamenu label="Componenti" columns="6">
                  <!-- DROPDOWN LINKS ITEMS -->
                  {#each AppRoutes as route}
                    <it-dropdown-item href="#{route.path}">
                      <it-icon slot="prefix" name="it-arrow-right-triangle" size="sm" color="primary"></it-icon>
                      {route.title}
                    </it-dropdown-item>
                  {/each}
                </it-megamenu>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
  <main class="container mb-4">
    <Router />
  </main>
  <Footer />
  <it-back-to-top it-aria-label="Torna su" border></it-back-to-top>
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

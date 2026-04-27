<script setup>
import { AppRoutes } from './routes';
import Footer from './components/Footer.vue';
</script>

<template>

    <header class="app-header bg-primary">
      <div class="container">
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src="/vite.svg" class="logo" alt="Vite logo" />
          </a>
          <a href="https://vuejs.org/" target="_blank">
            <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
          </a>
        </div>

        <nav class="navbar navbar-expand-lg" aria-label="Menu principale">
          <div class="navbar-collapsable" id="navbar-A" tabindex="-1">
            <div class="menu-wrapper justify-content-lg-between">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <it-megamenu label="Componenti" columns="6">
                      <!-- DROPDOWN LINKS ITEMS -->
                      <it-dropdown-item v-for="route in AppRoutes" :key="route.path" :href="route.path">
                        <it-icon slot="prefix" name="it-arrow-right-triangle" size="sm" color="primary" ></it-icon>
                        {{ route.name }}
                      </it-dropdown-item>
                    </it-megamenu>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>

  <main class="container my-4">
    <router-view></router-view>
  </main>
  <Footer />
  <it-back-to-top it-aria-label="Torna su" border></it-back-to-top>
</template>


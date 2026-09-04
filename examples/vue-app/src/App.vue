<script setup>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { AppRoutes } from './routes';
import Footer from './components/Footer.vue';

const route = useRoute();
const router = useRouter();
const isFullHeaderPage = computed(() =>
  ['/header-complete-full-example', '/header-complete-full-sticky-example'].includes(route.path),
);
</script>

<template>
  <template v-if="!isFullHeaderPage">
    <header class="app-header bg-primary">
      <div class="container">
        <div>
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
                      <router-link
                        v-for="r in AppRoutes"
                        :key="r.path"
                        :to="r.path"
                        custom
                        v-slot="{ href, navigate }"
                      >
                        <it-dropdown-item :href="href" @click="navigate">
                          <it-icon slot="prefix" name="it-arrow-right-triangle" size="sm" color="primary"></it-icon>
                          {{ r.name }}
                        </it-dropdown-item>
                      </router-link>
                    </it-megamenu>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  </template>

  <main :class="isFullHeaderPage ? '' : 'container my-4'">
    <router-view></router-view>
  </main>


    <Footer />
    <it-back-to-top it-aria-label="Torna su" border></it-back-to-top>

</template>


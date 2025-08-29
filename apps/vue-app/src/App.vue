<script setup>
import { AppRoutes } from './routes';
</script>

<template>
  <div class="app-header">
    <div>
      <a href="https://vite.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
    </div>
    <nav class="app-nav">
      <router-link v-for="route in AppRoutes" :key="route.path" :to="route.path">
        {{ route.name }}
      </router-link>
    </nav>
  </div>
  <router-view></router-view>
</template>

<style>
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
<style scoped>
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

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

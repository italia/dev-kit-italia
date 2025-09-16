import { createRouter, createWebHistory } from 'vue-router';

import Accordion from './components/Accordion.vue';
import Button from './components/Button.vue';
import Dropdown from './components/Dropdown.vue';
import Form from './components/Form.vue';
import Icon from './components/Icon.vue';
import Input from './components/Input.vue';
import Video from './components/Video.vue';

const routes = [
  { path: '/accordion', name: 'Accordion', component: Accordion },
  { path: '/button', name: 'Button', component: Button },
  { path: '/dropdown', name: 'Dropdown', component: Dropdown },
  { path: '/form', name: 'Form', component: Form },
  { path: '/icon', name: 'Icon', component: Icon },
  { path: '/input', name: 'Input', component: Input },
  { path: '/video', name: 'Video', component: Video },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export const AppRoutes = routes;
export default router;

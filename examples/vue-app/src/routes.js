import { createRouter, createWebHistory } from 'vue-router';

import Button from './components/Button.vue';
import Chip from './components/Chip.vue';
import Dropdown from './components/Dropdown.vue';
import Form from './components/Form.vue';
import Icon from './components/Icon.vue';
import Input from './components/Input.vue';
import Section from './components/Section.vue';
import Video from './components/Video.vue';

const routes = [
  { path: '/button', name: 'Button', component: Button },
  { path: '/chip', name: 'Chip', component: Chip },
  { path: '/dropdown', name: 'Dropdown', component: Dropdown },
  { path: '/form', name: 'Form', component: Form },
  { path: '/icon', name: 'Icon', component: Icon },
  { path: '/input', name: 'Input', component: Input },
  { path: '/section', name: 'Section', component: Section },
  { path: '/video', name: 'Video', component: Video },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export const AppRoutes = routes;
export default router;

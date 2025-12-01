import { createRouter, createWebHistory } from 'vue-router';

import Accordion from './components/Accordion.vue';
import Affix from './components/Affix.vue';
import Button from './components/Button.vue';
import Chip from './components/Chip.vue';
import Collapse from './components/Collapse.vue';
import Dropdown from './components/Dropdown.vue';
import Form from './components/Form.vue';
import Icon from './components/Icon.vue';
import Input from './components/Input.vue';
import Radio from './components/Radio.vue';
import Section from './components/Section.vue';
import Sticky from './components/Sticky.vue';
import Video from './components/Video.vue';
import Checkbox from './components/Checkbox.vue';
import Avatar from './components/Avatar.vue';
import Skiplinks from './components/Skiplinks.vue';

const routes = [
  { path: '/accordion', name: 'Accordion', component: Accordion },
  { path: '/affix', name: 'Affix', component: Affix },
  { path: '/avatar', name: 'Avatar', component: Avatar },
  { path: '/button', name: 'Button', component: Button },
  { path: '/checkbox', name: 'Checkbox', component: Checkbox },
  { path: '/chip', name: 'Chip', component: Chip },
  { path: '/collapse', name: 'Collapse', component: Collapse },
  { path: '/dropdown', name: 'Dropdown', component: Dropdown },
  { path: '/form', name: 'Form', component: Form },
  { path: '/icon', name: 'Icon', component: Icon },
  { path: '/input', name: 'Input', component: Input },
  { path: '/radio', name: 'Radio', component: Radio },
  { path: '/section', name: 'Section', component: Section },
  { path: '/skiplinks', name: 'Skiplinks', component: Skiplinks },
  { path: '/sticky', name: 'Sticky', component: Sticky },
  { path: '/video', name: 'Video', component: Video },
];

const router = createRouter({
  history: createWebHistory('vue-app'),
  routes,
});

export const AppRoutes = routes;
export default router;

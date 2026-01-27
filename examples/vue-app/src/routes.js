import { createRouter, createWebHistory } from 'vue-router';

import Accordion from './components/Accordion.vue';
import Avatar from './components/Avatar.vue';
import Breadcrumbs from './components/Breadcrumbs.vue';
import Affix from './components/Affix.vue';
import BackToTop from './components/BackToTop.vue';
import Badge from './components/Badge.vue';
import Button from './components/Button.vue';
import Checkbox from './components/Checkbox.vue';
import Callout from './pages/Callout.vue';
import Chip from './components/Chip.vue';
import Collapse from './components/Collapse.vue';
import Dropdown from './components/Dropdown.vue';
import Form from './components/Form.vue';
import Icon from './components/Icon.vue';
import Input from './components/Input.vue';
import Modal from './components/Modal.vue';
import Navscroll from './components/Navscroll.vue';
import Overlay from './components/Overlay.vue';
import Popover from './components/Popover.vue';
import Radio from './components/Radio.vue';
import Rating from './components/Rating.vue';
import Section from './components/Section.vue';
import Select from './components/Select.vue';
import Sidebar from './components/Sidebar.vue';
import Sticky from './components/Sticky.vue';
import Video from './components/Video.vue';
import Skiplinks from './components/Skiplinks.vue';

const routes = [
  { path: '/accordion', name: 'Accordion', component: Accordion },
  { path: '/affix', name: 'Affix', component: Affix },
  { path: '/avatar', name: 'Avatar', component: Avatar },
  { path: '/back-to-top', name: 'BackToTop', component: BackToTop },
  { path: '/badge', name: 'Badge', component: Badge },
  { path: '/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/button', name: 'Button', component: Button },
  { path: '/callout', name: 'Callout', component: Callout },
  { path: '/checkbox', name: 'Checkbox', component: Checkbox },
  { path: '/chip', name: 'Chip', component: Chip },
  { path: '/collapse', name: 'Collapse', component: Collapse },
  { path: '/dropdown', name: 'Dropdown', component: Dropdown },
  { path: '/form', name: 'Form', component: Form },
  { path: '/icon', name: 'Icon', component: Icon },
  { path: '/input', name: 'Input', component: Input },
  { path: '/modal', name: 'Modal', component: Modal },
  { path: '/navscroll', name: 'Navscroll', component: Navscroll },
  { path: '/overlay', name: 'Overlay', component: Overlay },
  { path: '/popover', name: 'Popover', component: Popover },
  { path: '/radio', name: 'Radio', component: Radio },
  { path: '/rating', name: 'Rating', component: Rating },
  { path: '/section', name: 'Section', component: Section },
  { path: '/select', name: 'Select', component: Select },
  { path: '/sidebar', name: 'Sidebar', component: Sidebar },
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

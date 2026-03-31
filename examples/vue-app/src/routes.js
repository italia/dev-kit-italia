import { createRouter, createWebHistory } from 'vue-router';

import Home from './components/Home.vue';
import Accordion from './components/Accordion.vue';
import Avatar from './components/Avatar.vue';
import Breadcrumbs from './components/Breadcrumbs.vue';
import Affix from './components/Affix.vue';
import Alert from './components/Alert.vue';
import Autocomplete from './components/AutocompletePage.vue';
import BackToTop from './components/BackToTop.vue';
import Back from './components/Back.vue';
import Badge from './components/Badge.vue';
import BottomNav from './components/BottomNav.vue';
import Button from './components/Button.vue';
import Checkbox from './components/Checkbox.vue';
import Callout from './components/Callout.vue';
import Card from './pages/Card.vue';
import Chip from './components/Chip.vue';
import Collapse from './components/Collapse.vue';
import Dropdown from './components/Dropdown.vue';
import Form from './components/Form.vue';
import Forward from './components/Forward.vue';
import Hero from './components/Hero.vue';
import Icon from './components/Icon.vue';
import Input from './components/Input.vue';
import List from './components/List.vue';
import Megamenu from './components/Megamenu.vue';
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
import Table from './components/Table.vue';
import Video from './components/Video.vue';
import Skiplinks from './components/Skiplinks.vue';
import Carousel from './components/Carousel.vue';
import Pagination from './components/Pagination.vue';

const routes = [
  { path: '/', name: 'Homepage', component: Home },
  { path: '/accordion', name: 'Accordion', component: Accordion },
  { path: '/affix', name: 'Affix', component: Affix },
  { path: '/alert', name: 'Alert', component: Alert },
  { path: '/autocomplete', name: 'Autocomplete', component: Autocomplete },
  { path: '/avatar', name: 'Avatar', component: Avatar },
  { path: '/back-to-top', name: 'BackToTop', component: BackToTop },
  { path: '/back', name: 'Back', component: Back },
  { path: '/badge', name: 'Badge', component: Badge },
  { path: '/bottom-nav', name: 'BottomNav', component: BottomNav },
  { path: '/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/button', name: 'Button', component: Button },
  { path: '/callout', name: 'Callout', component: Callout },
  { path: '/carousel', name: 'Carousel', component: Carousel },
  { path: '/card', name: 'Card', component: Card },
  { path: '/checkbox', name: 'Checkbox', component: Checkbox },
  { path: '/chip', name: 'Chip', component: Chip },
  { path: '/collapse', name: 'Collapse', component: Collapse },
  { path: '/dropdown', name: 'Dropdown', component: Dropdown },
  { path: '/form', name: 'Form', component: Form },
  { path: '/forward', name: 'Forward', component: Forward },
  { path: '/hero', name: 'Hero', component: Hero },
  { path: '/icon', name: 'Icon', component: Icon },
  { path: '/input', name: 'Input', component: Input },
  { path: '/list', name: 'List', component: List },
  { path: '/megamenu', name: 'Megamenu', component: Megamenu },
  { path: '/modal', name: 'Modal', component: Modal },
  { path: '/navscroll', name: 'Navscroll', component: Navscroll },
  { path: '/overlay', name: 'Overlay', component: Overlay },
  { path: '/pagination', name: 'Pagination', component: Pagination },
  { path: '/popover', name: 'Popover', component: Popover },
  { path: '/radio', name: 'Radio', component: Radio },
  { path: '/rating', name: 'Rating', component: Rating },
  { path: '/section', name: 'Section', component: Section },
  { path: '/select', name: 'Select', component: Select },
  { path: '/sidebar', name: 'Sidebar', component: Sidebar },
  { path: '/skiplinks', name: 'Skiplinks', component: Skiplinks },
  { path: '/sticky', name: 'Sticky', component: Sticky },
  { path: '/tables', name: 'Tables', component: Table },
  { path: '/video', name: 'Video', component: Video },
];

const router = createRouter({
  history: createWebHistory('vue-app'),
  routes,
});

export const AppRoutes = routes;
export default router;

import Accordion from './pages/Accordion.svelte';
import Button from './pages/Button.svelte';
import Checkbox from './pages/Checkbox.svelte';
import Chip from './pages/Chip.svelte';
import Collapse from './pages/Collapse.svelte';
import Dropdown from './pages/Dropdown.svelte';
import Form from './pages/Form.svelte';
import Icon from './pages/Icon.svelte';
import Input from './pages/Input.svelte';
import Radio from './pages/Radio.svelte';
import Section from './pages/Section.svelte';
import Sticky from './pages/Sticky.svelte';
import Video from './pages/Video.svelte';
import Avatar from './pages/Avatar.svelte';

export const AppRoutes = [
  { path: '/accordion', element: Accordion, title: 'Accordion' },
  { path: '/button', element: Button, title: 'Button' },
  { path: '/checkbox', element: Checkbox, title: 'Checkbox' },
  { path: '/chip', element: Chip, title: 'Chip' },
  { path: '/collapse', element: Collapse, title: 'Collapse' },
  { path: '/dropdown', element: Dropdown, title: 'Dropdown' },
  { path: '/form', element: Form, title: 'Form' },
  { path: '/icon', element: Icon, title: 'Icon' },
  { path: '/input', element: Input, title: 'Input' },
  { path: '/radio', element: Radio, title: 'Radio' },
  { path: '/section', element: Section, title: 'Section' },
  { path: '/sticky', element: Sticky, title: 'Sticky' },
  { path: '/video', element: Video, title: 'Video' },
  { path: '/avatar', element: Avatar, title: 'Avatar' },
];

export const routes = AppRoutes.reduce((acc, route) => {
  acc[route.path] = route.element;
  return acc;
}, {});

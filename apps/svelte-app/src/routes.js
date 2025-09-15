import Button from './pages/Button.svelte';
import Chip from './pages/Chip.svelte';
import Dropdown from './pages/Dropdown.svelte';
import Form from './pages/Form.svelte';
import Icon from './pages/Icon.svelte';
import Input from './pages/Input.svelte';
import Video from './pages/Video.svelte';

export const AppRoutes = [
  { path: '/button', element: Button, title: 'Button' },
  { path: '/chip', element: Chip, title: 'Chip' },
  { path: '/dropdown', element: Dropdown, title: 'Dropdown' },
  { path: '/form', element: Form, title: 'Form' },
  { path: '/icon', element: Icon, title: 'Icon' },
  { path: '/input', element: Input, title: 'Input' },
  { path: '/video', element: Video, title: 'Video' },
];

export const routes = AppRoutes.reduce((acc, route) => {
  acc[route.path] = route.element;
  return acc;
}, {});

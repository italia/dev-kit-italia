import Home from './pages/Home.svelte';
import Accordion from './pages/Accordion.svelte';
import Affix from './pages/Affix.svelte';
import Alert from './pages/Alert.svelte';
import Autocomplete from './pages/Autocomplete.svelte';
import Avatar from './pages/Avatar.svelte';
import Breadcrumbs from './pages/Breadcrumbs.svelte';
import BackToTop from './pages/BackToTop.svelte';
import Back from './pages/Back.svelte';
import Badge from './pages/Badge.svelte';
import BottomNav from './pages/BottomNav.svelte';
import Button from './pages/Button.svelte';
import Callout from './pages/Callout.svelte';
import Card from './pages/Card.svelte';
import Checkbox from './pages/Checkbox.svelte';
import Chip from './pages/Chip.svelte';
import Collapse from './pages/Collapse.svelte';
import Dimmer from './pages/Dimmer.svelte';
import Dropdown from './pages/Dropdown.svelte';
import Form from './pages/Form.svelte';
import Forward from './pages/Forward.svelte';
import Hero from './pages/Hero.svelte';
import Icon from './pages/Icon.svelte';
import Input from './pages/Input.svelte';
import List from './pages/List.svelte';
import Megamenu from './pages/Megamenu.svelte';
import Modal from './pages/Modal.svelte';
import Navscroll from './pages/Navscroll.svelte';
import Overlay from './pages/Overlay.svelte';
import Pagination from './pages/Pagination.svelte';
import Popover from './pages/Popover.svelte';
import Progress from './pages/Progress.svelte';
import Radio from './pages/Radio.svelte';
import Rating from './pages/Rating.svelte';
import Section from './pages/Section.svelte';
import Select from './pages/Select.svelte';
import Sidebar from './pages/Sidebar.svelte';
import Skiplinks from './pages/Skiplinks.svelte';
import Sticky from './pages/Sticky.svelte';
import Carousel from './pages/Carousel.svelte';
import Table from './pages/Table.svelte';
import Tabs from './pages/Tabs.svelte';
import Toolbar from './pages/Toolbar.svelte';
import Thumbnav from './pages/Thumbnav.svelte';
import Timeline from './pages/Timeline.svelte';
import Toggle from './pages/Toggle.svelte';
import Transfer from './pages/Transfer.svelte';
import Tooltip from './pages/Tooltip.svelte';
import Upload from './pages/Upload.svelte';
import Video from './pages/Video.svelte';
import Notification from './pages/Notification.svelte';

export const AppRoutes = [
  { path: '/', element: Home, title: 'Homepage' },
  { path: '/accordion', element: Accordion, title: 'Accordion' },
  { path: '/affix', element: Affix, title: 'Affix' },
  { path: '/alert', element: Alert, title: 'Alert' },
  { path: '/autocomplete', element: Autocomplete, title: 'Autocomplete' },
  { path: '/avatar', element: Avatar, title: 'Avatar' },
  { path: '/back-to-top', element: BackToTop, title: 'Back to Top' },
  { path: '/back', element: Back, title: 'Back' },
  { path: '/bottom-nav', element: BottomNav, title: 'Bottom Nav' },
  { path: '/badge', element: Badge, title: 'Badge' },
  { path: '/breadcrumbs', element: Breadcrumbs, title: 'Breadcrumbs' },
  { path: '/button', element: Button, title: 'Button' },
  { path: '/callout', element: Callout, title: 'Callout' },
  { path: '/carousel', element: Carousel, title: 'Carousel' },
  { path: '/card', element: Card, title: 'Card' },
  { path: '/checkbox', element: Checkbox, title: 'Checkbox' },
  { path: '/chip', element: Chip, title: 'Chip' },
  { path: '/collapse', element: Collapse, title: 'Collapse' },
  { path: '/dimmer', element: Dimmer, title: 'Dimmer' },
  { path: '/dropdown', element: Dropdown, title: 'Dropdown' },
  { path: '/form', element: Form, title: 'Form' },
  { path: '/forward', element: Forward, title: 'Forward' },
  { path: '/hero', element: Hero, title: 'Hero' },
  { path: '/icon', element: Icon, title: 'Icon' },
  { path: '/input', element: Input, title: 'Input' },
  { path: '/list', element: List, title: 'List' },
  { path: '/megamenu', element: Megamenu, title: 'Megamenu' },
  { path: '/modal', element: Modal, title: 'Modal' },
  { path: '/navscroll', element: Navscroll, title: 'Navscroll' },
  { path: '/notification', element: Notification, title: 'Notification' },
  { path: '/overlay', element: Overlay, title: 'Overlay' },
  { path: '/pagination', element: Pagination, title: 'Pagination' },
  { path: '/popover', element: Popover, title: 'Popover' },
  { path: '/progress', element: Progress, title: 'Progress' },
  { path: '/radio', element: Radio, title: 'Radio' },
  { path: '/rating', element: Rating, title: 'Rating' },
  { path: '/section', element: Section, title: 'Section' },
  { path: '/select', element: Select, title: 'Select' },
  { path: '/sidebar', element: Sidebar, title: 'Sidebar' },
  { path: '/skiplinks', element: Skiplinks, title: 'Skiplinks' },
  { path: '/sticky', element: Sticky, title: 'Sticky' },
  { path: '/tables', element: Table, title: 'Tables' },
  { path: '/toolbar', element: Toolbar, title: 'Toolbar' },
  { path: '/thumbnav', element: Thumbnav, title: 'Thumbnav' },
  { path: '/timeline', element: Timeline, title: 'Timeline' },
  { path: '/tabs', element: Tabs, title: 'Tabs' },
  { path: '/toggle', element: Toggle, title: 'Toggle' },
  { path: '/transfer', element: Transfer, title: 'Transfer' },
  { path: '/tooltip', element: Tooltip, title: 'Tooltip' },
  { path: '/upload', element: Upload, title: 'Upload' },
  { path: '/video', element: Video, title: 'Video' },
];

export const routes = AppRoutes.reduce((acc, route) => {
  acc[route.path] = route.element;
  return acc;
}, {});

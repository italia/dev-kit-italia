import Accordion from './pages/Accordion';
import Button from './pages/Button';
import Chip from './pages/Chip';
import Dropdown from './pages/Dropdown';
import Form from './pages/Form';
import Icon from './pages/Icon';
import Input from './pages/Input';
import Radio from './pages/Radio';
import Section from './pages/Section';
import Sticky from './pages/Sticky';
import Video from './pages/Video';
import Avatar from './pages/Avatar';

export const AppRoutes = [
  { path: '/accordion', element: <Accordion />, title: 'Accordion' },
  { path: '/button', element: <Button />, title: 'Button' },
  { path: '/chip', element: <Chip />, title: 'Chip' },
  { path: '/dropdown', element: <Dropdown />, title: 'Dropdown' },
  { path: '/form', element: <Form />, title: 'Form' },
  { path: '/icon', element: <Icon />, title: 'Icon' },
  { path: '/input', element: <Input />, title: 'Input' },
  { path: '/radio', element: <Radio />, title: 'Radio' },
  { path: '/section', element: <Section />, title: 'Section' },
  { path: '/sticky', element: <Sticky />, title: 'Sticky' },
  { path: '/video', element: <Video />, title: 'Video' },
  { path: '/avatar', element: <Avatar />, title: 'Avatar' },
];

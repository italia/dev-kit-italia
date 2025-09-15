import Button from './pages/Button';
import Dropdown from './pages/Dropdown';
import Form from './pages/Form';
import Icon from './pages/Icon';
import Input from './pages/Input';
import Section from './pages/Section';
import Video from './pages/Video';

export const AppRoutes = [
  { path: '/button', element: <Button />, title: 'Button' },
  { path: '/dropdown', element: <Dropdown />, title: 'Dropdown' },
  { path: '/form', element: <Form />, title: 'Form' },
  { path: '/icon', element: <Icon />, title: 'Icon' },
  { path: '/input', element: <Input />, title: 'Input' },
  { path: '/section', element: <Section />, title: 'Section' },
  { path: '/video', element: <Video />, title: 'Video' },
];

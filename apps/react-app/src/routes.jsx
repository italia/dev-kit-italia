import Button from './pages/Button';
import Form from './pages/Form';
import Icon from './pages/Icon';
import Input from './pages/Input';
import Video from './pages/Video';

export const AppRoutes = [
  { path: '/button', element: <Button />, title: 'Button' },
  { path: '/form', element: <Form />, title: 'Form' },
  { path: '/icon', element: <Icon />, title: 'Icon' },
  { path: '/input', element: <Input />, title: 'Input' },
  { path: '/video', element: <Video />, title: 'Video' },
];

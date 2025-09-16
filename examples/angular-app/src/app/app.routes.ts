import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'button',
    loadComponent: () => import('./pages/button.component').then((c) => c.ButtonComponent),
  },
  {
    path: 'dropdown',
    loadComponent: () => import('./pages/dropdown.component').then((c) => c.DropdownComponent),
  },
  {
    path: 'form',
    loadComponent: () => import('./pages/form.component').then((c) => c.FormComponent),
  },
  {
    path: 'icon',
    loadComponent: () => import('./pages/icon.component').then((c) => c.IconComponent),
  },
  {
    path: 'section',
    loadComponent: () => import('./pages/section.component').then((c) => c.SectionComponent),
  },
  {
    path: 'input',
    loadComponent: () => import('./pages/input.component').then((c) => c.InputComponent),
  },
  {
    path: 'video',
    loadComponent: () => import('./pages/video.component').then((c) => c.VideoComponent),
  },
];

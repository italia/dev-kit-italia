import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'accordion',
    loadComponent: () => import('./pages/accordion.component').then((c) => c.AccordionComponent),
  },
  {
    path: 'affix',
    loadComponent: () => import('./pages/affix.component').then((c) => c.AffixComponent),
  },
  {
    path: 'avatar',
    loadComponent: () => import('./pages/avatar.component').then((c) => c.AvatarComponent),
  },
  {
    path: 'badge',
    loadComponent: () => import('./pages/badge.component').then((c) => c.BadgeComponent),
  },
  {
    path: 'button',
    loadComponent: () => import('./pages/button.component').then((c) => c.ButtonComponent),
  },
  {
    path: 'checkbox',
    loadComponent: () => import('./pages/checkbox.component').then((c) => c.CheckboxComponent),
  },
  {
    path: 'chip',
    loadComponent: () => import('./pages/chip.component').then((c) => c.ChipComponent),
  },
  {
    path: 'collapse',
    loadComponent: () => import('./pages/collapse.component').then((c) => c.CollapseComponent),
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
    path: 'input',
    loadComponent: () => import('./pages/input.component').then((c) => c.InputComponent),
  },
  {
    path: 'modal',
    loadComponent: () => import('./pages/modal.component').then((c) => c.ModalComponent),
  },
  {
    path: 'overlay',
    loadComponent: () => import('./pages/overlay.component').then((c) => c.OverlayComponent),
  },
  {
    path: 'radio',
    loadComponent: () =>
      import('./pages/radio-examples.component').then((c) => c.RadioExamplesComponent),
  },
  {
    path: 'section',
    loadComponent: () => import('./pages/section.component').then((c) => c.SectionComponent),
  },
  {
    path: 'skiplinks',
    loadComponent: () => import('./pages/skiplinks.component').then((c) => c.SkiplinksComponent),
  },
  {
    path: 'sticky',
    loadComponent: () => import('./pages/sticky.component').then((c) => c.StickyComponent),
  },
  {
    path: 'video',
    loadComponent: () => import('./pages/video.component').then((c) => c.VideoComponent),
  },
];

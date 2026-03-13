import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'accordion',
    loadComponent: () => import('./pages/accordion.component').then((c) => c.AccordionComponent),
  },
  {
    path: 'affix',
    loadComponent: () => import('./pages/affix.component').then((c) => c.AffixComponent),
  },
  {
    path: 'alert',
    loadComponent: () => import('./pages/alert.component').then((c) => c.AlertComponent),
  },
  {
    path: 'autocomplete',
    loadComponent: () =>
      import('./pages/autocomplete.component').then((c) => c.AutocompleteComponent),
  },
  {
    path: 'avatar',
    loadComponent: () => import('./pages/avatar.component').then((c) => c.AvatarComponent),
  },
  {
    path: 'breadcrumbs',
    loadComponent: () =>
      import('./pages/breadcrumbs.component').then((c) => c.BreadcrumbsComponent),
  },
  {
    path: 'back-to-top',
    loadComponent: () => import('./pages/back-to-top.component').then((c) => c.BackToTopComponent),
  },
  {
    path: 'back',
    loadComponent: () => import('./pages/back.component').then((c) => c.BackComponent),
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
    path: 'callout',
    loadComponent: () => import('./pages/callout.component').then((c) => c.CalloutComponent),
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
    path: 'forward',
    loadComponent: () => import('./pages/forward.component').then((c) => c.ForwardComponent),
  },
  {
    path: 'hero',
    loadComponent: () => import('./pages/hero.component').then((c) => c.HeroComponent),
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
    path: 'list',
    loadComponent: () => import('./pages/list.component').then((c) => c.ListComponent),
  },
  {
    path: 'modal',
    loadComponent: () => import('./pages/modal.component').then((c) => c.ModalComponent),
  },
  {
    path: 'navscroll',
    loadComponent: () => import('./pages/navscroll.component').then((c) => c.NavscrollComponent),
  },
  {
    path: 'overlay',
    loadComponent: () => import('./pages/overlay.component').then((c) => c.OverlayComponent),
  },
  {
    path: 'pagination',
    loadComponent: () => import('./pages/pagination.component').then((c) => c.PaginationComponent),
  },
  {
    path: 'popover',
    loadComponent: () => import('./pages/popover.component').then((c) => c.PopoverComponent),
  },
  {
    path: 'radio',
    loadComponent: () =>
      import('./pages/radio-examples.component').then((c) => c.RadioExamplesComponent),
  },
  {
    path: 'rating',
    loadComponent: () => import('./pages/rating.component').then((c) => c.RatingComponent),
  },
  {
    path: 'section',
    loadComponent: () => import('./pages/section.component').then((c) => c.SectionComponent),
  },
  {
    path: 'select',
    loadComponent: () => import('./pages/select.component').then((c) => c.SelectComponent),
  },
  {
    path: 'sidebar',
    loadComponent: () => import('./components/sidebar.component').then((c) => c.SidebarComponent),
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
    path: 'tables',
    loadComponent: () => import('./pages/table.component').then((c) => c.TableComponent),
  },
  {
    path: 'tabs',
    loadComponent: () => import('./pages/tabs.component').then((c) => c.TabsComponent),
  },
  {
    path: 'video',
    loadComponent: () => import('./pages/video.component').then((c) => c.VideoComponent),
  },
];

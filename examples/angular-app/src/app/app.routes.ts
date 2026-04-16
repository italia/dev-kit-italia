import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    title: 'Home',
    path: '',
    loadComponent: () => import('./pages/home.component').then((c) => c.HomeComponent),
  },
  {
    title: 'Accordion',
    path: 'accordion',
    loadComponent: () => import('./pages/accordion.component').then((c) => c.AccordionComponent),
  },
  {
    title: 'Affix',
    path: 'affix',
    loadComponent: () => import('./pages/affix.component').then((c) => c.AffixComponent),
  },
  {
    title: 'Alert',
    path: 'alert',
    loadComponent: () => import('./pages/alert.component').then((c) => c.AlertComponent),
  },
  {
    title: 'Autocomplete',
    path: 'autocomplete',
    loadComponent: () =>
      import('./pages/autocomplete.component').then((c) => c.AutocompleteComponent),
  },
  {
    title: 'Avatar',
    path: 'avatar',
    loadComponent: () => import('./pages/avatar.component').then((c) => c.AvatarComponent),
  },
  {
    title: 'Breadcrumbs',
    path: 'breadcrumbs',
    loadComponent: () =>
      import('./pages/breadcrumbs.component').then((c) => c.BreadcrumbsComponent),
  },
  {
    title: 'Back to top',
    path: 'back-to-top',
    loadComponent: () => import('./pages/back-to-top.component').then((c) => c.BackToTopComponent),
  },
  {
    title: 'Back',
    path: 'back',
    loadComponent: () => import('./pages/back.component').then((c) => c.BackComponent),
  },
  {
    title: 'Badge',
    path: 'badge',
    loadComponent: () => import('./pages/badge.component').then((c) => c.BadgeComponent),
  },
  {
    title: 'Button',
    path: 'button',
    loadComponent: () => import('./pages/button.component').then((c) => c.ButtonComponent),
  },
  {
    title: 'Carousel',
    path: 'carousel',
    loadComponent: () => import('./pages/carousel.component').then((c) => c.CarouselComponent),
  },
  {
    title: 'Callout',
    path: 'callout',
    loadComponent: () => import('./pages/callout.component').then((c) => c.CalloutComponent),
  },
  {
    title: 'Card',
    path: 'card',
    loadComponent: () => import('./pages/card.component').then((c) => c.CardComponent),
  },
  {
    title: 'Checkbox',
    path: 'checkbox',
    loadComponent: () => import('./pages/checkbox.component').then((c) => c.CheckboxComponent),
  },
  {
    title: 'Chip',
    path: 'chip',
    loadComponent: () => import('./pages/chip.component').then((c) => c.ChipComponent),
  },
  {
    title: 'Collapse',
    path: 'collapse',
    loadComponent: () => import('./pages/collapse.component').then((c) => c.CollapseComponent),
  },
  {
    title: 'Dropdown',
    path: 'dropdown',
    loadComponent: () => import('./pages/dropdown.component').then((c) => c.DropdownComponent),
  },
  {
    title: 'Form',
    path: 'form',
    loadComponent: () => import('./pages/form.component').then((c) => c.FormComponent),
  },
  {
    title: 'Forward',
    path: 'forward',
    loadComponent: () => import('./pages/forward.component').then((c) => c.ForwardComponent),
  },
  {
    title: 'Hero',
    path: 'hero',
    loadComponent: () => import('./pages/hero.component').then((c) => c.HeroComponent),
  },
  {
    title: 'Icon',
    path: 'icon',
    loadComponent: () => import('./pages/icon.component').then((c) => c.IconComponent),
  },
  {
    title: 'Input',
    path: 'input',
    loadComponent: () => import('./pages/input.component').then((c) => c.InputComponent),
  },
  {
    title: 'List',
    path: 'list',
    loadComponent: () => import('./pages/list.component').then((c) => c.ListComponent),
  },
  {
    title: 'Megamenu',
    path: 'megamenu',
    loadComponent: () => import('./pages/megamenu.component').then((c) => c.MegamenuComponent),
  },
  {
    title: 'Modal',
    path: 'modal',
    loadComponent: () => import('./pages/modal.component').then((c) => c.ModalComponent),
  },
  {
    title: 'Navscroll',
    path: 'navscroll',
    loadComponent: () => import('./pages/navscroll.component').then((c) => c.NavscrollComponent),
  },
  {
    title: 'Overlay',
    path: 'overlay',
    loadComponent: () => import('./pages/overlay.component').then((c) => c.OverlayComponent),
  },
  {
    title: 'Pagination',
    path: 'pagination',
    loadComponent: () => import('./pages/pagination.component').then((c) => c.PaginationComponent),
  },
  {
    title: 'Popover',
    path: 'popover',
    loadComponent: () => import('./pages/popover.component').then((c) => c.PopoverComponent),
  },
  {
    title: 'Progress',
    path: 'progress',
    loadComponent: () => import('./pages/progress.component').then((c) => c.ProgressComponent),
  },
  {
    title: 'Radio',
    path: 'radio',
    loadComponent: () =>
      import('./pages/radio-examples.component').then((c) => c.RadioExamplesComponent),
  },
  {
    title: 'Rating',
    path: 'rating',
    loadComponent: () => import('./pages/rating.component').then((c) => c.RatingComponent),
  },
  {
    title: 'Section',
    path: 'section',
    loadComponent: () => import('./pages/section.component').then((c) => c.SectionComponent),
  },
  {
    title: 'Select',
    path: 'select',
    loadComponent: () => import('./pages/select.component').then((c) => c.SelectComponent),
  },
  {
    title: 'Sidebar',
    path: 'sidebar',
    loadComponent: () => import('./components/sidebar.component').then((c) => c.SidebarComponent),
  },
  {
    title: 'Skiplinks',
    path: 'skiplinks',
    loadComponent: () => import('./pages/skiplinks.component').then((c) => c.SkiplinksComponent),
  },
  {
    title: 'Sticky',
    path: 'sticky',
    loadComponent: () => import('./pages/sticky.component').then((c) => c.StickyComponent),
  },
  {
    title: 'Tables',
    path: 'tables',
    loadComponent: () => import('./pages/table.component').then((c) => c.TableComponent),
  },
  {
    title: 'Upload',
    path: 'upload',
    loadComponent: () => import('./pages/upload.component').then((c) => c.UploadComponent),
  },
  {
    title: 'Toggle',
    path: 'toggle',
    loadComponent: () => import('./pages/toggle.component').then((c) => c.ToggleComponent),
  },
  {
    title: 'Video',
    path: 'video',
    loadComponent: () => import('./pages/video.component').then((c) => c.VideoComponent),
  },
];

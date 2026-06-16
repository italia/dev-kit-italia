import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-thumbnav',
  templateUrl: './thumbnav.component.html',
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
})
export class ThumbnnavComponent {
  title = 'Thumbnav';

  images = [
    { src: 'https://picsum.photos/240/160?image=1056', alt: 'Visualizza immagine 1' },
    { src: 'https://picsum.photos/240/160?image=1050', alt: 'Visualizza immagine 2' },
    { src: 'https://picsum.photos/240/160?image=1044', alt: 'Visualizza immagine 3' },
    { src: 'https://picsum.photos/240/160?image=1039', alt: 'Visualizza immagine 4' },
    { src: 'https://picsum.photos/240/160?image=1029', alt: 'Visualizza immagine 5' },
  ];
}

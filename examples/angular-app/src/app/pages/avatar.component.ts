import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-avatar',
  standalone: true,
  templateUrl: './avatar.component.html',
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AvatarComponent {
  sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
  
  imageAvatars = [
    { size: 'xs', src: 'https://randomuser.me/api/portraits/women/44.jpg', alt: 'Luisa Neri' },
    { size: 'sm', src: 'https://randomuser.me/api/portraits/women/44.jpg', alt: 'Luisa Neri' },
    { size: 'md', src: 'https://randomuser.me/api/portraits/men/43.jpg', alt: 'Gioacchino Romani' },
    { size: 'lg', src: 'https://randomuser.me/api/portraits/women/41.jpg', alt: 'Anna Barbieri' },
    { size: 'xl', src: 'https://randomuser.me/api/portraits/men/33.jpg', alt: 'Carlo Poli' },
    { size: 'xxl', src: 'https://randomuser.me/api/portraits/women/90.jpg', alt: 'Giovanna Ferrero' },
  ];
}

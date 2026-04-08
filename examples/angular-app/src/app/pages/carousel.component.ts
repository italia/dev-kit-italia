import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  templateUrl: './carousel.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CarouselComponent {
  slides = Array.from({ length: 6 });
}

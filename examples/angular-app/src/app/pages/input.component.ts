/* eslint-disable class-methods-use-this */
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { registerTranslation } from '@italia/dev-kit-italia/elements.js';

@Component({
  selector: 'app-input',
  standalone: true,
  templateUrl: './input.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class InputComponent {
  constructor() {
    const it = {
      $code: 'it',
      $name: 'Italiano',
      $dir: 'ltr' as 'ltr',
      showHidePassword: 'Mostra/Nascondi Password (test input).',
    };

    // Chiama la funzione di registrazione qui
    registerTranslation(it);
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-megamenu',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>it-megamenu</h1>

    <!-- Base -->
    <section>
      <h2>Base</h2>
      <it-megamenu label="Megamenu base" variant="primary">
        <it-dropdown-item href="#">Azione 1</it-dropdown-item>
        <it-dropdown-item href="#">Azione 2</it-dropdown-item>
        <it-dropdown-item href="#">Azione 3</it-dropdown-item>
      </it-megamenu>
    </section>

    <!-- Con Header -->
    <section>
      <h2>Con Header</h2>
      <it-megamenu label="Con header" variant="primary">
        <div slot="header" style="padding: 1rem; background: #f5f5f5;">
          <h3>Sezione Header</h3>
          <p>Contenuto nell'header del megamenu</p>
        </div>
        <it-dropdown-item href="#">Azione 1</it-dropdown-item>
        <it-dropdown-item href="#">Azione 2</it-dropdown-item>
        <it-dropdown-item href="#">Azione 3</it-dropdown-item>
      </it-megamenu>
    </section>

    <!-- Con Footer -->
    <section>
      <h2>Con Footer</h2>
      <it-megamenu label="Con footer" variant="primary">
        <it-dropdown-item href="#">Azione 1</it-dropdown-item>
        <it-dropdown-item href="#">Azione 2</it-dropdown-item>
        <it-dropdown-item href="#">Azione 3</it-dropdown-item>
        <div slot="footer" style="padding: 1rem; background: #f5f5f5; border-top: 1px solid #ddd;">
          <p>Contenuto nel footer del megamenu</p>
          <it-button variant="primary" size="sm">Visualizza tutto</it-button>
        </div>
      </it-megamenu>
    </section>

    <!-- Con Description -->
    <section>
      <h2>Con Description</h2>
      <it-megamenu label="Con descrizione" variant="primary">
        <div slot="description" style="padding: 1rem; color: #666;">
          Descrizione breve del megamenu che appare sotto le azioni
        </div>
        <it-dropdown-item href="#">Azione 1</it-dropdown-item>
        <it-dropdown-item href="#">Azione 2</it-dropdown-item>
        <it-dropdown-item href="#">Azione 3</it-dropdown-item>
      </it-megamenu>
    </section>

    <!-- Completo: Header + Items + Description + Footer -->
    <section>
      <h2>Completo</h2>
      <it-megamenu label="Megamenu completo" variant="primary" [attr.columns]="columns">
        <div slot="header" style="padding: 1rem; background: #f5f5f5;">
          <h3>Header</h3>
          <p>Sezione superiore del megamenu</p>
        </div>
        <div slot="description" style="padding: 0.5rem; color: #666; font-size: 0.9rem;">
          Descrizione dettagliata delle azioni disponibili
        </div>
        <it-dropdown-item href="#">Azione 1</it-dropdown-item>
        <it-dropdown-item href="#">Azione 2</it-dropdown-item>
        <it-dropdown-item href="#">Azione 3</it-dropdown-item>
        <it-dropdown-item href="#">Azione 4</it-dropdown-item>
        <it-dropdown-item href="#">Azione 5</it-dropdown-item>
        <div slot="footer" style="padding: 1rem; background: #f5f5f5; border-top: 1px solid #ddd;">
          <p>Footer con azioni aggiuntive</p>
          <it-button variant="primary" size="sm">Vai al menu completo</it-button>
        </div>
      </it-megamenu>
    </section>

    <!-- Varianti Button -->
    <section>
      <h2>Varianti Button</h2>
      <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
        <it-megamenu label="Primary" variant="primary">
          <it-dropdown-item href="#">Azione 1</it-dropdown-item>
          <it-dropdown-item href="#">Azione 2</it-dropdown-item>
        </it-megamenu>
        <it-megamenu label="Secondary" variant="secondary">
          <it-dropdown-item href="#">Azione 1</it-dropdown-item>
          <it-dropdown-item href="#">Azione 2</it-dropdown-item>
        </it-megamenu>
        <it-megamenu label="Tertiary" variant="tertiary">
          <it-dropdown-item href="#">Azione 1</it-dropdown-item>
          <it-dropdown-item href="#">Azione 2</it-dropdown-item>
        </it-megamenu>
      </div>
    </section>

    <!-- Dimensioni -->
    <section>
      <h2>Dimensioni</h2>
      <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
        <it-megamenu label="Small" variant="primary" size="sm">
          <it-dropdown-item href="#">Azione 1</it-dropdown-item>
          <it-dropdown-item href="#">Azione 2</it-dropdown-item>
        </it-megamenu>
        <it-megamenu label="Medium" variant="primary" size="md">
          <it-dropdown-item href="#">Azione 1</it-dropdown-item>
          <it-dropdown-item href="#">Azione 2</it-dropdown-item>
        </it-megamenu>
        <it-megamenu label="Large" variant="primary" size="lg">
          <it-dropdown-item href="#">Azione 1</it-dropdown-item>
          <it-dropdown-item href="#">Azione 2</it-dropdown-item>
        </it-megamenu>
      </div>
    </section>

    <!-- Disabilitato -->
    <section>
      <h2>Disabilitato</h2>
      <it-megamenu label="Disabilitato" variant="primary" disabled>
        <it-dropdown-item href="#">Azione 1</it-dropdown-item>
        <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      </it-megamenu>
    </section>

    <!-- Colonne Multiple -->
    <section>
      <h2>Colonne Multiple</h2>
      <it-megamenu
        label="2 Colonne"
        variant="primary"
        [attr.columns]="columns2"
        style="min-width: 300px;"
      >
        <it-dropdown-item href="#">Azione 1</it-dropdown-item>
        <it-dropdown-item href="#">Azione 2</it-dropdown-item>
        <it-dropdown-item href="#">Azione 3</it-dropdown-item>
        <it-dropdown-item href="#">Azione 4</it-dropdown-item>
      </it-megamenu>
    </section>
  `,
  styles: [],
})
export class MegamenuComponent {
  columns = 3;
  columns2 = 2;
}

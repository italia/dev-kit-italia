import { Component, CUSTOM_ELEMENTS_SCHEMA, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="container my-4">
      <h1 class="mb-4">Sidebar</h1>
      <div class="row">
        <div class="col-md-4">
          <aside class="sidebar-wrapper" aria-labelledby="header">
            <h3 id="header">Header</h3>
            <div class="sidebar-linklist-wrapper">
              <nav aria-label="Navigazione laterale principale" class="link-list-wrapper">
                <ul class="link-list">
                  <li>
                    <a class="list-item medium active" aria-current="page" href="#">
                      <span>Link lista 1 (attivo)</span>
                    </a>
                  </li>
                  <li>
                    <a class="list-item medium disabled" href="#" aria-disabled="true">
                      <span>Link lista 2 (disabilitato)</span>
                    </a>
                  </li>
                  <li>
                    <a class="list-item medium" href="#">
                      <span>Link lista 3</span>
                    </a>
                  </li>
                  <li>
                    <a class="list-item medium" href="#">
                      <span>Link lista 4</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div class="sidebar-linklist-wrapper linklist-secondary">
              <nav aria-label="Navigazione laterale secondaria" class="link-list-wrapper">
                <ul class="link-list">
                  <li>
                    <a class="list-item" href="#">
                      <span>Link secondario 1</span>
                    </a>
                  </li>
                  <li>
                    <a class="list-item active" aria-current="page" href="#">
                      <span>Link secondario 2 (attivo)</span>
                    </a>
                  </li>
                  <li>
                    <a class="list-item disabled" href="#" aria-disabled="true">
                      <span>Link secondario 3 (disabilitato)</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </aside>
        </div>
        <section class="col-md-6">
          <h2>Content Area</h2>
          <p>
            Quisque suscipit interdum augue non volutpat. Cras tristique arcu tortor. Mauris eu
            magna nibh. Curabitur malesuada neque in lectus sagittis accumsan. In vitae justo eros.
            Maecenas pellentesque lacinia ipsum vitae rhoncus. Vestibulum pretium tempor turpis, nec
            gravida eros viverra in. Proin dictum nibh ut semper tristique.<br />
            Maecenas at erat id sem interdum efficitur eu sed nunc. Mauris sit amet erat eget augue
            molestie malesuada ut sed ex. In sed dignissim elit. Donec efficitur, sem eget
            vestibulum auctor, sem erat interdum magna, eu commodo odio mauris semper dolor.<br />
            Maecenas vulputate ante dictum vestibulum volutpat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Aenean non augue non purus vestibulum varius. Maecenas
            ullamcorper tincidunt nulla quis laoreet.
          </p>
        </section>
      </div>
    </div>
  `,
})
export class SidebarComponent implements AfterViewInit {
  // eslint-disable-next-line no-useless-constructor
  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const sidebar: HTMLElement | null = this.el.nativeElement.querySelector('.sidebar-wrapper');
    if (!sidebar) return;
    sidebar.querySelectorAll('[aria-disabled="true"]').forEach((el: Element) => {
      // Click del mouse
      el.addEventListener('click', (event: Event) => {
        console.log('Link disabilitato cliccato');
        event.preventDefault();
        event.stopPropagation();
      });
      // Tastiera
      el.addEventListener('keydown', (event: any) => {
        if (event.key === 'Enter' || event.key === ' ') {
          console.log('Link disabilitato attivato da tastiera');
          event.preventDefault();
          event.stopPropagation();
        }
      });
    });
  }
}

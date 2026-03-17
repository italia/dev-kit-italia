import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
})
export class TabsComponent {
  title = 'Tabs';
  private ecCounter = 5;

  handleAddTab(event: Event): void {
    const addBtn = event.currentTarget as Element;
    const itTabs = addBtn.closest('it-tabs')!;
    const n = this.ecCounter++;
    const panel = `et${n}`;
    const tab = document.createElement('it-tab');
    tab.setAttribute('slot', 'tab');
    tab.setAttribute('panel', panel);
    tab.textContent = `Tab ${n}`;
    const tabPanel = document.createElement('it-tab-panel');
    tabPanel.setAttribute('name', panel);
    tabPanel.innerHTML = `Contenuto del pannello <strong>Tab ${n}</strong>`;
    (itTabs as any).addTab(tab, tabPanel);
  }

  private ecCounter2 = 5;

  handleCloseCustom(event: Event): void {
    event.preventDefault();
    const itTabs = event.currentTarget as any;
    const detail = (event as CustomEvent).detail;
    const label = itTabs.querySelector(`it-tab[panel="${detail.panel}"]`)?.textContent?.trim();
    // eslint-disable-next-line no-alert
    if (confirm(`Chiudere "${label}"?`)) itTabs.close(detail.panel);
  }

  handleAddTabCustom(event: Event): void {
    const addBtn = event.currentTarget as Element;
    const itTabs = addBtn.closest('it-tabs')!;
    const n = this.ecCounter2++;
    const panel = `et2${n}`;
    const tab = document.createElement('it-tab');
    tab.setAttribute('slot', 'tab');
    tab.setAttribute('panel', panel);
    tab.textContent = `Tab ${n}`;
    const tabPanel = document.createElement('it-tab-panel');
    tabPanel.setAttribute('name', panel);
    tabPanel.innerHTML = `Contenuto del pannello <strong>Tab ${n}</strong>`;
    (itTabs as any).addTab(tab, tabPanel);
  }
}

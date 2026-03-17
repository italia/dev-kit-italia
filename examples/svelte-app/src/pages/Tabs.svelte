<script>
  let ecCounter = 5;

  function handleAddTab(e) {
    const addBtn = e.currentTarget;
    const itTabs = addBtn.closest('it-tabs');
    const n = ecCounter++;
    const panel = `et${n}`;
    const tab = document.createElement('it-tab');
    tab.setAttribute('slot', 'tab');
    tab.setAttribute('panel', panel);
    tab.textContent = `Tab ${n}`;
    const tabPanel = document.createElement('it-tab-panel');
    tabPanel.setAttribute('name', panel);
    tabPanel.innerHTML = `Contenuto del pannello <strong>Tab ${n}</strong>`;
    itTabs.addTab(tab, tabPanel);
  }

  let ecCounter2 = 5;

  function handleCloseCustom(e) {
    e.preventDefault();
    const itTabs = e.currentTarget;
    const label = itTabs.querySelector(`it-tab[panel="${e.detail.panel}"]`)?.textContent?.trim();
    // eslint-disable-next-line no-alert
    if (confirm(`Chiudere "${label}"?`)) itTabs.close(e.detail.panel);
  }

  function handleAddTabCustom(e) {
    const addBtn = e.currentTarget;
    const itTabs = addBtn.closest('it-tabs');
    const n = ecCounter2++;
    const panel = `et2${n}`;
    const tab = document.createElement('it-tab');
    tab.setAttribute('slot', 'tab');
    tab.setAttribute('panel', panel);
    tab.textContent = `Tab ${n}`;
    const tabPanel = document.createElement('it-tab-panel');
    tabPanel.setAttribute('name', panel);
    tabPanel.innerHTML = `Contenuto del pannello <strong>Tab ${n}</strong>`;
    itTabs.addTab(tab, tabPanel);
  }
</script>

<h1>Tabs</h1>

<!-- Tab orizzontali -->
<section>
  <h2>Tab orizzontali</h2>
  <it-tabs label="Navigazione principale">
    <it-tab slot="tab" panel="o1">Tab 1</it-tab>
    <it-tab slot="tab" panel="o2">Tab 2</it-tab>
    <it-tab slot="tab" panel="o3">Tab 3</it-tab>
    <it-tab slot="tab" panel="o4" disabled>Tab 4 Disabilitato</it-tab>
    <it-tab-panel name="o1">Pannello 1</it-tab-panel>
    <it-tab-panel name="o2">Pannello 2</it-tab-panel>
    <it-tab-panel name="o3">Pannello 3</it-tab-panel>
    <it-tab-panel name="o4">Pannello 4</it-tab-panel>
  </it-tabs>
</section>

<!-- Tab a tutta larghezza -->
<section>
  <h2>Tab a tutta larghezza</h2>
  <it-tabs auto label="Navigazione a tutta larghezza">
    <it-tab slot="tab" panel="a1">Tab 1 Attivo</it-tab>
    <it-tab slot="tab" panel="a2">Link</it-tab>
    <it-tab slot="tab" panel="a3">Link</it-tab>
    <it-tab slot="tab" panel="a4" disabled>Disabilitato</it-tab>
    <it-tab-panel name="a1">Pannello 1</it-tab-panel>
    <it-tab-panel name="a2">Pannello 2</it-tab-panel>
    <it-tab-panel name="a3">Pannello 3</it-tab-panel>
    <it-tab-panel name="a4">Pannello 4</it-tab-panel>
  </it-tabs>
</section>

<!-- Tab con scrollbar nascosta -->
<section>
  <h2>Tab con scrollbar nascosta</h2>
  <it-tabs auto hide-scrollbar label="Navigazione con scrollbar nascosta">
    <it-tab slot="tab" panel="hs1">Voce di menu 1</it-tab>
    <it-tab slot="tab" panel="hs2">Voce di menu 2</it-tab>
    <it-tab slot="tab" panel="hs3">Voce di menu 3</it-tab>
    <it-tab slot="tab" panel="hs4">Voce di menu 4</it-tab>
    <it-tab slot="tab" panel="hs5">Voce di menu 5</it-tab>
    <it-tab slot="tab" panel="hs6" disabled>Disabilitato</it-tab>
    <it-tab-panel name="hs1">Pannello 1</it-tab-panel>
    <it-tab-panel name="hs2">Pannello 2</it-tab-panel>
    <it-tab-panel name="hs3">Pannello 3</it-tab-panel>
    <it-tab-panel name="hs4">Pannello 4</it-tab-panel>
    <it-tab-panel name="hs5">Pannello 5</it-tab-panel>
    <it-tab-panel name="hs6">Pannello 6</it-tab-panel>
  </it-tabs>
</section>

<!-- Tab con icona -->
<section>
  <h2>Tab con icona</h2>
  <it-tabs label="Navigazione con icona">
    <it-tab slot="tab" panel="i1">
      <it-icon name="it-star-outline" class="icon icon-sm"></it-icon>
      <span class="visually-hidden">Tab titolo 1</span>
    </it-tab>
    <it-tab slot="tab" panel="i2">
      <it-icon name="it-mail" class="icon icon-sm"></it-icon>
      <span class="visually-hidden">Tab titolo 2</span>
    </it-tab>
    <it-tab slot="tab" panel="i3">
      <it-icon name="it-settings" class="icon icon-sm"></it-icon>
      <span class="visually-hidden">Tab titolo 3</span>
    </it-tab>
    <it-tab slot="tab" panel="i4" disabled>
      <it-icon name="it-close" class="icon icon-sm"></it-icon>
      <span class="visually-hidden">Tab titolo 4 (disabilitato)</span>
    </it-tab>
    <it-tab-panel name="i1">Pannello 1</it-tab-panel>
    <it-tab-panel name="i2">Pannello 2</it-tab-panel>
    <it-tab-panel name="i3">Pannello 3</it-tab-panel>
    <it-tab-panel name="i4">Pannello 4</it-tab-panel>
  </it-tabs>
</section>

<!-- Tab con testo e icona -->
<section>
  <h2>Tab con testo e icona</h2>
  <it-tabs icon-text label="Navigazione con icona e testo">
    <it-tab slot="tab" panel="it1">
      <it-icon name="it-star-outline" class="icon icon-sm"></it-icon>
      Tab 1
    </it-tab>
    <it-tab slot="tab" panel="it2">
      <it-icon name="it-mail" class="icon icon-sm"></it-icon>
      Tab 2
    </it-tab>
    <it-tab slot="tab" panel="it3">
      <it-icon name="it-settings" class="icon icon-sm"></it-icon>
      Tab 3
    </it-tab>
    <it-tab slot="tab" panel="it4" disabled>
      <it-icon name="it-close" class="icon icon-sm"></it-icon>
      Tab 4 Disabilitato
    </it-tab>
    <it-tab-panel name="it1">Pannello 1</it-tab-panel>
    <it-tab-panel name="it2">Pannello 2</it-tab-panel>
    <it-tab-panel name="it3">Pannello 3</it-tab-panel>
    <it-tab-panel name="it4">Pannello 4</it-tab-panel>
  </it-tabs>
</section>

<!-- Tab verticali -->
<section>
  <h2>Tab verticali</h2>
  <it-tabs placement="start" label="Navigazione verticale">
    <it-tab slot="tab" panel="v1">Tab 1</it-tab>
    <it-tab slot="tab" panel="v2">Tab 2</it-tab>
    <it-tab slot="tab" panel="v3">Tab 3</it-tab>
    <it-tab-panel name="v1">Pannello 1</it-tab-panel>
    <it-tab-panel name="v2">Pannello 2</it-tab-panel>
    <it-tab-panel name="v3">Pannello 3</it-tab-panel>
  </it-tabs>
</section>

<!-- Tab verticali con sfondo -->
<section>
  <h2>Tab verticali con sfondo</h2>
  <it-tabs placement="start" vertical-background label="Navigazione verticale con sfondo">
    <it-tab slot="tab" panel="vb1">Tab 1</it-tab>
    <it-tab slot="tab" panel="vb2">Tab 2</it-tab>
    <it-tab slot="tab" panel="vb3">Tab 3</it-tab>
    <it-tab-panel name="vb1">Pannello 1</it-tab-panel>
    <it-tab-panel name="vb2">Pannello 2</it-tab-panel>
    <it-tab-panel name="vb3">Pannello 3</it-tab-panel>
  </it-tabs>
</section>

<!-- Tab tipo card -->
<section>
  <h2>Tab tipo card</h2>
  <it-tabs cards label="Navigazione card">
    <it-tab slot="tab" panel="c1">Tab 1</it-tab>
    <it-tab slot="tab" panel="c2">Tab 2</it-tab>
    <it-tab slot="tab" panel="c3">Tab 3</it-tab>
    <it-tab slot="tab" panel="c4" disabled>Tab 4 Disabilitato</it-tab>
    <it-tab-panel name="c1">Pannello 1</it-tab-panel>
    <it-tab-panel name="c2">Pannello 2</it-tab-panel>
    <it-tab-panel name="c3">Pannello 3</it-tab-panel>
    <it-tab-panel name="c4">Pannello 4</it-tab-panel>
  </it-tabs>
</section>

<!-- Tab con sfondo scuro -->
<section>
  <h2>Tab con sfondo scuro</h2>
  <it-tabs dark auto label="Navigazione scura">
    <it-tab slot="tab" panel="d1">Tab 1 Attivo</it-tab>
    <it-tab slot="tab" panel="d2">Tab 2</it-tab>
    <it-tab slot="tab" panel="d3">Tab 3</it-tab>
    <it-tab slot="tab" panel="d4" disabled>Tab 4 Disabilitato</it-tab>
    <it-tab-panel name="d1">Pannello 1</it-tab-panel>
    <it-tab-panel name="d2">Pannello 2</it-tab-panel>
    <it-tab-panel name="d3">Pannello 3</it-tab-panel>
    <it-tab-panel name="d4">Pannello 4</it-tab-panel>
  </it-tabs>
</section>

<!-- Tab scuri verticali -->
<section>
  <h2>Tab scuri verticali</h2>
  <it-tabs dark placement="start" icon-text label="Navigazione scura verticale">
    <it-tab slot="tab" panel="dv1">
      <it-icon name="it-star-outline" class="icon icon-sm"></it-icon>
      Tab 1
    </it-tab>
    <it-tab slot="tab" panel="dv2">
      <it-icon name="it-mail" class="icon icon-sm"></it-icon>
      Tab 2
    </it-tab>
    <it-tab slot="tab" panel="dv3">
      <it-icon name="it-settings" class="icon icon-sm"></it-icon>
      Tab 3
    </it-tab>
    <it-tab-panel name="dv1">Pannello 1</it-tab-panel>
    <it-tab-panel name="dv2">Pannello 2</it-tab-panel>
    <it-tab-panel name="dv3">Pannello 3</it-tab-panel>
  </it-tabs>
</section>

<!-- Tab in basso -->
<section>
  <h2>Tab in basso</h2>
  <it-tabs placement="bottom" label="Navigazione in basso">
    <it-tab slot="tab" panel="b1">Tab 1</it-tab>
    <it-tab slot="tab" panel="b2">Tab 2</it-tab>
    <it-tab slot="tab" panel="b3">Tab 3</it-tab>
    <it-tab slot="tab" panel="b4" disabled>Disabilitato</it-tab>
    <it-tab-panel name="b1">Pannello 1</it-tab-panel>
    <it-tab-panel name="b2">Pannello 2</it-tab-panel>
    <it-tab-panel name="b3">Pannello 3</it-tab-panel>
    <it-tab-panel name="b4">Pannello 4</it-tab-panel>
  </it-tabs>
</section>

<!-- Tab a sinistra -->
<section>
  <h2>Tab a sinistra</h2>
  <it-tabs placement="start" label="Navigazione a sinistra">
    <it-tab slot="tab" panel="s1">Tab 1</it-tab>
    <it-tab slot="tab" panel="s2">Tab 2</it-tab>
    <it-tab slot="tab" panel="s3">Tab 3</it-tab>
    <it-tab-panel name="s1">Pannello 1</it-tab-panel>
    <it-tab-panel name="s2">Pannello 2</it-tab-panel>
    <it-tab-panel name="s3">Pannello 3</it-tab-panel>
  </it-tabs>
</section>

<!-- Tab a destra -->
<section>
  <h2>Tab a destra</h2>
  <it-tabs placement="end" label="Navigazione a destra">
    <it-tab slot="tab" panel="e1">
      <it-icon name="it-star-outline" class="icon icon-sm"></it-icon>
      Tab 1
    </it-tab>
    <it-tab slot="tab" panel="e2">
      <it-icon name="it-mail" class="icon icon-sm"></it-icon>
      Tab 2
    </it-tab>
    <it-tab slot="tab" panel="e3">
      <it-icon name="it-settings" class="icon icon-sm"></it-icon>
      Tab 3
    </it-tab>
    <it-tab-panel name="e1">Pannello 1</it-tab-panel>
    <it-tab-panel name="e2">Pannello 2</it-tab-panel>
    <it-tab-panel name="e3">Pannello 3</it-tab-panel>
  </it-tabs>
</section>

<!-- Larghezza tablist verticale (--it-tabs-nav-size) -->
<section>
  <h2>Larghezza tablist verticale (--it-tabs-nav-size)</h2>
  <p>Larghezza fissa con <code>--it-tabs-nav-size: 220px</code>:</p>
  <it-tabs placement="start" label="Nav size fissa" style="--it-tabs-nav-size: 220px;">
    <it-tab slot="tab" panel="ns1">Tab 1</it-tab>
    <it-tab slot="tab" panel="ns2">Tab 2</it-tab>
    <it-tab slot="tab" panel="ns3">Tab 3</it-tab>
    <it-tab-panel name="ns1">Pannello 1</it-tab-panel>
    <it-tab-panel name="ns2">Pannello 2</it-tab-panel>
    <it-tab-panel name="ns3">Pannello 3</it-tab-panel>
  </it-tabs>
  <p>Larghezza proporzionale con <code>--it-tabs-nav-size: 30%</code> (placement start):</p>
  <it-tabs placement="start" label="Nav size proporzionale" style="--it-tabs-nav-size: 30%;">
    <it-tab slot="tab" panel="np1">Tab 1 con etichetta lunga</it-tab>
    <it-tab slot="tab" panel="np2">Tab 2</it-tab>
    <it-tab slot="tab" panel="np3">Tab 3</it-tab>
    <it-tab-panel name="np1">Pannello 1</it-tab-panel>
    <it-tab-panel name="np2">Pannello 2</it-tab-panel>
    <it-tab-panel name="np3">Pannello 3</it-tab-panel>
  </it-tabs>
</section>

<!-- Tab con effetto fade -->
<section>
  <h2>Tab con effetto fade</h2>
  <it-tabs label="Tab con effetto fade">
    <it-tab slot="tab" panel="f1">Tab 1</it-tab>
    <it-tab slot="tab" panel="f2">Tab 2</it-tab>
    <it-tab slot="tab" panel="f3">Tab 3</it-tab>
    <it-tab-panel fade name="f1">Pannello 1 — contenuto con dissolvenza in entrata.</it-tab-panel>
    <it-tab-panel fade name="f2">Pannello 2 — contenuto con dissolvenza in entrata.</it-tab-panel>
    <it-tab-panel fade name="f3">Pannello 3 — contenuto con dissolvenza in entrata.</it-tab-panel>
  </it-tabs>
</section>

<!-- Tab card con pulsanti aggiungi/elimina -->
<section>
  <h2>Tab card con pulsanti aggiungi/elimina</h2>
  <it-tabs cards dismissible label="Tab card con pulsanti">
    <it-tab slot="tab" panel="et1">Tab 1</it-tab>
    <it-tab slot="tab" panel="et2">Tab 2</it-tab>
    <it-tab slot="tab" panel="et3">Tab 3</it-tab>
    <it-tab slot="tab" panel="et4" disabled>Tab 4 Disabilitato</it-tab>
    <it-tab-panel name="et1">Contenuto del pannello <strong>Tab 1</strong></it-tab-panel>
    <it-tab-panel name="et2">Contenuto del pannello <strong>Tab 2</strong></it-tab-panel>
    <it-tab-panel name="et3">Contenuto del pannello <strong>Tab 3</strong></it-tab-panel>
    <it-tab-panel name="et4">Contenuto del pannello <strong>Tab 4 Disabilitato</strong></it-tab-panel>
    <it-button slot="after-tablist" class="after-tablist" variant="link" icon size="sm" it-aria-label="Aggiungi tab" on:click={handleAddTab}>
      <it-icon name="it-plus-circle" color="primary" size="sm"></it-icon>
    </it-button>
  </it-tabs>
</section>

<!-- Tab card con pulsanti aggiungi/elimina con logica personalizzata -->
<section>
  <h2>Tab card con pulsanti aggiungi/elimina con logica personalizzata</h2>
  <it-tabs cards dismissible label="Tab card con pulsanti con logica personalizzata" on:it-tab-close={handleCloseCustom}>
    <it-tab slot="tab" panel="et21">Tab 1</it-tab>
    <it-tab slot="tab" panel="et22">Tab 2</it-tab>
    <it-tab slot="tab" panel="et23">Tab 3</it-tab>
    <it-tab slot="tab" panel="et24" disabled>Tab 4 Disabilitato</it-tab>
    <it-tab-panel name="et21">Contenuto del pannello <strong>Tab 1</strong></it-tab-panel>
    <it-tab-panel name="et22">Contenuto del pannello <strong>Tab 2</strong></it-tab-panel>
    <it-tab-panel name="et23">Contenuto del pannello <strong>Tab 3</strong></it-tab-panel>
    <it-tab-panel name="et24">Contenuto del pannello <strong>Tab 4 Disabilitato</strong></it-tab-panel>
    <it-button slot="after-tablist" class="after-tablist" variant="link" icon size="sm" it-aria-label="Aggiungi tab" on:click={handleAddTabCustom}>
      <it-icon name="it-plus-circle" color="primary" size="sm"></it-icon>
    </it-button>
  </it-tabs>
</section>

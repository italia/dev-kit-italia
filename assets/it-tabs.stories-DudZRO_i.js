import{b as a}from"./iframe-dUoPoR-O.js";const x=["top","bottom","start","end"],I={$code:"it",$name:"Italiano",$dir:"ltr",closeActiveTabHint:"Puoi chiudere questo tab premendo Delete o Backspace da tastiera. Su dispositivi touch, doppio tap per chiudere questo tab."},t=n=>`Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus facilisis.
   Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis. (Pannello ${n})`,P=(n,k)=>a`
  <it-tabs
    label=${n.label??"Navigazione principale"}
    ?auto=${n.auto}
    ?hide-scrollbar=${n.hideScrollbar}
    ?vertical-background=${n.verticalBackground}
    ?dark=${n.dark}
    ?cards=${n.cards}
    ?dismissible=${n.dismissible}
    placement=${n.placement??"top"}
  >
    ${k.map((s,e)=>a`
        <it-tab slot="tab" panel=${s.panel} ?disabled=${s.disabled??!1}>${s.label}</it-tab>
        <it-tab-panel name=${s.panel}>${t(e+1)}</it-tab-panel>
      `)}
  </it-tabs>
`,V=[{label:"Tab 1 Attivo",panel:"tab1"},{label:"Tab 2",panel:"tab2"},{label:"Tab 3",panel:"tab3"},{label:"Tab 4 Disabilitato",panel:"tab4",disabled:!0}],L={title:"Componenti/Tabs",tags:["alpha","a11y-ok","web-component"],component:"it-tabs",args:{label:"Navigazione principale",auto:!1,hideScrollbar:!1,verticalBackground:!1,dark:!1,cards:!1,dismissible:!1,placement:"top"},argTypes:{label:{control:"text",description:"Testo dell'`aria-label` per la tablist. Consigliato quando non è presente un'intestazione visiva adiacente al componente.",name:"label",table:{defaultValue:{summary:""}}},auto:{control:"boolean",description:"Se `true`, i tab si espandono per occupare l'intera larghezza disponibile.",name:"auto",table:{defaultValue:{summary:"false"}}},hideScrollbar:{control:"boolean",description:"Se `true`, nasconde visivamente la scrollbar orizzontale. **Effetto visibile solo con `auto: true` in viewport intermedi (≥768px e <1200px).**",name:"hide-scrollbar",table:{defaultValue:{summary:"false"}}},verticalBackground:{control:"boolean",description:'Se `true`, applica uno sfondo primario chiaro sul tab selezionato. **Effetto visibile solo in layout verticale: `placement="start"` o `placement="end"`**.',name:"vertical-background",table:{defaultValue:{summary:"false"}}},dark:{control:"boolean",description:"Se `true`, abilita la variante con sfondo scuro per la tablist. **Ignorato quando `cards: true`, le due varianti non sono compatibili.**",name:"dark",table:{defaultValue:{summary:"false"}}},cards:{control:"boolean",description:'Se `true`, applica lo stile "card". Nota: `dismissible` è disponibile solo con `cards: true`.',name:"cards",table:{defaultValue:{summary:"false"}}},dismissible:{control:"boolean",description:"Se `true`, abilita la chiusura dei tab tramite pulsante × e tasti Delete/Backspace. **Funziona solo con `cards: true`, altrimenti non ha effetto.**",name:"dismissible",table:{defaultValue:{summary:"false"}}},placement:{control:"select",options:x,description:"Posizione della tablist rispetto ai pannelli. `start`/`end` attivano automaticamente il layout verticale.",name:"placement",table:{defaultValue:{summary:"top"}}}},parameters:{layout:"padded",pageLayout:"w-100"},decorators:[n=>a` <div style="min-height:250px; backgrond-color: #ececec; margin: auto;">${n()}</div> `]},r={name:"Esempio interattivo",tags:["!autodocs","!dev"],parameters:{docs:{canvas:{sourceState:"hidden"}}},render:n=>P(n,V)},c={name:"Tab orizzontali",render:()=>a`
    <it-tabs label="Navigazione principale">
      <it-tab slot="tab" panel="o1">Tab 1</it-tab>
      <it-tab slot="tab" panel="o2">Tab 2</it-tab>
      <it-tab slot="tab" panel="o3">Tab 3</it-tab>
      <it-tab slot="tab" panel="o4" disabled>Tab 4 Disabilitato</it-tab>
      <it-tab-panel name="o1">${t(1)}</it-tab-panel>
      <it-tab-panel name="o2">${t(2)}</it-tab-panel>
      <it-tab-panel name="o3">${t(3)}</it-tab-panel>
      <it-tab-panel name="o4">${t(4)}</it-tab-panel>
    </it-tabs>
  `},p={name:"Tab a tutta larghezza",render:()=>a`
    <it-tabs auto label="Navigazione a tutta larghezza">
      <it-tab slot="tab" panel="a1">Tab 1 Attivo</it-tab>
      <it-tab slot="tab" panel="a2">Link</it-tab>
      <it-tab slot="tab" panel="a3">Link</it-tab>
      <it-tab slot="tab" panel="a4" disabled>Disabilitato</it-tab>
      <it-tab-panel name="a1">${t(1)}</it-tab-panel>
      <it-tab-panel name="a2">${t(2)}</it-tab-panel>
      <it-tab-panel name="a3">${t(3)}</it-tab-panel>
      <it-tab-panel name="a4">${t(4)}</it-tab-panel>
    </it-tabs>
  `},d={name:"Tab con scrollbar nascosta",render:()=>a`
    <it-tabs auto hide-scrollbar label="Navigazione con scrollbar nascosta">
      <it-tab slot="tab" panel="hs1">Voce di menu 1</it-tab>
      <it-tab slot="tab" panel="hs2">Voce di menu 2</it-tab>
      <it-tab slot="tab" panel="hs3">Voce di menu 3</it-tab>
      <it-tab slot="tab" panel="hs4">Voce di menu 4</it-tab>
      <it-tab slot="tab" panel="hs5">Voce di menu 5</it-tab>
      <it-tab slot="tab" panel="hs6" disabled>Disabilitato</it-tab>
      <it-tab-panel name="hs1">${t(1)}</it-tab-panel>
      <it-tab-panel name="hs2">${t(2)}</it-tab-panel>
      <it-tab-panel name="hs3">${t(3)}</it-tab-panel>
      <it-tab-panel name="hs4">${t(4)}</it-tab-panel>
      <it-tab-panel name="hs5">${t(5)}</it-tab-panel>
      <it-tab-panel name="hs6">${t(6)}</it-tab-panel>
    </it-tabs>
  `},m={name:"Tab con icona",render:()=>a`
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
      <it-tab-panel name="i1">${t(1)}</it-tab-panel>
      <it-tab-panel name="i2">${t(2)}</it-tab-panel>
      <it-tab-panel name="i3">${t(3)}</it-tab-panel>
      <it-tab-panel name="i4">${t(4)}</it-tab-panel>
    </it-tabs>
  `},u={name:"Tab con testo e icona",render:()=>a`
    <it-tabs label="Navigazione con icona e testo">
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
      <it-tab-panel name="it1">${t(1)}</it-tab-panel>
      <it-tab-panel name="it2">${t(2)}</it-tab-panel>
      <it-tab-panel name="it3">${t(3)}</it-tab-panel>
      <it-tab-panel name="it4">${t(4)}</it-tab-panel>
    </it-tabs>
  `},T={name:"Tab verticali",render:()=>a`
    <it-tabs placement="start" label="Navigazione verticale">
      <it-tab slot="tab" panel="v1">Tab 1</it-tab>
      <it-tab slot="tab" panel="v2">Tab 2</it-tab>
      <it-tab slot="tab" panel="v3">Tab 3</it-tab>
      <it-tab-panel name="v1">${t(1)}</it-tab-panel>
      <it-tab-panel name="v2">${t(2)}</it-tab-panel>
      <it-tab-panel name="v3">${t(3)}</it-tab-panel>
    </it-tabs>
  `},g={name:"Tab verticali con sfondo",render:()=>a`
    <it-tabs placement="start" vertical-background label="Navigazione verticale con sfondo">
      <it-tab slot="tab" panel="vb1">Tab 1</it-tab>
      <it-tab slot="tab" panel="vb2">Tab 2</it-tab>
      <it-tab slot="tab" panel="vb3">Tab 3</it-tab>
      <it-tab-panel name="vb1">${t(1)}</it-tab-panel>
      <it-tab-panel name="vb2">${t(2)}</it-tab-panel>
      <it-tab-panel name="vb3">${t(3)}</it-tab-panel>
    </it-tabs>
  `},v={name:"Tab tipo card",render:()=>a`
    <it-tabs cards label="Navigazione card">
      <it-tab slot="tab" panel="c1">Tab 1</it-tab>
      <it-tab slot="tab" panel="c2">Tab 2</it-tab>
      <it-tab slot="tab" panel="c3">Tab 3</it-tab>
      <it-tab slot="tab" panel="c4" disabled>Tab 4 Disabilitato</it-tab>
      <it-tab-panel name="c1">${t(1)}</it-tab-panel>
      <it-tab-panel name="c2">${t(2)}</it-tab-panel>
      <it-tab-panel name="c3">${t(3)}</it-tab-panel>
      <it-tab-panel name="c4">${t(4)}</it-tab-panel>
    </it-tabs>
  `},$={name:"Tab con sfondo scuro",render:()=>a`
    <it-tabs dark auto label="Navigazione scura">
      <it-tab slot="tab" panel="d1">Tab 1 Attivo</it-tab>
      <it-tab slot="tab" panel="d2">Tab 2</it-tab>
      <it-tab slot="tab" panel="d3">Tab 3</it-tab>
      <it-tab slot="tab" panel="d4" disabled>Tab 4 Disabilitato</it-tab>
      <it-tab-panel name="d1">${t(1)}</it-tab-panel>
      <it-tab-panel name="d2">${t(2)}</it-tab-panel>
      <it-tab-panel name="d3">${t(3)}</it-tab-panel>
      <it-tab-panel name="d4">${t(4)}</it-tab-panel>
    </it-tabs>
  `},C={name:"Tab scuri verticali",render:()=>a`
    <it-tabs dark placement="start" label="Navigazione scura verticale">
      <it-tab slot="tab" panel="dv1">
        Tab 1
        <it-icon name="it-star-outline" class="icon icon-sm"></it-icon>
      </it-tab>
      <it-tab slot="tab" panel="dv2">
        Tab 2
        <it-icon name="it-mail" class="icon icon-sm"></it-icon>
      </it-tab>
      <it-tab slot="tab" panel="dv3">
        Tab 3
        <it-icon name="it-settings" class="icon icon-sm"></it-icon>
      </it-tab>
      <it-tab-panel name="dv1">${t(1)}</it-tab-panel>
      <it-tab-panel name="dv2">${t(2)}</it-tab-panel>
      <it-tab-panel name="dv3">${t(3)}</it-tab-panel>
    </it-tabs>
  `},z={name:"Tab in basso",render:()=>a`
    <it-tabs placement="bottom" label="Navigazione in basso">
      <it-tab slot="tab" panel="b1">Tab 1</it-tab>
      <it-tab slot="tab" panel="b2">Tab 2</it-tab>
      <it-tab slot="tab" panel="b3">Tab 3</it-tab>
      <it-tab slot="tab" panel="b4" disabled>Disabilitato</it-tab>
      <it-tab-panel name="b1">${t(1)}</it-tab-panel>
      <it-tab-panel name="b2">${t(2)}</it-tab-panel>
      <it-tab-panel name="b3">${t(3)}</it-tab-panel>
      <it-tab-panel name="b4">${t(4)}</it-tab-panel>
    </it-tabs>
  `},h={name:"Tab a sinistra",render:()=>a`
    <it-tabs placement="start" label="Navigazione a sinistra">
      <it-tab slot="tab" panel="s1">Tab 1</it-tab>
      <it-tab slot="tab" panel="s2">Tab 2</it-tab>
      <it-tab slot="tab" panel="s3">Tab 3</it-tab>
      <it-tab-panel name="s1">${t(1)}</it-tab-panel>
      <it-tab-panel name="s2">${t(2)}</it-tab-panel>
      <it-tab-panel name="s3">${t(3)}</it-tab-panel>
    </it-tabs>
  `},f={name:"Tab a destra",render:()=>a`
    <it-tabs placement="end" label="Navigazione a destra">
      <it-tab slot="tab" panel="e1">
        Tab 1
        <it-icon name="it-star-outline" class="icon icon-sm"></it-icon>
      </it-tab>
      <it-tab slot="tab" panel="e2">
        Tab 2
        <it-icon name="it-mail" class="icon icon-sm"></it-icon>
      </it-tab>
      <it-tab slot="tab" panel="e3">
        Tab 3
        <it-icon name="it-settings" class="icon icon-sm"></it-icon>
      </it-tab>
      <it-tab-panel name="e1">${t(1)}</it-tab-panel>
      <it-tab-panel name="e2">${t(2)}</it-tab-panel>
      <it-tab-panel name="e3">${t(3)}</it-tab-panel>
    </it-tabs>
  `},y={name:"Larghezza tablist verticale (--it-tabs-nav-size)",decorators:[n=>a`
      <div style="min-height: 300px; display: flex; flex-direction: column; gap: 2rem; margin: auto;">${n()}</div>
    `],render:()=>a`
    <div>
      <p style="margin-bottom: 0.5rem; font-weight: 600;"><code>--it-tabs-nav-size: 220px</code> — larghezza fissa</p>
      <it-tabs placement="start" label="Nav size fissa" style="--it-tabs-nav-size: 220px;">
        <it-tab slot="tab" panel="ns1">Tab 1</it-tab>
        <it-tab slot="tab" panel="ns2">Tab 2</it-tab>
        <it-tab slot="tab" panel="ns3">Tab 3</it-tab>
        <it-tab-panel name="ns1">${t(1)}</it-tab-panel>
        <it-tab-panel name="ns2">${t(2)}</it-tab-panel>
        <it-tab-panel name="ns3">${t(3)}</it-tab-panel>
      </it-tabs>
    </div>
    <div>
      <p style="margin-bottom: 0.5rem; font-weight: 600;">
        <code>--it-tabs-nav-size: 50%</code> — larghezza proporzionale (placement start)
      </p>
      <it-tabs placement="start" label="Nav size proporzionale" style="--it-tabs-nav-size: 50%;">
        <it-tab slot="tab" panel="np1">Tab 1 con etichetta lunga</it-tab>
        <it-tab slot="tab" panel="np2">Tab 2</it-tab>
        <it-tab slot="tab" panel="np3">Tab 3</it-tab>
        <it-tab-panel name="np1">${t(1)}</it-tab-panel>
        <it-tab-panel name="np2">${t(2)}</it-tab-panel>
        <it-tab-panel name="np3">${t(3)}</it-tab-panel>
      </it-tabs>
    </div>
  `},S={name:"Effetto fade",render:()=>a`
    <it-tabs label="Tab con effetto fade">
      <it-tab slot="tab" panel="f1">Tab 1</it-tab>
      <it-tab slot="tab" panel="f2">Tab 2</it-tab>
      <it-tab slot="tab" panel="f3">Tab 3</it-tab>
      <it-tab-panel fade name="f1">Pannello 1 — contenuto con dissolvenza in entrata.</it-tab-panel>
      <it-tab-panel fade name="f2">Pannello 2 — contenuto con dissolvenza in entrata.</it-tab-panel>
      <it-tab-panel fade name="f3">Pannello 3 — contenuto con dissolvenza in entrata.</it-tab-panel>
    </it-tabs>
  `},A={name:"Tab card con pulsanti aggiungi/elimina",args:{auto:!0},render:()=>{let n=5;return a`
      <it-tabs cards dismissible label="Tab card con pulsanti">
        <it-tab slot="tab" panel="et1">Tab 1</it-tab>
        <it-tab slot="tab" panel="et2">Tab 2</it-tab>
        <it-tab slot="tab" panel="et3">Tab 3</it-tab>
        <it-tab slot="tab" panel="et4" disabled>Tab 4 Disabilitato</it-tab>
        <it-tab-panel name="et1">Contenuto del pannello <strong>Tab 1</strong></it-tab-panel>
        <it-tab-panel name="et2">Contenuto del pannello <strong>Tab 2</strong></it-tab-panel>
        <it-tab-panel name="et3">Contenuto del pannello <strong>Tab 3</strong></it-tab-panel>
        <it-tab-panel name="et4">Contenuto del pannello <strong>Tab 4 Disabilitato</strong></it-tab-panel>
        <it-button
          slot="after-tablist"
          class="after-tablist"
          variant="link"
          icon
          size="sm"
          it-aria-label="Aggiungi tab"
          @click=${s=>{const o=s.currentTarget.closest("it-tabs"),i=n++,l=document.createElement("it-tab");l.setAttribute("slot","tab"),l.setAttribute("panel",`et${i}`),l.textContent=`Tab ${i}`;const b=document.createElement("it-tab-panel");b.setAttribute("name",`et${i}`),b.innerHTML=`Contenuto del pannello <strong>Tab ${i}</strong>`,o.addTab(l,b)}}
        >
          <it-icon name="it-plus-circle" color="primary" size="sm"></it-icon>
        </it-button>
      </it-tabs>
    `}},E={name:"Tab card con chiusura personalizzata",render:()=>{let n=5;return a`
      <it-tabs cards dismissible label="Tab card con chiusura personalizzata" @it-tab-close=${e=>{e.preventDefault();const o=e.currentTarget,i=o.querySelector(`it-tab[panel="${e.detail.panel}"]`)?.textContent?.trim();confirm(`Chiudere "${i}"?`)&&o.close(e.detail.panel)}}>
        <it-tab slot="tab" panel="cp1">Tab 1</it-tab>
        <it-tab slot="tab" panel="cp2">Tab 2</it-tab>
        <it-tab slot="tab" panel="cp3">Tab 3</it-tab>
        <it-tab slot="tab" panel="cp4" disabled>Tab 4 Disabilitato</it-tab>
        <it-tab-panel name="cp1">Contenuto del pannello <strong>Tab 1</strong></it-tab-panel>
        <it-tab-panel name="cp2">Contenuto del pannello <strong>Tab 2</strong></it-tab-panel>
        <it-tab-panel name="cp3">Contenuto del pannello <strong>Tab 3</strong></it-tab-panel>
        <it-tab-panel name="cp4">Contenuto del pannello <strong>Tab 4 Disabilitato</strong></it-tab-panel>
        <it-button
          slot="after-tablist"
          class="after-tablist"
          variant="link"
          icon
          size="sm"
          it-aria-label="Aggiungi tab"
          @click=${e=>{const i=e.currentTarget.closest("it-tabs"),l=n++,b=document.createElement("it-tab");b.setAttribute("slot","tab"),b.setAttribute("panel",`cp${l}`),b.textContent=`Tab ${l}`;const N=document.createElement("it-tab-panel");N.setAttribute("name",`cp${l}`),N.innerHTML=`Contenuto del pannello <strong>Tab ${l}</strong>`,i.addTab(b,N)}}
        >
          <it-icon name="it-plus-circle" color="primary" size="sm"></it-icon>
        </it-button>
      </it-tabs>
    `}},j={name:"Tab card con chiusura personalizzata (JS source)",parameters:{docs:{source:{language:"html",code:`<it-tabs id="editable-tabs" cards dismissible label="Tab card con chiusura personalizzata">
  <it-tab slot="tab" panel="cj1">Tab 1</it-tab>
  <it-tab slot="tab" panel="cj2">Tab 2</it-tab>
  <it-tab slot="tab" panel="cj3">Tab 3</it-tab>
  <it-tab slot="tab" panel="cj4" disabled>Tab 4 Disabilitato</it-tab>

  <it-tab-panel name="cj1">Contenuto del pannello <strong>Tab 1</strong></it-tab-panel>
  <it-tab-panel name="cj2">Contenuto del pannello <strong>Tab 2</strong></it-tab-panel>
  <it-tab-panel name="cj3">Contenuto del pannello <strong>Tab 3</strong></it-tab-panel>
  <it-tab-panel name="cj4">Contenuto del pannello <strong>Tab 4 Disabilitato</strong></it-tab-panel>

  <it-button slot="after-tablist" id="add-tab-btn" variant="link" icon size="sm" it-aria-label="Aggiungi tab">
    <it-icon name="it-plus-circle" color="primary" size="sm"></it-icon>
  </it-button>
</it-tabs>

<script>
  const host = document.getElementById('editable-tabs');
  let counter = 5;

  host.addEventListener('it-tab-close', (e) => {
    e.preventDefault();
    const label = host.querySelector('it-tab[panel="' + e.detail.panel + '"]')?.textContent.trim();
    if (confirm('Chiudere "' + label + '"?')) host.close(e.detail.panel);
  });

  document.getElementById('add-tab-btn').addEventListener('click', () => {
    const n = counter++;
    const tab = document.createElement('it-tab');
    tab.setAttribute('slot', 'tab');
    tab.setAttribute('panel', 'cj' + n);
    tab.textContent = 'Tab ' + n;
    const panel = document.createElement('it-tab-panel');
    panel.setAttribute('name', 'cj' + n);
    panel.innerHTML = 'Contenuto del pannello <strong>Tab ' + n + '</strong>';
    host.addTab(tab, panel);
  });
<\/script>`},canvas:{sourceState:"shown"}}},render:()=>{let n=5;return a`
      <it-tabs cards dismissible label="Tab card con chiusura personalizzata" @it-tab-close=${e=>{e.preventDefault();const o=e.currentTarget,i=o.querySelector(`it-tab[panel="${e.detail.panel}"]`)?.textContent?.trim();confirm(`Chiudere "${i}"?`)&&o.close(e.detail.panel)}}>
        <it-tab slot="tab" panel="cj1">Tab 1</it-tab>
        <it-tab slot="tab" panel="cj2">Tab 2</it-tab>
        <it-tab slot="tab" panel="cj3">Tab 3</it-tab>
        <it-tab slot="tab" panel="cj4" disabled>Tab 4 Disabilitato</it-tab>
        <it-tab-panel name="cj1">Contenuto del pannello <strong>Tab 1</strong></it-tab-panel>
        <it-tab-panel name="cj2">Contenuto del pannello <strong>Tab 2</strong></it-tab-panel>
        <it-tab-panel name="cj3">Contenuto del pannello <strong>Tab 3</strong></it-tab-panel>
        <it-tab-panel name="cj4">Contenuto del pannello <strong>Tab 4 Disabilitato</strong></it-tab-panel>
        <it-button
          slot="after-tablist"
          class="after-tablist"
          variant="link"
          icon
          size="sm"
          it-aria-label="Aggiungi tab"
          @click=${e=>{const o=e.currentTarget.closest("it-tabs"),i=n++,l=document.createElement("it-tab");l.setAttribute("slot","tab"),l.setAttribute("panel",`cj${i}`),l.textContent=`Tab ${i}`;const b=document.createElement("it-tab-panel");b.setAttribute("name",`cj${i}`),b.innerHTML=`Contenuto del pannello <strong>Tab ${i}</strong>`,o.addTab(l,b)}}
        >
          <it-icon name="it-plus-circle" color="primary" size="sm"></it-icon>
        </it-button>
      </it-tabs>
    `}},D={name:"i18n",tags:["!dev"],render:()=>a`<div class="hide-preview"></div>`,parameters:{viewMode:"docs",docs:{description:{story:`
Per questo componente sono disponibili alcune stringhe traducibili tramite l'[utility di internazionalizzazione](/docs/i18n-internazionalizzazione--documentazione).

\`\`\`js
const translation = ${JSON.stringify(I,null,2)}
\`\`\`
`}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Esempio interattivo',
  tags: ['!autodocs', '!dev'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'hidden'
      }
    }
  },
  render: args => renderTabs(args, defaultTabs)
}`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Tab orizzontali',
  render: () => html\`
    <it-tabs label="Navigazione principale">
      <it-tab slot="tab" panel="o1">Tab 1</it-tab>
      <it-tab slot="tab" panel="o2">Tab 2</it-tab>
      <it-tab slot="tab" panel="o3">Tab 3</it-tab>
      <it-tab slot="tab" panel="o4" disabled>Tab 4 Disabilitato</it-tab>
      <it-tab-panel name="o1">\${panelContent(1)}</it-tab-panel>
      <it-tab-panel name="o2">\${panelContent(2)}</it-tab-panel>
      <it-tab-panel name="o3">\${panelContent(3)}</it-tab-panel>
      <it-tab-panel name="o4">\${panelContent(4)}</it-tab-panel>
    </it-tabs>
  \`
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Tab a tutta larghezza',
  render: () => html\`
    <it-tabs auto label="Navigazione a tutta larghezza">
      <it-tab slot="tab" panel="a1">Tab 1 Attivo</it-tab>
      <it-tab slot="tab" panel="a2">Link</it-tab>
      <it-tab slot="tab" panel="a3">Link</it-tab>
      <it-tab slot="tab" panel="a4" disabled>Disabilitato</it-tab>
      <it-tab-panel name="a1">\${panelContent(1)}</it-tab-panel>
      <it-tab-panel name="a2">\${panelContent(2)}</it-tab-panel>
      <it-tab-panel name="a3">\${panelContent(3)}</it-tab-panel>
      <it-tab-panel name="a4">\${panelContent(4)}</it-tab-panel>
    </it-tabs>
  \`
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Tab con scrollbar nascosta',
  render: () => html\`
    <it-tabs auto hide-scrollbar label="Navigazione con scrollbar nascosta">
      <it-tab slot="tab" panel="hs1">Voce di menu 1</it-tab>
      <it-tab slot="tab" panel="hs2">Voce di menu 2</it-tab>
      <it-tab slot="tab" panel="hs3">Voce di menu 3</it-tab>
      <it-tab slot="tab" panel="hs4">Voce di menu 4</it-tab>
      <it-tab slot="tab" panel="hs5">Voce di menu 5</it-tab>
      <it-tab slot="tab" panel="hs6" disabled>Disabilitato</it-tab>
      <it-tab-panel name="hs1">\${panelContent(1)}</it-tab-panel>
      <it-tab-panel name="hs2">\${panelContent(2)}</it-tab-panel>
      <it-tab-panel name="hs3">\${panelContent(3)}</it-tab-panel>
      <it-tab-panel name="hs4">\${panelContent(4)}</it-tab-panel>
      <it-tab-panel name="hs5">\${panelContent(5)}</it-tab-panel>
      <it-tab-panel name="hs6">\${panelContent(6)}</it-tab-panel>
    </it-tabs>
  \`
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Tab con icona',
  render: () => html\`
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
      <it-tab-panel name="i1">\${panelContent(1)}</it-tab-panel>
      <it-tab-panel name="i2">\${panelContent(2)}</it-tab-panel>
      <it-tab-panel name="i3">\${panelContent(3)}</it-tab-panel>
      <it-tab-panel name="i4">\${panelContent(4)}</it-tab-panel>
    </it-tabs>
  \`
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Tab con testo e icona',
  render: () => html\`
    <it-tabs label="Navigazione con icona e testo">
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
      <it-tab-panel name="it1">\${panelContent(1)}</it-tab-panel>
      <it-tab-panel name="it2">\${panelContent(2)}</it-tab-panel>
      <it-tab-panel name="it3">\${panelContent(3)}</it-tab-panel>
      <it-tab-panel name="it4">\${panelContent(4)}</it-tab-panel>
    </it-tabs>
  \`
}`,...u.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Tab verticali',
  render: () => html\`
    <it-tabs placement="start" label="Navigazione verticale">
      <it-tab slot="tab" panel="v1">Tab 1</it-tab>
      <it-tab slot="tab" panel="v2">Tab 2</it-tab>
      <it-tab slot="tab" panel="v3">Tab 3</it-tab>
      <it-tab-panel name="v1">\${panelContent(1)}</it-tab-panel>
      <it-tab-panel name="v2">\${panelContent(2)}</it-tab-panel>
      <it-tab-panel name="v3">\${panelContent(3)}</it-tab-panel>
    </it-tabs>
  \`
}`,...T.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Tab verticali con sfondo',
  render: () => html\`
    <it-tabs placement="start" vertical-background label="Navigazione verticale con sfondo">
      <it-tab slot="tab" panel="vb1">Tab 1</it-tab>
      <it-tab slot="tab" panel="vb2">Tab 2</it-tab>
      <it-tab slot="tab" panel="vb3">Tab 3</it-tab>
      <it-tab-panel name="vb1">\${panelContent(1)}</it-tab-panel>
      <it-tab-panel name="vb2">\${panelContent(2)}</it-tab-panel>
      <it-tab-panel name="vb3">\${panelContent(3)}</it-tab-panel>
    </it-tabs>
  \`
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Tab tipo card',
  render: () => html\`
    <it-tabs cards label="Navigazione card">
      <it-tab slot="tab" panel="c1">Tab 1</it-tab>
      <it-tab slot="tab" panel="c2">Tab 2</it-tab>
      <it-tab slot="tab" panel="c3">Tab 3</it-tab>
      <it-tab slot="tab" panel="c4" disabled>Tab 4 Disabilitato</it-tab>
      <it-tab-panel name="c1">\${panelContent(1)}</it-tab-panel>
      <it-tab-panel name="c2">\${panelContent(2)}</it-tab-panel>
      <it-tab-panel name="c3">\${panelContent(3)}</it-tab-panel>
      <it-tab-panel name="c4">\${panelContent(4)}</it-tab-panel>
    </it-tabs>
  \`
}`,...v.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  name: 'Tab con sfondo scuro',
  render: () => html\`
    <it-tabs dark auto label="Navigazione scura">
      <it-tab slot="tab" panel="d1">Tab 1 Attivo</it-tab>
      <it-tab slot="tab" panel="d2">Tab 2</it-tab>
      <it-tab slot="tab" panel="d3">Tab 3</it-tab>
      <it-tab slot="tab" panel="d4" disabled>Tab 4 Disabilitato</it-tab>
      <it-tab-panel name="d1">\${panelContent(1)}</it-tab-panel>
      <it-tab-panel name="d2">\${panelContent(2)}</it-tab-panel>
      <it-tab-panel name="d3">\${panelContent(3)}</it-tab-panel>
      <it-tab-panel name="d4">\${panelContent(4)}</it-tab-panel>
    </it-tabs>
  \`
}`,...$.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Tab scuri verticali',
  render: () => html\`
    <it-tabs dark placement="start" label="Navigazione scura verticale">
      <it-tab slot="tab" panel="dv1">
        Tab 1
        <it-icon name="it-star-outline" class="icon icon-sm"></it-icon>
      </it-tab>
      <it-tab slot="tab" panel="dv2">
        Tab 2
        <it-icon name="it-mail" class="icon icon-sm"></it-icon>
      </it-tab>
      <it-tab slot="tab" panel="dv3">
        Tab 3
        <it-icon name="it-settings" class="icon icon-sm"></it-icon>
      </it-tab>
      <it-tab-panel name="dv1">\${panelContent(1)}</it-tab-panel>
      <it-tab-panel name="dv2">\${panelContent(2)}</it-tab-panel>
      <it-tab-panel name="dv3">\${panelContent(3)}</it-tab-panel>
    </it-tabs>
  \`
}`,...C.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: 'Tab in basso',
  render: () => html\`
    <it-tabs placement="bottom" label="Navigazione in basso">
      <it-tab slot="tab" panel="b1">Tab 1</it-tab>
      <it-tab slot="tab" panel="b2">Tab 2</it-tab>
      <it-tab slot="tab" panel="b3">Tab 3</it-tab>
      <it-tab slot="tab" panel="b4" disabled>Disabilitato</it-tab>
      <it-tab-panel name="b1">\${panelContent(1)}</it-tab-panel>
      <it-tab-panel name="b2">\${panelContent(2)}</it-tab-panel>
      <it-tab-panel name="b3">\${panelContent(3)}</it-tab-panel>
      <it-tab-panel name="b4">\${panelContent(4)}</it-tab-panel>
    </it-tabs>
  \`
}`,...z.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Tab a sinistra',
  render: () => html\`
    <it-tabs placement="start" label="Navigazione a sinistra">
      <it-tab slot="tab" panel="s1">Tab 1</it-tab>
      <it-tab slot="tab" panel="s2">Tab 2</it-tab>
      <it-tab slot="tab" panel="s3">Tab 3</it-tab>
      <it-tab-panel name="s1">\${panelContent(1)}</it-tab-panel>
      <it-tab-panel name="s2">\${panelContent(2)}</it-tab-panel>
      <it-tab-panel name="s3">\${panelContent(3)}</it-tab-panel>
    </it-tabs>
  \`
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Tab a destra',
  render: () => html\`
    <it-tabs placement="end" label="Navigazione a destra">
      <it-tab slot="tab" panel="e1">
        Tab 1
        <it-icon name="it-star-outline" class="icon icon-sm"></it-icon>
      </it-tab>
      <it-tab slot="tab" panel="e2">
        Tab 2
        <it-icon name="it-mail" class="icon icon-sm"></it-icon>
      </it-tab>
      <it-tab slot="tab" panel="e3">
        Tab 3
        <it-icon name="it-settings" class="icon icon-sm"></it-icon>
      </it-tab>
      <it-tab-panel name="e1">\${panelContent(1)}</it-tab-panel>
      <it-tab-panel name="e2">\${panelContent(2)}</it-tab-panel>
      <it-tab-panel name="e3">\${panelContent(3)}</it-tab-panel>
    </it-tabs>
  \`
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Larghezza tablist verticale (--it-tabs-nav-size)',
  decorators: [Story => html\`
      <div style="min-height: 300px; display: flex; flex-direction: column; gap: 2rem; margin: auto;">\${Story()}</div>
    \`],
  render: () => html\`
    <div>
      <p style="margin-bottom: 0.5rem; font-weight: 600;"><code>--it-tabs-nav-size: 220px</code> — larghezza fissa</p>
      <it-tabs placement="start" label="Nav size fissa" style="--it-tabs-nav-size: 220px;">
        <it-tab slot="tab" panel="ns1">Tab 1</it-tab>
        <it-tab slot="tab" panel="ns2">Tab 2</it-tab>
        <it-tab slot="tab" panel="ns3">Tab 3</it-tab>
        <it-tab-panel name="ns1">\${panelContent(1)}</it-tab-panel>
        <it-tab-panel name="ns2">\${panelContent(2)}</it-tab-panel>
        <it-tab-panel name="ns3">\${panelContent(3)}</it-tab-panel>
      </it-tabs>
    </div>
    <div>
      <p style="margin-bottom: 0.5rem; font-weight: 600;">
        <code>--it-tabs-nav-size: 50%</code> — larghezza proporzionale (placement start)
      </p>
      <it-tabs placement="start" label="Nav size proporzionale" style="--it-tabs-nav-size: 50%;">
        <it-tab slot="tab" panel="np1">Tab 1 con etichetta lunga</it-tab>
        <it-tab slot="tab" panel="np2">Tab 2</it-tab>
        <it-tab slot="tab" panel="np3">Tab 3</it-tab>
        <it-tab-panel name="np1">\${panelContent(1)}</it-tab-panel>
        <it-tab-panel name="np2">\${panelContent(2)}</it-tab-panel>
        <it-tab-panel name="np3">\${panelContent(3)}</it-tab-panel>
      </it-tabs>
    </div>
  \`
}`,...y.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Effetto fade',
  render: () => html\`
    <it-tabs label="Tab con effetto fade">
      <it-tab slot="tab" panel="f1">Tab 1</it-tab>
      <it-tab slot="tab" panel="f2">Tab 2</it-tab>
      <it-tab slot="tab" panel="f3">Tab 3</it-tab>
      <it-tab-panel fade name="f1">Pannello 1 — contenuto con dissolvenza in entrata.</it-tab-panel>
      <it-tab-panel fade name="f2">Pannello 2 — contenuto con dissolvenza in entrata.</it-tab-panel>
      <it-tab-panel fade name="f3">Pannello 3 — contenuto con dissolvenza in entrata.</it-tab-panel>
    </it-tabs>
  \`
}`,...S.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'Tab card con pulsanti aggiungi/elimina',
  args: {
    auto: true
  },
  render: () => {
    let counter = 5;
    const onAdd = (e: Event) => {
      const addBtn = e.currentTarget as Element;
      const itTabs = addBtn.closest('it-tabs')! as ItTabs;
      const n = counter++;
      const tab = document.createElement('it-tab') as ItTab;
      tab.setAttribute('slot', 'tab');
      tab.setAttribute('panel', \`et\${n}\`);
      tab.textContent = \`Tab \${n}\`;
      const panel = document.createElement('it-tab-panel') as ItTabPanel;
      panel.setAttribute('name', \`et\${n}\`);
      panel.innerHTML = \`Contenuto del pannello <strong>Tab \${n}</strong>\`;
      itTabs.addTab(tab, panel);
    };
    return html\`
      <it-tabs cards dismissible label="Tab card con pulsanti">
        <it-tab slot="tab" panel="et1">Tab 1</it-tab>
        <it-tab slot="tab" panel="et2">Tab 2</it-tab>
        <it-tab slot="tab" panel="et3">Tab 3</it-tab>
        <it-tab slot="tab" panel="et4" disabled>Tab 4 Disabilitato</it-tab>
        <it-tab-panel name="et1">Contenuto del pannello <strong>Tab 1</strong></it-tab-panel>
        <it-tab-panel name="et2">Contenuto del pannello <strong>Tab 2</strong></it-tab-panel>
        <it-tab-panel name="et3">Contenuto del pannello <strong>Tab 3</strong></it-tab-panel>
        <it-tab-panel name="et4">Contenuto del pannello <strong>Tab 4 Disabilitato</strong></it-tab-panel>
        <it-button
          slot="after-tablist"
          class="after-tablist"
          variant="link"
          icon
          size="sm"
          it-aria-label="Aggiungi tab"
          @click=\${onAdd}
        >
          <it-icon name="it-plus-circle" color="primary" size="sm"></it-icon>
        </it-button>
      </it-tabs>
    \`;
  }
}`,...A.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Tab card con chiusura personalizzata',
  render: () => {
    let counter = 5;
    const onClose = (e: CustomEvent<ItTabCloseEventDetail>) => {
      e.preventDefault();
      const itTabs = e.currentTarget as ItTabs;
      const label = itTabs.querySelector(\`it-tab[panel="\${e.detail.panel}"]\`)?.textContent?.trim();
      if (confirm(\`Chiudere "\${label}"?\`)) itTabs.close(e.detail.panel);
    };
    const onAdd = (e: Event) => {
      const addBtn = e.currentTarget as Element;
      const itTabs = addBtn.closest('it-tabs')! as ItTabs;
      const n = counter++;
      const tab = document.createElement('it-tab') as ItTab;
      tab.setAttribute('slot', 'tab');
      tab.setAttribute('panel', \`cp\${n}\`);
      tab.textContent = \`Tab \${n}\`;
      const panel = document.createElement('it-tab-panel') as ItTabPanel;
      panel.setAttribute('name', \`cp\${n}\`);
      panel.innerHTML = \`Contenuto del pannello <strong>Tab \${n}</strong>\`;
      itTabs.addTab(tab, panel);
    };
    return html\`
      <it-tabs cards dismissible label="Tab card con chiusura personalizzata" @it-tab-close=\${onClose}>
        <it-tab slot="tab" panel="cp1">Tab 1</it-tab>
        <it-tab slot="tab" panel="cp2">Tab 2</it-tab>
        <it-tab slot="tab" panel="cp3">Tab 3</it-tab>
        <it-tab slot="tab" panel="cp4" disabled>Tab 4 Disabilitato</it-tab>
        <it-tab-panel name="cp1">Contenuto del pannello <strong>Tab 1</strong></it-tab-panel>
        <it-tab-panel name="cp2">Contenuto del pannello <strong>Tab 2</strong></it-tab-panel>
        <it-tab-panel name="cp3">Contenuto del pannello <strong>Tab 3</strong></it-tab-panel>
        <it-tab-panel name="cp4">Contenuto del pannello <strong>Tab 4 Disabilitato</strong></it-tab-panel>
        <it-button
          slot="after-tablist"
          class="after-tablist"
          variant="link"
          icon
          size="sm"
          it-aria-label="Aggiungi tab"
          @click=\${onAdd}
        >
          <it-icon name="it-plus-circle" color="primary" size="sm"></it-icon>
        </it-button>
      </it-tabs>
    \`;
  }
}`,...E.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'Tab card con chiusura personalizzata (JS source)',
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: \`<it-tabs id="editable-tabs" cards dismissible label="Tab card con chiusura personalizzata">
  <it-tab slot="tab" panel="cj1">Tab 1</it-tab>
  <it-tab slot="tab" panel="cj2">Tab 2</it-tab>
  <it-tab slot="tab" panel="cj3">Tab 3</it-tab>
  <it-tab slot="tab" panel="cj4" disabled>Tab 4 Disabilitato</it-tab>

  <it-tab-panel name="cj1">Contenuto del pannello <strong>Tab 1</strong></it-tab-panel>
  <it-tab-panel name="cj2">Contenuto del pannello <strong>Tab 2</strong></it-tab-panel>
  <it-tab-panel name="cj3">Contenuto del pannello <strong>Tab 3</strong></it-tab-panel>
  <it-tab-panel name="cj4">Contenuto del pannello <strong>Tab 4 Disabilitato</strong></it-tab-panel>

  <it-button slot="after-tablist" id="add-tab-btn" variant="link" icon size="sm" it-aria-label="Aggiungi tab">
    <it-icon name="it-plus-circle" color="primary" size="sm"></it-icon>
  </it-button>
</it-tabs>

<script>
  const host = document.getElementById('editable-tabs');
  let counter = 5;

  host.addEventListener('it-tab-close', (e) => {
    e.preventDefault();
    const label = host.querySelector('it-tab[panel="' + e.detail.panel + '"]')?.textContent.trim();
    if (confirm('Chiudere "' + label + '"?')) host.close(e.detail.panel);
  });

  document.getElementById('add-tab-btn').addEventListener('click', () => {
    const n = counter++;
    const tab = document.createElement('it-tab');
    tab.setAttribute('slot', 'tab');
    tab.setAttribute('panel', 'cj' + n);
    tab.textContent = 'Tab ' + n;
    const panel = document.createElement('it-tab-panel');
    panel.setAttribute('name', 'cj' + n);
    panel.innerHTML = 'Contenuto del pannello <strong>Tab ' + n + '</strong>';
    host.addTab(tab, panel);
  });
<\/script>\`
      },
      canvas: {
        sourceState: 'shown'
      }
    }
  },
  render: () => {
    let counter = 5;
    const onClose = (e: CustomEvent<ItTabCloseEventDetail>) => {
      e.preventDefault();
      const itTabs = e.currentTarget as ItTabs;
      const label = itTabs.querySelector(\`it-tab[panel="\${e.detail.panel}"]\`)?.textContent?.trim();
      if (confirm(\`Chiudere "\${label}"?\`)) itTabs.close(e.detail.panel);
    };
    const onAdd = (e: Event) => {
      const itTabs = (e.currentTarget as Element).closest('it-tabs')! as ItTabs;
      const n = counter++;
      const tab = document.createElement('it-tab') as ItTab;
      tab.setAttribute('slot', 'tab');
      tab.setAttribute('panel', \`cj\${n}\`);
      tab.textContent = \`Tab \${n}\`;
      const panel = document.createElement('it-tab-panel') as ItTabPanel;
      panel.setAttribute('name', \`cj\${n}\`);
      panel.innerHTML = \`Contenuto del pannello <strong>Tab \${n}</strong>\`;
      itTabs.addTab(tab, panel);
    };
    return html\`
      <it-tabs cards dismissible label="Tab card con chiusura personalizzata" @it-tab-close=\${onClose}>
        <it-tab slot="tab" panel="cj1">Tab 1</it-tab>
        <it-tab slot="tab" panel="cj2">Tab 2</it-tab>
        <it-tab slot="tab" panel="cj3">Tab 3</it-tab>
        <it-tab slot="tab" panel="cj4" disabled>Tab 4 Disabilitato</it-tab>
        <it-tab-panel name="cj1">Contenuto del pannello <strong>Tab 1</strong></it-tab-panel>
        <it-tab-panel name="cj2">Contenuto del pannello <strong>Tab 2</strong></it-tab-panel>
        <it-tab-panel name="cj3">Contenuto del pannello <strong>Tab 3</strong></it-tab-panel>
        <it-tab-panel name="cj4">Contenuto del pannello <strong>Tab 4 Disabilitato</strong></it-tab-panel>
        <it-button
          slot="after-tablist"
          class="after-tablist"
          variant="link"
          icon
          size="sm"
          it-aria-label="Aggiungi tab"
          @click=\${onAdd}
        >
          <it-icon name="it-plus-circle" color="primary" size="sm"></it-icon>
        </it-button>
      </it-tabs>
    \`;
  }
}`,...j.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'i18n',
  tags: ['!dev'],
  render: () => html\`<div class="hide-preview"></div>\`,
  parameters: {
    viewMode: 'docs',
    docs: {
      description: {
        story: \`
Per questo componente sono disponibili alcune stringhe traducibili tramite l'[utility di internazionalizzazione](/docs/i18n-internazionalizzazione--documentazione).

\\\`\\\`\\\`js
const translation = \${JSON.stringify(i18nIT, null, 2)}
\\\`\\\`\\\`
\`
      }
    }
  }
}`,...D.parameters?.docs?.source}}};const B=["EsempioInterattivo","TabOrizzontale","TabATuttaLarghezza","TabScrollbarNascosta","TabConIcona","TabConTestoEIcona","TabVerticale","TabVerticaleConSfondo","TabCard","TabScuro","TabScuroVerticale","PosizionamentoBasso","PosizionamentoSinistra","PosizionamentoDestra","LarghezzaTablistVerticale","TabFade","TabCardConPulsanti","TabCardConPulsantiCustomClose","TabCardConPulsantiCustomCloseJS","I18n"],M=Object.freeze(Object.defineProperty({__proto__:null,EsempioInterattivo:r,I18n:D,LarghezzaTablistVerticale:y,PosizionamentoBasso:z,PosizionamentoDestra:f,PosizionamentoSinistra:h,TabATuttaLarghezza:p,TabCard:v,TabCardConPulsanti:A,TabCardConPulsantiCustomClose:E,TabCardConPulsantiCustomCloseJS:j,TabConIcona:m,TabConTestoEIcona:u,TabFade:S,TabOrizzontale:c,TabScrollbarNascosta:d,TabScuro:$,TabScuroVerticale:C,TabVerticale:T,TabVerticaleConSfondo:g,__namedExportsOrder:B,default:L},Symbol.toStringTag,{value:"Module"}));export{r as E,D as I,y as L,z as P,M as T,c as a,h as b,f as c,g as d,p as e,m as f,$ as g,C as h,S as i,v as j,A as k,j as l};

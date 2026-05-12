import{b as a}from"./iframe-taocDA-g.js";const r={breakpoint:991,openAriaLabel:"Mostra la navigazione",closeAriaLabel:"Chiudi la navigazione",modalAriaLabel:"Navigazione del sito",hideHeaderBrand:!1,modalHeaderTheme:void 0},H={title:"Componenti/Header",tags:["alpha","web-component","a11y-ok"],parameters:{pageLayout:"w-100"},argTypes:{breakpoint:{control:{type:"number"},description:"Larghezza in pixel sotto la quale si attiva la modalita mobile.",table:{defaultValue:{summary:991}}},openAriaLabel:{name:"open-aria-label",control:{type:"text"},description:"Etichetta ARIA del pulsante che apre la navigazione mobile.",table:{defaultValue:{summary:"Mostra la navigazione"}}},closeAriaLabel:{name:"close-aria-label",control:{type:"text"},description:"Etichetta ARIA del pulsante che chiude la navigazione mobile.",table:{defaultValue:{summary:"Chiudi la navigazione"}}},modalAriaLabel:{name:"modal-aria-label",control:{type:"text"},description:"Etichetta ARIA della modale usata per la navigazione mobile.",table:{defaultValue:{summary:"Navigazione del sito"}}},hideHeaderBrand:{name:"hide-header-brand",control:{type:"boolean"},description:"Nasconde la fascia contente il brand, nell header della modale del menu su mobile.",table:{defaultValue:{summary:!1}}},modalHeaderTheme:{name:"modal-header-theme",control:{type:"select"},options:["dark","light"],description:"Tema del background dell'header della modale mobile. Se non valorizzato, usa il tema di default usato nell'Header Center.",table:{defaultValue:{summary:"default (auto)"}}}}},h=({accessButton:e="default",theme:g="default"}={})=>{let f=a`<it-button variant="primary" size="xs">Accedi</it-button>`;return e==="full"&&(f=a` <a href="#" class="btn btn-primary btn-icon btn-full">
      <span class="rounded-icon">
        <it-icon name="it-user" color="primary" size="xs"></it-icon>
      </span>
      <span class="d-none d-lg-block">Accedi all'area personale</span>
    </a>`),a` <div class="it-header-slim-wrapper${g==="light"?" theme-light":""}">
    <div class="container-xxl">
      <div class="row">
        <div class="col-12">
          <div class="it-header-slim-wrapper-content">
            <a class="d-block navbar-brand" href="#">Ente appartenenza</a>
            <div class="nav-mobile">
              <nav aria-label="Navigazione accessoria">
                <div class="link-list-wrapper d-none d-lg-flex">
                  <ul class="link-list">
                    <li><a class="dropdown-item list-item" href="#" data-focus-mouse="false">Link 1</a></li>
                    <li><a class="list-item active" href="#" aria-current="page">Link 2 (Attivo)</a></li>
                  </ul>
                </div>
              </nav>
            </div>
            <div class="it-header-slim-right-zone">
              <it-dropdown label="ITA" size="sm" alignment="bottom-end">
                <it-dropdown-item href="#" active>
                  <span>ITA <span class="visually-hidden">selezionata</span></span>
                </it-dropdown-item>
                <it-dropdown-item href="#">
                  <span>ENG</span>
                </it-dropdown-item>
              </it-dropdown>
              <div class="it-access-top-wrapper">${f}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`},i={name:"Slim Header",render:()=>h()},n={name:"Slim Header con Pulsante full-responsive",render:()=>h({accessButton:"full"})},t={name:"Slim Header - Versione chiara",render:()=>h({theme:"light"})},u=({theme:e="default",compact:g=!1}={})=>a` <div
    class="it-header-center-wrapper${e==="light"?" theme-light":""}${g?" it-small-header":""} "
  >
    <div class="container-xxl">
      <div class="row">
        <div class="col-12">
          <div class="it-header-center-content-wrapper">
            <div class="it-brand-wrapper">
              <a href="#">
                <it-icon name="it-pa"></it-icon>
                <div class="it-brand-text">
                  <div class="it-brand-title">Nome dell'Istituzione</div>
                  <div class="it-brand-tagline d-none d-md-block">Tag line dell'Istituzione</div>
                </div>
              </a>
            </div>
            <div class="it-right-zone">
              <div class="it-socials d-none d-md-flex">
                <span>Seguici su</span>
                <ul>
                  <li>
                    <a href="#" aria-label="Facebook" target="_blank">
                      <it-icon name="it-facebook"></it-icon>
                    </a>
                  </li>
                  <li>
                    <a href="#" aria-label="Github" target="_blank">
                      <it-icon name="it-github"></it-icon>
                    </a>
                  </li>
                  <li>
                    <a href="#" aria-label="Twitter" target="_blank">
                      <it-icon name="it-twitter"></it-icon>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="it-search-wrapper">
                <span class="d-none d-md-block">Cerca</span>
                <a class="search-link rounded-icon" aria-label="Cerca nel sito" href="#">
                  <it-icon name="it-search"></it-icon>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`,s={name:"Header Centrale",render:()=>u({})},l={name:"Header Centrale - Versione compatta",render:()=>u({compact:!0})},d={name:"Header Centrale - Versione chiara",render:()=>u({theme:"light"})},b=({wrapperClassName:e=""}={})=>a`<div class="it-header-navbar-wrapper ${e}">
    <div class="container-xxl">
      <div class="row">
        <div class="col-12">
          <!--start nav-->
          <nav class="navbar navbar-expand-lg" aria-label="Navigazione principale">
            <div class="navbar-collapsable" id="nav1" tabindex="-1">
              <div class="menu-wrapper">
                <ul class="navbar-nav">
                  <li class="nav-item active">
                    <a class="nav-link active" href="#" aria-current="page"><span>Link attivo</span></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link disabled" href="#" aria-disabled="true"><span>Link disabilitato</span></a>
                  </li>
                  <li class="nav-item">
                    <it-dropdown label="Dropdown" offset="0" no-flip>
                      <it-dropdown-item href="#">Link lista 1</it-dropdown-item>
                      <it-dropdown-item href="#">Link lista 2</it-dropdown-item>
                      <it-dropdown-item href="#">Link lista 3</it-dropdown-item>
                      <it-dropdown-item separator></it-dropdown-item>
                      <it-dropdown-item href="#">Link lista 4</it-dropdown-item>
                    </it-dropdown>
                  </li>
                  <!-- megamenu -->
                  <li class="nav-item">
                    <it-megamenu label="Megamenu" columns="2" footer-align="right">
                      <!-- SLOT DESCRIPTION -->
                      <div slot="description">
                        <div class="ratio ratio-21x9 lightgrey-bg-a1 mb-4 rounded">
                          <figure class="figure">
                            <img
                              src="https://placehold.co/560x240/ebebeb/808080/?text=Immagine"
                              class="figure-img img-fluid rounded"
                              alt="Segnaposto"
                            />
                          </figure>
                        </div>
                        <p>
                          Testo utile a fornire una descrizione dei contenuti della sezione
                          <strong>Megamenu</strong>.
                        </p>
                      </div>

                      <!-- SLOT HEADER -->
                      <div slot="header">
                        <a class="it-heading-link" href="#">
                          <it-icon name="it-arrow-right-triangle" size="sm" color="primary" class="me-2 mb-1"></it-icon>
                          <span>Esplora la sezione Megamenu</span>
                        </a>
                      </div>

                      <!-- DROPDOWN LINKS ITEMS -->

                      <it-dropdown-item href="#">
                        <it-icon slot="prefix" name="it-arrow-right-triangle" size="sm" color="primary"></it-icon>
                        Link lista 1
                      </it-dropdown-item>

                      <it-dropdown-item href="#">
                        <it-icon slot="prefix" name="it-arrow-right-triangle" size="sm" color="primary"></it-icon>
                        Link lista 2
                      </it-dropdown-item>

                      <it-dropdown-item href="#">
                        <it-icon slot="prefix" name="it-arrow-right-triangle" size="sm" color="primary"></it-icon>
                        Link lista 3
                      </it-dropdown-item>

                      <it-dropdown-item href="#">
                        <it-icon slot="prefix" name="it-arrow-right-triangle" size="sm" color="primary"></it-icon>
                        Link lista 4
                      </it-dropdown-item>

                      <it-dropdown-item href="#">
                        <it-icon slot="prefix" name="it-arrow-right-triangle" size="sm" color="primary"></it-icon>
                        Link lista 5
                      </it-dropdown-item>

                      <it-dropdown-item href="#">
                        <it-icon slot="prefix" name="it-arrow-right-triangle" size="sm" color="primary"></it-icon>
                        Link lista 6
                      </it-dropdown-item>
                    </it-megamenu>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>`,o={name:"Header Nav",render:()=>b()},c={name:"Header Nav - Versione chiara",render:()=>b({wrapperClassName:"theme-light"})},m={name:"Header Nav con Navigazione secondaria",render:()=>a`<div class="it-header-navbar-wrapper">
      <div class="container-xxl">
        <div class="row">
          <div class="col-12">
            <!--start nav-->
            <nav class="navbar navbar-expand-lg" aria-label="Navigazione principale">
              <div class="navbar-collapsable" id="nav1" tabindex="-1">
                <div class="menu-wrapper">
                  <!-- Navigazione principale -->
                  <ul class="navbar-nav">
                    <li class="nav-item active">
                      <a class="nav-link active" href="#" aria-current="page"><span>Link attivo</span></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link disabled" href="#" aria-disabled="true"><span>Link disabilitato</span></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#"><span>Link</span></a>
                    </li>
                  </ul>
                  <!-- Navigazione secondaria -->
                  <ul class="navbar-nav navbar-secondary">
                    <li class="nav-item">
                      <a class="nav-link" href="#"><span>Link secondario</span></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#"><span>Link secondario</span></a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>`},p={name:"Header completo",args:r,render:e=>a`<it-header
      .breakpoint=${e.breakpoint}
      .openAriaLabel=${e.openAriaLabel}
      .closeAriaLabel=${e.closeAriaLabel}
      .hideHeaderBrand=${e.hideHeaderBrand}
      .modalHeaderTheme=${e.modalHeaderTheme}
    >
      <header class="it-header-wrapper">${h()} ${u()}${b()}</header>
    </it-header>`},v={name:"Header completo - Versione chiara",args:r,render:()=>a`<it-header
      .breakpoint=${r.breakpoint}
      .openAriaLabel=${r.openAriaLabel}
      .closeAriaLabel=${r.closeAriaLabel}
      .hideHeaderBrand=${r.hideHeaderBrand}
      .modalHeaderTheme=${r.modalHeaderTheme}
    >
      <header class="it-header-wrapper it-shadow">
        ${h({theme:"light"})}
        ${u({theme:"light"})}${b({wrapperClassName:"theme-light"})}
      </header>
    </it-header>`};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Slim Header',
  render: () => renderHeaderSlim()
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Slim Header con Pulsante full-responsive',
  render: () => renderHeaderSlim({
    accessButton: 'full'
  })
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Slim Header - Versione chiara',
  render: () => renderHeaderSlim({
    theme: 'light'
  })
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Header Centrale',
  render: () => renderHeaderCenter({})
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Header Centrale - Versione compatta',
  render: () => renderHeaderCenter({
    compact: true
  })
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Header Centrale - Versione chiara',
  render: () => renderHeaderCenter({
    theme: 'light'
  })
}`,...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Header Nav',
  render: () => renderHeaderNav()
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Header Nav - Versione chiara',
  render: () => renderHeaderNav({
    wrapperClassName: 'theme-light'
  })
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Header Nav con Navigazione secondaria',
  render: () => html\`<div class="it-header-navbar-wrapper">
      <div class="container-xxl">
        <div class="row">
          <div class="col-12">
            <!--start nav-->
            <nav class="navbar navbar-expand-lg" aria-label="Navigazione principale">
              <div class="navbar-collapsable" id="nav1" tabindex="-1">
                <div class="menu-wrapper">
                  <!-- Navigazione principale -->
                  <ul class="navbar-nav">
                    <li class="nav-item active">
                      <a class="nav-link active" href="#" aria-current="page"><span>Link attivo</span></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link disabled" href="#" aria-disabled="true"><span>Link disabilitato</span></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#"><span>Link</span></a>
                    </li>
                  </ul>
                  <!-- Navigazione secondaria -->
                  <ul class="navbar-nav navbar-secondary">
                    <li class="nav-item">
                      <a class="nav-link" href="#"><span>Link secondario</span></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#"><span>Link secondario</span></a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>\`
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Header completo',
  args: defaultArgs,
  render: args => html\`<it-header
      .breakpoint=\${args.breakpoint}
      .openAriaLabel=\${args.openAriaLabel}
      .closeAriaLabel=\${args.closeAriaLabel}
      .hideHeaderBrand=\${args.hideHeaderBrand}
      .modalHeaderTheme=\${args.modalHeaderTheme}
    >
      <header class="it-header-wrapper">\${renderHeaderSlim()} \${renderHeaderCenter()}\${renderHeaderNav()}</header>
    </it-header>\`
}`,...p.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Header completo - Versione chiara',
  args: defaultArgs,
  render: () => html\`<it-header
      .breakpoint=\${defaultArgs.breakpoint}
      .openAriaLabel=\${defaultArgs.openAriaLabel}
      .closeAriaLabel=\${defaultArgs.closeAriaLabel}
      .hideHeaderBrand=\${defaultArgs.hideHeaderBrand}
      .modalHeaderTheme=\${defaultArgs.modalHeaderTheme}
    >
      <header class="it-header-wrapper it-shadow">
        \${renderHeaderSlim({
    theme: 'light'
  })}
        \${renderHeaderCenter({
    theme: 'light'
  })}\${renderHeaderNav({
    wrapperClassName: 'theme-light'
  })}
      </header>
    </it-header>\`
}`,...v.parameters?.docs?.source}}};const w=["SlimHeader","SlimHeaderActionFull","SlimHeaderLight","HeaderCenter","HeaderCenterCompact","HeaderCenterLight","HeaderNav","HeaderNavDesktopLight","HeaderNavSecondary","HeaderFull","HeaderFullLight"],L=Object.freeze(Object.defineProperty({__proto__:null,HeaderCenter:s,HeaderCenterCompact:l,HeaderCenterLight:d,HeaderFull:p,HeaderFullLight:v,HeaderNav:o,HeaderNavDesktopLight:c,HeaderNavSecondary:m,SlimHeader:i,SlimHeaderActionFull:n,SlimHeaderLight:t,__namedExportsOrder:w,default:H},Symbol.toStringTag,{value:"Module"}));export{L as H,i as S,p as a,n as b,t as c,s as d,l as e,d as f,o as g,c as h,m as i,v as j};

import{b as s,o as n}from"./iframe-C0KgUC2J.js";const g=["top","bottom"],v=[null,"left","right"],b=[null,"mobile","desktop","always"],f=(e,a=!0)=>s`<div class="link-list-wrapper">
    <h3>Header</h3>
    ${a?s`
          <it-progress type="bar" value="0" class="it-navscroll-progressbar" aria-label="Progress bar"></it-progress>
        `:s``}
    <nav>
      <ul class="link-list">
        <li class="nav-item">
          <a class="nav-link active" href="#p1${e}">
            <span>1. Introduzione </span>
          </a>
          <ul class="link-list">
            <li class="nav-item">
              <a class="nav-link" href="#p1_1${e}">
                <span>1.1 Elemento annidato </span>
              </a>
              <ul class="tertiary link-list">
                <li class="nav-item">
                  <a class="nav-link" href="#p1_1_1${e}">
                    <span>1.1.1 Elemento annidato </span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#p1_1_2${e}">
                    <span>1.1.2 Elemento annidato </span>
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#p1_2${e}">
                <span>1.2 Elemento annidato </span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#p1_3${e}">
                <span>1.3 Elemento annidato </span>
              </a>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#p2${e}">
            <span>2. Seconda sezione </span>
          </a>
          <ul class="link-list">
            <li class="nav-item">
              <a class="nav-link" href="#p2_1${e}">
                <span>2.1 Elemento annidato </span>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>`,q=e=>s`<div class="inline-menu">
    <div class="link-list-wrapper">
      <ul class="link-list">
        <li>
          <it-collapse>
            <button class="list-item icon-right border-0 bg-transparent" slot="trigger">
              <span class="list-item-title-icon-wrapper" slot="label">
                <span class="list-item-title">Introduzione</span>
                <it-icon name="it-expand" color="primary" class="left"></it-icon>
              </span>
            </button>
            <ul slot="content" class="link-sublist collapse">
              <li>
                <a class="list-item" href="#p1_1${e}"><span>1.1 Elemento annidato </span></a>
              </li>
              <li>
                <a class="list-item" href="#p1_2${e}"><span>1.2 Elemento annidato </span></a>
              </li>
              <li>
                <a class="list-item" href="#p1_3${e}"><span>1.3 Elemento annidato </span></a>
              </li>
            </ul>
          </it-collapse>
        </li>
        <li>
          <it-collapse>
            <button class="list-item icon-right border-0 bg-transparent" slot="trigger">
              <span class="list-item-title-icon-wrapper" slot="label">
                <span class="list-item-title">Seconda sezione</span>
                <it-icon name="it-expand" color="primary" class="left"></it-icon>
              </span>
            </button>
            <ul slot="content" class="link-sublist collapse">
              <li>
                <a class="list-item" href="#p2_1${e}"><span>2.1 Elemento annidato</span></a>
              </li>
            </ul>
          </it-collapse>
        </li>
      </ul>
    </div>
  </div>`,t=e=>{const a=e._uniqueStoryID??"";return s`
    <div class="row row-column-border border-light row-column-menu-left bg-white">
      <aside class="col-lg-4 ${e["line-position"]==="left"?"order-2":""}" aria-label="Indice della pagina">
        <it-navscroll
          ?sticky="${e.sticky?"true":void 0}"
          for="#scroll-container${a}"
          dark-mode=${n(e["dark-mode"])}
          position=${n(e.position)}
          line-position=${n(e["line-position"])}
          breakpoint="${n(e.breakpoint)}"
          open-label=${n(e["open-label"])}
          open-aria-label=${n(e["open-aria-label"])}
          back-label=${n(e["back-label"])}
        >
          ${e._inlineMenu?q(a):f(a,e._progress)}
        </it-navscroll>
      </aside>
      <main
        id="scroll-container${a}"
        class="col-lg-8 it-page-sections-container border-light"
        style="height:500px; overflow-y: scroll;"
        tabindex="0"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec congue eros. Maecenas sagittis commodo
          libero nec porta. Nunc semper velit venenatis ligula condimentum ultricies. In hac habitasse platea dictumst.
          In malesuada pharetra nulla, id aliquam metus egestas ut. Nulla sollicitudin cursus felis, eu sagittis ante
          porta id. Suspendisse pellentesque ex non sem tincidunt, aliquam rhoncus turpis maximus. Vivamus eget massa
          turpis. Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue, sodales ac rhoncus in,
          ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames
          ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel
          sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut
          quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod
          pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus. Integer feugiat et massa nec rhoncus. Morbi vitae metus et sapien suscipit
          mattis vitae ac ex. Proin pharetra, sem vitae varius malesuada, risus tortor sodales arcu, eu aliquam lorem
          libero vel urna. Aliquam massa lacus, faucibus quis urna ac, pharetra pretium ex. In facilisis urna non urna
          luctus, a bibendum tortor facilisis. Mauris sed risus justo. In et erat fermentum eros hendrerit tempor.
          Quisque accumsan magna ac risus ultricies, vel condimentum ipsum accumsan. Proin blandit mauris sed sodales
          sollicitudin.
        </p>
        <h2 class="it-page-section" id="p1${a}">Introduzione</h2>
        <p>
          Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue, sodales ac rhoncus in, ultricies a
          neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum
          primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam
          eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula
          rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non
          ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus.
        </p>
        <h3 class="it-page-section" id="p1_1${a}">Elemento annidato 1.1</h3>
        <p>
          Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a
          neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum
          primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam
          eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula
          rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non
          ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus.
        </p>
        <h4 class="it-page-section" id="p1_1_1${a}">Elemento annidato 1.1.1</h4>
        <p>
          Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a
          neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum
          primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam
          eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula
          rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non
          ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus.
        </p>
        <h4 class="it-page-section" id="p1_1_2${a}">Elemento annidato 1.1.2</h4>
        <p>
          Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a
          neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum
          primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam
          eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula
          rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non
          ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus.
        </p>
        <h3 class="it-page-section" id="p1_2${a}">Elemento annidato 1.2</h3>
        <p>
          Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a
          neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum
          primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam
          eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula
          rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non
          ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus.
        </p>
        <h3 class="it-page-section" id="p1_3${a}">Elemento annidato 1.3</h3>
        <p>
          Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a
          neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum
          primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam
          eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula
          rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non
          ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus.
        </p>
        <h2 class="it-page-section" id="p2${a}">Seconda sezione</h2>
        <p>
          Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a
          neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum
          primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam
          eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula
          rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non
          ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus.
        </p>
        <h3 class="it-page-section" id="p2_1${a}">Elemento annidato 2.1</h3>
        <p>
          Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a
          neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum
          primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam
          eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula
          rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non
          ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus.
        </p>
      </main>
    </div>
  `},i={title:"Componenti/Navscroll",tags:["web-component","a11y-ok"],component:"it-navscroll",args:{for:"#scroll-container",position:void 0,sticky:void 0,"line-position":void 0,"dark-mode":void 0,breakpoint:void 0,"open-label":void 0,"open-aria-label":void 0,"back-label":void 0},argTypes:{for:{control:"text",description:"Selettore del contenitore scrollabile da monitorare per determinare l'elemento attivo corrente ed eventualmente aggioranre la progress bar. Se non definito, viene usato document.scrollingElement"},position:{control:"select",description:"Posizione dello navscroll su mobile quando è chiuso",options:g,type:"string",table:{defaultValue:{summary:"bottom"}}},sticky:{control:"boolean",type:"boolean",description:"Quando abilitato, il nav viene fissato in alto durante lo scroll della pagina (su desktop)",table:{defaultValue:{summary:"false"}}},"line-position":{control:"select",description:"Posizione della linea laterale su desktop",type:"string",options:v},"dark-mode":{control:"select",description:'Quando mostrare la modalità "dark"',type:"string",options:b},breakpoint:{control:"number",description:"Breakpoint sotto il quale la navigazione viene collassata",type:"number",table:{defaultValue:{summary:"991"}}},"open-label":{control:"text",description:"Etichetta per l'apertura del menu collassato su mobile, quando nessuna sezione è ancora attiva",type:"string",table:{defaultValue:{summary:"Indice di navigazione"}}},"open-aria-label":{control:"text",description:"aria-label per il menu collassato su mobile",type:"string",table:{defaultValue:{summary:"Apri/Chiudi indice di navigazione"}}},"back-label":{control:"text",description:"Testo da mostrare sul pulsante di chiusura del menu su mobile",type:"string",table:{defaultValue:{summary:"Indietro"}}}},parameters:{docs:{canvas:{sourceState:"hidden"},description:{component:`
<Description>Lista di link con àncore per navigare velocemente a una sezione specifica della pagina in cui è contenuto il componente.</Description>
`}}}},r={...i,name:"Esempio",args:{},render:e=>s` ${t({...e,_uniqueStoryID:"-story1"})}`},o={...i,name:"Posizionata a sinistra su desktop",args:{"line-position":"right"},render:e=>s` ${t({...e,_progress:!1,_uniqueStoryID:"-story2-1"})}`},l={...i,name:"Posizionata a destra su desktop",args:{"line-position":"left"},render:e=>s` ${t({...e,_progress:!1,_uniqueStoryID:"-story2-2"})}`},u={...i,name:"Posizionata a fondo pagina",args:{position:"bottom"},render:e=>s` ${t({...e,_progress:!1,_uniqueStoryID:"-story3-1"})}`},m={...i,name:"Posizionata in testa alla pagina",args:{position:"top"},render:e=>s` ${t({...e,_progress:!1,_uniqueStoryID:"-story3-2"})}`},c={...i,name:"Con barra di progresso",render:e=>s` ${t({...e,_uniqueStoryID:"-story4"})}`},p={...i,name:"Variante scura",render:e=>s` ${t({...e,"dark-mode":"always",_progress:!1,_uniqueStoryID:"-story5"})}`},d={...i,name:"Menu inline",render:e=>s` ${t({...e,_inlineMenu:!0,_progress:!1,_uniqueStoryID:"-story6"})}`};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  ...meta,
  name: 'Esempio',
  args: {},
  render: params => html\` \${renderComponent({
    ...params,
    _uniqueStoryID: '-story1'
  })}\`
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  ...meta,
  name: 'Posizionata a sinistra su desktop',
  args: {
    'line-position': 'right'
  },
  render: params => html\` \${renderComponent({
    ...params,
    _progress: false,
    _uniqueStoryID: '-story2-1'
  })}\`
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  ...meta,
  name: 'Posizionata a destra su desktop',
  args: {
    'line-position': 'left'
  },
  render: params => html\` \${renderComponent({
    ...params,
    _progress: false,
    _uniqueStoryID: '-story2-2'
  })}\`
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  ...meta,
  name: 'Posizionata a fondo pagina',
  args: {
    position: 'bottom'
  },
  render: params => html\` \${renderComponent({
    ...params,
    _progress: false,
    _uniqueStoryID: '-story3-1'
  })}\`
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  ...meta,
  name: 'Posizionata in testa alla pagina',
  args: {
    position: 'top'
  },
  render: params => html\` \${renderComponent({
    ...params,
    _progress: false,
    _uniqueStoryID: '-story3-2'
  })}\`
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  ...meta,
  name: 'Con barra di progresso',
  render: params => html\` \${renderComponent({
    ...params,
    _uniqueStoryID: '-story4'
  })}\`
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  ...meta,
  name: 'Variante scura',
  render: params => html\` \${renderComponent({
    ...params,
    'dark-mode': 'always',
    _progress: false,
    _uniqueStoryID: '-story5'
  })}\`
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  ...meta,
  name: 'Menu inline',
  render: params => html\` \${renderComponent({
    ...params,
    _inlineMenu: true,
    _progress: false,
    _uniqueStoryID: '-story6'
  })}\`
}`,...d.parameters?.docs?.source}}};const h=["EsempioInterattivo","DesktopOnLeft","DesktopOnRight","MobileBottom","MobileTop","Progress","DarkModeStory","MenuInline"],I=Object.freeze(Object.defineProperty({__proto__:null,DarkModeStory:p,DesktopOnLeft:o,DesktopOnRight:l,EsempioInterattivo:r,MenuInline:d,MobileBottom:u,MobileTop:m,Progress:c,__namedExportsOrder:h,default:i},Symbol.toStringTag,{value:"Module"}));export{o as D,r as E,u as M,c as P,I as S,l as a,m as b,p as c,d};

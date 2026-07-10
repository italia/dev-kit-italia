import{b as e,o as h}from"./iframe-BBsXzWsk.js";const t={title:"Componenti/Popover",component:"it-popover",tags:["web-component","a11y-ok"],args:{placement:"right"},argTypes:{placement:{control:"select",options:["top","right","bottom","left","top-start","top-end","right-start","right-end","bottom-start","bottom-end","left-start","left-end"],description:"Posizione del Popover rispetto al suo elemento trigger",table:{defaultValue:{summary:"bottom-start"}}}},parameters:{layout:"padded"}};function s(o){return Object.keys(t.argTypes).reduce((i,n)=>(i[n]={table:{disable:!0}},i),{})}const a={...t,render:o=>e`
    <it-popover placement=${h(o.placement)}>
      <it-button slot="trigger" variant="primary"> Opzioni utente, clicca per aprire </it-button>
      <div slot="content" class="popover">
        <h4 class="popover-header">Titolo del popover</h4>
        <div class="popover-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue.</div>
      </div>
    </it-popover>
  `,tags:["!autodocs","!dev"]},p={...t,render:()=>e`
    <it-popover placement="bottom-start" style="grid-column:2">
      <it-button slot="trigger" variant="primary">Giù</it-button>
      <div slot="content" class="popover">
        <h4 class="popover-header">Titolo del popover</h4>
        <div class="popover-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue.</div>
      </div>
    </it-popover>

    <it-popover placement="top-start" style="grid-row:3;grid-column:2">
      <it-button slot="trigger" variant="primary">Su</it-button>
      <div slot="content" class="popover">
        <h4 class="popover-header">Titolo del popover</h4>
        <div class="popover-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue.</div>
      </div>
    </it-popover>

    <it-popover placement="left" style="grid-row:2;grid-column:3">
      <it-button slot="trigger" variant="primary">Sinistra</it-button>
      <div slot="content" class="popover">
        <h4 class="popover-header">Titolo del popover</h4>
        <div class="popover-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue.</div>
      </div>
    </it-popover>

    <it-popover placement="right" style="grid-row:2;grid-column:1">
      <it-button slot="trigger" variant="primary">Destra</it-button>
      <div slot="content" class="popover">
        <h4 class="popover-header">Titolo del popover</h4>
        <div class="popover-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue.</div>
      </div>
    </it-popover>
  `,decorators:[o=>e`<div style="display:grid;gap:.5rem;grid:1fr 1fr 1fr/1fr 1fr 1fr;">${o()}</div>`],argTypes:{...s()}},l={...t,name:"Titolo con icona e link",render:()=>e`
      <it-popover>
        <it-button slot="trigger" variant="primary"> Popover con icona e link </it-button>
        <div slot="content" class="popover">
          <h4 class="popover-header">
            <it-icon name="it-help-circle" size="sm"></it-icon>
            Titolo con icona
          </h4>
          <div class="popover-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue.
            <a href="#" class="popover-inner-link" @click=${i=>{i.preventDefault()}}>
              Leggi tutto
              <it-icon name="it-arrow-right" size="xs" color="primary"></it-icon>
            </a>
          </div>
        </div>
      </it-popover>
    `,decorators:[o=>e`<div style="height:200px">${o()}</div>`],argTypes:{...s()}},c={...t,name:"Elementi disabilitati",render:()=>e`
    <it-popover placement="right">
      <it-button slot="trigger" variant="primary" disabled> Pulsante disabilitato, il popover non si apre </it-button>
      <div slot="content" class="popover">
        <div class="popover-body">Popover disabilitato</div>
      </div>
    </it-popover>
  `,argTypes:{...s()}},v={...t,name:"Elementi disabilitati con hover",render:()=>{const o=r=>{r.target.closest("it-popover")?.openPopover()},i=r=>{r.target.closest("it-popover")?.closePopover()},n=r=>{r.target.closest("it-popover")?.openPopover()},b=r=>{r.relatedTarget?.closest?.("it-popover")||r.target.closest("it-popover")?.closePopover()};return e`
      <it-popover placement="right">
        <it-button
          slot="trigger"
          variant="primary"
          disabled
          @mouseenter=${o}
          @mouseleave=${i}
          @focus=${n}
          @blur=${b}
        >
          Pulsante disabilitato
        </it-button>
        <div slot="content" class="popover" @blur=${b}>
          <div class="popover-body">Pulsante disabilitato, qui puoi spiegare il perché</div>
        </div>
      </it-popover>
    `},argTypes:{...s()}},d={...t,name:"Attivazione controllata",tags:["!dev"],render:()=>e`
    <it-popover controlled placement="right">
      <it-button slot="trigger" variant="primary" id="controlled-trigger"> Popover controllato </it-button>
      <div slot="content" class="popover">
        <div class="popover-inner">
          <div class="popover-body">Questo popover non si aprirà e questo testo non si vedrà.</div>
        </div>
      </div>
    </it-popover>
  `,argTypes:{...s()}},u={...t,render:()=>e`
      <it-popover @it-popover-open=${n=>{console.log("Popover aperto",n)}} @it-popover-close=${n=>{console.log("Popover chiuso",n)}} placement="right">
        <it-button slot="trigger" variant="primary">Popover con eventi</it-button>
        <div slot="content" class="popover">
          <h4 class="popover-header">Eventi del Popover</h4>
          <div class="popover-body">Apri e chiudi questo popover per vedere gli eventi nella console.</div>
        </div>
      </it-popover>
    `,argTypes:{...s()}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  ...meta,
  render: args => html\`
    <it-popover placement=\${ifDefined(args.placement)}>
      <it-button slot="trigger" variant="primary"> Opzioni utente, clicca per aprire </it-button>
      <div slot="content" class="popover">
        <h4 class="popover-header">Titolo del popover</h4>
        <div class="popover-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue.</div>
      </div>
    </it-popover>
  \`,
  tags: ['!autodocs', '!dev']
}`,...a.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  ...meta,
  render: () => html\`
    <it-popover placement="bottom-start" style="grid-column:2">
      <it-button slot="trigger" variant="primary">Giù</it-button>
      <div slot="content" class="popover">
        <h4 class="popover-header">Titolo del popover</h4>
        <div class="popover-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue.</div>
      </div>
    </it-popover>

    <it-popover placement="top-start" style="grid-row:3;grid-column:2">
      <it-button slot="trigger" variant="primary">Su</it-button>
      <div slot="content" class="popover">
        <h4 class="popover-header">Titolo del popover</h4>
        <div class="popover-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue.</div>
      </div>
    </it-popover>

    <it-popover placement="left" style="grid-row:2;grid-column:3">
      <it-button slot="trigger" variant="primary">Sinistra</it-button>
      <div slot="content" class="popover">
        <h4 class="popover-header">Titolo del popover</h4>
        <div class="popover-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue.</div>
      </div>
    </it-popover>

    <it-popover placement="right" style="grid-row:2;grid-column:1">
      <it-button slot="trigger" variant="primary">Destra</it-button>
      <div slot="content" class="popover">
        <h4 class="popover-header">Titolo del popover</h4>
        <div class="popover-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue.</div>
      </div>
    </it-popover>
  \`,
  decorators: [Story => html\`<div style="display:grid;gap:.5rem;grid:1fr 1fr 1fr/1fr 1fr 1fr;">\${Story()}</div>\`],
  argTypes: {
    ...disabledControls()
  }
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  ...meta,
  name: 'Titolo con icona e link',
  render: () => {
    const handleLinkClick = (e: Event) => {
      e.preventDefault();
    };
    return html\`
      <it-popover>
        <it-button slot="trigger" variant="primary"> Popover con icona e link </it-button>
        <div slot="content" class="popover">
          <h4 class="popover-header">
            <it-icon name="it-help-circle" size="sm"></it-icon>
            Titolo con icona
          </h4>
          <div class="popover-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue.
            <a href="#" class="popover-inner-link" @click=\${handleLinkClick}>
              Leggi tutto
              <it-icon name="it-arrow-right" size="xs" color="primary"></it-icon>
            </a>
          </div>
        </div>
      </it-popover>
    \`;
  },
  decorators: [Story => html\`<div style="height:200px">\${Story()}</div>\`],
  argTypes: {
    ...disabledControls()
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  ...meta,
  name: 'Elementi disabilitati',
  render: () => html\`
    <it-popover placement="right">
      <it-button slot="trigger" variant="primary" disabled> Pulsante disabilitato, il popover non si apre </it-button>
      <div slot="content" class="popover">
        <div class="popover-body">Popover disabilitato</div>
      </div>
    </it-popover>
  \`,
  argTypes: {
    ...disabledControls()
  }
}`,...c.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  ...meta,
  name: 'Elementi disabilitati con hover',
  render: () => {
    const handleMouseEnter = (e: Event) => {
      const button = e.target as HTMLElement;
      const popover = button.closest('it-popover');
      popover?.openPopover();
    };
    const handleMouseLeave = (e: Event) => {
      const button = e.target as HTMLElement;
      const popover = button.closest('it-popover');
      popover?.closePopover();
    };
    const handleFocus = (e: Event) => {
      const button = e.target as HTMLElement;
      const popover = button.closest('it-popover');
      popover?.openPopover();
    };
    const handleBlur = (e: FocusEvent) => {
      const target = e.relatedTarget as HTMLElement;
      if (!target?.closest?.('it-popover')) {
        const button = e.target as HTMLElement;
        const popover = button.closest('it-popover');
        popover?.closePopover();
      }
    };
    return html\`
      <it-popover placement="right">
        <it-button
          slot="trigger"
          variant="primary"
          disabled
          @mouseenter=\${handleMouseEnter}
          @mouseleave=\${handleMouseLeave}
          @focus=\${handleFocus}
          @blur=\${handleBlur}
        >
          Pulsante disabilitato
        </it-button>
        <div slot="content" class="popover" @blur=\${handleBlur}>
          <div class="popover-body">Pulsante disabilitato, qui puoi spiegare il perché</div>
        </div>
      </it-popover>
    \`;
  },
  argTypes: {
    ...disabledControls()
  }
}`,...v.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  ...meta,
  name: 'Attivazione controllata',
  tags: ['!dev'],
  render: () => html\`
    <it-popover controlled placement="right">
      <it-button slot="trigger" variant="primary" id="controlled-trigger"> Popover controllato </it-button>
      <div slot="content" class="popover">
        <div class="popover-inner">
          <div class="popover-body">Questo popover non si aprirà e questo testo non si vedrà.</div>
        </div>
      </div>
    </it-popover>
  \`,
  argTypes: {
    ...disabledControls()
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  ...meta,
  render: () => {
    const handleOpen = (e: CustomEvent) => {
      console.log('Popover aperto', e);
    };
    const handleClose = (e: CustomEvent) => {
      console.log('Popover chiuso', e);
    };
    return html\`
      <it-popover @it-popover-open=\${handleOpen} @it-popover-close=\${handleClose} placement="right">
        <it-button slot="trigger" variant="primary">Popover con eventi</it-button>
        <div slot="content" class="popover">
          <h4 class="popover-header">Eventi del Popover</h4>
          <div class="popover-body">Apri e chiudi questo popover per vedere gli eventi nella console.</div>
        </div>
      </it-popover>
    \`;
  },
  argTypes: {
    ...disabledControls()
  }
}`,...u.parameters?.docs?.source}}};const y=["Base","Posizione","ConIconaELink","ElementiDisabilitati","ElementiDisabilitatiConHover","AttivazioneControllata","Eventi"],T=Object.freeze(Object.defineProperty({__proto__:null,AttivazioneControllata:d,Base:a,ConIconaELink:l,ElementiDisabilitati:c,ElementiDisabilitatiConHover:v,Eventi:u,Posizione:p,__namedExportsOrder:y,default:t},Symbol.toStringTag,{value:"Module"}));export{d as A,a as B,l as C,c as E,T as P,p as a,v as b,u as c};

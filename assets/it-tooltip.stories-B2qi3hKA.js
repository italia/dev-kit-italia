import{b as e,o as m}from"./iframe-Dq0Es6_d.js";const b=["top","top-start","top-end","right","right-start","right-end","bottom","bottom-start","bottom-end","left","left-start","left-end"],d={title:"Componenti/Tooltip",component:"it-tooltip",tags:["alpha","web-component","a11y-ok"],parameters:{layout:"padded"},args:{placement:"top"},argTypes:{placement:{control:"select",options:b,description:"Posizione del Tooltip rispetto al suo elemento trigger",table:{defaultValue:{summary:"top"}}}}};function u(t){return Object.keys(d.argTypes).reduce((o,n)=>(o[n]={table:{disable:!0}},o),{})}const r={decorators:[t=>e`<div style="padding:30px 0;text-align:center">${t()}</div>`],render:t=>e`
    <it-tooltip placement=${m(t.placement)}>
      <it-button slot="trigger" variant="primary">Mostra tooltip</it-button>
      <span slot="content">Testo del tooltip</span>
    </it-tooltip>
  `,tags:["!autodocs","!dev"]},a={name:"Su link e testo",render:t=>e`
    <p style="max-width:400px;line-height:2">
      Il tooltip può essere usato su qualsiasi elemento interattivo, come i
      <it-tooltip placement=${m(t.placement)}>
        <a slot="trigger" href="#" @click=${o=>o.preventDefault()}>link in una frase</a>
        <span slot="content">Primo link con tooltip</span>
      </it-tooltip>
      di testo, per fornire informazioni contestuali senza occupare spazio nella pagina. Basta passare il mouse o
      portare il focus su un
      <it-tooltip placement=${m(t.placement)}>
        <a slot="trigger" href="#" @click=${o=>o.preventDefault()}>elemento con tooltip</a>
        <span slot="content">Secondo link con tooltip</span>
      </it-tooltip>
      per vedere l'etichetta comparire.
    </p>
  `},s={argTypes:{...u()},decorators:[t=>e`<div style="display:grid;gap:.5rem;grid-template:1fr 1fr 1fr / 1fr 1fr 1fr;place-items:center">
        ${t()}
      </div>`],render:()=>e`
    <it-tooltip placement="bottom" style="grid-column:2;grid-row:1">
      <it-button slot="trigger" variant="primary">Giù</it-button>
      <span slot="content">Tooltip in basso</span>
    </it-tooltip>
    <it-tooltip placement="top" style="grid-column:2;grid-row:3">
      <it-button slot="trigger" variant="primary">Su</it-button>
      <span slot="content">Tooltip in alto</span>
    </it-tooltip>
    <it-tooltip placement="right" style="grid-column:1;grid-row:2">
      <it-button slot="trigger" variant="primary">Destra</it-button>
      <span slot="content">Tooltip a destra</span>
    </it-tooltip>
    <it-tooltip placement="left" style="grid-column:3;grid-row:2">
      <it-button slot="trigger" variant="primary">Sinistra</it-button>
      <span slot="content">Tooltip a sinistra</span>
    </it-tooltip>
  `},l={name:"Testo formattato",argTypes:{...u()},render:()=>e`
    <it-tooltip placement="right">
      <it-button slot="trigger" variant="primary">Mostra tooltip</it-button>
      <span slot="content"><em>Tooltip</em> <u>con</u> <strong>HTML</strong></span>
    </it-tooltip>
  `},p={name:"Attivazione controllata",argTypes:{...u()},decorators:[t=>e`<div style="display:flex;gap:1rem;align-items:flex-start;height:70px">${t()}</div>`],render:()=>e`
      <it-tooltip placement="bottom" controlled>
        <it-button slot="trigger" variant="primary">Target</it-button>
        <span slot="content">Tooltip controllato</span>
      </it-tooltip>
      <button @mouseenter=${n=>{n.currentTarget.closest("div")?.querySelector("it-tooltip")?.showTooltip()}} @mouseleave=${n=>{n.currentTarget.closest("div")?.querySelector("it-tooltip")?.hideTooltip()}} class="btn btn-secondary">
        Hover qui per mostrare il tooltip
      </button>
    `},c={args:{placement:"right"},argTypes:{...u()},render:t=>{const o=i=>console.log("Tooltip aperto",i),n=i=>console.log("Tooltip chiuso",i);return e`
      <it-tooltip placement=${m(t.placement)} @it-tooltip-open=${o} @it-tooltip-close=${n}>
        <it-button slot="trigger" variant="primary">Hover o focus</it-button>
        <span slot="content">Tooltip con eventi</span>
      </it-tooltip>
    `}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  decorators: [story => html\`<div style="padding:30px 0;text-align:center">\${story()}</div>\`],
  render: args => html\`
    <it-tooltip placement=\${ifDefined(args.placement)}>
      <it-button slot="trigger" variant="primary">Mostra tooltip</it-button>
      <span slot="content">Testo del tooltip</span>
    </it-tooltip>
  \`,
  tags: ['!autodocs', '!dev']
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Su link e testo',
  render: args => html\`
    <p style="max-width:400px;line-height:2">
      Il tooltip può essere usato su qualsiasi elemento interattivo, come i
      <it-tooltip placement=\${ifDefined(args.placement)}>
        <a slot="trigger" href="#" @click=\${(e: Event) => e.preventDefault()}>link in una frase</a>
        <span slot="content">Primo link con tooltip</span>
      </it-tooltip>
      di testo, per fornire informazioni contestuali senza occupare spazio nella pagina. Basta passare il mouse o
      portare il focus su un
      <it-tooltip placement=\${ifDefined(args.placement)}>
        <a slot="trigger" href="#" @click=\${(e: Event) => e.preventDefault()}>elemento con tooltip</a>
        <span slot="content">Secondo link con tooltip</span>
      </it-tooltip>
      per vedere l'etichetta comparire.
    </p>
  \`
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  argTypes: {
    ...disabledControls()
  },
  decorators: [story => html\`<div style="display:grid;gap:.5rem;grid-template:1fr 1fr 1fr / 1fr 1fr 1fr;place-items:center">
        \${story()}
      </div>\`],
  render: () => html\`
    <it-tooltip placement="bottom" style="grid-column:2;grid-row:1">
      <it-button slot="trigger" variant="primary">Giù</it-button>
      <span slot="content">Tooltip in basso</span>
    </it-tooltip>
    <it-tooltip placement="top" style="grid-column:2;grid-row:3">
      <it-button slot="trigger" variant="primary">Su</it-button>
      <span slot="content">Tooltip in alto</span>
    </it-tooltip>
    <it-tooltip placement="right" style="grid-column:1;grid-row:2">
      <it-button slot="trigger" variant="primary">Destra</it-button>
      <span slot="content">Tooltip a destra</span>
    </it-tooltip>
    <it-tooltip placement="left" style="grid-column:3;grid-row:2">
      <it-button slot="trigger" variant="primary">Sinistra</it-button>
      <span slot="content">Tooltip a sinistra</span>
    </it-tooltip>
  \`
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Testo formattato',
  argTypes: {
    ...disabledControls()
  },
  render: () => html\`
    <it-tooltip placement="right">
      <it-button slot="trigger" variant="primary">Mostra tooltip</it-button>
      <span slot="content"><em>Tooltip</em> <u>con</u> <strong>HTML</strong></span>
    </it-tooltip>
  \`
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Attivazione controllata',
  argTypes: {
    ...disabledControls()
  },
  decorators: [story => html\`<div style="display:flex;gap:1rem;align-items:flex-start;height:70px">\${story()}</div>\`],
  render: () => {
    const show = (e: Event) => {
      const btn = e.currentTarget as HTMLElement;
      const tooltip = btn.closest('div')?.querySelector('it-tooltip') as any;
      tooltip?.showTooltip();
    };
    const hide = (e: Event) => {
      const btn = e.currentTarget as HTMLElement;
      const tooltip = btn.closest('div')?.querySelector('it-tooltip') as any;
      tooltip?.hideTooltip();
    };
    return html\`
      <it-tooltip placement="bottom" controlled>
        <it-button slot="trigger" variant="primary">Target</it-button>
        <span slot="content">Tooltip controllato</span>
      </it-tooltip>
      <button @mouseenter=\${show} @mouseleave=\${hide} class="btn btn-secondary">
        Hover qui per mostrare il tooltip
      </button>
    \`;
  }
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    placement: 'right'
  },
  argTypes: {
    ...disabledControls()
  },
  render: args => {
    const onOpen = (e: CustomEvent) => console.log('Tooltip aperto', e);
    const onClose = (e: CustomEvent) => console.log('Tooltip chiuso', e);
    return html\`
      <it-tooltip placement=\${ifDefined(args.placement)} @it-tooltip-open=\${onOpen} @it-tooltip-close=\${onClose}>
        <it-button slot="trigger" variant="primary">Hover o focus</it-button>
        <span slot="content">Tooltip con eventi</span>
      </it-tooltip>
    \`;
  }
}`,...c.parameters?.docs?.source}}};const y=["Base","SuLink","Posizione","TestoFormattato","AttivazioneControllata","Eventi"],T=Object.freeze(Object.defineProperty({__proto__:null,AttivazioneControllata:p,Base:r,Eventi:c,Posizione:s,SuLink:a,TestoFormattato:l,__namedExportsOrder:y,default:d},Symbol.toStringTag,{value:"Module"}));export{p as A,r as B,c as E,s as P,a as S,T,l as a};

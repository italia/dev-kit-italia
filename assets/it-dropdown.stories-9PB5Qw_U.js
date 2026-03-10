import{b as o,o as t}from"./iframe-DTKPvNQN.js";const r="height:200px;display:flex;align-items:flex-start;",z={title:"Componenti/Dropdown",component:"it-dropdown",tags:["a11y-ok","web-component"],args:{label:"Apri dropdown",disabled:!1,alignment:void 0,variant:"primary",size:void 0,"it-role":void 0,dark:!1,"full-width":!1,"it-aria-label":void 0},argTypes:{label:{control:"text",description:"Testo del pulsante che apre il dropdown"},disabled:{control:"boolean",description:"Disabilita il dropdown",table:{defaultValue:{summary:"false"}}},alignment:{control:"select",description:"Posizionamento del menu rispetto al pulsante",options:["top","right","bottom","left","top-start","top-end","right-start","right-end","bottom-start","bottom-end","left-start","left-end"],type:"string",table:{defaultValue:{summary:"bottom-start"}}},variant:{control:"select",description:"Variante grafica del pulsante",options:["primary","secondary","success","danger","warning","light","link"],type:"string",table:{defaultValue:{summary:"primary"}}},size:{control:"select",description:"Dimensione del pulsante",options:["sm","lg"],type:"string",table:{}},"it-role":{control:"select",description:"Ruolo del pulsante (vedi la sezione Accessibilità)",options:["menu","list"],type:"string",table:{defaultValue:{summary:"menu"}}},dark:{control:"boolean",description:"Stile scuro per il menu dropdown",table:{defaultValue:{summary:"false"}}},"full-width":{control:"boolean",description:"Imposta la larghezza del menu dropdown al 100% del contenitore",table:{defaultValue:{summary:"false"}}},"it-aria-label":{control:"text",description:"Valore per l'attributo `aria-label` del pulsante (obbligatorio per accessibilità se `label` è vuoto)",type:"string"}}};function e(i){return Object.keys(z.argTypes).reduce((b,g)=>(i?.includes(g)||(b[g]={table:{disable:!0}}),b),{})}const n={render:i=>o`
    <it-dropdown
      label=${i.label}
      ?disabled=${i.disabled}
      alignment=${t(i.alignment)}
      size=${t(i.size)}
      variant=${i.variant}
      it-role=${t(i["it-role"])}
      ?dark=${i.dark}
      ?full-width=${i["full-width"]}
      it-aria-label=${t(i["it-aria-label"])}
    >
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>
  `,tags:["!autodocs","!dev"],decorators:[i=>o`<div style="height:200px">${i()}</div>`]},d={render:()=>o`
    <it-dropdown label="Apri dropdown" variant="primary">
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>

    <it-dropdown label="Apri dropdown" variant="secondary">
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>

    <it-dropdown label="Apri dropdown" variant="success">
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>

    <it-dropdown label="Apri dropdown" variant="danger">
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>
  `,decorators:[i=>o`<div style="${r}gap:0.5rem;flex-wrap:wrap">${i()}</div>`],argTypes:{...e()}},a={render:()=>o`
    <it-dropdown label="Apri dropdown" alignment="bottom-start" style="grid-column:2">
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>

    <it-dropdown label="Apri dropup" alignment="top-start" style="grid-row:3;grid-column:2">
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>

    <it-dropdown label="Apri dropstart" alignment="left" style="grid-row:2;grid-column:3">
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>

    <it-dropdown label="Apri dropend" alignment="right" style="grid-row:2;grid-column:1">
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>
  `,decorators:[i=>o`<div style="display:grid;gap:.5rem;grid:1fr 1fr 1fr/1fr 1fr 1fr;">${i()}</div>`],argTypes:{...e()}},l={render:i=>o`
    <it-dropdown label=${i.label} variant=${i.variant}>
      <it-dropdown-item href="#" active>Attivo</it-dropdown-item>
      <it-dropdown-item href="#">Non attivo</it-dropdown-item>
      <it-dropdown-item href="#">Non attivo</it-dropdown-item>
    </it-dropdown>
  `,argTypes:{...e(["label","variant"])},decorators:[i=>o`<div style=${r}>${i()}</div>`]},p={args:{disabled:!0},render:i=>o`
    <it-dropdown label=${i.label} ?disabled=${i.disabled} variant=${i.variant}>
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>
  `,argTypes:{...e(["label","variant"])}},s={render:i=>o`
    <it-dropdown label=${i.label} variant=${i.variant}>
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#" disabled>Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>
  `,argTypes:{...e(["label","variant"])},decorators:[i=>o`<div style=${r}>${i()}</div>`]},m={render:i=>o`
    <it-dropdown label="Apri dropdown" variant=${i.variant}>
      <h4 slot="header" class="link-list-heading dropdown-header">Intestazione</h4>
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item separator></it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
    </it-dropdown>
  `,argTypes:{...e(["variant"])},decorators:[i=>o`<div style=${r}>${i()}</div>`]},w={render:i=>o`
    <it-dropdown label=${i.label} variant=${i.variant}>
      <it-dropdown-item href="#" large>Azione 1</it-dropdown-item>
      <it-dropdown-item href="#" large>Azione 2</it-dropdown-item>
      <it-dropdown-item href="#" large>Azione 3</it-dropdown-item>
    </it-dropdown>
  `,argTypes:{...e(["label","variant"])},decorators:[i=>o`<div style=${r}>${i()}</div>`]},c={args:{"full-width":!0},render:i=>o`
    <it-dropdown
      label=${i.label}
      ?disabled=${i.disabled}
      alignment=${t(i.alignment)}
      size=${t(i.size)}
      variant=${t(i.variant)}
      it-role=${t(i["it-role"])}
      ?dark=${i.dark}
      ?full-width=${i["full-width"]}
      style="width: 100%;"
      it-aria-label=${t(i["it-aria-label"])}
    >
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>
  `,decorators:[i=>o`<div style="${r}height:100px;min-width:300px">${i()}</div>`]},f={render:i=>o`
    <it-dropdown label=${i.label} variant=${i.variant}>
      <it-dropdown-item href="#">
        Azione 1
        <it-icon slot="suffix" name="it-star-outline" size="sm" color="primary"></it-icon>
      </it-dropdown-item>
      <it-dropdown-item href="#">
        Azione 2
        <it-icon slot="suffix" name="it-star-outline" size="sm" color="primary"></it-icon>
      </it-dropdown-item>
      <it-dropdown-item href="#">
        Azione 3
        <it-icon slot="suffix" name="it-star-outline" size="sm" color="primary"></it-icon>
      </it-dropdown-item>
    </it-dropdown>
  `,argTypes:{...e(["label","variant"])},decorators:[i=>o`<div style=${r}>${i()}</div>`]},h={render:i=>o`
    <it-dropdown label=${i.label} variant=${i.variant}>
      <it-dropdown-item href="#">
        <it-icon slot="prefix" name="it-star-outline" size="sm" color="primary"></it-icon>
        Azione 1
      </it-dropdown-item>
      <it-dropdown-item href="#">
        <it-icon slot="prefix" name="it-star-outline" size="sm" color="primary"></it-icon>
        Azione 2
      </it-dropdown-item>
      <it-dropdown-item href="#">
        <it-icon slot="prefix" name="it-star-outline" size="sm" color="primary"></it-icon>
        Azione 3
      </it-dropdown-item>
    </it-dropdown>
  `,argTypes:{...e(["label","variant"])},decorators:[i=>o`<div style=${r}>${i()}</div>`]},u={args:{dark:!0},render:i=>o`
    <it-dropdown label=${i.label} variant=${i.variant} dark>
      <h4 slot="header" class="link-list-heading dropdown-header">Intestazione</h4>
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>
  `,argTypes:{...e(["label","variant"])},decorators:[i=>o`<div style="${r}height:220px">${i()}</div>`]};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => html\`
    <it-dropdown
      label=\${args.label}
      ?disabled=\${args.disabled}
      alignment=\${ifDefined(args.alignment)}
      size=\${ifDefined(args.size)}
      variant=\${args.variant}
      it-role=\${ifDefined(args['it-role'])}
      ?dark=\${args.dark}
      ?full-width=\${args['full-width']}
      it-aria-label=\${ifDefined(args['it-aria-label'])}
    >
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>
  \`,
  tags: ['!autodocs', '!dev'],
  decorators: [Story => html\`<div style="height:200px">\${Story()}</div>\`]
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <it-dropdown label="Apri dropdown" variant="primary">
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>

    <it-dropdown label="Apri dropdown" variant="secondary">
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>

    <it-dropdown label="Apri dropdown" variant="success">
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>

    <it-dropdown label="Apri dropdown" variant="danger">
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>
  \`,
  decorators: [Story => html\`<div style="\${containerStyle}gap:0.5rem;flex-wrap:wrap">\${Story()}</div>\`],
  argTypes: {
    ...disabledControls()
  }
}`,...d.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <it-dropdown label="Apri dropdown" alignment="bottom-start" style="grid-column:2">
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>

    <it-dropdown label="Apri dropup" alignment="top-start" style="grid-row:3;grid-column:2">
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>

    <it-dropdown label="Apri dropstart" alignment="left" style="grid-row:2;grid-column:3">
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>

    <it-dropdown label="Apri dropend" alignment="right" style="grid-row:2;grid-column:1">
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>
  \`,
  decorators: [Story => html\`<div style="display:grid;gap:.5rem;grid:1fr 1fr 1fr/1fr 1fr 1fr;">\${Story()}</div>\`],
  argTypes: {
    ...disabledControls()
  }
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => html\`
    <it-dropdown label=\${args.label} variant=\${args.variant}>
      <it-dropdown-item href="#" active>Attivo</it-dropdown-item>
      <it-dropdown-item href="#">Non attivo</it-dropdown-item>
      <it-dropdown-item href="#">Non attivo</it-dropdown-item>
    </it-dropdown>
  \`,
  argTypes: {
    ...disabledControls(['label', 'variant'])
  },
  decorators: [Story => html\`<div style=\${containerStyle}>\${Story()}</div>\`]
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: args => html\`
    <it-dropdown label=\${args.label} ?disabled=\${args.disabled} variant=\${args.variant}>
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>
  \`,
  argTypes: {
    ...disabledControls(['label', 'variant'])
  }
}`,...p.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => html\`
    <it-dropdown label=\${args.label} variant=\${args.variant}>
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#" disabled>Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>
  \`,
  argTypes: {
    ...disabledControls(['label', 'variant'])
  },
  decorators: [Story => html\`<div style=\${containerStyle}>\${Story()}</div>\`]
}`,...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => html\`
    <it-dropdown label="Apri dropdown" variant=\${args.variant}>
      <h4 slot="header" class="link-list-heading dropdown-header">Intestazione</h4>
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item separator></it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
    </it-dropdown>
  \`,
  argTypes: {
    ...disabledControls(['variant'])
  },
  decorators: [Story => html\`<div style=\${containerStyle}>\${Story()}</div>\`]
}`,...m.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => html\`
    <it-dropdown label=\${args.label} variant=\${args.variant}>
      <it-dropdown-item href="#" large>Azione 1</it-dropdown-item>
      <it-dropdown-item href="#" large>Azione 2</it-dropdown-item>
      <it-dropdown-item href="#" large>Azione 3</it-dropdown-item>
    </it-dropdown>
  \`,
  argTypes: {
    ...disabledControls(['label', 'variant'])
  },
  decorators: [Story => html\`<div style=\${containerStyle}>\${Story()}</div>\`]
}`,...w.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    'full-width': true
  },
  render: args => html\`
    <it-dropdown
      label=\${args.label}
      ?disabled=\${args.disabled}
      alignment=\${ifDefined(args.alignment)}
      size=\${ifDefined(args.size)}
      variant=\${ifDefined(args.variant)}
      it-role=\${ifDefined(args['it-role'])}
      ?dark=\${args.dark}
      ?full-width=\${args['full-width']}
      style="width: 100%;"
      it-aria-label=\${ifDefined(args['it-aria-label'])}
    >
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>
  \`,
  decorators: [Story => html\`<div style="\${containerStyle}height:100px;min-width:300px">\${Story()}</div>\`]
}`,...c.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => html\`
    <it-dropdown label=\${args.label} variant=\${args.variant}>
      <it-dropdown-item href="#">
        Azione 1
        <it-icon slot="suffix" name="it-star-outline" size="sm" color="primary"></it-icon>
      </it-dropdown-item>
      <it-dropdown-item href="#">
        Azione 2
        <it-icon slot="suffix" name="it-star-outline" size="sm" color="primary"></it-icon>
      </it-dropdown-item>
      <it-dropdown-item href="#">
        Azione 3
        <it-icon slot="suffix" name="it-star-outline" size="sm" color="primary"></it-icon>
      </it-dropdown-item>
    </it-dropdown>
  \`,
  argTypes: {
    ...disabledControls(['label', 'variant'])
  },
  decorators: [Story => html\`<div style=\${containerStyle}>\${Story()}</div>\`]
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => html\`
    <it-dropdown label=\${args.label} variant=\${args.variant}>
      <it-dropdown-item href="#">
        <it-icon slot="prefix" name="it-star-outline" size="sm" color="primary"></it-icon>
        Azione 1
      </it-dropdown-item>
      <it-dropdown-item href="#">
        <it-icon slot="prefix" name="it-star-outline" size="sm" color="primary"></it-icon>
        Azione 2
      </it-dropdown-item>
      <it-dropdown-item href="#">
        <it-icon slot="prefix" name="it-star-outline" size="sm" color="primary"></it-icon>
        Azione 3
      </it-dropdown-item>
    </it-dropdown>
  \`,
  argTypes: {
    ...disabledControls(['label', 'variant'])
  },
  decorators: [Story => html\`<div style=\${containerStyle}>\${Story()}</div>\`]
}`,...h.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    dark: true
  },
  render: args => html\`
    <it-dropdown label=\${args.label} variant=\${args.variant} dark>
      <h4 slot="header" class="link-list-heading dropdown-header">Intestazione</h4>
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>
  \`,
  argTypes: {
    ...disabledControls(['label', 'variant'])
  },
  decorators: [Story => html\`<div style="\${containerStyle}height:220px">\${Story()}</div>\`]
}`,...u.parameters?.docs?.source}}};const v=["Base","Varianti","Posizionamento","MenuVociAttive","MenuDisabilitato","MenuVociDisabilitate","MenuIntestazioniSeparatori","MenuVociGrandi","MenuATuttaLarghezza","MenuIconaDestra","MenuIconaSinistra","MenuScuro"],y=Object.freeze(Object.defineProperty({__proto__:null,Base:n,MenuATuttaLarghezza:c,MenuDisabilitato:p,MenuIconaDestra:f,MenuIconaSinistra:h,MenuIntestazioniSeparatori:m,MenuScuro:u,MenuVociAttive:l,MenuVociDisabilitate:s,MenuVociGrandi:w,Posizionamento:a,Varianti:d,__namedExportsOrder:v,default:z},Symbol.toStringTag,{value:"Module"}));export{n as B,p as M,a as P,y as S,d as V,l as a,s as b,m as c,w as d,c as e,f,h as g,u as h};

import{b as i,o as e}from"./iframe-BBsXzWsk.js";const r="height:200px;display:flex;align-items:flex-start;",v={title:"Componenti/Dropdown",component:"it-dropdown",tags:["a11y-ok","web-component"],args:{label:"Apri dropdown",disabled:!1,alignment:void 0,variant:"primary",size:void 0,"it-role":void 0,dark:!1,"full-width":!1,offset:void 0,"no-flip":!1,"it-aria-label":void 0},argTypes:{label:{control:"text",description:"Testo del pulsante che apre il dropdown"},disabled:{control:"boolean",description:"Disabilita il dropdown",table:{defaultValue:{summary:"false"}}},alignment:{control:"select",description:"Posizionamento del menu rispetto al pulsante",options:["top","right","bottom","left","top-start","top-end","right-start","right-end","bottom-start","bottom-end","left-start","left-end"],type:"string",table:{defaultValue:{summary:"bottom-start"}}},variant:{control:"select",description:"Variante grafica del pulsante",options:["primary","secondary","success","danger","warning","light","link"],type:"string",table:{defaultValue:{summary:"primary"}}},size:{control:"select",description:"Dimensione del pulsante",options:["sm","lg"],type:"string",table:{}},dark:{control:"boolean",description:"Stile scuro per il menu dropdown",table:{defaultValue:{summary:"false"}}},"full-width":{control:"boolean",description:"Imposta la larghezza del menu dropdown al 100% del contenitore",table:{defaultValue:{summary:"false"}}},offset:{control:"number",description:"Imposta l'offset del menu dropdown rispetto al pulsante"},"no-flip":{control:"boolean",description:"Disabilita il comportamento di flip del menu dropdown",table:{defaultValue:{summary:"false"}}},"it-aria-label":{control:"text",description:"Valore per l'attributo `aria-label` del pulsante (obbligatorio per accessibilità se `label` è vuoto)",type:"string"}}};function t(o){return Object.keys(v.argTypes).reduce((b,z)=>(o?.includes(z)||(b[z]={table:{disable:!0}}),b),{})}const n={render:o=>i`
    <it-dropdown
      label=${o.label}
      ?disabled=${o.disabled}
      alignment=${e(o.alignment)}
      size=${e(o.size)}
      variant=${o.variant}
      it-role=${e(o["it-role"])}
      ?dark=${o.dark}
      ?full-width=${o["full-width"]}
      offset=${e(o.offset)}
      ?no-flip=${o["no-flip"]}
      it-aria-label=${e(o["it-aria-label"])}
    >
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>
  `,tags:["!autodocs","!dev"],decorators:[o=>i`<div style="height:200px">${o()}</div>`]},d={render:()=>i`
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
  `,decorators:[o=>i`<div style="${r}gap:0.5rem;flex-wrap:wrap">${o()}</div>`],argTypes:{...t()}},a={render:()=>i`
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
  `,decorators:[o=>i`<div style="display:grid;gap:.5rem;grid:1fr 1fr 1fr/1fr 1fr 1fr;">${o()}</div>`],argTypes:{...t()}},p={render:o=>i`
    <it-dropdown label=${o.label} variant=${o.variant}>
      <it-dropdown-item href="#" active>Attivo</it-dropdown-item>
      <it-dropdown-item href="#">Non attivo</it-dropdown-item>
      <it-dropdown-item href="#">Non attivo</it-dropdown-item>
    </it-dropdown>
  `,argTypes:{...t(["label","variant"])},decorators:[o=>i`<div style=${r}>${o()}</div>`]},l={args:{disabled:!0},render:o=>i`
    <it-dropdown label=${o.label} ?disabled=${o.disabled} variant=${o.variant}>
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>
  `,argTypes:{...t(["label","variant"])}},s={render:o=>i`
    <it-dropdown label=${o.label} variant=${o.variant}>
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#" disabled>Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>
  `,argTypes:{...t(["label","variant"])},decorators:[o=>i`<div style=${r}>${o()}</div>`]},m={render:o=>i`
    <it-dropdown label="Apri dropdown" variant=${o.variant}>
      <h4 slot="header" class="link-list-heading dropdown-header">Intestazione</h4>
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item separator></it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
    </it-dropdown>
  `,argTypes:{...t(["variant"])},decorators:[o=>i`<div style=${r}>${o()}</div>`]},w={render:o=>i`
    <it-dropdown label=${o.label} variant=${o.variant}>
      <it-dropdown-item href="#" large>Azione 1</it-dropdown-item>
      <it-dropdown-item href="#" large>Azione 2</it-dropdown-item>
      <it-dropdown-item href="#" large>Azione 3</it-dropdown-item>
    </it-dropdown>
  `,argTypes:{...t(["label","variant"])},decorators:[o=>i`<div style=${r}>${o()}</div>`]},c={args:{"full-width":!0},render:o=>i`
    <it-dropdown
      label=${o.label}
      ?disabled=${o.disabled}
      alignment=${e(o.alignment)}
      size=${e(o.size)}
      variant=${e(o.variant)}
      it-role=${e(o["it-role"])}
      ?dark=${o.dark}
      ?full-width=${o["full-width"]}
      ?no-flip=${o["no-flip"]}
      style="width: 100%;"
      it-aria-label=${e(o["it-aria-label"])}
      offset=${e(o.offset)}
    >
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>
  `,decorators:[o=>i`<div style="${r}height:100px;min-width:300px">${o()}</div>`]},f={render:o=>i`
    <it-dropdown label=${o.label} variant=${o.variant}>
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
  `,argTypes:{...t(["label","variant"])},decorators:[o=>i`<div style=${r}>${o()}</div>`]},h={render:o=>i`
    <it-dropdown label=${o.label} variant=${o.variant}>
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
  `,argTypes:{...t(["label","variant"])},decorators:[o=>i`<div style=${r}>${o()}</div>`]},u={args:{dark:!0},render:o=>i`
    <it-dropdown label=${o.label} variant=${o.variant} dark ?no-flip=${o["no-flip"]}>
      <h4 slot="header" class="link-list-heading dropdown-header">Intestazione</h4>
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>
  `,argTypes:{...t(["label","variant"])},decorators:[o=>i`<div style="${r}height:220px">${o()}</div>`]},g={render:o=>i`
    <it-dropdown label="Modifica" it-role="menu" variant=${o.variant}>
      <it-dropdown-item>Copia</it-dropdown-item>
      <it-dropdown-item>Taglia</it-dropdown-item>
      <it-dropdown-item>Incolla</it-dropdown-item>
      <it-dropdown-item separator></it-dropdown-item>
      <it-dropdown-item>Elimina</it-dropdown-item>
    </it-dropdown>
  `,argTypes:{...t(["variant","itRole"])},decorators:[o=>i`<div style="${r}height:250px">${o()}</div>`]};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
      offset=\${ifDefined(args.offset)}
      ?no-flip=\${args['no-flip']}
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
}`,...a.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
      ?no-flip=\${args['no-flip']}
      style="width: 100%;"
      it-aria-label=\${ifDefined(args['it-aria-label'])}
      offset=\${ifDefined(args.offset)}
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
    <it-dropdown label=\${args.label} variant=\${args.variant} dark ?no-flip=\${args['no-flip']}>
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
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => html\`
    <it-dropdown label="Modifica" it-role="menu" variant=\${args.variant}>
      <it-dropdown-item>Copia</it-dropdown-item>
      <it-dropdown-item>Taglia</it-dropdown-item>
      <it-dropdown-item>Incolla</it-dropdown-item>
      <it-dropdown-item separator></it-dropdown-item>
      <it-dropdown-item>Elimina</it-dropdown-item>
    </it-dropdown>
  \`,
  argTypes: {
    ...disabledControls(['variant', 'itRole'])
  },
  decorators: [Story => html\`<div style="\${containerStyle}height:250px">\${Story()}</div>\`]
}`,...g.parameters?.docs?.source}}};const y=["Base","Varianti","Posizionamento","MenuVociAttive","MenuDisabilitato","MenuVociDisabilitate","MenuIntestazioniSeparatori","MenuVociGrandi","MenuATuttaLarghezza","MenuIconaDestra","MenuIconaSinistra","MenuScuro","MenuAzioni"],$=Object.freeze(Object.defineProperty({__proto__:null,Base:n,MenuATuttaLarghezza:c,MenuAzioni:g,MenuDisabilitato:l,MenuIconaDestra:f,MenuIconaSinistra:h,MenuIntestazioniSeparatori:m,MenuScuro:u,MenuVociAttive:p,MenuVociDisabilitate:s,MenuVociGrandi:w,Posizionamento:a,Varianti:d,__namedExportsOrder:y,default:v},Symbol.toStringTag,{value:"Module"}));export{n as B,l as M,a as P,$ as S,d as V,p as a,s as b,m as c,w as d,c as e,f,h as g,u as h,g as i};

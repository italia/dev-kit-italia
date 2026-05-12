import{b as o,o as i}from"./iframe-taocDA-g.js";const $=["lg","md","sm"],A=["horizontal","vertical"],t=(e,z="")=>o`
  <it-toolbar
    size="${i(e.size)}"
    orientation="${i(e.orientation)}"
    it-aria-label="${i(e.itAriaLabel)}"
  >
    ${z}
  </it-toolbar>
`,w=o`
  <it-toolbar-item active label="Messaggi" icon="it-comment" href="#" active="true"></it-toolbar-item>
  <it-toolbar-item label="Immagini" icon="it-camera" href="#"></it-toolbar-item>
  <it-toolbar-item label="Documenti" icon="it-file" href="#"></it-toolbar-item>
  <it-toolbar-item label="Privacy" icon="it-locked"></it-toolbar-item>
  <it-toolbar-item disabled label="Preferiti" icon="it-star-outline" href="#"></it-toolbar-item>
`,S=o`
  <it-toolbar-item active label="Messaggi" icon="it-comment" href="#" active="true"></it-toolbar-item>
  <it-toolbar-item label="Immagini" icon="it-camera" href="#"></it-toolbar-item>
  <it-toolbar-item label="Documenti" icon="it-file" href="#"></it-toolbar-item>
  <it-toolbar-item label="Privacy" icon="it-locked" href="#"></it-toolbar-item>
  <it-toolbar-item label="Preferiti" icon="it-star-outline" href="#"></it-toolbar-item>
  <it-toolbar-item disabled label="Downloads" icon="it-download" href="#"></it-toolbar-item>
`,x={title:"Componenti/Toolbar",tags:["a11y-ok","web-component","alpha"],component:"it-toolbar",args:{size:"lg",orientation:"horizontal",itAriaLabel:"Toolbar"},argTypes:{size:{control:"select",description:"Dimensione della toolbar",options:["",...$],table:{defaultValue:{summary:"lg"}}},orientation:{control:"select",description:"Orientamento della toolbar",options:["",...A],table:{defaultValue:{summary:"horizontal"}}},itAriaLabel:{name:"it-aria-label",control:"text",description:"Aria label per la navigazione",table:{defaultValue:{summary:"Toolbar"}}}},parameters:{wrapperClasses:"toolbar-layout"}},r={name:"Esempio interattivo",tags:["!dev"],parameters:{docs:{canvas:{sourceState:"shown"}}},render:e=>o`${t(e,w)}`},a={name:"Toolbar grande",args:{size:""},argTypes:{size:{table:{disable:!0}}},render:e=>o`${t(e,w)}`},l={name:"Toolbar media",args:{size:"md"},argTypes:{size:{table:{disable:!0}}},render:e=>o`${t(e,w)}`},n={name:"Toolbar piccola",args:{size:"sm"},argTypes:{size:{table:{disable:!0}}},render:e=>o`${t(e,S)}`},d={name:"Toolbar con divisori",render:e=>o`${t(e,o` <it-toolbar-item label="Messaggi" icon="it-comment" href="#" active="true"></it-toolbar-item>
        <it-toolbar-item label="Immagini" icon="it-camera" href="#"></it-toolbar-item>
        <it-toolbar-item divider></it-toolbar-item>
        <it-toolbar-item label="Documenti" icon="it-file" href="#"></it-toolbar-item>
        <it-toolbar-item label="Privacy" icon="it-locked" href="#"></it-toolbar-item>
        <it-toolbar-item divider></it-toolbar-item>
        <it-toolbar-item disabled label="Preferiti" icon="it-star-outline" href="#"></it-toolbar-item>`)}`},s={name:"Toolbar con badge",render:e=>o`${t(e,o` <it-toolbar-item
          label="Messaggi"
          icon="it-comment"
          href="#"
          badge="1"
          active="true"
          label-extended="da leggere"
        ></it-toolbar-item>
        <it-toolbar-item
          label="Documenti"
          icon="it-file"
          href="#"
          badge="42"
          label-extended="da esaminare"
        ></it-toolbar-item>
        <it-toolbar-item label="Immagini" icon="it-camera" href="#"></it-toolbar-item>
        <it-toolbar-item label="Privacy" icon="it-locked" href="#"></it-toolbar-item>
        <it-toolbar-item disabled label="Preferiti" icon="it-star-outline" href="#"></it-toolbar-item>`)}`},m={name:"Toolbar media e piccola con badge",tags:["!dev"],args:{size:"md"},render:e=>o`${t(e,o` <it-toolbar-item
          label="Messaggi"
          icon="it-comment"
          href="#"
          badge="1"
          active="true"
          label-extended="c'è 1 nuovo messaggio dal leggere"
        ></it-toolbar-item>
        <it-toolbar-item
          label="Documenti"
          icon="it-file"
          href="#"
          badge="42"
          label-extended="ci sono 42 documenti da esaminare"
        ></it-toolbar-item>
        <it-toolbar-item label="Immagini" icon="it-camera" href="#"></it-toolbar-item>
        <it-toolbar-item label="Privacy" icon="it-locked" href="#"></it-toolbar-item>
        <it-toolbar-item label="Preferiti" icon="it-star-outline" href="#"></it-toolbar-item>
        <it-toolbar-item disabled label="Download" icon="it-download" href="#"></it-toolbar-item>`)} `},v=e=>o`${t(e,o` <it-toolbar-item
        dropdown
        active
        label="Messaggi"
        icon="it-comment"
        badge="1"
        active="true"
        label-extended="da leggere"
      >
        <it-dropdown-item slot="items" href="#">Azione 1</it-dropdown-item>
        <it-dropdown-item slot="items" href="#">Azione 2</it-dropdown-item>
        <it-dropdown-item slot="items" href="#">Azione 3</it-dropdown-item>
      </it-toolbar-item>
      <it-toolbar-item dropdown label="Immagini" icon="it-camera" badge="42" label-extended="da visualizzare">
        <it-dropdown-item slot="items" href="#">Azione 1</it-dropdown-item>
        <it-dropdown-item slot="items" href="#">Azione 2</it-dropdown-item>
        <it-dropdown-item slot="items" href="#">Azione 3</it-dropdown-item>
      </it-toolbar-item>
      <it-toolbar-item divider></it-toolbar-item>
      <it-toolbar-item dropdown label="Documenti" icon="it-file">
        <it-dropdown-item slot="items" href="#">Azione 1</it-dropdown-item>
        <it-dropdown-item slot="items" href="#">Azione 2</it-dropdown-item>
        <it-dropdown-item slot="items" href="#">Azione 3</it-dropdown-item>
      </it-toolbar-item>
      <it-toolbar-item dropdown label="Privacy" icon="it-locked">
        <it-dropdown-item slot="items" href="#">Azione 1</it-dropdown-item>
        <it-dropdown-item slot="items" href="#">Azione 2</it-dropdown-item>
        <it-dropdown-item slot="items" href="#">Azione 3</it-dropdown-item>
      </it-toolbar-item>
      <it-toolbar-item dropdown disabled label="Preferiti" icon="it-star-outline"></it-toolbar-item>
      <it-toolbar-item dropdown label="Altro" icon="it-more-actions" class="no-expand">
        <it-dropdown-item slot="items" href="#">Azione 1</it-dropdown-item>
        <it-dropdown-item slot="items" href="#">Azione 2</it-dropdown-item>
        <it-dropdown-item slot="items" href="#">Azione 3</it-dropdown-item>
      </it-toolbar-item>`)}`,b={name:"Toolbar con dropdown",render:e=>v(e)},c={name:"Toolbar media con dropdown",tags:["!dev"],args:{size:"md"},render:e=>v(e)},p={name:"Toolbar piccola con dropdown",tags:["!dev"],args:{size:"sm"},render:e=>v(e)},T=e=>o`${t(e,o` <it-toolbar-item
        active
        label="Messaggi"
        icon="it-comment"
        badge="42"
        href="#"
        active="true"
        label-extended="da leggere"
      ></it-toolbar-item>
      <it-toolbar-item dropdown label="Immagini" icon="it-camera" badge="1" label-extended="da visualizzare">
        <it-dropdown-item slot="items" href="#">Azione 1</it-dropdown-item>
        <it-dropdown-item slot="items" href="#">Azione 2</it-dropdown-item>
        <it-dropdown-item slot="items" href="#">Azione 3</it-dropdown-item>
      </it-toolbar-item>
      <it-toolbar-item divider></it-toolbar-item>
      <it-toolbar-item label="Documenti" icon="it-file" href="#"></it-toolbar-item>
      <it-toolbar-item label="Privacy" icon="it-locked"></it-toolbar-item>
      <it-toolbar-item disabled label="Preferiti" icon="it-star-outline" href="#"></it-toolbar-item>`)}`,g={name:"Toolbar verticale",args:{orientation:"vertical"},render:e=>T(e)},f={name:"Toolbar media verticale",tags:["!dev"],args:{orientation:"vertical",size:"md"},render:e=>T(e)},u={name:"Toolbar piccola verticale",tags:["!dev"],args:{orientation:"vertical",size:"sm"},render:e=>T(e)},y={active:!1,disabled:!1,label:"Messaggi",icon:"it-comment",href:"#",badge:"",labelExtended:"",divider:!1,dropdown:!1},D={active:{control:"boolean",description:"Elemento attivo",table:{defaultValue:{summary:"false"}}},disabled:{control:"boolean",description:"Elemento disabilitato",table:{defaultValue:{summary:"false"}}},label:{control:"text",description:"Etichetta dell'elemento"},icon:{control:"text",description:"Icona dell'elemento (es. it-comment)"},href:{control:"text",description:"URL di destinazione"},badge:{control:"text",description:"Testo del badge (es. numero di notifiche)"},labelExtended:{name:"label-extended",control:"text",description:"Etichetta estesa (tooltip)"},divider:{control:"boolean",description:"Mostra come divisore",table:{defaultValue:{summary:"false"}}},dropdown:{control:"boolean",description:"Elemento con dropdown",table:{defaultValue:{summary:"false"}}}},h={name:"Toolbar Item",tags:["!dev"],args:y,argTypes:D,parameters:{controls:{include:["active","disabled","label","icon","href","badge","labelExtended","divider","dropdown"]},docs:{controls:{include:["active","disabled","label","icon","href","badge","labelExtended","divider","dropdown"]},source:{language:"html"}}},render:e=>o`<it-toolbar>
      <it-toolbar-item
        ?active="${e.active}"
        ?disabled="${e.disabled}"
        label="${i(e.label)}"
        icon="${i(e.icon)}"
        ?href="${i(e.href)&&e.dropdown===!1}"
        badge="${i(e.badge)}"
        label-extended="${i(e.labelExtended)}"
        ?divider="${e.divider}"
        ?dropdown="${e.dropdown}"
        >${e.dropdown?o` <it-dropdown-item slot="items" href="#">Azione 1</it-dropdown-item>
              <it-dropdown-item slot="items" href="#">Azione 2</it-dropdown-item>
              <it-dropdown-item slot="items" href="#">Azione 3</it-dropdown-item>`:""}</it-toolbar-item
      ></it-toolbar
    >`};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Esempio interattivo',
  tags: ['!dev'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      }
    }
  },
  render: params => html\`\${renderComponent(params, baseToolbarSlot)}\`
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Toolbar grande',
  args: {
    size: ''
  },
  argTypes: {
    size: {
      table: {
        disable: true
      }
    }
  },
  render: args => html\`\${renderComponent(args, baseToolbarSlot)}\`
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Toolbar media',
  args: {
    size: 'md'
  },
  argTypes: {
    size: {
      table: {
        disable: true
      }
    }
  },
  render: args => html\`\${renderComponent(args, baseToolbarSlot)}\`
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Toolbar piccola',
  args: {
    size: 'sm'
  },
  argTypes: {
    size: {
      table: {
        disable: true
      }
    }
  },
  render: args => html\`\${renderComponent(args, smallToolbarSlot)}\`
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Toolbar con divisori',
  render: args => html\`\${renderComponent(args, html\` <it-toolbar-item label="Messaggi" icon="it-comment" href="#" active="true"></it-toolbar-item>
        <it-toolbar-item label="Immagini" icon="it-camera" href="#"></it-toolbar-item>
        <it-toolbar-item divider></it-toolbar-item>
        <it-toolbar-item label="Documenti" icon="it-file" href="#"></it-toolbar-item>
        <it-toolbar-item label="Privacy" icon="it-locked" href="#"></it-toolbar-item>
        <it-toolbar-item divider></it-toolbar-item>
        <it-toolbar-item disabled label="Preferiti" icon="it-star-outline" href="#"></it-toolbar-item>\`)}\`
}`,...d.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Toolbar con badge',
  render: args => html\`\${renderComponent(args, html\` <it-toolbar-item
          label="Messaggi"
          icon="it-comment"
          href="#"
          badge="1"
          active="true"
          label-extended="da leggere"
        ></it-toolbar-item>
        <it-toolbar-item
          label="Documenti"
          icon="it-file"
          href="#"
          badge="42"
          label-extended="da esaminare"
        ></it-toolbar-item>
        <it-toolbar-item label="Immagini" icon="it-camera" href="#"></it-toolbar-item>
        <it-toolbar-item label="Privacy" icon="it-locked" href="#"></it-toolbar-item>
        <it-toolbar-item disabled label="Preferiti" icon="it-star-outline" href="#"></it-toolbar-item>\`)}\`
}`,...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Toolbar media e piccola con badge',
  tags: ['!dev'],
  args: {
    size: 'md'
  },
  render: args => html\`\${renderComponent(args, html\` <it-toolbar-item
          label="Messaggi"
          icon="it-comment"
          href="#"
          badge="1"
          active="true"
          label-extended="c'è 1 nuovo messaggio dal leggere"
        ></it-toolbar-item>
        <it-toolbar-item
          label="Documenti"
          icon="it-file"
          href="#"
          badge="42"
          label-extended="ci sono 42 documenti da esaminare"
        ></it-toolbar-item>
        <it-toolbar-item label="Immagini" icon="it-camera" href="#"></it-toolbar-item>
        <it-toolbar-item label="Privacy" icon="it-locked" href="#"></it-toolbar-item>
        <it-toolbar-item label="Preferiti" icon="it-star-outline" href="#"></it-toolbar-item>
        <it-toolbar-item disabled label="Download" icon="it-download" href="#"></it-toolbar-item>\`)} \`
}`,...m.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Toolbar con dropdown',
  render: args => renderWithDropdown(args)
}`,...b.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Toolbar media con dropdown',
  tags: ['!dev'],
  args: {
    size: 'md'
  },
  render: args => renderWithDropdown(args)
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Toolbar piccola con dropdown',
  tags: ['!dev'],
  args: {
    size: 'sm'
  },
  render: args => renderWithDropdown(args)
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Toolbar verticale',
  args: {
    orientation: 'vertical'
  },
  render: args => renderVerticalToolbar(args)
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Toolbar media verticale',
  tags: ['!dev'],
  args: {
    orientation: 'vertical',
    size: 'md'
  },
  render: args => renderVerticalToolbar(args)
}`,...f.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Toolbar piccola verticale',
  tags: ['!dev'],
  args: {
    orientation: 'vertical',
    size: 'sm'
  },
  render: args => renderVerticalToolbar(args)
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Toolbar Item',
  tags: ['!dev'],
  args: toolbarItemArgs,
  argTypes: toolbarItemArgTypes,
  parameters: {
    controls: {
      include: ['active', 'disabled', 'label', 'icon', 'href', 'badge', 'labelExtended', 'divider', 'dropdown']
    },
    docs: {
      controls: {
        include: ['active', 'disabled', 'label', 'icon', 'href', 'badge', 'labelExtended', 'divider', 'dropdown']
      },
      source: {
        language: 'html'
      }
    }
  },
  render: args => html\`<it-toolbar>
      <it-toolbar-item
        ?active="\${args.active}"
        ?disabled="\${args.disabled}"
        label="\${ifDefined(args.label)}"
        icon="\${ifDefined(args.icon)}"
        ?href="\${ifDefined(args.href) && args.dropdown === false}"
        badge="\${ifDefined(args.badge)}"
        label-extended="\${ifDefined(args.labelExtended)}"
        ?divider="\${args.divider}"
        ?dropdown="\${args.dropdown}"
        >\${args.dropdown ? html\` <it-dropdown-item slot="items" href="#">Azione 1</it-dropdown-item>
              <it-dropdown-item slot="items" href="#">Azione 2</it-dropdown-item>
              <it-dropdown-item slot="items" href="#">Azione 3</it-dropdown-item>\` : ''}</it-toolbar-item
      ></it-toolbar
    >\`
}`,...h.parameters?.docs?.source}}};const I=["EsempioInterattivo","ToolbarGrande","ToolbarMedia","ToolbarPiccola","ToolbarConDivisori","ToolbarConBadge","ToolbarMediaSmallConBadge","ToolbarDropdown","ToolbarMediumDropdown","ToolbarSmallDropdown","ToolbarVertical","ToolbarMediumVertical","ToolbarSmallVertical","ToolbarItemBase"],E=Object.freeze(Object.defineProperty({__proto__:null,EsempioInterattivo:r,ToolbarConBadge:s,ToolbarConDivisori:d,ToolbarDropdown:b,ToolbarGrande:a,ToolbarItemBase:h,ToolbarMedia:l,ToolbarMediaSmallConBadge:m,ToolbarMediumDropdown:c,ToolbarMediumVertical:f,ToolbarPiccola:n,ToolbarSmallDropdown:p,ToolbarSmallVertical:u,ToolbarVertical:g,__namedExportsOrder:I,default:x},Symbol.toStringTag,{value:"Module"}));export{r as E,E as S,h as T,a,l as b,n as c,d,s as e,m as f,b as g,c as h,p as i,g as j,f as k,u as l};

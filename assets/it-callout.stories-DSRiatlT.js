import{b as e,A as D,o as $}from"./iframe-Dq0Es6_d.js";const I=["primary","success","warning","danger"],t=({variant:i="",highlight:h=!1,calloutMore:b=!1,icon:f="",title:M="Titolo callout",content:C=e`<p>
    Maecenas vulputate ante dictum vestibulum volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
    non augue non purus vestibulum varius.
  </p>`,moreContent:w=void 0,bigText:T=!1,headingLevel:x="h2"})=>e`
  <it-callout
    variant="${$(i)}"
    ?highlight="${h}"
    ?callout-more="${b}"
    ?big-text="${T}"
    heading-level="${x}"
  >
    ${f?e`<it-icon slot="icon" name="${f}" size="md"></it-icon>`:D}
    <span slot="title">${M}</span>
    ${C} ${w}
  </it-callout>
`,S={title:"Componenti/Callout",tags:["a11y-ok","web-component"],component:"it-callout",args:{variant:"",highlight:!1,calloutMore:!1,bigText:!1,headingLevel:"h2"},argTypes:{variant:{control:"select",description:"Variante di colore del callout",options:I},highlight:{control:"boolean",description:"Applica lo stile highlight (bordo solo a sinistra)",table:{defaultValue:{summary:"false"}}},calloutMore:{name:"callout-more",control:"boolean",description:'Applica lo stile "Approfondimento" all callout. Aggiungi eventuale contenuto collassabile da mostrare nello slot `more-content`',table:{defaultValue:{summary:"false"}}},bigText:{name:"big-text",control:"boolean",description:"Applica lo stile per testo più grande all'interno del callout",table:{defaultValue:{summary:"false"}}},headingLevel:{name:"heading-level",control:"select",options:["h1","h2","h3","h4","h5","h6"],description:"Livello di intestazione semantica per il titolo del callout",table:{defaultValue:{summary:"h2"}}}}},n={name:"Esempio interattivo",tags:["!autodocs","!dev"],render:i=>t({...i,icon:"it-info-circle"})},a={render:i=>e` <div class="row">${t({...i,icon:"it-info-circle"})}</div> `},r={render:i=>e`
    <div class="row">${t({...i,icon:"it-info-circle",bigText:!0})}</div>
  `},o={render:()=>e`
    <div class="row">
      ${t({variant:"primary",title:"Note a riguardo",icon:"it-info-circle",content:e`
          Maecenas at erat id <strong>sem interdum efficitur eu sed nunc.</strong> Mauris sit amet erat eget augue
          molestie malesuada ut sed ex. In sed dignissim elit. Donec efficitur, sem eget vestibulum auctor, sem erat
          interdum magna, eu commodo odio mauris semper dolor.
        `})}
    </div>
  `},s={render:()=>e`
    <div class="row">
      ${t({variant:"success",title:"Titolo di conferma",icon:"it-check-circle",content:e`
          Maecenas at erat id <strong>sem interdum efficitur eu sed nunc.</strong> Mauris sit amet erat eget augue
          molestie malesuada ut sed ex. In sed dignissim elit. Donec efficitur, sem eget vestibulum auctor, sem erat
          interdum magna, eu commodo odio mauris semper dolor.
        `})}
    </div>
  `},u={render:()=>e`
    <div class="row">
      ${t({variant:"warning",title:"Titolo di attenzione",icon:"it-warning-circle",content:e`
          Maecenas at erat id <strong>sem interdum efficitur eu sed nunc.</strong> Mauris sit amet erat eget augue
          molestie malesuada ut sed ex. In sed dignissim elit. Donec efficitur, sem eget vestibulum auctor, sem erat
          interdum magna, eu commodo odio mauris semper dolor.
        `})}
    </div>
  `},c={render:()=>e`
    <div class="row">
      ${t({variant:"danger",title:"Titolo di allerta",icon:"it-close-circle",content:e`
          Maecenas at erat id <strong>sem interdum efficitur eu sed nunc.</strong> Mauris sit amet erat eget augue
          molestie malesuada ut sed ex. In sed dignissim elit. Donec efficitur, sem eget vestibulum auctor, sem erat
          interdum magna, eu commodo odio mauris semper dolor.
        `})}
    </div>
  `},m={render:()=>e`
    <div class="row">
      ${t({highlight:!0,title:"Titolo callout",icon:"it-info-circle",content:e`
          Maecenas at erat id <strong>sem interdum efficitur eu sed nunc.</strong> Mauris sit amet erat eget augue
          molestie malesuada ut sed ex. In sed dignissim elit. Donec efficitur, sem eget vestibulum auctor, sem erat
          interdum magna, eu commodo odio mauris semper dolor.
        `})}
    </div>
  `},l={render:()=>e`
    <div class="row">
      ${t({variant:"primary",highlight:!0,title:"Titolo callout",icon:"it-info-circle",content:e`
          Maecenas at erat id <strong>sem interdum efficitur eu sed nunc.</strong> Mauris sit amet erat eget augue
          molestie malesuada ut sed ex. In sed dignissim elit. Donec efficitur, sem eget vestibulum auctor, sem erat
          interdum magna, eu commodo odio mauris semper dolor.
        `})}
    </div>
  `},d={render:()=>e`
    <div class="row">
      ${t({variant:"success",highlight:!0,title:"Titolo di conferma",icon:"it-check-circle",content:e`
          Maecenas at erat id <strong>sem interdum efficitur eu sed nunc.</strong> Mauris sit amet erat eget augue
          molestie malesuada ut sed ex. In sed dignissim elit. Donec efficitur, sem eget vestibulum auctor, sem erat
          interdum magna, eu commodo odio mauris semper dolor.
        `})}
    </div>
  `},g={render:()=>e`
    <div class="row">
      ${t({variant:"warning",highlight:!0,title:"Titolo di attenzione",icon:"it-warning-circle",content:e`
          Maecenas at erat id <strong>sem interdum efficitur eu sed nunc.</strong> Mauris sit amet erat eget augue
          molestie malesuada ut sed ex. In sed dignissim elit. Donec efficitur, sem eget vestibulum auctor, sem erat
          interdum magna, eu commodo odio mauris semper dolor.
        `})}
    </div>
  `},p={parameters:{docs:{canvas:{sourceState:"closed"}}},render:()=>e`
    <div class="row">
      ${t({variant:"danger",highlight:!0,title:"Titolo di allerta",icon:"it-close-circle",content:e`
          Maecenas at erat id <strong>sem interdum efficitur eu sed nunc.</strong> Mauris sit amet erat eget augue
          molestie malesuada ut sed ex. In sed dignissim elit. Donec efficitur, sem eget vestibulum auctor, sem erat
          interdum magna, eu commodo odio mauris semper dolor.
        `})}
    </div>
  `},v={render:()=>e`
    <div class="row" style="background-color: #fff; padding: 2rem">
      <!-- START CALLOUT APPROFONDIMENTO -->
      ${t({calloutMore:!0,title:"Approfondimento",icon:"it-info-circle",content:e`
          <p>
            Quisque suscipit interdum augue non volutpat. Cras tristique arcu tortor. Mauris eu magna nibh. Curabitur
            malesuada neque in lectus sagittis accumsan. In vitae justo eros. Maecenas pellentesque lacinia ipsum vitae
            rhoncus. Vestibulum pretium tempor turpis, nec gravida eros viverra in. Proin dictum nibh ut semper
            tristique.
          </p>
          <p>
            Maecenas at erat id <strong>sem interdum efficitur eu sed nunc.</strong> Mauris sit amet erat eget augue
            molestie malesuada ut sed ex. In sed dignissim elit. Donec efficitur, sem eget vestibulum auctor, sem erat
            interdum magna, eu commodo odio mauris semper dolor.
          </p>
          <p>
            Maecenas vulputate ante dictum <a href="#">vestibulum volutpat</a>. Lorem ipsum dolor sit amet,
            <strong>consectetur adipiscing elit.</strong> Aenean non augue non purus vestibulum varius. Maecenas
            ullamcorper tincidunt nulla quis laoreet.
          </p>
        `,moreContent:e`
          <it-callout-more>
            <span slot="label">Leggi tutto</span>
            <div slot="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum
            </div>
            <a slot="extra" class="callout-more-download" href="#">
              <it-icon name="it-download" color="primary" size="sm"></it-icon>
              <span class="visually-hidden">Scarica il contenuto in PDF </span>
              Download
            </a>
          </it-callout-more>
        `})}
      <!-- END CALLOUT APPROFONDIMENTO -->
    </div>
  `};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Esempio interattivo',
  tags: ['!autodocs', '!dev'],
  render: params => renderComponent({
    ...params,
    icon: 'it-info-circle'
  })
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: params => html\` <div class="row">\${renderComponent({
    ...params,
    icon: 'it-info-circle'
  })}</div> \`
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: params => html\`
    <div class="row">\${renderComponent({
    ...params,
    icon: 'it-info-circle',
    bigText: true
  })}</div>
  \`
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <div class="row">
      \${renderComponent({
    variant: 'primary',
    title: 'Note a riguardo',
    icon: 'it-info-circle',
    // @ts-ignore
    content: html\`
          Maecenas at erat id <strong>sem interdum efficitur eu sed nunc.</strong> Mauris sit amet erat eget augue
          molestie malesuada ut sed ex. In sed dignissim elit. Donec efficitur, sem eget vestibulum auctor, sem erat
          interdum magna, eu commodo odio mauris semper dolor.
        \`
  })}
    </div>
  \`
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <div class="row">
      \${renderComponent({
    variant: 'success',
    title: 'Titolo di conferma',
    icon: 'it-check-circle',
    // @ts-ignore
    content: html\`
          Maecenas at erat id <strong>sem interdum efficitur eu sed nunc.</strong> Mauris sit amet erat eget augue
          molestie malesuada ut sed ex. In sed dignissim elit. Donec efficitur, sem eget vestibulum auctor, sem erat
          interdum magna, eu commodo odio mauris semper dolor.
        \`
  })}
    </div>
  \`
}`,...s.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <div class="row">
      \${renderComponent({
    variant: 'warning',
    title: 'Titolo di attenzione',
    icon: 'it-warning-circle',
    // @ts-ignore
    content: html\`
          Maecenas at erat id <strong>sem interdum efficitur eu sed nunc.</strong> Mauris sit amet erat eget augue
          molestie malesuada ut sed ex. In sed dignissim elit. Donec efficitur, sem eget vestibulum auctor, sem erat
          interdum magna, eu commodo odio mauris semper dolor.
        \`
  })}
    </div>
  \`
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <div class="row">
      \${renderComponent({
    variant: 'danger',
    title: 'Titolo di allerta',
    icon: 'it-close-circle',
    // @ts-ignore
    content: html\`
          Maecenas at erat id <strong>sem interdum efficitur eu sed nunc.</strong> Mauris sit amet erat eget augue
          molestie malesuada ut sed ex. In sed dignissim elit. Donec efficitur, sem eget vestibulum auctor, sem erat
          interdum magna, eu commodo odio mauris semper dolor.
        \`
  })}
    </div>
  \`
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <div class="row">
      \${renderComponent({
    highlight: true,
    title: 'Titolo callout',
    icon: 'it-info-circle',
    content: html\`
          Maecenas at erat id <strong>sem interdum efficitur eu sed nunc.</strong> Mauris sit amet erat eget augue
          molestie malesuada ut sed ex. In sed dignissim elit. Donec efficitur, sem eget vestibulum auctor, sem erat
          interdum magna, eu commodo odio mauris semper dolor.
        \`
  })}
    </div>
  \`
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <div class="row">
      \${renderComponent({
    variant: 'primary',
    highlight: true,
    title: 'Titolo callout',
    icon: 'it-info-circle',
    content: html\`
          Maecenas at erat id <strong>sem interdum efficitur eu sed nunc.</strong> Mauris sit amet erat eget augue
          molestie malesuada ut sed ex. In sed dignissim elit. Donec efficitur, sem eget vestibulum auctor, sem erat
          interdum magna, eu commodo odio mauris semper dolor.
        \`
  })}
    </div>
  \`
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <div class="row">
      \${renderComponent({
    variant: 'success',
    highlight: true,
    title: 'Titolo di conferma',
    icon: 'it-check-circle',
    content: html\`
          Maecenas at erat id <strong>sem interdum efficitur eu sed nunc.</strong> Mauris sit amet erat eget augue
          molestie malesuada ut sed ex. In sed dignissim elit. Donec efficitur, sem eget vestibulum auctor, sem erat
          interdum magna, eu commodo odio mauris semper dolor.
        \`
  })}
    </div>
  \`
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <div class="row">
      \${renderComponent({
    variant: 'warning',
    highlight: true,
    title: 'Titolo di attenzione',
    icon: 'it-warning-circle',
    content: html\`
          Maecenas at erat id <strong>sem interdum efficitur eu sed nunc.</strong> Mauris sit amet erat eget augue
          molestie malesuada ut sed ex. In sed dignissim elit. Donec efficitur, sem eget vestibulum auctor, sem erat
          interdum magna, eu commodo odio mauris semper dolor.
        \`
  })}
    </div>
  \`
}`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'closed'
      }
    }
  },
  render: () => html\`
    <div class="row">
      \${renderComponent({
    variant: 'danger',
    highlight: true,
    title: 'Titolo di allerta',
    icon: 'it-close-circle',
    content: html\`
          Maecenas at erat id <strong>sem interdum efficitur eu sed nunc.</strong> Mauris sit amet erat eget augue
          molestie malesuada ut sed ex. In sed dignissim elit. Donec efficitur, sem eget vestibulum auctor, sem erat
          interdum magna, eu commodo odio mauris semper dolor.
        \`
  })}
    </div>
  \`
}`,...p.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <div class="row" style="background-color: #fff; padding: 2rem">
      <!-- START CALLOUT APPROFONDIMENTO -->
      \${renderComponent({
    calloutMore: true,
    title: 'Approfondimento',
    icon: 'it-info-circle',
    content: html\`
          <p>
            Quisque suscipit interdum augue non volutpat. Cras tristique arcu tortor. Mauris eu magna nibh. Curabitur
            malesuada neque in lectus sagittis accumsan. In vitae justo eros. Maecenas pellentesque lacinia ipsum vitae
            rhoncus. Vestibulum pretium tempor turpis, nec gravida eros viverra in. Proin dictum nibh ut semper
            tristique.
          </p>
          <p>
            Maecenas at erat id <strong>sem interdum efficitur eu sed nunc.</strong> Mauris sit amet erat eget augue
            molestie malesuada ut sed ex. In sed dignissim elit. Donec efficitur, sem eget vestibulum auctor, sem erat
            interdum magna, eu commodo odio mauris semper dolor.
          </p>
          <p>
            Maecenas vulputate ante dictum <a href="#">vestibulum volutpat</a>. Lorem ipsum dolor sit amet,
            <strong>consectetur adipiscing elit.</strong> Aenean non augue non purus vestibulum varius. Maecenas
            ullamcorper tincidunt nulla quis laoreet.
          </p>
        \`,
    // @ts-ignore
    moreContent: html\`
          <it-callout-more>
            <span slot="label">Leggi tutto</span>
            <div slot="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum
            </div>
            <a slot="extra" class="callout-more-download" href="#">
              <it-icon name="it-download" color="primary" size="sm"></it-icon>
              <span class="visually-hidden">Scarica il contenuto in PDF </span>
              Download
            </a>
          </it-callout-more>
        \`
  })}
      <!-- END CALLOUT APPROFONDIMENTO -->
    </div>
  \`
}`,...v.parameters?.docs?.source}}};const A=["EsempioInterattivo","CalloutBase","CalloutBigText","CalloutPrimario","CalloutSuccess","CalloutWarning","CalloutDanger","HighlightBase","HighlightPrimario","HighlightSuccess","HighlightWarning","HighlightDanger","CalloutApprofondimento"],L=Object.freeze(Object.defineProperty({__proto__:null,CalloutApprofondimento:v,CalloutBase:a,CalloutBigText:r,CalloutDanger:c,CalloutPrimario:o,CalloutSuccess:s,CalloutWarning:u,EsempioInterattivo:n,HighlightBase:m,HighlightDanger:p,HighlightPrimario:l,HighlightSuccess:d,HighlightWarning:g,__namedExportsOrder:A,default:S},Symbol.toStringTag,{value:"Module"}));export{L as C,n as E,m as H,r as a,o as b,s as c,u as d,c as e,l as f,d as g,g as h,p as i,v as j};

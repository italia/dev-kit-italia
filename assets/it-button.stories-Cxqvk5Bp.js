import{b as t,o as v}from"./iframe-D7fXMUtU.js";const y=["lg","sm","xs"],k=["primary","secondary","success","danger","warning","link"],a=(n,e="")=>{const m=n.slot?.length>0?n.slot:e;return t`
    <it-button
      variant="${v(n.variant)}"
      ?outline="${n.outline}"
      size="${v(n.size)}"
      ?block="${n.block}"
      ?disabled="${v(n.disabled?"true":void 0)}"
      type="${v(n.type)}"
    >
      ${m}
    </it-button>
  `},g=n=>t`
  <div class="flex">
    ${a(n)}
    ${a({...n,disabled:!0,slot:`${n.slot} disabled`})}
  </div>
`,i=(n,e)=>{const m=n.slot?.length>0?n.slot:null;return t`<div class="flex p-0">
    ${g({...n,slot:m??e})}
    ${n.variant!=="link"?g({...n,slot:m??`${e} outline`,outline:!0}):""}
  </div>`},$=(n,e)=>t`<div class="flex">
    ${a({...n,variant:"primary"},`Primary ${e}`)}
    ${a({...n,variant:"secondary"},`Secondary ${e}`)}
  </div>`,b={title:"Componenti/Button",tags:["a11y-ok","web-component"],component:"it-button",args:{slot:"Testo del pulsante",variant:"primary",size:void 0,block:!1,outline:!1,disabled:!1,type:"button",value:""},argTypes:{variant:{control:"select",description:"Varianti di colore",options:k},size:{control:"select",description:"Dimensione del pulsante",options:y},block:{control:"boolean",type:"boolean",description:"Quando abilitato, estende il componente Button fino a prendere tutta la larghezza disponibile",table:{defaultValue:{summary:"false"}}},disabled:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},outline:{control:"boolean",type:"boolean",description:"Applica il colore solamente al bordo, usando il colore di sfondo come colore interno del pulsante.",table:{defaultValue:{summary:"false"}}},slot:{control:"text",description:"Testo del pulsante"},type:{control:"select",description:"Tipologia di pulsante",options:["button","submit","reset"],table:{defaultValue:{summary:"button"}}},value:{control:"text"}}},s={...b,name:"Esempio interattivo",args:{variant:"primary"},tags:["!dev"],parameters:{docs:{canvas:{sourceState:"shown"}}},render:n=>t` ${a({...n})}`},o={name:"Stato disabilitato",args:{slot:"",disabled:!0},argTypes:{variant:{table:{disable:!0}},outline:{table:{disable:!0}},disabled:{table:{disable:!0}}},render:n=>t`
    ${a({...n,variant:"primary"},"Primary")}
    ${a({...n,variant:"secondary"},"Secondary")}
    ${a({...n,variant:"success"},"Success")}
    ${a({...n,variant:"danger"},"Danger")}
    ${a({...n,variant:"warning"},"Warning")}
    ${a({...n,variant:"link"},"Pulsante link")}
  `},r={name:"Varianti di colore",args:{slot:""},argTypes:{variant:{table:{disable:!0}},outline:{table:{disable:!0}},disabled:{table:{disable:!0}}},render:n=>t`
    ${i({...n,variant:"primary"},"Primary")}
    ${i({...n,variant:"secondary"},"Secondary")}
    ${i({...n,variant:"success"},"Success")}
    ${i({...n,variant:"danger"},"Danger")}
    ${i({...n,variant:"warning"},"Warning")}
    ${i({...n,variant:"link"},"Pulsante link")}
  `},l={name:"Varianti di dimensione",args:{slot:""},argTypes:{variant:{table:{disable:!0}},size:{table:{disable:!0}},block:{table:{disable:!0}}},render:n=>t`
    ${$({...n,size:"lg"},"Large")} ${$({...n},"Default")}
    ${$({...n,size:"xs"},"Extra Small")}
    <div class="flex">
      ${a({...n,block:!0,variant:"primary"},"Primary Block")}
    </div>
    <div class="flex">
      ${a({...n,block:!0,variant:"secondary"},"Secondary Block")}
    </div>
  `},c={...b,args:{variant:"primary"},render:n=>t`
    <div class="flex">
      ${a({...n,slot:`Button - ${n.slot}`,type:"button"})}
      ${a({...n,slot:`Submit - ${n.slot}`,type:"submit"})}
      ${a({...n,slot:`Reset - ${n.slot}`,type:"reset"})}
    </div>
  `},d={name:"Sfondo scuro",args:{slot:""},argTypes:{variant:{table:{disable:!0}},outline:{table:{disable:!0}},disabled:{table:{disable:!0}}},parameters:{docs:{description:{story:`
<div class="callout callout-success"><div class="callout-inner"><div class="callout-title"><span class="text">Trasmettere significato alle tecnologie assistive</span></div>
<p>
L’uso del colore per aggiungere un significato fornisce solo un’indicazione visiva, che non sarà trasmesso agli utenti di tecnologie assistive –
come gli screen reader.
Assicurati che le informazioni denotate dal colore siano rese disponibili anche dal contenuto stesso (es.: il testo
visibile), o siano incluse attraverso mezzi alternativi, come testo aggiuntivo nascosto con la classe <code>.visually-hidden</code>.</p></div></div>`}}},render:n=>t`
    <div class="bg-dark p-4">
      ${i({...n,variant:"primary"},"Primary")}
      ${i({...n,variant:"secondary"},"Secondary")}
      ${i({...n,variant:"link"},"Pulsante link")}
    </div>
  `},u={...b,name:"Con icona",args:{},argTypes:{variant:{table:{disable:!0}},size:{table:{disable:!0}}},parameters:{docs:{description:{story:'\n<div class="callout callout-success"><div class="callout-inner"><div class="callout-title"><span class="text">Accessibilità</span></div>\n<p>\nLe icone sono di default puramente decorative. Nel caso in cui l\'icona non debba essere un elemento decorativo, è necessario utilizzare correttamente gli attributi `label`, `role` e `aria-hidden` sul componente `<it-icon>`. Per maggiori dettagli visita la [guida dedicata](?path=/docs/componenti-icon--documentazione) al componente `<it-icon>`.</p></div></div>\n'}}},render:n=>{const e=n.slot?.length>0?n.slot:null;return t` <div class="flex align-items-center">
      <it-button
        variant="success"
        size="lg"
        ?outline="${n.outline}"
        ?block="${n.block}"
        ?disabled="${n.disabled}"
        type="${n.type}"
      >
        <it-icon name="it-star-full" color="inverse" size="sm"></it-icon>
        <span>${e??"Pulsante Large con icona"}</span>
      </it-button>

      <it-button
        variant="primary"
        ?outline="${n.outline}"
        ?block="${n.block}"
        ?disabled="${n.disabled}"
        type="${n.type}"
      >
        <it-icon name="it-star-full" color="inverse" size="sm"></it-icon> <span>${e??"Pulsante con icona"}</span>
      </it-button>

      <it-button
        variant="danger"
        size="xs"
        ?outline="${n.outline}"
        ?block="${n.block}"
        ?disabled="${n.disabled}"
        type="${n.type}"
      >
        <it-icon name="it-star-full" color="inverse" size="xs"></it-icon>
        <span>${e??"Pulsante Extra Small con icona"}</span>
      </it-button>

      <it-button
        variant="link"
        size="xs"
        ?outline="${n.outline}"
        ?block="${n.block}"
        ?disabled="${n.disabled}"
        type="${n.type}"
      >
        <it-icon name="it-star-full" color="primary" size="xs"></it-icon>
        <span>${e??"Pulsante Link Extra Small con icona"}</span>
      </it-button>
    </div>`}},p={...b,name:"Con icona cerchiata",args:{},argTypes:{variant:{table:{disable:!0}},size:{table:{disable:!0}}},render:n=>{const e=n.slot?.length>0?n.slot:null;return t` <div class="flex align-items-center">
      <it-button
        variant="success"
        size="lg"
        ?outline="${n.outline}"
        ?block="${n.block}"
        ?disabled="${n.disabled}"
        type="${n.type}"
      >
        <span class="rounded-icon">
          <it-icon name="it-user" color="success" size="xs"></it-icon>
        </span>
        <span>${e??"Pulsante Large con icona"}</span>
      </it-button>

      <it-button
        variant="primary"
        ?outline="${n.outline}"
        ?block="${n.block}"
        ?disabled="${n.disabled}"
        type="${n.type}"
      >
        <span class="rounded-icon" size="sm">
          <it-icon name="it-user" color="primary" size="xs"></it-icon>
        </span>
        <span>${e??"Pulsante con icona"}</span>
      </it-button>

      <it-button
        variant="danger"
        ?outline="${n.outline}"
        ?block="${n.block}"
        ?disabled="${n.disabled}"
        type="${n.type}"
      >
        <span class="rounded-icon">
          <it-icon name="it-user" color="danger" size="xs"></it-icon>
        </span>
        <span>${e??"Pulsante Small con icona"}</span>
      </it-button>

      <it-button
        variant="secondary"
        size="xs"
        ?outline="${n.outline}"
        ?block="${n.block}"
        ?disabled="${n.disabled}"
        type="${n.type}"
      >
        <span class="rounded-icon">
          <it-icon name="it-user" color="secondary" size="xs"></it-icon>
        </span>
        <span>${e??"Pulsante Link Extra Small con icona"}</span>
      </it-button>
    </div>`}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  ...meta,
  name: 'Esempio interattivo',
  args: {
    variant: 'primary'
  },
  tags: ['!dev'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      }
    }
  },
  render: params => html\` \${renderComponent({
    ...params
  })}\`
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Stato disabilitato',
  args: {
    slot: '',
    disabled: true
  },
  argTypes: {
    variant: {
      table: {
        disable: true
      }
    },
    outline: {
      table: {
        disable: true
      }
    },
    disabled: {
      table: {
        disable: true
      }
    }
  },
  render: args => html\`
    \${renderComponent({
    ...args,
    variant: 'primary'
  }, 'Primary')}
    \${renderComponent({
    ...args,
    variant: 'secondary'
  }, 'Secondary')}
    \${renderComponent({
    ...args,
    variant: 'success'
  }, 'Success')}
    \${renderComponent({
    ...args,
    variant: 'danger'
  }, 'Danger')}
    \${renderComponent({
    ...args,
    variant: 'warning'
  }, 'Warning')}
    \${renderComponent({
    ...args,
    variant: 'link'
  }, 'Pulsante link')}
  \`
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Varianti di colore',
  args: {
    slot: ''
  },
  argTypes: {
    variant: {
      table: {
        disable: true
      }
    },
    outline: {
      table: {
        disable: true
      }
    },
    disabled: {
      table: {
        disable: true
      }
    }
  },
  render: args => html\`
    \${renderVariant({
    ...args,
    variant: 'primary'
  }, 'Primary')}
    \${renderVariant({
    ...args,
    variant: 'secondary'
  }, 'Secondary')}
    \${renderVariant({
    ...args,
    variant: 'success'
  }, 'Success')}
    \${renderVariant({
    ...args,
    variant: 'danger'
  }, 'Danger')}
    \${renderVariant({
    ...args,
    variant: 'warning'
  }, 'Warning')}
    \${renderVariant({
    ...args,
    variant: 'link'
  }, 'Pulsante link')}
  \`
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Varianti di dimensione',
  args: {
    slot: ''
  },
  argTypes: {
    variant: {
      table: {
        disable: true
      }
    },
    size: {
      table: {
        disable: true
      }
    },
    block: {
      table: {
        disable: true
      }
    }
  },
  render: args => html\`
    \${renderSizeVariant({
    ...args,
    size: 'lg'
  }, 'Large')} \${renderSizeVariant({
    ...args
  }, 'Default')}
    \${renderSizeVariant({
    ...args,
    size: 'xs'
  }, 'Extra Small')}
    <div class="flex">
      \${renderComponent({
    ...args,
    block: true,
    variant: 'primary'
  }, 'Primary Block')}
    </div>
    <div class="flex">
      \${renderComponent({
    ...args,
    block: true,
    variant: 'secondary'
  }, 'Secondary Block')}
    </div>
  \`
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  ...meta,
  // name: 'Tipologie',
  args: {
    variant: 'primary'
  },
  render: params => html\`
    <div class="flex">
      \${renderComponent({
    ...params,
    slot: \`Button - \${params.slot}\`,
    type: 'button'
  })}
      \${renderComponent({
    ...params,
    slot: \`Submit - \${params.slot}\`,
    type: 'submit'
  })}
      \${renderComponent({
    ...params,
    slot: \`Reset - \${params.slot}\`,
    type: 'reset'
  })}
    </div>
  \`
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Sfondo scuro',
  args: {
    slot: ''
  },
  argTypes: {
    variant: {
      table: {
        disable: true
      }
    },
    outline: {
      table: {
        disable: true
      }
    },
    disabled: {
      table: {
        disable: true
      }
    }
  },
  parameters: {
    docs: {
      description: {
        story: \`
<div class="callout callout-success"><div class="callout-inner"><div class="callout-title"><span class="text">Trasmettere significato alle tecnologie assistive</span></div>
<p>
L’uso del colore per aggiungere un significato fornisce solo un’indicazione visiva, che non sarà trasmesso agli utenti di tecnologie assistive –
come gli screen reader.
Assicurati che le informazioni denotate dal colore siano rese disponibili anche dal contenuto stesso (es.: il testo
visibile), o siano incluse attraverso mezzi alternativi, come testo aggiuntivo nascosto con la classe <code>.visually-hidden</code>.</p></div></div>\`
      }
    }
  },
  render: args => html\`
    <div class="bg-dark p-4">
      \${renderVariant({
    ...args,
    variant: 'primary'
  }, 'Primary')}
      \${renderVariant({
    ...args,
    variant: 'secondary'
  }, 'Secondary')}
      \${renderVariant({
    ...args,
    variant: 'link'
  }, 'Pulsante link')}
    </div>
  \`
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  ...meta,
  name: 'Con icona',
  args: {},
  argTypes: {
    variant: {
      table: {
        disable: true
      }
    },
    size: {
      table: {
        disable: true
      }
    }
  },
  parameters: {
    docs: {
      description: {
        story: \`
<div class="callout callout-success"><div class="callout-inner"><div class="callout-title"><span class="text">Accessibilità</span></div>
<p>
Le icone sono di default puramente decorative. Nel caso in cui l'icona non debba essere un elemento decorativo, è necessario utilizzare correttamente gli attributi \\\`label\\\`, \\\`role\\\` e \\\`aria-hidden\\\` sul componente \\\`<it-icon>\\\`. Per maggiori dettagli visita la [guida dedicata](?path=/docs/componenti-icon--documentazione) al componente \\\`<it-icon>\\\`.</p></div></div>
\`
      }
    }
  },
  render: params => {
    const slot = params.slot?.length > 0 ? params.slot : null;
    return html\` <div class="flex align-items-center">
      <it-button
        variant="success"
        size="lg"
        ?outline="\${params.outline}"
        ?block="\${params.block}"
        ?disabled="\${params.disabled}"
        type="\${params.type}"
      >
        <it-icon name="it-star-full" color="inverse" size="sm"></it-icon>
        <span>\${slot ?? 'Pulsante Large con icona'}</span>
      </it-button>

      <it-button
        variant="primary"
        ?outline="\${params.outline}"
        ?block="\${params.block}"
        ?disabled="\${params.disabled}"
        type="\${params.type}"
      >
        <it-icon name="it-star-full" color="inverse" size="sm"></it-icon> <span>\${slot ?? 'Pulsante con icona'}</span>
      </it-button>

      <it-button
        variant="danger"
        size="xs"
        ?outline="\${params.outline}"
        ?block="\${params.block}"
        ?disabled="\${params.disabled}"
        type="\${params.type}"
      >
        <it-icon name="it-star-full" color="inverse" size="xs"></it-icon>
        <span>\${slot ?? 'Pulsante Extra Small con icona'}</span>
      </it-button>

      <it-button
        variant="link"
        size="xs"
        ?outline="\${params.outline}"
        ?block="\${params.block}"
        ?disabled="\${params.disabled}"
        type="\${params.type}"
      >
        <it-icon name="it-star-full" color="primary" size="xs"></it-icon>
        <span>\${slot ?? 'Pulsante Link Extra Small con icona'}</span>
      </it-button>
    </div>\`;
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  ...meta,
  name: 'Con icona cerchiata',
  args: {},
  argTypes: {
    variant: {
      table: {
        disable: true
      }
    },
    size: {
      table: {
        disable: true
      }
    }
  },
  render: params => {
    const slot = params.slot?.length > 0 ? params.slot : null;
    return html\` <div class="flex align-items-center">
      <it-button
        variant="success"
        size="lg"
        ?outline="\${params.outline}"
        ?block="\${params.block}"
        ?disabled="\${params.disabled}"
        type="\${params.type}"
      >
        <span class="rounded-icon">
          <it-icon name="it-user" color="success" size="xs"></it-icon>
        </span>
        <span>\${slot ?? 'Pulsante Large con icona'}</span>
      </it-button>

      <it-button
        variant="primary"
        ?outline="\${params.outline}"
        ?block="\${params.block}"
        ?disabled="\${params.disabled}"
        type="\${params.type}"
      >
        <span class="rounded-icon" size="sm">
          <it-icon name="it-user" color="primary" size="xs"></it-icon>
        </span>
        <span>\${slot ?? 'Pulsante con icona'}</span>
      </it-button>

      <it-button
        variant="danger"
        ?outline="\${params.outline}"
        ?block="\${params.block}"
        ?disabled="\${params.disabled}"
        type="\${params.type}"
      >
        <span class="rounded-icon">
          <it-icon name="it-user" color="danger" size="xs"></it-icon>
        </span>
        <span>\${slot ?? 'Pulsante Small con icona'}</span>
      </it-button>

      <it-button
        variant="secondary"
        size="xs"
        ?outline="\${params.outline}"
        ?block="\${params.block}"
        ?disabled="\${params.disabled}"
        type="\${params.type}"
      >
        <span class="rounded-icon">
          <it-icon name="it-user" color="secondary" size="xs"></it-icon>
        </span>
        <span>\${slot ?? 'Pulsante Link Extra Small con icona'}</span>
      </it-button>
    </div>\`;
  }
}`,...p.parameters?.docs?.source}}};const z=["EsempioInterattivo","Disabilitato","VariantiColore","VariantiDimensione","Tipologie","SfondoScuro","ConIcona","ConIconaCerchiata"],f=Object.freeze(Object.defineProperty({__proto__:null,ConIcona:u,ConIconaCerchiata:p,Disabilitato:o,EsempioInterattivo:s,SfondoScuro:d,Tipologie:c,VariantiColore:r,VariantiDimensione:l,__namedExportsOrder:z,default:b},Symbol.toStringTag,{value:"Module"}));export{u as C,o as D,s as E,f as S,c as T,r as V,l as a,d as b,p as c};

import{x as a}from"./lit-element-DvQWNfDj.js";import{o as R}from"./query-nkdlPDuA.js";import"./it-button-DO6Soklg.js";import"./it-icon-DlYVsHkE.js";import"./iframe-BqmG_KID.js";const G=["lg","sm","xs"],M=["primary","secondary","success","danger","warning","link"],t=(n,e="")=>{var s;const i=((s=n.slot)==null?void 0:s.length)>0?n.slot:e;return a`
    <it-button
      variant="${n.variant}"
      ?outline="${n.outline}"
      size="${n.size}"
      ?block="${n.block}"
      aria-disabled="${R(n.ariaDisabled?"true":void 0)}"
      ?icon="${n.icon}"
      type="${n.type}"
      >${i}</it-button
    >
  `},$=n=>a`
  <div class="flex">
    ${t(n)}
    ${t({...n,ariaDisabled:!0,slot:`${n.slot} disabled`})}
  </div>
`,o=(n,e)=>{var s;const i=((s=n.slot)==null?void 0:s.length)>0?n.slot:null;return a`<div class="flex p-0">
    ${$({...n,slot:i??e})}
    ${n.variant!=="link"?$({...n,slot:i??`${e} outline`,outline:!0}):""}
  </div>`},g=(n,e)=>a`<div class="flex">
    ${t({...n,variant:"primary"},`Primary ${e}`)}
    ${t({...n,variant:"secondary"},`Secondary ${e}`)}
  </div>`,v={title:"Componenti/Button",tags:["autodocs"],component:"it-button",args:{slot:"Testo del pulsante",variant:"primary",size:"sm",block:!1,outline:!1,ariaDisabled:!1,icon:!1,type:"button",value:""},argTypes:{variant:{control:"select",description:"Varianti di colore",options:M},size:{control:"select",description:"Dimensione del pulsante",options:G,table:{defaultValue:{summary:"sm"}}},block:{control:"boolean",type:"boolean",description:"Quando abilitato, estende il componente Button fino a prendere tutta la larghezza disponibile",table:{defaultValue:{summary:"false"}}},ariaDisabled:{control:"boolean",type:"boolean",name:"aria-disabled",table:{defaultValue:{summary:"false"}}},outline:{control:"boolean",type:"boolean",description:"Applica il colore solamente al bordo, usando il colore di sfondo come colore interno del pulsante.",table:{defaultValue:{summary:"false"}}},icon:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},slot:{control:"text",description:"Testo del pulsante"},type:{control:"select",description:"Tipologia di pulsante",options:["button","submit","reset"],table:{defaultValue:{summary:"button"}}},value:{control:"text"}},parameters:{docs:{description:{component:`
<Description>Pulsante con etichetta di testo o icona che al click inizia un'azione o un evento.</Description>

Per indicazioni su "Come e Quando usarlo" si fa riferimento alla [guida del design-system](https://designers.italia.it/design-system/componenti/buttons/).
`}}}},r={...v,name:"Esempio interattivo",args:{variant:"primary"},tags:["!autodocs","!dev"],parameters:{docs:{canvas:{sourceState:"shown"}}},render:n=>a` ${t({...n})}`},l={name:"Personalizzazione degli stili",tags:["!dev"],parameters:{viewMode:"docs",docs:{canvas:{hidden:!0,sourceState:"none"},description:{story:"\nPer la personalizzazione degli stili si può usare il selettore `::part` passando il valore `button`. [Vedi qui la guida dettagliata](/docs/personalizzazione-degli-stili--documentazione#selettore-part).\n"}}},render:()=>a`<div class="hide-preview"></div>`},c={name:"Varianti di colore",args:{slot:""},argTypes:{variant:{table:{disable:!0}},outline:{table:{disable:!0}},ariaDisabled:{table:{disable:!0}}},parameters:{docs:{description:{story:"\nGli stili definiti da Bootstrap Italia utilizzano un naming consistente con Bootstrap, con alcune personalizzazioni:\n\n#### Note sullo stato disabilitato\n- I pulsanti disabilitati dovranno avere l'attributo `aria-disabled=\"true\"` per indicare lo stato dell’elemento alle tecnologie assistive. Quando si utilizza l'attributo `aria-disabled` è consigliato usare anche l'attributo `aria-describedby` (o un elemento all'interno del bottone con classe `.sr-only`) per informare tramite gli screen-reader il motivo per il quale il pulsante è disabilitato.\n<br/> E' sconsigliato l'uso dell'attributo `disabled`.\n"}}},render:n=>a`
    ${o({...n,variant:"primary"},"Primary")}
    ${o({...n,variant:"secondary"},"Secondary")}
    ${o({...n,variant:"success"},"Success")}
    ${o({...n,variant:"danger"},"Danger")}
    ${o({...n,variant:"warning"},"Warning")} ${o({...n,variant:"link"},"Link")}
  `},d={name:"Varianti di dimensione",args:{slot:""},argTypes:{variant:{table:{disable:!0}},size:{table:{disable:!0}},block:{table:{disable:!0}}},parameters:{docs:{description:{story:'\nPer ottenere pulsanti di dimensione più grande o più piccola, è sufficiente utilizzare l\'attributo `size` con i valori `"lg"`, `"sm"`, `"xs"`.\n\nUtilizzando invece l\'attributo `block` si ottengono pulsanti che prendono tutta l’ampiezza a loro disposizione, a seconda delle dimensioni del loro contenitore.\n'}}},render:n=>a`
    ${g({...n,size:"lg"},"Large")} ${g({...n,size:"sm"},"Small")}
    ${g({...n,size:"xs"},"Extra Small")}
    <div class="flex">
      ${t({...n,block:!0,variant:"primary"},"Primary Block")}
    </div>
    <div class="flex">
      ${t({...n,block:!0,variant:"secondary"},"Secondary Block")}
    </div>
  `},u={...v,args:{variant:"primary"},render:n=>a`
    <div class="flex">
      ${t({...n,slot:`Button - ${n.slot}`,type:"button"})}
      ${t({...n,slot:`Submit - ${n.slot}`,type:"submit"})}
      ${t({...n,slot:`Reset - ${n.slot}`,type:"reset"})}
    </div>
  `},p={name:"Sfondo scuro",args:{slot:""},argTypes:{variant:{table:{disable:!0}},outline:{table:{disable:!0}},ariaDisabled:{table:{disable:!0}}},parameters:{docs:{description:{story:`
<div class="callout callout-success"><div class="callout-inner"><div class="callout-title"><span class="text">Trasmettere significato alle tecnologie assistive</span></div>
<p>
L’uso del colore per aggiungere un significato fornisce solo un’indicazione visiva, che non sarà trasmesso agli utenti di tecnologie assistive –
come gli screen reader.
Assicurati che le informazioni denotate dal colore siano rese disponibili anche dal contenuto stesso (es.: il testo
visibile), o siano incluse attraverso mezzi alternativi, come testo aggiuntivo nascosto con la classe <code>.visually-hidden</code>.</p></div></div>`}}},render:n=>a`
    <div class="bg-dark p-4">
      ${o({...n,variant:"primary"},"Primary")}
      ${o({...n,variant:"secondary"},"Secondary")}
      ${o({...n,variant:"link"},"Link")}
    </div>
  `},b={...v,name:"Con icona",args:{},argTypes:{variant:{table:{disable:!0}},size:{table:{disable:!0}}},parameters:{docs:{description:{story:"\nL’icona può essere posizionata a sinistra o a destra del testo, a seconda della posizione in cui viene inserita all’interno del pulsante.\n<br/><br/>\n#### Dimensione dell'icona\n- Nei pulsanti di dimensione `lg` e `sm` è necessario passare l'attributo `size=\"sm\"` all'icona.\n- Nei pulsaanti di dimensione `xs`, è necessario passare l'attributo `size=\"xs\"` all'icona .\n"}}},render:n=>{var i;const e=((i=n.slot)==null?void 0:i.length)>0?n.slot:null;return a` <div class="flex">
      <it-button
        variant="success"
        size="lg"
        icon
        ?outline="${n.outline}"
        ?block="${n.block}"
        ?aria-disabled="${n.ariaDisabled}"
        type="${n.type}"
      >
        <it-icon name="it-star-full" color="white" size="sm"></it-icon>
        <span>${e??"Pulsante Large con icona"}</span>
      </it-button>

      <it-button
        variant="primary"
        icon
        ?outline="${n.outline}"
        ?block="${n.block}"
        ?aria-disabled="${n.ariaDisabled}"
        type="${n.type}"
      >
        <it-icon name="it-star-full" color="white" size="sm"></it-icon> <span>${e??"Pulsante con icona"}</span>
      </it-button>

      <it-button
        variant="danger"
        size="xs"
        icon
        ?outline="${n.outline}"
        ?block="${n.block}"
        ?aria-disabled="${n.ariaDisabled}"
        type="${n.type}"
      >
        <it-icon name="it-star-full" color="white" size="xs"></it-icon>
        <span>${e??"Pulsante Smal con icona"}</span>
      </it-button>

      <it-button
        variant="link"
        size="xs"
        icon
        ?outline="${n.outline}"
        ?block="${n.block}"
        ?aria-disabled="${n.ariaDisabled}"
        type="${n.type}"
      >
        <it-icon name="it-star-full" color="primary" size="xs"></it-icon>
        <span>${e??"Pulsante Extra Small con icona"}</span>
      </it-button>
    </div>`}},m={...v,name:"Con icona cerchiata",args:{},argTypes:{variant:{table:{disable:!0}},size:{table:{disable:!0}}},parameters:{docs:{description:{story:"\nL’icona può essere posizionata a sinistra o a destra del testo, a seconda della posizione in cui viene inserita all’interno del pulsante.\nDeve essere contenuta all'interno di uno elemento con classe`.rounded-icon` per poter avere il contorno circolare.\n<br/><br/>\n#### Dimensione dell'icona\n- Nei pulsanti di dimensione `lg` e `sm` è necessario assegnare l'attributo `size=\"sm\"` all'icona.\n- Nei pulsanti di dimensione `xs`, è necessario passare l'attributo `size=\"xs\"` all'icona .\n"}}},render:n=>{var i;const e=((i=n.slot)==null?void 0:i.length)>0?n.slot:null;return a` <div class="flex">
      <it-button
        variant="success"
        size="lg"
        icon
        ?outline="${n.outline}"
        ?block="${n.block}"
        ?aria-disabled="${n.ariaDisabled}"
        type="${n.type}"
      >
        <span class="rounded-icon">
          <it-icon name="it-user" color="success" size="sm"></it-icon>
        </span>
        <span>${e??"Pulsante Large con icona"}</span>
      </it-button>

      <it-button
        variant="primary"
        size="sm"
        icon
        ?outline="${n.outline}"
        ?block="${n.block}"
        ?aria-disabled="${n.ariaDisabled}"
        type="${n.type}"
      >
        <span class="rounded-icon" size="sm">
          <it-icon name="it-user" color="primary" size="sm"></it-icon>
        </span>
        <span>${e??"Pulsante con icona"}</span>
      </it-button>

      <it-button
        variant="danger"
        size="xs"
        icon
        ?outline="${n.outline}"
        ?block="${n.block}"
        ?aria-disabled="${n.ariaDisabled}"
        type="${n.type}"
      >
        <span class="rounded-icon">
          <it-icon name="it-user" color="danger" size="xs"></it-icon>
        </span>
        <span>${e??"Pulsante Small con icona"}</span>
      </it-button>

      <it-button
        variant="primary"
        size="xs"
        icon
        ?outline="${n.outline}"
        ?block="${n.block}"
        ?aria-disabled="${n.ariaDisabled}"
        type="${n.type}"
      >
        <span class="rounded-icon bg-primary">
          <it-icon name="it-user" color="white" size="xs"></it-icon>
        </span>
        <span>${e??"Pulsante Extra Small con icona"}</span>
      </it-button>
    </div>`}};var z,y,k;r.parameters={...r.parameters,docs:{...(z=r.parameters)==null?void 0:z.docs,source:{originalSource:`{
  ...meta,
  name: 'Esempio interattivo',
  args: {
    variant: 'primary'
  },
  tags: ['!autodocs', '!dev'],
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
}`,...(k=(y=r.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var f,x,h;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Personalizzazione degli stili',
  tags: ['!dev'],
  parameters: {
    viewMode: 'docs',
    // assicura che si apra la tab Docs anziché Canvas
    docs: {
      canvas: {
        hidden: true,
        sourceState: 'none'
      },
      // nasconde solo il canvas nella docs page
      description: {
        story: \`
Per la personalizzazione degli stili si può usare il selettore \\\`::part\\\` passando il valore \\\`button\\\`. [Vedi qui la guida dettagliata](/docs/personalizzazione-degli-stili--documentazione#selettore-part).
\`
      }
    }
  },
  render: () => html\`<div class="hide-preview"></div>\`
}`,...(h=(x=l.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var S,D,P;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
    ariaDisabled: {
      table: {
        disable: true
      }
    }
  },
  parameters: {
    docs: {
      description: {
        story: \`
Gli stili definiti da Bootstrap Italia utilizzano un naming consistente con Bootstrap, con alcune personalizzazioni:

#### Note sullo stato disabilitato
- I pulsanti disabilitati dovranno avere l'attributo \\\`aria-disabled="true"\\\` per indicare lo stato dell’elemento alle tecnologie assistive. Quando si utilizza l'attributo \\\`aria-disabled\\\` è consigliato usare anche l'attributo \\\`aria-describedby\\\` (o un elemento all'interno del bottone con classe \\\`.sr-only\\\`) per informare tramite gli screen-reader il motivo per il quale il pulsante è disabilitato.
<br/> E' sconsigliato l'uso dell'attributo \\\`disabled\\\`.
\`
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
  }, 'Warning')} \${renderVariant({
    ...args,
    variant: 'link'
  }, 'Link')}
  \`
}`,...(P=(D=c.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};var V,C,T;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
  parameters: {
    docs: {
      description: {
        story: \`
Per ottenere pulsanti di dimensione più grande o più piccola, è sufficiente utilizzare l'attributo \\\`size\\\` con i valori \\\`"lg"\\\`, \\\`"sm"\\\`, \\\`"xs"\\\`.

Utilizzando invece l'attributo \\\`block\\\` si ottengono pulsanti che prendono tutta l’ampiezza a loro disposizione, a seconda delle dimensioni del loro contenitore.
\`
      }
    }
  },
  render: args => html\`
    \${renderSizeVariant({
    ...args,
    size: 'lg'
  }, 'Large')} \${renderSizeVariant({
    ...args,
    size: 'sm'
  }, 'Small')}
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
}`,...(T=(C=d.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var w,L,B;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(B=(L=u.parameters)==null?void 0:L.docs)==null?void 0:B.source}}};var E,N,I;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
    ariaDisabled: {
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
  }, 'Link')}
    </div>
  \`
}`,...(I=(N=p.parameters)==null?void 0:N.docs)==null?void 0:I.source}}};var A,q,Q;b.parameters={...b.parameters,docs:{...(A=b.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
L’icona può essere posizionata a sinistra o a destra del testo, a seconda della posizione in cui viene inserita all’interno del pulsante.
<br/><br/>
#### Dimensione dell'icona
- Nei pulsanti di dimensione \\\`lg\\\` e \\\`sm\\\` è necessario passare l'attributo \\\`size="sm"\\\` all'icona.
- Nei pulsaanti di dimensione \\\`xs\\\`, è necessario passare l'attributo \\\`size="xs"\\\` all'icona .
\`
      }
    }
  },
  render: params => {
    const slot = params.slot?.length > 0 ? params.slot : null;
    return html\` <div class="flex">
      <it-button
        variant="success"
        size="lg"
        icon
        ?outline="\${params.outline}"
        ?block="\${params.block}"
        ?aria-disabled="\${params.ariaDisabled}"
        type="\${params.type}"
      >
        <it-icon name="it-star-full" color="white" size="sm"></it-icon>
        <span>\${slot ?? 'Pulsante Large con icona'}</span>
      </it-button>

      <it-button
        variant="primary"
        icon
        ?outline="\${params.outline}"
        ?block="\${params.block}"
        ?aria-disabled="\${params.ariaDisabled}"
        type="\${params.type}"
      >
        <it-icon name="it-star-full" color="white" size="sm"></it-icon> <span>\${slot ?? 'Pulsante con icona'}</span>
      </it-button>

      <it-button
        variant="danger"
        size="xs"
        icon
        ?outline="\${params.outline}"
        ?block="\${params.block}"
        ?aria-disabled="\${params.ariaDisabled}"
        type="\${params.type}"
      >
        <it-icon name="it-star-full" color="white" size="xs"></it-icon>
        <span>\${slot ?? 'Pulsante Smal con icona'}</span>
      </it-button>

      <it-button
        variant="link"
        size="xs"
        icon
        ?outline="\${params.outline}"
        ?block="\${params.block}"
        ?aria-disabled="\${params.ariaDisabled}"
        type="\${params.type}"
      >
        <it-icon name="it-star-full" color="primary" size="xs"></it-icon>
        <span>\${slot ?? 'Pulsante Extra Small con icona'}</span>
      </it-button>
    </div>\`;
  }
}`,...(Q=(q=b.parameters)==null?void 0:q.docs)==null?void 0:Q.source}}};var U,_,O;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
  parameters: {
    docs: {
      description: {
        story: \`
L’icona può essere posizionata a sinistra o a destra del testo, a seconda della posizione in cui viene inserita all’interno del pulsante.
Deve essere contenuta all'interno di uno elemento con classe\\\`.rounded-icon\\\` per poter avere il contorno circolare.
<br/><br/>
#### Dimensione dell'icona
- Nei pulsanti di dimensione \\\`lg\\\` e \\\`sm\\\` è necessario assegnare l'attributo \\\`size="sm"\\\` all'icona.
- Nei pulsanti di dimensione \\\`xs\\\`, è necessario passare l'attributo \\\`size="xs"\\\` all'icona .
\`
      }
    }
  },
  render: params => {
    const slot = params.slot?.length > 0 ? params.slot : null;
    return html\` <div class="flex">
      <it-button
        variant="success"
        size="lg"
        icon
        ?outline="\${params.outline}"
        ?block="\${params.block}"
        ?aria-disabled="\${params.ariaDisabled}"
        type="\${params.type}"
      >
        <span class="rounded-icon">
          <it-icon name="it-user" color="success" size="sm"></it-icon>
        </span>
        <span>\${slot ?? 'Pulsante Large con icona'}</span>
      </it-button>

      <it-button
        variant="primary"
        size="sm"
        icon
        ?outline="\${params.outline}"
        ?block="\${params.block}"
        ?aria-disabled="\${params.ariaDisabled}"
        type="\${params.type}"
      >
        <span class="rounded-icon" size="sm">
          <it-icon name="it-user" color="primary" size="sm"></it-icon>
        </span>
        <span>\${slot ?? 'Pulsante con icona'}</span>
      </it-button>

      <it-button
        variant="danger"
        size="xs"
        icon
        ?outline="\${params.outline}"
        ?block="\${params.block}"
        ?aria-disabled="\${params.ariaDisabled}"
        type="\${params.type}"
      >
        <span class="rounded-icon">
          <it-icon name="it-user" color="danger" size="xs"></it-icon>
        </span>
        <span>\${slot ?? 'Pulsante Small con icona'}</span>
      </it-button>

      <it-button
        variant="primary"
        size="xs"
        icon
        ?outline="\${params.outline}"
        ?block="\${params.block}"
        ?aria-disabled="\${params.ariaDisabled}"
        type="\${params.type}"
      >
        <span class="rounded-icon bg-primary">
          <it-icon name="it-user" color="white" size="xs"></it-icon>
        </span>
        <span>\${slot ?? 'Pulsante Extra Small con icona'}</span>
      </it-button>
    </div>\`;
  }
}`,...(O=(_=m.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};const J=["EsempioInterattivo","PersonalizzazioneDegliStili","VariantiColore","VariantiDimensione","Tipologie","SfondoScuro","ConIcona","ConIconaCerchiata"];export{b as ConIcona,m as ConIconaCerchiata,r as EsempioInterattivo,l as PersonalizzazioneDegliStili,p as SfondoScuro,u as Tipologie,c as VariantiColore,d as VariantiDimensione,J as __namedExportsOrder,v as default};

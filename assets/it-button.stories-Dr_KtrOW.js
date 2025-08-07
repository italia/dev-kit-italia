import{x as a}from"./lit-element-DvQWNfDj.js";import{o as R}from"./it-icon-CQv3pKSF.js";import"./it-button-B3RiQpsP.js";import"./iframe-Br-2R-g9.js";const G=["lg","sm","xs"],M=["primary","secondary","success","danger","warning","link"],t=(e,n="")=>{var s;const i=((s=e.slot)==null?void 0:s.length)>0?e.slot:n;return a`
    <it-button
      variant="${e.variant}"
      ?outline="${e.outline}"
      size="${e.size}"
      ?block="${e.block}"
      aria-disabled="${R(e.ariaDisabled?"true":void 0)}"
      ?icon="${e.icon}"
      type="${e.type}"
      >${i}</it-button
    >
  `},z=e=>a`
  <div class="flex">
    ${t(e)}
    ${t({...e,ariaDisabled:!0,slot:`${e.slot} disabled`})}
  </div>
`,o=(e,n)=>{var s;const i=((s=e.slot)==null?void 0:s.length)>0?e.slot:null;return a`<div class="flex p-0">
    ${z({...e,slot:i??n})}
    ${e.variant!=="link"?z({...e,slot:i??`${n} outline`,outline:!0}):""}
  </div>`},g=(e,n)=>a`<div class="flex">
    ${t({...e,variant:"primary"},`Primary ${n}`)}
    ${t({...e,variant:"secondary"},`Secondary ${n}`)}
  </div>`,v={title:"Componenti/Button",tags:["autodocs"],component:"it-button",args:{slot:"Testo del pulsante",variant:"primary",size:"sm",block:!1,outline:!1,ariaDisabled:!1,icon:!1,type:"button",value:""},argTypes:{variant:{control:"select",description:"Varianti di colore",options:M},size:{control:"select",description:"Dimensione del pulsante",options:G,table:{defaultValue:{summary:"sm"}}},block:{control:"boolean",type:"boolean",description:"Quando abilitato, estende il componente Button fino a prendere tutta la larghezza disponibile",table:{defaultValue:{summary:"false"}}},ariaDisabled:{control:"boolean",type:"boolean",name:"aria-disabled",table:{defaultValue:{summary:"false"}}},outline:{control:"boolean",type:"boolean",description:"Applica il colore solamente al bordo, usando il colore di sfondo come colore interno del pulsante.",table:{defaultValue:{summary:"false"}}},icon:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},slot:{control:"text",description:"Testo del pulsante"},type:{control:"select",description:"Tipologia di pulsante",options:["button","submit","reset"],table:{defaultValue:{summary:"button"}}},value:{control:"text"}},parameters:{docs:{description:{component:`
<Description>Pulsante con etichetta di testo o icona che al click inizia un'azione o un evento.</Description>

Per indicazioni su "Come e Quando usarlo" si fa riferimento alla [guida del design-system](https://designers.italia.it/design-system/componenti/buttons/).
`}}}},l={...v,name:"Esempio interattivo",args:{variant:"primary"},tags:["!autodocs","!dev"],parameters:{docs:{canvas:{sourceState:"shown"}}},render:e=>a` ${t({...e})}`},r={name:"Personalizzazione degli stili",tags:["!dev"],parameters:{viewMode:"docs",docs:{canvas:{hidden:!0,sourceState:"none"},description:{story:"\nPer la personalizzazione degli stili si può usare il selettore `::part` passando il valore `button`. [Vedi qui la guida dettagliata](/docs/personalizzazione-degli-stili--documentazione#selettore-part).\n"}}},render:()=>a`<div class="hide-preview"></div>`},c={name:"Varianti di colore",args:{slot:""},argTypes:{variant:{table:{disable:!0}},outline:{table:{disable:!0}},ariaDisabled:{table:{disable:!0}}},parameters:{docs:{description:{story:`
Gli stili definiti da Bootstrap Italia utilizzano un naming consistente con Bootstrap, con alcune personalizzazioni.

<div class="callout callout-success"><div class="callout-inner"><div class="callout-title"><span class="text">Accessibilità</span></div>
<p>
Le classi \`.btn\` e \`.btn-\` conferiscono agli elementi html l’aspetto visivo di un pulsante. Anche elementi \`<a>\` o \`<span>\` possono subire questa trasformazione provocando discrepanza tra ciò che si rappresenta e la funzione semantica dell’elemento.
<br/>
Questo può provocare complesse problematiche di accessibilità.
<br/><br/>
Dove il click sul pulsante non genera un cambio di pagina utilizzare esclusivamente il componente \`<it-button>\`.
<br/><br/>
Qualora non fosse possibile, è necessario applicare in modo appropriato l’attributo \`role="button"\` per trasmetterne lo scopo alle tecnologie assistive.</p></div></div>

#### Note sullo stato disabilitato
- I pulsanti disabilitati dovranno avere l'attributo \`aria-disabled="true"\` per indicare lo stato dell’elemento alle tecnologie assistive. Quando si utilizza l'attributo \`aria-disabled\` è consigliato usare anche l'attributo \`aria-describedby\` (o un elemento all'interno del bottone con classe \`.sr-only\`) per informare tramite gli screen-reader il motivo per il quale il pulsante è disabilitato.
<br/> E' sconsigliato l'uso dell'attributo \`disabled\`.
`}}},render:e=>a`
    ${o({...e,variant:"primary"},"Primary")}
    ${o({...e,variant:"secondary"},"Secondary")}
    ${o({...e,variant:"success"},"Success")}
    ${o({...e,variant:"danger"},"Danger")}
    ${o({...e,variant:"warning"},"Warning")} ${o({...e,variant:"link"},"Link")}
  `},d={name:"Varianti di dimensione",args:{slot:""},argTypes:{variant:{table:{disable:!0}},size:{table:{disable:!0}},block:{table:{disable:!0}}},parameters:{docs:{description:{story:'\nPer ottenere pulsanti di dimensione più grande o più piccola, è sufficiente utilizzare l\'attributo `size` con i valori `"lg"`, `"sm"`, `"xs"`.\n\nUtilizzando invece l\'attributo `block` si ottengono pulsanti che prendono tutta l’ampiezza a loro disposizione, a seconda delle dimensioni del loro contenitore.\n'}}},render:e=>a`
    ${g({...e,size:"lg"},"Large")} ${g({...e,size:"sm"},"Small")}
    ${g({...e,size:"xs"},"Extra Small")}
    <div class="flex">
      ${t({...e,block:!0,variant:"primary"},"Primary Block")}
    </div>
    <div class="flex">
      ${t({...e,block:!0,variant:"secondary"},"Secondary Block")}
    </div>
  `},u={...v,args:{variant:"primary"},render:e=>a`
    <div class="flex">
      ${t({...e,slot:`Button - ${e.slot}`,type:"button"})}
      ${t({...e,slot:`Submit - ${e.slot}`,type:"submit"})}
      ${t({...e,slot:`Reset - ${e.slot}`,type:"reset"})}
    </div>
  `},p={name:"Sfondo scuro",args:{slot:""},argTypes:{variant:{table:{disable:!0}},outline:{table:{disable:!0}},ariaDisabled:{table:{disable:!0}}},parameters:{docs:{description:{story:`
<div class="callout callout-success"><div class="callout-inner"><div class="callout-title"><span class="text">Trasmettere significato alle tecnologie assistive</span></div>
<p>
L’uso del colore per aggiungere un significato fornisce solo un’indicazione visiva, che non sarà trasmesso agli utenti di tecnologie assistive –
come gli screen reader.
Assicurati che le informazioni denotate dal colore siano rese disponibili anche dal contenuto stesso (es.: il testo
visibile), o siano incluse attraverso mezzi alternativi, come testo aggiuntivo nascosto con la classe <code>.visually-hidden</code>.</p></div></div>`}}},render:e=>a`
    <div class="bg-dark p-4">
      ${o({...e,variant:"primary"},"Primary")}
      ${o({...e,variant:"secondary"},"Secondary")}
      ${o({...e,variant:"link"},"Link")}
    </div>
  `},m={...v,name:"Con icona",args:{},argTypes:{variant:{table:{disable:!0}},size:{table:{disable:!0}}},parameters:{docs:{description:{story:'\nL’icona può essere posizionata a sinistra o a destra del testo, a seconda della posizione in cui viene inserita all’interno del pulsante.\n<br/><br/>\n#### Dimensione dell\'icona\n- Nei pulsanti di dimensione `lg` e `sm` è necessario passare l\'attributo `size="sm"` all\'icona.\n- Nei pulsaanti di dimensione `xs`, è necessario passare l\'attributo `size="xs"` all\'icona .\n\n#### Allineamento e spaziatura dell’icona\nNel caso si utilizzi un’icona all’interno di un elemento `<it-button>` è necessario inserire il testo del pulsante all’interno di un tag `<span/>` al fine di garantire un perfetto allineamento ed una corretta spaziatura tra l’icona e lo stesso testo.\n\n<div class="callout callout-success"><div class="callout-inner"><div class="callout-title"><span class="text">Accessibilità</span></div>\n<p>\nLe icone sono di default puramente decorative. Nel caso in cui l\'icona non debba essere un elemento decorativo, è necessario utilizzare correttamente gli attributi `label`, `role` e `aria-hidden` sul componente `<it-icon>`. Per maggiori dettagli visita la [guida dedicata](?path=/docs/componenti-icon--documentazione) al componente `<it-icon>`.</p></div></div>\n'}}},render:e=>{var i;const n=((i=e.slot)==null?void 0:i.length)>0?e.slot:null;return a` <div class="flex">
      <it-button
        variant="success"
        size="lg"
        icon
        ?outline="${e.outline}"
        ?block="${e.block}"
        ?aria-disabled="${e.ariaDisabled}"
        type="${e.type}"
      >
        <it-icon name="it-star-full" color="white" size="sm"></it-icon>
        <span>${n??"Pulsante Large con icona"}</span>
      </it-button>

      <it-button
        variant="primary"
        icon
        ?outline="${e.outline}"
        ?block="${e.block}"
        ?aria-disabled="${e.ariaDisabled}"
        type="${e.type}"
      >
        <it-icon name="it-star-full" color="white" size="sm"></it-icon> <span>${n??"Pulsante con icona"}</span>
      </it-button>

      <it-button
        variant="danger"
        size="xs"
        icon
        ?outline="${e.outline}"
        ?block="${e.block}"
        ?aria-disabled="${e.ariaDisabled}"
        type="${e.type}"
      >
        <it-icon name="it-star-full" color="white" size="xs"></it-icon>
        <span>${n??"Pulsante Small con icona"}</span>
      </it-button>

      <it-button
        variant="link"
        size="xs"
        icon
        ?outline="${e.outline}"
        ?block="${e.block}"
        ?aria-disabled="${e.ariaDisabled}"
        type="${e.type}"
      >
        <it-icon name="it-star-full" color="primary" size="xs"></it-icon>
        <span>${n??"Pulsante Extra Small con icona"}</span>
      </it-button>
    </div>`}},b={...v,name:"Con icona cerchiata",args:{},argTypes:{variant:{table:{disable:!0}},size:{table:{disable:!0}}},parameters:{docs:{description:{story:"\nL’icona può essere posizionata a sinistra o a destra del testo, a seconda della posizione in cui viene inserita all’interno del pulsante.\nDeve essere contenuta all'interno di uno elemento con classe`.rounded-icon` per poter avere il contorno circolare.\n<br/><br/>\n#### Dimensione dell'icona\n- Nei pulsanti di dimensione `lg` e `sm` è necessario assegnare l'attributo `size=\"sm\"` all'icona.\n- Nei pulsanti di dimensione `xs`, è necessario passare l'attributo `size=\"xs\"` all'icona .\n"}}},render:e=>{var i;const n=((i=e.slot)==null?void 0:i.length)>0?e.slot:null;return a` <div class="flex">
      <it-button
        variant="success"
        size="lg"
        icon
        ?outline="${e.outline}"
        ?block="${e.block}"
        ?aria-disabled="${e.ariaDisabled}"
        type="${e.type}"
      >
        <span class="rounded-icon">
          <it-icon name="it-user" color="success" size="sm"></it-icon>
        </span>
        <span>${n??"Pulsante Large con icona"}</span>
      </it-button>

      <it-button
        variant="primary"
        size="sm"
        icon
        ?outline="${e.outline}"
        ?block="${e.block}"
        ?aria-disabled="${e.ariaDisabled}"
        type="${e.type}"
      >
        <span class="rounded-icon" size="sm">
          <it-icon name="it-user" color="primary" size="sm"></it-icon>
        </span>
        <span>${n??"Pulsante con icona"}</span>
      </it-button>

      <it-button
        variant="danger"
        size="xs"
        icon
        ?outline="${e.outline}"
        ?block="${e.block}"
        ?aria-disabled="${e.ariaDisabled}"
        type="${e.type}"
      >
        <span class="rounded-icon">
          <it-icon name="it-user" color="danger" size="xs"></it-icon>
        </span>
        <span>${n??"Pulsante Small con icona"}</span>
      </it-button>

      <it-button
        variant="primary"
        size="xs"
        icon
        ?outline="${e.outline}"
        ?block="${e.block}"
        ?aria-disabled="${e.ariaDisabled}"
        type="${e.type}"
      >
        <span class="rounded-icon bg-primary">
          <it-icon name="it-user" color="white" size="xs"></it-icon>
        </span>
        <span>${n??"Pulsante Extra Small con icona"}</span>
      </it-button>
    </div>`}};var $,y,f;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(f=(y=l.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var k,h,x;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(x=(h=r.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var S,D,P;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
Gli stili definiti da Bootstrap Italia utilizzano un naming consistente con Bootstrap, con alcune personalizzazioni.

<div class="callout callout-success"><div class="callout-inner"><div class="callout-title"><span class="text">Accessibilità</span></div>
<p>
Le classi \\\`.btn\\\` e \\\`.btn-\\\` conferiscono agli elementi html l’aspetto visivo di un pulsante. Anche elementi \\\`<a>\\\` o \\\`<span>\\\` possono subire questa trasformazione provocando discrepanza tra ciò che si rappresenta e la funzione semantica dell’elemento.
<br/>
Questo può provocare complesse problematiche di accessibilità.
<br/><br/>
Dove il click sul pulsante non genera un cambio di pagina utilizzare esclusivamente il componente \\\`<it-button>\\\`.
<br/><br/>
Qualora non fosse possibile, è necessario applicare in modo appropriato l’attributo \\\`role="button"\\\` per trasmetterne lo scopo alle tecnologie assistive.</p></div></div>

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
}`,...(T=(C=d.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var L,w,N;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(N=(w=u.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};var B,E,A;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(A=(E=p.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};var I,Q,q;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
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

#### Allineamento e spaziatura dell’icona
Nel caso si utilizzi un’icona all’interno di un elemento \\\`<it-button>\\\` è necessario inserire il testo del pulsante all’interno di un tag \\\`<span/>\\\` al fine di garantire un perfetto allineamento ed una corretta spaziatura tra l’icona e lo stesso testo.

<div class="callout callout-success"><div class="callout-inner"><div class="callout-title"><span class="text">Accessibilità</span></div>
<p>
Le icone sono di default puramente decorative. Nel caso in cui l'icona non debba essere un elemento decorativo, è necessario utilizzare correttamente gli attributi \\\`label\\\`, \\\`role\\\` e \\\`aria-hidden\\\` sul componente \\\`<it-icon>\\\`. Per maggiori dettagli visita la [guida dedicata](?path=/docs/componenti-icon--documentazione) al componente \\\`<it-icon>\\\`.</p></div></div>
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
        <span>\${slot ?? 'Pulsante Small con icona'}</span>
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
}`,...(q=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:q.source}}};var U,_,O;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(O=(_=b.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};const H=["EsempioInterattivo","PersonalizzazioneDegliStili","VariantiColore","VariantiDimensione","Tipologie","SfondoScuro","ConIcona","ConIconaCerchiata"];export{m as ConIcona,b as ConIconaCerchiata,l as EsempioInterattivo,r as PersonalizzazioneDegliStili,p as SfondoScuro,u as Tipologie,c as VariantiColore,d as VariantiDimensione,H as __namedExportsOrder,v as default};

import{x as a}from"./lit-element-DvQWNfDj.js";import{o as r}from"./query-nkdlPDuA.js";import"./it-button-DjPat_nX.js";import"./it-icon-BRwEJqiM.js";import"./iframe-CE9jUz7H.js";const G=["lg","sm","xs"],M=["primary","secondary","success","danger","warning","link"],t=(e,n="")=>{var s;const i=((s=e.slot)==null?void 0:s.length)>0?e.slot:n;return a`
    <it-button
      variant="${r(e.variant)}"
      ?outline="${e.outline}"
      size="${r(e.size)}"
      ?block="${e.block}"
      aria-disabled="${r(e.ariaDisabled?"true":void 0)}"
      ?icon="${e.icon}"
      type="${r(e.type)}"
      >${i}</it-button
    >
  `},$=e=>a`
  <div class="flex">
    ${t(e)}
    ${t({...e,ariaDisabled:!0,slot:`${e.slot} disabled`})}
  </div>
`,o=(e,n)=>{var s;const i=((s=e.slot)==null?void 0:s.length)>0?e.slot:null;return a`<div class="flex p-0">
    ${$({...e,slot:i??n})}
    ${e.variant!=="link"?$({...e,slot:i??`${n} outline`,outline:!0}):""}
  </div>`},z=(e,n)=>a`<div class="flex">
    ${t({...e,variant:"primary"},`Primary ${n}`)}
    ${t({...e,variant:"secondary"},`Secondary ${n}`)}
  </div>`,g={title:"Componenti/Button",tags:["autodocs"],component:"it-button",args:{slot:"Testo del pulsante",variant:"primary",size:void 0,block:!1,outline:!1,ariaDisabled:!1,icon:!1,type:"button",value:""},argTypes:{variant:{control:"select",description:"Varianti di colore",options:M},size:{control:"select",description:"Dimensione del pulsante",options:G},block:{control:"boolean",type:"boolean",description:"Quando abilitato, estende il componente Button fino a prendere tutta la larghezza disponibile",table:{defaultValue:{summary:"false"}}},ariaDisabled:{control:"boolean",type:"boolean",name:"aria-disabled",table:{defaultValue:{summary:"false"}}},outline:{control:"boolean",type:"boolean",description:"Applica il colore solamente al bordo, usando il colore di sfondo come colore interno del pulsante.",table:{defaultValue:{summary:"false"}}},icon:{control:"boolean",type:"boolean",description:"Se il pulsante mostra un'icona, è necessario aggiungere questo attributo.",table:{defaultValue:{summary:"false"}}},slot:{control:"text",description:"Testo del pulsante"},type:{control:"select",description:"Tipologia di pulsante",options:["button","submit","reset"],table:{defaultValue:{summary:"button"}}},value:{control:"text"}},parameters:{docs:{description:{component:`
<Description>Pulsante con etichetta di testo o icona che al click inizia un'azione o un evento.</Description>

Per indicazioni su "Come e Quando usarlo" si fa riferimento alla [guida del design-system](https://designers.italia.it/design-system/componenti/buttons/).
`}}}},l={...g,name:"Esempio interattivo",args:{variant:"primary"},tags:["!autodocs","!dev"],parameters:{docs:{canvas:{sourceState:"shown"}}},render:e=>a` ${t({...e})}`},c={name:"Personalizzazione degli stili",tags:["!dev"],parameters:{viewMode:"docs",docs:{canvas:{hidden:!0,sourceState:"none"},description:{story:"\nPer la personalizzazione degli stili si può usare il selettore `::part` passando il valore `button`. [Vedi qui la guida dettagliata](/docs/personalizzazione-degli-stili--documentazione#selettore-part).\n"}}},render:()=>a`<div class="hide-preview"></div>`},d={name:"Varianti di colore",args:{slot:""},argTypes:{variant:{table:{disable:!0}},outline:{table:{disable:!0}},ariaDisabled:{table:{disable:!0}}},parameters:{docs:{description:{story:`
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
I pulsanti disabilitati dovranno avere l'attributo \`aria-disabled="true"\` per indicare lo stato dell’elemento alle tecnologie assistive. Quando si utilizza l'attributo \`aria-disabled\` è consigliato usare anche l'attributo \`aria-describedby\` (o un elemento all'interno del bottone con classe \`.sr-only\`) per informare tramite gli screen-reader il motivo per il quale il pulsante è disabilitato.
<br/> E' sconsigliato l'uso dell'attributo \`disabled\`.
`}}},render:e=>a`
    ${o({...e,variant:"primary"},"Primary")}
    ${o({...e,variant:"secondary"},"Secondary")}
    ${o({...e,variant:"success"},"Success")}
    ${o({...e,variant:"danger"},"Danger")}
    ${o({...e,variant:"warning"},"Warning")}
    ${o({...e,variant:"link"},"Pulsante link")}
  `},u={name:"Varianti di dimensione",args:{slot:""},argTypes:{variant:{table:{disable:!0}},size:{table:{disable:!0}},block:{table:{disable:!0}}},parameters:{docs:{description:{story:"\nPer ottenere pulsanti di dimensione più grande o più piccola, è sufficiente utilizzare l'attributo `size` con i valori `lg` o `xs`.\n\nUtilizzando invece l'attributo `block` si ottengono pulsanti che prendono tutta l’ampiezza a loro disposizione, a seconda delle dimensioni del loro contenitore.\n"}}},render:e=>a`
    ${z({...e,size:"lg"},"Large")} ${z({...e},"Default")}
    ${z({...e,size:"xs"},"Extra Small")}
    <div class="flex">
      ${t({...e,block:!0,variant:"primary"},"Primary Block")}
    </div>
    <div class="flex">
      ${t({...e,block:!0,variant:"secondary"},"Secondary Block")}
    </div>
  `},p={...g,args:{variant:"primary"},render:e=>a`
    <div class="flex">
      ${t({...e,slot:`Button - ${e.slot}`,type:"button"})}
      ${t({...e,slot:`Submit - ${e.slot}`,type:"submit"})}
      ${t({...e,slot:`Reset - ${e.slot}`,type:"reset"})}
    </div>
  `},b={name:"Sfondo scuro",args:{slot:""},argTypes:{variant:{table:{disable:!0}},outline:{table:{disable:!0}},ariaDisabled:{table:{disable:!0}}},parameters:{docs:{description:{story:`
<div class="callout callout-success"><div class="callout-inner"><div class="callout-title"><span class="text">Trasmettere significato alle tecnologie assistive</span></div>
<p>
L’uso del colore per aggiungere un significato fornisce solo un’indicazione visiva, che non sarà trasmesso agli utenti di tecnologie assistive –
come gli screen reader.
Assicurati che le informazioni denotate dal colore siano rese disponibili anche dal contenuto stesso (es.: il testo
visibile), o siano incluse attraverso mezzi alternativi, come testo aggiuntivo nascosto con la classe <code>.visually-hidden</code>.</p></div></div>`}}},render:e=>a`
    <div class="bg-dark p-4">
      ${o({...e,variant:"primary"},"Primary")}
      ${o({...e,variant:"secondary"},"Secondary")}
      ${o({...e,variant:"link"},"Pulsante link")}
    </div>
  `},m={...g,name:"Con icona",args:{},argTypes:{variant:{table:{disable:!0}},size:{table:{disable:!0}}},parameters:{docs:{description:{story:'\nE\' necessario passare l\'attributo `icon="true"` (o `icon=""`, o semplicemente `icon`) a `<it-button>` per applicargli gli stili corretti.\n\nL’icona può essere posizionata a sinistra o a destra del testo, a seconda della posizione in cui viene inserita all’interno del pulsante.\n<br/><br/>\n#### Dimensione dell\'icona\n- Nei pulsanti di dimensione `lg` o default (`sm`), è necessario passare l\'attributo `size="sm"` all\'icona.\n- Nei pulsanti di dimensione `xs`, è necessario passare l\'attributo `size="xs"` all\'icona .\n\n#### Allineamento e spaziatura dell’icona\nNel caso si utilizzi un’icona all’interno di un elemento `<it-button>` è necessario inserire il testo del pulsante all’interno di un tag `<span/>` al fine di garantire un perfetto allineamento ed una corretta spaziatura tra l’icona e lo stesso testo.\n\n<div class="callout callout-success"><div class="callout-inner"><div class="callout-title"><span class="text">Accessibilità</span></div>\n<p>\nLe icone sono di default puramente decorative. Nel caso in cui l\'icona non debba essere un elemento decorativo, è necessario utilizzare correttamente gli attributi `label`, `role` e `aria-hidden` sul componente `<it-icon>`. Per maggiori dettagli visita la [guida dedicata](?path=/docs/componenti-icon--documentazione) al componente `<it-icon>`.</p></div></div>\n'}}},render:e=>{var i;const n=((i=e.slot)==null?void 0:i.length)>0?e.slot:null;return a` <div class="flex">
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
        <span>${n??"Pulsante Extra Small con icona"}</span>
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
        <span>${n??"Pulsante Link Extra Small con icona"}</span>
      </it-button>
    </div>`}},v={...g,name:"Con icona cerchiata",args:{},argTypes:{variant:{table:{disable:!0}},size:{table:{disable:!0}}},parameters:{docs:{description:{story:"\nE' necessario passare l'attributo `icon=\"true\"` (o `icon=\"\"`, o semplicemente `icon`) a `<it-button>` per applicargli gli stili corretti.\n\nL’icona può essere posizionata a sinistra o a destra del testo, a seconda della posizione in cui viene inserita all’interno del pulsante.\n<br/>Deve essere contenuta all'interno di uno elemento con classe`.rounded-icon` per poter avere il contorno circolare.\n<br/><br/>\n#### Dimensione dell'icona\nLa dimensione dell'icona deve sempre essere `xs`, quindi `<it-icon>` deve avere sempre l'attributo `size=\"xs\"`.\n"}}},render:e=>{var i;const n=((i=e.slot)==null?void 0:i.length)>0?e.slot:null;return a`
      <it-button
        class="me-2"
        variant="success"
        size="lg"
        icon
        ?outline="${e.outline}"
        ?block="${e.block}"
        ?aria-disabled="${e.ariaDisabled}"
        type="${e.type}"
      >
        <span class="rounded-icon">
          <it-icon name="it-user" color="success" size="xs"></it-icon>
        </span>
        <span>${n??"Pulsante Large con icona"}</span>
      </it-button>

      <it-button
        class="me-2"
        variant="primary"
        icon
        ?outline="${e.outline}"
        ?block="${e.block}"
        ?aria-disabled="${e.ariaDisabled}"
        type="${e.type}"
      >
        <span class="rounded-icon" size="sm">
          <it-icon name="it-user" color="primary" size="xs"></it-icon>
        </span>
        <span>${n??"Pulsante con icona"}</span>
      </it-button>

      <it-button
        class="me-2"
        variant="danger"
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
        class="me-2"
        variant="secondary"
        size="xs"
        icon
        ?outline="${e.outline}"
        ?block="${e.block}"
        ?aria-disabled="${e.ariaDisabled}"
        type="${e.type}"
      >
        <span class="rounded-icon">
          <it-icon name="it-user" color="secondary" size="xs"></it-icon>
        </span>
        <span>${n??"Pulsante Link Extra Small con icona"}</span>
      </it-button>
    `}};var y,f,k;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(k=(f=l.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var h,x,S;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(S=(x=c.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var D,P,V;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
I pulsanti disabilitati dovranno avere l'attributo \\\`aria-disabled="true"\\\` per indicare lo stato dell’elemento alle tecnologie assistive. Quando si utilizza l'attributo \\\`aria-disabled\\\` è consigliato usare anche l'attributo \\\`aria-describedby\\\` (o un elemento all'interno del bottone con classe \\\`.sr-only\\\`) per informare tramite gli screen-reader il motivo per il quale il pulsante è disabilitato.
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
  }, 'Warning')}
    \${renderVariant({
    ...args,
    variant: 'link'
  }, 'Pulsante link')}
  \`
}`,...(V=(P=d.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var C,L,T;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
Per ottenere pulsanti di dimensione più grande o più piccola, è sufficiente utilizzare l'attributo \\\`size\\\` con i valori \\\`lg\\\` o \\\`xs\\\`.

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
}`,...(T=(L=u.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var E,w,B;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(B=(w=p.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var A,N,I;b.parameters={...b.parameters,docs:{...(A=b.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
  }, 'Pulsante link')}
    </div>
  \`
}`,...(I=(N=b.parameters)==null?void 0:N.docs)==null?void 0:I.source}}};var q,Q,U;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
E' necessario passare l'attributo \\\`icon="true"\\\` (o \\\`icon=""\\\`, o semplicemente \\\`icon\\\`) a \\\`<it-button>\\\` per applicargli gli stili corretti.

L’icona può essere posizionata a sinistra o a destra del testo, a seconda della posizione in cui viene inserita all’interno del pulsante.
<br/><br/>
#### Dimensione dell'icona
- Nei pulsanti di dimensione \\\`lg\\\` o default (\\\`sm\\\`), è necessario passare l'attributo \\\`size="sm"\\\` all'icona.
- Nei pulsanti di dimensione \\\`xs\\\`, è necessario passare l'attributo \\\`size="xs"\\\` all'icona .

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
        <span>\${slot ?? 'Pulsante Extra Small con icona'}</span>
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
        <span>\${slot ?? 'Pulsante Link Extra Small con icona'}</span>
      </it-button>
    </div>\`;
  }
}`,...(U=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var _,O,R;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
E' necessario passare l'attributo \\\`icon="true"\\\` (o \\\`icon=""\\\`, o semplicemente \\\`icon\\\`) a \\\`<it-button>\\\` per applicargli gli stili corretti.

L’icona può essere posizionata a sinistra o a destra del testo, a seconda della posizione in cui viene inserita all’interno del pulsante.
<br/>Deve essere contenuta all'interno di uno elemento con classe\\\`.rounded-icon\\\` per poter avere il contorno circolare.
<br/><br/>
#### Dimensione dell'icona
La dimensione dell'icona deve sempre essere \\\`xs\\\`, quindi \\\`<it-icon>\\\` deve avere sempre l'attributo \\\`size="xs"\\\`.
\`
      }
    }
  },
  render: params => {
    const slot = params.slot?.length > 0 ? params.slot : null;
    return html\`
      <it-button
        class="me-2"
        variant="success"
        size="lg"
        icon
        ?outline="\${params.outline}"
        ?block="\${params.block}"
        ?aria-disabled="\${params.ariaDisabled}"
        type="\${params.type}"
      >
        <span class="rounded-icon">
          <it-icon name="it-user" color="success" size="xs"></it-icon>
        </span>
        <span>\${slot ?? 'Pulsante Large con icona'}</span>
      </it-button>

      <it-button
        class="me-2"
        variant="primary"
        icon
        ?outline="\${params.outline}"
        ?block="\${params.block}"
        ?aria-disabled="\${params.ariaDisabled}"
        type="\${params.type}"
      >
        <span class="rounded-icon" size="sm">
          <it-icon name="it-user" color="primary" size="xs"></it-icon>
        </span>
        <span>\${slot ?? 'Pulsante con icona'}</span>
      </it-button>

      <it-button
        class="me-2"
        variant="danger"
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
        class="me-2"
        variant="secondary"
        size="xs"
        icon
        ?outline="\${params.outline}"
        ?block="\${params.block}"
        ?aria-disabled="\${params.ariaDisabled}"
        type="\${params.type}"
      >
        <span class="rounded-icon">
          <it-icon name="it-user" color="secondary" size="xs"></it-icon>
        </span>
        <span>\${slot ?? 'Pulsante Link Extra Small con icona'}</span>
      </it-button>
    \`;
  }
}`,...(R=(O=v.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};const J=["EsempioInterattivo","PersonalizzazioneDegliStili","VariantiColore","VariantiDimensione","Tipologie","SfondoScuro","ConIcona","ConIconaCerchiata"];export{m as ConIcona,v as ConIconaCerchiata,l as EsempioInterattivo,c as PersonalizzazioneDegliStili,b as SfondoScuro,p as Tipologie,d as VariantiColore,u as VariantiDimensione,J as __namedExportsOrder,g as default};

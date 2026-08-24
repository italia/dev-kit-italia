import{b as e}from"./iframe-BcvJloFY.js";const d=e`<style>
  .dki-organizzare-i-contenuti-example {
    width: 100%;
    box-sizing: border-box;
  }

  .dki-organizzare-i-contenuti-example .bd-highlight {
    background-color: rgba(13, 110, 253, 0.15);
    border: 1px solid rgba(13, 110, 253, 0.25);
    padding: 1rem;
  }

  .dki-organizzare-i-contenuti-example .bd-example {
    padding: 1rem;
    border: 1px solid #dee2e6;
  }
</style>`,l=(p,c={})=>{const m=["dki-organizzare-i-contenuti-example",c.className].filter(Boolean).join(" ");return e`${d}
    <div class=${m}>${p}</div>`},u={title:"Organizzare i contenuti/Testo"},s={name:"Allineato a sinistra",tags:["!dev"],parameters:{pageLayout:"w-100",docs:{source:{code:'<p class="text-start">Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium purus sit amet fermentum.</p>'}}},render:()=>e`<p class="text-start">
      Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu
      vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros
      Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium purus sit amet
      fermentum.
    </p>`},t={name:"Varianti di allineamento",tags:["!dev"],parameters:{pageLayout:"w-100",docs:{source:{code:`<p class="text-start">Testo allineato a sinistra per tutte le dimensioni del viewport.</p>
<p class="text-center">Testo allineato al centro per tutte le dimensioni del viewport.</p>
<p class="text-end">Testo allineato a destra per tutte le dimensioni del viewport.</p>

<p class="text-sm-left">Testo allineato a sinistra per dimensioni SM (small) o maggiori.</p>
<p class="text-md-left">Testo allineato a sinistra per dimensioni MD (medium) o maggiori.</p>
<p class="text-lg-left">Testo allineato a sinistra per dimensioni LG (large) o maggiori.</p>
<p class="text-xl-left">Testo allineato a sinistra per dimensioni XL (extra-large) o maggiori.</p>`}}},render:()=>e`<p class="text-start">Testo allineato a sinistra per tutte le dimensioni del viewport.</p>
      <p class="text-center">Testo allineato al centro per tutte le dimensioni del viewport.</p>
      <p class="text-end">Testo allineato a destra per tutte le dimensioni del viewport.</p>

      <p class="text-sm-left">Testo allineato a sinistra per dimensioni SM (small) o maggiori.</p>
      <p class="text-md-left">Testo allineato a sinistra per dimensioni MD (medium) o maggiori.</p>
      <p class="text-lg-left">Testo allineato a sinistra per dimensioni LG (large) o maggiori.</p>
      <p class="text-xl-left">Testo allineato a sinistra per dimensioni XL (extra-large) o maggiori.</p>`},a={name:"Per esteso e overflow",tags:["!dev"],parameters:{pageLayout:"w-100",docs:{source:{code:`<div class="text-nowrap bd-highlight" style="width: 10rem;">
  Questo testo oltrepassa il contenitore.
</div>`}}},render:()=>l(e`<div class="text-nowrap bd-highlight" style="width: 10rem;overflow:hidden;">
        Questo testo oltrepassa il contenitore.
      </div>`)},i={name:"Con troncamento in punti di sospensione",tags:["!dev"],parameters:{pageLayout:"w-100",docs:{source:{code:`<!-- Block level -->
<div class="row">
  <div class="col-2 text-truncate">
    Praeterea iter est quasdam res quas ex communi.
  </div>
</div>

<!-- Inline level -->
<span class="d-inline-block text-truncate" style="max-width: 150px;">
  Praeterea iter est quasdam res quas ex communi.
</span>`}}},render:()=>l(e`<!-- Block level -->
        <div class="row">
          <div class="col-2 text-truncate">Praeterea iter est quasdam res quas ex communi.</div>
        </div>

        <!-- Inline level -->
        <span class="d-inline-block text-truncate" style="max-width: 150px;">
          Praeterea iter est quasdam res quas ex communi.
        </span>`)},o={name:"Trasformazioni",tags:["!dev"],parameters:{docs:{source:{code:`<p class="text-lowercase">Testo tutto minuscolo.</p>
<p class="text-uppercase">Testo tutto maiuscolo.</p>
<p class="text-capitalize">Testo con prime lettere MaiuscOLE.</p>`}}},render:()=>l(e`<p class="text-lowercase">Testo tutto minuscolo.</p>
        <p class="text-uppercase">Testo tutto maiuscolo.</p>
        <p class="text-capitalize">Testo con prime lettere MaiuscOLE.</p>`)},r={name:"Stile",tags:["!dev"],parameters:{docs:{source:{code:`<p class="fw-bold">Testo in grassetto.</p>
<p class="fw-semibold">Testo in semi-grassetto.</p>
<p class="fw-normal">Testo normale.</p>
<p class="fw-light">Testo sottile.</p>
<p class="fst-italic">Testo in corsivo.</p>`}}},render:()=>l(e`<p class="fw-bold">Testo in grassetto.</p>
        <p class="fw-semibold">Testo in semi-grassetto.</p>
        <p class="fw-normal">Testo normale.</p>
        <p class="fw-light">Testo sottile.</p>
        <p class="fst-italic">Testo in corsivo.</p>`)},n={name:"Monospaziato",tags:["!dev"],parameters:{docs:{source:{code:'<p class="font-monospace">Testo monospace</p>'}}},render:()=>l(e`<p class="font-monospace">Testo monospace</p>`)};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Allineato a sinistra',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: \`<p class="text-start">Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium purus sit amet fermentum.</p>\`
      }
    }
  },
  render: () => html\`<p class="text-start">
      Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu
      vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros
      Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium purus sit amet
      fermentum.
    </p>\`
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Varianti di allineamento',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: \`<p class="text-start">Testo allineato a sinistra per tutte le dimensioni del viewport.</p>
<p class="text-center">Testo allineato al centro per tutte le dimensioni del viewport.</p>
<p class="text-end">Testo allineato a destra per tutte le dimensioni del viewport.</p>

<p class="text-sm-left">Testo allineato a sinistra per dimensioni SM (small) o maggiori.</p>
<p class="text-md-left">Testo allineato a sinistra per dimensioni MD (medium) o maggiori.</p>
<p class="text-lg-left">Testo allineato a sinistra per dimensioni LG (large) o maggiori.</p>
<p class="text-xl-left">Testo allineato a sinistra per dimensioni XL (extra-large) o maggiori.</p>\`
      }
    }
  },
  render: () => html\`<p class="text-start">Testo allineato a sinistra per tutte le dimensioni del viewport.</p>
      <p class="text-center">Testo allineato al centro per tutte le dimensioni del viewport.</p>
      <p class="text-end">Testo allineato a destra per tutte le dimensioni del viewport.</p>

      <p class="text-sm-left">Testo allineato a sinistra per dimensioni SM (small) o maggiori.</p>
      <p class="text-md-left">Testo allineato a sinistra per dimensioni MD (medium) o maggiori.</p>
      <p class="text-lg-left">Testo allineato a sinistra per dimensioni LG (large) o maggiori.</p>
      <p class="text-xl-left">Testo allineato a sinistra per dimensioni XL (extra-large) o maggiori.</p>\`
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Per esteso e overflow',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: \`<div class="text-nowrap bd-highlight" style="width: 10rem;">
  Questo testo oltrepassa il contenitore.
</div>\`
      }
    }
  },
  render: () => wrapExample(html\`<div class="text-nowrap bd-highlight" style="width: 10rem;overflow:hidden;">
        Questo testo oltrepassa il contenitore.
      </div>\`)
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Con troncamento in punti di sospensione',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: \`<!-- Block level -->
<div class="row">
  <div class="col-2 text-truncate">
    Praeterea iter est quasdam res quas ex communi.
  </div>
</div>

<!-- Inline level -->
<span class="d-inline-block text-truncate" style="max-width: 150px;">
  Praeterea iter est quasdam res quas ex communi.
</span>\`
      }
    }
  },
  render: () => wrapExample(html\`<!-- Block level -->
        <div class="row">
          <div class="col-2 text-truncate">Praeterea iter est quasdam res quas ex communi.</div>
        </div>

        <!-- Inline level -->
        <span class="d-inline-block text-truncate" style="max-width: 150px;">
          Praeterea iter est quasdam res quas ex communi.
        </span>\`)
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Trasformazioni',
  tags: ['!dev'],
  parameters: {
    docs: {
      source: {
        code: \`<p class="text-lowercase">Testo tutto minuscolo.</p>
<p class="text-uppercase">Testo tutto maiuscolo.</p>
<p class="text-capitalize">Testo con prime lettere MaiuscOLE.</p>\`
      }
    }
  },
  render: () => wrapExample(html\`<p class="text-lowercase">Testo tutto minuscolo.</p>
        <p class="text-uppercase">Testo tutto maiuscolo.</p>
        <p class="text-capitalize">Testo con prime lettere MaiuscOLE.</p>\`)
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Stile',
  tags: ['!dev'],
  parameters: {
    docs: {
      source: {
        code: \`<p class="fw-bold">Testo in grassetto.</p>
<p class="fw-semibold">Testo in semi-grassetto.</p>
<p class="fw-normal">Testo normale.</p>
<p class="fw-light">Testo sottile.</p>
<p class="fst-italic">Testo in corsivo.</p>\`
      }
    }
  },
  render: () => wrapExample(html\`<p class="fw-bold">Testo in grassetto.</p>
        <p class="fw-semibold">Testo in semi-grassetto.</p>
        <p class="fw-normal">Testo normale.</p>
        <p class="fw-light">Testo sottile.</p>
        <p class="fst-italic">Testo in corsivo.</p>\`)
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Monospaziato',
  tags: ['!dev'],
  parameters: {
    docs: {
      source: {
        code: \`<p class="font-monospace">Testo monospace</p>\`
      }
    }
  },
  render: () => wrapExample(html\`<p class="font-monospace">Testo monospace</p>\`)
}`,...n.parameters?.docs?.source}}};const g=["AllineatoASinistra","VariantiDiAllineamento","PerEstesoEOverflow","ConTroncamentoInPuntiDiSospensione","Trasformazioni","Stile","Monospaziato"],v=Object.freeze(Object.defineProperty({__proto__:null,AllineatoASinistra:s,ConTroncamentoInPuntiDiSospensione:i,Monospaziato:n,PerEstesoEOverflow:a,Stile:r,Trasformazioni:o,VariantiDiAllineamento:t,__namedExportsOrder:g,default:u},Symbol.toStringTag,{value:"Module"}));export{s as A,i as C,n as M,a as P,v as S,o as T,t as V,r as a};

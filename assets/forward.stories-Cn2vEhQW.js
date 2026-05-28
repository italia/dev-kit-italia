import{b as s}from"./iframe-CObMHJH1.js";const r={title:"Componenti/Forward",tags:["documentation","a11y-ok"]},e={...r,name:"Esempio base",parameters:{docs:{story:{iframeHeight:1e3},description:{story:`Per attivare lo scorrimento automatico è sufficiente aggiungere a un link la classe \`.forward\` e impostare l'attributo \`href\` con l'àncora di destinazione.

<div class="mt-5" style="font-size:0.9rem">Scorri il contenuto dell'esempio qui sotto per vedere l'effetto del forward.</div>
`},source:{code:`
<script type="module">
  document.querySelectorAll('a.forward').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        targetElement.scrollIntoView({
          behavior: prefersReducedMotion ? 'auto' : 'smooth',
          block: 'start'
        });
        targetElement.setAttribute('tabindex', '-1');
        targetElement.focus({ preventScroll: true });
      }
    });
  });
<\/script>

<a href="#sezione-di-esempio" class="forward" aria-label="Vai a: Sezione di esempio">
  <it-icon name="it-expand" size="lg" color="primary"></it-icon>
</a>

<div id="sezione-di-esempio">
  <h2>Sezione di esempio</h2>
  <p>Et et consectetur ipsum labore excepteur...</p>
</div>`}}},render:()=>(setTimeout(()=>{document.querySelectorAll("a.forward").forEach(i=>{i.addEventListener("click",a=>{a.preventDefault();const o=i.getAttribute("href");if(!o)return;const t=document.querySelector(o);if(t){const n=window.matchMedia("(prefers-reduced-motion: reduce)").matches;t.scrollIntoView({behavior:n?"auto":"smooth",block:"start"}),t.setAttribute("tabindex","-1"),t.focus({preventScroll:!0})}})})},100),s`
      <div style="max-height: 500px; overflow-y: auto; border: 1px solid #ddd;">
        <div class="container my-4">
          <p class="mb-3">Clicca sull'icona per scorrere alla sezione di esempio:</p>
          <a href="#sezione-di-esempio" class="forward" aria-label="Vai a: Sezione di esempio">
            <it-icon name="it-expand" size="lg" color="primary"></it-icon>
          </a>
        </div>

        <div style="height: 400px; background-color: #f0f6fc; padding: 2rem;">
          <h3>Contenuto intermedio</h3>
          <p>
            Questo è un contenuto che separa il link Forward dalla sezione di destinazione. L'animazione scorrerà
            automaticamente fino alla sezione target.
          </p>
        </div>

        <div id="sezione-di-esempio" class="container my-4 py-4">
          <h2>Sezione di esempio</h2>
          <p>
            Et et consectetur ipsum labore excepteur est proident excepteur ad velit occaecat qui minim occaecat veniam.
            Fugiat veniam incididunt anim aliqua enim pariatur veniam sunt est aute sit dolor anim.
          </p>
          <p>
            Velit non irure adipisicing aliqua ullamco irure incididunt irure non esse consectetur nostrud minim non
            minim occaecat. Amet duis do nisi duis veniam non est eiusmod tempor incididunt tempor dolor ipsum in qui
            sit.
          </p>
        </div>
      </div>
    `)};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  ...meta,
  name: 'Esempio base',
  parameters: {
    docs: {
      story: {
        iframeHeight: 1000
      },
      description: {
        story: \`Per attivare lo scorrimento automatico è sufficiente aggiungere a un link la classe \\\`.forward\\\` e impostare l'attributo \\\`href\\\` con l'àncora di destinazione.

<div class="mt-5" style="font-size:0.9rem">Scorri il contenuto dell'esempio qui sotto per vedere l'effetto del forward.</div>
\`
      },
      source: {
        code: \`
<script type="module">
  document.querySelectorAll('a.forward').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        targetElement.scrollIntoView({
          behavior: prefersReducedMotion ? 'auto' : 'smooth',
          block: 'start'
        });
        targetElement.setAttribute('tabindex', '-1');
        targetElement.focus({ preventScroll: true });
      }
    });
  });
<\/script>

<a href="#sezione-di-esempio" class="forward" aria-label="Vai a: Sezione di esempio">
  <it-icon name="it-expand" size="lg" color="primary"></it-icon>
</a>

<div id="sezione-di-esempio">
  <h2>Sezione di esempio</h2>
  <p>Et et consectetur ipsum labore excepteur...</p>
</div>\`
      }
    }
  },
  render: () => {
    setTimeout(() => {
      document.querySelectorAll('a.forward').forEach(link => {
        link.addEventListener('click', e => {
          e.preventDefault();
          const targetId = link.getAttribute('href');
          if (!targetId) return;
          const targetElement = document.querySelector(targetId) as HTMLElement;
          if (targetElement) {
            const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            targetElement.scrollIntoView({
              behavior: prefersReducedMotion ? 'auto' : 'smooth',
              block: 'start'
            });
            targetElement.setAttribute('tabindex', '-1');
            targetElement.focus({
              preventScroll: true
            });
          }
        });
      });
    }, 100);
    return html\`
      <div style="max-height: 500px; overflow-y: auto; border: 1px solid #ddd;">
        <div class="container my-4">
          <p class="mb-3">Clicca sull'icona per scorrere alla sezione di esempio:</p>
          <a href="#sezione-di-esempio" class="forward" aria-label="Vai a: Sezione di esempio">
            <it-icon name="it-expand" size="lg" color="primary"></it-icon>
          </a>
        </div>

        <div style="height: 400px; background-color: #f0f6fc; padding: 2rem;">
          <h3>Contenuto intermedio</h3>
          <p>
            Questo è un contenuto che separa il link Forward dalla sezione di destinazione. L'animazione scorrerà
            automaticamente fino alla sezione target.
          </p>
        </div>

        <div id="sezione-di-esempio" class="container my-4 py-4">
          <h2>Sezione di esempio</h2>
          <p>
            Et et consectetur ipsum labore excepteur est proident excepteur ad velit occaecat qui minim occaecat veniam.
            Fugiat veniam incididunt anim aliqua enim pariatur veniam sunt est aute sit dolor anim.
          </p>
          <p>
            Velit non irure adipisicing aliqua ullamco irure incididunt irure non esse consectetur nostrud minim non
            minim occaecat. Amet duis do nisi duis veniam non est eiusmod tempor incididunt tempor dolor ipsum in qui
            sit.
          </p>
        </div>
      </div>
    \`;
  }
}`,...e.parameters?.docs?.source}}};const c=["EsempioBase"],l=Object.freeze(Object.defineProperty({__proto__:null,EsempioBase:e,__namedExportsOrder:c,default:r},Symbol.toStringTag,{value:"Module"}));export{e as E,l as F};

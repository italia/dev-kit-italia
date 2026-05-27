import{b as e}from"./iframe-CGo9iNzD.js";import"./preload-helper-PPVm8Dsz.js";const g={title:"Esempi/Sticky",tags:["!autodocs","!dev"],decorators:[(l,t)=>e`
      <div>
        ${t.parameters.heading?e`<h1 style="margin:0 0 2rem 0">${t.parameters.heading}</h1>`:""}
        ${t.parameters.description?e`<p style="margin:0 0 2rem 0">${t.parameters.description}</p>`:""}
        <div style="container-type: inline-size;">
          <div class="container" style="height: 4000px; background: linear-gradient(#eee, #ccc);">${l()}</div>
        </div>
      </div>
      <style>
        #storybook-root {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          margin: 0;
          width: 100%;
        }
        #root-inner {
          width: 100%;
          max-width: 1140px;
        }
        .l-0 {
          left: 0 !important;
        }
        .container {
          padding: 0;
        }

        @container (min-width: 1200px) {
          .container {
            width: 1140px;
          }
        }

        @container (min-width: 992px) and (max-width: 1199px) {
          .container {
            width: 960px;
          }
        }

        @container (min-width: 768px) and (max-width: 991px) {
          .container {
            width: 720px;
          }
        }

        @container (max-width: 767px) {
          .container {
            padding: 0 1rem;
          }
        }
        /* Media query globali per resize finestra */
        @media (min-width: 1200px) {
          .container {
            width: 1140px;
          }
        }
        @media (min-width: 992px) and (max-width: 1199px) {
          .container {
            width: 960px;
          }
        }
        @media (min-width: 768px) and (max-width: 991px) {
          .container {
            width: 720px;
          }
        }
        @media (max-width: 767px) {
          .container {
            padding: 0 1rem;
          }
        }
      </style>
    `],parameters:{layout:"fullscreen"}},i={parameters:{heading:"Esempio componente it-sticky",description:"Scrollare la pagina per vedere l'effetto sticky"},render:()=>e`
    <it-sticky class="w-100 bg-primary p-2 text-white">
      <div class="w-100">Elemento sticky</div>
    </it-sticky>
  `},a={parameters:{heading:"Esempio componente it-sticky: position-top offset",description:"Scrollare la pagina per vedere l'effetto sticky con offset"},render:()=>e`
    <it-sticky class="w-100 bg-primary p-2 text-white" padding-top="50">
      <div class="w-100">Elemento sticky con top offset</div>
    </it-sticky>
  `},n={parameters:{heading:"Esempio componente it-sticky: position-type fixed",description:"Scrollare la pagina per vedere l'effetto sticky"},render:()=>e`
    <it-sticky sticky-class-name="bg-warning w-100 l-0" position-type="fixed" class="w-100 bg-primary p-2 text-white">
      <div class="w-100">Elemento sticky Fixed</div>
    </it-sticky>
  `},s={parameters:{heading:"Esempio componente it-sticky: position-type fixed con sticky-class-name",description:"Scrollare la pagina per vedere l'effetto sticky: vedrai applicate la classi bg-warning w-100 l-0 fornite a sticky-class-name"},render:()=>e`
    <it-sticky sticky-class-name="bg-warning w-100 l-0" position-type="fixed" class="w-100 bg-primary p-2 text-white">
      <div class="w-100">Elemento sticky Fixed</div>
    </it-sticky>
  `},o={parameters:{heading:"Esempio componente it-sticky: stackable",description:"Scrollare la pagina per vedere l'effetto sticky: vedrai il componenti impilarsi uno sopra l'altro, e l'ultimo mantenere il suo top offset di 50px"},render:()=>e`
    <it-sticky class="bg-primary p-2 text-white w-100" stackable>
      <div>Elemento sticky stackable</div>
    </it-sticky>
    <div style="height: 500px;"></div>
    <it-sticky class="bg-success p-2 text-white w-100" stackable>
      <div>Elemento sticky stackable</div>
    </it-sticky>
    <div style="height: 500px;"></div>
    <it-sticky class="bg-danger p-2 text-white w-100" stackable>
      <div>Elemento sticky stackable</div>
    </it-sticky>
    <div style="height: 500px;"></div>
    <it-sticky class="bg-warning p-2 text-white w-100" stackable padding-top="50">
      <div>Elemento sticky stackable con top offset 50px</div>
    </it-sticky>
  `},r={parameters:{heading:"Sticky impilabili con resize",description:`
Questo esempio mostra più componenti it-sticky con attributo stackable e la gestione dei resize del suo contenitore (ie media query).
Utilizza il selettore per modificare la larghezza del contenitore: al variare della dimensione,
gli elementi interni cambiano altezza grazie alle container query e rimangono comunque
correttamente impilati uno sopra l’altro durante lo scroll.
  `},render:()=>e`
    <div id="wrapper" style="container-type: inline-size; height:100%; transition: width 0.3s; padding:1rem;">
      <div style="padding: 1rem;">
        CSS per il ridimensionamento del contenuto:
        <pre style="background: #333; color: #eee; padding: 1rem; border-radius: 8px; overflow-x: auto;">
            .resizable-content {
              height: 40px;
              transition: height 0.3s;
            }

            /* Container queries */
            @container (max-width: 1200px) {
              .resizable-content {
                height: 40px;
              }
            }
            @container (max-width: 1000px) {
              .resizable-content {
                height: 60px;
              }
            }
            @container (max-width: 800px) {
              .resizable-content {
                height: 80px;
              }
            }
            @container (max-width: 500px) {
              .resizable-content {
                height: 100px;
              }
            }
          </pre
        >
      </div>
      <it-sticky
        stackable
        sticky-class-name="l-0"
        class="mb-4 p-2 bg-light border"
        padding-top="16"
        position-type="fixed"
      >
        <label for="size">Seleziona la larghezza del contenuto:</label>
        <select
          id="size"
          name="size"
          @change=${l=>{const t=l.target,p=document.querySelector(".container");if(p)p.style.width=`${t.value}px`,p.getBoundingClientRect();else{const d=document.getElementById("wrapper");d&&(d.style.width=`${t.value}px`,d.getBoundingClientRect())}}}
        >
          <option value="1200">1200px</option>
          <option value="1000">1000px</option>
          <option value="800">800px</option>
          <option value="600">600px</option>
          <option value="400">400px</option>
        </select>
      </it-sticky>

      <it-sticky class="bg-primary p-2 text-white w-100" stackable>
        <div class="resizable-content">Sticky Stackable 1</div>
      </it-sticky>

      <div style="height: 500px;"></div>

      <it-sticky class="bg-success p-2 text-white w-100" stackable>
        <div class="resizable-content">Sticky Stackable 2</div>
      </it-sticky>

      <div style="height: 500px;"></div>

      <it-sticky class="bg-warning p-2 text-white w-100" stackable position-type="fixed" sticky-class-name="l-0">
        <div class="resizable-content">Another Stackable Sticky 3</div>
      </it-sticky>
      <it-sticky class="bg-danger p-2 text-white w-100" stackable padding-top="50">
        <div class="resizable-content">Sticky Stackable padded 1</div>
      </it-sticky>
      <div style="height: 500px;"></div>
      <it-sticky class="bg-dark p-2 text-white w-100" stackable padding-top="100">
        <div class="resizable-content">Sticky Stackable padded 3</div>
      </it-sticky>
      <div style="height: 500px;"></div>

      <style>
        .resizable-content {
          height: 40px;
          transition: height 0.3s;
        }

        /* Container queries */
        @container (max-width: 1200px) {
          .resizable-content {
            height: 40px;
          }
        }
        @container (max-width: 1000px) {
          .resizable-content {
            height: 60px;
          }
        }
        @container (max-width: 800px) {
          .resizable-content {
            height: 80px;
          }
        }
        @container (max-width: 500px) {
          .resizable-content {
            height: 100px;
          }
        }
      </style>
    </div>
  `},c={parameters:{heading:"Esempio it-sticky: position bottom fixed",description:"La barra in fondo è fissa dal caricamento della pagina — nessuno scroll necessario. Aggiungendo l'attributo stackable è possibile impilarne più d'una verso l'alto."},render:()=>e`
    <div style="height: 400px; display: flex; align-items: center; justify-content: center;">
      <p style="text-align:center; color:#666;">
        La barra è agganciata al bordo inferiore del viewport.<br />
        Prova a ridimensionare la finestra del browser.
      </p>
    </div>

    <it-sticky position="bottom" position-type="fixed" stackable class="bg-primary text-white p-3 w-100">
      <div class="w-100 text-center">Barra fissa in fondo — primo livello</div>
    </it-sticky>

    <it-sticky position="bottom" position-type="fixed" stackable class="bg-success text-white p-2 w-100">
      <div class="w-100 text-center">Barra fissa in fondo — secondo livello (impilata)</div>
    </it-sticky>
  `};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    heading: 'Esempio componente it-sticky',
    description: "Scrollare la pagina per vedere l'effetto sticky"
  },
  render: () => html\`
    <it-sticky class="w-100 bg-primary p-2 text-white">
      <div class="w-100">Elemento sticky</div>
    </it-sticky>
  \`
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    heading: 'Esempio componente it-sticky: position-top offset',
    description: "Scrollare la pagina per vedere l'effetto sticky con offset"
  },
  render: () => html\`
    <it-sticky class="w-100 bg-primary p-2 text-white" padding-top="50">
      <div class="w-100">Elemento sticky con top offset</div>
    </it-sticky>
  \`
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    heading: 'Esempio componente it-sticky: position-type fixed',
    description: "Scrollare la pagina per vedere l'effetto sticky"
  },
  render: () => html\`
    <it-sticky sticky-class-name="bg-warning w-100 l-0" position-type="fixed" class="w-100 bg-primary p-2 text-white">
      <div class="w-100">Elemento sticky Fixed</div>
    </it-sticky>
  \`
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    heading: 'Esempio componente it-sticky: position-type fixed con sticky-class-name',
    description: "Scrollare la pagina per vedere l'effetto sticky: vedrai applicate la classi bg-warning w-100 l-0 fornite a sticky-class-name"
  },
  render: () => html\`
    <it-sticky sticky-class-name="bg-warning w-100 l-0" position-type="fixed" class="w-100 bg-primary p-2 text-white">
      <div class="w-100">Elemento sticky Fixed</div>
    </it-sticky>
  \`
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    heading: 'Esempio componente it-sticky: stackable',
    description: "Scrollare la pagina per vedere l'effetto sticky: vedrai il componenti impilarsi uno sopra l'altro, e l'ultimo mantenere il suo top offset di 50px"
  },
  render: () => html\`
    <it-sticky class="bg-primary p-2 text-white w-100" stackable>
      <div>Elemento sticky stackable</div>
    </it-sticky>
    <div style="height: 500px;"></div>
    <it-sticky class="bg-success p-2 text-white w-100" stackable>
      <div>Elemento sticky stackable</div>
    </it-sticky>
    <div style="height: 500px;"></div>
    <it-sticky class="bg-danger p-2 text-white w-100" stackable>
      <div>Elemento sticky stackable</div>
    </it-sticky>
    <div style="height: 500px;"></div>
    <it-sticky class="bg-warning p-2 text-white w-100" stackable padding-top="50">
      <div>Elemento sticky stackable con top offset 50px</div>
    </it-sticky>
  \`
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    heading: 'Sticky impilabili con resize',
    description: \`
Questo esempio mostra più componenti it-sticky con attributo stackable e la gestione dei resize del suo contenitore (ie media query).
Utilizza il selettore per modificare la larghezza del contenitore: al variare della dimensione,
gli elementi interni cambiano altezza grazie alle container query e rimangono comunque
correttamente impilati uno sopra l’altro durante lo scroll.
  \`
  },
  render: () => html\`
    <div id="wrapper" style="container-type: inline-size; height:100%; transition: width 0.3s; padding:1rem;">
      <div style="padding: 1rem;">
        CSS per il ridimensionamento del contenuto:
        <pre style="background: #333; color: #eee; padding: 1rem; border-radius: 8px; overflow-x: auto;">
            .resizable-content {
              height: 40px;
              transition: height 0.3s;
            }

            /* Container queries */
            @container (max-width: 1200px) {
              .resizable-content {
                height: 40px;
              }
            }
            @container (max-width: 1000px) {
              .resizable-content {
                height: 60px;
              }
            }
            @container (max-width: 800px) {
              .resizable-content {
                height: 80px;
              }
            }
            @container (max-width: 500px) {
              .resizable-content {
                height: 100px;
              }
            }
          </pre
        >
      </div>
      <it-sticky
        stackable
        sticky-class-name="l-0"
        class="mb-4 p-2 bg-light border"
        padding-top="16"
        position-type="fixed"
      >
        <label for="size">Seleziona la larghezza del contenuto:</label>
        <select
          id="size"
          name="size"
          @change=\${(e: Event) => {
    const target = e.target as HTMLSelectElement;
    // trova la .container definita nel decorator (il blocco grigio)
    const outerContainer = document.querySelector('.container') as HTMLElement | null;
    if (outerContainer) {
      outerContainer.style.width = \`\${target.value}px\`;
      // forza reflow per render immediato delle container query
      outerContainer.getBoundingClientRect();
    } else {
      // fallback: imposta il wrapper locale
      const wrapper = document.getElementById('wrapper') as HTMLDivElement | null;
      if (wrapper) {
        wrapper.style.width = \`\${target.value}px\`;
        wrapper.getBoundingClientRect();
      }
    }
  }}
        >
          <option value="1200">1200px</option>
          <option value="1000">1000px</option>
          <option value="800">800px</option>
          <option value="600">600px</option>
          <option value="400">400px</option>
        </select>
      </it-sticky>

      <it-sticky class="bg-primary p-2 text-white w-100" stackable>
        <div class="resizable-content">Sticky Stackable 1</div>
      </it-sticky>

      <div style="height: 500px;"></div>

      <it-sticky class="bg-success p-2 text-white w-100" stackable>
        <div class="resizable-content">Sticky Stackable 2</div>
      </it-sticky>

      <div style="height: 500px;"></div>

      <it-sticky class="bg-warning p-2 text-white w-100" stackable position-type="fixed" sticky-class-name="l-0">
        <div class="resizable-content">Another Stackable Sticky 3</div>
      </it-sticky>
      <it-sticky class="bg-danger p-2 text-white w-100" stackable padding-top="50">
        <div class="resizable-content">Sticky Stackable padded 1</div>
      </it-sticky>
      <div style="height: 500px;"></div>
      <it-sticky class="bg-dark p-2 text-white w-100" stackable padding-top="100">
        <div class="resizable-content">Sticky Stackable padded 3</div>
      </it-sticky>
      <div style="height: 500px;"></div>

      <style>
        .resizable-content {
          height: 40px;
          transition: height 0.3s;
        }

        /* Container queries */
        @container (max-width: 1200px) {
          .resizable-content {
            height: 40px;
          }
        }
        @container (max-width: 1000px) {
          .resizable-content {
            height: 60px;
          }
        }
        @container (max-width: 800px) {
          .resizable-content {
            height: 80px;
          }
        }
        @container (max-width: 500px) {
          .resizable-content {
            height: 100px;
          }
        }
      </style>
    </div>
  \`
}`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    heading: 'Esempio it-sticky: position bottom fixed',
    description: "La barra in fondo è fissa dal caricamento della pagina — nessuno scroll necessario. Aggiungendo l'attributo stackable è possibile impilarne più d'una verso l'alto."
  },
  render: () => html\`
    <div style="height: 400px; display: flex; align-items: center; justify-content: center;">
      <p style="text-align:center; color:#666;">
        La barra è agganciata al bordo inferiore del viewport.<br />
        Prova a ridimensionare la finestra del browser.
      </p>
    </div>

    <it-sticky position="bottom" position-type="fixed" stackable class="bg-primary text-white p-3 w-100">
      <div class="w-100 text-center">Barra fissa in fondo — primo livello</div>
    </it-sticky>

    <it-sticky position="bottom" position-type="fixed" stackable class="bg-success text-white p-2 w-100">
      <div class="w-100 text-center">Barra fissa in fondo — secondo livello (impilata)</div>
    </it-sticky>
  \`
}`,...c.parameters?.docs?.source}}};const k=["SingleSticky","PaddedSticky","FixedSticky","FixedStickyClassname","StackableSticky","StackableStickyResize","FixedBottomSticky"];export{c as FixedBottomSticky,n as FixedSticky,s as FixedStickyClassname,a as PaddedSticky,i as SingleSticky,o as StackableSticky,r as StackableStickyResize,k as __namedExportsOrder,g as default};

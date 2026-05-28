import{b as o}from"./iframe-CObMHJH1.js";import{w as s}from"./organizzare-gli-spazi.helpers-BuP0CJ20.js";const j={title:"Organizzare gli spazi/Griglie"},l={name:"Base",tags:["!dev"],parameters:{pageLayout:"w-100",docs:{source:{code:`<div class="container">
  <div class="row">
    <div class="col-sm"> Una di tre colonne </div>
    <div class="col-sm"> Una di tre colonne </div>
    <div class="col-sm">Una di tre colonne</div>
  </div>
</div>`}}},render:()=>s(o`<div class="container">
        <div class="row">
          <div class="col-sm">Una di tre colonne</div>
          <div class="col-sm">Una di tre colonne</div>
          <div class="col-sm">Una di tre colonne</div>
        </div>
      </div>`,{className:"bd-example-row"})},c={name:"Colonne con larghezze omogenee",tags:["!dev"],parameters:{pageLayout:"w-100",docs:{source:{code:`<div class="container">
  <div class="row">
    <div class="col">1 di 2</div>
    <div class="col">2 di 2</div>
  </div>
  <div class="row">
    <div class="col">1 di 3</div>
    <div class="col">2 di 3</div>
    <div class="col">3 di 3</div>
  </div>
</div>`}}},render:()=>s(o`<div class="container">
        <div class="row">
          <div class="col">1 di 2</div>
          <div class="col">2 di 2</div>
        </div>
        <div class="row">
          <div class="col">1 di 3</div>
          <div class="col">2 di 3</div>
          <div class="col">3 di 3</div>
        </div>
      </div>`,{className:"bd-example-row"})},d={name:"Colonne con larghezze omogenee, alternativa",tags:["!dev"],parameters:{pageLayout:"w-100",docs:{source:{code:`<div class="container">
  <div class="row">
    <div class="col">Colonna</div>
    <div class="col">Colonna</div>
    <div class="w-100"></div>
    <div class="col">Colonna</div>
    <div class="col">Colonna</div>
  </div>
</div>`}}},render:()=>s(o`<div class="container">
        <div class="row">
          <div class="col">Colonna</div>
          <div class="col">Colonna</div>
          <div class="w-100"></div>
          <div class="col">Colonna</div>
          <div class="col">Colonna</div>
        </div>
      </div>`,{className:"bd-example-row"})},a={name:"Impostare la larghezza di una colonna",tags:["!dev"],parameters:{pageLayout:"w-100",docs:{source:{code:`<div class="container">
  <div class="row">
    <div class="col">1 di 3</div>
    <div class="col-6">2 di 3 (larga 6/12)</div>
    <div class="col">3 di 3</div>
  </div>
  <div class="row">
    <div class="col">1 di 3</div>
    <div class="col-5">2 di 3 (larga 5/12)</div>
    <div class="col">3 di 3</div>
  </div>
</div>`}}},render:()=>s(o`<div class="container">
        <div class="row">
          <div class="col">1 di 3</div>
          <div class="col-6">2 di 3 (larga 6/12)</div>
          <div class="col">3 di 3</div>
        </div>
        <div class="row">
          <div class="col">1 di 3</div>
          <div class="col-5">2 di 3 (larga 5/12)</div>
          <div class="col">3 di 3</div>
        </div>
      </div>`,{className:"bd-example-row"})},i={name:"Contenuto a larghezza variabile",tags:["!dev"],parameters:{pageLayout:"w-100",docs:{source:{code:`<div class="container">
  <div class="row justify-content-md-center">
    <div class="col col-lg-2">1 di 3</div>
    <div class="col-md-auto">Contenuto a larghezza variabile</div>
    <div class="col col-lg-2">3 di 3</div>
  </div>
  <div class="row">
    <div class="col">1 di 3</div>
    <div class="col-md-auto">Contenuto a larghezza variabile</div>
    <div class="col col-lg-2">3 di 3</div>
  </div>
</div>`}}},render:()=>s(o`<div class="container">
        <div class="row justify-content-md-center">
          <div class="col col-lg-2">1 di 3</div>
          <div class="col-md-auto">Contenuto a larghezza variabile</div>
          <div class="col col-lg-2">3 di 3</div>
        </div>
        <div class="row">
          <div class="col">1 di 3</div>
          <div class="col-md-auto">Contenuto a larghezza variabile</div>
          <div class="col col-lg-2">3 di 3</div>
        </div>
      </div>`,{className:"bd-example-row"})},e={name:"Larghezza identica su più righe",tags:["!dev"],parameters:{pageLayout:"w-100",docs:{source:{code:`<div class="row">
  <div class="col">col</div>
  <div class="col">col</div>
  <div class="w-100"></div>
  <div class="col">col</div>
  <div class="col">col</div>
</div>`}}},render:()=>s(o`<div class="row">
        <div class="col">col</div>
        <div class="col">col</div>
        <div class="w-100"></div>
        <div class="col">col</div>
        <div class="col">col</div>
      </div>`,{className:"bd-example-row"})},v={name:"Responsive, per tutti i breakpoint",tags:["!dev"],parameters:{pageLayout:"w-100",docs:{source:{code:`<div class="row">
  <div class="col">col</div>
  <div class="col">col</div>
  <div class="col">col</div>
  <div class="col">col</div>
</div>
<div class="row">
  <div class="col-8">col-8</div>
  <div class="col-4">col-4</div>
</div>`}}},render:()=>s(o`<div class="row">
          <div class="col">col</div>
          <div class="col">col</div>
          <div class="col">col</div>
          <div class="col">col</div>
        </div>
        <div class="row">
          <div class="col-8">col-8</div>
          <div class="col-4">col-4</div>
        </div>`,{className:"bd-example-row"})},r={name:"Responsive, raccolti in orizzontale",tags:["!dev"],parameters:{pageLayout:"w-100",docs:{source:{code:`<div class="row">
  <div class="col-sm-8">col-sm-8</div>
  <div class="col-sm-4">col-sm-4</div>
</div>
<div class="row">
  <div class="col-sm">col-sm</div>
  <div class="col-sm">col-sm</div>
  <div class="col-sm">col-sm</div>
</div>`}}},render:()=>s(o`<div class="row">
          <div class="col-sm-8">col-sm-8</div>
          <div class="col-sm-4">col-sm-4</div>
        </div>
        <div class="row">
          <div class="col-sm">col-sm</div>
          <div class="col-sm">col-sm</div>
          <div class="col-sm">col-sm</div>
        </div>`,{className:"bd-example-row"})},n={name:"Responsive, mischiare e abbinare",tags:["!dev"],parameters:{pageLayout:"w-100",docs:{source:{code:`<!-- Ordina le colonne sui dispositivi mobile creando una larghezza intera e l'altra mezza larghezza -->
<div class="row">
  <div class="col-12 col-md-8">.col-12 .col-md-8</div>
  <div class="col-6 col-md-4">.col-6 .col-md-4</div>
</div>

<!-- Le colonne partono con una larghezza del 50% sui dispositivi mobile e arrivano al 33.3% sui desktop -->
<div class="row">
  <div class="col-6 col-md-4">.col-6 .col-md-4</div>
  <div class="col-6 col-md-4">.col-6 .col-md-4</div>
  <div class="col-6 col-md-4">.col-6 .col-md-4</div>
</div>

<!-- Le colonne sono sempre larghe 50%, su dispositivi mobile e desktop -->
<div class="row">
  <div class="col-6">.col-6</div>
  <div class="col-6">.col-6</div>
</div>`}}},render:()=>s(o`<!-- Ordina le colonne sui dispositivi mobile creando una larghezza intera e l'altra mezza larghezza -->
        <div class="row">
          <div class="col-12 col-md-8">.col-12 .col-md-8</div>
          <div class="col-6 col-md-4">.col-6 .col-md-4</div>
        </div>

        <!-- Le colonne partono con una larghezza del 50% sui dispositivi mobile e arrivano al 33.3% sui desktop -->
        <div class="row">
          <div class="col-6 col-md-4">.col-6 .col-md-4</div>
          <div class="col-6 col-md-4">.col-6 .col-md-4</div>
          <div class="col-6 col-md-4">.col-6 .col-md-4</div>
        </div>

        <!-- Le colonne sono sempre larghe 50%, su dispositivi mobile e desktop -->
        <div class="row">
          <div class="col-6">.col-6</div>
          <div class="col-6">.col-6</div>
        </div>`,{className:"bd-example-row"})},m={name:"Responsive, righe di colonne, eg. 1",tags:["!dev"],parameters:{pageLayout:"w-100",docs:{source:{code:`<div class="container">
  <div class="row row-cols-2">
    <div class="col">Colonna</div>
    <div class="col">Colonna</div>
    <div class="col">Colonna</div>
    <div class="col">Colonna</div>
  </div>
</div>`}}},render:()=>s(o`<div class="container">
        <div class="row row-cols-2">
          <div class="col">Colonna</div>
          <div class="col">Colonna</div>
          <div class="col">Colonna</div>
          <div class="col">Colonna</div>
        </div>
      </div>`,{className:"bd-example-row"})},t={name:"Responsive, righe di colonne, eg. 2",tags:["!dev"],parameters:{pageLayout:"w-100",docs:{source:{code:`<div class="container">
  <div class="row row-cols-3">
    <div class="col">Colonna</div>
    <div class="col">Colonna</div>
    <div class="col">Colonna</div>
    <div class="col">Colonna</div>
  </div>
</div>`}}},render:()=>s(o`<div class="container">
        <div class="row row-cols-3">
          <div class="col">Colonna</div>
          <div class="col">Colonna</div>
          <div class="col">Colonna</div>
          <div class="col">Colonna</div>
        </div>
      </div>`,{className:"bd-example-row"})},p={name:"Responsive, righe di colonne, eg. 3",tags:["!dev"],parameters:{pageLayout:"w-100",docs:{source:{code:`<div class="container">
  <div class="row row-cols-4">
    <div class="col">Colonna</div>
    <div class="col">Colonna</div>
    <div class="col">Colonna</div>
    <div class="col">Colonna</div>
  </div>
</div>`}}},render:()=>s(o`<div class="container">
        <div class="row row-cols-4">
          <div class="col">Colonna</div>
          <div class="col">Colonna</div>
          <div class="col">Colonna</div>
          <div class="col">Colonna</div>
        </div>
      </div>`,{className:"bd-example-row"})},u={name:"Responsive, righe di colonne, eg. 4",tags:["!dev"],parameters:{pageLayout:"w-100",docs:{source:{code:`<div class="container">
  <div class="row row-cols-4">
    <div class="col">Colonna</div>
    <div class="col">Colonna</div>
    <div class="col-6">Colonna</div>
    <div class="col">Colonna</div>
  </div>
</div>`}}},render:()=>s(o`<div class="container">
        <div class="row row-cols-4">
          <div class="col">Colonna</div>
          <div class="col">Colonna</div>
          <div class="col-6">Colonna</div>
          <div class="col">Colonna</div>
        </div>
      </div>`,{className:"bd-example-row"})},w={name:"Responsive, righe di colonne, eg. 5",tags:["!dev"],parameters:{pageLayout:"w-100",docs:{source:{code:`<div class="container">
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
    <div class="col">Colonna</div>
    <div class="col">Colonna</div>
    <div class="col">Colonna</div>
    <div class="col">Colonna</div>
  </div>
</div>`}}},render:()=>s(o`<div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
          <div class="col">Colonna</div>
          <div class="col">Colonna</div>
          <div class="col">Colonna</div>
          <div class="col">Colonna</div>
        </div>
      </div>`,{className:"bd-example-row"})},g={name:"Allineamento verticale",tags:["!dev"],parameters:{pageLayout:"w-100",docs:{source:{code:`<div class="container">
  <div class="row align-items-start" style="min-height: 5rem;">
    <div class="col">Una di tre colonne</div>
    <div class="col">Una di tre colonne</div>
    <div class="col">Una di tre colonne</div>
  </div>
  <div class="row align-items-center" style="min-height: 5rem;">
    <div class="col">Una di tre colonne</div>
    <div class="col">Una di tre colonne</div>
    <div class="col">Una di tre colonne</div>
  </div>
  <div class="row align-items-end" style="min-height: 5rem;">
    <div class="col">Una di tre colonne</div>
    <div class="col">Una di tre colonne</div>
    <div class="col">Una di tre colonne</div>
  </div>
</div>`}}},render:()=>s(o`<div class="container">
        <div class="row align-items-start" style="min-height: 5rem;">
          <div class="col">Una di tre colonne</div>
          <div class="col">Una di tre colonne</div>
          <div class="col">Una di tre colonne</div>
        </div>
        <div class="row align-items-center" style="min-height: 5rem;">
          <div class="col">Una di tre colonne</div>
          <div class="col">Una di tre colonne</div>
          <div class="col">Una di tre colonne</div>
        </div>
        <div class="row align-items-end" style="min-height: 5rem;">
          <div class="col">Una di tre colonne</div>
          <div class="col">Una di tre colonne</div>
          <div class="col">Una di tre colonne</div>
        </div>
      </div>`,{className:"bd-example-row"})},f={name:"Allineamento verticale, misto",tags:["!dev"],parameters:{pageLayout:"w-100",docs:{source:{code:`<div class="container">
  <div class="row" style="min-height: 5rem;">
    <div class="col align-self-start">Una di tre colonne</div>
    <div class="col align-self-center">Una di tre colonne</div>
    <div class="col align-self-end">Una di tre colonne</div>
  </div>
</div>`}}},render:()=>s(o`<div class="container">
        <div class="row" style="min-height: 5rem;">
          <div class="col align-self-start">Una di tre colonne</div>
          <div class="col align-self-center">Una di tre colonne</div>
          <div class="col align-self-end">Una di tre colonne</div>
        </div>
      </div>`,{className:"bd-example-row bd-example-bg"})},C={name:"Allineamento orizzontale",tags:["!dev"],parameters:{pageLayout:"w-100",docs:{source:{code:`<div class="container">
  <div class="row justify-content-start">
    <div class="col-4">Una di due colonne</div>
    <div class="col-4">Una di due colonne</div>
  </div>
  <div class="row justify-content-center">
    <div class="col-4">Una di due colonne</div>
    <div class="col-4">Una di due colonne</div>
  </div>
  <div class="row justify-content-end">
    <div class="col-4">Una di due colonne</div>
    <div class="col-4">Una di due colonne</div>
  </div>
  <div class="row justify-content-around">
    <div class="col-4">Una di due colonne</div>
    <div class="col-4">Una di due colonne</div>
  </div>
  <div class="row justify-content-between">
    <div class="col-4">Una di due colonne</div>
    <div class="col-4">Una di due colonne</div>
  </div>
</div>`}}},render:()=>s(o`<div class="container">
        <div class="row justify-content-start">
          <div class="col-4">Una di due colonne</div>
          <div class="col-4">Una di due colonne</div>
        </div>
        <div class="row justify-content-center">
          <div class="col-4">Una di due colonne</div>
          <div class="col-4">Una di due colonne</div>
        </div>
        <div class="row justify-content-end">
          <div class="col-4">Una di due colonne</div>
          <div class="col-4">Una di due colonne</div>
        </div>
        <div class="row justify-content-around">
          <div class="col-4">Una di due colonne</div>
          <div class="col-4">Una di due colonne</div>
        </div>
        <div class="row justify-content-between">
          <div class="col-4">Una di due colonne</div>
          <div class="col-4">Una di due colonne</div>
        </div>
      </div>`,{className:"bd-example-row bd-example-bg"})},z={name:"Senza gutter",tags:["!dev"],parameters:{pageLayout:"w-100",docs:{source:{code:`<div class="row g-0">
  <div class="col-12 col-sm-6 col-md-8">.col-12 .col-sm-6 .col-md-8</div>
  <div class="col-6 col-md-4">.col-6 .col-md-4</div>
</div>`}}},render:()=>s(o`<div class="row g-0">
        <div class="col-12 col-sm-6 col-md-8">.col-12 .col-sm-6 .col-md-8</div>
        <div class="col-6 col-md-4">.col-6 .col-md-4</div>
      </div>`,{className:"bd-example-row"})},h={name:"Gutter variabile",tags:["!dev"],parameters:{pageLayout:"w-100",docs:{source:{code:`<div class="row variable-gutters">
  <div class="col-12 col-sm-6 col-md-8">.col-12 .col-sm-6 .col-md-8</div>
  <div class="col-6 col-md-4">.col-6 .col-md-4</div>
</div>`}}},render:()=>s(o`<div class="row variable-gutters">
        <div class="col-12 col-sm-6 col-md-8">.col-12 .col-sm-6 .col-md-8</div>
        <div class="col-6 col-md-4">.col-6 .col-md-4</div>
      </div>`,{className:"bd-example-row"})},b={name:"Colonna a capo",tags:["!dev"],parameters:{pageLayout:"w-100",docs:{source:{code:`<div class="row">
  <div class="col-9">.col-9</div>
  <div class="col-4">.col-4<br>Dato che 9 + 4 = 13 &gt; 12, questo div largo come 4 colonne viene portato a capo su una nuova linea come un'unità contigua.</div>
  <div class="col-6">.col-6<br>Le colonne successive continuano lungo la nuova riga.</div>
</div>`}}},render:()=>s(o`<div class="row">
        <div class="col-9">.col-9</div>
        <div class="col-4">
          .col-4<br />Dato che 9 + 4 = 13 &gt; 12, questo div largo come 4 colonne viene portato a capo su una nuova
          linea come un'unità contigua.
        </div>
        <div class="col-6">.col-6<br />Le colonne successive continuano lungo la nuova riga.</div>
      </div>`,{className:"bd-example-row"})},U={name:"Interruzione di colonna",tags:["!dev"],parameters:{pageLayout:"w-100",docs:{source:{code:`<div class="row">
  <div class="col-6 col-sm-3">.col-6 .col-sm-3</div>
  <div class="col-6 col-sm-3">.col-6 .col-sm-3</div>
  <!-- Forza le prossime colonne per passare a una nuova riga -->
  <div class="w-100"></div>
  <div class="col-6 col-sm-3">.col-6 .col-sm-3</div>
  <div class="col-6 col-sm-3">.col-6 .col-sm-3</div>
</div>`}}},render:()=>s(o`<div class="row">
        <div class="col-6 col-sm-3">.col-6 .col-sm-3</div>
        <div class="col-6 col-sm-3">.col-6 .col-sm-3</div>
        <!-- Forza le prossime colonne per passare a una nuova riga -->
        <div class="w-100"></div>
        <div class="col-6 col-sm-3">.col-6 .col-sm-3</div>
        <div class="col-6 col-sm-3">.col-6 .col-sm-3</div>
      </div>`,{className:"bd-example-row"})},y={name:"Interruzione di colonna, responsive",tags:["!dev"],parameters:{pageLayout:"w-100",docs:{source:{code:`<div class="row">
  <div class="col-6 col-sm-4">.col-6 .col-sm-4</div>
  <div class="col-6 col-sm-4">.col-6 .col-sm-4</div>
  <!-- Forza le prossime colonne per passare alla nuova riga al breakpoint md e superiori -->
  <div class="w-100 d-none d-md-block"></div>
  <div class="col-6 col-sm-4">.col-6 .col-sm-4</div>
  <div class="col-6 col-sm-4">.col-6 .col-sm-4</div>
</div>`}}},render:()=>s(o`<div class="row">
        <div class="col-6 col-sm-4">.col-6 .col-sm-4</div>
        <div class="col-6 col-sm-4">.col-6 .col-sm-4</div>
        <!-- Forza le prossime colonne per passare alla nuova riga al breakpoint md e superiori -->
        <div class="w-100 d-none d-md-block"></div>
        <div class="col-6 col-sm-4">.col-6 .col-sm-4</div>
        <div class="col-6 col-sm-4">.col-6 .col-sm-4</div>
      </div>`,{className:"bd-example-row"})},L={name:"Riordinamento",tags:["!dev"],parameters:{pageLayout:"w-100",docs:{source:{code:`<div class="container">
  <div class="row">
    <div class="col">Prima, ma non ordinata</div>
    <div class="col order-2">Seconda, ma ultima</div>
    <div class="col order-1">Terza ma prima</div>
  </div>
</div>`}}},render:()=>s(o`<div class="container">
        <div class="row">
          <div class="col">Prima, ma non ordinata</div>
          <div class="col order-2">Seconda, ma ultima</div>
          <div class="col order-1">Terza ma prima</div>
        </div>
      </div>`,{className:"bd-example-row"})},x={name:"Riordinamento first e last",tags:["!dev"],parameters:{pageLayout:"w-100",docs:{source:{code:`<div class="container">
  <div class="row">
    <div class="col order-last">Prima, ma non ordinata</div>
    <div class="col">Seconda, ma non ordinata</div>
    <div class="col order-first">Terza ma prima</div>
  </div>
</div>`}}},render:()=>s(o`<div class="container">
        <div class="row">
          <div class="col order-last">Prima, ma non ordinata</div>
          <div class="col">Seconda, ma non ordinata</div>
          <div class="col order-first">Terza ma prima</div>
        </div>
      </div>`,{className:"bd-example-row"})},R={name:"Offset",tags:["!dev"],parameters:{pageLayout:"w-100",docs:{source:{code:`<div class="row">
  <div class="col-md-4">.col-md-4</div>
  <div class="col-md-4 offset-md-4">.col-md-4 .offset-md-4</div>
</div>
<div class="row">
  <div class="col-md-3 offset-md-3">.col-md-3 .offset-md-3</div>
  <div class="col-md-3 offset-md-3">.col-md-3 .offset-md-3</div>
</div>
<div class="row">
  <div class="col-md-6 offset-md-3">.col-md-6 .offset-md-3</div>
</div>`}}},render:()=>s(o`<div class="row">
          <div class="col-md-4">.col-md-4</div>
          <div class="col-md-4 offset-md-4">.col-md-4 .offset-md-4</div>
        </div>
        <div class="row">
          <div class="col-md-3 offset-md-3">.col-md-3 .offset-md-3</div>
          <div class="col-md-3 offset-md-3">.col-md-3 .offset-md-3</div>
        </div>
        <div class="row">
          <div class="col-md-6 offset-md-3">.col-md-6 .offset-md-3</div>
        </div>`,{className:"bd-example-row"})},N={name:"Offset responsive",tags:["!dev"],parameters:{pageLayout:"w-100",docs:{source:{code:`<div class="row">
  <div class="col-sm-5 col-md-6">.col-sm-5 .col-md-6</div>
  <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0">.col-sm-5 .offset-sm-2 .col-md-6 .offset-md-0</div>
</div>

<div class="row">
  <div class="col-sm-6 col-md-5 col-lg-6">.col-sm-6 .col-md-5 .col-lg-6</div>
  <div class="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">.col-sm-6 .col-md-5 .offset-md-2 .col-lg-6 .offset-lg-0</div>
</div>`}}},render:()=>s(o`<div class="row">
          <div class="col-sm-5 col-md-6">.col-sm-5 .col-md-6</div>
          <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0">.col-sm-5 .offset-sm-2 .col-md-6 .offset-md-0</div>
        </div>

        <div class="row">
          <div class="col-sm-6 col-md-5 col-lg-6">.col-sm-6 .col-md-5 .col-lg-6</div>
          <div class="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">
            .col-sm-6 .col-md-5 .offset-md-2 .col-lg-6 .offset-lg-0
          </div>
        </div>`,{className:"bd-example-row"})},S={name:"Margini forzati tra colonne adiacenti",tags:["!dev"],parameters:{pageLayout:"w-100",docs:{source:{code:`<div class="row">
  <div class="col-md-4">.col-md-4</div>
  <div class="col-md-4 ms-auto">.col-md-4 .ms-auto</div>
</div>
<div class="row">
  <div class="col-md-3 ms-md-auto">.col-md-3 .ms-md-auto</div>
  <div class="col-md-3 ms-md-auto">.col-md-3 .ms-md-auto</div>
</div>
<div class="row">
  <div class="col-auto me-auto">.col-auto .me-auto</div>
  <div class="col-auto">.col-auto</div>
</div>`}}},render:()=>s(o`<div class="row">
          <div class="col-md-4">.col-md-4</div>
          <div class="col-md-4 ms-auto">.col-md-4 .ms-auto</div>
        </div>
        <div class="row">
          <div class="col-md-3 ms-md-auto">.col-md-3 .ms-md-auto</div>
          <div class="col-md-3 ms-md-auto">.col-md-3 .ms-md-auto</div>
        </div>
        <div class="row">
          <div class="col-auto me-auto">.col-auto .me-auto</div>
          <div class="col-auto">.col-auto</div>
        </div>`,{className:"bd-example-row"})},E={name:"Annidamento",tags:["!dev"],parameters:{pageLayout:"w-100",docs:{source:{code:`<div class="row">
  <div class="col-sm-9">
    Livello 1: .col-sm-9
    <div class="row">
      <div class="col-8 col-sm-6">Livello 2: .col-8 .col-sm-6</div>
      <div class="col-4 col-sm-6">Livello 2: .col-4 .col-sm-6</div>
    </div>
  </div>
</div>`}}},render:()=>s(o`<div class="row">
        <div class="col-sm-9">
          Livello 1: .col-sm-9
          <div class="row">
            <div class="col-8 col-sm-6">Livello 2: .col-8 .col-sm-6</div>
            <div class="col-4 col-sm-6">Livello 2: .col-4 .col-sm-6</div>
          </div>
        </div>
      </div>`,{className:"bd-example-row"})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Base',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: \`<div class="container">
  <div class="row">
    <div class="col-sm"> Una di tre colonne </div>
    <div class="col-sm"> Una di tre colonne </div>
    <div class="col-sm">Una di tre colonne</div>
  </div>
</div>\`
      }
    }
  },
  render: () => wrapExample(html\`<div class="container">
        <div class="row">
          <div class="col-sm">Una di tre colonne</div>
          <div class="col-sm">Una di tre colonne</div>
          <div class="col-sm">Una di tre colonne</div>
        </div>
      </div>\`, {
    className: 'bd-example-row'
  })
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Colonne con larghezze omogenee',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: \`<div class="container">
  <div class="row">
    <div class="col">1 di 2</div>
    <div class="col">2 di 2</div>
  </div>
  <div class="row">
    <div class="col">1 di 3</div>
    <div class="col">2 di 3</div>
    <div class="col">3 di 3</div>
  </div>
</div>\`
      }
    }
  },
  render: () => wrapExample(html\`<div class="container">
        <div class="row">
          <div class="col">1 di 2</div>
          <div class="col">2 di 2</div>
        </div>
        <div class="row">
          <div class="col">1 di 3</div>
          <div class="col">2 di 3</div>
          <div class="col">3 di 3</div>
        </div>
      </div>\`, {
    className: 'bd-example-row'
  })
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Colonne con larghezze omogenee, alternativa',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: \`<div class="container">
  <div class="row">
    <div class="col">Colonna</div>
    <div class="col">Colonna</div>
    <div class="w-100"></div>
    <div class="col">Colonna</div>
    <div class="col">Colonna</div>
  </div>
</div>\`
      }
    }
  },
  render: () => wrapExample(html\`<div class="container">
        <div class="row">
          <div class="col">Colonna</div>
          <div class="col">Colonna</div>
          <div class="w-100"></div>
          <div class="col">Colonna</div>
          <div class="col">Colonna</div>
        </div>
      </div>\`, {
    className: 'bd-example-row'
  })
}`,...d.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Impostare la larghezza di una colonna',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: \`<div class="container">
  <div class="row">
    <div class="col">1 di 3</div>
    <div class="col-6">2 di 3 (larga 6/12)</div>
    <div class="col">3 di 3</div>
  </div>
  <div class="row">
    <div class="col">1 di 3</div>
    <div class="col-5">2 di 3 (larga 5/12)</div>
    <div class="col">3 di 3</div>
  </div>
</div>\`
      }
    }
  },
  render: () => wrapExample(html\`<div class="container">
        <div class="row">
          <div class="col">1 di 3</div>
          <div class="col-6">2 di 3 (larga 6/12)</div>
          <div class="col">3 di 3</div>
        </div>
        <div class="row">
          <div class="col">1 di 3</div>
          <div class="col-5">2 di 3 (larga 5/12)</div>
          <div class="col">3 di 3</div>
        </div>
      </div>\`, {
    className: 'bd-example-row'
  })
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Contenuto a larghezza variabile',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: \`<div class="container">
  <div class="row justify-content-md-center">
    <div class="col col-lg-2">1 di 3</div>
    <div class="col-md-auto">Contenuto a larghezza variabile</div>
    <div class="col col-lg-2">3 di 3</div>
  </div>
  <div class="row">
    <div class="col">1 di 3</div>
    <div class="col-md-auto">Contenuto a larghezza variabile</div>
    <div class="col col-lg-2">3 di 3</div>
  </div>
</div>\`
      }
    }
  },
  render: () => wrapExample(html\`<div class="container">
        <div class="row justify-content-md-center">
          <div class="col col-lg-2">1 di 3</div>
          <div class="col-md-auto">Contenuto a larghezza variabile</div>
          <div class="col col-lg-2">3 di 3</div>
        </div>
        <div class="row">
          <div class="col">1 di 3</div>
          <div class="col-md-auto">Contenuto a larghezza variabile</div>
          <div class="col col-lg-2">3 di 3</div>
        </div>
      </div>\`, {
    className: 'bd-example-row'
  })
}`,...i.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'Larghezza identica su più righe',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: \`<div class="row">
  <div class="col">col</div>
  <div class="col">col</div>
  <div class="w-100"></div>
  <div class="col">col</div>
  <div class="col">col</div>
</div>\`
      }
    }
  },
  render: () => wrapExample(html\`<div class="row">
        <div class="col">col</div>
        <div class="col">col</div>
        <div class="w-100"></div>
        <div class="col">col</div>
        <div class="col">col</div>
      </div>\`, {
    className: 'bd-example-row'
  })
}`,...e.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Responsive, per tutti i breakpoint',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: \`<div class="row">
  <div class="col">col</div>
  <div class="col">col</div>
  <div class="col">col</div>
  <div class="col">col</div>
</div>
<div class="row">
  <div class="col-8">col-8</div>
  <div class="col-4">col-4</div>
</div>\`
      }
    }
  },
  render: () => wrapExample(html\`<div class="row">
          <div class="col">col</div>
          <div class="col">col</div>
          <div class="col">col</div>
          <div class="col">col</div>
        </div>
        <div class="row">
          <div class="col-8">col-8</div>
          <div class="col-4">col-4</div>
        </div>\`, {
    className: 'bd-example-row'
  })
}`,...v.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Responsive, raccolti in orizzontale',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: \`<div class="row">
  <div class="col-sm-8">col-sm-8</div>
  <div class="col-sm-4">col-sm-4</div>
</div>
<div class="row">
  <div class="col-sm">col-sm</div>
  <div class="col-sm">col-sm</div>
  <div class="col-sm">col-sm</div>
</div>\`
      }
    }
  },
  render: () => wrapExample(html\`<div class="row">
          <div class="col-sm-8">col-sm-8</div>
          <div class="col-sm-4">col-sm-4</div>
        </div>
        <div class="row">
          <div class="col-sm">col-sm</div>
          <div class="col-sm">col-sm</div>
          <div class="col-sm">col-sm</div>
        </div>\`, {
    className: 'bd-example-row'
  })
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Responsive, mischiare e abbinare',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: \`<!-- Ordina le colonne sui dispositivi mobile creando una larghezza intera e l'altra mezza larghezza -->
<div class="row">
  <div class="col-12 col-md-8">.col-12 .col-md-8</div>
  <div class="col-6 col-md-4">.col-6 .col-md-4</div>
</div>

<!-- Le colonne partono con una larghezza del 50% sui dispositivi mobile e arrivano al 33.3% sui desktop -->
<div class="row">
  <div class="col-6 col-md-4">.col-6 .col-md-4</div>
  <div class="col-6 col-md-4">.col-6 .col-md-4</div>
  <div class="col-6 col-md-4">.col-6 .col-md-4</div>
</div>

<!-- Le colonne sono sempre larghe 50%, su dispositivi mobile e desktop -->
<div class="row">
  <div class="col-6">.col-6</div>
  <div class="col-6">.col-6</div>
</div>\`
      }
    }
  },
  render: () => wrapExample(html\`<!-- Ordina le colonne sui dispositivi mobile creando una larghezza intera e l'altra mezza larghezza -->
        <div class="row">
          <div class="col-12 col-md-8">.col-12 .col-md-8</div>
          <div class="col-6 col-md-4">.col-6 .col-md-4</div>
        </div>

        <!-- Le colonne partono con una larghezza del 50% sui dispositivi mobile e arrivano al 33.3% sui desktop -->
        <div class="row">
          <div class="col-6 col-md-4">.col-6 .col-md-4</div>
          <div class="col-6 col-md-4">.col-6 .col-md-4</div>
          <div class="col-6 col-md-4">.col-6 .col-md-4</div>
        </div>

        <!-- Le colonne sono sempre larghe 50%, su dispositivi mobile e desktop -->
        <div class="row">
          <div class="col-6">.col-6</div>
          <div class="col-6">.col-6</div>
        </div>\`, {
    className: 'bd-example-row'
  })
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Responsive, righe di colonne, eg. 1',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: \`<div class="container">
  <div class="row row-cols-2">
    <div class="col">Colonna</div>
    <div class="col">Colonna</div>
    <div class="col">Colonna</div>
    <div class="col">Colonna</div>
  </div>
</div>\`
      }
    }
  },
  render: () => wrapExample(html\`<div class="container">
        <div class="row row-cols-2">
          <div class="col">Colonna</div>
          <div class="col">Colonna</div>
          <div class="col">Colonna</div>
          <div class="col">Colonna</div>
        </div>
      </div>\`, {
    className: 'bd-example-row'
  })
}`,...m.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Responsive, righe di colonne, eg. 2',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: \`<div class="container">
  <div class="row row-cols-3">
    <div class="col">Colonna</div>
    <div class="col">Colonna</div>
    <div class="col">Colonna</div>
    <div class="col">Colonna</div>
  </div>
</div>\`
      }
    }
  },
  render: () => wrapExample(html\`<div class="container">
        <div class="row row-cols-3">
          <div class="col">Colonna</div>
          <div class="col">Colonna</div>
          <div class="col">Colonna</div>
          <div class="col">Colonna</div>
        </div>
      </div>\`, {
    className: 'bd-example-row'
  })
}`,...t.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Responsive, righe di colonne, eg. 3',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: \`<div class="container">
  <div class="row row-cols-4">
    <div class="col">Colonna</div>
    <div class="col">Colonna</div>
    <div class="col">Colonna</div>
    <div class="col">Colonna</div>
  </div>
</div>\`
      }
    }
  },
  render: () => wrapExample(html\`<div class="container">
        <div class="row row-cols-4">
          <div class="col">Colonna</div>
          <div class="col">Colonna</div>
          <div class="col">Colonna</div>
          <div class="col">Colonna</div>
        </div>
      </div>\`, {
    className: 'bd-example-row'
  })
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Responsive, righe di colonne, eg. 4',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: \`<div class="container">
  <div class="row row-cols-4">
    <div class="col">Colonna</div>
    <div class="col">Colonna</div>
    <div class="col-6">Colonna</div>
    <div class="col">Colonna</div>
  </div>
</div>\`
      }
    }
  },
  render: () => wrapExample(html\`<div class="container">
        <div class="row row-cols-4">
          <div class="col">Colonna</div>
          <div class="col">Colonna</div>
          <div class="col-6">Colonna</div>
          <div class="col">Colonna</div>
        </div>
      </div>\`, {
    className: 'bd-example-row'
  })
}`,...u.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Responsive, righe di colonne, eg. 5',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: \`<div class="container">
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
    <div class="col">Colonna</div>
    <div class="col">Colonna</div>
    <div class="col">Colonna</div>
    <div class="col">Colonna</div>
  </div>
</div>\`
      }
    }
  },
  render: () => wrapExample(html\`<div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
          <div class="col">Colonna</div>
          <div class="col">Colonna</div>
          <div class="col">Colonna</div>
          <div class="col">Colonna</div>
        </div>
      </div>\`, {
    className: 'bd-example-row'
  })
}`,...w.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Allineamento verticale',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: \`<div class="container">
  <div class="row align-items-start" style="min-height: 5rem;">
    <div class="col">Una di tre colonne</div>
    <div class="col">Una di tre colonne</div>
    <div class="col">Una di tre colonne</div>
  </div>
  <div class="row align-items-center" style="min-height: 5rem;">
    <div class="col">Una di tre colonne</div>
    <div class="col">Una di tre colonne</div>
    <div class="col">Una di tre colonne</div>
  </div>
  <div class="row align-items-end" style="min-height: 5rem;">
    <div class="col">Una di tre colonne</div>
    <div class="col">Una di tre colonne</div>
    <div class="col">Una di tre colonne</div>
  </div>
</div>\`
      }
    }
  },
  render: () => wrapExample(html\`<div class="container">
        <div class="row align-items-start" style="min-height: 5rem;">
          <div class="col">Una di tre colonne</div>
          <div class="col">Una di tre colonne</div>
          <div class="col">Una di tre colonne</div>
        </div>
        <div class="row align-items-center" style="min-height: 5rem;">
          <div class="col">Una di tre colonne</div>
          <div class="col">Una di tre colonne</div>
          <div class="col">Una di tre colonne</div>
        </div>
        <div class="row align-items-end" style="min-height: 5rem;">
          <div class="col">Una di tre colonne</div>
          <div class="col">Una di tre colonne</div>
          <div class="col">Una di tre colonne</div>
        </div>
      </div>\`, {
    className: 'bd-example-row'
  })
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Allineamento verticale, misto',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: \`<div class="container">
  <div class="row" style="min-height: 5rem;">
    <div class="col align-self-start">Una di tre colonne</div>
    <div class="col align-self-center">Una di tre colonne</div>
    <div class="col align-self-end">Una di tre colonne</div>
  </div>
</div>\`
      }
    }
  },
  render: () => wrapExample(html\`<div class="container">
        <div class="row" style="min-height: 5rem;">
          <div class="col align-self-start">Una di tre colonne</div>
          <div class="col align-self-center">Una di tre colonne</div>
          <div class="col align-self-end">Una di tre colonne</div>
        </div>
      </div>\`, {
    className: 'bd-example-row bd-example-bg'
  })
}`,...f.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Allineamento orizzontale',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: \`<div class="container">
  <div class="row justify-content-start">
    <div class="col-4">Una di due colonne</div>
    <div class="col-4">Una di due colonne</div>
  </div>
  <div class="row justify-content-center">
    <div class="col-4">Una di due colonne</div>
    <div class="col-4">Una di due colonne</div>
  </div>
  <div class="row justify-content-end">
    <div class="col-4">Una di due colonne</div>
    <div class="col-4">Una di due colonne</div>
  </div>
  <div class="row justify-content-around">
    <div class="col-4">Una di due colonne</div>
    <div class="col-4">Una di due colonne</div>
  </div>
  <div class="row justify-content-between">
    <div class="col-4">Una di due colonne</div>
    <div class="col-4">Una di due colonne</div>
  </div>
</div>\`
      }
    }
  },
  render: () => wrapExample(html\`<div class="container">
        <div class="row justify-content-start">
          <div class="col-4">Una di due colonne</div>
          <div class="col-4">Una di due colonne</div>
        </div>
        <div class="row justify-content-center">
          <div class="col-4">Una di due colonne</div>
          <div class="col-4">Una di due colonne</div>
        </div>
        <div class="row justify-content-end">
          <div class="col-4">Una di due colonne</div>
          <div class="col-4">Una di due colonne</div>
        </div>
        <div class="row justify-content-around">
          <div class="col-4">Una di due colonne</div>
          <div class="col-4">Una di due colonne</div>
        </div>
        <div class="row justify-content-between">
          <div class="col-4">Una di due colonne</div>
          <div class="col-4">Una di due colonne</div>
        </div>
      </div>\`, {
    className: 'bd-example-row bd-example-bg'
  })
}`,...C.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: 'Senza gutter',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: \`<div class="row g-0">
  <div class="col-12 col-sm-6 col-md-8">.col-12 .col-sm-6 .col-md-8</div>
  <div class="col-6 col-md-4">.col-6 .col-md-4</div>
</div>\`
      }
    }
  },
  render: () => wrapExample(html\`<div class="row g-0">
        <div class="col-12 col-sm-6 col-md-8">.col-12 .col-sm-6 .col-md-8</div>
        <div class="col-6 col-md-4">.col-6 .col-md-4</div>
      </div>\`, {
    className: 'bd-example-row'
  })
}`,...z.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Gutter variabile',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: \`<div class="row variable-gutters">
  <div class="col-12 col-sm-6 col-md-8">.col-12 .col-sm-6 .col-md-8</div>
  <div class="col-6 col-md-4">.col-6 .col-md-4</div>
</div>\`
      }
    }
  },
  render: () => wrapExample(html\`<div class="row variable-gutters">
        <div class="col-12 col-sm-6 col-md-8">.col-12 .col-sm-6 .col-md-8</div>
        <div class="col-6 col-md-4">.col-6 .col-md-4</div>
      </div>\`, {
    className: 'bd-example-row'
  })
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Colonna a capo',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: \`<div class="row">
  <div class="col-9">.col-9</div>
  <div class="col-4">.col-4<br>Dato che 9 + 4 = 13 &gt; 12, questo div largo come 4 colonne viene portato a capo su una nuova linea come un'unità contigua.</div>
  <div class="col-6">.col-6<br>Le colonne successive continuano lungo la nuova riga.</div>
</div>\`
      }
    }
  },
  render: () => wrapExample(html\`<div class="row">
        <div class="col-9">.col-9</div>
        <div class="col-4">
          .col-4<br />Dato che 9 + 4 = 13 &gt; 12, questo div largo come 4 colonne viene portato a capo su una nuova
          linea come un'unità contigua.
        </div>
        <div class="col-6">.col-6<br />Le colonne successive continuano lungo la nuova riga.</div>
      </div>\`, {
    className: 'bd-example-row'
  })
}`,...b.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: 'Interruzione di colonna',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: \`<div class="row">
  <div class="col-6 col-sm-3">.col-6 .col-sm-3</div>
  <div class="col-6 col-sm-3">.col-6 .col-sm-3</div>
  <!-- Forza le prossime colonne per passare a una nuova riga -->
  <div class="w-100"></div>
  <div class="col-6 col-sm-3">.col-6 .col-sm-3</div>
  <div class="col-6 col-sm-3">.col-6 .col-sm-3</div>
</div>\`
      }
    }
  },
  render: () => wrapExample(html\`<div class="row">
        <div class="col-6 col-sm-3">.col-6 .col-sm-3</div>
        <div class="col-6 col-sm-3">.col-6 .col-sm-3</div>
        <!-- Forza le prossime colonne per passare a una nuova riga -->
        <div class="w-100"></div>
        <div class="col-6 col-sm-3">.col-6 .col-sm-3</div>
        <div class="col-6 col-sm-3">.col-6 .col-sm-3</div>
      </div>\`, {
    className: 'bd-example-row'
  })
}`,...U.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Interruzione di colonna, responsive',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: \`<div class="row">
  <div class="col-6 col-sm-4">.col-6 .col-sm-4</div>
  <div class="col-6 col-sm-4">.col-6 .col-sm-4</div>
  <!-- Forza le prossime colonne per passare alla nuova riga al breakpoint md e superiori -->
  <div class="w-100 d-none d-md-block"></div>
  <div class="col-6 col-sm-4">.col-6 .col-sm-4</div>
  <div class="col-6 col-sm-4">.col-6 .col-sm-4</div>
</div>\`
      }
    }
  },
  render: () => wrapExample(html\`<div class="row">
        <div class="col-6 col-sm-4">.col-6 .col-sm-4</div>
        <div class="col-6 col-sm-4">.col-6 .col-sm-4</div>
        <!-- Forza le prossime colonne per passare alla nuova riga al breakpoint md e superiori -->
        <div class="w-100 d-none d-md-block"></div>
        <div class="col-6 col-sm-4">.col-6 .col-sm-4</div>
        <div class="col-6 col-sm-4">.col-6 .col-sm-4</div>
      </div>\`, {
    className: 'bd-example-row'
  })
}`,...y.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: 'Riordinamento',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: \`<div class="container">
  <div class="row">
    <div class="col">Prima, ma non ordinata</div>
    <div class="col order-2">Seconda, ma ultima</div>
    <div class="col order-1">Terza ma prima</div>
  </div>
</div>\`
      }
    }
  },
  render: () => wrapExample(html\`<div class="container">
        <div class="row">
          <div class="col">Prima, ma non ordinata</div>
          <div class="col order-2">Seconda, ma ultima</div>
          <div class="col order-1">Terza ma prima</div>
        </div>
      </div>\`, {
    className: 'bd-example-row'
  })
}`,...L.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Riordinamento first e last',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: \`<div class="container">
  <div class="row">
    <div class="col order-last">Prima, ma non ordinata</div>
    <div class="col">Seconda, ma non ordinata</div>
    <div class="col order-first">Terza ma prima</div>
  </div>
</div>\`
      }
    }
  },
  render: () => wrapExample(html\`<div class="container">
        <div class="row">
          <div class="col order-last">Prima, ma non ordinata</div>
          <div class="col">Seconda, ma non ordinata</div>
          <div class="col order-first">Terza ma prima</div>
        </div>
      </div>\`, {
    className: 'bd-example-row'
  })
}`,...x.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: 'Offset',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: \`<div class="row">
  <div class="col-md-4">.col-md-4</div>
  <div class="col-md-4 offset-md-4">.col-md-4 .offset-md-4</div>
</div>
<div class="row">
  <div class="col-md-3 offset-md-3">.col-md-3 .offset-md-3</div>
  <div class="col-md-3 offset-md-3">.col-md-3 .offset-md-3</div>
</div>
<div class="row">
  <div class="col-md-6 offset-md-3">.col-md-6 .offset-md-3</div>
</div>\`
      }
    }
  },
  render: () => wrapExample(html\`<div class="row">
          <div class="col-md-4">.col-md-4</div>
          <div class="col-md-4 offset-md-4">.col-md-4 .offset-md-4</div>
        </div>
        <div class="row">
          <div class="col-md-3 offset-md-3">.col-md-3 .offset-md-3</div>
          <div class="col-md-3 offset-md-3">.col-md-3 .offset-md-3</div>
        </div>
        <div class="row">
          <div class="col-md-6 offset-md-3">.col-md-6 .offset-md-3</div>
        </div>\`, {
    className: 'bd-example-row'
  })
}`,...R.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: 'Offset responsive',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: \`<div class="row">
  <div class="col-sm-5 col-md-6">.col-sm-5 .col-md-6</div>
  <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0">.col-sm-5 .offset-sm-2 .col-md-6 .offset-md-0</div>
</div>

<div class="row">
  <div class="col-sm-6 col-md-5 col-lg-6">.col-sm-6 .col-md-5 .col-lg-6</div>
  <div class="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">.col-sm-6 .col-md-5 .offset-md-2 .col-lg-6 .offset-lg-0</div>
</div>\`
      }
    }
  },
  render: () => wrapExample(html\`<div class="row">
          <div class="col-sm-5 col-md-6">.col-sm-5 .col-md-6</div>
          <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0">.col-sm-5 .offset-sm-2 .col-md-6 .offset-md-0</div>
        </div>

        <div class="row">
          <div class="col-sm-6 col-md-5 col-lg-6">.col-sm-6 .col-md-5 .col-lg-6</div>
          <div class="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">
            .col-sm-6 .col-md-5 .offset-md-2 .col-lg-6 .offset-lg-0
          </div>
        </div>\`, {
    className: 'bd-example-row'
  })
}`,...N.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Margini forzati tra colonne adiacenti',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: \`<div class="row">
  <div class="col-md-4">.col-md-4</div>
  <div class="col-md-4 ms-auto">.col-md-4 .ms-auto</div>
</div>
<div class="row">
  <div class="col-md-3 ms-md-auto">.col-md-3 .ms-md-auto</div>
  <div class="col-md-3 ms-md-auto">.col-md-3 .ms-md-auto</div>
</div>
<div class="row">
  <div class="col-auto me-auto">.col-auto .me-auto</div>
  <div class="col-auto">.col-auto</div>
</div>\`
      }
    }
  },
  render: () => wrapExample(html\`<div class="row">
          <div class="col-md-4">.col-md-4</div>
          <div class="col-md-4 ms-auto">.col-md-4 .ms-auto</div>
        </div>
        <div class="row">
          <div class="col-md-3 ms-md-auto">.col-md-3 .ms-md-auto</div>
          <div class="col-md-3 ms-md-auto">.col-md-3 .ms-md-auto</div>
        </div>
        <div class="row">
          <div class="col-auto me-auto">.col-auto .me-auto</div>
          <div class="col-auto">.col-auto</div>
        </div>\`, {
    className: 'bd-example-row'
  })
}`,...S.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Annidamento',
  tags: ['!dev'],
  parameters: {
    pageLayout: 'w-100',
    docs: {
      source: {
        code: \`<div class="row">
  <div class="col-sm-9">
    Livello 1: .col-sm-9
    <div class="row">
      <div class="col-8 col-sm-6">Livello 2: .col-8 .col-sm-6</div>
      <div class="col-4 col-sm-6">Livello 2: .col-4 .col-sm-6</div>
    </div>
  </div>
</div>\`
      }
    }
  },
  render: () => wrapExample(html\`<div class="row">
        <div class="col-sm-9">
          Livello 1: .col-sm-9
          <div class="row">
            <div class="col-8 col-sm-6">Livello 2: .col-8 .col-sm-6</div>
            <div class="col-4 col-sm-6">Livello 2: .col-4 .col-sm-6</div>
          </div>
        </div>
      </div>\`, {
    className: 'bd-example-row'
  })
}`,...E.parameters?.docs?.source}}};const A=["Base","ColonneConLarghezzeOmogenee","ColonneConLarghezzeOmogeneeAlternativa","ImpostareLaLarghezzaDiUnaColonna","ContenutoALarghezzaVariabile","LarghezzaIdenticaSuPiuRighe","ResponsivePerTuttiIBreakpoint","ResponsiveRaccoltiInOrizzontale","ResponsiveMischiareEAbbinare","ResponsiveRigheDiColonneEg1","ResponsiveRigheDiColonneEg2","ResponsiveRigheDiColonneEg3","ResponsiveRigheDiColonneEg4","ResponsiveRigheDiColonneEg5","AllineamentoVerticale","AllineamentoVerticaleMisto","AllineamentoOrizzontale","SenzaGutter","GutterVariabile","ColonnaACapo","InterruzioneDiColonna","InterruzioneDiColonnaResponsive","Riordinamento","RiordinamentoFirstELast","Offset","OffsetResponsive","MarginiForzatiTraColonneAdiacenti","Annidamento"],D=Object.freeze(Object.defineProperty({__proto__:null,AllineamentoOrizzontale:C,AllineamentoVerticale:g,AllineamentoVerticaleMisto:f,Annidamento:E,Base:l,ColonnaACapo:b,ColonneConLarghezzeOmogenee:c,ColonneConLarghezzeOmogeneeAlternativa:d,ContenutoALarghezzaVariabile:i,GutterVariabile:h,ImpostareLaLarghezzaDiUnaColonna:a,InterruzioneDiColonna:U,InterruzioneDiColonnaResponsive:y,LarghezzaIdenticaSuPiuRighe:e,MarginiForzatiTraColonneAdiacenti:S,Offset:R,OffsetResponsive:N,ResponsiveMischiareEAbbinare:n,ResponsivePerTuttiIBreakpoint:v,ResponsiveRaccoltiInOrizzontale:r,ResponsiveRigheDiColonneEg1:m,ResponsiveRigheDiColonneEg2:t,ResponsiveRigheDiColonneEg3:p,ResponsiveRigheDiColonneEg4:u,ResponsiveRigheDiColonneEg5:w,Riordinamento:L,RiordinamentoFirstELast:x,SenzaGutter:z,__namedExportsOrder:A,default:j},Symbol.toStringTag,{value:"Module"}));export{g as A,l as B,c as C,h as G,a as I,e as L,S as M,R as O,v as R,D as S,d as a,i as b,r as c,n as d,m as e,t as f,p as g,u as h,w as i,f as j,C as k,z as l,b as m,U as n,y as o,L as p,x as q,N as r,E as s};

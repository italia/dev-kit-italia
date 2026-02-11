<script setup>
import { ref } from 'vue';

// Array per l'esempio "More Mode"
const pagesList = Array.from({ length: 50 }, (_, i) => i + 1);

const handlePageSizeChange = (event) => {
  console.log('PageChanger:', event.target.value);
};
</script>

<template>
  <div class="container my-4">
    <h1>Pagination Examples</h1>

    <section class="mb-5">
      <h2>Con pulsanti avanti e indietro</h2>
      <it-pagination value="3">
        <a href="javascript:void(0)" slot="prev">
          <it-icon name="it-chevron-left"></it-icon>
          <span class="visually-hidden">Pagina precedente</span>
        </a>

        <it-pagination-item v-for="n in 5" :key="n" :page="String(n)">
          <a href="javascript:void(0)"> <span class="d-inline-block d-sm-none">Pagina </span>{{ n }} </a>
        </it-pagination-item>

        <a href="javascript:void(0)" slot="next">
          <it-icon name="it-chevron-right"></it-icon>
          <span class="visually-hidden">Pagina successiva</span>
        </a>
      </it-pagination>
    </section>

    <section class="mb-5">
      <h2>Con link testuali</h2>
      <it-pagination value="3">
        <a href="javascript:void(0)" slot="prev">Precedente</a>

        <it-pagination-item v-for="n in 5" :key="n" :page="String(n)">
          <a href="javascript:void(0)"> <span class="d-inline-block d-sm-none">Pagina </span>{{ n }} </a>
        </it-pagination-item>

        <a href="javascript:void(0)" slot="next">Successiva</a>
      </it-pagination>
    </section>

    <section class="mb-5">
      <h2>Allineamento a sinistra</h2>
      <it-pagination value="2" align="start">
        <a href="javascript:void(0)" slot="prev">
          <it-icon name="it-chevron-left"></it-icon>
          <span class="visually-hidden">Pagina precedente</span>
        </a>
        <it-pagination-item v-for="n in 3" :key="n" :page="String(n)">
          <a href="javascript:void(0)"> <span class="d-inline-block d-sm-none">Pagina </span>{{ n }} </a>
        </it-pagination-item>
        <a href="javascript:void(0)" slot="next">
          <it-icon name="it-chevron-right"></it-icon>
          <span class="visually-hidden">Pagina successiva</span>
        </a>
        <p slot="total">Totale 300 elementi</p>
      </it-pagination>
    </section>

    <section class="mb-5">
      <h2>Allineamento centrato</h2>
      <it-pagination value="2" align="center">
        <a href="javascript:void(0)" slot="prev">
          <it-icon name="it-chevron-left"></it-icon>
          <span class="visually-hidden">Pagina precedente</span>
        </a>
        <it-pagination-item v-for="n in 3" :key="n" :page="String(n)">
          <a href="javascript:void(0)"> <span class="d-inline-block d-sm-none">Pagina </span>{{ n }} </a>
        </it-pagination-item>
        <a href="javascript:void(0)" slot="next">
          <it-icon name="it-chevron-right"></it-icon>
          <span class="visually-hidden">Pagina successiva</span>
        </a>
        <p slot="total">Totale 300 elementi</p>
      </it-pagination>
    </section>

    <section class="mb-5">
      <h2>Allineamento a destra</h2>
      <div style="width: 100%">
        <it-pagination value="2" align="end">
          <a href="javascript:void(0)" slot="prev">
            <it-icon name="it-chevron-left"></it-icon>
            <span class="visually-hidden">Pagina precedente</span>
          </a>
          <it-pagination-item v-for="n in 3" :key="n" :page="String(n)">
            <a href="javascript:void(0)"> <span class="d-inline-block d-sm-none">Pagina </span>{{ n }} </a>
          </it-pagination-item>
          <a href="javascript:void(0)" slot="next">
            <it-icon name="it-chevron-right"></it-icon>
            <span class="visually-hidden">Pagina successiva</span>
          </a>
          <p slot="total">Totale 300 elementi</p>
        </it-pagination>
      </div>
    </section>

    <section class="mb-5">
      <h2>Paginazione responsive</h2>
      <it-pagination value="1">
        <a href="javascript:void(0)" slot="prev"><it-icon name="it-chevron-left"></it-icon><span class="visually-hidden">Pagina precedente</span></a>
        <it-pagination-item v-for="n in 5" :key="n" :page="String(n)">
          <a href="javascript:void(0)"> <span class="d-inline-block d-sm-none">Pagina </span>{{ n }} </a>
        </it-pagination-item>
        <a href="javascript:void(0)" slot="next"><it-icon name="it-chevron-right"></it-icon><span class="visually-hidden">Pagina successiva</span></a>
        <p slot="total">Totale 300 elementi</p>
      </it-pagination>
    </section>

    <section class="mb-5">
      <h2>Con numero totale di pagine</h2>
      <it-pagination value="3">
        <a href="javascript:void(0)" slot="prev"><it-icon name="it-chevron-left"></it-icon><span class="visually-hidden">Pagina precedente</span></a>
        <it-pagination-item v-for="n in 5" :key="n" :page="String(n)">
          <a href="javascript:void(0)"> <span class="d-inline-block d-sm-none">Pagina </span>{{ n }} </a>
        </it-pagination-item>
        <a href="javascript:void(0)" slot="next"><it-icon name="it-chevron-right"></it-icon><span class="visually-hidden">Pagina successiva</span></a>
        <p slot="total">Totale 300 elementi</p>
      </it-pagination>
    </section>

    <section class="mb-5">
      <h2>Con selettore pagine</h2>
      <it-pagination value="3">
        <a href="javascript:void(0)" slot="prev"><it-icon name="it-chevron-left"></it-icon><span class="visually-hidden">Pagina precedente</span></a>
        <it-pagination-item v-for="n in 5" :key="n" :page="String(n)">
          <a href="javascript:void(0)"> <span class="d-inline-block d-sm-none">Pagina </span>{{ n }} </a>
        </it-pagination-item>
        <a href="javascript:void(0)" slot="next"><it-icon name="it-chevron-right"></it-icon><span class="visually-hidden">Pagina successiva</span></a>

        <div slot="page-changer">
          <label for="page-size" class="visually-hidden">Elementi per pagina:</label>
          <select id="page-size" class="form-select" style="padding-right: 1.5rem" @change="handlePageSizeChange">
            <option value="10">10/pagina</option>
            <option value="20" selected>20/pagina</option>
            <option value="50">50/pagina</option>
            <option value="100">100/pagina</option>
          </select>
        </div>
      </it-pagination>
    </section>

    <section class="mb-5">
      <h2>Con salto a pagina specifica</h2>
      <it-pagination id="jump" value="5" total="20">
        <a href="javascript:void(0)" slot="prev"><it-icon name="it-chevron-left"></it-icon><span class="visually-hidden">Pagina precedente</span></a>
        <it-pagination-item v-for="n in 5" :key="n" :page="String(n)">
          <a href="javascript:void(0)"> <span class="d-inline-block d-sm-none">Pagina </span>{{ n }} </a>
        </it-pagination-item>
        <a href="javascript:void(0)" slot="next"><it-icon name="it-chevron-right"></it-icon><span class="visually-hidden">Pagina successiva</span></a>

        <div slot="jump-to-page" style="display: flex; align-items: center; gap: 0.5rem">
          <it-input
            id="jumper-example"
            type="number"
            name="jumper-example"
            placeholder="Vai a ..."
            label-hidden
            style="width: 80px"
          >
            <span slot="label">Vai a ...</span>
          </it-input>
        </div>
      </it-pagination>
    </section>

    <section class="mb-5">
      <h2>Simple Mode</h2>
      <it-pagination simple-mode value="1" total="5">
        <a href="javascript:void(0)" slot="prev">
          <it-icon name="it-chevron-left"></it-icon>
          <span class="visually-hidden">Pagina precedente</span>
        </a>
        <a href="javascript:void(0)" slot="next">
          <it-icon name="it-chevron-right"></it-icon>
          <span class="visually-hidden">Pagina successiva</span>
        </a>
      </it-pagination>
    </section>

    <section class="mb-5">
      <h2>More Mode</h2>
      <it-pagination value="25" total="50" visible-pages="5" disable-responsive>
        <a href="javascript:void(0)" slot="prev">
          <it-icon name="it-chevron-left"></it-icon>
          <span class="visually-hidden">Pagina precedente</span>
        </a>

        <it-pagination-item v-for="page in pagesList" :key="page" :page="String(page)">
          <a href="javascript:void(0)"> <span class="d-inline-block d-sm-none">Pagina </span>{{ page }} </a>
        </it-pagination-item>

        <a href="javascript:void(0)" slot="next">
          <it-icon name="it-chevron-right"></it-icon>
          <span class="visually-hidden">Pagina successiva</span>
        </a>
      </it-pagination>
    </section>
  </div>
</template>

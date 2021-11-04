<template>
  <b-card-code title="Goto first/last button type">
    <b-card-text>
      <span>If you prefer to have buttons with the first and last page number to go to the corresponding page, use the </span>
      <code>first-number</code>
      <span> and </span>
      <code>last-number</code>
      <span> props.</span>
    </b-card-text>

    <div>
      <h6>Goto first button number</h6>
      <b-pagination-nav
        v-model="currentPage"
        :number-of-pages="pages"
        base-url="#"
        first-number
      />
    </div>

    <div class="mt-2">
      <h6>Goto last button number</h6>
      <b-pagination-nav
        v-model="currentPage"
        :number-of-pages="pages"
        base-url="#"
        last-number
      />
    </div>

    <div class="mt-2">
      <h6>Goto first and last button number</h6>
      <b-pagination-nav
        v-model="currentPage"
        :number-of-pages="pages"
        base-url="#"
        first-number
        last-number
      />
    </div>

    <template #code>
      {{ codeGoto }}
    </template>
  </b-card-code>
</template>

<script>
import { BPaginationNav, BCardText } from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code'
import { codeGoto } from './code'

export default {
  components: {
    BCardCode,
    BPaginationNav,
    BCardText,
  },
  data() {
    return {
      pages: 100,
      currentPage: 5,
      codeGoto,
    }
  },
}
</script>

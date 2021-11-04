<template>
  <b-card-code title="Pill style">
    <b-card-text>
      <span>Easily switch to pill style buttons by setting the </span>
      <code>pills</code>
      <span> prop</span>
    </b-card-text>

    <div>
      <h6>Small Pills</h6>
      <b-pagination-nav
        pills
        size="sm"
        number-of-pages="10"
        base-url="#"
      />
    </div>

    <div class="mt-2">
      <h6>Default Pills</h6>
      <b-pagination-nav
        pills
        number-of-pages="10"
        base-url="#"
      />
    </div>

    <div class="mt-2">
      <h6>Large Pills</h6>
      <b-pagination-nav
        pills
        size="lg"
        number-of-pages="10"
        base-url="#"
      />
    </div>

    <template #code>
      {{ codePill }}
    </template>
  </b-card-code>
</template>

<script>
import { BPaginationNav, BCardText } from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code'
import { codePill } from './code'

export default {
  components: {
    BCardCode,
    BPaginationNav,
    BCardText,
  },
  data() {
    return {
      codePill,
    }
  },
}
</script>

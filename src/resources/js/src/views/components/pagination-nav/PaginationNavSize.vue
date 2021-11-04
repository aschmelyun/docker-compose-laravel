<template>
  <b-card-code title="Button size">
    <b-card-text>
      <span>Optionally change from the default button size by setting the </span>
      <code>size</code>
      <span> prop to either </span>
      <code>'sm'</code>
      <span> for smaller buttons or </span>
      <code>'lg'</code>
      <span> for larger buttons.</span>
    </b-card-text>

    <div>
      <h6>Small</h6>
      <b-pagination-nav
        size="sm"
        number-of-pages="10"
        base-url="#"
      />
    </div>

    <div class="mt-2">
      <h6>Default</h6>
      <b-pagination-nav
        number-of-pages="10"
        base-url="#"
      />
    </div>

    <div class="mt-2">
      <h6>Large</h6>
      <b-pagination-nav
        size="lg"
        number-of-pages="10"
        base-url="#"
      />
    </div>

    <template #code>
      {{ codeSize }}
    </template>
  </b-card-code>
</template>

<script>
import { BPaginationNav, BCardText } from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code'
import { codeSize } from './code'

export default {
  components: {
    BCardCode,
    BPaginationNav,
    BCardText,
  },
  data() {
    return {
      codeSize,
    }
  },
}
</script>

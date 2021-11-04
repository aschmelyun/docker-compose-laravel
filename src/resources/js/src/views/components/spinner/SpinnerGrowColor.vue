<template>
  <b-card-code title="Colored Growing Spinners">
    <b-card-text class="mb-0">
      <span>The variant prop translates the variant name to the Bootstrap v4 class </span>
      <code>.text-{variant}</code>
      <span>, so if you have custom defined text color </span>
      <code>variants</code>
      <span>, feel free to use them via the variant prop.</span>
    </b-card-text>

    <div class="demo-inline-spacing">
      <b-spinner
        v-for="variant in variants"
        :key="variant"
        :variant="variant"
        class="mr-1"
        type="grow"
      />
    </div>

    <template #code>
      {{ codeGrowColor }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BSpinner, BCardText } from 'bootstrap-vue'
import { codeGrowColor } from './code'

export default {
  components: {
    BCardCode,
    BSpinner,
    BCardText,
  },
  data() {
    return {
      variants: ['primary', 'secondary', 'danger', 'warning', 'success', 'info', 'light', 'dark'],
      codeGrowColor,
    }
  },
}
</script>

<template>
  <b-card-code title="Colored Spinners">
    <b-card-text class="mb-0">
      <span>You can customize the color using the standard text color variants using the </span>
      <code>variant</code>
      <span> prop.</span>
    </b-card-text>

    <div class="demo-inline-spacing">
      <b-spinner
        v-for="variant in variants"
        :key="variant"
        class="mr-1"
        :variant="variant"
      />
    </div>

    <template #code>
      {{ codeBorderColor }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BSpinner, BCardText } from 'bootstrap-vue'
import { codeBorderColor } from './code'

export default {
  components: {
    BCardCode,
    BSpinner,
    BCardText,
  },
  data() {
    return {
      variants: ['primary', 'secondary', 'danger', 'warning', 'success', 'info', 'light', 'dark'],
      codeBorderColor,
    }
  },
}
</script>

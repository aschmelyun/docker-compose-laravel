<template>
  <b-card-code
    title="Default"
  >
    <b-card-text>
      <span>BootstrapVue's custom range component, </span>
      <code>&lt;b-form-rating&gt;</code>
      <span>, is for entering or displaying a rating value.
      </span>
    </b-card-text>

    <b-form-rating
      v-model="value"
      no-border
      variant="warning"
    />

    <template #code>
      {{ codeBasic }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BFormRating, BCardText } from 'bootstrap-vue'
import { codeBasic } from './code'

export default {
  components: {
    BCardCode,
    BFormRating,
    BCardText,
  },
  data() {
    return {
      value: null,
      value2: 2.67,
      codeBasic,
    }
  },
}
</script>

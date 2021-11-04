<template>
  <b-card-code
    title="Validation states"
  >
    <b-card-text>
      <span>When you default to a </span>
      <code>null</code>
      <span> value, and the user has not selected a value, you can use the </span>
      <code>state</code>
      <span> prop to apply one of the contextual validation styles to the component.</span>
    </b-card-text>

    <b-form-spinbutton
      id="sb-inline"
      v-model="value"
      :state="Boolean(value >= 50)"
    />

    <template #code>
      {{ codeValidation }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BFormSpinbutton, BCardText } from 'bootstrap-vue'
import { codeValidation } from './code'

export default {
  components: {
    BFormSpinbutton,
    BCardCode,
    BCardText,
  },
  data() {
    return {
      value: 50,
      codeValidation,
    }
  },
}
</script>

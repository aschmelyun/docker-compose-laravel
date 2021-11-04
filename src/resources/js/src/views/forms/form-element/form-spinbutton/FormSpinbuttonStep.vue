<template>
  <b-card-code
    title="Step"
  >
    <b-card-text>
      <span>The default step increment is </span>
      <code>1</code>
      <span>, and can be changed via the </span>
      <code>step</code>
      <span>prop (decimal values allowed).</span>
      <span>When </span>
      <code>step</code>
      <span> is set, the value will always be a multiple of the step size plus the minimum value.</span>
    </b-card-text>

    <label for="sb-step">Spin button with step of 0.25</label>
    <b-form-spinbutton
      id="sb-step"
      v-model="value1"
      step="0.25"
    />

    <template #code>
      {{ codeStep }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BFormSpinbutton, BCardText } from 'bootstrap-vue'
import { codeStep } from './code'

export default {
  components: {
    BFormSpinbutton,
    BCardCode,
    BCardText,
  },
  data() {
    return {
      value1: 50,
      codeStep,
    }
  },
}
</script>

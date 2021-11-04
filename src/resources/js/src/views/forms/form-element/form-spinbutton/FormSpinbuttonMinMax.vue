<template>
  <b-card-code
    title="Min and Max"
  >
    <b-card-text>
      <span>Spinbuttons have a default range from</span>
      <code>1</code>
      <span> to</span>
      <code>100</code>, which can be changed by setting the
      <code>min</code>
      <span> and </span>
      <code>max</code>
      <span> props.</span>
    </b-card-text>

    <label for="sb-maxmin">Spin button with min 0 and max 10</label>
    <b-form-spinbutton
      id="sb-maxmin"
      v-model="value"
      min="0"
      max="10"
    />

    <template #code>
      {{ codeMinMax }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BFormSpinbutton, BCardText } from 'bootstrap-vue'
import { codeMinMax } from './code'

export default {
  components: {
    BFormSpinbutton,
    BCardCode,
    BCardText,
  },
  data() {
    return {
      value: 5,
      codeMinMax,
    }
  },
}
</script>

<template>
  <b-card-code
    title="Number wrapping"
  >
    <b-card-text>
      <span>To allow the spin button to wrap from max to min when incrementing (or min to max when decrementing), set the
      </span>
      <code>wrap</code>
      <span> prop to </span>
      <code>true</code>
      <span>.</span>
    </b-card-text>

    <label for="sb-wrap">Wrapping value spin button</label>
    <b-form-spinbutton
      id="sb-wrap"
      wrap
      min="1"
      max="25"
      placeholder="--"
    />

    <template #code>
      {{ codeWrap }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BFormSpinbutton, BCardText } from 'bootstrap-vue'
import { codeWrap } from './code'

export default {
  components: {
    BFormSpinbutton,
    BCardCode,
    BCardText,
  },
  data() {
    return {
      codeWrap,

    }
  },
}
</script>

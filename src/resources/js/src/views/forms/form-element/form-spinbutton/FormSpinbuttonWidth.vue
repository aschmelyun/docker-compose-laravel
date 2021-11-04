<template>
  <b-card-code
    title="Width"
  >
    <b-card-text>
      <span>The control (when not </span>
      <code>vertical</code>
      <span> or </span>
      <code>inline</code>
      <span>) will expand to the maximum width of the parent container You can control width via utility classes such as
      </span>
      <code>w-50, w-75, w-100</code>
      <span>, or use styles to set the width.</span>
    </b-card-text>

    <b-form-group>
      <b-form-spinbutton
        v-model="value"
        min="0"
        max="10"
        step="0.125"
        class="w-100"
      />
    </b-form-group>
    <b-form-group>
      <b-form-spinbutton
        v-model="value"
        min="0"
        max="10"
        step="0.125"
        class="w-75"
      />
    </b-form-group>
    <b-form-group>
      <b-form-spinbutton
        v-model="value"
        min="0"
        max="10"
        step="0.125"
        class="w-50"
      />
    </b-form-group>

    <template #code>
      {{ codeWidth }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BFormSpinbutton, BFormGroup, BCardText } from 'bootstrap-vue'
import { codeWidth } from './code'

export default {
  components: {
    BFormSpinbutton,
    BFormGroup,
    BCardText,
    BCardCode,
  },
  data() {
    return {
      value: 0,
      codeWidth,
    }
  },
}
</script>

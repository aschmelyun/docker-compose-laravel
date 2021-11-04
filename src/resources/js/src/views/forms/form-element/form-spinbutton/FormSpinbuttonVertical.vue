<template>
  <b-card-code
    title="Vertical"
  >
    <b-card-text>Spinbuttons can be oriented in vertical mode:</b-card-text>

    <label for="sb-vertical">Vertical spin button</label><br>
    <b-form-spinbutton
      id="sb-vertical"
      v-model="value"
      vertical
    />

    <template #code>
      {{ codeVertical }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BFormSpinbutton, BCardText } from 'bootstrap-vue'
import { codeVertical } from './code'

export default {
  components: {
    BFormSpinbutton,
    BCardCode,
    BCardText,
  },
  data() {
    return {
      value: 50,
      codeVertical,
    }
  },
}
</script>

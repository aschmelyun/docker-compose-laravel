<template>
  <b-card-code title="Color">
    <b-card-text class="mb-0">
      <span>To change the color of the radio use the </span>
      <code>.custom-control-{value}</code>
      <span> for primary, secondary, success, danger, info, warning.</span>
    </b-card-text>

    <div class="demo-inline-spacing">
      <b-form-radio
        v-model="Selected"
        name="some-radio9"
        value="e"
        class="custom-control-primary"
      >
        Primary (Default)
      </b-form-radio>
      <b-form-radio
        v-model="Selected"
        name="some-radio9"
        value="ff"
        class="custom-control-secondary"
      >
        Secondary
      </b-form-radio>
      <b-form-radio
        v-model="Selected"
        name="some-radio9"
        value="g"
        class="custom-control-success"
      >
        Success
      </b-form-radio>
      <b-form-radio
        v-model="Selected"
        name="some-radio9"
        value="i"
        class="custom-control-danger"
      >
        Danger
      </b-form-radio>
      <b-form-radio
        v-model="Selected"
        name="some-radio9"
        value="h"
        class="custom-control-warning"
      >
        Warning
      </b-form-radio>
      <b-form-radio
        v-model="Selected"
        name="some-radio9"
        value="j"
        class="custom-control-info"
      >
        Info
      </b-form-radio>
    </div>

    <template #code>
      {{ codeColor }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BFormRadio, BCardText } from 'bootstrap-vue'
import { codeColor } from './code'

export default {
  components: {
    BCardCode,
    BFormRadio,
    BCardText,
  },
  data() {
    return {
      Selected: 'e',
      codeColor,
    }
  },
}
</script>

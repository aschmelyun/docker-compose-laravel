<template>
  <b-card-code
    title="Basic Timepicker"
  >
    <b-card-text>
      <code>&lt;b-form-timepicker&gt;</code>
      <span>
        is a BootstrapVue custom time picker input form control, which provides full WAI-ARIA compliance and
        internationalization support.
      </span>
    </b-card-text>

    <b-form-timepicker
      v-model="value"
      locale="en"
    />
    <b-card-text class="mt-2 mb-0">
      Value: '{{ value }}'
    </b-card-text>

    <template #code>
      {{ codeBasic }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BFormTimepicker, BCardText } from 'bootstrap-vue'
import { codeBasic } from './code'

export default {
  components: {
    BCardCode,
    BFormTimepicker,
    BCardText,
  },
  data() {
    return {
      value: '',
      codeBasic,
    }
  },
}
</script>

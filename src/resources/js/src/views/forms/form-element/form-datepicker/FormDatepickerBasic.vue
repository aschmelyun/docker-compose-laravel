<template>
  <b-card-code
    title="Basic Datepicker"
  >
    <b-card-text>
      <code>&lt;b-form-datepicker&gt;</code>
      <span>
        is a BootstrapVue custom date picker input form control, which provides full WAI-ARIA compliance and
        internationalization support.
      </span>
    </b-card-text>

    <label for="example-datepicker">Choose a date</label>
    <b-form-datepicker
      id="example-datepicker"
      v-model="value"
      class="mb-1"
    />
    <span>Value: '{{ value }}'</span>

    <template #code>
      {{ codeBasic }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BFormDatepicker, BCardText } from 'bootstrap-vue'
import { codeBasic } from './code'

export default {
  components: {
    BCardCode,
    BCardText,
    BFormDatepicker,
  },
  data() {
    return {
      value: '',
      codeBasic,
    }
  },
}
</script>

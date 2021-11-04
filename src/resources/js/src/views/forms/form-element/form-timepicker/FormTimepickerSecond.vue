<template>
  <b-card-code
    title="Enabling of seconds spinbutton"
  >
    <b-card-text>
      <span>To enable the section of seconds,set the </span>
      <code>show-seconds</code>
      <span> prop to </span>
      <code>true</code>
      <span> to enable the seconds selection spinbutton.</span>
    </b-card-text>

    <b-form-timepicker
      v-model="value"
      show-seconds
      locale="en"
    />
    <b-card-text class="mt-2 mb-0">
      Value: '{{ value }}'
    </b-card-text>

    <template #code>
      {{ codeSecond }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BFormTimepicker, BCardText } from 'bootstrap-vue'
import { codeSecond } from './code'

export default {
  components: {
    BCardCode,
    BFormTimepicker,
    BCardText,
  },
  data() {
    return {
      value: '',
      codeSecond,
    }
  },
}
</script>

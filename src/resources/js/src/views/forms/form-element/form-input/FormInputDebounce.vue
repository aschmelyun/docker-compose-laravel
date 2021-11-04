<template>
  <b-card-code title="Debounce support">
    <b-card-text>
      <span>To enable debouncing, set the prop </span>
      <code>debounce</code>
      <span> to any integer greater than zero. The value is specified in milliseconds. Setting </span>
      <code>debounce</code>
      <span> to </span>
      <code>0</code>
      <span> will disable debouncing.</span>
    </b-card-text>

    <b-form-input
      v-model="value"
      type="text"
      debounce="500"
    />
    <b-card-text class="mt-1 mb-0">
      <strong>Value : </strong><span>{{ value }}</span>
    </b-card-text>

    <template #code>
      {{ codeDebounce }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BFormInput, BCardText } from 'bootstrap-vue'
import { codeDebounce } from './code'

export default {
  components: {
    BCardCode,
    BFormInput,
    BCardText,
  },
  data() {
    return {
      value: '',
      codeDebounce,
    }
  },
}
</script>

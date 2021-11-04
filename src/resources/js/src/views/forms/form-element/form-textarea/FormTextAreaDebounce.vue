<template>
  <b-card-code
    title="Debounce support"
  >
    <b-card-text>
      <span>To enable debouncing, set the prop </span>
      <code>debounce</code>
      <span> to any integer greater than zero. The value is specified in milliseconds. Setting </span>
      <code>debounce</code>
      <span> to </span>
      <code>0</code>
      <span> will disable debouncing.</span>
    </b-card-text>

    <b-form-textarea
      v-model="value"
      debounce="500"
      rows="3"
      max-rows="5"
    />
    <b-card-text class="mt-1 mb-0">
      {{ value }}
    </b-card-text>

    <template #code>
      {{ codeDebounce }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BFormTextarea, BCardText } from 'bootstrap-vue'
import { codeDebounce } from './code'

export default {
  components: {
    BCardCode,
    BFormTextarea,
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

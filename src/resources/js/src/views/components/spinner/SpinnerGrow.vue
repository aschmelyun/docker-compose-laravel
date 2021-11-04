<template>
  <b-card-code
    title="Growing Spinner"
  >
    <b-card-text>
      <span>If you don't fancy a </span>
      <code>border</code>
      <span> spinner, switch to the </span>
      <code>grow</code>
      <span> spinner by setting the prop </span>
      <code>type</code>
      <span> to </span>
      <code>'grow'</code>.
      <span>While it doesn't technically spin, it does repeatedly grow!</span>
    </b-card-text>

    <b-spinner
      type="grow"
      label="Loading..."
    />

    <template #code>
      {{ codeGrow }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BSpinner, BCardText } from 'bootstrap-vue'
import { codeGrow } from './code'

export default {
  components: {
    BCardCode,
    BSpinner,
    BCardText,
  },
  data() {
    return {
      codeGrow,
    }
  },
}
</script>

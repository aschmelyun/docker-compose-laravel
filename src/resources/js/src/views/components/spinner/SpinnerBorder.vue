<template>
  <b-card-code title="Border Spinners">
    <b-card-text>
      <span>Use the default </span>
      <code>border</code>
      <span> type spinners for a lightweight loading indicator.</span>
    </b-card-text>

    <b-spinner label="Loading..." />

    <template #code>
      {{ codeBorder }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BSpinner, BCardText } from 'bootstrap-vue'
import { codeBorder } from './code'

export default {
  components: {
    BCardCode,
    BSpinner,
    BCardText,
  },
  data() {
    return {
      codeBorder,
    }
  },
}
</script>

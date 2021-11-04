<template>
  <b-card-code title="Displayed rows">
    <b-card-text>
      <span>To set the height of </span>
      <code>&lt;b-form-textarea&gt;</code>
      <span>, set the </span>
      <code>rows</code>
      <span> prop to the desired number of rows. If no value is provided to rows, then it will default to 2.</span>
    </b-card-text>

    <b-form-textarea
      id="textarea-rows"
      placeholder="Tall textarea"
      rows="8"
    />

    <template #code>
      {{ codeRows }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BFormTextarea, BCardText } from 'bootstrap-vue'
import { codeRows } from './code'

export default {
  components: {
    BCardCode,
    BFormTextarea,
    BCardText,
  },
  data() {
    return {
      codeRows,
    }
  },
}
</script>

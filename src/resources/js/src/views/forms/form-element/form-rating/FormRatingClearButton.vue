<template>
  <b-card-code
    title="Clear button"
  >
    <b-card-text>
      <span>Optionally show a clear icon via the </span>
      <code>show-clear</code>
      <span> prop. The value will be set to </span>
      <code>null</code>
      <span> when the clear icon is clicked</span>
    </b-card-text>

    <b-form-rating
      v-model="value"
      show-clear
      show-value
      inline
      variant="warning"
    />

    <template #code>
      {{ codeClearButton }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BFormRating, BCardText } from 'bootstrap-vue'
import { codeClearButton } from './code'

export default {
  components: {
    BCardCode,
    BFormRating,
    BCardText,
  },
  data() {
    return {
      value: 2.5,
      codeClearButton,
    }
  },
}
</script>

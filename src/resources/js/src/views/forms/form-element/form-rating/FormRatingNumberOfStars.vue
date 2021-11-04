<template>
  <b-card-code
    title="Number of stars"
  >
    <b-card-text>
      <span> You can change the number of stars via the </span>
      <code>stars</code>
      <span> prop. The minimum allowed stars is </span>
      <code>3</code>
    </b-card-text>

    <label
      for="rating-10"
      class="mr-1"
    >Rating with 10 stars:</label>
    <b-form-rating
      id="rating-10"
      v-model="value10"
      stars="10"
      inline
      no-border
      variant="warning"
    />

    <template #code>
      {{ codeNumber }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BFormRating, BCardText } from 'bootstrap-vue'
import { codeNumber } from './code'

export default {
  components: {
    BCardCode,
    BFormRating,
    BCardText,
  },
  data() {
    return {
      value10: null,
      value7: null,
      codeNumber,
    }
  },
}
</script>

<template>
  <b-card-code
    title="Size"
  >
    <b-card-text>
      <span>Fancy a small or large rating control? Simply set the prop </span>
      <code>size</code>
      <span> to either </span>
      <code>'sm'</code>
      <span> or </span>
      <code>'lg'</code>
      <span> respectively.</span>
    </b-card-text>

    <div class="mb-1">
      <b-form-rating
        id="rating-sm"
        v-model="value"
        size="sm"
        inline

        variant="primary"
      />
    </div>
    <div class="mb-1">
      <b-form-rating
        id="rating-md"
        v-model="value"
        inline

        variant="primary"
      />
    </div>
    <div>
      <b-form-rating
        id="rating-lg"
        v-model="value"
        size="lg"

        inline
        variant="primary"
      />
    </div>

    <template #code>
      {{ codeSize }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BFormRating, BCardText } from 'bootstrap-vue'
import { codeSize } from './code'

export default {
  components: {
    BCardCode,
    BCardText,
    BFormRating,
  },
  data() {
    return {
      value: null,
      codeSize,
    }
  },
}
</script>

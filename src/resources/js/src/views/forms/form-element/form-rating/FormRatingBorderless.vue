<template>
  <b-card-code title="Borderless">
    <b-card-text>
      <span>By default, </span>
      <code>&lt;b-from-rating&gt;</code>
      <span>
        has borders around rating. Simply set the
      </span>
      <code>no-border</code>
      <span> prop to </span>
      <code>true</code>
      <span> to remove border.</span>
    </b-card-text>

    <div>
      <label
        for="rating-sm-no-border"
        class="mr-1"
      >Small rating with no border</label>
      <b-form-rating
        id="rating-sm-no-border"
        v-model="value"
        no-border
        variant="warning"
        inline
        size="sm"
      />
    </div>
    <div class="mt-1">
      <label
        for="rating-md-no-border"
        class="mr-1"
      >Default rating (medium) with border</label>
      <b-form-rating
        id="rating-md-no-border"
        v-model="value"
        variant="warning"
        inline
      />
    </div>
    <div class="mt-1">
      <label
        for="rating-lg-no-border"
        class="mr-1"
      >Large rating with no border</label>
      <b-form-rating
        id="rating-lg-no-border"
        v-model="value"
        no-border
        variant="warning"
        size="lg"
        inline
      />
    </div>

    <template #code>
      {{ codeBorderLess }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BFormRating, BCardText } from 'bootstrap-vue'
import { codeBorderLess } from './code'

export default {
  components: {
    BCardCode,
    BCardText,
    BFormRating,
  },
  data() {
    return {
      value: null,
      codeBorderLess,
    }
  },
}
</script>

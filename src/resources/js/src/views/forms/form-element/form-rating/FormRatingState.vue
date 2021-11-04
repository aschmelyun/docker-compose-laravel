<template>
  <b-card-code
    title="State"
  >
    <b-card-text>
      <span>If you require additional information before a user can chose a ratings value, simply set the </span>
      <code>disabled</code>
      <span> prop to </span>
      <code>true</code>
      <span> to disable any user interactivity on the component. Also you can make ratings readonly using </span>
      <code>readonly</code>
      <span> prop</span>
    </b-card-text>

    <div>
      <label
        class="mr-1 mb-2"
        for="rating-disabled"
      >Readonly rating</label>
      <b-form-rating
        id="rating-disabled"
        variant="warning"
        value="2.75"
        readonly
        no-border
        inline
      />
    </div>

    <div>
      <label
        class="mr-1"
        for="rating-disabled"
      >Disabled rating</label>
      <b-form-rating
        id="rating-disabled"
        value="2.75"
        disabled
        no-border
        inline
      />
    </div>

    <template #code>
      {{ codeDisabled }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BFormRating, BCardText } from 'bootstrap-vue'
import { codeDisabled } from './code'

export default {
  components: {
    BCardCode,
    BFormRating,
    BCardText,
  },
  data() {
    return {
      codeDisabled,
    }
  },
}
</script>

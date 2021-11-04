<template>
  <b-card-code
    title="Show value"
  >
    <b-card-text>
      <span>To show the current rating value simply set the </span>
      <code>show-value</code>
      <span> prop to </span>
      <code>true</code>
      <span>. You can use  </span>
      <code>show-value-max</code>
      <span> and </span>
      <code>precision</code>
      <span> prop to get more conrol over display value</span>
    </b-card-text>

    <div>
      <b-form-rating
        v-model="value"
        show-value
        inline
        no-border
        variant="warning"
        class="d-block"
      />
      <br>
      <b-form-rating
        v-model="value2"
        readonly
        show-value
        show-value-max
        variant="warning"
        inline
        no-border
      />
      <br>
      <b-form-rating
        v-model="value2"
        readonly
        show-value
        variant="warning"
        inline
        no-border
        precision="2"
      />
    </div>

    <template #code>
      {{ codeShowValue }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BFormRating, BCardText } from 'bootstrap-vue'
import { codeShowValue } from './code'

export default {
  components: {
    BCardCode,
    BFormRating,
    BCardText,
  },
  data() {
    return {
      value: 4,
      value2: 3.5505,
      codeShowValue,
    }
  },
}
</script>

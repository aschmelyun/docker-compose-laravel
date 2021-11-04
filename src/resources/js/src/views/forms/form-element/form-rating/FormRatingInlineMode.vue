<template>
  <b-card-code
    title="Inline mode"
  >
    <b-card-text>
      <span>By default, </span>
      <code>&lt;b-form-rating&gt;</code>
      <span>
        occupies 100% width of the parent container. In some situations you may prefer the custom input to occupy on the
        space required for it's contents. Simply set the
      </span>
      <code>inline</code>
      <span> prop to </span>
      <code>true</code>
      <span> to render the component in inline mode:</span>
    </b-card-text>

    <label
      for="rating-inline"
      class="mr-1"
    >Inline rating:</label>
    <b-form-rating
      id="rating-inline"
      inline
      no-border
      variant="warning"
      value="4"
    />

    <template #code>
      {{ codeInline }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BFormRating, BCardText } from 'bootstrap-vue'
import { codeInline } from './code'

export default {
  components: {
    BCardCode,
    BFormRating,
    BCardText,
  },
  data() {
    return {
      codeInline,
    }
  },
}
</script>

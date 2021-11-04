<template>
  <b-card-code
    title="Counter"
  >
    <b-card-text>
      There are times when we need the user to only enter a certain number of characters for it, we have the property
      counter, the value is a number and determines the maximum.
    </b-card-text>

    <b-form-textarea
      v-model="value"
      placeholder="Counter"
      rows="3"
      :state="value.length <= maxChar"
      class="char-textarea"
      :class="value.length >= maxChar ? 'text-danger' : ''"
    />
    <small
      class="textarea-counter-value float-right"
      :class="value.length >= maxChar ? 'bg-danger' : ''"
    >
      <span class="char-count">{{ value.length }}</span> / {{ maxChar }}
    </small>

    <template #code>
      {{ codeCounter }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BFormTextarea, BCardText } from 'bootstrap-vue'
import { codeCounter } from './code'

export default {
  components: {
    BCardCode,
    BCardText,
    BFormTextarea,
  },
  data() {
    return {
      value: '',
      maxChar: 20,
      codeCounter,
    }
  },
}
</script>

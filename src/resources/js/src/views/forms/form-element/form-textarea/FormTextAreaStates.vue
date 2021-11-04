<template>
  <b-card-code title="Contextual states">
    <b-card-text>
      <span>Bootstrap includes validation styles for </span>
      <code>valid</code>
      <span> and </span>
      <code>invalid</code>
      <span> states on most form controls.</span>
    </b-card-text>

    <b-form-textarea
      id="textarea-state"
      v-model="text"
      :state="text.length <= 10"
      placeholder="Enter only 10 characters"
      rows="3"
    />

    <template #code>
      {{ codeStates }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BFormTextarea, BCardText } from 'bootstrap-vue'
import { codeStates } from './code'

export default {
  components: {
    BCardCode,
    BFormTextarea,
    BCardText,
  },
  data() {
    return {
      text: '',
      codeStates,
    }
  },
}
</script>

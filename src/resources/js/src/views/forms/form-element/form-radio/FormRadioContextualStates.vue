<template>
  <b-card-code title="Contextual states">
    <b-card-text class="mb-0">
      <span>Bootstrap includes validation styles for </span>
      <code>valid</code>
      <span> and </span>
      <code>invalid</code>
      <span> states on most form controls.</span>
    </b-card-text>

    <div>
      <b-form-radio-group
        v-model="value"
        :options="options"
        :state="state"
        class="demo-inline-spacing"
        name="radio-validation"
      >
        <b-form-invalid-feedback :state="state">
          Please select one
        </b-form-invalid-feedback>
        <b-form-valid-feedback :state="state">
          Thank you
        </b-form-valid-feedback>
      </b-form-radio-group>
    </div>

    <template #code>
      {{ codeStates }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import {
  BFormRadioGroup, BFormInvalidFeedback, BFormValidFeedback, BCardText,
} from 'bootstrap-vue'
import { codeStates } from './code'

export default {
  components: {
    BCardCode,
    BCardText,
    BFormRadioGroup,
    BFormInvalidFeedback,
    BFormValidFeedback,
  },
  data() {
    return {
      value: null,
      options: [
        { text: 'First radio', value: 'first' },
        { text: 'Second radio', value: 'second' },
        { text: 'Third radio', value: 'third' },
      ],
      codeStates,
    }
  },
  computed: {
    state() {
      return Boolean(this.value)
    },
  },
}
</script>

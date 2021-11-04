<template>
  <b-card-code
    title="Contextual state and validation"
  >
    <b-card-text>
      <span>Bootstrap includes validation styles for </span>
      <code>valid</code>
      <span> and </span>
      <code>invalid</code>
      <span> states on most form controls.</span>
    </b-card-text>

    <div>
      <b-form-checkbox-group
        v-model="value"
        :options="options"
        :state="state"
        class="demo-inline-spacing"
        name="checkbox-validation"
      >
        <b-form-invalid-feedback :state="state">
          Please select two
        </b-form-invalid-feedback>
        <b-form-valid-feedback :state="state">
          Thank you
        </b-form-valid-feedback>
      </b-form-checkbox-group>
    </div>

    <template #code>
      {{ codeStates }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import {
  BFormCheckboxGroup, BFormInvalidFeedback, BFormValidFeedback, BCardText,
} from 'bootstrap-vue'
import { codeStates } from './code'

export default {
  components: {
    BFormCheckboxGroup,
    BFormInvalidFeedback,
    BFormValidFeedback,
    BCardText,
    BCardCode,
  },
  data() {
    return {
      value: [],
      options: [
        { text: 'First Check', value: 'first' },
        { text: 'Second Check', value: 'second' },
        { text: 'Third Check', value: 'third' },
      ],
      codeStates,
    }
  },
  computed: {
    state() {
      return this.value.length === 2
    },
  },
}
</script>

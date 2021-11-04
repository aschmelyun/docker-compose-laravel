<template>
  <b-card-code title="Contextual states">
    <b-card-text>
      <span>Use </span>
      <code>&lt;b-form-valid-feedback&gt;</code>
      <span> and </span>
      <code>&lt;b-form-invalid-feedback&gt;</code>
      <span> form sub-components for input validation.</span>
    </b-card-text>

    <b-row>

      <!-- valid input -->
      <b-col md="6">
        <b-form-group
          label="Valid State"
          label-for="input-valid"
        >
          <b-form-input
            id="input-valid"
            :state="true"
            placeholder="Valid"
          />
          <b-form-valid-feedback>
            This is valid state.
          </b-form-valid-feedback>
        </b-form-group>
      </b-col>

      <!-- invalid input -->
      <b-col md="6">
        <b-form-group
          label="Invalid State"
          label-for="input-invalid"
        >
          <b-form-input
            id="input-invalid"
            :state="false"
            placeholder="Invalid"
          />
          <b-form-invalid-feedback>
            This is invalid state.
          </b-form-invalid-feedback>
        </b-form-group>
      </b-col>
    </b-row>

    <template #code>
      {{ codeStates }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import {
  BFormInput, BRow, BCol, BFormInvalidFeedback, BFormValidFeedback, BCardText, BFormGroup,
} from 'bootstrap-vue'
import { codeStates } from './code'

export default {
  components: {
    BCardCode,
    BFormInput,
    BCardText,
    BFormInvalidFeedback,
    BFormValidFeedback,
    BRow,
    BFormGroup,
    BCol,
  },
  data() {
    return {
      codeStates,
    }
  },
}
</script>

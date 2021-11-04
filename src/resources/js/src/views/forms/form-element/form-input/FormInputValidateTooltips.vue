<template>
  <b-card-code title="Input Validation States with Tootltips">
    <b-card-text>
      <span>Use </span>
      <code>tooltip</code>
      <span> true in </span>
      <code>&lt;b-form-valid-feedback&gt;</code>
      <span> and </span>
      <code>&lt;b-form-invalid-feedback&gt;</code>
      <span> form sub-components.</span>
    </b-card-text>
    <b-form
      novalidate
      class="needs-validation"
      @submit.prevent
    >
      <b-form-row>

        <!-- valid input  -->
        <b-col
          md="4"
          class="mb-3"
        >
          <label for="input-valid1">Valid Input:</label>
          <b-form-input
            id="input-valid1"
            v-model="value1"
            :state="value1.length > 0"
            placeholder="Valid input"
          />
          <b-form-valid-feedback
            tooltip
          >
            Looks good!
          </b-form-valid-feedback>
          <b-form-invalid-feedback
            tooltip
          >
            Please provide a valid input.
          </b-form-invalid-feedback>
        </b-col>

        <!-- invalid input -->
        <b-col
          md="4"
          class="mb-3"
        >
          <label for="input-invalid1">Invalid Input:</label>
          <b-form-input
            id="input-invalid1"
            v-model="value2"
            :state="value2.length > 0"
            placeholder="Invalid input"
          />
          <b-form-valid-feedback tooltip>
            Looks good!
          </b-form-valid-feedback>
          <b-form-invalid-feedback
            tooltip
          >
            Please provide a valid input.
          </b-form-invalid-feedback>
        </b-col>

        <!-- invalid input -->
        <b-col
          md="4"
          class="mb-3"
        >
          <label for="input-invalid2">Invalid Input:</label>
          <b-form-input
            id="input-invalid2"
            v-model="value3"
            :state="value3.length > 0"
            placeholder="Invalid input"
          />
          <b-form-valid-feedback tooltip>
            Looks good!
          </b-form-valid-feedback>
          <b-form-invalid-feedback tooltip>
            Please provide a valid city.
          </b-form-invalid-feedback>
        </b-col>

        <!-- submit button -->
        <b-col
          cols="12"
        >
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            type="submit"
            variant="primary"
          >
            Submit
          </b-button>
        </b-col>
      </b-form-row>
    </b-form>
    <template #code>
      {{ codeValidateTooltips }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import {
  BFormInput, BCol, BCardText, BForm, BFormRow, BFormValidFeedback, BFormInvalidFeedback, BButton,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { codeValidateTooltips } from './code'

export default {
  components: {
    BCardCode,
    BFormInput,
    BCardText,
    BForm,
    BButton,
    BFormRow,
    BFormValidFeedback,
    BFormInvalidFeedback,
    BCol,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      value1: 'John',
      value2: 'Doe',
      value3: '',
      codeValidateTooltips,
    }
  },
}
</script>

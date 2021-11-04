<template>
  <b-card-code title="Disabled and readonly states">
    <b-card-text>
      <code>Setting the </code>
      <code>disabled</code>
      <span> prop will remove all interactivity of the </span>
      <code>&lt;b-form-datepicker&gt;</code>
      <span> component. Setting the </span>
      <code>readonly</code>
      <span> prop will disable selecting a date.</span>
    </b-card-text>

    <div>
      <b-form-group label="Select date picker interactive state">
        <b-form-radio-group
          v-model="state"
          aria-controls="ex-disabled-readonly"
        >
          <b-form-radio value="disabled">
            Disabled
          </b-form-radio>
          <b-form-radio value="readonly">
            Readonly
          </b-form-radio>
          <b-form-radio value="normal">
            Normal
          </b-form-radio>
        </b-form-radio-group>
      </b-form-group>

      <!-- date picker -->
      <b-form-datepicker
        id="ex-disabled-readonly"
        :disabled="disabled"
        :readonly="readonly"
      />
    </div>

    <template #code>
      {{ codeState }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import {
  BFormDatepicker, BFormGroup, BFormRadio, BFormRadioGroup, BCardText,
} from 'bootstrap-vue'
import { codeState } from './code'

export default {
  components: {
    BCardCode,
    BCardText,
    BFormDatepicker,
    BFormGroup,
    BFormRadio,
    BFormRadioGroup,
  },
  data() {
    return {
      state: 'disabled',
      codeState,
    }
  },
  computed: {
    disabled() {
      return this.state === 'disabled'
    },
    readonly() {
      return this.state === 'readonly'
    },
  },
}
</script>

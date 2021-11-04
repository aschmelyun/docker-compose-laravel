<template>
  <b-card-code
    title="Disabled and readonly states"
  >
    <b-card-text>
      <span>Setting the </span>
      <code>disabled</code>
      <span> prop will remove all interactivity of the </span>
      <code>&lt;b-form-timepicker&gt;</code>
      <span> component.</span>
    </b-card-text>

    <b-card-text>
      <span>Setting the </span>
      <code>readonly</code>
      <span>
        prop will disable selecting a time, but will keep the component interactive, allowing for tabbing between
        spinbuttons. The
      </span>
      <code>v-model</code>
      <span> will not be updated in the readonly state.</span>
    </b-card-text>

    <div>
      <b-form-group label="Select time picker interactive state">
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
      <b-form-timepicker
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
  BFormTimepicker, BFormGroup, BFormRadioGroup, BFormRadio, BCardText,
} from 'bootstrap-vue'
import { codeState } from './code'

export default {
  components: {
    BCardCode,
    BFormTimepicker,
    BFormGroup,
    BFormRadioGroup,
    BFormRadio,
    BCardText,
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

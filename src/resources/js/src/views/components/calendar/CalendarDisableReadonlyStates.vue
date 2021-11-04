<template>
  <b-card-code
    title="Disabled and readonly states"
  >
    <b-card-text>
      <span>Setting the </span>
      <code>disabled</code>
      <span> prop will remove all interactivity of the </span>
      <code>&lt;b-calendar&gt;</code>
      <span> component.</span>
      <span> Setting the </span>
      <code>readonly</code>
      <span> prop will disable selecting a date.</span>
    </b-card-text>

    <div class="d-flex justify-content-center">
      <div>

        <!-- checkbox -->
        <b-form-group label="Select calendar interactive state">
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

        <!-- calendar -->
        <b-calendar
          id="ex-disabled-readonly"
          :disabled="disabled"
          :readonly="readonly"
        />
      </div>
    </div>

    <template #code>
      {{ codeStates }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import {
  BFormGroup, BFormRadioGroup, BFormRadio, BCalendar, BCardText,
} from 'bootstrap-vue'
import { codeStates } from './code'

export default {
  components: {
    BCardCode,
    BFormGroup,
    BFormRadioGroup,
    BFormRadio,
    BCalendar,
    BCardText,
  },
  data() {
    return {
      state: 'disabled',
      codeStates,
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

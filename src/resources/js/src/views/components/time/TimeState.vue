<template>
  <b-card-code title="Disabled and readonly states">
    <div>
      <b-form-group label="Select time interactive state">
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

      <!-- time -->
      <b-time
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
  BFormRadioGroup, BFormGroup, BFormRadio, BTime,
} from 'bootstrap-vue'
import { codeState } from './code'

export default {
  components: {
    BCardCode,
    BTime,
    BFormRadioGroup,
    BFormGroup,
    BFormRadio,
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

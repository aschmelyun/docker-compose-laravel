<template>
  <b-card-code title="Custom Radio Buttons">
    <b-card-text class="mb-0">
      For cross browser consistency, <code>&lt;b-form-radio-group&gt;</code> and <code>&lt;b-form-radio&gt;</code> uses Bootstrap's custom radio input to replace the browser default radio input.
    </b-card-text>

    <div class="demo-inline-spacing">
      <b-form-radio
        v-model="Selected"
        name="some-radios"
        value="A"
      >
        Checked
      </b-form-radio>
      <b-form-radio
        v-model="Selected"
        name="some-radios"
        value="B"
      >
        Unchecked
      </b-form-radio>
      <b-form-radio
        v-model="Selected1"
        name="some-radios2"
        value="c"
        disabled
      >
        Checked Disabled
      </b-form-radio>
      <b-form-radio
        v-model="Selected1"
        name="some-radios2"
        value="d"
        disabled
      >
        Unchecked Disabled
      </b-form-radio>
    </div>

    <template #code>
      {{ codeCustom }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BFormRadio, BCardText } from 'bootstrap-vue'
import { codeCustom } from './code'

export default {
  components: {
    BCardCode,
    BCardText,
    BFormRadio,
  },
  data() {
    return {
      Selected: 'A',
      Selected1: 'c',
      codeCustom,
    }
  },
}
</script>

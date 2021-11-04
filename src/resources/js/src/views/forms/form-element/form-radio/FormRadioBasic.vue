<template>
  <b-card-code title="Basic Radio Buttons">
    <b-card-text class="mb-0">
      You can have <code>&lt;b-form-radio&gt;</code> and <code>&lt;b-form-radio-group&gt;</code> render a browser native-styled radio input by setting the plain prop.
    </b-card-text>

    <div class="demo-inline-spacing">
      <b-form-radio
        v-model="Selected"
        plain
        name="some-radios3"
        value="A"
      >
        Checked
      </b-form-radio>
      <b-form-radio
        v-model="Selected"
        plain
        name="some-radios3"
        value="B"
      >
        Unchecked
      </b-form-radio>
      <b-form-radio
        v-model="Selected1"
        plain
        name="some-radios4"
        value="c"
        disabled
      >
        Checked Disabled
      </b-form-radio>
      <b-form-radio
        v-model="Selected1"
        plain
        name="some-radios4"
        value="d"
        disabled
      >
        Unchecked Disabled
      </b-form-radio>
    </div>

    <template #code>
      {{ codeBasic }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BFormRadio, BCardText } from 'bootstrap-vue'
import { codeBasic } from './code'

export default {
  components: {
    BCardCode,
    BCardText,
    BFormRadio,
  },
  data() {
    return {
      codeBasic,
      Selected: 'A',
      Selected1: 'c',
    }
  },
}
</script>

<template>
  <b-card-code title="Enabling of seconds spinbutton">
    <b-card-text>
      <span>By default, the seconds spinbutton is not shown. To enable the section of seconds, set the </span>
      <code>show-seconds</code>
      <span> prop to </span>
      <code>true</code>
    </b-card-text>

    <div>
      <b-time
        v-model="value"
        show-seconds
        locale="en"
      />
      <div class="mt-1">
        Value: '{{ value }}'
      </div>
    </div>

    <template #code>
      {{ codeSpinbutton }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BTime, BCardText } from 'bootstrap-vue'
import { codeSpinbutton } from './code'

export default {
  components: {
    BCardCode,
    BTime,
    BCardText,
  },
  data() {
    return {
      value: '',
      codeSpinbutton,
    }
  },
}
</script>

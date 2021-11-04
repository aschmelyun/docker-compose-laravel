<template>
  <b-card-code
    title="Disabled and readonly states"
  >
    <b-card-text>
      <span>Setting the prop </span>
      <code>disabled</code>
      <span> places the component in a disabled, non-interactive state. The </span>
      <code>readonly</code>
      <span>
        prop places the component in a readonly state (focusable, but the value cannot be changed by the user).
      </span>
    </b-card-text>

    <b-row>
      <b-col
        md="6"
        class="mb-2"
      >
        <label for="sb-disabled">Disabled spin button</label>
        <b-form-spinbutton
          id="sb-disabled"
          v-model="value"
          disabled
        />
      </b-col>
      <b-col
        md="6"
        class="mb-2"
      >
        <label
          for="sb-readonly"
          class=""
        >Readonly spin button</label>
        <b-form-spinbutton
          id="sb-readonly"
          v-model="value"
          readonly
        />
      </b-col>
    </b-row>

    <template #code>
      {{ codeDisabledReadonly }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import {
  BFormSpinbutton, BRow, BCol, BCardText,
} from 'bootstrap-vue'
import { codeDisabledReadonly } from './code'

export default {
  components: {
    BFormSpinbutton,
    BCardCode,
    BCardText,
    BRow,
    BCol,
  },
  data() {
    return {
      value: 50,
      codeDisabledReadonly,
    }
  },
}
</script>

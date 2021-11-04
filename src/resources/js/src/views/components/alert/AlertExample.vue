<template>
  <b-card-code title="Example">
    <b-card-text>
      <span>Use the </span>
      <code>show</code>
      <span> prop to control the visibility state of the alert.
        By default alerts are not shown. Set the prop </span>
      <code>show</code>
      <span> to explicitly display them.</span>
    </b-card-text>

    <b-form-group>
      <label>Enter only numbers</label>
      <b-form-input
        v-model="value"
        class="w-25 w-sm-100"
        placeholder="0123456789"
        @keyup="validateInput"
      />
    </b-form-group>

    <!-- alert -->
    <b-alert
      v-height-fade.appear
      variant="danger"
      :show="show"
      class="mb-0"
    >
      <div class="alert-body">
        <feather-icon
          icon="InfoIcon"
          class="mr-50"
        />
        the value is invalid you can only enter numbers
      </div>
    </b-alert>

    <template #code>
      {{ codeExample }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import {
  BAlert, BFormGroup, BFormInput, BCardText,
} from 'bootstrap-vue'
import { heightFade } from '@core/directives/animations'
import { codeExample } from './code'

export default {
  components: {
    BCardCode,
    BAlert,
    BFormGroup,
    BFormInput,
    BCardText,
  },
  directives: {
    'height-fade': heightFade,
  },
  data() {
    return {
      value: '',
      show: true,
      codeExample,
    }
  },
  methods: {
    validateInput() {
      if (/^\d+$/.test(this.value)) {
        this.show = false
      } else {
        this.show = true
      }
    },
  },
}
</script>

<template>
  <b-card-code title="Custom Checkboxes">
    <b-card-text class="mb-0">
      <span>For cross browser consistency, </span>
      <code>&lt;b-form-checkbox-group&gt;</code>
      <span> and </span>
      <code>&lt;b-form-checkbox&gt;</code>
      <span>
        use Bootstrap's custom checkbox input to replace the browser default checkbox input.
      </span>
    </b-card-text>

    <div class="demo-inline-spacing">
      <b-form-checkbox
        v-model="selected"
        value="A"
      >
        Checked
      </b-form-checkbox>
      <b-form-checkbox
        v-model="selected"
        value="B"
      >
        Unchecked
      </b-form-checkbox>
      <b-form-checkbox
        v-model="selected"
        value="C"
        disabled
      >
        Checked disabled
      </b-form-checkbox>
      <b-form-checkbox
        v-model="selected"
        value="D"
        disabled
      >
        Unchecked disabled
      </b-form-checkbox>
    </div>

    <template #code>
      {{ codeCustom }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BFormCheckbox, BCardText } from 'bootstrap-vue'
import { codeCustom } from './code'

export default {
  components: {
    BCardCode,
    BFormCheckbox,
    BCardText,
  },
  data() {
    return {
      selected: ['B', 'C'],
      codeCustom,
    }
  },
}
</script>

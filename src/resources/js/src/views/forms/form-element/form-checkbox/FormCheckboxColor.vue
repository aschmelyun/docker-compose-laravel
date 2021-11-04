<template>
  <b-card-code title="Color">
    <b-card-text class="mb-0">
      <span>To change the color of the checkBox use the </span>
      <code>.custom-control-{value}</code>
      <span> for primary, secondary, success, danger, info, warning.</span>
    </b-card-text>

    <!-- color -->
    <div class="demo-inline-spacing">
      <b-form-checkbox
        v-model="selected"
        value="A"
        class="custom-control-primary"
      >
        Primary
      </b-form-checkbox>
      <b-form-checkbox
        v-model="selected"
        value="CC"
        class="custom-control-secondary"
      >
        Secondary
      </b-form-checkbox>
      <b-form-checkbox
        v-model="selected"
        value="C"
        class="custom-control-success"
      >
        Success
      </b-form-checkbox>

      <b-form-checkbox
        v-model="selected"
        value="F"
        class="custom-control-danger"
      >
        Danger
      </b-form-checkbox>

      <b-form-checkbox
        v-model="selected"
        value="D"
        class="custom-control-warning"
      >
        Warning
      </b-form-checkbox>
      <b-form-checkbox
        v-model="selected"
        value="G"
        class="custom-control-info"
      >
        Info
      </b-form-checkbox>
    </div>

    <template #code>
      {{ codeColor }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BFormCheckbox, BCardText } from 'bootstrap-vue'
import { codeColor } from './code'

export default {
  components: {
    BCardCode,
    BFormCheckbox,
    BCardText,
  },
  data() {
    return {
      selected: ['A', 'C', 'CC', 'B', 'D', 'E', 'F', 'G'],
      codeColor,
    }
  },
}
</script>

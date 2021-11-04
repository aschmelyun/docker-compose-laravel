<template>
  <b-card-code title="Disable resize handle">
    <b-card-text>
      <span>
        Some web browsers will allow the user to re-size the height of the textarea. To disable this feature, set the
      </span>
      <code>no-resize</code>
      <span> prop to </span>
      <code>true</code>
      <span>.</span>
    </b-card-text>

    <b-form-textarea
      id="textarea-no-resize"
      placeholder="Fixed height textarea"
      rows="3"
      no-resize
    />

    <template #code>
      {{ codeDisableResize }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BFormTextarea, BCardText } from 'bootstrap-vue'
import { codeDisableResize } from './code'

export default {
  components: {
    BCardCode,
    BFormTextarea,
    BCardText,
  },
  data() {
    return {
      codeDisableResize,
    }
  },
}
</script>

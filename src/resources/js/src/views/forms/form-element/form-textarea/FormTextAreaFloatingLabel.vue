<template>
  <b-card-code title="Floating Label">
    <b-card-text>
      <span>Use </span>
      <code>.form-label-group</code>
      <span> to add a Floating Label with Textarea.</span>
    </b-card-text>

    <div class="form-label-group mt-2 mb-0">
      <b-form-textarea
        id="textarea"
        rows="3"
        placeholder="Label in Textarea"
      />
      <label for="label-textarea">Label in Textarea</label>
    </div>

    <template #code>
      {{ codeFloatingLabel }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BFormTextarea, BCardText } from 'bootstrap-vue'
import { codeFloatingLabel } from './code'

export default {
  components: {
    BCardCode,
    BCardText,
    BFormTextarea,
  },
  data() {
    return {
      codeFloatingLabel,
    }
  },
}
</script>

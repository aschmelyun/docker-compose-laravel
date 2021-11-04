<template>
  <b-card-code
    title="Tags Basic"
  >
    <b-card-text>
      <span>Tags are added by clicking the</span>
      <code>Add</code>
      <span> button, pressing the</span>
      <code>Enter</code>
      <span> key or optionally when the</span>
      <code>change</code>
      <span> event fires on the new tag input.</span>
    </b-card-text>

    <div>
      <label for="tags-basic">Type a new tag and press enter</label>
      <b-form-tags
        v-model="value"
        input-id="tags-basic"
        class="mb-2"
      />
      <b-card-text>Value: {{ value }}</b-card-text>
    </div>

    <template #code>
      {{ codeBasic }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BFormTags, BCardText } from 'bootstrap-vue'
import { codeBasic } from './code'

export default {
  components: {
    BCardCode,
    BFormTags,
    BCardText,
  },
  data() {
    return {
      value: ['apple', 'orange'],
      codeBasic,
    }
  },
}
</script>

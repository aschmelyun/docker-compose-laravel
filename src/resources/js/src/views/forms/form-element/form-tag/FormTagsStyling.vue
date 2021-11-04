<template>
  <b-card-code
    title="Styling Options"
  >
    <b-card-text>
      <span>Several props are available to alter the basic styling of the default tagged interface:</span>
      <code>tag-pills, tag-variant, size, placeholder, state, disabled</code>
    </b-card-text>

    <div>
      <label for="tags-pills">Enter tags</label>
      <b-form-tags
        v-model="value"
        input-id="tags-pills"
        tag-variant="primary"
        tag-pills
        size="lg"
        separator=" "
        placeholder="Enter new tags separated by space"
        class="mb-2"
      />
      <b-card-text>Value: {{ value }}</b-card-text>
    </div>

    <template #code>
      {{ codeStyling }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BFormTags, BCardText } from 'bootstrap-vue'
import { codeStyling } from './code'

export default {
  components: {
    BCardCode,
    BCardText,
    BFormTags,
  },
  data() {
    return {
      value: ['apple', 'orange', 'grape'],
      codeStyling,
    }
  },
}
</script>

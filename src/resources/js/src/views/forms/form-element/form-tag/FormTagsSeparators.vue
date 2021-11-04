<template>
  <b-card-code
    title="Tag creation using separators"
  >
    <b-card-text>
      <span>To auto create tags when a separator character is typed (i.e. </span>
      <b>Space</b>
      <span>, </span>
      <b>,</b>
      <span>, etc), set the</span>
      <code>separator</code>
      <span>
        prop to the character that will trigger the tag to be added.
      </span>
    </b-card-text>

    <div>
      <label for="tags-separators">Enter tags separated by space, comma or semicolon</label>
      <b-form-tags
        v-model="value"
        input-id="tags-separators"
        separator=" ,;"
        placeholder="Enter new tags separated by space, comma or semicolon"
        no-add-on-enter
        class="mb-2"
      />
      <b-card-text>Value: {{ value }}</b-card-text>
    </div>

    <template #code>
      {{ codeSeparators }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BFormTags, BCardText } from 'bootstrap-vue'
import { codeSeparators } from './code'

export default {
  components: {
    BCardCode,
    BCardText,
    BFormTags,
  },
  data() {
    return {
      value: ['one', 'two'],
      codeSeparators,
    }
  },
}
</script>

<template>
  <b-card-code
    title="Last tag removal via backspace keypress"
  >
    <b-card-text>
      <span>When the prop </span>
      <code>remove-on-delete</code>
      <span> is set, and the user presses </span>
      <code>Backspace</code>
      <span> (or </span>
      <code>Del</code>
      <span>) and the input value is empty, the last tag in the tag list will be removed. </span>
    </b-card-text>

    <div>
      <label for="tags-remove-on-delete">Enter new tags separated by space</label>
      <b-form-tags
        v-model="value"
        input-id="tags-remove-on-delete"
        :input-attrs="{ 'aria-describedby': 'tags-remove-on-delete-help' }"
        separator=" "
        placeholder="Enter new tags separated by space"
        remove-on-delete
        no-add-on-enter
        class="mb-2"
      />
      <b-form-text id="tags-remove-on-delete-help">
        Press <code>Backspace</code> to remove the last tag entered
      </b-form-text>
      <b-card-text>Value: {{ value }}</b-card-text>
    </div>

    <template #code>
      {{ codeRemoval }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BFormTags, BFormText, BCardText } from 'bootstrap-vue'
import { codeRemoval } from './code'

export default {
  components: {
    BCardCode,
    BFormTags,
    BFormText,
    BCardText,
  },
  data() {
    return {
      value: ['apple', 'orange', 'grape'],
      codeRemoval,
    }
  },
}
</script>

<template>
  <b-card-code
    title="Detecting new, invalid, and duplicate tags"
  >
    <b-card-text>
      <span>The event </span>
      <code>tag-state</code>
      <span>will be emitted whenever new tags are entered into the new tag input element, tags that do not pass validation,
        or duplicate tags are detected. The event handler will receive three arrays as its arguments:
      </span>
      <code>validTags, invalidTags , duplicateTags </code>
    </b-card-text>

    <div>
      <label for="tags-state-event">Enter tags</label>
      <b-form-tags
        v-model="tags"
        input-id="tags-state-event"
        :tag-validator="validator"
        placeholder="Enter tags (3-5 characters) separated by space"
        separator=" "
        @tag-state="onTagState"
      />
      <b-card-text class="mt-2">
        Tags: {{ tags }}
      </b-card-text>
      <b-card-text>Event values:</b-card-text>
      <ul>
        <li>validTags: {{ validTags }}</li>
        <li>invalidTags: {{ invalidTags }}</li>
        <li>duplicateTags: {{ duplicateTags }}</li>
      </ul>
    </div>

    <template #code>
      {{ codeDetecting }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BFormTags, BCardText } from 'bootstrap-vue'
import { codeDetecting } from './code'

export default {
  components: {
    BCardCode,
    BFormTags,
    BCardText,
  },
  data() {
    return {
      tags: [],
      validTags: [],
      invalidTags: [],
      duplicateTags: [],
      codeDetecting,
    }
  },
  methods: {
    onTagState(valid, invalid, duplicate) {
      this.validTags = valid
      this.invalidTags = invalid
      this.duplicateTags = duplicate
    },
    validator(tag) {
      return tag.length > 2 && tag.length < 6
    },
  },
}
</script>

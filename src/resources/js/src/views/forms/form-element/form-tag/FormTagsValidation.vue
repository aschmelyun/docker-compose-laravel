<template>
  <b-card-code
    title="Tag validation"
  >
    <b-card-text>
      <span>You can optionally provide a tag validator method via the </span>
      <code>tag-validator</code>
      <span> prop.</span>
    </b-card-text>

    <div>
      <b-form-group
        :state="state"
        label="Tags validation example"
        label-for="tags-validation"
      >
        <b-form-tags
          v-model="tags"
          input-id="tags-validation"
          :input-attrs="{ 'aria-describedby': 'tags-validation-help' }"
          :state="state"
          :tag-validator="tagValidator"
          separator=" "
        />

        <!-- The following slots are for b-form-group -->
        <template #invalid-feedback>
          You must provide at least 3 tags and no more than 8
        </template>

        <template #description>
          <div id="tags-validation-help">
            Tags must be 3 to 5 characters in length and all lower case. Enter tags separated by spaces or press enter.
          </div>
        </template>
      </b-form-group>
    </div>

    <template #code>
      {{ codeValidation }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BFormTags, BFormGroup, BCardText } from 'bootstrap-vue'
import { codeValidation } from './code'

export default {
  components: {
    BCardCode,
    BFormTags,
    BCardText,
    BFormGroup,
  },
  data() {
    return {
      tags: [],
      dirty: false,
      codeValidation,
    }
  },
  computed: {
    state() {
      // Overall component validation state
      return this.dirty ? this.tags.length > 2 && this.tags.length < 9 : null
    },
  },
  watch: {
    tags() {
      // Set the dirty flag on first change to the tags array
      this.dirty = true
    },
  },
  methods: {
    tagValidator(tag) {
      // Individual tag validator function
      return tag === tag.toLowerCase() && tag.length > 2 && tag.length < 6
    },
  },
}
</script>

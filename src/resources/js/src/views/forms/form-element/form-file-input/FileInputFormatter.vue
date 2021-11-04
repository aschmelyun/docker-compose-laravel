<template>
  <b-card-code title="File name formatter function">
    <b-card-text>
      <span>Set the prop </span>
      <code>file-name-formatter</code>
      <span> to a function that accepts a single argument which is an array of File objects.</span>
    </b-card-text>

    <b-form-file
      multiple
      :file-name-formatter="formatNames"
    />

    <template #code>
      {{ codeFormatter }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BFormFile, BCardText } from 'bootstrap-vue'
import { codeFormatter } from './code'

export default {
  components: {
    BCardCode,
    BFormFile,
    BCardText,
  },
  data() {
    return {
      codeFormatter,
    }
  },
  methods: {
    formatNames(files) {
      if (files.length === 1) {
        return files[0].name
      }
      return `${files.length} files selected`
    },
  },
}
</script>

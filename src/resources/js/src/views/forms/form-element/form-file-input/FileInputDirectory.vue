<template>
  <b-card-code title="Directory mode">
    <b-card-text>
      <span>By adding </span>
      <code>directory</code>
      <span> prop, the user can select directories instead of files.</span>
    </b-card-text>

    <b-form-file
      v-model="file"
      directory
      placeholder="Choose a file or drop it here..."
      drop-placeholder="Drop file here..."
    />

    <template #code>
      {{ codeDirectory }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BFormFile, BCardText } from 'bootstrap-vue'
import { codeDirectory } from './code'

export default {
  components: {
    BCardCode,
    BFormFile,
    BCardText,
  },
  data() {
    return {
      file: null,
      codeDirectory,
    }
  },
}
</script>

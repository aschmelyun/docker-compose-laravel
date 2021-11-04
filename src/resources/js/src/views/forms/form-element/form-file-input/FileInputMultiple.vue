<template>
  <b-card-code
    title="Multiple files"
  >
    <b-card-text>
      <span>Multiple file uploading is supported by adding </span>
      <code>multiple</code>
      <span> prop to component.</span>
    </b-card-text>

    <b-form-file
      placeholder="Choose a file or drop it here..."
      drop-placeholder="Drop file here..."
      multiple
    />

    <template #code>
      {{ codeMultiple }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BFormFile, BCardText } from 'bootstrap-vue'
import { codeMultiple } from './code'

export default {
  components: {
    BCardCode,
    BFormFile,
    BCardText,
  },
  data() {
    return {
      codeMultiple,
    }
  },
}
</script>

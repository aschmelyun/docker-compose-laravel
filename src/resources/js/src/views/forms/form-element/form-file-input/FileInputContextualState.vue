<template>
  <b-card-code title="Contextual state feedback">
    <b-card-text>
      <span>To apply one of the contextual state icons on </span>
      <code>&lt;b-form-file&gt;</code>
      <span>, set the </span>
      <code>state</code>
      <span> prop to </span>
      <code>false</code>
      <span> (for invalid), </span>
      <code>true</code>
      <span> (for valid), or </span>
      <code>null</code>
      <span> (no validation state).</span>
    </b-card-text>

    <!-- file inpute -->
    <b-form-file
      v-model="file"
      :state="Boolean(file)"
      placeholder="Choose a file or drop it here..."
      drop-placeholder="Drop file here..."
    />

    <template #code>
      {{ codeContextualState }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BFormFile, BCardText } from 'bootstrap-vue'
import { codeContextualState } from './code'

export default {
  components: {
    BCardCode,
    BFormFile,
    BCardText,
  },
  data() {
    return {
      file: null,
      codeContextualState,
    }
  },
}
</script>

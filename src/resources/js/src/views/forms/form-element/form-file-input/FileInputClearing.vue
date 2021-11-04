<template>
  <b-card-code
    title="Clearing the file selection"
  >
    <b-card-text>
      <span>
        You can clear the file input's
        selected files by setting the
      </span>
      <code>v-model</code>
      <span> to either </span>
      <code>null</code>
      <span> (for single mode) or an empty array </span>
      <code>[]</code>
      <span> (for multiple/directory mode).</span>
    </b-card-text>

    <div>
      <!-- file input -->
      <b-form-file
        ref="file-input"
        v-model="file"
      />

      <div class="demo-inline-spacing">
        <!-- buttons -->
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          class="mr-2 mb-25"
          variant="outline-primary"
          @click="clearFiles"
        >
          Reset via method
        </b-button>
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          variant="outline-primary"
          @click="file = null"
        >
          Reset via v-model
        </b-button>
      </div>

      <b-card-text class="mt-1 mb-0">
        Selected file: <strong>{{ file ? file.name : '' }}</strong>
      </b-card-text>
    </div>

    <template #code>
      {{ codeClearing }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BFormFile, BButton, BCardText } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { codeClearing } from './code'

export default {
  components: {
    BCardCode,
    BFormFile,
    BButton,
    BCardText,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      file: null,
      codeClearing,
    }
  },
  methods: {
    clearFiles() {
      this.$refs['file-input'].reset()
    },
  },
}
</script>

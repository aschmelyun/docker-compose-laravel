<template>
  <b-card-code title="Formatter support">
    <b-card-text>
      <code>&lt;b-form-input&gt;</code>
      <span> optionally supports formatting by passing a function reference to the </span>
      <code>formatter</code>
      <span> prop.</span>
    </b-card-text>

    <div>
      <b-form-group
        label="Text input with formatter (on input)"
        label-for="input-formatter"
        description="We will convert your name to lowercase instantly"
      >
        <b-form-input
          id="input-formatter"
          v-model="text1"
          placeholder="Enter your name"
          :formatter="formatter"
        />
      </b-form-group>
      <b-card-text><strong>Value:</strong> {{ text1 }}</b-card-text>

      <b-form-group
        label="Text input with lazy formatter (on blur)"
        label-for="input-lazy"
        description="This one is a little lazy!"
      >
        <b-form-input
          id="input-lazy"
          v-model="text2"
          placeholder="Enter your name"
          lazy-formatter
          :formatter="formatter"
        />
      </b-form-group>

      <b-card-text class="mb-0">
        <strong>Value:</strong> {{ text2 }}
      </b-card-text>
    </div>

    <template #code>
      {{ codeFormatter }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BFormInput, BFormGroup, BCardText } from 'bootstrap-vue'
import { codeFormatter } from './code'

export default {
  components: {
    BCardCode,
    BFormInput,
    BCardText,
    BFormGroup,
  },
  data() {
    return {
      text1: '',
      text2: '',
      codeFormatter,
    }
  },
  methods: {
    formatter(value) {
      return value.toLowerCase()
    },
  },
}
</script>

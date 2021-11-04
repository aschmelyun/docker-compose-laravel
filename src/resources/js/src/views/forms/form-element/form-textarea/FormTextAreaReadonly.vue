<template>
  <b-card-code
    title="Readonly plain text"
  >
    <b-card-text>
      <span>If you want to have </span>
      <code>&lt;b-form-textarea readonly&gt;</code>
      <span> elements in your form styled as plain text, set the </span>
      <code>plaintext</code>
      <span> prop (no need to set </span>
      <code>readonly</code>
      <span>
        as it will be set automatically) to remove the default form field styling and preserve the correct text size,
        margin, padding and height.
      </span>
    </b-card-text>

    <b-form-textarea
      id="textarea-plaintext"
      readonly
      :value="text"
    />

    <template #code>
      {{ codeReadonly }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BFormTextarea, BCardText } from 'bootstrap-vue'
import { codeReadonly } from './code'

export default {
  components: {
    BCardCode,
    BFormTextarea,
    BCardText,
  },
  data() {
    return {
      text: "This is some text.\nIt is read only and doesn't look like an input.",
      codeReadonly,
    }
  },
}
</script>

<template>
  <b-card-code title="Custom content">
    <b-card-text class="mb-0">
      <span>Use the </span>
      <code>default</code>
      <span>slot to render custom content in the avatar, for finer grained control of its appearance.</span>
    </b-card-text>

    <div class="demo-inline-spacing">
      <b-avatar variant="primary">
        <span>Hi</span>
      </b-avatar>

      <b-avatar variant="secondary">
        <span>New</span>
      </b-avatar>

      <b-avatar variant="success">
        <span>Hey</span>
      </b-avatar>

      <b-avatar variant="light-danger">
        <span>Hi</span>
      </b-avatar>

      <b-avatar variant="light-warning">
        <span>New</span>
      </b-avatar>

      <b-avatar variant="light-info">
        <span>Hey</span>
      </b-avatar>
    </div>

    <template #code>
      {{ codeCustomContent }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BAvatar, BCardText } from 'bootstrap-vue'
import { codeCustomContent } from './code'

export default {
  components: {
    BCardCode,
    BAvatar,
    BCardText,
  },
  data() {
    return {
      codeCustomContent,
    }
  },
}
</script>

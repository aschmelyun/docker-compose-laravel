<template>
  <b-card-code title="Colors">
    <b-card-text class="mb-0">
      <span>Use the </span>
      <code>variant</code>
      <span> prop to specify one of Bootstrap theme variant colors.</span>
    </b-card-text>

    <div class="demo-inline-spacing">
      <b-avatar
        variant="primary"
        text="PI"
      />
      <b-avatar
        variant="secondary"
        text="PI"
      />
      <b-avatar
        variant="success"
        text="PI"
      />
      <b-avatar
        variant="danger"
        text="PI"
      />
      <b-avatar
        variant="warning"
        text="PI"
      />
      <b-avatar
        variant="info"
        text="PI"
      />
    </div>

    <template #code>
      {{ codeColor }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BAvatar, BCardText } from 'bootstrap-vue'
import { codeColor } from './code'

export default {
  components: {
    BCardCode,
    BAvatar,
    BCardText,
  },
  data() {
    return {
      codeColor,
    }
  },
}
</script>

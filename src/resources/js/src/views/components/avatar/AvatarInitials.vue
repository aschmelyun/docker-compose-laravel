<template>
  <b-card-code title="Initials">
    <b-card-text class="mb-0">
      <span>You can specify a short string as the content of an avatar via the </span>
      <code>text</code>
      <span> prop.</span>
    </b-card-text>

    <div class="demo-inline-spacing">
      <b-avatar
        size="sm"
        variant="light-primary"
        text="PI"
      />
      <b-avatar
        variant="light-secondary"
        text="PI"
      />
      <b-avatar
        size="lg"
        variant="light-success"
        text="PI"
      />
      <b-avatar
        size="70px"
        variant="light-danger"
        text="PI"
      />
    </div>

    <template #code>
      {{ codeInitials }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BAvatar, BCardText } from 'bootstrap-vue'
import { codeInitials } from './code'

export default {
  components: {
    BCardCode,
    BAvatar,
    BCardText,
  },
  data() {
    return {
      codeInitials,
    }
  },
}
</script>

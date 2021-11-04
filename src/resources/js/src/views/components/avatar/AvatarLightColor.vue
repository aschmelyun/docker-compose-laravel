<template>
  <b-card-code title="Light Colors">
    <b-card-text class="mb-0">
      <span>use class </span>
      <code>variant="light-{color-name}"</code>
      <span> to change background color of your avatar.</span>
    </b-card-text>

    <div class="demo-inline-spacing">
      <b-avatar
        text="PI"
        variant="light-primary"
      />
      <b-avatar
        text="PI"
        variant="light-secondary"
      />
      <b-avatar
        text="PI"
        variant="light-success"
      />
      <b-avatar
        text="PI"
        variant="light-danger"
      />
      <b-avatar
        text="PI"
        variant="light-warning"
      />
      <b-avatar
        text="PI"
        variant="light-info"
      />
    </div>

    <template #code>
      {{ codeColorLight }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import { BCardText, BAvatar } from 'bootstrap-vue'
import { codeColorLight } from './code'

export default {
  components: {
    BAvatar,
    BCardCode,
    BCardText,
  },
  data() {
    return {
      codeColorLight,
    }
  },
}
</script>

<template>
  <b-card-code title="Square">
    <b-card-text class="mb-0">
      <span> Prefer a square avatar? simply set the </span>
      <code>square</code>
      <span> prop to </span>
      <code>true</code>.
    </b-card-text>

    <div class="demo-inline-spacing">
      <b-avatar
        variant="light-primary"
        square
      />
      <b-avatar
        square
        variant="light-success"
      />
    </div>

    <template #code>
      {{ codeSquare }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BAvatar, BCardText } from 'bootstrap-vue'
import { codeSquare } from './code'

export default {
  components: {
    BCardCode,
    BAvatar,
    BCardText,
  },
  data() {
    return {
      codeSquare,
    }
  },
}
</script>

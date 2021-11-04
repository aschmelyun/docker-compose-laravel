<template>
  <b-card-code title="Block Badge">
    <b-card-text>
      <span>Use </span>
      <code>.d-block</code>
      <span> class with </span>
      <code>&lt;b-badge&gt;</code>
      <span>, to display badge as a block element.</span>
    </b-card-text>

    <div class="text-center">
      <b-badge
        href="#"
        class="d-block"
        variant="primary"
      >
        Badge
      </b-badge>
    </div>

    <template #code>
      {{ codeBlock }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BBadge, BCardText } from 'bootstrap-vue'
import { codeBlock } from './code'

export default {
  components: {
    BCardCode,
    BCardText,
    BBadge,
  },
  data() {
    return {
      codeBlock,
    }
  },
}
</script>

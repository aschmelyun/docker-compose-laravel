<template>
  <b-card-code title="Contextual">
    <b-card-text class="mb-0">
      <span>Use the </span>
      <code>pill</code>
      <span> prop to make badges more rounded</span>
      <span> and use </span>
      <code>variant</code>
      <span> prop for badge color variantion.</span>
    </b-card-text>

    <div class="demo-inline-spacing">
      <b-badge
        pill
        variant="primary"
      >
        Primary
      </b-badge>
      <b-badge
        pill
      >
        Secondary
      </b-badge>
      <b-badge
        pill
        variant="success"
      >
        Success
      </b-badge>
      <b-badge
        pill
        variant="danger"
      >
        Danger
      </b-badge>
      <b-badge
        pill
        variant="warning"
      >
        Warning
      </b-badge>
      <b-badge
        pill
        variant="info"
      >
        Info
      </b-badge>
      <b-badge
        pill
        variant="dark"
      >
        Dark
      </b-badge>
    </div>

    <template #code>
      {{ codePillContextual }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BBadge, BCardText } from 'bootstrap-vue'
import { codePillContextual } from './code'

export default {
  components: {
    BCardCode,
    BBadge,
    BCardText,
  },
  data() {
    return {
      codePillContextual,
    }
  },
}
</script>

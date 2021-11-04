<template>
  <b-card-code title="Light Badges">
    <b-card-text class="mb-0">
      <span>Use </span>
      <code>variant</code>
      <span> prop for badge color variantion.</span>
    </b-card-text>

    <div class="demo-inline-spacing">
      <b-badge
        pill
        variant="light-primary"
      >
        Primary
      </b-badge>
      <b-badge
        pill
        variant="light-secondary"
      >
        Secondary
      </b-badge>
      <b-badge
        pill
        variant="light-success"
      >
        Success
      </b-badge>
      <b-badge
        pill
        variant="light-danger"
      >
        Danger
      </b-badge>
      <b-badge
        pill
        variant="light-warning"
      >
        Warning
      </b-badge>
      <b-badge
        pill
        variant="light-info"
      >
        Info
      </b-badge>
      <b-badge
        pill
        variant="light-dark"
      >
        Dark
      </b-badge>
    </div>

    <template #code>
      {{ codeLightBadge }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BBadge, BCardText } from 'bootstrap-vue'
import { codeLightBadge } from './code'

export default {
  components: {
    BCardCode,
    BBadge,
    BCardText,
  },
  data() {
    return {
      codeLightBadge,
    }
  },
}
</script>

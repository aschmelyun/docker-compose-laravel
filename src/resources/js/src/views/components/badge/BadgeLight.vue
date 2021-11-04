<template>
  <b-card-code
    title="Light Badges"
  >
    <b-card-text class="mb-0">
      <span>Use </span>
      <code>variant='light-{color}'</code>
      <span> prop to add light effect to your badge.</span>
    </b-card-text>

    <div class="demo-inline-spacing">
      <b-badge variant="light-primary">
        Primary
      </b-badge>
      <b-badge variant="light-secondary">
        Secondary
      </b-badge>
      <b-badge variant="light-success">
        Success
      </b-badge>
      <b-badge variant="light-danger">
        Danger
      </b-badge>
      <b-badge variant="light-warning">
        Warning
      </b-badge>
      <b-badge variant="light-info">
        Info
      </b-badge>
      <b-badge variant="light-dark">
        Dark
      </b-badge>
    </div>

    <template #code>
      {{ codeLightBadges }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BBadge, BCardText } from 'bootstrap-vue'
import { codeLightBadges } from './code'

export default {
  components: {
    BCardCode,
    BCardText,
    BBadge,
  },
  data() {
    return {
      codeLightBadges,
    }
  },
}
</script>

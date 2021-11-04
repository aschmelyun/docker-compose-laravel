<template>
  <b-card-code title="Glow Badges">
    <b-card-text class="mb-0">
      <span>Use class </span>
      <code>.badge-glow</code>
      <span> to add glow effect to contextual badge.</span>
    </b-card-text>

    <!-- glow badges -->
    <div class="demo-inline-spacing">
      <b-badge
        variant="primary"
        class="badge-glow"
      >
        Primary
      </b-badge>
      <b-badge class="badge-glow">
        Secondary
      </b-badge>
      <b-badge
        variant="success"
        class="badge-glow"
      >
        Success
      </b-badge>
      <b-badge
        variant="danger"
        class="badge-glow"
      >
        Danger
      </b-badge>
      <b-badge
        variant="warning"
        class="badge-glow"
      >
        Warning
      </b-badge>
      <b-badge
        variant="info"
        class="badge-glow"
      >
        Info
      </b-badge>
      <b-badge
        variant="dark"
        class="badge-glow"
      >
        Dark
      </b-badge>
    </div>

    <template #code>
      {{ codeGlow }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BBadge, BCardText } from 'bootstrap-vue'
import { codeGlow } from './code'

export default {
  components: {
    BCardCode,
    BCardText,
    BBadge,
  },
  data() {
    return {
      codeGlow,
    }
  },
}
</script>

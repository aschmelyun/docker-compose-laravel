<template>
  <b-card-code title="Pill Badges As Notification">
    <b-card-text class="mb-">
      <span>Use class </span>
      <code>badge</code>
      <span> prop with </span>
      <code>&lt;feather-icon&gt;</code>
      <span> components to add badges as notification. Use </span>
      <code>badge-classes="badge-{color}"</code>
      <span> prop for change the badge color.</span>
    </b-card-text>

    <!-- bages -->
    <div class="demo-inline-spacing">
      <feather-icon
        icon="BellIcon"
        size="21"
        class="text-primary"
        badge="4"
      />

      <feather-icon
        icon="BellIcon"
        size="21"
        class="text-info"
        badge="4"
        badge-classes="badge-info"
      />
      <feather-icon
        icon="BellIcon"
        size="21"
        class="text-danger"
        badge="4"
        badge-classes="badge-danger badge-glow"
      />
    </div>

    <template #code>
      {{ codeNotification }}
    </template>
  </b-card-code>
</template>

<script>
import { BCardText } from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code'
import { codeNotification } from './code'

export default {
  components: {
    BCardCode,
    BCardText,
  },
  data() {
    return {
      codeNotification,
    }
  },
}
</script>

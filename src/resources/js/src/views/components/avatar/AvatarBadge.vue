<template>
  <b-card-code title="Badge avatars">
    <b-card-text class="mb-0">
      <span>Easily add a badge to your avatar via the </span>
      <code>badge</code>
      <span> prop or </span>
      <code>'badge'</code>
      <span> slot, and the badge variant can be set via the </span>
      <code>badge-variant</code>
      <span> prop. The badge will scale with the size of the avatar.</span>
    </b-card-text>

    <div class="demo-inline-spacing">
      <!-- using default slot  -->
      <b-avatar
        badge="5"
        badge-variant="primary"
      >
        <span class="d-flex align-items-center">
          <feather-icon
            icon="DownloadIcon"
            size="16"
          />
        </span>
      </b-avatar>

      <!-- with badge prop -->
      <b-avatar
        badge="3"
        badge-variant="primary"
      />

      <b-avatar
        badge="2"
        badge-variant="primary"
      />

      <b-avatar
        badge="1"
        badge-variant="primary"
      />

      <b-avatar
        badge="10"
        badge-variant="primary"
        text="BV"
      />
    </div>

    <template #code>
      {{ codeBadge }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BAvatar, BCardText } from 'bootstrap-vue'
import { codeBadge } from './code'

export default {
  components: {
    BCardCode,
    BCardText,
    BAvatar,
  },
  data() {
    return {
      codeBadge,
    }
  },
}
</script>

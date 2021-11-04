<template>
  <b-card-code title="Badge Offset">
    <b-card-text class="mb-0">
      <span>Use the </span>
      <code>badge-offset</code>
      <span> prop to control the offset of the badge. </span>
      <span>Positive values will move the badge inward, while negative values will move the badge outward.</span>
    </b-card-text>

    <div class="demo-inline-spacing">
      <b-avatar
        badge
        badge-variant="success"
        badge-offset="-0.5em"
        class="mr-1"
      />
      <b-avatar
        badge
        badge-variant="success"
        badge-offset="-2px"
        class="mr-1"
      />
      <b-avatar
        badge
        badge-variant="success"
        badge-offset="2px"
        class="mr-1"
      />
      <b-avatar
        badge
        badge-top
        badge-variant="success"
        badge-offset="-0.5em"
        class="mr-1"
      />
    </div>

    <template #code>
      {{ codeBadgeOffset }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BAvatar, BCardText } from 'bootstrap-vue'
import { codeBadgeOffset } from './code'

export default {
  components: {
    BCardCode,
    BAvatar,

    BCardText,
  },
  data() {
    return {
      codeBadgeOffset,
    }
  },
}
</script>

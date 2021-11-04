<template>
  <b-card-code title="Badge positioning">
    <b-card-text class="mb-0">
      <span>By default the badge appears on the bottom right of the avatar. </span>
      <span>You can use the </span>
      <code>badge-top</code>
      <span> and </span>
      <code>badge-right</code>
      <span> boolean props to switch the sides.</span>
    </b-card-text>

    <div class="demo-inline-spacing">
      <b-avatar
        class="mr-1"
        badge
        badge-variant="success"
      />
      <b-avatar
        class="mr-1"
        badge-variant="success"
        badge
        badge-left
      />
      <b-avatar
        badge
        class="mr-1"
        badge-variant="success"
        badge-top
      />
      <b-avatar
        badge
        class="mr-1"
        badge-variant="success"
        badge-left
        badge-top
      />
    </div>

    <template #code>
      {{ codeBadgePosition }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BAvatar, BCardText } from 'bootstrap-vue'
import { codeBadgePosition } from './code'

export default {
  components: {
    BCardCode,
    BAvatar,
    BCardText,
  },
  data() {
    return {
      codeBadgePosition,
    }
  },
}
</script>

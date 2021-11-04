<template>
  <b-card-code title="Badge content">
    <b-card-text class="mb-0">
      <span>Add textual content to the badge by supplying a string to the </span>
      <code>badge</code>
      <span> prop, or use the named slot </span><code>'badge'</code>.
    </b-card-text>

    <div class="demo-inline-spacing">
      <b-avatar
        class="mr-1"
        badge="B"
      />
      <b-avatar
        badge="7"
        class="mr-1"
        variant="primary"
        badge-variant="danger"
      />
      <b-avatar
        badge-variant="success"
        badge="1"
        :src="require('@/assets/images/portrait/small/avatar-s-16.jpg')"
      />
    </div>

    <template #code>
      {{ codeBadgeContent }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BAvatar, BCardText } from 'bootstrap-vue'
import { codeBadgeContent } from './code'

export default {
  components: {
    BCardCode,
    BAvatar,
    BCardText,
  },
  data() { return { codeBadgeContent } },
}
</script>

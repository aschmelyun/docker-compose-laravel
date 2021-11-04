<template>
  <b-card-code title="Icons">
    <b-card-text class="mb-0">
      <span>Easily use one of </span>
      <code>BootstrapVue's</code>
      <span> icons as the avatar content via the </span>
      <code>icon</code>
      <span> prop. The prop should be set to a valid icon name.</span>
    </b-card-text>

    <div class="demo-inline-spacing">
      <b-avatar variant="primary">
        <feather-icon icon="HomeIcon" />
      </b-avatar>
      <b-avatar variant="success">
        <feather-icon icon="BellIcon" />
      </b-avatar>
      <b-avatar variant="info">
        <feather-icon icon="UserIcon" />
      </b-avatar>
      <b-avatar variant="danger">
        <feather-icon icon="MessageSquareIcon" />
      </b-avatar>
    </div>

    <template #code>
      {{ codeIcon }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BAvatar, BCardText } from 'bootstrap-vue'
import { codeIcon } from './code'

export default {
  components: {
    BCardCode,
    BAvatar,
    BCardText,
  },
  data() {
    return {
      codeIcon,
    }
  },
}
</script>

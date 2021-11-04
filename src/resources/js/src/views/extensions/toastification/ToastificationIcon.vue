<template>
  <b-card-code title="Icon">
    <b-card-text class="mb-0">
      <span>Custom icon class to be used. Use </span>
      <code>icon</code>
      <span> prop to set icon.</span>
    </b-card-text>

    <div class="demo-inline-spacing">
      <!-- mail icon -->
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
        @click="showToast('primary','MailIcon')"
      >
        Icon Mail
      </b-button>

      <!-- Inbox icon -->
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
        @click="showToast('secondary','InboxIcon')"
      >
        Icon Inbox
      </b-button>

      <!-- Check icon -->
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
        @click="showToast('success','CheckIcon')"
      >
        Icon Check
      </b-button>

      <!-- heart icon -->
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
        @click="showToast('danger','HeartIcon')"
      >
        Icon Heart
      </b-button>

      <!-- favorite icon -->
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
        @click="showToast('warning','StarIcon')"
      >
        Icon Favorite
      </b-button>

      <!-- slack icon -->
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
        @click="showToast('info','SlackIcon')"
      >
        Icon Slack
      </b-button>
    </div>

    <template #code>
      {{ codeIcon }}
    </template>
  </b-card-code>
</template>

<script>
import { BButton, BCardText } from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import Ripple from 'vue-ripple-directive'
import { codeIcon } from './code'

export default {
  components: {
    BButton,
    BCardCode,
    BCardText,
    // eslint-disable-next-line vue/no-unused-components
    ToastificationContent,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      codeIcon,
    }
  },
  methods: {
    showToast(variant, icon) {
      this.$toast({
        component: ToastificationContent,
        props: {
          title: 'Notification',
          icon,
          text: 'I do not think that word means what you think it means.',
          variant,
        },
      })
    },
  },
}
</script>

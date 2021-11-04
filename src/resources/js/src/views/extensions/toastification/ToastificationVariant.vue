<template>
  <b-card-code title="Variant">
    <b-card-text class="mb-0">
      <span>You can use </span>
      <code>variant</code>
      <span> prop for color variant.</span>
    </b-card-text>

    <div class="demo-inline-spacing">
      <!-- primary trigger button -->
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
        @click="showToast('primary')"
      >
        Primary
      </b-button>

      <!-- secondary trigger button -->
      <b-button
        v-ripple.400="'rgba(186, 191, 199, 0.15)'"
        variant="outline-secondary"
        @click="showToast('secondary')"
      >
        Secondary
      </b-button>

      <!-- success trigger button -->
      <b-button
        v-ripple.400="'rgba(40, 199, 111, 0.15)'"
        variant="outline-success"
        @click="showToast('success')"
      >
        Success
      </b-button>

      <!-- danger trigger button -->
      <b-button
        v-ripple.400="'rgba(234, 84, 85, 0.15)'"
        variant="outline-danger"
        @click="showToast('danger')"
      >
        Danger
      </b-button>

      <!-- warning trigger button -->
      <b-button
        v-ripple.400="'rgba(255, 159, 67, 0.15)'"
        variant="outline-warning"
        @click="showToast('warning')"
      >
        Warning
      </b-button>

      <!-- info trigger button -->
      <b-button
        v-ripple.400="'rgba(0, 207, 232, 0.15)'"
        variant="outline-info"
        @click="showToast('info')"
      >
        Info
      </b-button>

      <!-- dark trigger button -->
      <b-button
        v-ripple.400="'rgba(30, 30, 30, 0.15)'"
        variant="outline-dark"
        @click="showToast('dark')"
      >
        Dark
      </b-button>
    </div>

    <template #code>
      {{ codeVariant }}
    </template>
  </b-card-code>
</template>

<script>
import { BButton, BCardText } from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import Ripple from 'vue-ripple-directive'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import { codeVariant } from './code'

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
      codeVariant,
    }
  },
  methods: {
    showToast(variant) {
      this.$toast({
        component: ToastificationContent,
        props: {
          title: 'Notification',
          icon: 'BellIcon',
          text: '👋 Chocolate oat cake jelly oat cake candy jelly beans pastry.',
          variant,
        },
      })
    },
  },
}
</script>

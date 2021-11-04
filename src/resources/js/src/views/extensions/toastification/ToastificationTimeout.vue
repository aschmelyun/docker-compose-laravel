<template>
  <b-card-code title="Timeout">
    <b-card-text class="mb-0">
      How many milliseconds for the toast to be auto dismissed, or false to disable.
    </b-card-text>

    <div class="demo-inline-spacing">

      <!-- default time trigger button -->
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
        @click="showToast('primary')"
      >
        Time Default
      </b-button>

      <!-- 4s delay trigger button -->
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
        @click="showToast('primary',4000)"
      >
        Time 4s(4000)
      </b-button>

      <!-- 8s delay trigger button -->
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
        @click="showToast('primary',8000)"
      >
        Time 8s(8000)
      </b-button>
    </div>

    <template #code>
      {{ codeTime }}
    </template>
  </b-card-code>
</template>

<script>
import { BButton, BCardText } from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import Ripple from 'vue-ripple-directive'
import { codeTime } from './code'

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
      codeTime,
    }
  },
  methods: {
    showToast(variant, timeout) {
      this.$toast({
        component: ToastificationContent,
        props: {
          title: 'Notification',
          icon: 'BellIcon',
          text: 'I do not think that word means what you think it means.',
          variant,
        },
      },
      {
        timeout,
      })
    },
  },
}
</script>

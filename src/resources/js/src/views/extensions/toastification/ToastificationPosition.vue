<template>
  <b-card-code title="Position">
    <b-card-text class="mb-0">
      <span>Position of the toast on the screen. Can be any of </span>
      <code>top-right</code>
      <span> , </span>
      <code>top-center</code>
      <span> , </span>
      <code>top-left</code>
      <span> , </span>
      <code>bottom-right</code>
      <span> , </span>
      <code>bottom-center</code>
      <span> , </span>
      <code>bottom-left</code>.
    </b-card-text>

    <h5 class="mb-0">
      Top Positions
    </h5>
    <div class="demo-inline-spacing">

      <!-- Top right -->
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
        @click="showToast('primary','top-right')"
      >
        Top Right
      </b-button>

      <!-- Top left -->
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
        @click="showToast('secondary','top-left')"
      >
        Top Left
      </b-button>

      <!-- top center -->
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
        @click="showToast('success','top-center')"
      >
        Top Center
      </b-button>
    </div>

    <h5 class="mt-2 mb-0">
      Bottom Positions
    </h5>
    <div class="demo-inline-spacing">
      <!-- bottom right -->
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
        @click="showToast('danger','bottom-right')"
      >
        Bottom Right
      </b-button>

      <!-- bottom left -->
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
        @click="showToast('warning','bottom-left')"
      >
        Bottom Left
      </b-button>

      <!-- bottom center -->
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
        @click="showToast('info','bottom-center')"
      >
        Bottom Center
      </b-button>
    </div>
    <template #code>
      {{ codePosition }}
    </template>
  </b-card-code>
</template>

<script>
import { BButton, BCardText } from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import Ripple from 'vue-ripple-directive'
import { codePosition } from './code'

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
      codePosition,
    }
  },
  methods: {
    showToast(variant, position) {
      this.$toast({
        component: ToastificationContent,
        props: {
          title: 'Notification',
          icon: 'InfoIcon',
          text: 'I do not think that word means what you think it means.',
          variant,
        },
      },
      {
        position,
      })
    },
  },
}
</script>

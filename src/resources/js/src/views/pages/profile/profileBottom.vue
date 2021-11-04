<template>
  <div class="text-center mb-2">
    <!-- overlay on button -->
    <b-overlay
      :show="show"
      rounded="sm"
      spinner-variant="primary"
      spinner-small
      class="d-inline-block"
    >
      <b-button
        v-ripple.400="'rgba(186, 191, 199, 0.15)'"
        variant="primary"
        size="sm"
        @click="onClick"
      >
        Load More
      </b-button>
    </b-overlay>
    <!-- overlay on button -->
  </div>
</template>

<script>
import { BButton, BOverlay } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BButton,
    BOverlay,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      show: false,
    }
  },
  methods: {
    onClick() {
      this.show = true
      // Simulate an async request
      setTimeout(() => {
        this.show = false
      }, 5000)
    },
  },
}
</script>

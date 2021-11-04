<template>
  <b-card-code title="Position">
    <b-card-text class="mb-0">
      You can specify position of your alert with <code>{position : 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' }</code> in js.
    </b-card-text>

    <!-- trigger button -->
    <div class="demo-inline-spacing">
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
        @click="topStart"
      >
        Top Start
      </b-button>
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
        @click="topEnd"
      >
        Top End
      </b-button>
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
        @click="bottomStart"
      >
        Bottom Starts
      </b-button>
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
        @click="bottomEnd"
      >
        Bottom End
      </b-button>
    </div>

    <template #code>
      {{ codePosition }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import { BCardText, BButton } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { codePosition } from './code'

export default {
  components: {
    BCardCode,
    BCardText,
    BButton,
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

    // top start
    topStart() {
      this.$swal({
        position: 'top-start',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500,
        customClass: {
          confirmButton: 'btn btn-primary',
        },
        buttonsStyling: false,
      })
    },
    // top end
    topEnd() {
      this.$swal({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500,
        customClass: {
          confirmButton: 'btn btn-primary',
        },
        buttonsStyling: false,
      })
    },
    // bottom start
    bottomStart() {
      this.$swal({
        position: 'bottom-start',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500,
        customClass: {
          confirmButton: 'btn btn-primary',
        },
        buttonsStyling: false,
      })
    },

    // bottom end
    bottomEnd() {
      this.$swal({
        position: 'bottom-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500,
        customClass: {
          confirmButton: 'btn btn-primary',
        },
        buttonsStyling: false,
      })
    },
  },
}
</script>

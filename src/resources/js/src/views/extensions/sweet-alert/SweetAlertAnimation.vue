<template>
  <b-card-code title="Animations">
    <b-card-text class="mb-0">
      <span>Use </span>
      <code>popup</code>
      <span> inside </span>
      <code>showClass</code>
      <span> parameter to add animation to your alert.</span>
    </b-card-text>

    <!-- trigger button -->
    <div class="demo-inline-spacing">
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
        @click="bounceIn"
      >
        Bounce In
      </b-button>
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
        @click="fadeIn"
      >
        Fade In
      </b-button>
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
        @click="flipIn"
      >
        Flip In
      </b-button>
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
        @click="tada"
      >
        Tada
      </b-button>
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
        @click="shake"
      >
        Shake
      </b-button>
    </div>

    <template #code>
      {{ codeAnimation }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import { BCardText, BButton } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import 'animate.css'
import { codeAnimation } from './code'

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
      codeAnimation,
    }
  },
  methods: {

    // bounce in method
    bounceIn() {
      this.$swal({
        title: 'Bounce In Animation',
        customClass: {
          confirmButton: 'btn btn-primary',
        },
        showClass: {
          popup: 'animate__animated animate__bounceIn',
        },
        buttonsStyling: false,
      })
    },

    // fade in
    fadeIn() {
      this.$swal({
        title: 'Fade In Animation',
        customClass: {
          confirmButton: 'btn btn-primary',
        },
        showClass: {
          popup: 'animate__animated animate__fadeIn',
        },
        buttonsStyling: false,
      })
    },

    // flip in
    flipIn() {
      this.$swal({
        title: 'Flip In Animation',
        customClass: {
          confirmButton: 'btn btn-primary',
        },
        showClass: {
          popup: 'animate__animated animate__flipInX',
        },
        buttonsStyling: false,
      })
    },

    // tada
    tada() {
      this.$swal({
        title: 'Tada Animation',
        customClass: {
          confirmButton: 'btn btn-primary',
        },
        showClass: {
          popup: 'animate__animated animate__tada',
        },
        buttonsStyling: false,
      })
    },

    // shake
    shake() {
      this.$swal({
        title: 'Shake Animation',
        customClass: {
          confirmButton: 'btn btn-primary',
        },
        showClass: {
          popup: 'animate__animated animate__shakeX',
        },
        buttonsStyling: false,
      })
    },
  },
}
</script>

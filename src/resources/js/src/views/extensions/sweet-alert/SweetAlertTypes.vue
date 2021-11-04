<template>
  <b-card-code title="Types">
    <b-card-text>
      The type of the modal. SweetAlert comes with 4 built-in types which will show a corresponding icon animation: "success", "error", "warning" and "info". You can also set it as "input" to get a prompt modal. It can either be put in the object under the key "icon" or passed as the third parameter of the function.
    </b-card-text>

    <!-- trigger button -->
    <div class="demo-inline-spacing">
      <b-button
        v-ripple.400="'rgba(40, 199, 111, 0.15)'"
        variant="outline-success"
        @click="success"
      >
        Success
      </b-button>
      <b-button
        v-ripple.400="'rgba(234, 84, 85, 0.15)'"
        variant="outline-danger"
        @click="error"
      >
        Error
      </b-button>
      <b-button
        v-ripple.400="'rgba(255, 159, 67, 0.15)'"
        variant="outline-warning"
        @click="warning"
      >
        Warning
      </b-button>
      <b-button
        v-ripple.400="'rgba(0, 207, 232, 0.15)'"
        variant="outline-info"
        @click="info"
      >
        Info
      </b-button>
    </div>

    <template #code>
      {{ codeTypes }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import { BCardText, BButton } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { codeTypes } from './code'

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
      codeTypes,
    }
  },
  methods: {

    // success
    success() {
      this.$swal({
        title: 'Good job!',
        text: 'You clicked the button!',
        icon: 'success',
        customClass: {
          confirmButton: 'btn btn-primary',
        },
        buttonsStyling: false,
      })
    },

    // error
    error() {
      this.$swal({
        title: 'Error!',
        text: ' You clicked the button!',
        icon: 'error',
        customClass: {
          confirmButton: 'btn btn-primary',
        },
        buttonsStyling: false,
      })
    },

    // warning
    warning() {
      this.$swal({
        title: 'Warning!',
        text: ' You clicked the button!',
        icon: 'warning',
        customClass: {
          confirmButton: 'btn btn-primary',
        },
        buttonsStyling: false,
      })
    },

    // info
    info() {
      this.$swal({
        title: 'Info!',
        text: 'You clicked the button!',
        icon: 'info',
        customClass: {
          confirmButton: 'btn btn-primary',
        },
        buttonsStyling: false,
      })
    },
  },
}
</script>

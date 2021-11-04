<template>
  <b-card-code title="Options">

    <!-- trigger button -->
    <div class="demo-inline-spacing">
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
        @click="customImage"
      >
        Custom Image
      </b-button>
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
        @click="autoClose"
      >
        Auto Close
      </b-button>
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
        @click="clickOutside"
      >
        Click Outside
      </b-button>
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
        @click="ajax"
      >
        Ajax
      </b-button>
    </div>

    <template #code>
      {{ codeOptions }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import { BButton } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { codeOptions } from './code'

export default {
  components: {
    BCardCode,
    BButton,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      timerInterval: null,
      codeOptions,
    }
  },
  methods: {

    // custom image
    customImage() {
      this.$swal({
        title: 'Sweet!',
        text: 'Modal with a custom image.',
        // eslint-disable-next-line global-require
        imageUrl: require('@/assets/images/slider/04.jpg'),
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        customClass: {
          confirmButton: 'btn btn-primary',
        },
        buttonsStyling: false,
      })
    },

    // auto close
    autoClose() {
      this.$swal({
        title: 'Auto close alert!',
        html: 'I will close in <strong>3</strong> seconds.',
        timer: 3000,
        customClass: {
          confirmButton: 'btn btn-primary',
        },
        buttonsStyling: false,
      })
    },

    // click out side
    clickOutside() {
      this.$swal({
        title: 'Click outside to close!',
        text: 'This is a cool message!',
        allowOutsideClick: true,
        customClass: {
          confirmButton: 'btn btn-primary',
        },
        buttonsStyling: false,
      })
    },

    // ajax
    ajax() {
      this.$swal({
        title: 'Search for a user',
        input: 'text',
        customClass: {
          confirmButton: 'btn btn-primary',
          cancelButton: 'btn btn-outline-danger ml-1',
        },
        buttonsStyling: false,
        inputAttributes: {
          autocapitalize: 'off',
        },
        showCancelButton: true,
        confirmButtonText: 'Look up',
        showLoaderOnConfirm: true,
        preConfirm(login) {
          if (!login) return null
          return fetch(`//api.github.com/users/${login}`)
            .then(response => {
              if (!response.ok) {
                throw new Error(response.statusText)
              }
              return response.json()
            })
            .catch(error => {
              this.$swal.showValidationMessage(`Request failed:  ${error}`)
            })
        },
      }).then(result => {
        if (result.value) {
          this.$swal({
            title: `${result.value.login}'s avatar`,
            imageUrl: result.value.avatar_url,
            customClass: { confirmButton: 'btn btn-primary' },
          })
        }
      })
    },
  },
}
</script>

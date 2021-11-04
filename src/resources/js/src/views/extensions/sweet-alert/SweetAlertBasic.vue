<template>
  <b-card-code title="Basic Examples">
    <b-card-text class="mb-0">
      SweetAlert automatically centers itself on the page and looks great no matter if you're using a desktop computer, mobile or tablet. It's even highly customizable, as you can see below!
    </b-card-text>

    <!-- trigger buttons -->
    <div class="demo-inline-spacing">
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
        @click="showAlert"
      >
        Basic
      </b-button>
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
        @click="withTitle"
      >
        With Title
      </b-button>
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
        @click="withFooter"
      >
        With Footer
      </b-button>
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
        @click="withHtml"
      >
        HTML
      </b-button>
    </div>

    <template #code>
      {{ codeBasic }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import { BCardText, BButton } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { codeBasic } from './code'

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
      codeBasic,
    }
  },
  methods: {

    // basic
    showAlert() {
      this.$swal({
        title: 'Any fool can use a computer',
        customClass: {
          confirmButton: 'btn btn-primary',
        },
        buttonsStyling: false,
      })
    },

    // whith title
    withTitle() {
      this.$swal({
        title: 'The Internet?,',
        text: 'That thing is still around?',
        customClass: {
          confirmButton: 'btn btn-primary',
        },
        buttonsStyling: false,
      })
    },

    // with footer
    withFooter() {
      this.$swal({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href="javascript:void(0)">Why do I have this issue?</a>',
        customClass: {
          confirmButton: 'btn btn-primary',
        },
        buttonsStyling: false,
      })
    },

    // with html
    withHtml() {
      this.$swal({
        title: '<span class="font-weight-bolder">HTML <u>example</u></span>',
        icon: 'info',
        html:
          'You can use <span class="font-weight-bolder">bold text</span>, '
          + '<a href="https://pixinvent.com/" target="_blank">links</a> '
          + 'and other HTML tags',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: 'Great!',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        cancelButtonAriaLabel: 'Thumbs down',
        customClass: {
          confirmButton: 'btn btn-primary',
          cancelButton: 'btn btn-outline-danger ml-1',
        },
        buttonsStyling: false,
      })
    },
  },
}
</script>

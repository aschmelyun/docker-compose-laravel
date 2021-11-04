export const codeBasic = `
<template>
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
</template>

<script>
import {  BButton } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BButton,
  },
  directives: {
    Ripple,
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
`

export const codePosition = `
<template>
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
</template>

<script>
import { BButton } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BButton,
  },
  directives: {
    Ripple,
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
`

export const codeAnimation = `
<template>
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
</template>

<script>
import {  BButton } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import 'animate.css'

export default {
  components: {
    BCardCode,
    BButton,
  },
  directives: {
    Ripple,
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
`

export const codeTypes = `
<template>
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
</template>

<script>
import {  BButton } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BCardCode,
    BButton,
  },
  directives: {
    Ripple,
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
`

export const codeOptions = `
<template>
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
</template>

<script>
import { BButton } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BButton,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      timerInterval: null,
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
          return fetch(\`//api.github.com/users/\${login}\`)
            .then(response => {
              if (!response.ok) {
                throw new Error(response.statusText)
              }
              return response.json()
            })
            .catch(error => {
              this.$swal.showValidationMessage(\`Request failed:  \${error}\`)
            })
        },
      }).then(result => {
        if (result.value) {
          this.$swal({
            title: \`\${result.value.login}'s avatar\`,
            imageUrl: result.value.avatar_url,
            customClass: { confirmButton: 'btn btn-primary' },
          })
        }
      })
    },
  },
}
</script>
`

export const codeConfirm = `
<template>
  <!-- trigger buttons -->
  <div class="demo-inline-spacing">
    <div>
      <h5>Confirm Button Text</h5>
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
        @click="confirmText"
      >
        Confirm Text
      </b-button>
    </div>
    <div>
      <h5>Confirm Button Text</h5>
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
        @click="confirmButtonColor"
      >
        Confirm Button Color
      </b-button>
    </div>
  </div>
</template>

<script>
import { BButton } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BButton,
  },
  directives: {
    Ripple,
  },
  methods: {
    // confirm texrt
    confirmText() {
      this.$swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        customClass: {
          confirmButton: 'btn btn-primary',
          cancelButton: 'btn btn-outline-danger ml-1',
        },
        buttonsStyling: false,
      }).then(result => {
        if (result.value) {
          this.$swal({
            icon: 'success',
            title: 'Deleted!',
            text: 'Your file has been deleted.',
            customClass: {
              confirmButton: 'btn btn-success',
            },
          })
        }
      })
    },

    // comfirm button color
    confirmButtonColor() {
      this.$swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        customClass: {
          confirmButton: 'btn btn-primary',
          cancelButton: 'btn btn-outline-danger ml-1',
        },
        buttonsStyling: false,
      }).then(result => {
        if (result.value) {
          this.$swal({
            icon: 'success',
            title: 'Deleted!',
            text: 'Your file has been deleted.',
            customClass: {
              confirmButton: 'btn btn-success',
            },
          })
        } else if (result.dismiss === 'cancel') {
          this.$swal({
            title: 'Cancelled',
            text: 'Your imaginary file is safe :)',
            icon: 'error',
            customClass: {
              confirmButton: 'btn btn-success',
            },
          })
        }
      })
    },
  },
}
</script>
`

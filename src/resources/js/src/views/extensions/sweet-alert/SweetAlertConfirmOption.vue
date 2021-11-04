<template>
  <b-card-code title="Confirm Options">

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

    <template #code>
      {{ codeConfirm }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import { BButton } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { codeConfirm } from './code'

export default {
  components: {
    BButton,
    BCardCode,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      codeConfirm,
    }
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

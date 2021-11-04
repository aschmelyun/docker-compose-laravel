export const codeDirective = `
<template>
  <div class="d-flex">

    <!-- form input -->
    <b-form-group class="mb-0 mr-1">
      <b-form-input
        v-model="message"
      />
    </b-form-group>

    <!-- button -->
    <b-button
      v-clipboard:copy="message"
      v-clipboard:success="onCopy"
      v-clipboard:error="onError"
      v-ripple.400="'rgba(186, 191, 199, 0.15)'"
      variant="primary"
    >
      Copy!
    </b-button>
  </div>
</template>

<script>
import { BFormInput, BFormGroup, BButton } from 'bootstrap-vue'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BFormInput,
    BFormGroup,
    BButton,
    // eslint-disable-next-line vue/no-unused-components
    ToastificationContent,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      message: 'Copy Me!',
    }
  },
  methods: {
    onCopy() {
      this.$toast({
        component: ToastificationContent,
        props: {
          title: 'Text copied',
          icon: 'BellIcon',
        },
      })
    },
    onError() {
      this.$toast({
        component: ToastificationContent,
        props: {
          title: 'Failed to copy texts!',
          icon: 'BellIcon',
        },
      })
    },
  },
}
</script>
`

export const codeWithoutDirective = `
<template>
  <div class="d-flex">

    <!-- input -->
    <b-form-group class="mb-0 mr-1">
      <b-form-input
        v-model="message1"
      />
    </b-form-group>

    <!-- button -->
    <b-button
      v-ripple.400="'rgba(186, 191, 199, 0.15)'"
      variant="primary"
      @click="doCopy"
    >
      Copy!
    </b-button>
  </div>
</template>

<script>
import {BFormInput, BFormGroup, BButton, BCardText} from 'bootstrap-vue'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BFormInput,
    BFormGroup,
    BButton,
    BCardText,
    // eslint-disable-next-line vue/no-unused-components
    ToastificationContent,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      message1: 'Copy Me Without Directive',
    }
  },
  methods: {
    doCopy() {
      this.$copyText(this.message1).then(() => {
        this.$toast({
          component: ToastificationContent,
          props: {
            title: 'Text copied',
            icon: 'BellIcon',
          },
        })
      }, e => {
        this.$toast({
          component: ToastificationContent,
          props: {
            title: 'Can not copy!',
            icon: 'BellIcon',
          },
        })
      })
    },
  },
}
</script>
`

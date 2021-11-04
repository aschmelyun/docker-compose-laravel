<template>
  <b-card-code title="Using Directive">
    <b-card-text>Use directive on button to copy text</b-card-text>
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

    <template #code>
      {{ codeDirective }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import {
  BFormInput, BFormGroup, BButton, BCardText,
} from 'bootstrap-vue'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import Ripple from 'vue-ripple-directive'
import { codeDirective } from './code'

export default {
  components: {
    BCardCode,
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
      message: 'Copy Me!',
      codeDirective,
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

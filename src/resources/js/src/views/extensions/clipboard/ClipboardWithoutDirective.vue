<template>
  <b-card-code
    title="Without directive"
  >
    <b-card-text>
      <span>You can copy text without a specific button. Use </span>
      <code>$copyText</code>
      <span> to copy text when event got fired.</span>
    </b-card-text>

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

    <template #code>
      {{ codeWithoutDirective }}
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
import { codeWithoutDirective } from './code'

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
      message1: 'Copy Me Without Directive',
      codeWithoutDirective,
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
      }, () => {
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

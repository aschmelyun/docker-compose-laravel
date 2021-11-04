<template>
  <b-card-code title="Basic Toast">
    <b-card-text>
      <span>Push notifications to your visitors with a </span>
      <code>&lt;b-toast&gt;</code>
      <span> and </span>
      <code>&lt;b-toaster&gt;,</code>
      <span> lightweigt components which are easily customizable for generating alert messages.</span>
    </b-card-text>

    <b-button
      v-ripple.400="'rgba(113, 102, 240, 0.15)'"
      variant="outline-primary"
      @click="$bvToast.show('example-toast')"
    >
      Show toast
    </b-button>

    <!-- toast -->
    <b-toast id="example-toast">
      <template #toast-title>
        <div class="d-flex flex-grow-1 align-items-center mr-1">
          <b-img
            :src="require('@/assets/images/logo/logo.png')"
            class="mr-1"
            height="18"
            width="25"
            alt="Toast image"
          />
          <strong class="mr-auto">Vue Admin</strong>
          <small class="text-muted">11 mins ago</small>
        </div>
      </template>
      <span>Hello, world! This is a toast message. Hope you're doing well.. :)</span>
    </b-toast>

    <template #code>
      {{ codeBasic }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import {
  BButton, BToast, BImg, BCardText,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { codeBasic } from './code'

export default {
  components: {
    BCardCode,
    BButton,
    BCardText,
    BToast,
    BImg,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      codeBasic,
    }
  },
}
</script>

<template>
  <b-card-code title="Delay">
    <b-card-text>
      <span>Change to auto hide delay time via the </span>
      <code>auto-hide-delay</code>
      <span> prop (value is in milliseconds), which defaults to </span>
      <code>5000</code>
      <span> (minimum value </span>
      <code>1000</code>
      <span>). Or, disable the auto-hide feature completely by setting the </span>
      <code>no-auto-hide</code>
      <span> prop to </span>
      <code>true</code>
    </b-card-text>

    <div>
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
        @click="$bvToast.show('example-toast5')"
      >
        Delay
      </b-button>

      <!-- toast -->
      <b-toast
        id="example-toast5"
        auto-hide-delay="10000"
      >
        <template #toast-title>
          <div class="d-flex flex-grow-1 align-items-center mr-25">
            <b-img
              :src="require('@/assets/images/logo/logo.png')"
              class="rounded mr-2"
              height="18"
              width="25"
              alt="Toast image"
            />
            <strong class="mr-auto">Vue Admin</strong>
            <small class="text-muted">11 mins ago</small>
          </div>
        </template>
        <span>Hello, world! This is a toast message.</span>
      </b-toast>
    </div>

    <template #code>
      {{ codeToastDelay }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import {
  BToast, BButton, BImg, BCardText,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { codeToastDelay } from './code'

export default {
  components: {
    BCardCode,
    BToast,
    BButton,
    BImg,
    BCardText,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      codeToastDelay,
    }
  },
}
</script>

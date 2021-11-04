<template>
  <b-card-code title="Default spinner styling">
    <b-card-text>
      <span>The default overlay content is a </span>
      <code>&lt;b-spinner&gt;</code>
      <span> of type </span>
      <code>'border'</code>
      <span>. You can control the appearance of the spinner via the following props:</span>
    </b-card-text>

    <b-overlay
      show
      spinner-variant="primary"
      spinner-type="grow"
      spinner-small
      rounded="sm"
    >
      <b-card
        title="Card with spinner style"
        aria-hidden="true"
        class="mb-0"
      >
        <b-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat.
        </b-card-text>
        <b-button
          v-ripple.400="'rgba(255, 255, 255, 0.15)'"
          disabled
          variant="primary"
        >
          Button
        </b-button>
      </b-card>
    </b-overlay>

    <template #code>
      {{ codeSpinner }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import {
  BOverlay, BButton, BCard, BCardText,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { codeSpinner } from './code'

export default {
  components: {
    BCardCode,
    BOverlay,
    BButton,
    BCard,
    BCardText,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      codeSpinner,
    }
  },
}
</script>

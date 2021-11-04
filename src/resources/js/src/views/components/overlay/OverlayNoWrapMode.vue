<template>
  <b-card-code
    title="Non-wrapping mode"
  >
    <b-card-text>
      <span>By default, </span>
      <code>&lt;b-overlay&gt;</code>
      <span> wraps the content of the default slot. In some cases you may want to obscure a parent container. Use the </span>
      <code>no-wrap</code>
      <span> prop to disable rendering of the wrapping (and ignore the default slot). Note that this requires that the
        ancestor element that is to be obscured to have relative positioning (either via the utility class </span>
      <code>'position-relative'</code>
      <span> , or CSS style </span>
      <code>'position: relative;'</code>
      <span>).</span>
    </b-card-text>

    <div>
      <div class="position-relative p-2 bg-info">
        <b-card-text class="text-white font-weight-bold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </b-card-text>
        <b-card
          title="Card with parent overlay"
          class="mb-1"
        >
          <b-card-text>Laborum consequat non elit enim exercitation cillum.</b-card-text>
          <b-card-text>Click the button to toggle the overlay:</b-card-text>
          <b-button
            v-ripple.400="'rgba(113, 102, 240, 0.15)'"
            :disabled="show"
            variant="outline-primary"
            @click="show = true"
          >
            Show overlay
          </b-button>
        </b-card>
        <b-card-text class="text-white font-weight-bold mb-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </b-card-text>
        <b-overlay
          :show="show"
          no-wrap
        />
      </div>
      <b-button
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        class="mt-3"
        variant="primary"
        @click="show = !show"
      >
        Toggle overlay
      </b-button>
    </div>

    <template #code>
      {{ codeNoWrapMode }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import {
  BOverlay, BButton, BCard, BCardText,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { codeNoWrapMode } from './code'

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
      show: false,
      codeNoWrapMode,
    }
  },
}
</script>

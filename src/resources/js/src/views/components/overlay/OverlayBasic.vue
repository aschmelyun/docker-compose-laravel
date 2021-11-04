<template>
  <b-card-code title="Card with overlay">
    <b-overlay
      :show="show"
      rounded="sm"
    >
      <div>
        <b-card-text>
          <span>BootstrapVue's custom </span>
          <code>b-overlay</code>
          <span>
            component is used to visually obscure a particular element or component and its content. It signals to the
            user of a state change within the element or component and can be used for creating loaders,
            warnings/alerts, prompts, and more.
          </span>
        </b-card-text>

        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          :disabled="show"
          variant="outline-primary"
          @click="show = true"
        >
          Show overlay
        </b-button>
      </div>
    </b-overlay>

    <b-button
      v-ripple.400="'rgba(255, 255, 255, 0.15)'"
      variant="primary"
      class="mt-1"
      @click="show = !show"
    >
      Toggle overlay
    </b-button>

    <template #code>
      {{ codeBasic }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BOverlay, BButton, BCardText } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { codeBasic } from './code'

export default {
  components: {
    BCardCode,
    BOverlay,
    BButton,
    BCardText,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      show: false,
      codeBasic,
    }
  },
}
</script>

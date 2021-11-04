<template>
  <b-card-code title="Custom overlay content">
    <b-card-text>
      <span>Place custom content in the overlay (replacing the default spinner) via the optionally scoped slot </span>
      <code>overlay</code>
    </b-card-text>

    <div>
      <b-overlay
        :show="show"
        rounded="sm"
        @shown="onShown"
        @hidden="onHidden"
      >
        <div>
          <h6>Card with custom overlay content</h6>
          <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
          <b-card-text>Click the button to toggle the overlay:</b-card-text>
          <b-button
            ref="show"
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            :disabled="show"
            variant="primary"
            @click="show = true"
          >
            Show overlay
          </b-button>
        </div>
        <template #overlay>
          <div class="text-center">
            <feather-icon
              icon="ClockIcon"
              size="24"
            />
            <b-card-text id="cancel-label">
              Please wait...
            </b-card-text>
            <b-button
              ref="cancel"
              v-ripple.400="'rgba(255, 255, 255, 0.15)'"
              variant="outline-danger"
              size="sm"
              aria-describedby="cancel-label"
              @click="show = false"
            >
              Cancel
            </b-button>
          </div>
        </template>
      </b-overlay>
    </div>

    <template #code>
      {{ codeCustomContent }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BOverlay, BButton, BCardText } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { codeCustomContent } from './code'

export default {
  components: {
    BCardCode,
    BCardText,
    BOverlay,
    BButton,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      show: false,
      codeCustomContent,
    }
  },
  methods: {
    onShown() {
      // Focus the cancel button when the overlay is showing
      this.$refs.cancel.focus()
    },
    onHidden() {
      // Focus the show button when the overlay is removed
      this.$refs.show.focus()
    },
  },
}
</script>

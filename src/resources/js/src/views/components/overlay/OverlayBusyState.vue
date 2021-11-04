<template>
  <b-card-code title="Busy state input group">
    <b-card-text>In this example, we obscure the input and button:</b-card-text>
    <div>
      <b-overlay
        :show="busy"
        rounded="lg"
        opacity="0.6"
        @hidden="onHidden"
      >
        <template #overlay>
          <div class="d-flex align-items-center">
            <b-spinner
              small
              type="grow"
              variant="secondary"
            />
            <b-spinner
              type="grow"
              variant="dark"
            />
            <b-spinner
              small
              type="grow"
              variant="secondary"
            />

            <!-- We add an SR only text for screen readers -->
            <span class="sr-only">Please wait...</span>
          </div>
        </template>

        <b-input-group
          size="lg"
          :aria-hidden="busy ? 'true' : null"
        >
          <b-form-input
            v-model="value"
            :disabled="busy"
          />
          <b-input-group-append>
            <b-button
              ref="button"
              v-ripple.400="'rgba(255, 255, 255, 0.15)'"
              :disabled="busy"
              variant="primary"
              @click="onClick"
            >
              Do something
            </b-button>
          </b-input-group-append>
        </b-input-group>
      </b-overlay>
    </div>

    <template #code>
      {{ codeBusyState }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import {
  BOverlay, BInputGroup, BFormInput, BInputGroupAppend, BButton, BSpinner, BCardText,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { codeBusyState } from './code'

export default {
  components: {
    BOverlay,
    BInputGroup,
    BFormInput,
    BInputGroupAppend,
    BButton,
    BCardText,
    BSpinner,
    BCardCode,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      value: 'Some value',
      busy: false,
      timeout: null,
      codeBusyState,
    }
  },
  beforeDestroy() {
    this.clearTimeout()
  },
  methods: {
    clearTimeout() {
      if (this.timeout) {
        clearTimeout(this.timeout)
        this.timeout = null
      }
    },
    setTimeout(callback) {
      this.clearTimeout()
      this.timeout = setTimeout(() => {
        this.clearTimeout()
        callback()
      }, 5000)
    },
    onHidden() {
      // Return focus to the button
      this.$refs.button.focus()
    },
    onClick() {
      this.busy = true
      // Simulate an async request
      this.setTimeout(() => {
        this.busy = false
      })
    },
  },
}
</script>

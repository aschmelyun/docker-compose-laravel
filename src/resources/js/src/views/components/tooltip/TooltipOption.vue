<template>
  <b-card-code title="Tooltip Options">
    <b-card-text class="mb-0">
      <span>Use the </span>
      <code>nofade</code>
      <span> prop to turn off animation.</span>
      <span>Delay showing and hiding the tooltip (ms). If a number is supplied, delay is applied to both hide/show.
        Object structure is: </span>
      <code>delay: { "show": 500, "hide": 100 }</code>
    </b-card-text>

    <div class="demo-inline-spacing">
      <b-button
        id="tooltip-target-1"
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
      >
        No animation
      </b-button>
      <b-tooltip
        target="tooltip-target-1"
        triggers="hover"
        no-fade
      >
        Without Fade Animation        class="mb-1 mb-md-0"
      </b-tooltip>
      <b-button
        id="tooltip-target-2"
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
      >
        Delay Tooltip
      </b-button>
      <b-tooltip
        target="tooltip-target-2"
        :delay="delay"
      >
        Delay triggers
      </b-tooltip>
    </div>

    <template #code>
      {{ codeOptions }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import {
  VBTooltip, BButton, BTooltip, BCardText,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { codeOptions } from './code'

export default {
  components: {
    BCardCode,
    BTooltip,
    BButton,
    BCardText,
  },
  directives: {
    'b-tooltip': VBTooltip,
    Ripple,
  },
  data() {
    return {
      delay: { show: 500, hide: 500 },
      codeOptions,
    }
  },
}
</script>

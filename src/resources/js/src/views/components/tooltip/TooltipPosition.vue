<template>
  <b-card-code title="Tooltip Positions">
    <b-card-text class="mb-0">
      <span>Twelve options are available for positioning: </span>
      <code>top, topleft, topright, right, righttop, rightbottom, bottom, bottomleft, bottomright, left, lefttop,</code>
      <span> and </span>
      <code>leftbottom</code>
      <span> aligned. The default position is top.</span>
    </b-card-text>

    <div class="demo-inline-spacing">
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        v-b-tooltip.hover.top="'Tooltip on top!'"
        variant="outline-primary"
      >
        Tooltip on top
      </b-button>
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        v-b-tooltip.hover.right="'Tooltip on right!'"
        variant="outline-primary"
      >
        Tooltip on right
      </b-button>
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        v-b-tooltip.hover.left="'Tooltip on left!'"
        variant="outline-primary"
      >
        Tooltip on left
      </b-button>
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        v-b-tooltip.hover.bottom="'Tooltip on bottom!'"
        variant="outline-primary"
      >
        Tooltip on bottom
      </b-button>
    </div>

    <template #code>
      {{ codePosition }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import {
  BButton, VBTooltip, BCardText,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { codePosition } from './code'

export default {
  components: {
    BCardCode,
    BButton,
    BCardText,
  },
  directives: {
    'b-tooltip': VBTooltip,
    Ripple,
  },
  data() {
    return {
      codePosition,
    }
  },
}
</script>

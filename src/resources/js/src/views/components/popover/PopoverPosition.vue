<template>
  <b-card-code title="Popover Positions">
    <b-card-text class="mb-0">
      <span>Twelve options are available for positioning: </span>
      <code>top, topleft, topright, right, righttop, rightbottom, bottom, bottomleft, bottomright, left, lefttop,</code>
      <span> and </span>
      <code>leftbottom</code>
      <span> aligned. The default position is top. Positioning is relative to the trigger element.</span>
    </b-card-text>

    <div class="demo-inline-spacing">
      <b-button
        v-b-popover.hover.top="'Macaroon chocolate candy. I love carrot cake gingerbread cake lemon drops. Muffin sugar plum marzipan pie.'"
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        title="Popover on top"
        variant="outline-primary"
      >
        Popover on top
      </b-button>
      <b-button
        v-b-popover.hover.right="'Macaroon chocolate candy. I love carrot cake gingerbread cake lemon drops. Muffin sugar plum marzipan pie.'"
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        title="Popover on right"
        variant="outline-primary"
      >
        Popover on right
      </b-button>
      <b-button
        v-b-popover.hover.left="'Macaroon chocolate candy. I love carrot cake gingerbread cake lemon drops. Muffin sugar plum marzipan pie.'"
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        title="Popover on left"
        variant="outline-primary"
      >
        Popover on left
      </b-button>
      <b-button
        v-b-popover.hover.bottom="'Macaroon chocolate candy. I love carrot cake gingerbread cake lemon drops. Muffin sugar plum marzipan pie.'"
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        title="Popover on bottom"
        variant="outline-primary"
      >
        Popover on bottom
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
  BButton, VBPopover, BCardText,
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
    'b-popover': VBPopover,
    Ripple,
  },
  data() {
    return {
      codePosition,
    }
  },
}
</script>

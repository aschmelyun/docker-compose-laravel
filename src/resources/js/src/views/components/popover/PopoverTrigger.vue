<template>
  <b-card-code title="Popover Triggers">
    <b-card-text class="mb-0">
      <span>Popovers can be triggered (opened/closed) via any combination of </span>
      <code>click, hover</code>
      <span> and </span>
      <code>focus</code>
      <span> . The default trigger is </span>
      <code>click</code>
      <span> . Or a trigger of manual can be specified, where the popover can only be opened or closed
        programmatically.</span>
    </b-card-text>

    <div class="demo-inline-spacing">
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        v-b-popover.click="'Macaroon chocolate candy. I love carrot cake gingerbread cake lemon drops. Muffin sugar plum marzipan pie.'"
        title="On Cllick Trigger"
        variant="outline-primary"
      >
        On Cllick Trigger
      </b-button>
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        v-b-popover.focus="'Macaroon chocolate candy. I love carrot cake gingerbread cake lemon drops. Muffin sugar plum marzipan pie.'"
        title="On Focus Trigger"
        variant="outline-primary"
      >
        On Focus Trigger
      </b-button>
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        v-b-popover.hover="'Macaroon chocolate candy. I love carrot cake gingerbread cake lemon drops. Muffin sugar plum marzipan pie.'"
        title="On Hover Trigger"
        variant="outline-primary"
      >
        On Hover Trigger
      </b-button>
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        v-b-popover.hover.focus="'Macaroon chocolate candy. I love carrot cake gingerbread cake lemon drops. Muffin sugar plum marzipan pie.'"
        title="Hover + Focus Trigger"
        variant="outline-primary"
      >
        Hover + Focus Trigger
      </b-button>
    </div>

    <template #code>
      {{ codeTrigger }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import {
  VBPopover, BButton, BCardText,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { codeTrigger } from './code'

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
      codeTrigger,
    }
  },
}
</script>

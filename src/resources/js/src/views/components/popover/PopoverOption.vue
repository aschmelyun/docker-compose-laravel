<template>
  <b-card-code title="Popover Options">
    <div class="demo-inline-spacing">
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        v-b-popover.hover="'Tart macaroon marzipan I love soufflé apple pie wafer. Chocolate bar jelly caramels jujubes chocolate cake gummies.'"
        title="Title from title attribute"
        variant="outline-primary"
      >
        Title + Content
      </b-button>

      <b-button
        id="popover-target-1"
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
      >
        No animation
      </b-button>

      <!-- popover -->
      <b-popover
        target="popover-target-1"
        triggers="hover"
        no-fade
      >
        <template #title>
          Without Fade Animation
        </template>
        <span>Tart macaroon marzipan I love soufflé apple pie wafer. Chocolate bar jelly caramels jujubes chocolate cake gummies.</span>
      </b-popover>

      <b-button
        id="popover-target-2"
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
      >
        Delay popover
      </b-button>

      <!-- popover -->
      <b-popover
        target="popover-target-2"
        triggers="hover"
        :delay="delay"
      >
        <template #title>
          Click Triggered
        </template>
        <span>Tart macaroon marzipan I love soufflé apple pie wafer. Chocolate bar jelly caramels jujubes chocolate cake gummies.</span>
      </b-popover>
    </div>

    <template #code>
      {{ codeOption }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import {
  VBPopover, BButton, BPopover,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { codeOption } from './code'

export default {
  components: {
    BCardCode,
    BPopover,
    BButton,
  },
  directives: {
    'b-popover': VBPopover,
    Ripple,
  },
  data() {
    return {
      delay: { show: 500, hide: 500 },
      codeOption,
    }
  },
}
</script>

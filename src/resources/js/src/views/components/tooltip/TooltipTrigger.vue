<template>
  <b-card-code title="Tooltip Triggers">
    <b-card-text class="mb-0">
      Tooltip is triggered using - click | hover | focus | manual options.You may pass multiple triggers; separate them
      with a space.
    </b-card-text>

    <div class="demo-inline-spacing">
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        v-b-tooltip.click.v-primary
        title="On Cllick Trigger"
        variant="outline-primary"
      >
        On Cllick Trigger
      </b-button>
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        v-b-tooltip.hover.v-primary
        title="On Hover Trigger"
        variant="outline-primary"
      >
        On Hover Trigger
      </b-button>
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        v-b-tooltip.hover.focus.v-primary
        title="Hover + Focus Trigger"
        variant="outline-primary"
      >
        Hover + Focus Trigger
      </b-button>
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        v-b-tooltip.focus.v-primary
        title="On Focus Trigger"
        variant="outline-primary"
      >
        On Focus Trigger
      </b-button>
    </div>

    <template #code>
      {{ codeTriggers }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import {
  VBTooltip, BButton, BCardText,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { codeTriggers } from './code'

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
      codeTriggers,
    }
  },
}
</script>

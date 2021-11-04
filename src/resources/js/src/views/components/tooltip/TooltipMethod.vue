<template>
  <b-card-code title="Tooltip Methods">
    <b-card-text class="mb-0">
      This is considered a “manual” triggering of the tooltip. Tooltips with zero-length titles are never displayed.
    </b-card-text>

    <div class="demo-inline-spacing">
      <b-button
        id="tooltip-button-1"
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
        @click="showTooltip"
      >
        Show Toggle Tooltip
      </b-button>
      <b-tooltip
        target="tooltip-button-1"
        placement="top"
        triggers="click"
      >
        tooltip!
      </b-tooltip>

      <b-button
        id="tooltip-button-2"
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
        @click="hideTooltip"
      >
        Hide Toggle Tooltip
      </b-button>
      <b-tooltip
        target="tooltip-button-2"
        placement="top"
        triggers="hover"
      >
        tooltip!
      </b-tooltip>

      <b-button
        id="tooltip-button-3"
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
        @click="show = !show"
      >
        Toggle Tooltip
      </b-button>
      <b-tooltip
        :show.sync="show"
        target="tooltip-button-3"
        placement="top"
        triggers="click"
      >
        tooltip!
      </b-tooltip>

      <b-button
        id="tooltip-button-disable"
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
      >
        I have a tooltip
      </b-button>

      <b-button
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        :variant="disabled ? 'success':'danger'"
        @click="disabled = !disabled"
      >
        {{ disabled ? 'Enable' : 'Disable' }} Tooltip by prop
      </b-button>
      <b-tooltip
        ref="tooltip"
        :disabled.sync="disabled"
        target="tooltip-button-disable"
      >
        <span>Hello </span><strong>World!</strong>
      </b-tooltip>
    </div>

    <template #code>
      {{ codeMethods }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import {
  VBTooltip, BButton, BTooltip, BCardText,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { codeMethods } from './code'

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
      show: false,
      disabled: false,
      codeMethods,
    }
  },
  methods: {
    showTooltip() {
      this.$root.$emit('bv::show::tooltip', 'tooltip-button-1')
    },
    hideTooltip() {
      this.$root.$emit('bv::hide::tooltip', 'tooltip-button-2')
    },
  },
}
</script>

<template>
  <b-card-code title="Tooltip Events">
    <div class="demo-inline-spacing">

      <!-- show button -->
      <b-button
        id="tooltip-button-show-event"
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
      >
        Show Event Tooltip
      </b-button>
      <!-- tooltip -->
      <b-tooltip
        ref="tooltip-show"
        target="tooltip-button-show-event"
        triggers="click"
        @show="onShow"
      >
        tooltip!
      </b-tooltip>

      <!-- button shown -->
      <b-button
        id="tooltip-button-shown-event"
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
      >
        Shown Event Tooltip
      </b-button>
      <!-- tooltip -->
      <b-tooltip
        ref="tooltip-shown"
        target="tooltip-button-shown-event"
        triggers="click"
        @shown="onShown"
      >
        tooltip!
      </b-tooltip>

      <!-- button hide -->
      <b-button
        id="tooltip-button-hide-event"
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
      >
        Hide Event Tooltip
      </b-button>
      <!-- tooltip -->
      <b-tooltip
        ref="tooltip-hide"
        target="tooltip-button-hide-event"
        triggers="click"
        @hide="onHide"
      >
        tooltip!
      </b-tooltip>

      <!-- button hidden -->
      <b-button
        id="tooltip-button-hidden-event"
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
        class="mb-1 mb-xl-0"
      >
        Hidden Event Tooltip
      </b-button>

      <!-- tooltip -->
      <b-tooltip
        ref="tooltip-hidden"
        target="tooltip-button-hidden-event"
        triggers="click"
        @hidden="onHidden"
      >
        tooltip!
      </b-tooltip>
    </div>

    <template #code>
      {{ codeEvent }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import {
  VBTooltip, BButton, BTooltip,
} from 'bootstrap-vue'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import Ripple from 'vue-ripple-directive'
import { codeEvent } from './code'

export default {
  components: {
    BCardCode,
    BButton,
    BTooltip,
    // eslint-disable-next-line vue/no-unused-components
    ToastificationContent,
  },
  directives: {
    'b-tooltip': VBTooltip,
    Ripple,
  },
  data() {
    return {
      codeEvent,
    }
  },
  methods: {
    onShow() {
      this.$toast({
        component: ToastificationContent,
        props: {
          title: 'Show Event Tooltip',
          icon: 'BellIcon',
        },
      })
    },
    onShown() {
      this.$toast({
        component: ToastificationContent,
        props: {
          title: 'Shown Event Tooltip',
          icon: 'BellIcon',
        },
      })
    },
    onHide() {
      this.$toast({
        component: ToastificationContent,
        props: {
          title: 'Hide Event Tooltip',
          icon: 'BellIcon',
        },
      })
    },
    onHidden() {
      this.$toast({
        component: ToastificationContent,
        props: {
          title: 'Hidden Event Tooltip',
          icon: 'BellIcon',
        },
      })
    },
  },
}
</script>

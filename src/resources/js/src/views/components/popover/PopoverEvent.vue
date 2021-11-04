<template>
  <b-card-code title="Popover Events">
    <b-card-text class="mb-0">
      Popover have four events : <code>Show, Shown, Hide, Hidden</code>
    </b-card-text>

    <div class="demo-inline-spacing">

      <!-- button show -->
      <b-button
        id="popover-button-show-event"
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
      >
        Show Event popover
      </b-button>

      <!-- popover -->
      <b-popover
        ref="popover-show"
        target="popover-button-show-event"
        triggers="click"
        @show="onShow"
      >
        <template #title>
          Show Event Popover
        </template>
        <span>Bonbon chocolate cake. Pudding halvah pie apple pie topping marzipan pastry marzipan cupcake.</span>
      </b-popover>

      <!-- button shown -->
      <b-button
        id="popover-button-shown-event"
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
      >
        Shown Event popover
      </b-button>

      <!-- popover -->
      <b-popover
        ref="popover-shown"
        target="popover-button-shown-event"
        triggers="click"
        @shown="onShown"
      >
        <template #title>
          Shown Event Popover
        </template>
        <span>Bonbon chocolate cake. Pudding halvah pie apple pie topping marzipan pastry marzipan cupcake.</span>
      </b-popover>

      <!-- button hide -->
      <b-button
        id="popover-button-hide-event"
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
      >
        Hide Event popover
      </b-button>

      <!-- popover -->
      <b-popover
        ref="popover-hide"
        target="popover-button-hide-event"
        triggers="click"
        @hide="onHide"
      >
        <template #title>
          Hide Event Popover
        </template>
        <span>Bonbon chocolate cake. Pudding halvah pie apple pie topping marzipan pastry marzipan cupcake.</span>
      </b-popover>

      <!-- button hidden -->
      <b-button
        id="popover-button-hidden-event"
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
      >
        Hidden Event popover
      </b-button>

      <!-- popover -->
      <b-popover
        ref="popover-hidden"
        target="popover-button-hidden-event"
        triggers="click"
        @hidden="onHidden"
      >
        <template #title>
          Hidden Event Popover
        </template>
        <span>Bonbon chocolate cake. Pudding halvah pie apple pie topping marzipan pastry marzipan cupcake.</span>
      </b-popover>
    </div>

    <template #code>
      {{ codeEvent }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import {
  VBPopover, BButton, BPopover, BCardText,
} from 'bootstrap-vue'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import Ripple from 'vue-ripple-directive'
import { codeEvent } from './code'

export default {
  components: {
    BCardCode,
    BCardText,
    BButton,
    BPopover,
    // eslint-disable-next-line vue/no-unused-components
    ToastificationContent,
  },
  directives: {
    'b-popover': VBPopover,
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
          title: 'Show Event popover',
          icon: 'BellIcon',
        },
      })
    },
    onShown() {
      this.$toast({
        component: ToastificationContent,
        props: {
          title: 'Shown Event popover',
          icon: 'BellIcon',
        },
      })
    },
    onHide() {
      this.$toast({
        component: ToastificationContent,
        props: {
          title: 'Hide Event popover',
          icon: 'BellIcon',
        },
      })
    },
    onHidden() {
      this.$toast({
        component: ToastificationContent,
        props: {
          title: 'Hidden Event popover',
          icon: 'BellIcon',
        },
      })
    },
  },
}
</script>

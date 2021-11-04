<template>
  <b-card-code title="Popover Methods">
    <b-card-text class="mb-0">
      This is considered a “manual” popovering of the popover. popovers with zero-length titles are never displayed.
    </b-card-text>

    <div class="demo-inline-spacing">
      <b-button
        id="popover-button-1"
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
        @click="showPopover"
      >
        Show popover
      </b-button>

      <b-popover
        target="popover-button-1"
        placement="top"
        triggers="click"
      >
        <template #title>
          Show Method Popover
        </template>
        <span>Fruitcake candy cheesecake jelly beans cake gummies. Cotton candy I love sweet roll jujubes pastry cake halvah cake.</span>
      </b-popover>

      <b-button
        id="popover-button-2"
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
        @click="hidePopover"
      >
        Hide popover
      </b-button>

      <b-popover
        target="popover-button-2"
        placement="top"
        triggers="hover"
      >
        <template #title>
          Hide Method Popover
        </template>
        <span>Fruitcake candy cheesecake jelly beans cake gummies. Cotton candy I love sweet roll jujubes pastry cake halvah cake.</span>
      </b-popover>

      <b-button
        id="popover-button-3"
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
        @click="show = !show"
      >
        Toggle popover
      </b-button>

      <b-popover
        :show.sync="show"
        target="popover-button-3"
        placement="top"
        triggers="click"
      >
        <template #title>
          Toggle Method Popover
        </template>
        <span>Fruitcake candy cheesecake jelly beans cake gummies. Cotton candy I love sweet roll jujubes pastry cake halvah cake.</span>
      </b-popover>

      <b-button
        id="popover-button-disable"
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
      >
        Disable/Enable popover
      </b-button>

      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        :variant="disabled ? 'success':'danger'"
        @click="disabled = !disabled"
      >
        {{ disabled ? 'Enable' : 'Disable' }} popover by prop
      </b-button>

      <b-popover
        ref="popover"
        :disabled.sync="disabled"
        target="popover-button-disable"
      >
        <template #title>
          Disable/Enable Popover
        </template>
        <span>Fruitcake candy cheesecake jelly beans cake gummies. Cotton candy I love sweet roll jujubes pastry cake halvah cake.</span>
      </b-popover>
    </div>

    <template #code>
      {{ codeMethod }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import {
  VBPopover, BButton, BPopover, BCardText,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { codeMethod } from './code'

export default {
  components: {
    BCardCode,
    BPopover,
    BButton,
    BCardText,
  },
  directives: {
    'b-popover': VBPopover,
    Ripple,
  },
  data() {
    return {
      show: false,
      disabled: false,
      codeMethod,
    }
  },
  methods: {
    showPopover() {
      this.$root.$emit('bv::show::popover', 'popover-button-1')
    },
    hidePopover() {
      this.$root.$emit('bv::hide::popover', 'popover-button-2')
    },
  },
}
</script>

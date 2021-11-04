export const codeTooltipDefault = `
<template>
  <div class="d-flex align-item-center">
    <b-form-checkbox
      v-model="checked"
      v-b-tooltip.hover
      title="Default Tooltip"
      name="check-button"
      switch
      inline
      class="d-flex align-items-center"
    />
    <b-form-spinbutton
      id="demo-sb"
      v-model="value"
      v-b-tooltip.hover
      title="Default Tooltip"
      min="1"
      max="100"
      inline
    />
    <b-button
      v-ripple.400="'rgba(113, 102, 240, 0.15)'"
      v-b-tooltip.hover
      title="Default Tooltip"
      class="ml-1"
      variant="outline-primary"
    >
      Button
    </b-button>
  </div>
</template>

<script>
import {
  BFormCheckbox, VBTooltip, BFormSpinbutton, BButton,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BFormCheckbox,
    BFormSpinbutton,
    BButton,
  },
  directives: {
    'b-tooltip': VBTooltip,
    Ripple
  },
  data: () => ({
    checked: true,
    value: 50,
  }),
}
</script>
`

export const codePosition = `
<template>
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
</template>

<script>
import {BButton, VBTooltip,} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BCardCode,
    BButton,
  },
  directives: {
    'b-tooltip': VBTooltip,
    Ripple,
  },
}
</script>
`

export const codeVariantCustom = `
<template>
  <div class="demo-inline-spacing">

    <!-- default -->
    <b-button
      v-b-tooltip.hover
      title="Default variant"
      variant="gradient-primary"
    >
      Default
    </b-button>

    <!-- primary -->
    <b-button
      v-ripple.400="'rgba(113, 102, 240, 0.15)'"
      v-b-tooltip.hover.v-primary
      title="Primary variant"
      variant="outline-primary"
    >
      Primary
    </b-button>

    <!-- secondary -->
    <b-button
      v-ripple.400="'rgba(186, 191, 199, 0.15)'"
      v-b-tooltip.hover.v-secondary
      title="Secondary variant"
      variant="outline-secondary"
    >
      Secondary
    </b-button>

    <!-- success -->
    <b-button
      v-ripple.400="'rgba(40, 199, 111, 0.15)'"
      v-b-tooltip.hover.v-success
      title="Success variant"
      variant="outline-success"
    >
      Success
    </b-button>

    <!-- danger -->
    <b-button
      v-ripple.400="'rgba(234, 84, 85, 0.15)'"
      v-b-tooltip.hover.v-danger
      title="Danger variant"
      variant="outline-danger"
    >
      Danger
    </b-button>

    <!-- warning -->
    <b-button
      v-ripple.400="'rgba(255, 159, 67, 0.15)'"
      v-b-tooltip.hover.v-warning
      title="Warning variant"
      variant="outline-warning"
    >
      Warning
    </b-button>

    <!-- info -->
    <b-button
      v-ripple.400="'rgba(0, 207, 232, 0.15)'"
      v-b-tooltip.hover.v-info
      title="Info variant"
      variant="outline-info"
    >
      Info
    </b-button>

    <!-- dark -->
    <b-button
      v-ripple.400="'rgba(30, 30, 30, 0.15)'"
      v-b-tooltip.hover.v-dark
      title="Dark variant"
      variant="outline-dark"
    >
      Dark
    </b-button>
  </div>
</template>

<script>
import {VBTooltip, BButton} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BCardCode,
    BButton,
  },
  directives: {
    'b-tooltip': VBTooltip,
    Ripple,
  },
}
</script>
`

export const codeTriggers = `
<template>
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
</template>

<script>
import {
  VBTooltip, BButton,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BButton,
  },
  directives: {
    'b-tooltip': VBTooltip,
    Ripple,
  },
}
</script>
`

export const codeOptions = `
<template>
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
</template>

<script>
import {VBTooltip, BButton, BTooltip} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BTooltip,
    BButton,
  },
  directives: {
    'b-tooltip': VBTooltip,
    Ripple,
  },
  data() {
    return {
      delay: { show: 500, hide: 500 },
    }
  },
}
</script>
`

export const codeMethods = `
<template>
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
</template>

<script>
import {VBTooltip, BButton, BTooltip} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BTooltip,
    BButton,
  },
  directives: {
    'b-tooltip': VBTooltip,
    Ripple,
  },
  data() {
    return {
      show: false,
      disabled: false,
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
`

export const codeEvent = `
<template>
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
</template>

<script>
import {VBTooltip, BButton, BTooltip} from 'bootstrap-vue'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BButton,
    BTooltip,
    // eslint-disable-next-line vue/no-unused-components
    ToastificationContent,
  },
  directives: {
    'b-tooltip': VBTooltip,
    Ripple,
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
`

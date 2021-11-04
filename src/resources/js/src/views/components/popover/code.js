export const codePosition = `
<template>
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
</template>

<script>
import { BButton, VBPopover} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BButton,
  },
  directives: {
    'b-popover': VBPopover,
    Ripple,
  },
}
</script>
`

export const codeTrigger = `
<template>
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
</template>

<script>
import {VBPopover, BButton} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BButton,
  },
  directives: {
    'b-popover': VBPopover,
    Ripple,
  },
}
</script>
`

export const codeOption = `
<template>
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
</template>

<script>
import { VBPopover, BButton, BPopover} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
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

    }
  },
}
</script>
`

export const codeMethod = `
<template>
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
</template>

<script>
import {VBPopover, BButton, BPopover} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BPopover,
    BButton,
  },
  directives: {
    'b-popover': VBPopover,
    Ripple,
  },
 data() {
    return {
      show: false,
      disabled: false,
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
`

export const codeEvent = `
<template>
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
</template>

<script>
import { VBPopover, BButton, BPopover} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BButton,
    BPopover,
  },
  directives: {
    'b-popover': VBPopover,
    Ripple,
  },
  methods: {
    onShow() {
      // eslint-disable-next-line
      alert('Show event fired.')
    },
    onShown() {
      // eslint-disable-next-line
      alert('Shown event fired.')
    },
    onHide() {
      // eslint-disable-next-line
      alert('Hide event fired.')
    },
    onHidden() {
      // eslint-disable-next-line
      alert('Hidden event fired.')
    },
  },
}
</script>
`

export const codeVariant = `
<template>
  <div class="demo-inline-spacing">

    <!-- default -->
    <b-button
      id="popover-button-default"
      variant="gradient-primary"
    >
      Default
    </b-button>

    <b-popover
      target="popover-button-default"
      triggers="focus"
      placement="top"
    >
      <template #title>
        <span>Default!</span>
      </template>
      <span>Macaroon chocolate candy. I love carrot cake gingerbread cake lemon drops. Muffin sugar plum marzipan pie.</span>
    </b-popover>

    <!-- primary -->
    <b-button
      id="popover-button-variant"
      v-ripple.400="'rgba(113, 102, 240, 0.15)'"
      variant="outline-primary"
    >
      Primary
    </b-button>

    <b-popover
      target="popover-button-variant"
      variant="primary"
      triggers="focus"
      placement="top"
    >
      <template #title>
        <span>Primary!</span>
      </template>
      <span>Macaroon chocolate candy. I love carrot cake gingerbread cake lemon drops. Muffin sugar plum marzipan pie.</span>
    </b-popover>

    <!-- secondary -->
    <b-button
      id="popover-button-secondary"
      v-ripple.400="'rgba(186, 191, 199, 0.15)'"
      variant="outline-secondary"
    >
      Secondary
    </b-button>

    <b-popover
      target="popover-button-secondary"
      variant="secondary"
      triggers="focus"
      placement="top"
    >
      <template #title>
        <span>Secondary!</span>
      </template>
      <span>Macaroon chocolate candy. I love carrot cake gingerbread cake lemon drops. Muffin sugar plum marzipan pie.</span>
    </b-popover>

    <!-- success -->
    <b-button
      id="popover-button-success"
      v-ripple.400="'rgba(40, 199, 111, 0.15)'"
      variant="outline-success"
    >
      Success
    </b-button>

    <b-popover
      target="popover-button-success"
      variant="success"
      triggers="focus"
      placement="top"
    >
      <template #title>
        <span>Success!</span>
      </template>
      <span>Macaroon chocolate candy. I love carrot cake gingerbread cake lemon drops. Muffin sugar plum marzipan pie.</span>
    </b-popover>

    <!-- danger -->
    <b-button
      id="popover-button-danger"
      v-ripple.400="'rgba(234, 84, 85, 0.15)'"
      variant="outline-danger"
    >
      Danger
    </b-button>

    <b-popover
      target="popover-button-danger"
      variant="danger"
      triggers="focus"
      placement="top"
    >
      <template #title>
        <span>Danger!</span>
      </template>
      <span>Macaroon chocolate candy. I love carrot cake gingerbread cake lemon drops. Muffin sugar plum marzipan pie.</span>
    </b-popover>

    <!-- warning -->
    <b-button
      id="popover-button-warning"
      v-ripple.400="'rgba(255, 159, 67, 0.15)'"
      variant="outline-warning"
    >
      Warning
    </b-button>

    <b-popover
      target="popover-button-warning"
      variant="warning"
      triggers="focus"
      placement="top"
    >
      <template #title>
        <span>Warning!</span>
      </template>
      <span>Macaroon chocolate candy. I love carrot cake gingerbread cake lemon drops. Muffin sugar plum marzipan pie.</span>
    </b-popover>

    <!-- info -->
    <b-button
      id="popover-button-info"
      v-ripple.400="'rgba(0, 207, 232, 0.15)'"
      variant="outline-info"
    >
      Info
    </b-button>

    <b-popover
      target="popover-button-info"
      variant="info"
      triggers="focus"
      placement="top"
    >
      <template #title>
        <span>Info!</span>
      </template>
      <span>Macaroon chocolate candy. I love carrot cake gingerbread cake lemon drops. Muffin sugar plum marzipan pie.</span>
    </b-popover>

    <!-- info -->
    <b-button
      id="popover-button-dark"
      v-ripple.400="'rgba(30, 30, 30, 0.15)'"
      variant="outline-dark"
    >
      Dark
    </b-button>

    <b-popover
      target="popover-button-dark"
      variant="dark"
      triggers="focus"
      placement="top"
    >
      <template #title>
        <span>Info!</span>
      </template>
      <span>Macaroon chocolate candy. I love carrot cake gingerbread cake lemon drops. Muffin sugar plum marzipan pie.</span>
    </b-popover>
  </div>
</template>

<script>
import { BButton, VBPopover, BPopover } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BButton,
    BPopover,
  },
  directives: {
    'b-popover': VBPopover,
    Ripple,
  },
}
</script>
`

export const codeAdvance = `
<template>
  <div id="my-container">
    <div class="my-1">
      <!-- Our triggering (target) element -->
      <b-button
        id="popover-reactive-1"
        ref="button"
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        variant="primary"
      >
        Reactive Content Using Slots
      </b-button>
    </div>

    <!-- Output from the popover interaction -->
    <b-card
      v-if="input1Return && input2Return"
      title="Returned values:"
      class="shadow-none border mb-0"
    >
      <p
        class="card-text"
        style="max-width: 20rem;"
      >
        Name: <strong>{{ input1Return }}</strong><br>
        Color: <strong>{{ input2Return }}</strong>
      </p>
    </b-card>

    <!-- Our popover title and content render container -->
    <!-- We use placement 'auto' so popover fits in the best spot on viewport -->
    <!-- We specify the same container as the trigger button, so that popover is close to button -->
    <b-popover
      ref="popover"
      target="popover-reactive-1"
      triggers="click"
      :show.sync="popoverShow"
      placement="auto"
      container="my-container"
      @show="onShow"
      @shown="onShown"
      @hidden="onHidden"
    >
      <template v-slot:title>
        <div class="d-flex justify-content-between align-items-center">
          <span>Interactive Content</span>
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            class="close"
            variant="transparent"
            aria-label="Close"
            @click="onClose"
          >
            <span
              class="d-inline-block text-white"
              aria-hidden="true"
            >&times;</span>
          </b-button>
        </div>
      </template>

      <div>
        <b-form-group
          label="Name"
          label-for="popover-input-1"
          label-cols="3"
          :state="input1state"
          class="mb-1"
          description="Enter your name"
          invalid-feedback="This field is required"
        >
          <b-form-input
            id="popover-input-1"
            ref="input1"
            v-model="input1"
            :state="input1state"
            size="sm"
          />
        </b-form-group>

        <b-form-group
          label="Color"
          label-for="popover-input-2"
          label-cols="3"
          :state="input2state"
          class="mb-1"
          description="Pick a color"
          invalid-feedback="This field is required"
        >
          <b-form-select
            id="popover-input-2"
            v-model="input2"
            :state="input2state"
            :options="options"
            size="sm"
          />
        </b-form-group>

        <b-alert
          show
          class="small mb-1"
        >
          <div class="alert-body">
            <strong>Current Values:</strong><br>
            Name: <strong>{{ input1 }}</strong><br>
            Color: <strong>{{ input2 }}</strong>
          </div>
        </b-alert>

        <b-button
          v-ripple.400="'rgba(255, 255, 255, 0.15)'"
          size="sm"
          variant="danger"
          class="mr-1"
          @click="onClose"
        >
          Cancel
        </b-button>
        <b-button
          v-ripple.400="'rgba(255, 255, 255, 0.15)'"
          size="sm"
          variant="primary"
          @click="onOk"
        >
          Ok
        </b-button>
      </div>
    </b-popover>
  </div>
</template>

<script>
import {
  BPopover, BButton, BAlert, BFormGroup, BFormSelect, BFormInput, BCard,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BPopover,
    BButton,
    BAlert,
    BFormGroup,
    BFormSelect,
    BFormInput,
    BCard,
  },
  directives: {
    Ripple,
  },
  data: () => ({
    input1: '',
    input1state: null,
    input2: '',
    input2state: null,
    options: [{ text: '- Choose 1 -', value: '' }, 'Red', 'Green', 'Blue'],
    input1Return: '',
    input2Return: '',
    popoverShow: false,
  }),
  watch: {
    input1(val) {
      if (val) {
        this.input1state = true
      }
    },
    input2(val) {
      if (val) {
        this.input2state = true
      }
    },
  },
  methods: {
    onClose() {
      this.popoverShow = false
    },
    onOk() {
      if (!this.input1) {
        this.input1state = false
      }
      if (!this.input2) {
        this.input2state = false
      }
      if (this.input1 && this.input2) {
        this.onClose()
        // Return our popover form results
        this.input1Return = this.input1
        this.input2Return = this.input2
      }
    },
    onShow() {
      // This is called just before the popover is shown
      // Reset our popover form variables
      this.input1 = ''
      this.input2 = ''
      this.input1state = null
      this.input2state = null
      this.input1Return = ''
      this.input2Return = ''
    },
    onShown() {
      // Called just after the popover has been shown
      // Transfer focus to the first input
      this.focusRef(this.$refs.input1)
    },
    onHidden() {
      // Called just after the popover has finished hiding
      // Bring focus back to the button
      this.focusRef(this.$refs.button)
    },
    focusRef(ref) {
      // Some references may be a component, functional component, or plain element
      // This handles that check before focusing, assuming a \`focus()\` method exists
      // We do this in a double \`$nextTick()\` to ensure components have
      // updated & popover positioned first
      this.$nextTick(() => {
        this.$nextTick(() => {
          (ref.$el || ref).focus()
        })
      })
    },
  },
}
</script>
`

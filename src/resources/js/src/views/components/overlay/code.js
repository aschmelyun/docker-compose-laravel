export const codeBasic = `
<template>
  <div>
    <b-overlay
      :show="show"
      rounded="sm"
    >
      <div>
        <b-card-text>
          <span>BootstrapVue's custom </span>
          <code>b-overlay</code>
          <span>
            component is used to visually obscure a particular element or component and its content. It signals to the
            user of a state change within the element or component and can be used for creating loaders,
            warnings/alerts, prompts, and more.
          </span>
        </b-card-text>

        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          :disabled="show"
          variant="outline-primary"
          @click="show = true"
        >
          Show overlay
        </b-button>
      </div>
    </b-overlay>

    <b-button
      v-ripple.400="'rgba(255, 255, 255, 0.15)'"
      variant="primary"
      class="mt-1"
      @click="show = !show"
    >
      Toggle overlay
    </b-button>
  </div>
</template>

<script>
import { BOverlay, BButton, BCardText } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BOverlay,
    BButton,
    BCardText,
  },
  directives: {
    Ripple,
  },
  data: () => ({
    show: false,
  }),
}
</script>
`

export const codeBackdrop = `
<template>
  <b-row>
    <b-col
      lg="6"
      aria-controls="overlay-background"
    >
      <b-form-group
        label="Variant"
        label-for="bg-variant"
        label-cols-sm="4"
        label-cols-lg="12"
      >
        <b-form-select
          id="bg-variant"
          v-model="variant"
          :options="variants"
        />
      </b-form-group>
      <b-form-group
        label="Opacity"
        label-for="bg-opacity"
        label-cols-sm="4"
        label-cols-lg="12"
      >
        <b-input-group>
          <b-form-input
            id="bg-opacity"
            v-model="opacity"
            type="range"
            number
            min="0"
            max="1"
            step="0.01"
          />
          <b-input-group-append
            is-text
            class="text-monospace"
          >
            {{ opacity.toFixed(2) }}
          </b-input-group-append>
        </b-input-group>
      </b-form-group>
      <b-form-group
        label="Blur"
        label-for="bg-blur"
        label-cols-sm="4"
        label-cols-lg="12"
        class="mb-2 mb-lg-0"
      >
        <b-form-select
          id="bg-blur"
          v-model="blur"
          :options="blurs"
        />
      </b-form-group>
    </b-col>
    <b-col lg="6">
      <b-overlay
        id="overlay-background"
        show
        :variant="variant"
        :opacity="opacity"
        :blur="blur"
        rounded="sm"
      >
        <b-card
          title="Card with overlay"
          aria-hidden="true"
          class="mb-0"
        >
          <b-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            ex ea commodo consequat.
          </b-card-text>
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            disabled
            variant="primary"
          >
            Button
          </b-button>
        </b-card>
      </b-overlay>
    </b-col>
  </b-row>
</template>

<script>
  import {
    BRow,
    BCol,
    BFormGroup,
    BFormSelect,
    BFormInput,
    BInputGroupAppend,
    BCard,
    BOverlay,
    BButton,
    BInputGroup,
  } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

  export default {
    components: {
      BRow,
      BCol,
      BFormGroup,
      BFormSelect,
      BFormInput,
      BInputGroupAppend,
      BCard,
      BOverlay,
      BButton,
      BCardText,
      BInputGroup,
    },
    directives: {
    Ripple,
  },
    data: () => ({
      variant: 'light',
      opacity: 0.85,
      blur: '2px',
      variants: ['transparent', 'white', 'light', 'dark', 'primary', 'secondary', 'success', 'danger', 'warning', 'info'],
      blurs: [{ text: 'None', value: '' }, '1px', '2px', '5px', '0.5em', '1rem'],
    }),
  }
</script>
`

export const codeFade = `
<template>
  <div>
    <b-overlay
      :show="show"
      rounded="sm"
      no-fade
    >
      <div
        title="Card with overlay"
        :aria-hidden="show ? 'true' : null"
      >
        <b-card-text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio voluptatibus doloremque dolor nesciunt
          est nobis consequuntur maxime ea ipsam? Doloribus quidem doloremque ad laudantium ullam eos, consequuntur
          velit quas vero.
        </b-card-text>

        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          :disabled="show"
          variant="outline-primary"
          @click="show = true"
        >
          Show overlay
        </b-button>
      </div>
    </b-overlay>

    <!-- trigger button -->
    <b-button
      v-ripple.400="'rgba(255, 255, 255, 0.15)'"
      variant="primary"
      class="mt-1"
      @click="show = !show"
    >
      Toggle overlay
    </b-button>
  </div>
</template>

<script>
import { BOverlay, BButton, BCardText } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

  export default {
    components: {
      BOverlay,
      BButton,
      BCardText,
    },
    directives: {
    Ripple,
  },
    data: () => ({
      show: false,
    }),
  }
</script>
`

export const codeSpinner = `
<template>
  <b-overlay
    show
    spinner-variant="primary"
    spinner-type="grow"
    spinner-small
    rounded="sm"
  >
    <b-card
      title="Card with spinner style"
      aria-hidden="true"
      class="mb-0"
    >
      <b-card-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
        ea commodo consequat.
      </b-card-text>
      <b-button
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        disabled
        variant="primary"
      >
        Button
      </b-button>
    </b-card>
  </b-overlay>
</template>

<script>
import { BOverlay, BButton, BCard, BCardText} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BOverlay,
    BButton,
    BCard,
    BCardText,
  },
  directives: {
    Ripple,
  },
}
</script>
`

export const codeCornerRounded = `
<template>
  <div>
    <b-button
      v-ripple.400="'rgba(255, 255, 255, 0.15)'"
      variant="primary"
      @click="show = !show"
    >
      Toggle overlay
    </b-button>

    <b-row class="text-center mt-2">
      <b-col md="6">
        <b-card-text>With rounding</b-card-text>
        <b-overlay
          :show="show"
          class="d-inline-block"
          rounded="circle"
        >
          <b-img
            rounded="circle"
            height="300"
            :src="require('@/assets/images/banner/banner-27.jpg')"
            alt="Image 1"
          />
        </b-overlay>
      </b-col>
      <b-col
        md="6"
        class="mt-1 mt-md-0"
      >
        <b-card-text>Without rounding</b-card-text>
        <b-overlay
          :show="show"
          class="d-inline-block"
        >
          <b-img
            rounded="circle"
            height="300"
            :src="require('@/assets/images/banner/banner-27.jpg')"
            alt="Image 1"
          />
        </b-overlay>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import {BOverlay, BButton, BImg, BRow, BCol, BCardText} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BOverlay,
    BButton,
    BCardText,
    // eslint-disable-next-line vue/no-unused-components
    BImg,
    BRow,
    BCol,
  },
  directives: {
    Ripple,
  },
  data: () => ({
    show: false,
  }),
}
</script>
`

export const codeCustomContent = `
<template>
  <div>
    <b-overlay :show="show" rounded="sm" @shown="onShown" @hidden="onHidden">
    <div>
      <h6>Card with custom overlay content</h6>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <p>Click the button to toggle the overlay:</p>
      <b-button v-ripple.400="'rgba(255, 255, 255, 0.15)'" ref="show" :disabled="show" variant="primary" @click="show = true">
        Show overlay
      </b-button>
    </div>
    <template #overlay>
      <div class="text-center">
        <b-icon icon="stopwatch" font-scale="3" animation="cylon" />
        <p id="cancel-label">
          Please wait...
        </p>
      <b-button
          ref="cancel"
          v-ripple.400="'rgba(255, 255, 255, 0.15)'"
          variant="outline-danger"
          size="sm"
          aria-describedby="cancel-label"
          @click="show = false"
        >
          Cancel
      </b-button>
    </template>
  </div>
</template>

<script>
import { BOverlay, BButton } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BOverlay,
    BButton,
  },
  directives: {
    Ripple,
  },
  data: () => ({
    show: false,
  }),
  methods: {
    onShown() {
      // Focus the cancel button when the overlay is showing
      this.$refs.cancel.focus()
    },
    onHidden() {
      // Focus the show button when the overlay is removed
      this.$refs.show.focus()
    },
  },
}
</script>
`

export const codeNoWrapMode = `
<template>
 <div>
    <div class="position-relative p-2 bg-info">
      <b-card-text class="text-white font-weight-bold">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </b-card-text>
      <b-card
        title="Card with parent overlay"
        class="mb-1"
      >
        <b-card-text>Laborum consequat non elit enim exercitation cillum.</b-card-text>
        <b-card-text>Click the button to toggle the overlay:</b-card-text>
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          :disabled="show"
          variant="outline-primary"
          @click="show = true"
        >
          Show overlay
        </b-button>
      </b-card>
      <b-card-text class="text-white font-weight-bold mb-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </b-card-text>
      <b-overlay
        :show="show"
        no-wrap
      />
    </div>
    <b-button
      v-ripple.400="'rgba(255, 255, 255, 0.15)'"
      class="mt-3"
      variant="primary"
      @click="show = !show"
    >
      Toggle overlay
    </b-button>
  </div>
</template>

<script>
import { BOverlay, BButton, BCard, BCardText } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BOverlay,
    BButton,
    BCard,
    BCardText,
  },
   directives: {
    Ripple,
  },
  data: () => ({
    show: false,
  }),
}
</script>
`

export const codeForm = `
<template>
  <div>
    <b-form
      class="position-relative"
      @submit.prevent="onSubmit"
    >
      <b-form-group
        label="Name"
        label-for="form-name"
        label-cols-lg="2"
      >
        <b-input-group>
          <b-input-group-prepend is-text>
            <b-icon icon="person-fill" />
          </b-input-group-prepend>
          <b-form-input
            id="form-name"
            :disabled="busy"
          />
        </b-input-group>
      </b-form-group>
      <b-form-group
        label="Email"
        label-for="form-mail"
        label-cols-lg="2"
      >
        <b-input-group>
          <b-input-group-prepend is-text>
            <b-icon icon="envelope-fill" />
          </b-input-group-prepend>
          <b-form-input
            id="form-email"
            type="email"
            :disabled="busy"
          />
        </b-input-group>
      </b-form-group>
      <b-form-group
        label="Image"
        label-for="form-image"
        label-cols-lg="2"
      >
        <b-input-group>
          <b-input-group-prepend is-text>
            <b-icon icon="image-fill" />
          </b-input-group-prepend>
          <b-form-file
            id="form-image"
            :disabled="busy"
            accept="image/*"
          />
        </b-input-group>
      </b-form-group>
      <div class="d-flex justify-content-center">
        <b-button
          v-ripple.400="'rgba(255, 255, 255, 0.15)'"
          ref="submit"
          type="submit"
          :disabled="busy"
        >
          Submit
        </b-button>
      </div>

      <b-overlay
        :show="busy"
        no-wrap
        @shown="onShown"
        @hidden="onHidden"
      >
        <template v-slot:overlay>
          <div
            v-if="processing"
            class="text-center p-4 bg-primary text-light rounded"
          >
            <b-icon
              icon="cloud-upload"
              font-scale="4"
            />
            <div class="mb-3">
              Processing...
            </div>
            <b-progress
              min="1"
              max="20"
              :value="counter"
              variant="success"
              height="3px"
              class="mx-n4 rounded-0"
            />
          </div>
          <div
            v-else
            ref="dialog"
            tabindex="-1"
            role="dialog"
            aria-modal="false"
            aria-labelledby="form-confirm-label"
            class="text-center p-3"
          >
            <p><strong id="form-confirm-label">Are you sure?</strong></p>
            <div class="d-flex">
              <b-button
                v-ripple.400="'rgba(234, 84, 85, 0.15)'"
                variant="outline-danger"
                class="mr-3"
                @click="onCancel"
              >
                Cancel
              </b-button>
              <b-button
                v-ripple.400="'rgba(40, 199, 111, 0.15)'"
                variant="outline-success"
                @click="onOK"
              >
                OK
              </b-button>
            </div>
          </div>
        </template>
      </b-overlay>
    </b-form>
  </div>
</template>

<script>
import {
  BButton,
  BOverlay,
  BForm,
  BProgress,
  BIcon,
  BFormGroup,
  BInputGroup,
  BInputGroupPrepend,
  BFormInput,
  BFormFile,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BButton,
    BOverlay,
    BForm,
    BProgress,
    BIcon,
    BFormGroup,
    BInputGroup,
    BInputGroupPrepend,
    BFormInput,
    BFormFile,
  },
  directives: {
    Ripple,
  },
  data: () => ({
    busy: false,
    processing: false,
    counter: 1,
    interval: null,
  }),
  beforeDestroy() {
    this.clearInterval()
  },
  methods: {
    clearInterval() {
      if (this.interval) {
        clearInterval(this.interval)
        this.interval = null
      }
    },
    onShown() {
      // Focus the dialog prompt
      this.$refs.dialog.focus()
    },
    onHidden() {
      // In this case, we return focus to the submit button
      // You may need to alter this based on your application requirements
      this.$refs.submit.focus()
    },
    onSubmit() {
      this.processing = false
      this.busy = true
    },
    onCancel() {
      this.busy = false
    },
    onOK() {
      this.counter = 1
      this.processing = true
      // Simulate an async request
      this.clearInterval()
      this.interval = setInterval(() => {
        if (this.counter < 20) {
          this.counter += 1
        } else {
          this.clearInterval()
          this.$nextTick(() => {
            // eslint-disable-next-line
            this.busy = this.processing = false
          })
        }
      }, 350)
    },
  },
}
</script>
 `

export const codeBusyState = `
<template>
  <div>
    <b-overlay
      :show="busy"
      rounded="lg"
      opacity="0.6"
      @hidden="onHidden"
    >
      <template v-slot:overlay>
        <div class="d-flex align-items-center">
          <b-spinner
            small
            type="grow"
            variant="secondary"
          />
          <b-spinner
            type="grow"
            variant="dark"
          />
          <b-spinner
            small
            type="grow"
            variant="secondary"
          />
          <!-- We add an SR only text for screen readers -->
          <span class="sr-only">Please wait...</span>
        </div>
      </template>
      <b-input-group
        size="lg"
        :aria-hidden="busy ? 'true' : null"
      >
        <b-form-input
          v-model="value"
          :disabled="busy"
        />
        <b-input-group-append>
          <b-button
           v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            ref="button"
            :disabled="busy"
            variant="primary"
            @click="onClick"
          >
            Do something
          </b-button>
        </b-input-group-append>
      </b-input-group>
    </b-overlay>
  </div>
</template>

<script>
import { BOverlay, BInputGroup, BFormInput, BInputGroupAppend, BButton, BSpinner} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BOverlay,
    BInputGroup,
    BFormInput,
    BInputGroupAppend,
    BButton,
    BSpinner,
  },
    directives: {
    Ripple,
  },
  data: () => ({
    value: 'Some value',
    busy: false,
    timeout: null,
  }),
  beforeDestroy() {
    this.clearTimeout()
  },
  methods: {
    clearTimeout() {
      if (this.timeout) {
        clearTimeout(this.timeout)
        this.timeout = null
      }
    },
    setTimeout(callback) {
      this.clearTimeout()
      this.timeout = setTimeout(() => {
        this.clearTimeout()
        callback()
      }, 5000)
    },
    onHidden() {
      // Return focus to the button
      this.$refs.button.focus()
    },
    onClick() {
      this.busy = true
      // Simulate an async request
      this.setTimeout(() => {
        this.busy = false
      })
    },
  },
}
</script>
`

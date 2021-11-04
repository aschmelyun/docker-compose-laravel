<template>
  <b-card-code title="Form confirmation prompt and upload status">
    <b-card-text>
      <span>This example is a bit more complex, but shows the use of </span>
      <code>no-wrap</code>
      <span> , and using the </span>
      <code>overlay</code>
      <span> slot to present the user with a prompt dialog, and once confirmed it shows a uploading status indicator. This
        example also demonstrates additional accessibility markup.
      </span>
    </b-card-text>

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
              <feather-icon
                icon="UserIcon"
              />
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
              <feather-icon icon="MailIcon" />
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
              <feather-icon icon="ImageIcon" />
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
            ref="submit"
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="primary"
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
          <template #overlay>
            <div
              v-if="processing"
              class="text-center p-3 bg-primary text-light rounded"
            >
              <feather-icon
                icon="UploadCloudIcon"
                size="20"
              />
              <div class="mb-2">
                Processing...
              </div>
              <b-progress
                min="1"
                max="20"
                :value="counter"
                variant="success"
                height="6px"
                class="mx-n3"
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
              <b-card-text class="font-weight-bolder">
                Are you sure?
              </b-card-text>
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

    <template #code>
      {{ codeForm }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import {
  BButton,
  BOverlay,
  BForm,
  BProgress,
  BFormGroup,
  BInputGroup,
  BInputGroupPrepend,
  BFormInput,
  BFormFile,
  BCardText,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { codeForm } from './code'

export default {
  components: {
    BButton,
    BOverlay,
    BForm,
    BProgress,
    BFormGroup,
    BInputGroup,
    BCardCode,
    BInputGroupPrepend,
    BFormInput,
    BFormFile,
    BCardText,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      busy: false,
      processing: false,
      counter: 1,
      interval: null,
      codeForm,
    }
  },
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

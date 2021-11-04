<template>
  <b-card-code title="Advanced &lt;b-popover&gt; usage with reactive content">
    <b-card-text>
      <span>You can even make your </span>
      <code>&lt;b-popover&gt;</code>
      <span> content interactive.</span>
    </b-card-text>

    <div id="my-container">
      <!-- Our triggering (target) element -->
      <b-button
        id="popover-reactive-1"
        ref="button"
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
      >
        Reactive Content Using Slots
      </b-button>

      <!-- Output from the popover interaction -->
      <b-card
        v-if="input1Return && input2Return"
        title="Returned values:"
        class="shadow-none border mb-0 mt-2"
      >
        <p class="card-text">
          Name: <strong>{{ input1Return }}</strong><br>
          Password: <strong>{{ input2Return }}</strong>
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
      >
        <template #title>
          <div class="d-flex justify-content-between align-items-center">
            <span>Interactive Content</span>
          </div>
        </template>

        <div>
          <b-form-group
            :state="input1state"
            invalid-feedback="This field is required"
          >
            <b-form-input
              v-model="input1"
              placeholder="Your Name"
              :state="input1state"
              size="sm"
            />
          </b-form-group>

          <b-form-group
            :state="input2state"
            invalid-feedback="This field is required"
          >
            <b-form-input
              v-model="input2"
              type="password"
              placeholder="Your Password"
              :state="input2state"
              size="sm"
            />
          </b-form-group>

          <!-- button -->
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

    <template #code>
      {{ codeAdvance }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import {
  BPopover, BButton, BFormGroup, BFormInput, BCard, BCardText,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { codeAdvance } from './code'

export default {
  components: {
    BCardCode,
    BPopover,
    BButton,
    BFormGroup,
    BCardText,
    BFormInput,
    BCard,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      input1: '',
      input1state: null,
      input2: '',
      input2state: null,
      input1Return: '',
      input2Return: '',
      popoverShow: false,
      codeAdvance,
    }
  },
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
  },
}
</script>

<template>
  <b-card-code title="Confirm message box">
    <b-card-text class="mb-0">
      <span>BootstrapVue provides a few built in Message Box methods on the exposed </span>
      <code>this.$bvModal</code>
      <span>
        object. These methods provide a way to generate simple OK and Confirm style modal messages, from anywhere in
        your app without having to explicitly place a
      </span>
      <code>&lt;b-modal&gt;</code>
      <span> component in your pages.</span>
    </b-card-text>

    <!-- Modal Buttons -->
    <div class="demo-inline-spacing">
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
        @click="showMsgBoxOne"
      >
        Simple msgBoxConfirm
      </b-button>
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
        @click="showMsgBoxTwo"
      >
        msgBoxConfirm with options
      </b-button>
    </div>

    <!-- modal status -->
    <b-card-text class="mt-2">
      First modal return value: <span class="font-weight-bold">{{ String(boxOne) }}</span>
    </b-card-text>
    <b-card-text class="mb-0">
      Second modal return value: <span class="font-weight-bold">{{ String(boxTwo) }}</span>
    </b-card-text>

    <template #code>
      {{ codeMessageBox }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BButton, BCardText } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { codeMessageBox } from './code'

export default {
  components: {
    BCardCode,
    BButton,
    BCardText,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      boxOne: '',
      boxTwo: '',
      codeMessageBox,
    }
  },
  methods: {
    showMsgBoxOne() {
      this.boxOne = ''
      this.$bvModal
        .msgBoxConfirm('Are you sure?', {
          cancelVariant: 'outline-secondary',
        })
        .then(value => {
          this.boxOne = value
        })
    },
    showMsgBoxTwo() {
      this.boxTwo = ''
      this.$bvModal
        .msgBoxConfirm('Please confirm that you want to delete everything.', {
          title: 'Please Confirm',
          size: 'sm',
          okVariant: 'primary',
          okTitle: 'Yes',
          cancelTitle: 'No',
          cancelVariant: 'outline-secondary',
          hideHeaderClose: false,
          centered: true,
        })
        .then(value => {
          this.boxTwo = value
        })
    },
  },
}
</script>

<template>
  <b-card-code title="Modal Method">
    <b-card-text class="mb-0">
      <span>You can access modal using </span>
      <code>ref</code>
      <span> attribute and then call the </span>
      <code>show(), hide()</code>
      <span> or </span>
      <code>toggle()</code>
      <span> methods.</span>
    </b-card-text>

    <!-- modal trigger button -->
    <div class="demo-inline-spacing">
      <b-button
        id="show-btn"
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
        @click="showModal"
      >
        Open Modal
      </b-button>
      <b-button
        id="toggle-btn"
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
        @click="toggleModal"
      >
        Toggle Modal
      </b-button>
    </div>

    <!-- modal -->
    <b-modal
      ref="my-modal"
      hide-footer
      title="Using Component Methods"
    >
      <div class="d-block text-center">
        <h3>Hello From My Modal!</h3>
      </div>
      <b-button
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        class="mt-3"
        variant="outline-secondary"
        block
        @click="hideModal"
      >
        Close Me
      </b-button>
      <b-button
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        class="mt-2"
        variant="outline-primary"
        block
        @click="toggleModal"
      >
        Toggle Me
      </b-button>
    </b-modal>

    <template #code>
      {{ codeMethod }}
    </template>
  </b-card-code>
</template>

<script>
import { BButton, BModal, BCardText } from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code'
import Ripple from 'vue-ripple-directive'
import { codeMethod } from './code'

export default {
  components: {
    BCardCode,
    BButton,
    BModal,
    BCardText,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      codeMethod,
    }
  },
  methods: {
    showModal() {
      this.$refs['my-modal'].show()
    },
    hideModal() {
      this.$refs['my-modal'].hide()
    },
    toggleModal() {
      // We pass the ID of the button that we want to return focus to
      // when the modal has hidden
      this.$refs['my-modal'].toggle('#toggle-btn')
    },
  },
}
</script>

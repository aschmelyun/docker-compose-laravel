<template>
  <b-card-code title="Multiple modal support">
    <b-card-text>
      <span>To disable stacking for a specific modal, just set the prop </span>
      <code>no-stacking</code>
      <span>on the</span>
      <code>&lt;b-modal&gt;</code>
      <span>component. This will hide the modal before another modal is shown.</span>
    </b-card-text>

    <!-- button  -->
    <b-button
      v-ripple.400="'rgba(113, 102, 240, 0.15)'"
      v-b-modal.modal-multi-1
      variant="outline-primary"
    >
      Open First Modal
    </b-button>

    <!-- modal -->
    <b-modal
      id="modal-multi-1"
      size="lg"
      title="First Modal"
      ok-only
      ok-title="Accept"
      no-stacking
    >
      <b-card-text class="my-2">
        First Modal
      </b-card-text>
      <b-button
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        v-b-modal.modal-multi-2
        variant="primary"
      >
        Open Second Modal
      </b-button>
    </b-modal>

    <!-- modal -->
    <b-modal
      id="modal-multi-2"
      title="Second Modal"
      ok-only
      ok-title="Accept"
    >
      <b-card-text class="my-2">
        Second Modal
      </b-card-text>
      <b-button
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        v-b-modal.modal-multi-3
        size="sm"
        variant="primary"
      >
        Open Third Modal
      </b-button>
    </b-modal>

    <!-- modal -->
    <b-modal
      id="modal-multi-3"
      size="sm"
      title="Third Modal"
      ok-only
      ok-title="Accept"
    >
      <b-card-text class="my-1">
        Third Modal
      </b-card-text>
    </b-modal>

    <template #code>
      {{ codeMultiple }}
    </template>
  </b-card-code>
</template>

<script>
import {
  BModal, BButton, VBModal, BCardText,
} from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code'
import Ripple from 'vue-ripple-directive'
import { codeMultiple } from './code'

export default {
  components: {
    BCardCode,
    BButton,
    BModal,
    BCardText,
  },
  directives: {
    'b-modal': VBModal,
    Ripple,
  },
  data() {
    return {
      codeMultiple,
    }
  },
}
</script>

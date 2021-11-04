<template>
  <b-card-code title="Footer button size">
    <b-card-text class="mb-0">
      <span>Fancy smaller or larger buttons in the default footer? Simply set the</span>
      <code>button-size</code>
      <span>prop to</span>
      <code>'sm'</code>
      <span>for small buttons, or</span>
      <code> 'lg'</code>
      <span>for larger buttons.</span>
    </b-card-text>

    <!-- modal trigger button -->
    <div class="demo-inline-spacing">
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        v-b-modal.modal-footer-sm
        variant="outline-primary"
      >
        Small Footer Buttons
      </b-button>
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        v-b-modal.modal-footer-lg
        variant="outline-primary"
      >
        Large Footer Buttons
      </b-button>
    </div>

    <!-- modal -->
    <b-modal
      id="modal-footer-sm"
      title="BootstrapVue"
      button-size="sm"
      ok-title="Accept"
      cancel-title="Close"
      cancel-variant="outline-secondary"
    >
      <b-card-text>
        This modal has small footer buttons.
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        A cumque quo delectus, aspernatur quasi sint vitae reiciendis quae? Itaque minima atque quae corporis impedit repellat recusandae consectetur voluptas, at rerum?
      </b-card-text>
    </b-modal>

    <!-- modal -->
    <b-modal
      id="modal-footer-lg"
      title="BootstrapVue"
      button-size="lg"
      cancel-title="Close"
      ok-title="Accept"
      cancel-variant="outline-secondary"
    >
      <b-card-text>
        This modal has large footer buttons.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus eligendi, dolorem consequuntur delectus necessitatibus eum expedita culpa laudantium! Quaerat debitis obcaecati doloremque a iusto, soluta ipsa velit. Veritatis, assumenda sapiente?
      </b-card-text>
    </b-modal>

    <template #code>
      {{ codeFooterSize }}
    </template>
  </b-card-code>
</template>

<script>
import {
  BButton, BModal, VBModal, BCardText,
} from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code'
import Ripple from 'vue-ripple-directive'
import { codeFooterSize } from './code'

export default {
  components: {
    BCardCode,
    BCardText,
    BButton,
    BModal,
  },
  directives: {
    'b-modal': VBModal,
    Ripple,
  },
  data() {
    return {
      codeFooterSize,
    }
  },
}
</script>

<template>
  <b-card-code title="Basic Modal">
    <b-card-text class="mb-0">
      <span>Use the prop </span>
      <code>no-fade</code>
      <span> on the </span>
      <code>&lt;b-modal&gt;</code>
      <span> component to disable animation. </span>
      <span>Vertically center your modal in the viewport by setting the </span>
      <code>centered</code>
      <span> prop.</span>
      <span> Hide the modal's backdrop via setting the </span>
      <code>hide-backdrop</code>
      <span> prop.</span>
    </b-card-text>

    <!-- modal trigger button -->
    <div class="demo-inline-spacing">
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        v-b-modal.modal-1
        variant="outline-primary"
      >
        Basic Modal
      </b-button>

      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        v-b-modal.modal-center
        variant="outline-primary"
      >
        Vertically Center
      </b-button>
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        v-b-modal.modal-no-backdrop
        variant="outline-primary"
      >
        Disabled Backdrop
      </b-button>
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        v-b-modal.modal-no-animation
        variant="outline-primary"
      >
        Disabled Animation
      </b-button>
    </div>

    <!-- basic modal -->
    <b-modal
      id="modal-1"
      title="Basic Modal"
      ok-only
      ok-title="Accept"
    >
      <b-card-text>
        <h5>Check First Paragraph</h5>
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy dragée apple pie.
        Brownie carrot cake candy canes bonbon fruitcake topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake liquorice.
      </b-card-text>
    </b-modal>

    <!-- disable animation-->
    <b-modal
      id="modal-no-animation"
      content-class="shadow"
      title="Disabled Animation"
      no-fade
      ok-only
      ok-title="Accept"
    >
      <b-card-text>
        Chocolate bar jelly dragée cupcake chocolate bar I love donut liquorice.
        Powder I love marzipan donut candy canes jelly-o.
        Dragée liquorice apple pie candy biscuit danish lemon drops sugar plum.
      </b-card-text>
      <b-alert
        show
        variant="success"
      >
        <div class="alert-body">
          Well done! You successfully read this important alert message.
        </div>
      </b-alert>
    </b-modal>

    <!-- modal vertical center -->
    <b-modal
      id="modal-center"
      centered
      title="Vertically Centered"
      ok-only
      ok-title="Accept"
    >
      <b-card-text>
        Croissant jelly-o halvah chocolate sesame snaps.
        Brownie caramels candy canes chocolate cake marshmallow icing lollipop I love.
        Gummies macaroon donut caramels biscuit topping danish.
      </b-card-text>
    </b-modal>

    <!-- modal backdrop -->
    <b-modal
      id="modal-no-backdrop"
      hide-backdrop
      ok-only
      no-close-on-backdrop
      content-class="shadow"
      title="Disabled Backdrop"
      ok-title="Accept"
    >
      <b-card-text>
        <span>We've added the utility class</span>
        <code>'shadow'</code>
        <span>to the modal content for added effect.</span>
      </b-card-text>
      <b-card-text>
        Candy oat cake topping topping chocolate cake. Icing pudding jelly beans I love chocolate carrot cake wafer
        candy canes. Biscuit croissant fruitcake bonbon soufflé.
      </b-card-text>
    </b-modal>

    <template #code>
      {{ codeBasic }}
    </template>
  </b-card-code>
</template>

<script>
import {
  BModal, BButton, VBModal, BAlert, BCardText,
} from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code'
import Ripple from 'vue-ripple-directive'
import { codeBasic } from './code'

export default {
  components: {
    BCardCode,
    BButton,
    BModal,
    BAlert,
    BCardText,
  },
  directives: {
    'b-modal': VBModal,
    Ripple,
  },
  data() {
    return {
      codeBasic,
    }
  },
}
</script>

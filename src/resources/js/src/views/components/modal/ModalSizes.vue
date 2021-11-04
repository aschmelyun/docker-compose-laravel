<template>
  <b-card-code title="Modal Sizes">
    <b-card-text class="mb-0">
      <span>Modals have three optional sizes, available via the prop </span>
      <code>size</code>
      <span> . These sizes kick in at certain breakpoints to avoid horizontal scrollbars on narrower viewports. Valid optional sizes are </span>
      <code>xs,sm, lg and xl</code>.
    </b-card-text>

    <!-- trigger button -->
    <div class="demo-inline-spacing">
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        v-b-modal.modal-xs
        variant="outline-primary"
      >
        Extra Small
      </b-button>
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        v-b-modal.modal-sm
        variant="outline-primary"
      >
        Small Modal
      </b-button>
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        v-b-modal.modal-default
        variant="outline-primary"
      >
        Default Modal
      </b-button>
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        v-b-modal.modal-lg
        variant="outline-primary"
      >
        Large Modal
      </b-button>
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        v-b-modal.modal-xl
        variant="outline-primary"
      >
        Extra Large Modal
      </b-button>
    </div>

    <!-- modal -->
    <b-modal
      id="modal-xs"
      cancel-variant="secondary"
      ok-only
      ok-title="Accept"
      centered
      size="xs"
      title="Extra Small Modal"
    >
      <b-card-text>Biscuit chocolate cake gummies. Lollipop I love macaroon bear claw caramels. I love marshmallow tiramisu I love fruitcake I love gummi bears. Carrot cake topping liquorice. Pudding caramels liquorice sweet I love. Donut powder cupcake ice cream tootsie roll jelly.</b-card-text>
    </b-modal>

    <b-modal
      id="modal-sm"
      cancel-variant="secondary"
      ok-only
      ok-title="Accept"
      centered
      size="sm"
      title="Small Modal"
    >
      <b-card-text>Biscuit chocolate cake gummies. Lollipop I love macaroon bear claw caramels. I love marshmallow tiramisu I love fruitcake I love gummi bears. Carrot cake topping liquorice. Pudding caramels liquorice sweet I love. Donut powder cupcake ice cream tootsie roll jelly.</b-card-text>
    </b-modal>

    <b-modal
      id="modal-default"
      ok-only
      ok-title="Accept"
      centered
      title="Default Modal"
    >
      <b-card-text>Biscuit chocolate cake gummies. Lollipop I love macaroon bear claw caramels. I love marshmallow tiramisu I love fruitcake I love gummi bears. Carrot cake topping liquorice. Pudding caramels liquorice sweet I love. Donut powder cupcake ice cream tootsie roll jelly.</b-card-text>
    </b-modal>

    <b-modal
      id="modal-lg"
      ok-only
      ok-title="Accept"
      centered
      size="lg"
      title="Large Modal"
    >
      <b-card-text>Biscuit chocolate cake gummies. Lollipop I love macaroon bear claw caramels. I love marshmallow tiramisu I love fruitcake I love gummi bears. Carrot cake topping liquorice. Pudding caramels liquorice sweet I love. Donut powder cupcake ice cream tootsie roll jelly.</b-card-text>
    </b-modal>

    <b-modal
      id="modal-xl"
      ok-only
      ok-title="Accept"
      centered
      size="xl"
      title="Extra Large Modal"
    >
      <b-card-text>Biscuit chocolate cake gummies. Lollipop I love macaroon bear claw caramels. I love marshmallow tiramisu I love fruitcake I love gummi bears. Carrot cake topping liquorice. Pudding caramels liquorice sweet I love. Donut powder cupcake ice cream tootsie roll jelly.</b-card-text>
    </b-modal>

    <template #code>
      {{ codeSize }}
    </template>
  </b-card-code>
</template>

<script>
import {
  BButton, BModal, VBModal, BCardText,
} from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code'
import Ripple from 'vue-ripple-directive'
import { codeSize } from './code'

export default {
  components: {
    BCardCode,
    BButton,
    BCardText,
    BModal,
  },
  directives: {
    'b-modal': VBModal,
    Ripple,
  },
  data() {
    return {
      codeSize,
    }
  },
}
</script>

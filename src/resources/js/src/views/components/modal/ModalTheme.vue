<template>
  <b-card-code title="Modal Themes">
    <b-card-text class="mb-0">
      <span>Use class </span>
      <code>modal-class="modal-{color}"</code>
      <span> with your </span>
      <code>&lt;b-modal&gt;</code>
      <span> to change theme of modal</span>
    </b-card-text>

    <!-- button trigger -->
    <div class="demo-inline-spacing">
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        v-b-modal.modal-primary
        variant="outline-primary"
      >
        Primary
      </b-button>
      <b-button
        v-ripple.400="'rgba(186, 191, 199, 0.15)'"
        v-b-modal.modal-seconday
        variant="outline-secondary"
      >
        Secondary
      </b-button>
      <b-button
        v-ripple.400="'rgba(40, 199, 111, 0.15)'"
        v-b-modal.modal-success
        variant="outline-success"
      >
        Success
      </b-button>
      <b-button
        v-ripple.400="'rgba(234, 84, 85, 0.15)'"
        v-b-modal.modal-danger
        variant="outline-danger"
      >
        Danger
      </b-button>
      <b-button
        v-ripple.400="'rgba(255, 159, 67, 0.15)'"
        v-b-modal.modal-warning
        variant="outline-warning"
      >
        Warning
      </b-button>
      <b-button
        v-ripple.400="'rgba(0, 207, 232, 0.15)'"
        v-b-modal.modal-info
        variant="outline-info"
      >
        Info
      </b-button>
      <b-button
        v-ripple.400="'rgba(30, 30, 30, 0.15)'"
        v-b-modal.modal-dark
        variant="outline-dark"
      >
        Dark
      </b-button>
    </div>

    <!-- modal -->
    <b-modal
      id="modal-primary"
      ok-only
      ok-title="Accept"
      modal-class="modal-primary"
      centered
      title="Primary Modal"
    >
      <b-card-text>
        Biscuit chocolate cake gummies. Lollipop I love macaroon bear claw caramels. I love marshmallow tiramisu I love
        fruitcake I love gummi bears. Carrot cake topping liquorice. Pudding caramels liquorice sweet I love. Donut powder
        cupcake ice cream tootsie roll jelly.
      </b-card-text>
    </b-modal>

    <b-modal
      id="modal-seconday"
      ok-only
      ok-variant="secondary"
      ok-title="Accept"
      modal-class="modal-secondary"
      centered
      title="Secondary Modal"
    >
      <b-card-text>
        Biscuit chocolate cake gummies. Lollipop I love macaroon bear claw caramels. I love marshmallow tiramisu I love
        fruitcake I love gummi bears. Carrot cake topping liquorice. Pudding caramels liquorice sweet I love. Donut powder
        cupcake ice cream tootsie roll jelly.
      </b-card-text>
    </b-modal>

    <b-modal
      id="modal-success"
      ok-only
      ok-variant="success"
      ok-title="Accept"
      modal-class="modal-success"
      centered
      title="Success Modal"
    >
      <b-card-text>
        Biscuit chocolate cake gummies. Lollipop I love macaroon bear claw caramels. I love marshmallow tiramisu I love
        fruitcake I love gummi bears. Carrot cake topping liquorice. Pudding caramels liquorice sweet I love. Donut powder
        cupcake ice cream tootsie roll jelly.
      </b-card-text>
    </b-modal>

    <b-modal
      id="modal-danger"
      ok-only
      ok-variant="danger"
      ok-title="Accept"
      modal-class="modal-danger"
      centered
      title="Danger Modal"
    >
      <b-card-text>
        Biscuit chocolate cake gummies. Lollipop I love macaroon bear claw caramels. I love marshmallow tiramisu I love
        fruitcake I love gummi bears. Carrot cake topping liquorice. Pudding caramels liquorice sweet I love. Donut powder
        cupcake ice cream tootsie roll jelly.
      </b-card-text>
    </b-modal>

    <b-modal
      id="modal-info"
      ok-only
      ok-variant="info"
      ok-title="Accept"
      modal-class="modal-info"
      centered
      title="Info Modal"
    >
      <b-card-text>
        Biscuit chocolate cake gummies. Lollipop I love macaroon bear claw caramels. I love marshmallow tiramisu I love
        fruitcake I love gummi bears. Carrot cake topping liquorice. Pudding caramels liquorice sweet I love. Donut powder
        cupcake ice cream tootsie roll jelly.
      </b-card-text>
    </b-modal>

    <b-modal
      id="modal-warning"
      ok-only
      ok-variant="warning"
      ok-title="Accept"
      modal-class="modal-warning"
      centered
      title="Warning Modal"
    >
      <b-card-text>
        Biscuit chocolate cake gummies. Lollipop I love macaroon bear claw caramels. I love marshmallow tiramisu I love
        fruitcake I love gummi bears. Carrot cake topping liquorice. Pudding caramels liquorice sweet I love. Donut powder
        cupcake ice cream tootsie roll jelly.
      </b-card-text>
    </b-modal>

    <b-modal
      id="modal-dark"
      ok-only
      ok-variant="dark"
      ok-title="Accept"
      modal-class="modal-dark"
      centered
      title="Dark Modal"
    >
      <b-card-text>
        Biscuit chocolate cake gummies. Lollipop I love macaroon bear claw caramels. I love marshmallow tiramisu I love
        fruitcake I love gummi bears. Carrot cake topping liquorice. Pudding caramels liquorice sweet I love. Donut powder
        cupcake ice cream tootsie roll jelly.
      </b-card-text>
    </b-modal>

    <template #code>
      {{ codeThemes }}
    </template>
  </b-card-code>
</template>

<script>
import {
  BButton, BModal, VBModal, BCardText,
} from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code'
import Ripple from 'vue-ripple-directive'
import { codeThemes } from './code'

// set ripple zIndex to 1 so it doesn't overlap on modal
Ripple.zIndex = 1

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
      codeThemes,
    }
  },
}
</script>

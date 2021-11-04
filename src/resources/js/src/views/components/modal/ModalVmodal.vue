<template>
  <b-card-code title="Using v-model property">
    <b-card-text>
      <code>v-model</code>
      <span> property is always automatically synced with </span>
      <code>&lt;b-modal&gt;</code>
      <span> visible state and you can show/hide using </span>
      <code>v-model</code>.
    </b-card-text>

    <!-- button -->
    <b-button
      v-ripple.400="'rgba(113, 102, 240, 0.15)'"
      variant="outline-primary"
      @click="modalShow = !modalShow"
    >
      Launch Modal
    </b-button>

    <!-- modal -->
    <b-modal
      v-model="modalShow"
      title="Using v-model property"
      ok-title="Accept"
      ok-only
    >
      <b-card-text>
        Bonbon caramels muffin.
        Chocolate bar oat cake cookie pastry dragée pastry.
        Carrot cake chocolate tootsie roll chocolate bar candy canes biscuit.
        Gummies bonbon apple pie fruitcake icing biscuit apple pie jelly-o sweet roll.
        Toffee sugar plum sugar plum jelly-o jujubes bonbon dessert carrot cake.
        Cookie dessert tart muffin topping donut icing fruitcake. Sweet roll cotton candy dragée danish Candy canes chocolate bar cookie.
        Gingerbread apple pie oat cake. Carrot cake fruitcake bear claw. Pastry gummi bears marshmallow jelly-o.
      </b-card-text>
    </b-modal>

    <template #code>
      {{ codeVmodal }}
    </template>
  </b-card-code>
</template>

<script>
import { BButton, BModal, BCardText } from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code'
import Ripple from 'vue-ripple-directive'
import { codeVmodal } from './code'

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
      modalShow: false,
      codeVmodal,
    }
  },
}
</script>

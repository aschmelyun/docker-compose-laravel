<template>
  <b-card-code title="Disabling built-in footer buttons">
    <b-card-text>
      <span>You can disable the Cancel and OK buttons individually by setting the </span>
      <code>cancel-disabled</code>
      <span> and </span>
      <code>ok-disabled</code>
      <span> props, respectively, to </span>
      <code>true</code>
      <span>. Set the prop to </span>
      <code>false</code>
      <span> to re-enable the button.</span>
    </b-card-text>

    <!-- modal trigger button -->
    <b-button
      v-ripple.400="'rgba(113, 102, 240, 0.15)'"
      v-b-modal.modal-no-footer
      variant="outline-primary"
    >
      Launch Modal
    </b-button>

    <!-- modal -->
    <b-modal
      id="modal-no-footer"
      title="BootstrapVue"
      cancel-disabled
      ok-disabled
      cancel-title="Close"
      cancel-variant="outline-secondary"
      ok-title="Accept"
    >
      <b-card-text>
        Tootsie roll oat cake I love bear claw I love caramels caramels halvah chocolate bar. Cotton candy gummi bears
        pudding pie apple pie cookie. Cheesecake jujubes lemon drops danish dessert I love caramels powder.
      </b-card-text>
    </b-modal>

    <template #code>
      {{ codeDisableFooter }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import {
  BButton, BModal, VBModal, BCardText,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { codeDisableFooter } from './code'

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
      codeDisableFooter,
    }
  },
}
</script>

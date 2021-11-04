<template>
  <b-row class="match-height">
    <b-col cols="12">
      <modal-basic />
    </b-col>
    <b-col cols="12">
      <modal-theme />
    </b-col>
    <b-col cols="12">
      <modal-sizes />
    </b-col>
    <b-col cols="12">
      <modal-form-scroll />
    </b-col>
    <b-col md="6">
      <modal-variant />
    </b-col>
    <b-col md="6">
      <modal-vmodal />
    </b-col>
    <b-col cols="12">
      <modal-prevent />
    </b-col>
    <b-col cols="12">
      <modal-disbale-foooter />
    </b-col>
    <b-col cols="12">
      <modal-message-box />
    </b-col>
    <b-col md="6">
      <modal-footer-button-sizing />
    </b-col>
    <b-col md="6">
      <modal-multiple-support />
    </b-col>
    <b-col cols="12">
      <modal-method />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'

import ModalFooterButtonSizing from './ModalFooterSizing.vue'
import ModalMultipleSupport from './ModalMultiple.vue'
import ModalPrevent from './ModalPrevent.vue'
import ModalSizes from './ModalSizes.vue'
import ModalVariant from './ModalVariant.vue'
import ModalVmodal from './ModalVmodal.vue'
import ModalTheme from './ModalTheme.vue'
import ModalFormScroll from './ModalFormScroll.vue'
import ModalDisbaleFoooter from './ModalDisableFooter.vue'
import ModalMessageBox from './ModalMessageBox.vue'
import ModalBasic from './ModalBasic.vue'
import ModalMethod from './ModalMethod.vue'

export default {
  components: {
    BCol,
    BRow,

    ModalFooterButtonSizing,
    ModalMultipleSupport,
    ModalPrevent,
    ModalSizes,
    ModalVariant,
    ModalVmodal,
    ModalTheme,
    ModalDisbaleFoooter,
    ModalMessageBox,
    ModalBasic,
    ModalMethod,
    ModalFormScroll,
  },
}
</script>

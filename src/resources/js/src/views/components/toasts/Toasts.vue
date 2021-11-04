<template>
  <b-row>
    <b-col cols="12">
      <toasts-basic />
      <toasts-translucent />
      <toasts-variants />
      <toasts-delay />
      <toasts-target />
      <toasts-links />
      <toasts-advance />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'
import ToastsBasic from './ToastsBasic.vue'
import ToastsTranslucent from './ToastsTranslucent.vue'
import ToastsDelay from './ToastsDelay.vue'
import ToastsTarget from './ToastsTarget.vue'
import ToastsVariants from './ToastsVariants.vue'
import ToastsLinks from './ToastsLinks.vue'
import ToastsAdvance from './ToastsAdvance.vue'

export default {
  components: {
    BRow,
    BCol,

    ToastsBasic,
    ToastsTranslucent,
    ToastsDelay,
    ToastsTarget,
    ToastsVariants,
    ToastsLinks,
    ToastsAdvance,
  },
}
</script>

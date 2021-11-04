<template>
  <div>
    <b-row>
      <b-col cols="12">
        <vue-select-basic />
      </b-col>
      <b-col cols="12">
        <vue-select-multiple />
      </b-col>
      <b-col md="6">
        <vue-select-size />
      </b-col>
      <b-col md="6">
        <vue-select-multi-size />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'

import VueSelectBasic from './VueSelectBasic.vue'
import VueSelectMultiple from './VueSelectMultiple.vue'
import VueSelectSize from './VueSelectSize.vue'
import VueSelectMultiSize from './VueSelectMultiSize.vue'

export default {
  components: {
    BRow,
    BCol,

    VueSelectBasic,
    VueSelectMultiple,
    VueSelectSize,
    VueSelectMultiSize,
  },
}
</script>

<style lang="scss">
@import '~@core/scss/vue/libs/vue-select.scss';
</style>

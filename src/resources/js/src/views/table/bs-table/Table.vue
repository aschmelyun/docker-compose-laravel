<template>
  <b-row>
    <b-col cols="12">
      <table-basic />
      <table-style-options />
      <table-row-col-style />
      <table-responsive />
      <table-formatter-callback />
      <table-custom-render />
      <table-sticky-columns-headers />
      <table-rowdetails-support />
      <table-row-select-support />
      <table-kitchen-sink />
      <table-light-weight />
      <table-simple />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'
import TableBasic from './TableBasic.vue'
import TableStyleOptions from './TableStyleOptions.vue'
import TableRowColStyle from './TableRowColStyle.vue'
import TableResponsive from './TableResponsive.vue'
import TableFormatterCallback from './TableFormatterCallback.vue'
import TableCustomRender from './TableCustomRender.vue'
import TableStickyColumnsHeaders from './TableStickyColumnsHeaders.vue'
import TableRowdetailsSupport from './TableRowdetailsSupport.vue'
import TableRowSelectSupport from './TableRowSelectSupport.vue'
import TableLightWeight from './TableLightWeight.vue'
import TableSimple from './TableSimple.vue'
import TableKitchenSink from './TableKitchenSink.vue'

export default {
  components: {
    BRow,
    BCol,

    TableBasic,
    TableStyleOptions,
    TableRowColStyle,
    TableResponsive,
    TableFormatterCallback,
    TableCustomRender,
    TableStickyColumnsHeaders,
    TableRowdetailsSupport,
    TableRowSelectSupport,
    TableLightWeight,
    TableSimple,
    TableKitchenSink,
  },
}
</script>

<style lang="scss">
@import '~@core/scss/vue/libs/vue-select.scss';
</style>

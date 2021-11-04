<template>
  <b-row>
    <b-col cols="12">
      <good-table-basic />
      <good-table-row-group />
      <good-table-column-search />
      <good-table-advance-search />
      <good-table-i18n />
      <good-table-ssr />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'
import GoodTableBasic from './GoodTableBasic.vue'
import GoodTableRowGroup from './GoodTableRowGroup.vue'
import GoodTableColumnSearch from './GoodTableColumnSearch.vue'
import GoodTableAdvanceSearch from './GoodTableAdvanceSearch.vue'
import GoodTableI18n from './GoodTableI18n.vue'
import GoodTableSsr from './GoodTableSsr.vue'

export default {
  components: {
    BRow,
    BCol,

    GoodTableBasic,
    GoodTableRowGroup,
    GoodTableColumnSearch,
    GoodTableAdvanceSearch,
    GoodTableI18n,
    GoodTableSsr,
  },
}
</script>

<style lang="scss" >
@import '~@core/scss/vue/libs/vue-good-table.scss';
</style>

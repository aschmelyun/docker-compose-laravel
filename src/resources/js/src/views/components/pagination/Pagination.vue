<template>
  <b-row class="match-height">
    <b-col lg="6">
      <pagination-basic />
    </b-col>
    <b-col lg="6">
      <pagination-separated />
    </b-col>
    <b-col xl="6">
      <pagination-color />
    </b-col>
    <b-col xl="6">
      <pagination-button-content />
    </b-col>
    <b-col lg="6">
      <pagination-goto />
    </b-col>
    <b-col lg="6">
      <pagination-size />
    </b-col>
    <b-col lg="6">
      <pagination-pill />
    </b-col>
    <b-col lg="6">
      <pagination-alignment />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'
import PaginationAlignment from './PaginationAlignment.vue'
import PaginationBasic from './PaginationBasic.vue'
import PaginationButtonContent from './PaginationButtonContent.vue'
import PaginationColor from './PaginationColor.vue'
import PaginationGoto from './PaginationGoto.vue'
import PaginationPill from './PaginationPill.vue'
import PaginationSeparated from './PaginationSeparated.vue'
import PaginationSize from './PaginationSize.vue'

export default {
  components: {
    BRow,
    BCol,
    PaginationAlignment,
    PaginationBasic,
    PaginationButtonContent,
    PaginationColor,
    PaginationGoto,
    PaginationPill,
    PaginationSeparated,
    PaginationSize,
  },

}
</script>

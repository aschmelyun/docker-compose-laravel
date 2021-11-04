<template>
  <b-row class="match-height">
    <b-col md="6">
      <form-select-basic />
    </b-col>
    <b-col md="6">
      <form-select-standard />
    </b-col>
    <b-col md="6">
      <form-select-size />
    </b-col>
    <b-col md="6">
      <form-select-multiple />
    </b-col>
    <b-col md="6">
      <form-select-control-size />
    </b-col>
    <b-col md="6">
      <form-select-states />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'

import FormSelectBasic from './FormSelectBasic.vue'
import FormSelectStandard from './FormSelectStandard.vue'
import FormSelectSize from './FormSelectSize.vue'
import FormSelectMultiple from './FormSelectMultiple.vue'
import FormSelectControlSize from './FormSelectControlSize.vue'
import FormSelectStates from './FormSelectStates.vue'

export default {
  components: {
    BRow,
    BCol,

    FormSelectBasic,
    FormSelectStandard,
    FormSelectSize,
    FormSelectMultiple,
    FormSelectControlSize,
    FormSelectStates,
  },
}
</script>

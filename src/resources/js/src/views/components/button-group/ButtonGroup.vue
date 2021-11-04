<template>
  <b-row>
    <b-col cols="12">
      <button-group-basic />
      <button-group-size />
      <button-group-dropdown-support />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'
import ButtonGroupBasic from './ButtonGroupBasic.vue'
import ButtonGroupSize from './ButtonGroupSize.vue'
import ButtonGroupDropdownSupport from './ButtonGroupDropdownSupport.vue'

export default {
  components: {
    BRow,
    BCol,

    ButtonGroupBasic,
    ButtonGroupSize,
    ButtonGroupDropdownSupport,
  },
}
</script>

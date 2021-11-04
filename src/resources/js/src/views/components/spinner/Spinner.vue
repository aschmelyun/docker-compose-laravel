<template>
  <b-row class="match-height">
    <b-col md="6">
      <spinner-border />
    </b-col>
    <b-col md="6">
      <spinner-color />
    </b-col>
    <b-col md="6">
      <spinner-grow />
    </b-col>
    <b-col md="6">
      <spinner-grow-color />
    </b-col>
    <b-col md="6">
      <spinner-flex />
    </b-col>
    <b-col md="6">
      <spinner-float />
    </b-col>
    <b-col md="6">
      <spinner-text-align />
    </b-col>
    <b-col md="6">
      <spinner-size />
    </b-col>
    <b-col>
      <spinner-button />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'

import SpinnerBorder from './SpinnerBorder.vue'
import SpinnerColor from './SpinnerColor.vue'
import SpinnerGrow from './SpinnerGrow.vue'
import SpinnerGrowColor from './SpinnerGrowColor.vue'
import SpinnerSize from './SpinnerSize.vue'
import SpinnerFlex from './SpinnerFlex.vue'
import SpinnerFloat from './SpinnerFloat.vue'
import SpinnerTextAlign from './SpinnerTextAlign.vue'
import SpinnerButton from './SpinnerButton.vue'

export default {
  components: {
    BRow,
    BCol,

    SpinnerBorder,
    SpinnerColor,
    SpinnerGrow,
    SpinnerGrowColor,
    SpinnerSize,
    SpinnerFlex,
    SpinnerFloat,
    SpinnerTextAlign,
    SpinnerButton,
  },
}
</script>

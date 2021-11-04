<template>
  <b-row>
    <b-col cols="12">
      <progress-basic />
      <progress-colored />
      <progress-label />
      <progress-label-custom />
      <progress-stripped />
      <progress-multiple-bar />
      <progress-animated />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'
import ProgressBasic from './ProgressBasic.vue'
import ProgressColored from './ProgressColored.vue'
import ProgressLabel from './ProgressLabel.vue'
import ProgressStripped from './ProgressStripped.vue'
import ProgressAnimated from './ProgressAnimated.vue'
import ProgressMultipleBar from './ProgressMultipleBar.vue'
import ProgressLabelCustom from './ProgressLabelCustom.vue'

export default {
  components: {
    BRow,
    BCol,

    ProgressBasic,
    ProgressColored,
    ProgressLabel,
    ProgressAnimated,
    ProgressStripped,
    ProgressMultipleBar,
    ProgressLabelCustom,
  },
}
</script>

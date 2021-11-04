<template>
  <b-row class="match-height">
    <b-col md="6">
      <time-basic />
    </b-col>
    <b-col md="6">
      <time-state />
    </b-col>
    <b-col md="6">
      <time-spinbutton />
    </b-col>
    <b-col md="6">
      <time-border-padding />
    </b-col>
    <b-col md="6">
      <time-slot />
    </b-col>
    <b-col md="6">
      <time-internationalization />
    </b-col>
  </b-row>
</template>

<script>
import { BCol, BRow } from 'bootstrap-vue'

import TimeBasic from './TimeBasic.vue'
import TimeState from './TimeState.vue'
import TimeSpinbutton from './TimeSpinbutton.vue'
import TimeBorderPadding from './TimeBorderPadding.vue'
import TimeSlot from './TimeSlot.vue'
import TimeInternationalization from './TimeInternationalization.vue'

export default {
  components: {
    BCol,
    BRow,

    TimeBasic,
    TimeState,
    TimeSpinbutton,
    TimeBorderPadding,
    TimeSlot,
    TimeInternationalization,
  },
}
</script>

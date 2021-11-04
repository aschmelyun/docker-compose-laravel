<template>
  <b-row class="match-height">
    <b-col
      lg="7"
      md="6"
    >
      <card-advance-congratulation />
    </b-col>
    <b-col
      lg="5"
      md="6"
    >
      <card-advance-medal />
    </b-col>
    <b-col
      lg="4"
      md="6"
    >
      <card-advance-employee-task />
    </b-col>
    <b-col
      lg="4"
      md="6"
    >
      <card-advance-meetup />
    </b-col>
    <b-col
      lg="4"
      md="6"
    >
      <card-advance-profile />
    </b-col>
    <b-col
      lg="4"
      md="6"
    >
      <card-advance-job />
    </b-col>
    <b-col
      lg="4"
      md="6"
    >
      <card-advance-transactions />
    </b-col>
    <b-col
      lg="4"
      md="6"
    >
      <card-advance-pay-amount />
    </b-col>

    <!-- Timeline -->
    <b-col lg="8">
      <card-advance-timeline />
    </b-col>

    <!-- Chat -->
    <b-col
      lg="4"
      md="6"
    >
      <card-advance-chat />
    </b-col>

    <b-col
      lg="4"
      md="6"
    >
      <card-advance-bussiness-sharks />
    </b-col>
    <b-col
      lg="4"
      md="6"
    >
      <card-advance-browser-states />
    </b-col>
    <b-col
      lg="4"
      md="6"
    >
      <card-advance-app-design />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'

import CardAdvanceCongratulation from './CardAdvanceCongratulation.vue'
import CardAdvanceMedal from './CardAdvanceMedal.vue'
import CardAdvanceEmployeeTask from './CardAdvanceEmployeeTask.vue'
import CardAdvanceMeetup from './CardAdvanceMeetup.vue'
import CardAdvanceProfile from './CardAdvanceProfile.vue'
import CardAdvanceJob from './CardAdvanceJob.vue'
import CardAdvanceTransactions from './CardAdvanceTransactions.vue'
import CardAdvancePayAmount from './CardAdvancePayAmount.vue'
import CardAdvanceBussinessSharks from './CardAdvanceBussinessSharks.vue'
import CardAdvanceBrowserStates from './CardAdvanceBrowserStates.vue'
import CardAdvanceAppDesign from './CardAdvanceAppDesign.vue'
import CardAdvanceTimeline from './CardAdvanceTimeline.vue'
import CardAdvanceChat from './CardAdvanceChat.vue'

export default {
  components: {
    BRow,
    BCol,

    CardAdvanceCongratulation,
    CardAdvanceMedal,
    CardAdvanceEmployeeTask,
    CardAdvanceMeetup,
    CardAdvanceProfile,
    CardAdvanceJob,
    CardAdvanceTransactions,
    CardAdvancePayAmount,
    CardAdvanceBussinessSharks,
    CardAdvanceBrowserStates,
    CardAdvanceAppDesign,
    CardAdvanceTimeline,
    CardAdvanceChat,
  },
}
</script>

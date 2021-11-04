<template>
  <b-row class="match-height">
    <b-col cols="12">
      <badge-contextual />
    </b-col>
    <b-col cols="12">
      <badge-glow />
    </b-col>
    <b-col cols="12">
      <badge-light />
    </b-col>
    <b-col cols="12">
      <badge-icon />
    </b-col>
    <b-col md="6">
      <badge-link />
    </b-col>
    <b-col md="6">
      <badge-block />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'

import BadgeContextual from './BadgeContextual.vue'
import BadgeGlow from './BadgeGlow.vue'
import BadgeLight from './BadgeLight.vue'
import BadgeIcon from './BadgeIcon.vue'
import BadgeLink from './BadgeLink.vue'
import BadgeBlock from './BadgeBlock.vue'

export default {
  components: {
    BRow,
    BCol,

    BadgeContextual,
    BadgeGlow,
    BadgeLight,
    BadgeIcon,
    BadgeLink,
    BadgeBlock,
  },
}
</script>

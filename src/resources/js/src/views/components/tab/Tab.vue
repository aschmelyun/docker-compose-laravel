<template>
  <b-row class="match-height">
    <b-col lg="6">
      <tab-default />
    </b-col>
    <b-col lg="6">
      <tab-icon />
    </b-col>
    <b-col cols="12">
      <tab-position />
    </b-col>
    <b-col lg="6">
      <tab-filled />
    </b-col>
    <b-col lg="6">
      <tab-justified />
    </b-col>
    <b-col lg="6">
      <tab-alignment />
    </b-col>
    <b-col lg="6">
      <tab-programmatically />
    </b-col>
    <b-col lg="6">
      <tab-lazy />
    </b-col>
    <b-col lg="6">
      <tab-dynamic />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'

import TabDefault from './TabDefault.vue'
import TabFilled from './TabFilled.vue'
import TabJustified from './TabJustified.vue'
import TabAlignment from './TabAlignment.vue'
import TabLazy from './TabLazy.vue'
import TabDynamic from './TabDynamic.vue'
import TabIcon from './TabIcon.vue'
import TabProgrammatically from './TabProgrammatically.vue'
import TabPosition from './TabPosition.vue'

export default {
  components: {
    BRow,
    BCol,

    TabDefault,
    TabFilled,
    TabJustified,
    TabAlignment,
    TabLazy,
    TabDynamic,
    TabIcon,
    TabProgrammatically,
    TabPosition,
  },
}
</script>

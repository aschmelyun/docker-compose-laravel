<template>
  <b-row>
    <b-col cols="12">
      <switch-basic />
      <switch-color />
      <switch-icon />
      <switch-grouped />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'
import SwitchBasic from './SwitchBasic.vue'
import SwitchColor from './SwitchColor.vue'
import SwitchIcon from './SwitchIcon.vue'
import SwitchGrouped from './SwitchGrouped.vue'

export default {
  components: {
    BRow,
    BCol,

    SwitchBasic,
    SwitchColor,
    SwitchIcon,
    SwitchGrouped,
  },
}
</script>

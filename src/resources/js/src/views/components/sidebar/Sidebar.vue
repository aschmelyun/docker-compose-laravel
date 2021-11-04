<template>
  <b-row class="match-height">
    <b-col md="6">
      <sidebar-basic />
    </b-col>
    <b-col md="6">
      <sidebar-placement />
    </b-col>
    <b-col md="6">
      <sidebar-variant />
    </b-col>
    <b-col md="6">
      <sidebar-header />
    </b-col>
    <b-col md="6">
      <sidebar-footer />
    </b-col>
    <b-col md="6">
      <sidebar-without-backdrop />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'
import SidebarBasic from './SidebarBasic.vue'
import SidebarPlacement from './SidebarPlacement.vue'
import SidebarVariant from './SidebarVariant.vue'
import SidebarHeader from './SidebarHeader.vue'
import SidebarFooter from './SidebarFooter.vue'
import SidebarWithoutBackdrop from './SidebarWithoutBackdrop.vue'

export default {
  components: {
    BRow,
    BCol,

    SidebarBasic,
    SidebarPlacement,
    SidebarVariant,
    SidebarHeader,
    SidebarFooter,
    SidebarWithoutBackdrop,
  },
}
</script>

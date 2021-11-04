<template>
  <b-row>
    <b-col cols="12">
      <collapse-default />
      <accordion-default />
      <collapse-types />
      <collapse-hover />
      <collapse-boostrap-vue />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'
import AccordionDefault from './AccordionDefault.vue'
import CollapseDefault from './CollapseDefault.vue'
import CollapseBoostrapVue from './CollapseBootstrapVue.vue'
import CollapseHover from './CollapseHover.vue'
import CollapseTypes from './CollapseTypes.vue'

export default {
  components: {
    BRow,
    BCol,

    AccordionDefault,
    CollapseDefault,
    CollapseBoostrapVue,
    CollapseHover,
    CollapseTypes,
  },
}
</script>

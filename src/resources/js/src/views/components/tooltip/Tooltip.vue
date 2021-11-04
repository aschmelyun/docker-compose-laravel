<template>
  <b-row>
    <b-col cols="12">
      <tooltip-position />
      <tooltip-variant />
      <tooltip-trigger />
      <tooltip-option />
      <tooltip-method />
      <tooltip-event />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'
import TooltipPosition from './TooltipPosition.vue'
import TooltipVariant from './TooltipVariant.vue'
import TooltipTrigger from './TooltipTrigger.vue'
import TooltipOption from './TooltipOption.vue'
import TooltipMethod from './TooltipMethod.vue'
import TooltipEvent from './TooltipEvent.vue'

export default {
  components: {
    BRow,
    BCol,
    TooltipPosition,
    TooltipVariant,
    TooltipTrigger,
    TooltipOption,
    TooltipMethod,
    TooltipEvent,
  },
}
</script>

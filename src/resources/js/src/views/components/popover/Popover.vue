<template>
  <b-row>
    <b-col cols="12">
      <popover-position />
      <popover-variant />
      <popover-trigger />
      <popover-option />
      <popover-method />
      <popover-event />
      <popover-advance />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'
import PopoverPosition from './PopoverPosition.vue'
import PopoverTrigger from './PopoverTrigger.vue'
import PopoverOption from './PopoverOption.vue'
import PopoverMethod from './PopoverMethod.vue'
import PopoverEvent from './PopoverEvent.vue'
import PopoverVariant from './PopoverVariant.vue'
import PopoverAdvance from './PopoverAdvance.vue'

export default {
  components: {
    BRow,
    BCol,

    PopoverPosition,
    PopoverTrigger,
    PopoverOption,
    PopoverMethod,
    PopoverEvent,
    PopoverVariant,
    PopoverAdvance,
  },
}
</script>

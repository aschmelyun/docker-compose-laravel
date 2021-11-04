<template>
  <b-row>
    <b-col cols="12">
      <calendar-basic />
    </b-col>
    <b-col md="6">
      <calendar-disable-readonly-states />
    </b-col>
    <b-col md="6">
      <calendar-disable-date />
    </b-col>
    <b-col md="6">
      <calendar-min-max-range />
    </b-col>
    <b-col md="6">
      <calendar-variant />
    </b-col>
    <b-col md="6">
      <calendar-width />
    </b-col>
    <b-col md="6">
      <calendar-border-padding />
    </b-col>
    <b-col cols="12">
      <calendar-string-format />
    </b-col>
    <b-col md="6">
      <calendar-slot />
    </b-col>
    <b-col md="6">
      <calendar-custom-class />
    </b-col>
    <b-col>
      <calendar-internationalization />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'

import CalendarBasic from './CalendarBasic.vue'
import CalendarDisableReadonlyStates from './CalendarDisableReadonlyStates.vue'
import CalendarMinMaxRange from './CalendarMinMaxRange.vue'
import CalendarDisableDate from './CalendarDisableDate.vue'
import CalendarVariant from './CalendarVariant.vue'
import CalendarWidth from './CalendarWidth.vue'
import CalendarStringFormat from './CalendarStringFormat.vue'
import CalendarBorderPadding from './CalendarBorderPadding.vue'
import CalendarSlot from './CalendarSlot.vue'
import CalendarCustomClass from './CalendarCustomClass.vue'
import CalendarInternationalization from './CalendarInternationalization.vue'

export default {
  components: {
    BRow,
    BCol,

    CalendarBasic,
    CalendarDisableReadonlyStates,
    CalendarMinMaxRange,
    CalendarDisableDate,
    CalendarVariant,
    CalendarWidth,
    CalendarStringFormat,
    CalendarBorderPadding,
    CalendarSlot,
    CalendarCustomClass,
    CalendarInternationalization,
  },
}
</script>

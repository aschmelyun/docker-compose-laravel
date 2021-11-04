<template>
  <b-row class="match-height">
    <b-col lg="6">
      <form-timepicker-basic />
    </b-col>
    <b-col lg="6">
      <form-timepicker-second />
    </b-col>
    <b-col lg="6">
      <form-timepicker-state />
    </b-col>
    <b-col lg="6">
      <form-timepicker-validation />
    </b-col>
    <b-col lg="6">
      <form-timepicker-size />
    </b-col>
    <b-col lg="6">
      <form-timepicker-button-only />
    </b-col>
    <b-col lg="6">
      <form-timepicker-placeholder />
    </b-col>
    <b-col lg="6">
      <form-timepicker-optional />
    </b-col>
    <b-col cols="12">
      <form-timepicker-internationalization />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'

import FormTimepickerBasic from './FormTimepickerBasic.vue'
import FormTimepickerState from './FormTimepickerState.vue'
import FormTimepickerValidation from './FormTimepickerValidation.vue'
import FormTimepickerSecond from './FormTimepickerSecond.vue'
import FormTimepickerSize from './FormTimepickerSize.vue'
import FormTimepickerPlaceholder from './FormTimepickerPlaceholder.vue'
import FormTimepickerOptional from './FormTimepickerOptional.vue'
import FormTimepickerButtonOnly from './FormTimepickerButtonOnly.vue'
import FormTimepickerInternationalization from './FormTimepickerInternationalization.vue'

export default {
  components: {
    BRow,
    BCol,

    FormTimepickerBasic,
    FormTimepickerState,
    FormTimepickerValidation,
    FormTimepickerSecond,
    FormTimepickerSize,
    FormTimepickerPlaceholder,
    FormTimepickerOptional,
    FormTimepickerButtonOnly,
    FormTimepickerInternationalization,
  },
}
</script>

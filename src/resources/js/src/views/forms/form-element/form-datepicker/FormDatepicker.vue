<template>
  <b-row class="match-height">
    <b-col lg="6">
      <form-datepicker-basic />
    </b-col>
    <b-col lg="6">
      <form-datepicker-placeholder />
    </b-col>
    <b-col lg="6">
      <form-datepicker-min-max />
    </b-col>
    <b-col lg="6">
      <form-datepicker-disable-date />
    </b-col>
    <b-col lg="6">
      <form-datepicker-validation />
    </b-col>
    <b-col lg="6">
      <form-datepicker-state />
    </b-col>
    <b-col lg="12">
      <form-datepicker-variant />
    </b-col>
    <b-col lg="6">
      <form-datepicker-button-only />
    </b-col>
    <b-col lg="6">
      <form-datepicker-string />
    </b-col>
    <b-col lg="6">
      <form-datepicker-full-width />
    </b-col>
    <b-col lg="6">
      <form-datepicker-optional />
    </b-col>
    <b-col lg="6">
      <form-datepicker-size />
    </b-col>
    <b-col lg="6">
      <form-datepicker-internationalization />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'

import FormDatepickerBasic from './FormDatepickerBasic.vue'
import FormDatepickerState from './FormDatepickerState.vue'
import FormDatepickerMinMax from './FormDatepickerMinMax.vue'
import FormDatepickerDisableDate from './FormDatepickerDisableDate.vue'
import FormDatepickerValidation from './FormDatepickerValidation.vue'
import FormDatepickerVariant from './FormDatepickerVariant.vue'
import FormDatepickerSize from './FormDatepickerSize.vue'
import FormDatepickerPlaceholder from './FormDatepickerPlaceholder.vue'
import FormDatepickerOptional from './FormDatepickerOptional.vue'
import FormDatepickerButtonOnly from './FormDatepickerButtonOnly.vue'
import FormDatepickerString from './FormDatepickerString.vue'
import FormDatepickerFullWidth from './FormDatepickerFullWidth.vue'
import FormDatepickerInternationalization from './FormDatepickerInternationalization.vue'

export default {
  components: {
    BRow,
    BCol,

    FormDatepickerBasic,
    FormDatepickerState,
    FormDatepickerMinMax,
    FormDatepickerDisableDate,
    FormDatepickerValidation,
    FormDatepickerVariant,
    FormDatepickerSize,
    FormDatepickerPlaceholder,
    FormDatepickerOptional,
    FormDatepickerButtonOnly,
    FormDatepickerString,
    FormDatepickerFullWidth,
    FormDatepickerInternationalization,
  },
}
</script>

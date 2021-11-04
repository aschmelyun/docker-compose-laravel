<template>
  <b-row>
    <b-col cols="12">
      <form-validation-simple />
      <form-validation-multiple />
      <b-row>
        <b-col md="6">
          <form-validation-placeholder />
        </b-col>
        <b-col md="6">
          <form-validation-placeholder-arguments />
        </b-col>
      </b-row>
      <form-validation-types />
      <form-validation-locale />
      <form-validation-extend />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'

import FormValidationSimple from './FormValidationSimple.vue'
import FormValidationMultiple from './FormValidationMultiple.vue'
import FormValidationTypes from './FormValidationTypes.vue'
import FormValidationPlaceholder from './FormValidationPlaceholder.vue'
import FormValidationPlaceholderArguments from './FormValidationPlaceholderArguments.vue'
import FormValidationLocale from './FormValidationLocale.vue'
import FormValidationExtend from './FormValidationExtend.vue'

export default {
  components: {
    BRow,
    BCol,

    FormValidationSimple,
    FormValidationMultiple,
    FormValidationTypes,
    FormValidationPlaceholder,
    FormValidationPlaceholderArguments,
    FormValidationLocale,
    FormValidationExtend,
  },
}
</script>

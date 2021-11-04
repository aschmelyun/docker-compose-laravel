<template>
  <b-row>
    <b-col cols="12">
      <form-radio-basic />
      <form-radio-custom />
      <form-radio-color />
      <form-radio-contextual-states />
      <form-radio-stack-inline />
      <form-radio-options-array />
      <form-radio-field-names />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'
import FormRadioBasic from './FormRadioBasic.vue'
import FormRadioCustom from './FormRadioCustom.vue'
import FormRadioColor from './FormRadioColor.vue'
import FormRadioContextualStates from './FormRadioContextualStates.vue'
import FormRadioStackInline from './FormRadioStackInline.vue'
import FormRadioOptionsArray from './FormRadioOptionsArray.vue'
import FormRadioFieldNames from './FormRadioFieldNames.vue'

export default {
  components: {
    BRow,
    BCol,
    FormRadioBasic,
    FormRadioCustom,
    FormRadioColor,
    FormRadioContextualStates,
    FormRadioStackInline,
    FormRadioOptionsArray,
    FormRadioFieldNames,
  },
}
</script>

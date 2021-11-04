<template>
  <b-row>
    <b-col cols="12">
      <form-checkbox-basic />
      <form-checkbox-custom />
      <form-checkbox-color />
      <form-checkbox-multiple />
      <form-checkbox-change-names />
      <form-checkbox-stacked-inline />
      <form-checkbox-states />
      <form-checkbox-indeterminate />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'
import FormCheckboxBasic from './FormCheckboxBasic.vue'
import FormCheckboxCustom from './FormCheckboxCustom.vue'
import FormCheckboxColor from './FormCheckboxColor.vue'
import FormCheckboxStates from './FormCheckboxStates.vue'
import FormCheckboxMultiple from './FormCheckboxMultiple.vue'
import FormCheckboxChangeNames from './FormCheckboxChangeNames.vue'
import FormCheckboxStackedInline from './FormCheckboxStackedInline.vue'
import FormCheckboxIndeterminate from './FormCheckboxIndeterminate.vue'

export default {
  components: {
    BRow,
    BCol,
    FormCheckboxBasic,
    FormCheckboxCustom,
    FormCheckboxColor,
    FormCheckboxStates,
    FormCheckboxMultiple,
    FormCheckboxChangeNames,
    FormCheckboxStackedInline,
    FormCheckboxIndeterminate,
  },
}
</script>

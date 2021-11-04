<template>
  <b-row>
    <b-col cols="12">
      <form-text-area-default />
      <form-text-area-rows />
      <form-text-area-floating-label />
      <form-text-area-states />
      <form-text-area-size />
      <form-text-area-disable-resize />
      <form-text-area-auto-height />
      <formatter-text-area />
      <form-text-area-readonly />
      <form-text-area-debounce />
      <form-text-area-counter />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'
import FormTextAreaDefault from './FormTextAreaDefault.vue'
import FormTextAreaRows from './FormTextAreaRows.vue'
import FormTextAreaFloatingLabel from './FormTextAreaFloatingLabel.vue'
import FormTextAreaStates from './FormTextAreaStates.vue'
import FormTextAreaSize from './FormTextAreaSize.vue'
import FormTextAreaDisableResize from './FormTextAreaDisableResize.vue'
import FormTextAreaAutoHeight from './FormTextAreaAutoHeight.vue'
import FormatterTextArea from './FormTextAreaFormatter.vue'
import FormTextAreaReadonly from './FormTextAreaReadonly.vue'
import FormTextAreaDebounce from './FormTextAreaDebounce.vue'
import FormTextAreaCounter from './FormTextAreaCounter.vue'

export default {
  components: {
    BRow,
    BCol,

    FormTextAreaDefault,
    FormTextAreaRows,
    FormTextAreaFloatingLabel,
    FormTextAreaStates,
    FormTextAreaSize,
    FormTextAreaDisableResize,
    FormTextAreaAutoHeight,
    FormatterTextArea,
    FormTextAreaReadonly,
    FormTextAreaDebounce,
    FormTextAreaCounter,
  },
}
</script>

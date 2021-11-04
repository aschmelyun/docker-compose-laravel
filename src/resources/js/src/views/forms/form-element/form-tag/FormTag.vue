<template>
  <b-row>
    <b-col cols="12">
      <basic-form-tags />
      <separators-form-tags />
      <removal-form-tags />
      <styling-form-tags />
      <validation-form-tags />
      <detecting-form-tags />
      <native-input-form-tags />
      <custom-form-tags />
      <advance-custom-form-tags />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'
import BasicFormTags from './FormTagsBasic.vue'
import SeparatorsFormTags from './FormTagsSeparators.vue'
import RemovalFormTags from './FormTagsRemoval.vue'
import StylingFormTags from './FormTagsStyling.vue'
import ValidationFormTags from './FormTagsValidation.vue'
import DetectingFormTags from './FormTagsDetecting.vue'
import NativeInputFormTags from './FormTagsNativeInput.vue'
import CustomFormTags from './FormTagsCustom.vue'
import AdvanceCustomFormTags from './FormTagsAdvanceCustom.vue'

export default {
  components: {
    BRow,
    BCol,

    BasicFormTags,
    SeparatorsFormTags,
    RemovalFormTags,
    StylingFormTags,
    ValidationFormTags,
    DetectingFormTags,
    NativeInputFormTags,
    CustomFormTags,
    AdvanceCustomFormTags,
  },
}
</script>

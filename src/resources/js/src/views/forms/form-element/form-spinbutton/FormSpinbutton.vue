<template>
  <b-row class="match-height">
    <b-col lg="6">
      <form-spinbutton-basic />
    </b-col>
    <b-col lg="6">
      <form-spinbutton-size />
    </b-col>
    <b-col lg="6">
      <form-spinbutton-min-max />
    </b-col>
    <b-col lg="6">
      <form-spinbutton-step />
    </b-col>
    <b-col lg="6">
      <form-spinbutton-wrap />
    </b-col>
    <b-col lg="6">
      <form-spinbutton-vertical />
    </b-col>
    <b-col lg="6">
      <form-spinbutton-locale />
    </b-col>
    <b-col lg="6">
      <form-spinbutton-width />
    </b-col>
    <b-col lg="6">
      <form-spinbutton-inline />
    </b-col>
    <b-col lg="6">
      <form-spinbutton-validation />
    </b-col>
    <b-col lg="6">
      <form-spinbutton-formater />
    </b-col>
    <b-col lg="6">
      <form-spinbutton-disabled-readonly />
    </b-col>
    <b-col cols="12">
      <form-spinbutton-slots />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'

import FormSpinbuttonBasic from './FormSpinbuttonBasic.vue'
import FormSpinbuttonMinMax from './FormSpinbuttonMinMax.vue'
import FormSpinbuttonStep from './FormSpinbuttonStep.vue'
import FormSpinbuttonWrap from './FormSpinbuttonWrap.vue'
import FormSpinbuttonSize from './FormSpinbuttonSize.vue'
import FormSpinbuttonInline from './FormSpinbuttonInline.vue'
import FormSpinbuttonVertical from './FormSpinbuttonVertical.vue'
import FormSpinbuttonLocale from './FormSpinbuttonLocale.vue'
import FormSpinbuttonDisabledReadonly from './FormSpinbuttonDisabledReadonly.vue'
import FormSpinbuttonWidth from './FormSpinbuttonWidth.vue'
import FormSpinbuttonValidation from './FormSpinbuttonValidation.vue'
import FormSpinbuttonFormater from './FormSpinbuttonFormater.vue'
import FormSpinbuttonSlots from './FormSpinbuttonSlots.vue'

export default {
  components: {
    BRow,
    BCol,

    FormSpinbuttonBasic,
    FormSpinbuttonMinMax,
    FormSpinbuttonStep,
    FormSpinbuttonWrap,
    FormSpinbuttonSize,
    FormSpinbuttonInline,
    FormSpinbuttonVertical,
    FormSpinbuttonLocale,
    FormSpinbuttonDisabledReadonly,
    FormSpinbuttonWidth,
    FormSpinbuttonValidation,
    FormSpinbuttonFormater,
    FormSpinbuttonSlots,
  },
}
</script>

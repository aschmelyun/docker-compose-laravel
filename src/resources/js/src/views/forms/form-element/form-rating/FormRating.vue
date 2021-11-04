<template>
  <b-row class="match-height">
    <b-col lg="6">
      <form-rating-default />
    </b-col>
    <b-col lg="6">
      <form-rating-number-of-stars />
    </b-col>
    <b-col cols="12">
      <form-rating-variants />
    </b-col>
    <b-col lg="6">
      <form-rating-borderless />
    </b-col>
    <b-col lg="6">
      <form-rating-size />
    </b-col>
    <b-col lg="6">
      <form-rating-show-value />
    </b-col>
    <b-col lg="6">
      <form-rating-state />
    </b-col>
    <b-col lg="6">
      <form-rating-inline-mode />
    </b-col>
    <b-col lg="6">
      <form-rating-icon />
    </b-col>
    <b-col lg="6">
      <form-rating-input-group />
    </b-col>
    <b-col lg="6">
      <form-rating-internationalization />
    </b-col>
    <b-col cols="12">
      <form-rating-clear-button />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'

import FormRatingDefault from './FormRatingDefault.vue'
import FormRatingNumberOfStars from './FormRatingNumberOfStars.vue'
import FormRatingVariants from './FormRatingVariants.vue'
import FormRatingBorderless from './FormRatingBorderless.vue'
import FormRatingSize from './FormRatingSize.vue'
import FormRatingShowValue from './FormRatingShowValue.vue'
import FormRatingState from './FormRatingState.vue'
import FormRatingInlineMode from './FormRatingInlineMode.vue'
import FormRatingIcon from './FormRatingIcon.vue'
import FormRatingInputGroup from './FormRatingInputGroup.vue'
import FormRatingInternationalization from './FormRatingInternationalization.vue'
import FormRatingClearButton from './FormRatingClearButton.vue'

export default {
  components: {
    BRow,
    BCol,

    FormRatingDefault,
    FormRatingNumberOfStars,
    FormRatingVariants,
    FormRatingBorderless,
    FormRatingSize,
    FormRatingShowValue,
    FormRatingState,
    FormRatingInlineMode,
    FormRatingIcon,
    FormRatingInputGroup,
    FormRatingInternationalization,
    FormRatingClearButton,
  },
}
</script>

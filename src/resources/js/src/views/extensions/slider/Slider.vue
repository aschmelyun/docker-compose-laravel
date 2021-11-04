<template>
  <div>
    <slider-single />
    <slider-multiple />
    <slider-ranger-value />
    <slider-rtl />
    <slider-lazy />
    <slider-disabled />
    <slider-adsorb />
    <slider-contained />
    <slider-behavior />
    <slider-color />
    <slider-input />
    <slider-vertical />
  </div>
</template>

<script>
import SliderSingle from './SliderSingle.vue'
import SliderMultiple from './SliderMultiple.vue'
import SliderRangerValue from './SliderRangerValue.vue'
import SliderRtl from './SliderRtl.vue'
import SliderLazy from './SliderLazy.vue'
import SliderDisabled from './SliderDisabled.vue'
import SliderAdsorb from './SliderAdsorb.vue'
import SliderContained from './SliderContained.vue'
import SliderBehavior from './SliderBehavior.vue'
import SliderColor from './SliderColor.vue'
import SliderInput from './SliderInput.vue'
import SliderVertical from './SliderVertical.vue'

export default {
  components: {
    SliderSingle,
    SliderMultiple,
    SliderRangerValue,
    SliderRtl,
    SliderLazy,
    SliderDisabled,
    SliderAdsorb,
    SliderContained,
    SliderBehavior,
    SliderColor,
    SliderInput,
    SliderVertical,
  },
}
</script>

<style lang="scss" >
@import '~@core/scss/vue/libs/vue-slider.scss';
</style>

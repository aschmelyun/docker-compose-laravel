<template>
  <b-row class="match-height">
    <b-col md="6">
      <carousel-basic />
    </b-col>
    <b-col md="6">
      <carousel-caption />
    </b-col>
    <b-col md="6">
      <carousel-interval />
    </b-col>
    <b-col md="6">
      <carousel-pause />
    </b-col>
    <b-col md="6">
      <carousel-wrap />
    </b-col>
    <b-col md="6">
      <carousel-cross-fade />
    </b-col>
    <b-col md="6">
      <carousel-keyboard />
    </b-col>
    <b-col md="6">
      <carousel-vsupport />
    </b-col>
    <b-col md="6">
      <carousel-programmatica-slide />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'

import CarouselBasic from './CarouselBasic.vue'
import CarouselCaption from './CarouselCaption.vue'
import CarouselCrossFade from './CarouselCrossFade.vue'
import CarouselInterval from './CarouselInterval.vue'
import CarouselKeyboard from './CarouselKeyboard.vue'
import CarouselProgrammaticaSlide from './CarouselProgrammaticSlide.vue'
import CarouselVsupport from './CarouselVsupport.vue'
import CarouselPause from './CarouselPause.vue'
import CarouselWrap from './CarouselWrap.vue'

export default {
  components: {
    BCol,
    BRow,

    CarouselCaption,
    CarouselBasic,
    CarouselCrossFade,
    CarouselInterval,
    CarouselKeyboard,
    CarouselProgrammaticaSlide,
    CarouselVsupport,
    CarouselPause,
    CarouselWrap,
  },
}
</script>

<style></style>

<template>
  <b-row>
    <b-col cols="12">
      <swiper-default />
      <swiper-navigation />
      <swiper-pagination />
      <swiper-progress />
      <swiper-multiple-slides />
      <swiper-multi-row-slides />
      <swiper-centered-slides />
      <swiper-centered-slides2 />
      <swiper-fade-effect />
      <swiper-cube />
      <swiper-coverflow-effect />
      <swiper-autoplay />
      <swiper-gallery />
      <swiper-parallax />
      <swiper-lazy />
      <swiper-responsive />
      <swiper-virtual />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'
import SwiperDefault from './SwiperDefault.vue'
import SwiperNavigation from './SwiperNavigation.vue'
import SwiperPagination from './SwiperPagination.vue'
import SwiperProgress from './SwiperProgress.vue'
import SwiperMultipleSlides from './SwiperMultipleSlides.vue'
import SwiperMultiRowSlides from './SwiperMultiRowSlides.vue'
import SwiperCenteredSlides from './SwiperCenteredSlides.vue'
import SwiperCenteredSlides2 from './SwiperCenteredSlides2.vue'
import SwiperFadeEffect from './SwiperFadeEffect.vue'
import SwiperCube from './SwiperCube.vue'
import SwiperCoverflowEffect from './SwiperCoverflowEffect.vue'
import SwiperAutoplay from './SwiperAutoplay.vue'
import SwiperGallery from './SwiperGallery.vue'
import SwiperParallax from './SwiperParallax.vue'
import SwiperLazy from './SwiperLazy.vue'
import SwiperResponsive from './SwiperResponsive.vue'
import SwiperVirtual from './SwiperVirtual.vue'

export default {
  components: {
    BRow,
    BCol,

    SwiperDefault,
    SwiperNavigation,
    SwiperPagination,
    SwiperProgress,
    SwiperMultipleSlides,
    SwiperMultiRowSlides,
    SwiperCenteredSlides,
    SwiperCenteredSlides2,
    SwiperFadeEffect,
    SwiperCube,
    SwiperCoverflowEffect,
    SwiperAutoplay,
    SwiperGallery,
    SwiperParallax,
    SwiperLazy,
    SwiperResponsive,
    SwiperVirtual,
  },
}
</script>

<style lang="scss">
@import '~@core/scss/vue/libs/swiper.scss';
</style>

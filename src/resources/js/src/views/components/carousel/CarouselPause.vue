<template>
  <b-card-code title="Pause Option">
    <b-card-text>
      <span>To disable this feature, set the</span>
      <code>no-hover-pause</code>
      <span> prop on.</span>
    </b-card-text>

    <b-carousel
      id="carousel-interval"
      no-hover-pause
      controls
      indicators
      :interval="5000"
    >
      <b-carousel-slide :img-src="require('@/assets/images/slider/04.jpg')" />
      <b-carousel-slide :img-src="require('@/assets/images/slider/05.jpg')" />
      <b-carousel-slide :img-src="require('@/assets/images/slider/06.jpg')" />
    </b-carousel>

    <template #code>
      {{ codePause }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BCarousel, BCarouselSlide, BCardText } from 'bootstrap-vue'
import { codePause } from './code'

export default {
  components: {
    BCardCode,
    BCarousel,
    BCarouselSlide,
    BCardText,
  },
  data() {
    return {
      codePause,
    }
  },
}
</script>

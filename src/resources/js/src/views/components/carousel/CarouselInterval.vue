<template>
  <b-card-code
    title="Carousel Interval"
  >
    <b-card-text>
      <span>Carousel defaults to an </span>
      <code>interval</code>
      <span> of 5000ms (5 seconds).</span>
    </b-card-text>

    <b-carousel
      id="carousel-interval"
      controls
      indicators
      :interval="400"
    >
      <b-carousel-slide :img-src="require('@/assets/images/slider/01.jpg')" />
      <b-carousel-slide :img-src="require('@/assets/images/slider/02.jpg')" />
      <b-carousel-slide :img-src="require('@/assets/images/slider/03.jpg')" />
    </b-carousel>

    <template #code>
      {{ codeCarouselInterval }}
    </template>
  </b-card-code>
</template>

<script>
import { BCarousel, BCarouselSlide, BCardText } from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code'
import { codeCarouselInterval } from './code'

export default {
  components: {
    BCardCode,
    BCarousel,
    BCarouselSlide,
    BCardText,
  },
  data() {
    return {
      codeCarouselInterval,
    }
  },
}
</script>

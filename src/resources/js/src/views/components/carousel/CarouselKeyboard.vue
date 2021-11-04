<template>
  <b-card-code title="Keyboard Option">
    <b-card-text>
      Whether the carousel should react to keyboard events. User prop <code>controls</code> for keyboard event.
    </b-card-text>

    <b-carousel
      id="carousel-interval"
      controls
      indicators
      :interval="400"
    >
      <b-carousel-slide :img-src="require('@/assets/images/slider/07.jpg')" />
      <b-carousel-slide :img-src="require('@/assets/images/slider/08.jpg')" />
      <b-carousel-slide :img-src="require('@/assets/images/slider/09.jpg')" />
    </b-carousel>

    <template #code>
      {{ codeKeyboard }}
    </template>
  </b-card-code>
</template>

<script>
import { BCarousel, BCarouselSlide, BCardText } from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code'
import { codeKeyboard } from './code'

export default {
  components: {
    BCardCode,
    BCarousel,
    BCarouselSlide,
    BCardText,
  },
  data() {
    return {
      codeKeyboard,
    }
  },
}
</script>

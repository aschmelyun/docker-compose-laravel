<template>
  <b-card-code title="Basic Example">
    <b-card-text>
      The carousel is a slideshow for cycling through a series of content, built with CSS 3D transforms. It works with
      a series of images, text, or custom markup.
    </b-card-text>

    <b-carousel
      id="carousel-example-generic"
      controls
      indicators
    >
      <b-carousel-slide :img-src="require('@/assets/images/slider/01.jpg')" />
      <b-carousel-slide :img-src="require('@/assets/images/slider/02.jpg')" />
      <b-carousel-slide :img-src="require('@/assets/images/slider/03.jpg')" />
    </b-carousel>

    <template #code>
      {{ codeCarouselBasic }}
    </template>
  </b-card-code>
</template>

<script>
import { BCarousel, BCarouselSlide, BCardText } from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code'
import { codeCarouselBasic } from './code'

export default {
  components: {
    BCardCode,
    BCarousel,
    BCarouselSlide,
    BCardText,
  },
  data() {
    return {
      codeCarouselBasic,
    }
  },
}
</script>

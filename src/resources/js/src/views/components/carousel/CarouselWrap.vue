<template>
  <b-card-code title="Wrap Option">
    <b-card-text>
      <span>To disable carousel slide wrapping, set the </span>
      <code>no-wrap</code>
      <span> prop to true.</span>
    </b-card-text>

    <b-carousel
      id="carousel-interval"
      no-wrap
      controls
      indicators
      :interval="400"
    >
      <b-carousel-slide :img-src="require('@/assets/images/slider/01.jpg')" />
      <b-carousel-slide :img-src="require('@/assets/images/slider/02.jpg')" />
      <b-carousel-slide :img-src="require('@/assets/images/slider/04.jpg')" />
    </b-carousel>

    <template #code>
      {{ codeWrap }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BCarousel, BCarouselSlide, BCardText } from 'bootstrap-vue'
import { codeWrap } from './code'

export default {
  components: {
    BCardCode,
    BCarousel,
    BCarouselSlide,
    BCardText,
  },
  data() {
    return {
      codeWrap,
    }
  },
}
</script>

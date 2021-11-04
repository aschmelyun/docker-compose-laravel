<template>
  <b-card-code
    title="Optional captions"
  >
    <b-card-text>
      <span>Add captions to your slides easily with the prop</span>
      <code>caption</code>
      <span>element within any</span>
      <code>&lt;b-carousel-slide&gt;</code>.
    </b-card-text>

    <b-carousel
      id="carousel-caption"
      controls
      indicators
    >
      <b-carousel-slide
        caption-html="<span class='text-white'>First Slide Label</span>"
        class="card-img-overlay"
        text="Donut jujubes I love topping I love sweet. Jujubes I love brownie gummi bears I love donut sweet chocolate. Tart chocolate marshmallow.Tart carrot cake muffin."
        :img-src="require('@/assets/images/slider/08.jpg')"
      />
      <b-carousel-slide
        caption-html="<span class='text-white'>Second Slide Label</span>"
        class="card-img-overlay"
        text="Tart macaroon marzipan I love soufflé apple pie wafer. Chocolate bar jelly caramels jujubes chocolate cake gummies. Cupcake cake I love cake danish carrot cake."
        :img-src="require('@/assets/images/slider/09.jpg')"
      />
      <b-carousel-slide
        caption-html="<span class='text-white'>Third Slide Label</span>"
        class="card-img-overlay"
        text="Pudding sweet pie gummies. Chocolate bar sweet tiramisu cheesecake chocolate cotton candy pastry muffin. Marshmallow cake powder icing."
        :img-src="require('@/assets/images/slider/10.jpg')"
      />
    </b-carousel>

    <template #code>
      {{ codeCarouselCaption }}
    </template>
  </b-card-code>
</template>

<script>
import { BCarousel, BCarouselSlide, BCardText } from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code'
import { codeCarouselCaption } from './code'

export default {
  components: {
    BCardCode,
    BCarousel,
    BCarouselSlide,
    BCardText,
  },
  data() {
    return {
      codeCarouselCaption,
    }
  },
}
</script>

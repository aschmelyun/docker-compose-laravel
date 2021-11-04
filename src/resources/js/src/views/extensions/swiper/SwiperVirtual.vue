<template>
  <b-card-code title="Virtual Slides">
    <swiper
      ref="mySwiper15"
      class="swiper-virtual"
      :options="swiperOptions"
      :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
    >
      <div
        slot="pagination"
        class="swiper-pagination"
      />
      <div
        slot="button-next"
        class="swiper-button-next"
      />
      <div
        slot="button-prev"
        class="swiper-button-prev"
      />
    </swiper>

    <!-- buttons -->
    <div class="demo-inline-spacing justify-content-center">
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
        class="font-small-3"
        @click.prevent="prependSlides"
      >
        Prepend 2 Slides
      </b-button>
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
        class="font-small-3"
        @click.prevent="toSlide(0)"
      >
        Slide 1
      </b-button>
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
        class="font-small-3"
        @click.prevent="toSlide(250)"
      >
        Slide 250
      </b-button>
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
        class="font-sm-3"
        @click.prevent="toSlide(500)"
      >
        Slide 500
      </b-button>
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
        class="font-small-3"
        @click.prevent="appendSlide"
      >
        Append Slide
      </b-button>
    </div>

    <template #code>
      {{ codeVirtual }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import { Swiper } from 'vue-awesome-swiper'
import { BButton } from 'bootstrap-vue'
import 'swiper/css/swiper.css'
import Ripple from 'vue-ripple-directive'
import { codeVirtual } from './code'

export default {
  components: {
    Swiper,
    BCardCode,
    BButton,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      codeVirtual,
      slides: [],
      prependNumber: 1,
      appendNumber: 600,
      swiperOptions: {
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        virtual: {
          slides: Array(600)
            .fill('Slide')
            .map((item, index) => `${item} ${index + 1}`),
        },
      },
    }
  },
  methods: {
    toSlide(index) {
      this.$refs.mySwiper15.$swiper.slideTo(index, 1)
    },
    prependSlides() {
      this.$refs.mySwiper15.$swiper.virtual.prependSlide([
        `Slide ${(this.prependNumber -= 1)}`,
        `Slide ${(this.prependNumber -= 1)}`,
      ])
    },
    appendSlide() {
      this.$refs.mySwiper15.$swiper.virtual.appendSlide(`Slide ${(this.appendNumber += 1)}`)
    },
  },
}
</script>

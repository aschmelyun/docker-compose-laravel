<template>
  <b-card-code
    title="Centered Slides Option-1"
    class="bg-transparent shadow-none"
  >
    <swiper
      class="swiper-centered-slides p-1"
      :options="swiperOptions"
      :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
    >

      <!-- slides -->
      <swiper-slide
        v-for="data in swiperData"
        :key="data.text"
        class="rounded swiper-shadow"
      >
        <feather-icon
          :icon="data.icon"
          size="28"
        />
        <div class="swiper-text pt-md-1 pt-sm-50">
          {{ data.text }}
        </div>
      </swiper-slide>

      <!-- Add Arrows -->
      <div
        slot="button-next"
        class="swiper-button-next"
      />
      <div
        slot="button-prev"
        class="swiper-button-prev"
      />
    </swiper>

    <template #code>
      {{ codeCenterSlides }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import { codeCenterSlides } from './code'

export default {
  components: {
    Swiper,
    SwiperSlide,
    BCardCode,
  },
  data() {
    return {
      codeCenterSlides,
      swiperData: [
        { icon: 'GithubIcon', text: 'Getting Started' },
        { icon: 'FacebookIcon', text: 'Pricing & Plans' },
        { icon: 'TwitterIcon', text: 'Sales Question' },
        { icon: 'InstagramIcon', text: 'Usage Guides' },
        { icon: 'GitlabIcon', text: 'General Guide' },
      ],
      swiperOptions: {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 30,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    }
  },
}
</script>

<template>
  <b-card-code
    title="Autoplay"
  >
    <swiper
      class="swiper-autoplay"
      :options="swiperOptions"
      :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
    >
      <swiper-slide
        v-for="data in swiperData"
        :key="data.img"
      >
        <b-img
          :src="data.img"
          fluid
        />
      </swiper-slide>
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

    <template #code>
      {{ codeAutoplay }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import { BImg } from 'bootstrap-vue'
import 'swiper/css/swiper.css'
import { codeAutoplay } from './code'

export default {
  components: {
    Swiper,
    SwiperSlide,
    BCardCode,
    BImg,
  },
  data() {
    return {
      codeAutoplay,
      swiperOptions: {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },

      /* eslint-disable global-require */
      swiperData: [
        { img: require('@/assets/images/banner/banner-20.jpg') },
        { img: require('@/assets/images/banner/banner-7.jpg') },
        { img: require('@/assets/images/banner/banner-8.jpg') },
        { img: require('@/assets/images/banner/banner-9.jpg') },
        { img: require('@/assets/images/banner/banner-10.jpg') },
        { img: require('@/assets/images/banner/banner-11.jpg') },
      ],
      /* eslint-disable global-require */

    }
  },
}
</script>

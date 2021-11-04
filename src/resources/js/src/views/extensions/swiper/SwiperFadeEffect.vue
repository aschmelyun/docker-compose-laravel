<template>
  <b-card-code
    title="Fade Effect"
  >
    <swiper
      class="swiper-navigations"
      :options="swiperOptions"
      :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
    >
      <swiper-slide
        v-for="(data,index) in swiperData"
        :key="index"
      >
        <b-img
          :src="data.img"
          fluid
        />
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
      <div
        slot="pagination"
        class="swiper-pagination"
      />
    </swiper>

    <template #code>
      {{ codeFadeEffect }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import { BImg } from 'bootstrap-vue'
import 'swiper/css/swiper.css'
import { codeFadeEffect } from './code'

export default {
  components: {
    Swiper,
    SwiperSlide,
    BCardCode,
    BImg,
  },
  data() {
    return {
      codeFadeEffect,

      /* eslint-disable global-require */
      swiperData: [
        { img: require('@/assets/images/banner/banner-20.jpg') },
        { img: require('@/assets/images/banner/banner-19.jpg') },
        { img: require('@/assets/images/banner/banner-18.jpg') },
        { img: require('@/assets/images/banner/banner-17.jpg') },
        { img: require('@/assets/images/banner/banner-16.jpg') },
      ],
      /* eslint-disable global-require */

      swiperOptions: {
        spaceBetween: 30,
        effect: 'fade',
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
        },
      },
    }
  },
}
</script>

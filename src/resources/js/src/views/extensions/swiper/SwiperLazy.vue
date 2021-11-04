<template>
  <b-card-code title="Lazy Loading">
    <swiper
      class="swiper-lazy-loading"
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
          class="swiper-lazy"
        />
        <div class="swiper-lazy-preloader swiper-lazy-preloader-white" />
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
      {{ codeLazy }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import { BImg } from 'bootstrap-vue'
import 'swiper/css/swiper.css'
import { codeLazy } from './code'

export default {
  components: {
    Swiper,
    SwiperSlide,
    BCardCode,
    BImg,
  },
  data() {
    return {
      codeLazy,

      /* eslint-disable global-require */
      swiperData: [
        { img: require('@/assets/images/banner/banner-9.jpg') },
        { img: require('@/assets/images/banner/banner-8.jpg') },
        { img: require('@/assets/images/banner/banner-7.jpg') },
        { img: require('@/assets/images/banner/banner-20.jpg') },
        { img: require('@/assets/images/banner/banner-5.jpg') },
        { img: require('@/assets/images/banner/banner-4.jpg') },
      ],
      /* eslint-disable global-require */

      swiperOptions: {
        lazy: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    }
  },
}
</script>

<template>
  <b-card-code title="Navigations">
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
    </swiper>

    <template #code>
      {{ codeNavigation }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import { BImg } from 'bootstrap-vue'
import 'swiper/css/swiper.css'
import { codeNavigation } from './code'

export default {
  components: {
    Swiper,
    SwiperSlide,
    BCardCode,
    BImg,
  },
  data() {
    return {
      codeNavigation,

      /* eslint-disable global-require */
      swiperData: [
        { img: require('@/assets/images/banner/banner-7.jpg') },
        { img: require('@/assets/images/banner/banner-4.jpg') },
        { img: require('@/assets/images/banner/banner-14.jpg') },
        { img: require('@/assets/images/banner/banner-3.jpg') },
        { img: require('@/assets/images/banner/banner-2.jpg') },
      ],
      /* eslint-disable global-require */

      swiperOptions: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    }
  },
}
</script>

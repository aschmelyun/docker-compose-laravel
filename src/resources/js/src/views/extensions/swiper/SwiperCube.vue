<template>
  <b-card-code
    title="3-D Cube Effect"
  >
    <swiper
      class="swiper-cube-effect"
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
      <div
        slot="pagination"
        class="swiper-pagination swiper-pagination-white"
      />
    </swiper>

    <template #code>
      {{ codeCube }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import { BImg } from 'bootstrap-vue'
import 'swiper/css/swiper.css'
import { codeCube } from './code'

export default {
  components: {
    Swiper,
    SwiperSlide,
    BCardCode,
    BImg,
  },
  data() {
    return {
      codeCube,

      /* eslint-disable global-require */
      swiperData: [
        { img: require('@/assets/images/banner/banner-21.jpg') },
        { img: require('@/assets/images/banner/banner-22.jpg') },
        { img: require('@/assets/images/banner/banner-23.jpg') },
        { img: require('@/assets/images/banner/banner-24.jpg') },
      ],
      /* eslint-disable global-require */

      swiperOptions: {
        effect: 'cube',
        grabCursor: true,
        cubeEffect: {
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        },
        pagination: {
          el: '.swiper-pagination',
        },
      },
    }
  },
}
</script>

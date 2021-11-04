<template>
  <b-card-code title="Multiple Slides Per View">
    <swiper
      class="swiper-multiple"
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
        class="swiper-pagination"
      />
    </swiper>

    <template #code>
      {{ codeMultipleSlides }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import { BImg } from 'bootstrap-vue'
import 'swiper/css/swiper.css'
import { codeMultipleSlides } from './code'

export default {
  components: {
    Swiper,
    SwiperSlide,
    BCardCode,
    BImg,
  },
  data() {
    return {
      codeMultipleSlides,

      /* eslint-disable global-require */
      swiperData: [
        { img: require('@/assets/images/banner/banner-31.jpg') },
        { img: require('@/assets/images/banner/banner-32.jpg') },
        { img: require('@/assets/images/banner/banner-33.jpg') },
        { img: require('@/assets/images/banner/banner-34.jpg') },
        { img: require('@/assets/images/banner/banner-35.jpg') },
      ],
      /* eslint-disable global-require */

      swiperOptions: {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },
    }
  },
}
</script>

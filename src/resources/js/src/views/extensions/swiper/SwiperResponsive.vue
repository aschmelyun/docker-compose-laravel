<template>
  <b-card-code title="Responsive Breakpoints">
    <swiper
      class="swiper-responsive-breakpoints"
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
      {{ codeResponsive }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import { BImg } from 'bootstrap-vue'
import 'swiper/css/swiper.css'
import { codeResponsive } from './code'

export default {
  components: {
    Swiper,
    SwiperSlide,
    BCardCode,
    BImg,
  },
  data() {
    return {
      codeResponsive,

      /* eslint-disable global-require */
      swiperData: [
        { img: require('@/assets/images/banner/banner-30.jpg') },
        { img: require('@/assets/images/banner/banner-31.jpg') },
        { img: require('@/assets/images/banner/banner-32.jpg') },
        { img: require('@/assets/images/banner/banner-33.jpg') },
        { img: require('@/assets/images/banner/banner-34.jpg') },
        { img: require('@/assets/images/banner/banner-35.jpg') },
        { img: require('@/assets/images/banner/banner-36.jpg') },
        { img: require('@/assets/images/banner/banner-37.jpg') },
        { img: require('@/assets/images/banner/banner-38.jpg') },
      ],
      /* eslint-disable global-require */

      swiperOptions: {
        slidesPerView: 5,
        spaceBetween: 50,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        breakpoints: {
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        },
      },
    }
  },
}
</script>

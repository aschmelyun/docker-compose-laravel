<template>
  <b-card-code title="Gallery">

    <!-- swiper1 -->
    <swiper
      ref="swiperTop"
      class="swiper-gallery gallery-top"
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
        slot="button-next"
        class="swiper-button-next swiper-button-white"
      />
      <div
        slot="button-prev"
        class="swiper-button-prev swiper-button-white"
      />
    </swiper>

    <!-- swiper2 Thumbs -->
    <swiper
      ref="swiperThumbs"
      class="swiper gallery-thumbs"
      :options="swiperOptionThumbs"
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
    </swiper>

    <template #code>
      {{ codeGallery }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import { BImg } from 'bootstrap-vue'
import 'swiper/css/swiper.css'
import { codeGallery } from './code'

export default {
  components: {
    Swiper,
    SwiperSlide,
    BCardCode,
    BImg,
  },
  data() {
    return {
      codeGallery,

      /* eslint-disable global-require */
      swiperData: [
        { img: require('@/assets/images/banner/banner-11.jpg') },
        { img: require('@/assets/images/banner/banner-12.jpg') },
        { img: require('@/assets/images/banner/banner-13.jpg') },
        { img: require('@/assets/images/banner/banner-15.jpg') },
        { img: require('@/assets/images/banner/banner-16.jpg') },
      ],
      /* eslint-disable global-require */

      swiperOptions: {
        loop: true,
        loopedSlides: 5,
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      swiperOptionThumbs: {
        loop: true,
        loopedSlides: 5, // looped slides should be the same
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 4,
        touchRatio: 0.2,
        slideToClickedSlide: true,
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.$swiper
      const swiperThumbs = this.$refs.swiperThumbs.$swiper
      swiperTop.controller.control = swiperThumbs
      swiperThumbs.controller.control = swiperTop
    })
  },
}
</script>

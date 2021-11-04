<template>
  <b-card-code title="Multi Row Slides Layout">
    <swiper
      class="swiper"
      :options="swiperOption"
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
      {{ codeMultiRowSlides }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import { BImg } from 'bootstrap-vue'
import 'swiper/css/swiper.css'
import { codeMultiRowSlides } from './code'

export default {
  components: {
    Swiper,
    SwiperSlide,
    BCardCode,
    BImg,
  },
  data() {
    return {
      codeMultiRowSlides,
      swiperData: [
        /* eslint-disable global-require */
        { img: require('@/assets/images/banner/banner-26.jpg') },
        { img: require('@/assets/images/banner/banner-39.jpg') },
        { img: require('@/assets/images/banner/banner-28.jpg') },
        { img: require('@/assets/images/banner/banner-29.jpg') },
        { img: require('@/assets/images/banner/banner-30.jpg') },
        { img: require('@/assets/images/banner/banner-31.jpg') },
        { img: require('@/assets/images/banner/banner-32.jpg') },
        { img: require('@/assets/images/banner/banner-33.jpg') },
        { img: require('@/assets/images/banner/banner-34.jpg') },
        { img: require('@/assets/images/banner/banner-35.jpg') },
        /* eslint-disable global-require */
      ],
      swiperOption: {
        slidesPerView: 3,
        slidesPerColumn: 2,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        breakpoints: {
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
        },
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.swiper {

  ::v-deep .swiper-wrapper {
    flex-direction: row !important;
  }
  .swiper-slide {
    margin-top: 30px;
  }
}

</style>

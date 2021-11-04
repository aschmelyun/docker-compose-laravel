<template>
  <b-card-code
    title="Pagination"
  >
    <swiper
      class="swiper-paginations"
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
      {{ codePagination }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import { BImg } from 'bootstrap-vue'
import 'swiper/css/swiper.css'
import { codePagination } from './code'

export default {
  components: {
    Swiper,
    SwiperSlide,
    BCardCode,
    BImg,
  },
  data() {
    return {
      codePagination,

      /* eslint-disable global-require */
      swiperData: [
        { img: require('@/assets/images/banner/banner-12.jpg') },
        { img: require('@/assets/images/banner/banner-9.jpg') },
        { img: require('@/assets/images/banner/banner-8.jpg') },
        { img: require('@/assets/images/banner/banner-7.jpg') },
        { img: require('@/assets/images/banner/banner-20.jpg') },
      ],
      /* eslint-disable global-require */

      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
        },
      },
    }
  },
}
</script>

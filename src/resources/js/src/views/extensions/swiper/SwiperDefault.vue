<template>
  <b-card-code title="Default">
    <swiper
      ref="mySwiper"
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
    </swiper>

    <template #code>
      {{ codeDefault }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import { BImg } from 'bootstrap-vue'
import 'swiper/css/swiper.css'
import { codeDefault } from './code'

export default {
  components: {
    Swiper,
    SwiperSlide,
    BCardCode,
    BImg,
  },
  data() {
    return {
      codeDefault,

      /* eslint-disable global-require */
      swiperData: [
        { img: require('@/assets/images/banner/banner-13.jpg') },
        { img: require('@/assets/images/banner/banner-7.jpg') },
        { img: require('@/assets/images/banner/banner-4.jpg') },
        { img: require('@/assets/images/banner/banner-2.jpg') },
        { img: require('@/assets/images/banner/banner-1.jpg') },
      ],
      /* eslint-disable global-require */
    }
  },
}
</script>

<template>
  <b-card-code title="Parallax">
    <swiper
      class="swiper-parallax"
      :options="swiperOptions"
      :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
    >
      <div
        slot="parallax-bg"
        class="parallax-bg"
        data-swiper-parallax="-23%"
      >
        <b-img
          class="img-fluid"
          :src="require('@/assets/images/banner/parallax-4.jpg')"
          alt="banner"
        />
      </div>

      <swiper-slide
        v-for="(data,index) in swiperData"
        :key="index"
      >
        <div
          class="title"
          data-swiper-parallax="-300"
        >
          {{ data.title }}
        </div>
        <div
          class="subtitle"
          data-swiper-parallax="-200"
        >
          {{ data.subtitle }}
        </div>
        <div
          class="text"
          data-swiper-parallax="-100"
        >
          <b-card-text>
            {{ data.text }}
          </b-card-text>
        </div>
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
      {{ codeParallax }}
    </template>
  </b-card-code>
</template>

<script>
import { BImg, BCardText } from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import { codeParallax } from './code'

export default {
  components: {
    BImg,
    Swiper,
    SwiperSlide,
    BCardCode,
    BCardText,
  },
  data() {
    return {
      codeParallax,
      swiperData: [
        { title: 'Slide 1', subtitle: 'Subtitle', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet Lorem, ipsum dolor sit amet consectetur..' },
        { title: 'Slide 2', subtitle: 'Subtitle', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam reiciendis provident atque quod obcaecati voluptatibus ex qui repudiandae sunt dolores. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integeo. Aenean feugiat non eros quis feugiat.' },
        { title: 'Slide 3', subtitle: 'Subtitle', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam reiciendis provident atque quod obcaecati voluptatibus ex qui repudiandae sunt dolores. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lnt ut libero. Aenean feugiat non eros quis feugiat.' },
      ],
      swiperOptions: {
        speed: 600,
        parallax: true,
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

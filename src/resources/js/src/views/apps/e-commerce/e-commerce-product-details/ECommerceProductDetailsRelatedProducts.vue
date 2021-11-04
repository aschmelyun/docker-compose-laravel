<template>
  <b-card-body>
    <div class="mt-4 mb-2 text-center">
      <h4>Related Products</h4>
      <b-card-text>People also search for this items</b-card-text>
    </div>

    <!-- Swiper -->
    <swiper
      class="swiper-responsive-breakpoints px-4 py-2"
      :options="swiperOptions"
    >
      <swiper-slide
        v-for="(product,index) in relatedProducts"
        :key="index"
      >
        <b-link>
          <div class="item-heading">
            <h5 class="text-truncate mb-0">
              {{ product.name }}
            </h5>
            <small class="text-body">by {{ product.brand }}</small>
          </div>
          <div class="img-container w-50 mx-auto py-75">
            <b-img
              :src="product.image"
              fluid
            />
          </div>
          <div class="item-meta">
            <ul class="unstyled-list list-inline mb-25">
              <li
                v-for="star in 5"
                :key="star"
                class="ratings-list-item"
              >
                <feather-icon
                  icon="StarIcon"
                  size="18"
                  class="mr-25"
                  :class="[{'fill-current': star <= product.rating}, star <= product.rating ? 'text-warning' : 'text-muted']"
                />
              </li>
            </ul>
            <p class="card-text text-primary mb-0">
              ${{ product.price }}
            </p>
          </div>
        </b-link>
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
  </b-card-body>
</template>

<script>
import { BCardBody, BCardText, BImg, BLink } from 'bootstrap-vue'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

export default {
  components: {
    BCardBody,
    BCardText,
    BImg,
    BLink,

    // 3rd Party
    Swiper,
    SwiperSlide,
  },
  setup() {
    const swiperOptions = {
      slidesPerView: 5,
      spaceBetween: 55,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        1600: {
          slidesPerView: 4,
          spaceBetween: 55,
        },
        1300: {
          slidesPerView: 3,
          spaceBetween: 55,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 55,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 55,
        },
      },
    }

    /* eslint-disable global-require */
    const relatedProducts = [
      {
        name: 'Apple Watch Series 6',
        brand: 'Apple',
        price: 399.98,
        rating: 4,
        image: require('@/assets/images/elements/apple-watch.png'),
      },
      {
        name: 'Apple MacBook Pro - Silver',
        brand: 'Apple',
        price: 2449.49,
        rating: 2,
        image: require('@/assets/images/elements/macbook-pro.png'),
      },
      {
        name: 'Apple HomePod (Space Grey)',
        brand: 'Apple',
        price: 229.29,
        rating: 3,
        image: require('@/assets/images/elements/homepod.png'),
      },
      {
        name: 'Magic Mouse 2 - Black',
        brand: 'Apple',
        price: 90.98,
        rating: 5,
        image: require('@/assets/images/elements/magic-mouse.png'),
      },
      {
        name: 'iPhone 12 Pro',
        brand: 'Apple',
        price: 1559.99,
        rating: 4,
        image: require('@/assets/images/elements/iphone-x.png'),
      },
    ]
    /* eslint-disable global-require */

    return {
      swiperOptions,
      relatedProducts,
    }
  },
}
</script>

<style lang="scss">
@import '~@core/scss/vue/libs/swiper.scss';
@import '~swiper/css/swiper.css';
</style>

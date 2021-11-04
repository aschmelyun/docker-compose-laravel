export const codeDefault = `
<template>
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
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import { BImg } from 'bootstrap-vue'
import 'swiper/css/swiper.css'

export default {
  components: {
    Swiper,
    SwiperSlide,
    BImg,
  },
  data() {
    return {
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

`

export const codeAutoplay = `
<template>
  <swiper
    class="swiper-autoplay"
    :options="swiperOptions"
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
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import { BImg } from 'bootstrap-vue'
import 'swiper/css/swiper.css'

export default {
  components: {
    Swiper,
    SwiperSlide,
    BImg,
  },
  data() {
    return {
      swiperOptions: {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },

      /* eslint-disable global-require */
      swiperData: [
        { img: require('@/assets/images/banner/banner-20.jpg') },
        { img: require('@/assets/images/banner/banner-7.jpg') },
        { img: require('@/assets/images/banner/banner-8.jpg') },
        { img: require('@/assets/images/banner/banner-9.jpg') },
        { img: require('@/assets/images/banner/banner-10.jpg') },
        { img: require('@/assets/images/banner/banner-11.jpg') },
      ],
      /* eslint-disable global-require */

    }
  },
}
</script>
`

export const codeCenterSlides = `
<template>
  <swiper
    class="swiper-centered-slides p-1"
    :options="swiperOptions"
    :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
  >

    <!-- slides -->
    <swiper-slide
      v-for="data in swiperData"
      :key="data.text"
      class="rounded swiper-shadow"
    >
      <feather-icon
        :icon="data.icon"
        size="28"
      />
      <div class="swiper-text pt-md-1 pt-sm-50">
        {{ data.text }}
      </div>
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
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperData: [
        { icon: 'GithubIcon', text: 'Getting Started' },
        { icon: 'FacebookIcon', text: 'Pricing & Plans' },
        { icon: 'TwitterIcon', text: 'Sales Question' },
        { icon: 'InstagramIcon', text: 'Usage Guides' },
        { icon: 'GitlabIcon', text: 'General Guide' },
      ],
      swiperOptions: {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 30,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    }
  },
}
</script>
`

export const codeCenterSlides2 = `
<template>
  <swiper
    class="swiper-centered-slides-2 p-1"
    :options="swiperOptions"
    :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
  >
    <swiper-slide
      v-for="(data,index) in swiperData"
      :key="index"
      class="rounded swiper-shadow py-1 px-3 d-flex"
    >
      <feather-icon
        :icon="data.icon"
        size="18"
        class="mr-50"
      />
      <div class="swiper-text">
        {{ data.text }}
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperData: [
        { icon: 'GithubIcon', text: 'Getting Started' },
        { icon: 'FacebookIcon', text: 'Pricing & Plans' },
        { icon: 'TwitterIcon', text: 'Sales Question' },
        { icon: 'InstagramIcon', text: 'Usage Guides' },
        { icon: 'FacebookIcon', text: 'Pricing & Plans' },
      ],
      swiperOptions: {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 30,
      },
    }
  },
}
</script>
`

export const codeCoverflowEffect = `
<template>
  <swiper
    class="swiper-coverflow"
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
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import { BImg } from 'bootstrap-vue'
import 'swiper/css/swiper.css'

export default {
  components: {
    Swiper,
    SwiperSlide,
    BImg,
  },
  data() {
    return {

      /* eslint-disable global-require */
      swiperData: [
        { img: require('@/assets/images/banner/banner-35.jpg') },
        { img: require('@/assets/images/banner/banner-39.jpg') },
        { img: require('@/assets/images/banner/banner-38.jpg') },
        { img: require('@/assets/images/banner/banner-37.jpg') },
        { img: require('@/assets/images/banner/banner-36.jpg') },
        { img: require('@/assets/images/banner/banner-34.jpg') },
        { img: require('@/assets/images/banner/banner-33.jpg') },
        { img: require('@/assets/images/banner/banner-32.jpg') },
        { img: require('@/assets/images/banner/banner-31.jpg') },
      ],
      /* eslint-disable global-require */

      swiperOptions: {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        pagination: {
          el: '.swiper-pagination',
        },
      },
    }
  },
}
</script>
`

export const codeCube = `
<template>
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
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import { BImg } from 'bootstrap-vue'
import 'swiper/css/swiper.css'

export default {
  components: {
    Swiper,
    SwiperSlide,
    BImg,
  },
  data() {
    return {
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
`

export const codeFadeEffect = `
<template>
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
    <div
      slot="pagination"
      class="swiper-pagination"
    />
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import { BImg } from 'bootstrap-vue'
import 'swiper/css/swiper.css'

export default {
  components: {
    Swiper,
    SwiperSlide,
    BImg,
  },
  data() {
    return {

      /* eslint-disable global-require */
      swiperData: [
        { img: require('@/assets/images/banner/banner-20.jpg') },
        { img: require('@/assets/images/banner/banner-19.jpg') },
        { img: require('@/assets/images/banner/banner-18.jpg') },
        { img: require('@/assets/images/banner/banner-17.jpg') },
        { img: require('@/assets/images/banner/banner-16.jpg') },
      ],
      /* eslint-disable global-require */

      swiperOptions: {
        spaceBetween: 30,
        effect: 'fade',
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
        },
      },
    }
  },
}
</script>
`

export const codeGallery = `
<template>
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
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import { BImg } from 'bootstrap-vue'
import 'swiper/css/swiper.css'

export default {
  components: {
    Swiper,
    SwiperSlide,
    BImg,
  },
  data() {
    return {

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
`

export const codeLazy = `
<template>
  <swiper
    class="swiper-lazy-loading"
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
        class="swiper-lazy"
      />
      <div class="swiper-lazy-preloader swiper-lazy-preloader-white" />
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
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import { BImg } from 'bootstrap-vue'
import 'swiper/css/swiper.css'

export default {
  components: {
    Swiper,
    SwiperSlide,
    BImg,
  },
  data() {
    return {
      /* eslint-disable global-require */
      swiperData: [
        { img: require('@/assets/images/banner/banner-9.jpg') },
        { img: require('@/assets/images/banner/banner-8.jpg') },
        { img: require('@/assets/images/banner/banner-7.jpg') },
        { img: require('@/assets/images/banner/banner-20.jpg') },
        { img: require('@/assets/images/banner/banner-5.jpg') },
        { img: require('@/assets/images/banner/banner-4.jpg') },
      ],
      /* eslint-disable global-require */

      swiperOptions: {
        lazy: true,
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
`

export const codeMultipleSlides = `
<template>
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
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import { BImg } from 'bootstrap-vue'
import 'swiper/css/swiper.css'

export default {
  components: {
    Swiper,
    SwiperSlide,
    BImg,
  },
  data() {
    return {
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
`

export const codeMultiRowSlides = `
<template>
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
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import { BImg } from 'bootstrap-vue'
import 'swiper/css/swiper.css'

export default {
  components: {
    Swiper,
    SwiperSlide,
    BImg,
  },
  data() {
    return {
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
`

export const codeNavigation = `
<template>
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
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import { BImg } from 'bootstrap-vue'
import 'swiper/css/swiper.css'

export default {
  components: {
    Swiper,
    SwiperSlide,
    BImg,
  },
  data() {
    return {
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
`

export const codePagination = `
<template>
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
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import { BImg } from 'bootstrap-vue'
import 'swiper/css/swiper.css'

export default {
  components: {
    Swiper,
    SwiperSlide,
    BImg,
  },
  data() {
    return {

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
`

export const codeParallax = `
<template>
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
</template>

<script>
import { BImg} from 'bootstrap-vue'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  components: {
    BImg,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
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
`

export const codeProgress = `
<template>
  <swiper
    class="swiper-progress"
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
    <div
      slot="pagination"
      class="swiper-pagination"
    />
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import { BImg } from 'bootstrap-vue'
import 'swiper/css/swiper.css'

export default {
  components: {
    Swiper,
    SwiperSlide,
    BImg,
  },
  data() {
    return {
      /* eslint-disable global-require */
      swiperData: [
        { img: require('@/assets/images/banner/banner-8.jpg') },
        { img: require('@/assets/images/banner/banner-7.jpg') },
        { img: require('@/assets/images/banner/banner-20.jpg') },
        { img: require('@/assets/images/banner/banner-4.jpg') },
        { img: require('@/assets/images/banner/banner-5.jpg') },
      ],
      /* eslint-disable global-require */

      swiperOptions: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'progressbar',
        },
      },
    }
  },
}
</script>
`

export const codeResponsive = `
<template>
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
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import { BImg } from 'bootstrap-vue'
import 'swiper/css/swiper.css'

export default {
  components: {
    Swiper,
    SwiperSlide,
    BImg,
  },
  data() {
    return {
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
`

export const codeVirtual = `
<template>
  <b-card-code title="Virtual Slides">
    <swiper
      ref="mySwiper15"
      class="swiper-virtual"
      :options="swiperOptions"
      :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
    >
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

    <!-- buttons -->
    <div class="demo-inline-spacing justify-content-center">
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
        class="font-small-3"
        @click.prevent="prependSlides"
      >
        Prepend 2 Slides
      </b-button>
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
        class="font-small-3"
        @click.prevent="toSlide(0)"
      >
        Slide 1
      </b-button>
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
        class="font-small-3"
        @click.prevent="toSlide(250)"
      >
        Slide 250
      </b-button>
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
        class="font-sm-3"
        @click.prevent="toSlide(500)"
      >
        Slide 500
      </b-button>
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
        class="font-small-3"
        @click.prevent="appendSlide"
      >
        Append Slide
      </b-button>
    </div>

    <template #code>
      {{ codeVirtual }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import { Swiper } from 'vue-awesome-swiper'
import { BButton } from 'bootstrap-vue'
import 'swiper/css/swiper.css'
import Ripple from 'vue-ripple-directive'
import { codeVirtual } from './code'

export default {
  components: {
    Swiper,
    BCardCode,
    BButton,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      codeVirtual,
      slides: [],
      prependNumber: 1,
      appendNumber: 600,
      swiperOptions: {
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        virtual: {
          slides: Array(600)
            .fill('Slide')
            .map((item, index) => \`\${item} \${index + 1}\`),
        },
      },
    }
  },
  methods: {
    toSlide(index) {
      this.$refs.mySwiper15.$swiper.slideTo(index, 1)
    },
    prependSlides() {
      this.$refs.mySwiper15.$swiper.virtual.prependSlide([
        \`Slide \${(this.prependNumber -= 1)}\`,
        \`Slide \${(this.prependNumber -= 1)}\`,
      ])
    },
    appendSlide() {
      this.$refs.mySwiper15.$swiper.virtual.appendSlide(\`Slide \${(this.appendNumber += 1)}\`)
    },
  },
}
</script>
`

<template>
  <b-card-code
    title="Programmatic slide control"
  >
    <b-card-text>
      <span>The </span>
      <code>&lt;b-carousel&gt;</code>
      <span> instance provides several public methods for controlling sliding:</span>
      <code>setSlide(index), next(), prev(), pause(), start()</code>
    </b-card-text>

    <div>
      <b-carousel
        id="carousel-1"
        ref="myCarousel"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="924"
        img-height="380"
      >
        <!-- Text slides with image -->
        <b-carousel-slide
          text="Nulla vitae elit libero, a pharetra augue mollis interdum."
          :img-src="require('@/assets/images/slider/01.jpg')"
        />

        <!-- Slides with custom text -->
        <b-carousel-slide :img-src="require('@/assets/images/slider/02.jpg')" />

        <!-- Slides with image only -->
        <b-carousel-slide :img-src="require('@/assets/images/slider/03.jpg')" />

        <!-- Slides with img slot -->
        <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
        <b-carousel-slide>
          <template #img>
            <img
              class="d-block img-fluid w-100"
              width="924"
              height="380"
              :src="require('@/assets/images/slider/04.jpg')"
              alt="image slot"
            >
          </template>
        </b-carousel-slide>
      </b-carousel>

      <!-- programmatically  -->
      <div class="d-flex align-items-center justify-content-center mt-1">
        <b-button-group>
          <b-button
            v-ripple.400="'rgba(113, 102, 240, 0.15)'"
            variant="outline-primary"
            @click="prev"
          >
            Pre
          </b-button>
          <b-button
            v-ripple.400="'rgba(113, 102, 240, 0.15)'"
            variant="outline-primary"
            @click="start"
          >
            {{ status ? 'Start' : 'Pause' }}
          </b-button>
          <b-button
            v-ripple.400="'rgba(113, 102, 240, 0.15)'"
            variant="outline-primary"
            @click="next"
          >
            Next
          </b-button>
        </b-button-group>
      </div>
    </div>

    <template #code>
      {{ codeProgrammaticSlide }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import {
  BCarousel, BCarouselSlide, BButtonGroup, BButton, BCardText,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { codeProgrammaticSlide } from './code'

export default {
  components: {
    BCardCode,
    BCarousel,
    BCarouselSlide,
    BButtonGroup,
    BButton,
    BCardText,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      status: false,
      codeProgrammaticSlide,
    }
  },
  methods: {
    prev() {
      if (!this.status) {
        this.$refs.myCarousel.prev()
      }
    },
    next() {
      if (!this.status) {
        this.$refs.myCarousel.next()
      }
    },
    start() {
      this.status = !this.status
      if (this.status) {
        this.$refs.myCarousel.pause()
      } else {
        this.$refs.myCarousel.start()
      }
    },
  },
}
</script>

export const codeCarouselBasic = `
<template>
  <b-carousel
    id="carousel-example-generic"
    controls
    indicators
  >
    <b-carousel-slide :img-src="require('@/assets/images/slider/01.jpg')" />
    <b-carousel-slide :img-src="require('@/assets/images/slider/02.jpg')" />
    <b-carousel-slide :img-src="require('@/assets/images/slider/03.jpg')" />
  </b-carousel>
</template>

<script>
import { BCarousel, BCarouselSlide } from 'bootstrap-vue'

export default {
  components: {
    BCarousel,
    BCarouselSlide,
  },
}
</script>
`

export const codeCarouselCaption = `
<template>
  <b-carousel
    id="carousel-caption"
    controls
    indicators
  >
    <b-carousel-slide
      caption-html="<span class='text-white'>First Slide Label</span>"
      class="card-img-overlay"
      text="Donut jujubes I love topping I love sweet. Jujubes I love brownie gummi bears I love donut sweet chocolate. Tart chocolate marshmallow.Tart carrot cake muffin."
      :img-src="require('@/assets/images/slider/08.jpg')"
    />
    <b-carousel-slide
      caption-html="<span class='text-white'>Second Slide Label</span>"
      class="card-img-overlay"
      text="Tart macaroon marzipan I love soufflé apple pie wafer. Chocolate bar jelly caramels jujubes chocolate cake gummies. Cupcake cake I love cake danish carrot cake."
      :img-src="require('@/assets/images/slider/09.jpg')"
    />
    <b-carousel-slide
      caption-html="<span class='text-white'>Third Slide Label</span>"
      class="card-img-overlay"
      text="Pudding sweet pie gummies. Chocolate bar sweet tiramisu cheesecake chocolate cotton candy pastry muffin. Marshmallow cake powder icing."
      :img-src="require('@/assets/images/slider/10.jpg')"
    />
  </b-carousel>
</template>

<script>
import { BCarousel, BCarouselSlide} from 'bootstrap-vue'

export default {
  components: {
    BCarousel,
    BCarouselSlide,
  },
}
</script>
`

export const codeCarouselCrossfade = `
<template>
  <b-carousel
    id="carousel-crossfade"
    controls
    indicators
    fade
  >
    <b-carousel-slide :img-src="require('@/assets/images/slider/01.jpg')" />
    <b-carousel-slide :img-src="require('@/assets/images/slider/02.jpg')" />
    <b-carousel-slide :img-src="require('@/assets/images/slider/03.jpg')" />
  </b-carousel>
</template>

<script>
import {BCarousel, BCarouselSlide} from 'bootstrap-vue'

export default {
  components: {
    BCarousel,
    BCarouselSlide,
  },
}
</script>
`

export const codeCarouselInterval = `
<template>
  <b-carousel
    id="carousel-interval"
    controls
    indicators
    :interval="400"
  >
    <b-carousel-slide :img-src="require('@/assets/images/slider/01.jpg')" />
    <b-carousel-slide :img-src="require('@/assets/images/slider/02.jpg')" />
    <b-carousel-slide :img-src="require('@/assets/images/slider/03.jpg')" />
  </b-carousel>
</template>

<script>
import { BCarousel, BCarouselSlide} from 'bootstrap-vue'

export default {
  components: {
    BCarousel,
    BCarouselSlide,
  },
}
</script>
`

export const codeVsupport = `
<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="924"
      img-height="380"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        :img-src="require('@/assets/images/slider/05.jpg')"
      />

      <!-- Slides with custom text -->
      <b-carousel-slide :img-src="require('@/assets/images/slider/06.jpg')" />

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

    <b-card-text class="mt-1 mb-0">
      <strong>Slide #:</strong> {{ slide }} <strong>Sliding:</strong> {{ sliding }}
    </b-card-text>
  </div>
</template>

<script>
import { BCarousel, BCarouselSlide, BCardText } from 'bootstrap-vue'

export default {
  components: {
    BCarousel,
    BCarouselSlide,
    BCardText,
  },
  data: () => ({
    slide: 0,
    sliding: null,
  }),
  methods: {
    onSlideStart() {
      this.sliding = true
    },
    onSlideEnd() {
      this.sliding = false
    },
  },
}
</script>
`

export const codeProgrammaticSlide = `
<template>
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
</template>

<script>
import { BCarousel, BCarouselSlide, BButtonGroup, BButton} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BCarousel,
    BCarouselSlide,
    BButtonGroup,
    BButton,
  },
  directives: {
    Ripple,
  },
  data: () => ({
    status: false,
  }),
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
`

export const codeWrap = `
<template>
  <b-carousel
    id="carousel-interval"
    no-wrap
    controls
    indicators
    :interval="400"
  >
    <b-carousel-slide :img-src="require('@/assets/images/slider/01.jpg')" />
    <b-carousel-slide :img-src="require('@/assets/images/slider/02.jpg')" />
    <b-carousel-slide :img-src="require('@/assets/images/slider/04.jpg')" />
  </b-carousel>
</template>

<script>
import { BCarousel, BCarouselSlide } from 'bootstrap-vue'

export default {
  components: {
    BCarousel,
    BCarouselSlide,
  },
}
</script>
`

export const codePause = `
<template>
  <b-carousel
    id="carousel-interval"
    no-hover-pause
    controls
    indicators
    :interval="5000"
  >
    <b-carousel-slide :img-src="require('@/assets/images/slider/04.jpg')" />
    <b-carousel-slide :img-src="require('@/assets/images/slider/05.jpg')" />
    <b-carousel-slide :img-src="require('@/assets/images/slider/06.jpg')" />
  </b-carousel>
</template>

<script>
import { BCarousel, BCarouselSlide } from 'bootstrap-vue'

export default {
  components: {
    BCarousel,
    BCarouselSlide,
  },
}
</script>
`

export const codeKeyboard = `
<template>
  <b-carousel
    id="carousel-interval"
    controls
    indicators
    :interval="400"
  >
    <b-carousel-slide :img-src="require('@/assets/images/slider/07.jpg')" />
    <b-carousel-slide :img-src="require('@/assets/images/slider/08.jpg')" />
    <b-carousel-slide :img-src="require('@/assets/images/slider/09.jpg')" />
  </b-carousel>
</template>

<script>
import { BCarousel, BCarouselSlide } from 'bootstrap-vue'

export default {
  components: {
    BCarousel,
    BCarouselSlide,
  },
}
</script>
`

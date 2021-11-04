<template>
  <b-card-code title="Overlay corner rounding">
    <b-card-text>
      <span>
        By default, the overlay backdrop has square corners. If the content you are wrapping has rounded corners, you
        can use the
      </span>
      <code>rounded</code>
      <span> prop to apply rounding to the overlay's corners to match the obscured content's rounded corners.</span>
    </b-card-text>

    <div>
      <b-button
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        variant="primary"
        @click="show = !show"
      >
        Toggle overlay
      </b-button>

      <b-row class="text-center mt-2">
        <b-col md="6">
          <b-card-text>With rounding</b-card-text>
          <b-overlay
            :show="show"
            class="d-inline-block"
            rounded="circle"
          >
            <b-img
              rounded="circle"
              height="300"
              :src="require('@/assets/images/banner/banner-27.jpg')"
              alt="Image 1"
            />
          </b-overlay>
        </b-col>
        <b-col
          md="6"
          class="mt-1 mt-md-0"
        >
          <b-card-text>Without rounding</b-card-text>
          <b-overlay
            :show="show"
            class="d-inline-block"
          >
            <b-img
              rounded="circle"
              height="300"
              :src="require('@/assets/images/banner/banner-27.jpg')"
              alt="Image 1"
            />
          </b-overlay>
        </b-col>
      </b-row>
    </div>

    <template #code>
      {{ codeCornerRounded }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import {
  BOverlay, BButton, BImg, BRow, BCol, BCardText,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { codeCornerRounded } from './code'

export default {
  components: {
    BCardCode,
    BOverlay,
    BButton,
    BCardText,
    BImg,
    BRow,
    BCol,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      show: false,
      codeCornerRounded,
    }
  },
}
</script>

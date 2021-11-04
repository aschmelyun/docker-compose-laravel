<template>
  <b-card-code title="Left Aligned Media Objects">
    <b-card-text>
      The <code>media object</code> helps build complex and repetitive components where some media is positioned alongside content
      that doesn't wrap around said media. Plus, it does this with only two required classes thanks to flexbox.
    </b-card-text>

    <div class="media-list">
      <b-media vertical-align="top">
        <template #aside>
          <b-img
            :src="require('@/assets/images/portrait/small/avatar-s-3.jpg')"
            blank-color="#ccc"
            width="64"
            alt="placeholder"
          />
        </template>
        <h4 class="media-heading">
          Cookie candy
        </h4>
        <b-card-text class="mb-0">
          Cookie candy dragée marzipan gingerbread pie pudding. Brownie fruitcake wafer bonbon gummi bears apple pie. Brownie lemon drops chocolate cake donut croissant cotton candy.
        </b-card-text>
      </b-media>
      <b-media vertical-align="top">
        <template #aside>
          <b-img
            :src="require('@/assets/images/portrait/small/avatar-s-6.jpg')"
            blank-color="#ccc"
            width="64"
            alt="placeholder"
          />
        </template>
        <h4 class="media-heading">
          Tootsie roll dessert
        </h4>
        <b-card-text class="mb-0">
          Tootsie roll dessert tart candy canes ice cream gingerbread cookie. Jelly jelly-o bear claw bear claw halvah.
          Biscuit icing pastry tootsie roll gingerbread croissant chupa chups.
        </b-card-text>
      </b-media>
      <b-media vertical-align="top">
        <template #aside>
          <b-img
            :src="require('@/assets/images/portrait/small/avatar-s-1.jpg')"
            blank-color="#ccc"
            width="64"
            alt="placeholder"
          />
        </template>
        <h4 class="media-heading">
          Tootsie roll dessert
        </h4>
        <b-card-text class="mb-0">
          Tootsie roll dessert tart candy canes ice cream gingerbread cookie. Jelly jelly-o bear claw bear claw halvah.
          Biscuit icing pastry tootsie roll gingerbread croissant chupa chups.
        </b-card-text>
      </b-media>
    </div>

    <template #code>
      {{ codeLeftAlign }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BMedia, BImg, BCardText } from 'bootstrap-vue'
import { codeLeftAlign } from './code'

export default {
  components: {
    BCardCode,
    BMedia,
    BImg,
    BCardText,
  },
  data() {
    return {
      codeLeftAlign,
    }
  },
}
</script>

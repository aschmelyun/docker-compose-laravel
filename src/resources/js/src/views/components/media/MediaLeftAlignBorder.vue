<template>
  <b-card-code title="Left Aligned Bordered Media">
    <b-card-text>
      <span>Wrap media list using </span>
      <code>.media-bordered</code>
      <span> class for bordered Media Object.</span>
    </b-card-text>

    <div class="media-list media-bordered">
      <b-media>
        <template #aside>
          <b-img
            :src="require('@/assets/images/portrait/small/avatar-s-23.jpg')"
            blank-color="#ccc"
            width="64"
            alt="placeholder"
          />
        </template>
        <h4 class="media-heading">
          Cookie candy
        </h4>
        <b-card-text>
          Cookie candy dragée marzipan gingerbread pie pudding. Brownie fruitcake wafer bonbon gummi bears apple pie.
          Brownie lemon drops chocolate cake donut croissant cotton candy.
        </b-card-text>
      </b-media>

      <b-media>
        <template #aside>
          <b-img
            :src="require('@/assets/images/portrait/small/avatar-s-16.jpg')"
            blank-color="#ccc"
            width="64"
            alt="placeholder"
          />
        </template>
        <h4 class="media-heading">
          Tootsie roll dessert
        </h4>
        <b-card-text>
          Tootsie roll dessert tart candy canes ice cream gingerbread cookie. Jelly jelly-o bear claw bear claw halvah.
          Biscuit icing pastry tootsie roll gingerbread croissant chupa chups.
        </b-card-text>
      </b-media>

      <b-media>
        <template #aside>
          <b-img
            :src="require('@/assets/images/portrait/small/avatar-s-15.jpg')"
            blank-color="#ccc"
            width="64"
            alt="placeholder"
          />
        </template>
        <h4 class="media-heading">
          Tootsie roll dessert
        </h4>
        <b-card-text>
          Tootsie roll dessert tart candy canes ice cream gingerbread cookie. Jelly jelly-o bear claw bear claw halvah.
          Biscuit icing pastry tootsie roll gingerbread croissant chupa chups.
        </b-card-text>
      </b-media>
    </div>

    <template #code>
      {{ codeLeftAlignBorder }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BMedia, BImg, BCardText } from 'bootstrap-vue'
import { codeLeftAlignBorder } from './code'

export default {
  components: {
    BCardCode,
    BMedia,
    BCardText,
    BImg,
  },
  data() {
    return {
      codeLeftAlignBorder,
    }
  },
}
</script>

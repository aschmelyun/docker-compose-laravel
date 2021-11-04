<template>
  <b-card-code title="Right Aligned Bordered Media">
    <b-card-text>
      <span>Wrap media list using </span>
      <code>.media-bordered</code>
      <span> class for bordered Media Object.</span>
    </b-card-text>

    <div class="media-list media-bordered">
      <b-media
        right-align
        class="text-right"
      >
        <template #aside>
          <b-img
            :src="require('@/assets/images/portrait/small/avatar-s-9.jpg')"
            blank-color="#ccc"
            width="64"
            alt="placeholder"
            rounded="circle"
          />
        </template>
        <h4 class="media-heading">
          Chupa chups candy
        </h4>
        <b-card-text>
          Cookie candy dragée marzipan gingerbread pie pudding. Brownie fruitcake wafer bonbon gummi bears apple pie.
          Brownie lemon drops chocolate cake donut croissant cotton candy.
        </b-card-text>
      </b-media>

      <b-media
        right-align
        class="text-right"
      >
        <template #aside>
          <b-img
            :src="require('@/assets/images/portrait/small/avatar-s-14.jpg')"
            blank-color="#ccc"
            width="64"
            alt="placeholder"
            rounded="circle"
          />
        </template>
        <h4 class="media-heading">
          Chocolate pudding
        </h4>
        <b-card-text>
          Jelly chocolate cake lemon drops halvah dragée caramels jelly-o biscuit. Fruitcake jelly beans marzipan sesame
          snaps.Jelly beans cake chocolate cake gummi bears lollipop.
        </b-card-text>
      </b-media>

      <b-media
        right-align
        class="text-right"
      >
        <template #aside>
          <b-img
            :src="require('@/assets/images/portrait/small/avatar-s-21.jpg')"
            blank-color="#ccc"
            width="64"
            alt="placeholder"
            rounded="circle"
          />
        </template>
        <h4 class="media-heading">
          Cotton candy jelly
        </h4>
        <b-card-text>
          Pudding marshmallow cheesecake. Chocolate cake apple pie jelly-o bear claw ice cream sugar plum biscuit. Lemon
          drops brownie biscuit jelly-o biscuit gummies.
        </b-card-text>
      </b-media>
    </div>

    <template #code>
      {{ codeRightAlignBorder }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BMedia, BImg, BCardText } from 'bootstrap-vue'
import { codeRightAlignBorder } from './code'

export default {
  components: {
    BCardCode,
    BMedia,
    BCardText,
    BImg,
  },
  data() {
    return {
      codeRightAlignBorder,
    }
  },
}
</script>

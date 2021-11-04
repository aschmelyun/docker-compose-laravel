<template>
  <b-card-code title="Right Aligned Media With Round Images">
    <b-card-text>
      <span>Change the order of content in media objects by adding </span>
      <code>right-align</code>
      <span> property.</span>
      <span>For image circle </span>
      <code>rounded="circle"</code>
      <span> prop with </span>
      <code>&lt;b-img&gt;.</code>
      <span>Use class </span>
      <code>text-right</code>
      <span> for text right.</span>
    </b-card-text>

    <div class="media-list">
      <b-media
        right-align
        vertical-align="top"
        class="text-right"
      >
        <template #aside>
          <b-img
            :src="require('@/assets/images/portrait/small/avatar-s-10.jpg')"
            blank-color="#ccc"
            width="64"
            alt="placeholder"
            rounded="circle"
          />
        </template>
        <h4 class="media-heading">
          Oat cake
        </h4>
        <b-card-text class="mb-0">
          Oat cake topping oat cake jelly soufflé donut jelly-o tootsie roll. Candy sweet cake. Tiramisu cookie toffee
          donut. Chocolate pie croissant gummi bears muffin dessert chocolate. Generic placeholder image
        </b-card-text>
      </b-media>

      <b-media
        right-align
        vertical-align="top"
        class="text-right"
      >
        <template #aside>
          <b-img
            :src="require('@/assets/images/portrait/small/avatar-s-7.jpg')"
            blank-color="#ccc"
            width="64"
            alt="placeholder"
            rounded="circle"
          />
        </template>
        <h4 class="media-heading">
          Jelly chocolate cake
        </h4>
        <b-card-text class="mb-0">
          Jelly chocolate cake lemon drops halvah dragée caramels jelly-o biscuit. Fruitcake jelly beans marzipan sesame
          snaps.Jelly beans cake chocolate cake gummi bears lollipop.
        </b-card-text>
      </b-media>

      <b-media
        right-align
        vertical-align="top"
        class="text-right"
      >
        <template #aside>
          <b-img
            :src="require('@/assets/images/portrait/small/avatar-s-2.jpg')"
            blank-color="#ccc"
            width="64"
            alt="placeholder"
            rounded="circle"
          />
        </template>
        <h4 class="media-heading">
          Pudding marshmallow
        </h4>
        <b-card-text class="mb-0">
          Pudding marshmallow cheesecake. Chocolate cake apple pie jelly-o bear claw ice cream sugar plum biscuit. Lemon
          drops brownie biscuit jelly-o biscuit gummies.
        </b-card-text>
      </b-media>
    </div>

    <template #code>
      {{ codeRightAlign }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BMedia, BImg, BCardText } from 'bootstrap-vue'
import { codeRightAlign } from './code'

export default {
  components: {
    BCardCode,
    BCardText,
    BMedia,
    BImg,
  },
  data() {
    return {
      codeRightAlign,
    }
  },
}
</script>

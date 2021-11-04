<template>
  <b-card-code title="Vertical align">
    <b-card-text>
      <span>Aside can be vertical aligned using </span>
      <code>vertical-align</code>
      <span> should be either </span>
      <code>top, center</code>
      <span> or </span>
      <code>end</code>
      <span> . Default is </span>
      <code>top</code>.
    </b-card-text>

    <div class="media-list media-bordered">
      <b-media vertical-align="top">
        <template #aside>
          <b-img
            :src="require('@/assets/images/portrait/small/avatar-s-4.jpg')"
            blank-color="#ccc"
            width="64"
            alt="placeholder"
          />
        </template>
        <h5>
          Top Aligned Media
        </h5>
        <b-card-text>
          Chocolate bar apple pie lollipop pastry candy canes. Candy soufflé brownie toffee tootsie roll. Brownie lemon
          drops chocolate cake donut croissant cotton candy ice cream. Chocolate pudding jelly beans powder carrot cake
          pastry. Sweet candy dragée cake brownie cheesecake jelly beans tart lemon drops. Liquorice cake fruitcake
          dragée sesame snaps candy canes biscuit pastry. Cookie caramels brownie carrot cake macaroon brownie pastry.
          Donut powder croissant tootsie roll cake cupcake. Cake tart icing jelly-o ice cream tootsie roll bear claw
          toffee brownie. Sugar plum danish muffin gummi bears. Bonbon chocolate bar candy canes sugar plum pie
          gingerbread wafer chupa chups gummi bears. Carrot cake oat cake jujubes cookie. Marzipan topping jelly brownie
          bear claw. Bonbon gummies fruitcake liquorice tart sesame snaps.
        </b-card-text>
      </b-media>

      <b-media vertical-align="center">
        <template #aside>
          <b-img
            :src="require('@/assets/images/portrait/small/avatar-s-1.jpg')"
            blank-color="#ccc"
            width="64"
            alt="placeholder"
          />
        </template>
        <h5 class="mt-1">
          Middle Aligned Media
        </h5>
        <b-card-text>
          Chocolate bar apple pie lollipop pastry candy canes. Candy soufflé brownie toffee tootsie roll. Brownie lemon
          drops chocolate cake donut croissant cotton candy ice cream. Chocolate pudding jelly beans powder carrot cake
          pastry. Sweet candy dragée cake brownie cheesecake jelly beans tart lemon drops. Liquorice cake fruitcake
          dragée sesame snaps candy canes biscuit pastry. Cookie caramels brownie carrot cake macaroon brownie pastry.
          Donut powder croissant tootsie roll cake cupcake. Cake tart icing jelly-o ice cream tootsie roll bear claw
          toffee brownie. Sugar plum danish muffin gummi bears. Bonbon chocolate bar candy canes sugar plum pie
          gingerbread wafer chupa chups gummi bears. Carrot cake oat cake jujubes cookie. Marzipan topping jelly brownie
          bear claw. Bonbon gummies fruitcake liquorice tart sesame snaps.
        </b-card-text>
      </b-media>

      <b-media vertical-align="bottom">
        <template #aside>
          <b-img
            :src="require('@/assets/images/portrait/small/avatar-s-16.jpg')"
            blank-color="#ccc"
            width="64"
            alt="placeholder"
          />
        </template>
        <h5 class="mt-1">
          Bottom Aligned Media
        </h5>
        <b-card-text class="mb-0">
          Chocolate bar apple pie lollipop pastry candy canes. Candy soufflé brownie toffee tootsie roll. Brownie lemon
          drops chocolate cake donut croissant cotton candy ice cream. Chocolate pudding jelly beans powder carrot cake
          pastry. Sweet candy dragée cake brownie cheesecake jelly beans tart lemon drops. Liquorice cake fruitcake
          dragée sesame snaps candy canes biscuit pastry. Cookie caramels brownie carrot cake macaroon brownie pastry.
          Donut powder croissant tootsie roll cake cupcake. Cake tart icing jelly-o ice cream tootsie roll bear claw
          toffee brownie. Sugar plum danish muffin gummi bears. Bonbon chocolate bar candy canes sugar plum pie
          gingerbread wafer chupa chups gummi bears. Carrot cake oat cake jujubes cookie. Marzipan topping jelly brownie
          bear claw. Bonbon gummies fruitcake liquorice tart sesame snaps.
        </b-card-text>
      </b-media>
    </div>

    <template #code>
      {{ codeVerticalAlign }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BMedia, BImg, BCardText } from 'bootstrap-vue'
import { codeVerticalAlign } from './code'

export default {
  components: {
    BCardCode,
    BCardText,
    BMedia,
    BImg,
  },
  data() {
    return {
      codeVerticalAlign,
    }
  },
}
</script>

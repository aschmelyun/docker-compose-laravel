export const codeLeftAlign = `
<template>
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
</template>

<script>
import { BMedia, BImg } from 'bootstrap-vue'

export default {
  components: {
    BMedia,
    BImg,
  },
}
</script>
`

export const codeLeftAlignBorder = `
<template>
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
</template>

<script>
import { BMedia, BImg } from 'bootstrap-vue'

export default {
  components: {
    BMedia,
    BImg,
  },
}
</script>
`

export const codeNested = `
<template>
  <b-media>
    <template #aside>
      <b-img
        :src="require('@/assets/images/portrait/small/avatar-s-12.jpg')"
        blank-color="#ccc"
        width="64"
        alt="placeholder"
      />
    </template>

    <h5 class="mt-0">
      Media heading
    </h5>
    <b-card-text>
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio,
      vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec
      lacinia congue felis in faucibus.
    </b-card-text>

    <b-media class="mt-3">
      <template #aside>
        <b-img
          :src="require('@/assets/images/portrait/small/avatar-s-13.jpg')"
          blank-color="#ccc"
          width="64"
          alt="placeholder"
        />
      </template>

      <h5 class="mt-0">
        Media heading
      </h5>
      <b-card-text class="mb-0">
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio,
        vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec
        lacinia congue felis in faucibus.
      </b-card-text>
    </b-media>
  </b-media>
</template>

<script>
import { BMedia, BImg } from 'bootstrap-vue'

export default {
  components: {
    BMedia,
    BImg,
  },
}
</script>
`

export const codeRightAlign = `
<template>
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
</template>

<script>
import { BMedia, BImg } from 'bootstrap-vue'

export default {
  components: {
    BMedia,
    BImg,
  }
}
</script>
`

export const codeRightAlignBorder = `
<template>
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
</template>

<script>
import { BMedia, BImg } from 'bootstrap-vue'

export default {
  components: {
    BMedia,
    BImg,
  },
}
</script>
`

export const codeVerticalAlign = `
<template>
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
</template>

<script>
import { BMedia, BImg } from 'bootstrap-vue'

export default {
  components: {
    BMedia,
    BImg,
  },
}
</script>
`

export const codeNoBody = `
<template>
  <b-media no-body>
    <b-media-aside>
      <b-img
        :src="require('@/assets/images/portrait/small/avatar-s-2.jpg')"
        blank-color="#ccc"
        fluid
        alt="placeholder"
      />
    </b-media-aside>

    <b-media-body class="ml-1">
      <h5 class="mt-0">
        Media Title
      </h5>
      <b-card-text>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio,
        vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec
        lacinia congue felis in faucibus.
      </b-card-text>
      <b-card-text class="mb-1">
        Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus.
      </b-card-text>

      <b-media no-body>
        <b-media-aside>
          <b-img
            :src="require('@/assets/images/portrait/small/avatar-s-10.jpg')"
            blank-color="#ccc"
            width="64"
            alt="placeholder"
          />
        </b-media-aside>
        <b-media-body class="ml-1">
          <h5 class="mt-0">
            Nested Media
          </h5>
          <b-card-text>Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</b-card-text>
        </b-media-body>
      </b-media>
    </b-media-body>
  </b-media>
</template>

<script>
import { BMedia, BImg, BMediaAside, BMediaBody } from 'bootstrap-vue'

export default {
  components: {
    BMedia,
    BImg,
    BMediaAside,
    BMediaBody,
  },
}
</script>
`

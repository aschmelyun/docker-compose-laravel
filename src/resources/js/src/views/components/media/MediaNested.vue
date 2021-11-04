<template>
  <b-card-code title="Nested Media">
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

    <template #code>
      {{ codeNested }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BMedia, BImg, BCardText } from 'bootstrap-vue'
import { codeNested } from './code'

export default {
  components: {
    BCardCode,
    BMedia,
    BCardText,
    BImg,
  },
  data() {
    return {
      codeNested,
    }
  },
}
</script>

<template>
  <b-card-code title="No body (with sub-components)">
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

    <template #code>
      {{ codeNoBody }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import {
  BMedia, BImg, BMediaAside, BMediaBody, BCardText,
} from 'bootstrap-vue'
import { codeNoBody } from './code'

export default {
  components: {
    BCardCode,
    BMedia,
    BImg,
    BMediaAside,
    BCardText,
    BMediaBody,
  },
  data() {
    return {
      codeNoBody,
    }
  },
}
</script>

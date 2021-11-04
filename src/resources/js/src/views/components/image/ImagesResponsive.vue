<template>
  <b-card-code title="Responsive images">
    <b-card-text>
      <span>Images in BootstrapVue can be made responsive with the </span>
      <code>fluid</code>
      <span> prop (which sets </span>
      <code>max-width: 100%; height: auto;</code>
      <span>
        via CSS classes) so that it scales with the parent element - up to the maximum native width of the image.
      </span>
    </b-card-text>

    <div>
      <h6>Small image with <code>fluid</code>:</h6>
      <b-img
        :src="require('@/assets/images/slider/03.jpg')"
        fluid
        alt="Fluid image"
      />

      <h6 class="my-1">
        Small image with <code>fluid-grow</code>:
      </h6>
      <b-img
        :src="require('@/assets/images/slider/03.jpg')"
        fluid-grow
        alt="Fluid-grow image"
      />
    </div>

    <template #code>
      {{ codeResponsive }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BImg, BCardText } from 'bootstrap-vue'
import { codeResponsive } from './code'

export default {
  components: {
    BCardCode,
    BCardText,
    // eslint-disable-next-line vue/no-unused-components
    BImg,
  },
  data() {
    return {
      codeResponsive,
    }
  },
}
</script>

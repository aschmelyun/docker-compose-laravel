<template>
  <b-card-code title="Lazy loaded images">
    <b-card-text>
      <span>Use our complementary </span>
      <code>&lt;b-img-lazy&gt;</code>
      <span> image component (based on </span>
      <code>&lt;b-img&gt;</code>
      <span>) to lazy load images as they are scrolled into view (or within </span>
      <code>offset</code>
      <span> pixels of the viewport).</span>
    </b-card-text>

    <b-img-lazy
      :src="require('@/assets/images/banner/banner-6.jpg')"
      fluid
      class="w-100"
    />

    <template #code>
      {{ codeLazy }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BImgLazy, BCardText } from 'bootstrap-vue'
import { codeLazy } from './code'

export default {
  components: {
    BCardCode,
    // eslint-disable-next-line vue/no-unused-components
    BImgLazy,
    BCardText,
  },
  data() {
    return {
      codeLazy,
    }
  },
}
</script>

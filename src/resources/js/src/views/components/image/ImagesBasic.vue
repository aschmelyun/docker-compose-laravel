<template>
  <b-card-code title="Images">
    <b-card-text>
      <span>Documentation and examples for opting images (via </span>
      <code>&lt;b-img&gt;</code>
      <span>
        component) into responsive behavior (so they never become larger than their parent elements), optionally adding
        lightweight styles to them — all via props.
      </span>
    </b-card-text>

    <b-img
      :src="require('@/assets/images/banner/banner-6.jpg')"
      fluid
      class="w-100"
      alt="Responsive image"
    />

    <template #code>
      {{ codeBasic }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BImg, BCardText } from 'bootstrap-vue'
import { codeBasic } from './code'

export default {
  components: {
    BCardCode,
    BCardText,
    // eslint-disable-next-line vue/no-unused-components
    BImg,
  },
  data() {
    return {
      codeBasic,
    }
  },
}
</script>

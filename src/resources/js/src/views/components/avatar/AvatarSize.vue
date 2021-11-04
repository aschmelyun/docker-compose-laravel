<template>
  <b-card-code title="Sizes">
    <b-card-text class="mb-0">
      <span>Use the prop</span>
      <code>size</code>
      <span> to specify sizes </span>
      <code>sm, md</code>
      <span>and </span>
      <code>lg</code>
      <span> default to </span>
      <code>1.5em, 2.5em</code>
      <span> and </span>
      <code>3.5em</code>
    </b-card-text>

    <div class="demo-inline-spacing">
      <b-avatar
        size="sm"
        :src="require('@/assets/images/portrait/small/avatar-s-20.jpg')"
      />
      <b-avatar
        :src="require('@/assets/images/portrait/small/avatar-s-20.jpg')"
      />
      <b-avatar
        size="lg"
        :src="require('@/assets/images/portrait/small/avatar-s-20.jpg')"
      />
      <b-avatar
        size="70px"
        :src="require('@/assets/images/portrait/small/avatar-s-20.jpg')"
      />
    </div>

    <template #code>
      {{ codeSizes }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BAvatar, BCardText } from 'bootstrap-vue'
import { codeSizes } from './code'

export default {
  components: {
    BCardCode,
    BAvatar,
    BCardText,
  },
  data() {
    return {
      codeSizes,
    }
  },
}
</script>

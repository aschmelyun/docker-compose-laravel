<template>
  <b-card class="card-congratulation-medal">
    <h5>Congratulations 🎉 John!</h5>
    <b-card-text class="font-small-3">
      You have won gold medal
    </b-card-text>
    <h3 class="mb-75 mt-4">
      <b-link>$48.9k</b-link>
    </h3>
    <b-button
      v-ripple.400="'rgba(255, 255, 255, 0.15)'"
      variant="primary"
    >
      View Sales
    </b-button>
    <b-img
      :src="require('@/assets/images/illustration/badge.svg')"
      class="congratulation-medal"
      alt="Medal Pic"
    />
  </b-card>
</template>

<script>
import {
  BCard, BCardText, BLink, BButton, BImg,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BCard,
    BCardText,
    BLink,
    BImg,
    BButton,
  },
  directives: {
    Ripple,
  },
}
</script>

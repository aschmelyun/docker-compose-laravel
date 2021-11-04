<template>
  <b-card-code
    id="tour-card"
    title="Tour"
  >
    <b-button
      v-ripple.400="'rgba(113, 102, 240, 0.15)'"
      variant="outline-primary"
      @click="tourStart"
    >
      Start Tour
    </b-button>

    <app-tour :steps="steps" />

    <template #code>
      {{ codeTour }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import { BButton } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import AppTour from '@core/components/app-tour/AppTour.vue'
import { codeTour } from './code'

export default {
  name: 'ShepherdExample',
  components: {
    BCardCode,
    BButton,
    AppTour,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      codeTour,
      steps: [
        {
          target: '#tour-card',
          header: {
            title: 'Card',
          },
          content: 'This card contains demo for the tour.',
        },
        {
          target: '#tour-card .icon-code',
          header: {
            title: 'View demo Source',
          },
          content:
            'If you ever find your self confused, you can click on this code icon to check the source of current demo.',
        },
        {
          target: '#tour-card .btn',
          header: {
            title: 'Trigger Tour',
          },
          content: 'You can click on this button to trigger the tour.',
        },
      ],
    }
  },
  methods: {
    // tour steps
    tourStart() {
      this.$tours.vuexyTour.start()
    },
  },
}
</script>

<style lang="scss">
@import '~@core/scss/vue/libs/tour.scss';
</style>
